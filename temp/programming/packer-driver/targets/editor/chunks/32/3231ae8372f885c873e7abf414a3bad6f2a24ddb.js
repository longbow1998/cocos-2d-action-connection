System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@ant-design/colors", "classnames", "rc-progress", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignColors) {
      _req2 = _antDesignColors.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcProgress2) {
      _req4 = _rcProgress2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
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

        var _colors = require("@ant-design/colors");

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcProgress = require("rc-progress");

        var React = _interopRequireWildcard(require("react"));

        var _utils = require("./utils");

        function getPercentage(_ref) {
          var percent = _ref.percent,
              success = _ref.success,
              successPercent = _ref.successPercent;
          var realSuccessPercent = (0, _utils.validProgress)((0, _utils.getSuccessPercent)({
            success: success,
            successPercent: successPercent
          }));
          return [realSuccessPercent, (0, _utils.validProgress)((0, _utils.validProgress)(percent) - realSuccessPercent)];
        }

        function getStrokeColor(_ref2) {
          var _ref2$success = _ref2.success,
              success = _ref2$success === void 0 ? {} : _ref2$success,
              strokeColor = _ref2.strokeColor;
          var successColor = success.strokeColor;
          return [successColor || _colors.presetPrimaryColors.green, strokeColor || null];
        }

        var Circle = function Circle(props) {
          var prefixCls = props.prefixCls,
              width = props.width,
              strokeWidth = props.strokeWidth,
              _props$trailColor = props.trailColor,
              trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
              _props$strokeLinecap = props.strokeLinecap,
              strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
              gapPosition = props.gapPosition,
              gapDegree = props.gapDegree,
              type = props.type,
              children = props.children,
              success = props.success;
          var circleSize = width || 120;
          var circleStyle = {
            width: circleSize,
            height: circleSize,
            fontSize: circleSize * 0.15 + 6
          };
          var circleWidth = strokeWidth || 6;
          var gapPos = gapPosition || type === 'dashboard' && 'bottom' || undefined;

          var getGapDegree = function getGapDegree() {
            // Support gapDeg = 0 when type = 'dashboard'
            if (gapDegree || gapDegree === 0) {
              return gapDegree;
            }

            if (type === 'dashboard') {
              return 75;
            }

            return undefined;
          }; // using className to style stroke color


          var isGradient = Object.prototype.toString.call(props.strokeColor) === '[object Object]';
          var strokeColor = getStrokeColor({
            success: success,
            strokeColor: props.strokeColor
          });
          var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
          return /*#__PURE__*/React.createElement("div", {
            className: wrapperClassName,
            style: circleStyle
          }, /*#__PURE__*/React.createElement(_rcProgress.Circle, {
            percent: getPercentage(props),
            strokeWidth: circleWidth,
            trailWidth: circleWidth,
            strokeColor: strokeColor,
            strokeLinecap: strokeLinecap,
            trailColor: trailColor,
            prefixCls: prefixCls,
            gapDegree: getGapDegree(),
            gapPosition: gapPos
          }), children);
        };

        var _default = Circle;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@ant-design/colors': _req2,
        'classnames': _req3,
        'rc-progress': _req4,
        'react': _req5,
        './utils': _req6
      }));
    }
  };
});
//# sourceMappingURL=3231ae8372f885c873e7abf414a3bad6f2a24ddb.js.map