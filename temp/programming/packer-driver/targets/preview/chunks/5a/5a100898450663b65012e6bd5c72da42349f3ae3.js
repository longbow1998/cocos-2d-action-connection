System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/raf", "rc-util/lib/hooks/useState"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _useBatchFrameState, __cjsMetaURL;

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
    }, function (_rcUtilLibRaf) {
      _req2 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req3 = _rcUtilLibHooksUseState.__cjsMetaURL;
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
        exports.useBatchFrameState = useBatchFrameState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _useState3 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));
        /**
         * State generate. Return a `setState` but it will flush all state with one render to save perf.
         * This is not a realization of `unstable_batchedUpdates`.
         */


        function useBatchFrameState() {
          var _useState = (0, _useState3.default)({}),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              forceUpdate = _useState2[1];

          var statesRef = (0, _react.useRef)([]);
          var walkingIndex = 0;
          var beforeFrameId = 0;

          function createState(defaultValue) {
            var myIndex = walkingIndex;
            walkingIndex += 1; // Fill value if not exist yet

            if (statesRef.current.length < myIndex + 1) {
              statesRef.current[myIndex] = defaultValue;
            } // Return filled as `setState`


            var value = statesRef.current[myIndex];

            function setValue(val) {
              statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;

              _raf.default.cancel(beforeFrameId); // Flush with batch


              beforeFrameId = (0, _raf.default)(function () {
                forceUpdate({}, true);
              });
            }

            return [value, setValue];
          }

          return createState;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _useBatchFrameState = module.exports.useBatchFrameState;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'react': _req1,
        'rc-util/lib/raf': _req2,
        'rc-util/lib/hooks/useState': _req3
      }));
    }
  };
});
//# sourceMappingURL=5a100898450663b65012e6bd5c72da42349f3ae3.js.map