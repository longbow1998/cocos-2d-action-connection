System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _responsiveMap, _responsiveArray, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req0 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.responsiveMap = exports.responsiveArray = exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
        exports.responsiveArray = responsiveArray;
        var responsiveMap = {
          xs: '(max-width: 575px)',
          sm: '(min-width: 576px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 992px)',
          xl: '(min-width: 1200px)',
          xxl: '(min-width: 1600px)'
        };
        exports.responsiveMap = responsiveMap;
        var subscribers = new Map();
        var subUid = -1;
        var screens = {};
        var responsiveObserve = {
          matchHandlers: {},
          dispatch: function dispatch(pointMap) {
            screens = pointMap;
            subscribers.forEach(function (func) {
              return func(screens);
            });
            return subscribers.size >= 1;
          },
          subscribe: function subscribe(func) {
            if (!subscribers.size) this.register();
            subUid += 1;
            subscribers.set(subUid, func);
            func(screens);
            return subUid;
          },
          unsubscribe: function unsubscribe(token) {
            subscribers["delete"](token);
            if (!subscribers.size) this.unregister();
          },
          unregister: function unregister() {
            var _this = this;

            Object.keys(responsiveMap).forEach(function (screen) {
              var matchMediaQuery = responsiveMap[screen];
              var handler = _this.matchHandlers[matchMediaQuery];
              handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
            });
            subscribers.clear();
          },
          register: function register() {
            var _this2 = this;

            Object.keys(responsiveMap).forEach(function (screen) {
              var matchMediaQuery = responsiveMap[screen];

              var listener = function listener(_ref) {
                var matches = _ref.matches;

                _this2.dispatch((0, _extends3["default"])((0, _extends3["default"])({}, screens), (0, _defineProperty2["default"])({}, screen, matches)));
              };

              var mql = window.matchMedia(matchMediaQuery);
              mql.addListener(listener);
              _this2.matchHandlers[matchMediaQuery] = {
                mql: mql,
                listener: listener
              };
              listener(mql);
            });
          }
        };
        var _default = responsiveObserve;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _responsiveMap = module.exports.responsiveMap;
        _responsiveArray = module.exports.responsiveArray;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/defineProperty': _req0,
        '@babel/runtime/helpers/extends': _req1
      }));
    }
  };
});
//# sourceMappingURL=f8b375b8bb141dd53d5268d8503e8ae7f9126cae.js.map