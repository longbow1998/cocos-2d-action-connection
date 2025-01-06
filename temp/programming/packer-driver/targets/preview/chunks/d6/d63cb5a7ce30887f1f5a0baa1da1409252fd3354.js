System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _ConfigContext, _ConfigConsumer, _withConfigConsumer, __cjsMetaURL;

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
        exports.ConfigContext = exports.ConfigConsumer = void 0;
        exports.withConfigConsumer = withConfigConsumer;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
          if (customizePrefixCls) return customizePrefixCls;
          return suffixCls ? "ant-".concat(suffixCls) : 'ant';
        }; // zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.


        var ConfigContext = /*#__PURE__*/React.createContext({
          // We provide a default function for Context without provider
          getPrefixCls: defaultGetPrefixCls
        });
        exports.ConfigContext = ConfigContext;
        var ConfigConsumer = ConfigContext.Consumer;
        /** @deprecated Use hooks instead. This is a legacy function */

        exports.ConfigConsumer = ConfigConsumer;

        function withConfigConsumer(config) {
          return function withConfigConsumerFunc(Component) {
            // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
            var SFC = function SFC(props) {
              return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
                var basicPrefixCls = config.prefixCls;
                var getPrefixCls = configProps.getPrefixCls;
                var customizePrefixCls = props.prefixCls;
                var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
                return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
                  prefixCls: prefixCls
                }));
              });
            };

            var cons = Component.constructor;
            var name = cons && cons.displayName || Component.name || 'Component';

            if (process.env.NODE_ENV !== 'production') {
              SFC.displayName = "withConfigConsumer(".concat(name, ")");
            }

            return SFC;
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _ConfigContext = module.exports.ConfigContext;
        _ConfigConsumer = module.exports.ConfigConsumer;
        _withConfigConsumer = module.exports.withConfigConsumer;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=d63cb5a7ce30887f1f5a0baa1da1409252fd3354.js.map