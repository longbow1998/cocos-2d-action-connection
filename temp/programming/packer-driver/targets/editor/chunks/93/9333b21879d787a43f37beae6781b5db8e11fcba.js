System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "moment", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_moment2) {
      _req0 = _moment2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req1 = _rcUtilLibWarning.__cjsMetaURL;
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
        exports.default = void 0;

        var _moment = _interopRequireDefault(require("moment"));

        var _warning = require("rc-util/lib/warning");

        var generateConfig = {
          // get
          getNow: function getNow() {
            return (0, _moment.default)();
          },
          getFixedDate: function getFixedDate(string) {
            return (0, _moment.default)(string, 'YYYY-MM-DD');
          },
          getEndDate: function getEndDate(date) {
            var clone = date.clone();
            return clone.endOf('month');
          },
          getWeekDay: function getWeekDay(date) {
            var clone = date.clone().locale('en_US');
            return clone.weekday() + clone.localeData().firstDayOfWeek();
          },
          getYear: function getYear(date) {
            return date.year();
          },
          getMonth: function getMonth(date) {
            return date.month();
          },
          getDate: function getDate(date) {
            return date.date();
          },
          getHour: function getHour(date) {
            return date.hour();
          },
          getMinute: function getMinute(date) {
            return date.minute();
          },
          getSecond: function getSecond(date) {
            return date.second();
          },
          // set
          addYear: function addYear(date, diff) {
            var clone = date.clone();
            return clone.add(diff, 'year');
          },
          addMonth: function addMonth(date, diff) {
            var clone = date.clone();
            return clone.add(diff, 'month');
          },
          addDate: function addDate(date, diff) {
            var clone = date.clone();
            return clone.add(diff, 'day');
          },
          setYear: function setYear(date, year) {
            var clone = date.clone();
            return clone.year(year);
          },
          setMonth: function setMonth(date, month) {
            var clone = date.clone();
            return clone.month(month);
          },
          setDate: function setDate(date, num) {
            var clone = date.clone();
            return clone.date(num);
          },
          setHour: function setHour(date, hour) {
            var clone = date.clone();
            return clone.hour(hour);
          },
          setMinute: function setMinute(date, minute) {
            var clone = date.clone();
            return clone.minute(minute);
          },
          setSecond: function setSecond(date, second) {
            var clone = date.clone();
            return clone.second(second);
          },
          // Compare
          isAfter: function isAfter(date1, date2) {
            return date1.isAfter(date2);
          },
          isValidate: function isValidate(date) {
            return date.isValid();
          },
          locale: {
            getWeekFirstDay: function getWeekFirstDay(locale) {
              var date = (0, _moment.default)().locale(locale);
              return date.localeData().firstDayOfWeek();
            },
            getWeekFirstDate: function getWeekFirstDate(locale, date) {
              var clone = date.clone();
              var result = clone.locale(locale);
              return result.weekday(0);
            },
            getWeek: function getWeek(locale, date) {
              var clone = date.clone();
              var result = clone.locale(locale);
              return result.week();
            },
            getShortWeekDays: function getShortWeekDays(locale) {
              var date = (0, _moment.default)().locale(locale);
              return date.localeData().weekdaysMin();
            },
            getShortMonths: function getShortMonths(locale) {
              var date = (0, _moment.default)().locale(locale);
              return date.localeData().monthsShort();
            },
            format: function format(locale, date, _format) {
              var clone = date.clone();
              var result = clone.locale(locale);
              return result.format(_format);
            },
            parse: function parse(locale, text, formats) {
              var fallbackFormatList = [];

              for (var i = 0; i < formats.length; i += 1) {
                var format = formats[i];
                var formatText = text;

                if (format.includes('wo') || format.includes('Wo')) {
                  format = format.replace(/wo/g, 'w').replace(/Wo/g, 'W');
                  var matchFormat = format.match(/[-YyMmDdHhSsWwGg]+/g);
                  var matchText = formatText.match(/[-\d]+/g);

                  if (matchFormat && matchText) {
                    format = matchFormat.join('');
                    formatText = matchText.join('');
                  } else {
                    fallbackFormatList.push(format.replace(/o/g, ''));
                  }
                }

                var date = (0, _moment.default)(formatText, format, locale, true);

                if (date.isValid()) {
                  return date;
                }
              } // Fallback to fuzzy matching, this should always not reach match or need fire a issue


              for (var _i = 0; _i < fallbackFormatList.length; _i += 1) {
                var _date = (0, _moment.default)(text, fallbackFormatList[_i], locale, false);
                /* istanbul ignore next */


                if (_date.isValid()) {
                  (0, _warning.noteOnce)(false, 'Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this.');
                  return _date;
                }
              }

              return null;
            }
          }
        };
        var _default = generateConfig;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'moment': _req0,
        'rc-util/lib/warning': _req1
      }));
    }
  };
});
//# sourceMappingURL=9333b21879d787a43f37beae6781b5db8e11fcba.js.map