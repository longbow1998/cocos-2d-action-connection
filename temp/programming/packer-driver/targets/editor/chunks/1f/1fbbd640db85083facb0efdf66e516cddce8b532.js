System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "classnames", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var Paragraph = function Paragraph(props) {
          var getWidth = function getWidth(index) {
            var width = props.width,
                _props$rows = props.rows,
                rows = _props$rows === void 0 ? 2 : _props$rows;

            if (Array.isArray(width)) {
              return width[index];
            } // last paragraph


            if (rows - 1 === index) {
              return width;
            }

            return undefined;
          };

          var prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              rows = props.rows;
          var rowList = (0, _toConsumableArray2["default"])(Array(rows)).map(function (_, index) {
            return (
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              React.createElement("li", {
                key: index,
                style: {
                  width: getWidth(index)
                }
              })
            );
          });
          return /*#__PURE__*/React.createElement("ul", {
            className: (0, _classnames["default"])(prefixCls, className),
            style: style
          }, rowList);
        };

        var _default = Paragraph;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        'classnames': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=1fbbd640db85083facb0efdf66e516cddce8b532.js.map