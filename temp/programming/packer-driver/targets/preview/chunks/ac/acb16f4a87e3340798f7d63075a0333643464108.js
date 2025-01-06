System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _legacyRandom, _fromRatio, __cjsMetaURL;

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
        exports.legacyRandom = exports.fromRatio = void 0;

        var index_1 = require("./index");

        var util_1 = require("./util");
        /**
         * If input is an object, force 1 into "1.0" to handle ratios properly
         * String input requires "1.0" as input, so 1 will be treated as 1
         */


        function fromRatio(ratio, opts) {
          var newColor = {
            r: (0, util_1.convertToPercentage)(ratio.r),
            g: (0, util_1.convertToPercentage)(ratio.g),
            b: (0, util_1.convertToPercentage)(ratio.b)
          };

          if (ratio.a !== undefined) {
            newColor.a = Number(ratio.a);
          }

          return new index_1.TinyColor(newColor, opts);
        }

        exports.fromRatio = fromRatio;
        /** old random function */

        function legacyRandom() {
          return new index_1.TinyColor({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
          });
        }

        exports.legacyRandom = legacyRandom; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _legacyRandom = module.exports.legacyRandom;
        _fromRatio = module.exports.fromRatio;
      }, () => ({
        './index': _req,
        './util': _req0
      }));
    }
  };
});
//# sourceMappingURL=acb16f4a87e3340798f7d63075a0333643464108.js.map