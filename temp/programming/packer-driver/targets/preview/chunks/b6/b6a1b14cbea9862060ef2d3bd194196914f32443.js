System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "react", "rc-util/lib/warning", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req2 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req4 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
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
        exports.default = void 0;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _FieldContext = _interopRequireDefault(require("./FieldContext"));

        var _Field = _interopRequireDefault(require("./Field"));

        var _valueUtil = require("./utils/valueUtil");

        var _ListContext = _interopRequireDefault(require("./ListContext"));

        var List = function List(_ref) {
          var name = _ref.name,
              initialValue = _ref.initialValue,
              children = _ref.children,
              rules = _ref.rules,
              validateTrigger = _ref.validateTrigger;
          var context = React.useContext(_FieldContext.default);
          var keyRef = React.useRef({
            keys: [],
            id: 0
          });
          var keyManager = keyRef.current;
          var prefixName = React.useMemo(function () {
            var parentPrefixName = (0, _valueUtil.getNamePath)(context.prefixName) || [];
            return [].concat((0, _toConsumableArray2.default)(parentPrefixName), (0, _toConsumableArray2.default)((0, _valueUtil.getNamePath)(name)));
          }, [context.prefixName, name]);
          var fieldContext = React.useMemo(function () {
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, context), {}, {
              prefixName: prefixName
            });
          }, [context, prefixName]); // List context

          var listContext = React.useMemo(function () {
            return {
              getKey: function getKey(namePath) {
                var len = prefixName.length;
                var pathName = namePath[len];
                return [keyManager.keys[pathName], namePath.slice(len + 1)];
              }
            };
          }, [prefixName]); // User should not pass `children` as other type.

          if (typeof children !== 'function') {
            (0, _warning.default)(false, 'Form.List only accepts function as children.');
            return null;
          }

          var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
            var source = _ref2.source;

            if (source === 'internal') {
              return false;
            }

            return prevValue !== nextValue;
          };

          return /*#__PURE__*/React.createElement(_ListContext.default.Provider, {
            value: listContext
          }, /*#__PURE__*/React.createElement(_FieldContext.default.Provider, {
            value: fieldContext
          }, /*#__PURE__*/React.createElement(_Field.default, {
            name: [],
            shouldUpdate: shouldUpdate,
            rules: rules,
            validateTrigger: validateTrigger,
            initialValue: initialValue,
            isList: true
          }, function (_ref3, meta) {
            var _ref3$value = _ref3.value,
                value = _ref3$value === void 0 ? [] : _ref3$value,
                onChange = _ref3.onChange;
            var getFieldValue = context.getFieldValue;

            var getNewValue = function getNewValue() {
              var values = getFieldValue(prefixName || []);
              return values || [];
            };
            /**
             * Always get latest value in case user update fields by `form` api.
             */


            var operations = {
              add: function add(defaultValue, index) {
                // Mapping keys
                var newValue = getNewValue();

                if (index >= 0 && index <= newValue.length) {
                  keyManager.keys = [].concat((0, _toConsumableArray2.default)(keyManager.keys.slice(0, index)), [keyManager.id], (0, _toConsumableArray2.default)(keyManager.keys.slice(index)));
                  onChange([].concat((0, _toConsumableArray2.default)(newValue.slice(0, index)), [defaultValue], (0, _toConsumableArray2.default)(newValue.slice(index))));
                } else {
                  if (process.env.NODE_ENV !== 'production' && (index < 0 || index > newValue.length)) {
                    (0, _warning.default)(false, 'The second parameter of the add function should be a valid positive number.');
                  }

                  keyManager.keys = [].concat((0, _toConsumableArray2.default)(keyManager.keys), [keyManager.id]);
                  onChange([].concat((0, _toConsumableArray2.default)(newValue), [defaultValue]));
                }

                keyManager.id += 1;
              },
              remove: function remove(index) {
                var newValue = getNewValue();
                var indexSet = new Set(Array.isArray(index) ? index : [index]);

                if (indexSet.size <= 0) {
                  return;
                }

                keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
                  return !indexSet.has(keysIndex);
                }); // Trigger store change

                onChange(newValue.filter(function (_, valueIndex) {
                  return !indexSet.has(valueIndex);
                }));
              },
              move: function move(from, to) {
                if (from === to) {
                  return;
                }

                var newValue = getNewValue(); // Do not handle out of range

                if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
                  return;
                }

                keyManager.keys = (0, _valueUtil.move)(keyManager.keys, from, to); // Trigger store change

                onChange((0, _valueUtil.move)(newValue, from, to));
              }
            };
            var listValue = value || [];

            if (!Array.isArray(listValue)) {
              listValue = [];

              if (process.env.NODE_ENV !== 'production') {
                (0, _warning.default)(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
              }
            }

            return children(listValue.map(function (__, index) {
              var key = keyManager.keys[index];

              if (key === undefined) {
                keyManager.keys[index] = keyManager.id;
                key = keyManager.keys[index];
                keyManager.id += 1;
              }

              return {
                name: index,
                key: key,
                isListField: true
              };
            }), operations, meta);
          })));
        };

        var _default = List;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/toConsumableArray': _req2,
        'react': _req3,
        'rc-util/lib/warning': _req4,
        './FieldContext': _req5,
        './Field': _req6,
        './utils/valueUtil': _req7,
        './ListContext': _req8
      }));
    }
  };
});
//# sourceMappingURL=b6a1b14cbea9862060ef2d3bd194196914f32443.js.map