System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useLock;

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
        /**
         * Locker return cached mark.
         * If set to `true`, will return `true` in a short time even if set `false`.
         * If set to `false` and then set to `true`, will change to `true`.
         * And after time duration, it will back to `null` automatically.
         */


        function useLock() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
          var lockRef = React.useRef(null);
          var timeoutRef = React.useRef(null); // Clean up

          React.useEffect(function () {
            return function () {
              window.clearTimeout(timeoutRef.current);
            };
          }, []);

          function doLock(locked) {
            if (locked || lockRef.current === null) {
              lockRef.current = locked;
            }

            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(function () {
              lockRef.current = null;
            }, duration);
          }

          return [function () {
            return lockRef.current;
          }, doLock];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=a73ff1ecac47856b4bf46b71ac493b4c4710e112.js.map