System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var arrayWithHoles = require("./arrayWithHoles.js");

        var iterableToArrayLimit = require("./iterableToArrayLimit.js");

        var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

        var nonIterableRest = require("./nonIterableRest.js");

        function _slicedToArray(arr, i) {
          return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
        }

        module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './arrayWithHoles.js': _req,
        './iterableToArrayLimit.js': _req0,
        './unsupportedIterableToArray.js': _req1,
        './nonIterableRest.js': _req2
      }));
    }
  };
});
//# sourceMappingURL=b4d0eb79ad967bc3db37edd76ba8f43c6f24a5b4.js.map