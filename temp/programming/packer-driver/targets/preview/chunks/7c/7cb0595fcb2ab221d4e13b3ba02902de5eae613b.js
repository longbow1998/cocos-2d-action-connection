System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-select", "rc-tree/lib/utils/conductUtil", "rc-select/lib/hooks/useId", "rc-util/lib/hooks/useMergedState", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _req26, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req5 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_rcSelect2) {
      _req8 = _rcSelect2.__cjsMetaURL;
    }, function (_rcTreeLibUtilsConductUtil) {
      _req9 = _rcTreeLibUtilsConductUtil.__cjsMetaURL;
    }, function (_rcSelectLibHooksUseId) {
      _req10 = _rcSelectLibHooksUseId.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req11 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req17 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req18 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req19 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req20 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req21 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req22 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req23 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req24 = _unresolved_14.__cjsMetaURL;
    }, function (_unresolved_15) {
      _req25 = _unresolved_15.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req26 = _rcUtilLibWarning.__cjsMetaURL;
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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        var _rcSelect = require("rc-select");

        var _conductUtil = require("rc-tree/lib/utils/conductUtil");

        var _useId = _interopRequireDefault(require("rc-select/lib/hooks/useId"));

        var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _OptionList = _interopRequireDefault(require("./OptionList"));

        var _TreeNode = _interopRequireDefault(require("./TreeNode"));

        var _strategyUtil = require("./utils/strategyUtil");

        var _TreeSelectContext = _interopRequireDefault(require("./TreeSelectContext"));

        var _LegacyContext = _interopRequireDefault(require("./LegacyContext"));

        var _useTreeData = _interopRequireDefault(require("./hooks/useTreeData"));

        var _valueUtil = require("./utils/valueUtil");

        var _useCache3 = _interopRequireDefault(require("./hooks/useCache"));

        var _useRefFunc = _interopRequireDefault(require("./hooks/useRefFunc"));

        var _useDataEntities2 = _interopRequireDefault(require("./hooks/useDataEntities"));

        var _legacyUtil = require("./utils/legacyUtil");

        var _useCheckedKeys3 = _interopRequireDefault(require("./hooks/useCheckedKeys"));

        var _useFilterTreeData = _interopRequireDefault(require("./hooks/useFilterTreeData"));

        var _warningPropsUtil = _interopRequireDefault(require("./utils/warningPropsUtil"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _excluded = ["id", "prefixCls", "value", "defaultValue", "onChange", "onSelect", "onDeselect", "searchValue", "inputValue", "onSearch", "autoClearSearchValue", "filterTreeNode", "treeNodeFilterProp", "showCheckedStrategy", "treeNodeLabelProp", "multiple", "treeCheckable", "treeCheckStrictly", "labelInValue", "fieldNames", "treeDataSimpleMode", "treeData", "children", "loadData", "treeLoadedKeys", "onTreeLoad", "treeDefaultExpandAll", "treeExpandedKeys", "treeDefaultExpandedKeys", "onTreeExpand", "treeExpandAction", "virtual", "listHeight", "listItemHeight", "onDropdownVisibleChange", "dropdownMatchSelectWidth", "treeLine", "treeIcon", "showTreeIcon", "switcherIcon", "treeMotion"];

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

        function isRawValue(value) {
          return !value || (0, _typeof2.default)(value) !== 'object';
        }

        var TreeSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var id = props.id,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-tree-select' : _props$prefixCls,
              value = props.value,
              defaultValue = props.defaultValue,
              onChange = props.onChange,
              onSelect = props.onSelect,
              onDeselect = props.onDeselect,
              searchValue = props.searchValue,
              inputValue = props.inputValue,
              onSearch = props.onSearch,
              _props$autoClearSearc = props.autoClearSearchValue,
              autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
              filterTreeNode = props.filterTreeNode,
              _props$treeNodeFilter = props.treeNodeFilterProp,
              treeNodeFilterProp = _props$treeNodeFilter === void 0 ? 'value' : _props$treeNodeFilter,
              _props$showCheckedStr = props.showCheckedStrategy,
              showCheckedStrategy = _props$showCheckedStr === void 0 ? _strategyUtil.SHOW_CHILD : _props$showCheckedStr,
              treeNodeLabelProp = props.treeNodeLabelProp,
              multiple = props.multiple,
              treeCheckable = props.treeCheckable,
              treeCheckStrictly = props.treeCheckStrictly,
              labelInValue = props.labelInValue,
              fieldNames = props.fieldNames,
              treeDataSimpleMode = props.treeDataSimpleMode,
              treeData = props.treeData,
              children = props.children,
              loadData = props.loadData,
              treeLoadedKeys = props.treeLoadedKeys,
              onTreeLoad = props.onTreeLoad,
              treeDefaultExpandAll = props.treeDefaultExpandAll,
              treeExpandedKeys = props.treeExpandedKeys,
              treeDefaultExpandedKeys = props.treeDefaultExpandedKeys,
              onTreeExpand = props.onTreeExpand,
              treeExpandAction = props.treeExpandAction,
              virtual = props.virtual,
              _props$listHeight = props.listHeight,
              listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
              _props$listItemHeight = props.listItemHeight,
              listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
              onDropdownVisibleChange = props.onDropdownVisibleChange,
              _props$dropdownMatchS = props.dropdownMatchSelectWidth,
              dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
              treeLine = props.treeLine,
              treeIcon = props.treeIcon,
              showTreeIcon = props.showTreeIcon,
              switcherIcon = props.switcherIcon,
              treeMotion = props.treeMotion,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var mergedId = (0, _useId.default)(id);
          var treeConduction = treeCheckable && !treeCheckStrictly;
          var mergedCheckable = treeCheckable || treeCheckStrictly;
          var mergedLabelInValue = treeCheckStrictly || labelInValue;
          var mergedMultiple = mergedCheckable || multiple;

          var _useMergedState = (0, _useMergedState5.default)(defaultValue, {
            value: value
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              internalValue = _useMergedState2[0],
              setInternalValue = _useMergedState2[1]; // ========================== Warning ===========================


          if (process.env.NODE_ENV !== 'production') {
            (0, _warningPropsUtil.default)(props);
          } // ========================= FieldNames =========================


          var mergedFieldNames = React.useMemo(function () {
            return (0, _valueUtil.fillFieldNames)(fieldNames);
          },
          /* eslint-disable react-hooks/exhaustive-deps */
          [JSON.stringify(fieldNames)]
          /* eslint-enable react-hooks/exhaustive-deps */
          ); // =========================== Search ===========================

          var _useMergedState3 = (0, _useMergedState5.default)('', {
            value: searchValue !== undefined ? searchValue : inputValue,
            postState: function postState(search) {
              return search || '';
            }
          }),
              _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
              mergedSearchValue = _useMergedState4[0],
              setSearchValue = _useMergedState4[1];

          var onInternalSearch = function onInternalSearch(searchText) {
            setSearchValue(searchText);
            onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
          }; // ============================ Data ============================
          // `useTreeData` only do convert of `children` or `simpleMode`.
          // Else will return origin `treeData` for perf consideration.
          // Do not do anything to loop the data.


          var mergedTreeData = (0, _useTreeData.default)(treeData, children, treeDataSimpleMode);

          var _useDataEntities = (0, _useDataEntities2.default)(mergedTreeData, mergedFieldNames),
              keyEntities = _useDataEntities.keyEntities,
              valueEntities = _useDataEntities.valueEntities;
          /** Get `missingRawValues` which not exist in the tree yet */


          var splitRawValues = React.useCallback(function (newRawValues) {
            var missingRawValues = [];
            var existRawValues = []; // Keep missing value in the cache

            newRawValues.forEach(function (val) {
              if (valueEntities.has(val)) {
                existRawValues.push(val);
              } else {
                missingRawValues.push(val);
              }
            });
            return {
              missingRawValues: missingRawValues,
              existRawValues: existRawValues
            };
          }, [valueEntities]); // Filtered Tree

          var filteredTreeData = (0, _useFilterTreeData.default)(mergedTreeData, mergedSearchValue, {
            fieldNames: mergedFieldNames,
            treeNodeFilterProp: treeNodeFilterProp,
            filterTreeNode: filterTreeNode
          }); // =========================== Label ============================

          var getLabel = React.useCallback(function (item) {
            if (item) {
              if (treeNodeLabelProp) {
                return item[treeNodeLabelProp];
              } // Loop from fieldNames


              var titleList = mergedFieldNames._title;

              for (var i = 0; i < titleList.length; i += 1) {
                var title = item[titleList[i]];

                if (title !== undefined) {
                  return title;
                }
              }
            }
          }, [mergedFieldNames, treeNodeLabelProp]); // ========================= Wrap Value =========================

          var toLabeledValues = React.useCallback(function (draftValues) {
            var values = (0, _valueUtil.toArray)(draftValues);
            return values.map(function (val) {
              if (isRawValue(val)) {
                return {
                  value: val
                };
              }

              return val;
            });
          }, []);
          var convert2LabelValues = React.useCallback(function (draftValues) {
            var values = toLabeledValues(draftValues);
            return values.map(function (item) {
              var rawLabel = item.label;
              var rawValue = item.value,
                  rawHalfChecked = item.halfChecked;
              var rawDisabled;
              var entity = valueEntities.get(rawValue); // Fill missing label & status

              if (entity) {
                var _rawLabel;

                rawLabel = (_rawLabel = rawLabel) !== null && _rawLabel !== void 0 ? _rawLabel : getLabel(entity.node);
                rawDisabled = entity.node.disabled;
              } else if (rawLabel === undefined) {
                // We try to find in current `labelInValue` value
                var labelInValueItem = toLabeledValues(internalValue).find(function (labeledItem) {
                  return labeledItem.value === rawValue;
                });
                rawLabel = labelInValueItem.label;
              }

              return {
                label: rawLabel,
                value: rawValue,
                halfChecked: rawHalfChecked,
                disabled: rawDisabled
              };
            });
          }, [valueEntities, getLabel, toLabeledValues, internalValue]); // =========================== Values ===========================

          var rawMixedLabeledValues = React.useMemo(function () {
            return toLabeledValues(internalValue);
          }, [toLabeledValues, internalValue]); // Split value into full check and half check

          var _React$useMemo = React.useMemo(function () {
            var fullCheckValues = [];
            var halfCheckValues = [];
            rawMixedLabeledValues.forEach(function (item) {
              if (item.halfChecked) {
                halfCheckValues.push(item);
              } else {
                fullCheckValues.push(item);
              }
            });
            return [fullCheckValues, halfCheckValues];
          }, [rawMixedLabeledValues]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
              rawLabeledValues = _React$useMemo2[0],
              rawHalfLabeledValues = _React$useMemo2[1]; // const [mergedValues] = useCache(rawLabeledValues);


          var rawValues = React.useMemo(function () {
            return rawLabeledValues.map(function (item) {
              return item.value;
            });
          }, [rawLabeledValues]); // Convert value to key. Will fill missed keys for conduct check.

          var _useCheckedKeys = (0, _useCheckedKeys3.default)(rawLabeledValues, rawHalfLabeledValues, treeConduction, keyEntities),
              _useCheckedKeys2 = (0, _slicedToArray2.default)(_useCheckedKeys, 2),
              rawCheckedValues = _useCheckedKeys2[0],
              rawHalfCheckedValues = _useCheckedKeys2[1]; // Convert rawCheckedKeys to check strategy related values


          var displayValues = React.useMemo(function () {
            // Collect keys which need to show
            var displayKeys = (0, _strategyUtil.formatStrategyValues)(rawCheckedValues, showCheckedStrategy, keyEntities, mergedFieldNames); // Convert to value and filled with label

            var values = displayKeys.map(function (key) {
              var _keyEntities$key$node, _keyEntities$key, _keyEntities$key$node2;

              return (_keyEntities$key$node = (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 ? void 0 : (_keyEntities$key$node2 = _keyEntities$key.node) === null || _keyEntities$key$node2 === void 0 ? void 0 : _keyEntities$key$node2[mergedFieldNames.value]) !== null && _keyEntities$key$node !== void 0 ? _keyEntities$key$node : key;
            }); // Back fill with origin label

            var labeledValues = values.map(function (val) {
              var targetItem = rawLabeledValues.find(function (item) {
                return item.value === val;
              });
              return {
                value: val,
                label: targetItem === null || targetItem === void 0 ? void 0 : targetItem.label
              };
            });
            var rawDisplayValues = convert2LabelValues(labeledValues);
            var firstVal = rawDisplayValues[0];

            if (!mergedMultiple && firstVal && (0, _valueUtil.isNil)(firstVal.value) && (0, _valueUtil.isNil)(firstVal.label)) {
              return [];
            }

            return rawDisplayValues.map(function (item) {
              var _item$label;

              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
              });
            });
          }, [mergedFieldNames, mergedMultiple, rawCheckedValues, rawLabeledValues, convert2LabelValues, showCheckedStrategy, keyEntities]);

          var _useCache = (0, _useCache3.default)(displayValues),
              _useCache2 = (0, _slicedToArray2.default)(_useCache, 1),
              cachedDisplayValues = _useCache2[0]; // =========================== Change ===========================


          var triggerChange = (0, _useRefFunc.default)(function (newRawValues, extra, source) {
            var labeledValues = convert2LabelValues(newRawValues);
            setInternalValue(labeledValues); // Clean up if needed

            if (autoClearSearchValue) {
              setSearchValue('');
            } // Generate rest parameters is costly, so only do it when necessary


            if (onChange) {
              var eventValues = newRawValues;

              if (treeConduction) {
                var formattedKeyList = (0, _strategyUtil.formatStrategyValues)(newRawValues, showCheckedStrategy, keyEntities, mergedFieldNames);
                eventValues = formattedKeyList.map(function (key) {
                  var entity = valueEntities.get(key);
                  return entity ? entity.node[mergedFieldNames.value] : key;
                });
              }

              var _ref = extra || {
                triggerValue: undefined,
                selected: undefined
              },
                  triggerValue = _ref.triggerValue,
                  selected = _ref.selected;

              var returnRawValues = eventValues; // We need fill half check back

              if (treeCheckStrictly) {
                var halfValues = rawHalfLabeledValues.filter(function (item) {
                  return !eventValues.includes(item.value);
                });
                returnRawValues = [].concat((0, _toConsumableArray2.default)(returnRawValues), (0, _toConsumableArray2.default)(halfValues));
              }

              var returnLabeledValues = convert2LabelValues(returnRawValues);
              var additionalInfo = {
                // [Legacy] Always return as array contains label & value
                preValue: rawLabeledValues,
                triggerValue: triggerValue
              }; // [Legacy] Fill legacy data if user query.
              // This is expansive that we only fill when user query
              // https://github.com/react-component/tree-select/blob/fe33eb7c27830c9ac70cd1fdb1ebbe7bc679c16a/src/Select.jsx

              var showPosition = true;

              if (treeCheckStrictly || source === 'selection' && !selected) {
                showPosition = false;
              }

              (0, _legacyUtil.fillAdditionalInfo)(additionalInfo, triggerValue, newRawValues, mergedTreeData, showPosition, mergedFieldNames);

              if (mergedCheckable) {
                additionalInfo.checked = selected;
              } else {
                additionalInfo.selected = selected;
              }

              var returnValues = mergedLabelInValue ? returnLabeledValues : returnLabeledValues.map(function (item) {
                return item.value;
              });
              onChange(mergedMultiple ? returnValues : returnValues[0], mergedLabelInValue ? null : returnLabeledValues.map(function (item) {
                return item.label;
              }), additionalInfo);
            }
          }); // ========================== Options ===========================

          /** Trigger by option list */

          var onOptionSelect = React.useCallback(function (selectedKey, _ref2) {
            var _node$mergedFieldName;

            var selected = _ref2.selected,
                source = _ref2.source;
            var entity = keyEntities[selectedKey];
            var node = entity === null || entity === void 0 ? void 0 : entity.node;
            var selectedValue = (_node$mergedFieldName = node === null || node === void 0 ? void 0 : node[mergedFieldNames.value]) !== null && _node$mergedFieldName !== void 0 ? _node$mergedFieldName : selectedKey; // Never be falsy but keep it safe

            if (!mergedMultiple) {
              // Single mode always set value
              triggerChange([selectedValue], {
                selected: true,
                triggerValue: selectedValue
              }, 'option');
            } else {
              var newRawValues = selected ? [].concat((0, _toConsumableArray2.default)(rawValues), [selectedValue]) : rawCheckedValues.filter(function (v) {
                return v !== selectedValue;
              }); // Add keys if tree conduction

              if (treeConduction) {
                // Should keep missing values
                var _splitRawValues = splitRawValues(newRawValues),
                    missingRawValues = _splitRawValues.missingRawValues,
                    existRawValues = _splitRawValues.existRawValues;

                var keyList = existRawValues.map(function (val) {
                  return valueEntities.get(val).key;
                }); // Conduction by selected or not

                var checkedKeys;

                if (selected) {
                  var _conductCheck = (0, _conductUtil.conductCheck)(keyList, true, keyEntities);

                  checkedKeys = _conductCheck.checkedKeys;
                } else {
                  var _conductCheck2 = (0, _conductUtil.conductCheck)(keyList, {
                    checked: false,
                    halfCheckedKeys: rawHalfCheckedValues
                  }, keyEntities);

                  checkedKeys = _conductCheck2.checkedKeys;
                } // Fill back of keys


                newRawValues = [].concat((0, _toConsumableArray2.default)(missingRawValues), (0, _toConsumableArray2.default)(checkedKeys.map(function (key) {
                  return keyEntities[key].node[mergedFieldNames.value];
                })));
              }

              triggerChange(newRawValues, {
                selected: selected,
                triggerValue: selectedValue
              }, source || 'option');
            } // Trigger select event


            if (selected || !mergedMultiple) {
              onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedValue, (0, _legacyUtil.fillLegacyProps)(node));
            } else {
              onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectedValue, (0, _legacyUtil.fillLegacyProps)(node));
            }
          }, [splitRawValues, valueEntities, keyEntities, mergedFieldNames, mergedMultiple, rawValues, triggerChange, treeConduction, onSelect, onDeselect, rawCheckedValues, rawHalfCheckedValues]); // ========================== Dropdown ==========================

          var onInternalDropdownVisibleChange = React.useCallback(function (open) {
            if (onDropdownVisibleChange) {
              var legacyParam = {};
              Object.defineProperty(legacyParam, 'documentClickClose', {
                get: function get() {
                  (0, _warning.default)(false, 'Second param of `onDropdownVisibleChange` has been removed.');
                  return false;
                }
              });
              onDropdownVisibleChange(open, legacyParam);
            }
          }, [onDropdownVisibleChange]); // ====================== Display Change ========================

          var onDisplayValuesChange = (0, _useRefFunc.default)(function (newValues, info) {
            var newRawValues = newValues.map(function (item) {
              return item.value;
            });

            if (info.type === 'clear') {
              triggerChange(newRawValues, {}, 'selection');
              return;
            } // TreeSelect only have multiple mode which means display change only has remove


            if (info.values.length) {
              onOptionSelect(info.values[0].value, {
                selected: false,
                source: 'selection'
              });
            }
          }); // ========================== Context ===========================

          var treeSelectContext = React.useMemo(function () {
            return {
              virtual: virtual,
              dropdownMatchSelectWidth: dropdownMatchSelectWidth,
              listHeight: listHeight,
              listItemHeight: listItemHeight,
              treeData: filteredTreeData,
              fieldNames: mergedFieldNames,
              onSelect: onOptionSelect,
              treeExpandAction: treeExpandAction
            };
          }, [virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, filteredTreeData, mergedFieldNames, onOptionSelect, treeExpandAction]); // ======================= Legacy Context =======================

          var legacyContext = React.useMemo(function () {
            return {
              checkable: mergedCheckable,
              loadData: loadData,
              treeLoadedKeys: treeLoadedKeys,
              onTreeLoad: onTreeLoad,
              checkedKeys: rawCheckedValues,
              halfCheckedKeys: rawHalfCheckedValues,
              treeDefaultExpandAll: treeDefaultExpandAll,
              treeExpandedKeys: treeExpandedKeys,
              treeDefaultExpandedKeys: treeDefaultExpandedKeys,
              onTreeExpand: onTreeExpand,
              treeIcon: treeIcon,
              treeMotion: treeMotion,
              showTreeIcon: showTreeIcon,
              switcherIcon: switcherIcon,
              treeLine: treeLine,
              treeNodeFilterProp: treeNodeFilterProp,
              keyEntities: keyEntities
            };
          }, [mergedCheckable, loadData, treeLoadedKeys, onTreeLoad, rawCheckedValues, rawHalfCheckedValues, treeDefaultExpandAll, treeExpandedKeys, treeDefaultExpandedKeys, onTreeExpand, treeIcon, treeMotion, showTreeIcon, switcherIcon, treeLine, treeNodeFilterProp, keyEntities]); // =========================== Render ===========================

          return /*#__PURE__*/React.createElement(_TreeSelectContext.default.Provider, {
            value: treeSelectContext
          }, /*#__PURE__*/React.createElement(_LegacyContext.default.Provider, {
            value: legacyContext
          }, /*#__PURE__*/React.createElement(_rcSelect.BaseSelect, (0, _extends2.default)({
            ref: ref
          }, restProps, {
            // >>> MISC
            id: mergedId,
            prefixCls: prefixCls,
            mode: mergedMultiple ? 'multiple' : undefined // >>> Display Value
            ,
            displayValues: cachedDisplayValues,
            onDisplayValuesChange: onDisplayValuesChange // >>> Search
            ,
            searchValue: mergedSearchValue,
            onSearch: onInternalSearch // >>> Options
            ,
            OptionList: _OptionList.default,
            emptyOptions: !mergedTreeData.length,
            onDropdownVisibleChange: onInternalDropdownVisibleChange,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth
          }))));
        }); // Assign name for Debug

        if (process.env.NODE_ENV !== 'production') {
          TreeSelect.displayName = 'TreeSelect';
        }

        var GenericTreeSelect = TreeSelect;
        GenericTreeSelect.TreeNode = _TreeNode.default;
        GenericTreeSelect.SHOW_ALL = _strategyUtil.SHOW_ALL;
        GenericTreeSelect.SHOW_PARENT = _strategyUtil.SHOW_PARENT;
        GenericTreeSelect.SHOW_CHILD = _strategyUtil.SHOW_CHILD;
        var _default = GenericTreeSelect;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/objectWithoutProperties': _req5,
        '@babel/runtime/helpers/typeof': _req6,
        'react': _req7,
        'rc-select': _req8,
        'rc-tree/lib/utils/conductUtil': _req9,
        'rc-select/lib/hooks/useId': _req10,
        'rc-util/lib/hooks/useMergedState': _req11,
        './OptionList': _req12,
        './TreeNode': _req13,
        './utils/strategyUtil': _req14,
        './TreeSelectContext': _req15,
        './LegacyContext': _req16,
        './hooks/useTreeData': _req17,
        './utils/valueUtil': _req18,
        './hooks/useCache': _req19,
        './hooks/useRefFunc': _req20,
        './hooks/useDataEntities': _req21,
        './utils/legacyUtil': _req22,
        './hooks/useCheckedKeys': _req23,
        './hooks/useFilterTreeData': _req24,
        './utils/warningPropsUtil': _req25,
        'rc-util/lib/warning': _req26
      }));
    }
  };
});
//# sourceMappingURL=7cb0595fcb2ab221d4e13b3ba02902de5eae613b.js.map