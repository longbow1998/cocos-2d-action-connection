System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "rc-util/lib/hooks/useLayoutEffect"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _RawList, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req5 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
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
    }, function (_unresolved_8) {
      _req14 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req15 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req16 = _unresolved_10.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req17 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.RawList = RawList;
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _Filler = _interopRequireDefault(require("./Filler"));

        var _ScrollBar = _interopRequireDefault(require("./ScrollBar"));

        var _useChildren = _interopRequireDefault(require("./hooks/useChildren"));

        var _useHeights3 = _interopRequireDefault(require("./hooks/useHeights"));

        var _useScrollTo = _interopRequireDefault(require("./hooks/useScrollTo"));

        var _useDiffItem3 = _interopRequireDefault(require("./hooks/useDiffItem"));

        var _useFrameWheel3 = _interopRequireDefault(require("./hooks/useFrameWheel"));

        var _useMobileTouchMove = _interopRequireDefault(require("./hooks/useMobileTouchMove"));

        var _useOriginScroll = _interopRequireDefault(require("./hooks/useOriginScroll"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange", "innerProps"];
        var EMPTY_DATA = [];
        var ScrollStyle = {
          overflowY: 'auto',
          overflowAnchor: 'none'
        };

        function RawList(props, ref) {
          var _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
              className = props.className,
              height = props.height,
              itemHeight = props.itemHeight,
              _props$fullHeight = props.fullHeight,
              fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
              style = props.style,
              data = props.data,
              children = props.children,
              itemKey = props.itemKey,
              virtual = props.virtual,
              _props$component = props.component,
              Component = _props$component === void 0 ? 'div' : _props$component,
              onScroll = props.onScroll,
              onVisibleChange = props.onVisibleChange,
              innerProps = props.innerProps,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded); // ================================= MISC =================================

          var useVirtual = !!(virtual !== false && height && itemHeight);
          var inVirtual = useVirtual && data && itemHeight * data.length > height;

          var _useState = (0, React.useState)(0),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              scrollTop = _useState2[0],
              setScrollTop = _useState2[1];

          var _useState3 = (0, React.useState)(false),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              scrollMoving = _useState4[0],
              setScrollMoving = _useState4[1];

          var mergedClassName = (0, _classnames.default)(prefixCls, className);
          var mergedData = data || EMPTY_DATA;
          var componentRef = (0, React.useRef)();
          var fillerInnerRef = (0, React.useRef)();
          var scrollBarRef = (0, React.useRef)(); // Hack on scrollbar to enable flash call
          // =============================== Item Key ===============================

          var getKey = React.useCallback(function (item) {
            if (typeof itemKey === 'function') {
              return itemKey(item);
            }

            return item === null || item === void 0 ? void 0 : item[itemKey];
          }, [itemKey]);
          var sharedConfig = {
            getKey: getKey
          }; // ================================ Scroll ================================

          function syncScrollTop(newTop) {
            setScrollTop(function (origin) {
              var value;

              if (typeof newTop === 'function') {
                value = newTop(origin);
              } else {
                value = newTop;
              }

              var alignedTop = keepInRange(value);
              componentRef.current.scrollTop = alignedTop;
              return alignedTop;
            });
          } // ================================ Legacy ================================
          // Put ref here since the range is generate by follow


          var rangeRef = (0, React.useRef)({
            start: 0,
            end: mergedData.length
          });
          var diffItemRef = (0, React.useRef)();

          var _useDiffItem = (0, _useDiffItem3.default)(mergedData, getKey),
              _useDiffItem2 = (0, _slicedToArray2.default)(_useDiffItem, 1),
              diffItem = _useDiffItem2[0];

          diffItemRef.current = diffItem; // ================================ Height ================================

          var _useHeights = (0, _useHeights3.default)(getKey, null, null),
              _useHeights2 = (0, _slicedToArray2.default)(_useHeights, 4),
              setInstanceRef = _useHeights2[0],
              collectHeight = _useHeights2[1],
              heights = _useHeights2[2],
              heightUpdatedMark = _useHeights2[3]; // ========================== Visible Calculation =========================


          var _React$useMemo = React.useMemo(function () {
            if (!useVirtual) {
              return {
                scrollHeight: undefined,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
              };
            } // Always use virtual scroll bar in avoid shaking


            if (!inVirtual) {
              var _fillerInnerRef$curre;

              return {
                scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
              };
            }

            var itemTop = 0;
            var startIndex;
            var startOffset;
            var endIndex;
            var dataLen = mergedData.length;

            for (var i = 0; i < dataLen; i += 1) {
              var item = mergedData[i];
              var key = getKey(item);
              var cacheHeight = heights.get(key);
              var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight); // Check item top in the range

              if (currentItemBottom >= scrollTop && startIndex === undefined) {
                startIndex = i;
                startOffset = itemTop;
              } // Check item bottom in the range. We will render additional one item for motion usage


              if (currentItemBottom > scrollTop + height && endIndex === undefined) {
                endIndex = i;
              }

              itemTop = currentItemBottom;
            } // When scrollTop at the end but data cut to small count will reach this


            if (startIndex === undefined) {
              startIndex = 0;
              startOffset = 0;
              endIndex = Math.ceil(height / itemHeight);
            }

            if (endIndex === undefined) {
              endIndex = mergedData.length - 1;
            } // Give cache to improve scroll experience


            endIndex = Math.min(endIndex + 1, mergedData.length);
            return {
              scrollHeight: itemTop,
              start: startIndex,
              end: endIndex,
              offset: startOffset
            };
          }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
              scrollHeight = _React$useMemo.scrollHeight,
              start = _React$useMemo.start,
              end = _React$useMemo.end,
              offset = _React$useMemo.offset;

          rangeRef.current.start = start;
          rangeRef.current.end = end; // =============================== In Range ===============================

          var maxScrollHeight = scrollHeight - height;
          var maxScrollHeightRef = (0, React.useRef)(maxScrollHeight);
          maxScrollHeightRef.current = maxScrollHeight;

          function keepInRange(newScrollTop) {
            var newTop = newScrollTop;

            if (!Number.isNaN(maxScrollHeightRef.current)) {
              newTop = Math.min(newTop, maxScrollHeightRef.current);
            }

            newTop = Math.max(newTop, 0);
            return newTop;
          }

          var isScrollAtTop = scrollTop <= 0;
          var isScrollAtBottom = scrollTop >= maxScrollHeight;
          var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

          function onScrollBar(newScrollTop) {
            var newTop = newScrollTop;
            syncScrollTop(newTop);
          } // When data size reduce. It may trigger native scroll event back to fit scroll position


          function onFallbackScroll(e) {
            var newScrollTop = e.currentTarget.scrollTop;

            if (newScrollTop !== scrollTop) {
              syncScrollTop(newScrollTop);
            } // Trigger origin onScroll


            onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
          } // Since this added in global,should use ref to keep update


          var _useFrameWheel = (0, _useFrameWheel3.default)(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
            syncScrollTop(function (top) {
              var newTop = top + offsetY;
              return newTop;
            });
          }),
              _useFrameWheel2 = (0, _slicedToArray2.default)(_useFrameWheel, 2),
              onRawWheel = _useFrameWheel2[0],
              onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


          (0, _useMobileTouchMove.default)(useVirtual, componentRef, function (deltaY, smoothOffset) {
            if (originScroll(deltaY, smoothOffset)) {
              return false;
            }

            onRawWheel({
              preventDefault: function preventDefault() {},
              deltaY: deltaY
            });
            return true;
          });
          (0, _useLayoutEffect.default)(function () {
            // Firefox only
            function onMozMousePixelScroll(e) {
              if (useVirtual) {
                e.preventDefault();
              }
            }

            componentRef.current.addEventListener('wheel', onRawWheel);
            componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
            componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
            return function () {
              if (componentRef.current) {
                componentRef.current.removeEventListener('wheel', onRawWheel);
                componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
                componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
              }
            };
          }, [useVirtual]); // ================================= Ref ==================================

          var scrollTo = (0, _useScrollTo.default)(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
            var _scrollBarRef$current;

            (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
          });
          React.useImperativeHandle(ref, function () {
            return {
              scrollTo: scrollTo
            };
          }); // ================================ Effect ================================

          /** We need told outside that some list not rendered */

          (0, _useLayoutEffect.default)(function () {
            if (onVisibleChange) {
              var renderList = mergedData.slice(start, end + 1);
              onVisibleChange(renderList, mergedData);
            }
          }, [start, end, mergedData]); // ================================ Render ================================

          var listChildren = (0, _useChildren.default)(mergedData, start, end, setInstanceRef, children, sharedConfig);
          var componentStyle = null;

          if (height) {
            componentStyle = (0, _objectSpread3.default)((0, _defineProperty2.default)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);

            if (useVirtual) {
              componentStyle.overflowY = 'hidden';

              if (scrollMoving) {
                componentStyle.pointerEvents = 'none';
              }
            }
          }

          return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
            style: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, style), {}, {
              position: 'relative'
            }),
            className: mergedClassName
          }, restProps), /*#__PURE__*/React.createElement(Component, {
            className: "".concat(prefixCls, "-holder"),
            style: componentStyle,
            ref: componentRef,
            onScroll: onFallbackScroll
          }, /*#__PURE__*/React.createElement(_Filler.default, {
            prefixCls: prefixCls,
            height: scrollHeight,
            offset: offset,
            onInnerResize: collectHeight,
            ref: fillerInnerRef,
            innerProps: innerProps
          }, listChildren)), useVirtual && /*#__PURE__*/React.createElement(_ScrollBar.default, {
            ref: scrollBarRef,
            prefixCls: prefixCls,
            scrollTop: scrollTop,
            height: height,
            scrollHeight: scrollHeight,
            count: mergedData.length,
            onScroll: onScrollBar,
            onStartMove: function onStartMove() {
              setScrollMoving(true);
            },
            onStopMove: function onStopMove() {
              setScrollMoving(false);
            }
          }));
        }

        var List = /*#__PURE__*/React.forwardRef(RawList);
        List.displayName = 'List';
        var _default = List;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _RawList = module.exports.RawList;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/objectWithoutProperties': _req5,
        'react': _req6,
        'classnames': _req7,
        './Filler': _req8,
        './ScrollBar': _req9,
        './hooks/useChildren': _req10,
        './hooks/useHeights': _req11,
        './hooks/useScrollTo': _req12,
        './hooks/useDiffItem': _req13,
        './hooks/useFrameWheel': _req14,
        './hooks/useMobileTouchMove': _req15,
        './hooks/useOriginScroll': _req16,
        'rc-util/lib/hooks/useLayoutEffect': _req17
      }));
    }
  };
});
//# sourceMappingURL=b769f5e1f2e8eea03592d1de894442b14b1870c2.js.map