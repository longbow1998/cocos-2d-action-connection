System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "rc-notification/lib/useNotification", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_rcNotificationLibUseNotification) {
      _req3 = _rcNotificationLibUseNotification.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = createUseNotification;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _useNotification = _interopRequireDefault(require("rc-notification/lib/useNotification"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../../config-provider");

        function createUseNotification(getNotificationInstance, getRCNoticeProps) {
          var useNotification = function useNotification() {
            // We can only get content by render
            var getPrefixCls; // We create a proxy to handle delay created instance

            var innerInstance = null;
            var proxy = {
              add: function add(noticeProps, holderCallback) {
                innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
              }
            };

            var _useRCNotification = (0, _useNotification["default"])(proxy),
                _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
                hookNotify = _useRCNotification2[0],
                holder = _useRCNotification2[1];

            function notify(args) {
              var customizePrefixCls = args.prefixCls;
              var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
              getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
                prefixCls: mergedPrefixCls
              }), function (_ref) {
                var prefixCls = _ref.prefixCls,
                    instance = _ref.instance;
                innerInstance = instance;
                hookNotify(getRCNoticeProps(args, prefixCls));
              });
            } // Fill functions


            var hookApiRef = React.useRef({});
            hookApiRef.current.open = notify;
            ['success', 'info', 'warning', 'error'].forEach(function (type) {
              hookApiRef.current[type] = function (args) {
                return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
                  type: type
                }));
              };
            });
            return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
              key: "holder"
            }, function (context) {
              getPrefixCls = context.getPrefixCls;
              return holder;
            })];
          };

          return useNotification;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'rc-notification/lib/useNotification': _req3,
        'react': _req4,
        '../../config-provider': _req5
      }));
    }
  };
});
//# sourceMappingURL=afb45357646936c9082482227ce9096d470e8b73.js.map