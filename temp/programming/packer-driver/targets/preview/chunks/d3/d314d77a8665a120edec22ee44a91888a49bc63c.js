System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _DisabledContextProvider, __cjsMetaURL;

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
        exports["default"] = exports.DisabledContextProvider = void 0;

        var React = _interopRequireWildcard(require("react"));

        var DisabledContext = /*#__PURE__*/React.createContext(false);

        var DisabledContextProvider = function DisabledContextProvider(_ref) {
          var children = _ref.children,
              disabled = _ref.disabled;
          var originDisabled = React.useContext(DisabledContext);
          return /*#__PURE__*/React.createElement(DisabledContext.Provider, {
            value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
          }, children);
        };

        exports.DisabledContextProvider = DisabledContextProvider;
        var _default = DisabledContext;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _DisabledContextProvider = module.exports.DisabledContextProvider;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=d314d77a8665a120edec22ee44a91888a49bc63c.js.map