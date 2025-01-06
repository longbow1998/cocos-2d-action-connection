System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "react", "."], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_2) {
      _req4 = _2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = Item;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _ = require(".");

        function Item(_ref) {
          var className = _ref.className,
              direction = _ref.direction,
              index = _ref.index,
              marginDirection = _ref.marginDirection,
              children = _ref.children,
              split = _ref.split,
              wrap = _ref.wrap;

          var _React$useContext = React.useContext(_.SpaceContext),
              horizontalSize = _React$useContext.horizontalSize,
              verticalSize = _React$useContext.verticalSize,
              latestIndex = _React$useContext.latestIndex,
              supportFlexGap = _React$useContext.supportFlexGap;

          var style = {};

          if (!supportFlexGap) {
            if (direction === 'vertical') {
              if (index < latestIndex) {
                style = {
                  marginBottom: horizontalSize / (split ? 2 : 1)
                };
              }
            } else {
              style = (0, _extends2["default"])((0, _extends2["default"])({}, index < latestIndex && (0, _defineProperty2["default"])({}, marginDirection, horizontalSize / (split ? 2 : 1))), wrap && {
                paddingBottom: verticalSize
              });
            }
          }

          if (children === null || children === undefined) {
            return null;
          }

          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: className,
            style: style
          }, children), index < latestIndex && split && /*#__PURE__*/React.createElement("span", {
            className: "".concat(className, "-split"),
            style: style
          }, split));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'react': _req3,
        '.': _req4
      }));
    }
  };
});
//# sourceMappingURL=c0ed6fe12da06aa8e15d181291e1059585dc38b6.js.map