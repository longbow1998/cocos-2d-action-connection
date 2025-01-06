System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req4 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req5 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req6 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req7 = _unresolved_8.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _context = require("./context");

        var _ErrorList = _interopRequireDefault(require("./ErrorList"));

        var _Form = _interopRequireWildcard(require("./Form"));

        var _FormItem = _interopRequireDefault(require("./FormItem"));

        var _FormList = _interopRequireDefault(require("./FormList"));

        var _useFormInstance = _interopRequireDefault(require("./hooks/useFormInstance"));

        var Form = _Form["default"];
        Form.Item = _FormItem["default"];
        Form.List = _FormList["default"];
        Form.ErrorList = _ErrorList["default"];
        Form.useForm = _Form.useForm;
        Form.useFormInstance = _useFormInstance["default"];
        Form.useWatch = _Form.useWatch;
        Form.Provider = _context.FormProvider;

        Form.create = function () {
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Form', 'antd v4 removed `Form.create`. Please remove or use `@ant-design/compatible` instead.') : void 0;
        };

        var _default = Form;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '../_util/warning': _req1,
        './context': _req2,
        './ErrorList': _req3,
        './Form': _req4,
        './FormItem': _req5,
        './FormList': _req6,
        './hooks/useFormInstance': _req7
      }));
    }
  };
});
//# sourceMappingURL=b9c78db7e79be7339ee423473c8df9fcbf3b58bb.js.map