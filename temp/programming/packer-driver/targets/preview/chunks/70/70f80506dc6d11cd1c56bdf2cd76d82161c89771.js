System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "rc-util/lib/raf", "react"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req2 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
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
        exports["default"] = useFrameState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var React = _interopRequireWildcard(require("react"));

        function useFrameState(defaultValue) {
          var _React$useState = React.useState(defaultValue),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              value = _React$useState2[0],
              setValue = _React$useState2[1];

          var frameRef = (0, React.useRef)(null);
          var batchRef = (0, React.useRef)([]);
          var destroyRef = (0, React.useRef)(false);
          React.useEffect(function () {
            destroyRef.current = false;
            return function () {
              destroyRef.current = true;

              _raf["default"].cancel(frameRef.current);

              frameRef.current = null;
            };
          }, []);

          function setFrameValue(updater) {
            if (destroyRef.current) {
              return;
            }

            if (frameRef.current === null) {
              batchRef.current = [];
              frameRef.current = (0, _raf["default"])(function () {
                frameRef.current = null;
                setValue(function (prevValue) {
                  var current = prevValue;
                  batchRef.current.forEach(function (func) {
                    current = func(current);
                  });
                  return current;
                });
              });
            }

            batchRef.current.push(updater);
          }

          return [value, setFrameValue];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'rc-util/lib/raf': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=70f80506dc6d11cd1c56bdf2cd76d82161c89771.js.map