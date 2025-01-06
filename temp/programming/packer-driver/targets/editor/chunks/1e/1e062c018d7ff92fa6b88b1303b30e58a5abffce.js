System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getLastDay, _getLowerBoundTime, _setDateTime, _setTime, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getLastDay = getLastDay;
        exports.getLowerBoundTime = getLowerBoundTime;
        exports.setDateTime = setDateTime;
        exports.setTime = setTime;

        function setTime(generateConfig, date, hour, minute, second) {
          var nextTime = generateConfig.setHour(date, hour);
          nextTime = generateConfig.setMinute(nextTime, minute);
          nextTime = generateConfig.setSecond(nextTime, second);
          return nextTime;
        }

        function setDateTime(generateConfig, date, defaultDate) {
          if (!defaultDate) {
            return date;
          }

          var newDate = date;
          newDate = generateConfig.setHour(newDate, generateConfig.getHour(defaultDate));
          newDate = generateConfig.setMinute(newDate, generateConfig.getMinute(defaultDate));
          newDate = generateConfig.setSecond(newDate, generateConfig.getSecond(defaultDate));
          return newDate;
        }

        function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
          var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;

          if (lowerBoundHour < hour) {
            return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
          }

          var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;

          if (lowerBoundMinute < minute) {
            return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
          }

          var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
          return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
        }

        function getLastDay(generateConfig, date) {
          var year = generateConfig.getYear(date);
          var month = generateConfig.getMonth(date) + 1;
          var endDate = generateConfig.getEndDate(generateConfig.getFixedDate("".concat(year, "-").concat(month, "-01")));
          var lastDay = generateConfig.getDate(endDate);
          var monthShow = month < 10 ? "0".concat(month) : "".concat(month);
          return "".concat(year, "-").concat(monthShow, "-").concat(lastDay);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getLastDay = module.exports.getLastDay;
        _getLowerBoundTime = module.exports.getLowerBoundTime;
        _setDateTime = module.exports.setDateTime;
        _setTime = module.exports.setTime;
      }, {});
    }
  };
});
//# sourceMappingURL=1e062c018d7ff92fa6b88b1303b30e58a5abffce.js.map