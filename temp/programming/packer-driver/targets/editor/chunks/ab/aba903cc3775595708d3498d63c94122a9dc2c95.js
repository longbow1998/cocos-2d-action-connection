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

        function renderExpandIcon(locale) {
          return function expandIcon(_ref) {
            var _classNames;

            var prefixCls = _ref.prefixCls,
                onExpand = _ref.onExpand,
                record = _ref.record,
                expanded = _ref.expanded,
                expandable = _ref.expandable;
            var iconPrefix = "".concat(prefixCls, "-row-expand-icon");
            return /*#__PURE__*/React.createElement("button", {
              type: "button",
              onClick: function onClick(e) {
                onExpand(record, e);
                e.stopPropagation();
              },
              className: (0, _classnames["default"])(iconPrefix, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-spaced"), !expandable), (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-expanded"), expandable && expanded), (0, _defineProperty2["default"])(_classNames, "".concat(iconPrefix, "-collapsed"), expandable && !expanded), _classNames)),
              "aria-label": expanded ? locale.collapse : locale.expand,
              "aria-expanded": expanded
            });
          };
        }

        var _default = renderExpandIcon;
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
//# sourceMappingURL=aba903cc3775595708d3498d63c94122a9dc2c95.js.map