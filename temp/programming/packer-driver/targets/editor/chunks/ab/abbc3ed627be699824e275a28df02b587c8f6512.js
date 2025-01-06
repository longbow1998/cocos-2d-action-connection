System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "rc-util/lib/hooks/useLayoutEffect", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, _useUpdateState, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req1 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_react2) {
      _req2 = _react2.__cjsMetaURL;
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
        exports.default = useUpdate;
        exports.useUpdateState = useUpdateState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _useLayoutEffect = require("rc-util/lib/hooks/useLayoutEffect");

        var _react = require("react");
        /**
         * Help to merge callback with `useLayoutEffect`.
         * One time will only trigger once.
         */


        function useUpdate(callback) {
          var _useState = (0, _react.useState)(0),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              count = _useState2[0],
              setCount = _useState2[1];

          var effectRef = (0, _react.useRef)(0);
          var callbackRef = (0, _react.useRef)();
          callbackRef.current = callback; // Trigger on `useLayoutEffect`

          (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
            var _callbackRef$current;

            (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef);
          }, [count]); // Trigger to update count

          return function () {
            if (effectRef.current !== count) {
              return;
            }

            effectRef.current += 1;
            setCount(effectRef.current);
          };
        }

        function useUpdateState(defaultState) {
          var batchRef = (0, _react.useRef)([]);

          var _useState3 = (0, _react.useState)({}),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              forceUpdate = _useState4[1];

          var state = (0, _react.useRef)(typeof defaultState === 'function' ? defaultState() : defaultState);
          var flushUpdate = useUpdate(function () {
            var current = state.current;
            batchRef.current.forEach(function (callback) {
              current = callback(current);
            });
            batchRef.current = [];
            state.current = current;
            forceUpdate({});
          });

          function updater(callback) {
            batchRef.current.push(callback);
            flushUpdate();
          }

          return [state.current, updater];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _useUpdateState = module.exports.useUpdateState;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'rc-util/lib/hooks/useLayoutEffect': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=abbc3ed627be699824e275a28df02b587c8f6512.js.map