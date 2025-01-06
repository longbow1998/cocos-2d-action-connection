System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _useForm3 = _interopRequireDefault(require("./useForm"));

        var _FieldContext = _interopRequireWildcard(require("./FieldContext"));

        var _FormContext = _interopRequireDefault(require("./FormContext"));

        var _valueUtil = require("./utils/valueUtil");

        var _excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];

        var Form = function Form(_ref, ref) {
          var name = _ref.name,
              initialValues = _ref.initialValues,
              fields = _ref.fields,
              form = _ref.form,
              preserve = _ref.preserve,
              children = _ref.children,
              _ref$component = _ref.component,
              Component = _ref$component === void 0 ? 'form' : _ref$component,
              validateMessages = _ref.validateMessages,
              _ref$validateTrigger = _ref.validateTrigger,
              validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
              onValuesChange = _ref.onValuesChange,
              _onFieldsChange = _ref.onFieldsChange,
              _onFinish = _ref.onFinish,
              onFinishFailed = _ref.onFinishFailed,
              restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
          var formContext = React.useContext(_FormContext.default); // We customize handle event since Context will makes all the consumer re-render:
          // https://reactjs.org/docs/context.html#contextprovider

          var _useForm = (0, _useForm3.default)(form),
              _useForm2 = (0, _slicedToArray2.default)(_useForm, 1),
              formInstance = _useForm2[0];

          var _formInstance$getInte = formInstance.getInternalHooks(_FieldContext.HOOK_MARK),
              useSubscribe = _formInstance$getInte.useSubscribe,
              setInitialValues = _formInstance$getInte.setInitialValues,
              setCallbacks = _formInstance$getInte.setCallbacks,
              setValidateMessages = _formInstance$getInte.setValidateMessages,
              setPreserve = _formInstance$getInte.setPreserve,
              destroyForm = _formInstance$getInte.destroyForm; // Pass ref with form instance


          React.useImperativeHandle(ref, function () {
            return formInstance;
          }); // Register form into Context

          React.useEffect(function () {
            formContext.registerForm(name, formInstance);
            return function () {
              formContext.unregisterForm(name);
            };
          }, [formContext, formInstance, name]); // Pass props to store

          setValidateMessages((0, _objectSpread2.default)((0, _objectSpread2.default)({}, formContext.validateMessages), validateMessages));
          setCallbacks({
            onValuesChange: onValuesChange,
            onFieldsChange: function onFieldsChange(changedFields) {
              formContext.triggerFormChange(name, changedFields);

              if (_onFieldsChange) {
                for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  rest[_key - 1] = arguments[_key];
                }

                _onFieldsChange.apply(void 0, [changedFields].concat(rest));
              }
            },
            onFinish: function onFinish(values) {
              formContext.triggerFormFinish(name, values);

              if (_onFinish) {
                _onFinish(values);
              }
            },
            onFinishFailed: onFinishFailed
          });
          setPreserve(preserve); // Set initial value, init store value when first mount

          var mountRef = React.useRef(null);
          setInitialValues(initialValues, !mountRef.current);

          if (!mountRef.current) {
            mountRef.current = true;
          }

          React.useEffect(function () {
            return destroyForm;
          }, // eslint-disable-next-line react-hooks/exhaustive-deps
          []); // Prepare children by `children` type

          var childrenNode;
          var childrenRenderProps = typeof children === 'function';

          if (childrenRenderProps) {
            var values = formInstance.getFieldsValue(true);
            childrenNode = children(values, formInstance);
          } else {
            childrenNode = children;
          } // Not use subscribe when using render props


          useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

          var prevFieldsRef = React.useRef();
          React.useEffect(function () {
            if (!(0, _valueUtil.isSimilar)(prevFieldsRef.current || [], fields || [])) {
              formInstance.setFields(fields || []);
            }

            prevFieldsRef.current = fields;
          }, [fields, formInstance]);
          var formContextValue = React.useMemo(function () {
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, formInstance), {}, {
              validateTrigger: validateTrigger
            });
          }, [formInstance, validateTrigger]);
          var wrapperNode = /*#__PURE__*/React.createElement(_FieldContext.default.Provider, {
            value: formContextValue
          }, childrenNode);

          if (Component === false) {
            return wrapperNode;
          }

          return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({}, restProps, {
            onSubmit: function onSubmit(event) {
              event.preventDefault();
              event.stopPropagation();
              formInstance.submit();
            },
            onReset: function onReset(event) {
              var _restProps$onReset;

              event.preventDefault();
              formInstance.resetFields();
              (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
            }
          }), wrapperNode);
        };

        var _default = Form;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        './useForm': _req6,
        './FieldContext': _req7,
        './FormContext': _req8,
        './utils/valueUtil': _req9
      }));
    }
  };
});
//# sourceMappingURL=96f90282aa00b3febe681e4c7a128327d6ac14c9.js.map