System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-select", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcSelect2) {
      _req7 = _rcSelect2.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req14 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcSelect = require("rc-select");

        var React = _interopRequireWildcard(require("react"));

        var _context = _interopRequireDefault(require("../context"));

        var _commonUtil = require("../utils/commonUtil");

        var _treeUtil = require("../utils/treeUtil");

        var _Column = _interopRequireWildcard(require("./Column"));

        var _useActive3 = _interopRequireDefault(require("./useActive"));

        var _useKeyboard = _interopRequireDefault(require("./useKeyboard"));

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
        /* eslint-disable default-case */


        var RefOptionList = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _optionColumns$, _optionColumns$$optio, _ref3, _classNames;

          var _useBaseProps = (0, _rcSelect.useBaseProps)(),
              prefixCls = _useBaseProps.prefixCls,
              multiple = _useBaseProps.multiple,
              searchValue = _useBaseProps.searchValue,
              toggleOpen = _useBaseProps.toggleOpen,
              notFoundContent = _useBaseProps.notFoundContent,
              direction = _useBaseProps.direction;

          var containerRef = React.useRef();
          var rtl = direction === 'rtl';

          var _React$useContext = React.useContext(_context.default),
              options = _React$useContext.options,
              values = _React$useContext.values,
              halfValues = _React$useContext.halfValues,
              fieldNames = _React$useContext.fieldNames,
              changeOnSelect = _React$useContext.changeOnSelect,
              onSelect = _React$useContext.onSelect,
              searchOptions = _React$useContext.searchOptions,
              dropdownPrefixCls = _React$useContext.dropdownPrefixCls,
              loadData = _React$useContext.loadData,
              expandTrigger = _React$useContext.expandTrigger;

          var mergedPrefixCls = dropdownPrefixCls || prefixCls; // ========================= loadData =========================

          var _React$useState = React.useState([]),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              loadingKeys = _React$useState2[0],
              setLoadingKeys = _React$useState2[1];

          var internalLoadData = function internalLoadData(valueCells) {
            // Do not load when search
            if (!loadData || searchValue) {
              return;
            }

            var optionList = (0, _treeUtil.toPathOptions)(valueCells, options, fieldNames);
            var rawOptions = optionList.map(function (_ref) {
              var option = _ref.option;
              return option;
            });
            var lastOption = rawOptions[rawOptions.length - 1];

            if (lastOption && !(0, _commonUtil.isLeaf)(lastOption, fieldNames)) {
              var pathKey = (0, _commonUtil.toPathKey)(valueCells);
              setLoadingKeys(function (keys) {
                return [].concat((0, _toConsumableArray2.default)(keys), [pathKey]);
              });
              loadData(rawOptions);
            }
          }; // zombieJ: This is bad. We should make this same as `rc-tree` to use Promise instead.


          React.useEffect(function () {
            if (loadingKeys.length) {
              loadingKeys.forEach(function (loadingKey) {
                var valueStrCells = (0, _commonUtil.toPathValueStr)(loadingKey);
                var optionList = (0, _treeUtil.toPathOptions)(valueStrCells, options, fieldNames, true).map(function (_ref2) {
                  var option = _ref2.option;
                  return option;
                });
                var lastOption = optionList[optionList.length - 1];

                if (!lastOption || lastOption[fieldNames.children] || (0, _commonUtil.isLeaf)(lastOption, fieldNames)) {
                  setLoadingKeys(function (keys) {
                    return keys.filter(function (key) {
                      return key !== loadingKey;
                    });
                  });
                }
              });
            }
          }, [options, loadingKeys, fieldNames]); // ========================== Values ==========================

          var checkedSet = React.useMemo(function () {
            return new Set((0, _commonUtil.toPathKeys)(values));
          }, [values]);
          var halfCheckedSet = React.useMemo(function () {
            return new Set((0, _commonUtil.toPathKeys)(halfValues));
          }, [halfValues]); // ====================== Accessibility =======================

          var _useActive = (0, _useActive3.default)(),
              _useActive2 = (0, _slicedToArray2.default)(_useActive, 2),
              activeValueCells = _useActive2[0],
              setActiveValueCells = _useActive2[1]; // =========================== Path ===========================


          var onPathOpen = function onPathOpen(nextValueCells) {
            setActiveValueCells(nextValueCells); // Trigger loadData

            internalLoadData(nextValueCells);
          };

          var isSelectable = function isSelectable(option) {
            var disabled = option.disabled;
            var isMergedLeaf = (0, _commonUtil.isLeaf)(option, fieldNames);
            return !disabled && (isMergedLeaf || changeOnSelect || multiple);
          };

          var onPathSelect = function onPathSelect(valuePath, leaf) {
            var fromKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            onSelect(valuePath);

            if (!multiple && (leaf || changeOnSelect && (expandTrigger === 'hover' || fromKeyboard))) {
              toggleOpen(false);
            }
          }; // ========================== Option ==========================


          var mergedOptions = React.useMemo(function () {
            if (searchValue) {
              return searchOptions;
            }

            return options;
          }, [searchValue, searchOptions, options]); // ========================== Column ==========================

          var optionColumns = React.useMemo(function () {
            var optionList = [{
              options: mergedOptions
            }];
            var currentList = mergedOptions;

            var _loop = function _loop(i) {
              var activeValueCell = activeValueCells[i];
              var currentOption = currentList.find(function (option) {
                return option[fieldNames.value] === activeValueCell;
              });
              var subOptions = currentOption === null || currentOption === void 0 ? void 0 : currentOption[fieldNames.children];

              if (!(subOptions === null || subOptions === void 0 ? void 0 : subOptions.length)) {
                return "break";
              }

              currentList = subOptions;
              optionList.push({
                options: subOptions
              });
            };

            for (var i = 0; i < activeValueCells.length; i += 1) {
              var _ret = _loop(i);

              if (_ret === "break") break;
            }

            return optionList;
          }, [mergedOptions, activeValueCells, fieldNames]); // ========================= Keyboard =========================

          var onKeyboardSelect = function onKeyboardSelect(selectValueCells, option) {
            if (isSelectable(option)) {
              onPathSelect(selectValueCells, (0, _commonUtil.isLeaf)(option, fieldNames), true);
            }
          };

          (0, _useKeyboard.default)(ref, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect); // >>>>> Active Scroll

          React.useEffect(function () {
            for (var i = 0; i < activeValueCells.length; i += 1) {
              var _containerRef$current;

              var cellPath = activeValueCells.slice(0, i + 1);
              var cellKeyPath = (0, _commonUtil.toPathKey)(cellPath);
              var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelector("li[data-path-key=\"".concat(cellKeyPath.replace(/\\{0,2}"/g, '\\"'), "\"]"));

              if (ele) {
                (0, _commonUtil.scrollIntoParentView)(ele);
              }
            }
          }, [activeValueCells]); // ========================== Render ==========================
          // >>>>> Empty

          var isEmpty = !((_optionColumns$ = optionColumns[0]) === null || _optionColumns$ === void 0 ? void 0 : (_optionColumns$$optio = _optionColumns$.options) === null || _optionColumns$$optio === void 0 ? void 0 : _optionColumns$$optio.length);
          var emptyList = [(_ref3 = {}, (0, _defineProperty2.default)(_ref3, fieldNames.value, '__EMPTY__'), (0, _defineProperty2.default)(_ref3, _Column.FIX_LABEL, notFoundContent), (0, _defineProperty2.default)(_ref3, "disabled", true), _ref3)];
          var columnProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            multiple: !isEmpty && multiple,
            onSelect: onPathSelect,
            onActive: onPathOpen,
            onToggleOpen: toggleOpen,
            checkedSet: checkedSet,
            halfCheckedSet: halfCheckedSet,
            loadingKeys: loadingKeys,
            isSelectable: isSelectable
          }); // >>>>> Columns

          var mergedOptionColumns = isEmpty ? [{
            options: emptyList
          }] : optionColumns;
          var columnNodes = mergedOptionColumns.map(function (col, index) {
            var prevValuePath = activeValueCells.slice(0, index);
            var activeValue = activeValueCells[index];
            return /*#__PURE__*/React.createElement(_Column.default, (0, _extends2.default)({
              key: index
            }, columnProps, {
              prefixCls: mergedPrefixCls,
              options: col.options,
              prevValuePath: prevValuePath,
              activeValue: activeValue
            }));
          }); // >>>>> Render

          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(mergedPrefixCls, "-menus"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(mergedPrefixCls, "-menu-empty"), isEmpty), (0, _defineProperty2.default)(_classNames, "".concat(mergedPrefixCls, "-rtl"), rtl), _classNames)),
            ref: containerRef
          }, columnNodes);
        });
        var _default = RefOptionList;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        'classnames': _req6,
        'rc-select': _req7,
        'react': _req8,
        '../context': _req9,
        '../utils/commonUtil': _req10,
        '../utils/treeUtil': _req11,
        './Column': _req12,
        './useActive': _req13,
        './useKeyboard': _req14
      }));
    }
  };
});
//# sourceMappingURL=d08c49f0d1f164878c9e3f47d68c03db930b8d13.js.map