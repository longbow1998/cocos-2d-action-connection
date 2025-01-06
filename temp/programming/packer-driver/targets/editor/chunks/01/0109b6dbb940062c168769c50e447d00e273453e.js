System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "rc-util/lib/raf"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _throttleByAnimationFrame, _throttleByAnimationFrameDecorator, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req0 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req1 = _rcUtilLibRaf.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.throttleByAnimationFrame = throttleByAnimationFrame;
        exports.throttleByAnimationFrameDecorator = throttleByAnimationFrameDecorator;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        function throttleByAnimationFrame(fn) {
          var requestId;

          var later = function later(args) {
            return function () {
              requestId = null;
              fn.apply(void 0, (0, _toConsumableArray2["default"])(args));
            };
          };

          var throttled = function throttled() {
            if (requestId == null) {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              requestId = (0, _raf["default"])(later(args));
            }
          };

          throttled.cancel = function () {
            _raf["default"].cancel(requestId);

            requestId = null;
          };

          return throttled;
        }

        function throttleByAnimationFrameDecorator() {
          return function throttle(target, key, descriptor) {
            var fn = descriptor.value;
            var definingProperty = false;
            return {
              configurable: true,
              get: function get() {
                // In IE11 calling Object.defineProperty has a side-effect of evaluating the
                // getter for the property which is being replaced. This causes infinite
                // recursion and an "Out of stack space" error.
                // eslint-disable-next-line no-prototype-builtins
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                  /* istanbul ignore next */
                  return fn;
                }

                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                  value: boundFn,
                  configurable: true,
                  writable: true
                });
                definingProperty = false;
                return boundFn;
              }
            };
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _throttleByAnimationFrame = module.exports.throttleByAnimationFrame;
        _throttleByAnimationFrameDecorator = module.exports.throttleByAnimationFrameDecorator;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/toConsumableArray': _req0,
        'rc-util/lib/raf': _req1
      }));
    }
  };
});
//# sourceMappingURL=0109b6dbb940062c168769c50e447d00e273453e.js.map