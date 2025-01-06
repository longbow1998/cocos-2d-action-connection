System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var getPrototypeOf = require("./getPrototypeOf.js");

        var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");

        var possibleConstructorReturn = require("./possibleConstructorReturn.js");

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = getPrototypeOf(Derived),
                result;

            if (hasNativeReflectConstruct) {
              var NewTarget = getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }

            return possibleConstructorReturn(this, result);
          };
        }

        module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './getPrototypeOf.js': _req,
        './isNativeReflectConstruct.js': _req0,
        './possibleConstructorReturn.js': _req1
      }));
    }
  };
});
//# sourceMappingURL=da17c578cd13a43239dd0d56a728f12df91a39da.js.map