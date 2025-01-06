System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/raf"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req0 = _rcUtilLibRaf.__cjsMetaURL;
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
        exports["default"] = wrapperRaf;

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var id = 0;
        var ids = {}; // Support call raf with delay specified frame

        function wrapperRaf(callback) {
          var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          var myId = id++;
          var restFrames = delayFrames;

          function internalCallback() {
            restFrames -= 1;

            if (restFrames <= 0) {
              callback();
              delete ids[myId];
            } else {
              ids[myId] = (0, _raf["default"])(internalCallback);
            }
          }

          ids[myId] = (0, _raf["default"])(internalCallback);
          return myId;
        }

        wrapperRaf.cancel = function cancel(pid) {
          if (pid === undefined) return;

          _raf["default"].cancel(ids[pid]);

          delete ids[pid];
        };

        wrapperRaf.ids = ids; // export this for test usage
        // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/raf': _req0
      }));
    }
  };
});
//# sourceMappingURL=1223f5b9fb82621a0cc82375cde7be9412ab209e.js.map