System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-util/lib/ref", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req7 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _ref2 = require("rc-util/lib/ref");

        var _ColGroup = _interopRequireDefault(require("../ColGroup"));

        var _TableContext = _interopRequireDefault(require("../context/TableContext"));

        var _excluded = ["className", "noData", "columns", "flattenColumns", "colWidths", "columCount", "stickyOffsets", "direction", "fixHeader", "stickyTopOffset", "stickyBottomOffset", "stickyClassName", "onScroll", "maxContentScroll", "children"];

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

        function useColumnWidth(colWidths, columCount) {
          return (0, React.useMemo)(function () {
            var cloneColumns = [];

            for (var i = 0; i < columCount; i += 1) {
              var val = colWidths[i];

              if (val !== undefined) {
                cloneColumns[i] = val;
              } else {
                return null;
              }
            }

            return cloneColumns;
          }, [colWidths.join('_'), columCount]);
        }

        var FixedHolder = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
          var className = _ref.className,
              noData = _ref.noData,
              columns = _ref.columns,
              flattenColumns = _ref.flattenColumns,
              colWidths = _ref.colWidths,
              columCount = _ref.columCount,
              stickyOffsets = _ref.stickyOffsets,
              direction = _ref.direction,
              fixHeader = _ref.fixHeader,
              stickyTopOffset = _ref.stickyTopOffset,
              stickyBottomOffset = _ref.stickyBottomOffset,
              stickyClassName = _ref.stickyClassName,
              onScroll = _ref.onScroll,
              maxContentScroll = _ref.maxContentScroll,
              children = _ref.children,
              props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

          var _React$useContext = React.useContext(_TableContext.default),
              prefixCls = _React$useContext.prefixCls,
              scrollbarSize = _React$useContext.scrollbarSize,
              isSticky = _React$useContext.isSticky;

          var combinationScrollBarSize = isSticky && !fixHeader ? 0 : scrollbarSize; // Pass wheel to scroll event

          var scrollRef = React.useRef(null);
          var setScrollRef = React.useCallback(function (element) {
            (0, _ref2.fillRef)(ref, element);
            (0, _ref2.fillRef)(scrollRef, element);
          }, []);
          React.useEffect(function () {
            var _scrollRef$current;

            function onWheel(e) {
              var currentTarget = e.currentTarget,
                  deltaX = e.deltaX;

              if (deltaX) {
                onScroll({
                  currentTarget: currentTarget,
                  scrollLeft: currentTarget.scrollLeft + deltaX
                });
                e.preventDefault();
              }
            }

            (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.addEventListener('wheel', onWheel);
            return function () {
              var _scrollRef$current2;

              (_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.removeEventListener('wheel', onWheel);
            };
          }, []); // Check if all flattenColumns has width

          var allFlattenColumnsWithWidth = React.useMemo(function () {
            return flattenColumns.every(function (column) {
              return column.width >= 0;
            });
          }, [flattenColumns]); // Add scrollbar column

          var lastColumn = flattenColumns[flattenColumns.length - 1];
          var ScrollBarColumn = {
            fixed: lastColumn ? lastColumn.fixed : null,
            scrollbar: true,
            onHeaderCell: function onHeaderCell() {
              return {
                className: "".concat(prefixCls, "-cell-scrollbar")
              };
            }
          };
          var columnsWithScrollbar = (0, React.useMemo)(function () {
            return combinationScrollBarSize ? [].concat((0, _toConsumableArray2.default)(columns), [ScrollBarColumn]) : columns;
          }, [combinationScrollBarSize, columns]);
          var flattenColumnsWithScrollbar = (0, React.useMemo)(function () {
            return combinationScrollBarSize ? [].concat((0, _toConsumableArray2.default)(flattenColumns), [ScrollBarColumn]) : flattenColumns;
          }, [combinationScrollBarSize, flattenColumns]); // Calculate the sticky offsets

          var headerStickyOffsets = (0, React.useMemo)(function () {
            var right = stickyOffsets.right,
                left = stickyOffsets.left;
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, stickyOffsets), {}, {
              left: direction === 'rtl' ? [].concat((0, _toConsumableArray2.default)(left.map(function (width) {
                return width + combinationScrollBarSize;
              })), [0]) : left,
              right: direction === 'rtl' ? right : [].concat((0, _toConsumableArray2.default)(right.map(function (width) {
                return width + combinationScrollBarSize;
              })), [0]),
              isSticky: isSticky
            });
          }, [combinationScrollBarSize, stickyOffsets, isSticky]);
          var mergedColumnWidth = useColumnWidth(colWidths, columCount);
          return /*#__PURE__*/React.createElement("div", {
            style: (0, _objectSpread2.default)({
              overflow: 'hidden'
            }, isSticky ? {
              top: stickyTopOffset,
              bottom: stickyBottomOffset
            } : {}),
            ref: setScrollRef,
            className: (0, _classnames.default)(className, (0, _defineProperty2.default)({}, stickyClassName, !!stickyClassName))
          }, /*#__PURE__*/React.createElement("table", {
            style: {
              tableLayout: 'fixed',
              visibility: noData || mergedColumnWidth ? null : 'hidden'
            }
          }, (!noData || !maxContentScroll || allFlattenColumnsWithWidth) && /*#__PURE__*/React.createElement(_ColGroup.default, {
            colWidths: mergedColumnWidth ? [].concat((0, _toConsumableArray2.default)(mergedColumnWidth), [combinationScrollBarSize]) : [],
            columCount: columCount + 1,
            columns: flattenColumnsWithScrollbar
          }), children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            stickyOffsets: headerStickyOffsets,
            columns: columnsWithScrollbar,
            flattenColumns: flattenColumnsWithScrollbar
          }))));
        });
        FixedHolder.displayName = 'FixedHolder';
        var _default = FixedHolder;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-util/lib/ref': _req7,
        '../ColGroup': _req8,
        '../context/TableContext': _req9
      }));
    }
  };
});
//# sourceMappingURL=a1f102b7bcffcd9da6d33034e6f1feaa941378a9.js.map