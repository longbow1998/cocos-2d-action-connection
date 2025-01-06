System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, _Components, _getTimeProps, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req4 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req5 = _unresolved_6.__cjsMetaURL;
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
        exports["default"] = exports.Components = void 0;
        exports.getTimeProps = getTimeProps;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _type = require("../../_util/type");

        var _PickerButton = _interopRequireDefault(require("../PickerButton"));

        var _PickerTag = _interopRequireDefault(require("../PickerTag"));

        var _generateRangePicker = _interopRequireDefault(require("./generateRangePicker"));

        var _generateSinglePicker2 = _interopRequireDefault(require("./generateSinglePicker"));

        var Components = {
          button: _PickerButton["default"],
          rangeItem: _PickerTag["default"]
        };
        exports.Components = Components;

        function toArray(list) {
          if (!list) {
            return [];
          }

          return Array.isArray(list) ? list : [list];
        }

        function getTimeProps(props) {
          var format = props.format,
              picker = props.picker,
              showHour = props.showHour,
              showMinute = props.showMinute,
              showSecond = props.showSecond,
              use12Hours = props.use12Hours;
          var firstFormat = toArray(format)[0];
          var showTimeObj = (0, _extends2["default"])({}, props);

          if (firstFormat && typeof firstFormat === 'string') {
            if (!firstFormat.includes('s') && showSecond === undefined) {
              showTimeObj.showSecond = false;
            }

            if (!firstFormat.includes('m') && showMinute === undefined) {
              showTimeObj.showMinute = false;
            }

            if (!firstFormat.includes('H') && !firstFormat.includes('h') && showHour === undefined) {
              showTimeObj.showHour = false;
            }

            if ((firstFormat.includes('a') || firstFormat.includes('A')) && use12Hours === undefined) {
              showTimeObj.use12Hours = true;
            }
          }

          if (picker === 'time') {
            return showTimeObj;
          }

          if (typeof firstFormat === 'function') {
            // format of showTime should use default when format is custom format function
            delete showTimeObj.format;
          }

          return {
            showTime: showTimeObj
          };
        }

        var DataPickerPlacements = (0, _type.tuple)('bottomLeft', 'bottomRight', 'topLeft', 'topRight');

        function generatePicker(generateConfig) {
          // =========================== Picker ===========================
          var _generateSinglePicker = (0, _generateSinglePicker2["default"])(generateConfig),
              DatePicker = _generateSinglePicker.DatePicker,
              WeekPicker = _generateSinglePicker.WeekPicker,
              MonthPicker = _generateSinglePicker.MonthPicker,
              YearPicker = _generateSinglePicker.YearPicker,
              TimePicker = _generateSinglePicker.TimePicker,
              QuarterPicker = _generateSinglePicker.QuarterPicker; // ======================== Range Picker ========================


          var RangePicker = (0, _generateRangePicker["default"])(generateConfig);
          var MergedDatePicker = DatePicker;
          MergedDatePicker.WeekPicker = WeekPicker;
          MergedDatePicker.MonthPicker = MonthPicker;
          MergedDatePicker.YearPicker = YearPicker;
          MergedDatePicker.RangePicker = RangePicker;
          MergedDatePicker.TimePicker = TimePicker;
          MergedDatePicker.QuarterPicker = QuarterPicker;
          return MergedDatePicker;
        }

        var _default = generatePicker;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _Components = module.exports.Components;
        _getTimeProps = module.exports.getTimeProps;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '../../_util/type': _req1,
        '../PickerButton': _req2,
        '../PickerTag': _req3,
        './generateRangePicker': _req4,
        './generateSinglePicker': _req5
      }));
    }
  };
});
//# sourceMappingURL=6c62985c2ec0d6e08667d7350cb61b7746660684.js.map