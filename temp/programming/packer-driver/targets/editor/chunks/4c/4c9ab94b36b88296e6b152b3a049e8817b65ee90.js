System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread2", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, _resetUuid, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
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
        exports.default = useId;
        exports.resetUuid = resetUuid;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        function getUseId() {
          // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
          var fullClone = (0, _objectSpread2.default)({}, React);
          return fullClone.useId;
        }

        var uuid = 0;
        /** @private Note only worked in develop env. Not work in production. */

        function resetUuid() {
          if (process.env.NODE_ENV !== 'production') {
            uuid = 0;
          }
        }

        function useId(id) {
          // Inner id for accessibility usage. Only work in client side
          var _React$useState = React.useState('ssr-id'),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              innerId = _React$useState2[0],
              setInnerId = _React$useState2[1];

          var useOriginId = getUseId();
          var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
          React.useEffect(function () {
            if (!useOriginId) {
              var nextId = uuid;
              uuid += 1;
              setInnerId("rc_unique_".concat(nextId));
            }
          }, []); // Developer passed id is single source of truth

          if (id) {
            return id;
          } // Test env always return mock id


          if (process.env.NODE_ENV === 'test') {
            return 'test-id';
          } // Return react native id or inner id


          return reactNativeId || innerId;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _resetUuid = module.exports.resetUuid;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=4c9ab94b36b88296e6b152b3a049e8817b65ee90.js.map