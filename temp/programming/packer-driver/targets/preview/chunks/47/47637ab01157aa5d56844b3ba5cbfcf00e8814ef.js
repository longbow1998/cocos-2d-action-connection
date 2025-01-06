System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _MiniSelect, _MiddleSelect, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports.MiniSelect = exports.MiddleSelect = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _select = _interopRequireDefault(require("../select"));

        var MiniSelect = function MiniSelect(props) {
          return /*#__PURE__*/React.createElement(_select["default"], (0, _extends2["default"])({}, props, {
            size: "small"
          }));
        };

        exports.MiniSelect = MiniSelect;

        var MiddleSelect = function MiddleSelect(props) {
          return /*#__PURE__*/React.createElement(_select["default"], (0, _extends2["default"])({}, props, {
            size: "middle"
          }));
        };

        exports.MiddleSelect = MiddleSelect;
        MiniSelect.Option = _select["default"].Option;
        MiddleSelect.Option = _select["default"].Option; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _MiniSelect = module.exports.MiniSelect;
        _MiddleSelect = module.exports.MiddleSelect;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../select': _req3
      }));
    }
  };
});
//# sourceMappingURL=47637ab01157aa5d56844b3ba5cbfcf00e8814ef.js.map