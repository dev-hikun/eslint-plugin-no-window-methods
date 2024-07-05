# eslint-plugin-no-window-methods

An ESLint plugin that disallows variable declarations using the names of methods on the `window` object. This helps prevent potential conflicts and unexpected behaviors in your JavaScript code.

## Installation

You can install the plugin using npm:

```bash
npm install eslint-plugin-no-window-methods --save-dev
```

## Usage

To use this plugin, add it to your ESLint configuration file (`.eslintrc.js`, `.eslintrc.json`, etc.).

### Example `.eslintrc.js` Configuration

```javascript
module.exports = {
    "plugins": [
        "no-window-methods"
    ],
    "rules": {
        "no-window-methods/no-window-methods": "error"
    }
};
```
### Example Code

```javascript
/* eslint no-window-methods/no-window-methods: "error" */
const alert = "test";  // This will cause an ESLint error
const myVar = "test";  // This is fine
```

## Rule Details

This rule disallows variable names that match any of the methods on the `window` object. The following is a list of disallowed names:

- alert
- atob
- blur
- btoa
- cancelAnimationFrame
- cancelIdleCallback
- captureEvents
- clearInterval
- clearTimeout
- close
- confirm
- createImageBitmap
- fetch
- focus
- getComputedStyle
- getSelection
- matchMedia
- moveBy
- moveTo
- open
- postMessage
- print
- prompt
- queueMicrotask
- releaseEvents
- reportError
- requestAnimationFrame
- requestIdleCallback
- resizeBy
- resizeTo
- scroll
- scrollBy
- scrollTo
- setInterval
- setTimeout
- stop

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create a new Pull Request.

## Acknowledgements

Inspired by the need to maintain clean and conflict-free JavaScript code by preventing the use of `window` object method names as variable names.
