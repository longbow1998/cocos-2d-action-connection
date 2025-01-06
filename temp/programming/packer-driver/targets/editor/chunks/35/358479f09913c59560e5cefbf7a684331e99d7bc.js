System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/typeof"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _STATUS_REMOVED, _STATUS_REMOVE, _STATUS_KEEP, _STATUS_ADD, _diffKeys, _parseKeys, _wrapKeyToObject, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.STATUS_REMOVED = exports.STATUS_REMOVE = exports.STATUS_KEEP = exports.STATUS_ADD = void 0;
        exports.diffKeys = diffKeys;
        exports.parseKeys = parseKeys;
        exports.wrapKeyToObject = wrapKeyToObject;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var STATUS_ADD = 'add';
        exports.STATUS_ADD = STATUS_ADD;
        var STATUS_KEEP = 'keep';
        exports.STATUS_KEEP = STATUS_KEEP;
        var STATUS_REMOVE = 'remove';
        exports.STATUS_REMOVE = STATUS_REMOVE;
        var STATUS_REMOVED = 'removed';
        exports.STATUS_REMOVED = STATUS_REMOVED;

        function wrapKeyToObject(key) {
          var keyObj;

          if (key && (0, _typeof2.default)(key) === 'object' && 'key' in key) {
            keyObj = key;
          } else {
            keyObj = {
              key: key
            };
          }

          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, keyObj), {}, {
            key: String(keyObj.key)
          });
        }

        function parseKeys() {
          var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return keys.map(wrapKeyToObject);
        }

        function diffKeys() {
          var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var list = [];
          var currentIndex = 0;
          var currentLen = currentKeys.length;
          var prevKeyObjects = parseKeys(prevKeys);
          var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

          prevKeyObjects.forEach(function (keyObj) {
            var hit = false;

            for (var i = currentIndex; i < currentLen; i += 1) {
              var currentKeyObj = currentKeyObjects[i];

              if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                  list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
                    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, obj), {}, {
                      status: STATUS_ADD
                    });
                  }));
                  currentIndex = i;
                }

                list.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentKeyObj), {}, {
                  status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
              }
            } // If not hit, it means key is removed


            if (!hit) {
              list.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, keyObj), {}, {
                status: STATUS_REMOVE
              }));
            }
          }); // Add rest to the list

          if (currentIndex < currentLen) {
            list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
          }
          /**
           * Merge same key when it remove and add again:
           *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
           */


          var keys = {};
          list.forEach(function (_ref) {
            var key = _ref.key;
            keys[key] = (keys[key] || 0) + 1;
          });
          var duplicatedKeys = Object.keys(keys).filter(function (key) {
            return keys[key] > 1;
          });
          duplicatedKeys.forEach(function (matchKey) {
            // Remove `STATUS_REMOVE` node.
            list = list.filter(function (_ref2) {
              var key = _ref2.key,
                  status = _ref2.status;
              return key !== matchKey || status !== STATUS_REMOVE;
            }); // Update `STATUS_ADD` to `STATUS_KEEP`

            list.forEach(function (node) {
              if (node.key === matchKey) {
                // eslint-disable-next-line no-param-reassign
                node.status = STATUS_KEEP;
              }
            });
          });
          return list;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _STATUS_REMOVED = module.exports.STATUS_REMOVED;
        _STATUS_REMOVE = module.exports.STATUS_REMOVE;
        _STATUS_KEEP = module.exports.STATUS_KEEP;
        _STATUS_ADD = module.exports.STATUS_ADD;
        _diffKeys = module.exports.diffKeys;
        _parseKeys = module.exports.parseKeys;
        _wrapKeyToObject = module.exports.wrapKeyToObject;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/typeof': _req1
      }));
    }
  };
});
//# sourceMappingURL=358479f09913c59560e5cefbf7a684331e99d7bc.js.map