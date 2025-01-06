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
        var baseTimes = require('./_baseTimes'),
            isArguments = require('./isArguments'),
            isArray = require('./isArray'),
            isBuffer = require('./isBuffer'),
            isIndex = require('./_isIndex'),
            isTypedArray = require('./isTypedArray');
        /** Used for built-in method references. */


        var objectProto = Object.prototype;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */

        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
              isArg = !isArr && isArguments(value),
              isBuff = !isArr && !isArg && isBuffer(value),
              isType = !isArr && !isArg && !isBuff && isTypedArray(value),
              skipIndexes = isArr || isArg || isBuff || isType,
              result = skipIndexes ? baseTimes(value.length, String) : [],
              length = result.length;

          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
            key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
            isIndex(key, length)))) {
              result.push(key);
            }
          }

          return result;
        }

        module.exports = arrayLikeKeys; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_baseTimes': _req,
        './isArguments': _req0,
        './isArray': _req1,
        './isBuffer': _req2,
        './_isIndex': _req3,
        './isTypedArray': _req4
      }));
    }
  };
});
//# sourceMappingURL=1ac7e02de49c681aa725d363e0f6dc9c6e2900b9.js.map