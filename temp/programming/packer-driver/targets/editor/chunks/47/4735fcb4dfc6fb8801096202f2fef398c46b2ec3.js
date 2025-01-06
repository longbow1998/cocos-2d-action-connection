System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req6 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _context = require("../form/context");

        var _radio = require("../radio");

        var _select = _interopRequireDefault(require("../select"));

        var YearSelectOffset = 10;
        var YearSelectTotal = 20;

        function YearSelect(props) {
          var fullscreen = props.fullscreen,
              validRange = props.validRange,
              generateConfig = props.generateConfig,
              locale = props.locale,
              prefixCls = props.prefixCls,
              value = props.value,
              _onChange = props.onChange,
              divRef = props.divRef;
          var year = generateConfig.getYear(value || generateConfig.getNow());
          var start = year - YearSelectOffset;
          var end = start + YearSelectTotal;

          if (validRange) {
            start = generateConfig.getYear(validRange[0]);
            end = generateConfig.getYear(validRange[1]) + 1;
          }

          var suffix = locale && locale.year === '年' ? '年' : '';
          var options = [];

          for (var index = start; index < end; index++) {
            options.push({
              label: "".concat(index).concat(suffix),
              value: index
            });
          }

          return /*#__PURE__*/React.createElement(_select["default"], {
            size: fullscreen ? undefined : 'small',
            options: options,
            value: year,
            className: "".concat(prefixCls, "-year-select"),
            onChange: function onChange(numYear) {
              var newDate = generateConfig.setYear(value, numYear);

              if (validRange) {
                var _validRange = (0, _slicedToArray2["default"])(validRange, 2),
                    startDate = _validRange[0],
                    endDate = _validRange[1];

                var newYear = generateConfig.getYear(newDate);
                var newMonth = generateConfig.getMonth(newDate);

                if (newYear === generateConfig.getYear(endDate) && newMonth > generateConfig.getMonth(endDate)) {
                  newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(endDate));
                }

                if (newYear === generateConfig.getYear(startDate) && newMonth < generateConfig.getMonth(startDate)) {
                  newDate = generateConfig.setMonth(newDate, generateConfig.getMonth(startDate));
                }
              }

              _onChange(newDate);
            },
            getPopupContainer: function getPopupContainer() {
              return divRef.current;
            }
          });
        }

        function MonthSelect(props) {
          var prefixCls = props.prefixCls,
              fullscreen = props.fullscreen,
              validRange = props.validRange,
              value = props.value,
              generateConfig = props.generateConfig,
              locale = props.locale,
              _onChange2 = props.onChange,
              divRef = props.divRef;
          var month = generateConfig.getMonth(value || generateConfig.getNow());
          var start = 0;
          var end = 11;

          if (validRange) {
            var _validRange2 = (0, _slicedToArray2["default"])(validRange, 2),
                rangeStart = _validRange2[0],
                rangeEnd = _validRange2[1];

            var currentYear = generateConfig.getYear(value);

            if (generateConfig.getYear(rangeEnd) === currentYear) {
              end = generateConfig.getMonth(rangeEnd);
            }

            if (generateConfig.getYear(rangeStart) === currentYear) {
              start = generateConfig.getMonth(rangeStart);
            }
          }

          var months = locale.shortMonths || generateConfig.locale.getShortMonths(locale.locale);
          var options = [];

          for (var index = start; index <= end; index += 1) {
            options.push({
              label: months[index],
              value: index
            });
          }

          return /*#__PURE__*/React.createElement(_select["default"], {
            size: fullscreen ? undefined : 'small',
            className: "".concat(prefixCls, "-month-select"),
            value: month,
            options: options,
            onChange: function onChange(newMonth) {
              _onChange2(generateConfig.setMonth(value, newMonth));
            },
            getPopupContainer: function getPopupContainer() {
              return divRef.current;
            }
          });
        }

        function ModeSwitch(props) {
          var prefixCls = props.prefixCls,
              locale = props.locale,
              mode = props.mode,
              fullscreen = props.fullscreen,
              onModeChange = props.onModeChange;
          return /*#__PURE__*/React.createElement(_radio.Group, {
            onChange: function onChange(_ref) {
              var value = _ref.target.value;
              onModeChange(value);
            },
            value: mode,
            size: fullscreen ? undefined : 'small',
            className: "".concat(prefixCls, "-mode-switch")
          }, /*#__PURE__*/React.createElement(_radio.Button, {
            value: "month"
          }, locale.month), /*#__PURE__*/React.createElement(_radio.Button, {
            value: "year"
          }, locale.year));
        }

        function CalendarHeader(props) {
          var prefixCls = props.prefixCls,
              fullscreen = props.fullscreen,
              mode = props.mode,
              onChange = props.onChange,
              onModeChange = props.onModeChange;
          var divRef = React.useRef(null);
          var formItemInputContext = (0, React.useContext)(_context.FormItemInputContext);
          var mergedFormItemInputContext = (0, React.useMemo)(function () {
            return (0, _extends2["default"])((0, _extends2["default"])({}, formItemInputContext), {
              isFormItemInput: false
            });
          }, [formItemInputContext]);
          var sharedProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
            onChange: onChange,
            fullscreen: fullscreen,
            divRef: divRef
          });
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-header"),
            ref: divRef
          }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
            value: mergedFormItemInputContext
          }, /*#__PURE__*/React.createElement(YearSelect, (0, _extends2["default"])({}, sharedProps)), mode === 'month' && /*#__PURE__*/React.createElement(MonthSelect, (0, _extends2["default"])({}, sharedProps))), /*#__PURE__*/React.createElement(ModeSwitch, (0, _extends2["default"])({}, sharedProps, {
            onModeChange: onModeChange
          })));
        }

        var _default = CalendarHeader;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        '../form/context': _req4,
        '../radio': _req5,
        '../select': _req6
      }));
    }
  };
});
//# sourceMappingURL=4735fcb4dfc6fb8801096202f2fef398c46b2ec3.js.map