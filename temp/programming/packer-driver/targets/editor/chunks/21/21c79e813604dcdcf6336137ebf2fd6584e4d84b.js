System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", ".", "rc-util/lib/warning", "__unresolved_1", "react", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, _stringify, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_2) {
      _req1 = _2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req2 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_react2) {
      _req4 = _react2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;
        exports.stringify = stringify;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _ = require(".");

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _FieldContext = require("./FieldContext");

        var _react = require("react");

        var _valueUtil = require("./utils/valueUtil");

        function stringify(value) {
          try {
            return JSON.stringify(value);
          } catch (err) {
            return Math.random();
          }
        }

        var useWatchWarning = process.env.NODE_ENV !== 'production' ? function (namePath) {
          var fullyStr = namePath.join('__RC_FIELD_FORM_SPLIT__');
          var nameStrRef = (0, _react.useRef)(fullyStr);
          (0, _warning.default)(nameStrRef.current === fullyStr, '`useWatch` is not support dynamic `namePath`. Please provide static instead.');
        } : function () {};

        function useWatch() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var _args$ = args[0],
              dependencies = _args$ === void 0 ? [] : _args$,
              form = args[1];

          var _useState = (0, _react.useState)(),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              value = _useState2[0],
              setValue = _useState2[1];

          var valueStr = (0, _react.useMemo)(function () {
            return stringify(value);
          }, [value]);
          var valueStrRef = (0, _react.useRef)(valueStr);
          valueStrRef.current = valueStr;
          var fieldContext = (0, _react.useContext)(_.FieldContext);
          var formInstance = form || fieldContext;
          var isValidForm = formInstance && formInstance._init; // Warning if not exist form instance

          if (process.env.NODE_ENV !== 'production') {
            (0, _warning.default)(args.length === 2 ? form ? isValidForm : true : isValidForm, 'useWatch requires a form instance since it can not auto detect from context.');
          }

          var namePath = (0, _valueUtil.getNamePath)(dependencies);
          var namePathRef = (0, _react.useRef)(namePath);
          namePathRef.current = namePath;
          useWatchWarning(namePath);
          (0, _react.useEffect)(function () {
            // Skip if not exist form instance
            if (!isValidForm) {
              return;
            }

            var getFieldsValue = formInstance.getFieldsValue,
                getInternalHooks = formInstance.getInternalHooks;

            var _getInternalHooks = getInternalHooks(_FieldContext.HOOK_MARK),
                registerWatch = _getInternalHooks.registerWatch;

            var cancelRegister = registerWatch(function (store) {
              var newValue = (0, _valueUtil.getValue)(store, namePathRef.current);
              var nextValueStr = stringify(newValue); // Compare stringify in case it's nest object

              if (valueStrRef.current !== nextValueStr) {
                valueStrRef.current = nextValueStr;
                setValue(newValue);
              }
            }); // TODO: We can improve this perf in future

            var initialValue = (0, _valueUtil.getValue)(getFieldsValue(), namePathRef.current);
            setValue(initialValue);
            return cancelRegister;
          }, // We do not need re-register since namePath content is the same
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [isValidForm]);
          return value;
        }

        var _default = useWatch;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _stringify = module.exports.stringify;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        '.': _req1,
        'rc-util/lib/warning': _req2,
        './FieldContext': _req3,
        'react': _req4,
        './utils/valueUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=21c79e813604dcdcf6336137ebf2fd6584e4d84b.js.map