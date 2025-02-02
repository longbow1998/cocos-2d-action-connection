System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _isValidCSSUnit, _stringInputToObject, _inputToRGB, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.isValidCSSUnit = exports.stringInputToObject = exports.inputToRGB = void 0;
        /* eslint-disable @typescript-eslint/no-redundant-type-constituents */

        var conversion_1 = require("./conversion");

        var css_color_names_1 = require("./css-color-names");

        var util_1 = require("./util");
        /**
         * Given a string or object, convert that input to RGB
         *
         * Possible string inputs:
         * ```
         * "red"
         * "#f00" or "f00"
         * "#ff0000" or "ff0000"
         * "#ff000000" or "ff000000"
         * "rgb 255 0 0" or "rgb (255, 0, 0)"
         * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
         * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
         * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
         * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
         * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
         * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
         * ```
         */


        function inputToRGB(color) {
          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          var a = 1;
          var s = null;
          var v = null;
          var l = null;
          var ok = false;
          var format = false;

          if (typeof color === 'string') {
            color = stringInputToObject(color);
          }

          if (typeof color === 'object') {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = (0, conversion_1.rgbToRgb)(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = (0, util_1.convertToPercentage)(color.s);
              v = (0, util_1.convertToPercentage)(color.v);
              rgb = (0, conversion_1.hsvToRgb)(color.h, s, v);
              ok = true;
              format = 'hsv';
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = (0, util_1.convertToPercentage)(color.s);
              l = (0, util_1.convertToPercentage)(color.l);
              rgb = (0, conversion_1.hslToRgb)(color.h, s, l);
              ok = true;
              format = 'hsl';
            }

            if (Object.prototype.hasOwnProperty.call(color, 'a')) {
              a = color.a;
            }
          }

          a = (0, util_1.boundAlpha)(a);
          return {
            ok: ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a: a
          };
        }

        exports.inputToRGB = inputToRGB; // <http://www.w3.org/TR/css3-values/#integers>

        var CSS_INTEGER = '[-\\+]?\\d+%?'; // <http://www.w3.org/TR/css3-values/#number-value>

        var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

        var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")"); // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren

        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
        var matchers = {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
          rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
          hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
          hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
          hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
          hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
        /**
         * Permissive string parsing.  Take in a number of formats, and output an object
         * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
         */

        function stringInputToObject(color) {
          color = color.trim().toLowerCase();

          if (color.length === 0) {
            return false;
          }

          var named = false;

          if (css_color_names_1.names[color]) {
            color = css_color_names_1.names[color];
            named = true;
          } else if (color === 'transparent') {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: 'name'
            };
          } // Try to match string input using regular expressions.
          // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
          // Just return an object and let the conversion functions handle that.
          // This way the result will be the same whether the tinycolor is initialized with string or object.


          var match = matchers.rgb.exec(color);

          if (match) {
            return {
              r: match[1],
              g: match[2],
              b: match[3]
            };
          }

          match = matchers.rgba.exec(color);

          if (match) {
            return {
              r: match[1],
              g: match[2],
              b: match[3],
              a: match[4]
            };
          }

          match = matchers.hsl.exec(color);

          if (match) {
            return {
              h: match[1],
              s: match[2],
              l: match[3]
            };
          }

          match = matchers.hsla.exec(color);

          if (match) {
            return {
              h: match[1],
              s: match[2],
              l: match[3],
              a: match[4]
            };
          }

          match = matchers.hsv.exec(color);

          if (match) {
            return {
              h: match[1],
              s: match[2],
              v: match[3]
            };
          }

          match = matchers.hsva.exec(color);

          if (match) {
            return {
              h: match[1],
              s: match[2],
              v: match[3],
              a: match[4]
            };
          }

          match = matchers.hex8.exec(color);

          if (match) {
            return {
              r: (0, conversion_1.parseIntFromHex)(match[1]),
              g: (0, conversion_1.parseIntFromHex)(match[2]),
              b: (0, conversion_1.parseIntFromHex)(match[3]),
              a: (0, conversion_1.convertHexToDecimal)(match[4]),
              format: named ? 'name' : 'hex8'
            };
          }

          match = matchers.hex6.exec(color);

          if (match) {
            return {
              r: (0, conversion_1.parseIntFromHex)(match[1]),
              g: (0, conversion_1.parseIntFromHex)(match[2]),
              b: (0, conversion_1.parseIntFromHex)(match[3]),
              format: named ? 'name' : 'hex'
            };
          }

          match = matchers.hex4.exec(color);

          if (match) {
            return {
              r: (0, conversion_1.parseIntFromHex)(match[1] + match[1]),
              g: (0, conversion_1.parseIntFromHex)(match[2] + match[2]),
              b: (0, conversion_1.parseIntFromHex)(match[3] + match[3]),
              a: (0, conversion_1.convertHexToDecimal)(match[4] + match[4]),
              format: named ? 'name' : 'hex8'
            };
          }

          match = matchers.hex3.exec(color);

          if (match) {
            return {
              r: (0, conversion_1.parseIntFromHex)(match[1] + match[1]),
              g: (0, conversion_1.parseIntFromHex)(match[2] + match[2]),
              b: (0, conversion_1.parseIntFromHex)(match[3] + match[3]),
              format: named ? 'name' : 'hex'
            };
          }

          return false;
        }

        exports.stringInputToObject = stringInputToObject;
        /**
         * Check to see if it looks like a CSS unit
         * (see `matchers` above for definition).
         */

        function isValidCSSUnit(color) {
          return Boolean(matchers.CSS_UNIT.exec(String(color)));
        }

        exports.isValidCSSUnit = isValidCSSUnit; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isValidCSSUnit = module.exports.isValidCSSUnit;
        _stringInputToObject = module.exports.stringInputToObject;
        _inputToRGB = module.exports.inputToRGB;
      }, () => ({
        './conversion': _req,
        './css-color-names': _req0,
        './util': _req1
      }));
    }
  };
});
//# sourceMappingURL=78215697dc1e58c34caa56949da52ef4764fe7a5.js.map