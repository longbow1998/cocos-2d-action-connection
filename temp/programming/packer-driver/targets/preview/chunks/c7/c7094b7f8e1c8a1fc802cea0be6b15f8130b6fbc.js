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
        var assocIndexOf = require('./_assocIndexOf');
        /** Used for built-in method references. */


        var arrayProto = Array.prototype;
        /** Built-in value references. */

        var splice = arrayProto.splice;
        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */

        function listCacheDelete(key) {
          var data = this.__data__,
              index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }

          var lastIndex = data.length - 1;

          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }

          --this.size;
          return true;
        }

        module.exports = listCacheDelete; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_assocIndexOf': _req
      }));
    }
  };
});
//# sourceMappingURL=c7094b7f8e1c8a1fc802cea0be6b15f8130b6fbc.js.map