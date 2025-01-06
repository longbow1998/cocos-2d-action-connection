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

        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeFloor = Math.floor;
        /**
         * The base implementation of `_.repeat` which doesn't coerce arguments.
         *
         * @private
         * @param {string} string The string to repeat.
         * @param {number} n The number of times to repeat the string.
         * @returns {string} Returns the repeated string.
         */

        function baseRepeat(string, n) {
          var result = '';

          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
          } // Leverage the exponentiation by squaring algorithm for a faster repeat.
          // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.


          do {
            if (n % 2) {
              result += string;
            }

            n = nativeFloor(n / 2);

            if (n) {
              string += string;
            }
          } while (n);

          return result;
        }

        module.exports = baseRepeat; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=f42e8edaaf14879b7f6b59bb8a7d039070da6be4.js.map