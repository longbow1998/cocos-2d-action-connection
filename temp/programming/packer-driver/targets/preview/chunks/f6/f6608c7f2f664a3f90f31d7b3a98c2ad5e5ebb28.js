System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _getSuccessPercent, _validProgress, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
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
        exports.getSuccessPercent = getSuccessPercent;
        exports.validProgress = validProgress;

        var _warning = _interopRequireDefault(require("../_util/warning"));

        function validProgress(progress) {
          if (!progress || progress < 0) {
            return 0;
          }

          if (progress > 100) {
            return 100;
          }

          return progress;
        }

        function getSuccessPercent(_ref) {
          var success = _ref.success,
              successPercent = _ref.successPercent;
          var percent = successPercent;
          /** @deprecated Use `percent` instead */

          if (success && 'progress' in success) {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.') : void 0;
            percent = success.progress;
          }

          if (success && 'percent' in success) {
            percent = success.percent;
          }

          return percent;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getSuccessPercent = module.exports.getSuccessPercent;
        _validProgress = module.exports.validProgress;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '../_util/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=f6608c7f2f664a3f90f31d7b3a98c2ad5e5ebb28.js.map