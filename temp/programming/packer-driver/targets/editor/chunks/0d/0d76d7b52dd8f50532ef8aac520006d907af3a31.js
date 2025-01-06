System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "classnames", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var TimelineItem = function TimelineItem(_a) {
          var _classNames, _classNames2;

          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              _a$color = _a.color,
              color = _a$color === void 0 ? 'blue' : _a$color,
              dot = _a.dot,
              _a$pending = _a.pending,
              pending = _a$pending === void 0 ? false : _a$pending,
              position = _a.position,
              label = _a.label,
              children = _a.children,
              restProps = __rest(_a, ["prefixCls", "className", "color", "dot", "pending", "position", "label", "children"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('timeline', customizePrefixCls);
          var itemClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-pending"), pending), _classNames), className);
          var dotClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-head"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-head-custom"), !!dot), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-head-").concat(color), true), _classNames2));
          var customColor = /blue|red|green|gray/.test(color || '') ? undefined : color;
          return /*#__PURE__*/React.createElement("li", (0, _extends2["default"])({}, restProps, {
            className: itemClassName
          }), label && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-item-label")
          }, label), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-item-tail")
          }), /*#__PURE__*/React.createElement("div", {
            className: dotClassName,
            style: {
              borderColor: customColor,
              color: customColor
            }
          }, dot), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-item-content")
          }, children));
        };

        var _default = TimelineItem;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'classnames': _req3,
        'react': _req4,
        '../config-provider': _req5
      }));
    }
  };
});
//# sourceMappingURL=0d76d7b52dd8f50532ef8aac520006d907af3a31.js.map