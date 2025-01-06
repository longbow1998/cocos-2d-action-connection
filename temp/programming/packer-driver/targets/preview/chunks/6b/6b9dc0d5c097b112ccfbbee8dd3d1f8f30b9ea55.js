System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _WHEEL_MAX_SCALE_RATIO, _MIN_SCALE, _MAX_SCALE, _BASE_SCALE_RATIO, __cjsMetaURL;

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
        exports.WHEEL_MAX_SCALE_RATIO = exports.MIN_SCALE = exports.MAX_SCALE = exports.BASE_SCALE_RATIO = void 0;
        /** Minimum scale */

        var MIN_SCALE = 1;
        /** Maximum Scale */

        exports.MIN_SCALE = MIN_SCALE;
        var MAX_SCALE = 50;
        /** Scale the ratio base */

        exports.MAX_SCALE = MAX_SCALE;
        var BASE_SCALE_RATIO = 1;
        /** The maximum zoom ratio when the mouse zooms in, adjustable */

        exports.BASE_SCALE_RATIO = BASE_SCALE_RATIO;
        var WHEEL_MAX_SCALE_RATIO = 0.2;
        exports.WHEEL_MAX_SCALE_RATIO = WHEEL_MAX_SCALE_RATIO; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _WHEEL_MAX_SCALE_RATIO = module.exports.WHEEL_MAX_SCALE_RATIO;
        _MIN_SCALE = module.exports.MIN_SCALE;
        _MAX_SCALE = module.exports.MAX_SCALE;
        _BASE_SCALE_RATIO = module.exports.BASE_SCALE_RATIO;
      }, {});
    }
  };
});
//# sourceMappingURL=6b9dc0d5c097b112ccfbbee8dd3d1f8f30b9ea55.js.map