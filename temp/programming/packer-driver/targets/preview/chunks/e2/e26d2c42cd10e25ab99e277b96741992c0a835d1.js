System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, _FormProvider, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
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
        exports.default = exports.FormProvider = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var FormContext = /*#__PURE__*/React.createContext({
          triggerFormChange: function triggerFormChange() {},
          triggerFormFinish: function triggerFormFinish() {},
          registerForm: function registerForm() {},
          unregisterForm: function unregisterForm() {}
        });

        var FormProvider = function FormProvider(_ref) {
          var validateMessages = _ref.validateMessages,
              onFormChange = _ref.onFormChange,
              onFormFinish = _ref.onFormFinish,
              children = _ref.children;
          var formContext = React.useContext(FormContext);
          var formsRef = React.useRef({});
          return /*#__PURE__*/React.createElement(FormContext.Provider, {
            value: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formContext), {}, {
              validateMessages: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formContext.validateMessages), validateMessages),
              // =========================================================
              // =                  Global Form Control                  =
              // =========================================================
              triggerFormChange: function triggerFormChange(name, changedFields) {
                if (onFormChange) {
                  onFormChange(name, {
                    changedFields: changedFields,
                    forms: formsRef.current
                  });
                }

                formContext.triggerFormChange(name, changedFields);
              },
              triggerFormFinish: function triggerFormFinish(name, values) {
                if (onFormFinish) {
                  onFormFinish(name, {
                    values: values,
                    forms: formsRef.current
                  });
                }

                formContext.triggerFormFinish(name, values);
              },
              registerForm: function registerForm(name, form) {
                if (name) {
                  formsRef.current = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formsRef.current), {}, (0, _defineProperty2.default)({}, name, form));
                }

                formContext.registerForm(name, form);
              },
              unregisterForm: function unregisterForm(name) {
                var newForms = (0, _objectSpread3.default)({}, formsRef.current);
                delete newForms[name];
                formsRef.current = newForms;
                formContext.unregisterForm(name);
              }
            })
          }, children);
        };

        exports.FormProvider = FormProvider;
        var _default = FormContext;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _FormProvider = module.exports.FormProvider;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=e26d2c42cd10e25ab99e277b96741992c0a835d1.js.map