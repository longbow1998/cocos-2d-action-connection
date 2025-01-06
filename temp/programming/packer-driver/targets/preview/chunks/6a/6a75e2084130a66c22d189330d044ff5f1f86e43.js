System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;
        var autoAdjustOverflow = {
          adjustX: 1,
          adjustY: 1
        };
        var targetOffset = [0, 0];
        var placements = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          }
        };
        var _default = placements;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=6a75e2084130a66c22d189330d044ff5f1f86e43.js.map