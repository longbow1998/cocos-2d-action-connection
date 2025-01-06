System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _PathUserContext, _PathTrackerContext, _PathRegisterContext, _useFullPath, _useMeasure, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
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
        exports.PathUserContext = exports.PathTrackerContext = exports.PathRegisterContext = void 0;
        exports.useFullPath = useFullPath;
        exports.useMeasure = useMeasure;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

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

        var EmptyList = []; // ========================= Path Register =========================

        var PathRegisterContext = /*#__PURE__*/React.createContext(null);
        exports.PathRegisterContext = PathRegisterContext;

        function useMeasure() {
          return React.useContext(PathRegisterContext);
        } // ========================= Path Tracker ==========================


        var PathTrackerContext = /*#__PURE__*/React.createContext(EmptyList);
        exports.PathTrackerContext = PathTrackerContext;

        function useFullPath(eventKey) {
          var parentKeyPath = React.useContext(PathTrackerContext);
          return React.useMemo(function () {
            return eventKey !== undefined ? [].concat((0, _toConsumableArray2.default)(parentKeyPath), [eventKey]) : parentKeyPath;
          }, [parentKeyPath, eventKey]);
        } // =========================== Path User ===========================


        var PathUserContext = /*#__PURE__*/React.createContext(null);
        exports.PathUserContext = PathUserContext; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _PathUserContext = module.exports.PathUserContext;
        _PathTrackerContext = module.exports.PathTrackerContext;
        _PathRegisterContext = module.exports.PathRegisterContext;
        _useFullPath = module.exports.useFullPath;
        _useMeasure = module.exports.useMeasure;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=cc1ddc5bbbd6d17a4bf0bf9510902a9507d79938.js.map