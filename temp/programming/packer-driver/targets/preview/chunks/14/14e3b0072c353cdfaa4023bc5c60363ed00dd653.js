System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/Dom/addEventListener", "rc-util/lib/getScrollBarSize", "classnames", "rc-util/lib/Dom/css", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcUtilLibDomAddEventListener) {
      _req5 = _rcUtilLibDomAddEventListener.__cjsMetaURL;
    }, function (_rcUtilLibGetScrollBarSize) {
      _req6 = _rcUtilLibGetScrollBarSize.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibDomCss) {
      _req8 = _rcUtilLibDomCss.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

        var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _css = require("rc-util/lib/Dom/css");

        var _TableContext = _interopRequireDefault(require("./context/TableContext"));

        var _useFrame = require("./hooks/useFrame");

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

        var StickyScrollBar = function StickyScrollBar(_ref, ref) {
          var _scrollBodyRef$curren, _scrollBodyRef$curren2;

          var scrollBodyRef = _ref.scrollBodyRef,
              onScroll = _ref.onScroll,
              offsetScroll = _ref.offsetScroll,
              container = _ref.container;

          var _React$useContext = React.useContext(_TableContext.default),
              prefixCls = _React$useContext.prefixCls;

          var bodyScrollWidth = ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0 ? void 0 : _scrollBodyRef$curren.scrollWidth) || 0;
          var bodyWidth = ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0 ? void 0 : _scrollBodyRef$curren2.clientWidth) || 0;
          var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
          var scrollBarRef = React.useRef();

          var _useLayoutState = (0, _useFrame.useLayoutState)({
            scrollLeft: 0,
            isHiddenScrollBar: false
          }),
              _useLayoutState2 = (0, _slicedToArray2.default)(_useLayoutState, 2),
              scrollState = _useLayoutState2[0],
              setScrollState = _useLayoutState2[1];

          var refState = React.useRef({
            delta: 0,
            x: 0
          });

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              isActive = _React$useState2[0],
              setActive = _React$useState2[1];

          var onMouseUp = function onMouseUp() {
            setActive(false);
          };

          var onMouseDown = function onMouseDown(event) {
            event.persist();
            refState.current.delta = event.pageX - scrollState.scrollLeft;
            refState.current.x = 0;
            setActive(true);
            event.preventDefault();
          };

          var onMouseMove = function onMouseMove(event) {
            var _window; // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons


            var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
                buttons = _ref2.buttons;

            if (!isActive || buttons === 0) {
              // If out body mouse up, we can set isActive false when mouse move
              if (isActive) {
                setActive(false);
              }

              return;
            }

            var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;

            if (left <= 0) {
              left = 0;
            }

            if (left + scrollBarWidth >= bodyWidth) {
              left = bodyWidth - scrollBarWidth;
            }

            onScroll({
              scrollLeft: left / bodyWidth * (bodyScrollWidth + 2)
            });
            refState.current.x = event.pageX;
          };

          var onContainerScroll = function onContainerScroll() {
            if (!scrollBodyRef.current) {
              return;
            }

            var tableOffsetTop = (0, _css.getOffset)(scrollBodyRef.current).top;
            var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
            var currentClientOffset = container === window ? document.documentElement.scrollTop + window.innerHeight : (0, _css.getOffset)(container).top + container.clientHeight;

            if (tableBottomOffset - (0, _getScrollBarSize.default)() <= currentClientOffset || tableOffsetTop >= currentClientOffset - offsetScroll) {
              setScrollState(function (state) {
                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
                  isHiddenScrollBar: true
                });
              });
            } else {
              setScrollState(function (state) {
                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
                  isHiddenScrollBar: false
                });
              });
            }
          };

          var setScrollLeft = function setScrollLeft(left) {
            setScrollState(function (state) {
              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
                scrollLeft: left / bodyScrollWidth * bodyWidth || 0
              });
            });
          };

          React.useImperativeHandle(ref, function () {
            return {
              setScrollLeft: setScrollLeft
            };
          });
          React.useEffect(function () {
            var onMouseUpListener = (0, _addEventListener.default)(document.body, 'mouseup', onMouseUp, false);
            var onMouseMoveListener = (0, _addEventListener.default)(document.body, 'mousemove', onMouseMove, false);
            onContainerScroll();
            return function () {
              onMouseUpListener.remove();
              onMouseMoveListener.remove();
            };
          }, [scrollBarWidth, isActive]);
          React.useEffect(function () {
            var onScrollListener = (0, _addEventListener.default)(container, 'scroll', onContainerScroll, false);
            var onResizeListener = (0, _addEventListener.default)(window, 'resize', onContainerScroll, false);
            return function () {
              onScrollListener.remove();
              onResizeListener.remove();
            };
          }, [container]);
          React.useEffect(function () {
            if (!scrollState.isHiddenScrollBar) {
              setScrollState(function (state) {
                var bodyNode = scrollBodyRef.current;

                if (!bodyNode) {
                  return state;
                }

                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
                  scrollLeft: bodyNode.scrollLeft / bodyNode.scrollWidth * bodyNode.clientWidth
                });
              });
            }
          }, [scrollState.isHiddenScrollBar]);

          if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            style: {
              height: (0, _getScrollBarSize.default)(),
              width: bodyWidth,
              bottom: offsetScroll
            },
            className: "".concat(prefixCls, "-sticky-scroll")
          }, /*#__PURE__*/React.createElement("div", {
            onMouseDown: onMouseDown,
            ref: scrollBarRef,
            className: (0, _classnames.default)("".concat(prefixCls, "-sticky-scroll-bar"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-sticky-scroll-bar-active"), isActive)),
            style: {
              width: "".concat(scrollBarWidth, "px"),
              transform: "translate3d(".concat(scrollState.scrollLeft, "px, 0, 0)")
            }
          }));
        };

        var _default = /*#__PURE__*/React.forwardRef(StickyScrollBar);

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-util/lib/Dom/addEventListener': _req5,
        'rc-util/lib/getScrollBarSize': _req6,
        'classnames': _req7,
        'rc-util/lib/Dom/css': _req8,
        './context/TableContext': _req9,
        './hooks/useFrame': _req10
      }));
    }
  };
});
//# sourceMappingURL=14e3b0072c353cdfaa4023bc5c60363ed00dd653.js.map