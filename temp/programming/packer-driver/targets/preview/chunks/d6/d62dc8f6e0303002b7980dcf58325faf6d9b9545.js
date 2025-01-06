System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "resize-observer-polyfill"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, __rs, __el, _observe, _unobserve, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_resizeObserverPolyfill2) {
      _req0 = _resizeObserverPolyfill2.__cjsMetaURL;
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
        exports._rs = exports._el = void 0;
        exports.observe = observe;
        exports.unobserve = unobserve;

        var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill")); // =============================== Const ===============================


        var elementListeners = new Map();

        function onResize(entities) {
          entities.forEach(function (entity) {
            var _elementListeners$get;

            var target = entity.target;
            (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
              return listener(target);
            });
          });
        } // Note: ResizeObserver polyfill not support option to measure border-box resize


        var resizeObserver = new _resizeObserverPolyfill.default(onResize); // Dev env only

        var _el = process.env.NODE_ENV !== 'production' ? elementListeners : null; // eslint-disable-line


        exports._el = _el;

        var _rs = process.env.NODE_ENV !== 'production' ? onResize : null; // eslint-disable-line
        // ============================== Observe ==============================


        exports._rs = _rs;

        function observe(element, callback) {
          if (!elementListeners.has(element)) {
            elementListeners.set(element, new Set());
            resizeObserver.observe(element);
          }

          elementListeners.get(element).add(callback);
        }

        function unobserve(element, callback) {
          if (elementListeners.has(element)) {
            elementListeners.get(element).delete(callback);

            if (!elementListeners.get(element).size) {
              resizeObserver.unobserve(element);
              elementListeners.delete(element);
            }
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        __rs = module.exports._rs;
        __el = module.exports._el;
        _observe = module.exports.observe;
        _unobserve = module.exports.unobserve;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'resize-observer-polyfill': _req0
      }));
    }
  };
});
//# sourceMappingURL=d62dc8f6e0303002b7980dcf58325faf6d9b9545.js.map