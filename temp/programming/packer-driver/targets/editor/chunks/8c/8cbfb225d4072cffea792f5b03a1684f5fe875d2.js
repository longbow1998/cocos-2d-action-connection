System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "rc-motion", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req5 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
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
        exports.default = Mask;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _legacyUtil = require("../utils/legacyUtil");

        function Mask(props) {
          var prefixCls = props.prefixCls,
              visible = props.visible,
              zIndex = props.zIndex,
              mask = props.mask,
              maskMotion = props.maskMotion,
              maskAnimation = props.maskAnimation,
              maskTransitionName = props.maskTransitionName;

          if (!mask) {
            return null;
          }

          var motion = {};

          if (maskMotion || maskTransitionName || maskAnimation) {
            motion = (0, _objectSpread2.default)({
              motionAppear: true
            }, (0, _legacyUtil.getMotion)({
              motion: maskMotion,
              prefixCls: prefixCls,
              transitionName: maskTransitionName,
              animation: maskAnimation
            }));
          }

          return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({}, motion, {
            visible: visible,
            removeOnLeave: true
          }), function (_ref) {
            var className = _ref.className;
            return /*#__PURE__*/React.createElement("div", {
              style: {
                zIndex: zIndex
              },
              className: (0, _classnames.default)("".concat(prefixCls, "-mask"), className)
            });
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        'classnames': _req4,
        'rc-motion': _req5,
        '../utils/legacyUtil': _req6
      }));
    }
  };
});
//# sourceMappingURL=8cbfb225d4072cffea792f5b03a1684f5fe875d2.js.map