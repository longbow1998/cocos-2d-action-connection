System.register(["__unresolved_0", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_react2) {
      _req = _react2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = useRemovePasswordTimeout;

        var _react = require("react");

        function useRemovePasswordTimeout(inputRef, triggerOnMount) {
          var removePasswordTimeoutRef = (0, _react.useRef)([]);

          var removePasswordTimeout = function removePasswordTimeout() {
            removePasswordTimeoutRef.current.push(setTimeout(function () {
              var _a, _b, _c, _d;

              if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute('type')) === 'password' && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute('value'))) {
                (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute('value');
              }
            }));
          };

          (0, _react.useEffect)(function () {
            if (triggerOnMount) {
              removePasswordTimeout();
            }

            return function () {
              return removePasswordTimeoutRef.current.forEach(function (timer) {
                if (timer) {
                  clearTimeout(timer);
                }
              });
            };
          }, []);
          return removePasswordTimeout;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        'react': _req
      }));
    }
  };
});
//# sourceMappingURL=9a62c241a8e65b4ef9f7ec880c1e9a9f7624b8d0.js.map