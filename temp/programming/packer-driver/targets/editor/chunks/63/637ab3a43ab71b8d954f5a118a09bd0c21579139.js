System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _genDataNodeKey, _stringify, __cjsMetaURL;

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
        exports.genDataNodeKey = genDataNodeKey;
        exports.stringify = stringify;
        /**
         * We trade Map as deps which may change with same value but different ref object.
         * We should make it as hash for deps
         * */

        function stringify(obj) {
          var tgt;

          if (obj instanceof Map) {
            tgt = {};
            obj.forEach(function (v, k) {
              tgt[k] = v;
            });
          } else {
            tgt = obj;
          }

          return JSON.stringify(tgt);
        }

        var RC_TABS_DOUBLE_QUOTE = 'TABS_DQ';

        function genDataNodeKey(key) {
          return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _genDataNodeKey = module.exports.genDataNodeKey;
        _stringify = module.exports.stringify;
      }, {});
    }
  };
});
//# sourceMappingURL=637ab3a43ab71b8d954f5a118a09bd0c21579139.js.map