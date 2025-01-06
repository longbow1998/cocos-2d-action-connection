System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getDirectionStyle, _getIndex, _getOffset, __cjsMetaURL;

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
        exports.getDirectionStyle = getDirectionStyle;
        exports.getIndex = getIndex;
        exports.getOffset = getOffset;

        function getOffset(value, min, max) {
          return (value - min) / (max - min);
        }

        function getDirectionStyle(direction, value, min, max) {
          var offset = getOffset(value, min, max);
          var positionStyle = {};

          switch (direction) {
            case 'rtl':
              positionStyle.right = "".concat(offset * 100, "%");
              positionStyle.transform = 'translateX(50%)';
              break;

            case 'btt':
              positionStyle.bottom = "".concat(offset * 100, "%");
              positionStyle.transform = 'translateY(50%)';
              break;

            case 'ttb':
              positionStyle.top = "".concat(offset * 100, "%");
              positionStyle.transform = 'translateY(-50%)';
              break;

            default:
              positionStyle.left = "".concat(offset * 100, "%");
              positionStyle.transform = 'translateX(-50%)';
              break;
          }

          return positionStyle;
        }
        /** Return index value if is list or return value directly */


        function getIndex(value, index) {
          return Array.isArray(value) ? value[index] : value;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getDirectionStyle = module.exports.getDirectionStyle;
        _getIndex = module.exports.getIndex;
        _getOffset = module.exports.getOffset;
      }, {});
    }
  };
});
//# sourceMappingURL=dd0f764864c7c05d10cbd2bbd0fd1b2f4cb38f5a.js.map