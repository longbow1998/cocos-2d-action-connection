System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "classnames", "rc-segmented", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcSegmented2) {
      _req5 = _rcSegmented2.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcSegmented = _interopRequireDefault(require("rc-segmented"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function isSegmentedLabeledOptionWithIcon(option) {
          return (0, _typeof2["default"])(option) === 'object' && !!(option === null || option === void 0 ? void 0 : option.icon);
        }

        var Segmented = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              block = props.block,
              _props$options = props.options,
              options = _props$options === void 0 ? [] : _props$options,
              _props$size = props.size,
              customSize = _props$size === void 0 ? 'middle' : _props$size,
              restProps = __rest(props, ["prefixCls", "className", "block", "options", "size"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('segmented', customizePrefixCls); // ===================== Size =====================

          var size = React.useContext(_SizeContext["default"]);
          var mergedSize = customSize || size; // syntactic sugar to support `icon` for Segmented Item

          var extendedOptions = React.useMemo(function () {
            return options.map(function (option) {
              if (isSegmentedLabeledOptionWithIcon(option)) {
                var icon = option.icon,
                    label = option.label,
                    restOption = __rest(option, ["icon", "label"]);

                return (0, _extends2["default"])((0, _extends2["default"])({}, restOption), {
                  label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-item-icon")
                  }, icon), label && /*#__PURE__*/React.createElement("span", null, label))
                });
              }

              return option;
            });
          }, [options, prefixCls]);
          return /*#__PURE__*/React.createElement(_rcSegmented["default"], (0, _extends2["default"])({}, restProps, {
            className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _classNames)),
            options: extendedOptions,
            ref: ref,
            prefixCls: prefixCls,
            direction: direction
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Segmented.displayName = 'Segmented';
        }

        var _default = Segmented;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        'classnames': _req4,
        'rc-segmented': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../config-provider/SizeContext': _req8
      }));
    }
  };
});
//# sourceMappingURL=68d6192f37cac45cdb7d8b381fbc18a293c451ff.js.map