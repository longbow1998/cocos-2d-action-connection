System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _RadioOptionTypeContextProvider, _RadioOptionTypeContext, _RadioGroupContextProvider, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = exports.RadioOptionTypeContextProvider = exports.RadioOptionTypeContext = exports.RadioGroupContextProvider = void 0;

        var React = _interopRequireWildcard(require("react"));

        var RadioGroupContext = /*#__PURE__*/React.createContext(null);
        var RadioGroupContextProvider = RadioGroupContext.Provider;
        exports.RadioGroupContextProvider = RadioGroupContextProvider;
        var _default = RadioGroupContext;
        exports["default"] = _default;
        var RadioOptionTypeContext = /*#__PURE__*/React.createContext(null);
        exports.RadioOptionTypeContext = RadioOptionTypeContext;
        var RadioOptionTypeContextProvider = RadioOptionTypeContext.Provider;
        exports.RadioOptionTypeContextProvider = RadioOptionTypeContextProvider; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _RadioOptionTypeContextProvider = module.exports.RadioOptionTypeContextProvider;
        _RadioOptionTypeContext = module.exports.RadioOptionTypeContext;
        _RadioGroupContextProvider = module.exports.RadioGroupContextProvider;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=c83241cf8617991c6ef48fb46377858f4d7cbdde.js.map