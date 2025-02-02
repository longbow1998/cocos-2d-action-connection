System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-motion", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/ref", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req4 = _rcMotion2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req5 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req6 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
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
        exports.default = MotionThumb;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _ref2 = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

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

        var calcThumbStyle = function calcThumbStyle(targetElement) {
          return targetElement ? {
            left: targetElement.offsetLeft,
            right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
            width: targetElement.clientWidth
          } : null;
        };

        var toPX = function toPX(value) {
          return value !== undefined ? "".concat(value, "px") : undefined;
        };

        function MotionThumb(props) {
          var prefixCls = props.prefixCls,
              containerRef = props.containerRef,
              value = props.value,
              getValueIndex = props.getValueIndex,
              motionName = props.motionName,
              onMotionStart = props.onMotionStart,
              onMotionEnd = props.onMotionEnd,
              direction = props.direction;
          var thumbRef = React.useRef(null);

          var _React$useState = React.useState(value),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              prevValue = _React$useState2[0],
              setPrevValue = _React$useState2[1]; // =========================== Effect ===========================


          var findValueElement = function findValueElement(val) {
            var _containerRef$current;

            var index = getValueIndex(val);
            var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
            return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
          };

          var _React$useState3 = React.useState(null),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              prevStyle = _React$useState4[0],
              setPrevStyle = _React$useState4[1];

          var _React$useState5 = React.useState(null),
              _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
              nextStyle = _React$useState6[0],
              setNextStyle = _React$useState6[1];

          (0, _useLayoutEffect.default)(function () {
            if (prevValue !== value) {
              var prev = findValueElement(prevValue);
              var next = findValueElement(value);
              var calcPrevStyle = calcThumbStyle(prev);
              var calcNextStyle = calcThumbStyle(next);
              setPrevValue(value);
              setPrevStyle(calcPrevStyle);
              setNextStyle(calcNextStyle);

              if (prev && next) {
                onMotionStart();
              } else {
                onMotionEnd();
              }
            }
          }, [value]);
          var thumbStart = React.useMemo(function () {
            return direction === 'rtl' ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
          }, [direction, prevStyle]);
          var thumbActive = React.useMemo(function () {
            return direction === 'rtl' ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
          }, [direction, nextStyle]); // =========================== Motion ===========================

          var onAppearStart = function onAppearStart() {
            return {
              transform: "translateX(var(--thumb-start-left))",
              width: "var(--thumb-start-width)"
            };
          };

          var onAppearActive = function onAppearActive() {
            return {
              transform: "translateX(var(--thumb-active-left))",
              width: "var(--thumb-active-width)"
            };
          };

          var onAppearEnd = function onAppearEnd() {
            setPrevStyle(null);
            setNextStyle(null);
            onMotionEnd();
          }; // =========================== Render ===========================
          // No need motion when nothing exist in queue


          if (!prevStyle || !nextStyle) {
            return null;
          }

          return /*#__PURE__*/React.createElement(_rcMotion.default, {
            visible: true,
            motionName: motionName,
            motionAppear: true,
            onAppearStart: onAppearStart,
            onAppearActive: onAppearActive,
            onAppearEnd: onAppearEnd
          }, function (_ref, ref) {
            var motionClassName = _ref.className,
                motionStyle = _ref.style;
            var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), {}, {
              '--thumb-start-left': thumbStart,
              '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
              '--thumb-active-left': thumbActive,
              '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
            }); // It's little ugly which should be refactor when @umi/test update to latest jsdom

            var motionProps = {
              ref: (0, _ref2.composeRef)(thumbRef, ref),
              style: mergedStyle,
              className: (0, _classnames.default)("".concat(prefixCls, "-thumb"), motionClassName)
            };

            if (process.env.NODE_ENV === 'test') {
              motionProps['data-test-style'] = JSON.stringify(mergedStyle);
            }

            return /*#__PURE__*/React.createElement("div", motionProps);
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'classnames': _req3,
        'rc-motion': _req4,
        'rc-util/lib/hooks/useLayoutEffect': _req5,
        'rc-util/lib/ref': _req6,
        'react': _req7
      }));
    }
  };
});
//# sourceMappingURL=d3e95edea91462d29c06b1a000194f6831b3df64.js.map