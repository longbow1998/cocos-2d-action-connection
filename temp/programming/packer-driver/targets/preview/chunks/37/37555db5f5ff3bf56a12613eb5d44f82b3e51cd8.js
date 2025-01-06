System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _inline, _inlineMock, __cjsMetaURL;

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
        exports.inline = void 0;
        exports.inlineMock = inlineMock;
        var inline = false;
        exports.inline = inline;

        function inlineMock(nextInline) {
          if (typeof nextInline === 'boolean') {
            exports.inline = inline = nextInline;
          }

          return inline;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _inline = module.exports.inline;
        _inlineMock = module.exports.inlineMock;
      }, {});
    }
  };
});
//# sourceMappingURL=37555db5f5ff3bf56a12613eb5d44f82b3e51cd8.js.map