System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req4 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req6 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req7 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react2) {
      _req8 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _react = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _Pager = _interopRequireDefault(require("./Pager"));

        var _Options = _interopRequireDefault(require("./Options"));

        var _KeyCode = _interopRequireDefault(require("./KeyCode"));

        var _zh_CN = _interopRequireDefault(require("./locale/zh_CN"));

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
        /* eslint react/prop-types: 0 */


        function noop() {}

        function isInteger(v) {
          var value = Number(v);
          return (// eslint-disable-next-line no-restricted-globals
            typeof value === 'number' && !isNaN(value) && isFinite(value) && Math.floor(value) === value
          );
        }

        function defaultItemRender(page, type, element) {
          return element;
        }

        function calculatePage(p, state, props) {
          var pageSize = typeof p === 'undefined' ? state.pageSize : p;
          return Math.floor((props.total - 1) / pageSize) + 1;
        }

        var Pagination = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(Pagination, _React$Component);

          var _super = (0, _createSuper2.default)(Pagination);

          function Pagination(props) {
            var _this;

            (0, _classCallCheck2.default)(this, Pagination);
            _this = _super.call(this, props);

            _this.getJumpPrevPage = function () {
              return Math.max(1, _this.state.current - (_this.props.showLessItems ? 3 : 5));
            };

            _this.getJumpNextPage = function () {
              return Math.min(calculatePage(undefined, _this.state, _this.props), _this.state.current + (_this.props.showLessItems ? 3 : 5));
            };

            _this.getItemIcon = function (icon, label) {
              var prefixCls = _this.props.prefixCls;

              var iconNode = icon || /*#__PURE__*/_react.default.createElement("button", {
                type: "button",
                "aria-label": label,
                className: "".concat(prefixCls, "-item-link")
              });

              if (typeof icon === 'function') {
                iconNode = /*#__PURE__*/_react.default.createElement(icon, (0, _objectSpread2.default)({}, _this.props));
              }

              return iconNode;
            };

            _this.savePaginationNode = function (node) {
              _this.paginationNode = node;
            };

            _this.isValid = function (page) {
              var total = _this.props.total;
              return isInteger(page) && page !== _this.state.current && isInteger(total) && total > 0;
            };

            _this.shouldDisplayQuickJumper = function () {
              var _this$props = _this.props,
                  showQuickJumper = _this$props.showQuickJumper,
                  total = _this$props.total;
              var pageSize = _this.state.pageSize;

              if (total <= pageSize) {
                return false;
              }

              return showQuickJumper;
            };

            _this.handleKeyDown = function (e) {
              if (e.keyCode === _KeyCode.default.ARROW_UP || e.keyCode === _KeyCode.default.ARROW_DOWN) {
                e.preventDefault();
              }
            };

            _this.handleKeyUp = function (e) {
              var value = _this.getValidValue(e);

              var currentInputValue = _this.state.currentInputValue;

              if (value !== currentInputValue) {
                _this.setState({
                  currentInputValue: value
                });
              }

              if (e.keyCode === _KeyCode.default.ENTER) {
                _this.handleChange(value);
              } else if (e.keyCode === _KeyCode.default.ARROW_UP) {
                _this.handleChange(value - 1);
              } else if (e.keyCode === _KeyCode.default.ARROW_DOWN) {
                _this.handleChange(value + 1);
              }
            };

            _this.handleBlur = function (e) {
              var value = _this.getValidValue(e);

              _this.handleChange(value);
            };

            _this.changePageSize = function (size) {
              var current = _this.state.current;
              var newCurrent = calculatePage(size, _this.state, _this.props);
              current = current > newCurrent ? newCurrent : current; // fix the issue:
              // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.

              if (newCurrent === 0) {
                // eslint-disable-next-line prefer-destructuring
                current = _this.state.current;
              }

              if (typeof size === 'number') {
                if (!('pageSize' in _this.props)) {
                  _this.setState({
                    pageSize: size
                  });
                }

                if (!('current' in _this.props)) {
                  _this.setState({
                    current: current,
                    currentInputValue: current
                  });
                }
              }

              _this.props.onShowSizeChange(current, size);

              if ('onChange' in _this.props && _this.props.onChange) {
                _this.props.onChange(current, size);
              }
            };

            _this.handleChange = function (page) {
              var _this$props2 = _this.props,
                  disabled = _this$props2.disabled,
                  onChange = _this$props2.onChange;
              var _this$state = _this.state,
                  pageSize = _this$state.pageSize,
                  current = _this$state.current,
                  currentInputValue = _this$state.currentInputValue;

              if (_this.isValid(page) && !disabled) {
                var currentPage = calculatePage(undefined, _this.state, _this.props);
                var newPage = page;

                if (page > currentPage) {
                  newPage = currentPage;
                } else if (page < 1) {
                  newPage = 1;
                }

                if (!('current' in _this.props)) {
                  _this.setState({
                    current: newPage
                  });
                }

                if (newPage !== currentInputValue) {
                  _this.setState({
                    currentInputValue: newPage
                  });
                }

                onChange(newPage, pageSize);
                return newPage;
              }

              return current;
            };

            _this.prev = function () {
              if (_this.hasPrev()) {
                _this.handleChange(_this.state.current - 1);
              }
            };

            _this.next = function () {
              if (_this.hasNext()) {
                _this.handleChange(_this.state.current + 1);
              }
            };

            _this.jumpPrev = function () {
              _this.handleChange(_this.getJumpPrevPage());
            };

            _this.jumpNext = function () {
              _this.handleChange(_this.getJumpNextPage());
            };

            _this.hasPrev = function () {
              return _this.state.current > 1;
            };

            _this.hasNext = function () {
              return _this.state.current < calculatePage(undefined, _this.state, _this.props);
            };

            _this.runIfEnter = function (event, callback) {
              if (event.key === 'Enter' || event.charCode === 13) {
                for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  restParams[_key - 2] = arguments[_key];
                }

                callback.apply(void 0, restParams);
              }
            };

            _this.runIfEnterPrev = function (e) {
              _this.runIfEnter(e, _this.prev);
            };

            _this.runIfEnterNext = function (e) {
              _this.runIfEnter(e, _this.next);
            };

            _this.runIfEnterJumpPrev = function (e) {
              _this.runIfEnter(e, _this.jumpPrev);
            };

            _this.runIfEnterJumpNext = function (e) {
              _this.runIfEnter(e, _this.jumpNext);
            };

            _this.handleGoTO = function (e) {
              if (e.keyCode === _KeyCode.default.ENTER || e.type === 'click') {
                _this.handleChange(_this.state.currentInputValue);
              }
            };

            var hasOnChange = props.onChange !== noop;
            var hasCurrent = ('current' in props);

            if (hasCurrent && !hasOnChange) {
              // eslint-disable-next-line no-console
              console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
            }

            var _current = props.defaultCurrent;

            if ('current' in props) {
              // eslint-disable-next-line prefer-destructuring
              _current = props.current;
            }

            var _pageSize = props.defaultPageSize;

            if ('pageSize' in props) {
              // eslint-disable-next-line prefer-destructuring
              _pageSize = props.pageSize;
            }

            _current = Math.min(_current, calculatePage(_pageSize, undefined, props));
            _this.state = {
              current: _current,
              currentInputValue: _current,
              pageSize: _pageSize
            };
            return _this;
          }

          (0, _createClass2.default)(Pagination, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
              // When current page change, fix focused style of prev item
              // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
              var prefixCls = this.props.prefixCls;

              if (prevState.current !== this.state.current && this.paginationNode) {
                var lastCurrentNode = this.paginationNode.querySelector(".".concat(prefixCls, "-item-").concat(prevState.current));

                if (lastCurrentNode && document.activeElement === lastCurrentNode) {
                  lastCurrentNode.blur();
                }
              }
            }
          }, {
            key: "getValidValue",
            value: function getValidValue(e) {
              var inputValue = e.target.value;
              var allPages = calculatePage(undefined, this.state, this.props);
              var currentInputValue = this.state.currentInputValue;
              var value;

              if (inputValue === '') {
                value = inputValue; // eslint-disable-next-line no-restricted-globals
              } else if (isNaN(Number(inputValue))) {
                value = currentInputValue;
              } else if (inputValue >= allPages) {
                value = allPages;
              } else {
                value = Number(inputValue);
              }

              return value;
            }
          }, {
            key: "getShowSizeChanger",
            value: function getShowSizeChanger() {
              var _this$props3 = this.props,
                  showSizeChanger = _this$props3.showSizeChanger,
                  total = _this$props3.total,
                  totalBoundaryShowSizeChanger = _this$props3.totalBoundaryShowSizeChanger;

              if (typeof showSizeChanger !== 'undefined') {
                return showSizeChanger;
              }

              return total > totalBoundaryShowSizeChanger;
            }
          }, {
            key: "renderPrev",
            value: function renderPrev(prevPage) {
              var _this$props4 = this.props,
                  prevIcon = _this$props4.prevIcon,
                  itemRender = _this$props4.itemRender;
              var prevButton = itemRender(prevPage, 'prev', this.getItemIcon(prevIcon, 'prev page'));
              var disabled = !this.hasPrev();
              return /*#__PURE__*/(0, _react.isValidElement)(prevButton) ? /*#__PURE__*/(0, _react.cloneElement)(prevButton, {
                disabled: disabled
              }) : prevButton;
            }
          }, {
            key: "renderNext",
            value: function renderNext(nextPage) {
              var _this$props5 = this.props,
                  nextIcon = _this$props5.nextIcon,
                  itemRender = _this$props5.itemRender;
              var nextButton = itemRender(nextPage, 'next', this.getItemIcon(nextIcon, 'next page'));
              var disabled = !this.hasNext();
              return /*#__PURE__*/(0, _react.isValidElement)(nextButton) ? /*#__PURE__*/(0, _react.cloneElement)(nextButton, {
                disabled: disabled
              }) : nextButton;
            }
          }, {
            key: "render",
            value: function render() {
              var _this2 = this;

              var _this$props6 = this.props,
                  prefixCls = _this$props6.prefixCls,
                  className = _this$props6.className,
                  style = _this$props6.style,
                  disabled = _this$props6.disabled,
                  hideOnSinglePage = _this$props6.hideOnSinglePage,
                  total = _this$props6.total,
                  locale = _this$props6.locale,
                  showQuickJumper = _this$props6.showQuickJumper,
                  showLessItems = _this$props6.showLessItems,
                  showTitle = _this$props6.showTitle,
                  showTotal = _this$props6.showTotal,
                  simple = _this$props6.simple,
                  itemRender = _this$props6.itemRender,
                  showPrevNextJumpers = _this$props6.showPrevNextJumpers,
                  jumpPrevIcon = _this$props6.jumpPrevIcon,
                  jumpNextIcon = _this$props6.jumpNextIcon,
                  selectComponentClass = _this$props6.selectComponentClass,
                  selectPrefixCls = _this$props6.selectPrefixCls,
                  pageSizeOptions = _this$props6.pageSizeOptions;
              var _this$state2 = this.state,
                  current = _this$state2.current,
                  pageSize = _this$state2.pageSize,
                  currentInputValue = _this$state2.currentInputValue; // When hideOnSinglePage is true and there is only 1 page, hide the pager

              if (hideOnSinglePage === true && total <= pageSize) {
                return null;
              }

              var allPages = calculatePage(undefined, this.state, this.props);
              var pagerList = [];
              var jumpPrev = null;
              var jumpNext = null;
              var firstPager = null;
              var lastPager = null;
              var gotoButton = null;
              var goButton = showQuickJumper && showQuickJumper.goButton;
              var pageBufferSize = showLessItems ? 1 : 2;
              var prevPage = current - 1 > 0 ? current - 1 : 0;
              var nextPage = current + 1 < allPages ? current + 1 : allPages;
              var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (prev, key) {
                if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
                  // eslint-disable-next-line no-param-reassign
                  prev[key] = _this2.props[key];
                }

                return prev;
              }, {});

              var totalText = showTotal && /*#__PURE__*/_react.default.createElement("li", {
                className: "".concat(prefixCls, "-total-text")
              }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));

              if (simple) {
                if (goButton) {
                  if (typeof goButton === 'boolean') {
                    gotoButton = /*#__PURE__*/_react.default.createElement("button", {
                      type: "button",
                      onClick: this.handleGoTO,
                      onKeyUp: this.handleGoTO
                    }, locale.jump_to_confirm);
                  } else {
                    gotoButton = /*#__PURE__*/_react.default.createElement("span", {
                      onClick: this.handleGoTO,
                      onKeyUp: this.handleGoTO
                    }, goButton);
                  }

                  gotoButton = /*#__PURE__*/_react.default.createElement("li", {
                    title: showTitle ? "".concat(locale.jump_to).concat(current, "/").concat(allPages) : null,
                    className: "".concat(prefixCls, "-simple-pager")
                  }, gotoButton);
                }

                return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
                  className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-simple"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled), className),
                  style: style,
                  ref: this.savePaginationNode
                }, dataOrAriaAttributeProps), totalText, /*#__PURE__*/_react.default.createElement("li", {
                  title: showTitle ? locale.prev_page : null,
                  onClick: this.prev,
                  tabIndex: this.hasPrev() ? 0 : null,
                  onKeyPress: this.runIfEnterPrev,
                  className: (0, _classnames.default)("".concat(prefixCls, "-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), !this.hasPrev())),
                  "aria-disabled": !this.hasPrev()
                }, this.renderPrev(prevPage)), /*#__PURE__*/_react.default.createElement("li", {
                  title: showTitle ? "".concat(current, "/").concat(allPages) : null,
                  className: "".concat(prefixCls, "-simple-pager")
                }, /*#__PURE__*/_react.default.createElement("input", {
                  type: "text",
                  value: currentInputValue,
                  disabled: disabled,
                  onKeyDown: this.handleKeyDown,
                  onKeyUp: this.handleKeyUp,
                  onChange: this.handleKeyUp,
                  onBlur: this.handleBlur,
                  size: "3"
                }), /*#__PURE__*/_react.default.createElement("span", {
                  className: "".concat(prefixCls, "-slash")
                }, "/"), allPages), /*#__PURE__*/_react.default.createElement("li", {
                  title: showTitle ? locale.next_page : null,
                  onClick: this.next,
                  tabIndex: this.hasPrev() ? 0 : null,
                  onKeyPress: this.runIfEnterNext,
                  className: (0, _classnames.default)("".concat(prefixCls, "-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), !this.hasNext())),
                  "aria-disabled": !this.hasNext()
                }, this.renderNext(nextPage)), gotoButton);
              }

              if (allPages <= 3 + pageBufferSize * 2) {
                var pagerProps = {
                  locale: locale,
                  rootPrefixCls: prefixCls,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  showTitle: showTitle,
                  itemRender: itemRender
                };

                if (!allPages) {
                  pagerList.push( /*#__PURE__*/_react.default.createElement(_Pager.default, (0, _extends2.default)({}, pagerProps, {
                    key: "noPager",
                    page: 1,
                    className: "".concat(prefixCls, "-item-disabled")
                  })));
                }

                for (var i = 1; i <= allPages; i += 1) {
                  var active = current === i;
                  pagerList.push( /*#__PURE__*/_react.default.createElement(_Pager.default, (0, _extends2.default)({}, pagerProps, {
                    key: i,
                    page: i,
                    active: active
                  })));
                }
              } else {
                var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
                var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;

                if (showPrevNextJumpers) {
                  jumpPrev = /*#__PURE__*/_react.default.createElement("li", {
                    title: showTitle ? prevItemTitle : null,
                    key: "prev",
                    onClick: this.jumpPrev,
                    tabIndex: "0",
                    onKeyPress: this.runIfEnterJumpPrev,
                    className: (0, _classnames.default)("".concat(prefixCls, "-jump-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
                  }, itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(jumpPrevIcon, 'prev page')));
                  jumpNext = /*#__PURE__*/_react.default.createElement("li", {
                    title: showTitle ? nextItemTitle : null,
                    key: "next",
                    tabIndex: "0",
                    onClick: this.jumpNext,
                    onKeyPress: this.runIfEnterJumpNext,
                    className: (0, _classnames.default)("".concat(prefixCls, "-jump-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
                  }, itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(jumpNextIcon, 'next page')));
                }

                lastPager = /*#__PURE__*/_react.default.createElement(_Pager.default, {
                  locale: locale,
                  last: true,
                  rootPrefixCls: prefixCls,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: allPages,
                  page: allPages,
                  active: false,
                  showTitle: showTitle,
                  itemRender: itemRender
                });
                firstPager = /*#__PURE__*/_react.default.createElement(_Pager.default, {
                  locale: locale,
                  rootPrefixCls: prefixCls,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: 1,
                  page: 1,
                  active: false,
                  showTitle: showTitle,
                  itemRender: itemRender
                });
                var left = Math.max(1, current - pageBufferSize);
                var right = Math.min(current + pageBufferSize, allPages);

                if (current - 1 <= pageBufferSize) {
                  right = 1 + pageBufferSize * 2;
                }

                if (allPages - current <= pageBufferSize) {
                  left = allPages - pageBufferSize * 2;
                }

                for (var _i = left; _i <= right; _i += 1) {
                  var _active = current === _i;

                  pagerList.push( /*#__PURE__*/_react.default.createElement(_Pager.default, {
                    locale: locale,
                    rootPrefixCls: prefixCls,
                    onClick: this.handleChange,
                    onKeyPress: this.runIfEnter,
                    key: _i,
                    page: _i,
                    active: _active,
                    showTitle: showTitle,
                    itemRender: itemRender
                  }));
                }

                if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
                  pagerList[0] = /*#__PURE__*/(0, _react.cloneElement)(pagerList[0], {
                    className: "".concat(prefixCls, "-item-after-jump-prev")
                  });
                  pagerList.unshift(jumpPrev);
                }

                if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
                  pagerList[pagerList.length - 1] = /*#__PURE__*/(0, _react.cloneElement)(pagerList[pagerList.length - 1], {
                    className: "".concat(prefixCls, "-item-before-jump-next")
                  });
                  pagerList.push(jumpNext);
                }

                if (left !== 1) {
                  pagerList.unshift(firstPager);
                }

                if (right !== allPages) {
                  pagerList.push(lastPager);
                }
              }

              var prevDisabled = !this.hasPrev() || !allPages;
              var nextDisabled = !this.hasNext() || !allPages;
              return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
                className: (0, _classnames.default)(prefixCls, className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled)),
                style: style,
                ref: this.savePaginationNode
              }, dataOrAriaAttributeProps), totalText, /*#__PURE__*/_react.default.createElement("li", {
                title: showTitle ? locale.prev_page : null,
                onClick: this.prev,
                tabIndex: prevDisabled ? null : 0,
                onKeyPress: this.runIfEnterPrev,
                className: (0, _classnames.default)("".concat(prefixCls, "-prev"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
                "aria-disabled": prevDisabled
              }, this.renderPrev(prevPage)), pagerList, /*#__PURE__*/_react.default.createElement("li", {
                title: showTitle ? locale.next_page : null,
                onClick: this.next,
                tabIndex: nextDisabled ? null : 0,
                onKeyPress: this.runIfEnterNext,
                className: (0, _classnames.default)("".concat(prefixCls, "-next"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
                "aria-disabled": nextDisabled
              }, this.renderNext(nextPage)), /*#__PURE__*/_react.default.createElement(_Options.default, {
                disabled: disabled,
                locale: locale,
                rootPrefixCls: prefixCls,
                selectComponentClass: selectComponentClass,
                selectPrefixCls: selectPrefixCls,
                changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
                current: current,
                pageSize: pageSize,
                pageSizeOptions: pageSizeOptions,
                quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
                goButton: goButton
              }));
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, prevState) {
              var newState = {};

              if ('current' in props) {
                newState.current = props.current;

                if (props.current !== prevState.current) {
                  newState.currentInputValue = newState.current;
                }
              }

              if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
                var current = prevState.current;
                var newCurrent = calculatePage(props.pageSize, prevState, props);
                current = current > newCurrent ? newCurrent : current;

                if (!('current' in props)) {
                  newState.current = current;
                  newState.currentInputValue = current;
                }

                newState.pageSize = props.pageSize;
              }

              return newState;
            }
          }]);
          return Pagination;
        }(_react.default.Component);

        Pagination.defaultProps = {
          defaultCurrent: 1,
          total: 0,
          defaultPageSize: 10,
          onChange: noop,
          className: '',
          selectPrefixCls: 'rc-select',
          prefixCls: 'rc-pagination',
          selectComponentClass: null,
          hideOnSinglePage: false,
          showPrevNextJumpers: true,
          showQuickJumper: false,
          showLessItems: false,
          showTitle: true,
          onShowSizeChange: noop,
          locale: _zh_CN.default,
          style: {},
          itemRender: defaultItemRender,
          totalBoundaryShowSizeChanger: 50
        };
        var _default = Pagination;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/classCallCheck': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/inherits': _req6,
        '@babel/runtime/helpers/createSuper': _req7,
        'react': _req8,
        'classnames': _req9,
        './Pager': _req10,
        './Options': _req11,
        './KeyCode': _req12,
        './locale/zh_CN': _req13
      }));
    }
  };
});
//# sourceMappingURL=30257a42c1ca744c25d6233cfe74a5984cef605c.js.map