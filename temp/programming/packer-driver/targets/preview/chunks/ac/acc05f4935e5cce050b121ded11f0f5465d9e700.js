System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req4 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _confirm = _interopRequireWildcard(require("./confirm"));

        var _destroyFns = _interopRequireDefault(require("./destroyFns"));

        var _Modal = _interopRequireDefault(require("./Modal"));

        var _useModal = _interopRequireDefault(require("./useModal"));

        function modalWarn(props) {
          return (0, _confirm["default"])((0, _confirm.withWarn)(props));
        }

        var Modal = _Modal["default"];
        Modal.useModal = _useModal["default"];

        Modal.info = function infoFn(props) {
          return (0, _confirm["default"])((0, _confirm.withInfo)(props));
        };

        Modal.success = function successFn(props) {
          return (0, _confirm["default"])((0, _confirm.withSuccess)(props));
        };

        Modal.error = function errorFn(props) {
          return (0, _confirm["default"])((0, _confirm.withError)(props));
        };

        Modal.warning = modalWarn;
        Modal.warn = modalWarn;

        Modal.confirm = function confirmFn(props) {
          return (0, _confirm["default"])((0, _confirm.withConfirm)(props));
        };

        Modal.destroyAll = function destroyAllFn() {
          while (_destroyFns["default"].length) {
            var close = _destroyFns["default"].pop();

            if (close) {
              close();
            }
          }
        };

        Modal.config = _confirm.modalGlobalConfig;
        var _default = Modal;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        './confirm': _req1,
        './destroyFns': _req2,
        './Modal': _req3,
        './useModal': _req4
      }));
    }
  };
});
//# sourceMappingURL=acc05f4935e5cce050b121ded11f0f5465d9e700.js.map