System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _hasPrefixSuffix, __cjsMetaURL;

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
        exports.hasPrefixSuffix = hasPrefixSuffix; // eslint-disable-next-line import/prefer-default-export

        function hasPrefixSuffix(props) {
          return !!(props.prefix || props.suffix || props.allowClear);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _hasPrefixSuffix = module.exports.hasPrefixSuffix;
      }, {});
    }
  };
});
//# sourceMappingURL=1015d132bd7cdf230727a5350caba443eb0472ba.js.map