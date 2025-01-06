System.register(["__unresolved_0", "react", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_react2) {
      _req = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = useFormInstance;

        var _react = require("react");

        var _context = require("../context");

        function useFormInstance() {
          var _useContext = (0, _react.useContext)(_context.FormContext),
              form = _useContext.form;

          return form;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        'react': _req,
        '../context': _req0
      }));
    }
  };
});
//# sourceMappingURL=ab2046948f02dfea8d1ed43d6029076c62b3a303.js.map