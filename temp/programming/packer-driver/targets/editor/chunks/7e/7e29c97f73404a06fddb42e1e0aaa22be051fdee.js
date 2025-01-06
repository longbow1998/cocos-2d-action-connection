System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, _offset, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req0 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react2) {
      _req1 = _react2.__cjsMetaURL;
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
        exports["default"] = dropIndicatorRender;
        exports.offset = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _react = _interopRequireDefault(require("react"));

        var offset = 4;
        exports.offset = offset;

        function dropIndicatorRender(props) {
          var _style;

          var dropPosition = props.dropPosition,
              dropLevelOffset = props.dropLevelOffset,
              prefixCls = props.prefixCls,
              indent = props.indent,
              _props$direction = props.direction,
              direction = _props$direction === void 0 ? 'ltr' : _props$direction;
          var startPosition = direction === 'ltr' ? 'left' : 'right';
          var endPosition = direction === 'ltr' ? 'right' : 'left';
          var style = (_style = {}, (0, _defineProperty2["default"])(_style, startPosition, -dropLevelOffset * indent + offset), (0, _defineProperty2["default"])(_style, endPosition, 0), _style);

          switch (dropPosition) {
            case -1:
              style.top = -3;
              break;

            case 1:
              style.bottom = -3;
              break;

            default:
              // dropPosition === 0
              style.bottom = -3;
              style[startPosition] = indent + offset;
              break;
          }

          return /*#__PURE__*/_react["default"].createElement("div", {
            style: style,
            className: "".concat(prefixCls, "-drop-indicator")
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _offset = module.exports.offset;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/defineProperty': _req0,
        'react': _req1
      }));
    }
  };
});
//# sourceMappingURL=7e29c97f73404a06fddb42e1e0aaa22be051fdee.js.map