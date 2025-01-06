System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-picker/lib/locale/en_US", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_rcPickerLibLocaleEn_US) {
      _req1 = _rcPickerLibLocaleEn_US.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _en_US = _interopRequireDefault(require("rc-picker/lib/locale/en_US"));

        var _en_US2 = _interopRequireDefault(require("../../time-picker/locale/en_US")); // Merge into a locale object


        var locale = {
          lang: (0, _extends2["default"])({
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week']
          }, _en_US["default"]),
          timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
        }; // All settings at:
        // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

        var _default = locale;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        'rc-picker/lib/locale/en_US': _req1,
        '../../time-picker/locale/en_US': _req2
      }));
    }
  };
});
//# sourceMappingURL=fd0e67bc2b3cc3695ac537b32ef0c683f8291c4a.js.map