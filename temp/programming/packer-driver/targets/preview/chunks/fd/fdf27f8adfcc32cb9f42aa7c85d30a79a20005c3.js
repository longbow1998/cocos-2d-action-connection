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
        var overArg = require('./_overArg');
        /* Built-in method references for those with the same name as other `lodash` methods. */


        var nativeKeys = overArg(Object.keys, Object);
        module.exports = nativeKeys; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_overArg': _req
      }));
    }
  };
});
//# sourceMappingURL=fdf27f8adfcc32cb9f42aa7c85d30a79a20005c3.js.map