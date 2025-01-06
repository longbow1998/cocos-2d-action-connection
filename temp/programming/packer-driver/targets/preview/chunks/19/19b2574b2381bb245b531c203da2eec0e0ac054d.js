System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
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

        var _react = _interopRequireDefault(require("react"));

        var _default = function _default(callback, buffer) {
          var calledRef = _react.default.useRef(false);

          var timeoutRef = _react.default.useRef(null);

          function cancelTrigger() {
            window.clearTimeout(timeoutRef.current);
          }

          function trigger(force) {
            cancelTrigger();

            if (!calledRef.current || force === true) {
              if (callback(force) === false) {
                // Not delay since callback cancelled self
                return;
              }

              calledRef.current = true;
              timeoutRef.current = window.setTimeout(function () {
                calledRef.current = false;
              }, buffer);
            } else {
              timeoutRef.current = window.setTimeout(function () {
                calledRef.current = false;
                trigger();
              }, buffer);
            }
          }

          return [trigger, function () {
            calledRef.current = false;
            cancelTrigger();
          }];
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=19b2574b2381bb245b531c203da2eec0e0ac054d.js.map