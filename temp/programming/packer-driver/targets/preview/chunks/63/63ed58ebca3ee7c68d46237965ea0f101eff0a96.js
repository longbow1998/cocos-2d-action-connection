System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var asciiToArray = require('./_asciiToArray'),
            hasUnicode = require('./_hasUnicode'),
            unicodeToArray = require('./_unicodeToArray');
        /**
         * Converts `string` to an array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the converted array.
         */


        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }

        module.exports = stringToArray; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_asciiToArray': _req,
        './_hasUnicode': _req0,
        './_unicodeToArray': _req1
      }));
    }
  };
});
//# sourceMappingURL=63ed58ebca3ee7c68d46237965ea0f101eff0a96.js.map