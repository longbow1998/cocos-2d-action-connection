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
        var baseProperty = require('./_baseProperty');
        /**
         * Gets the size of an ASCII `string`.
         *
         * @private
         * @param {string} string The string inspect.
         * @returns {number} Returns the string size.
         */


        var asciiSize = baseProperty('length');
        module.exports = asciiSize; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_baseProperty': _req
      }));
    }
  };
});
//# sourceMappingURL=4a241be443e7a8a9e8ce6edcd6ed445dff19d11a.js.map