System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _toMsFilter, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.toMsFilter = void 0;

        var conversion_1 = require("./conversion");

        var index_1 = require("./index");
        /**
         * Returns the color represented as a Microsoft filter for use in old versions of IE.
         */


        function toMsFilter(firstColor, secondColor) {
          var color = new index_1.TinyColor(firstColor);
          var hex8String = '#' + (0, conversion_1.rgbaToArgbHex)(color.r, color.g, color.b, color.a);
          var secondHex8String = hex8String;
          var gradientType = color.gradientType ? 'GradientType = 1, ' : '';

          if (secondColor) {
            var s = new index_1.TinyColor(secondColor);
            secondHex8String = '#' + (0, conversion_1.rgbaToArgbHex)(s.r, s.g, s.b, s.a);
          }

          return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
        }

        exports.toMsFilter = toMsFilter; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _toMsFilter = module.exports.toMsFilter;
      }, () => ({
        './conversion': _req,
        './index': _req0
      }));
    }
  };
});
//# sourceMappingURL=f2c0454a58b618ce7d57c90b17fbef2286063d2f.js.map