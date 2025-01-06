System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _parseWidthHeight, _warnCheck, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req0 = _rcUtilLibWarning.__cjsMetaURL;
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
        exports.parseWidthHeight = parseWidthHeight;
        exports.warnCheck = warnCheck;

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        function parseWidthHeight(value) {
          if (typeof value === 'string' && String(Number(value)) === value) {
            (0, _warning.default)(false, 'Invalid value type of `width` or `height` which should be number type instead.');
            return Number(value);
          }

          return value;
        }

        function warnCheck(props) {
          (0, _warning.default)(!('wrapperClassName' in props), "'wrapperClassName' is removed. Please use 'rootClassName' instead.");
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _parseWidthHeight = module.exports.parseWidthHeight;
        _warnCheck = module.exports.warnCheck;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=ca3cb917a473e9ebc42bcfdcf21a8cd2fbd1ddae.js.map