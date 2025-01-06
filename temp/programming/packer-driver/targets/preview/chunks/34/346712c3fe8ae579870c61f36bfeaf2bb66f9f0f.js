System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/CheckCircleFilled", "@ant-design/icons/CheckOutlined", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/CloseOutlined", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
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
    }, function (_antDesignIconsCheckCircleFilled) {
      _req3 = _antDesignIconsCheckCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCheckOutlined) {
      _req4 = _antDesignIconsCheckOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req5 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req6 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req8 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req9 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req14 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req15 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req16 = _unresolved_8.__cjsMetaURL;
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

        var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

        var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _type = require("../_util/type");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _Circle = _interopRequireDefault(require("./Circle"));

        var _Line = _interopRequireDefault(require("./Line"));

        var _Steps = _interopRequireDefault(require("./Steps"));

        var _utils = require("./utils");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var ProgressTypes = (0, _type.tuple)('line', 'circle', 'dashboard');
        var ProgressStatuses = (0, _type.tuple)('normal', 'exception', 'active', 'success');

        var Progress = function Progress(props) {
          var _classNames;

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              steps = props.steps,
              strokeColor = props.strokeColor,
              _props$percent = props.percent,
              percent = _props$percent === void 0 ? 0 : _props$percent,
              _props$size = props.size,
              size = _props$size === void 0 ? 'default' : _props$size,
              _props$showInfo = props.showInfo,
              showInfo = _props$showInfo === void 0 ? true : _props$showInfo,
              _props$type = props.type,
              type = _props$type === void 0 ? 'line' : _props$type,
              restProps = __rest(props, ["prefixCls", "className", "steps", "strokeColor", "percent", "size", "showInfo", "type"]);

          function getPercentNumber() {
            var successPercent = (0, _utils.getSuccessPercent)(props);
            return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
          }

          function getProgressStatus() {
            var status = props.status;

            if (!ProgressStatuses.includes(status) && getPercentNumber() >= 100) {
              return 'success';
            }

            return status || 'normal';
          }

          function renderProcessInfo(prefixCls, progressStatus) {
            var format = props.format;
            var successPercent = (0, _utils.getSuccessPercent)(props);

            if (!showInfo) {
              return null;
            }

            var text;

            var textFormatter = format || function (percentNumber) {
              return "".concat(percentNumber, "%");
            };

            var isLineType = type === 'line';

            if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
              text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
            } else if (progressStatus === 'exception') {
              text = isLineType ? /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
            } else if (progressStatus === 'success') {
              text = isLineType ? /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
            }

            return /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-text"),
              title: typeof text === 'string' ? text : undefined
            }, text);
          }

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('progress', customizePrefixCls);
          var progressStatus = getProgressStatus();
          var progressInfo = renderProcessInfo(prefixCls, progressStatus);
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.') : void 0;
          var strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
          var strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
          var progress; // Render progress shape

          if (type === 'line') {
            progress = steps ? /*#__PURE__*/React.createElement(_Steps["default"], (0, _extends2["default"])({}, props, {
              strokeColor: strokeColorNotGradient,
              prefixCls: prefixCls,
              steps: steps
            }), progressInfo) : /*#__PURE__*/React.createElement(_Line["default"], (0, _extends2["default"])({}, props, {
              strokeColor: strokeColorNotArray,
              prefixCls: prefixCls,
              direction: direction
            }), progressInfo);
          } else if (type === 'circle' || type === 'dashboard') {
            progress = /*#__PURE__*/React.createElement(_Circle["default"], (0, _extends2["default"])({}, props, {
              strokeColor: strokeColorNotArray,
              prefixCls: prefixCls,
              progressStatus: progressStatus
            }), progressInfo);
          }

          var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, (0, _omit["default"])(restProps, ['status', 'format', 'trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent']), {
            className: classString,
            role: "progressbar"
          }), progress);
        };

        var _default = Progress;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/CheckCircleFilled': _req3,
        '@ant-design/icons/CheckOutlined': _req4,
        '@ant-design/icons/CloseCircleFilled': _req5,
        '@ant-design/icons/CloseOutlined': _req6,
        'classnames': _req7,
        'rc-util/lib/omit': _req8,
        'react': _req9,
        '../config-provider': _req10,
        '../_util/type': _req11,
        '../_util/warning': _req12,
        './Circle': _req13,
        './Line': _req14,
        './Steps': _req15,
        './utils': _req16
      }));
    }
  };
});
//# sourceMappingURL=346712c3fe8ae579870c61f36bfeaf2bb66f9f0f.js.map