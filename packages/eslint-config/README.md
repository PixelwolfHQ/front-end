# @pixelwolf/eslint-config

## Installation

`npm i @pixelwolf/eslint-config --save-dev`

## Usage

Edit `.eslintrc.json`:

```json
{
  "extends": "@pixelwolf/eslint-config",
  "settings": {
    "import/internal-regex": "^components/|^utils/"
  }
}
```

#### Script in package.json

```json
"scripts": {
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\""
},
```
