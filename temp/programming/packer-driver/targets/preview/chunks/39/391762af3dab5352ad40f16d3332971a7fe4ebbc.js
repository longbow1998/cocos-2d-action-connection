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
        var freeGlobal = require('./_freeGlobal');
        /** Detect free variable `self`. */


        var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
        /** Used as a reference to the global object. */

        var root = freeGlobal || freeSelf || Function('return this')();
        module.exports = root; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_freeGlobal': _req
      }));
    }
  };
});
//# sourceMappingURL=391762af3dab5352ad40f16d3332971a7fe4ebbc.js.map