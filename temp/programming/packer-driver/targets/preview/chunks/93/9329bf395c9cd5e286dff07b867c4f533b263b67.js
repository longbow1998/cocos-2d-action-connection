System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/LoadingOutlined", "classnames", "rc-switch", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsLoadingOutlined) {
      _req3 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcSwitch2) {
      _req5 = _rcSwitch2.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req11 = _unresolved_6.__cjsMetaURL;
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

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcSwitch = _interopRequireDefault(require("rc-switch"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _wave = _interopRequireDefault(require("../_util/wave"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Switch = /*#__PURE__*/React.forwardRef(function (_a, ref) {
          var _classNames;

          var customizePrefixCls = _a.prefixCls,
              customizeSize = _a.size,
              customDisabled = _a.disabled,
              loading = _a.loading,
              _a$className = _a.className,
              className = _a$className === void 0 ? '' : _a$className,
              props = __rest(_a, ["prefixCls", "size", "disabled", "loading", "className"]);

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])('checked' in props || !('value' in props), 'Switch', '`value` is not a valid prop, do you mean `checked`?') : void 0;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var size = React.useContext(_SizeContext["default"]); // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = (customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled) || loading;
          var prefixCls = getPrefixCls('switch', customizePrefixCls);
          var loadingIcon = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-handle")
          }, loading && /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
            className: "".concat(prefixCls, "-loading-icon")
          }));
          var classes = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-small"), (customizeSize || size) === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement(_wave["default"], {
            insertExtraNode: true
          }, /*#__PURE__*/React.createElement(_rcSwitch["default"], (0, _extends2["default"])({}, props, {
            prefixCls: prefixCls,
            className: classes,
            disabled: mergedDisabled,
            ref: ref,
            loadingIcon: loadingIcon
          })));
        });
        Switch.__ANT_SWITCH = true;

        if (process.env.NODE_ENV !== 'production') {
          Switch.displayName = 'Switch';
        }

        var _default = Switch;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/LoadingOutlined': _req3,
        'classnames': _req4,
        'rc-switch': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../config-provider/DisabledContext': _req8,
        '../config-provider/SizeContext': _req9,
        '../_util/warning': _req10,
        '../_util/wave': _req11
      }));
    }
  };
});
//# sourceMappingURL=9329bf395c9cd5e286dff07b867c4f533b263b67.js.map