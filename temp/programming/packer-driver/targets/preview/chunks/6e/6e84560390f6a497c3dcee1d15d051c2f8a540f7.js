System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req3 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _Base = _interopRequireDefault(require("./Base"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Text = function Text(_a, ref) {
          var ellipsis = _a.ellipsis,
              restProps = __rest(_a, ["ellipsis"]);

          var mergedEllipsis = React.useMemo(function () {
            if (ellipsis && (0, _typeof2["default"])(ellipsis) === 'object') {
              return (0, _omit["default"])(ellipsis, ['expandable', 'rows']);
            }

            return ellipsis;
          }, [ellipsis]);
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])((0, _typeof2["default"])(ellipsis) !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'Typography.Text', '`ellipsis` do not support `expandable` or `rows` props.') : void 0;
          return /*#__PURE__*/React.createElement(_Base["default"], (0, _extends2["default"])({
            ref: ref
          }, restProps, {
            ellipsis: mergedEllipsis,
            component: "span"
          }));
        };

        var _default = /*#__PURE__*/React.forwardRef(Text);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        'rc-util/lib/omit': _req3,
        'react': _req4,
        '../_util/warning': _req5,
        './Base': _req6
      }));
    }
  };
});
//# sourceMappingURL=6e84560390f6a497c3dcee1d15d051c2f8a540f7.js.map