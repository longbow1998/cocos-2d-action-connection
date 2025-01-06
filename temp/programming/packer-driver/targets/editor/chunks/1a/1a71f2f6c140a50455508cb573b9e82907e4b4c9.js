System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", ".", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_2) {
      _req2 = _2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _ = require(".");

        var _empty = _interopRequireDefault(require("../empty"));

        var defaultRenderEmpty = function defaultRenderEmpty(componentName) {
          return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
            var getPrefixCls = _ref.getPrefixCls;
            var prefix = getPrefixCls('empty');

            switch (componentName) {
              case 'Table':
              case 'List':
                return /*#__PURE__*/React.createElement(_empty["default"], {
                  image: _empty["default"].PRESENTED_IMAGE_SIMPLE
                });

              case 'Select':
              case 'TreeSelect':
              case 'Cascader':
              case 'Transfer':
              case 'Mentions':
                return /*#__PURE__*/React.createElement(_empty["default"], {
                  image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
                  className: "".concat(prefix, "-small")
                });

              /* istanbul ignore next */

              default:
                // Should never hit if we take all the component into consider.
                return /*#__PURE__*/React.createElement(_empty["default"], null);
            }
          });
        };

        var _default = defaultRenderEmpty;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        '.': _req2,
        '../empty': _req3
      }));
    }
  };
});
//# sourceMappingURL=1a71f2f6c140a50455508cb573b9e82907e4b4c9.js.map