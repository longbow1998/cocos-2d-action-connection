System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getColumnsKey, _getPathValue, _validateValue, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getColumnsKey = getColumnsKey;
        exports.getPathValue = getPathValue;
        exports.validateValue = validateValue;
        var INTERNAL_KEY_PREFIX = 'RC_TABLE_KEY';

        function toArray(arr) {
          if (arr === undefined || arr === null) {
            return [];
          }

          return Array.isArray(arr) ? arr : [arr];
        }

        function getPathValue(record, path) {
          // Skip if path is empty
          if (!path && typeof path !== 'number') {
            return record;
          }

          var pathList = toArray(path);
          var current = record;

          for (var i = 0; i < pathList.length; i += 1) {
            if (!current) {
              return null;
            }

            var prop = pathList[i];
            current = current[prop];
          }

          return current;
        }

        function getColumnsKey(columns) {
          var columnKeys = [];
          var keys = {};
          columns.forEach(function (column) {
            var _ref = column || {},
                key = _ref.key,
                dataIndex = _ref.dataIndex;

            var mergedKey = key || toArray(dataIndex).join('-') || INTERNAL_KEY_PREFIX;

            while (keys[mergedKey]) {
              mergedKey = "".concat(mergedKey, "_next");
            }

            keys[mergedKey] = true;
            columnKeys.push(mergedKey);
          });
          return columnKeys;
        }

        function validateValue(val) {
          return val !== null && val !== undefined;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getColumnsKey = module.exports.getColumnsKey;
        _getPathValue = module.exports.getPathValue;
        _validateValue = module.exports.validateValue;
      }, {});
    }
  };
});
//# sourceMappingURL=c831cff7686963cc919eff5952a4e047723ee84c.js.map