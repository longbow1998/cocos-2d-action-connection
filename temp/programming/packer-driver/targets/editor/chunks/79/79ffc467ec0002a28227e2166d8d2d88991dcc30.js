System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-field-form", "rc-util/lib/omit", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _NoStyleItemContext, _NoFormStyle, _FormProvider, _FormItemPrefixContext, _FormItemInputContext, _FormContext, __cjsMetaURL;

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
    }, function (_rcFieldForm2) {
      _req2 = _rcFieldForm2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req3 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
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
        exports.NoStyleItemContext = exports.NoFormStyle = exports.FormProvider = exports.FormItemPrefixContext = exports.FormItemInputContext = exports.FormContext = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _rcFieldForm = require("rc-field-form");

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var FormContext = /*#__PURE__*/React.createContext({
          labelAlign: 'right',
          vertical: false,
          itemRef: function itemRef() {}
        });
        exports.FormContext = FormContext;
        var NoStyleItemContext = /*#__PURE__*/React.createContext(null);
        exports.NoStyleItemContext = NoStyleItemContext;

        var FormProvider = function FormProvider(props) {
          var providerProps = (0, _omit["default"])(props, ['prefixCls']);
          return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, (0, _extends2["default"])({}, providerProps));
        };

        exports.FormProvider = FormProvider;
        var FormItemPrefixContext = /*#__PURE__*/React.createContext({
          prefixCls: ''
        });
        exports.FormItemPrefixContext = FormItemPrefixContext;
        var FormItemInputContext = /*#__PURE__*/React.createContext({});
        exports.FormItemInputContext = FormItemInputContext;

        var NoFormStyle = function NoFormStyle(_ref) {
          var children = _ref.children,
              status = _ref.status,
              override = _ref.override;
          var formItemInputContext = (0, React.useContext)(FormItemInputContext);
          var newFormItemInputContext = (0, React.useMemo)(function () {
            var newContext = (0, _extends2["default"])({}, formItemInputContext);

            if (override) {
              delete newContext.isFormItemInput;
            }

            if (status) {
              delete newContext.status;
              delete newContext.hasFeedback;
              delete newContext.feedbackIcon;
            }

            return newContext;
          }, [status, override, formItemInputContext]);
          return /*#__PURE__*/React.createElement(FormItemInputContext.Provider, {
            value: newFormItemInputContext
          }, children);
        };

        exports.NoFormStyle = NoFormStyle; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _NoStyleItemContext = module.exports.NoStyleItemContext;
        _NoFormStyle = module.exports.NoFormStyle;
        _FormProvider = module.exports.FormProvider;
        _FormItemPrefixContext = module.exports.FormItemPrefixContext;
        _FormItemInputContext = module.exports.FormItemInputContext;
        _FormContext = module.exports.FormContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'rc-field-form': _req2,
        'rc-util/lib/omit': _req3,
        'react': _req4
      }));
    }
  };
});
//# sourceMappingURL=79ffc467ec0002a28227e2166d8d2d88991dcc30.js.map