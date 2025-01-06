System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "__unresolved_1"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = useAnimateConfig;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _motion = require("../../_util/motion");

        var motion = {
          motionAppear: false,
          motionEnter: true,
          motionLeave: true
        };

        function useAnimateConfig(prefixCls) {
          var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
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
              tabPane: true
            };
          } else {
            mergedAnimated = (0, _extends2["default"])({
              inkBar: true
            }, (0, _typeof2["default"])(animated) === 'object' ? animated : {});
          }

          if (mergedAnimated.tabPane) {
            mergedAnimated.tabPaneMotion = (0, _extends2["default"])((0, _extends2["default"])({}, motion), {
              motionName: (0, _motion.getTransitionName)(prefixCls, 'switch')
            });
          }

          return mergedAnimated;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '../../_util/motion': _req2
      }));
    }
  };
});
//# sourceMappingURL=10940aa9c15e031ebff10f445112bbad991bd041.js.map