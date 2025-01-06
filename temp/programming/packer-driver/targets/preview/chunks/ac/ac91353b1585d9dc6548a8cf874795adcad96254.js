System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@ant-design/icons/DownOutlined", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_antDesignIconsDownOutlined) {
      _req2 = _antDesignIconsDownOutlined.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req6 = _unresolved_4.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _configProvider = require("../config-provider");

        var _dropdown = _interopRequireDefault(require("../dropdown/dropdown"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var BreadcrumbItem = function BreadcrumbItem(props) {
          var customizePrefixCls = props.prefixCls,
              _props$separator = props.separator,
              separator = _props$separator === void 0 ? '/' : _props$separator,
              children = props.children,
              menu = props.menu,
              overlay = props.overlay,
              dropdownProps = props.dropdownProps,
              restProps = __rest(props, ["prefixCls", "separator", "children", "menu", "overlay", "dropdownProps"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls); // Warning for deprecated usage

          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('overlay' in props), 'Breadcrumb.Item', '`overlay` is deprecated. Please use `menu` instead.') : void 0;
          }
          /** If overlay is have Wrap a Dropdown */


          var renderBreadcrumbNode = function renderBreadcrumbNode(breadcrumbItem) {
            if (menu || overlay) {
              return /*#__PURE__*/React.createElement(_dropdown["default"], (0, _extends2["default"])({
                menu: menu,
                overlay: overlay,
                placement: "bottom"
              }, dropdownProps), /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-overlay-link")
              }, breadcrumbItem, /*#__PURE__*/React.createElement(_DownOutlined["default"], null)));
            }

            return breadcrumbItem;
          };

          var link;

          if ('href' in restProps) {
            link = /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
              className: "".concat(prefixCls, "-link")
            }, restProps), children);
          } else {
            link = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({
              className: "".concat(prefixCls, "-link")
            }, restProps), children);
          } // wrap to dropDown


          link = renderBreadcrumbNode(link);

          if (children !== undefined && children !== null) {
            return /*#__PURE__*/React.createElement("li", null, link, separator && /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-separator")
            }, separator));
          }

          return null;
        };

        BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
        var _default = BreadcrumbItem;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@ant-design/icons/DownOutlined': _req2,
        'react': _req3,
        '../_util/warning': _req4,
        '../config-provider': _req5,
        '../dropdown/dropdown': _req6
      }));
    }
  };
});
//# sourceMappingURL=ac91353b1585d9dc6548a8cf874795adcad96254.js.map