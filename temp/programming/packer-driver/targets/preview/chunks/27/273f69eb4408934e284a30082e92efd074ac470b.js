System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/KeyCode"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _isValidateOpenKey, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req0 = _rcUtilLibKeyCode.__cjsMetaURL;
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
        exports.isValidateOpenKey = isValidateOpenKey;

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));
        /** keyCode Judgment function */


        function isValidateOpenKey(currentKeyCode) {
          return ![// System function button
          _KeyCode.default.ESC, _KeyCode.default.SHIFT, _KeyCode.default.BACKSPACE, _KeyCode.default.TAB, _KeyCode.default.WIN_KEY, _KeyCode.default.ALT, _KeyCode.default.META, _KeyCode.default.WIN_KEY_RIGHT, _KeyCode.default.CTRL, _KeyCode.default.SEMICOLON, _KeyCode.default.EQUALS, _KeyCode.default.CAPS_LOCK, _KeyCode.default.CONTEXT_MENU, // F1-F12
          _KeyCode.default.F1, _KeyCode.default.F2, _KeyCode.default.F3, _KeyCode.default.F4, _KeyCode.default.F5, _KeyCode.default.F6, _KeyCode.default.F7, _KeyCode.default.F8, _KeyCode.default.F9, _KeyCode.default.F10, _KeyCode.default.F11, _KeyCode.default.F12].includes(currentKeyCode);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isValidateOpenKey = module.exports.isValidateOpenKey;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/KeyCode': _req0
      }));
    }
  };
});
//# sourceMappingURL=273f69eb4408934e284a30082e92efd074ac470b.js.map