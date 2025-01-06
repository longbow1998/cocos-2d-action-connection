System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "classnames", "rc-util/lib/Children/toArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, _DescriptionsContext, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req5 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req11 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req12 = _unresolved_7.__cjsMetaURL;
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
        exports["default"] = exports.DescriptionsContext = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _reactNode = require("../_util/reactNode");

        var _responsiveObserve = _interopRequireWildcard(require("../_util/responsiveObserve"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _Item = _interopRequireDefault(require("./Item"));

        var _Row = _interopRequireDefault(require("./Row"));
        /* eslint-disable react/no-array-index-key */


        var DescriptionsContext = /*#__PURE__*/React.createContext({});
        exports.DescriptionsContext = DescriptionsContext;
        var DEFAULT_COLUMN_MAP = {
          xxl: 3,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1
        };

        function getColumn(column, screens) {
          if (typeof column === 'number') {
            return column;
          }

          if ((0, _typeof2["default"])(column) === 'object') {
            for (var i = 0; i < _responsiveObserve.responsiveArray.length; i++) {
              var breakpoint = _responsiveObserve.responsiveArray[i];

              if (screens[breakpoint] && column[breakpoint] !== undefined) {
                return column[breakpoint] || DEFAULT_COLUMN_MAP[breakpoint];
              }
            }
          }

          return 3;
        }

        function getFilledItem(node, span, rowRestCol) {
          var clone = node;

          if (span === undefined || span > rowRestCol) {
            clone = (0, _reactNode.cloneElement)(node, {
              span: rowRestCol
            });
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(span === undefined, 'Descriptions', 'Sum of column `span` in a line not match `column` of Descriptions.') : void 0;
          }

          return clone;
        }

        function getRows(children, column) {
          var childNodes = (0, _toArray["default"])(children).filter(function (n) {
            return n;
          });
          var rows = [];
          var tmpRow = [];
          var rowRestCol = column;
          childNodes.forEach(function (node, index) {
            var _a;

            var span = (_a = node.props) === null || _a === void 0 ? void 0 : _a.span;
            var mergedSpan = span || 1; // Additional handle last one

            if (index === childNodes.length - 1) {
              tmpRow.push(getFilledItem(node, span, rowRestCol));
              rows.push(tmpRow);
              return;
            }

            if (mergedSpan < rowRestCol) {
              rowRestCol -= mergedSpan;
              tmpRow.push(node);
            } else {
              tmpRow.push(getFilledItem(node, mergedSpan, rowRestCol));
              rows.push(tmpRow);
              rowRestCol = column;
              tmpRow = [];
            }
          });
          return rows;
        }

        function Descriptions(_ref) {
          var _classNames;

          var customizePrefixCls = _ref.prefixCls,
              title = _ref.title,
              extra = _ref.extra,
              _ref$column = _ref.column,
              column = _ref$column === void 0 ? DEFAULT_COLUMN_MAP : _ref$column,
              _ref$colon = _ref.colon,
              colon = _ref$colon === void 0 ? true : _ref$colon,
              bordered = _ref.bordered,
              layout = _ref.layout,
              children = _ref.children,
              className = _ref.className,
              style = _ref.style,
              size = _ref.size,
              labelStyle = _ref.labelStyle,
              contentStyle = _ref.contentStyle;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('descriptions', customizePrefixCls);

          var _React$useState = React.useState({}),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              screens = _React$useState2[0],
              setScreens = _React$useState2[1];

          var mergedColumn = getColumn(column, screens); // Responsive

          React.useEffect(function () {
            var token = _responsiveObserve["default"].subscribe(function (newScreens) {
              if ((0, _typeof2["default"])(column) !== 'object') {
                return;
              }

              setScreens(newScreens);
            });

            return function () {
              _responsiveObserve["default"].unsubscribe(token);
            };
          }, []); // Children

          var rows = getRows(children, mergedColumn);
          var contextValue = React.useMemo(function () {
            return {
              labelStyle: labelStyle,
              contentStyle: contentStyle
            };
          }, [labelStyle, contentStyle]);
          return /*#__PURE__*/React.createElement(DescriptionsContext.Provider, {
            value: contextValue
          }, /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size && size !== 'default'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-bordered"), !!bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className),
            style: style
          }, (title || extra) && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-header")
          }, title && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-title")
          }, title), extra && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-extra")
          }, extra)), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-view")
          }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, rows.map(function (row, index) {
            return /*#__PURE__*/React.createElement(_Row["default"], {
              key: index,
              index: index,
              colon: colon,
              prefixCls: prefixCls,
              vertical: layout === 'vertical',
              bordered: bordered,
              row: row
            });
          }))))));
        }

        Descriptions.Item = _Item["default"];
        var _default = Descriptions;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _DescriptionsContext = module.exports.DescriptionsContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        'classnames': _req4,
        'rc-util/lib/Children/toArray': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../_util/reactNode': _req8,
        '../_util/responsiveObserve': _req9,
        '../_util/warning': _req10,
        './Item': _req11,
        './Row': _req12
      }));
    }
  };
});
//# sourceMappingURL=87215949b9fd5f26ff426a818cb58fa240127cbc.js.map