System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _PresetStatusColorTypes, _PresetColorTypes, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.PresetStatusColorTypes = exports.PresetColorTypes = void 0;

        var _type = require("./type");

        var PresetStatusColorTypes = (0, _type.tuple)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

        exports.PresetStatusColorTypes = PresetStatusColorTypes;
        var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
        exports.PresetColorTypes = PresetColorTypes; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _PresetStatusColorTypes = module.exports.PresetStatusColorTypes;
        _PresetColorTypes = module.exports.PresetColorTypes;
      }, () => ({
        './type': _req
      }));
    }
  };
});
//# sourceMappingURL=90d1a5f404011068d787da20b96b0b7287fc38a4.js.map