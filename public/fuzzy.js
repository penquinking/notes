const searchInput = document.querySelector('input[type="text"]');
const searchResults = document.querySelector('#search-results');

const options = {
  keys: ['textContent']
};

const notes = Array.from(document.querySelectorAll('a'));
const fuse = new Fuse(notes, options);

const displayResults = (results) => {
  searchResults.innerHTML = '';
  results.forEach((result) => {
    const link = document.createElement('option');
    link.setAttribute('value', result.item.href);
    link.textContent = result.item.textContent;
    searchResults.appendChild(link);
  });
};

searchInput.addEventListener('input', (event) => {
  event.preventDefault();
  const results = fuse.search(searchInput.value);
  displayResults(results);
});

document.addEventListener('click', (event) => {
  if (event.target.matches('#search-results option')) {
    window.location.href = event.target.value;
  }
});
