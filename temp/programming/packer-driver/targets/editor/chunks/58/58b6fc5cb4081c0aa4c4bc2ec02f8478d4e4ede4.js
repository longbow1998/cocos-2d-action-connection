System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-resize-observer", "rc-util/lib/hooks/useLayoutEffect", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, _OverflowContext, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req7 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req8 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
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

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = exports.OverflowContext = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _Item = _interopRequireDefault(require("./Item"));

        var _useBatchFrameState = require("./hooks/useBatchFrameState");

        var _RawItem = _interopRequireDefault(require("./RawItem"));

        var _excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];

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

        var OverflowContext = /*#__PURE__*/React.createContext(null);
        exports.OverflowContext = OverflowContext;
        var RESPONSIVE = 'responsive';
        var INVALIDATE = 'invalidate';

        function defaultRenderRest(omittedItems) {
          return "+ ".concat(omittedItems.length, " ...");
        }

        function Overflow(props, ref) {
          var _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
              _props$data = props.data,
              data = _props$data === void 0 ? [] : _props$data,
              renderItem = props.renderItem,
              renderRawItem = props.renderRawItem,
              itemKey = props.itemKey,
              _props$itemWidth = props.itemWidth,
              itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
              ssr = props.ssr,
              style = props.style,
              className = props.className,
              maxCount = props.maxCount,
              renderRest = props.renderRest,
              renderRawRest = props.renderRawRest,
              suffix = props.suffix,
              _props$component = props.component,
              Component = _props$component === void 0 ? 'div' : _props$component,
              itemComponent = props.itemComponent,
              onVisibleChange = props.onVisibleChange,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var createUseState = (0, _useBatchFrameState.useBatchFrameState)();
          var fullySSR = ssr === 'full';

          var _createUseState = createUseState(null),
              _createUseState2 = (0, _slicedToArray2.default)(_createUseState, 2),
              containerWidth = _createUseState2[0],
              setContainerWidth = _createUseState2[1];

          var mergedContainerWidth = containerWidth || 0;

          var _createUseState3 = createUseState(new Map()),
              _createUseState4 = (0, _slicedToArray2.default)(_createUseState3, 2),
              itemWidths = _createUseState4[0],
              setItemWidths = _createUseState4[1];

          var _createUseState5 = createUseState(0),
              _createUseState6 = (0, _slicedToArray2.default)(_createUseState5, 2),
              prevRestWidth = _createUseState6[0],
              setPrevRestWidth = _createUseState6[1];

          var _createUseState7 = createUseState(0),
              _createUseState8 = (0, _slicedToArray2.default)(_createUseState7, 2),
              restWidth = _createUseState8[0],
              setRestWidth = _createUseState8[1];

          var _createUseState9 = createUseState(0),
              _createUseState10 = (0, _slicedToArray2.default)(_createUseState9, 2),
              suffixWidth = _createUseState10[0],
              setSuffixWidth = _createUseState10[1];

          var _useState = (0, React.useState)(null),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              suffixFixedStart = _useState2[0],
              setSuffixFixedStart = _useState2[1];

          var _useState3 = (0, React.useState)(null),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              displayCount = _useState4[0],
              setDisplayCount = _useState4[1];

          var mergedDisplayCount = React.useMemo(function () {
            if (displayCount === null && fullySSR) {
              return Number.MAX_SAFE_INTEGER;
            }

            return displayCount || 0;
          }, [displayCount, containerWidth]);

          var _useState5 = (0, React.useState)(false),
              _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
              restReady = _useState6[0],
              setRestReady = _useState6[1];

          var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

          var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

          var isResponsive = maxCount === RESPONSIVE;
          var shouldResponsive = data.length && isResponsive;
          var invalidate = maxCount === INVALIDATE;
          /**
           * When is `responsive`, we will always render rest node to get the real width of it for calculation
           */

          var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
          var mergedData = (0, React.useMemo)(function () {
            var items = data;

            if (shouldResponsive) {
              if (containerWidth === null && fullySSR) {
                items = data;
              } else {
                items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
              }
            } else if (typeof maxCount === 'number') {
              items = data.slice(0, maxCount);
            }

            return items;
          }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
          var omittedItems = (0, React.useMemo)(function () {
            if (shouldResponsive) {
              return data.slice(mergedDisplayCount + 1);
            }

            return data.slice(mergedData.length);
          }, [data, mergedData, shouldResponsive, mergedDisplayCount]); // ================================= Item =================================

          var getKey = (0, React.useCallback)(function (item, index) {
            var _ref;

            if (typeof itemKey === 'function') {
              return itemKey(item);
            }

            return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
          }, [itemKey]);
          var mergedRenderItem = (0, React.useCallback)(renderItem || function (item) {
            return item;
          }, [renderItem]);

          function updateDisplayCount(count, suffixFixedStartVal, notReady) {
            // React 18 will sync render even when the value is same in some case.
            // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
            // ref: https://github.com/ant-design/ant-design/issues/36559
            if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
              return;
            }

            setDisplayCount(count);

            if (!notReady) {
              setRestReady(count < data.length - 1);
              onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
            }

            if (suffixFixedStartVal !== undefined) {
              setSuffixFixedStart(suffixFixedStartVal);
            }
          } // ================================= Size =================================


          function onOverflowResize(_, element) {
            setContainerWidth(element.clientWidth);
          }

          function registerSize(key, width) {
            setItemWidths(function (origin) {
              var clone = new Map(origin);

              if (width === null) {
                clone.delete(key);
              } else {
                clone.set(key, width);
              }

              return clone;
            });
          }

          function registerOverflowSize(_, width) {
            setRestWidth(width);
            setPrevRestWidth(restWidth);
          }

          function registerSuffixSize(_, width) {
            setSuffixWidth(width);
          } // ================================ Effect ================================


          function getItemWidth(index) {
            return itemWidths.get(getKey(mergedData[index], index));
          }

          (0, _useLayoutEffect.default)(function () {
            if (mergedContainerWidth && mergedRestWidth && mergedData) {
              var totalWidth = suffixWidth;
              var len = mergedData.length;
              var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

              if (!len) {
                updateDisplayCount(0, null);
                return;
              }

              for (var i = 0; i < len; i += 1) {
                var currentItemWidth = getItemWidth(i); // Fully will always render

                if (fullySSR) {
                  currentItemWidth = currentItemWidth || 0;
                } // Break since data not ready


                if (currentItemWidth === undefined) {
                  updateDisplayCount(i - 1, undefined, true);
                  break;
                } // Find best match


                totalWidth += currentItemWidth;

                if ( // Only one means `totalWidth` is the final width
                lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
                i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
                  // Additional check if match the end
                  updateDisplayCount(lastIndex, null);
                  break;
                } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
                  // Can not hold all the content to show rest
                  updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
                  break;
                }
              }

              if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
                setSuffixFixedStart(null);
              }
            }
          }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

          var displayRest = restReady && !!omittedItems.length;
          var suffixStyle = {};

          if (suffixFixedStart !== null && shouldResponsive) {
            suffixStyle = {
              position: 'absolute',
              left: suffixFixedStart,
              top: 0
            };
          }

          var itemSharedProps = {
            prefixCls: itemPrefixCls,
            responsive: shouldResponsive,
            component: itemComponent,
            invalidate: invalidate
          }; // >>>>> Choice render fun by `renderRawItem`

          var internalRenderItemNode = renderRawItem ? function (item, index) {
            var key = getKey(item, index);
            return /*#__PURE__*/React.createElement(OverflowContext.Provider, {
              key: key,
              value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemSharedProps), {}, {
                order: index,
                item: item,
                itemKey: key,
                registerSize: registerSize,
                display: index <= mergedDisplayCount
              })
            }, renderRawItem(item, index));
          } : function (item, index) {
            var key = getKey(item, index);
            return /*#__PURE__*/React.createElement(_Item.default, (0, _extends2.default)({}, itemSharedProps, {
              order: index,
              key: key,
              item: item,
              renderItem: mergedRenderItem,
              itemKey: key,
              registerSize: registerSize,
              display: index <= mergedDisplayCount
            }));
          }; // >>>>> Rest node

          var restNode;
          var restContextProps = {
            order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
            className: "".concat(itemPrefixCls, "-rest"),
            registerSize: registerOverflowSize,
            display: displayRest
          };

          if (!renderRawRest) {
            var mergedRenderRest = renderRest || defaultRenderRest;
            restNode = /*#__PURE__*/React.createElement(_Item.default, (0, _extends2.default)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
          } else if (renderRawRest) {
            restNode = /*#__PURE__*/React.createElement(OverflowContext.Provider, {
              value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemSharedProps), restContextProps)
            }, renderRawRest(omittedItems));
          }

          var overflowNode = /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
            className: (0, _classnames.default)(!invalidate && prefixCls, className),
            style: style,
            ref: ref
          }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/React.createElement(_Item.default, (0, _extends2.default)({}, itemSharedProps, {
            responsive: isResponsive,
            responsiveDisabled: !shouldResponsive,
            order: mergedDisplayCount,
            className: "".concat(itemPrefixCls, "-suffix"),
            registerSize: registerSuffixSize,
            display: true,
            style: suffixStyle
          }), suffix));

          if (isResponsive) {
            overflowNode = /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
              onResize: onOverflowResize,
              disabled: !shouldResponsive
            }, overflowNode);
          }

          return overflowNode;
        }

        var ForwardOverflow = /*#__PURE__*/React.forwardRef(Overflow);
        ForwardOverflow.displayName = 'Overflow';
        ForwardOverflow.Item = _RawItem.default;
        ForwardOverflow.RESPONSIVE = RESPONSIVE;
        ForwardOverflow.INVALIDATE = INVALIDATE; // Convert to generic type

        var _default = ForwardOverflow;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _OverflowContext = module.exports.OverflowContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-resize-observer': _req7,
        'rc-util/lib/hooks/useLayoutEffect': _req8,
        './Item': _req9,
        './hooks/useBatchFrameState': _req10,
        './RawItem': _req11
      }));
    }
  };
});
//# sourceMappingURL=58b6fc5cb4081c0aa4c4bc2ec02f8478d4e4ede4.js.map