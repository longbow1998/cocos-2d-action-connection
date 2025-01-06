System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _getTwoToneColor, _setTwoToneColor, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
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
        exports.getTwoToneColor = getTwoToneColor;
        exports.setTwoToneColor = setTwoToneColor;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _IconBase = _interopRequireDefault(require("./IconBase"));

        var _utils = require("../utils");

        function setTwoToneColor(twoToneColor) {
          var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
              _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
              primaryColor = _normalizeTwoToneColo2[0],
              secondaryColor = _normalizeTwoToneColo2[1];

          return _IconBase.default.setTwoToneColors({
            primaryColor: primaryColor,
            secondaryColor: secondaryColor
          });
        }

        function getTwoToneColor() {
          var colors = _IconBase.default.getTwoToneColors();

          if (!colors.calculated) {
            return colors.primaryColor;
          }

          return [colors.primaryColor, colors.secondaryColor];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getTwoToneColor = module.exports.getTwoToneColor;
        _setTwoToneColor = module.exports.setTwoToneColor;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        './IconBase': _req1,
        '../utils': _req2
      }));
    }
  };
});
//# sourceMappingURL=67b55b09889db5370f32adf36c39256e7945acc3.js.map