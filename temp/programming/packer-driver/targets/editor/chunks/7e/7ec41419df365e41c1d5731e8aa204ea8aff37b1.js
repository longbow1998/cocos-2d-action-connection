System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "classnames", "rc-menu", "rc-util/lib/Children/toArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcMenu2) {
      _req8 = _rcMenu2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req9 = _rcUtilLibChildrenToArray.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMenu = require("rc-menu");

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _Sider = require("../layout/Sider");

        var _tooltip = _interopRequireDefault(require("../tooltip"));

        var _reactNode = require("../_util/reactNode");

        var _MenuContext = _interopRequireDefault(require("./MenuContext"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var MenuItem = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(MenuItem, _React$Component);

          var _super = (0, _createSuper2["default"])(MenuItem);

          function MenuItem() {
            var _this;

            (0, _classCallCheck2["default"])(this, MenuItem);
            _this = _super.apply(this, arguments);

            _this.renderItem = function (_ref) {
              var _classNames;

              var siderCollapsed = _ref.siderCollapsed;

              var _a;

              var _this$context = _this.context,
                  prefixCls = _this$context.prefixCls,
                  firstLevel = _this$context.firstLevel,
                  inlineCollapsed = _this$context.inlineCollapsed,
                  direction = _this$context.direction,
                  disableMenuItemTitleTooltip = _this$context.disableMenuItemTitleTooltip;
              var _this$props = _this.props,
                  className = _this$props.className,
                  children = _this$props.children;

              var _b = _this.props,
                  title = _b.title,
                  icon = _b.icon,
                  danger = _b.danger,
                  rest = __rest(_b, ["title", "icon", "danger"]);

              var tooltipTitle = title;

              if (typeof title === 'undefined') {
                tooltipTitle = firstLevel ? children : '';
              } else if (title === false) {
                tooltipTitle = '';
              }

              var tooltipProps = {
                title: tooltipTitle
              };

              if (!siderCollapsed && !inlineCollapsed) {
                tooltipProps.title = null; // Reset `open` to fix control mode tooltip display not correct
                // ref: https://github.com/ant-design/ant-design/issues/16742

                tooltipProps.open = false;
              }

              var childrenLength = (0, _toArray["default"])(children).length;
              var returnNode = /*#__PURE__*/React.createElement(_rcMenu.Item, (0, _extends2["default"])({}, rest, {
                className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-danger"), danger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
                title: typeof title === 'string' ? title : undefined
              }), (0, _reactNode.cloneElement)(icon, {
                className: (0, _classnames["default"])((0, _reactNode.isValidElement)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
              }), _this.renderItemChildren(inlineCollapsed));

              if (!disableMenuItemTitleTooltip) {
                returnNode = /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, tooltipProps, {
                  placement: direction === 'rtl' ? 'left' : 'right',
                  overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
                }), returnNode);
              }

              return returnNode;
            };

            return _this;
          }

          (0, _createClass2["default"])(MenuItem, [{
            key: "renderItemChildren",
            value: function renderItemChildren(inlineCollapsed) {
              var _this$context2 = this.context,
                  prefixCls = _this$context2.prefixCls,
                  firstLevel = _this$context2.firstLevel;
              var _this$props2 = this.props,
                  icon = _this$props2.icon,
                  children = _this$props2.children;
              var wrapNode = /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-title-content")
              }, children); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
              // ref: https://github.com/ant-design/ant-design/pull/23456

              if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
                if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
                  return /*#__PURE__*/React.createElement("div", {
                    className: "".concat(prefixCls, "-inline-collapsed-noicon")
                  }, children.charAt(0));
                }
              }

              return wrapNode;
            }
          }, {
            key: "render",
            value: function render() {
              return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
            }
          }]);
          return MenuItem;
        }(React.Component);

        exports["default"] = MenuItem;
        MenuItem.contextType = _MenuContext["default"]; // #endregion ORIGINAL CODE

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
        'classnames': _req7,
        'rc-menu': _req8,
        'rc-util/lib/Children/toArray': _req9,
        'react': _req10,
        '../layout/Sider': _req11,
        '../tooltip': _req12,
        '../_util/reactNode': _req13,
        './MenuContext': _req14
      }));
    }
  };
});
//# sourceMappingURL=7ec41419df365e41c1d5731e8aa204ea8aff37b1.js.map