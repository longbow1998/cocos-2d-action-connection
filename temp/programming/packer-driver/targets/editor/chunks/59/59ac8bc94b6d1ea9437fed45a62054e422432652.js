System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/toConsumableArray", "classnames", "rc-textarea", "rc-util/lib/hooks/useMergedState", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req5 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcTextarea2) {
      _req7 = _rcTextarea2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req8 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req9 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req14 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req15 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req16 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req17 = _unresolved_8.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTextarea = _interopRequireDefault(require("rc-textarea"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _context = require("../form/context");

        var _statusUtils = require("../_util/statusUtils");

        var _ClearableLabeledInput = _interopRequireDefault(require("./ClearableLabeledInput"));

        var _Input = require("./Input");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function fixEmojiLength(value, maxLength) {
          return (0, _toConsumableArray2["default"])(value || '').slice(0, maxLength).join('');
        }

        function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
          var newTriggerValue = triggerValue;

          if (isCursorInEnd) {
            // 光标在尾部，直接截断
            newTriggerValue = fixEmojiLength(triggerValue, maxLength);
          } else if ((0, _toConsumableArray2["default"])(preValue || '').length < triggerValue.length && (0, _toConsumableArray2["default"])(triggerValue || '').length > maxLength) {
            // 光标在中间，如果最后的值超过最大值，则采用原先的值
            newTriggerValue = preValue;
          }

          return newTriggerValue;
        }

        var TextArea = /*#__PURE__*/React.forwardRef(function (_a, ref) {
          var _classNames;

          var customizePrefixCls = _a.prefixCls,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? true : _a$bordered,
              _a$showCount = _a.showCount,
              showCount = _a$showCount === void 0 ? false : _a$showCount,
              maxLength = _a.maxLength,
              className = _a.className,
              style = _a.style,
              customizeSize = _a.size,
              customDisabled = _a.disabled,
              onCompositionStart = _a.onCompositionStart,
              onCompositionEnd = _a.onCompositionEnd,
              onChange = _a.onChange,
              customStatus = _a.status,
              props = __rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var size = React.useContext(_SizeContext["default"]); // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;

          var _React$useContext2 = React.useContext(_context.FormItemInputContext),
              contextStatus = _React$useContext2.status,
              hasFeedback = _React$useContext2.hasFeedback,
              isFormItemInput = _React$useContext2.isFormItemInput,
              feedbackIcon = _React$useContext2.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
          var innerRef = React.useRef(null);
          var clearableInputRef = React.useRef(null);

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              compositing = _React$useState2[0],
              setCompositing = _React$useState2[1];

          var oldCompositionValueRef = React.useRef();
          var oldSelectionStartRef = React.useRef(0);

          var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
            value: props.value
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              value = _useMergedState2[0],
              setValue = _useMergedState2[1];

          var hidden = props.hidden;

          var handleSetValue = function handleSetValue(val, callback) {
            if (props.value === undefined) {
              setValue(val);
              callback === null || callback === void 0 ? void 0 : callback();
            }
          }; // =========================== Value Update ===========================
          // Max length value


          var hasMaxLength = Number(maxLength) > 0;

          var onInternalCompositionStart = function onInternalCompositionStart(e) {
            setCompositing(true); // 拼音输入前保存一份旧值

            oldCompositionValueRef.current = value; // 保存旧的光标位置

            oldSelectionStartRef.current = e.currentTarget.selectionStart;
            onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
          };

          var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
            var _a;

            setCompositing(false);
            var triggerValue = e.currentTarget.value;

            if (hasMaxLength) {
              var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
              triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
            } // Patch composition onChange when value changed


            if (triggerValue !== value) {
              handleSetValue(triggerValue);
              (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
            }

            onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
          };

          var handleChange = function handleChange(e) {
            var triggerValue = e.target.value;

            if (!compositing && hasMaxLength) {
              // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
              var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
              triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
            }

            handleSetValue(triggerValue);
            (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
          }; // ============================== Reset ===============================


          var handleReset = function handleReset(e) {
            var _a, _b, _c;

            handleSetValue('');
            (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            (0, _Input.resolveOnChange)((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
          };

          var prefixCls = getPrefixCls('input', customizePrefixCls);
          React.useImperativeHandle(ref, function () {
            var _a;

            return {
              resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
              focus: function focus(option) {
                var _a, _b;

                (0, _Input.triggerFocus)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
              },
              blur: function blur() {
                var _a;

                return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
              }
            };
          });
          var textArea = /*#__PURE__*/React.createElement(_rcTextarea["default"], (0, _extends2["default"])({}, (0, _omit["default"])(props, ['allowClear']), {
            disabled: mergedDisabled,
            className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames, className, className && !showCount), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small' || customizeSize === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large' || customizeSize === 'large'), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus)),
            style: showCount ? {
              resize: style === null || style === void 0 ? void 0 : style.resize
            } : style,
            prefixCls: prefixCls,
            onCompositionStart: onInternalCompositionStart,
            onChange: handleChange,
            onCompositionEnd: onInternalCompositionEnd,
            ref: innerRef
          }));
          var val = (0, _Input.fixControlledValue)(value);

          if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
            // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
            val = fixEmojiLength(val, maxLength);
          } // TextArea


          var textareaNode = /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({
            disabled: mergedDisabled
          }, props, {
            prefixCls: prefixCls,
            direction: direction,
            inputType: "text",
            value: val,
            element: textArea,
            handleReset: handleReset,
            ref: clearableInputRef,
            bordered: bordered,
            status: customStatus,
            style: showCount ? undefined : style
          })); // Only show text area wrapper when needed

          if (showCount || hasFeedback) {
            var _classNames2;

            var valueLength = (0, _toConsumableArray2["default"])(val).length;
            var dataCount = '';

            if ((0, _typeof2["default"])(showCount) === 'object') {
              dataCount = showCount.formatter({
                value: val,
                count: valueLength,
                maxLength: maxLength
              });
            } else {
              dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
            }

            return /*#__PURE__*/React.createElement("div", {
              hidden: hidden,
              className: (0, _classnames["default"])("".concat(prefixCls, "-textarea"), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-textarea-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-textarea-show-count"), showCount), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-textarea-in-form-item"), isFormItemInput), _classNames2), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-textarea"), mergedStatus, hasFeedback), className),
              style: style,
              "data-count": dataCount
            }, textareaNode, hasFeedback && /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-textarea-suffix")
            }, feedbackIcon));
          }

          return textareaNode;
        });
        var _default = TextArea;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/toConsumableArray': _req5,
        'classnames': _req6,
        'rc-textarea': _req7,
        'rc-util/lib/hooks/useMergedState': _req8,
        'rc-util/lib/omit': _req9,
        'react': _req10,
        '../config-provider': _req11,
        '../config-provider/DisabledContext': _req12,
        '../config-provider/SizeContext': _req13,
        '../form/context': _req14,
        '../_util/statusUtils': _req15,
        './ClearableLabeledInput': _req16,
        './Input': _req17
      }));
    }
  };
});
//# sourceMappingURL=59ac8bc94b6d1ea9437fed45a62054e422432652.js.map