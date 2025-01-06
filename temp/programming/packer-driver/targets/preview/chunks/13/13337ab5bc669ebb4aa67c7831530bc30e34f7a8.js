System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "react-is"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_reactIs2) {
      _req1 = _reactIs2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = toArray;

        var _react = _interopRequireDefault(require("react"));

        var _reactIs = require("react-is");

        function toArray(children) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var ret = [];

          _react.default.Children.forEach(children, function (child) {
            if ((child === undefined || child === null) && !option.keepEmpty) {
              return;
            }

            if (Array.isArray(child)) {
              ret = ret.concat(toArray(child));
            } else if ((0, _reactIs.isFragment)(child) && child.props) {
              ret = ret.concat(toArray(child.props.children, option));
            } else {
              ret.push(child);
            }
          });

          return ret;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'react-is': _req1
      }));
    }
  };
});
//# sourceMappingURL=13337ab5bc669ebb4aa67c7831530bc30e34f7a8.js.map