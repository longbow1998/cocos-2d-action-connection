System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/DownOutlined", "@ant-design/icons/UpOutlined", "classnames", "rc-input-number", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsDownOutlined) {
      _req5 = _antDesignIconsDownOutlined.__cjsMetaURL;
    }, function (_antDesignIconsUpOutlined) {
      _req6 = _antDesignIconsUpOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcInputNumber2) {
      _req8 = _rcInputNumber2.__cjsMetaURL;
    }, function (_react) {
      _req9 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req14 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req15 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req16 = _unresolved_8.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));

        var _UpOutlined = _interopRequireDefault(require("@ant-design/icons/UpOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcInputNumber = _interopRequireDefault(require("rc-input-number"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _context = require("../form/context");

        var _Compact = require("../space/Compact");

        var _reactNode = require("../_util/reactNode");

        var _statusUtils = require("../_util/statusUtils");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var size = React.useContext(_SizeContext["default"]);

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              focused = _React$useState2[0],
              setFocus = _React$useState2[1];

          var inputRef = React.useRef(null);
          React.useImperativeHandle(ref, function () {
            return inputRef.current;
          });

          var className = props.className,
              customizeSize = props.size,
              customDisabled = props.disabled,
              customizePrefixCls = props.prefixCls,
              addonBefore = props.addonBefore,
              addonAfter = props.addonAfter,
              prefix = props.prefix,
              _props$bordered = props.bordered,
              bordered = _props$bordered === void 0 ? true : _props$bordered,
              readOnly = props.readOnly,
              customStatus = props.status,
              controls = props.controls,
              others = __rest(props, ["className", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "bordered", "readOnly", "status", "controls"]);

          var prefixCls = getPrefixCls('input-number', customizePrefixCls);

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames;

          var upIcon = /*#__PURE__*/React.createElement(_UpOutlined["default"], {
            className: "".concat(prefixCls, "-handler-up-inner")
          });
          var downIcon = /*#__PURE__*/React.createElement(_DownOutlined["default"], {
            className: "".concat(prefixCls, "-handler-down-inner")
          });
          var controlsTemp = typeof controls === 'boolean' ? controls : undefined;

          if ((0, _typeof2["default"])(controls) === 'object') {
            upIcon = typeof controls.upIcon === 'undefined' ? upIcon : /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-handler-up-inner")
            }, controls.upIcon);
            downIcon = typeof controls.downIcon === 'undefined' ? downIcon : /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-handler-down-inner")
            }, controls.downIcon);
          }

          var _useContext = (0, React.useContext)(_context.FormItemInputContext),
              hasFeedback = _useContext.hasFeedback,
              contextStatus = _useContext.status,
              isFormItemInput = _useContext.isFormItemInput,
              feedbackIcon = _useContext.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
          var mergeSize = compactSize || customizeSize || size; // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
          var inputNumberClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), mergeSize === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), mergeSize === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus), compactItemClassnames, className);
          var element = /*#__PURE__*/React.createElement(_rcInputNumber["default"], (0, _extends2["default"])({
            ref: inputRef,
            disabled: mergedDisabled,
            className: inputNumberClass,
            upHandler: upIcon,
            downHandler: downIcon,
            prefixCls: prefixCls,
            readOnly: readOnly,
            controls: controlsTemp
          }, others));

          if (prefix != null || hasFeedback) {
            var _classNames2;

            var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), props.disabled), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(className), !(addonBefore || addonAfter) && className), _classNames2));
            element = /*#__PURE__*/React.createElement("div", {
              className: affixWrapperCls,
              style: props.style,
              onMouseUp: function onMouseUp() {
                return inputRef.current.focus();
              }
            }, prefix && /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-prefix")
            }, prefix), (0, _reactNode.cloneElement)(element, {
              style: null,
              value: props.value,
              onFocus: function onFocus(event) {
                var _a;

                setFocus(true);
                (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
              },
              onBlur: function onBlur(event) {
                var _a;

                setFocus(false);
                (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
              }
            }), hasFeedback && /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-suffix")
            }, feedbackIcon));
          }

          if (addonBefore != null || addonAfter != null) {
            var _classNames4;

            var wrapperClassName = "".concat(prefixCls, "-group");
            var addonClassName = "".concat(wrapperClassName, "-addon");
            var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("div", {
              className: addonClassName
            }, addonBefore) : null;
            var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("div", {
              className: addonClassName
            }, addonAfter) : null;
            var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName, (0, _defineProperty2["default"])({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
            var mergedGroupClassName = (0, _classnames["default"])("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback), className);
            element = /*#__PURE__*/React.createElement("div", {
              className: mergedGroupClassName,
              style: props.style
            }, /*#__PURE__*/React.createElement("div", {
              className: mergedWrapperClassName
            }, addonBeforeNode && /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
              status: true,
              override: true
            }, addonBeforeNode)), (0, _reactNode.cloneElement)(element, {
              style: null,
              disabled: mergedDisabled
            }), addonAfterNode && /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
              status: true,
              override: true
            }, addonAfterNode))));
          }

          return element;
        });
        var _default = InputNumber;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@ant-design/icons/DownOutlined': _req5,
        '@ant-design/icons/UpOutlined': _req6,
        'classnames': _req7,
        'rc-input-number': _req8,
        'react': _req9,
        '../config-provider': _req10,
        '../config-provider/DisabledContext': _req11,
        '../config-provider/SizeContext': _req12,
        '../form/context': _req13,
        '../space/Compact': _req14,
        '../_util/reactNode': _req15,
        '../_util/statusUtils': _req16
      }));
    }
  };
});
//# sourceMappingURL=f55fc35ea1dc7dc683b7c874e02431b84127e16d.js.map