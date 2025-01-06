System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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

        var _Header = _interopRequireDefault(require("../Header"));

        var _PanelContext = _interopRequireDefault(require("../../PanelContext"));

        var _dateUtil = require("../../utils/dateUtil");

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

        function DateHeader(props) {
          var prefixCls = props.prefixCls,
              generateConfig = props.generateConfig,
              locale = props.locale,
              viewDate = props.viewDate,
              onNextMonth = props.onNextMonth,
              onPrevMonth = props.onPrevMonth,
              onNextYear = props.onNextYear,
              onPrevYear = props.onPrevYear,
              onYearClick = props.onYearClick,
              onMonthClick = props.onMonthClick;

          var _React$useContext = React.useContext(_PanelContext.default),
              hideHeader = _React$useContext.hideHeader;

          if (hideHeader) {
            return null;
          }

          var headerPrefixCls = "".concat(prefixCls, "-header");
          var monthsLocale = locale.shortMonths || (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
          var month = generateConfig.getMonth(viewDate); // =================== Month & Year ===================

          var yearNode = /*#__PURE__*/React.createElement("button", {
            type: "button",
            key: "year",
            onClick: onYearClick,
            tabIndex: -1,
            className: "".concat(prefixCls, "-year-btn")
          }, (0, _dateUtil.formatValue)(viewDate, {
            locale: locale,
            format: locale.yearFormat,
            generateConfig: generateConfig
          }));
          var monthNode = /*#__PURE__*/React.createElement("button", {
            type: "button",
            key: "month",
            onClick: onMonthClick,
            tabIndex: -1,
            className: "".concat(prefixCls, "-month-btn")
          }, locale.monthFormat ? (0, _dateUtil.formatValue)(viewDate, {
            locale: locale,
            format: locale.monthFormat,
            generateConfig: generateConfig
          }) : monthsLocale[month]);
          var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
          return /*#__PURE__*/React.createElement(_Header.default, (0, _extends2.default)({}, props, {
            prefixCls: headerPrefixCls,
            onSuperPrev: onPrevYear,
            onPrev: onPrevMonth,
            onNext: onNextMonth,
            onSuperNext: onNextYear
          }), monthYearNodes);
        }

        var _default = DateHeader;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../Header': _req3,
        '../../PanelContext': _req4,
        '../../utils/dateUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=f6be070fef57f6378b917a93c8705cb91454685f.js.map