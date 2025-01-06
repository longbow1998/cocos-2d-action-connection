System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req4 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req6 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req7 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req9 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req14 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req15 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req16 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req17 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req18 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req19 = _unresolved_11.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));

        var _context = require("../form/context");

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _default2 = _interopRequireDefault(require("../locale/default"));

        var _statusUtils = require("../_util/statusUtils");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _list = _interopRequireDefault(require("./list"));

        var _operation = _interopRequireDefault(require("./operation"));

        var _search = _interopRequireDefault(require("./search"));

        var Transfer = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(Transfer, _React$Component);

          var _super = (0, _createSuper2["default"])(Transfer);

          function Transfer(props) {
            var _this;

            (0, _classCallCheck2["default"])(this, Transfer);
            _this = _super.call(this, props);
            _this.separatedDataSource = null;

            _this.setStateKeys = function (direction, keys) {
              if (direction === 'left') {
                _this.setState(function (_ref) {
                  var sourceSelectedKeys = _ref.sourceSelectedKeys;
                  return {
                    sourceSelectedKeys: typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys
                  };
                });
              } else {
                _this.setState(function (_ref2) {
                  var targetSelectedKeys = _ref2.targetSelectedKeys;
                  return {
                    targetSelectedKeys: typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys
                  };
                });
              }
            };

            _this.getLocale = function (transferLocale, renderEmpty) {
              var _this$props$locale = _this.props.locale,
                  locale = _this$props$locale === void 0 ? {} : _this$props$locale;
              return (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, transferLocale), {
                notFoundContent: renderEmpty('Transfer')
              }), locale);
            };

            _this.moveTo = function (direction) {
              var _this$props = _this.props,
                  _this$props$targetKey = _this$props.targetKeys,
                  targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
                  _this$props$dataSourc = _this$props.dataSource,
                  dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
                  onChange = _this$props.onChange;
              var _this$state = _this.state,
                  sourceSelectedKeys = _this$state.sourceSelectedKeys,
                  targetSelectedKeys = _this$state.targetSelectedKeys;
              var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

              var newMoveKeys = moveKeys.filter(function (key) {
                return !dataSource.some(function (data) {
                  return !!(key === data.key && data.disabled);
                });
              }); // move items to target box

              var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
                return !newMoveKeys.includes(targetKey);
              }); // empty checked keys

              var oppositeDirection = direction === 'right' ? 'left' : 'right';

              _this.setStateKeys(oppositeDirection, []);

              _this.handleSelectChange(oppositeDirection, []);

              onChange === null || onChange === void 0 ? void 0 : onChange(newTargetKeys, direction, newMoveKeys);
            };

            _this.moveToLeft = function () {
              return _this.moveTo('left');
            };

            _this.moveToRight = function () {
              return _this.moveTo('right');
            };

            _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
              _this.setStateKeys(direction, function (prevKeys) {
                var mergedCheckedKeys = [];

                if (checkAll) {
                  // Merge current keys with origin key
                  mergedCheckedKeys = Array.from(new Set([].concat((0, _toConsumableArray2["default"])(prevKeys), (0, _toConsumableArray2["default"])(selectedKeys))));
                } else {
                  // Remove current keys from origin keys
                  mergedCheckedKeys = prevKeys.filter(function (key) {
                    return !selectedKeys.includes(key);
                  });
                }

                _this.handleSelectChange(direction, mergedCheckedKeys);

                return mergedCheckedKeys;
              });
            };

            _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
              return _this.onItemSelectAll('left', selectedKeys, checkAll);
            };

            _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
              return _this.onItemSelectAll('right', selectedKeys, checkAll);
            };

            _this.handleFilter = function (direction, e) {
              var onSearch = _this.props.onSearch;
              var value = e.target.value;
              onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, value);
            };

            _this.handleLeftFilter = function (e) {
              return _this.handleFilter('left', e);
            };

            _this.handleRightFilter = function (e) {
              return _this.handleFilter('right', e);
            };

            _this.handleClear = function (direction) {
              var onSearch = _this.props.onSearch;
              onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, '');
            };

            _this.handleLeftClear = function () {
              return _this.handleClear('left');
            };

            _this.handleRightClear = function () {
              return _this.handleClear('right');
            };

            _this.onItemSelect = function (direction, selectedKey, checked) {
              var _this$state2 = _this.state,
                  sourceSelectedKeys = _this$state2.sourceSelectedKeys,
                  targetSelectedKeys = _this$state2.targetSelectedKeys;
              var holder = direction === 'left' ? (0, _toConsumableArray2["default"])(sourceSelectedKeys) : (0, _toConsumableArray2["default"])(targetSelectedKeys);
              var index = holder.indexOf(selectedKey);

              if (index > -1) {
                holder.splice(index, 1);
              }

              if (checked) {
                holder.push(selectedKey);
              }

              _this.handleSelectChange(direction, holder);

              if (!_this.props.selectedKeys) {
                _this.setStateKeys(direction, holder);
              }
            };

            _this.onLeftItemSelect = function (selectedKey, checked) {
              return _this.onItemSelect('left', selectedKey, checked);
            };

            _this.onRightItemSelect = function (selectedKey, checked) {
              return _this.onItemSelect('right', selectedKey, checked);
            };

            _this.onRightItemRemove = function (selectedKeys) {
              var _this$props2 = _this.props,
                  _this$props2$targetKe = _this$props2.targetKeys,
                  targetKeys = _this$props2$targetKe === void 0 ? [] : _this$props2$targetKe,
                  onChange = _this$props2.onChange;

              _this.setStateKeys('right', []);

              onChange === null || onChange === void 0 ? void 0 : onChange(targetKeys.filter(function (key) {
                return !selectedKeys.includes(key);
              }), 'left', (0, _toConsumableArray2["default"])(selectedKeys));
            };

            _this.handleScroll = function (direction, e) {
              var onScroll = _this.props.onScroll;
              onScroll === null || onScroll === void 0 ? void 0 : onScroll(direction, e);
            };

            _this.handleLeftScroll = function (e) {
              return _this.handleScroll('left', e);
            };

            _this.handleRightScroll = function (e) {
              return _this.handleScroll('right', e);
            }; // eslint-disable-next-line class-methods-use-this


            _this.handleListStyle = function (listStyle, direction) {
              if (typeof listStyle === 'function') {
                return listStyle({
                  direction: direction
                });
              }

              return listStyle;
            };

            var _props$selectedKeys = props.selectedKeys,
                selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
                _props$targetKeys = props.targetKeys,
                targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
            _this.state = {
              sourceSelectedKeys: selectedKeys.filter(function (key) {
                return !targetKeys.includes(key);
              }),
              targetSelectedKeys: selectedKeys.filter(function (key) {
                return targetKeys.includes(key);
              })
            };
            return _this;
          }

          (0, _createClass2["default"])(Transfer, [{
            key: "getTitles",
            value: function getTitles(transferLocale) {
              var _a, _b;

              return (_b = (_a = this.props.titles) !== null && _a !== void 0 ? _a : transferLocale.titles) !== null && _b !== void 0 ? _b : [];
            }
          }, {
            key: "handleSelectChange",
            value: function handleSelectChange(direction, holder) {
              var _this$state3 = this.state,
                  sourceSelectedKeys = _this$state3.sourceSelectedKeys,
                  targetSelectedKeys = _this$state3.targetSelectedKeys;
              var onSelectChange = this.props.onSelectChange;

              if (!onSelectChange) {
                return;
              }

              if (direction === 'left') {
                onSelectChange(holder, targetSelectedKeys);
              } else {
                onSelectChange(sourceSelectedKeys, holder);
              }
            }
          }, {
            key: "separateDataSource",
            value: function separateDataSource() {
              var _this$props3 = this.props,
                  _this$props3$dataSour = _this$props3.dataSource,
                  dataSource = _this$props3$dataSour === void 0 ? [] : _this$props3$dataSour,
                  rowKey = _this$props3.rowKey,
                  _this$props3$targetKe = _this$props3.targetKeys,
                  targetKeys = _this$props3$targetKe === void 0 ? [] : _this$props3$targetKe;
              var leftDataSource = [];
              var rightDataSource = new Array(targetKeys.length);
              dataSource.forEach(function (record) {
                if (rowKey) {
                  record = (0, _extends2["default"])((0, _extends2["default"])({}, record), {
                    key: rowKey(record)
                  });
                } // rightDataSource should be ordered by targetKeys
                // leftDataSource should be ordered by dataSource


                var indexOfKey = targetKeys.indexOf(record.key);

                if (indexOfKey !== -1) {
                  rightDataSource[indexOfKey] = record;
                } else {
                  leftDataSource.push(record);
                }
              });
              return {
                leftDataSource: leftDataSource,
                rightDataSource: rightDataSource
              };
            }
          }, {
            key: "render",
            value: function render() {
              var _this2 = this;

              return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
                componentName: "Transfer",
                defaultLocale: _default2["default"].Transfer
              }, function (contextLocale) {
                return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref3) {
                  var getPrefixCls = _ref3.getPrefixCls,
                      renderEmpty = _ref3.renderEmpty,
                      direction = _ref3.direction;
                  return /*#__PURE__*/React.createElement(_context.FormItemInputContext.Consumer, null, function (_ref4) {
                    var _classNames;

                    var hasFeedback = _ref4.hasFeedback,
                        contextStatus = _ref4.status;
                    var _this2$props = _this2.props,
                        customizePrefixCls = _this2$props.prefixCls,
                        className = _this2$props.className,
                        disabled = _this2$props.disabled,
                        _this2$props$operatio = _this2$props.operations,
                        operations = _this2$props$operatio === void 0 ? [] : _this2$props$operatio,
                        _this2$props$showSear = _this2$props.showSearch,
                        showSearch = _this2$props$showSear === void 0 ? false : _this2$props$showSear,
                        footer = _this2$props.footer,
                        style = _this2$props.style,
                        _this2$props$listStyl = _this2$props.listStyle,
                        listStyle = _this2$props$listStyl === void 0 ? {} : _this2$props$listStyl,
                        operationStyle = _this2$props.operationStyle,
                        filterOption = _this2$props.filterOption,
                        render = _this2$props.render,
                        children = _this2$props.children,
                        showSelectAll = _this2$props.showSelectAll,
                        oneWay = _this2$props.oneWay,
                        pagination = _this2$props.pagination,
                        customStatus = _this2$props.status;
                    var prefixCls = getPrefixCls('transfer', customizePrefixCls);

                    var locale = _this2.getLocale(contextLocale, renderEmpty || _defaultRenderEmpty["default"]);

                    var _this2$state = _this2.state,
                        sourceSelectedKeys = _this2$state.sourceSelectedKeys,
                        targetSelectedKeys = _this2$state.targetSelectedKeys;
                    var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);
                    var mergedPagination = !children && pagination;

                    var _this2$separateDataSo = _this2.separateDataSource(),
                        leftDataSource = _this2$separateDataSo.leftDataSource,
                        rightDataSource = _this2$separateDataSo.rightDataSource;

                    var leftActive = targetSelectedKeys.length > 0;
                    var rightActive = sourceSelectedKeys.length > 0;
                    var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-customize-list"), !!children), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), className);

                    var titles = _this2.getTitles(locale);

                    var selectAllLabels = _this2.props.selectAllLabels || [];
                    return /*#__PURE__*/React.createElement("div", {
                      className: cls,
                      style: style
                    }, /*#__PURE__*/React.createElement(_list["default"], (0, _extends2["default"])({
                      prefixCls: "".concat(prefixCls, "-list"),
                      titleText: titles === null || titles === void 0 ? void 0 : titles[0],
                      dataSource: leftDataSource,
                      filterOption: filterOption,
                      style: _this2.handleListStyle(listStyle, 'left'),
                      checkedKeys: sourceSelectedKeys,
                      handleFilter: _this2.handleLeftFilter,
                      handleClear: _this2.handleLeftClear,
                      onItemSelect: _this2.onLeftItemSelect,
                      onItemSelectAll: _this2.onLeftItemSelectAll,
                      render: render,
                      showSearch: showSearch,
                      renderList: children,
                      footer: footer,
                      onScroll: _this2.handleLeftScroll,
                      disabled: disabled,
                      direction: direction === 'rtl' ? 'right' : 'left',
                      showSelectAll: showSelectAll,
                      selectAllLabel: selectAllLabels[0],
                      pagination: mergedPagination
                    }, locale)), /*#__PURE__*/React.createElement(_operation["default"], {
                      className: "".concat(prefixCls, "-operation"),
                      rightActive: rightActive,
                      rightArrowText: operations[0],
                      moveToRight: _this2.moveToRight,
                      leftActive: leftActive,
                      leftArrowText: operations[1],
                      moveToLeft: _this2.moveToLeft,
                      style: operationStyle,
                      disabled: disabled,
                      direction: direction,
                      oneWay: oneWay
                    }), /*#__PURE__*/React.createElement(_list["default"], (0, _extends2["default"])({
                      prefixCls: "".concat(prefixCls, "-list"),
                      titleText: titles === null || titles === void 0 ? void 0 : titles[1],
                      dataSource: rightDataSource,
                      filterOption: filterOption,
                      style: _this2.handleListStyle(listStyle, 'right'),
                      checkedKeys: targetSelectedKeys,
                      handleFilter: _this2.handleRightFilter,
                      handleClear: _this2.handleRightClear,
                      onItemSelect: _this2.onRightItemSelect,
                      onItemSelectAll: _this2.onRightItemSelectAll,
                      onItemRemove: _this2.onRightItemRemove,
                      render: render,
                      showSearch: showSearch,
                      renderList: children,
                      footer: footer,
                      onScroll: _this2.handleRightScroll,
                      disabled: disabled,
                      direction: direction === 'rtl' ? 'left' : 'right',
                      showSelectAll: showSelectAll,
                      selectAllLabel: selectAllLabels[1],
                      showRemove: oneWay,
                      pagination: mergedPagination
                    }, locale)));
                  });
                });
              });
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(_ref5) {
              var selectedKeys = _ref5.selectedKeys,
                  targetKeys = _ref5.targetKeys,
                  pagination = _ref5.pagination,
                  children = _ref5.children;

              if (selectedKeys) {
                var mergedTargetKeys = targetKeys || [];
                return {
                  sourceSelectedKeys: selectedKeys.filter(function (key) {
                    return !mergedTargetKeys.includes(key);
                  }),
                  targetSelectedKeys: selectedKeys.filter(function (key) {
                    return mergedTargetKeys.includes(key);
                  })
                };
              }

              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!pagination || !children, 'Transfer', '`pagination` not support customize render list.') : void 0;
              return null;
            }
          }]);
          return Transfer;
        }(React.Component); // For high-level customized Transfer @dqaria


        Transfer.List = _list["default"];
        Transfer.Operation = _operation["default"];
        Transfer.Search = _search["default"];
        var _default = Transfer;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/classCallCheck': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/inherits': _req6,
        '@babel/runtime/helpers/createSuper': _req7,
        'classnames': _req8,
        'react': _req9,
        '../config-provider': _req10,
        '../config-provider/defaultRenderEmpty': _req11,
        '../form/context': _req12,
        '../locale-provider/LocaleReceiver': _req13,
        '../locale/default': _req14,
        '../_util/statusUtils': _req15,
        '../_util/warning': _req16,
        './list': _req17,
        './operation': _req18,
        './search': _req19
      }));
    }
  };
});
//# sourceMappingURL=5ea0fc2d9e99f4ee01ee5e5d67082ab152087c32.js.map