System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/Dom/dynamicCSS", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/getScrollBarSize", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_rcUtilLibDomDynamicCSS) {
      _req3 = _rcUtilLibDomDynamicCSS.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req4 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibGetScrollBarSize) {
      _req5 = _rcUtilLibGetScrollBarSize.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useScrollLocker;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _getScrollBarSize = _interopRequireDefault(require("rc-util/lib/getScrollBarSize"));

        var _util = require("./util");

        var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
        var uuid = 0;

        function useScrollLocker(lock) {
          var mergedLock = !!lock;

          var _React$useState = React.useState(function () {
            uuid += 1;
            return "".concat(UNIQUE_ID, "_").concat(uuid);
          }),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
              id = _React$useState2[0];

          (0, _useLayoutEffect.default)(function () {
            if (mergedLock) {
              var scrollbarSize = (0, _getScrollBarSize.default)();
              var isOverflow = (0, _util.isBodyOverflowing)();
              (0, _dynamicCSS.updateCSS)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
            } else {
              (0, _dynamicCSS.removeCSS)(id);
            }

            return function () {
              (0, _dynamicCSS.removeCSS)(id);
            };
          }, [mergedLock, id]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        'rc-util/lib/Dom/dynamicCSS': _req3,
        'rc-util/lib/hooks/useLayoutEffect': _req4,
        'rc-util/lib/getScrollBarSize': _req5,
        './util': _req6
      }));
    }
  };
});
//# sourceMappingURL=973071697fb3566bb974f218ab9521e7749405aa.js.map