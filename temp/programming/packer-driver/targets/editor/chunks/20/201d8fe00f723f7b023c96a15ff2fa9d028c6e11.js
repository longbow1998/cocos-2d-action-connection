System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default0, _placements, __cjsMetaURL;

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
        exports.default = exports.placements = void 0;
        var autoAdjustOverflow = {
          adjustX: 1,
          adjustY: 1
        };
        var targetOffset = [0, 0];
        var placements = {
          left: {
            points: ['cr', 'cl'],
            overflow: autoAdjustOverflow,
            offset: [-4, 0],
            targetOffset: targetOffset
          },
          right: {
            points: ['cl', 'cr'],
            overflow: autoAdjustOverflow,
            offset: [4, 0],
            targetOffset: targetOffset
          },
          top: {
            points: ['bc', 'tc'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          },
          topLeft: {
            points: ['bl', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [-4, 0],
            targetOffset: targetOffset
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: autoAdjustOverflow,
            offset: [0, -4],
            targetOffset: targetOffset
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: autoAdjustOverflow,
            offset: [4, 0],
            targetOffset: targetOffset
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          },
          rightBottom: {
            points: ['bl', 'br'],
            overflow: autoAdjustOverflow,
            offset: [4, 0],
            targetOffset: targetOffset
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: autoAdjustOverflow,
            offset: [0, 4],
            targetOffset: targetOffset
          },
          leftBottom: {
            points: ['br', 'bl'],
            overflow: autoAdjustOverflow,
            offset: [-4, 0],
            targetOffset: targetOffset
          }
        };
        exports.placements = placements;
        var _default = placements;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _placements = module.exports.placements;
      }, {});
    }
  };
});
//# sourceMappingURL=201d8fe00f723f7b023c96a15ff2fa9d028c6e11.js.map