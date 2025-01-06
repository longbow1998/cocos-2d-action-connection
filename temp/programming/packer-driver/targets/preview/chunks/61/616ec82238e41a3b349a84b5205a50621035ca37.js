System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _getAlignFromPlacement, _getAlignPopupClassName, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getAlignFromPlacement = getAlignFromPlacement;
        exports.getAlignPopupClassName = getAlignPopupClassName;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        function isPointsEq(a1, a2, isAlignPoint) {
          if (isAlignPoint) {
            return a1[0] === a2[0];
          }

          return a1[0] === a2[0] && a1[1] === a2[1];
        }

        function getAlignFromPlacement(builtinPlacements, placementStr, align) {
          var baseAlign = builtinPlacements[placementStr] || {};
          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, baseAlign), align);
        }

        function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
          var points = align.points;
          var placements = Object.keys(builtinPlacements);

          for (var i = 0; i < placements.length; i += 1) {
            var placement = placements[i];

            if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
              return "".concat(prefixCls, "-placement-").concat(placement);
            }
          }

          return '';
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getAlignFromPlacement = module.exports.getAlignFromPlacement;
        _getAlignPopupClassName = module.exports.getAlignPopupClassName;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0
      }));
    }
  };
});
//# sourceMappingURL=616ec82238e41a3b349a84b5205a50621035ca37.js.map