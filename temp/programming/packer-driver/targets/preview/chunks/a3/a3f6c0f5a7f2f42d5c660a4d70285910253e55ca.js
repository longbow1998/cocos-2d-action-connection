System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _pad2, _convertToPercentage, _boundAlpha, _isPercentage, _isOnePointZero, _clamp01, _bound01, __cjsMetaURL;

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
        exports.pad2 = exports.convertToPercentage = exports.boundAlpha = exports.isPercentage = exports.isOnePointZero = exports.clamp01 = exports.bound01 = void 0;
        /**
         * Take input from [0, n] and return it as [0, 1]
         * @hidden
         */

        function bound01(n, max) {
          if (isOnePointZero(n)) {
            n = '100%';
          }

          var isPercent = isPercentage(n);
          n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n))); // Automatically convert percentage into number

          if (isPercent) {
            n = parseInt(String(n * max), 10) / 100;
          } // Handle floating point rounding errors


          if (Math.abs(n - max) < 0.000001) {
            return 1;
          } // Convert into [0, 1] range if it isn't already


          if (max === 360) {
            // If n is a hue given in degrees,
            // wrap around out-of-range values into [0, 360] range
            // then convert into [0, 1].
            n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
          } else {
            // If n not a hue given in degrees
            // Convert into [0, 1] range if it isn't already.
            n = n % max / parseFloat(String(max));
          }

          return n;
        }

        exports.bound01 = bound01;
        /**
         * Force a number between 0 and 1
         * @hidden
         */

        function clamp01(val) {
          return Math.min(1, Math.max(0, val));
        }

        exports.clamp01 = clamp01;
        /**
         * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
         * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
         * @hidden
         */

        function isOnePointZero(n) {
          return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
        }

        exports.isOnePointZero = isOnePointZero;
        /**
         * Check to see if string passed in is a percentage
         * @hidden
         */

        function isPercentage(n) {
          return typeof n === 'string' && n.indexOf('%') !== -1;
        }

        exports.isPercentage = isPercentage;
        /**
         * Return a valid alpha value [0,1] with all invalid values being set to 1
         * @hidden
         */

        function boundAlpha(a) {
          a = parseFloat(a);

          if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
          }

          return a;
        }

        exports.boundAlpha = boundAlpha;
        /**
         * Replace a decimal with it's percentage value
         * @hidden
         */

        function convertToPercentage(n) {
          if (n <= 1) {
            return "".concat(Number(n) * 100, "%");
          }

          return n;
        }

        exports.convertToPercentage = convertToPercentage;
        /**
         * Force a hex value to have 2 characters
         * @hidden
         */

        function pad2(c) {
          return c.length === 1 ? '0' + c : String(c);
        }

        exports.pad2 = pad2; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _pad2 = module.exports.pad2;
        _convertToPercentage = module.exports.convertToPercentage;
        _boundAlpha = module.exports.boundAlpha;
        _isPercentage = module.exports.isPercentage;
        _isOnePointZero = module.exports.isOnePointZero;
        _clamp01 = module.exports.clamp01;
        _bound01 = module.exports.bound01;
      }, {});
    }
  };
});
//# sourceMappingURL=a3f6c0f5a7f2f42d5c660a4d70285910253e55ca.js.map