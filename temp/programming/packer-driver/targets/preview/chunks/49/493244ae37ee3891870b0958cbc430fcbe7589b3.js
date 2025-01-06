System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var isPrototype = require('./_isPrototype'),
            nativeKeys = require('./_nativeKeys');
        /** Used for built-in method references. */


        var objectProto = Object.prototype;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */

        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }

          var result = [];

          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != 'constructor') {
              result.push(key);
            }
          }

          return result;
        }

        module.exports = baseKeys; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_isPrototype': _req,
        './_nativeKeys': _req0
      }));
    }
  };
});
//# sourceMappingURL=493244ae37ee3891870b0958cbc430fcbe7589b3.js.map