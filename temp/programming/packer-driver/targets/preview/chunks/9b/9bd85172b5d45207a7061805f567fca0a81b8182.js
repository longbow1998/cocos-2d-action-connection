System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-picker/lib/generate/moment", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcPickerLibGenerateMoment) {
      _req0 = _rcPickerLibGenerateMoment.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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

        var _moment = _interopRequireDefault(require("rc-picker/lib/generate/moment"));

        var _generatePicker = _interopRequireDefault(require("./generatePicker"));

        var DatePicker = (0, _generatePicker["default"])(_moment["default"]);
        var _default = DatePicker;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-picker/lib/generate/moment': _req0,
        './generatePicker': _req1
      }));
    }
  };
});
//# sourceMappingURL=9bd85172b5d45207a7061805f567fca0a81b8182.js.map