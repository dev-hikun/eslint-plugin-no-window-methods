const windowMethods = [
  "alert",
  "atob",
  "blur",
  "btoa",
  "cancelAnimationFrame",
  "cancelIdleCallback",
  "captureEvents",
  "clearInterval",
  "clearTimeout",
  "close",
  "confirm",
  "createImageBitmap",
  "fetch",
  "find",
  "focus",
  "getComputedStyle",
  "getSelection",
  "matchMedia",
  "moveBy",
  "moveTo",
  "open",
  "postMessage",
  "print",
  "prompt",
  "queueMicrotask",
  "releaseEvents",
  "reportError",
  "requestAnimationFrame",
  "requestIdleCallback",
  "resizeBy",
  "resizeTo",
  "scroll",
  "scrollBy",
  "scrollTo",
  "setInterval",
  "setTimeout",
  "stop",
];

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "disallow variable declarations with names of window methods",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (windowMethods.includes(node.id.name)) {
          context.report({
            node,
            message: `Variable name '${node.id.name}' is a function in the window object.`,
          });
        }
      },
    };
  },
};
