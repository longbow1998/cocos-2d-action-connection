System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, _warningNullOptions, __cjsMetaURL;

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
        exports.warningNullOptions = warningNullOptions;

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        function warningProps(props) {
          var onPopupVisibleChange = props.onPopupVisibleChange,
              popupVisible = props.popupVisible,
              popupClassName = props.popupClassName,
              popupPlacement = props.popupPlacement;
          (0, _warning.default)(!onPopupVisibleChange, '`onPopupVisibleChange` is deprecated. Please use `onDropdownVisibleChange` instead.');
          (0, _warning.default)(popupVisible === undefined, '`popupVisible` is deprecated. Please use `open` instead.');
          (0, _warning.default)(popupClassName === undefined, '`popupClassName` is deprecated. Please use `dropdownClassName` instead.');
          (0, _warning.default)(popupPlacement === undefined, '`popupPlacement` is deprecated. Please use `placement` instead.');
        } // value in Cascader options should not be null


        function warningNullOptions(options, fieldNames) {
          if (options) {
            var recursiveOptions = function recursiveOptions(optionsList) {
              for (var i = 0; i < optionsList.length; i++) {
                var option = optionsList[i];

                if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
                  (0, _warning.default)(false, '`value` in Cascader options should not be `null`.');
                  return true;
                }

                if (Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children]) && recursiveOptions(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.children])) {
                  return true;
                }
              }
            };

            recursiveOptions(options);
          }
        }

        var _default = warningProps;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _warningNullOptions = module.exports.warningNullOptions;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/warning': _req0
      }));
    }
  };
});
//# sourceMappingURL=606ef6dd303c7c30be42f2a3e3be69bdc06323fb.js.map