System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _react = require("react");

        var _useForceUpdate = _interopRequireDefault(require("../../_util/hooks/useForceUpdate"));

        var _responsiveObserve = _interopRequireDefault(require("../../_util/responsiveObserve"));

        function useBreakpoint() {
          var refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var screensRef = (0, _react.useRef)({});
          var forceUpdate = (0, _useForceUpdate["default"])();
          (0, _react.useEffect)(function () {
            var token = _responsiveObserve["default"].subscribe(function (supportScreens) {
              screensRef.current = supportScreens;

              if (refreshOnChange) {
                forceUpdate();
              }
            });

            return function () {
              return _responsiveObserve["default"].unsubscribe(token);
            };
          }, []);
          return screensRef.current;
        }

        var _default = useBreakpoint;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0,
        '../../_util/hooks/useForceUpdate': _req1,
        '../../_util/responsiveObserve': _req2
      }));
    }
  };
});
//# sourceMappingURL=71327406e06009e733e434c1c25e176479f70e30.js.map