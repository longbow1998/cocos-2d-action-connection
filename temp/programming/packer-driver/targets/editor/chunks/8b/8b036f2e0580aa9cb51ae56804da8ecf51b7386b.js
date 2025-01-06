System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, _GroupContext, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req6 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
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
        exports["default"] = exports.GroupContext = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _Checkbox = _interopRequireDefault(require("./Checkbox"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var GroupContext = /*#__PURE__*/React.createContext(null);
        exports.GroupContext = GroupContext;

        var InternalCheckboxGroup = function InternalCheckboxGroup(_a, ref) {
          var defaultValue = _a.defaultValue,
              children = _a.children,
              _a$options = _a.options,
              options = _a$options === void 0 ? [] : _a$options,
              customizePrefixCls = _a.prefixCls,
              className = _a.className,
              style = _a.style,
              onChange = _a.onChange,
              restProps = __rest(_a, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var _React$useState = React.useState(restProps.value || defaultValue || []),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              value = _React$useState2[0],
              setValue = _React$useState2[1];

          var _React$useState3 = React.useState([]),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              registeredValues = _React$useState4[0],
              setRegisteredValues = _React$useState4[1];

          React.useEffect(function () {
            if ('value' in restProps) {
              setValue(restProps.value || []);
            }
          }, [restProps.value]);

          var getOptions = function getOptions() {
            return options.map(function (option) {
              if (typeof option === 'string' || typeof option === 'number') {
                return {
                  label: option,
                  value: option
                };
              }

              return option;
            });
          };

          var cancelValue = function cancelValue(val) {
            setRegisteredValues(function (prevValues) {
              return prevValues.filter(function (v) {
                return v !== val;
              });
            });
          };

          var registerValue = function registerValue(val) {
            setRegisteredValues(function (prevValues) {
              return [].concat((0, _toConsumableArray2["default"])(prevValues), [val]);
            });
          };

          var toggleOption = function toggleOption(option) {
            var optionIndex = value.indexOf(option.value);
            var newValue = (0, _toConsumableArray2["default"])(value);

            if (optionIndex === -1) {
              newValue.push(option.value);
            } else {
              newValue.splice(optionIndex, 1);
            }

            if (!('value' in restProps)) {
              setValue(newValue);
            }

            var opts = getOptions();
            onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter(function (val) {
              return registeredValues.includes(val);
            }).sort(function (a, b) {
              var indexA = opts.findIndex(function (opt) {
                return opt.value === a;
              });
              var indexB = opts.findIndex(function (opt) {
                return opt.value === b;
              });
              return indexA - indexB;
            }));
          };

          var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
          var groupPrefixCls = "".concat(prefixCls, "-group");
          var domProps = (0, _omit["default"])(restProps, ['value', 'disabled']);

          if (options && options.length > 0) {
            children = getOptions().map(function (option) {
              return /*#__PURE__*/React.createElement(_Checkbox["default"], {
                prefixCls: prefixCls,
                key: option.value.toString(),
                disabled: 'disabled' in option ? option.disabled : restProps.disabled,
                value: option.value,
                checked: value.includes(option.value),
                onChange: option.onChange,
                className: "".concat(groupPrefixCls, "-item"),
                style: option.style
              }, option.label);
            });
          } // eslint-disable-next-line react/jsx-no-constructed-context-values


          var context = {
            toggleOption: toggleOption,
            value: value,
            disabled: restProps.disabled,
            name: restProps.name,
            // https://github.com/ant-design/ant-design/issues/16376
            registerValue: registerValue,
            cancelValue: cancelValue
          };
          var classString = (0, _classnames["default"])(groupPrefixCls, (0, _defineProperty2["default"])({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
            className: classString,
            style: style
          }, domProps, {
            ref: ref
          }), /*#__PURE__*/React.createElement(GroupContext.Provider, {
            value: context
          }, children));
        };

        var CheckboxGroup = /*#__PURE__*/React.forwardRef(InternalCheckboxGroup);

        var _default = /*#__PURE__*/React.memo(CheckboxGroup);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _GroupContext = module.exports.GroupContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        'classnames': _req5,
        'rc-util/lib/omit': _req6,
        'react': _req7,
        '../config-provider': _req8,
        './Checkbox': _req9
      }));
    }
  };
});
//# sourceMappingURL=8b036f2e0580aa9cb51ae56804da8ecf51b7386b.js.map