# @pixelwolfhq/prettier-config

### Installation

`npm i @pixelwolfhq/prettier-config --save-dev`

### Usage

On `.prettierrc.js` file add:

```json
module.exports = require("@pixelwolfhq/prettier-config");
```

### Script in package.json

```json
"scripts": {
  "prettier": "prettier \"src/**/*.+(ts|tsx|js|jsx|json|yml|yaml|md|mdx)\" --write"
},
```
