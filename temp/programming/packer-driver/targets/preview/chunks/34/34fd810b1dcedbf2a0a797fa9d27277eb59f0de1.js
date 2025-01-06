System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "classnames", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        function notEmpty(val) {
          return val !== undefined && val !== null;
        }

        var Cell = function Cell(_ref) {
          var itemPrefixCls = _ref.itemPrefixCls,
              component = _ref.component,
              span = _ref.span,
              className = _ref.className,
              style = _ref.style,
              labelStyle = _ref.labelStyle,
              contentStyle = _ref.contentStyle,
              bordered = _ref.bordered,
              label = _ref.label,
              content = _ref.content,
              colon = _ref.colon;
          var Component = component;

          if (bordered) {
            var _classNames;

            return /*#__PURE__*/React.createElement(Component, {
              className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), (0, _defineProperty2["default"])(_classNames, "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), _classNames), className),
              style: style,
              colSpan: span
            }, notEmpty(label) && /*#__PURE__*/React.createElement("span", {
              style: labelStyle
            }, label), notEmpty(content) && /*#__PURE__*/React.createElement("span", {
              style: contentStyle
            }, content));
          }

          return /*#__PURE__*/React.createElement(Component, {
            className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item"), className),
            style: style,
            colSpan: span
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(itemPrefixCls, "-item-container")
          }, (label || label === 0) && /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-label"), (0, _defineProperty2["default"])({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon)),
            style: labelStyle
          }, label), (content || content === 0) && /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames["default"])("".concat(itemPrefixCls, "-item-content")),
            style: contentStyle
          }, content)));
        };

        var _default = Cell;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'classnames': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=34fd810b1dcedbf2a0a797fa9d27277eb59f0de1.js.map