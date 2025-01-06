System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectWithoutProperties", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _warnItemProp, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req0 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req1 = _rcUtilLibWarning.__cjsMetaURL;
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
        exports.warnItemProp = warnItemProp;

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _excluded = ["item"];
        /**
         * `onClick` event return `info.item` which point to react node directly.
         * We should warning this since it will not work on FC.
         */

        function warnItemProp(_ref) {
          var item = _ref.item,
              restInfo = (0, _objectWithoutProperties2.default)(_ref, _excluded);
          Object.defineProperty(restInfo, 'item', {
            get: function get() {
              (0, _warning.default)(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
              return item;
            }
          });
          return restInfo;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _warnItemProp = module.exports.warnItemProp;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectWithoutProperties': _req0,
        'rc-util/lib/warning': _req1
      }));
    }
  };
});
//# sourceMappingURL=e6d95fa55987b470b53c1ad548f5ccaad6900f1b.js.map