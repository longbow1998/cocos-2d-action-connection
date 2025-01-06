System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "react", "rc-tree/lib/utils/treeUtil", "rc-util/lib/warning", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_rcTreeLibUtilsTreeUtil) {
      _req3 = _rcTreeLibUtilsTreeUtil.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req4 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _treeUtil = require("rc-tree/lib/utils/treeUtil");

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _valueUtil = require("../utils/valueUtil");

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

        var _default = function _default(treeData, fieldNames) {
          return React.useMemo(function () {
            var collection = (0, _treeUtil.convertDataToEntities)(treeData, {
              fieldNames: fieldNames,
              initWrapper: function initWrapper(wrapper) {
                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, wrapper), {}, {
                  valueEntities: new Map()
                });
              },
              processEntity: function processEntity(entity, wrapper) {
                var val = entity.node[fieldNames.value]; // Check if exist same value

                if (process.env.NODE_ENV !== 'production') {
                  var key = entity.node.key;
                  (0, _warning.default)(!(0, _valueUtil.isNil)(val), 'TreeNode `value` is invalidate: undefined');
                  (0, _warning.default)(!wrapper.valueEntities.has(val), "Same `value` exist in the tree: ".concat(val));
                  (0, _warning.default)(!key || String(key) === String(val), "`key` or `value` with TreeNode must be the same or you can remove one of them. key: ".concat(key, ", value: ").concat(val, "."));
                }

                wrapper.valueEntities.set(val, entity);
              }
            });
            return collection;
          }, [treeData, fieldNames]);
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'react': _req2,
        'rc-tree/lib/utils/treeUtil': _req3,
        'rc-util/lib/warning': _req4,
        '../utils/valueUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=bc4e24d6597e2e09bb330b305d9538cf36151001.js.map