System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var freeGlobal = require('./_freeGlobal');
        /** Detect free variable `exports`. */


        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Detect free variable `process` from Node.js. */

        var freeProcess = moduleExports && freeGlobal.process;
        /** Used to access faster Node.js helpers. */

        var nodeUtil = function () {
          try {
            // Use `util.types` for Node.js 10+.
            var types = freeModule && freeModule.require && freeModule.require('util').types;

            if (types) {
              return types;
            } // Legacy `process.binding('util')` for Node.js < 10.


            return freeProcess && freeProcess.binding && freeProcess.binding('util');
          } catch (e) {}
        }();

        module.exports = nodeUtil; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_freeGlobal': _req
      }));
    }
  };
});
//# sourceMappingURL=47a38fb73d0ab73809f96690e42688a820b69279.js.map