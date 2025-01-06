System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req10 = _unresolved_6.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _Cell = _interopRequireDefault(require("../Cell"));

        var _TableContext = _interopRequireDefault(require("../context/TableContext"));

        var _BodyContext = _interopRequireDefault(require("../context/BodyContext"));

        var _valueUtil = require("../utils/valueUtil");

        var _ExpandedRow = _interopRequireDefault(require("./ExpandedRow"));

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

        function BodyRow(props) {
          var className = props.className,
              style = props.style,
              record = props.record,
              index = props.index,
              renderIndex = props.renderIndex,
              rowKey = props.rowKey,
              rowExpandable = props.rowExpandable,
              expandedKeys = props.expandedKeys,
              onRow = props.onRow,
              _props$indent = props.indent,
              indent = _props$indent === void 0 ? 0 : _props$indent,
              RowComponent = props.rowComponent,
              cellComponent = props.cellComponent,
              childrenColumnName = props.childrenColumnName;

          var _React$useContext = React.useContext(_TableContext.default),
              prefixCls = _React$useContext.prefixCls,
              fixedInfoList = _React$useContext.fixedInfoList;

          var _React$useContext2 = React.useContext(_BodyContext.default),
              flattenColumns = _React$useContext2.flattenColumns,
              expandableType = _React$useContext2.expandableType,
              expandRowByClick = _React$useContext2.expandRowByClick,
              onTriggerExpand = _React$useContext2.onTriggerExpand,
              rowClassName = _React$useContext2.rowClassName,
              expandedRowClassName = _React$useContext2.expandedRowClassName,
              indentSize = _React$useContext2.indentSize,
              expandIcon = _React$useContext2.expandIcon,
              expandedRowRender = _React$useContext2.expandedRowRender,
              expandIconColumnIndex = _React$useContext2.expandIconColumnIndex;

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              expandRended = _React$useState2[0],
              setExpandRended = _React$useState2[1];

          var expanded = expandedKeys && expandedKeys.has(props.recordKey);
          React.useEffect(function () {
            if (expanded) {
              setExpandRended(true);
            }
          }, [expanded]);
          var rowSupportExpand = expandableType === 'row' && (!rowExpandable || rowExpandable(record)); // Only when row is not expandable and `children` exist in record

          var nestExpandable = expandableType === 'nest';
          var hasNestChildren = childrenColumnName && record && record[childrenColumnName];
          var mergedExpandable = rowSupportExpand || nestExpandable; // ======================== Expandable =========================

          var onExpandRef = React.useRef(onTriggerExpand);
          onExpandRef.current = onTriggerExpand;

          var onInternalTriggerExpand = function onInternalTriggerExpand() {
            onExpandRef.current.apply(onExpandRef, arguments);
          }; // =========================== onRow ===========================


          var additionalProps = onRow === null || onRow === void 0 ? void 0 : onRow(record, index);

          var onClick = function onClick(event) {
            var _additionalProps$onCl;

            if (expandRowByClick && mergedExpandable) {
              onInternalTriggerExpand(record, event);
            }

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onCl = additionalProps.onClick) === null || _additionalProps$onCl === void 0 ? void 0 : _additionalProps$onCl.call.apply(_additionalProps$onCl, [additionalProps, event].concat(args));
          }; // ======================== Base tr row ========================


          var computeRowClassName;

          if (typeof rowClassName === 'string') {
            computeRowClassName = rowClassName;
          } else if (typeof rowClassName === 'function') {
            computeRowClassName = rowClassName(record, index, indent);
          }

          var columnsKey = (0, _valueUtil.getColumnsKey)(flattenColumns);
          var baseRowNode = /*#__PURE__*/React.createElement(RowComponent, (0, _extends2.default)({}, additionalProps, {
            "data-row-key": rowKey,
            className: (0, _classnames.default)(className, "".concat(prefixCls, "-row"), "".concat(prefixCls, "-row-level-").concat(indent), computeRowClassName, additionalProps && additionalProps.className),
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), additionalProps ? additionalProps.style : null),
            onClick: onClick
          }), flattenColumns.map(function (column, colIndex) {
            var render = column.render,
                dataIndex = column.dataIndex,
                columnClassName = column.className;
            var key = columnsKey[colIndex];
            var fixedInfo = fixedInfoList[colIndex]; // ============= Used for nest expandable =============

            var appendCellNode;

            if (colIndex === (expandIconColumnIndex || 0) && nestExpandable) {
              appendCellNode = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
                style: {
                  paddingLeft: "".concat(indentSize * indent, "px")
                },
                className: "".concat(prefixCls, "-row-indent indent-level-").concat(indent)
              }), expandIcon({
                prefixCls: prefixCls,
                expanded: expanded,
                expandable: hasNestChildren,
                record: record,
                onExpand: onInternalTriggerExpand
              }));
            }

            var additionalCellProps;

            if (column.onCell) {
              additionalCellProps = column.onCell(record, index);
            }

            return /*#__PURE__*/React.createElement(_Cell.default, (0, _extends2.default)({
              className: columnClassName,
              ellipsis: column.ellipsis,
              align: column.align,
              component: cellComponent,
              prefixCls: prefixCls,
              key: key,
              record: record,
              index: index,
              renderIndex: renderIndex,
              dataIndex: dataIndex,
              render: render,
              shouldCellUpdate: column.shouldCellUpdate,
              expanded: appendCellNode && expanded
            }, fixedInfo, {
              appendNode: appendCellNode,
              additionalProps: additionalCellProps
            }));
          })); // ======================== Expand Row =========================

          var expandRowNode;

          if (rowSupportExpand && (expandRended || expanded)) {
            var expandContent = expandedRowRender(record, index, indent + 1, expanded);
            var computedExpandedRowClassName = expandedRowClassName && expandedRowClassName(record, index, indent);
            expandRowNode = /*#__PURE__*/React.createElement(_ExpandedRow.default, {
              expanded: expanded,
              className: (0, _classnames.default)("".concat(prefixCls, "-expanded-row"), "".concat(prefixCls, "-expanded-row-level-").concat(indent + 1), computedExpandedRowClassName),
              prefixCls: prefixCls,
              component: RowComponent,
              cellComponent: cellComponent,
              colSpan: flattenColumns.length,
              isEmpty: false
            }, expandContent);
          }

          return /*#__PURE__*/React.createElement(React.Fragment, null, baseRowNode, expandRowNode);
        }

        BodyRow.displayName = 'BodyRow';
        var _default = BodyRow;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'classnames': _req5,
        '../Cell': _req6,
        '../context/TableContext': _req7,
        '../context/BodyContext': _req8,
        '../utils/valueUtil': _req9,
        './ExpandedRow': _req10
      }));
    }
  };
});
//# sourceMappingURL=27dbf07b3c97b067d84d1314d8b30b2b62f1c13f.js.map