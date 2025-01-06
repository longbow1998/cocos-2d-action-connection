System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, _ANT_MARK, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = exports.ANT_MARK = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _locale = require("../modal/locale");

        var _context = _interopRequireDefault(require("./context"));

        var ANT_MARK = 'internalMark';
        exports.ANT_MARK = ANT_MARK;

        var LocaleProvider = function LocaleProvider(props) {
          var _props$locale = props.locale,
              locale = _props$locale === void 0 ? {} : _props$locale,
              children = props.children,
              _ANT_MARK__ = props._ANT_MARK__;

          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(_ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale') : void 0;
          }

          React.useEffect(function () {
            (0, _locale.changeConfirmLocale)(locale && locale.Modal);
            return function () {
              (0, _locale.changeConfirmLocale)();
            };
          }, [locale]);
          var getMemoizedContextValue = React.useMemo(function () {
            return (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
              exist: true
            });
          }, [locale]);
          return /*#__PURE__*/React.createElement(_context["default"].Provider, {
            value: getMemoizedContextValue
          }, children);
        };

        var _default = LocaleProvider;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _ANT_MARK = module.exports.ANT_MARK;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../_util/warning': _req3,
        '../modal/locale': _req4,
        './context': _req5
      }));
    }
  };
});
//# sourceMappingURL=9223d7c24c90fb16da49ad86e615736ee6d03c5e.js.map