System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/defineProperty", "classnames", "rc-field-form", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _List, _default0, _useForm0, _useWatch, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req4 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcFieldForm2) {
      _req6 = _rcFieldForm2.__cjsMetaURL;
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
        Object.defineProperty(exports, "List", {
          enumerable: true,
          get: function get() {
            return _rcFieldForm.List;
          }
        });
        exports["default"] = void 0;
        Object.defineProperty(exports, "useForm", {
          enumerable: true,
          get: function get() {
            return _useForm3["default"];
          }
        });
        Object.defineProperty(exports, "useWatch", {
          enumerable: true,
          get: function get() {
            return _rcFieldForm.useWatch;
          }
        });

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcFieldForm = _interopRequireWildcard(require("rc-field-form"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireWildcard(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireWildcard(require("../config-provider/SizeContext"));

        var _context = require("./context");

        var _useForm3 = _interopRequireDefault(require("./hooks/useForm"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InternalForm = function InternalForm(props, ref) {
          var _classNames;

          var contextSize = React.useContext(_SizeContext["default"]);
          var contextDisabled = React.useContext(_DisabledContext["default"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              contextForm = _React$useContext.form;

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              _props$size = props.size,
              size = _props$size === void 0 ? contextSize : _props$size,
              _props$disabled = props.disabled,
              disabled = _props$disabled === void 0 ? contextDisabled : _props$disabled,
              form = props.form,
              colon = props.colon,
              labelAlign = props.labelAlign,
              labelWrap = props.labelWrap,
              labelCol = props.labelCol,
              wrapperCol = props.wrapperCol,
              hideRequiredMark = props.hideRequiredMark,
              _props$layout = props.layout,
              layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
              scrollToFirstError = props.scrollToFirstError,
              requiredMark = props.requiredMark,
              onFinishFailed = props.onFinishFailed,
              name = props.name,
              restFormProps = __rest(props, ["prefixCls", "className", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]);

          var mergedRequiredMark = (0, React.useMemo)(function () {
            if (requiredMark !== undefined) {
              return requiredMark;
            }

            if (contextForm && contextForm.requiredMark !== undefined) {
              return contextForm.requiredMark;
            }

            if (hideRequiredMark) {
              return false;
            }

            return true;
          }, [hideRequiredMark, requiredMark, contextForm]);
          var mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
          var prefixCls = getPrefixCls('form', customizePrefixCls);
          var formClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(layout), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hide-required-mark"), mergedRequiredMark === false), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), _classNames), className);

          var _useForm = (0, _useForm3["default"])(form),
              _useForm2 = (0, _slicedToArray2["default"])(_useForm, 1),
              wrapForm = _useForm2[0];

          var __INTERNAL__ = wrapForm.__INTERNAL__;
          __INTERNAL__.name = name;
          var formContextValue = (0, React.useMemo)(function () {
            return {
              name: name,
              labelAlign: labelAlign,
              labelCol: labelCol,
              labelWrap: labelWrap,
              wrapperCol: wrapperCol,
              vertical: layout === 'vertical',
              colon: mergedColon,
              requiredMark: mergedRequiredMark,
              itemRef: __INTERNAL__.itemRef,
              form: wrapForm
            };
          }, [name, labelAlign, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm]);
          React.useImperativeHandle(ref, function () {
            return wrapForm;
          });

          var onInternalFinishFailed = function onInternalFinishFailed(errorInfo) {
            onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
            var defaultScrollToFirstError = {
              block: 'nearest'
            };

            if (scrollToFirstError && errorInfo.errorFields.length) {
              if ((0, _typeof2["default"])(scrollToFirstError) === 'object') {
                defaultScrollToFirstError = scrollToFirstError;
              }

              wrapForm.scrollToField(errorInfo.errorFields[0].name, defaultScrollToFirstError);
            }
          };

          return /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
            disabled: disabled
          }, /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
            size: size
          }, /*#__PURE__*/React.createElement(_context.FormContext.Provider, {
            value: formContextValue
          }, /*#__PURE__*/React.createElement(_rcFieldForm["default"], (0, _extends2["default"])({
            id: name
          }, restFormProps, {
            name: name,
            onFinishFailed: onInternalFinishFailed,
            form: wrapForm,
            className: formClassName
          })))));
        };

        var Form = /*#__PURE__*/React.forwardRef(InternalForm);
        var _default = Form;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _List = module.exports.List;
        _default0 = module.exports.default;
        _useForm0 = module.exports.useForm;
        _useWatch = module.exports.useWatch;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/defineProperty': _req4,
        'classnames': _req5,
        'rc-field-form': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../config-provider/DisabledContext': _req9,
        '../config-provider/SizeContext': _req10,
        './context': _req11,
        './hooks/useForm': _req12
      }));
    }
  };
});
//# sourceMappingURL=8e987cbb1efee6723957cf7877774817cecfedfe.js.map