System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, _MONTH_COL_COUNT, __cjsMetaURL;

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
        exports.default = exports.MONTH_COL_COUNT = void 0;

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

        var MONTH_COL_COUNT = 3;
        exports.MONTH_COL_COUNT = MONTH_COL_COUNT;
        var MONTH_ROW_COUNT = 4;

        function MonthBody(props) {
          var prefixCls = props.prefixCls,
              locale = props.locale,
              value = props.value,
              viewDate = props.viewDate,
              generateConfig = props.generateConfig,
              monthCellRender = props.monthCellRender;

          var _React$useContext = React.useContext(_RangeContext.default),
              rangedValue = _React$useContext.rangedValue,
              hoverRangedValue = _React$useContext.hoverRangedValue;

          var cellPrefixCls = "".concat(prefixCls, "-cell");
          var getCellClassName = (0, _useCellClassName.default)({
            cellPrefixCls: cellPrefixCls,
            value: value,
            generateConfig: generateConfig,
            rangedValue: rangedValue,
            hoverRangedValue: hoverRangedValue,
            isSameCell: function isSameCell(current, target) {
              return (0, _dateUtil.isSameMonth)(generateConfig, current, target);
            },
            isInView: function isInView() {
              return true;
            },
            offsetCell: function offsetCell(date, offset) {
              return generateConfig.addMonth(date, offset);
            }
          });
          var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
          var baseMonth = generateConfig.setMonth(viewDate, 0);
          var getCellNode = monthCellRender ? function (date) {
            return monthCellRender(date, locale);
          } : undefined;
          return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
            rowNum: MONTH_ROW_COUNT,
            colNum: MONTH_COL_COUNT,
            baseDate: baseMonth,
            getCellNode: getCellNode,
            getCellText: function getCellText(date) {
              return locale.monthFormat ? (0, _dateUtil.formatValue)(date, {
                locale: locale,
                format: locale.monthFormat,
                generateConfig: generateConfig
              }) : monthsLocale[generateConfig.getMonth(date)];
            },
            getCellClassName: getCellClassName,
            getCellDate: generateConfig.addMonth,
            titleCell: function titleCell(date) {
              return (0, _dateUtil.formatValue)(date, {
                locale: locale,
                format: 'YYYY-MM',
                generateConfig: generateConfig
              });
            }
          }));
        }

        var _default = MonthBody;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _MONTH_COL_COUNT = module.exports.MONTH_COL_COUNT;
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
//# sourceMappingURL=9759050d1638f141b0ccc27e7ffd49a3a179f286.js.map