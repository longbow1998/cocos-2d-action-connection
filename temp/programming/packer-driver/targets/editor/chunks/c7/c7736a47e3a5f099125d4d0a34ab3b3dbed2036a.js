System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/CheckCircleFilled", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/ExclamationCircleFilled", "@ant-design/icons/WarningFilled", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, _IconMap, _ExceptionMap, __cjsMetaURL;

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
    }, function (_antDesignIconsCheckCircleFilled) {
      _req2 = _antDesignIconsCheckCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req3 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleFilled) {
      _req4 = _antDesignIconsExclamationCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsWarningFilled) {
      _req5 = _antDesignIconsWarningFilled.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
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
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
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
        exports["default"] = exports.IconMap = exports.ExceptionMap = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

        var _WarningFilled = _interopRequireDefault(require("@ant-design/icons/WarningFilled"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _noFound = _interopRequireDefault(require("./noFound"));

        var _serverError = _interopRequireDefault(require("./serverError"));

        var _unauthorized = _interopRequireDefault(require("./unauthorized"));

        var IconMap = {
          success: _CheckCircleFilled["default"],
          error: _CloseCircleFilled["default"],
          info: _ExclamationCircleFilled["default"],
          warning: _WarningFilled["default"]
        };
        exports.IconMap = IconMap;
        var ExceptionMap = {
          '404': _noFound["default"],
          '500': _serverError["default"],
          '403': _unauthorized["default"]
        }; // ExceptionImageMap keys

        exports.ExceptionMap = ExceptionMap;
        var ExceptionStatus = Object.keys(ExceptionMap);

        var Icon = function Icon(_ref) {
          var prefixCls = _ref.prefixCls,
              icon = _ref.icon,
              status = _ref.status;
          var className = (0, _classnames["default"])("".concat(prefixCls, "-icon"));
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Result', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;

          if (ExceptionStatus.includes("".concat(status))) {
            var SVGComponent = ExceptionMap[status];
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(className, " ").concat(prefixCls, "-image")
            }, /*#__PURE__*/React.createElement(SVGComponent, null));
          }

          var iconNode = /*#__PURE__*/React.createElement(IconMap[status]);

          if (icon === null || icon === false) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            className: className
          }, icon || iconNode);
        };

        var Extra = function Extra(_ref2) {
          var prefixCls = _ref2.prefixCls,
              extra = _ref2.extra;

          if (!extra) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-extra")
          }, extra);
        };

        var Result = function Result(_ref3) {
          var customizePrefixCls = _ref3.prefixCls,
              customizeClassName = _ref3.className,
              subTitle = _ref3.subTitle,
              title = _ref3.title,
              style = _ref3.style,
              children = _ref3.children,
              _ref3$status = _ref3.status,
              status = _ref3$status === void 0 ? 'info' : _ref3$status,
              icon = _ref3.icon,
              extra = _ref3.extra;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('result', customizePrefixCls);
          var className = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(status), customizeClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
          return /*#__PURE__*/React.createElement("div", {
            className: className,
            style: style
          }, /*#__PURE__*/React.createElement(Icon, {
            prefixCls: prefixCls,
            status: status,
            icon: icon
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-title")
          }, title), subTitle && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-subtitle")
          }, subTitle), /*#__PURE__*/React.createElement(Extra, {
            prefixCls: prefixCls,
            extra: extra
          }), children && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, children));
        };

        Result.PRESENTED_IMAGE_403 = ExceptionMap['403'];
        Result.PRESENTED_IMAGE_404 = ExceptionMap['404'];
        Result.PRESENTED_IMAGE_500 = ExceptionMap['500'];
        var _default = Result;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _IconMap = module.exports.IconMap;
        _ExceptionMap = module.exports.ExceptionMap;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@ant-design/icons/CheckCircleFilled': _req2,
        '@ant-design/icons/CloseCircleFilled': _req3,
        '@ant-design/icons/ExclamationCircleFilled': _req4,
        '@ant-design/icons/WarningFilled': _req5,
        'classnames': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/warning': _req9,
        './noFound': _req10,
        './serverError': _req11,
        './unauthorized': _req12
      }));
    }
  };
});
//# sourceMappingURL=c7736a47e3a5f099125d4d0a34ab3b3dbed2036a.js.map