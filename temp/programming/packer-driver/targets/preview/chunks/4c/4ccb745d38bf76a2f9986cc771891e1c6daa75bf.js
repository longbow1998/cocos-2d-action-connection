System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Popup;

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        function Popup(props) {
          var showArrow = props.showArrow,
              arrowContent = props.arrowContent,
              children = props.children,
              prefixCls = props.prefixCls,
              id = props.id,
              overlayInnerStyle = props.overlayInnerStyle,
              className = props.className,
              style = props.style;
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(prefixCls, "-content"), className),
            style: style
          }, showArrow !== false && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-arrow"),
            key: "arrow"
          }, arrowContent), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inner"),
            id: id,
            role: "tooltip",
            style: overlayInnerStyle
          }, typeof children === 'function' ? children() : children));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        'classnames': _req2
      }));
    }
  };
});
//# sourceMappingURL=4ccb745d38bf76a2f9986cc771891e1c6daa75bf.js.map