System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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
        exports.default = void 0;

        var React = _interopRequireWildcard(require("react"));

        var _motion = require("../util/motion");

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

        var _default = function _default(callback) {
          var cacheElementRef = (0, React.useRef)(); // Cache callback

          var callbackRef = (0, React.useRef)(callback);
          callbackRef.current = callback; // Internal motion event handler

          var onInternalMotionEnd = React.useCallback(function (event) {
            callbackRef.current(event);
          }, []); // Remove events

          function removeMotionEvents(element) {
            if (element) {
              element.removeEventListener(_motion.transitionEndName, onInternalMotionEnd);
              element.removeEventListener(_motion.animationEndName, onInternalMotionEnd);
            }
          } // Patch events


          function patchMotionEvents(element) {
            if (cacheElementRef.current && cacheElementRef.current !== element) {
              removeMotionEvents(cacheElementRef.current);
            }

            if (element && element !== cacheElementRef.current) {
              element.addEventListener(_motion.transitionEndName, onInternalMotionEnd);
              element.addEventListener(_motion.animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

              cacheElementRef.current = element;
            }
          } // Clean up when removed


          React.useEffect(function () {
            return function () {
              removeMotionEvents(cacheElementRef.current);
            };
          }, []);
          return [patchMotionEvents, removeMotionEvents];
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0,
        '../util/motion': _req1
      }));
    }
  };
});
//# sourceMappingURL=05c9d870573e8fa88b31238e7856eff40b60997d.js.map