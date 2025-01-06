System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "classnames", "rc-motion", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req5 = _rcMotion2.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _reactNode = require("../_util/reactNode");

        var _Ribbon = _interopRequireDefault(require("./Ribbon"));

        var _ScrollNumber = _interopRequireDefault(require("./ScrollNumber"));

        var _utils = require("./utils");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Badge = function Badge(_a) {
          var _classNames, _classNames2;

          var customizePrefixCls = _a.prefixCls,
              customizeScrollNumberPrefixCls = _a.scrollNumberPrefixCls,
              children = _a.children,
              status = _a.status,
              text = _a.text,
              color = _a.color,
              _a$count = _a.count,
              count = _a$count === void 0 ? null : _a$count,
              _a$overflowCount = _a.overflowCount,
              overflowCount = _a$overflowCount === void 0 ? 99 : _a$overflowCount,
              _a$dot = _a.dot,
              dot = _a$dot === void 0 ? false : _a$dot,
              _a$size = _a.size,
              size = _a$size === void 0 ? 'default' : _a$size,
              title = _a.title,
              offset = _a.offset,
              style = _a.style,
              className = _a.className,
              _a$showZero = _a.showZero,
              showZero = _a$showZero === void 0 ? false : _a$showZero,
              restProps = __rest(_a, ["prefixCls", "scrollNumberPrefixCls", "children", "status", "text", "color", "count", "overflowCount", "dot", "size", "title", "offset", "style", "className", "showZero"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('badge', customizePrefixCls); // ================================ Misc ================================

          var numberedDisplayCount = count > overflowCount ? "".concat(overflowCount, "+") : count;
          var isZero = numberedDisplayCount === '0' || numberedDisplayCount === 0;
          var ignoreCount = count === null || isZero && !showZero;
          var hasStatus = (status !== null && status !== undefined || color !== null && color !== undefined) && ignoreCount;
          var showAsDot = dot && !isZero;
          var mergedCount = showAsDot ? '' : numberedDisplayCount;
          var isHidden = (0, React.useMemo)(function () {
            var isEmpty = mergedCount === null || mergedCount === undefined || mergedCount === '';
            return (isEmpty || isZero && !showZero) && !showAsDot;
          }, [mergedCount, isZero, showZero, showAsDot]); // Count should be cache in case hidden change it

          var countRef = (0, React.useRef)(count);

          if (!isHidden) {
            countRef.current = count;
          }

          var livingCount = countRef.current; // We need cache count since remove motion should not change count display

          var displayCountRef = (0, React.useRef)(mergedCount);

          if (!isHidden) {
            displayCountRef.current = mergedCount;
          }

          var displayCount = displayCountRef.current; // We will cache the dot status to avoid shaking on leaved motion

          var isDotRef = (0, React.useRef)(showAsDot);

          if (!isHidden) {
            isDotRef.current = showAsDot;
          } // =============================== Styles ===============================


          var mergedStyle = (0, React.useMemo)(function () {
            if (!offset) {
              return (0, _extends2["default"])({}, style);
            }

            var offsetStyle = {
              marginTop: offset[1]
            };

            if (direction === 'rtl') {
              offsetStyle.left = parseInt(offset[0], 10);
            } else {
              offsetStyle.right = -parseInt(offset[0], 10);
            }

            return (0, _extends2["default"])((0, _extends2["default"])({}, offsetStyle), style);
          }, [direction, offset, style]); // =============================== Render ===============================
          // >>> Title

          var titleNode = title !== null && title !== void 0 ? title : typeof livingCount === 'string' || typeof livingCount === 'number' ? livingCount : undefined; // >>> Status Text

          var statusTextNode = isHidden || !text ? null : /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-status-text")
          }, text); // >>> Display Component

          var displayNode = !livingCount || (0, _typeof2["default"])(livingCount) !== 'object' ? undefined : (0, _reactNode.cloneElement)(livingCount, function (oriProps) {
            return {
              style: (0, _extends2["default"])((0, _extends2["default"])({}, mergedStyle), oriProps.style)
            };
          }); // Shared styles

          var statusCls = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-dot"), hasStatus), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-").concat(status), !!status), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-").concat(color), (0, _utils.isPresetColor)(color)), _classNames));
          var statusStyle = {};

          if (color && !(0, _utils.isPresetColor)(color)) {
            statusStyle.background = color;
          }

          var badgeClassName = (0, _classnames["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-status"), hasStatus), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-not-a-wrapper"), !children), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className); // <Badge status="success" />

          if (!children && hasStatus) {
            var statusTextColor = mergedStyle.color;
            return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
              className: badgeClassName,
              style: mergedStyle
            }), /*#__PURE__*/React.createElement("span", {
              className: statusCls,
              style: statusStyle
            }), text && /*#__PURE__*/React.createElement("span", {
              style: {
                color: statusTextColor
              },
              className: "".concat(prefixCls, "-status-text")
            }, text));
          } // <Badge status="success" count={<Icon type="xxx" />}></Badge>


          return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, restProps, {
            className: badgeClassName
          }), children, /*#__PURE__*/React.createElement(_rcMotion["default"], {
            visible: !isHidden,
            motionName: "".concat(prefixCls, "-zoom"),
            motionAppear: false,
            motionDeadline: 1000
          }, function (_ref) {
            var _classNames3;

            var motionClassName = _ref.className;
            var scrollNumberPrefixCls = getPrefixCls('scroll-number', customizeScrollNumberPrefixCls);
            var isDot = isDotRef.current;
            var scrollNumberCls = (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-dot"), isDot), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-count"), !isDot), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-count-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-multiple-words"), !isDot && displayCount && displayCount.toString().length > 1), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-status-").concat(status), !!status), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-status-").concat(color), (0, _utils.isPresetColor)(color)), _classNames3));
            var scrollNumberStyle = (0, _extends2["default"])({}, mergedStyle);

            if (color && !(0, _utils.isPresetColor)(color)) {
              scrollNumberStyle = scrollNumberStyle || {};
              scrollNumberStyle.background = color;
            }

            return /*#__PURE__*/React.createElement(_ScrollNumber["default"], {
              prefixCls: scrollNumberPrefixCls,
              show: !isHidden,
              motionClassName: motionClassName,
              className: scrollNumberCls,
              count: displayCount,
              title: titleNode,
              style: scrollNumberStyle,
              key: "scrollNumber"
            }, displayNode);
          }), statusTextNode);
        };

        Badge.Ribbon = _Ribbon["default"];
        var _default = Badge;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@babel/runtime/helpers/extends': _req3,
        'classnames': _req4,
        'rc-motion': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../_util/reactNode': _req8,
        './Ribbon': _req9,
        './ScrollNumber': _req10,
        './utils': _req11
      }));
    }
  };
});
//# sourceMappingURL=d49f36f2d3720fb4f0163d309ce3488622df8118.js.map