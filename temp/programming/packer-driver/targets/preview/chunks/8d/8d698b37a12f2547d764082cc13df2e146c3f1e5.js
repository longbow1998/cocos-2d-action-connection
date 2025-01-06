System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _call, _default0, _note, _noteOnce, _resetWarned, _warning, _warningOnce, __cjsMetaURL;

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
        exports.call = call;
        exports.default = void 0;
        exports.note = note;
        exports.noteOnce = noteOnce;
        exports.resetWarned = resetWarned;
        exports.warning = warning;
        exports.warningOnce = warningOnce;
        /* eslint-disable no-console */

        var warned = {};

        function warning(valid, message) {
          // Support uglify
          if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
            console.error("Warning: ".concat(message));
          }
        }

        function note(valid, message) {
          // Support uglify
          if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
            console.warn("Note: ".concat(message));
          }
        }

        function resetWarned() {
          warned = {};
        }

        function call(method, valid, message) {
          if (!valid && !warned[message]) {
            method(false, message);
            warned[message] = true;
          }
        }

        function warningOnce(valid, message) {
          call(warning, valid, message);
        }

        function noteOnce(valid, message) {
          call(note, valid, message);
        }

        var _default = warningOnce;
        /* eslint-enable */

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _call = module.exports.call;
        _default0 = module.exports.default;
        _note = module.exports.note;
        _noteOnce = module.exports.noteOnce;
        _resetWarned = module.exports.resetWarned;
        _warning = module.exports.warning;
        _warningOnce = module.exports.warningOnce;
      }, {});
    }
  };
});
//# sourceMappingURL=8d698b37a12f2547d764082cc13df2e146c3f1e5.js.map