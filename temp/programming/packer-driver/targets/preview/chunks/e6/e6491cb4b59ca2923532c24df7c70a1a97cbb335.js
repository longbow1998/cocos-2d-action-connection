System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getMotion, __cjsMetaURL;

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
        exports.getMotion = getMotion;

        function getMotion(mode, motion, defaultMotions) {
          if (motion) {
            return motion;
          }

          if (defaultMotions) {
            return defaultMotions[mode] || defaultMotions.other;
          }

          return undefined;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getMotion = module.exports.getMotion;
      }, {});
    }
  };
});
//# sourceMappingURL=e6491cb4b59ca2923532c24df7c70a1a97cbb335.js.map