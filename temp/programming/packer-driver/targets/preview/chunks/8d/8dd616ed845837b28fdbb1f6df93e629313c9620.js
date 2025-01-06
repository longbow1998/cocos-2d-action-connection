System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@ant-design/icons/DownOutlined", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req3 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req4 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req5 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req6 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_antDesignIconsDownOutlined) {
      _req7 = _antDesignIconsDownOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req9 = _rcUtilLibOmit.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _checkbox = _interopRequireDefault(require("../checkbox"));

        var _dropdown = _interopRequireDefault(require("../dropdown"));

        var _reactNode = require("../_util/reactNode");

        var _ListBody = _interopRequireWildcard(require("./ListBody"));

        var _search = _interopRequireDefault(require("./search"));

        var defaultRender = function defaultRender() {
          return null;
        };

        function isRenderResultPlainObject(result) {
          return !!(result && !(0, _reactNode.isValidElement)(result) && Object.prototype.toString.call(result) === '[object Object]');
        }

        function getEnabledItemKeys(items) {
          return items.filter(function (data) {
            return !data.disabled;
          }).map(function (data) {
            return data.key;
          });
        }

        var TransferList = /*#__PURE__*/function (_React$PureComponent) {
          (0, _inherits2["default"])(TransferList, _React$PureComponent);

          var _super = (0, _createSuper2["default"])(TransferList);

          function TransferList(props) {
            var _this;

            (0, _classCallCheck2["default"])(this, TransferList);
            _this = _super.call(this, props);
            _this.defaultListBodyRef = /*#__PURE__*/React.createRef(); // =============================== Filter ===============================

            _this.handleFilter = function (e) {
              var handleFilter = _this.props.handleFilter;
              var filterValue = e.target.value;

              _this.setState({
                filterValue: filterValue
              });

              handleFilter(e);
            };

            _this.handleClear = function () {
              var handleClear = _this.props.handleClear;

              _this.setState({
                filterValue: ''
              });

              handleClear();
            };

            _this.matchFilter = function (text, item) {
              var filterValue = _this.state.filterValue;
              var filterOption = _this.props.filterOption;

              if (filterOption) {
                return filterOption(filterValue, item);
              }

              return text.includes(filterValue);
            }; // =============================== Render ===============================


            _this.renderListBody = function (renderList, props) {
              var bodyContent = renderList ? renderList(props) : null;
              var customize = !!bodyContent;

              if (!customize) {
                bodyContent = /*#__PURE__*/React.createElement(_ListBody["default"], (0, _extends2["default"])({
                  ref: _this.defaultListBodyRef
                }, props));
              }

              return {
                customize: customize,
                bodyContent: bodyContent
              };
            };

            _this.renderItem = function (item) {
              var _this$props$render = _this.props.render,
                  render = _this$props$render === void 0 ? defaultRender : _this$props$render;
              var renderResult = render(item);
              var isRenderResultPlain = isRenderResultPlainObject(renderResult);
              return {
                renderedText: isRenderResultPlain ? renderResult.value : renderResult,
                renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
                item: item
              };
            };

            _this.getSelectAllLabel = function (selectedCount, totalCount) {
              var _this$props = _this.props,
                  itemsUnit = _this$props.itemsUnit,
                  itemUnit = _this$props.itemUnit,
                  selectAllLabel = _this$props.selectAllLabel;

              if (selectAllLabel) {
                return typeof selectAllLabel === 'function' ? selectAllLabel({
                  selectedCount: selectedCount,
                  totalCount: totalCount
                }) : selectAllLabel;
              }

              var unit = totalCount > 1 ? itemsUnit : itemUnit;
              return /*#__PURE__*/React.createElement(React.Fragment, null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
            };

            _this.state = {
              filterValue: ''
            };
            return _this;
          }

          (0, _createClass2["default"])(TransferList, [{
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              clearTimeout(this.triggerScrollTimer);
            }
          }, {
            key: "getCheckStatus",
            value: function getCheckStatus(filteredItems) {
              var checkedKeys = this.props.checkedKeys;

              if (checkedKeys.length === 0) {
                return 'none';
              }

              if (filteredItems.every(function (item) {
                return checkedKeys.includes(item.key) || !!item.disabled;
              })) {
                return 'all';
              }

              return 'part';
            } // ================================ Item ================================

          }, {
            key: "getFilteredItems",
            value: function getFilteredItems(dataSource, filterValue) {
              var _this2 = this;

              var filteredItems = [];
              var filteredRenderItems = [];
              dataSource.forEach(function (item) {
                var renderedItem = _this2.renderItem(item);

                var renderedText = renderedItem.renderedText; // Filter skip

                if (filterValue && !_this2.matchFilter(renderedText, item)) {
                  return null;
                }

                filteredItems.push(item);
                filteredRenderItems.push(renderedItem);
              });
              return {
                filteredItems: filteredItems,
                filteredRenderItems: filteredRenderItems
              };
            }
          }, {
            key: "getListBody",
            value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
              var _this3 = this;

              var search = showSearch ? /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-body-search-wrapper")
              }, /*#__PURE__*/React.createElement(_search["default"], {
                prefixCls: "".concat(prefixCls, "-search"),
                onChange: this.handleFilter,
                handleClear: this.handleClear,
                placeholder: searchPlaceholder,
                value: filterValue,
                disabled: disabled
              })) : null;

              var _this$renderListBody = this.renderListBody(renderList, (0, _extends2["default"])((0, _extends2["default"])({}, (0, _omit["default"])(this.props, _ListBody.OmitProps)), {
                filteredItems: filteredItems,
                filteredRenderItems: filteredRenderItems,
                selectedKeys: checkedKeys
              })),
                  bodyContent = _this$renderListBody.bodyContent,
                  customize = _this$renderListBody.customize;

              var getNotFoundContent = function getNotFoundContent() {
                var contentIndex = _this3.props.direction === 'left' ? 0 : 1;
                return Array.isArray(notFoundContent) ? notFoundContent[contentIndex] : notFoundContent;
              };

              var bodyNode; // We should wrap customize list body in a classNamed div to use flex layout.

              if (customize) {
                bodyNode = /*#__PURE__*/React.createElement("div", {
                  className: "".concat(prefixCls, "-body-customize-wrapper")
                }, bodyContent);
              } else {
                bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/React.createElement("div", {
                  className: "".concat(prefixCls, "-body-not-found")
                }, getNotFoundContent());
              }

              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames["default"])(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
              }, search, bodyNode);
            }
          }, {
            key: "getCheckBox",
            value: function getCheckBox(_ref) {
              var filteredItems = _ref.filteredItems,
                  onItemSelectAll = _ref.onItemSelectAll,
                  disabled = _ref.disabled,
                  prefixCls = _ref.prefixCls;
              var checkStatus = this.getCheckStatus(filteredItems);
              var checkedAll = checkStatus === 'all';
              var checkAllCheckbox = /*#__PURE__*/React.createElement(_checkbox["default"], {
                disabled: disabled,
                checked: checkedAll,
                indeterminate: checkStatus === 'part',
                className: "".concat(prefixCls, "-checkbox"),
                onChange: function onChange() {
                  // Only select enabled items
                  onItemSelectAll(filteredItems.filter(function (item) {
                    return !item.disabled;
                  }).map(function (_ref2) {
                    var key = _ref2.key;
                    return key;
                  }), !checkedAll);
                }
              });
              return checkAllCheckbox;
            }
          }, {
            key: "render",
            value: function render() {
              var _classNames,
                  _this4 = this;

              var filterValue = this.state.filterValue;
              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  _this$props2$dataSour = _this$props2.dataSource,
                  dataSource = _this$props2$dataSour === void 0 ? [] : _this$props2$dataSour,
                  _this$props2$titleTex = _this$props2.titleText,
                  titleText = _this$props2$titleTex === void 0 ? '' : _this$props2$titleTex,
                  checkedKeys = _this$props2.checkedKeys,
                  disabled = _this$props2.disabled,
                  footer = _this$props2.footer,
                  _this$props2$showSear = _this$props2.showSearch,
                  showSearch = _this$props2$showSear === void 0 ? false : _this$props2$showSear,
                  style = _this$props2.style,
                  searchPlaceholder = _this$props2.searchPlaceholder,
                  notFoundContent = _this$props2.notFoundContent,
                  selectAll = _this$props2.selectAll,
                  selectCurrent = _this$props2.selectCurrent,
                  selectInvert = _this$props2.selectInvert,
                  removeAll = _this$props2.removeAll,
                  removeCurrent = _this$props2.removeCurrent,
                  renderList = _this$props2.renderList,
                  onItemSelectAll = _this$props2.onItemSelectAll,
                  onItemRemove = _this$props2.onItemRemove,
                  _this$props2$showSele = _this$props2.showSelectAll,
                  showSelectAll = _this$props2$showSele === void 0 ? true : _this$props2$showSele,
                  showRemove = _this$props2.showRemove,
                  pagination = _this$props2.pagination,
                  direction = _this$props2.direction; // Custom Layout

              var footerDom = footer && (footer.length < 2 ? footer(this.props) : footer(this.props, {
                direction: direction
              }));
              var listCls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames)); // ====================== Get filtered, checked item list ======================

              var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
                  filteredItems = _this$getFilteredItem.filteredItems,
                  filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


              var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled); // ================================ List Footer ================================

              var listFooter = footerDom ? /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-footer")
              }, footerDom) : null;
              var checkAllCheckbox = !showRemove && !pagination && this.getCheckBox({
                filteredItems: filteredItems,
                onItemSelectAll: onItemSelectAll,
                disabled: disabled,
                prefixCls: prefixCls
              });
              var items;

              if (showRemove) {
                items = [
                /* Remove Current Page */
                pagination ? {
                  key: 'removeCurrent',
                  onClick: function onClick() {
                    var _a;

                    var pageKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                      return entity.item;
                    }));
                    onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
                  },
                  label: removeCurrent
                } : null,
                /* Remove All */
                {
                  key: 'removeAll',
                  onClick: function onClick() {
                    onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
                  },
                  label: removeAll
                }].filter(function (item) {
                  return item;
                });
              } else {
                items = [{
                  key: 'selectAll',
                  onClick: function onClick() {
                    var keys = getEnabledItemKeys(filteredItems);
                    onItemSelectAll(keys, keys.length !== checkedKeys.length);
                  },
                  label: selectAll
                }, pagination ? {
                  key: 'selectCurrent',
                  onClick: function onClick() {
                    var _a;

                    var pageItems = ((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
                    onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
                      return entity.item;
                    })), true);
                  },
                  label: selectCurrent
                } : null, {
                  key: 'selectInvert',
                  onClick: function onClick() {
                    var _a;

                    var availableKeys;

                    if (pagination) {
                      availableKeys = getEnabledItemKeys((((_a = _this4.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                        return entity.item;
                      }));
                    } else {
                      availableKeys = getEnabledItemKeys(filteredItems);
                    }

                    var checkedKeySet = new Set(checkedKeys);
                    var newCheckedKeys = [];
                    var newUnCheckedKeys = [];
                    availableKeys.forEach(function (key) {
                      if (checkedKeySet.has(key)) {
                        newUnCheckedKeys.push(key);
                      } else {
                        newCheckedKeys.push(key);
                      }
                    });
                    onItemSelectAll(newCheckedKeys, true);
                    onItemSelectAll(newUnCheckedKeys, false);
                  },
                  label: selectInvert
                }];
              }

              var dropdown = /*#__PURE__*/React.createElement(_dropdown["default"], {
                className: "".concat(prefixCls, "-header-dropdown"),
                menu: {
                  items: items
                },
                disabled: disabled
              }, /*#__PURE__*/React.createElement(_DownOutlined["default"], null)); // ================================== Render ===================================

              return /*#__PURE__*/React.createElement("div", {
                className: listCls,
                style: style
              }, /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-header")
              }, showSelectAll ? /*#__PURE__*/React.createElement(React.Fragment, null, checkAllCheckbox, dropdown) : null, /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-header-selected")
              }, this.getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-header-title")
              }, titleText)), listBody, listFooter);
            }
          }]);
          return TransferList;
        }(React.PureComponent);

        exports["default"] = TransferList; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/classCallCheck': _req3,
        '@babel/runtime/helpers/createClass': _req4,
        '@babel/runtime/helpers/inherits': _req5,
        '@babel/runtime/helpers/createSuper': _req6,
        '@ant-design/icons/DownOutlined': _req7,
        'classnames': _req8,
        'rc-util/lib/omit': _req9,
        'react': _req10,
        '../checkbox': _req11,
        '../dropdown': _req12,
        '../_util/reactNode': _req13,
        './ListBody': _req14,
        './search': _req15
      }));
    }
  };
});
//# sourceMappingURL=8dd616ed845837b28fdbb1f6df93e629313c9620.js.map