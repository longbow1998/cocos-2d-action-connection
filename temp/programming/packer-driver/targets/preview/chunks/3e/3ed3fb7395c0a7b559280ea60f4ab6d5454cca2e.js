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
        var nativeCreate = require('./_nativeCreate');
        /** Used to stand-in for `undefined` hash values. */


        var HASH_UNDEFINED = '__lodash_hash_undefined__';
        /** Used for built-in method references. */

        var objectProto = Object.prototype;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */

        function hashGet(key) {
          var data = this.__data__;

          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }

          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        module.exports = hashGet; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_nativeCreate': _req
      }));
    }
  };
});
//# sourceMappingURL=3ed3fb7395c0a7b559280ea60f4ab6d5454cca2e.js.map