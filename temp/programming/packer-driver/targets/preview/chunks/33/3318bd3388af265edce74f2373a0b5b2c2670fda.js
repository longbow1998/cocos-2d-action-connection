System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "rc-checkbox", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req10 = _unresolved_6.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcCheckbox = _interopRequireDefault(require("rc-checkbox"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _context = require("../form/context");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _Group = require("./Group");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InternalCheckbox = function InternalCheckbox(_a, ref) {
          var _classNames;

          var _b;

          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              children = _a.children,
              _a$indeterminate = _a.indeterminate,
              indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate,
              style = _a.style,
              onMouseEnter = _a.onMouseEnter,
              onMouseLeave = _a.onMouseLeave,
              _a$skipGroup = _a.skipGroup,
              skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup,
              disabled = _a.disabled,
              restProps = __rest(_a, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var checkboxGroup = React.useContext(_Group.GroupContext);

          var _useContext = (0, React.useContext)(_context.FormItemInputContext),
              isFormItemInput = _useContext.isFormItemInput;

          var contextDisabled = (0, React.useContext)(_DisabledContext["default"]);
          var mergedDisabled = (_b = (checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.disabled) || disabled) !== null && _b !== void 0 ? _b : contextDisabled;
          var prevValue = React.useRef(restProps.value);
          React.useEffect(function () {
            checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?') : void 0;
          }, []);
          React.useEffect(function () {
            if (skipGroup) {
              return;
            }

            if (restProps.value !== prevValue.current) {
              checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
              checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
              prevValue.current = restProps.value;
            }

            return function () {
              return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
            };
          }, [restProps.value]);
          var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
          var checkboxProps = (0, _extends2["default"])({}, restProps);

          if (checkboxGroup && !skipGroup) {
            checkboxProps.onChange = function () {
              if (restProps.onChange) {
                restProps.onChange.apply(restProps, arguments);
              }

              if (checkboxGroup.toggleOption) {
                checkboxGroup.toggleOption({
                  label: children,
                  value: restProps.value
                });
              }
            };

            checkboxProps.name = checkboxGroup.name;
            checkboxProps.checked = checkboxGroup.value.includes(restProps.value);
          }

          var classString = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), mergedDisabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-in-form-item"), isFormItemInput), _classNames), className);
          var checkboxClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
          var ariaChecked = indeterminate ? 'mixed' : undefined;
          return (
            /*#__PURE__*/
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            React.createElement("label", {
              className: classString,
              style: style,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave
            }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({
              "aria-checked": ariaChecked
            }, checkboxProps, {
              prefixCls: prefixCls,
              className: checkboxClass,
              disabled: mergedDisabled,
              ref: ref
            })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
          );
        };

        var Checkbox = /*#__PURE__*/React.forwardRef(InternalCheckbox);

        if (process.env.NODE_ENV !== 'production') {
          Checkbox.displayName = 'Checkbox';
        }

        var _default = Checkbox;
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
        'react': _req5,
        '../config-provider': _req6,
        '../form/context': _req7,
        '../_util/warning': _req8,
        './Group': _req9,
        '../config-provider/DisabledContext': _req10
      }));
    }
  };
});
//# sourceMappingURL=3318bd3388af265edce74f2373a0b5b2c2670fda.js.map