System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1"], function (_export, _context) {
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
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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
        exports.default = Marks;

        var React = _interopRequireWildcard(require("react"));

        var _Mark = _interopRequireDefault(require("./Mark"));

        function Marks(props) {
          var prefixCls = props.prefixCls,
              marks = props.marks,
              onClick = props.onClick;
          var markPrefixCls = "".concat(prefixCls, "-mark"); // Not render mark if empty

          if (!marks.length) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            className: markPrefixCls
          }, marks.map(function (_ref) {
            var value = _ref.value,
                style = _ref.style,
                label = _ref.label;
            return /*#__PURE__*/React.createElement(_Mark.default, {
              key: value,
              prefixCls: markPrefixCls,
              style: style,
              value: value,
              onClick: onClick
            }, label);
          }));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        './Mark': _req2
      }));
    }
  };
});
//# sourceMappingURL=743e7d6648f5fa5306c7993e7a01a3c557500ea3.js.map