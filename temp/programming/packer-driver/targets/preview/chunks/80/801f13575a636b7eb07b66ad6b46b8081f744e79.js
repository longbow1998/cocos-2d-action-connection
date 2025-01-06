System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/typeof", "rc-util/lib/utils/get", "rc-util/lib/utils/set", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _cloneByNamePathList, _containsNamePath, _defaultGetValueFromEvent, _getNamePath, _getValue, _isSimilar, _matchNamePath, _move, _setValue, _setValues, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibUtilsGet) {
      _req3 = _rcUtilLibUtilsGet.__cjsMetaURL;
    }, function (_rcUtilLibUtilsSet) {
      _req4 = _rcUtilLibUtilsSet.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
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
        exports.cloneByNamePathList = cloneByNamePathList;
        exports.containsNamePath = containsNamePath;
        exports.defaultGetValueFromEvent = defaultGetValueFromEvent;
        exports.getNamePath = getNamePath;
        exports.getValue = getValue;
        exports.isSimilar = isSimilar;
        exports.matchNamePath = matchNamePath;
        exports.move = move;
        exports.setValue = setValue;
        exports.setValues = setValues;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));

        var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));

        var _typeUtil = require("./typeUtil");

        var _cloneDeep = _interopRequireDefault(require("../utils/cloneDeep"));
        /**
         * Convert name to internal supported format.
         * This function should keep since we still thinking if need support like `a.b.c` format.
         * 'a' => ['a']
         * 123 => [123]
         * ['a', 123] => ['a', 123]
         */


        function getNamePath(path) {
          return (0, _typeUtil.toArray)(path);
        }

        function getValue(store, namePath) {
          var value = (0, _get.default)(store, namePath);
          return value;
        }

        function setValue(store, namePath, value) {
          var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var newStore = (0, _set.default)(store, namePath, value, removeIfUndefined);
          return newStore;
        }

        function cloneByNamePathList(store, namePathList) {
          var newStore = {};
          namePathList.forEach(function (namePath) {
            var value = getValue(store, namePath);
            newStore = setValue(newStore, namePath, value);
          });
          return newStore;
        }

        function containsNamePath(namePathList, namePath) {
          return namePathList && namePathList.some(function (path) {
            return matchNamePath(path, namePath);
          });
        }

        function isObject(obj) {
          return (0, _typeof2.default)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
        }
        /**
         * Copy values into store and return a new values object
         * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
         */


        function internalSetValues(store, values) {
          var newStore = Array.isArray(store) ? (0, _toConsumableArray2.default)(store) : (0, _objectSpread2.default)({}, store);

          if (!values) {
            return newStore;
          }

          Object.keys(values).forEach(function (key) {
            var prevValue = newStore[key];
            var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

            var recursive = isObject(prevValue) && isObject(value);
            newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : (0, _cloneDeep.default)(value); // Clone deep for arrays
          });
          return newStore;
        }

        function setValues(store) {
          for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            restValues[_key - 1] = arguments[_key];
          }

          return restValues.reduce(function (current, newStore) {
            return internalSetValues(current, newStore);
          }, store);
        }

        function matchNamePath(namePath, changedNamePath) {
          if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
            return false;
          }

          return namePath.every(function (nameUnit, i) {
            return changedNamePath[i] === nameUnit;
          });
        }

        function isSimilar(source, target) {
          if (source === target) {
            return true;
          }

          if (!source && target || source && !target) {
            return false;
          }

          if (!source || !target || (0, _typeof2.default)(source) !== 'object' || (0, _typeof2.default)(target) !== 'object') {
            return false;
          }

          var sourceKeys = Object.keys(source);
          var targetKeys = Object.keys(target);
          var keys = new Set([].concat(sourceKeys, targetKeys));
          return (0, _toConsumableArray2.default)(keys).every(function (key) {
            var sourceValue = source[key];
            var targetValue = target[key];

            if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
              return true;
            }

            return sourceValue === targetValue;
          });
        }

        function defaultGetValueFromEvent(valuePropName) {
          var event = arguments.length <= 1 ? undefined : arguments[1];

          if (event && event.target && (0, _typeof2.default)(event.target) === 'object' && valuePropName in event.target) {
            return event.target[valuePropName];
          }

          return event;
        }
        /**
         * Moves an array item from one position in an array to another.
         *
         * Note: This is a pure function so a new array will be returned, instead
         * of altering the array argument.
         *
         * @param array         Array in which to move an item.         (required)
         * @param moveIndex     The index of the item to move.          (required)
         * @param toIndex       The index to move item at moveIndex to. (required)
         */


        function move(array, moveIndex, toIndex) {
          var length = array.length;

          if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
            return array;
          }

          var item = array[moveIndex];
          var diff = moveIndex - toIndex;

          if (diff > 0) {
            // move left
            return [].concat((0, _toConsumableArray2.default)(array.slice(0, toIndex)), [item], (0, _toConsumableArray2.default)(array.slice(toIndex, moveIndex)), (0, _toConsumableArray2.default)(array.slice(moveIndex + 1, length)));
          }

          if (diff < 0) {
            // move right
            return [].concat((0, _toConsumableArray2.default)(array.slice(0, moveIndex)), (0, _toConsumableArray2.default)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0, _toConsumableArray2.default)(array.slice(toIndex + 1, length)));
          }

          return array;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _cloneByNamePathList = module.exports.cloneByNamePathList;
        _containsNamePath = module.exports.containsNamePath;
        _defaultGetValueFromEvent = module.exports.defaultGetValueFromEvent;
        _getNamePath = module.exports.getNamePath;
        _getValue = module.exports.getValue;
        _isSimilar = module.exports.isSimilar;
        _matchNamePath = module.exports.matchNamePath;
        _move = module.exports.move;
        _setValue = module.exports.setValue;
        _setValues = module.exports.setValues;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        'rc-util/lib/utils/get': _req3,
        'rc-util/lib/utils/set': _req4,
        './typeUtil': _req5,
        '../utils/cloneDeep': _req6
      }));
    }
  };
});
//# sourceMappingURL=801f13575a636b7eb07b66ad6b46b8081f744e79.js.map