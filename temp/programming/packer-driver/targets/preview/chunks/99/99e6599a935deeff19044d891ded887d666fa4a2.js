System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "resize-observer-polyfill", "rc-util/lib/Dom/contains"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _isSamePoint, _monitorResize, _restoreFocus, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_resizeObserverPolyfill2) {
      _req1 = _resizeObserverPolyfill2.__cjsMetaURL;
    }, function (_rcUtilLibDomContains) {
      _req2 = _rcUtilLibDomContains.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.isSamePoint = isSamePoint;
        exports.monitorResize = monitorResize;
        exports.restoreFocus = restoreFocus;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

        var _contains = _interopRequireDefault(require("rc-util/lib/Dom/contains"));

        function isSamePoint(prev, next) {
          if (prev === next) return true;
          if (!prev || !next) return false;

          if ('pageX' in next && 'pageY' in next) {
            return prev.pageX === next.pageX && prev.pageY === next.pageY;
          }

          if ('clientX' in next && 'clientY' in next) {
            return prev.clientX === next.clientX && prev.clientY === next.clientY;
          }

          return false;
        }

        function restoreFocus(activeElement, container) {
          // Focus back if is in the container
          if (activeElement !== document.activeElement && (0, _contains.default)(container, activeElement) && typeof activeElement.focus === 'function') {
            activeElement.focus();
          }
        }

        function monitorResize(element, callback) {
          var prevWidth = null;
          var prevHeight = null;

          function onResize(_ref) {
            var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
                target = _ref2[0].target;

            if (!document.documentElement.contains(target)) return;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                width = _target$getBoundingCl.width,
                height = _target$getBoundingCl.height;

            var fixedWidth = Math.floor(width);
            var fixedHeight = Math.floor(height);

            if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
              // https://webkit.org/blog/9997/resizeobserver-in-webkit/
              Promise.resolve().then(function () {
                callback({
                  width: fixedWidth,
                  height: fixedHeight
                });
              });
            }

            prevWidth = fixedWidth;
            prevHeight = fixedHeight;
          }

          var resizeObserver = new _resizeObserverPolyfill.default(onResize);

          if (element) {
            resizeObserver.observe(element);
          }

          return function () {
            resizeObserver.disconnect();
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _isSamePoint = module.exports.isSamePoint;
        _monitorResize = module.exports.monitorResize;
        _restoreFocus = module.exports.restoreFocus;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'resize-observer-polyfill': _req1,
        'rc-util/lib/Dom/contains': _req2
      }));
    }
  };
});
//# sourceMappingURL=99e6599a935deeff19044d891ded887d666fa4a2.js.map