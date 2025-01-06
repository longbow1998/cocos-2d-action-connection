System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _useFlexGapSupport = _interopRequireDefault(require("../_util/hooks/useFlexGapSupport"));

        var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));

        var _type = require("../_util/type");

        var _RowContext = _interopRequireDefault(require("./RowContext"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom', 'stretch');
        var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between', 'space-evenly');

        function useMergePropByScreen(oriProp, screen) {
          var _React$useState = React.useState(typeof oriProp === 'string' ? oriProp : ''),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              prop = _React$useState2[0],
              setProp = _React$useState2[1];

          var clacMergeAlignOrJustify = function clacMergeAlignOrJustify() {
            if (typeof oriProp === 'string') {
              setProp(oriProp);
            }

            if ((0, _typeof2["default"])(oriProp) !== 'object') {
              return;
            }

            for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
              var breakpoint = _responsiveObserve.responsiveArray[i]; // if do not match, do nothing

              if (!screen[breakpoint]) continue;
              var curVal = oriProp[breakpoint];

              if (curVal !== undefined) {
                setProp(curVal);
                return;
              }
            }
          };

          React.useEffect(function () {
            clacMergeAlignOrJustify();
          }, [JSON.stringify(oriProp), screen]);
          return prop;
        }

        var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var customizePrefixCls = props.prefixCls,
              justify = props.justify,
              align = props.align,
              className = props.className,
              style = props.style,
              children = props.children,
              _props$gutter = props.gutter,
              gutter = _props$gutter === void 0 ? 0 : _props$gutter,
              wrap = props.wrap,
              others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var _React$useState3 = React.useState({
            xs: true,
            sm: true,
            md: true,
            lg: true,
            xl: true,
            xxl: true
          }),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              screens = _React$useState4[0],
              setScreens = _React$useState4[1]; // to save screens info when responsiveObserve callback had been call


          var _React$useState5 = React.useState({
            xs: false,
            sm: false,
            md: false,
            lg: false,
            xl: false,
            xxl: false
          }),
              _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
              curScreens = _React$useState6[0],
              setCurScreens = _React$useState6[1]; // ================================== calc reponsive data ==================================


          var mergeAlign = useMergePropByScreen(align, curScreens);
          var mergeJustify = useMergePropByScreen(justify, curScreens);
          var supportFlexGap = (0, _useFlexGapSupport["default"])();
          var gutterRef = React.useRef(gutter); // ================================== Effect ==================================

          React.useEffect(function () {
            var token = _responsiveObserve["default"].subscribe(function (screen) {
              setCurScreens(screen);
              var currentGutter = gutterRef.current || 0;

              if (!Array.isArray(currentGutter) && (0, _typeof2["default"])(currentGutter) === 'object' || Array.isArray(currentGutter) && ((0, _typeof2["default"])(currentGutter[0]) === 'object' || (0, _typeof2["default"])(currentGutter[1]) === 'object')) {
                setScreens(screen);
              }
            });

            return function () {
              return _responsiveObserve["default"].unsubscribe(token);
            };
          }, []); // ================================== Render ==================================

          var getGutter = function getGutter() {
            var results = [undefined, undefined];
            var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];
            normalizedGutter.forEach(function (g, index) {
              if ((0, _typeof2["default"])(g) === 'object') {
                for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
                  var breakpoint = _responsiveObserve.responsiveArray[i];

                  if (screens[breakpoint] && g[breakpoint] !== undefined) {
                    results[index] = g[breakpoint];
                    break;
                  }
                }
              } else {
                results[index] = g;
              }
            });
            return results;
          };

          var prefixCls = getPrefixCls('row', customizePrefixCls);
          var gutters = getGutter();
          var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergeJustify), mergeJustify), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergeAlign), mergeAlign), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className); // Add gutter related style

          var rowStyle = {};
          var horizontalGutter = gutters[0] != null && gutters[0] > 0 ? gutters[0] / -2 : undefined;
          var verticalGutter = gutters[1] != null && gutters[1] > 0 ? gutters[1] / -2 : undefined;

          if (horizontalGutter) {
            rowStyle.marginLeft = horizontalGutter;
            rowStyle.marginRight = horizontalGutter;
          }

          if (supportFlexGap) {
            // Set gap direct if flex gap support
            var _gutters = (0, _slicedToArray2["default"])(gutters, 2);

            rowStyle.rowGap = _gutters[1];
          } else if (verticalGutter) {
            rowStyle.marginTop = verticalGutter;
            rowStyle.marginBottom = verticalGutter;
          } // "gutters" is a new array in each rendering phase, it'll make 'React.useMemo' effectless.
          // So we deconstruct "gutters" variable here.


          var _gutters2 = (0, _slicedToArray2["default"])(gutters, 2),
              gutterH = _gutters2[0],
              gutterV = _gutters2[1];

          var rowContext = React.useMemo(function () {
            return {
              gutter: [gutterH, gutterV],
              wrap: wrap,
              supportFlexGap: supportFlexGap
            };
          }, [gutterH, gutterV, wrap, supportFlexGap]);
          return /*#__PURE__*/React.createElement(_RowContext["default"].Provider, {
            value: rowContext
          }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
            className: classes,
            style: (0, _extends2["default"])((0, _extends2["default"])({}, rowStyle), style),
            ref: ref
          }), children));
        });

        if (process.env.NODE_ENV !== 'production') {
          Row.displayName = 'Row';
        }

        var _default = Row;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        'classnames': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../_util/hooks/useFlexGapSupport': _req8,
        '../_util/responsiveObserve': _req9,
        '../_util/type': _req10,
        './RowContext': _req11
      }));
    }
  };
});
//# sourceMappingURL=9f89f59c62eadd54a80b3630d66dc64322311f75.js.map