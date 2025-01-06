System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
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
        exports.default = useMergedState;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _useEvent = _interopRequireDefault(require("./useEvent"));

        var _useLayoutEffect = require("./useLayoutEffect");

        var _useState5 = _interopRequireDefault(require("./useState"));
        /** We only think `undefined` is empty */


        function hasValue(value) {
          return value !== undefined;
        }
        /**
         * Similar to `useState` but will use props value if provided.
         * Note that internal use rc-util `useState` hook.
         */


        function useMergedState(defaultStateValue, option) {
          var _ref = option || {},
              defaultValue = _ref.defaultValue,
              value = _ref.value,
              onChange = _ref.onChange,
              postState = _ref.postState; // ======================= Init =======================


          var _useState = (0, _useState5.default)(function () {
            if (hasValue(value)) {
              return value;
            } else if (hasValue(defaultValue)) {
              return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
            } else {
              return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
            }
          }),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              innerValue = _useState2[0],
              setInnerValue = _useState2[1];

          var mergedValue = value !== undefined ? value : innerValue;
          var postMergedValue = postState ? postState(mergedValue) : mergedValue; // ====================== Change ======================

          var onChangeFn = (0, _useEvent.default)(onChange);

          var _useState3 = (0, _useState5.default)([mergedValue]),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              prevValue = _useState4[0],
              setPrevValue = _useState4[1];

          (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
            var prev = prevValue[0];

            if (innerValue !== prev) {
              onChangeFn(innerValue, prev);
            }
          }, [prevValue]); // Sync value back to `undefined` when it from control to un-control

          (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
            if (!hasValue(value)) {
              setInnerValue(value);
            }
          }, [value]); // ====================== Update ======================

          var triggerChange = (0, _useEvent.default)(function (updater, ignoreDestroy) {
            setInnerValue(updater, ignoreDestroy);
            setPrevValue([mergedValue], ignoreDestroy);
          });
          return [postMergedValue, triggerChange];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        './useEvent': _req1,
        './useLayoutEffect': _req2,
        './useState': _req3
      }));
    }
  };
});
//# sourceMappingURL=ae2938b774284df6d2ff37509e66331667ae0c00.js.map