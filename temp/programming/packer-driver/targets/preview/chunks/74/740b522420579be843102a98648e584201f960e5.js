System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@ant-design/colors", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _sortGradient, _handleGradient, _default0, __cjsMetaURL;

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
    }, function (_antDesignColors) {
      _req2 = _antDesignColors.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
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
        exports.sortGradient = exports.handleGradient = exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _colors = require("@ant-design/colors");

        var React = _interopRequireWildcard(require("react"));

        var _utils = require("./utils");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        /**
         * @example
         *   {
         *     "0%": "#afc163",
         *     "75%": "#009900",
         *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
         *     "25%": "#66FF00",
         *     "100%": "#ffffff"
         *   }
         */


        var sortGradient = function sortGradient(gradients) {
          var tempArr = [];
          Object.keys(gradients).forEach(function (key) {
            var formattedKey = parseFloat(key.replace(/%/g, ''));

            if (!isNaN(formattedKey)) {
              tempArr.push({
                key: formattedKey,
                value: gradients[key]
              });
            }
          });
          tempArr = tempArr.sort(function (a, b) {
            return a.key - b.key;
          });
          return tempArr.map(function (_ref) {
            var key = _ref.key,
                value = _ref.value;
            return "".concat(value, " ").concat(key, "%");
          }).join(', ');
        };
        /**
         * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
         * butter, there is the bug. And... Besides women, there is the code.
         *
         * @example
         *   {
         *     "0%": "#afc163",
         *     "25%": "#66FF00",
         *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
         *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
         *     "100%": "#ffffff"
         *   }
         */


        exports.sortGradient = sortGradient;

        var handleGradient = function handleGradient(strokeColor, directionConfig) {
          var _strokeColor$from = strokeColor.from,
              from = _strokeColor$from === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$from,
              _strokeColor$to = strokeColor.to,
              to = _strokeColor$to === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$to,
              _strokeColor$directio = strokeColor.direction,
              direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
              rest = __rest(strokeColor, ["from", "to", "direction"]);

          if (Object.keys(rest).length !== 0) {
            var sortedGradients = sortGradient(rest);
            return {
              backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
            };
          }

          return {
            backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
          };
        };

        exports.handleGradient = handleGradient;

        var Line = function Line(props) {
          var prefixCls = props.prefixCls,
              directionConfig = props.direction,
              percent = props.percent,
              strokeWidth = props.strokeWidth,
              size = props.size,
              strokeColor = props.strokeColor,
              _props$strokeLinecap = props.strokeLinecap,
              strokeLinecap = _props$strokeLinecap === void 0 ? 'round' : _props$strokeLinecap,
              children = props.children,
              _props$trailColor = props.trailColor,
              trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
              success = props.success;
          var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
            background: strokeColor
          };
          var borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
          var trailStyle = {
            backgroundColor: trailColor || undefined,
            borderRadius: borderRadius
          };
          var percentStyle = (0, _extends2["default"])({
            width: "".concat((0, _utils.validProgress)(percent), "%"),
            height: strokeWidth || (size === 'small' ? 6 : 8),
            borderRadius: borderRadius
          }, backgroundProps);
          var successPercent = (0, _utils.getSuccessPercent)(props);
          var successPercentStyle = {
            width: "".concat((0, _utils.validProgress)(successPercent), "%"),
            height: strokeWidth || (size === 'small' ? 6 : 8),
            borderRadius: borderRadius,
            backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
          };
          var successSegment = successPercent !== undefined ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-success-bg"),
            style: successPercentStyle
          }) : null;
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-outer")
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inner"),
            style: trailStyle
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-bg"),
            style: percentStyle
          }), successSegment)), children);
        };

        var _default = Line;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _sortGradient = module.exports.sortGradient;
        _handleGradient = module.exports.handleGradient;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@ant-design/colors': _req2,
        'react': _req3,
        './utils': _req4
      }));
    }
  };
});
//# sourceMappingURL=740b522420579be843102a98648e584201f960e5.js.map