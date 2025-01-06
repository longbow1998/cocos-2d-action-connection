System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _useLocaleReceiver, _default0, __cjsMetaURL;

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
        exports.useLocaleReceiver = exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _context = _interopRequireDefault(require("./context"));

        var _default2 = _interopRequireDefault(require("./default"));

        var LocaleReceiver = function LocaleReceiver(props) {
          var _props$componentName = props.componentName,
              componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
              defaultLocale = props.defaultLocale,
              children = props.children;
          var antLocale = React.useContext(_context["default"]);
          var getLocale = React.useMemo(function () {
            var _a;

            var locale = defaultLocale || _default2["default"][componentName];
            var localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
            return (0, _extends2["default"])((0, _extends2["default"])({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
          }, [componentName, defaultLocale, antLocale]);
          var getLocaleCode = React.useMemo(function () {
            var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

            if (antLocale && antLocale.exist && !localeCode) {
              return _default2["default"].locale;
            }

            return localeCode;
          }, [antLocale]);
          return children(getLocale, getLocaleCode, antLocale);
        };

        var _default = LocaleReceiver;
        exports["default"] = _default;

        var useLocaleReceiver = function useLocaleReceiver(componentName, defaultLocale) {
          var antLocale = React.useContext(_context["default"]);
          var getLocale = React.useMemo(function () {
            var _a;

            var locale = defaultLocale || _default2["default"][componentName];
            var localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
            return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
          }, [componentName, defaultLocale, antLocale]);
          return [getLocale];
        };

        exports.useLocaleReceiver = useLocaleReceiver; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _useLocaleReceiver = module.exports.useLocaleReceiver;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        './context': _req3,
        './default': _req4
      }));
    }
  };
});
//# sourceMappingURL=f9797006df89d5a7f8f31a19c49f812d05afd13e.js.map