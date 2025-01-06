System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req0 = _rcUtilLibWarning.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _default = function _default(file, acceptedFiles) {
          if (file && acceptedFiles) {
            var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            var fileName = file.name || '';
            var mimeType = file.type || '';
            var baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(function (type) {
              var validType = type.trim(); // This is something like */*,*  allow all files

              if (/^\*(\/\*)?$/.test(type)) {
                return true;
              } // like .jpg, .png


              if (validType.charAt(0) === '.') {
                var lowerFileName = fileName.toLowerCase();
                var lowerType = validType.toLowerCase();
                var affixList = [lowerType];

                if (lowerType === '.jpg' || lowerType === '.jpeg') {
                  affixList = ['.jpg', '.jpeg'];
                }

                return affixList.some(function (affix) {
                  return lowerFileName.endsWith(affix);
                });
              } // This is something like a image/* mime type


              if (/\/\*$/.test(validType)) {
                return baseMimeType === validType.replace(/\/.*$/, '');
              } // Full match


              if (mimeType === validType) {
                return true;
              } // Invalidate type should skip


              if (/^\w+$/.test(validType)) {
                (0, _warning.default)(false, "Upload takes an invalidate 'accept' type '".concat(validType, "'.Skip for check."));
                return true;
              }

              return false;
            });
          }

          return true;
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=e7a10ec112ddad2927e59bdd33a7d87cb81c3f99.js.map