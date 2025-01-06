System.register(["__unresolved_0", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_react2) {
      _req = _react2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useVisibleRange;

        var _react = require("react");

        var DEFAULT_SIZE = {
          width: 0,
          height: 0,
          left: 0,
          top: 0,
          right: 0
        };

        function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, _ref) {
          var tabs = _ref.tabs,
              tabPosition = _ref.tabPosition,
              rtl = _ref.rtl;
          var charUnit;
          var position;
          var transformSize;

          if (['top', 'bottom'].includes(tabPosition)) {
            charUnit = 'width';
            position = rtl ? 'right' : 'left';
            transformSize = Math.abs(transform);
          } else {
            charUnit = 'height';
            position = 'top';
            transformSize = -transform;
          }

          return (0, _react.useMemo)(function () {
            if (!tabs.length) {
              return [0, 0];
            }

            var len = tabs.length;
            var endIndex = len;

            for (var i = 0; i < len; i += 1) {
              var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;

              if (offset[position] + offset[charUnit] > transformSize + visibleTabContentValue) {
                endIndex = i - 1;
                break;
              }
            }

            var startIndex = 0;

            for (var _i = len - 1; _i >= 0; _i -= 1) {
              var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;

              if (_offset[position] < transformSize) {
                startIndex = _i + 1;
                break;
              }
            }

            return [startIndex, endIndex];
          }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map(function (tab) {
            return tab.key;
          }).join('_'), rtl]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        'react': _req
      }));
    }
  };
});
//# sourceMappingURL=9fd225df6c2e1620f0bf2b95f7f483e2f1bfd4af.js.map