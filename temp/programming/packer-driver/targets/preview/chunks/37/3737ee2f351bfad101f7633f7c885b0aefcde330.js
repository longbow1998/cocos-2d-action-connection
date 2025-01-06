System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "rc-util/lib/hooks/useLayoutEffect"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req1 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
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
        exports.default = useMobileTouchMove;

        var _react = require("react");

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var SMOOTH_PTG = 14 / 15;

        function useMobileTouchMove(inVirtual, listRef, callback) {
          var touchedRef = (0, _react.useRef)(false);
          var touchYRef = (0, _react.useRef)(0);
          var elementRef = (0, _react.useRef)(null); // Smooth scroll

          var intervalRef = (0, _react.useRef)(null);
          /* eslint-disable prefer-const */

          var cleanUpEvents;

          var onTouchMove = function onTouchMove(e) {
            if (touchedRef.current) {
              var currentY = Math.ceil(e.touches[0].pageY);
              var offsetY = touchYRef.current - currentY;
              touchYRef.current = currentY;

              if (callback(offsetY)) {
                e.preventDefault();
              } // Smooth interval


              clearInterval(intervalRef.current);
              intervalRef.current = setInterval(function () {
                offsetY *= SMOOTH_PTG;

                if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
                  clearInterval(intervalRef.current);
                }
              }, 16);
            }
          };

          var onTouchEnd = function onTouchEnd() {
            touchedRef.current = false;
            cleanUpEvents();
          };

          var onTouchStart = function onTouchStart(e) {
            cleanUpEvents();

            if (e.touches.length === 1 && !touchedRef.current) {
              touchedRef.current = true;
              touchYRef.current = Math.ceil(e.touches[0].pageY);
              elementRef.current = e.target;
              elementRef.current.addEventListener('touchmove', onTouchMove);
              elementRef.current.addEventListener('touchend', onTouchEnd);
            }
          };

          cleanUpEvents = function cleanUpEvents() {
            if (elementRef.current) {
              elementRef.current.removeEventListener('touchmove', onTouchMove);
              elementRef.current.removeEventListener('touchend', onTouchEnd);
            }
          };

          (0, _useLayoutEffect.default)(function () {
            if (inVirtual) {
              listRef.current.addEventListener('touchstart', onTouchStart);
            }

            return function () {
              var _listRef$current;

              (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener('touchstart', onTouchStart);
              cleanUpEvents();
              clearInterval(intervalRef.current);
            };
          }, [inVirtual]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'rc-util/lib/hooks/useLayoutEffect': _req1
      }));
    }
  };
});
//# sourceMappingURL=3737ee2f351bfad101f7633f7c885b0aefcde330.js.map