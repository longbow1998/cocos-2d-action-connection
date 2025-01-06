System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/Dom/findDOMNode", "rc-util/lib/raf", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_rcUtilLibDomFindDOMNode) {
      _req3 = _rcUtilLibDomFindDOMNode.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req4 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useHeights;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _findDOMNode = _interopRequireDefault(require("rc-util/lib/Dom/findDOMNode"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _CacheMap = _interopRequireDefault(require("../utils/CacheMap"));

        function useHeights(getKey, onItemAdd, onItemRemove) {
          var _React$useState = React.useState(0),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              updatedMark = _React$useState2[0],
              setUpdatedMark = _React$useState2[1];

          var instanceRef = (0, React.useRef)(new Map());
          var heightsRef = (0, React.useRef)(new _CacheMap.default());
          var collectRafRef = (0, React.useRef)();

          function cancelRaf() {
            _raf.default.cancel(collectRafRef.current);
          }

          function collectHeight() {
            cancelRaf();
            collectRafRef.current = (0, _raf.default)(function () {
              instanceRef.current.forEach(function (element, key) {
                if (element && element.offsetParent) {
                  var htmlElement = (0, _findDOMNode.default)(element);
                  var offsetHeight = htmlElement.offsetHeight;

                  if (heightsRef.current.get(key) !== offsetHeight) {
                    heightsRef.current.set(key, htmlElement.offsetHeight);
                  }
                }
              }); // Always trigger update mark to tell parent that should re-calculate heights when resized

              setUpdatedMark(function (c) {
                return c + 1;
              });
            });
          }

          function setInstanceRef(item, instance) {
            var key = getKey(item);
            var origin = instanceRef.current.get(key);

            if (instance) {
              instanceRef.current.set(key, instance);
              collectHeight();
            } else {
              instanceRef.current.delete(key);
            } // Instance changed


            if (!origin !== !instance) {
              if (instance) {
                onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
              } else {
                onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
              }
            }
          }

          (0, React.useEffect)(function () {
            return cancelRaf;
          }, []);
          return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        'rc-util/lib/Dom/findDOMNode': _req3,
        'rc-util/lib/raf': _req4,
        '../utils/CacheMap': _req5
      }));
    }
  };
});
//# sourceMappingURL=9c13bffd8f69fd7c491a4f3a746567096642841a.js.map