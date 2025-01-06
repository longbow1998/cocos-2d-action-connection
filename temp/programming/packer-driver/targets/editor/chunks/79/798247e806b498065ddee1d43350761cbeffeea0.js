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
        var asciiSize = require('./_asciiSize'),
            hasUnicode = require('./_hasUnicode'),
            unicodeSize = require('./_unicodeSize');
        /**
         * Gets the number of symbols in `string`.
         *
         * @private
         * @param {string} string The string to inspect.
         * @returns {number} Returns the string size.
         */


        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }

        module.exports = stringSize; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_asciiSize': _req,
        './_hasUnicode': _req0,
        './_unicodeSize': _req1
      }));
    }
  };
});
//# sourceMappingURL=798247e806b498065ddee1d43350761cbeffeea0.js.map