System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = void 0;

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var BreadcrumbSeparator = function BreadcrumbSeparator(_ref) {
          var children = _ref.children;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('breadcrumb');
          return /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-separator")
          }, children || '/');
        };

        BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
        var _default = BreadcrumbSeparator;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0,
        '../config-provider': _req1
      }));
    }
  };
});
//# sourceMappingURL=c23f6b3c73e7238ba0ddf8a768f96e97e93a0c65.js.map