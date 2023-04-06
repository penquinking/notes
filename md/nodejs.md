# Node.js

## Yarn

Yarn uses NPM registry. `yarn` difference to `npm` is the way the packages are extracted on the local machine.

```
yarn init
yarn add
yarn remove
```

```
# install all dependencies defined in package.json
yarn install
```
## CLI commands
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
  }
}
```
```
npm run start
yarn start
```
