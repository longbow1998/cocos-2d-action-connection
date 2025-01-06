System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _cloneElement, _isFragment, _isValidElement, _replaceElement, __cjsMetaURL;

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

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.cloneElement = cloneElement;
        exports.isFragment = isFragment;
        exports.isValidElement = void 0;
        exports.replaceElement = replaceElement;

        var React = _interopRequireWildcard(require("react"));

        var isValidElement = React.isValidElement;
        exports.isValidElement = isValidElement;

        function isFragment(child) {
          return child && isValidElement(child) && child.type === React.Fragment;
        }

        function replaceElement(element, replacement, props) {
          if (!isValidElement(element)) {
            return replacement;
          }

          return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
        }

        function cloneElement(element, props) {
          return replaceElement(element, element, props);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _cloneElement = module.exports.cloneElement;
        _isFragment = module.exports.isFragment;
        _isValidElement = module.exports.isValidElement;
        _replaceElement = module.exports.replaceElement;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=f93cd5a7aae9b16f9ef83f9092c72943e9efdd1e.js.map