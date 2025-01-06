System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useSafeState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));
        /**
         * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
         * We do not make this auto is to avoid real memory leak.
         * Developer should confirm it's safe to ignore themselves.
         */


        function useSafeState(defaultValue) {
          var destroyRef = React.useRef(false);

          var _React$useState = React.useState(defaultValue),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              value = _React$useState2[0],
              setValue = _React$useState2[1];

          React.useEffect(function () {
            destroyRef.current = false;
            return function () {
              destroyRef.current = true;
            };
          }, []);

          function safeSetState(updater, ignoreDestroy) {
            if (ignoreDestroy && destroyRef.current) {
              return;
            }

            setValue(updater);
          }

          return [value, safeSetState];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=cea210e1dcdd34ca7115c083c167cf52ba427205.js.map