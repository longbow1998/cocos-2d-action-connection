System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _SizeContextProvider, __cjsMetaURL;

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
        exports["default"] = exports.SizeContextProvider = void 0;

        var React = _interopRequireWildcard(require("react"));

        var SizeContext = /*#__PURE__*/React.createContext('default');

        var SizeContextProvider = function SizeContextProvider(_ref) {
          var children = _ref.children,
              size = _ref.size;
          return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
            return /*#__PURE__*/React.createElement(SizeContext.Provider, {
              value: size || originSize
            }, children);
          });
        };

        exports.SizeContextProvider = SizeContextProvider;
        var _default = SizeContext;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _SizeContextProvider = module.exports.SizeContextProvider;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=466970232bd8fa0486d63f72d1747c604077d809.js.map