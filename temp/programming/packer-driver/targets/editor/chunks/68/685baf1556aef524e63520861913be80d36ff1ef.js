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
        var getNative = require('./_getNative'),
            root = require('./_root');
        /* Built-in method references that are verified to be native. */


        var Set = getNative(root, 'Set');
        module.exports = Set; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_getNative': _req,
        './_root': _req0
      }));
    }
  };
});
//# sourceMappingURL=685baf1556aef524e63520861913be80d36ff1ef.js.map