System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/icons/LoadingOutlined", "rc-motion", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req0 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req1 = _rcMotion2.__cjsMetaURL;
    }, function (_react2) {
      _req2 = _react2.__cjsMetaURL;
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

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _react = _interopRequireDefault(require("react"));

        var getCollapsedWidth = function getCollapsedWidth() {
          return {
            width: 0,
            opacity: 0,
            transform: 'scale(0)'
          };
        };

        var getRealWidth = function getRealWidth(node) {
          return {
            width: node.scrollWidth,
            opacity: 1,
            transform: 'scale(1)'
          };
        };

        var LoadingIcon = function LoadingIcon(_ref) {
          var prefixCls = _ref.prefixCls,
              loading = _ref.loading,
              existIcon = _ref.existIcon;
          var visible = !!loading;

          if (existIcon) {
            return /*#__PURE__*/_react["default"].createElement("span", {
              className: "".concat(prefixCls, "-loading-icon")
            }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], null));
          }

          return /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
            visible: visible,
            // We do not really use this motionName
            motionName: "".concat(prefixCls, "-loading-icon-motion"),
            removeOnLeave: true,
            onAppearStart: getCollapsedWidth,
            onAppearActive: getRealWidth,
            onEnterStart: getCollapsedWidth,
            onEnterActive: getRealWidth,
            onLeaveStart: getRealWidth,
            onLeaveActive: getCollapsedWidth
          }, function (_ref2, ref) {
            var className = _ref2.className,
                style = _ref2.style;
            return /*#__PURE__*/_react["default"].createElement("span", {
              className: "".concat(prefixCls, "-loading-icon"),
              style: style,
              ref: ref
            }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], {
              className: className
            }));
          });
        };

        var _default = LoadingIcon;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@ant-design/icons/LoadingOutlined': _req0,
        'rc-motion': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=6cdcc21a11b37bb5ce1bd5b3260aedd2767c6ffa.js.map