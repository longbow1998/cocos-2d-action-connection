System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/icons/CheckOutlined", "@ant-design/icons/CloseCircleFilled", "@ant-design/icons/CloseOutlined", "@ant-design/icons/DownOutlined", "@ant-design/icons/LoadingOutlined", "@ant-design/icons/SearchOutlined", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_antDesignIconsCheckOutlined) {
      _req1 = _antDesignIconsCheckOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseCircleFilled) {
      _req2 = _antDesignIconsCloseCircleFilled.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req3 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_antDesignIconsDownOutlined) {
      _req4 = _antDesignIconsDownOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req5 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_antDesignIconsSearchOutlined) {
      _req6 = _antDesignIconsSearchOutlined.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
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
        exports["default"] = getIcons;

        var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));

        var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _DownOutlined = _interopRequireDefault(require("@ant-design/icons/DownOutlined"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

        var React = _interopRequireWildcard(require("react"));

        function getIcons(_ref) {
          var suffixIcon = _ref.suffixIcon,
              clearIcon = _ref.clearIcon,
              menuItemSelectedIcon = _ref.menuItemSelectedIcon,
              removeIcon = _ref.removeIcon,
              loading = _ref.loading,
              multiple = _ref.multiple,
              hasFeedback = _ref.hasFeedback,
              prefixCls = _ref.prefixCls,
              showArrow = _ref.showArrow,
              feedbackIcon = _ref.feedbackIcon; // Clear Icon

          var mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null); // Validation Feedback Icon

          var getSuffixIconNode = function getSuffixIconNode(arrowIcon) {
            return /*#__PURE__*/React.createElement(React.Fragment, null, showArrow !== false && arrowIcon, hasFeedback && feedbackIcon);
          }; // Arrow item icon


          var mergedSuffixIcon = null;

          if (suffixIcon !== undefined) {
            mergedSuffixIcon = getSuffixIconNode(suffixIcon);
          } else if (loading) {
            mergedSuffixIcon = getSuffixIconNode( /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
              spin: true
            }));
          } else {
            var iconCls = "".concat(prefixCls, "-suffix");

            mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
              var open = _ref2.open,
                  showSearch = _ref2.showSearch;

              if (open && showSearch) {
                return getSuffixIconNode( /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
                  className: iconCls
                }));
              }

              return getSuffixIconNode( /*#__PURE__*/React.createElement(_DownOutlined["default"], {
                className: iconCls
              }));
            };
          } // Checked item icon


          var mergedItemIcon = null;

          if (menuItemSelectedIcon !== undefined) {
            mergedItemIcon = menuItemSelectedIcon;
          } else if (multiple) {
            mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
          } else {
            mergedItemIcon = null;
          }

          var mergedRemoveIcon = null;

          if (removeIcon !== undefined) {
            mergedRemoveIcon = removeIcon;
          } else {
            mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
          }

          return {
            clearIcon: mergedClearIcon,
            suffixIcon: mergedSuffixIcon,
            itemIcon: mergedItemIcon,
            removeIcon: mergedRemoveIcon
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@ant-design/icons/CheckOutlined': _req1,
        '@ant-design/icons/CloseCircleFilled': _req2,
        '@ant-design/icons/CloseOutlined': _req3,
        '@ant-design/icons/DownOutlined': _req4,
        '@ant-design/icons/LoadingOutlined': _req5,
        '@ant-design/icons/SearchOutlined': _req6,
        'react': _req7
      }));
    }
  };
});
//# sourceMappingURL=a3edd279822ef4f27520e0624ad1d25e5239e368.js.map