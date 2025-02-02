System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useHoverValue;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");

        var _useValueTexts3 = _interopRequireDefault(require("./useValueTexts"));

        function useHoverValue(valueText, _ref) {
          var formatList = _ref.formatList,
              generateConfig = _ref.generateConfig,
              locale = _ref.locale;

          var _useState = (0, _react.useState)(null),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              value = _useState2[0],
              internalSetValue = _useState2[1];

          var raf = (0, _react.useRef)(null);

          function setValue(val) {
            var immediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            cancelAnimationFrame(raf.current);

            if (immediately) {
              internalSetValue(val);
              return;
            }

            raf.current = requestAnimationFrame(function () {
              internalSetValue(val);
            });
          }

          var _useValueTexts = (0, _useValueTexts3.default)(value, {
            formatList: formatList,
            generateConfig: generateConfig,
            locale: locale
          }),
              _useValueTexts2 = (0, _slicedToArray2.default)(_useValueTexts, 2),
              firstText = _useValueTexts2[1];

          function onEnter(date) {
            setValue(date);
          }

          function onLeave() {
            var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            setValue(null, immediately);
          }

          (0, _react.useEffect)(function () {
            onLeave(true);
          }, [valueText]);
          (0, _react.useEffect)(function () {
            return function () {
              return cancelAnimationFrame(raf.current);
            };
          }, []);
          return [firstText, onEnter, onLeave];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'react': _req1,
        './useValueTexts': _req2
      }));
    }
  };
});
//# sourceMappingURL=5e2e131c515524dbd813bc6163e55f66d1a2f4e1.js.map