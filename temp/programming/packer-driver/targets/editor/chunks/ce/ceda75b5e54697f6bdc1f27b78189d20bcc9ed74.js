System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "rc-util/lib/Dom/css"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_rcUtilLibDomCss) {
      _req2 = _rcUtilLibDomCss.__cjsMetaURL;
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
        exports.default = getFixScaleEleTransPosition;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _css = require("rc-util/lib/Dom/css");

        function fixPoint(key, start, width, clientWidth) {
          var startAddWidth = start + width;
          var offsetStart = (width - clientWidth) / 2;

          if (width > clientWidth) {
            if (start > 0) {
              return (0, _defineProperty2.default)({}, key, offsetStart);
            }

            if (start < 0 && startAddWidth < clientWidth) {
              return (0, _defineProperty2.default)({}, key, -offsetStart);
            }
          } else if (start < 0 || startAddWidth > clientWidth) {
            return (0, _defineProperty2.default)({}, key, start < 0 ? offsetStart : -offsetStart);
          }

          return {};
        }
        /**
         * Fix positon x,y point when
         *
         * Ele width && height < client
         * - Back origin
         *
         * - Ele width | height > clientWidth | clientHeight
         * - left | top > 0 -> Back 0
         * - left | top + width | height < clientWidth | clientHeight -> Back left | top + width | height === clientWidth | clientHeight
         *
         * Regardless of other
         */


        function getFixScaleEleTransPosition(width, height, left, top) {
          var _getClientSize = (0, _css.getClientSize)(),
              clientWidth = _getClientSize.width,
              clientHeight = _getClientSize.height;

          var fixPos = null;

          if (width <= clientWidth && height <= clientHeight) {
            fixPos = {
              x: 0,
              y: 0
            };
          } else if (width > clientWidth || height > clientHeight) {
            fixPos = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fixPoint('x', left, width, clientWidth)), fixPoint('y', top, height, clientHeight));
          }

          return fixPos;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'rc-util/lib/Dom/css': _req2
      }));
    }
  };
});
//# sourceMappingURL=ceda75b5e54697f6bdc1f27b78189d20bcc9ed74.js.map