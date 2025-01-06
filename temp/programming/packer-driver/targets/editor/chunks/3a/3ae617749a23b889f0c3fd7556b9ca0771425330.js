System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _react = require("react");

        var _context = require("../context");

        var _warning = _interopRequireDefault(require("../../_util/warning"));

        var useFormItemStatus = function useFormItemStatus() {
          var _useContext = (0, _react.useContext)(_context.FormItemInputContext),
              status = _useContext.status;

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(status !== undefined, 'Form.Item', "Form.Item.useStatus should be used under Form.Item component. For more information: ".concat(window.location.protocol, "//").concat(window.location.host, "/components/form-cn/#Form.Item.useStatus")) : void 0;
          return {
            status: status
          };
        };

        var _default = useFormItemStatus;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        '../context': _req1,
        '../../_util/warning': _req2
      }));
    }
  };
});
//# sourceMappingURL=3ae617749a23b889f0c3fd7556b9ca0771425330.js.map