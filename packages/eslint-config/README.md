# @pixelwolfhq/eslint-config

### Installation

`npm i @pixelwolfhq/eslint-config --save-dev`

### Usage

Edit `.eslintrc.json`:

```json
{
  "extends": "@pixelwolfhq/eslint-config",
  "settings": {
    "import/internal-regex": "^components/|^utils/"
  }
}
```

### Script in package.json

```json
"scripts": {
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\""
},
```
