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

        var rsAstral = '[' + rsAstralRange + ']',
            rsCombo = '[' + rsComboRange + ']',
            rsFitz = '\\ud83c[\\udffb-\\udfff]',
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
            rsNonAstral = '[^' + rsAstralRange + ']',
            rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            rsZWJ = '\\u200d';
        /** Used to compose unicode regexes. */

        var reOptMod = rsModifier + '?',
            rsOptVar = '[' + rsVarRange + ']?',
            rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
            rsSeq = rsOptVar + reOptMod + rsOptJoin,
            rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
        /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

        var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
        /**
         * Converts a Unicode `string` to an array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the converted array.
         */

        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }

        module.exports = unicodeToArray; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=bfacbc631153f5a8304b77ade8c8acaa11175ede.js.map