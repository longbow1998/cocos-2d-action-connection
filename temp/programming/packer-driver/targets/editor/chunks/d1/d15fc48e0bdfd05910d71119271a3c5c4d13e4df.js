System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/CheckCircleFilled", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/ExclamationCircleFilled", "@ant-design/icons/LoadingOutlined", "rc-util/lib/hooks/useLayoutEffect", "classnames", "react", "rc-util/lib/omit", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_antDesignIconsCheckCircleFilled) {
      _req4 = _antDesignIconsCheckCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req5 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleFilled) {
      _req6 = _antDesignIconsExclamationCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req7 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req8 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req11 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
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
        exports["default"] = ItemHolder;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _grid = require("../../grid");

        var _FormItemLabel = _interopRequireDefault(require("../FormItemLabel"));

        var _FormItemInput = _interopRequireDefault(require("../FormItemInput"));

        var _context = require("../context");

        var _useDebounce = _interopRequireDefault(require("../hooks/useDebounce"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var iconMap = {
          success: _CheckCircleFilled["default"],
          warning: _ExclamationCircleFilled["default"],
          error: _CloseCircleFilled["default"],
          validating: _LoadingOutlined["default"]
        };

        function ItemHolder(props) {
          var _itemClassName;

          var prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              help = props.help,
              errors = props.errors,
              warnings = props.warnings,
              validateStatus = props.validateStatus,
              meta = props.meta,
              hasFeedback = props.hasFeedback,
              hidden = props.hidden,
              children = props.children,
              fieldId = props.fieldId,
              isRequired = props.isRequired,
              onSubItemMetaChange = props.onSubItemMetaChange,
              restProps = __rest(props, ["prefixCls", "className", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "isRequired", "onSubItemMetaChange"]);

          var itemPrefixCls = "".concat(prefixCls, "-item");

          var _React$useContext = React.useContext(_context.FormContext),
              requiredMark = _React$useContext.requiredMark; // ======================== Margin ========================


          var itemRef = React.useRef(null);
          var debounceErrors = (0, _useDebounce["default"])(errors);
          var debounceWarnings = (0, _useDebounce["default"])(warnings);
          var hasHelp = help !== undefined && help !== null;
          var hasError = !!(hasHelp || errors.length || warnings.length);

          var _React$useState = React.useState(null),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              marginBottom = _React$useState2[0],
              setMarginBottom = _React$useState2[1];

          (0, _useLayoutEffect["default"])(function () {
            if (hasError && itemRef.current) {
              var itemStyle = getComputedStyle(itemRef.current);
              setMarginBottom(parseInt(itemStyle.marginBottom, 10));
            }
          }, [hasError]);

          var onErrorVisibleChanged = function onErrorVisibleChanged(nextVisible) {
            if (!nextVisible) {
              setMarginBottom(null);
            }
          }; // ======================== Status ========================


          var mergedValidateStatus = '';

          if (validateStatus !== undefined) {
            mergedValidateStatus = validateStatus;
          } else if (meta.validating) {
            mergedValidateStatus = 'validating';
          } else if (debounceErrors.length) {
            mergedValidateStatus = 'error';
          } else if (debounceWarnings.length) {
            mergedValidateStatus = 'warning';
          } else if (meta.touched) {
            mergedValidateStatus = 'success';
          }

          var formItemStatusContext = React.useMemo(function () {
            var feedbackIcon;

            if (hasFeedback) {
              var IconNode = mergedValidateStatus && iconMap[mergedValidateStatus];
              feedbackIcon = IconNode ? /*#__PURE__*/React.createElement("span", {
                className: (0, _classnames["default"])("".concat(itemPrefixCls, "-feedback-icon"), "".concat(itemPrefixCls, "-feedback-icon-").concat(mergedValidateStatus))
              }, /*#__PURE__*/React.createElement(IconNode, null)) : null;
            }

            return {
              status: mergedValidateStatus,
              hasFeedback: hasFeedback,
              feedbackIcon: feedbackIcon,
              isFormItemInput: true
            };
          }, [mergedValidateStatus, hasFeedback]); // ======================== Render ========================

          var itemClassName = (_itemClassName = {}, (0, _defineProperty2["default"])(_itemClassName, itemPrefixCls, true), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-with-help"), hasHelp || debounceErrors.length || debounceWarnings.length), (0, _defineProperty2["default"])(_itemClassName, "".concat(className), !!className), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-has-feedback"), mergedValidateStatus && hasFeedback), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-has-success"), mergedValidateStatus === 'success'), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-has-warning"), mergedValidateStatus === 'warning'), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-has-error"), mergedValidateStatus === 'error'), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-is-validating"), mergedValidateStatus === 'validating'), (0, _defineProperty2["default"])(_itemClassName, "".concat(itemPrefixCls, "-hidden"), hidden), _itemClassName);
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames["default"])(itemClassName),
            style: style,
            ref: itemRef
          }, /*#__PURE__*/React.createElement(_grid.Row, (0, _extends2["default"])({
            className: "".concat(itemPrefixCls, "-row")
          }, (0, _omit["default"])(restProps, ['_internalItemRender', 'colon', 'dependencies', 'extra', 'fieldKey', 'getValueFromEvent', 'getValueProps', 'htmlFor', 'id', 'initialValue', 'isListField', 'label', 'labelAlign', 'labelCol', 'labelWrap', 'messageVariables', 'name', 'normalize', 'noStyle', 'preserve', 'required', 'requiredMark', 'rules', 'shouldUpdate', 'trigger', 'tooltip', 'validateFirst', 'validateTrigger', 'valuePropName', 'wrapperCol'])), /*#__PURE__*/React.createElement(_FormItemLabel["default"], (0, _extends2["default"])({
            htmlFor: fieldId,
            required: isRequired,
            requiredMark: requiredMark
          }, props, {
            prefixCls: prefixCls
          })), /*#__PURE__*/React.createElement(_FormItemInput["default"], (0, _extends2["default"])({}, props, meta, {
            errors: debounceErrors,
            warnings: debounceWarnings,
            prefixCls: prefixCls,
            status: mergedValidateStatus,
            help: help,
            marginBottom: marginBottom,
            onErrorVisibleChanged: onErrorVisibleChanged
          }), /*#__PURE__*/React.createElement(_context.NoStyleItemContext.Provider, {
            value: onSubItemMetaChange
          }, /*#__PURE__*/React.createElement(_context.FormItemInputContext.Provider, {
            value: formItemStatusContext
          }, children)))), !!marginBottom && /*#__PURE__*/React.createElement("div", {
            className: "".concat(itemPrefixCls, "-margin-offset"),
            style: {
              marginBottom: -marginBottom
            }
          }));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@ant-design/icons/CheckCircleFilled': _req4,
        '@ant-design/icons/CloseCircleFilled': _req5,
        '@ant-design/icons/ExclamationCircleFilled': _req6,
        '@ant-design/icons/LoadingOutlined': _req7,
        'rc-util/lib/hooks/useLayoutEffect': _req8,
        'classnames': _req9,
        'react': _req10,
        'rc-util/lib/omit': _req11,
        '../../grid': _req12,
        '../FormItemLabel': _req13,
        '../FormItemInput': _req14,
        '../context': _req15,
        '../hooks/useDebounce': _req16
      }));
    }
  };
});
//# sourceMappingURL=d15fc48e0bdfd05910d71119271a3c5c4d13e4df.js.map