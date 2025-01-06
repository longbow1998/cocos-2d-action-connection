System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _cjsExports, ___esModule, _default0, _ListContext, _ListConsumer, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req5 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req13 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req14 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req15 = _unresolved_9.__cjsMetaURL;
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
        exports["default"] = exports.ListContext = exports.ListConsumer = void 0;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));

        var _grid = require("../grid");

        var _useBreakpoint = _interopRequireDefault(require("../grid/hooks/useBreakpoint"));

        var _pagination = _interopRequireDefault(require("../pagination"));

        var _spin = _interopRequireDefault(require("../spin"));

        var _responsiveObserve = require("../_util/responsiveObserve");

        var _Item = _interopRequireDefault(require("./Item"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var ListContext = /*#__PURE__*/React.createContext({});
        exports.ListContext = ListContext;
        var ListConsumer = ListContext.Consumer;
        exports.ListConsumer = ListConsumer;

        function List(_a) {
          var _classNames;

          var _a$pagination = _a.pagination,
              pagination = _a$pagination === void 0 ? false : _a$pagination,
              customizePrefixCls = _a.prefixCls,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? false : _a$bordered,
              _a$split = _a.split,
              split = _a$split === void 0 ? true : _a$split,
              className = _a.className,
              children = _a.children,
              itemLayout = _a.itemLayout,
              loadMore = _a.loadMore,
              grid = _a.grid,
              _a$dataSource = _a.dataSource,
              dataSource = _a$dataSource === void 0 ? [] : _a$dataSource,
              size = _a.size,
              header = _a.header,
              footer = _a.footer,
              _a$loading = _a.loading,
              loading = _a$loading === void 0 ? false : _a$loading,
              rowKey = _a.rowKey,
              renderItem = _a.renderItem,
              locale = _a.locale,
              rest = __rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);

          var paginationObj = pagination && (0, _typeof2["default"])(pagination) === 'object' ? pagination : {};

          var _React$useState = React.useState(paginationObj.defaultCurrent || 1),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              paginationCurrent = _React$useState2[0],
              setPaginationCurrent = _React$useState2[1];

          var _React$useState3 = React.useState(paginationObj.defaultPageSize || 10),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              paginationSize = _React$useState4[0],
              setPaginationSize = _React$useState4[1];

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              renderEmpty = _React$useContext.renderEmpty,
              direction = _React$useContext.direction;

          var defaultPaginationProps = {
            current: 1,
            total: 0
          };

          var triggerPaginationEvent = function triggerPaginationEvent(eventName) {
            return function (page, pageSize) {
              setPaginationCurrent(page);
              setPaginationSize(pageSize);

              if (pagination && pagination[eventName]) {
                pagination[eventName](page, pageSize);
              }
            };
          };

          var onPaginationChange = triggerPaginationEvent('onChange');
          var onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');

          var renderInnerItem = function renderInnerItem(item, index) {
            if (!renderItem) return null;
            var key;

            if (typeof rowKey === 'function') {
              key = rowKey(item);
            } else if (rowKey) {
              key = item[rowKey];
            } else {
              key = item.key;
            }

            if (!key) {
              key = "list-item-".concat(index);
            }

            return /*#__PURE__*/React.createElement(React.Fragment, {
              key: key
            }, renderItem(item, index));
          };

          var isSomethingAfterLastItem = function isSomethingAfterLastItem() {
            return !!(loadMore || pagination || footer);
          };

          var renderEmptyFunc = function renderEmptyFunc(prefixCls, renderEmptyHandler) {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-empty-text")
            }, locale && locale.emptyText || renderEmptyHandler('List'));
          };

          var prefixCls = getPrefixCls('list', customizePrefixCls);
          var loadingProp = loading;

          if (typeof loadingProp === 'boolean') {
            loadingProp = {
              spinning: loadingProp
            };
          }

          var isLoading = loadingProp && loadingProp.spinning; // large => lg
          // small => sm

          var sizeCls = '';

          switch (size) {
            case 'large':
              sizeCls = 'lg';
              break;

            case 'small':
              sizeCls = 'sm';
              break;

            default:
              break;
          }

          var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-vertical"), itemLayout === 'vertical'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-split"), split), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), isLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-grid"), !!grid), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-something-after-last-item"), isSomethingAfterLastItem()), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          var paginationProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, defaultPaginationProps), {
            total: dataSource.length,
            current: paginationCurrent,
            pageSize: paginationSize
          }), pagination || {});
          var largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);

          if (paginationProps.current > largestPage) {
            paginationProps.current = largestPage;
          }

          var paginationContent = pagination ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-pagination")
          }, /*#__PURE__*/React.createElement(_pagination["default"], (0, _extends2["default"])({}, paginationProps, {
            onChange: onPaginationChange,
            onShowSizeChange: onPaginationShowSizeChange
          }))) : null;
          var splitDataSource = (0, _toConsumableArray2["default"])(dataSource);

          if (pagination) {
            if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
              splitDataSource = (0, _toConsumableArray2["default"])(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
            }
          }

          var needResponsive = Object.keys(grid || {}).some(function (key) {
            return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key);
          });
          var screens = (0, _useBreakpoint["default"])(needResponsive);
          var currentBreakpoint = React.useMemo(function () {
            for (var i = 0; i < _responsiveObserve.responsiveArray.length; i += 1) {
              var breakpoint = _responsiveObserve.responsiveArray[i];

              if (screens[breakpoint]) {
                return breakpoint;
              }
            }

            return undefined;
          }, [screens]);
          var colStyle = React.useMemo(function () {
            if (!grid) {
              return undefined;
            }

            var columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;

            if (columnCount) {
              return {
                width: "".concat(100 / columnCount, "%"),
                maxWidth: "".concat(100 / columnCount, "%")
              };
            }
          }, [grid === null || grid === void 0 ? void 0 : grid.column, currentBreakpoint]);
          var childrenContent = isLoading && /*#__PURE__*/React.createElement("div", {
            style: {
              minHeight: 53
            }
          });

          if (splitDataSource.length > 0) {
            var items = splitDataSource.map(function (item, index) {
              return renderInnerItem(item, index);
            });
            childrenContent = grid ? /*#__PURE__*/React.createElement(_grid.Row, {
              gutter: grid.gutter
            }, React.Children.map(items, function (child) {
              return /*#__PURE__*/React.createElement("div", {
                key: child === null || child === void 0 ? void 0 : child.key,
                style: colStyle
              }, child);
            })) : /*#__PURE__*/React.createElement("ul", {
              className: "".concat(prefixCls, "-items")
            }, items);
          } else if (!children && !isLoading) {
            childrenContent = renderEmptyFunc(prefixCls, renderEmpty || _defaultRenderEmpty["default"]);
          }

          var paginationPosition = paginationProps.position || 'bottom';
          var contextValue = React.useMemo(function () {
            return {
              grid: grid,
              itemLayout: itemLayout
            };
          }, [JSON.stringify(grid), itemLayout]);
          return /*#__PURE__*/React.createElement(ListContext.Provider, {
            value: contextValue
          }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
            className: classString
          }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-header")
          }, header), /*#__PURE__*/React.createElement(_spin["default"], (0, _extends2["default"])({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-footer")
          }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent));
        }

        List.Item = _Item["default"];
        var _default = List;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _ListContext = module.exports.ListContext;
        _ListConsumer = module.exports.ListConsumer;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/typeof': _req5,
        'classnames': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../config-provider/defaultRenderEmpty': _req9,
        '../grid': _req10,
        '../grid/hooks/useBreakpoint': _req11,
        '../pagination': _req12,
        '../spin': _req13,
        '../_util/responsiveObserve': _req14,
        './Item': _req15
      }));
    }
  };
});
//# sourceMappingURL=5bf777053f44e76fd1330fc693f22b56610d5a74.js.map