System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        'use strict';

        if (process.env.NODE_ENV === 'production') {
          module.exports = require('./cjs/react-is.production.min.js');
        } else {
          module.exports = require('./cjs/react-is.development.js');
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './cjs/react-is.production.min.js': _req,
        './cjs/react-is.development.js': _req0
      }));
    }
  };
});
//# sourceMappingURL=8f2e9140ba054eeb1059db156ee0966e5f6a862f.js.map