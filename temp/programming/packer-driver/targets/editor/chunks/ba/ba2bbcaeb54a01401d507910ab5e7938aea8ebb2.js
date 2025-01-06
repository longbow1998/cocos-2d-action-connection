System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req6 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _dateUtil = require("../../utils/dateUtil");

        var _RangeContext = _interopRequireDefault(require("../../RangeContext"));

        var _useCellClassName = _interopRequireDefault(require("../../hooks/useCellClassName"));

        var _PanelBody = _interopRequireDefault(require("../PanelBody"));

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

        function DateBody(props) {
          var prefixCls = props.prefixCls,
              generateConfig = props.generateConfig,
              prefixColumn = props.prefixColumn,
              locale = props.locale,
              rowCount = props.rowCount,
              viewDate = props.viewDate,
              value = props.value,
              dateRender = props.dateRender;

          var _React$useContext = React.useContext(_RangeContext.default),
              rangedValue = _React$useContext.rangedValue,
              hoverRangedValue = _React$useContext.hoverRangedValue;

          var baseDate = (0, _dateUtil.getWeekStartDate)(locale.locale, generateConfig, viewDate);
          var cellPrefixCls = "".concat(prefixCls, "-cell");
          var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
          var today = generateConfig.getNow(); // ============================== Header ==============================

          var headerCells = [];
          var weekDaysLocale = locale.shortWeekDays || (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);

          if (prefixColumn) {
            headerCells.push( /*#__PURE__*/React.createElement("th", {
              key: "empty",
              "aria-label": "empty cell"
            }));
          }

          for (var i = 0; i < _dateUtil.WEEK_DAY_COUNT; i += 1) {
            headerCells.push( /*#__PURE__*/React.createElement("th", {
              key: i
            }, weekDaysLocale[(i + weekFirstDay) % _dateUtil.WEEK_DAY_COUNT]));
          } // =============================== Body ===============================


          var getCellClassName = (0, _useCellClassName.default)({
            cellPrefixCls: cellPrefixCls,
            today: today,
            value: value,
            generateConfig: generateConfig,
            rangedValue: prefixColumn ? null : rangedValue,
            hoverRangedValue: prefixColumn ? null : hoverRangedValue,
            isSameCell: function isSameCell(current, target) {
              return (0, _dateUtil.isSameDate)(generateConfig, current, target);
            },
            isInView: function isInView(date) {
              return (0, _dateUtil.isSameMonth)(generateConfig, date, viewDate);
            },
            offsetCell: function offsetCell(date, offset) {
              return generateConfig.addDate(date, offset);
            }
          });
          var getCellNode = dateRender ? function (date) {
            return dateRender(date, today);
          } : undefined;
          return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
            rowNum: rowCount,
            colNum: _dateUtil.WEEK_DAY_COUNT,
            baseDate: baseDate,
            getCellNode: getCellNode,
            getCellText: generateConfig.getDate,
            getCellClassName: getCellClassName,
            getCellDate: generateConfig.addDate,
            titleCell: function titleCell(date) {
              return (0, _dateUtil.formatValue)(date, {
                locale: locale,
                format: 'YYYY-MM-DD',
                generateConfig: generateConfig
              });
            },
            headerCells: headerCells
          }));
        }

        var _default = DateBody;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../../utils/dateUtil': _req3,
        '../../RangeContext': _req4,
        '../../hooks/useCellClassName': _req5,
        '../PanelBody': _req6
      }));
    }
  };
});
//# sourceMappingURL=ba2bbcaeb54a01401d507910ab5e7938aea8ebb2.js.map