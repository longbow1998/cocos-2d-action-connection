System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = useLazyKVMap;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        function useLazyKVMap(data, childrenColumnName, getRowKey) {
          var mapCacheRef = React.useRef({});

          function getRecordByKey(key) {
            if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
              var kvMap = new Map();
              /* eslint-disable no-inner-declarations */

              function dig(records) {
                records.forEach(function (record, index) {
                  var rowKey = getRowKey(record, index);
                  kvMap.set(rowKey, record);

                  if (record && (0, _typeof2["default"])(record) === 'object' && childrenColumnName in record) {
                    dig(record[childrenColumnName] || []);
                  }
                });
              }
              /* eslint-enable */


              dig(data);
              mapCacheRef.current = {
                data: data,
                childrenColumnName: childrenColumnName,
                kvMap: kvMap,
                getRowKey: getRowKey
              };
            }

            return mapCacheRef.current.kvMap.get(key);
          }

          return [getRecordByKey];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=b2fc9360ca3a50e9e4c02ecad6528018d5462dfd.js.map