System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req2 = _rcUtilLibWarning.__cjsMetaURL;
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
        exports.default = useAnimateConfig;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        function useAnimateConfig() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            inkBar: true,
            tabPane: false
          };
          var mergedAnimated;

          if (animated === false) {
            mergedAnimated = {
              inkBar: false,
              tabPane: false
            };
          } else if (animated === true) {
            mergedAnimated = {
              inkBar: true,
              tabPane: false
            };
          } else {
            mergedAnimated = (0, _objectSpread2.default)({
              inkBar: true
            }, (0, _typeof2.default)(animated) === 'object' ? animated : {});
          } // Enable tabPane animation if provide motion


          if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === undefined) {
            mergedAnimated.tabPane = true;
          }

          if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
            if (process.env.NODE_ENV !== 'production') {
              (0, _warning.default)(false, '`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.');
            }

            mergedAnimated.tabPane = false;
          }

          return mergedAnimated;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'rc-util/lib/warning': _req2
      }));
    }
  };
});
//# sourceMappingURL=2c87588102ecd4af744653a523ca660b3e213392.js.map