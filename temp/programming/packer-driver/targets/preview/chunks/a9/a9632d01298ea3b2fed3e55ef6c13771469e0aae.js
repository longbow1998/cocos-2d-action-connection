System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req0 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req1 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
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

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass")); // Firefox has low performance of map.


        var CacheMap = /*#__PURE__*/function () {
          function CacheMap() {
            (0, _classCallCheck2.default)(this, CacheMap);
            this.maps = void 0;
            this.maps = Object.create(null);
          }

          (0, _createClass2.default)(CacheMap, [{
            key: "set",
            value: function set(key, value) {
              this.maps[key] = value;
            }
          }, {
            key: "get",
            value: function get(key) {
              return this.maps[key];
            }
          }]);
          return CacheMap;
        }();

        var _default = CacheMap;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/classCallCheck': _req0,
        '@babel/runtime/helpers/createClass': _req1
      }));
    }
  };
});
//# sourceMappingURL=a9632d01298ea3b2fed3e55ef6c13771469e0aae.js.map