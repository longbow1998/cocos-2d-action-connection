System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/typeof", "@ant-design/icons/CaretDownOutlined", "@ant-design/icons/CaretUpOutlined", "classnames", "rc-util/lib/KeyCode", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default, _getSortData, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req5 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsCaretDownOutlined) {
      _req6 = _antDesignIconsCaretDownOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCaretUpOutlined) {
      _req7 = _antDesignIconsCaretUpOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req9 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
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
        exports["default"] = useFilterSorter;
        exports.getSortData = getSortData;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _CaretDownOutlined = _interopRequireDefault(require("@ant-design/icons/CaretDownOutlined"));

        var _CaretUpOutlined = _interopRequireDefault(require("@ant-design/icons/CaretUpOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var _tooltip = _interopRequireDefault(require("../../tooltip"));

        var _util = require("../util");

        var ASCEND = 'ascend';
        var DESCEND = 'descend';

        function getMultiplePriority(column) {
          if ((0, _typeof2["default"])(column.sorter) === 'object' && typeof column.sorter.multiple === 'number') {
            return column.sorter.multiple;
          }

          return false;
        }

        function getSortFunction(sorter) {
          if (typeof sorter === 'function') {
            return sorter;
          }

          if (sorter && (0, _typeof2["default"])(sorter) === 'object' && sorter.compare) {
            return sorter.compare;
          }

          return false;
        }

        function nextSortDirection(sortDirections, current) {
          if (!current) {
            return sortDirections[0];
          }

          return sortDirections[sortDirections.indexOf(current) + 1];
        }

        function collectSortStates(columns, init, pos) {
          var sortStates = [];

          function pushState(column, columnPos) {
            sortStates.push({
              column: column,
              key: (0, _util.getColumnKey)(column, columnPos),
              multiplePriority: getMultiplePriority(column),
              sortOrder: column.sortOrder
            });
          }

          (columns || []).forEach(function (column, index) {
            var columnPos = (0, _util.getColumnPos)(index, pos);

            if (column.children) {
              if ('sortOrder' in column) {
                // Controlled
                pushState(column, columnPos);
              }

              sortStates = [].concat((0, _toConsumableArray2["default"])(sortStates), (0, _toConsumableArray2["default"])(collectSortStates(column.children, init, columnPos)));
            } else if (column.sorter) {
              if ('sortOrder' in column) {
                // Controlled
                pushState(column, columnPos);
              } else if (init && column.defaultSortOrder) {
                // Default sorter
                sortStates.push({
                  column: column,
                  key: (0, _util.getColumnKey)(column, columnPos),
                  multiplePriority: getMultiplePriority(column),
                  sortOrder: column.defaultSortOrder
                });
              }
            }
          });
          return sortStates;
        }

        function injectSorter(prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) {
          return (columns || []).map(function (column, index) {
            var columnPos = (0, _util.getColumnPos)(index, pos);
            var newColumn = column;

            if (newColumn.sorter) {
              var sortDirections = newColumn.sortDirections || defaultSortDirections;
              var showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
              var columnKey = (0, _util.getColumnKey)(newColumn, columnPos);
              var sorterState = sorterStates.find(function (_ref) {
                var key = _ref.key;
                return key === columnKey;
              });
              var sorterOrder = sorterState ? sorterState.sortOrder : null;
              var nextSortOrder = nextSortDirection(sortDirections, sorterOrder);
              var upNode = sortDirections.includes(ASCEND) && /*#__PURE__*/React.createElement(_CaretUpOutlined["default"], {
                className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-up"), {
                  active: sorterOrder === ASCEND
                }),
                role: "presentation"
              });
              var downNode = sortDirections.includes(DESCEND) && /*#__PURE__*/React.createElement(_CaretDownOutlined["default"], {
                className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter-down"), {
                  active: sorterOrder === DESCEND
                }),
                role: "presentation"
              });

              var _ref2 = tableLocale || {},
                  cancelSort = _ref2.cancelSort,
                  triggerAsc = _ref2.triggerAsc,
                  triggerDesc = _ref2.triggerDesc;

              var sortTip = cancelSort;

              if (nextSortOrder === DESCEND) {
                sortTip = triggerDesc;
              } else if (nextSortOrder === ASCEND) {
                sortTip = triggerAsc;
              }

              var tooltipProps = (0, _typeof2["default"])(showSorterTooltip) === 'object' ? showSorterTooltip : {
                title: sortTip
              };
              newColumn = (0, _extends3["default"])((0, _extends3["default"])({}, newColumn), {
                className: (0, _classnames["default"])(newColumn.className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-column-sort"), sorterOrder)),
                title: function title(renderProps) {
                  var renderSortTitle = /*#__PURE__*/React.createElement("div", {
                    className: "".concat(prefixCls, "-column-sorters")
                  }, /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-column-title")
                  }, (0, _util.renderColumnTitle)(column.title, renderProps)), /*#__PURE__*/React.createElement("span", {
                    className: (0, _classnames["default"])("".concat(prefixCls, "-column-sorter"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-column-sorter-full"), !!(upNode && downNode)))
                  }, /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-column-sorter-inner")
                  }, upNode, downNode)));
                  return showSorterTooltip ? /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends3["default"])({}, tooltipProps), renderSortTitle) : renderSortTitle;
                },
                onHeaderCell: function onHeaderCell(col) {
                  var cell = column.onHeaderCell && column.onHeaderCell(col) || {};
                  var originOnClick = cell.onClick;
                  var originOKeyDown = cell.onKeyDown;

                  cell.onClick = function (event) {
                    triggerSorter({
                      column: column,
                      key: columnKey,
                      sortOrder: nextSortOrder,
                      multiplePriority: getMultiplePriority(column)
                    });
                    originOnClick === null || originOnClick === void 0 ? void 0 : originOnClick(event);
                  };

                  cell.onKeyDown = function (event) {
                    if (event.keyCode === _KeyCode["default"].ENTER) {
                      triggerSorter({
                        column: column,
                        key: columnKey,
                        sortOrder: nextSortOrder,
                        multiplePriority: getMultiplePriority(column)
                      });
                      originOKeyDown === null || originOKeyDown === void 0 ? void 0 : originOKeyDown(event);
                    }
                  };

                  var renderTitle = (0, _util.safeColumnTitle)(column.title, {});
                  var displayTitle = renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle.toString(); // Inform the screen-reader so it can tell the visually impaired user which column is sorted

                  if (sorterOrder) {
                    cell['aria-sort'] = sorterOrder === 'ascend' ? 'ascending' : 'descending';
                  } else {
                    cell['aria-label'] = displayTitle || '';
                  }

                  cell.className = (0, _classnames["default"])(cell.className, "".concat(prefixCls, "-column-has-sorters"));
                  cell.tabIndex = 0;

                  if (column.ellipsis) {
                    cell.title = (renderTitle !== null && renderTitle !== void 0 ? renderTitle : '').toString();
                  }

                  return cell;
                }
              });
            }

            if ('children' in newColumn) {
              newColumn = (0, _extends3["default"])((0, _extends3["default"])({}, newColumn), {
                children: injectSorter(prefixCls, newColumn.children, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
              });
            }

            return newColumn;
          });
        }

        function stateToInfo(sorterStates) {
          var column = sorterStates.column,
              sortOrder = sorterStates.sortOrder;
          return {
            column: column,
            order: sortOrder,
            field: column.dataIndex,
            columnKey: column.key
          };
        }

        function generateSorterInfo(sorterStates) {
          var list = sorterStates.filter(function (_ref3) {
            var sortOrder = _ref3.sortOrder;
            return sortOrder;
          }).map(stateToInfo); // =========== Legacy compatible support ===========
          // https://github.com/ant-design/ant-design/pull/19226

          if (list.length === 0 && sorterStates.length) {
            return (0, _extends3["default"])((0, _extends3["default"])({}, stateToInfo(sorterStates[sorterStates.length - 1])), {
              column: undefined
            });
          }

          if (list.length <= 1) {
            return list[0] || {};
          }

          return list;
        }

        function getSortData(data, sortStates, childrenColumnName) {
          var innerSorterStates = sortStates.slice().sort(function (a, b) {
            return b.multiplePriority - a.multiplePriority;
          });
          var cloneData = data.slice();
          var runningSorters = innerSorterStates.filter(function (_ref4) {
            var sorter = _ref4.column.sorter,
                sortOrder = _ref4.sortOrder;
            return getSortFunction(sorter) && sortOrder;
          }); // Skip if no sorter needed

          if (!runningSorters.length) {
            return cloneData;
          }

          return cloneData.sort(function (record1, record2) {
            for (var i = 0; i < runningSorters.length; i += 1) {
              var sorterState = runningSorters[i];
              var sorter = sorterState.column.sorter,
                  sortOrder = sorterState.sortOrder;
              var compareFn = getSortFunction(sorter);

              if (compareFn && sortOrder) {
                var compareResult = compareFn(record1, record2, sortOrder);

                if (compareResult !== 0) {
                  return sortOrder === ASCEND ? compareResult : -compareResult;
                }
              }
            }

            return 0;
          }).map(function (record) {
            var subRecords = record[childrenColumnName];

            if (subRecords) {
              return (0, _extends3["default"])((0, _extends3["default"])({}, record), (0, _defineProperty2["default"])({}, childrenColumnName, getSortData(subRecords, sortStates, childrenColumnName)));
            }

            return record;
          });
        }

        function useFilterSorter(_ref5) {
          var prefixCls = _ref5.prefixCls,
              mergedColumns = _ref5.mergedColumns,
              onSorterChange = _ref5.onSorterChange,
              sortDirections = _ref5.sortDirections,
              tableLocale = _ref5.tableLocale,
              showSorterTooltip = _ref5.showSorterTooltip;

          var _React$useState = React.useState(collectSortStates(mergedColumns, true)),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              sortStates = _React$useState2[0],
              setSortStates = _React$useState2[1];

          var mergedSorterStates = React.useMemo(function () {
            var validate = true;
            var collectedStates = collectSortStates(mergedColumns, false); // Return if not controlled

            if (!collectedStates.length) {
              return sortStates;
            }

            var validateStates = [];

            function patchStates(state) {
              if (validate) {
                validateStates.push(state);
              } else {
                validateStates.push((0, _extends3["default"])((0, _extends3["default"])({}, state), {
                  sortOrder: null
                }));
              }
            }

            var multipleMode = null;
            collectedStates.forEach(function (state) {
              if (multipleMode === null) {
                patchStates(state);

                if (state.sortOrder) {
                  if (state.multiplePriority === false) {
                    validate = false;
                  } else {
                    multipleMode = true;
                  }
                }
              } else if (multipleMode && state.multiplePriority !== false) {
                patchStates(state);
              } else {
                validate = false;
                patchStates(state);
              }
            });
            return validateStates;
          }, [mergedColumns, sortStates]); // Get render columns title required props

          var columnTitleSorterProps = React.useMemo(function () {
            var sortColumns = mergedSorterStates.map(function (_ref6) {
              var column = _ref6.column,
                  sortOrder = _ref6.sortOrder;
              return {
                column: column,
                order: sortOrder
              };
            });
            return {
              sortColumns: sortColumns,
              // Legacy
              sortColumn: sortColumns[0] && sortColumns[0].column,
              sortOrder: sortColumns[0] && sortColumns[0].order
            };
          }, [mergedSorterStates]);

          function triggerSorter(sortState) {
            var newSorterStates;

            if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
              newSorterStates = [sortState];
            } else {
              newSorterStates = [].concat((0, _toConsumableArray2["default"])(mergedSorterStates.filter(function (_ref7) {
                var key = _ref7.key;
                return key !== sortState.key;
              })), [sortState]);
            }

            setSortStates(newSorterStates);
            onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
          }

          var transformColumns = function transformColumns(innerColumns) {
            return injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
          };

          var getSorters = function getSorters() {
            return generateSorterInfo(mergedSorterStates);
          };

          return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _getSortData = module.exports.getSortData;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/typeof': _req5,
        '@ant-design/icons/CaretDownOutlined': _req6,
        '@ant-design/icons/CaretUpOutlined': _req7,
        'classnames': _req8,
        'rc-util/lib/KeyCode': _req9,
        'react': _req10,
        '../../tooltip': _req11,
        '../util': _req12
      }));
    }
  };
});
//# sourceMappingURL=d2925580a10c86f1575658ba990bb435abe2600e.js.map