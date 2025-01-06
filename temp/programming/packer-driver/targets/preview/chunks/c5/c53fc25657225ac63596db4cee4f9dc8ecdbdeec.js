System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "rc-util/lib/raf", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
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

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useFrameWheel;

        var _react = require("react");

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _isFirefox = _interopRequireDefault(require("../utils/isFirefox"));

        var _useOriginScroll = _interopRequireDefault(require("./useOriginScroll"));

        function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
          var offsetRef = (0, _react.useRef)(0);
          var nextFrameRef = (0, _react.useRef)(null); // Firefox patch

          var wheelValueRef = (0, _react.useRef)(null);
          var isMouseScrollRef = (0, _react.useRef)(false); // Scroll status sync

          var originScroll = (0, _useOriginScroll.default)(isScrollAtTop, isScrollAtBottom);

          function onWheel(event) {
            if (!inVirtual) return;

            _raf.default.cancel(nextFrameRef.current);

            var deltaY = event.deltaY;
            offsetRef.current += deltaY;
            wheelValueRef.current = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

            if (originScroll(deltaY)) return; // Proxy of scroll events

            if (!_isFirefox.default) {
              event.preventDefault();
            }

            nextFrameRef.current = (0, _raf.default)(function () {
              // Patch a multiple for Firefox to fix wheel number too small
              // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
              var patchMultiple = isMouseScrollRef.current ? 10 : 1;
              onWheelDelta(offsetRef.current * patchMultiple);
              offsetRef.current = 0;
            });
          } // A patch for firefox


          function onFireFoxScroll(event) {
            if (!inVirtual) return;
            isMouseScrollRef.current = event.detail === wheelValueRef.current;
          }

          return [onWheel, onFireFoxScroll];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        'rc-util/lib/raf': _req1,
        '../utils/isFirefox': _req2,
        './useOriginScroll': _req3
      }));
    }
  };
});
//# sourceMappingURL=c53fc25657225ac63596db4cee4f9dc8ecdbdeec.js.map