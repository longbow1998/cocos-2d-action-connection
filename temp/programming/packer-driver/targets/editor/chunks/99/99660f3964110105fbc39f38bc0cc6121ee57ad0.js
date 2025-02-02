System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/warning", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _OVERFLOW_KEY, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req4 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.OVERFLOW_KEY = void 0;
        exports.default = useKeyRecords;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _timeUtil = require("../utils/timeUtil");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';

        var getPathStr = function getPathStr(keyPath) {
          return keyPath.join(PATH_SPLIT);
        };

        var getPathKeys = function getPathKeys(keyPathStr) {
          return keyPathStr.split(PATH_SPLIT);
        };

        var OVERFLOW_KEY = 'rc-menu-more';
        exports.OVERFLOW_KEY = OVERFLOW_KEY;

        function useKeyRecords() {
          var _React$useState = React.useState({}),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              internalForceUpdate = _React$useState2[1];

          var key2pathRef = (0, React.useRef)(new Map());
          var path2keyRef = (0, React.useRef)(new Map());

          var _React$useState3 = React.useState([]),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              overflowKeys = _React$useState4[0],
              setOverflowKeys = _React$useState4[1];

          var updateRef = (0, React.useRef)(0);
          var destroyRef = (0, React.useRef)(false);

          var forceUpdate = function forceUpdate() {
            if (!destroyRef.current) {
              internalForceUpdate({});
            }
          };

          var registerPath = (0, React.useCallback)(function (key, keyPath) {
            // Warning for invalidate or duplicated `key`
            if (process.env.NODE_ENV !== 'production') {
              (0, _warning.default)(!key2pathRef.current.has(key), "Duplicated key '".concat(key, "' used in Menu by path [").concat(keyPath.join(' > '), "]"));
            } // Fill map


            var connectedPath = getPathStr(keyPath);
            path2keyRef.current.set(connectedPath, key);
            key2pathRef.current.set(key, connectedPath);
            updateRef.current += 1;
            var id = updateRef.current;
            (0, _timeUtil.nextSlice)(function () {
              if (id === updateRef.current) {
                forceUpdate();
              }
            });
          }, []);
          var unregisterPath = (0, React.useCallback)(function (key, keyPath) {
            var connectedPath = getPathStr(keyPath);
            path2keyRef.current.delete(connectedPath);
            key2pathRef.current.delete(key);
          }, []);
          var refreshOverflowKeys = (0, React.useCallback)(function (keys) {
            setOverflowKeys(keys);
          }, []);
          var getKeyPath = (0, React.useCallback)(function (eventKey, includeOverflow) {
            var fullPath = key2pathRef.current.get(eventKey) || '';
            var keys = getPathKeys(fullPath);

            if (includeOverflow && overflowKeys.includes(keys[0])) {
              keys.unshift(OVERFLOW_KEY);
            }

            return keys;
          }, [overflowKeys]);
          var isSubPathKey = (0, React.useCallback)(function (pathKeys, eventKey) {
            return pathKeys.some(function (pathKey) {
              var pathKeyList = getKeyPath(pathKey, true);
              return pathKeyList.includes(eventKey);
            });
          }, [getKeyPath]);

          var getKeys = function getKeys() {
            var keys = (0, _toConsumableArray2.default)(key2pathRef.current.keys());

            if (overflowKeys.length) {
              keys.push(OVERFLOW_KEY);
            }

            return keys;
          };
          /**
           * Find current key related child path keys
           */


          var getSubPathKeys = (0, React.useCallback)(function (key) {
            var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
            var pathKeys = new Set();
            (0, _toConsumableArray2.default)(path2keyRef.current.keys()).forEach(function (pathKey) {
              if (pathKey.startsWith(connectedPath)) {
                pathKeys.add(path2keyRef.current.get(pathKey));
              }
            });
            return pathKeys;
          }, []);
          React.useEffect(function () {
            return function () {
              destroyRef.current = true;
            };
          }, []);
          return {
            // Register
            registerPath: registerPath,
            unregisterPath: unregisterPath,
            refreshOverflowKeys: refreshOverflowKeys,
            // Util
            isSubPathKey: isSubPathKey,
            getKeyPath: getKeyPath,
            getKeys: getKeys,
            getSubPathKeys: getSubPathKeys
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _OVERFLOW_KEY = module.exports.OVERFLOW_KEY;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'rc-util/lib/warning': _req4,
        '../utils/timeUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=99660f3964110105fbc39f38bc0cc6121ee57ad0.js.map