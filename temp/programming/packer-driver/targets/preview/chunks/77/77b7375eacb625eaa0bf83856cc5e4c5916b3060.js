System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/ExclamationCircleFilled", "classnames", "rc-util/lib/hooks/useMergedState", "rc-util/lib/KeyCode", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleFilled) {
      _req3 = _antDesignIconsExclamationCircleFilled.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req5 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req6 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _popover = _interopRequireDefault(require("../popover"));

        var _reactNode = require("../_util/reactNode");

        var _PurePanel = require("./PurePanel");

        var _this = void 0;

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Popconfirm = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var _useMergedState = (0, _useMergedState3["default"])(false, {
            value: props.open !== undefined ? props.open : props.visible,
            defaultValue: props.defaultOpen !== undefined ? props.defaultOpen : props.defaultVisible
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              open = _useMergedState2[0],
              setOpen = _useMergedState2[1]; // const isDestroyed = useDestroyed();


          var settingOpen = function settingOpen(value, e) {
            var _a, _b;

            setOpen(value, true);
            (_a = props.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, value, e);
            (_b = props.onOpenChange) === null || _b === void 0 ? void 0 : _b.call(props, value, e);
          };

          var close = function close(e) {
            settingOpen(false, e);
          };

          var onConfirm = function onConfirm(e) {
            var _a;

            return (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(_this, e);
          };

          var onCancel = function onCancel(e) {
            var _a;

            settingOpen(false, e);
            (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(_this, e);
          };

          var _onKeyDown = function onKeyDown(e) {
            if (e.keyCode === _KeyCode["default"].ESC && open) {
              settingOpen(false, e);
            }
          };

          var onOpenChange = function onOpenChange(value) {
            var _props$disabled = props.disabled,
                disabled = _props$disabled === void 0 ? false : _props$disabled;

            if (disabled) {
              return;
            }

            settingOpen(value);
          };

          var customizePrefixCls = props.prefixCls,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'top' : _props$placement,
              _props$trigger = props.trigger,
              trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
              _props$okType = props.okType,
              okType = _props$okType === void 0 ? 'primary' : _props$okType,
              _props$icon = props.icon,
              icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_ExclamationCircleFilled["default"], null) : _props$icon,
              children = props.children,
              overlayClassName = props.overlayClassName,
              restProps = __rest(props, ["prefixCls", "placement", "trigger", "okType", "icon", "children", "overlayClassName"]);

          var prefixCls = getPrefixCls('popover', customizePrefixCls);
          var prefixClsConfirm = getPrefixCls('popconfirm', customizePrefixCls);
          var overlayClassNames = (0, _classnames["default"])(prefixClsConfirm, overlayClassName);
          return /*#__PURE__*/React.createElement(_popover["default"], (0, _extends2["default"])({}, restProps, {
            trigger: trigger,
            prefixCls: prefixCls,
            placement: placement,
            onOpenChange: onOpenChange,
            open: open,
            ref: ref,
            overlayClassName: overlayClassNames,
            _overlay: /*#__PURE__*/React.createElement(_PurePanel.Overlay, (0, _extends2["default"])({
              okType: okType,
              icon: icon
            }, props, {
              prefixCls: prefixCls,
              close: close,
              onConfirm: onConfirm,
              onCancel: onCancel
            }))
          }), (0, _reactNode.cloneElement)(children, {
            onKeyDown: function onKeyDown(e) {
              var _a, _b;

              if ( /*#__PURE__*/React.isValidElement(children)) {
                (_b = children === null || children === void 0 ? void 0 : (_a = children.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
              }

              _onKeyDown(e);
            }
          }));
        });
        var _default = Popconfirm;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@ant-design/icons/ExclamationCircleFilled': _req3,
        'classnames': _req4,
        'rc-util/lib/hooks/useMergedState': _req5,
        'rc-util/lib/KeyCode': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../popover': _req9,
        '../_util/reactNode': _req10,
        './PurePanel': _req11
      }));
    }
  };
});
//# sourceMappingURL=77b7375eacb625eaa0bf83856cc5e4c5916b3060.js.map