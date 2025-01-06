System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var hashClear = require('./_hashClear'),
            hashDelete = require('./_hashDelete'),
            hashGet = require('./_hashGet'),
            hashHas = require('./_hashHas'),
            hashSet = require('./_hashSet');
        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */


        function Hash(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        } // Add methods to `Hash`.


        Hash.prototype.clear = hashClear;
        Hash.prototype['delete'] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        module.exports = Hash; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_hashClear': _req,
        './_hashDelete': _req0,
        './_hashGet': _req1,
        './_hashHas': _req2,
        './_hashSet': _req3
      }));
    }
  };
});
//# sourceMappingURL=4a1ee8bfc00c5ac44a6363d098b8c5969b2e3267.js.map