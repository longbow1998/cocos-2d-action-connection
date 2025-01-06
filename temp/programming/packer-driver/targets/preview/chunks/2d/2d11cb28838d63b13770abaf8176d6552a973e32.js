System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "@ant-design/icons/QuestionCircleOutlined", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context2) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsQuestionCircleOutlined) {
      _req5 = _antDesignIconsQuestionCircleOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _QuestionCircleOutlined = _interopRequireDefault(require("@ant-design/icons/QuestionCircleOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _col = _interopRequireDefault(require("../grid/col"));

        var _LocaleReceiver = require("../locale-provider/LocaleReceiver");

        var _default2 = _interopRequireDefault(require("../locale/default"));

        var _tooltip = _interopRequireDefault(require("../tooltip"));

        var _context = require("./context");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function toTooltipProps(tooltip) {
          if (!tooltip) {
            return null;
          }

          if ((0, _typeof2["default"])(tooltip) === 'object' && ! /*#__PURE__*/React.isValidElement(tooltip)) {
            return tooltip;
          }

          return {
            title: tooltip
          };
        }

        var FormItemLabel = function FormItemLabel(_ref) {
          var prefixCls = _ref.prefixCls,
              label = _ref.label,
              htmlFor = _ref.htmlFor,
              labelCol = _ref.labelCol,
              labelAlign = _ref.labelAlign,
              colon = _ref.colon,
              required = _ref.required,
              requiredMark = _ref.requiredMark,
              tooltip = _ref.tooltip;

          var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Form'),
              _useLocaleReceiver2 = (0, _slicedToArray2["default"])(_useLocaleReceiver, 1),
              formLocale = _useLocaleReceiver2[0];

          if (!label) return null;
          return /*#__PURE__*/React.createElement(_context.FormContext.Consumer, {
            key: "label"
          }, function (_ref2) {
            var _classNames2;

            var vertical = _ref2.vertical,
                contextLabelAlign = _ref2.labelAlign,
                contextLabelCol = _ref2.labelCol,
                labelWrap = _ref2.labelWrap,
                contextColon = _ref2.colon;

            var _a;

            var mergedLabelCol = labelCol || contextLabelCol || {};
            var mergedLabelAlign = labelAlign || contextLabelAlign;
            var labelClsBasic = "".concat(prefixCls, "-item-label");
            var labelColClassName = (0, _classnames["default"])(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className, (0, _defineProperty2["default"])({}, "".concat(labelClsBasic, "-wrap"), !!labelWrap));
            var labelChildren = label; // Keep label is original where there should have no colon

            var computedColon = colon === true || contextColon !== false && colon !== false;
            var haveColon = computedColon && !vertical; // Remove duplicated user input colon

            if (haveColon && typeof label === 'string' && label.trim() !== '') {
              labelChildren = label.replace(/[:|：]\s*$/, '');
            } // Tooltip


            var tooltipProps = toTooltipProps(tooltip);

            if (tooltipProps) {
              var _tooltipProps$icon = tooltipProps.icon,
                  icon = _tooltipProps$icon === void 0 ? /*#__PURE__*/React.createElement(_QuestionCircleOutlined["default"], null) : _tooltipProps$icon,
                  restTooltipProps = __rest(tooltipProps, ["icon"]);

              var tooltipNode = /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, restTooltipProps), /*#__PURE__*/React.cloneElement(icon, {
                className: "".concat(prefixCls, "-item-tooltip"),
                title: ''
              }));
              labelChildren = /*#__PURE__*/React.createElement(React.Fragment, null, labelChildren, tooltipNode);
            } // Add required mark if optional


            if (requiredMark === 'optional' && !required) {
              labelChildren = /*#__PURE__*/React.createElement(React.Fragment, null, labelChildren, /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-item-optional"),
                title: ""
              }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = _default2["default"].Form) === null || _a === void 0 ? void 0 : _a.optional)));
            }

            var labelClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-required"), required), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames2));
            return /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedLabelCol, {
              className: labelColClassName
            }), /*#__PURE__*/React.createElement("label", {
              htmlFor: htmlFor,
              className: labelClassName,
              title: typeof label === 'string' ? label : ''
            }, labelChildren));
          });
        };

        var _default = FormItemLabel;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/typeof': _req4,
        '@ant-design/icons/QuestionCircleOutlined': _req5,
        'classnames': _req6,
        'react': _req7,
        '../grid/col': _req8,
        '../locale-provider/LocaleReceiver': _req9,
        '../locale/default': _req10,
        '../tooltip': _req11,
        './context': _req12
      }));
    }
  };
});
//# sourceMappingURL=2d11cb28838d63b13770abaf8176d6552a973e32.js.map