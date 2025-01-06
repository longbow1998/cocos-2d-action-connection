System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _getMergedStatus, _getStatusClassNames, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req0 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req1 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getMergedStatus = void 0;
        exports.getStatusClassNames = getStatusClassNames;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _type = require("./type");

        var InputStatuses = (0, _type.tuple)('warning', 'error', '');

        function getStatusClassNames(prefixCls, status, hasFeedback) {
          var _classNames;

          return (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-success"), status === 'success'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-warning"), status === 'warning'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-error"), status === 'error'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-validating"), status === 'validating'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-feedback"), hasFeedback), _classNames));
        }

        var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
          return customStatus || contextStatus;
        };

        exports.getMergedStatus = getMergedStatus; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getMergedStatus = module.exports.getMergedStatus;
        _getStatusClassNames = module.exports.getStatusClassNames;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/defineProperty': _req0,
        'classnames': _req1,
        './type': _req2
      }));
    }
  };
});
//# sourceMappingURL=62895ff8d7d77654daa15d79657b0c99bd7087eb.js.map