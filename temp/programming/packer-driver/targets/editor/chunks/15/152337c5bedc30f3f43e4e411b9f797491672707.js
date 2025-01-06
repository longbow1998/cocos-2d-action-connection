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
        var listCacheClear = require('./_listCacheClear'),
            listCacheDelete = require('./_listCacheDelete'),
            listCacheGet = require('./_listCacheGet'),
            listCacheHas = require('./_listCacheHas'),
            listCacheSet = require('./_listCacheSet');
        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */


        function ListCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        } // Add methods to `ListCache`.


        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype['delete'] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        module.exports = ListCache; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_listCacheClear': _req,
        './_listCacheDelete': _req0,
        './_listCacheGet': _req1,
        './_listCacheHas': _req2,
        './_listCacheSet': _req3
      }));
    }
  };
});
//# sourceMappingURL=152337c5bedc30f3f43e4e411b9f797491672707.js.map