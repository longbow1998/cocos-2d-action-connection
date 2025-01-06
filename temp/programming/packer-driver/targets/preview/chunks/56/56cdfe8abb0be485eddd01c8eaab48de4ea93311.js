System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
        exports.default = useFlattenRecords;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

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
        } // recursion (flat tree structure)


        function flatRecord(record, indent, childrenColumnName, expandedKeys, getRowKey, index) {
          var arr = [];
          arr.push({
            record: record,
            indent: indent,
            index: index
          });
          var key = getRowKey(record);
          var expanded = expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(key);

          if (record && Array.isArray(record[childrenColumnName]) && expanded) {
            // expanded state, flat record
            for (var i = 0; i < record[childrenColumnName].length; i += 1) {
              var tempArr = flatRecord(record[childrenColumnName][i], indent + 1, childrenColumnName, expandedKeys, getRowKey, i);
              arr.push.apply(arr, (0, _toConsumableArray2.default)(tempArr));
            }
          }

          return arr;
        }
        /**
         * flat tree data on expanded state
         *
         * @export
         * @template T
         * @param {*} data : table data
         * @param {string} childrenColumnName : 指定树形结构的列名
         * @param {Set<Key>} expandedKeys : 展开的行对应的keys
         * @param {GetRowKey<T>} getRowKey  : 获取当前rowKey的方法
         * @returns flattened data
         */


        function useFlattenRecords(data, childrenColumnName, expandedKeys, getRowKey) {
          var arr = React.useMemo(function () {
            if (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.size) {
              var temp = []; // collect flattened record

              for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.length); i += 1) {
                var record = data[i];
                temp.push.apply(temp, (0, _toConsumableArray2.default)(flatRecord(record, 0, childrenColumnName, expandedKeys, getRowKey, i)));
              }

              return temp;
            }

            return data === null || data === void 0 ? void 0 : data.map(function (item, index) {
              return {
                record: item,
                indent: 0,
                index: index
              };
            });
          }, [data, childrenColumnName, expandedKeys, getRowKey]);
          return arr;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=56cdfe8abb0be485eddd01c8eaab48de4ea93311.js.map