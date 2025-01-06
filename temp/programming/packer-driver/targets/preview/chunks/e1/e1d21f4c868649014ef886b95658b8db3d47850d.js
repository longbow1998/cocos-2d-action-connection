System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _SHOW_PARENT, _SHOW_CHILD, _SHOW_ALL, _formatStrategyValues, __cjsMetaURL;

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
        exports.SHOW_PARENT = exports.SHOW_CHILD = exports.SHOW_ALL = void 0;
        exports.formatStrategyValues = formatStrategyValues;

        var _valueUtil = require("./valueUtil");

        var SHOW_ALL = 'SHOW_ALL';
        exports.SHOW_ALL = SHOW_ALL;
        var SHOW_PARENT = 'SHOW_PARENT';
        exports.SHOW_PARENT = SHOW_PARENT;
        var SHOW_CHILD = 'SHOW_CHILD';
        exports.SHOW_CHILD = SHOW_CHILD;

        function formatStrategyValues(values, strategy, keyEntities, fieldNames) {
          var valueSet = new Set(values);

          if (strategy === SHOW_CHILD) {
            return values.filter(function (key) {
              var entity = keyEntities[key];

              if (entity && entity.children && entity.children.some(function (_ref) {
                var node = _ref.node;
                return valueSet.has(node[fieldNames.value]);
              }) && entity.children.every(function (_ref2) {
                var node = _ref2.node;
                return (0, _valueUtil.isCheckDisabled)(node) || valueSet.has(node[fieldNames.value]);
              })) {
                return false;
              }

              return true;
            });
          }

          if (strategy === SHOW_PARENT) {
            return values.filter(function (key) {
              var entity = keyEntities[key];
              var parent = entity ? entity.parent : null;

              if (parent && !(0, _valueUtil.isCheckDisabled)(parent.node) && valueSet.has(parent.key)) {
                return false;
              }

              return true;
            });
          }

          return values;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _SHOW_PARENT = module.exports.SHOW_PARENT;
        _SHOW_CHILD = module.exports.SHOW_CHILD;
        _SHOW_ALL = module.exports.SHOW_ALL;
        _formatStrategyValues = module.exports.formatStrategyValues;
      }, () => ({
        './valueUtil': _req
      }));
    }
  };
});
//# sourceMappingURL=e1d21f4c868649014ef886b95658b8db3d47850d.js.map