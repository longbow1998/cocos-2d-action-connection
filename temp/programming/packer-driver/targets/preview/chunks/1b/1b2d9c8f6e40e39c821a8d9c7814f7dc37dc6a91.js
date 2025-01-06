System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/CalendarOutlined", "@ant-design/icons/ClockCircleOutlined", "@ant-design/icons/CloseCircleFilled", "classnames", "rc-picker", "react", "__unresolved_1", ".", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_antDesignIconsCalendarOutlined) {
      _req3 = _antDesignIconsCalendarOutlined.__cjsMetaURL;
    }, function (_antDesignIconsClockCircleOutlined) {
      _req4 = _antDesignIconsClockCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req5 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcPicker2) {
      _req7 = _rcPicker2.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_2) {
      _req10 = _2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req14 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req15 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req16 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req17 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req18 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req19 = _unresolved_11.__cjsMetaURL;
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
        exports["default"] = generatePicker;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _CalendarOutlined = _interopRequireDefault(require("@ant-design/icons/CalendarOutlined"));

        var _ClockCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ClockCircleOutlined"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcPicker = _interopRequireDefault(require("rc-picker"));

        var React = _interopRequireWildcard(require("react"));

        var _Compact = require("../../space/Compact");

        var _ = require(".");

        var _configProvider = require("../../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../../config-provider/SizeContext"));

        var _context = require("../../form/context");

        var _LocaleReceiver = _interopRequireDefault(require("../../locale-provider/LocaleReceiver"));

        var _statusUtils = require("../../_util/statusUtils");

        var _warning = _interopRequireDefault(require("../../_util/warning"));

        var _en_US = _interopRequireDefault(require("../locale/en_US"));

        var _util = require("../util");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function generatePicker(generateConfig) {
          function getPicker(picker, displayName) {
            var Picker = /*#__PURE__*/(0, React.forwardRef)(function (props, ref) {
              var customizePrefixCls = props.prefixCls,
                  customizeGetPopupContainer = props.getPopupContainer,
                  className = props.className,
                  customizeSize = props.size,
                  _props$bordered = props.bordered,
                  bordered = _props$bordered === void 0 ? true : _props$bordered,
                  placement = props.placement,
                  placeholder = props.placeholder,
                  popupClassName = props.popupClassName,
                  dropdownClassName = props.dropdownClassName,
                  customDisabled = props.disabled,
                  customStatus = props.status,
                  restProps = __rest(props, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status"]);

              var _useContext = (0, React.useContext)(_configProvider.ConfigContext),
                  getPrefixCls = _useContext.getPrefixCls,
                  direction = _useContext.direction,
                  getPopupContainer = _useContext.getPopupContainer;

              var prefixCls = getPrefixCls('picker', customizePrefixCls);

              var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
                  compactSize = _useCompactItemContex.compactSize,
                  compactItemClassnames = _useCompactItemContex.compactItemClassnames;

              var innerRef = React.useRef(null);
              var format = props.format,
                  showTime = props.showTime;
              (0, React.useImperativeHandle)(ref, function () {
                return {
                  focus: function focus() {
                    var _a;

                    return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                  },
                  blur: function blur() {
                    var _a;

                    return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                  }
                };
              });
              var additionalProps = {
                showToday: true
              };
              var additionalOverrideProps = {};

              if (picker) {
                additionalOverrideProps.picker = picker;
              }

              var mergedPicker = picker || props.picker;
              additionalOverrideProps = (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, additionalOverrideProps), showTime ? (0, _.getTimeProps)((0, _extends2["default"])({
                format: format,
                picker: mergedPicker
              }, showTime)) : {}), mergedPicker === 'time' ? (0, _.getTimeProps)((0, _extends2["default"])((0, _extends2["default"])({
                format: format
              }, props), {
                picker: mergedPicker
              })) : {});
              var rootPrefixCls = getPrefixCls(); // =================== Warning =====================

              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(picker !== 'quarter', displayName, "DatePicker.".concat(displayName, " is legacy usage. Please use DatePicker[picker='").concat(picker, "'] directly.")) : void 0;
              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!dropdownClassName, mergedPicker === 'time' ? 'TimePicker' : 'DatePicker', '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.') : void 0; // ===================== Size =====================

              var size = React.useContext(_SizeContext["default"]);
              var mergedSize = compactSize || customizeSize || size; // ===================== Disabled =====================

              var disabled = React.useContext(_DisabledContext["default"]);
              var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled; // ===================== FormItemInput =====================

              var formItemContext = (0, React.useContext)(_context.FormItemInputContext);
              var hasFeedback = formItemContext.hasFeedback,
                  contextStatus = formItemContext.status,
                  feedbackIcon = formItemContext.feedbackIcon;
              var suffixNode = /*#__PURE__*/React.createElement(React.Fragment, null, mergedPicker === 'time' ? /*#__PURE__*/React.createElement(_ClockCircleOutlined["default"], null) : /*#__PURE__*/React.createElement(_CalendarOutlined["default"], null), hasFeedback && feedbackIcon);
              return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
                componentName: "DatePicker",
                defaultLocale: _en_US["default"]
              }, function (contextLocale) {
                var _classNames;

                var locale = (0, _extends2["default"])((0, _extends2["default"])({}, contextLocale), props.locale);
                return /*#__PURE__*/React.createElement(_rcPicker["default"], (0, _extends2["default"])({
                  ref: innerRef,
                  placeholder: (0, _util.getPlaceholder)(mergedPicker, locale, placeholder),
                  suffixIcon: suffixNode,
                  dropdownAlign: (0, _util.transPlacement2DropdownAlign)(direction, placement),
                  clearIcon: /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null),
                  prevIcon: /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-prev-icon")
                  }),
                  nextIcon: /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-next-icon")
                  }),
                  superPrevIcon: /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-super-prev-icon")
                  }),
                  superNextIcon: /*#__PURE__*/React.createElement("span", {
                    className: "".concat(prefixCls, "-super-next-icon")
                  }),
                  allowClear: true,
                  transitionName: "".concat(rootPrefixCls, "-slide-up")
                }, additionalProps, restProps, additionalOverrideProps, {
                  locale: locale.lang,
                  className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), compactItemClassnames, className),
                  prefixCls: prefixCls,
                  getPopupContainer: customizeGetPopupContainer || getPopupContainer,
                  generateConfig: generateConfig,
                  components: _.Components,
                  direction: direction,
                  disabled: mergedDisabled,
                  dropdownClassName: popupClassName || dropdownClassName
                }));
              });
            });

            if (displayName) {
              Picker.displayName = displayName;
            }

            return Picker;
          }

          var DatePicker = getPicker();
          var WeekPicker = getPicker('week', 'WeekPicker');
          var MonthPicker = getPicker('month', 'MonthPicker');
          var YearPicker = getPicker('year', 'YearPicker');
          var TimePicker = getPicker('time', 'TimePicker');
          var QuarterPicker = getPicker('quarter', 'QuarterPicker');
          return {
            DatePicker: DatePicker,
            WeekPicker: WeekPicker,
            MonthPicker: MonthPicker,
            YearPicker: YearPicker,
            TimePicker: TimePicker,
            QuarterPicker: QuarterPicker
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/CalendarOutlined': _req3,
        '@ant-design/icons/ClockCircleOutlined': _req4,
        '@ant-design/icons/CloseCircleFilled': _req5,
        'classnames': _req6,
        'rc-picker': _req7,
        'react': _req8,
        '../../space/Compact': _req9,
        '.': _req10,
        '../../config-provider': _req11,
        '../../config-provider/DisabledContext': _req12,
        '../../config-provider/SizeContext': _req13,
        '../../form/context': _req14,
        '../../locale-provider/LocaleReceiver': _req15,
        '../../_util/statusUtils': _req16,
        '../../_util/warning': _req17,
        '../locale/en_US': _req18,
        '../util': _req19
      }));
    }
  };
});
//# sourceMappingURL=1b2d9c8f6e40e39c821a8d9c7814f7dc37dc6a91.js.map