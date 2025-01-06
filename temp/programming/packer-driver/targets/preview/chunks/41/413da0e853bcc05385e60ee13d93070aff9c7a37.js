System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "rc-util/lib/KeyCode"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_rcUtilLibKeyCode) {
      _req2 = _rcUtilLibKeyCode.__cjsMetaURL;
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

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var onKeyDown = function onKeyDown(event) {
          var keyCode = event.keyCode;

          if (keyCode === _KeyCode["default"].ENTER) {
            event.stopPropagation();
          }
        };

        var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(props) {
          return /*#__PURE__*/React.createElement("div", {
            className: props.className,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onKeyDown: onKeyDown
          }, props.children);
        };

        var _default = FilterDropdownMenuWrapper;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        'rc-util/lib/KeyCode': _req2
      }));
    }
  };
});
//# sourceMappingURL=413da0e853bcc05385e60ee13d93070aff9c7a37.js.map