System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _legacyUtil = require("../utils/legacyUtil");

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

        var _default = function _default(treeData, searchValue, _ref) {
          var treeNodeFilterProp = _ref.treeNodeFilterProp,
              filterTreeNode = _ref.filterTreeNode,
              fieldNames = _ref.fieldNames;
          var fieldChildren = fieldNames.children;
          return React.useMemo(function () {
            if (!searchValue || filterTreeNode === false) {
              return treeData;
            }

            var filterOptionFunc;

            if (typeof filterTreeNode === 'function') {
              filterOptionFunc = filterTreeNode;
            } else {
              var upperStr = searchValue.toUpperCase();

              filterOptionFunc = function filterOptionFunc(_, dataNode) {
                var value = dataNode[treeNodeFilterProp];
                return String(value).toUpperCase().includes(upperStr);
              };
            }

            function dig(list) {
              var keepAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return list.map(function (dataNode) {
                var children = dataNode[fieldChildren];
                var match = keepAll || filterOptionFunc(searchValue, (0, _legacyUtil.fillLegacyProps)(dataNode));
                var childList = dig(children || [], match);

                if (match || childList.length) {
                  return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, dataNode), {}, (0, _defineProperty2.default)({
                    isLeaf: undefined
                  }, fieldChildren, childList));
                }

                return null;
              }).filter(function (node) {
                return node;
              });
            }

            return dig(treeData);
          }, [treeData, searchValue, fieldChildren, treeNodeFilterProp, filterTreeNode]);
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        '../utils/legacyUtil': _req4
      }));
    }
  };
});
//# sourceMappingURL=11a5653eb02a0295d388b7fec0784b4c14e86842.js.map