System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /** Used for built-in method references. */
        var funcProto = Function.prototype;
        /** Used to resolve the decompiled source of functions. */

        var funcToString = funcProto.toString;
        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */

        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}

            try {
              return func + '';
            } catch (e) {}
          }

          return '';
        }

        module.exports = toSource; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=fb3bf0595506c81abccee60ea1ac80bd8574b936.js.map