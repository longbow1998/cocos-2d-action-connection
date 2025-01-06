System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/CheckCircleFilled", "@ant-design/icons/CheckCircleOutlined", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/CloseCircleOutlined", "@ant-design/icons/CloseOutlined", "@ant-design/icons/ExclamationCircleFilled", "@ant-design/icons/ExclamationCircleOutlined", "@ant-design/icons/InfoCircleFilled", "@ant-design/icons/InfoCircleOutlined", "classnames", "rc-motion", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_antDesignIconsCheckCircleFilled) {
      _req4 = _antDesignIconsCheckCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCheckCircleOutlined) {
      _req5 = _antDesignIconsCheckCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req6 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleOutlined) {
      _req7 = _antDesignIconsCloseCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req8 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleFilled) {
      _req9 = _antDesignIconsExclamationCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleOutlined) {
      _req10 = _antDesignIconsExclamationCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsInfoCircleFilled) {
      _req11 = _antDesignIconsInfoCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsInfoCircleOutlined) {
      _req12 = _antDesignIconsInfoCircleOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req13 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req14 = _rcMotion2.__cjsMetaURL;
    }, function (_react) {
      _req15 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req16 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req17 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req18 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req19 = _unresolved_5.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

        var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CheckCircleOutlined"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

        var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

        var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons/InfoCircleFilled"));

        var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons/InfoCircleOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _getDataOrAriaProps = _interopRequireDefault(require("../_util/getDataOrAriaProps"));

        var _reactNode = require("../_util/reactNode");

        var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var iconMapFilled = {
          success: _CheckCircleFilled["default"],
          info: _InfoCircleFilled["default"],
          error: _CloseCircleFilled["default"],
          warning: _ExclamationCircleFilled["default"]
        };
        var iconMapOutlined = {
          success: _CheckCircleOutlined["default"],
          info: _InfoCircleOutlined["default"],
          error: _CloseCircleOutlined["default"],
          warning: _ExclamationCircleOutlined["default"]
        };

        var IconNode = function IconNode(props) {
          var description = props.description,
              icon = props.icon,
              prefixCls = props.prefixCls,
              type = props.type;
          var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

          if (icon) {
            return (0, _reactNode.replaceElement)(icon, /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-icon")
            }, icon), function () {
              return {
                className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), (0, _defineProperty2["default"])({}, icon.props.className, icon.props.className))
              };
            });
          }

          return /*#__PURE__*/React.createElement(iconType, {
            className: "".concat(prefixCls, "-icon")
          });
        };

        var CloseIcon = function CloseIcon(props) {
          var isClosable = props.isClosable,
              closeText = props.closeText,
              prefixCls = props.prefixCls,
              closeIcon = props.closeIcon,
              handleClose = props.handleClose;
          return isClosable ? /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: handleClose,
            className: "".concat(prefixCls, "-close-icon"),
            tabIndex: 0
          }, closeText ? /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-close-text")
          }, closeText) : closeIcon) : null;
        };

        var Alert = function Alert(_a) {
          var _classNames2;

          var description = _a.description,
              customizePrefixCls = _a.prefixCls,
              message = _a.message,
              banner = _a.banner,
              _a$className = _a.className,
              className = _a$className === void 0 ? '' : _a$className,
              style = _a.style,
              onMouseEnter = _a.onMouseEnter,
              onMouseLeave = _a.onMouseLeave,
              onClick = _a.onClick,
              afterClose = _a.afterClose,
              showIcon = _a.showIcon,
              closable = _a.closable,
              closeText = _a.closeText,
              _a$closeIcon = _a.closeIcon,
              closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _a$closeIcon,
              action = _a.action,
              props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText", "closeIcon", "action"]);

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              closed = _React$useState2[0],
              setClosed = _React$useState2[1];

          var ref = React.useRef();

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('alert', customizePrefixCls);

          var handleClose = function handleClose(e) {
            var _a;

            setClosed(true);
            (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
          };

          var getType = function getType() {
            var type = props.type;

            if (type !== undefined) {
              return type;
            } // banner 模式默认为警告


            return banner ? 'warning' : 'info';
          }; // closeable when closeText is assigned


          var isClosable = closeText ? true : closable;
          var type = getType(); // banner 模式默认有 Icon

          var isShowIcon = banner && showIcon === undefined ? true : showIcon;
          var alertCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-with-description"), !!description), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-banner"), !!banner), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
          var dataOrAriaProps = (0, _getDataOrAriaProps["default"])(props);
          return /*#__PURE__*/React.createElement(_rcMotion["default"], {
            visible: !closed,
            motionName: "".concat(prefixCls, "-motion"),
            motionAppear: false,
            motionEnter: false,
            onLeaveStart: function onLeaveStart(node) {
              return {
                maxHeight: node.offsetHeight
              };
            },
            onLeaveEnd: afterClose
          }, function (_ref) {
            var motionClassName = _ref.className,
                motionStyle = _ref.style;
            return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
              ref: ref,
              "data-show": !closed,
              className: (0, _classnames["default"])(alertCls, motionClassName),
              style: (0, _extends2["default"])((0, _extends2["default"])({}, style), motionStyle),
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              onClick: onClick,
              role: "alert"
            }, dataOrAriaProps), isShowIcon ? /*#__PURE__*/React.createElement(IconNode, {
              description: description,
              icon: props.icon,
              prefixCls: prefixCls,
              type: type
            }) : null, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-content")
            }, message ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-message")
            }, message) : null, description ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-description")
            }, description) : null), action ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-action")
            }, action) : null, /*#__PURE__*/React.createElement(CloseIcon, {
              isClosable: !!isClosable,
              closeText: closeText,
              prefixCls: prefixCls,
              closeIcon: closeIcon,
              handleClose: handleClose
            }));
          });
        };

        Alert.ErrorBoundary = _ErrorBoundary["default"];
        var _default = Alert;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@ant-design/icons/CheckCircleFilled': _req4,
        '@ant-design/icons/CheckCircleOutlined': _req5,
        '@ant-design/icons/CloseCircleFilled': _req6,
        '@ant-design/icons/CloseCircleOutlined': _req7,
        '@ant-design/icons/CloseOutlined': _req8,
        '@ant-design/icons/ExclamationCircleFilled': _req9,
        '@ant-design/icons/ExclamationCircleOutlined': _req10,
        '@ant-design/icons/InfoCircleFilled': _req11,
        '@ant-design/icons/InfoCircleOutlined': _req12,
        'classnames': _req13,
        'rc-motion': _req14,
        'react': _req15,
        '../config-provider': _req16,
        '../_util/getDataOrAriaProps': _req17,
        '../_util/reactNode': _req18,
        './ErrorBoundary': _req19
      }));
    }
  };
});
//# sourceMappingURL=7633818a861cac3a0bd46497f54e4c0a04384fec.js.map