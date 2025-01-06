System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, __cjsMetaURL;

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
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var baseRepeat = require('./_baseRepeat'),
            baseToString = require('./_baseToString'),
            castSlice = require('./_castSlice'),
            hasUnicode = require('./_hasUnicode'),
            stringSize = require('./_stringSize'),
            stringToArray = require('./_stringToArray');
        /* Built-in method references for those with the same name as other `lodash` methods. */


        var nativeCeil = Math.ceil;
        /**
         * Creates the padding for `string` based on `length`. The `chars` string
         * is truncated if the number of characters exceeds `length`.
         *
         * @private
         * @param {number} length The padding length.
         * @param {string} [chars=' '] The string used as padding.
         * @returns {string} Returns the padding for `string`.
         */

        function createPadding(length, chars) {
          chars = chars === undefined ? ' ' : baseToString(chars);
          var charsLength = chars.length;

          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }

          var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
        }

        module.exports = createPadding; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_baseRepeat': _req,
        './_baseToString': _req0,
        './_castSlice': _req1,
        './_hasUnicode': _req2,
        './_stringSize': _req3,
        './_stringToArray': _req4
      }));
    }
  };
});
//# sourceMappingURL=4303532fdd98f0da3e6f74cbd66bfbc4764210c7.js.map