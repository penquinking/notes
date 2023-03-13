# Typescript

```
# Start a typescript project
yarn init
yarn add --dev typescript
```

```
# tsconfig.json
{
  "compilerOptions": {
    "module": "CommonJS",
    "target": "ES2022",
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "outDir": "./built",
    "sourceMap": false
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
  ]
}
```

```
# package.json
{
  "name": "name",
  "version": "1.0.0",
  "description": "description",
  "main": "index.js",
  "author": "parker901",
  "license": "MIT",
  "scripts": {
    "compile": "tsc"
  },
  "devDependencies": {
    "typescript": "^4.7.4"
  }
}
```
