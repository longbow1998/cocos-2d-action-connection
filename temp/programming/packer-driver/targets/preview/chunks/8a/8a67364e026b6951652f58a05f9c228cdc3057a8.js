System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
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
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _reactNode = require("../_util/reactNode");

        var _SingleNumber = _interopRequireDefault(require("./SingleNumber"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var ScrollNumber = function ScrollNumber(_a) {
          var customizePrefixCls = _a.prefixCls,
              count = _a.count,
              className = _a.className,
              motionClassName = _a.motionClassName,
              style = _a.style,
              title = _a.title,
              show = _a.show,
              _a$component = _a.component,
              component = _a$component === void 0 ? 'sup' : _a$component,
              children = _a.children,
              restProps = __rest(_a, ["prefixCls", "count", "className", "motionClassName", "style", "title", "show", "component", "children"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('scroll-number', customizePrefixCls); // ============================ Render ============================

          var newProps = (0, _extends2["default"])((0, _extends2["default"])({}, restProps), {
            'data-show': show,
            style: style,
            className: (0, _classnames["default"])(prefixCls, className, motionClassName),
            title: title
          }); // Only integer need motion

          var numberNodes = count;

          if (count && Number(count) % 1 === 0) {
            var numberList = String(count).split('');
            numberNodes = numberList.map(function (num, i) {
              return /*#__PURE__*/React.createElement(_SingleNumber["default"], {
                prefixCls: prefixCls,
                count: Number(count),
                value: num,
                // eslint-disable-next-line react/no-array-index-key
                key: numberList.length - i
              });
            });
          } // allow specify the border
          // mock border-color by box-shadow for compatible with old usage:
          // <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', borderColor: '#d9d9d9' }} />


          if (style && style.borderColor) {
            newProps.style = (0, _extends2["default"])((0, _extends2["default"])({}, style), {
              boxShadow: "0 0 0 1px ".concat(style.borderColor, " inset")
            });
          }

          if (children) {
            return (0, _reactNode.cloneElement)(children, function (oriProps) {
              return {
                className: (0, _classnames["default"])("".concat(prefixCls, "-custom-component"), oriProps === null || oriProps === void 0 ? void 0 : oriProps.className, motionClassName)
              };
            });
          }

          return /*#__PURE__*/React.createElement(component, newProps, numberNodes);
        };

        var _default = ScrollNumber;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'classnames': _req2,
        'react': _req3,
        '../config-provider': _req4,
        '../_util/reactNode': _req5,
        './SingleNumber': _req6
      }));
    }
  };
});
//# sourceMappingURL=8a67364e026b6951652f58a05f9c228cdc3057a8.js.map