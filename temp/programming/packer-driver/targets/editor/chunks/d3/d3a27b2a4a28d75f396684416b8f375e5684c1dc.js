System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _useLayoutState, _useTimeoutLock, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react2) {
      _req1 = _react2.__cjsMetaURL;
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
        exports.useLayoutState = useLayoutState;
        exports.useTimeoutLock = useTimeoutLock;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");
        /**
         * Execute code before next frame but async
         */


        function useLayoutState(defaultState) {
          var stateRef = (0, _react.useRef)(defaultState);

          var _useState = (0, _react.useState)({}),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              forceUpdate = _useState2[1];

          var lastPromiseRef = (0, _react.useRef)(null);
          var updateBatchRef = (0, _react.useRef)([]);

          function setFrameState(updater) {
            updateBatchRef.current.push(updater);
            var promise = Promise.resolve();
            lastPromiseRef.current = promise;
            promise.then(function () {
              if (lastPromiseRef.current === promise) {
                var prevBatch = updateBatchRef.current;
                var prevState = stateRef.current;
                updateBatchRef.current = [];
                prevBatch.forEach(function (batchUpdater) {
                  stateRef.current = batchUpdater(stateRef.current);
                });
                lastPromiseRef.current = null;

                if (prevState !== stateRef.current) {
                  forceUpdate({});
                }
              }
            });
          }

          (0, _react.useEffect)(function () {
            return function () {
              lastPromiseRef.current = null;
            };
          }, []);
          return [stateRef.current, setFrameState];
        }
        /** Lock frame, when frame pass reset the lock. */


        function useTimeoutLock(defaultState) {
          var frameRef = (0, _react.useRef)(defaultState || null);
          var timeoutRef = (0, _react.useRef)();

          function cleanUp() {
            window.clearTimeout(timeoutRef.current);
          }

          function setState(newState) {
            frameRef.current = newState;
            cleanUp();
            timeoutRef.current = window.setTimeout(function () {
              frameRef.current = null;
              timeoutRef.current = undefined;
            }, 100);
          }

          function getState() {
            return frameRef.current;
          }

          (0, _react.useEffect)(function () {
            return cleanUp;
          }, []);
          return [setState, getState];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _useLayoutState = module.exports.useLayoutState;
        _useTimeoutLock = module.exports.useTimeoutLock;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'react': _req1
      }));
    }
  };
});
//# sourceMappingURL=d3a27b2a4a28d75f396684416b8f375e5684c1dc.js.map