System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "__unresolved_1"], function (_export, _context) {
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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useDiffItem;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _algorithmUtil = require("../utils/algorithmUtil");

        function useDiffItem(data, getKey, onDiff) {
          var _React$useState = React.useState(data),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              prevData = _React$useState2[0],
              setPrevData = _React$useState2[1];

          var _React$useState3 = React.useState(null),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              diffItem = _React$useState4[0],
              setDiffItem = _React$useState4[1];

          React.useEffect(function () {
            var diff = (0, _algorithmUtil.findListDiffIndex)(prevData || [], data || [], getKey);

            if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
              onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
              setDiffItem(data[diff.index]);
            }

            setPrevData(data);
          }, [data]);
          return [diffItem];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        '../utils/algorithmUtil': _req3
      }));
    }
  };
});
//# sourceMappingURL=17440f8de01ccce27d86e2f9f1015fdc8d772e3e.js.map