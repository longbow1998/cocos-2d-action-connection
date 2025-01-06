System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/raf", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req1 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
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
        exports["default"] = scrollTo;

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _easings = require("./easings");

        var _getScroll = _interopRequireWildcard(require("./getScroll"));

        function scrollTo(y) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _options$getContainer = options.getContainer,
              getContainer = _options$getContainer === void 0 ? function () {
            return window;
          } : _options$getContainer,
              callback = options.callback,
              _options$duration = options.duration,
              duration = _options$duration === void 0 ? 450 : _options$duration;
          var container = getContainer();
          var scrollTop = (0, _getScroll["default"])(container, true);
          var startTime = Date.now();

          var frameFunc = function frameFunc() {
            var timestamp = Date.now();
            var time = timestamp - startTime;
            var nextScrollTop = (0, _easings.easeInOutCubic)(time > duration ? duration : time, scrollTop, y, duration);

            if ((0, _getScroll.isWindow)(container)) {
              container.scrollTo(window.pageXOffset, nextScrollTop);
            } else if (container instanceof Document || container.constructor.name === 'HTMLDocument') {
              container.documentElement.scrollTop = nextScrollTop;
            } else {
              container.scrollTop = nextScrollTop;
            }

            if (time < duration) {
              (0, _raf["default"])(frameFunc);
            } else if (typeof callback === 'function') {
              callback();
            }
          };

          (0, _raf["default"])(frameFunc);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        'rc-util/lib/raf': _req1,
        './easings': _req2,
        './getScroll': _req3
      }));
    }
  };
});
//# sourceMappingURL=29aa4a720fe984d1fb7e829fee1017fd3354ef6b.js.map