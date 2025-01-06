System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@ant-design/icons/CaretDownFilled", "@ant-design/icons/FileOutlined", "@ant-design/icons/LoadingOutlined", "@ant-design/icons/MinusSquareOutlined", "@ant-design/icons/PlusSquareOutlined", "classnames", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_antDesignIconsCaretDownFilled) {
      _req2 = _antDesignIconsCaretDownFilled.__cjsMetaURL;
    }, function (_antDesignIconsFileOutlined) {
      _req3 = _antDesignIconsFileOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req4 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_antDesignIconsMinusSquareOutlined) {
      _req5 = _antDesignIconsMinusSquareOutlined.__cjsMetaURL;
    }, function (_antDesignIconsPlusSquareOutlined) {
      _req6 = _antDesignIconsPlusSquareOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = renderSwitcherIcon;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _CaretDownFilled = _interopRequireDefault(require("@ant-design/icons/CaretDownFilled"));

        var _FileOutlined = _interopRequireDefault(require("@ant-design/icons/FileOutlined"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _MinusSquareOutlined = _interopRequireDefault(require("@ant-design/icons/MinusSquareOutlined"));

        var _PlusSquareOutlined = _interopRequireDefault(require("@ant-design/icons/PlusSquareOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _reactNode = require("../../_util/reactNode");

        function renderSwitcherIcon(prefixCls, switcherIcon, showLine, treeNodeProps) {
          var isLeaf = treeNodeProps.isLeaf,
              expanded = treeNodeProps.expanded,
              loading = treeNodeProps.loading;

          if (loading) {
            return /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
              className: "".concat(prefixCls, "-switcher-loading-icon")
            });
          }

          var showLeafIcon;

          if (showLine && (0, _typeof2["default"])(showLine) === 'object') {
            showLeafIcon = showLine.showLeafIcon;
          }

          if (isLeaf) {
            if (!showLine) {
              return null;
            }

            if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
              var leafIcon = typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon;
              var leafCls = "".concat(prefixCls, "-switcher-line-custom-icon");

              if ((0, _reactNode.isValidElement)(leafIcon)) {
                return (0, _reactNode.cloneElement)(leafIcon, {
                  className: (0, _classnames["default"])(leafIcon.props.className || '', leafCls)
                });
              }

              return leafIcon;
            }

            return showLeafIcon ? /*#__PURE__*/React.createElement(_FileOutlined["default"], {
              className: "".concat(prefixCls, "-switcher-line-icon")
            }) : /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-switcher-leaf-line")
            });
          }

          var switcherCls = "".concat(prefixCls, "-switcher-icon");
          var switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon;

          if ((0, _reactNode.isValidElement)(switcher)) {
            return (0, _reactNode.cloneElement)(switcher, {
              className: (0, _classnames["default"])(switcher.props.className || '', switcherCls)
            });
          }

          if (switcher) {
            return switcher;
          }

          if (showLine) {
            return expanded ? /*#__PURE__*/React.createElement(_MinusSquareOutlined["default"], {
              className: "".concat(prefixCls, "-switcher-line-icon")
            }) : /*#__PURE__*/React.createElement(_PlusSquareOutlined["default"], {
              className: "".concat(prefixCls, "-switcher-line-icon")
            });
          }

          return /*#__PURE__*/React.createElement(_CaretDownFilled["default"], {
            className: switcherCls
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@ant-design/icons/CaretDownFilled': _req2,
        '@ant-design/icons/FileOutlined': _req3,
        '@ant-design/icons/LoadingOutlined': _req4,
        '@ant-design/icons/MinusSquareOutlined': _req5,
        '@ant-design/icons/PlusSquareOutlined': _req6,
        'classnames': _req7,
        'react': _req8,
        '../../_util/reactNode': _req9
      }));
    }
  };
});
//# sourceMappingURL=89627b2d33600dcaa03b8c07f30beedd10afe6b5.js.map