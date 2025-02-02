System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _formatStrategyValues, _toPathOptions, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.formatStrategyValues = formatStrategyValues;
        exports.toPathOptions = toPathOptions;

        var _commonUtil = require("./commonUtil");

        function formatStrategyValues(pathKeys, getKeyPathEntities, showCheckedStrategy) {
          var valueSet = new Set(pathKeys);
          var keyPathEntities = getKeyPathEntities();
          return pathKeys.filter(function (key) {
            var entity = keyPathEntities[key];
            var parent = entity ? entity.parent : null;
            var children = entity ? entity.children : null;
            return showCheckedStrategy === _commonUtil.SHOW_CHILD ? !(children && children.some(function (child) {
              return child.key && valueSet.has(child.key);
            })) : !(parent && !parent.node.disabled && valueSet.has(parent.key));
          });
        }

        function toPathOptions(valueCells, options, fieldNames) {
          var stringMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var currentList = options;
          var valueOptions = [];

          var _loop = function _loop(i) {
            var _currentList, _currentList2, _foundOption$fieldNam;

            var valueCell = valueCells[i];
            var foundIndex = (_currentList = currentList) === null || _currentList === void 0 ? void 0 : _currentList.findIndex(function (option) {
              var val = option[fieldNames.value];
              return stringMode ? String(val) === String(valueCell) : val === valueCell;
            });
            var foundOption = foundIndex !== -1 ? (_currentList2 = currentList) === null || _currentList2 === void 0 ? void 0 : _currentList2[foundIndex] : null;
            valueOptions.push({
              value: (_foundOption$fieldNam = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.value]) !== null && _foundOption$fieldNam !== void 0 ? _foundOption$fieldNam : valueCell,
              index: foundIndex,
              option: foundOption
            });
            currentList = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.children];
          };

          for (var i = 0; i < valueCells.length; i += 1) {
            _loop(i);
          }

          return valueOptions;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _formatStrategyValues = module.exports.formatStrategyValues;
        _toPathOptions = module.exports.toPathOptions;
      }, () => ({
        './commonUtil': _req
      }));
    }
  };
});
//# sourceMappingURL=9499819dd43e58ab2e916233e6f77b66c2d6aa37.js.map