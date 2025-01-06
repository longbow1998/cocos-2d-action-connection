System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
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

        var _warning = _interopRequireDefault(require("./warning"));
        /**
         * Deeply compares two object literals.
         * @param obj1 object 1
         * @param obj2 object 2
         * @param shallow shallow compare
         * @returns
         */


        function isEqual(obj1, obj2) {
          var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false; // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f

          var refSet = new Set();

          function deepEqual(a, b) {
            var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            var circular = refSet.has(a);
            (0, _warning.default)(!circular, 'Warning: There may be circular references');

            if (circular) {
              return false;
            }

            if (a === b) {
              return true;
            }

            if (shallow && level > 1) {
              return false;
            }

            refSet.add(a);
            var newLevel = level + 1;

            if (Array.isArray(a)) {
              if (!Array.isArray(b) || a.length !== b.length) {
                return false;
              }

              for (var i = 0; i < a.length; i++) {
                if (!deepEqual(a[i], b[i], newLevel)) {
                  return false;
                }
              }

              return true;
            }

            if (a && b && (0, _typeof2.default)(a) === 'object' && (0, _typeof2.default)(b) === 'object') {
              var keys = Object.keys(a);

              if (keys.length !== Object.keys(b).length) {
                return false;
              }

              return keys.every(function (key) {
                return deepEqual(a[key], b[key], newLevel);
              });
            } // other


            return false;
          }

          return deepEqual(obj1, obj2);
        }

        var _default = isEqual;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        './warning': _req1
      }));
    }
  };
});
//# sourceMappingURL=69fb7fe693b145b45a25392a9ab8dd10827c4904.js.map