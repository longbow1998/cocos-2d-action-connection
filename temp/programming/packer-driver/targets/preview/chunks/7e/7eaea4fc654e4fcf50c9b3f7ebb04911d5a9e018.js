System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/colors", "@ctrl/tinycolor", "rc-util/lib/Dom/canUseDom", "rc-util/lib/Dom/dynamicCSS", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _getStyle, _registerTheme, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_antDesignColors) {
      _req0 = _antDesignColors.__cjsMetaURL;
    }, function (_ctrlTinycolor) {
      _req1 = _ctrlTinycolor.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req2 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }, function (_rcUtilLibDomDynamicCSS) {
      _req3 = _rcUtilLibDomDynamicCSS.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getStyle = getStyle;
        exports.registerTheme = registerTheme;

        var _colors = require("@ant-design/colors");

        var _tinycolor = require("@ctrl/tinycolor");

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));

        var _dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");

        var _warning = _interopRequireDefault(require("../_util/warning"));
        /* eslint-disable import/prefer-default-export, prefer-destructuring */


        var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());

        function getStyle(globalPrefixCls, theme) {
          var variables = {};

          var formatColor = function formatColor(color, updater) {
            var clone = color.clone();
            clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
            return clone.toRgbString();
          };

          var fillColor = function fillColor(colorVal, type) {
            var baseColor = new _tinycolor.TinyColor(colorVal);
            var colorPalettes = (0, _colors.generate)(baseColor.toRgbString());
            variables["".concat(type, "-color")] = formatColor(baseColor);
            variables["".concat(type, "-color-disabled")] = colorPalettes[1];
            variables["".concat(type, "-color-hover")] = colorPalettes[4];
            variables["".concat(type, "-color-active")] = colorPalettes[6];
            variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
            variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
            variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
          }; // ================ Primary Color ================


          if (theme.primaryColor) {
            fillColor(theme.primaryColor, 'primary');
            var primaryColor = new _tinycolor.TinyColor(theme.primaryColor);
            var primaryColors = (0, _colors.generate)(primaryColor.toRgbString()); // Legacy - We should use semantic naming standard

            primaryColors.forEach(function (color, index) {
              variables["primary-".concat(index + 1)] = color;
            }); // Deprecated

            variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
              return c.lighten(35);
            });
            variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
              return c.lighten(20);
            });
            variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
              return c.tint(20);
            });
            variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
              return c.tint(50);
            });
            variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
              return c.setAlpha(c.getAlpha() * 0.12);
            });
            var primaryActiveColor = new _tinycolor.TinyColor(primaryColors[0]);
            variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
              return c.setAlpha(c.getAlpha() * 0.3);
            });
            variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
              return c.darken(2);
            });
          } // ================ Success Color ================


          if (theme.successColor) {
            fillColor(theme.successColor, 'success');
          } // ================ Warning Color ================


          if (theme.warningColor) {
            fillColor(theme.warningColor, 'warning');
          } // ================= Error Color =================


          if (theme.errorColor) {
            fillColor(theme.errorColor, 'error');
          } // ================= Info Color ==================


          if (theme.infoColor) {
            fillColor(theme.infoColor, 'info');
          } // Convert to css variables


          var cssList = Object.keys(variables).map(function (key) {
            return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
          });
          return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
        }

        function registerTheme(globalPrefixCls, theme) {
          var style = getStyle(globalPrefixCls, theme);

          if ((0, _canUseDom["default"])()) {
            (0, _dynamicCSS.updateCSS)(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
          } else {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.') : void 0;
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getStyle = module.exports.getStyle;
        _registerTheme = module.exports.registerTheme;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@ant-design/colors': _req0,
        '@ctrl/tinycolor': _req1,
        'rc-util/lib/Dom/canUseDom': _req2,
        'rc-util/lib/Dom/dynamicCSS': _req3,
        '../_util/warning': _req4
      }));
    }
  };
});
//# sourceMappingURL=7eaea4fc654e4fcf50c9b3f7ebb04911d5a9e018.js.map