System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getRenderPropValue, __cjsMetaURL;

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
        exports.getRenderPropValue = void 0;

        var getRenderPropValue = function getRenderPropValue(propValue) {
          if (!propValue) {
            return null;
          }

          if (typeof propValue === 'function') {
            return propValue();
          }

          return propValue;
        };

        exports.getRenderPropValue = getRenderPropValue; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getRenderPropValue = module.exports.getRenderPropValue;
      }, {});
    }
  };
});
//# sourceMappingURL=67925f4fe12ee30c4423d570294e0c157a2cb6c6.js.map