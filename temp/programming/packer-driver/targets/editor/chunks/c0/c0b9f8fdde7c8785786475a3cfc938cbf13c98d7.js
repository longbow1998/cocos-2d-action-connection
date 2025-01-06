System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _Column0, _ColumnGroup0, _INTERNAL_COL_DEFINE, _Summary, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req2 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req3 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req4 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "Column", {
          enumerable: true,
          get: function get() {
            return _Column.default;
          }
        });
        Object.defineProperty(exports, "ColumnGroup", {
          enumerable: true,
          get: function get() {
            return _ColumnGroup.default;
          }
        });
        Object.defineProperty(exports, "INTERNAL_COL_DEFINE", {
          enumerable: true,
          get: function get() {
            return _legacyUtil.INTERNAL_COL_DEFINE;
          }
        });
        Object.defineProperty(exports, "Summary", {
          enumerable: true,
          get: function get() {
            return _Footer.FooterComponents;
          }
        });
        exports.default = void 0;

        var _Table = _interopRequireDefault(require("./Table"));

        var _Footer = require("./Footer");

        var _Column = _interopRequireDefault(require("./sugar/Column"));

        var _ColumnGroup = _interopRequireDefault(require("./sugar/ColumnGroup"));

        var _legacyUtil = require("./utils/legacyUtil");

        var _default = _Table.default;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Column0 = module.exports.Column;
        _ColumnGroup0 = module.exports.ColumnGroup;
        _INTERNAL_COL_DEFINE = module.exports.INTERNAL_COL_DEFINE;
        _Summary = module.exports.Summary;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './Table': _req0,
        './Footer': _req1,
        './sugar/Column': _req2,
        './sugar/ColumnGroup': _req3,
        './utils/legacyUtil': _req4
      }));
    }
  };
});
//# sourceMappingURL=c0b9f8fdde7c8785786475a3cfc938cbf13c98d7.js.map