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
        var getAllKeys = require('./_getAllKeys');
        /** Used to compose bitmasks for value comparisons. */


        var COMPARE_PARTIAL_FLAG = 1;
        /** Used for built-in method references. */

        var objectProto = Object.prototype;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */

        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
              objProps = getAllKeys(object),
              objLength = objProps.length,
              othProps = getAllKeys(other),
              othLength = othProps.length;

          if (objLength != othLength && !isPartial) {
            return false;
          }

          var index = objLength;

          while (index--) {
            var key = objProps[index];

            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          } // Check that cyclic values are equal.


          var objStacked = stack.get(object);
          var othStacked = stack.get(other);

          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }

          var result = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;

          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
                othValue = other[key];

            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            } // Recursively compare objects (susceptible to call stack limits).


            if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result = false;
              break;
            }

            skipCtor || (skipCtor = key == 'constructor');
          }

          if (result && !skipCtor) {
            var objCtor = object.constructor,
                othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

            if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
              result = false;
            }
          }

          stack['delete'](object);
          stack['delete'](other);
          return result;
        }

        module.exports = equalObjects; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_getAllKeys': _req
      }));
    }
  };
});
//# sourceMappingURL=cd397c98def73337da60314092f67c7dee0d18d5.js.map