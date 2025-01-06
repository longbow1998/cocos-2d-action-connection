System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toArray", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/typeof", "@ant-design/icons/DownOutlined", "rc-table", "rc-tree/lib/util", "rc-tree/lib/utils/conductUtil", "rc-tree/lib/utils/treeUtil", "rc-util/lib/hooks/useMergedState", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _SELECTION_NONE, _SELECTION_INVERT, _SELECTION_COLUMN, _SELECTION_ALL, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToArray) {
      _req2 = _babelRuntimeHelpersToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req5 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req6 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsDownOutlined) {
      _req7 = _antDesignIconsDownOutlined.__cjsMetaURL;
    }, function (_rcTable2) {
      _req8 = _rcTable2.__cjsMetaURL;
    }, function (_rcTreeLibUtil) {
      _req9 = _rcTreeLibUtil.__cjsMetaURL;
    }, function (_rcTreeLibUtilsConductUtil) {
      _req10 = _rcTreeLibUtilsConductUtil.__cjsMetaURL;
    }, function (_rcTreeLibUtilsTreeUtil) {
      _req11 = _rcTreeLibUtilsTreeUtil.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req12 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_react) {
      _req13 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req14 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req15 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req16 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req17 = _unresolved_5.__cjsMetaURL;
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
        exports.SELECTION_NONE = exports.SELECTION_INVERT = exports.SELECTION_COLUMN = exports.SELECTION_ALL = void 0;
        exports["default"] = useSelection;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));

        var _rcTable = require("rc-table");

        var _util = require("rc-tree/lib/util");

        var _conductUtil = require("rc-tree/lib/utils/conductUtil");

        var _treeUtil = require("rc-tree/lib/utils/treeUtil");

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var React = _interopRequireWildcard(require("react"));

        var _checkbox = _interopRequireDefault(require("../../checkbox"));

        var _dropdown = _interopRequireDefault(require("../../dropdown"));

        var _radio = _interopRequireDefault(require("../../radio"));

        var _warning = _interopRequireDefault(require("../../_util/warning")); // TODO: warning if use ajax!!!


        var SELECTION_COLUMN = {};
        exports.SELECTION_COLUMN = SELECTION_COLUMN;
        var SELECTION_ALL = 'SELECT_ALL';
        exports.SELECTION_ALL = SELECTION_ALL;
        var SELECTION_INVERT = 'SELECT_INVERT';
        exports.SELECTION_INVERT = SELECTION_INVERT;
        var SELECTION_NONE = 'SELECT_NONE';
        exports.SELECTION_NONE = SELECTION_NONE;
        var EMPTY_LIST = [];

        function flattenData(data, childrenColumnName) {
          var list = [];
          (data || []).forEach(function (record) {
            list.push(record);

            if (record && (0, _typeof2["default"])(record) === 'object' && childrenColumnName in record) {
              list = [].concat((0, _toConsumableArray2["default"])(list), (0, _toConsumableArray2["default"])(flattenData(record[childrenColumnName], childrenColumnName)));
            }
          });
          return list;
        }

        function useSelection(rowSelection, config) {
          var _ref = rowSelection || {},
              preserveSelectedRowKeys = _ref.preserveSelectedRowKeys,
              selectedRowKeys = _ref.selectedRowKeys,
              defaultSelectedRowKeys = _ref.defaultSelectedRowKeys,
              getCheckboxProps = _ref.getCheckboxProps,
              onSelectionChange = _ref.onChange,
              onSelect = _ref.onSelect,
              onSelectAll = _ref.onSelectAll,
              onSelectInvert = _ref.onSelectInvert,
              onSelectNone = _ref.onSelectNone,
              onSelectMultiple = _ref.onSelectMultiple,
              selectionColWidth = _ref.columnWidth,
              selectionType = _ref.type,
              selections = _ref.selections,
              fixed = _ref.fixed,
              customizeRenderCell = _ref.renderCell,
              hideSelectAll = _ref.hideSelectAll,
              _ref$checkStrictly = _ref.checkStrictly,
              checkStrictly = _ref$checkStrictly === void 0 ? true : _ref$checkStrictly;

          var prefixCls = config.prefixCls,
              data = config.data,
              pageData = config.pageData,
              getRecordByKey = config.getRecordByKey,
              getRowKey = config.getRowKey,
              expandType = config.expandType,
              childrenColumnName = config.childrenColumnName,
              tableLocale = config.locale,
              getPopupContainer = config.getPopupContainer; // ========================= Keys =========================

          var _useMergedState = (0, _useMergedState3["default"])(selectedRowKeys || defaultSelectedRowKeys || EMPTY_LIST, {
            value: selectedRowKeys
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              mergedSelectedKeys = _useMergedState2[0],
              setMergedSelectedKeys = _useMergedState2[1]; // ======================== Caches ========================


          var preserveRecordsRef = React.useRef(new Map());
          var updatePreserveRecordsCache = (0, React.useCallback)(function (keys) {
            if (preserveSelectedRowKeys) {
              var newCache = new Map(); // Keep key if mark as preserveSelectedRowKeys

              keys.forEach(function (key) {
                var record = getRecordByKey(key);

                if (!record && preserveRecordsRef.current.has(key)) {
                  record = preserveRecordsRef.current.get(key);
                }

                newCache.set(key, record);
              }); // Refresh to new cache

              preserveRecordsRef.current = newCache;
            }
          }, [getRecordByKey, preserveSelectedRowKeys]); // Update cache with selectedKeys

          React.useEffect(function () {
            updatePreserveRecordsCache(mergedSelectedKeys);
          }, [mergedSelectedKeys]);

          var _useMemo = (0, React.useMemo)(function () {
            return checkStrictly ? {
              keyEntities: null
            } : (0, _treeUtil.convertDataToEntities)(data, {
              externalGetKey: getRowKey,
              childrenPropName: childrenColumnName
            });
          }, [data, getRowKey, checkStrictly, childrenColumnName]),
              keyEntities = _useMemo.keyEntities; // Get flatten data


          var flattedData = (0, React.useMemo)(function () {
            return flattenData(pageData, childrenColumnName);
          }, [pageData, childrenColumnName]); // Get all checkbox props

          var checkboxPropsMap = (0, React.useMemo)(function () {
            var map = new Map();
            flattedData.forEach(function (record, index) {
              var key = getRowKey(record, index);
              var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
              map.set(key, checkboxProps);
              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('checked' in checkboxProps || 'defaultChecked' in checkboxProps), 'Table', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.') : void 0;
            });
            return map;
          }, [flattedData, getRowKey, getCheckboxProps]);
          var isCheckboxDisabled = (0, React.useCallback)(function (r) {
            var _a;

            return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
          }, [checkboxPropsMap, getRowKey]);

          var _useMemo2 = (0, React.useMemo)(function () {
            if (checkStrictly) {
              return [mergedSelectedKeys || [], []];
            }

            var _conductCheck = (0, _conductUtil.conductCheck)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled),
                checkedKeys = _conductCheck.checkedKeys,
                halfCheckedKeys = _conductCheck.halfCheckedKeys;

            return [checkedKeys || [], halfCheckedKeys];
          }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]),
              _useMemo3 = (0, _slicedToArray2["default"])(_useMemo2, 2),
              derivedSelectedKeys = _useMemo3[0],
              derivedHalfSelectedKeys = _useMemo3[1];

          var derivedSelectedKeySet = (0, React.useMemo)(function () {
            var keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
            return new Set(keys);
          }, [derivedSelectedKeys, selectionType]);
          var derivedHalfSelectedKeySet = (0, React.useMemo)(function () {
            return selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys);
          }, [derivedHalfSelectedKeys, selectionType]); // Save last selected key to enable range selection

          var _useState = (0, React.useState)(null),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              lastSelectedKey = _useState2[0],
              setLastSelectedKey = _useState2[1]; // Reset if rowSelection reset


          React.useEffect(function () {
            if (!rowSelection) {
              setMergedSelectedKeys(EMPTY_LIST);
            }
          }, [!!rowSelection]);
          var setSelectedKeys = (0, React.useCallback)(function (keys, method) {
            var availableKeys;
            var records;
            updatePreserveRecordsCache(keys);

            if (preserveSelectedRowKeys) {
              availableKeys = keys;
              records = keys.map(function (key) {
                return preserveRecordsRef.current.get(key);
              });
            } else {
              // Filter key which not exist in the `dataSource`
              availableKeys = [];
              records = [];
              keys.forEach(function (key) {
                var record = getRecordByKey(key);

                if (record !== undefined) {
                  availableKeys.push(key);
                  records.push(record);
                }
              });
            }

            setMergedSelectedKeys(availableKeys);
            onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records, {
              type: method
            });
          }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]); // ====================== Selections ======================
          // Trigger single `onSelect` event

          var triggerSingleSelection = (0, React.useCallback)(function (key, selected, keys, event) {
            if (onSelect) {
              var rows = keys.map(function (k) {
                return getRecordByKey(k);
              });
              onSelect(getRecordByKey(key), selected, rows, event);
            }

            setSelectedKeys(keys, 'single');
          }, [onSelect, getRecordByKey, setSelectedKeys]);
          var mergedSelections = (0, React.useMemo)(function () {
            if (!selections || hideSelectAll) {
              return null;
            }

            var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
            return selectionList.map(function (selection) {
              if (selection === SELECTION_ALL) {
                return {
                  key: 'all',
                  text: tableLocale.selectionAll,
                  onSelect: function onSelect() {
                    setSelectedKeys(data.map(function (record, index) {
                      return getRowKey(record, index);
                    }).filter(function (key) {
                      var checkProps = checkboxPropsMap.get(key);
                      return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
                    }), 'all');
                  }
                };
              }

              if (selection === SELECTION_INVERT) {
                return {
                  key: 'invert',
                  text: tableLocale.selectInvert,
                  onSelect: function onSelect() {
                    var keySet = new Set(derivedSelectedKeySet);
                    pageData.forEach(function (record, index) {
                      var key = getRowKey(record, index);
                      var checkProps = checkboxPropsMap.get(key);

                      if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                        if (keySet.has(key)) {
                          keySet["delete"](key);
                        } else {
                          keySet.add(key);
                        }
                      }
                    });
                    var keys = Array.from(keySet);

                    if (onSelectInvert) {
                      process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Table', '`onSelectInvert` will be removed in future. Please use `onChange` instead.') : void 0;
                      onSelectInvert(keys);
                    }

                    setSelectedKeys(keys, 'invert');
                  }
                };
              }

              if (selection === SELECTION_NONE) {
                return {
                  key: 'none',
                  text: tableLocale.selectNone,
                  onSelect: function onSelect() {
                    onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
                    setSelectedKeys(Array.from(derivedSelectedKeySet).filter(function (key) {
                      var checkProps = checkboxPropsMap.get(key);
                      return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
                    }), 'none');
                  }
                };
              }

              return selection;
            }).map(function (selection) {
              return (0, _extends2["default"])((0, _extends2["default"])({}, selection), {
                onSelect: function onSelect() {
                  var _a2;

                  var _a;

                  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
                    rest[_key] = arguments[_key];
                  }

                  (_a = selection.onSelect) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [selection].concat(rest));
                  setLastSelectedKey(null);
                }
              });
            });
          }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]); // ======================= Columns ========================

          var transformColumns = (0, React.useCallback)(function (columns) {
            var _a; // >>>>>>>>>>> Skip if not exists `rowSelection`


            if (!rowSelection) {
              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!columns.includes(SELECTION_COLUMN), 'Table', '`rowSelection` is not config but `SELECTION_COLUMN` exists in the `columns`.') : void 0;
              return columns.filter(function (col) {
                return col !== SELECTION_COLUMN;
              });
            } // >>>>>>>>>>> Support selection


            var cloneColumns = (0, _toConsumableArray2["default"])(columns);
            var keySet = new Set(derivedSelectedKeySet); // Record key only need check with enabled

            var recordKeys = flattedData.map(getRowKey).filter(function (key) {
              return !checkboxPropsMap.get(key).disabled;
            });
            var checkedCurrentAll = recordKeys.every(function (key) {
              return keySet.has(key);
            });
            var checkedCurrentSome = recordKeys.some(function (key) {
              return keySet.has(key);
            });

            var onSelectAllChange = function onSelectAllChange() {
              var changeKeys = [];

              if (checkedCurrentAll) {
                recordKeys.forEach(function (key) {
                  keySet["delete"](key);
                  changeKeys.push(key);
                });
              } else {
                recordKeys.forEach(function (key) {
                  if (!keySet.has(key)) {
                    keySet.add(key);
                    changeKeys.push(key);
                  }
                });
              }

              var keys = Array.from(keySet);
              onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(function (k) {
                return getRecordByKey(k);
              }), changeKeys.map(function (k) {
                return getRecordByKey(k);
              }));
              setSelectedKeys(keys, 'all');
              setLastSelectedKey(null);
            }; // ===================== Render =====================
            // Title Cell


            var title;

            if (selectionType !== 'radio') {
              var customizeSelections;

              if (mergedSelections) {
                var menu = {
                  getPopupContainer: getPopupContainer,
                  items: mergedSelections.map(function (selection, index) {
                    var key = selection.key,
                        text = selection.text,
                        onSelectionClick = selection.onSelect;
                    return {
                      key: key || index,
                      onClick: function onClick() {
                        onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
                      },
                      label: text
                    };
                  })
                };
                customizeSelections = /*#__PURE__*/React.createElement("div", {
                  className: "".concat(prefixCls, "-selection-extra")
                }, /*#__PURE__*/React.createElement(_dropdown["default"], {
                  menu: menu,
                  getPopupContainer: getPopupContainer
                }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_DownOutlined["default"], null))));
              }

              var allDisabledData = flattedData.map(function (record, index) {
                var key = getRowKey(record, index);
                var checkboxProps = checkboxPropsMap.get(key) || {};
                return (0, _extends2["default"])({
                  checked: keySet.has(key)
                }, checkboxProps);
              }).filter(function (_ref2) {
                var disabled = _ref2.disabled;
                return disabled;
              });
              var allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
              var allDisabledAndChecked = allDisabled && allDisabledData.every(function (_ref3) {
                var checked = _ref3.checked;
                return checked;
              });
              var allDisabledSomeChecked = allDisabled && allDisabledData.some(function (_ref4) {
                var checked = _ref4.checked;
                return checked;
              });
              title = !hideSelectAll && /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-selection")
              }, /*#__PURE__*/React.createElement(_checkbox["default"], {
                checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
                indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
                onChange: onSelectAllChange,
                disabled: flattedData.length === 0 || allDisabled,
                "aria-label": customizeSelections ? 'Custom selection' : 'Select all',
                skipGroup: true
              }), customizeSelections);
            } // Body Cell


            var renderCell;

            if (selectionType === 'radio') {
              renderCell = function renderCell(_, record, index) {
                var key = getRowKey(record, index);
                var checked = keySet.has(key);
                return {
                  node: /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({}, checkboxPropsMap.get(key), {
                    checked: checked,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    onChange: function onChange(event) {
                      if (!keySet.has(key)) {
                        triggerSingleSelection(key, true, [key], event.nativeEvent);
                      }
                    }
                  })),
                  checked: checked
                };
              };
            } else {
              renderCell = function renderCell(_, record, index) {
                var _a;

                var key = getRowKey(record, index);
                var checked = keySet.has(key);
                var indeterminate = derivedHalfSelectedKeySet.has(key);
                var checkboxProps = checkboxPropsMap.get(key);
                var mergedIndeterminate;

                if (expandType === 'nest') {
                  mergedIndeterminate = indeterminate;
                  process.env.NODE_ENV !== "production" ? (0, _warning["default"])(typeof (checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== 'boolean', 'Table', 'set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource.') : void 0;
                } else {
                  mergedIndeterminate = (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a !== void 0 ? _a : indeterminate;
                } // Record checked


                return {
                  node: /*#__PURE__*/React.createElement(_checkbox["default"], (0, _extends2["default"])({}, checkboxProps, {
                    indeterminate: mergedIndeterminate,
                    checked: checked,
                    skipGroup: true,
                    onClick: function onClick(e) {
                      return e.stopPropagation();
                    },
                    onChange: function onChange(_ref5) {
                      var nativeEvent = _ref5.nativeEvent;
                      var shiftKey = nativeEvent.shiftKey;
                      var startIndex = -1;
                      var endIndex = -1; // Get range of this

                      if (shiftKey && checkStrictly) {
                        var pointKeys = new Set([lastSelectedKey, key]);
                        recordKeys.some(function (recordKey, recordIndex) {
                          if (pointKeys.has(recordKey)) {
                            if (startIndex === -1) {
                              startIndex = recordIndex;
                            } else {
                              endIndex = recordIndex;
                              return true;
                            }
                          }

                          return false;
                        });
                      }

                      if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                        // Batch update selections
                        var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                        var changedKeys = [];

                        if (checked) {
                          rangeKeys.forEach(function (recordKey) {
                            if (keySet.has(recordKey)) {
                              changedKeys.push(recordKey);
                              keySet["delete"](recordKey);
                            }
                          });
                        } else {
                          rangeKeys.forEach(function (recordKey) {
                            if (!keySet.has(recordKey)) {
                              changedKeys.push(recordKey);
                              keySet.add(recordKey);
                            }
                          });
                        }

                        var keys = Array.from(keySet);
                        onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(function (recordKey) {
                          return getRecordByKey(recordKey);
                        }), changedKeys.map(function (recordKey) {
                          return getRecordByKey(recordKey);
                        }));
                        setSelectedKeys(keys, 'multiple');
                      } else {
                        // Single record selected
                        var originCheckedKeys = derivedSelectedKeys;

                        if (checkStrictly) {
                          var checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                          triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                        } else {
                          // Always fill first
                          var result = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2["default"])(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                          var _checkedKeys = result.checkedKeys,
                              halfCheckedKeys = result.halfCheckedKeys;
                          var nextCheckedKeys = _checkedKeys; // If remove, we do it again to correction

                          if (checked) {
                            var tempKeySet = new Set(_checkedKeys);
                            tempKeySet["delete"](key);
                            nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                              checked: false,
                              halfCheckedKeys: halfCheckedKeys
                            }, keyEntities, isCheckboxDisabled).checkedKeys;
                          }

                          triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                        }
                      }

                      if (checked) {
                        setLastSelectedKey(null);
                      } else {
                        setLastSelectedKey(key);
                      }
                    }
                  })),
                  checked: checked
                };
              };
            }

            var renderSelectionCell = function renderSelectionCell(_, record, index) {
              var _renderCell = renderCell(_, record, index),
                  node = _renderCell.node,
                  checked = _renderCell.checked;

              if (customizeRenderCell) {
                return customizeRenderCell(checked, record, index, node);
              }

              return node;
            }; // Insert selection column if not exist


            if (!cloneColumns.includes(SELECTION_COLUMN)) {
              // Always after expand icon
              if (cloneColumns.findIndex(function (col) {
                var _a;

                return ((_a = col[_rcTable.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN';
              }) === 0) {
                var _cloneColumns = cloneColumns,
                    _cloneColumns2 = (0, _toArray2["default"])(_cloneColumns),
                    expandColumn = _cloneColumns2[0],
                    restColumns = _cloneColumns2.slice(1);

                cloneColumns = [expandColumn, SELECTION_COLUMN].concat((0, _toConsumableArray2["default"])(restColumns));
              } else {
                // Normal insert at first column
                cloneColumns = [SELECTION_COLUMN].concat((0, _toConsumableArray2["default"])(cloneColumns));
              }
            } // Deduplicate selection column


            var selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(cloneColumns.filter(function (col) {
              return col === SELECTION_COLUMN;
            }).length <= 1, 'Table', 'Multiple `SELECTION_COLUMN` exist in `columns`.') : void 0;
            cloneColumns = cloneColumns.filter(function (column, index) {
              return column !== SELECTION_COLUMN || index === selectionColumnIndex;
            }); // Fixed column logic

            var prevCol = cloneColumns[selectionColumnIndex - 1];
            var nextCol = cloneColumns[selectionColumnIndex + 1];
            var mergedFixed = fixed;

            if (mergedFixed === undefined) {
              if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) {
                mergedFixed = nextCol.fixed;
              } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) {
                mergedFixed = prevCol.fixed;
              }
            }

            if (mergedFixed && prevCol && ((_a = prevCol[_rcTable.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) {
              prevCol.fixed = mergedFixed;
            } // Replace with real selection column


            var selectionColumn = (0, _defineProperty2["default"])({
              fixed: mergedFixed,
              width: selectionColWidth,
              className: "".concat(prefixCls, "-selection-column"),
              title: rowSelection.columnTitle || title,
              render: renderSelectionCell
            }, _rcTable.INTERNAL_COL_DEFINE, {
              className: "".concat(prefixCls, "-selection-col")
            });
            return cloneColumns.map(function (col) {
              return col === SELECTION_COLUMN ? selectionColumn : col;
            });
          }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, lastSelectedKey, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
          return [transformColumns, derivedSelectedKeySet];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _SELECTION_NONE = module.exports.SELECTION_NONE;
        _SELECTION_INVERT = module.exports.SELECTION_INVERT;
        _SELECTION_COLUMN = module.exports.SELECTION_COLUMN;
        _SELECTION_ALL = module.exports.SELECTION_ALL;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/toArray': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/toConsumableArray': _req5,
        '@babel/runtime/helpers/typeof': _req6,
        '@ant-design/icons/DownOutlined': _req7,
        'rc-table': _req8,
        'rc-tree/lib/util': _req9,
        'rc-tree/lib/utils/conductUtil': _req10,
        'rc-tree/lib/utils/treeUtil': _req11,
        'rc-util/lib/hooks/useMergedState': _req12,
        'react': _req13,
        '../../checkbox': _req14,
        '../../dropdown': _req15,
        '../../radio': _req16,
        '../../_util/warning': _req17
      }));
    }
  };
});
//# sourceMappingURL=dbe5335061892e3ee937a1b8da4add688d9cac34.js.map