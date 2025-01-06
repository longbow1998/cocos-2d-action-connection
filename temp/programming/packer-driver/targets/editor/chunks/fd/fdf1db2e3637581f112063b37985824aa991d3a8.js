System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/regeneratorRuntime", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/CheckCircleOutlined", "@ant-design/icons/CloseCircleOutlined", "@ant-design/icons/CloseOutlined", "@ant-design/icons/ExclamationCircleOutlined", "@ant-design/icons/InfoCircleOutlined", "classnames", "rc-notification", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _getInstance, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersRegeneratorRuntime) {
      _req1 = _babelRuntimeHelpersRegeneratorRuntime.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_antDesignIconsCheckCircleOutlined) {
      _req4 = _antDesignIconsCheckCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleOutlined) {
      _req5 = _antDesignIconsCloseCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req6 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_antDesignIconsExclamationCircleOutlined) {
      _req7 = _antDesignIconsExclamationCircleOutlined.__cjsMetaURL;
    }, function (_antDesignIconsInfoCircleOutlined) {
      _req8 = _antDesignIconsInfoCircleOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_rcNotification2) {
      _req10 = _rcNotification2.__cjsMetaURL;
    }, function (_react) {
      _req11 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
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
        exports.getInstance = exports["default"] = void 0;

        var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _CheckCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CheckCircleOutlined"));

        var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _ExclamationCircleOutlined = _interopRequireDefault(require("@ant-design/icons/ExclamationCircleOutlined"));

        var _InfoCircleOutlined = _interopRequireDefault(require("@ant-design/icons/InfoCircleOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcNotification = _interopRequireDefault(require("rc-notification"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = _interopRequireWildcard(require("../config-provider"));

        var _useNotification = _interopRequireDefault(require("./hooks/useNotification"));

        var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };

        var notificationInstance = {};
        var defaultDuration = 4.5;
        var defaultTop = 24;
        var defaultBottom = 24;
        var defaultPrefixCls = '';
        var defaultPlacement = 'topRight';
        var defaultGetContainer;
        var defaultCloseIcon;
        var rtl = false;
        var maxCount;

        function setNotificationConfig(options) {
          var duration = options.duration,
              placement = options.placement,
              bottom = options.bottom,
              top = options.top,
              getContainer = options.getContainer,
              closeIcon = options.closeIcon,
              prefixCls = options.prefixCls;

          if (prefixCls !== undefined) {
            defaultPrefixCls = prefixCls;
          }

          if (duration !== undefined) {
            defaultDuration = duration;
          }

          if (placement !== undefined) {
            defaultPlacement = placement;
          } else if (options.rtl) {
            defaultPlacement = 'topLeft';
          }

          if (bottom !== undefined) {
            defaultBottom = bottom;
          }

          if (top !== undefined) {
            defaultTop = top;
          }

          if (getContainer !== undefined) {
            defaultGetContainer = getContainer;
          }

          if (closeIcon !== undefined) {
            defaultCloseIcon = closeIcon;
          }

          if (options.rtl !== undefined) {
            rtl = options.rtl;
          }

          if (options.maxCount !== undefined) {
            maxCount = options.maxCount;
          }
        }

        function getPlacementStyle(placement) {
          var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
          var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
          var style;

          switch (placement) {
            case 'top':
              style = {
                left: '50%',
                transform: 'translateX(-50%)',
                right: 'auto',
                top: top,
                bottom: 'auto'
              };
              break;

            case 'topLeft':
              style = {
                left: 0,
                top: top,
                bottom: 'auto'
              };
              break;

            case 'topRight':
              style = {
                right: 0,
                top: top,
                bottom: 'auto'
              };
              break;

            case 'bottom':
              style = {
                left: '50%',
                transform: 'translateX(-50%)',
                right: 'auto',
                top: 'auto',
                bottom: bottom
              };
              break;

            case 'bottomLeft':
              style = {
                left: 0,
                top: 'auto',
                bottom: bottom
              };
              break;

            default:
              style = {
                right: 0,
                top: 'auto',
                bottom: bottom
              };
              break;
          }

          return style;
        }

        function getNotificationInstance(args, callback) {
          var _args$placement = args.placement,
              placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
              top = args.top,
              bottom = args.bottom,
              _args$getContainer = args.getContainer,
              getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
              customizePrefixCls = args.prefixCls;

          var _globalConfig = (0, _configProvider.globalConfig)(),
              getPrefixCls = _globalConfig.getPrefixCls,
              getIconPrefixCls = _globalConfig.getIconPrefixCls;

          var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls);
          var iconPrefixCls = getIconPrefixCls();
          var cacheKey = "".concat(prefixCls, "-").concat(placement);
          var cacheInstance = notificationInstance[cacheKey];

          if (cacheInstance) {
            Promise.resolve(cacheInstance).then(function (instance) {
              callback({
                prefixCls: "".concat(prefixCls, "-notice"),
                iconPrefixCls: iconPrefixCls,
                instance: instance
              });
            });
            return;
          }

          var notificationClass = (0, _classnames["default"])("".concat(prefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), rtl === true));
          notificationInstance[cacheKey] = new Promise(function (resolve) {
            _rcNotification["default"].newInstance({
              prefixCls: prefixCls,
              className: notificationClass,
              style: getPlacementStyle(placement, top, bottom),
              getContainer: getContainer,
              maxCount: maxCount
            }, function (notification) {
              resolve(notification);
              callback({
                prefixCls: "".concat(prefixCls, "-notice"),
                iconPrefixCls: iconPrefixCls,
                instance: notification
              });
            });
          });
        }

        var typeToIcon = {
          success: _CheckCircleOutlined["default"],
          info: _InfoCircleOutlined["default"],
          error: _CloseCircleOutlined["default"],
          warning: _ExclamationCircleOutlined["default"]
        };

        function getRCNoticeProps(args, prefixCls, iconPrefixCls) {
          var durationArg = args.duration,
              icon = args.icon,
              type = args.type,
              description = args.description,
              message = args.message,
              btn = args.btn,
              onClose = args.onClose,
              onClick = args.onClick,
              key = args.key,
              style = args.style,
              className = args.className,
              _args$closeIcon = args.closeIcon,
              closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon,
              props = args.props;
          var duration = durationArg === undefined ? defaultDuration : durationArg;
          var iconNode = null;

          if (icon) {
            iconNode = /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-icon")
            }, args.icon);
          } else if (type) {
            iconNode = /*#__PURE__*/React.createElement(typeToIcon[type] || null, {
              className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
            });
          }

          var closeIconToRender = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-close-x")
          }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
            className: "".concat(prefixCls, "-close-icon")
          }));
          var autoMarginTag = !description && iconNode ? /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-message-single-line-auto-margin")
          }) : null;
          return {
            content: /*#__PURE__*/React.createElement(_configProvider["default"], {
              iconPrefixCls: iconPrefixCls
            }, /*#__PURE__*/React.createElement("div", {
              className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
              role: "alert"
            }, iconNode, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-message")
            }, autoMarginTag, message), /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-description")
            }, description), btn ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-btn")
            }, btn) : null)),
            duration: duration,
            closable: true,
            closeIcon: closeIconToRender,
            onClose: onClose,
            onClick: onClick,
            key: key,
            style: style || {},
            className: (0, _classnames["default"])(className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(type), !!type)),
            props: props
          };
        }

        function notice(args) {
          getNotificationInstance(args, function (_ref) {
            var prefixCls = _ref.prefixCls,
                iconPrefixCls = _ref.iconPrefixCls,
                instance = _ref.instance;
            instance.notice(getRCNoticeProps(args, prefixCls, iconPrefixCls));
          });
        }

        var api = {
          open: notice,
          close: function close(key) {
            Object.keys(notificationInstance).forEach(function (cacheKey) {
              return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
                instance.removeNotice(key);
              });
            });
          },
          config: setNotificationConfig,
          destroy: function destroy() {
            Object.keys(notificationInstance).forEach(function (cacheKey) {
              Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
                instance.destroy();
              });
              delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
            });
          }
        };
        ['success', 'info', 'warning', 'error'].forEach(function (type) {
          api[type] = function (args) {
            return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
              type: type
            }));
          };
        });
        api.warn = api.warning;
        api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
        /** @internal test Only function. Not work on production */

        var getInstance = function getInstance(cacheKey) {
          return __awaiter(void 0, void 0, void 0, /*#__PURE__*/(0, _regeneratorRuntime2["default"])().mark(function _callee() {
            return (0, _regeneratorRuntime2["default"])().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", process.env.NODE_ENV === 'test' ? notificationInstance[cacheKey] : null);

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
        };

        exports.getInstance = getInstance;
        var _default = api;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getInstance = module.exports.getInstance;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/regeneratorRuntime': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@ant-design/icons/CheckCircleOutlined': _req4,
        '@ant-design/icons/CloseCircleOutlined': _req5,
        '@ant-design/icons/CloseOutlined': _req6,
        '@ant-design/icons/ExclamationCircleOutlined': _req7,
        '@ant-design/icons/InfoCircleOutlined': _req8,
        'classnames': _req9,
        'rc-notification': _req10,
        'react': _req11,
        '../config-provider': _req12,
        './hooks/useNotification': _req13
      }));
    }
  };
});
//# sourceMappingURL=fdf1db2e3637581f112063b37985824aa991d3a8.js.map