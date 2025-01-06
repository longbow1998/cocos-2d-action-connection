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
        var arrayFilter = require('./_arrayFilter'),
            stubArray = require('./stubArray');
        /** Used for built-in method references. */


        var objectProto = Object.prototype;
        /** Built-in value references. */

        var propertyIsEnumerable = objectProto.propertyIsEnumerable;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeGetSymbols = Object.getOwnPropertySymbols;
        /**
         * Creates an array of the own enumerable symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */

        var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
          if (object == null) {
            return [];
          }

          object = Object(object);
          return arrayFilter(nativeGetSymbols(object), function (symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        module.exports = getSymbols; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_arrayFilter': _req,
        './stubArray': _req0
      }));
    }
  };
});
//# sourceMappingURL=9dae08f2136dc993f87d83cb2e1724ab02c2fe09.js.map