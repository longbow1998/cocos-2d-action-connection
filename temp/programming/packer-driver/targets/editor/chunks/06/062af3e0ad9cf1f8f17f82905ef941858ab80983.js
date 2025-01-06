System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, _Meta, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_react2) {
      _req4 = _react2.__cjsMetaURL;
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
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = exports.Meta = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _react = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _grid = require("../grid");

        var _reactNode = require("../_util/reactNode");

        var _index = require("./index");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Meta = function Meta(_a) {
          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              avatar = _a.avatar,
              title = _a.title,
              description = _a.description,
              others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);

          var _useContext = (0, _react.useContext)(_configProvider.ConfigContext),
              getPrefixCls = _useContext.getPrefixCls;

          var prefixCls = getPrefixCls('list', customizePrefixCls);
          var classString = (0, _classnames["default"])("".concat(prefixCls, "-item-meta"), className);

          var content = /*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(prefixCls, "-item-meta-content")
          }, title && /*#__PURE__*/_react["default"].createElement("h4", {
            className: "".concat(prefixCls, "-item-meta-title")
          }, title), description && /*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(prefixCls, "-item-meta-description")
          }, description));

          return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, others, {
            className: classString
          }), avatar && /*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(prefixCls, "-item-meta-avatar")
          }, avatar), (title || description) && content);
        };

        exports.Meta = Meta;

        var InternalItem = function InternalItem(_a, ref) {
          var customizePrefixCls = _a.prefixCls,
              children = _a.children,
              actions = _a.actions,
              extra = _a.extra,
              className = _a.className,
              colStyle = _a.colStyle,
              others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className", "colStyle"]);

          var _useContext2 = (0, _react.useContext)(_index.ListContext),
              grid = _useContext2.grid,
              itemLayout = _useContext2.itemLayout;

          var _useContext3 = (0, _react.useContext)(_configProvider.ConfigContext),
              getPrefixCls = _useContext3.getPrefixCls;

          var isItemContainsTextNodeAndNotSingular = function isItemContainsTextNodeAndNotSingular() {
            var result;

            _react.Children.forEach(children, function (element) {
              if (typeof element === 'string') {
                result = true;
              }
            });

            return result && _react.Children.count(children) > 1;
          };

          var isFlexMode = function isFlexMode() {
            if (itemLayout === 'vertical') {
              return !!extra;
            }

            return !isItemContainsTextNodeAndNotSingular();
          };

          var prefixCls = getPrefixCls('list', customizePrefixCls);

          var actionsContent = actions && actions.length > 0 && /*#__PURE__*/_react["default"].createElement("ul", {
            className: "".concat(prefixCls, "-item-action"),
            key: "actions"
          }, actions.map(function (action, i) {
            return (
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              _react["default"].createElement("li", {
                key: "".concat(prefixCls, "-item-action-").concat(i)
              }, action, i !== actions.length - 1 && /*#__PURE__*/_react["default"].createElement("em", {
                className: "".concat(prefixCls, "-item-action-split")
              }))
            );
          }));

          var Element = grid ? 'div' : 'li';

          var itemChildren = /*#__PURE__*/_react["default"].createElement(Element, (0, _extends2["default"])({}, others, !grid ? {
            ref: ref
          } : {}, {
            className: (0, _classnames["default"])("".concat(prefixCls, "-item"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-item-no-flex"), !isFlexMode()), className)
          }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(prefixCls, "-item-main"),
            key: "content"
          }, children, actionsContent), /*#__PURE__*/_react["default"].createElement("div", {
            className: "".concat(prefixCls, "-item-extra"),
            key: "extra"
          }, extra)] : [children, actionsContent, (0, _reactNode.cloneElement)(extra, {
            key: 'extra'
          })]);

          return grid ? /*#__PURE__*/_react["default"].createElement(_grid.Col, {
            ref: ref,
            flex: 1,
            style: colStyle
          }, itemChildren) : itemChildren;
        };

        var Item = /*#__PURE__*/(0, _react.forwardRef)(InternalItem);
        Item.Meta = Meta;
        var _default = Item;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _Meta = module.exports.Meta;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'classnames': _req3,
        'react': _req4,
        '../config-provider': _req5,
        '../grid': _req6,
        '../_util/reactNode': _req7,
        './index': _req8
      }));
    }
  };
});
//# sourceMappingURL=062af3e0ad9cf1f8f17f82905ef941858ab80983.js.map