System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _Link = _interopRequireDefault(require("./Link"));

        var _Paragraph = _interopRequireDefault(require("./Paragraph"));

        var _Text = _interopRequireDefault(require("./Text"));

        var _Title = _interopRequireDefault(require("./Title"));

        var _Typography = _interopRequireDefault(require("./Typography"));

        var Typography = _Typography["default"];
        Typography.Text = _Text["default"];
        Typography.Link = _Link["default"];
        Typography.Title = _Title["default"];
        Typography.Paragraph = _Paragraph["default"];
        var _default = Typography;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './Link': _req0,
        './Paragraph': _req1,
        './Text': _req2,
        './Title': _req3,
        './Typography': _req4
      }));
    }
  };
});
//# sourceMappingURL=4638237e1b867500117f3f6aca91d4af6970d1c3.js.map