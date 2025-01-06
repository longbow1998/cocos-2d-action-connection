System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, _isWindow, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = getScroll;
        exports.isWindow = isWindow;

        function isWindow(obj) {
          return obj !== null && obj !== undefined && obj === obj.window;
        }

        function getScroll(target, top) {
          var _a, _b;

          if (typeof window === 'undefined') {
            return 0;
          }

          var method = top ? 'scrollTop' : 'scrollLeft';
          var result = 0;

          if (isWindow(target)) {
            result = target[top ? 'pageYOffset' : 'pageXOffset'];
          } else if (target instanceof Document) {
            result = target.documentElement[method];
          } else if (target instanceof HTMLElement) {
            result = target[method];
          } else if (target) {
            // According to the type inference, the `target` is `never` type.
            // Since we configured the loose mode type checking, and supports mocking the target with such shape below::
            //    `{ documentElement: { scrollLeft: 200, scrollTop: 400 } }`,
            //    the program may falls into this branch.
            // Check the corresponding tests for details. Don't sure what is the real scenario this happens.
            result = target[method];
          }

          if (target && !isWindow(target) && typeof result !== 'number') {
            result = (_b = ((_a = target.ownerDocument) !== null && _a !== void 0 ? _a : target).documentElement) === null || _b === void 0 ? void 0 : _b[method];
          }

          return result;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _isWindow = module.exports.isWindow;
      }, {});
    }
  };
});
//# sourceMappingURL=73d29c9ed3195335f0c69b6347b9ecc490ad37d5.js.map