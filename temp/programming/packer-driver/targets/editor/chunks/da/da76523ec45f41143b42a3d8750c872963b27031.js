System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/classCallCheck", "rc-util/lib/warning", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default0, _FormStore, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req6 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req7 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req14 = _unresolved_7.__cjsMetaURL;
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
        exports.default = exports.FormStore = void 0;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var React = _interopRequireWildcard(require("react"));

        var _FieldContext = require("./FieldContext");

        var _asyncUtil = require("./utils/asyncUtil");

        var _cloneDeep = _interopRequireDefault(require("./utils/cloneDeep"));

        var _messages = require("./utils/messages");

        var _NameMap = _interopRequireDefault(require("./utils/NameMap"));

        var _valueUtil = require("./utils/valueUtil");

        var _excluded = ["name", "errors"];
        var FormStore = /*#__PURE__*/(0, _createClass2.default)(function FormStore(forceRootUpdate) {
          var _this = this;

          (0, _classCallCheck2.default)(this, FormStore);
          this.formHooked = false;
          this.forceRootUpdate = void 0;
          this.subscribable = true;
          this.store = {};
          this.fieldEntities = [];
          this.initialValues = {};
          this.callbacks = {};
          this.validateMessages = null;
          this.preserve = null;
          this.lastValidatePromise = null;

          this.getForm = function () {
            return {
              getFieldValue: _this.getFieldValue,
              getFieldsValue: _this.getFieldsValue,
              getFieldError: _this.getFieldError,
              getFieldWarning: _this.getFieldWarning,
              getFieldsError: _this.getFieldsError,
              isFieldsTouched: _this.isFieldsTouched,
              isFieldTouched: _this.isFieldTouched,
              isFieldValidating: _this.isFieldValidating,
              isFieldsValidating: _this.isFieldsValidating,
              resetFields: _this.resetFields,
              setFields: _this.setFields,
              setFieldValue: _this.setFieldValue,
              setFieldsValue: _this.setFieldsValue,
              validateFields: _this.validateFields,
              submit: _this.submit,
              _init: true,
              getInternalHooks: _this.getInternalHooks
            };
          };

          this.getInternalHooks = function (key) {
            if (key === _FieldContext.HOOK_MARK) {
              _this.formHooked = true;
              return {
                dispatch: _this.dispatch,
                initEntityValue: _this.initEntityValue,
                registerField: _this.registerField,
                useSubscribe: _this.useSubscribe,
                setInitialValues: _this.setInitialValues,
                destroyForm: _this.destroyForm,
                setCallbacks: _this.setCallbacks,
                setValidateMessages: _this.setValidateMessages,
                getFields: _this.getFields,
                setPreserve: _this.setPreserve,
                getInitialValue: _this.getInitialValue,
                registerWatch: _this.registerWatch
              };
            }

            (0, _warning.default)(false, '`getInternalHooks` is internal usage. Should not call directly.');
            return null;
          };

          this.useSubscribe = function (subscribable) {
            _this.subscribable = subscribable;
          };

          this.prevWithoutPreserves = null;

          this.setInitialValues = function (initialValues, init) {
            _this.initialValues = initialValues || {};

            if (init) {
              var _this$prevWithoutPres;

              var nextStore = (0, _valueUtil.setValues)({}, initialValues, _this.store); // We will take consider prev form unmount fields.
              // When the field is not `preserve`, we need fill this with initialValues instead of store.
              // eslint-disable-next-line array-callback-return

              (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
                var namePath = _ref.key;
                nextStore = (0, _valueUtil.setValue)(nextStore, namePath, (0, _valueUtil.getValue)(initialValues, namePath));
              });
              _this.prevWithoutPreserves = null;

              _this.updateStore(nextStore);
            }
          };

          this.destroyForm = function () {
            var prevWithoutPreserves = new _NameMap.default();

            _this.getFieldEntities(true).forEach(function (entity) {
              if (!_this.isMergedPreserve(entity.isPreserve())) {
                prevWithoutPreserves.set(entity.getNamePath(), true);
              }
            });

            _this.prevWithoutPreserves = prevWithoutPreserves;
          };

          this.getInitialValue = function (namePath) {
            var initValue = (0, _valueUtil.getValue)(_this.initialValues, namePath); // Not cloneDeep when without `namePath`

            return namePath.length ? (0, _cloneDeep.default)(initValue) : initValue;
          };

          this.setCallbacks = function (callbacks) {
            _this.callbacks = callbacks;
          };

          this.setValidateMessages = function (validateMessages) {
            _this.validateMessages = validateMessages;
          };

          this.setPreserve = function (preserve) {
            _this.preserve = preserve;
          };

          this.watchList = [];

          this.registerWatch = function (callback) {
            _this.watchList.push(callback);

            return function () {
              _this.watchList = _this.watchList.filter(function (fn) {
                return fn !== callback;
              });
            };
          };

          this.notifyWatch = function () {
            var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []; // No need to cost perf when nothing need to watch

            if (_this.watchList.length) {
              var values = _this.getFieldsValue();

              _this.watchList.forEach(function (callback) {
                callback(values, namePath);
              });
            }
          };

          this.timeoutId = null;

          this.warningUnhooked = function () {
            if (process.env.NODE_ENV !== 'production' && !_this.timeoutId && typeof window !== 'undefined') {
              _this.timeoutId = setTimeout(function () {
                _this.timeoutId = null;

                if (!_this.formHooked) {
                  (0, _warning.default)(false, 'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?');
                }
              });
            }
          };

          this.updateStore = function (nextStore) {
            _this.store = nextStore;
          };

          this.getFieldEntities = function () {
            var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!pure) {
              return _this.fieldEntities;
            }

            return _this.fieldEntities.filter(function (field) {
              return field.getNamePath().length;
            });
          };

          this.getFieldsMap = function () {
            var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var cache = new _NameMap.default();

            _this.getFieldEntities(pure).forEach(function (field) {
              var namePath = field.getNamePath();
              cache.set(namePath, field);
            });

            return cache;
          };

          this.getFieldEntitiesForNamePathList = function (nameList) {
            if (!nameList) {
              return _this.getFieldEntities(true);
            }

            var cache = _this.getFieldsMap(true);

            return nameList.map(function (name) {
              var namePath = (0, _valueUtil.getNamePath)(name);
              return cache.get(namePath) || {
                INVALIDATE_NAME_PATH: (0, _valueUtil.getNamePath)(name)
              };
            });
          };

          this.getFieldsValue = function (nameList, filterFunc) {
            _this.warningUnhooked();

            if (nameList === true && !filterFunc) {
              return _this.store;
            }

            var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

            var filteredNameList = [];
            fieldEntities.forEach(function (entity) {
              var _entity$isListField;

              var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
              // since parent field is already take in count

              if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
                return;
              }

              if (!filterFunc) {
                filteredNameList.push(namePath);
              } else {
                var meta = 'getMeta' in entity ? entity.getMeta() : null;

                if (filterFunc(meta)) {
                  filteredNameList.push(namePath);
                }
              }
            });
            return (0, _valueUtil.cloneByNamePathList)(_this.store, filteredNameList.map(_valueUtil.getNamePath));
          };

          this.getFieldValue = function (name) {
            _this.warningUnhooked();

            var namePath = (0, _valueUtil.getNamePath)(name);
            return (0, _valueUtil.getValue)(_this.store, namePath);
          };

          this.getFieldsError = function (nameList) {
            _this.warningUnhooked();

            var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

            return fieldEntities.map(function (entity, index) {
              if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
                return {
                  name: entity.getNamePath(),
                  errors: entity.getErrors(),
                  warnings: entity.getWarnings()
                };
              }

              return {
                name: (0, _valueUtil.getNamePath)(nameList[index]),
                errors: [],
                warnings: []
              };
            });
          };

          this.getFieldError = function (name) {
            _this.warningUnhooked();

            var namePath = (0, _valueUtil.getNamePath)(name);

            var fieldError = _this.getFieldsError([namePath])[0];

            return fieldError.errors;
          };

          this.getFieldWarning = function (name) {
            _this.warningUnhooked();

            var namePath = (0, _valueUtil.getNamePath)(name);

            var fieldError = _this.getFieldsError([namePath])[0];

            return fieldError.warnings;
          };

          this.isFieldsTouched = function () {
            _this.warningUnhooked();

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var arg0 = args[0],
                arg1 = args[1];
            var namePathList;
            var isAllFieldsTouched = false;

            if (args.length === 0) {
              namePathList = null;
            } else if (args.length === 1) {
              if (Array.isArray(arg0)) {
                namePathList = arg0.map(_valueUtil.getNamePath);
                isAllFieldsTouched = false;
              } else {
                namePathList = null;
                isAllFieldsTouched = arg0;
              }
            } else {
              namePathList = arg0.map(_valueUtil.getNamePath);
              isAllFieldsTouched = arg1;
            }

            var fieldEntities = _this.getFieldEntities(true);

            var isFieldTouched = function isFieldTouched(field) {
              return field.isFieldTouched();
            }; // ===== Will get fully compare when not config namePathList =====


            if (!namePathList) {
              return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
            } // Generate a nest tree for validate


            var map = new _NameMap.default();
            namePathList.forEach(function (shortNamePath) {
              map.set(shortNamePath, []);
            });
            fieldEntities.forEach(function (field) {
              var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

              namePathList.forEach(function (shortNamePath) {
                if (shortNamePath.every(function (nameUnit, i) {
                  return fieldNamePath[i] === nameUnit;
                })) {
                  map.update(shortNamePath, function (list) {
                    return [].concat((0, _toConsumableArray2.default)(list), [field]);
                  });
                }
              });
            }); // Check if NameMap value is touched

            var isNamePathListTouched = function isNamePathListTouched(entities) {
              return entities.some(isFieldTouched);
            };

            var namePathListEntities = map.map(function (_ref2) {
              var value = _ref2.value;
              return value;
            });
            return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
          };

          this.isFieldTouched = function (name) {
            _this.warningUnhooked();

            return _this.isFieldsTouched([name]);
          };

          this.isFieldsValidating = function (nameList) {
            _this.warningUnhooked();

            var fieldEntities = _this.getFieldEntities();

            if (!nameList) {
              return fieldEntities.some(function (testField) {
                return testField.isFieldValidating();
              });
            }

            var namePathList = nameList.map(_valueUtil.getNamePath);
            return fieldEntities.some(function (testField) {
              var fieldNamePath = testField.getNamePath();
              return (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath) && testField.isFieldValidating();
            });
          };

          this.isFieldValidating = function (name) {
            _this.warningUnhooked();

            return _this.isFieldsValidating([name]);
          };

          this.resetWithFieldInitialValue = function () {
            var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // Create cache

            var cache = new _NameMap.default();

            var fieldEntities = _this.getFieldEntities(true);

            fieldEntities.forEach(function (field) {
              var initialValue = field.props.initialValue;
              var namePath = field.getNamePath(); // Record only if has `initialValue`

              if (initialValue !== undefined) {
                var records = cache.get(namePath) || new Set();
                records.add({
                  entity: field,
                  value: initialValue
                });
                cache.set(namePath, records);
              }
            }); // Reset

            var resetWithFields = function resetWithFields(entities) {
              entities.forEach(function (field) {
                var initialValue = field.props.initialValue;

                if (initialValue !== undefined) {
                  var namePath = field.getNamePath();

                  var formInitialValue = _this.getInitialValue(namePath);

                  if (formInitialValue !== undefined) {
                    // Warning if conflict with form initialValues and do not modify value
                    (0, _warning.default)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
                  } else {
                    var records = cache.get(namePath);

                    if (records && records.size > 1) {
                      // Warning if multiple field set `initialValue`and do not modify value
                      (0, _warning.default)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
                    } else if (records) {
                      var originValue = _this.getFieldValue(namePath); // Set `initialValue`


                      if (!info.skipExist || originValue === undefined) {
                        _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, (0, _toConsumableArray2.default)(records)[0].value));
                      }
                    }
                  }
                }
              });
            };

            var requiredFieldEntities;

            if (info.entities) {
              requiredFieldEntities = info.entities;
            } else if (info.namePathList) {
              requiredFieldEntities = [];
              info.namePathList.forEach(function (namePath) {
                var records = cache.get(namePath);

                if (records) {
                  var _requiredFieldEntitie;

                  (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0, _toConsumableArray2.default)((0, _toConsumableArray2.default)(records).map(function (r) {
                    return r.entity;
                  })));
                }
              });
            } else {
              requiredFieldEntities = fieldEntities;
            }

            resetWithFields(requiredFieldEntities);
          };

          this.resetFields = function (nameList) {
            _this.warningUnhooked();

            var prevStore = _this.store;

            if (!nameList) {
              _this.updateStore((0, _valueUtil.setValues)({}, _this.initialValues));

              _this.resetWithFieldInitialValue();

              _this.notifyObservers(prevStore, null, {
                type: 'reset'
              });

              _this.notifyWatch();

              return;
            } // Reset by `nameList`


            var namePathList = nameList.map(_valueUtil.getNamePath);
            namePathList.forEach(function (namePath) {
              var initialValue = _this.getInitialValue(namePath);

              _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
            });

            _this.resetWithFieldInitialValue({
              namePathList: namePathList
            });

            _this.notifyObservers(prevStore, namePathList, {
              type: 'reset'
            });

            _this.notifyWatch(namePathList);
          };

          this.setFields = function (fields) {
            _this.warningUnhooked();

            var prevStore = _this.store;
            var namePathList = [];
            fields.forEach(function (fieldData) {
              var name = fieldData.name,
                  errors = fieldData.errors,
                  data = (0, _objectWithoutProperties2.default)(fieldData, _excluded);
              var namePath = (0, _valueUtil.getNamePath)(name);
              namePathList.push(namePath); // Value

              if ('value' in data) {
                _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, data.value));
              }

              _this.notifyObservers(prevStore, [namePath], {
                type: 'setField',
                data: fieldData
              });
            });

            _this.notifyWatch(namePathList);
          };

          this.getFields = function () {
            var entities = _this.getFieldEntities(true);

            var fields = entities.map(function (field) {
              var namePath = field.getNamePath();
              var meta = field.getMeta();
              var fieldData = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, meta), {}, {
                name: namePath,
                value: _this.getFieldValue(namePath)
              });
              Object.defineProperty(fieldData, 'originRCField', {
                value: true
              });
              return fieldData;
            });
            return fields;
          };

          this.initEntityValue = function (entity) {
            var initialValue = entity.props.initialValue;

            if (initialValue !== undefined) {
              var namePath = entity.getNamePath();
              var prevValue = (0, _valueUtil.getValue)(_this.store, namePath);

              if (prevValue === undefined) {
                _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
              }
            }
          };

          this.isMergedPreserve = function (fieldPreserve) {
            var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
            return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
          };

          this.registerField = function (entity) {
            _this.fieldEntities.push(entity);

            var namePath = entity.getNamePath();

            _this.notifyWatch([namePath]); // Set initial values


            if (entity.props.initialValue !== undefined) {
              var prevStore = _this.store;

              _this.resetWithFieldInitialValue({
                entities: [entity],
                skipExist: true
              });

              _this.notifyObservers(prevStore, [entity.getNamePath()], {
                type: 'valueUpdate',
                source: 'internal'
              });
            } // un-register field callback


            return function (isListField, preserve) {
              var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
              _this.fieldEntities = _this.fieldEntities.filter(function (item) {
                return item !== entity;
              }); // Clean up store value if not preserve

              if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
                var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);

                if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
                  return (// Only reset when no namePath exist
                    !(0, _valueUtil.matchNamePath)(field.getNamePath(), namePath)
                  );
                })) {
                  var _prevStore = _this.store;

                  _this.updateStore((0, _valueUtil.setValue)(_prevStore, namePath, defaultValue, true)); // Notify that field is unmount


                  _this.notifyObservers(_prevStore, [namePath], {
                    type: 'remove'
                  }); // Dependencies update


                  _this.triggerDependenciesUpdate(_prevStore, namePath);
                }
              }

              _this.notifyWatch([namePath]);
            };
          };

          this.dispatch = function (action) {
            switch (action.type) {
              case 'updateValue':
                {
                  var namePath = action.namePath,
                      value = action.value;

                  _this.updateValue(namePath, value);

                  break;
                }

              case 'validateField':
                {
                  var _namePath = action.namePath,
                      triggerName = action.triggerName;

                  _this.validateFields([_namePath], {
                    triggerName: triggerName
                  });

                  break;
                }

              default: // Currently we don't have other action. Do nothing.

            }
          };

          this.notifyObservers = function (prevStore, namePathList, info) {
            if (_this.subscribable) {
              var mergedInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, info), {}, {
                store: _this.getFieldsValue(true)
              });

              _this.getFieldEntities().forEach(function (_ref3) {
                var onStoreChange = _ref3.onStoreChange;
                onStoreChange(prevStore, namePathList, mergedInfo);
              });
            } else {
              _this.forceRootUpdate();
            }
          };

          this.triggerDependenciesUpdate = function (prevStore, namePath) {
            var childrenFields = _this.getDependencyChildrenFields(namePath);

            if (childrenFields.length) {
              _this.validateFields(childrenFields);
            }

            _this.notifyObservers(prevStore, childrenFields, {
              type: 'dependenciesUpdate',
              relatedFields: [namePath].concat((0, _toConsumableArray2.default)(childrenFields))
            });

            return childrenFields;
          };

          this.updateValue = function (name, value) {
            var namePath = (0, _valueUtil.getNamePath)(name);
            var prevStore = _this.store;

            _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, value));

            _this.notifyObservers(prevStore, [namePath], {
              type: 'valueUpdate',
              source: 'internal'
            });

            _this.notifyWatch([namePath]); // Dependencies update


            var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath); // trigger callback function


            var onValuesChange = _this.callbacks.onValuesChange;

            if (onValuesChange) {
              var changedValues = (0, _valueUtil.cloneByNamePathList)(_this.store, [namePath]);
              onValuesChange(changedValues, _this.getFieldsValue());
            }

            _this.triggerOnFieldsChange([namePath].concat((0, _toConsumableArray2.default)(childrenFields)));
          };

          this.setFieldsValue = function (store) {
            _this.warningUnhooked();

            var prevStore = _this.store;

            if (store) {
              var nextStore = (0, _valueUtil.setValues)(_this.store, store);

              _this.updateStore(nextStore);
            }

            _this.notifyObservers(prevStore, null, {
              type: 'valueUpdate',
              source: 'external'
            });

            _this.notifyWatch();
          };

          this.setFieldValue = function (name, value) {
            _this.setFields([{
              name: name,
              value: value
            }]);
          };

          this.getDependencyChildrenFields = function (rootNamePath) {
            var children = new Set();
            var childrenFields = [];
            var dependencies2fields = new _NameMap.default();
            /**
             * Generate maps
             * Can use cache to save perf if user report performance issue with this
             */

            _this.getFieldEntities().forEach(function (field) {
              var dependencies = field.props.dependencies;
              (dependencies || []).forEach(function (dependency) {
                var dependencyNamePath = (0, _valueUtil.getNamePath)(dependency);
                dependencies2fields.update(dependencyNamePath, function () {
                  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
                  fields.add(field);
                  return fields;
                });
              });
            });

            var fillChildren = function fillChildren(namePath) {
              var fields = dependencies2fields.get(namePath) || new Set();
              fields.forEach(function (field) {
                if (!children.has(field)) {
                  children.add(field);
                  var fieldNamePath = field.getNamePath();

                  if (field.isFieldDirty() && fieldNamePath.length) {
                    childrenFields.push(fieldNamePath);
                    fillChildren(fieldNamePath);
                  }
                }
              });
            };

            fillChildren(rootNamePath);
            return childrenFields;
          };

          this.triggerOnFieldsChange = function (namePathList, filedErrors) {
            var onFieldsChange = _this.callbacks.onFieldsChange;

            if (onFieldsChange) {
              var fields = _this.getFields();
              /**
               * Fill errors since `fields` may be replaced by controlled fields
               */


              if (filedErrors) {
                var cache = new _NameMap.default();
                filedErrors.forEach(function (_ref4) {
                  var name = _ref4.name,
                      errors = _ref4.errors;
                  cache.set(name, errors);
                });
                fields.forEach(function (field) {
                  // eslint-disable-next-line no-param-reassign
                  field.errors = cache.get(field.name) || field.errors;
                });
              }

              var changedFields = fields.filter(function (_ref5) {
                var fieldName = _ref5.name;
                return (0, _valueUtil.containsNamePath)(namePathList, fieldName);
              });
              onFieldsChange(changedFields, fields);
            }
          };

          this.validateFields = function (nameList, options) {
            _this.warningUnhooked();

            var provideNameList = !!nameList;
            var namePathList = provideNameList ? nameList.map(_valueUtil.getNamePath) : []; // Collect result in promise list

            var promiseList = [];

            _this.getFieldEntities(true).forEach(function (field) {
              // Add field if not provide `nameList`
              if (!provideNameList) {
                namePathList.push(field.getNamePath());
              }
              /**
               * Recursive validate if configured.
               * TODO: perf improvement @zombieJ
               */


              if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
                var namePath = field.getNamePath();

                if ( // nameList[i] === undefined 说明是以 nameList 开头的
                // ['name'] -> ['name','list']
                namePath.every(function (nameUnit, i) {
                  return nameList[i] === nameUnit || nameList[i] === undefined;
                })) {
                  namePathList.push(namePath);
                }
              } // Skip if without rule


              if (!field.props.rules || !field.props.rules.length) {
                return;
              }

              var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

              if (!provideNameList || (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath)) {
                var promise = field.validateRules((0, _objectSpread2.default)({
                  validateMessages: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _messages.defaultValidateMessages), _this.validateMessages)
                }, options)); // Wrap promise with field

                promiseList.push(promise.then(function () {
                  return {
                    name: fieldNamePath,
                    errors: [],
                    warnings: []
                  };
                }).catch(function (ruleErrors) {
                  var _ruleErrors$forEach;

                  var mergedErrors = [];
                  var mergedWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
                    var warningOnly = _ref6.rule.warningOnly,
                        errors = _ref6.errors;

                    if (warningOnly) {
                      mergedWarnings.push.apply(mergedWarnings, (0, _toConsumableArray2.default)(errors));
                    } else {
                      mergedErrors.push.apply(mergedErrors, (0, _toConsumableArray2.default)(errors));
                    }
                  });

                  if (mergedErrors.length) {
                    return Promise.reject({
                      name: fieldNamePath,
                      errors: mergedErrors,
                      warnings: mergedWarnings
                    });
                  }

                  return {
                    name: fieldNamePath,
                    errors: mergedErrors,
                    warnings: mergedWarnings
                  };
                }));
              }
            });

            var summaryPromise = (0, _asyncUtil.allPromiseFinish)(promiseList);
            _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

            summaryPromise.catch(function (results) {
              return results;
            }).then(function (results) {
              var resultNamePathList = results.map(function (_ref7) {
                var name = _ref7.name;
                return name;
              });

              _this.notifyObservers(_this.store, resultNamePathList, {
                type: 'validateFinish'
              });

              _this.triggerOnFieldsChange(resultNamePathList, results);
            });
            var returnPromise = summaryPromise.then(function () {
              if (_this.lastValidatePromise === summaryPromise) {
                return Promise.resolve(_this.getFieldsValue(namePathList));
              }

              return Promise.reject([]);
            }).catch(function (results) {
              var errorList = results.filter(function (result) {
                return result && result.errors.length;
              });
              return Promise.reject({
                values: _this.getFieldsValue(namePathList),
                errorFields: errorList,
                outOfDate: _this.lastValidatePromise !== summaryPromise
              });
            }); // Do not throw in console

            returnPromise.catch(function (e) {
              return e;
            });
            return returnPromise;
          };

          this.submit = function () {
            _this.warningUnhooked();

            _this.validateFields().then(function (values) {
              var onFinish = _this.callbacks.onFinish;

              if (onFinish) {
                try {
                  onFinish(values);
                } catch (err) {
                  // Should print error if user `onFinish` callback failed
                  console.error(err);
                }
              }
            }).catch(function (e) {
              var onFinishFailed = _this.callbacks.onFinishFailed;

              if (onFinishFailed) {
                onFinishFailed(e);
              }
            });
          };

          this.forceRootUpdate = forceRootUpdate;
        });
        exports.FormStore = FormStore;

        function useForm(form) {
          var formRef = React.useRef();

          var _React$useState = React.useState({}),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              forceUpdate = _React$useState2[1];

          if (!formRef.current) {
            if (form) {
              formRef.current = form;
            } else {
              // Create a new FormStore if not provided
              var forceReRender = function forceReRender() {
                forceUpdate({});
              };

              var formStore = new FormStore(forceReRender);
              formRef.current = formStore.getForm();
            }
          }

          return [formRef.current];
        }

        var _default = useForm;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _FormStore = module.exports.FormStore;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/classCallCheck': _req6,
        'rc-util/lib/warning': _req7,
        'react': _req8,
        './FieldContext': _req9,
        './utils/asyncUtil': _req10,
        './utils/cloneDeep': _req11,
        './utils/messages': _req12,
        './utils/NameMap': _req13,
        './utils/valueUtil': _req14
      }));
    }
  };
});
//# sourceMappingURL=da76523ec45f41143b42a3d8750c872963b27031.js.map