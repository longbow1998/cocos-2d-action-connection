System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _isStyleSupport, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
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
        exports.isStyleSupport = isStyleSupport;

        var _canUseDom = _interopRequireDefault(require("./canUseDom"));

        var isStyleNameSupport = function isStyleNameSupport(styleName) {
          if ((0, _canUseDom.default)() && window.document.documentElement) {
            var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
            var documentElement = window.document.documentElement;
            return styleNameList.some(function (name) {
              return name in documentElement.style;
            });
          }

          return false;
        };

        var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
          if (!isStyleNameSupport(styleName)) {
            return false;
          }

          var ele = document.createElement('div');
          var origin = ele.style[styleName];
          ele.style[styleName] = value;
          return ele.style[styleName] !== origin;
        };

        function isStyleSupport(styleName, styleValue) {
          if (!Array.isArray(styleName) && styleValue !== undefined) {
            return isStyleValueSupport(styleName, styleValue);
          }

          return isStyleNameSupport(styleName);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isStyleSupport = module.exports.isStyleSupport;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './canUseDom': _req0
      }));
    }
  };
});
//# sourceMappingURL=c843b3523b61de2cf06e957174807415dad9e0f9.js.map