System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _getTitle, _hasValue, _isClient, _isBrowserClient, _toArray, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
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
        exports.getTitle = getTitle;
        exports.hasValue = hasValue;
        exports.isClient = exports.isBrowserClient = void 0;
        exports.toArray = toArray;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        function toArray(value) {
          if (Array.isArray(value)) {
            return value;
          }

          return value !== undefined ? [value] : [];
        }

        var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
        /** Is client side and not jsdom */

        exports.isClient = isClient;
        var isBrowserClient = process.env.NODE_ENV !== 'test' && isClient;
        exports.isBrowserClient = isBrowserClient;

        function hasValue(value) {
          return value !== undefined && value !== null;
        }

        function isTitleType(title) {
          return ['string', 'number'].includes((0, _typeof2.default)(title));
        }

        function getTitle(item) {
          var title = undefined;

          if (item) {
            if (isTitleType(item.title)) {
              title = item.title.toString();
            } else if (isTitleType(item.label)) {
              title = item.label.toString();
            }
          }

          return title;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getTitle = module.exports.getTitle;
        _hasValue = module.exports.hasValue;
        _isClient = module.exports.isClient;
        _isBrowserClient = module.exports.isBrowserClient;
        _toArray = module.exports.toArray;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0
      }));
    }
  };
});
//# sourceMappingURL=7c08f9ce0675deb729fdabe966a3c1bcc24e39ee.js.map