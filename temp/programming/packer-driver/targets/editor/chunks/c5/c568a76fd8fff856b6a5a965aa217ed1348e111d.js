System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _isPresetColor, __cjsMetaURL;

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
        exports.isPresetColor = isPresetColor;

        var _colors = require("../_util/colors"); // eslint-disable-next-line import/prefer-default-export


        function isPresetColor(color) {
          return _colors.PresetColorTypes.includes(color);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isPresetColor = module.exports.isPresetColor;
      }, () => ({
        '../_util/colors': _req
      }));
    }
  };
});
//# sourceMappingURL=c568a76fd8fff856b6a5a965aa217ed1348e111d.js.map