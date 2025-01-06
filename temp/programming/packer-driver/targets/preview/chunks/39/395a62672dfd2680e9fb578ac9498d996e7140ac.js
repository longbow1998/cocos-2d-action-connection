System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "classnames", "rc-collapse", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_rcCollapse2) {
      _req4 = _rcCollapse2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
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

        var _rcCollapse = _interopRequireDefault(require("rc-collapse"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var CollapsePanel = function CollapsePanel(props) {
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('disabled' in props), 'Collapse.Panel', '`disabled` is deprecated. Please use `collapsible="disabled"` instead.') : void 0;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              _props$showArrow = props.showArrow,
              showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
          var prefixCls = getPrefixCls('collapse', customizePrefixCls);
          var collapsePanelClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-no-arrow"), !showArrow), className);
          return /*#__PURE__*/React.createElement(_rcCollapse["default"].Panel, (0, _extends2["default"])({}, props, {
            prefixCls: prefixCls,
            className: collapsePanelClassName
          }));
        };

        var _default = CollapsePanel;
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
        'rc-collapse': _req4,
        'react': _req5,
        '../config-provider': _req6,
        '../_util/warning': _req7
      }));
    }
  };
});
//# sourceMappingURL=395a62672dfd2680e9fb578ac9498d996e7140ac.js.map