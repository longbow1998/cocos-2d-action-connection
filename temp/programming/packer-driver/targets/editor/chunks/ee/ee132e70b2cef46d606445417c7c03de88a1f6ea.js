System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _placementsRtl, _placements, _default0, __cjsMetaURL;

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
        exports.placementsRtl = exports.placements = exports.default = void 0;
        var autoAdjustOverflow = {
          adjustX: 1,
          adjustY: 1
        };
        var placements = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [0, -7]
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: autoAdjustOverflow,
            offset: [0, 7]
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [-4, 0]
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: autoAdjustOverflow,
            offset: [4, 0]
          }
        };
        exports.placements = placements;
        var placementsRtl = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [0, -7]
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: autoAdjustOverflow,
            offset: [0, 7]
          },
          rightTop: {
            points: ['tr', 'tl'],
            overflow: autoAdjustOverflow,
            offset: [-4, 0]
          },
          leftTop: {
            points: ['tl', 'tr'],
            overflow: autoAdjustOverflow,
            offset: [4, 0]
          }
        };
        exports.placementsRtl = placementsRtl;
        var _default = placements;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _placementsRtl = module.exports.placementsRtl;
        _placements = module.exports.placements;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=ee132e70b2cef46d606445417c7c03de88a1f6ea.js.map