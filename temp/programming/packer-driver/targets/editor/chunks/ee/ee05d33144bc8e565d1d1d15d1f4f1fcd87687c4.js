System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getMotion, __cjsMetaURL;

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
        exports.getMotion = getMotion;

        function getMotion(_ref) {
          var prefixCls = _ref.prefixCls,
              motion = _ref.motion,
              animation = _ref.animation,
              transitionName = _ref.transitionName;

          if (motion) {
            return motion;
          }

          if (animation) {
            return {
              motionName: "".concat(prefixCls, "-").concat(animation)
            };
          }

          if (transitionName) {
            return {
              motionName: transitionName
            };
          }

          return null;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getMotion = module.exports.getMotion;
      }, {});
    }
  };
});
//# sourceMappingURL=ee05d33144bc8e565d1d1d15d1f4f1fcd87687c4.js.map