const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');

function searchForMdFiles(directory, depth = 5) {
  if (depth < 0) {
    return []; // Return an empty array if we've reached the maximum recursion depth
  }
  const files = fs.readdirSync(directory); // Get the list of files in the current directory
  let mdFiles = [];
  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileStats = fs.statSync(filePath);
    if (fileStats.isDirectory()) {
      // Recursively search subdirectories
      mdFiles = mdFiles.concat(searchForMdFiles(filePath, depth - 1));
    } else if (path.extname(file) === '.md') {
      mdFiles.push(filePath);
    }
  }
  return mdFiles;
}

function renderMdFiles(mdFiles) {
    const md = require('markdown-it')({
        highlight: function (code, options) {
          const { language, ignoreIllegals } = options;
          if (language && hljs.getLanguage(language)) {
            try {
              return '<pre class="hljs"><code>' +
                hljs.highlight(language, code, ignoreIllegals).value +
                '</code></pre>';
            } catch (__) {}
          }
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(code) + '</code></pre>';
        }
      });
  
    const renderedFiles = [];
  
    // Read the template file
    const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');
  
    for (const file of mdFiles) {
      const fileContents = fs.readFileSync(file, 'utf8');
      const html = md.render(fileContents);
  
      // Use the template to wrap the HTML content
      const wrappedHtml = template.replace('{{content}}', html);
  
      const outFile = path.join('public', file.replace(/^md\//, '').replace(/\.md$/, '.html'));
      const outDir = path.dirname(outFile);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, wrappedHtml);
      console.log(`Rendered ${file} to ${outFile}`);
      renderedFiles.push({ file: file, outFile: outFile });
    }
  
    return renderedFiles;
  }
  

function createIndexHtml(renderMdFiles){
    let links = '';
    renderMdFiles.forEach((path) =>{
        const outFile = path.outFile;
        const hyperlink = outFile.replace('public/', '');
        const hyperlinkText = outFile.replace('public/', '').slice(0, -5);

        links += `<a href="${hyperlink}">${hyperlinkText}</a><br/>`;
    });

    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Chkkn notes</title>
      <link rel="stylesheet" type="text/css" href="/css/style.css">
    </head>
    <body>
      <h2>notes</h2>
      <form>
        <input type="text" placeholder="Search...">
        <button type="submit">Search</button><br>
        <select id="search-results"></select>
      </form>

        ${links}
      <script src="https://unpkg.com/fuse.js/dist/fuse.min.js"></script>
      <script src="fuzzy.js"></script>
    </body>
    </html>`;
    
    fs.writeFile('public/index.html', html, (err) => {
        if (err) throw err;
        console.log('index.html created successfully!');
    });
}

function copyFuzzyJs(){
  // Construct the source and destination file paths
  const sourceFilePath = path.join(__dirname, 'fuzzy.js');
  const destFilePath = path.join(__dirname, 'public', 'fuzzy.js');

  // Copy the file to the public directory
  fs.copyFile(sourceFilePath, destFilePath, (err) => {
    if (err) {
      console.error(`Failed to copy file: ${err}`);
      return;
    }
  });
}

function copyStyleCss(){
  // Construct the source and destination file paths
  const sourceFilePath = path.join(__dirname, 'css', 'style.css');
  const destFilePath = path.join(__dirname, 'public', 'css', 'style.css');

  // Copy the file to the public directory
  fs.copyFile(sourceFilePath, destFilePath, (err) => {
    if (err) {
      console.error(`Failed to copy file: ${err}`);
      return;
    }
  });
}

  
function main() {
  const directoryPath = 'md';
  const mdFiles = searchForMdFiles(directoryPath);
  const renderedFiles = renderMdFiles(mdFiles);
  createIndexHtml(renderedFiles);
  copyFuzzyJs();
  copyStyleCss();
}

main();
