System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _Item, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Item = Item;

        var React = _interopRequireWildcard(require("react"));

        function Item(_ref) {
          var children = _ref.children,
              setRef = _ref.setRef;
          var refFunc = React.useCallback(function (node) {
            setRef(node);
          }, []);
          return /*#__PURE__*/React.cloneElement(children, {
            ref: refFunc
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Item = module.exports.Item;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=3cdf0194c48a7d14edfc9e5e09128e5b3acd2504.js.map