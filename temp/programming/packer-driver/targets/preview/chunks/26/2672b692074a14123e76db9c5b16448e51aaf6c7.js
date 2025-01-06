System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-util/lib/KeyCode", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req2 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        /**
         * Wrap of sub component which need use as Button capacity (like Icon component).
         *
         * This helps accessibility reader to tread as a interactive button to operation.
         */


        var inlineStyle = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block'
        };
        var TransButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var onKeyDown = function onKeyDown(event) {
            var keyCode = event.keyCode;

            if (keyCode === _KeyCode["default"].ENTER) {
              event.preventDefault();
            }
          };

          var onKeyUp = function onKeyUp(event) {
            var keyCode = event.keyCode;
            var onClick = props.onClick;

            if (keyCode === _KeyCode["default"].ENTER && onClick) {
              onClick();
            }
          };

          var style = props.style,
              noStyle = props.noStyle,
              disabled = props.disabled,
              restProps = __rest(props, ["style", "noStyle", "disabled"]);

          var mergedStyle = {};

          if (!noStyle) {
            mergedStyle = (0, _extends2["default"])({}, inlineStyle);
          }

          if (disabled) {
            mergedStyle.pointerEvents = 'none';
          }

          mergedStyle = (0, _extends2["default"])((0, _extends2["default"])({}, mergedStyle), style);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
            role: "button",
            tabIndex: 0,
            ref: ref
          }, restProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            style: mergedStyle
          }));
        });
        var _default = TransButton;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'rc-util/lib/KeyCode': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=2672b692074a14123e76db9c5b16448e51aaf6c7.js.map