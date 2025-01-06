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

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Divider = function Divider(props) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$type = props.type,
              type = _props$type === void 0 ? 'horizontal' : _props$type,
              _props$orientation = props.orientation,
              orientation = _props$orientation === void 0 ? 'center' : _props$orientation,
              orientationMargin = props.orientationMargin,
              className = props.className,
              children = props.children,
              dashed = props.dashed,
              plain = props.plain,
              restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "children", "dashed", "plain"]);

          var prefixCls = getPrefixCls('divider', customizePrefixCls);
          var orientationPrefix = orientation.length > 0 ? "-".concat(orientation) : orientation;
          var hasChildren = !!children;
          var hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
          var hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
          var classString = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-text"), hasChildren), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-text").concat(orientationPrefix), hasChildren), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dashed"), !!dashed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-plain"), !!plain), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-no-default-orientation-margin-left"), hasCustomMarginLeft), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-no-default-orientation-margin-right"), hasCustomMarginRight), _classNames), className);
          var innerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, hasCustomMarginLeft && {
            marginLeft: orientationMargin
          }), hasCustomMarginRight && {
            marginRight: orientationMargin
          }); // Warning children not work in vertical mode

          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!children || type !== 'vertical', 'Divider', '`children` not working in `vertical` mode.') : void 0;
          }

          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
            className: classString
          }, restProps, {
            role: "separator"
          }), children && type !== 'vertical' && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-inner-text"),
            style: innerStyle
          }, children));
        };

        var _default = Divider;
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
        '../_util/warning': _req6
      }));
    }
  };
});
//# sourceMappingURL=17168e40c0262ee2f7c37ce0c00b33d67b71502f.js.map