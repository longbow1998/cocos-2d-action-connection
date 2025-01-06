System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@ant-design/icons/lib/components/Context", "rc-field-form", "rc-util/lib/hooks/useMemo", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _ConfigConsumer, _ConfigContext, _globalConfig, _defaultPrefixCls, _defaultIconPrefixCls, _default0, _configConsumerProps, __cjsMetaURL;

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
    }, function (_antDesignIconsLibComponentsContext) {
      _req2 = _antDesignIconsLibComponentsContext.__cjsMetaURL;
    }, function (_rcFieldForm2) {
      _req3 = _rcFieldForm2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMemo) {
      _req4 = _rcUtilLibHooksUseMemo.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req10 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req11 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req12 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req13 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req14 = _unresolved_10.__cjsMetaURL;
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
        Object.defineProperty(exports, "ConfigConsumer", {
          enumerable: true,
          get: function get() {
            return _context.ConfigConsumer;
          }
        });
        Object.defineProperty(exports, "ConfigContext", {
          enumerable: true,
          get: function get() {
            return _context.ConfigContext;
          }
        });
        exports.globalConfig = exports.defaultPrefixCls = exports.defaultIconPrefixCls = exports["default"] = exports.configConsumerProps = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _Context = _interopRequireDefault(require("@ant-design/icons/lib/components/Context"));

        var _rcFieldForm = require("rc-field-form");

        var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

        var React = _interopRequireWildcard(require("react"));

        var _localeProvider = _interopRequireWildcard(require("../locale-provider"));

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _default2 = _interopRequireDefault(require("../locale/default"));

        var _message = _interopRequireDefault(require("../message"));

        var _notification = _interopRequireDefault(require("../notification"));

        var _context = require("./context");

        var _cssVariables = require("./cssVariables");

        var _DisabledContext = require("./DisabledContext");

        var _SizeContext = _interopRequireWildcard(require("./SizeContext"));

        var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader']; // These props is used by `useContext` directly in sub component

        exports.configConsumerProps = configConsumerProps;
        var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form'];
        var defaultPrefixCls = 'ant';
        exports.defaultPrefixCls = defaultPrefixCls;
        var defaultIconPrefixCls = 'anticon';
        exports.defaultIconPrefixCls = defaultIconPrefixCls;
        var globalPrefixCls;
        var globalIconPrefixCls;

        function getGlobalPrefixCls() {
          return globalPrefixCls || defaultPrefixCls;
        }

        function getGlobalIconPrefixCls() {
          return globalIconPrefixCls || defaultIconPrefixCls;
        }

        var setGlobalConfig = function setGlobalConfig(_ref) {
          var prefixCls = _ref.prefixCls,
              iconPrefixCls = _ref.iconPrefixCls,
              theme = _ref.theme;

          if (prefixCls !== undefined) {
            globalPrefixCls = prefixCls;
          }

          if (iconPrefixCls !== undefined) {
            globalIconPrefixCls = iconPrefixCls;
          }

          if (theme) {
            (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
          }
        };

        var globalConfig = function globalConfig() {
          return {
            getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
              if (customizePrefixCls) return customizePrefixCls;
              return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
            },
            getIconPrefixCls: getGlobalIconPrefixCls,
            getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
              // Customize rootPrefixCls is first priority
              if (rootPrefixCls) {
                return rootPrefixCls;
              } // If Global prefixCls provided, use this


              if (globalPrefixCls) {
                return globalPrefixCls;
              } // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls


              if (customizePrefixCls && customizePrefixCls.includes('-')) {
                return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
              } // Fallback to default prefixCls


              return getGlobalPrefixCls();
            }
          };
        };

        exports.globalConfig = globalConfig;

        var ProviderChildren = function ProviderChildren(props) {
          var _a, _b;

          var children = props.children,
              csp = props.csp,
              autoInsertSpaceInButton = props.autoInsertSpaceInButton,
              form = props.form,
              locale = props.locale,
              componentSize = props.componentSize,
              direction = props.direction,
              space = props.space,
              virtual = props.virtual,
              dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
              legacyLocale = props.legacyLocale,
              parentContext = props.parentContext,
              iconPrefixCls = props.iconPrefixCls,
              componentDisabled = props.componentDisabled;
          var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
            var prefixCls = props.prefixCls;
            if (customizePrefixCls) return customizePrefixCls;
            var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
            return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
          }, [parentContext.getPrefixCls, props.prefixCls]);
          var config = (0, _extends2["default"])((0, _extends2["default"])({}, parentContext), {
            csp: csp,
            autoInsertSpaceInButton: autoInsertSpaceInButton,
            locale: locale || legacyLocale,
            direction: direction,
            space: space,
            virtual: virtual,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth,
            getPrefixCls: getPrefixCls
          }); // Pass the props used by `useContext` directly with child component.
          // These props should merged into `config`.

          PASSED_PROPS.forEach(function (propName) {
            var propValue = props[propName];

            if (propValue) {
              config[propName] = propValue;
            }
          }); // https://github.com/ant-design/ant-design/issues/27617

          var memoedConfig = (0, _useMemo["default"])(function () {
            return config;
          }, config, function (prevConfig, currentConfig) {
            var prevKeys = Object.keys(prevConfig);
            var currentKeys = Object.keys(currentConfig);
            return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
              return prevConfig[key] !== currentConfig[key];
            });
          });
          var memoIconContextValue = React.useMemo(function () {
            return {
              prefixCls: iconPrefixCls,
              csp: csp
            };
          }, [iconPrefixCls, csp]);
          var childNode = children; // Additional Form provider

          var validateMessages = {};

          if (locale) {
            validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = _default2["default"].Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
          }

          if (form && form.validateMessages) {
            validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
          }

          if (Object.keys(validateMessages).length > 0) {
            childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
              validateMessages: validateMessages
            }, children);
          }

          if (locale) {
            childNode = /*#__PURE__*/React.createElement(_localeProvider["default"], {
              locale: locale,
              _ANT_MARK__: _localeProvider.ANT_MARK
            }, childNode);
          }

          if (iconPrefixCls || csp) {
            childNode = /*#__PURE__*/React.createElement(_Context["default"].Provider, {
              value: memoIconContextValue
            }, childNode);
          }

          if (componentSize) {
            childNode = /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
              size: componentSize
            }, childNode);
          }

          if (componentDisabled !== undefined) {
            childNode = /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
              disabled: componentDisabled
            }, childNode);
          }

          return /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
            value: memoedConfig
          }, childNode);
        };

        var ConfigProvider = function ConfigProvider(props) {
          React.useEffect(function () {
            if (props.direction) {
              _message["default"].config({
                rtl: props.direction === 'rtl'
              });

              _notification["default"].config({
                rtl: props.direction === 'rtl'
              });
            }
          }, [props.direction]);
          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
            return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
              return /*#__PURE__*/React.createElement(ProviderChildren, (0, _extends2["default"])({
                parentContext: context,
                legacyLocale: legacyLocale
              }, props));
            });
          });
        };
        /** @private internal Usage. do not use in your production */


        ConfigProvider.ConfigContext = _context.ConfigContext;
        ConfigProvider.SizeContext = _SizeContext["default"];
        ConfigProvider.config = setGlobalConfig;
        var _default = ConfigProvider;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _ConfigConsumer = module.exports.ConfigConsumer;
        _ConfigContext = module.exports.ConfigContext;
        _globalConfig = module.exports.globalConfig;
        _defaultPrefixCls = module.exports.defaultPrefixCls;
        _defaultIconPrefixCls = module.exports.defaultIconPrefixCls;
        _default0 = module.exports.default;
        _configConsumerProps = module.exports.configConsumerProps;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@ant-design/icons/lib/components/Context': _req2,
        'rc-field-form': _req3,
        'rc-util/lib/hooks/useMemo': _req4,
        'react': _req5,
        '../locale-provider': _req6,
        '../locale-provider/LocaleReceiver': _req7,
        '../locale/default': _req8,
        '../message': _req9,
        '../notification': _req10,
        './context': _req11,
        './cssVariables': _req12,
        './DisabledContext': _req13,
        './SizeContext': _req14
      }));
    }
  };
});
//# sourceMappingURL=61b6915df8a13b6808a7ca18c5c5cac30eeab749.js.map