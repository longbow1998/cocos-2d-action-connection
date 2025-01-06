System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
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
        exports.default = void 0;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        function cloneDeep(val) {
          if (Array.isArray(val)) {
            return cloneArrayDeep(val);
          } else if ((0, _typeof2.default)(val) === 'object' && val !== null) {
            return cloneObjectDeep(val);
          }

          return val;
        }

        function cloneObjectDeep(val) {
          if (Object.getPrototypeOf(val) === Object.prototype) {
            var res = {};

            for (var key in val) {
              res[key] = cloneDeep(val[key]);
            }

            return res;
          }

          return val;
        }

        function cloneArrayDeep(val) {
          return val.map(function (item) {
            return cloneDeep(item);
          });
        }

        var _default = cloneDeep;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0
      }));
    }
  };
});
//# sourceMappingURL=3edc91976b1d409afff8e95e61eef7a25760f6b4.js.map