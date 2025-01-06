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

        /**
         * Converts an ASCII `string` to an array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the converted array.
         */
        function asciiToArray(string) {
          return string.split('');
        }

        module.exports = asciiToArray; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=94cd2a268d27fd8b34cbb8338af1a8dd451969db.js.map