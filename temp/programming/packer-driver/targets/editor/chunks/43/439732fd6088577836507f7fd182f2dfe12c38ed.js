System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "__unresolved_1", "rc-util/lib/omit", "__unresolved_2", "classnames", "rc-util/lib/hooks/useMergedState"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req4 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req6 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react2) {
      _req7 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req9 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_classnames2) {
      _req11 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req12 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _react = _interopRequireWildcard(require("react"));

        var _BaseInput = _interopRequireDefault(require("./BaseInput"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _commonUtils = require("./utils/commonUtils");

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _excluded = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "type", "inputClassName"];

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var Input = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
          var autoComplete = props.autoComplete,
              onChange = props.onChange,
              onFocus = props.onFocus,
              onBlur = props.onBlur,
              onPressEnter = props.onPressEnter,
              onKeyDown = props.onKeyDown,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
              disabled = props.disabled,
              htmlSize = props.htmlSize,
              className = props.className,
              maxLength = props.maxLength,
              suffix = props.suffix,
              showCount = props.showCount,
              _props$type = props.type,
              type = _props$type === void 0 ? 'text' : _props$type,
              inputClassName = props.inputClassName,
              rest = (0, _objectWithoutProperties2.default)(props, _excluded);

          var _useMergedState = (0, _useMergedState3.default)(props.defaultValue, {
            value: props.value
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              value = _useMergedState2[0],
              setValue = _useMergedState2[1];

          var _useState = (0, _react.useState)(false),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              focused = _useState2[0],
              setFocused = _useState2[1];

          var inputRef = (0, _react.useRef)(null);

          var focus = function focus(option) {
            if (inputRef.current) {
              (0, _commonUtils.triggerFocus)(inputRef.current, option);
            }
          };

          (0, _react.useImperativeHandle)(ref, function () {
            return {
              focus: focus,
              blur: function blur() {
                var _inputRef$current;

                (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.blur();
              },
              setSelectionRange: function setSelectionRange(start, end, direction) {
                var _inputRef$current2;

                (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(start, end, direction);
              },
              select: function select() {
                var _inputRef$current3;

                (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.select();
              },
              input: inputRef.current
            };
          });
          (0, _react.useEffect)(function () {
            setFocused(function (prev) {
              return prev && disabled ? false : prev;
            });
          }, [disabled]);

          var handleChange = function handleChange(e) {
            if (props.value === undefined) {
              setValue(e.target.value);
            }

            if (inputRef.current) {
              (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
            }
          };

          var handleKeyDown = function handleKeyDown(e) {
            if (onPressEnter && e.key === 'Enter') {
              onPressEnter(e);
            }

            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
          };

          var handleFocus = function handleFocus(e) {
            setFocused(true);
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
          };

          var handleBlur = function handleBlur(e) {
            setFocused(false);
            onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
          };

          var handleReset = function handleReset(e) {
            setValue('');
            focus();

            if (inputRef.current) {
              (0, _commonUtils.resolveOnChange)(inputRef.current, e, onChange);
            }
          };

          var getInputElement = function getInputElement() {
            // Fix https://fb.me/react-unknown-prop
            var otherProps = (0, _omit.default)(props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
            // specify either the value prop, or the defaultValue prop, but not both.
            'defaultValue', 'showCount', 'affixWrapperClassName', 'groupClassName', 'inputClassName', 'wrapperClassName', 'htmlSize']);
            return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
              autoComplete: autoComplete
            }, otherProps, {
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onKeyDown: handleKeyDown,
              className: (0, _classnames.default)(prefixCls, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled), inputClassName, !(0, _commonUtils.hasAddon)(props) && !(0, _commonUtils.hasPrefixSuffix)(props) && className),
              ref: inputRef,
              size: htmlSize,
              type: type
            }));
          };

          var getSuffix = function getSuffix() {
            // Max length value
            var hasMaxLength = Number(maxLength) > 0;

            if (suffix || showCount) {
              var val = (0, _commonUtils.fixControlledValue)(value);
              var valueLength = (0, _toConsumableArray2.default)(val).length;
              var dataCount = (0, _typeof2.default)(showCount) === 'object' ? showCount.formatter({
                value: val,
                count: valueLength,
                maxLength: maxLength
              }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
              return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !!showCount && /*#__PURE__*/_react.default.createElement("span", {
                className: (0, _classnames.default)("".concat(prefixCls, "-show-count-suffix"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix))
              }, dataCount), suffix);
            }

            return null;
          };

          return /*#__PURE__*/_react.default.createElement(_BaseInput.default, (0, _extends2.default)({}, rest, {
            prefixCls: prefixCls,
            className: className,
            inputElement: getInputElement(),
            handleReset: handleReset,
            value: (0, _commonUtils.fixControlledValue)(value),
            focused: focused,
            triggerFocus: focus,
            suffix: getSuffix(),
            disabled: disabled
          }));
        });
        var _default = Input;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/defineProperty': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/objectWithoutProperties': _req6,
        'react': _req7,
        './BaseInput': _req8,
        'rc-util/lib/omit': _req9,
        './utils/commonUtils': _req10,
        'classnames': _req11,
        'rc-util/lib/hooks/useMergedState': _req12
      }));
    }
  };
});
//# sourceMappingURL=439732fd6088577836507f7fd182f2dfe12c38ed.js.map