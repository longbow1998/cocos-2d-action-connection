System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@ant-design/icons/CloseOutlined", "@ant-design/icons/LeftOutlined", "@ant-design/icons/RightOutlined", "@ant-design/icons/RotateLeftOutlined", "@ant-design/icons/RotateRightOutlined", "@ant-design/icons/ZoomInOutlined", "@ant-design/icons/ZoomOutOutlined", "rc-image", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _icons, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req3 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLeftOutlined) {
      _req4 = _antDesignIconsLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRightOutlined) {
      _req5 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRotateLeftOutlined) {
      _req6 = _antDesignIconsRotateLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRotateRightOutlined) {
      _req7 = _antDesignIconsRotateRightOutlined.__cjsMetaURL;
    }, function (_antDesignIconsZoomInOutlined) {
      _req8 = _antDesignIconsZoomInOutlined.__cjsMetaURL;
    }, function (_antDesignIconsZoomOutOutlined) {
      _req9 = _antDesignIconsZoomOutOutlined.__cjsMetaURL;
    }, function (_rcImage2) {
      _req10 = _rcImage2.__cjsMetaURL;
    }, function (_react) {
      _req11 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
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
        exports.icons = exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var _RotateLeftOutlined = _interopRequireDefault(require("@ant-design/icons/RotateLeftOutlined"));

        var _RotateRightOutlined = _interopRequireDefault(require("@ant-design/icons/RotateRightOutlined"));

        var _ZoomInOutlined = _interopRequireDefault(require("@ant-design/icons/ZoomInOutlined"));

        var _ZoomOutOutlined = _interopRequireDefault(require("@ant-design/icons/ZoomOutOutlined"));

        var _rcImage = _interopRequireDefault(require("rc-image"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _motion = require("../_util/motion");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var icons = {
          rotateLeft: /*#__PURE__*/React.createElement(_RotateLeftOutlined["default"], null),
          rotateRight: /*#__PURE__*/React.createElement(_RotateRightOutlined["default"], null),
          zoomIn: /*#__PURE__*/React.createElement(_ZoomInOutlined["default"], null),
          zoomOut: /*#__PURE__*/React.createElement(_ZoomOutOutlined["default"], null),
          close: /*#__PURE__*/React.createElement(_CloseOutlined["default"], null),
          left: /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
          right: /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
        };
        exports.icons = icons;

        var InternalPreviewGroup = function InternalPreviewGroup(_a) {
          var customizePrefixCls = _a.previewPrefixCls,
              preview = _a.preview,
              props = __rest(_a, ["previewPrefixCls", "preview"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('image-preview', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var mergedPreview = React.useMemo(function () {
            if (preview === false) {
              return preview;
            }

            var _preview = (0, _typeof2["default"])(preview) === 'object' ? preview : {};

            return (0, _extends2["default"])((0, _extends2["default"])({}, _preview), {
              transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', _preview.transitionName),
              maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', _preview.maskTransitionName)
            });
          }, [preview]);
          return /*#__PURE__*/React.createElement(_rcImage["default"].PreviewGroup, (0, _extends2["default"])({
            preview: mergedPreview,
            previewPrefixCls: prefixCls,
            icons: icons
          }, props));
        };

        var _default = InternalPreviewGroup;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _icons = module.exports.icons;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@ant-design/icons/CloseOutlined': _req3,
        '@ant-design/icons/LeftOutlined': _req4,
        '@ant-design/icons/RightOutlined': _req5,
        '@ant-design/icons/RotateLeftOutlined': _req6,
        '@ant-design/icons/RotateRightOutlined': _req7,
        '@ant-design/icons/ZoomInOutlined': _req8,
        '@ant-design/icons/ZoomOutOutlined': _req9,
        'rc-image': _req10,
        'react': _req11,
        '../config-provider': _req12,
        '../_util/motion': _req13
      }));
    }
  };
});
//# sourceMappingURL=7e120df0abbf6cb63bfd722a3697d681f629e77e.js.map