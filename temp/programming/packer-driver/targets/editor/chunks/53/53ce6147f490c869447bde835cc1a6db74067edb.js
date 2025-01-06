System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _fillFieldNames, _getAllKeys, _isCheckDisabled, _isNil, _toArray, __cjsMetaURL;

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
        exports.fillFieldNames = fillFieldNames;
        exports.getAllKeys = getAllKeys;
        exports.isCheckDisabled = isCheckDisabled;
        exports.isNil = isNil;
        exports.toArray = toArray;

        function toArray(value) {
          if (Array.isArray(value)) {
            return value;
          }

          return value !== undefined ? [value] : [];
        }

        function fillFieldNames(fieldNames) {
          var _ref = fieldNames || {},
              label = _ref.label,
              value = _ref.value,
              children = _ref.children;

          var mergedValue = value || 'value';
          return {
            _title: label ? [label] : ['title', 'label'],
            value: mergedValue,
            key: mergedValue,
            children: children || 'children'
          };
        }

        function isCheckDisabled(node) {
          return !node || node.disabled || node.disableCheckbox || node.checkable === false;
        }
        /** Loop fetch all the keys exist in the tree */


        function getAllKeys(treeData, fieldNames) {
          var keys = [];

          function dig(list) {
            list.forEach(function (item) {
              var children = item[fieldNames.children];

              if (children) {
                keys.push(item[fieldNames.value]);
                dig(children);
              }
            });
          }

          dig(treeData);
          return keys;
        }

        function isNil(val) {
          return val === null || val === undefined;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _fillFieldNames = module.exports.fillFieldNames;
        _getAllKeys = module.exports.getAllKeys;
        _isCheckDisabled = module.exports.isCheckDisabled;
        _isNil = module.exports.isNil;
        _toArray = module.exports.toArray;
      }, {});
    }
  };
});
//# sourceMappingURL=53ce6147f490c869447bde835cc1a6db74067edb.js.map