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

        var Simple = function Simple() {
          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('empty-img-simple');
          return /*#__PURE__*/React.createElement("svg", {
            className: prefixCls,
            width: "64",
            height: "41",
            viewBox: "0 0 64 41",
            xmlns: "http://www.w3.org/2000/svg"
          }, /*#__PURE__*/React.createElement("g", {
            transform: "translate(0 1)",
            fill: "none",
            fillRule: "evenodd"
          }, /*#__PURE__*/React.createElement("ellipse", {
            className: "".concat(prefixCls, "-ellipse"),
            cx: "32",
            cy: "33",
            rx: "32",
            ry: "7"
          }), /*#__PURE__*/React.createElement("g", {
            className: "".concat(prefixCls, "-g"),
            fillRule: "nonzero"
          }, /*#__PURE__*/React.createElement("path", {
            d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          }), /*#__PURE__*/React.createElement("path", {
            d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
            className: "".concat(prefixCls, "-path")
          }))));
        };

        var _default = Simple;
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
//# sourceMappingURL=5b94ab074c4fda24acfbe34ab877491d1f7acb33.js.map