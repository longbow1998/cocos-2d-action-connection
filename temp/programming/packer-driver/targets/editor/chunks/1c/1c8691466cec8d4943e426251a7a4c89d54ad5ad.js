System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/extends", "classnames", "rc-tooltip", "rc-util/lib/hooks/useMergedState", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcTooltip2) {
      _req5 = _rcTooltip2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req6 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
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
    }, function (_unresolved_7) {
      _req13 = _unresolved_7.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTooltip = _interopRequireDefault(require("rc-tooltip"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _colors = require("../_util/colors");

        var _motion = require("../_util/motion");

        var _placements = _interopRequireDefault(require("../_util/placements"));

        var _reactNode = require("../_util/reactNode");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var splitObject = function splitObject(obj, keys) {
          var picked = {};
          var omitted = (0, _extends2["default"])({}, obj);
          keys.forEach(function (key) {
            if (obj && key in obj) {
              picked[key] = obj[key];
              delete omitted[key];
            }
          });
          return {
            picked: picked,
            omitted: omitted
          };
        };

        var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
        // mouse events don't trigger at disabled button in Chrome
        // https://github.com/react-component/tooltip/issues/18

        function getDisabledCompatibleChildren(element, prefixCls) {
          var elementType = element.type;

          if ((elementType.__ANT_BUTTON === true || element.type === 'button') && element.props.disabled || elementType.__ANT_SWITCH === true && (element.props.disabled || element.props.loading) || elementType.__ANT_RADIO === true && element.props.disabled) {
            // Pick some layout related style properties up to span
            // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
            var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
                picked = _splitObject.picked,
                omitted = _splitObject.omitted;

            var spanStyle = (0, _extends2["default"])((0, _extends2["default"])({
              display: 'inline-block'
            }, picked), {
              cursor: 'not-allowed',
              width: element.props.block ? '100%' : undefined
            });
            var buttonStyle = (0, _extends2["default"])((0, _extends2["default"])({}, omitted), {
              pointerEvents: 'none'
            });
            var child = (0, _reactNode.cloneElement)(element, {
              style: buttonStyle,
              className: null
            });
            return /*#__PURE__*/React.createElement("span", {
              style: spanStyle,
              className: (0, _classnames["default"])(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
            }, child);
          }

          return element;
        }

        var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames2;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getContextPopupContainer = _React$useContext.getPopupContainer,
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction; // Warning for deprecated usage


          if (process.env.NODE_ENV !== 'production') {
            [['visible', 'open'], ['defaultVisible', 'defaultOpen'], ['onVisibleChange', 'onOpenChange'], ['afterVisibleChange', 'afterOpenChange']].forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                  deprecatedName = _ref2[0],
                  newName = _ref2[1];

              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(deprecatedName in props), 'Tooltip', "`".concat(deprecatedName, "` is deprecated which will be removed in next major version, please use `").concat(newName, "` instead.")) : void 0;
            });
          }

          var _useMergedState = (0, _useMergedState3["default"])(false, {
            value: props.open !== undefined ? props.open : props.visible,
            defaultValue: props.defaultOpen !== undefined ? props.defaultOpen : props.defaultVisible
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              open = _useMergedState2[0],
              setOpen = _useMergedState2[1];

          var isNoTitle = function isNoTitle() {
            var title = props.title,
                overlay = props.overlay;
            return !title && !overlay && title !== 0; // overlay for old version compatibility
          };

          var onOpenChange = function onOpenChange(vis) {
            var _a, _b;

            setOpen(isNoTitle() ? false : vis);

            if (!isNoTitle()) {
              (_a = props.onOpenChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
              (_b = props.onVisibleChange) === null || _b === void 0 ? void 0 : _b.call(props, vis);
            }
          };

          var getTooltipPlacements = function getTooltipPlacements() {
            var builtinPlacements = props.builtinPlacements,
                _props$arrowPointAtCe = props.arrowPointAtCenter,
                arrowPointAtCenter = _props$arrowPointAtCe === void 0 ? false : _props$arrowPointAtCe,
                _props$autoAdjustOver = props.autoAdjustOverflow,
                autoAdjustOverflow = _props$autoAdjustOver === void 0 ? true : _props$autoAdjustOver;
            return builtinPlacements || (0, _placements["default"])({
              arrowPointAtCenter: arrowPointAtCenter,
              autoAdjustOverflow: autoAdjustOverflow
            });
          }; // 动态设置动画点


          var onPopupAlign = function onPopupAlign(domNode, align) {
            var placements = getTooltipPlacements(); // 当前返回的位置

            var placement = Object.keys(placements).find(function (key) {
              var _a, _b;

              return placements[key].points[0] === ((_a = align.points) === null || _a === void 0 ? void 0 : _a[0]) && placements[key].points[1] === ((_b = align.points) === null || _b === void 0 ? void 0 : _b[1]);
            });

            if (!placement) {
              return;
            } // 根据当前坐标设置动画点


            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
              top: '50%',
              left: '50%'
            };

            if (/top|Bottom/.test(placement)) {
              transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
            } else if (/Top|bottom/.test(placement)) {
              transformOrigin.top = "".concat(-align.offset[1], "px");
            }

            if (/left|Right/.test(placement)) {
              transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
            } else if (/right|Left/.test(placement)) {
              transformOrigin.left = "".concat(-align.offset[0], "px");
            }

            domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
          };

          var getOverlay = function getOverlay() {
            var title = props.title,
                overlay = props.overlay;

            if (title === 0) {
              return title;
            }

            return overlay || title || '';
          };

          var getPopupContainer = props.getPopupContainer,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'top' : _props$placement,
              _props$mouseEnterDela = props.mouseEnterDelay,
              mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.1 : _props$mouseEnterDela,
              _props$mouseLeaveDela = props.mouseLeaveDelay,
              mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
              otherProps = __rest(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay"]);

          var customizePrefixCls = props.prefixCls,
              openClassName = props.openClassName,
              getTooltipContainer = props.getTooltipContainer,
              overlayClassName = props.overlayClassName,
              color = props.color,
              overlayInnerStyle = props.overlayInnerStyle,
              children = props.children;
          var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var tempOpen = open; // Hide tooltip when there is no title

          if (!('open' in props) && !('visible' in props) && isNoTitle()) {
            tempOpen = false;
          }

          var child = getDisabledCompatibleChildren((0, _reactNode.isValidElement)(children) && !(0, _reactNode.isFragment)(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
          var childProps = child.props;
          var childCls = !childProps.className || typeof childProps.className === 'string' ? (0, _classnames["default"])(childProps.className, (0, _defineProperty2["default"])({}, openClassName || "".concat(prefixCls, "-open"), true)) : childProps.className;
          var customOverlayClassName = (0, _classnames["default"])(overlayClassName, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
          var formattedOverlayInnerStyle = overlayInnerStyle;
          var arrowContentStyle = {};

          if (color && !PresetColorRegex.test(color)) {
            formattedOverlayInnerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, overlayInnerStyle), {
              background: color
            }); // @ts-ignore

            arrowContentStyle = {
              '--antd-arrow-background-color': color
            };
          }

          return /*#__PURE__*/React.createElement(_rcTooltip["default"], (0, _extends2["default"])({}, otherProps, {
            placement: placement,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            prefixCls: prefixCls,
            overlayClassName: customOverlayClassName,
            getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
            ref: ref,
            builtinPlacements: getTooltipPlacements(),
            overlay: getOverlay(),
            visible: tempOpen,
            onVisibleChange: onOpenChange,
            onPopupAlign: onPopupAlign,
            overlayInnerStyle: formattedOverlayInnerStyle,
            arrowContent: /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-arrow-content"),
              style: arrowContentStyle
            }),
            motion: {
              motionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
              motionDeadline: 1000
            }
          }), tempOpen ? (0, _reactNode.cloneElement)(child, {
            className: childCls
          }) : child);
        });

        if (process.env.NODE_ENV !== 'production') {
          Tooltip.displayName = 'Tooltip';
        }

        var _default = Tooltip;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/extends': _req3,
        'classnames': _req4,
        'rc-tooltip': _req5,
        'rc-util/lib/hooks/useMergedState': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/colors': _req9,
        '../_util/motion': _req10,
        '../_util/placements': _req11,
        '../_util/reactNode': _req12,
        '../_util/warning': _req13
      }));
    }
  };
});
//# sourceMappingURL=1c8691466cec8d4943e426251a7a4c89d54ad5ad.js.map