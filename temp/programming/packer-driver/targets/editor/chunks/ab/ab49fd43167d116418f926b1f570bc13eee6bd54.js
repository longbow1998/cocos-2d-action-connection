System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react2) {
      _req1 = _react2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useOffsets;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _react = require("react");

        var DEFAULT_SIZE = {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        };

        function useOffsets(tabs, tabSizes, holderScrollWidth) {
          return (0, _react.useMemo)(function () {
            var _tabs$;

            var map = new Map();
            var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
            var rightOffset = lastOffset.left + lastOffset.width;

            for (var i = 0; i < tabs.length; i += 1) {
              var key = tabs[i].key;
              var data = tabSizes.get(key); // Reuse last one when not exist yet

              if (!data) {
                var _tabs;

                data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
              }

              var entity = map.get(key) || (0, _objectSpread2.default)({}, data); // Right

              entity.right = rightOffset - entity.left - entity.width; // Update entity

              map.set(key, entity);
            }

            return map;
          }, [tabs.map(function (tab) {
            return tab.key;
          }).join('_'), tabSizes, holderScrollWidth]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        'react': _req1
      }));
    }
  };
});
//# sourceMappingURL=ab49fd43167d116418f926b1f570bc13eee6bd54.js.map