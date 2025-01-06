System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-field-form", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
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
    }, function (_rcFieldForm2) {
      _req2 = _rcFieldForm2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req6 = _unresolved_4.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _rcFieldForm = require("rc-field-form");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _context = require("./context");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var FormList = function FormList(_a) {
          var customizePrefixCls = _a.prefixCls,
              children = _a.children,
              props = __rest(_a, ["prefixCls", "children"]);

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!!props.name, 'Form.List', 'Miss `name` prop.') : void 0;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('form', customizePrefixCls);
          var contextValue = React.useMemo(function () {
            return {
              prefixCls: prefixCls,
              status: 'error'
            };
          }, [prefixCls]);
          return /*#__PURE__*/React.createElement(_rcFieldForm.List, (0, _extends2["default"])({}, props), function (fields, operation, meta) {
            return /*#__PURE__*/React.createElement(_context.FormItemPrefixContext.Provider, {
              value: contextValue
            }, children(fields.map(function (field) {
              return (0, _extends2["default"])((0, _extends2["default"])({}, field), {
                fieldKey: field.key
              });
            }), operation, {
              errors: meta.errors,
              warnings: meta.warnings
            }));
          });
        };

        var _default = FormList;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'rc-field-form': _req2,
        'react': _req3,
        '../config-provider': _req4,
        '../_util/warning': _req5,
        './context': _req6
      }));
    }
  };
});
//# sourceMappingURL=376306d56c929dd9cf5c84e0d215c32b32f0a6ab.js.map