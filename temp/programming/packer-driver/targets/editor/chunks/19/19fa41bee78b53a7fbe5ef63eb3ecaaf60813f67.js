System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _common = require("./common");

        var _excluded = ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"];

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var Line = function Line(_ref) {
          var className = _ref.className,
              percent = _ref.percent,
              prefixCls = _ref.prefixCls,
              strokeColor = _ref.strokeColor,
              strokeLinecap = _ref.strokeLinecap,
              strokeWidth = _ref.strokeWidth,
              style = _ref.style,
              trailColor = _ref.trailColor,
              trailWidth = _ref.trailWidth,
              transition = _ref.transition,
              restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded); // eslint-disable-next-line no-param-reassign

          delete restProps.gapPosition;
          var percentList = Array.isArray(percent) ? percent : [percent];
          var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
          var paths = (0, _common.useTransitionDuration)();
          var center = strokeWidth / 2;
          var right = 100 - strokeWidth / 2;
          var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
          var viewBoxString = "0 0 100 ".concat(strokeWidth);
          var stackPtg = 0;
          return /*#__PURE__*/React.createElement("svg", (0, _extends2.default)({
            className: (0, _classnames.default)("".concat(prefixCls, "-line"), className),
            viewBox: viewBoxString,
            preserveAspectRatio: "none",
            style: style
          }, restProps), /*#__PURE__*/React.createElement("path", {
            className: "".concat(prefixCls, "-line-trail"),
            d: pathString,
            strokeLinecap: strokeLinecap,
            stroke: trailColor,
            strokeWidth: trailWidth || strokeWidth,
            fillOpacity: "0"
          }), percentList.map(function (ptg, index) {
            var dashPercent = 1;

            switch (strokeLinecap) {
              case 'round':
                dashPercent = 1 - strokeWidth / 100;
                break;

              case 'square':
                dashPercent = 1 - strokeWidth / 2 / 100;
                break;

              default:
                dashPercent = 1;
                break;
            }

            var pathStyle = {
              strokeDasharray: "".concat(ptg * dashPercent, "px, 100px"),
              strokeDashoffset: "-".concat(stackPtg, "px"),
              transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
            };
            var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
            stackPtg += ptg;
            return /*#__PURE__*/React.createElement("path", {
              key: index,
              className: "".concat(prefixCls, "-line-path"),
              d: pathString,
              strokeLinecap: strokeLinecap,
              stroke: color,
              strokeWidth: strokeWidth,
              fillOpacity: "0",
              ref: function ref(elem) {
                // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
                // React will call the ref callback with the DOM element when the component mounts,
                // and call it with `null` when it unmounts.
                // Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.
                paths[index] = elem;
              },
              style: pathStyle
            });
          }));
        };

        Line.defaultProps = _common.defaultProps;
        Line.displayName = 'Line';
        var _default = Line;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        'react': _req3,
        'classnames': _req4,
        './common': _req5
      }));
    }
  };
});
//# sourceMappingURL=19fa41bee78b53a7fbe5ef63eb3ecaaf60813f67.js.map