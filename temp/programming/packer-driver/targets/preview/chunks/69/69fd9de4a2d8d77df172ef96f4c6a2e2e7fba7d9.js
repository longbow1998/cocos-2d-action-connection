System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useRangeDisabled;

        var React = _interopRequireWildcard(require("react"));

        var _miscUtil = require("../utils/miscUtil");

        var _dateUtil = require("../utils/dateUtil");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        function useRangeDisabled(_ref, disabledStart, disabledEnd) {
          var picker = _ref.picker,
              locale = _ref.locale,
              selectedValue = _ref.selectedValue,
              disabledDate = _ref.disabledDate,
              disabled = _ref.disabled,
              generateConfig = _ref.generateConfig;
          var startDate = (0, _miscUtil.getValue)(selectedValue, 0);
          var endDate = (0, _miscUtil.getValue)(selectedValue, 1);

          function weekFirstDate(date) {
            return generateConfig.locale.getWeekFirstDate(locale.locale, date);
          }

          function monthNumber(date) {
            var year = generateConfig.getYear(date);
            var month = generateConfig.getMonth(date);
            return year * 100 + month;
          }

          function quarterNumber(date) {
            var year = generateConfig.getYear(date);
            var quarter = (0, _dateUtil.getQuarter)(generateConfig, date);
            return year * 10 + quarter;
          }

          var disabledStartDate = React.useCallback(function (date) {
            if (disabledDate && disabledDate(date)) {
              return true;
            } // Disabled range


            if (disabled[1] && endDate) {
              return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
            } // Disabled part


            if (disabledStart && endDate) {
              switch (picker) {
                case 'quarter':
                  return quarterNumber(date) > quarterNumber(endDate);

                case 'month':
                  return monthNumber(date) > monthNumber(endDate);

                case 'week':
                  return weekFirstDate(date) > weekFirstDate(endDate);

                default:
                  return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
              }
            }

            return false;
          }, [disabledDate, disabled[1], endDate, disabledStart]);
          var disabledEndDate = React.useCallback(function (date) {
            if (disabledDate && disabledDate(date)) {
              return true;
            } // Disabled range


            if (disabled[0] && startDate) {
              return !(0, _dateUtil.isSameDate)(generateConfig, date, endDate) && generateConfig.isAfter(startDate, date);
            } // Disabled part


            if (disabledEnd && startDate) {
              switch (picker) {
                case 'quarter':
                  return quarterNumber(date) < quarterNumber(startDate);

                case 'month':
                  return monthNumber(date) < monthNumber(startDate);

                case 'week':
                  return weekFirstDate(date) < weekFirstDate(startDate);

                default:
                  return !(0, _dateUtil.isSameDate)(generateConfig, date, startDate) && generateConfig.isAfter(startDate, date);
              }
            }

            return false;
          }, [disabledDate, disabled[0], startDate, disabledEnd]);
          return [disabledStartDate, disabledEndDate];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0,
        '../utils/miscUtil': _req1,
        '../utils/dateUtil': _req2
      }));
    }
  };
});
//# sourceMappingURL=69fd9de4a2d8d77df172ef96f4c6a2e2e7fba7d9.js.map