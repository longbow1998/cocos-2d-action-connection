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

        /** Used to compose unicode character classes. */
        var rsAstralRange = '\\ud800-\\udfff',
            rsComboMarksRange = '\\u0300-\\u036f',
            reComboHalfMarksRange = '\\ufe20-\\ufe2f',
            rsComboSymbolsRange = '\\u20d0-\\u20ff',
            rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
            rsVarRange = '\\ufe0e\\ufe0f';
        /** Used to compose unicode capture groups. */

        var rsZWJ = '\\u200d';
        /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */

        var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
        /**
         * Checks if `string` contains Unicode symbols.
         *
         * @private
         * @param {string} string The string to inspect.
         * @returns {boolean} Returns `true` if a symbol is found, else `false`.
         */

        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }

        module.exports = hasUnicode; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=15814d558f93ba8c9c1d657c7309540a63105394.js.map