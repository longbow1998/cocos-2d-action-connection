System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var _default = function _default(element) {
          if (!element) {
            return false;
          }

          if (element instanceof Element) {
            if (element.offsetParent) {
              return true;
            }

            if (element.getBBox) {
              var _getBBox = element.getBBox(),
                  width = _getBBox.width,
                  height = _getBBox.height;

              if (width || height) {
                return true;
              }
            }

            if (element.getBoundingClientRect) {
              var _element$getBoundingC = element.getBoundingClientRect(),
                  _width = _element$getBoundingC.width,
                  _height = _element$getBoundingC.height;

              if (_width || _height) {
                return true;
              }
            }
          }

          return false;
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=894884c3b69ac5b0c05d24c99bcead15743d45c8.js.map