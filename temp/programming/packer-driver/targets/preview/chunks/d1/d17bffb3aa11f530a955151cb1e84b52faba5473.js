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
        var mapCacheClear = require('./_mapCacheClear'),
            mapCacheDelete = require('./_mapCacheDelete'),
            mapCacheGet = require('./_mapCacheGet'),
            mapCacheHas = require('./_mapCacheHas'),
            mapCacheSet = require('./_mapCacheSet');
        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */


        function MapCache(entries) {
          var index = -1,
              length = entries == null ? 0 : entries.length;
          this.clear();

          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        } // Add methods to `MapCache`.


        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype['delete'] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        module.exports = MapCache; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_mapCacheClear': _req,
        './_mapCacheDelete': _req0,
        './_mapCacheGet': _req1,
        './_mapCacheHas': _req2,
        './_mapCacheSet': _req3
      }));
    }
  };
});
//# sourceMappingURL=d17bffb3aa11f530a955151cb1e84b52faba5473.js.map