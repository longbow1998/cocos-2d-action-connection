System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-util/lib/isMobile", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcUtilLibIsMobile) {
      _req6 = _rcUtilLibIsMobile.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _isMobile = _interopRequireDefault(require("rc-util/lib/isMobile"));

        var _Mask = _interopRequireDefault(require("./Mask"));

        var _PopupInner = _interopRequireDefault(require("./PopupInner"));

        var _MobilePopupInner = _interopRequireDefault(require("./MobilePopupInner"));

        var _excluded = ["visible", "mobile"];
        var Popup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
          var visible = _ref.visible,
              mobile = _ref.mobile,
              props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

          var _useState = (0, React.useState)(visible),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              innerVisible = _useState2[0],
              serInnerVisible = _useState2[1];

          var _useState3 = (0, React.useState)(false),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              inMobile = _useState4[0],
              setInMobile = _useState4[1];

          var cloneProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            visible: innerVisible
          }); // We check mobile in visible changed here.
          // And this also delay set `innerVisible` to avoid popup component render flash

          (0, React.useEffect)(function () {
            serInnerVisible(visible);

            if (visible && mobile) {
              setInMobile((0, _isMobile.default)());
            }
          }, [visible, mobile]);
          var popupNode = inMobile ? /*#__PURE__*/React.createElement(_MobilePopupInner.default, (0, _extends2.default)({}, cloneProps, {
            mobile: mobile,
            ref: ref
          })) : /*#__PURE__*/React.createElement(_PopupInner.default, (0, _extends2.default)({}, cloneProps, {
            ref: ref
          })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

          return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Mask.default, cloneProps), popupNode);
        });
        Popup.displayName = 'Popup';
        var _default = Popup;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'rc-util/lib/isMobile': _req6,
        './Mask': _req7,
        './PopupInner': _req8,
        './MobilePopupInner': _req9
      }));
    }
  };
});
//# sourceMappingURL=7d89eaf1b2308723bfcd8358a89ab52f905061f6.js.map