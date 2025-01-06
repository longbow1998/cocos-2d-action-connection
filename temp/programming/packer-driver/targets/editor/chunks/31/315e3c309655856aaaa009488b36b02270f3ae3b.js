System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _legacyPropsWarning, __cjsMetaURL;

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
        exports.legacyPropsWarning = legacyPropsWarning;

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        function legacyPropsWarning(props) {
          var picker = props.picker,
              disabledHours = props.disabledHours,
              disabledMinutes = props.disabledMinutes,
              disabledSeconds = props.disabledSeconds;

          if (picker === 'time' && (disabledHours || disabledMinutes || disabledSeconds)) {
            (0, _warning.default)(false, "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead.");
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _legacyPropsWarning = module.exports.legacyPropsWarning;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=315e3c309655856aaaa009488b36b02270f3ae3b.js.map