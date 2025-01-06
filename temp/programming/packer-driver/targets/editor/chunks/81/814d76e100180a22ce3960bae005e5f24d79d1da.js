System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "shallowequal", "rc-util/lib/ref", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "rc-util/lib/warning", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req6 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_shallowequal2) {
      _req9 = _shallowequal2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req10 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req14 = _unresolved_5.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req15 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req17 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _shallowequal = _interopRequireDefault(require("shallowequal"));

        var _ref6 = require("rc-util/lib/ref");

        var _valueUtil = require("../utils/valueUtil");

        var _StickyContext = _interopRequireDefault(require("../context/StickyContext"));

        var _HoverContext = _interopRequireDefault(require("../context/HoverContext"));

        var _BodyContext = _interopRequireDefault(require("../context/BodyContext"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _PerfContext = _interopRequireDefault(require("../context/PerfContext"));

        var _ContextSelector = require("../ContextSelector");

        var _excluded = ["colSpan", "rowSpan", "style", "className"];

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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
        /** Check if cell is in hover range */


        function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
          var cellEndRow = cellStartRow + cellRowSpan - 1;
          return cellStartRow <= endRow && cellEndRow >= startRow;
        }

        function isRenderCell(data) {
          return data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/React.isValidElement(data);
        }

        function isRefComponent(component) {
          // String tag component also support ref
          if (typeof component === 'string') {
            return true;
          }

          return (0, _ref6.supportRef)(component);
        }

        var getTitleFromCellRenderChildren = function getTitleFromCellRenderChildren(_ref) {
          var ellipsis = _ref.ellipsis,
              rowType = _ref.rowType,
              children = _ref.children;
          var title;
          var ellipsisConfig = ellipsis === true ? {
            showTitle: true
          } : ellipsis;

          if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
            if (typeof children === 'string' || typeof children === 'number') {
              title = children.toString();
            } else if ( /*#__PURE__*/React.isValidElement(children) && typeof children.props.children === 'string') {
              title = children.props.children;
            }
          }

          return title;
        };

        function Cell(_ref2, ref) {
          var _ref4, _ref5, _classNames;

          var prefixCls = _ref2.prefixCls,
              className = _ref2.className,
              record = _ref2.record,
              index = _ref2.index,
              renderIndex = _ref2.renderIndex,
              dataIndex = _ref2.dataIndex,
              render = _ref2.render,
              children = _ref2.children,
              _ref2$component = _ref2.component,
              Component = _ref2$component === void 0 ? 'td' : _ref2$component,
              colSpan = _ref2.colSpan,
              rowSpan = _ref2.rowSpan,
              fixLeft = _ref2.fixLeft,
              fixRight = _ref2.fixRight,
              firstFixLeft = _ref2.firstFixLeft,
              lastFixLeft = _ref2.lastFixLeft,
              firstFixRight = _ref2.firstFixRight,
              lastFixRight = _ref2.lastFixRight,
              appendNode = _ref2.appendNode,
              _ref2$additionalProps = _ref2.additionalProps,
              additionalProps = _ref2$additionalProps === void 0 ? {} : _ref2$additionalProps,
              ellipsis = _ref2.ellipsis,
              align = _ref2.align,
              rowType = _ref2.rowType,
              isSticky = _ref2.isSticky,
              hovering = _ref2.hovering,
              onHover = _ref2.onHover;
          var cellPrefixCls = "".concat(prefixCls, "-cell");
          var perfRecord = React.useContext(_PerfContext.default);
          var supportSticky = React.useContext(_StickyContext.default);

          var _React$useContext = React.useContext(_BodyContext.default),
              allColumnsFixedLeft = _React$useContext.allColumnsFixedLeft; // ==================== Child Node ====================


          var _React$useMemo = React.useMemo(function () {
            if ((0, _valueUtil.validateValue)(children)) {
              return [children];
            }

            var value = (0, _valueUtil.getPathValue)(record, dataIndex); // Customize render node

            var returnChildNode = value;
            var returnCellProps = undefined;

            if (render) {
              var renderData = render(value, record, renderIndex);

              if (isRenderCell(renderData)) {
                if (process.env.NODE_ENV !== 'production') {
                  (0, _warning.default)(false, '`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead.');
                }

                returnChildNode = renderData.children;
                returnCellProps = renderData.props;
                perfRecord.renderWithProps = true;
              } else {
                returnChildNode = renderData;
              }
            }

            return [returnChildNode, returnCellProps];
          }, [
          /* eslint-disable react-hooks/exhaustive-deps */
          // Always re-render if `renderWithProps`
          perfRecord.renderWithProps ? Math.random() : 0,
          /* eslint-enable */
          children, dataIndex, perfRecord, record, render, renderIndex]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
              childNode = _React$useMemo2[0],
              legacyCellProps = _React$useMemo2[1];

          var mergedChildNode = childNode; // Not crash if final `childNode` is not validate ReactNode

          if ((0, _typeof2.default)(mergedChildNode) === 'object' && !Array.isArray(mergedChildNode) && ! /*#__PURE__*/React.isValidElement(mergedChildNode)) {
            mergedChildNode = null;
          }

          if (ellipsis && (lastFixLeft || firstFixRight)) {
            mergedChildNode = /*#__PURE__*/React.createElement("span", {
              className: "".concat(cellPrefixCls, "-content")
            }, mergedChildNode);
          }

          var _ref3 = legacyCellProps || {},
              cellColSpan = _ref3.colSpan,
              cellRowSpan = _ref3.rowSpan,
              cellStyle = _ref3.style,
              cellClassName = _ref3.className,
              restCellProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded);

          var mergedColSpan = (_ref4 = cellColSpan !== undefined ? cellColSpan : colSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;
          var mergedRowSpan = (_ref5 = cellRowSpan !== undefined ? cellRowSpan : rowSpan) !== null && _ref5 !== void 0 ? _ref5 : 1;

          if (mergedColSpan === 0 || mergedRowSpan === 0) {
            return null;
          } // ====================== Fixed =======================


          var fixedStyle = {};
          var isFixLeft = typeof fixLeft === 'number' && supportSticky;
          var isFixRight = typeof fixRight === 'number' && supportSticky;

          if (isFixLeft) {
            fixedStyle.position = 'sticky';
            fixedStyle.left = fixLeft;
          }

          if (isFixRight) {
            fixedStyle.position = 'sticky';
            fixedStyle.right = fixRight;
          } // ====================== Align =======================


          var alignStyle = {};

          if (align) {
            alignStyle.textAlign = align;
          } // ====================== Hover =======================


          var onMouseEnter = function onMouseEnter(event) {
            var _additionalProps$onMo;

            if (record) {
              onHover(index, index + mergedRowSpan - 1);
            }

            additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
          };

          var onMouseLeave = function onMouseLeave(event) {
            var _additionalProps$onMo2;

            if (record) {
              onHover(-1, -1);
            }

            additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
          }; // ====================== Render ======================


          var title = getTitleFromCellRenderChildren({
            rowType: rowType,
            ellipsis: ellipsis,
            children: childNode
          });
          var componentProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
            title: title
          }, restCellProps), additionalProps), {}, {
            colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
            rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
            className: (0, _classnames.default)(cellPrefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-all"), lastFixLeft && allColumnsFixedLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-row-hover"), !legacyCellProps && hovering), _classNames), additionalProps.className, cellClassName),
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            ref: isRefComponent(Component) ? ref : null
          });
          return /*#__PURE__*/React.createElement(Component, componentProps, appendNode, mergedChildNode);
        }

        var RefCell = /*#__PURE__*/React.forwardRef(Cell);
        RefCell.displayName = 'Cell';
        var comparePropList = ['expanded', 'className', 'hovering'];
        var MemoCell = /*#__PURE__*/React.memo(RefCell, function (prev, next) {
          if (next.shouldCellUpdate) {
            return (// Additional handle of expanded logic
              comparePropList.every(function (propName) {
                return prev[propName] === next[propName];
              }) && // User control update logic
              !next.shouldCellUpdate(next.record, prev.record)
            );
          }

          return (0, _shallowequal.default)(prev, next);
        });
        /** Inject hover data here, we still wish MemoCell keep simple `shouldCellUpdate` logic */

        var WrappedCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var index = props.index,
              _props$additionalProp = props.additionalProps,
              additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
              colSpan = props.colSpan,
              rowSpan = props.rowSpan;
          var cellColSpan = additionalProps.colSpan,
              cellRowSpan = additionalProps.rowSpan;
          var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
          var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;

          var _useContextSelector = (0, _ContextSelector.useContextSelector)(_HoverContext.default, function (cxt) {
            var isHovering = inHoverRange(index, mergedRowSpan || 1, cxt === null || cxt === void 0 ? void 0 : cxt.startRow, cxt === null || cxt === void 0 ? void 0 : cxt.endRow);
            return {
              onHover: cxt === null || cxt === void 0 ? void 0 : cxt.onHover,
              hovering: isHovering
            };
          }),
              onHover = _useContextSelector.onHover,
              hovering = _useContextSelector.hovering;

          return /*#__PURE__*/React.createElement(MemoCell, (0, _extends2.default)({}, props, {
            colSpan: mergedColSpan,
            rowSpan: mergedRowSpan,
            hovering: hovering,
            ref: ref,
            onHover: onHover
          }));
        });
        WrappedCell.displayName = 'WrappedCell';
        var _default = WrappedCell;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/typeof': _req6,
        'react': _req7,
        'classnames': _req8,
        'shallowequal': _req9,
        'rc-util/lib/ref': _req10,
        '../utils/valueUtil': _req11,
        '../context/StickyContext': _req12,
        '../context/HoverContext': _req13,
        '../context/BodyContext': _req14,
        'rc-util/lib/warning': _req15,
        '../context/PerfContext': _req16,
        '../ContextSelector': _req17
      }));
    }
  };
});
//# sourceMappingURL=814d76e100180a22ce3960bae005e5f24d79d1da.js.map