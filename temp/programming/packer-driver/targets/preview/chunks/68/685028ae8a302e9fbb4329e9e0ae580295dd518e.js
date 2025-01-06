System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-slider", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcSlider2) {
      _req6 = _rcSlider2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcSlider = _interopRequireDefault(require("rc-slider"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _SliderTooltip = _interopRequireDefault(require("./SliderTooltip"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Slider = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              getPopupContainer = _React$useContext.getPopupContainer;

          var _React$useState = React.useState({}),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              opens = _React$useState2[0],
              setOpens = _React$useState2[1];

          var toggleTooltipOpen = function toggleTooltipOpen(index, open) {
            setOpens(function (prev) {
              return (0, _extends3["default"])((0, _extends3["default"])({}, prev), (0, _defineProperty2["default"])({}, index, open));
            });
          };

          var getTooltipPlacement = function getTooltipPlacement(tooltipPlacement, vertical) {
            if (tooltipPlacement) {
              return tooltipPlacement;
            }

            if (!vertical) {
              return 'top';
            }

            return direction === 'rtl' ? 'left' : 'right';
          };

          var customizePrefixCls = props.prefixCls,
              range = props.range,
              className = props.className,
              restProps = __rest(props, ["prefixCls", "range", "className"]);

          var prefixCls = getPrefixCls('slider', customizePrefixCls);
          var cls = (0, _classnames["default"])(className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl')); // make reverse default on rtl direction

          if (direction === 'rtl' && !restProps.vertical) {
            restProps.reverse = !restProps.reverse;
          } // Range config


          var _React$useMemo = React.useMemo(function () {
            if (!range) {
              return [false];
            }

            return (0, _typeof2["default"])(range) === 'object' ? [true, range.draggableTrack] : [true, false];
          }, [range]),
              _React$useMemo2 = (0, _slicedToArray2["default"])(_React$useMemo, 2),
              mergedRange = _React$useMemo2[0],
              draggableTrack = _React$useMemo2[1]; // Warning for deprecated usage


          if (process.env.NODE_ENV !== 'production') {
            [['tooltipPrefixCls', 'prefixCls'], ['getTooltipPopupContainer', 'getPopupContainer'], ['tipFormatter', 'formatter'], ['tooltipPlacement', 'placement'], ['tooltipVisible', 'open']].forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                  deprecatedName = _ref2[0],
                  newName = _ref2[1];

              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(deprecatedName in props), 'Slider', "`".concat(deprecatedName, "` is deprecated which will be removed in next major version, please use `tooltip.").concat(newName, "` instead.")) : void 0;
            });
          }

          var handleRender = function handleRender(node, info) {
            var _a;

            var index = info.index,
                dragging = info.dragging;
            var rootPrefixCls = getPrefixCls();
            var _props$tooltip = props.tooltip,
                tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
                vertical = props.vertical;
            var tooltipProps = (0, _extends3["default"])({
              formatter: (_a = props.tipFormatter) !== null && _a !== void 0 ? _a : // eslint-disable-next-line func-names
              function (value) {
                return typeof value === 'number' ? value.toString() : '';
              },
              open: props.tooltipVisible,
              placement: props.tooltipPlacement,
              getPopupContainer: props.getTooltipPopupContainer
            }, tooltip);
            var tooltipOpen = tooltipProps.open,
                tooltipPlacement = tooltipProps.placement,
                getTooltipPopupContainer = tooltipProps.getPopupContainer,
                customizeTooltipPrefixCls = tooltipProps.prefixCls,
                tipFormatter = tooltipProps.formatter;
            var isTipFormatter = tipFormatter ? opens[index] || dragging : false;
            var open = tooltipOpen || tooltipOpen === undefined && isTipFormatter;
            var passedProps = (0, _extends3["default"])((0, _extends3["default"])({}, node.props), {
              onMouseEnter: function onMouseEnter() {
                return toggleTooltipOpen(index, true);
              },
              onMouseLeave: function onMouseLeave() {
                return toggleTooltipOpen(index, false);
              }
            });
            var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);
            return /*#__PURE__*/React.createElement(_SliderTooltip["default"], {
              prefixCls: tooltipPrefixCls,
              title: tipFormatter ? tipFormatter(info.value) : '',
              open: open,
              placement: getTooltipPlacement(tooltipPlacement, vertical),
              transitionName: "".concat(rootPrefixCls, "-zoom-down"),
              key: index,
              overlayClassName: "".concat(prefixCls, "-tooltip"),
              getPopupContainer: getTooltipPopupContainer || getPopupContainer
            }, /*#__PURE__*/React.cloneElement(node, passedProps));
          };

          return /*#__PURE__*/React.createElement(_rcSlider["default"], (0, _extends3["default"])({}, restProps, {
            step: restProps.step,
            range: mergedRange,
            draggableTrack: draggableTrack,
            className: cls,
            ref: ref,
            prefixCls: prefixCls,
            handleRender: handleRender
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Slider.displayName = 'Slider';
        }

        var _default = Slider;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        'classnames': _req5,
        'rc-slider': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/warning': _req9,
        './SliderTooltip': _req10
      }));
    }
  };
});
//# sourceMappingURL=685028ae8a302e9fbb4329e9e0ae580295dd518e.js.map