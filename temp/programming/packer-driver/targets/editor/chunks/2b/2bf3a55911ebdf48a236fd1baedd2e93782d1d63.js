System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _Collection, _CollectionContext, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Collection = Collection;
        exports.CollectionContext = void 0;

        var React = _interopRequireWildcard(require("react"));

        var CollectionContext = /*#__PURE__*/React.createContext(null);
        /**
         * Collect all the resize event from children ResizeObserver
         */

        exports.CollectionContext = CollectionContext;

        function Collection(_ref) {
          var children = _ref.children,
              onBatchResize = _ref.onBatchResize;
          var resizeIdRef = React.useRef(0);
          var resizeInfosRef = React.useRef([]);
          var onCollectionResize = React.useContext(CollectionContext);
          var onResize = React.useCallback(function (size, element, data) {
            resizeIdRef.current += 1;
            var currentId = resizeIdRef.current;
            resizeInfosRef.current.push({
              size: size,
              element: element,
              data: data
            });
            Promise.resolve().then(function () {
              if (currentId === resizeIdRef.current) {
                onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
                resizeInfosRef.current = [];
              }
            }); // Continue bubbling if parent exist

            onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
          }, [onBatchResize, onCollectionResize]);
          return /*#__PURE__*/React.createElement(CollectionContext.Provider, {
            value: onResize
          }, children);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Collection = module.exports.Collection;
        _CollectionContext = module.exports.CollectionContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=2bf3a55911ebdf48a236fd1baedd2e93782d1d63.js.map