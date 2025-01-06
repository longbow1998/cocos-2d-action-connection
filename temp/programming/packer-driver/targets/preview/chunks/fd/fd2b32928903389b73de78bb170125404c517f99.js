System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "classnames", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _utils = require("./utils");

        var Ribbon = function Ribbon(_ref) {
          var _classNames;

          var className = _ref.className,
              customizePrefixCls = _ref.prefixCls,
              style = _ref.style,
              color = _ref.color,
              children = _ref.children,
              text = _ref.text,
              _ref$placement = _ref.placement,
              placement = _ref$placement === void 0 ? 'end' : _ref$placement;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
          var colorInPreset = (0, _utils.isPresetColor)(color);
          var ribbonCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-placement-").concat(placement), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-color-").concat(color), colorInPreset), _classNames), className);
          var colorStyle = {};
          var cornerColorStyle = {};

          if (color && !colorInPreset) {
            colorStyle.background = color;
            cornerColorStyle.color = color;
          }

          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-wrapper")
          }, children, /*#__PURE__*/React.createElement("div", {
            className: ribbonCls,
            style: (0, _extends2["default"])((0, _extends2["default"])({}, colorStyle), style)
          }, /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-text")
          }, text), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-corner"),
            style: cornerColorStyle
          })));
        };

        var _default = Ribbon;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'classnames': _req3,
        'react': _req4,
        '../config-provider': _req5,
        './utils': _req6
      }));
    }
  };
});
//# sourceMappingURL=fd2b32928903389b73de78bb170125404c517f99.js.map