System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, _OmitProps, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req2 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req3 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req4 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req5 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req6 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req7 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
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
        exports["default"] = exports.OmitProps = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _pagination = _interopRequireDefault(require("../pagination"));

        var _type = require("../_util/type");

        var _ListItem = _interopRequireDefault(require("./ListItem"));

        var OmitProps = (0, _type.tuple)('handleFilter', 'handleClear', 'checkedKeys');
        exports.OmitProps = OmitProps;

        function parsePagination(pagination) {
          if (!pagination) {
            return null;
          }

          var defaultPagination = {
            pageSize: 10,
            simple: true,
            showSizeChanger: false,
            showLessItems: false
          };

          if ((0, _typeof2["default"])(pagination) === 'object') {
            return (0, _extends2["default"])((0, _extends2["default"])({}, defaultPagination), pagination);
          }

          return defaultPagination;
        }

        var ListBody = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(ListBody, _React$Component);

          var _super = (0, _createSuper2["default"])(ListBody);

          function ListBody() {
            var _this;

            (0, _classCallCheck2["default"])(this, ListBody);
            _this = _super.apply(this, arguments);
            _this.state = {
              current: 1
            };

            _this.onItemSelect = function (item) {
              var _this$props = _this.props,
                  onItemSelect = _this$props.onItemSelect,
                  selectedKeys = _this$props.selectedKeys;
              var checked = selectedKeys.includes(item.key);
              onItemSelect(item.key, !checked);
            };

            _this.onItemRemove = function (item) {
              var onItemRemove = _this.props.onItemRemove;
              onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove([item.key]);
            };

            _this.onPageChange = function (current) {
              _this.setState({
                current: current
              });
            };

            _this.getItems = function () {
              var current = _this.state.current;
              var _this$props2 = _this.props,
                  pagination = _this$props2.pagination,
                  filteredRenderItems = _this$props2.filteredRenderItems;
              var mergedPagination = parsePagination(pagination);
              var displayItems = filteredRenderItems;

              if (mergedPagination) {
                displayItems = filteredRenderItems.slice((current - 1) * mergedPagination.pageSize, current * mergedPagination.pageSize);
              }

              return displayItems;
            };

            return _this;
          }

          (0, _createClass2["default"])(ListBody, [{
            key: "render",
            value: function render() {
              var _this2 = this;

              var current = this.state.current;
              var _this$props3 = this.props,
                  prefixCls = _this$props3.prefixCls,
                  onScroll = _this$props3.onScroll,
                  filteredRenderItems = _this$props3.filteredRenderItems,
                  selectedKeys = _this$props3.selectedKeys,
                  globalDisabled = _this$props3.disabled,
                  showRemove = _this$props3.showRemove,
                  pagination = _this$props3.pagination;
              var mergedPagination = parsePagination(pagination);
              var paginationNode = null;

              if (mergedPagination) {
                paginationNode = /*#__PURE__*/React.createElement(_pagination["default"], {
                  simple: mergedPagination.simple,
                  showSizeChanger: mergedPagination.showSizeChanger,
                  showLessItems: mergedPagination.showLessItems,
                  size: "small",
                  disabled: globalDisabled,
                  className: "".concat(prefixCls, "-pagination"),
                  total: filteredRenderItems.length,
                  pageSize: mergedPagination.pageSize,
                  current: current,
                  onChange: this.onPageChange
                });
              }

              return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
                className: (0, _classnames["default"])("".concat(prefixCls, "-content"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
                onScroll: onScroll
              }, this.getItems().map(function (_ref) {
                var renderedEl = _ref.renderedEl,
                    renderedText = _ref.renderedText,
                    item = _ref.item;
                var disabled = item.disabled;
                var checked = selectedKeys.includes(item.key);
                return /*#__PURE__*/React.createElement(_ListItem["default"], {
                  disabled: globalDisabled || disabled,
                  key: item.key,
                  item: item,
                  renderedText: renderedText,
                  renderedEl: renderedEl,
                  checked: checked,
                  prefixCls: prefixCls,
                  onClick: _this2.onItemSelect,
                  onRemove: _this2.onItemRemove,
                  showRemove: showRemove
                });
              })), paginationNode);
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(_ref2, _ref3) {
              var filteredRenderItems = _ref2.filteredRenderItems,
                  pagination = _ref2.pagination;
              var current = _ref3.current;
              var mergedPagination = parsePagination(pagination);

              if (mergedPagination) {
                // Calculate the page number
                var maxPageCount = Math.ceil(filteredRenderItems.length / mergedPagination.pageSize);

                if (current > maxPageCount) {
                  return {
                    current: maxPageCount
                  };
                }
              }

              return null;
            }
          }]);
          return ListBody;
        }(React.Component);

        var _default = ListBody;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _OmitProps = module.exports.OmitProps;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/inherits': _req4,
        '@babel/runtime/helpers/createSuper': _req5,
        '@babel/runtime/helpers/extends': _req6,
        '@babel/runtime/helpers/typeof': _req7,
        'classnames': _req8,
        'react': _req9,
        '../pagination': _req10,
        '../_util/type': _req11,
        './ListItem': _req12
      }));
    }
  };
});
//# sourceMappingURL=c89994e4700592db5c6217c44a86ca2e76ae7e89.js.map