System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "rc-util/lib/hooks/useMergedState", "rc-util/lib/warning", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req7 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req4 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req6 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req8 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req9 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req14 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req15 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req16 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req17 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req18 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req19 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req20 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req21 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req22 = _unresolved_13.__cjsMetaURL;
    }, function (_unresolved_14) {
      _req23 = _unresolved_14.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var React = _interopRequireWildcard(require("react"));

        var _BaseSelect = _interopRequireWildcard(require("./BaseSelect"));

        var _useCache3 = _interopRequireDefault(require("./hooks/useCache"));

        var _useFilterOptions = _interopRequireDefault(require("./hooks/useFilterOptions"));

        var _useId = _interopRequireDefault(require("./hooks/useId"));

        var _useOptions = _interopRequireDefault(require("./hooks/useOptions"));

        var _useRefFunc = _interopRequireDefault(require("./hooks/useRefFunc"));

        var _OptGroup = _interopRequireDefault(require("./OptGroup"));

        var _Option = _interopRequireDefault(require("./Option"));

        var _OptionList = _interopRequireDefault(require("./OptionList"));

        var _SelectContext = _interopRequireDefault(require("./SelectContext"));

        var _commonUtil = require("./utils/commonUtil");

        var _valueUtil = require("./utils/valueUtil");

        var _warningPropsUtil = _interopRequireWildcard(require("./utils/warningPropsUtil"));

        var _excluded = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];

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

        var OMIT_DOM_PROPS = ['inputValue'];

        function isRawValue(value) {
          return !value || (0, _typeof2.default)(value) !== 'object';
        }

        var Select = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var id = props.id,
              mode = props.mode,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
              backfill = props.backfill,
              fieldNames = props.fieldNames,
              inputValue = props.inputValue,
              searchValue = props.searchValue,
              onSearch = props.onSearch,
              _props$autoClearSearc = props.autoClearSearchValue,
              autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
              onSelect = props.onSelect,
              onDeselect = props.onDeselect,
              _props$dropdownMatchS = props.dropdownMatchSelectWidth,
              dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
              filterOption = props.filterOption,
              filterSort = props.filterSort,
              optionFilterProp = props.optionFilterProp,
              optionLabelProp = props.optionLabelProp,
              options = props.options,
              children = props.children,
              defaultActiveFirstOption = props.defaultActiveFirstOption,
              menuItemSelectedIcon = props.menuItemSelectedIcon,
              virtual = props.virtual,
              _props$listHeight = props.listHeight,
              listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
              _props$listItemHeight = props.listItemHeight,
              listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
              value = props.value,
              defaultValue = props.defaultValue,
              labelInValue = props.labelInValue,
              onChange = props.onChange,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var mergedId = (0, _useId.default)(id);
          var multiple = (0, _BaseSelect.isMultiple)(mode);
          var childrenAsData = !!(!options && children);
          var mergedFilterOption = React.useMemo(function () {
            if (filterOption === undefined && mode === 'combobox') {
              return false;
            }

            return filterOption;
          }, [filterOption, mode]); // ========================= FieldNames =========================

          var mergedFieldNames = React.useMemo(function () {
            return (0, _valueUtil.fillFieldNames)(fieldNames, childrenAsData);
          },
          /* eslint-disable react-hooks/exhaustive-deps */
          [// We stringify fieldNames to avoid unnecessary re-renders.
          JSON.stringify(fieldNames), childrenAsData]
          /* eslint-enable react-hooks/exhaustive-deps */
          ); // =========================== Search ===========================

          var _useMergedState = (0, _useMergedState5.default)('', {
            value: searchValue !== undefined ? searchValue : inputValue,
            postState: function postState(search) {
              return search || '';
            }
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              mergedSearchValue = _useMergedState2[0],
              setSearchValue = _useMergedState2[1]; // =========================== Option ===========================


          var parsedOptions = (0, _useOptions.default)(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
          var valueOptions = parsedOptions.valueOptions,
              labelOptions = parsedOptions.labelOptions,
              mergedOptions = parsedOptions.options; // ========================= Wrap Value =========================

          var convert2LabelValues = React.useCallback(function (draftValues) {
            // Convert to array
            var valueList = (0, _commonUtil.toArray)(draftValues); // Convert to labelInValue type

            return valueList.map(function (val) {
              var rawValue;
              var rawLabel;
              var rawKey;
              var rawDisabled;
              var rawTitle; // Fill label & value

              if (isRawValue(val)) {
                rawValue = val;
              } else {
                var _val$value;

                rawKey = val.key;
                rawLabel = val.label;
                rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
              }

              var option = valueOptions.get(rawValue);

              if (option) {
                var _option$key; // Fill missing props


                if (rawLabel === undefined) rawLabel = option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
                if (rawKey === undefined) rawKey = (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
                rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
                rawTitle = option === null || option === void 0 ? void 0 : option.title; // Warning if label not same as provided

                if (process.env.NODE_ENV !== 'production' && !optionLabelProp) {
                  var optionLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.label];

                  if (optionLabel !== undefined && optionLabel !== rawLabel) {
                    (0, _warning.default)(false, '`label` of `value` is not same as `label` in Select options.');
                  }
                }
              }

              return {
                label: rawLabel,
                value: rawValue,
                key: rawKey,
                disabled: rawDisabled,
                title: rawTitle
              };
            });
          }, [mergedFieldNames, optionLabelProp, valueOptions]); // =========================== Values ===========================

          var _useMergedState3 = (0, _useMergedState5.default)(defaultValue, {
            value: value
          }),
              _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
              internalValue = _useMergedState4[0],
              setInternalValue = _useMergedState4[1]; // Merged value with LabelValueType


          var rawLabeledValues = React.useMemo(function () {
            var _values$;

            var values = convert2LabelValues(internalValue); // combobox no need save value when it's no value

            if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
              return [];
            }

            return values;
          }, [internalValue, convert2LabelValues, mode]); // Fill label with cache to avoid option remove

          var _useCache = (0, _useCache3.default)(rawLabeledValues, valueOptions),
              _useCache2 = (0, _slicedToArray2.default)(_useCache, 2),
              mergedValues = _useCache2[0],
              getMixedOption = _useCache2[1];

          var displayValues = React.useMemo(function () {
            // `null` need show as placeholder instead
            // https://github.com/ant-design/ant-design/issues/25057
            if (!mode && mergedValues.length === 1) {
              var firstValue = mergedValues[0];

              if (firstValue.value === null && (firstValue.label === null || firstValue.label === undefined)) {
                return [];
              }
            }

            return mergedValues.map(function (item) {
              var _item$label;

              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
              });
            });
          }, [mode, mergedValues]);
          /** Convert `displayValues` to raw value type set */

          var rawValues = React.useMemo(function () {
            return new Set(mergedValues.map(function (val) {
              return val.value;
            }));
          }, [mergedValues]);
          React.useEffect(function () {
            if (mode === 'combobox') {
              var _mergedValues$;

              var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
              setSearchValue((0, _commonUtil.hasValue)(strValue) ? String(strValue) : '');
            }
          }, [mergedValues]); // ======================= Display Option =======================
          // Create a placeholder item if not exist in `options`

          var createTagOption = (0, _useRefFunc.default)(function (val, label) {
            var _ref;

            var mergedLabel = label !== null && label !== void 0 ? label : val;
            return _ref = {}, (0, _defineProperty2.default)(_ref, mergedFieldNames.value, val), (0, _defineProperty2.default)(_ref, mergedFieldNames.label, mergedLabel), _ref;
          }); // Fill tag as option if mode is `tags`

          var filledTagOptions = React.useMemo(function () {
            if (mode !== 'tags') {
              return mergedOptions;
            } // >>> Tag mode


            var cloneOptions = (0, _toConsumableArray2.default)(mergedOptions); // Check if value exist in options (include new patch item)

            var existOptions = function existOptions(val) {
              return valueOptions.has(val);
            }; // Fill current value as option


            (0, _toConsumableArray2.default)(mergedValues).sort(function (a, b) {
              return a.value < b.value ? -1 : 1;
            }).forEach(function (item) {
              var val = item.value;

              if (!existOptions(val)) {
                cloneOptions.push(createTagOption(val, item.label));
              }
            });
            return cloneOptions;
          }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
          var filteredOptions = (0, _useFilterOptions.default)(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp); // Fill options with search value if needed

          var filledSearchOptions = React.useMemo(function () {
            if (mode !== 'tags' || !mergedSearchValue || filteredOptions.some(function (item) {
              return item[optionFilterProp || 'value'] === mergedSearchValue;
            })) {
              return filteredOptions;
            } // Fill search value as option


            return [createTagOption(mergedSearchValue)].concat((0, _toConsumableArray2.default)(filteredOptions));
          }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]);
          var orderedFilteredOptions = React.useMemo(function () {
            if (!filterSort) {
              return filledSearchOptions;
            }

            return (0, _toConsumableArray2.default)(filledSearchOptions).sort(function (a, b) {
              return filterSort(a, b);
            });
          }, [filledSearchOptions, filterSort]);
          var displayOptions = React.useMemo(function () {
            return (0, _valueUtil.flattenOptions)(orderedFilteredOptions, {
              fieldNames: mergedFieldNames,
              childrenAsData: childrenAsData
            });
          }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]); // =========================== Change ===========================

          var triggerChange = function triggerChange(values) {
            var labeledValues = convert2LabelValues(values);
            setInternalValue(labeledValues);

            if (onChange && ( // Trigger event only when value changed
            labeledValues.length !== mergedValues.length || labeledValues.some(function (newVal, index) {
              var _mergedValues$index;

              return ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
            }))) {
              var returnValues = labelInValue ? labeledValues : labeledValues.map(function (v) {
                return v.value;
              });
              var returnOptions = labeledValues.map(function (v) {
                return (0, _valueUtil.injectPropsWithOption)(getMixedOption(v.value));
              });
              onChange( // Value
              multiple ? returnValues : returnValues[0], // Option
              multiple ? returnOptions : returnOptions[0]);
            }
          }; // ======================= Accessibility ========================


          var _React$useState = React.useState(null),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              activeValue = _React$useState2[0],
              setActiveValue = _React$useState2[1];

          var _React$useState3 = React.useState(0),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              accessibilityIndex = _React$useState4[0],
              setAccessibilityIndex = _React$useState4[1];

          var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';
          var onActiveValue = React.useCallback(function (active, index) {
            var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                _ref2$source = _ref2.source,
                source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;

            setAccessibilityIndex(index);

            if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
              setActiveValue(String(active));
            }
          }, [backfill, mode]); // ========================= OptionList =========================

          var triggerSelect = function triggerSelect(val, selected, type) {
            var getSelectEnt = function getSelectEnt() {
              var _option$key2;

              var option = getMixedOption(val);
              return [labelInValue ? {
                label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
                value: val,
                key: (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
              } : val, (0, _valueUtil.injectPropsWithOption)(option)];
            };

            if (selected && onSelect) {
              var _getSelectEnt = getSelectEnt(),
                  _getSelectEnt2 = (0, _slicedToArray2.default)(_getSelectEnt, 2),
                  wrappedValue = _getSelectEnt2[0],
                  _option = _getSelectEnt2[1];

              onSelect(wrappedValue, _option);
            } else if (!selected && onDeselect && type !== 'clear') {
              var _getSelectEnt3 = getSelectEnt(),
                  _getSelectEnt4 = (0, _slicedToArray2.default)(_getSelectEnt3, 2),
                  _wrappedValue = _getSelectEnt4[0],
                  _option2 = _getSelectEnt4[1];

              onDeselect(_wrappedValue, _option2);
            }
          }; // Used for OptionList selection


          var onInternalSelect = (0, _useRefFunc.default)(function (val, info) {
            var cloneValues; // Single mode always trigger select only with option list

            var mergedSelect = multiple ? info.selected : true;

            if (mergedSelect) {
              cloneValues = multiple ? [].concat((0, _toConsumableArray2.default)(mergedValues), [val]) : [val];
            } else {
              cloneValues = mergedValues.filter(function (v) {
                return v.value !== val;
              });
            }

            triggerChange(cloneValues);
            triggerSelect(val, mergedSelect); // Clean search value if single or configured

            if (mode === 'combobox') {
              // setSearchValue(String(val));
              setActiveValue('');
            } else if (!_BaseSelect.isMultiple || autoClearSearchValue) {
              setSearchValue('');
              setActiveValue('');
            }
          }); // ======================= Display Change =======================
          // BaseSelect display values change

          var onDisplayValuesChange = function onDisplayValuesChange(nextValues, info) {
            triggerChange(nextValues);
            var type = info.type,
                values = info.values;

            if (type === 'remove' || type === 'clear') {
              values.forEach(function (item) {
                triggerSelect(item.value, false, type);
              });
            }
          }; // =========================== Search ===========================


          var onInternalSearch = function onInternalSearch(searchText, info) {
            setSearchValue(searchText);
            setActiveValue(null); // [Submit] Tag mode should flush input

            if (info.source === 'submit') {
              var formatted = (searchText || '').trim(); // prevent empty tags from appearing when you click the Enter button

              if (formatted) {
                var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(rawValues), [formatted])));
                triggerChange(newRawValues);
                triggerSelect(formatted, true);
                setSearchValue('');
              }

              return;
            }

            if (info.source !== 'blur') {
              if (mode === 'combobox') {
                triggerChange(searchText);
              }

              onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
            }
          };

          var onInternalSearchSplit = function onInternalSearchSplit(words) {
            var patchValues = words;

            if (mode !== 'tags') {
              patchValues = words.map(function (word) {
                var opt = labelOptions.get(word);
                return opt === null || opt === void 0 ? void 0 : opt.value;
              }).filter(function (val) {
                return val !== undefined;
              });
            }

            var newRawValues = Array.from(new Set([].concat((0, _toConsumableArray2.default)(rawValues), (0, _toConsumableArray2.default)(patchValues))));
            triggerChange(newRawValues);
            newRawValues.forEach(function (newRawValue) {
              triggerSelect(newRawValue, true);
            });
          }; // ========================== Context ===========================


          var selectContext = React.useMemo(function () {
            var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, parsedOptions), {}, {
              flattenOptions: displayOptions,
              onActiveValue: onActiveValue,
              defaultActiveFirstOption: mergedDefaultActiveFirstOption,
              onSelect: onInternalSelect,
              menuItemSelectedIcon: menuItemSelectedIcon,
              rawValues: rawValues,
              fieldNames: mergedFieldNames,
              virtual: realVirtual,
              listHeight: listHeight,
              listItemHeight: listItemHeight,
              childrenAsData: childrenAsData
            });
          }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData]); // ========================== Warning ===========================

          if (process.env.NODE_ENV !== 'production') {
            (0, _warningPropsUtil.default)(props);
            (0, _warningPropsUtil.warningNullOptions)(mergedOptions, mergedFieldNames);
          } // ==============================================================
          // ==                          Render                          ==
          // ==============================================================


          return /*#__PURE__*/React.createElement(_SelectContext.default.Provider, {
            value: selectContext
          }, /*#__PURE__*/React.createElement(_BaseSelect.default, (0, _extends2.default)({}, restProps, {
            // >>> MISC
            id: mergedId,
            prefixCls: prefixCls,
            ref: ref,
            omitDomProps: OMIT_DOM_PROPS,
            mode: mode // >>> Values
            ,
            displayValues: displayValues,
            onDisplayValuesChange: onDisplayValuesChange // >>> Search
            ,
            searchValue: mergedSearchValue,
            onSearch: onInternalSearch,
            autoClearSearchValue: autoClearSearchValue,
            onSearchSplit: onInternalSearchSplit,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth // >>> OptionList
            ,
            OptionList: _OptionList.default,
            emptyOptions: !displayOptions.length // >>> Accessibility
            ,
            activeValue: activeValue,
            activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
          })));
        });

        if (process.env.NODE_ENV !== 'production') {
          Select.displayName = 'Select';
        }

        var TypedSelect = Select;
        TypedSelect.Option = _Option.default;
        TypedSelect.OptGroup = _OptGroup.default;
        var _default = TypedSelect;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/objectSpread2': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/objectWithoutProperties': _req6,
        '@babel/runtime/helpers/typeof': _req7,
        'rc-util/lib/hooks/useMergedState': _req8,
        'rc-util/lib/warning': _req9,
        'react': _req10,
        './BaseSelect': _req11,
        './hooks/useCache': _req12,
        './hooks/useFilterOptions': _req13,
        './hooks/useId': _req14,
        './hooks/useOptions': _req15,
        './hooks/useRefFunc': _req16,
        './OptGroup': _req17,
        './Option': _req18,
        './OptionList': _req19,
        './SelectContext': _req20,
        './utils/commonUtil': _req21,
        './utils/valueUtil': _req22,
        './utils/warningPropsUtil': _req23
      }));
    }
  };
});
//# sourceMappingURL=9a11b556e3209a83eaff3129cc1f8f9a00595ba6.js.map