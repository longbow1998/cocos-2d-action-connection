System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/extends", "@ant-design/icons/CheckCircleOutlined", "@ant-design/icons/CloseCircleOutlined", "@ant-design/icons/ExclamationCircleOutlined", "@ant-design/icons/InfoCircleOutlined", "rc-util/lib/React/render", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default, _modalGlobalConfig, _withConfirm, _withError, _withInfo, _withSuccess, _withWarn, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_antDesignIconsCheckCircleOutlined) {
      _req3 = _antDesignIconsCheckCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleOutlined) {
      _req4 = _antDesignIconsCloseCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleOutlined) {
      _req5 = _antDesignIconsExclamationCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsInfoCircleOutlined) {
      _req6 = _antDesignIconsInfoCircleOutlined.__cjsMetaURL;
    }, function (_rcUtilLibReactRender) {
      _req7 = _rcUtilLibReactRender.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
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
        exports["default"] = confirm;
        exports.modalGlobalConfig = modalGlobalConfig;
        exports.withConfirm = withConfirm;
        exports.withError = withError;
        exports.withInfo = withInfo;
        exports.withSuccess = withSuccess;
        exports.withWarn = withWarn;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CheckCircleOutlined"));

        var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined"));

        var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

        var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons/InfoCircleOutlined"));

        var _render = require("rc-util/lib/React/render");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _ConfirmDialog = _interopRequireDefault(require("./ConfirmDialog"));

        var _destroyFns = _interopRequireDefault(require("./destroyFns"));

        var _locale = require("./locale");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var defaultRootPrefixCls = '';

        function getRootPrefixCls() {
          return defaultRootPrefixCls;
        }

        function confirm(config) {
          var container = document.createDocumentFragment(); // eslint-disable-next-line @typescript-eslint/no-use-before-define

          var currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, config), {
            close: close,
            open: true
          });
          var timeoutId;

          function destroy() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var triggerCancel = args.some(function (param) {
              return param && param.triggerCancel;
            });

            if (config.onCancel && triggerCancel) {
              config.onCancel.apply(config, [function () {}].concat((0, _toConsumableArray2["default"])(args.slice(1))));
            }

            for (var i = 0; i < _destroyFns["default"].length; i++) {
              var fn = _destroyFns["default"][i]; // eslint-disable-next-line @typescript-eslint/no-use-before-define

              if (fn === close) {
                _destroyFns["default"].splice(i, 1);

                break;
              }
            }

            (0, _render.unmount)(container);
          }

          function render(_a) {
            var okText = _a.okText,
                cancelText = _a.cancelText,
                customizePrefixCls = _a.prefixCls,
                props = __rest(_a, ["okText", "cancelText", "prefixCls"]);

            clearTimeout(timeoutId);
            /**
             * https://github.com/ant-design/ant-design/issues/23623
             *
             * Sync render blocks React event. Let's make this async.
             */

            timeoutId = setTimeout(function () {
              var runtimeLocale = (0, _locale.getConfirmLocale)();

              var _globalConfig = (0, _configProvider.globalConfig)(),
                  getPrefixCls = _globalConfig.getPrefixCls,
                  getIconPrefixCls = _globalConfig.getIconPrefixCls; // because Modal.config  set rootPrefixCls, which is different from other components


              var rootPrefixCls = getPrefixCls(undefined, getRootPrefixCls());
              var prefixCls = customizePrefixCls || "".concat(rootPrefixCls, "-modal");
              var iconPrefixCls = getIconPrefixCls();
              (0, _render.render)( /*#__PURE__*/React.createElement(_ConfirmDialog["default"], (0, _extends2["default"])({}, props, {
                prefixCls: prefixCls,
                rootPrefixCls: rootPrefixCls,
                iconPrefixCls: iconPrefixCls,
                okText: okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText),
                cancelText: cancelText || runtimeLocale.cancelText
              })), container);
            });
          }

          function close() {
            var _this = this;

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, currentConfig), {
              open: false,
              afterClose: function afterClose() {
                if (typeof config.afterClose === 'function') {
                  config.afterClose();
                }

                destroy.apply(_this, args);
              }
            }); // Legacy support

            if (currentConfig.visible) {
              delete currentConfig.visible;
            }

            render(currentConfig);
          }

          function update(configUpdate) {
            if (typeof configUpdate === 'function') {
              currentConfig = configUpdate(currentConfig);
            } else {
              currentConfig = (0, _extends2["default"])((0, _extends2["default"])({}, currentConfig), configUpdate);
            }

            render(currentConfig);
          }

          render(currentConfig);

          _destroyFns["default"].push(close);

          return {
            destroy: close,
            update: update
          };
        }

        function withWarn(props) {
          return (0, _extends2["default"])((0, _extends2["default"])({
            icon: /*#__PURE__*/React.createElement(_ExclamationCircleOutlined["default"], null),
            okCancel: false
          }, props), {
            type: 'warning'
          });
        }

        function withInfo(props) {
          return (0, _extends2["default"])((0, _extends2["default"])({
            icon: /*#__PURE__*/React.createElement(_InfoCircleOutlined["default"], null),
            okCancel: false
          }, props), {
            type: 'info'
          });
        }

        function withSuccess(props) {
          return (0, _extends2["default"])((0, _extends2["default"])({
            icon: /*#__PURE__*/React.createElement(_CheckCircleOutlined["default"], null),
            okCancel: false
          }, props), {
            type: 'success'
          });
        }

        function withError(props) {
          return (0, _extends2["default"])((0, _extends2["default"])({
            icon: /*#__PURE__*/React.createElement(_CloseCircleOutlined["default"], null),
            okCancel: false
          }, props), {
            type: 'error'
          });
        }

        function withConfirm(props) {
          return (0, _extends2["default"])((0, _extends2["default"])({
            icon: /*#__PURE__*/React.createElement(_ExclamationCircleOutlined["default"], null),
            okCancel: true
          }, props), {
            type: 'confirm'
          });
        }

        function modalGlobalConfig(_ref) {
          var rootPrefixCls = _ref.rootPrefixCls;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'Modal', 'Modal.config is deprecated. Please use ConfigProvider.config instead.') : void 0;
          defaultRootPrefixCls = rootPrefixCls;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _modalGlobalConfig = module.exports.modalGlobalConfig;
        _withConfirm = module.exports.withConfirm;
        _withError = module.exports.withError;
        _withInfo = module.exports.withInfo;
        _withSuccess = module.exports.withSuccess;
        _withWarn = module.exports.withWarn;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/CheckCircleOutlined': _req3,
        '@ant-design/icons/CloseCircleOutlined': _req4,
        '@ant-design/icons/ExclamationCircleOutlined': _req5,
        '@ant-design/icons/InfoCircleOutlined': _req6,
        'rc-util/lib/React/render': _req7,
        'react': _req8,
        '../config-provider': _req9,
        '../_util/warning': _req10,
        './ConfirmDialog': _req11,
        './destroyFns': _req12,
        './locale': _req13
      }));
    }
  };
});
//# sourceMappingURL=e7718cf378514a5280e284e1e410d76b41d26ec2.js.map