System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@ant-design/icons/CloseCircleFilled", "classnames", "rc-input", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _default0, _fixControlledValue, _resolveOnChange, _triggerFocus, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req4 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcInput2) {
      _req6 = _rcInput2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req7 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react2) {
      _req8 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req14 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req15 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req16 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req17 = _unresolved_10.__cjsMetaURL;
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
        exports.fixControlledValue = fixControlledValue;
        exports.resolveOnChange = resolveOnChange;
        exports.triggerFocus = triggerFocus;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcInput = _interopRequireDefault(require("rc-input"));

        var _ref2 = require("rc-util/lib/ref");

        var _react = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _context = require("../form/context");

        var _Compact = require("../space/Compact");

        var _statusUtils = require("../_util/statusUtils");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _useRemovePasswordTimeout = _interopRequireDefault(require("./hooks/useRemovePasswordTimeout"));

        var _utils = require("./utils");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function fixControlledValue(value) {
          if (typeof value === 'undefined' || value === null) {
            return '';
          }

          return String(value);
        }

        function resolveOnChange(target, e, onChange, targetValue) {
          if (!onChange) {
            return;
          }

          var event = e;

          if (e.type === 'click') {
            // Clone a new target for event.
            // Avoid the following usage, the setQuery method gets the original value.
            //
            // const [query, setQuery] = React.useState('');
            // <Input
            //   allowClear
            //   value={query}
            //   onChange={(e)=> {
            //     setQuery((prevStatus) => e.target.value);
            //   }}
            // />
            var currentTarget = target.cloneNode(true); // click clear icon

            event = Object.create(e, {
              target: {
                value: currentTarget
              },
              currentTarget: {
                value: currentTarget
              }
            });
            currentTarget.value = '';
            onChange(event);
            return;
          } // Trigger by composition event, this means we need force change the input value


          if (targetValue !== undefined) {
            event = Object.create(e, {
              target: {
                value: target
              },
              currentTarget: {
                value: target
              }
            });
            target.value = targetValue;
            onChange(event);
            return;
          }

          onChange(event);
        }

        function triggerFocus(element, option) {
          if (!element) {
            return;
          }

          element.focus(option); // Selection content

          var _ref = option || {},
              cursor = _ref.cursor;

          if (cursor) {
            var len = element.value.length;

            switch (cursor) {
              case 'start':
                element.setSelectionRange(0, 0);
                break;

              case 'end':
                element.setSelectionRange(len, len);
                break;

              default:
                element.setSelectionRange(0, len);
                break;
            }
          }
        }

        var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
          var _classNames, _classNames2, _classNames4;

          var customizePrefixCls = props.prefixCls,
              _props$bordered = props.bordered,
              bordered = _props$bordered === void 0 ? true : _props$bordered,
              customStatus = props.status,
              customSize = props.size,
              customDisabled = props.disabled,
              onBlur = props.onBlur,
              onFocus = props.onFocus,
              suffix = props.suffix,
              allowClear = props.allowClear,
              addonAfter = props.addonAfter,
              addonBefore = props.addonBefore,
              className = props.className,
              onChange = props.onChange,
              rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]);

          var _React$useContext = _react["default"].useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              input = _React$useContext.input;

          var prefixCls = getPrefixCls('input', customizePrefixCls);
          var inputRef = (0, _react.useRef)(null); // ===================== Compact Item =====================

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames; // ===================== Size =====================


          var size = _react["default"].useContext(_SizeContext["default"]);

          var mergedSize = compactSize || customSize || size; // ===================== Disabled =====================

          var disabled = _react["default"].useContext(_DisabledContext["default"]);

          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled; // ===================== Status =====================

          var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
              contextStatus = _useContext.status,
              hasFeedback = _useContext.hasFeedback,
              feedbackIcon = _useContext.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus); // ===================== Focus warning =====================

          var inputHasPrefixSuffix = (0, _utils.hasPrefixSuffix)(props) || !!hasFeedback;
          var prevHasPrefixSuffix = (0, _react.useRef)(inputHasPrefixSuffix);
          (0, _react.useEffect)(function () {
            var _a;

            if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input), 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ") : void 0;
            }

            prevHasPrefixSuffix.current = inputHasPrefixSuffix;
          }, [inputHasPrefixSuffix]); // ===================== Remove Password value =====================

          var removePasswordTimeout = (0, _useRemovePasswordTimeout["default"])(inputRef, true);

          var handleBlur = function handleBlur(e) {
            removePasswordTimeout();
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
          };

          var handleFocus = function handleFocus(e) {
            removePasswordTimeout();
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
          };

          var handleChange = function handleChange(e) {
            removePasswordTimeout();
            onChange === null || onChange === void 0 ? void 0 : onChange(e);
          };

          var suffixNode = (hasFeedback || suffix) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, suffix, hasFeedback && feedbackIcon); // Allow clear


          var mergedAllowClear;

          if ((0, _typeof2["default"])(allowClear) === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
            mergedAllowClear = allowClear;
          } else if (allowClear) {
            mergedAllowClear = {
              clearIcon: /*#__PURE__*/_react["default"].createElement(_CloseCircleFilled["default"], null)
            };
          }

          return /*#__PURE__*/_react["default"].createElement(_rcInput["default"], (0, _extends2["default"])({
            ref: (0, _ref2.composeRef)(ref, inputRef),
            prefixCls: prefixCls,
            autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
          }, rest, {
            disabled: mergedDisabled || undefined,
            onBlur: handleBlur,
            onFocus: handleFocus,
            suffix: suffixNode,
            allowClear: mergedAllowClear,
            className: (0, _classnames["default"])(className, compactItemClassnames),
            onChange: handleChange,
            addonAfter: addonAfter && /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
              override: true,
              status: true
            }, addonAfter)),
            addonBefore: addonBefore && /*#__PURE__*/_react["default"].createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/_react["default"].createElement(_context.NoFormStyle, {
              override: true,
              status: true
            }, addonBefore)),
            inputClassName: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), !inputHasPrefixSuffix && (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
            affixWrapperClassName: (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _classNames2), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback)),
            wrapperClassName: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-group-rtl"), direction === 'rtl')),
            groupClassName: (0, _classnames["default"])((_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-group-wrapper"), mergedStatus, hasFeedback))
          }));
        });
        var _default = Input;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _fixControlledValue = module.exports.fixControlledValue;
        _resolveOnChange = module.exports.resolveOnChange;
        _triggerFocus = module.exports.triggerFocus;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@ant-design/icons/CloseCircleFilled': _req4,
        'classnames': _req5,
        'rc-input': _req6,
        'rc-util/lib/ref': _req7,
        'react': _req8,
        '../config-provider': _req9,
        '../config-provider/DisabledContext': _req10,
        '../config-provider/SizeContext': _req11,
        '../form/context': _req12,
        '../space/Compact': _req13,
        '../_util/statusUtils': _req14,
        '../_util/warning': _req15,
        './hooks/useRemovePasswordTimeout': _req16,
        './utils': _req17
      }));
    }
  };
});
//# sourceMappingURL=d7bbaf6ad0a6c2db20a037bc3238f33cf46f5500.js.map