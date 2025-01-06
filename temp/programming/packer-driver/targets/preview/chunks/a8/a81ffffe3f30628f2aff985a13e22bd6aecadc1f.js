System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react-dom"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_reactDom2) {
      _req0 = _reactDom2.__cjsMetaURL;
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
        exports.default = addEventListenerWrap;

        var _reactDom = _interopRequireDefault(require("react-dom"));

        function addEventListenerWrap(target, eventType, cb, option) {
          /* eslint camelcase: 2 */
          var callback = _reactDom.default.unstable_batchedUpdates ? function run(e) {
            _reactDom.default.unstable_batchedUpdates(cb, e);
          } : cb;

          if (target.addEventListener) {
            target.addEventListener(eventType, callback, option);
          }

          return {
            remove: function remove() {
              if (target.removeEventListener) {
                target.removeEventListener(eventType, callback, option);
              }
            }
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react-dom': _req0
      }));
    }
  };
});
//# sourceMappingURL=a81ffffe3f30628f2aff985a13e22bd6aecadc1f.js.map