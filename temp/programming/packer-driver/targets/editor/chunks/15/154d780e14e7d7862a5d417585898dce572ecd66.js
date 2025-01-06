System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _Overlay, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req6 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req7 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req8 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req9 = _unresolved_8.__cjsMetaURL;
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
        exports.Overlay = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var _button2 = require("../button/button");

        var _ActionButton = _interopRequireDefault(require("../_util/ActionButton"));

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _default = _interopRequireDefault(require("../locale/default"));

        var _getRenderPropValue = require("../_util/getRenderPropValue");

        var _configProvider = require("../config-provider");

        var Overlay = function Overlay(props) {
          var prefixCls = props.prefixCls,
              okButtonProps = props.okButtonProps,
              cancelButtonProps = props.cancelButtonProps,
              title = props.title,
              cancelText = props.cancelText,
              okText = props.okText,
              okType = props.okType,
              icon = props.icon,
              _props$showCancel = props.showCancel,
              showCancel = _props$showCancel === void 0 ? true : _props$showCancel,
              close = props.close,
              onConfirm = props.onConfirm,
              onCancel = props.onCancel;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Popconfirm",
            defaultLocale: _default["default"].Popconfirm
          }, function (contextLocale) {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-inner-content")
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-message")
            }, icon && /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-message-icon")
            }, icon), /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-message-title")
            }, (0, _getRenderPropValue.getRenderPropValue)(title))), /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-buttons")
            }, showCancel && /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
              onClick: onCancel,
              size: "small"
            }, cancelButtonProps), cancelText !== null && cancelText !== void 0 ? cancelText : contextLocale.cancelText), /*#__PURE__*/React.createElement(_ActionButton["default"], {
              buttonProps: (0, _extends2["default"])((0, _extends2["default"])({
                size: 'small'
              }, (0, _button2.convertLegacyProps)(okType)), okButtonProps),
              actionFn: onConfirm,
              close: close,
              prefixCls: getPrefixCls('btn'),
              quitOnNullishReturnValue: true,
              emitEvent: true
            }, okText !== null && okText !== void 0 ? okText : contextLocale.okText)));
          });
        };

        exports.Overlay = Overlay; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Overlay = module.exports.Overlay;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../button': _req3,
        '../button/button': _req4,
        '../_util/ActionButton': _req5,
        '../locale-provider/LocaleReceiver': _req6,
        '../locale/default': _req7,
        '../_util/getRenderPropValue': _req8,
        '../config-provider': _req9
      }));
    }
  };
});
//# sourceMappingURL=154d780e14e7d7862a5d417585898dce572ecd66.js.map