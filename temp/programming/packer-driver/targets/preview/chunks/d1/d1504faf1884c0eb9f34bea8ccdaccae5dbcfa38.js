System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /**
         * Converts `map` to its key-value pairs.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the key-value pairs.
         */
        function mapToArray(map) {
          var index = -1,
              result = Array(map.size);
          map.forEach(function (value, key) {
            result[++index] = [key, value];
          });
          return result;
        }

        module.exports = mapToArray; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=d1504faf1884c0eb9f34bea8ccdaccae5dbcfa38.js.map