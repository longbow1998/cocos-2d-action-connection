System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _easeInOutCubic, __cjsMetaURL;

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
        exports.easeInOutCubic = easeInOutCubic; // eslint-disable-next-line import/prefer-default-export

        function easeInOutCubic(t, b, c, d) {
          var cc = c - b;
          t /= d / 2;

          if (t < 1) {
            return cc / 2 * t * t * t + b;
          } // eslint-disable-next-line no-return-assign


          return cc / 2 * ((t -= 2) * t * t + 2) + b;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _easeInOutCubic = module.exports.easeInOutCubic;
      }, {});
    }
  };
});
//# sourceMappingURL=fb78d11de330c56a6096341c5e0fa0f97619bfa5.js.map