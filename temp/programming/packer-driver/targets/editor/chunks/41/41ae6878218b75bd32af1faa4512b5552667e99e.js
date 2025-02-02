System.register(["__unresolved_0", "@ctrl/tinycolor"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _blue, _cyan, _geekblue, _generate, _gold, _green, _grey, _lime, _magenta, _orange, _presetDarkPalettes, _presetPalettes, _presetPrimaryColors, _purple, _red, _volcano, _yellow, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_ctrlTinycolor) {
      _req = _ctrlTinycolor.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var tinycolor = require('@ctrl/tinycolor');

        var hueStep = 2; // 色相阶梯

        var saturationStep = 0.16; // 饱和度阶梯，浅色部分

        var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

        var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

        var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

        var lightColorCount = 5; // 浅色数量，主色上

        var darkColorCount = 4; // 深色数量，主色下
        // 暗色主题颜色映射关系表

        var darkColorMap = [{
          index: 7,
          opacity: 0.15
        }, {
          index: 6,
          opacity: 0.25
        }, {
          index: 5,
          opacity: 0.3
        }, {
          index: 5,
          opacity: 0.45
        }, {
          index: 5,
          opacity: 0.65
        }, {
          index: 5,
          opacity: 0.85
        }, {
          index: 4,
          opacity: 0.9
        }, {
          index: 3,
          opacity: 0.95
        }, {
          index: 2,
          opacity: 0.97
        }, {
          index: 1,
          opacity: 0.98
        }]; // Wrapper function ported from TinyColor.prototype.toHsv
        // Keep it here because of `hsv.h * 360`

        function toHsv(_ref) {
          var r = _ref.r,
              g = _ref.g,
              b = _ref.b;
          var hsv = tinycolor.rgbToHsv(r, g, b);
          return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v
          };
        } // Wrapper function ported from TinyColor.prototype.toHexString
        // Keep it here because of the prefix `#`


        function toHex(_ref2) {
          var r = _ref2.r,
              g = _ref2.g,
              b = _ref2.b;
          return "#".concat(tinycolor.rgbToHex(r, g, b, false));
        } // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
        // Amount in range [0, 1]
        // Assume color1 & color2 has no alpha, since the following src code did so.


        function mix(rgb1, rgb2, amount) {
          var p = amount / 100;
          var rgb = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b
          };
          return rgb;
        }

        function getHue(hsv, i, light) {
          var hue; // 根据色相不同，色相转向不同

          if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
            hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
          } else {
            hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
          }

          if (hue < 0) {
            hue += 360;
          } else if (hue >= 360) {
            hue -= 360;
          }

          return hue;
        }

        function getSaturation(hsv, i, light) {
          // grey color don't change saturation
          if (hsv.h === 0 && hsv.s === 0) {
            return hsv.s;
          }

          var saturation;

          if (light) {
            saturation = hsv.s - saturationStep * i;
          } else if (i === darkColorCount) {
            saturation = hsv.s + saturationStep;
          } else {
            saturation = hsv.s + saturationStep2 * i;
          } // 边界值修正


          if (saturation > 1) {
            saturation = 1;
          } // 第一格的 s 限制在 0.06-0.1 之间


          if (light && i === lightColorCount && saturation > 0.1) {
            saturation = 0.1;
          }

          if (saturation < 0.06) {
            saturation = 0.06;
          }

          return Number(saturation.toFixed(2));
        }

        function getValue(hsv, i, light) {
          var value;

          if (light) {
            value = hsv.v + brightnessStep1 * i;
          } else {
            value = hsv.v - brightnessStep2 * i;
          }

          if (value > 1) {
            value = 1;
          }

          return Number(value.toFixed(2));
        }

        function generate(color) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var patterns = [];
          var pColor = tinycolor.inputToRGB(color);

          for (var i = lightColorCount; i > 0; i -= 1) {
            var hsv = toHsv(pColor);
            var colorString = toHex(tinycolor.inputToRGB({
              h: getHue(hsv, i, true),
              s: getSaturation(hsv, i, true),
              v: getValue(hsv, i, true)
            }));
            patterns.push(colorString);
          }

          patterns.push(toHex(pColor));

          for (var _i = 1; _i <= darkColorCount; _i += 1) {
            var _hsv = toHsv(pColor);

            var _colorString = toHex(tinycolor.inputToRGB({
              h: getHue(_hsv, _i),
              s: getSaturation(_hsv, _i),
              v: getValue(_hsv, _i)
            }));

            patterns.push(_colorString);
          } // dark theme patterns


          if (opts.theme === 'dark') {
            return darkColorMap.map(function (_ref3) {
              var index = _ref3.index,
                  opacity = _ref3.opacity;
              var darkColorString = toHex(mix(tinycolor.inputToRGB(opts.backgroundColor || '#141414'), tinycolor.inputToRGB(patterns[index]), opacity * 100));
              return darkColorString;
            });
          }

          return patterns;
        }

        var presetPrimaryColors = {
          red: '#F5222D',
          volcano: '#FA541C',
          orange: '#FA8C16',
          gold: '#FAAD14',
          yellow: '#FADB14',
          lime: '#A0D911',
          green: '#52C41A',
          cyan: '#13C2C2',
          blue: '#1890FF',
          geekblue: '#2F54EB',
          purple: '#722ED1',
          magenta: '#EB2F96',
          grey: '#666666'
        };
        var presetPalettes = {};
        var presetDarkPalettes = {};
        Object.keys(presetPrimaryColors).forEach(function (key) {
          presetPalettes[key] = generate(presetPrimaryColors[key]);
          presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

          presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
            theme: 'dark',
            backgroundColor: '#141414'
          });
          presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
        });
        var red = presetPalettes.red;
        var volcano = presetPalettes.volcano;
        var gold = presetPalettes.gold;
        var orange = presetPalettes.orange;
        var yellow = presetPalettes.yellow;
        var lime = presetPalettes.lime;
        var green = presetPalettes.green;
        var cyan = presetPalettes.cyan;
        var blue = presetPalettes.blue;
        var geekblue = presetPalettes.geekblue;
        var purple = presetPalettes.purple;
        var magenta = presetPalettes.magenta;
        var grey = presetPalettes.grey;
        exports.blue = blue;
        exports.cyan = cyan;
        exports.geekblue = geekblue;
        exports.generate = generate;
        exports.gold = gold;
        exports.green = green;
        exports.grey = grey;
        exports.lime = lime;
        exports.magenta = magenta;
        exports.orange = orange;
        exports.presetDarkPalettes = presetDarkPalettes;
        exports.presetPalettes = presetPalettes;
        exports.presetPrimaryColors = presetPrimaryColors;
        exports.purple = purple;
        exports.red = red;
        exports.volcano = volcano;
        exports.yellow = yellow; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _blue = module.exports.blue;
        _cyan = module.exports.cyan;
        _geekblue = module.exports.geekblue;
        _generate = module.exports.generate;
        _gold = module.exports.gold;
        _green = module.exports.green;
        _grey = module.exports.grey;
        _lime = module.exports.lime;
        _magenta = module.exports.magenta;
        _orange = module.exports.orange;
        _presetDarkPalettes = module.exports.presetDarkPalettes;
        _presetPalettes = module.exports.presetPalettes;
        _presetPrimaryColors = module.exports.presetPrimaryColors;
        _purple = module.exports.purple;
        _red = module.exports.red;
        _volcano = module.exports.volcano;
        _yellow = module.exports.yellow;
      }, () => ({
        '@ctrl/tinycolor': _req
      }));
    }
  };
});
//# sourceMappingURL=41ae6878218b75bd32af1faa4512b5552667e99e.js.map