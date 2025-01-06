System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "react", "rc-motion", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req4 = _rcMotion2.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var MobilePopupInner = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              visible = props.visible,
              zIndex = props.zIndex,
              children = props.children,
              _props$mobile = props.mobile;
          _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
          var popupClassName = _props$mobile.popupClassName,
              popupStyle = _props$mobile.popupStyle,
              _props$mobile$popupMo = _props$mobile.popupMotion,
              popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
              popupRender = _props$mobile.popupRender,
              onClick = props.onClick;
          var elementRef = React.useRef(); // ========================= Refs =========================

          React.useImperativeHandle(ref, function () {
            return {
              forceAlign: function forceAlign() {},
              getElement: function getElement() {
                return elementRef.current;
              }
            };
          }); // ======================== Render ========================

          var mergedStyle = (0, _objectSpread2.default)({
            zIndex: zIndex
          }, popupStyle);
          var childNode = children; // Wrapper when multiple children

          if (React.Children.count(children) > 1) {
            childNode = /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-content")
            }, children);
          } // Mobile support additional render


          if (popupRender) {
            childNode = popupRender(childNode);
          }

          return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
            visible: visible,
            ref: elementRef,
            removeOnLeave: true
          }, popupMotion), function (_ref, motionRef) {
            var motionClassName = _ref.className,
                motionStyle = _ref.style;
            var mergedClassName = (0, _classnames.default)(prefixCls, popupClassName, motionClassName);
            return /*#__PURE__*/React.createElement("div", {
              ref: motionRef,
              className: mergedClassName,
              onClick: onClick,
              style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), mergedStyle)
            }, childNode);
          });
        });
        MobilePopupInner.displayName = 'MobilePopupInner';
        var _default = MobilePopupInner;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        'rc-motion': _req4,
        'classnames': _req5
      }));
    }
  };
});
//# sourceMappingURL=7b1b0b2b5b44b4e0e2af69a8b7376d008b55481a.js.map