System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "rc-checkbox", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context3) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcCheckbox2) {
      _req4 = _rcCheckbox2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req5 = _rcUtilLibRef.__cjsMetaURL;
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
      _export("__cjsMetaURL", __cjsMetaURL = _context3.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _context = require("../form/context");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _context2 = _interopRequireWildcard(require("./context"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InternalRadio = function InternalRadio(props, ref) {
          var _classNames;

          var groupContext = React.useContext(_context2["default"]);
          var radioOptionTypeContext = React.useContext(_context2.RadioOptionTypeContext);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var innerRef = React.useRef();
          var mergedRef = (0, _ref.composeRef)(ref, innerRef);

          var _useContext = (0, React.useContext)(_context.FormItemInputContext),
              isFormItemInput = _useContext.isFormItemInput;

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.') : void 0;

          var onChange = function onChange(e) {
            var _a, _b;

            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
            (_b = groupContext === null || groupContext === void 0 ? void 0 : groupContext.onChange) === null || _b === void 0 ? void 0 : _b.call(groupContext, e);
          };

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              children = props.children,
              style = props.style,
              customDisabled = props.disabled,
              restProps = __rest(props, ["prefixCls", "className", "children", "style", "disabled"]);

          var radioPrefixCls = getPrefixCls('radio', customizePrefixCls);
          var prefixCls = ((groupContext === null || groupContext === void 0 ? void 0 : groupContext.optionType) || radioOptionTypeContext) === 'button' ? "".concat(radioPrefixCls, "-button") : radioPrefixCls;
          var radioProps = (0, _extends2["default"])({}, restProps); // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          radioProps.disabled = customDisabled || disabled;

          if (groupContext) {
            radioProps.name = groupContext.name;
            radioProps.onChange = onChange;
            radioProps.checked = props.value === groupContext.value;
            radioProps.disabled = radioProps.disabled || groupContext.disabled;
          }

          var wrapperClassString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
          return (
            /*#__PURE__*/
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            React.createElement("label", {
              className: wrapperClassString,
              style: style,
              onMouseEnter: props.onMouseEnter,
              onMouseLeave: props.onMouseLeave
            }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, radioProps, {
              type: "radio",
              prefixCls: prefixCls,
              ref: mergedRef
            })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
          );
        };

        var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);

        if (process.env.NODE_ENV !== 'production') {
          Radio.displayName = 'Radio';
        }

        var _default = Radio;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'classnames': _req3,
        'rc-checkbox': _req4,
        'rc-util/lib/ref': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../config-provider/DisabledContext': _req8,
        '../form/context': _req9,
        '../_util/warning': _req10,
        './context': _req11
      }));
    }
  };
});
//# sourceMappingURL=caaf8c8d57883425ef3ca20861e0aaa594b9fb65.js.map