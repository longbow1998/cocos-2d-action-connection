System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "rc-align", "rc-util/lib/hooks/useLayoutEffect", "rc-motion", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcAlign2) {
      _req5 = _rcAlign2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req6 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req7 = _rcMotion2.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _rcAlign = _interopRequireDefault(require("rc-align"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useVisibleStatus3 = _interopRequireDefault(require("./useVisibleStatus"));

        var _legacyUtil = require("../utils/legacyUtil");

        var _useStretchStyle3 = _interopRequireDefault(require("./useStretchStyle"));

        var PopupInner = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var visible = props.visible,
              prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              children = props.children,
              zIndex = props.zIndex,
              stretch = props.stretch,
              destroyPopupOnHide = props.destroyPopupOnHide,
              forceRender = props.forceRender,
              align = props.align,
              point = props.point,
              getRootDomNode = props.getRootDomNode,
              getClassNameFromAlign = props.getClassNameFromAlign,
              onAlign = props.onAlign,
              onMouseEnter = props.onMouseEnter,
              onMouseLeave = props.onMouseLeave,
              onMouseDown = props.onMouseDown,
              onTouchStart = props.onTouchStart,
              onClick = props.onClick;
          var alignRef = (0, React.useRef)();
          var elementRef = (0, React.useRef)();

          var _useState = (0, React.useState)(),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              alignedClassName = _useState2[0],
              setAlignedClassName = _useState2[1]; // ======================= Measure ========================


          var _useStretchStyle = (0, _useStretchStyle3.default)(stretch),
              _useStretchStyle2 = (0, _slicedToArray2.default)(_useStretchStyle, 2),
              stretchStyle = _useStretchStyle2[0],
              measureStretchStyle = _useStretchStyle2[1];

          function doMeasure() {
            if (stretch) {
              measureStretchStyle(getRootDomNode());
            }
          } // ======================== Status ========================


          var _useVisibleStatus = (0, _useVisibleStatus3.default)(visible, doMeasure),
              _useVisibleStatus2 = (0, _slicedToArray2.default)(_useVisibleStatus, 2),
              status = _useVisibleStatus2[0],
              goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================

          /**
           * `alignedClassName` may modify `source` size,
           * which means one time align may not move to the correct position at once.
           *
           * We will reset `alignTimes` for each status switch to `alignPre`
           * and let `rc-align` to align for multiple times to ensure get final stable place.
           * Currently we mark `alignTimes < 2` repeat align, it will increase if user report for align issue.
           * 
           * Update:
           * In React 18. `rc-align` effect of align may faster than ref called trigger `forceAlign`.
           * We adjust this to `alignTimes < 2`.
           * We need refactor `rc-align` to support mark of `forceAlign` call if this still happen.
           */


          var _useState3 = (0, React.useState)(0),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              alignTimes = _useState4[0],
              setAlignTimes = _useState4[1];

          var prepareResolveRef = (0, React.useRef)();
          (0, _useLayoutEffect.default)(function () {
            if (status === 'alignPre') {
              setAlignTimes(0);
            }
          }, [status]); // `target` on `rc-align` can accept as a function to get the bind element or a point.
          // ref: https://www.npmjs.com/package/rc-align

          function getAlignTarget() {
            if (point) {
              return point;
            }

            return getRootDomNode;
          }

          function forceAlign() {
            var _alignRef$current;

            (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
          }

          function onInternalAlign(popupDomNode, matchAlign) {
            var nextAlignedClassName = getClassNameFromAlign(matchAlign);

            if (alignedClassName !== nextAlignedClassName) {
              setAlignedClassName(nextAlignedClassName);
            } // We will retry multi times to make sure that the element has been align in the right position.


            setAlignTimes(function (val) {
              return val + 1;
            });

            if (status === 'align') {
              onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
            }
          } // Delay to go to next status


          (0, _useLayoutEffect.default)(function () {
            if (status === 'align') {
              // Repeat until not more align needed
              if (alignTimes < 3) {
                forceAlign();
              } else {
                goNextStatus(function () {
                  var _prepareResolveRef$cu;

                  (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
                });
              }
            }
          }, [alignTimes]); // ======================== Motion ========================

          var motion = (0, _objectSpread2.default)({}, (0, _legacyUtil.getMotion)(props));
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
            var originHandler = motion[eventName];

            motion[eventName] = function (element, event) {
              goNextStatus();
              return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
            };
          });

          function onShowPrepare() {
            return new Promise(function (resolve) {
              prepareResolveRef.current = resolve;
            });
          } // Go to stable directly when motion not provided


          React.useEffect(function () {
            if (!motion.motionName && status === 'motion') {
              goNextStatus();
            }
          }, [motion.motionName, status]); // ========================= Refs =========================

          React.useImperativeHandle(ref, function () {
            return {
              forceAlign: forceAlign,
              getElement: function getElement() {
                return elementRef.current;
              }
            };
          }); // ======================== Render ========================

          var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, stretchStyle), {}, {
            zIndex: zIndex,
            opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
            // Cannot interact with disappearing elements
            // https://github.com/ant-design/ant-design/issues/35051#issuecomment-1101340714
            pointerEvents: !visible && status !== 'stable' ? 'none' : undefined
          }, style); // Align status

          var alignDisabled = true;

          if (align !== null && align !== void 0 && align.points && (status === 'align' || status === 'stable')) {
            alignDisabled = false;
          }

          var childNode = children; // Wrapper when multiple children

          if (React.Children.count(children) > 1) {
            childNode = /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-content")
            }, children);
          }

          return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
            visible: visible,
            ref: elementRef,
            leavedClassName: "".concat(prefixCls, "-hidden")
          }, motion, {
            onAppearPrepare: onShowPrepare,
            onEnterPrepare: onShowPrepare,
            removeOnLeave: destroyPopupOnHide,
            forceRender: forceRender
          }), function (_ref, motionRef) {
            var motionClassName = _ref.className,
                motionStyle = _ref.style;
            var mergedClassName = (0, _classnames.default)(prefixCls, className, alignedClassName, motionClassName);
            return /*#__PURE__*/React.createElement(_rcAlign.default, {
              target: getAlignTarget(),
              key: "popup",
              ref: alignRef,
              monitorWindowResize: true,
              disabled: alignDisabled,
              align: align,
              onAlign: onInternalAlign
            }, /*#__PURE__*/React.createElement("div", {
              ref: motionRef,
              className: mergedClassName,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              onMouseDownCapture: onMouseDown,
              onTouchStartCapture: onTouchStart,
              onClick: onClick,
              style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), mergedStyle)
            }, childNode));
          });
        });
        PopupInner.displayName = 'PopupInner';
        var _default = PopupInner;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-align': _req5,
        'rc-util/lib/hooks/useLayoutEffect': _req6,
        'rc-motion': _req7,
        'classnames': _req8,
        './useVisibleStatus': _req9,
        '../utils/legacyUtil': _req10,
        './useStretchStyle': _req11
      }));
    }
  };
});
//# sourceMappingURL=89d153d2a8977021c1f1cca7b38cba7e916eb9d5.js.map