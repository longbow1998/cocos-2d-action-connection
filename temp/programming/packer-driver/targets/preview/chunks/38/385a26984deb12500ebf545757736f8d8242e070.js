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
         * Converts `set` to an array of its values.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the values.
         */
        function setToArray(set) {
          var index = -1,
              result = Array(set.size);
          set.forEach(function (value) {
            result[++index] = value;
          });
          return result;
        }

        module.exports = setToArray; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=385a26984deb12500ebf545757736f8d8242e070.js.map