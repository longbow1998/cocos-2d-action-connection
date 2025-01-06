System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var trimmedEndIndex = require('./_trimmedEndIndex');
        /** Used to match leading whitespace. */


        var reTrimStart = /^\s+/;
        /**
         * The base implementation of `_.trim`.
         *
         * @private
         * @param {string} string The string to trim.
         * @returns {string} Returns the trimmed string.
         */

        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
        }

        module.exports = baseTrim; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_trimmedEndIndex': _req
      }));
    }
  };
});
//# sourceMappingURL=74f5f55aa70b83af4d6ec379d1dcd29a53a73c5f.js.map