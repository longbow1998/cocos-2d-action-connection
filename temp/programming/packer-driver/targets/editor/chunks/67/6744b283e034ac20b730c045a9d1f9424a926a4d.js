System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _isPlatformMac, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.isPlatformMac = isPlatformMac;
        /* istanbul ignore file */

        function isPlatformMac() {
          return /(mac\sos|macintosh)/i.test(navigator.appVersion);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isPlatformMac = module.exports.isPlatformMac;
      }, {});
    }
  };
});
//# sourceMappingURL=6744b283e034ac20b730c045a9d1f9424a926a4d.js.map