System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "classnames", "lodash/padStart", "rc-picker", "rc-util/lib/hooks/useMergedState", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_lodashPadStart) {
      _req5 = _lodashPadStart.__cjsMetaURL;
    }, function (_rcPicker2) {
      _req6 = _rcPicker2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req7 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _padStart = _interopRequireDefault(require("lodash/padStart"));

        var _rcPicker = require("rc-picker");

        var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _Header = _interopRequireDefault(require("./Header"));

        var _en_US = _interopRequireDefault(require("./locale/en_US"));

        function generateCalendar(generateConfig) {
          function isSameYear(date1, date2) {
            return date1 && date2 && generateConfig.getYear(date1) === generateConfig.getYear(date2);
          }

          function isSameMonth(date1, date2) {
            return isSameYear(date1, date2) && generateConfig.getMonth(date1) === generateConfig.getMonth(date2);
          }

          function isSameDate(date1, date2) {
            return isSameMonth(date1, date2) && generateConfig.getDate(date1) === generateConfig.getDate(date2);
          }

          var Calendar = function Calendar(props) {
            var customizePrefixCls = props.prefixCls,
                className = props.className,
                style = props.style,
                dateFullCellRender = props.dateFullCellRender,
                dateCellRender = props.dateCellRender,
                monthFullCellRender = props.monthFullCellRender,
                monthCellRender = props.monthCellRender,
                headerRender = props.headerRender,
                value = props.value,
                defaultValue = props.defaultValue,
                disabledDate = props.disabledDate,
                mode = props.mode,
                validRange = props.validRange,
                _props$fullscreen = props.fullscreen,
                fullscreen = _props$fullscreen === void 0 ? true : _props$fullscreen,
                onChange = props.onChange,
                onPanelChange = props.onPanelChange,
                onSelect = props.onSelect;

            var _React$useContext = React.useContext(_configProvider.ConfigContext),
                getPrefixCls = _React$useContext.getPrefixCls,
                direction = _React$useContext.direction;

            var prefixCls = getPrefixCls('picker', customizePrefixCls);
            var calendarPrefixCls = "".concat(prefixCls, "-calendar");
            var today = generateConfig.getNow(); // ====================== State =======================
            // Value

            var _useMergedState = (0, _useMergedState5["default"])(function () {
              return value || generateConfig.getNow();
            }, {
              defaultValue: defaultValue,
              value: value
            }),
                _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
                mergedValue = _useMergedState2[0],
                setMergedValue = _useMergedState2[1]; // Mode


            var _useMergedState3 = (0, _useMergedState5["default"])('month', {
              value: mode
            }),
                _useMergedState4 = (0, _slicedToArray2["default"])(_useMergedState3, 2),
                mergedMode = _useMergedState4[0],
                setMergedMode = _useMergedState4[1];

            var panelMode = React.useMemo(function () {
              return mergedMode === 'year' ? 'month' : 'date';
            }, [mergedMode]); // Disabled Date

            var mergedDisabledDate = React.useCallback(function (date) {
              var notInRange = validRange ? generateConfig.isAfter(validRange[0], date) || generateConfig.isAfter(date, validRange[1]) : false;
              return notInRange || !!(disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date));
            }, [disabledDate, validRange]); // ====================== Events ======================

            var triggerPanelChange = function triggerPanelChange(date, newMode) {
              onPanelChange === null || onPanelChange === void 0 ? void 0 : onPanelChange(date, newMode);
            };

            var triggerChange = function triggerChange(date) {
              setMergedValue(date);

              if (!isSameDate(date, mergedValue)) {
                // Trigger when month panel switch month
                if (panelMode === 'date' && !isSameMonth(date, mergedValue) || panelMode === 'month' && !isSameYear(date, mergedValue)) {
                  triggerPanelChange(date, mergedMode);
                }

                onChange === null || onChange === void 0 ? void 0 : onChange(date);
              }
            };

            var triggerModeChange = function triggerModeChange(newMode) {
              setMergedMode(newMode);
              triggerPanelChange(mergedValue, newMode);
            };

            var onInternalSelect = function onInternalSelect(date) {
              triggerChange(date);
              onSelect === null || onSelect === void 0 ? void 0 : onSelect(date);
            }; // ====================== Locale ======================


            var getDefaultLocale = function getDefaultLocale() {
              var locale = props.locale;
              var result = (0, _extends2["default"])((0, _extends2["default"])({}, _en_US["default"]), locale);
              result.lang = (0, _extends2["default"])((0, _extends2["default"])({}, result.lang), (locale || {}).lang);
              return result;
            }; // ====================== Render ======================


            var dateRender = React.useCallback(function (date) {
              if (dateFullCellRender) {
                return dateFullCellRender(date);
              }

              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), (0, _defineProperty2["default"])({}, "".concat(calendarPrefixCls, "-date-today"), isSameDate(today, date)))
              }, /*#__PURE__*/React.createElement("div", {
                className: "".concat(calendarPrefixCls, "-date-value")
              }, (0, _padStart["default"])(String(generateConfig.getDate(date)), 2, '0')), /*#__PURE__*/React.createElement("div", {
                className: "".concat(calendarPrefixCls, "-date-content")
              }, dateCellRender && dateCellRender(date)));
            }, [dateFullCellRender, dateCellRender]);
            var monthRender = React.useCallback(function (date, locale) {
              if (monthFullCellRender) {
                return monthFullCellRender(date);
              }

              var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames["default"])("".concat(prefixCls, "-cell-inner"), "".concat(calendarPrefixCls, "-date"), (0, _defineProperty2["default"])({}, "".concat(calendarPrefixCls, "-date-today"), isSameMonth(today, date)))
              }, /*#__PURE__*/React.createElement("div", {
                className: "".concat(calendarPrefixCls, "-date-value")
              }, months[generateConfig.getMonth(date)]), /*#__PURE__*/React.createElement("div", {
                className: "".concat(calendarPrefixCls, "-date-content")
              }, monthCellRender && monthCellRender(date)));
            }, [monthFullCellRender, monthCellRender]);
            return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
              componentName: "Calendar",
              defaultLocale: getDefaultLocale
            }, function (contextLocale) {
              var _classNames3;

              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames["default"])(calendarPrefixCls, (_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(calendarPrefixCls, "-full"), fullscreen), (0, _defineProperty2["default"])(_classNames3, "".concat(calendarPrefixCls, "-mini"), !fullscreen), (0, _defineProperty2["default"])(_classNames3, "".concat(calendarPrefixCls, "-rtl"), direction === 'rtl'), _classNames3), className),
                style: style
              }, headerRender ? headerRender({
                value: mergedValue,
                type: mergedMode,
                onChange: onInternalSelect,
                onTypeChange: triggerModeChange
              }) : /*#__PURE__*/React.createElement(_Header["default"], {
                prefixCls: calendarPrefixCls,
                value: mergedValue,
                generateConfig: generateConfig,
                mode: mergedMode,
                fullscreen: fullscreen,
                locale: contextLocale.lang,
                validRange: validRange,
                onChange: onInternalSelect,
                onModeChange: triggerModeChange
              }), /*#__PURE__*/React.createElement(_rcPicker.PickerPanel, {
                value: mergedValue,
                prefixCls: prefixCls,
                locale: contextLocale.lang,
                generateConfig: generateConfig,
                dateRender: dateRender,
                monthCellRender: function monthCellRender(date) {
                  return monthRender(date, contextLocale.lang);
                },
                onSelect: onInternalSelect,
                mode: panelMode,
                picker: panelMode,
                disabledDate: mergedDisabledDate,
                hideHeader: true
              }));
            });
          };

          return Calendar;
        }

        var _default = generateCalendar;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'lodash/padStart': _req5,
        'rc-picker': _req6,
        'rc-util/lib/hooks/useMergedState': _req7,
        'react': _req8,
        '../config-provider': _req9,
        '../locale-provider/LocaleReceiver': _req10,
        './Header': _req11,
        './locale/en_US': _req12
      }));
    }
  };
});
//# sourceMappingURL=9d6c6929520bb0bf8b69b2f50e7e7b8ea5b10635.js.map