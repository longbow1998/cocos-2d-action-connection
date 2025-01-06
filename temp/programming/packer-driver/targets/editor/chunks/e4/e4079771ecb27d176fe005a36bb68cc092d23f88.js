System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _WEEK_DAY_COUNT, _formatValue, _getCellDateDisabled, _getClosingViewDate, _getQuarter, _getWeekStartDate, _isEqual, _isInRange, _isNullEqual, _isSameDate, _isSameDecade, _isSameMonth, _isSameQuarter, _isSameTime, _isSameWeek, _isSameYear, _parseValue, __cjsMetaURL;

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
        exports.WEEK_DAY_COUNT = void 0;
        exports.formatValue = formatValue;
        exports.getCellDateDisabled = getCellDateDisabled;
        exports.getClosingViewDate = getClosingViewDate;
        exports.getQuarter = getQuarter;
        exports.getWeekStartDate = getWeekStartDate;
        exports.isEqual = isEqual;
        exports.isInRange = isInRange;
        exports.isNullEqual = isNullEqual;
        exports.isSameDate = isSameDate;
        exports.isSameDecade = isSameDecade;
        exports.isSameMonth = isSameMonth;
        exports.isSameQuarter = isSameQuarter;
        exports.isSameTime = isSameTime;
        exports.isSameWeek = isSameWeek;
        exports.isSameYear = isSameYear;
        exports.parseValue = parseValue;

        var _index = require("../panels/DecadePanel/index");

        var WEEK_DAY_COUNT = 7;
        exports.WEEK_DAY_COUNT = WEEK_DAY_COUNT;

        function isNullEqual(value1, value2) {
          if (!value1 && !value2) {
            return true;
          }

          if (!value1 || !value2) {
            return false;
          }

          return undefined;
        }

        function isSameDecade(generateConfig, decade1, decade2) {
          var equal = isNullEqual(decade1, decade2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          var num1 = Math.floor(generateConfig.getYear(decade1) / 10);
          var num2 = Math.floor(generateConfig.getYear(decade2) / 10);
          return num1 === num2;
        }

        function isSameYear(generateConfig, year1, year2) {
          var equal = isNullEqual(year1, year2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return generateConfig.getYear(year1) === generateConfig.getYear(year2);
        }

        function getQuarter(generateConfig, date) {
          var quota = Math.floor(generateConfig.getMonth(date) / 3);
          return quota + 1;
        }

        function isSameQuarter(generateConfig, quarter1, quarter2) {
          var equal = isNullEqual(quarter1, quarter2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return isSameYear(generateConfig, quarter1, quarter2) && getQuarter(generateConfig, quarter1) === getQuarter(generateConfig, quarter2);
        }

        function isSameMonth(generateConfig, month1, month2) {
          var equal = isNullEqual(month1, month2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return isSameYear(generateConfig, month1, month2) && generateConfig.getMonth(month1) === generateConfig.getMonth(month2);
        }

        function isSameDate(generateConfig, date1, date2) {
          var equal = isNullEqual(date1, date2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return generateConfig.getYear(date1) === generateConfig.getYear(date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
        }

        function isSameTime(generateConfig, time1, time2) {
          var equal = isNullEqual(time1, time2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return generateConfig.getHour(time1) === generateConfig.getHour(time2) && generateConfig.getMinute(time1) === generateConfig.getMinute(time2) && generateConfig.getSecond(time1) === generateConfig.getSecond(time2);
        }

        function isSameWeek(generateConfig, locale, date1, date2) {
          var equal = isNullEqual(date1, date2);

          if (typeof equal === 'boolean') {
            return equal;
          }

          return generateConfig.locale.getWeek(locale, date1) === generateConfig.locale.getWeek(locale, date2);
        }

        function isEqual(generateConfig, value1, value2) {
          return isSameDate(generateConfig, value1, value2) && isSameTime(generateConfig, value1, value2);
        }
        /** Between in date but not equal of date */


        function isInRange(generateConfig, startDate, endDate, current) {
          if (!startDate || !endDate || !current) {
            return false;
          }

          return !isSameDate(generateConfig, startDate, current) && !isSameDate(generateConfig, endDate, current) && generateConfig.isAfter(current, startDate) && generateConfig.isAfter(endDate, current);
        }

        function getWeekStartDate(locale, generateConfig, value) {
          var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
          var monthStartDate = generateConfig.setDate(value, 1);
          var startDateWeekDay = generateConfig.getWeekDay(monthStartDate);
          var alignStartDate = generateConfig.addDate(monthStartDate, weekFirstDay - startDateWeekDay);

          if (generateConfig.getMonth(alignStartDate) === generateConfig.getMonth(value) && generateConfig.getDate(alignStartDate) > 1) {
            alignStartDate = generateConfig.addDate(alignStartDate, -7);
          }

          return alignStartDate;
        }

        function getClosingViewDate(viewDate, picker, generateConfig) {
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

          switch (picker) {
            case 'year':
              return generateConfig.addYear(viewDate, offset * 10);

            case 'quarter':
            case 'month':
              return generateConfig.addYear(viewDate, offset);

            default:
              return generateConfig.addMonth(viewDate, offset);
          }
        }

        function formatValue(value, _ref) {
          var generateConfig = _ref.generateConfig,
              locale = _ref.locale,
              format = _ref.format;
          return typeof format === 'function' ? format(value) : generateConfig.locale.format(locale.locale, value, format);
        }

        function parseValue(value, _ref2) {
          var generateConfig = _ref2.generateConfig,
              locale = _ref2.locale,
              formatList = _ref2.formatList;

          if (!value || typeof formatList[0] === 'function') {
            return null;
          }

          return generateConfig.locale.parse(locale.locale, value, formatList);
        } // eslint-disable-next-line consistent-return


        function getCellDateDisabled(_ref3) {
          var cellDate = _ref3.cellDate,
              mode = _ref3.mode,
              disabledDate = _ref3.disabledDate,
              generateConfig = _ref3.generateConfig;
          if (!disabledDate) return false; // Whether cellDate is disabled in range

          var getDisabledFromRange = function getDisabledFromRange(currentMode, start, end) {
            var current = start;

            while (current <= end) {
              var date = void 0;

              switch (currentMode) {
                case 'date':
                  {
                    date = generateConfig.setDate(cellDate, current);

                    if (!disabledDate(date)) {
                      return false;
                    }

                    break;
                  }

                case 'month':
                  {
                    date = generateConfig.setMonth(cellDate, current);

                    if (!getCellDateDisabled({
                      cellDate: date,
                      mode: 'month',
                      generateConfig: generateConfig,
                      disabledDate: disabledDate
                    })) {
                      return false;
                    }

                    break;
                  }

                case 'year':
                  {
                    date = generateConfig.setYear(cellDate, current);

                    if (!getCellDateDisabled({
                      cellDate: date,
                      mode: 'year',
                      generateConfig: generateConfig,
                      disabledDate: disabledDate
                    })) {
                      return false;
                    }

                    break;
                  }
              }

              current += 1;
            }

            return true;
          };

          switch (mode) {
            case 'date':
            case 'week':
              {
                return disabledDate(cellDate);
              }

            case 'month':
              {
                var startDate = 1;
                var endDate = generateConfig.getDate(generateConfig.getEndDate(cellDate));
                return getDisabledFromRange('date', startDate, endDate);
              }

            case 'quarter':
              {
                var startMonth = Math.floor(generateConfig.getMonth(cellDate) / 3) * 3;
                var endMonth = startMonth + 2;
                return getDisabledFromRange('month', startMonth, endMonth);
              }

            case 'year':
              {
                return getDisabledFromRange('month', 0, 11);
              }

            case 'decade':
              {
                var year = generateConfig.getYear(cellDate);

                var startYear = Math.floor(year / _index.DECADE_UNIT_DIFF) * _index.DECADE_UNIT_DIFF;

                var endYear = startYear + _index.DECADE_UNIT_DIFF - 1;
                return getDisabledFromRange('year', startYear, endYear);
              }
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _WEEK_DAY_COUNT = module.exports.WEEK_DAY_COUNT;
        _formatValue = module.exports.formatValue;
        _getCellDateDisabled = module.exports.getCellDateDisabled;
        _getClosingViewDate = module.exports.getClosingViewDate;
        _getQuarter = module.exports.getQuarter;
        _getWeekStartDate = module.exports.getWeekStartDate;
        _isEqual = module.exports.isEqual;
        _isInRange = module.exports.isInRange;
        _isNullEqual = module.exports.isNullEqual;
        _isSameDate = module.exports.isSameDate;
        _isSameDecade = module.exports.isSameDecade;
        _isSameMonth = module.exports.isSameMonth;
        _isSameQuarter = module.exports.isSameQuarter;
        _isSameTime = module.exports.isSameTime;
        _isSameWeek = module.exports.isSameWeek;
        _isSameYear = module.exports.isSameYear;
        _parseValue = module.exports.parseValue;
      }, () => ({
        '../panels/DecadePanel/index': _req
      }));
    }
  };
});
//# sourceMappingURL=e4079771ecb27d176fe005a36bb68cc092d23f88.js.map