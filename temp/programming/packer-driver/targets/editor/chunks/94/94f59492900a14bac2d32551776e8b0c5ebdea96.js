System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "rc-util/lib/raf"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req1 = _rcUtilLibRaf.__cjsMetaURL;
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
        exports.default = void 0;

        var _react = require("react");

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
        /**
         * Always trigger latest once when call multiple time
         */


        var _default = function _default() {
          var idRef = (0, _react.useRef)(0);

          var cleanUp = function cleanUp() {
            _raf.default.cancel(idRef.current);
          };

          (0, _react.useEffect)(function () {
            return cleanUp;
          }, []);
          return function (callback) {
            cleanUp();
            idRef.current = (0, _raf.default)(function () {
              callback();
            });
          };
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'rc-util/lib/raf': _req1
      }));
    }
  };
});
//# sourceMappingURL=94f59492900a14bac2d32551776e8b0c5ebdea96.js.map