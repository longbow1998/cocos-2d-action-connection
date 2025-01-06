System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useTreeData;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

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

        function parseSimpleTreeData(treeData, _ref) {
          var id = _ref.id,
              pId = _ref.pId,
              rootPId = _ref.rootPId;
          var keyNodes = {};
          var rootNodeList = []; // Fill in the map

          var nodeList = treeData.map(function (node) {
            var clone = (0, _objectSpread2.default)({}, node);
            var key = clone[id];
            keyNodes[key] = clone;
            clone.key = clone.key || key;
            return clone;
          }); // Connect tree

          nodeList.forEach(function (node) {
            var parentKey = node[pId];
            var parent = keyNodes[parentKey]; // Fill parent

            if (parent) {
              parent.children = parent.children || [];
              parent.children.push(node);
            } // Fill root tree node


            if (parentKey === rootPId || !parent && rootPId === null) {
              rootNodeList.push(node);
            }
          });
          return rootNodeList;
        }
        /**
         * Convert `treeData` or `children` into formatted `treeData`.
         * Will not re-calculate if `treeData` or `children` not change.
         */


        function useTreeData(treeData, children, simpleMode) {
          return React.useMemo(function () {
            if (treeData) {
              return simpleMode ? parseSimpleTreeData(treeData, (0, _objectSpread2.default)({
                id: 'id',
                pId: 'pId',
                rootPId: null
              }, simpleMode !== true ? simpleMode : {})) : treeData;
            }

            return (0, _legacyUtil.convertChildrenToData)(children);
          }, [children, simpleMode, treeData]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'react': _req2,
        '../utils/legacyUtil': _req3
      }));
    }
  };
});
//# sourceMappingURL=d04b26444b7fc460f499efb0af5834930999a27c.js.map