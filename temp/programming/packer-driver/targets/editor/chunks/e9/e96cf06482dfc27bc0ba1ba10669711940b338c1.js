System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/regeneratorRuntime", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/asyncToGenerator", "async-validator", "react", "rc-util/lib/warning", "__unresolved_1", "__unresolved_2"], function (_export, _context5) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _validateRules, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersRegeneratorRuntime) {
      _req3 = _babelRuntimeHelpersRegeneratorRuntime.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req4 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAsyncToGenerator) {
      _req5 = _babelRuntimeHelpersAsyncToGenerator.__cjsMetaURL;
    }, function (_asyncValidator2) {
      _req6 = _asyncValidator2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req8 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context5.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.validateRules = validateRules;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

        var _asyncValidator = _interopRequireDefault(require("async-validator"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _messages = require("./messages");

        var _valueUtil = require("./valueUtil"); // Remove incorrect original ts define


        var AsyncValidator = _asyncValidator.default;
        /**
         * Replace with template.
         *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
         */

        function replaceMessage(template, kv) {
          return template.replace(/\$\{\w+\}/g, function (str) {
            var key = str.slice(2, -1);
            return kv[key];
          });
        }

        var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';

        function validateRule(_x, _x2, _x3, _x4, _x5) {
          return _validateRule.apply(this, arguments);
        }
        /**
         * We use `async-validator` to validate the value.
         * But only check one value in a time to avoid namePath validate issue.
         */


        function _validateRule() {
          _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2(name, value, rule, options, messageVariables) {
            var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
            return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  cloneRule = (0, _objectSpread2.default)({}, rule); // Bug of `async-validator`
                  // https://github.com/react-component/field-form/issues/316
                  // https://github.com/react-component/field-form/issues/313

                  delete cloneRule.ruleIndex;

                  if (cloneRule.validator) {
                    originValidator = cloneRule.validator;

                    cloneRule.validator = function () {
                      try {
                        return originValidator.apply(void 0, arguments);
                      } catch (error) {
                        console.error(error);
                        return Promise.reject(CODE_LOGIC_ERROR);
                      }
                    };
                  } // We should special handle array validate


                  subRuleField = null;

                  if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
                    subRuleField = cloneRule.defaultField;
                    delete cloneRule.defaultField;
                  }

                  validator = new AsyncValidator((0, _defineProperty2.default)({}, name, [cloneRule]));
                  messages = (0, _valueUtil.setValues)({}, _messages.defaultValidateMessages, options.validateMessages);
                  validator.messages(messages);
                  result = [];
                  _context2.prev = 9;
                  _context2.next = 12;
                  return Promise.resolve(validator.validate((0, _defineProperty2.default)({}, name, value), (0, _objectSpread2.default)({}, options)));

                case 12:
                  _context2.next = 17;
                  break;

                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](9);

                  if (_context2.t0.errors) {
                    result = _context2.t0.errors.map(function (_ref4, index) {
                      var message = _ref4.message;
                      var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                      return /*#__PURE__*/React.isValidElement(mergedMessage) ?
                      /*#__PURE__*/
                      // Wrap ReactNode with `key`
                      React.cloneElement(mergedMessage, {
                        key: "error_".concat(index)
                      }) : mergedMessage;
                    });
                  }

                case 17:
                  if (!(!result.length && subRuleField)) {
                    _context2.next = 22;
                    break;
                  }

                  _context2.next = 20;
                  return Promise.all(value.map(function (subValue, i) {
                    return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
                  }));

                case 20:
                  subResults = _context2.sent;
                  return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
                    return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(errors));
                  }, []));

                case 22:
                  // Replace message with variables
                  kv = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rule), {}, {
                    name: name,
                    enum: (rule.enum || []).join(', ')
                  }, messageVariables);
                  fillVariableResult = result.map(function (error) {
                    if (typeof error === 'string') {
                      return replaceMessage(error, kv);
                    }

                    return error;
                  });
                  return _context2.abrupt("return", fillVariableResult);

                case 25:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[9, 14]]);
          }));
          return _validateRule.apply(this, arguments);
        }

        function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
          var name = namePath.join('.'); // Fill rule with context

          var filledRules = rules.map(function (currentRule, ruleIndex) {
            var originValidatorFunc = currentRule.validator;
            var cloneRule = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentRule), {}, {
              ruleIndex: ruleIndex
            }); // Replace validator if needed

            if (originValidatorFunc) {
              cloneRule.validator = function (rule, val, callback) {
                var hasPromise = false; // Wrap callback only accept when promise not provided

                var wrappedCallback = function wrappedCallback() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  } // Wait a tick to make sure return type is a promise


                  Promise.resolve().then(function () {
                    (0, _warning.default)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

                    if (!hasPromise) {
                      callback.apply(void 0, args);
                    }
                  });
                }; // Get promise


                var promise = originValidatorFunc(rule, val, wrappedCallback);
                hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
                /**
                 * 1. Use promise as the first priority.
                 * 2. If promise not exist, use callback with warning instead
                 */

                (0, _warning.default)(hasPromise, '`callback` is deprecated. Please return a promise instead.');

                if (hasPromise) {
                  promise.then(function () {
                    callback();
                  }).catch(function (err) {
                    callback(err || ' ');
                  });
                }
              };
            }

            return cloneRule;
          }).sort(function (_ref, _ref2) {
            var w1 = _ref.warningOnly,
                i1 = _ref.ruleIndex;
            var w2 = _ref2.warningOnly,
                i2 = _ref2.ruleIndex;

            if (!!w1 === !!w2) {
              // Let keep origin order
              return i1 - i2;
            }

            if (w1) {
              return 1;
            }

            return -1;
          }); // Do validate rules

          var summaryPromise;

          if (validateFirst === true) {
            // >>>>> Validate by serialization
            summaryPromise = new Promise( /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(resolve, reject) {
                var i, rule, errors;
                return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      i = 0;

                    case 1:
                      if (!(i < filledRules.length)) {
                        _context.next = 12;
                        break;
                      }

                      rule = filledRules[i];
                      _context.next = 5;
                      return validateRule(name, value, rule, options, messageVariables);

                    case 5:
                      errors = _context.sent;

                      if (!errors.length) {
                        _context.next = 9;
                        break;
                      }

                      reject([{
                        errors: errors,
                        rule: rule
                      }]);
                      return _context.abrupt("return");

                    case 9:
                      i += 1;
                      _context.next = 1;
                      break;

                    case 12:
                      /* eslint-enable */
                      resolve([]);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));

              return function (_x6, _x7) {
                return _ref3.apply(this, arguments);
              };
            }());
          } else {
            // >>>>> Validate by parallel
            var rulePromises = filledRules.map(function (rule) {
              return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
                return {
                  errors: errors,
                  rule: rule
                };
              });
            });
            summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
              // Always change to rejection for Field to catch
              return Promise.reject(errors);
            });
          } // Internal catch error to avoid console error log.


          summaryPromise.catch(function (e) {
            return e;
          });
          return summaryPromise;
        }

        function finishOnAllFailed(_x8) {
          return _finishOnAllFailed.apply(this, arguments);
        }

        function _finishOnAllFailed() {
          _finishOnAllFailed = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3(rulePromises) {
            return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
                    var _ref5;

                    var errors = (_ref5 = []).concat.apply(_ref5, (0, _toConsumableArray2.default)(errorsList));

                    return errors;
                  }));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _finishOnAllFailed.apply(this, arguments);
        }

        function finishOnFirstFailed(_x9) {
          return _finishOnFirstFailed.apply(this, arguments);
        }

        function _finishOnFirstFailed() {
          _finishOnFirstFailed = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee4(rulePromises) {
            var count;
            return (0, _regeneratorRuntime2.default)().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  count = 0;
                  return _context4.abrupt("return", new Promise(function (resolve) {
                    rulePromises.forEach(function (promise) {
                      promise.then(function (ruleError) {
                        if (ruleError.errors.length) {
                          resolve([ruleError]);
                        }

                        count += 1;

                        if (count === rulePromises.length) {
                          resolve([]);
                        }
                      });
                    });
                  }));

                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return _finishOnFirstFailed.apply(this, arguments);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _validateRules = module.exports.validateRules;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/regeneratorRuntime': _req3,
        '@babel/runtime/helpers/objectSpread2': _req4,
        '@babel/runtime/helpers/asyncToGenerator': _req5,
        'async-validator': _req6,
        'react': _req7,
        'rc-util/lib/warning': _req8,
        './messages': _req9,
        './valueUtil': _req10
      }));
    }
  };
});
//# sourceMappingURL=e96cf06482dfc27bc0ba1ba10669711940b338c1.js.map