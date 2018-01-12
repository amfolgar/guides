---
id: styleguide-eslint
title: ESLint
---

```json
{
  "extends": "airbnb",
  "rules": {
    "no-extra-parens": 0, // Interferes with jsx
    "no-underscore-dangle": 0, // Mongo _id
    "react/prefer-stateless-function": 1, // We'll choose manually
    "react/prop-types": 1, // Slows down while prototyping / experimenting
    "max-len": 1, // Sometimes necessary to have long strings and not risk whitespace
    "no-param-reassign": [2, { "props": false }], // Allows assignment of new properties
    "import/named": 2 // Ensure named imports correspond to a named export in the remote file
  },
  "settings": {
    "import/resolver": "meteor"
  }
}
```
