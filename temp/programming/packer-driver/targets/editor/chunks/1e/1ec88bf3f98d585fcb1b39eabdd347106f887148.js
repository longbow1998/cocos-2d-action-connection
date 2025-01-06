System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var raf = function raf(callback) {
          return +setTimeout(callback, 16);
        };

        var caf = function caf(num) {
          return clearTimeout(num);
        };

        if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
          raf = function raf(callback) {
            return window.requestAnimationFrame(callback);
          };

          caf = function caf(handle) {
            return window.cancelAnimationFrame(handle);
          };
        }

        var rafUUID = 0;
        var rafIds = new Map();

        function cleanup(id) {
          rafIds.delete(id);
        }

        var wrapperRaf = function wrapperRaf(callback) {
          var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          rafUUID += 1;
          var id = rafUUID;

          function callRef(leftTimes) {
            if (leftTimes === 0) {
              // Clean up
              cleanup(id); // Trigger

              callback();
            } else {
              // Next raf
              var realId = raf(function () {
                callRef(leftTimes - 1);
              }); // Bind real raf id

              rafIds.set(id, realId);
            }
          }

          callRef(times);
          return id;
        };

        wrapperRaf.cancel = function (id) {
          var realId = rafIds.get(id);
          cleanup(realId);
          return caf(realId);
        };

        var _default = wrapperRaf;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=1ec88bf3f98d585fcb1b39eabdd347106f887148.js.map