System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Symbol = require('./_Symbol'),
            arrayMap = require('./_arrayMap'),
            isArray = require('./isArray'),
            isSymbol = require('./isSymbol');
        /** Used as references for various `Number` constants. */


        var INFINITY = 1 / 0;
        /** Used to convert symbols to primitives and strings. */

        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;
        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */

        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == 'string') {
            return value;
          }

          if (isArray(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + '';
          }

          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
          }

          var result = value + '';
          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
        }

        module.exports = baseToString; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_Symbol': _req,
        './_arrayMap': _req0,
        './isArray': _req1,
        './isSymbol': _req2
      }));
    }
  };
});
//# sourceMappingURL=f091d176661f7df1b9c3e729f0114eef14315f07.js.map