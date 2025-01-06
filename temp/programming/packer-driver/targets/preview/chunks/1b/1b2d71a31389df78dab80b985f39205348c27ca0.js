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

        /** Used to match a single whitespace character. */
        var reWhitespace = /\s/;
        /**
         * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
         * character of `string`.
         *
         * @private
         * @param {string} string The string to inspect.
         * @returns {number} Returns the index of the last non-whitespace character.
         */

        function trimmedEndIndex(string) {
          var index = string.length;

          while (index-- && reWhitespace.test(string.charAt(index))) {}

          return index;
        }

        module.exports = trimmedEndIndex; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=1b2d71a31389df78dab80b985f39205348c27ca0.js.map