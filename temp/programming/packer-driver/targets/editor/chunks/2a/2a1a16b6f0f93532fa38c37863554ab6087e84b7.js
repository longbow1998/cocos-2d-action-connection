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
        var MapCache = require('./_MapCache'),
            setCacheAdd = require('./_setCacheAdd'),
            setCacheHas = require('./_setCacheHas');
        /**
         *
         * Creates an array cache object to store unique values.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */


        function SetCache(values) {
          var index = -1,
              length = values == null ? 0 : values.length;
          this.__data__ = new MapCache();

          while (++index < length) {
            this.add(values[index]);
          }
        } // Add methods to `SetCache`.


        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        module.exports = SetCache; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_MapCache': _req,
        './_setCacheAdd': _req0,
        './_setCacheHas': _req1
      }));
    }
  };
});
//# sourceMappingURL=2a1a16b6f0f93532fa38c37863554ab6087e84b7.js.map