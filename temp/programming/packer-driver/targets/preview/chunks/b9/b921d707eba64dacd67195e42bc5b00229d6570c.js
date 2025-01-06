System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/Dom/canUseDom", "rc-util/lib/Dom/styleChecker"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _detectFlexGapSupported, _canUseDocElement, _isStyleSupport, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req0 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }, function (_rcUtilLibDomStyleChecker) {
      _req1 = _rcUtilLibDomStyleChecker.__cjsMetaURL;
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
        exports.detectFlexGapSupported = exports.canUseDocElement = void 0;
        Object.defineProperty(exports, "isStyleSupport", {
          enumerable: true,
          get: function get() {
            return _styleChecker.isStyleSupport;
          }
        });

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));

        var _styleChecker = require("rc-util/lib/Dom/styleChecker");

        var canUseDocElement = function canUseDocElement() {
          return (0, _canUseDom["default"])() && window.document.documentElement;
        };

        exports.canUseDocElement = canUseDocElement;
        var flexGapSupported;

        var detectFlexGapSupported = function detectFlexGapSupported() {
          if (!canUseDocElement()) {
            return false;
          }

          if (flexGapSupported !== undefined) {
            return flexGapSupported;
          } // create flex container with row-gap set


          var flex = document.createElement('div');
          flex.style.display = 'flex';
          flex.style.flexDirection = 'column';
          flex.style.rowGap = '1px'; // create two, elements inside it

          flex.appendChild(document.createElement('div'));
          flex.appendChild(document.createElement('div')); // append to the DOM (needed to obtain scrollHeight)

          document.body.appendChild(flex);
          flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

          document.body.removeChild(flex);
          return flexGapSupported;
        };

        exports.detectFlexGapSupported = detectFlexGapSupported; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _detectFlexGapSupported = module.exports.detectFlexGapSupported;
        _canUseDocElement = module.exports.canUseDocElement;
        _isStyleSupport = module.exports.isStyleSupport;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/Dom/canUseDom': _req0,
        'rc-util/lib/Dom/styleChecker': _req1
      }));
    }
  };
});
//# sourceMappingURL=b921d707eba64dacd67195e42bc5b00229d6570c.js.map