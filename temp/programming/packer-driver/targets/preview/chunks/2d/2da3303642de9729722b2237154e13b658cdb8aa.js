System.register(["__unresolved_0", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var _react = require("react");
        /**
         * Get sticky column offset width
         */


        function useStickyOffsets(colWidths, columnCount, direction) {
          var stickyOffsets = (0, _react.useMemo)(function () {
            var leftOffsets = [];
            var rightOffsets = [];
            var left = 0;
            var right = 0;

            for (var start = 0; start < columnCount; start += 1) {
              if (direction === 'rtl') {
                // Left offset
                rightOffsets[start] = right;
                right += colWidths[start] || 0; // Right offset

                var end = columnCount - start - 1;
                leftOffsets[end] = left;
                left += colWidths[end] || 0;
              } else {
                // Left offset
                leftOffsets[start] = left;
                left += colWidths[start] || 0; // Right offset

                var _end = columnCount - start - 1;

                rightOffsets[_end] = right;
                right += colWidths[_end] || 0;
              }
            }

            return {
              left: leftOffsets,
              right: rightOffsets
            };
          }, [colWidths, columnCount, direction]);
          return stickyOffsets;
        }

        var _default = useStickyOffsets;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        'react': _req
      }));
    }
  };
});
//# sourceMappingURL=2da3303642de9729722b2237154e13b658cdb8aa.js.map