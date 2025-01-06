System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/toArray", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToArray) {
      _req2 = _babelRuntimeHelpersToArray.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports.default = set;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

        var _get = _interopRequireDefault(require("./get"));

        function internalSet(entity, paths, value, removeIfUndefined) {
          if (!paths.length) {
            return value;
          }

          var _paths = (0, _toArray2.default)(paths),
              path = _paths[0],
              restPath = _paths.slice(1);

          var clone;

          if (!entity && typeof path === 'number') {
            clone = [];
          } else if (Array.isArray(entity)) {
            clone = (0, _toConsumableArray2.default)(entity);
          } else {
            clone = (0, _objectSpread2.default)({}, entity);
          } // Delete prop if `removeIfUndefined` and value is undefined


          if (removeIfUndefined && value === undefined && restPath.length === 1) {
            delete clone[path][restPath[0]];
          } else {
            clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
          }

          return clone;
        }

        function set(entity, paths, value) {
          var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // Do nothing if `removeIfUndefined` and parent object not exist

          if (paths.length && removeIfUndefined && value === undefined && !(0, _get.default)(entity, paths.slice(0, -1))) {
            return entity;
          }

          return internalSet(entity, paths, value, removeIfUndefined);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/toArray': _req2,
        './get': _req3
      }));
    }
  };
});
//# sourceMappingURL=06ec9d241874be88641c07dd7b926b098eee3940.js.map