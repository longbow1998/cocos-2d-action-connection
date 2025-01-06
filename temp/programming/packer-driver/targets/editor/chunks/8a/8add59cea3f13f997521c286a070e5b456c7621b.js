System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports.default = void 0;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _default = function _default(stretch) {
          var _React$useState = React.useState({
            width: 0,
            height: 0
          }),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              targetSize = _React$useState2[0],
              setTargetSize = _React$useState2[1];

          function measureStretch(element) {
            var tgtWidth = element.offsetWidth,
                tgtHeight = element.offsetHeight;

            var _element$getBoundingC = element.getBoundingClientRect(),
                width = _element$getBoundingC.width,
                height = _element$getBoundingC.height; // Rect is more accurate than offset, use if near


            if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
              tgtWidth = width;
              tgtHeight = height;
            }

            setTargetSize({
              width: tgtWidth,
              height: tgtHeight
            });
          } // Merge stretch style


          var style = React.useMemo(function () {
            var sizeStyle = {};

            if (stretch) {
              var width = targetSize.width,
                  height = targetSize.height; // Stretch with target

              if (stretch.indexOf('height') !== -1 && height) {
                sizeStyle.height = height;
              } else if (stretch.indexOf('minHeight') !== -1 && height) {
                sizeStyle.minHeight = height;
              }

              if (stretch.indexOf('width') !== -1 && width) {
                sizeStyle.width = width;
              } else if (stretch.indexOf('minWidth') !== -1 && width) {
                sizeStyle.minWidth = width;
              }
            }

            return sizeStyle;
          }, [stretch, targetSize]);
          return [style, measureStretch];
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=8add59cea3f13f997521c286a070e5b456c7621b.js.map