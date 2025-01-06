System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
        exports.default = useEffectState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");
        /**
         * Trigger a callback on state change
         */


        function useEffectState() {
          var _useState = (0, _react.useState)({
            id: 0,
            callback: null
          }),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              effectId = _useState2[0],
              setEffectId = _useState2[1];

          var update = (0, _react.useCallback)(function (callback) {
            setEffectId(function (_ref) {
              var id = _ref.id;
              return {
                id: id + 1,
                callback: callback
              };
            });
          }, []);
          (0, _react.useEffect)(function () {
            var _effectId$callback;

            (_effectId$callback = effectId.callback) === null || _effectId$callback === void 0 ? void 0 : _effectId$callback.call(effectId);
          }, [effectId]);
          return update;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'react': _req1
      }));
    }
  };
});
//# sourceMappingURL=e2ecd40072ea3fc488ea17d8e847faab4efa693c.js.map