System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@ant-design/icons/EyeOutlined", "rc-image", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsEyeOutlined) {
      _req3 = _antDesignIconsEyeOutlined.__cjsMetaURL;
    }, function (_rcImage2) {
      _req4 = _rcImage2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons/EyeOutlined"));

        var _rcImage = _interopRequireDefault(require("rc-image"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _en_US = _interopRequireDefault(require("../locale/en_US"));

        var _motion = require("../_util/motion");

        var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Image = function Image(_a) {
          var customizePrefixCls = _a.prefixCls,
              preview = _a.preview,
              otherProps = __rest(_a, ["prefixCls", "preview"]);

          var _useContext = (0, React.useContext)(_configProvider.ConfigContext),
              getPrefixCls = _useContext.getPrefixCls,
              _useContext$locale = _useContext.locale,
              contextLocale = _useContext$locale === void 0 ? _en_US["default"] : _useContext$locale,
              getContextPopupContainer = _useContext.getPopupContainer;

          var prefixCls = getPrefixCls('image', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var imageLocale = contextLocale.Image || _en_US["default"].Image;
          var mergedPreview = React.useMemo(function () {
            if (preview === false) {
              return preview;
            }

            var _preview = (0, _typeof2["default"])(preview) === 'object' ? preview : {};

            var getContainer = _preview.getContainer,
                restPreviewProps = __rest(_preview, ["getContainer"]);

            return (0, _extends2["default"])((0, _extends2["default"])({
              mask: /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-mask-info")
              }, /*#__PURE__*/React.createElement(_EyeOutlined["default"], null), imageLocale === null || imageLocale === void 0 ? void 0 : imageLocale.preview),
              icons: _PreviewGroup.icons
            }, restPreviewProps), {
              getContainer: getContainer || getContextPopupContainer,
              transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom', _preview.transitionName),
              maskTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'fade', _preview.maskTransitionName)
            });
          }, [preview, imageLocale]);
          return /*#__PURE__*/React.createElement(_rcImage["default"], (0, _extends2["default"])({
            prefixCls: prefixCls,
            preview: mergedPreview
          }, otherProps));
        };

        Image.PreviewGroup = _PreviewGroup["default"];
        var _default = Image;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@ant-design/icons/EyeOutlined': _req3,
        'rc-image': _req4,
        'react': _req5,
        '../config-provider': _req6,
        '../locale/en_US': _req7,
        '../_util/motion': _req8,
        './PreviewGroup': _req9
      }));
    }
  };
});
//# sourceMappingURL=54551e0f342ff3c9351662fe29a84c9e71835008.js.map