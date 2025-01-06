System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _calcRangeKeys, _convertDirectoryKeysToNodes, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req0 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.calcRangeKeys = calcRangeKeys;
        exports.convertDirectoryKeysToNodes = convertDirectoryKeysToNodes;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var Record;

        (function (Record) {
          Record[Record["None"] = 0] = "None";
          Record[Record["Start"] = 1] = "Start";
          Record[Record["End"] = 2] = "End";
        })(Record || (Record = {}));

        function traverseNodesKey(treeData, callback) {
          function processNode(dataNode) {
            var key = dataNode.key,
                children = dataNode.children;

            if (callback(key, dataNode) !== false) {
              traverseNodesKey(children || [], callback);
            }
          }

          treeData.forEach(processNode);
        }
        /** 计算选中范围，只考虑expanded情况以优化性能 */


        function calcRangeKeys(_ref) {
          var treeData = _ref.treeData,
              expandedKeys = _ref.expandedKeys,
              startKey = _ref.startKey,
              endKey = _ref.endKey;
          var keys = [];
          var record = Record.None;

          if (startKey && startKey === endKey) {
            return [startKey];
          }

          if (!startKey || !endKey) {
            return [];
          }

          function matchKey(key) {
            return key === startKey || key === endKey;
          }

          traverseNodesKey(treeData, function (key) {
            if (record === Record.End) {
              return false;
            }

            if (matchKey(key)) {
              // Match test
              keys.push(key);

              if (record === Record.None) {
                record = Record.Start;
              } else if (record === Record.Start) {
                record = Record.End;
                return false;
              }
            } else if (record === Record.Start) {
              // Append selection
              keys.push(key);
            }

            return expandedKeys.includes(key);
          });
          return keys;
        }

        function convertDirectoryKeysToNodes(treeData, keys) {
          var restKeys = (0, _toConsumableArray2["default"])(keys);
          var nodes = [];
          traverseNodesKey(treeData, function (key, node) {
            var index = restKeys.indexOf(key);

            if (index !== -1) {
              nodes.push(node);
              restKeys.splice(index, 1);
            }

            return !!restKeys.length;
          });
          return nodes;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _calcRangeKeys = module.exports.calcRangeKeys;
        _convertDirectoryKeysToNodes = module.exports.convertDirectoryKeysToNodes;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/toConsumableArray': _req0
      }));
    }
  };
});
//# sourceMappingURL=bc529bee727e85d7a539bd7815707ccfe5a41489.js.map