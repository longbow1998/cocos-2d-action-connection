System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/CloseOutlined", "classnames", "rc-dialog", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsCloseOutlined) {
      _req3 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcDialog2) {
      _req5 = _rcDialog2.__cjsMetaURL;
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
    }, function (_unresolved_8) {
      _req13 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req14 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req15 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req16 = _unresolved_11.__cjsMetaURL;
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

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcDialog = _interopRequireDefault(require("rc-dialog"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var _button2 = require("../button/button");

        var _configProvider = require("../config-provider");

        var _context = require("../form/context");

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _Compact = require("../space/Compact");

        var _motion = require("../_util/motion");

        var _styleChecker = require("../_util/styleChecker");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _locale = require("./locale");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var mousePosition; // ref: https://github.com/ant-design/ant-design/issues/15795

        var getClickPosition = function getClickPosition(e) {
          mousePosition = {
            x: e.pageX,
            y: e.pageY
          }; // 100ms 内发生过点击事件，则从点击位置动画展示
          // 否则直接 zoom 展示
          // 这样可以兼容非点击方式展开

          setTimeout(function () {
            mousePosition = null;
          }, 100);
        }; // 只有点击事件支持从鼠标位置动画展开


        if ((0, _styleChecker.canUseDocElement)()) {
          document.documentElement.addEventListener('click', getClickPosition, true);
        }

        var Modal = function Modal(props) {
          var _classNames;

          var _a;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getContextPopupContainer = _React$useContext.getPopupContainer,
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var handleCancel = function handleCancel(e) {
            var onCancel = props.onCancel;
            onCancel === null || onCancel === void 0 ? void 0 : onCancel(e);
          };

          var handleOk = function handleOk(e) {
            var onOk = props.onOk;
            onOk === null || onOk === void 0 ? void 0 : onOk(e);
          };

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('visible' in props), 'Modal', "`visible` will be removed in next major version, please use `open` instead.") : void 0;

          var customizePrefixCls = props.prefixCls,
              footer = props.footer,
              visible = props.visible,
              _props$open = props.open,
              open = _props$open === void 0 ? false : _props$open,
              wrapClassName = props.wrapClassName,
              centered = props.centered,
              getContainer = props.getContainer,
              closeIcon = props.closeIcon,
              _props$focusTriggerAf = props.focusTriggerAfterClose,
              focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
              _props$width = props.width,
              width = _props$width === void 0 ? 520 : _props$width,
              restProps = __rest(props, ["prefixCls", "footer", "visible", "open", "wrapClassName", "centered", "getContainer", "closeIcon", "focusTriggerAfterClose", "width"]);

          var prefixCls = getPrefixCls('modal', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var defaultFooter = /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Modal",
            defaultLocale: (0, _locale.getConfirmLocale)()
          }, function (contextLocale) {
            var okText = props.okText,
                _props$okType = props.okType,
                okType = _props$okType === void 0 ? 'primary' : _props$okType,
                cancelText = props.cancelText,
                _props$confirmLoading = props.confirmLoading,
                confirmLoading = _props$confirmLoading === void 0 ? false : _props$confirmLoading;
            return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
              onClick: handleCancel
            }, props.cancelButtonProps), cancelText || contextLocale.cancelText), /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, (0, _button2.convertLegacyProps)(okType), {
              loading: confirmLoading,
              onClick: handleOk
            }, props.okButtonProps), okText !== null && okText !== void 0 ? okText : contextLocale.okText));
          });
          var closeIconToRender = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-close-x")
          }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
            className: "".concat(prefixCls, "-close-icon")
          }));
          var wrapClassNameExtended = (0, _classnames["default"])(wrapClassName, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-centered"), !!centered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrap-rtl"), direction === 'rtl'), _classNames));
          return /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
            status: true,
            override: true
          }, /*#__PURE__*/React.createElement(_rcDialog["default"], (0, _extends2["default"])({
            width: width
          }, restProps, {
            getContainer: getContainer === undefined ? getContextPopupContainer : getContainer,
            prefixCls: prefixCls,
            wrapClassName: wrapClassNameExtended,
            footer: footer === undefined ? defaultFooter : footer,
            visible: open || visible,
            mousePosition: (_a = restProps.mousePosition) !== null && _a !== void 0 ? _a : mousePosition,
            onClose: handleCancel,
            closeIcon: closeIconToRender,
            focusTriggerAfterClose: focusTriggerAfterClose,
            transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', props.transitionName),
            maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', props.maskTransitionName)
          }))));
        };

        var _default = Modal;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/CloseOutlined': _req3,
        'classnames': _req4,
        'rc-dialog': _req5,
        'react': _req6,
        '../button': _req7,
        '../button/button': _req8,
        '../config-provider': _req9,
        '../form/context': _req10,
        '../locale-provider/LocaleReceiver': _req11,
        '../space/Compact': _req12,
        '../_util/motion': _req13,
        '../_util/styleChecker': _req14,
        '../_util/warning': _req15,
        './locale': _req16
      }));
    }
  };
});
//# sourceMappingURL=dc6bd93279fc32a0ac03ea4e09ddc8ad91fb9f16.js.map