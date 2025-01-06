System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/icons/LeftOutlined", "@ant-design/icons/RightOutlined", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_antDesignIconsLeftOutlined) {
      _req1 = _antDesignIconsLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRightOutlined) {
      _req2 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
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

        var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var Operation = function Operation(_ref) {
          var disabled = _ref.disabled,
              moveToLeft = _ref.moveToLeft,
              moveToRight = _ref.moveToRight,
              _ref$leftArrowText = _ref.leftArrowText,
              leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
              _ref$rightArrowText = _ref.rightArrowText,
              rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
              leftActive = _ref.leftActive,
              rightActive = _ref.rightActive,
              className = _ref.className,
              style = _ref.style,
              direction = _ref.direction,
              oneWay = _ref.oneWay;
          return /*#__PURE__*/React.createElement("div", {
            className: className,
            style: style
          }, /*#__PURE__*/React.createElement(_button["default"], {
            type: "primary",
            size: "small",
            disabled: disabled || !rightActive,
            onClick: moveToRight,
            icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null)
          }, rightArrowText), !oneWay && /*#__PURE__*/React.createElement(_button["default"], {
            type: "primary",
            size: "small",
            disabled: disabled || !leftActive,
            onClick: moveToLeft,
            icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
          }, leftArrowText));
        };

        var _default = Operation;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@ant-design/icons/LeftOutlined': _req1,
        '@ant-design/icons/RightOutlined': _req2,
        'react': _req3,
        '../button': _req4
      }));
    }
  };
});
//# sourceMappingURL=a34c0c1705b8721afb7b972747d643c00351e340.js.map