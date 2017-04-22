module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "globals": {
      "__DEV__": true
    },
    "rules": {
      // `.jsx` extension cannot be used with React Native
      // https://github.com/airbnb/javascript/issues/982
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
    },
    "parser": "babel-eslint",
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [
            ".js",
            ".android.js",
            ".ios.js"
          ]
        }
      }
    }
};
