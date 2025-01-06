System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../../config-provider");

        var _LocaleReceiver = _interopRequireDefault(require("../../locale-provider/LocaleReceiver"));

        var _default2 = _interopRequireDefault(require("../../locale/default"));

        var _ConfirmDialog = _interopRequireDefault(require("../ConfirmDialog"));

        var HookModal = function HookModal(_ref, ref) {
          var afterClose = _ref.afterClose,
              config = _ref.config;

          var _React$useState = React.useState(true),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              open = _React$useState2[0],
              setOpen = _React$useState2[1];

          var _React$useState3 = React.useState(config),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              innerConfig = _React$useState4[0],
              setInnerConfig = _React$useState4[1];

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              direction = _React$useContext.direction,
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('modal');
          var rootPrefixCls = getPrefixCls();

          var close = function close() {
            setOpen(false);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var triggerCancel = args.some(function (param) {
              return param && param.triggerCancel;
            });

            if (innerConfig.onCancel && triggerCancel) {
              innerConfig.onCancel.apply(innerConfig, [function () {}].concat((0, _toConsumableArray2["default"])(args.slice(1))));
            }
          };

          React.useImperativeHandle(ref, function () {
            return {
              destroy: close,
              update: function update(newConfig) {
                setInnerConfig(function (originConfig) {
                  return (0, _extends2["default"])((0, _extends2["default"])({}, originConfig), newConfig);
                });
              }
            };
          });
          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Modal",
            defaultLocale: _default2["default"].Modal
          }, function (contextLocale) {
            return /*#__PURE__*/React.createElement(_ConfirmDialog["default"], (0, _extends2["default"])({
              prefixCls: prefixCls,
              rootPrefixCls: rootPrefixCls
            }, innerConfig, {
              close: close,
              open: open,
              afterClose: afterClose,
              okText: innerConfig.okText || (innerConfig.okCancel ? contextLocale.okText : contextLocale.justOkText),
              direction: direction,
              cancelText: innerConfig.cancelText || contextLocale.cancelText
            }));
          });
        };

        var _default = /*#__PURE__*/React.forwardRef(HookModal);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        '../../config-provider': _req5,
        '../../locale-provider/LocaleReceiver': _req6,
        '../../locale/default': _req7,
        '../ConfirmDialog': _req8
      }));
    }
  };
});
//# sourceMappingURL=68f7357ddec13ee657cbe8af349fb29532cf15c7.js.map