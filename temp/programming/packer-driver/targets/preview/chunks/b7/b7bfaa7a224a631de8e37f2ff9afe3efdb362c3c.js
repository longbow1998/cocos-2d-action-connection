System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req6 = _unresolved_5.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _useForceUpdate = _interopRequireDefault(require("../_util/hooks/useForceUpdate"));

        var _reactNode = require("../_util/reactNode");

        var _Statistic = _interopRequireDefault(require("./Statistic"));

        var _utils = require("./utils");

        var REFRESH_INTERVAL = 1000 / 30;

        function getTime(value) {
          return new Date(value).getTime();
        }

        var Countdown = function Countdown(props) {
          var value = props.value,
              _props$format = props.format,
              format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
              onChange = props.onChange,
              onFinish = props.onFinish;
          var forceUpdate = (0, _useForceUpdate["default"])();
          var countdown = React.useRef(null);

          var stopTimer = function stopTimer() {
            onFinish === null || onFinish === void 0 ? void 0 : onFinish();

            if (countdown.current) {
              clearInterval(countdown.current);
              countdown.current = null;
            }
          };

          var syncTimer = function syncTimer() {
            var timestamp = getTime(value);

            if (timestamp >= Date.now()) {
              countdown.current = setInterval(function () {
                forceUpdate();
                onChange === null || onChange === void 0 ? void 0 : onChange(timestamp - Date.now());

                if (timestamp < Date.now()) {
                  stopTimer();
                }
              }, REFRESH_INTERVAL);
            }
          };

          React.useEffect(function () {
            syncTimer();
            return function () {
              if (countdown.current) {
                clearInterval(countdown.current);
                countdown.current = null;
              }
            };
          }, [value]);

          var formatter = function formatter(formatValue, config) {
            return (0, _utils.formatCountdown)(formatValue, (0, _extends2["default"])((0, _extends2["default"])({}, config), {
              format: format
            }));
          };

          var valueRender = function valueRender(node) {
            return (0, _reactNode.cloneElement)(node, {
              title: undefined
            });
          };

          return /*#__PURE__*/React.createElement(_Statistic["default"], (0, _extends2["default"])({}, props, {
            valueRender: valueRender,
            formatter: formatter
          }));
        };

        var _default = /*#__PURE__*/React.memo(Countdown);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../_util/hooks/useForceUpdate': _req3,
        '../_util/reactNode': _req4,
        './Statistic': _req5,
        './utils': _req6
      }));
    }
  };
});
//# sourceMappingURL=b7bfaa7a224a631de8e37f2ff9afe3efdb362c3c.js.map