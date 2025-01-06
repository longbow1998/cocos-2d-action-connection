System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "rc-util/lib/ref", "react", "__unresolved_1"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req2 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = useItemRef;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _context = require("../context");

        function useItemRef() {
          var _React$useContext = React.useContext(_context.FormContext),
              itemRef = _React$useContext.itemRef;

          var cacheRef = React.useRef({});

          function getRef(name, children) {
            var childrenRef = children && (0, _typeof2["default"])(children) === 'object' && children.ref;
            var nameStr = name.join('_');

            if (cacheRef.current.name !== nameStr || cacheRef.current.originRef !== childrenRef) {
              cacheRef.current.name = nameStr;
              cacheRef.current.originRef = childrenRef;
              cacheRef.current.ref = (0, _ref.composeRef)(itemRef(name), childrenRef);
            }

            return cacheRef.current.ref;
          }

          return getRef;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        'rc-util/lib/ref': _req2,
        'react': _req3,
        '../context': _req4
      }));
    }
  };
});
//# sourceMappingURL=359bb6662a2a66c00d1327f177204b5c2dda1f22.js.map