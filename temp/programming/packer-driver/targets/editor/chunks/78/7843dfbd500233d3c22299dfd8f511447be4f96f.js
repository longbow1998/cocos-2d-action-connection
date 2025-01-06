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
        var ListCache = require('./_ListCache'),
            Map = require('./_Map'),
            MapCache = require('./_MapCache');
        /** Used as the size to enable large array optimizations. */


        var LARGE_ARRAY_SIZE = 200;
        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */

        function stackSet(key, value) {
          var data = this.__data__;

          if (data instanceof ListCache) {
            var pairs = data.__data__;

            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }

            data = this.__data__ = new MapCache(pairs);
          }

          data.set(key, value);
          this.size = data.size;
          return this;
        }

        module.exports = stackSet; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_ListCache': _req,
        './_Map': _req0,
        './_MapCache': _req1
      }));
    }
  };
});
//# sourceMappingURL=7843dfbd500233d3c22299dfd8f511447be4f96f.js.map