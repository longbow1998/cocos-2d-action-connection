System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "@ant-design/icons/EyeInvisibleOutlined", "@ant-design/icons/EyeOutlined", "classnames", "rc-util/lib/omit", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsEyeInvisibleOutlined) {
      _req5 = _antDesignIconsEyeInvisibleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsEyeOutlined) {
      _req6 = _antDesignIconsEyeOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req8 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req9 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _EyeInvisibleOutlined = _interopRequireDefault(require("@ant-design/icons/EyeInvisibleOutlined"));

        var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons/EyeOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _ref2 = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _useRemovePasswordTimeout = _interopRequireDefault(require("./hooks/useRemovePasswordTimeout"));

        var _Input = _interopRequireDefault(require("./Input"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var defaultIconRender = function defaultIconRender(visible) {
          return visible ? /*#__PURE__*/React.createElement(_EyeOutlined["default"], null) : /*#__PURE__*/React.createElement(_EyeInvisibleOutlined["default"], null);
        };

        var ActionMap = {
          click: 'onClick',
          hover: 'onMouseOver'
        };
        var Password = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _props$visibilityTogg = props.visibilityToggle,
              visibilityToggle = _props$visibilityTogg === void 0 ? true : _props$visibilityTogg;
          var visibilityControlled = (0, _typeof2["default"])(visibilityToggle) === 'object' && visibilityToggle.visible !== undefined;

          var _useState = (0, React.useState)(function () {
            return visibilityControlled ? visibilityToggle.visible : false;
          }),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              visible = _useState2[0],
              setVisible = _useState2[1];

          var inputRef = (0, React.useRef)(null);
          React.useEffect(function () {
            if (visibilityControlled) {
              setVisible(visibilityToggle.visible);
            }
          }, [visibilityControlled, visibilityToggle]); // Remove Password value

          var removePasswordTimeout = (0, _useRemovePasswordTimeout["default"])(inputRef);

          var onVisibleChange = function onVisibleChange() {
            var disabled = props.disabled;

            if (disabled) {
              return;
            }

            if (visible) {
              removePasswordTimeout();
            }

            setVisible(function (prevState) {
              var _a;

              var newState = !prevState;

              if ((0, _typeof2["default"])(visibilityToggle) === 'object') {
                (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
              }

              return newState;
            });
          };

          var getIcon = function getIcon(prefixCls) {
            var _iconProps;

            var _props$action = props.action,
                action = _props$action === void 0 ? 'click' : _props$action,
                _props$iconRender = props.iconRender,
                iconRender = _props$iconRender === void 0 ? defaultIconRender : _props$iconRender;
            var iconTrigger = ActionMap[action] || '';
            var icon = iconRender(visible);
            var iconProps = (_iconProps = {}, (0, _defineProperty2["default"])(_iconProps, iconTrigger, onVisibleChange), (0, _defineProperty2["default"])(_iconProps, "className", "".concat(prefixCls, "-icon")), (0, _defineProperty2["default"])(_iconProps, "key", 'passwordIcon'), (0, _defineProperty2["default"])(_iconProps, "onMouseDown", function onMouseDown(e) {
              // Prevent focused state lost
              // https://github.com/ant-design/ant-design/issues/15173
              e.preventDefault();
            }), (0, _defineProperty2["default"])(_iconProps, "onMouseUp", function onMouseUp(e) {
              // Prevent caret position change
              // https://github.com/ant-design/ant-design/issues/23524
              e.preventDefault();
            }), _iconProps);
            return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React.createElement("span", null, icon), iconProps);
          };

          var renderPassword = function renderPassword(_ref) {
            var getPrefixCls = _ref.getPrefixCls;

            var className = props.className,
                customizePrefixCls = props.prefixCls,
                customizeInputPrefixCls = props.inputPrefixCls,
                size = props.size,
                restProps = __rest(props, ["className", "prefixCls", "inputPrefixCls", "size"]);

            var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
            var prefixCls = getPrefixCls('input-password', customizePrefixCls);
            var suffixIcon = visibilityToggle && getIcon(prefixCls);
            var inputClassName = (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), !!size));
            var omittedProps = (0, _extends2["default"])((0, _extends2["default"])({}, (0, _omit["default"])(restProps, ['suffix', 'iconRender', 'visibilityToggle'])), {
              type: visible ? 'text' : 'password',
              className: inputClassName,
              prefixCls: inputPrefixCls,
              suffix: suffixIcon
            });

            if (size) {
              omittedProps.size = size;
            }

            return /*#__PURE__*/React.createElement(_Input["default"], (0, _extends2["default"])({
              ref: (0, _ref2.composeRef)(ref, inputRef)
            }, omittedProps));
          };

          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderPassword);
        });

        if (process.env.NODE_ENV !== 'production') {
          Password.displayName = 'Password';
        }

        var _default = Password;
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
        '@babel/runtime/helpers/typeof': _req4,
        '@ant-design/icons/EyeInvisibleOutlined': _req5,
        '@ant-design/icons/EyeOutlined': _req6,
        'classnames': _req7,
        'rc-util/lib/omit': _req8,
        'rc-util/lib/ref': _req9,
        'react': _req10,
        '../config-provider': _req11,
        './hooks/useRemovePasswordTimeout': _req12,
        './Input': _req13
      }));
    }
  };
});
//# sourceMappingURL=a664aec59a13c62d570e9b2b79d1b67efd37ffc8.js.map