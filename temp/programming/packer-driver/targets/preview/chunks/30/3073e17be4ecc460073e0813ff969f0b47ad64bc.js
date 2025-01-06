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
        var SetCache = require('./_SetCache'),
            arraySome = require('./_arraySome'),
            cacheHas = require('./_cacheHas');
        /** Used to compose bitmasks for value comparisons. */


        var COMPARE_PARTIAL_FLAG = 1,
            COMPARE_UNORDERED_FLAG = 2;
        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `array` and `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */

        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              arrLength = array.length,
              othLength = other.length;

          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          } // Check that cyclic values are equal.


          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);

          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }

          var index = -1,
              result = true,
              seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
          stack.set(array, other);
          stack.set(other, array); // Ignore non-index properties.

          while (++index < arrLength) {
            var arrValue = array[index],
                othValue = other[index];

            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }

            if (compared !== undefined) {
              if (compared) {
                continue;
              }

              result = false;
              break;
            } // Recursively compare arrays (susceptible to call stack limits).


            if (seen) {
              if (!arraySome(other, function (othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result = false;
              break;
            }
          }

          stack['delete'](array);
          stack['delete'](other);
          return result;
        }

        module.exports = equalArrays; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_SetCache': _req,
        './_arraySome': _req0,
        './_cacheHas': _req1
      }));
    }
  };
});
//# sourceMappingURL=3073e17be4ecc460073e0813ff969f0b47ad64bc.js.map