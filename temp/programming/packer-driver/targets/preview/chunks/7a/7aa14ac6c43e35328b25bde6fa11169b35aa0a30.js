System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/warning", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, _HOOK_MARK, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req1 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = exports.HOOK_MARK = void 0;

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var React = _interopRequireWildcard(require("react"));

        var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        exports.HOOK_MARK = HOOK_MARK;

        var warningFunc = function warningFunc() {
          (0, _warning.default)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
        };

        var Context = /*#__PURE__*/React.createContext({
          getFieldValue: warningFunc,
          getFieldsValue: warningFunc,
          getFieldError: warningFunc,
          getFieldWarning: warningFunc,
          getFieldsError: warningFunc,
          isFieldsTouched: warningFunc,
          isFieldTouched: warningFunc,
          isFieldValidating: warningFunc,
          isFieldsValidating: warningFunc,
          resetFields: warningFunc,
          setFields: warningFunc,
          setFieldValue: warningFunc,
          setFieldsValue: warningFunc,
          validateFields: warningFunc,
          submit: warningFunc,
          getInternalHooks: function getInternalHooks() {
            warningFunc();
            return {
              dispatch: warningFunc,
              initEntityValue: warningFunc,
              registerField: warningFunc,
              useSubscribe: warningFunc,
              setInitialValues: warningFunc,
              destroyForm: warningFunc,
              setCallbacks: warningFunc,
              registerWatch: warningFunc,
              getFields: warningFunc,
              setValidateMessages: warningFunc,
              setPreserve: warningFunc,
              getInitialValue: warningFunc
            };
          }
        });
        var _default = Context;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _HOOK_MARK = module.exports.HOOK_MARK;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        'rc-util/lib/warning': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=7aa14ac6c43e35328b25bde6fa11169b35aa0a30.js.map