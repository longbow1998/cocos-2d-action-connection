System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/CheckCircleFilled", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/ExclamationCircleFilled", "@ant-design/icons/InfoCircleFilled", "@ant-design/icons/LoadingOutlined", "classnames", "rc-notification", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _attachTypeApi, _getInstance, _default0, _getKeyThenIncreaseKey, _typeList, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_antDesignIconsCheckCircleFilled) {
      _req3 = _antDesignIconsCheckCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req4 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleFilled) {
      _req5 = _antDesignIconsExclamationCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsInfoCircleFilled) {
      _req6 = _antDesignIconsInfoCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req7 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcNotification2) {
      _req9 = _rcNotification2.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
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
        exports.attachTypeApi = attachTypeApi;
        exports.getInstance = exports["default"] = void 0;
        exports.getKeyThenIncreaseKey = getKeyThenIncreaseKey;
        exports.typeList = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _CheckCircleFilled = _interopRequireDefault(require("@ant-design/icons/CheckCircleFilled"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _ExclamationCircleFilled = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleFilled"));

        var _InfoCircleFilled = _interopRequireDefault(require("@ant-design/icons/InfoCircleFilled"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcNotification = _interopRequireDefault(require("rc-notification"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = _interopRequireWildcard(require("../config-provider"));

        var _useMessage = _interopRequireDefault(require("./hooks/useMessage"));

        var messageInstance;
        var defaultDuration = 3;
        var defaultTop;
        var key = 1;
        var localPrefixCls = '';
        var transitionName = 'move-up';
        var hasTransitionName = false;
        var getContainer;
        var maxCount;
        var rtl = false;

        function getKeyThenIncreaseKey() {
          return key++;
        }

        function setMessageConfig(options) {
          if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
          }

          if (options.duration !== undefined) {
            defaultDuration = options.duration;
          }

          if (options.prefixCls !== undefined) {
            localPrefixCls = options.prefixCls;
          }

          if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
            messageInstance = null; // delete messageInstance for new getContainer
          }

          if (options.transitionName !== undefined) {
            transitionName = options.transitionName;
            messageInstance = null; // delete messageInstance for new transitionName

            hasTransitionName = true;
          }

          if (options.maxCount !== undefined) {
            maxCount = options.maxCount;
            messageInstance = null;
          }

          if (options.rtl !== undefined) {
            rtl = options.rtl;
          }
        }

        function getRCNotificationInstance(args, callback) {
          var customizePrefixCls = args.prefixCls,
              getContextPopupContainer = args.getPopupContainer;

          var _globalConfig = (0, _configProvider.globalConfig)(),
              getPrefixCls = _globalConfig.getPrefixCls,
              getRootPrefixCls = _globalConfig.getRootPrefixCls,
              getIconPrefixCls = _globalConfig.getIconPrefixCls;

          var prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
          var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);
          var iconPrefixCls = getIconPrefixCls();

          if (messageInstance) {
            callback({
              prefixCls: prefixCls,
              rootPrefixCls: rootPrefixCls,
              iconPrefixCls: iconPrefixCls,
              instance: messageInstance
            });
            return;
          }

          var instanceConfig = {
            prefixCls: prefixCls,
            transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
            style: {
              top: defaultTop
            },
            getContainer: getContainer || getContextPopupContainer,
            maxCount: maxCount
          };

          _rcNotification["default"].newInstance(instanceConfig, function (instance) {
            if (messageInstance) {
              callback({
                prefixCls: prefixCls,
                rootPrefixCls: rootPrefixCls,
                iconPrefixCls: iconPrefixCls,
                instance: messageInstance
              });
              return;
            }

            messageInstance = instance;

            if (process.env.NODE_ENV === 'test') {
              messageInstance.config = instanceConfig;
            }

            callback({
              prefixCls: prefixCls,
              rootPrefixCls: rootPrefixCls,
              iconPrefixCls: iconPrefixCls,
              instance: instance
            });
          });
        }

        var typeToIcon = {
          info: _InfoCircleFilled["default"],
          success: _CheckCircleFilled["default"],
          error: _CloseCircleFilled["default"],
          warning: _ExclamationCircleFilled["default"],
          loading: _LoadingOutlined["default"]
        };
        var typeList = Object.keys(typeToIcon);
        exports.typeList = typeList;

        function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
          var _classNames;

          var duration = args.duration !== undefined ? args.duration : defaultDuration;
          var IconComponent = typeToIcon[args.type];
          var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
          return {
            key: args.key,
            duration: duration,
            style: args.style || {},
            className: args.className,
            content: /*#__PURE__*/React.createElement(_configProvider["default"], {
              iconPrefixCls: iconPrefixCls
            }, /*#__PURE__*/React.createElement("div", {
              className: messageClass
            }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content))),
            onClose: args.onClose,
            onClick: args.onClick
          };
        }

        function notice(args) {
          var target = args.key || getKeyThenIncreaseKey();
          var closePromise = new Promise(function (resolve) {
            var callback = function callback() {
              if (typeof args.onClose === 'function') {
                args.onClose();
              }

              return resolve(true);
            };

            getRCNotificationInstance(args, function (_ref) {
              var prefixCls = _ref.prefixCls,
                  iconPrefixCls = _ref.iconPrefixCls,
                  instance = _ref.instance;
              instance.notice(getRCNoticeProps((0, _extends2["default"])((0, _extends2["default"])({}, args), {
                key: target,
                onClose: callback
              }), prefixCls, iconPrefixCls));
            });
          });

          var result = function result() {
            var _a;

            if (messageInstance) {
              messageInstance.removeNotice(target);
              (_a = args.onClose) === null || _a === void 0 ? void 0 : _a.call(args);
            }
          };

          result.then = function (filled, rejected) {
            return closePromise.then(filled, rejected);
          };

          result.promise = closePromise;
          return result;
        }

        function isArgsProps(content) {
          return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
        }

        var api = {
          open: notice,
          config: setMessageConfig,
          destroy: function destroy(messageKey) {
            if (messageInstance) {
              if (messageKey) {
                var _messageInstance = messageInstance,
                    removeNotice = _messageInstance.removeNotice;
                removeNotice(messageKey);
              } else {
                var _messageInstance2 = messageInstance,
                    destroy = _messageInstance2.destroy;
                destroy();
                messageInstance = null;
              }
            }
          }
        };

        function attachTypeApi(originalApi, type) {
          originalApi[type] = function (content, duration, onClose) {
            if (isArgsProps(content)) {
              return originalApi.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
                type: type
              }));
            }

            if (typeof duration === 'function') {
              onClose = duration;
              duration = undefined;
            }

            return originalApi.open({
              content: content,
              duration: duration,
              type: type,
              onClose: onClose
            });
          };
        }

        typeList.forEach(function (type) {
          return attachTypeApi(api, type);
        });
        api.warn = api.warning;
        api.useMessage = (0, _useMessage["default"])(getRCNotificationInstance, getRCNoticeProps);
        /** @internal test Only function. Not work on production */

        var getInstance = function getInstance() {
          return process.env.NODE_ENV === 'test' ? messageInstance : null;
        };

        exports.getInstance = getInstance;
        var _default = api;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _attachTypeApi = module.exports.attachTypeApi;
        _getInstance = module.exports.getInstance;
        _default0 = module.exports.default;
        _getKeyThenIncreaseKey = module.exports.getKeyThenIncreaseKey;
        _typeList = module.exports.typeList;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/CheckCircleFilled': _req3,
        '@ant-design/icons/CloseCircleFilled': _req4,
        '@ant-design/icons/ExclamationCircleFilled': _req5,
        '@ant-design/icons/InfoCircleFilled': _req6,
        '@ant-design/icons/LoadingOutlined': _req7,
        'classnames': _req8,
        'rc-notification': _req9,
        'react': _req10,
        '../config-provider': _req11,
        './hooks/useMessage': _req12
      }));
    }
  };
});
//# sourceMappingURL=52f10efa63f01783dbe30dc473d0510247fd33fa.js.map