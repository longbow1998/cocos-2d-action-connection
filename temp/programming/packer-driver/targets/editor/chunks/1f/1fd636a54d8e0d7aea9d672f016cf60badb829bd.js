System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = contains;

        function contains(root, n) {
          if (!root) {
            return false;
          } // Use native if support


          if (root.contains) {
            return root.contains(n);
          } // `document.contains` not support with IE11


          var node = n;

          while (node) {
            if (node === root) {
              return true;
            }

            node = node.parentNode;
          }

          return false;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=1fd636a54d8e0d7aea9d672f016cf60badb829bd.js.map