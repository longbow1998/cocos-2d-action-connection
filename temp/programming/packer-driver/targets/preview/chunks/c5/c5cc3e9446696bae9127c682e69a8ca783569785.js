System.register(["__unresolved_0", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var _react = require("react");

        var _default = function _default(isScrollAtTop, isScrollAtBottom) {
          // Do lock for a wheel when scrolling
          var lockRef = (0, _react.useRef)(false);
          var lockTimeoutRef = (0, _react.useRef)(null);

          function lockScroll() {
            clearTimeout(lockTimeoutRef.current);
            lockRef.current = true;
            lockTimeoutRef.current = setTimeout(function () {
              lockRef.current = false;
            }, 50);
          } // Pass to ref since global add is in closure


          var scrollPingRef = (0, _react.useRef)({
            top: isScrollAtTop,
            bottom: isScrollAtBottom
          });
          scrollPingRef.current.top = isScrollAtTop;
          scrollPingRef.current.bottom = isScrollAtBottom;
          return function (deltaY) {
            var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var originScroll = // Pass origin wheel when on the top
            deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
            deltaY > 0 && scrollPingRef.current.bottom;

            if (smoothOffset && originScroll) {
              // No need lock anymore when it's smooth offset from touchMove interval
              clearTimeout(lockTimeoutRef.current);
              lockRef.current = false;
            } else if (!originScroll || lockRef.current) {
              lockScroll();
            }

            return !lockRef.current && originScroll;
          };
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        'react': _req
      }));
    }
  };
});
//# sourceMappingURL=c5cc3e9446696bae9127c682e69a8ca783569785.js.map