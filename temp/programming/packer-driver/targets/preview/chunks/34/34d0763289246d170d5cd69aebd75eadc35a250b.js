System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        'use strict';

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _SearchOutlined = _interopRequireDefault(require('./lib/icons/SearchOutlined'));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            'default': obj
          };
        }

        var _default = _SearchOutlined;
        exports.default = _default;
        module.exports = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        './lib/icons/SearchOutlined': _req
      }));
    }
  };
});
//# sourceMappingURL=34d0763289246d170d5cd69aebd75eadc35a250b.js.map