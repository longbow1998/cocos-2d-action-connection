System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-util/lib/hooks/useMergedState", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context2) {
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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req5 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _getDataOrAriaProps = _interopRequireDefault(require("../_util/getDataOrAriaProps"));

        var _context = require("./context");

        var _radio = _interopRequireDefault(require("./radio"));

        var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var size = React.useContext(_SizeContext["default"]);

          var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
            value: props.value
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              value = _useMergedState2[0],
              setValue = _useMergedState2[1];

          var onRadioChange = function onRadioChange(ev) {
            var lastValue = value;
            var val = ev.target.value;

            if (!('value' in props)) {
              setValue(val);
            }

            var onChange = props.onChange;

            if (onChange && val !== lastValue) {
              onChange(ev);
            }
          };

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              options = props.options,
              _props$buttonStyle = props.buttonStyle,
              buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
              disabled = props.disabled,
              children = props.children,
              customizeSize = props.size,
              style = props.style,
              id = props.id,
              onMouseEnter = props.onMouseEnter,
              onMouseLeave = props.onMouseLeave,
              onFocus = props.onFocus,
              onBlur = props.onBlur;
          var prefixCls = getPrefixCls('radio', customizePrefixCls);
          var groupPrefixCls = "".concat(prefixCls, "-group");
          var childrenToRender = children; // 如果存在 options, 优先使用

          if (options && options.length > 0) {
            childrenToRender = options.map(function (option) {
              if (typeof option === 'string' || typeof option === 'number') {
                // 此处类型自动推导为 string
                return /*#__PURE__*/React.createElement(_radio["default"], {
                  key: option.toString(),
                  prefixCls: prefixCls,
                  disabled: disabled,
                  value: option,
                  checked: value === option
                }, option);
              } // 此处类型自动推导为 { label: string value: string }


              return /*#__PURE__*/React.createElement(_radio["default"], {
                key: "radio-group-value-options-".concat(option.value),
                prefixCls: prefixCls,
                disabled: option.disabled || disabled,
                value: option.value,
                checked: value === option.value,
                style: option.style
              }, option.label);
            });
          }

          var mergedSize = customizeSize || size;
          var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, (0, _getDataOrAriaProps["default"])(props), {
            className: classString,
            style: style,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onFocus: onFocus,
            onBlur: onBlur,
            id: id,
            ref: ref
          }), /*#__PURE__*/React.createElement(_context.RadioGroupContextProvider, {
            value: {
              onChange: onRadioChange,
              value: value,
              disabled: props.disabled,
              name: props.name,
              optionType: props.optionType
            }
          }, childrenToRender));
        });

        var _default = /*#__PURE__*/React.memo(RadioGroup);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'rc-util/lib/hooks/useMergedState': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../config-provider/SizeContext': _req8,
        '../_util/getDataOrAriaProps': _req9,
        './context': _req10,
        './radio': _req11
      }));
    }
  };
});
//# sourceMappingURL=963f2a93e5ef50dcc4349bebcc79c6720dc9d1e0.js.map