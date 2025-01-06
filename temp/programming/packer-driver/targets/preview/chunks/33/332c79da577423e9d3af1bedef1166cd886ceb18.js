System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _FIX_LABEL, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
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
        exports.FIX_LABEL = void 0;
        exports.default = Column;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _commonUtil = require("../utils/commonUtil");

        var _context = _interopRequireDefault(require("../context"));

        var _Checkbox = _interopRequireDefault(require("./Checkbox"));

        var _useSearchOptions = require("../hooks/useSearchOptions");

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

        var FIX_LABEL = '__cascader_fix_label__';
        exports.FIX_LABEL = FIX_LABEL;

        function Column(_ref) {
          var prefixCls = _ref.prefixCls,
              multiple = _ref.multiple,
              options = _ref.options,
              activeValue = _ref.activeValue,
              prevValuePath = _ref.prevValuePath,
              onToggleOpen = _ref.onToggleOpen,
              onSelect = _ref.onSelect,
              onActive = _ref.onActive,
              checkedSet = _ref.checkedSet,
              halfCheckedSet = _ref.halfCheckedSet,
              loadingKeys = _ref.loadingKeys,
              isSelectable = _ref.isSelectable;
          var menuPrefixCls = "".concat(prefixCls, "-menu");
          var menuItemPrefixCls = "".concat(prefixCls, "-menu-item");

          var _React$useContext = React.useContext(_context.default),
              fieldNames = _React$useContext.fieldNames,
              changeOnSelect = _React$useContext.changeOnSelect,
              expandTrigger = _React$useContext.expandTrigger,
              expandIcon = _React$useContext.expandIcon,
              loadingIcon = _React$useContext.loadingIcon,
              dropdownMenuColumnStyle = _React$useContext.dropdownMenuColumnStyle;

          var hoverOpen = expandTrigger === 'hover'; // ============================ Option ============================

          var optionInfoList = React.useMemo(function () {
            return options.map(function (option) {
              var _option$FIX_LABEL;

              var disabled = option.disabled;
              var searchOptions = option[_useSearchOptions.SEARCH_MARK];
              var label = (_option$FIX_LABEL = option[FIX_LABEL]) !== null && _option$FIX_LABEL !== void 0 ? _option$FIX_LABEL : option[fieldNames.label];
              var value = option[fieldNames.value];
              var isMergedLeaf = (0, _commonUtil.isLeaf)(option, fieldNames); // Get real value of option. Search option is different way.

              var fullPath = searchOptions ? searchOptions.map(function (opt) {
                return opt[fieldNames.value];
              }) : [].concat((0, _toConsumableArray2.default)(prevValuePath), [value]);
              var fullPathKey = (0, _commonUtil.toPathKey)(fullPath);
              var isLoading = loadingKeys.includes(fullPathKey); // >>>>> checked

              var checked = checkedSet.has(fullPathKey); // >>>>> halfChecked

              var halfChecked = halfCheckedSet.has(fullPathKey);
              return {
                disabled: disabled,
                label: label,
                value: value,
                isLeaf: isMergedLeaf,
                isLoading: isLoading,
                checked: checked,
                halfChecked: halfChecked,
                option: option,
                fullPath: fullPath,
                fullPathKey: fullPathKey
              };
            });
          }, [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath]); // ============================ Render ============================

          return /*#__PURE__*/React.createElement("ul", {
            className: menuPrefixCls,
            role: "menu"
          }, optionInfoList.map(function (_ref2) {
            var _classNames;

            var disabled = _ref2.disabled,
                label = _ref2.label,
                value = _ref2.value,
                isMergedLeaf = _ref2.isLeaf,
                isLoading = _ref2.isLoading,
                checked = _ref2.checked,
                halfChecked = _ref2.halfChecked,
                option = _ref2.option,
                fullPath = _ref2.fullPath,
                fullPathKey = _ref2.fullPathKey; // >>>>> Open

            var triggerOpenPath = function triggerOpenPath() {
              if (!disabled && (!hoverOpen || !isMergedLeaf)) {
                onActive(fullPath);
              }
            }; // >>>>> Selection


            var triggerSelect = function triggerSelect() {
              if (isSelectable(option)) {
                onSelect(fullPath, isMergedLeaf);
              }
            }; // >>>>> Title


            var title;

            if (typeof option.title === 'string') {
              title = option.title;
            } else if (typeof label === 'string') {
              title = label;
            } // >>>>> Render


            return /*#__PURE__*/React.createElement("li", {
              key: fullPathKey,
              className: (0, _classnames.default)(menuItemPrefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(menuItemPrefixCls, "-expand"), !isMergedLeaf), (0, _defineProperty2.default)(_classNames, "".concat(menuItemPrefixCls, "-active"), activeValue === value), (0, _defineProperty2.default)(_classNames, "".concat(menuItemPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(menuItemPrefixCls, "-loading"), isLoading), _classNames)),
              style: dropdownMenuColumnStyle,
              role: "menuitemcheckbox",
              title: title,
              "aria-checked": checked,
              "data-path-key": fullPathKey,
              onClick: function onClick() {
                triggerOpenPath();

                if (!multiple || isMergedLeaf) {
                  triggerSelect();
                }
              },
              onDoubleClick: function onDoubleClick() {
                if (changeOnSelect) {
                  onToggleOpen(false);
                }
              },
              onMouseEnter: function onMouseEnter() {
                if (hoverOpen) {
                  triggerOpenPath();
                }
              },
              onMouseDown: function onMouseDown(e) {
                // Prevent selector from blurring
                e.preventDefault();
              }
            }, multiple && /*#__PURE__*/React.createElement(_Checkbox.default, {
              prefixCls: "".concat(prefixCls, "-checkbox"),
              checked: checked,
              halfChecked: halfChecked,
              disabled: disabled,
              onClick: function onClick(e) {
                e.stopPropagation();
                triggerSelect();
              }
            }), /*#__PURE__*/React.createElement("div", {
              className: "".concat(menuItemPrefixCls, "-content")
            }, label), !isLoading && expandIcon && !isMergedLeaf && /*#__PURE__*/React.createElement("div", {
              className: "".concat(menuItemPrefixCls, "-expand-icon")
            }, expandIcon), isLoading && loadingIcon && /*#__PURE__*/React.createElement("div", {
              className: "".concat(menuItemPrefixCls, "-loading-icon")
            }, loadingIcon));
          }));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _FIX_LABEL = module.exports.FIX_LABEL;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        'react': _req3,
        'classnames': _req4,
        '../utils/commonUtil': _req5,
        '../context': _req6,
        './Checkbox': _req7,
        '../hooks/useSearchOptions': _req8
      }));
    }
  };
});
//# sourceMappingURL=332c79da577423e9d3af1bedef1166cd886ceb18.js.map