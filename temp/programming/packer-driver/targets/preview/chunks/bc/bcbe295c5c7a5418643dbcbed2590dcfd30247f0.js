System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/SearchOutlined", "classnames", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsSearchOutlined) {
      _req3 = _antDesignIconsSearchOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
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
    }, function (_unresolved_7) {
      _req12 = _unresolved_7.__cjsMetaURL;
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

        var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var _configProvider = require("../config-provider");

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _Compact = require("../space/Compact");

        var _reactNode = require("../_util/reactNode");

        var _Input = _interopRequireDefault(require("./Input"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Search = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var customizePrefixCls = props.prefixCls,
              customizeInputPrefixCls = props.inputPrefixCls,
              className = props.className,
              customizeSize = props.size,
              suffix = props.suffix,
              _props$enterButton = props.enterButton,
              enterButton = _props$enterButton === void 0 ? false : _props$enterButton,
              addonAfter = props.addonAfter,
              loading = props.loading,
              disabled = props.disabled,
              customOnSearch = props.onSearch,
              customOnChange = props.onChange,
              onCompositionStart = props.onCompositionStart,
              onCompositionEnd = props.onCompositionEnd,
              restProps = __rest(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var contextSize = React.useContext(_SizeContext["default"]);
          var composedRef = React.useRef(false);
          var prefixCls = getPrefixCls('input-search', customizePrefixCls);
          var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize;

          var size = compactSize || customizeSize || contextSize;
          var inputRef = React.useRef(null);

          var onChange = function onChange(e) {
            if (e && e.target && e.type === 'click' && customOnSearch) {
              customOnSearch(e.target.value, e);
            }

            if (customOnChange) {
              customOnChange(e);
            }
          };

          var onMouseDown = function onMouseDown(e) {
            var _a;

            if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
              e.preventDefault();
            }
          };

          var onSearch = function onSearch(e) {
            var _a, _b;

            if (customOnSearch) {
              customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e);
            }
          };

          var onPressEnter = function onPressEnter(e) {
            if (composedRef.current || loading) {
              return;
            }

            onSearch(e);
          };

          var searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/React.createElement(_SearchOutlined["default"], null) : null;
          var btnClassName = "".concat(prefixCls, "-button");
          var button;
          var enterButtonAsElement = enterButton || {};
          var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;

          if (isAntdButton || enterButtonAsElement.type === 'button') {
            button = (0, _reactNode.cloneElement)(enterButtonAsElement, (0, _extends2["default"])({
              onMouseDown: onMouseDown,
              onClick: function onClick(e) {
                var _a, _b;

                (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
                onSearch(e);
              },
              key: 'enterButton'
            }, isAntdButton ? {
              className: btnClassName,
              size: size
            } : {}));
          } else {
            button = /*#__PURE__*/React.createElement(_button["default"], {
              className: btnClassName,
              type: enterButton ? 'primary' : undefined,
              size: size,
              disabled: disabled,
              key: "enterButton",
              onMouseDown: onMouseDown,
              onClick: onSearch,
              loading: loading,
              icon: searchIcon
            }, enterButton);
          }

          if (addonAfter) {
            button = [button, (0, _reactNode.cloneElement)(addonAfter, {
              key: 'addonAfter'
            })];
          }

          var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), !!size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-button"), !!enterButton), _classNames), className);

          var handleOnCompositionStart = function handleOnCompositionStart(e) {
            composedRef.current = true;
            onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
          };

          var handleOnCompositionEnd = function handleOnCompositionEnd(e) {
            composedRef.current = false;
            onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
          };

          return /*#__PURE__*/React.createElement(_Input["default"], (0, _extends2["default"])({
            ref: (0, _ref.composeRef)(inputRef, ref),
            onPressEnter: onPressEnter
          }, restProps, {
            size: size,
            onCompositionStart: handleOnCompositionStart,
            onCompositionEnd: handleOnCompositionEnd,
            prefixCls: inputPrefixCls,
            addonAfter: button,
            suffix: suffix,
            onChange: onChange,
            className: cls,
            disabled: disabled
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Search.displayName = 'Search';
        }

        var _default = Search;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/SearchOutlined': _req3,
        'classnames': _req4,
        'rc-util/lib/ref': _req5,
        'react': _req6,
        '../button': _req7,
        '../config-provider': _req8,
        '../config-provider/SizeContext': _req9,
        '../space/Compact': _req10,
        '../_util/reactNode': _req11,
        './Input': _req12
      }));
    }
  };
});
//# sourceMappingURL=bcbe295c5c7a5418643dbcbed2590dcfd30247f0.js.map