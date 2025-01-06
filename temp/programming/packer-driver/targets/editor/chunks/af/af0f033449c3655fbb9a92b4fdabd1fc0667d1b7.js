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
        var Symbol = require('./_Symbol'),
            getRawTag = require('./_getRawTag'),
            objectToString = require('./_objectToString');
        /** `Object#toString` result references. */


        var nullTag = '[object Null]',
            undefinedTag = '[object Undefined]';
        /** Built-in value references. */

        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */

        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }

          return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
        }

        module.exports = baseGetTag; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_Symbol': _req,
        './_getRawTag': _req0,
        './_objectToString': _req1
      }));
    }
  };
});
//# sourceMappingURL=af0f033449c3655fbb9a92b4fdabd1fc0667d1b7.js.map