System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "react", "rc-tree/lib/utils/conductUtil"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_rcTreeLibUtilsConductUtil) {
      _req3 = _rcTreeLibUtilsConductUtil.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

        var _conductUtil = require("rc-tree/lib/utils/conductUtil");

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

        var _default = function _default(rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities) {
          return React.useMemo(function () {
            var checkedKeys = rawLabeledValues.map(function (_ref) {
              var value = _ref.value;
              return value;
            });
            var halfCheckedKeys = rawHalfCheckedValues.map(function (_ref2) {
              var value = _ref2.value;
              return value;
            });
            var missingValues = checkedKeys.filter(function (key) {
              return !keyEntities[key];
            });

            if (treeConduction) {
              var _conductCheck = (0, _conductUtil.conductCheck)(checkedKeys, true, keyEntities);

              checkedKeys = _conductCheck.checkedKeys;
              halfCheckedKeys = _conductCheck.halfCheckedKeys;
            }

            return [// Checked keys should fill with missing keys which should de-duplicated
            Array.from(new Set([].concat((0, _toConsumableArray2.default)(missingValues), (0, _toConsumableArray2.default)(checkedKeys)))), // Half checked keys
            halfCheckedKeys];
          }, [rawLabeledValues, rawHalfCheckedValues, treeConduction, keyEntities]);
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        'react': _req2,
        'rc-tree/lib/utils/conductUtil': _req3
      }));
    }
  };
});
//# sourceMappingURL=732286efc6fe8ca60f0a406c4733a2f5d6690a02.js.map