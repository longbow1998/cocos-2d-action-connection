System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _HeaderRow = _interopRequireDefault(require("./HeaderRow"));

        var _TableContext = _interopRequireDefault(require("../context/TableContext"));

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

        function parseHeaderRows(rootColumns) {
          var rows = [];

          function fillRowCells(columns, colIndex) {
            var rowIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0; // Init rows

            rows[rowIndex] = rows[rowIndex] || [];
            var currentColIndex = colIndex;
            var colSpans = columns.filter(Boolean).map(function (column) {
              var cell = {
                key: column.key,
                className: column.className || '',
                children: column.title,
                column: column,
                colStart: currentColIndex
              };
              var colSpan = 1;
              var subColumns = column.children;

              if (subColumns && subColumns.length > 0) {
                colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce(function (total, count) {
                  return total + count;
                }, 0);
                cell.hasSubColumns = true;
              }

              if ('colSpan' in column) {
                colSpan = column.colSpan;
              }

              if ('rowSpan' in column) {
                cell.rowSpan = column.rowSpan;
              }

              cell.colSpan = colSpan;
              cell.colEnd = cell.colStart + colSpan - 1;
              rows[rowIndex].push(cell);
              currentColIndex += colSpan;
              return colSpan;
            });
            return colSpans;
          } // Generate `rows` cell data


          fillRowCells(rootColumns, 0); // Handle `rowSpan`

          var rowCount = rows.length;

          var _loop = function _loop(rowIndex) {
            rows[rowIndex].forEach(function (cell) {
              if (!('rowSpan' in cell) && !cell.hasSubColumns) {
                // eslint-disable-next-line no-param-reassign
                cell.rowSpan = rowCount - rowIndex;
              }
            });
          };

          for (var rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
            _loop(rowIndex);
          }

          return rows;
        }

        function Header(_ref) {
          var stickyOffsets = _ref.stickyOffsets,
              columns = _ref.columns,
              flattenColumns = _ref.flattenColumns,
              onHeaderRow = _ref.onHeaderRow;

          var _React$useContext = React.useContext(_TableContext.default),
              prefixCls = _React$useContext.prefixCls,
              getComponent = _React$useContext.getComponent;

          var rows = React.useMemo(function () {
            return parseHeaderRows(columns);
          }, [columns]);
          var WrapperComponent = getComponent(['header', 'wrapper'], 'thead');
          var trComponent = getComponent(['header', 'row'], 'tr');
          var thComponent = getComponent(['header', 'cell'], 'th');
          return /*#__PURE__*/React.createElement(WrapperComponent, {
            className: "".concat(prefixCls, "-thead")
          }, rows.map(function (row, rowIndex) {
            var rowNode = /*#__PURE__*/React.createElement(_HeaderRow.default, {
              key: rowIndex,
              flattenColumns: flattenColumns,
              cells: row,
              stickyOffsets: stickyOffsets,
              rowComponent: trComponent,
              cellComponent: thComponent,
              onHeaderRow: onHeaderRow,
              index: rowIndex
            });
            return rowNode;
          }));
        }

        var _default = Header;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'react': _req1,
        './HeaderRow': _req2,
        '../context/TableContext': _req3
      }));
    }
  };
});
//# sourceMappingURL=6a822ebae9c4fa9b46485a598a8d8923dbe737a0.js.map