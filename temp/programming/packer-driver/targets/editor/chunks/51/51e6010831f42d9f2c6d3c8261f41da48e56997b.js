System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "classnames", "rc-motion", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req5 = _rcMotion2.__cjsMetaURL;
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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = ErrorList;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireWildcard(require("rc-motion"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _motion = _interopRequireDefault(require("../_util/motion"));

        var _context = require("./context");

        var _useDebounce = _interopRequireDefault(require("./hooks/useDebounce"));

        var EMPTY_LIST = [];

        function toErrorEntity(error, errorStatus, prefix) {
          var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          return {
            key: typeof error === 'string' ? error : "".concat(prefix, "-").concat(index),
            error: error,
            errorStatus: errorStatus
          };
        }

        function ErrorList(_ref) {
          var help = _ref.help,
              helpStatus = _ref.helpStatus,
              _ref$errors = _ref.errors,
              errors = _ref$errors === void 0 ? EMPTY_LIST : _ref$errors,
              _ref$warnings = _ref.warnings,
              warnings = _ref$warnings === void 0 ? EMPTY_LIST : _ref$warnings,
              rootClassName = _ref.className,
              fieldId = _ref.fieldId,
              onVisibleChanged = _ref.onVisibleChanged;

          var _React$useContext = React.useContext(_context.FormItemPrefixContext),
              prefixCls = _React$useContext.prefixCls;

          var _React$useContext2 = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext2.getPrefixCls;

          var baseClassName = "".concat(prefixCls, "-item-explain");
          var rootPrefixCls = getPrefixCls(); // We have to debounce here again since somewhere use ErrorList directly still need no shaking
          // ref: https://github.com/ant-design/ant-design/issues/36336

          var debounceErrors = (0, _useDebounce["default"])(errors);
          var debounceWarnings = (0, _useDebounce["default"])(warnings);
          var fullKeyList = React.useMemo(function () {
            if (help !== undefined && help !== null) {
              return [toErrorEntity(help, helpStatus, 'help')];
            }

            return [].concat((0, _toConsumableArray2["default"])(debounceErrors.map(function (error, index) {
              return toErrorEntity(error, 'error', 'error', index);
            })), (0, _toConsumableArray2["default"])(debounceWarnings.map(function (warning, index) {
              return toErrorEntity(warning, 'warning', 'warning', index);
            })));
          }, [help, helpStatus, debounceErrors, debounceWarnings]);
          var helpProps = {};

          if (fieldId) {
            helpProps.id = "".concat(fieldId, "_help");
          }

          return /*#__PURE__*/React.createElement(_rcMotion["default"], {
            motionDeadline: _motion["default"].motionDeadline,
            motionName: "".concat(rootPrefixCls, "-show-help"),
            visible: !!fullKeyList.length,
            onVisibleChanged: onVisibleChanged
          }, function (holderProps) {
            var holderClassName = holderProps.className,
                holderStyle = holderProps.style;
            return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, helpProps, {
              className: (0, _classnames["default"])(baseClassName, holderClassName, rootClassName),
              style: holderStyle,
              role: "alert"
            }), /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, (0, _extends2["default"])({
              keys: fullKeyList
            }, _motion["default"], {
              motionName: "".concat(rootPrefixCls, "-show-help-item"),
              component: false
            }), function (itemProps) {
              var key = itemProps.key,
                  error = itemProps.error,
                  errorStatus = itemProps.errorStatus,
                  itemClassName = itemProps.className,
                  itemStyle = itemProps.style;
              return /*#__PURE__*/React.createElement("div", {
                key: key,
                className: (0, _classnames["default"])(itemClassName, (0, _defineProperty2["default"])({}, "".concat(baseClassName, "-").concat(errorStatus), errorStatus)),
                style: itemStyle
              }, error);
            }));
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        'classnames': _req4,
        'rc-motion': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../_util/motion': _req8,
        './context': _req9,
        './hooks/useDebounce': _req10
      }));
    }
  };
});
//# sourceMappingURL=51e6010831f42d9f2c6d3c8261f41da48e56997b.js.map