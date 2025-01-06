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
        var baseTrim = require('./_baseTrim'),
            isObject = require('./isObject'),
            isSymbol = require('./isSymbol');
        /** Used as references for various `Number` constants. */


        var NAN = 0 / 0;
        /** Used to detect bad signed hexadecimal string values. */

        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        /** Used to detect binary string values. */

        var reIsBinary = /^0b[01]+$/i;
        /** Used to detect octal string values. */

        var reIsOctal = /^0o[0-7]+$/i;
        /** Built-in method references without a dependency on `root`. */

        var freeParseInt = parseInt;
        /**
         * Converts `value` to a number.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to process.
         * @returns {number} Returns the number.
         * @example
         *
         * _.toNumber(3.2);
         * // => 3.2
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3.2');
         * // => 3.2
         */

        function toNumber(value) {
          if (typeof value == 'number') {
            return value;
          }

          if (isSymbol(value)) {
            return NAN;
          }

          if (isObject(value)) {
            var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
            value = isObject(other) ? other + '' : other;
          }

          if (typeof value != 'string') {
            return value === 0 ? value : +value;
          }

          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }

        module.exports = toNumber; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_baseTrim': _req,
        './isObject': _req0,
        './isSymbol': _req1
      }));
    }
  };
});
//# sourceMappingURL=024c58af52bd24c3e0aaabae0700c434c802bae5.js.map