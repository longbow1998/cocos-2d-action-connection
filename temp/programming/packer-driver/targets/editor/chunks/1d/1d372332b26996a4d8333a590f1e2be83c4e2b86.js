System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "rc-util/lib/warning", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req1 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _valueUtil = require("./valueUtil");

        function warningProps(props) {
          var searchPlaceholder = props.searchPlaceholder,
              treeCheckStrictly = props.treeCheckStrictly,
              treeCheckable = props.treeCheckable,
              labelInValue = props.labelInValue,
              value = props.value,
              multiple = props.multiple;
          (0, _warning.default)(!searchPlaceholder, '`searchPlaceholder` has been removed.');

          if (treeCheckStrictly && labelInValue === false) {
            (0, _warning.default)(false, '`treeCheckStrictly` will force set `labelInValue` to `true`.');
          }

          if (labelInValue || treeCheckStrictly) {
            (0, _warning.default)((0, _valueUtil.toArray)(value).every(function (val) {
              return val && (0, _typeof2.default)(val) === 'object' && 'value' in val;
            }), 'Invalid prop `value` supplied to `TreeSelect`. You should use { label: string, value: string | number } or [{ label: string, value: string | number }] instead.');
          }

          if (treeCheckStrictly || multiple || treeCheckable) {
            (0, _warning.default)(!value || Array.isArray(value), '`value` should be an array when `TreeSelect` is checkable or multiple.');
          } else {
            (0, _warning.default)(!Array.isArray(value), '`value` should not be array when `TreeSelect` is single mode.');
          }
        }

        var _default = warningProps;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'rc-util/lib/warning': _req1,
        './valueUtil': _req2
      }));
    }
  };
});
//# sourceMappingURL=1d372332b26996a4d8333a590f1e2be83c4e2b86.js.map