System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req6 = _unresolved_5.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _tooltip = _interopRequireDefault(require("../tooltip"));

        var _getRenderPropValue = require("../_util/getRenderPropValue");

        var _motion = require("../_util/motion");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Overlay = function Overlay(_ref) {
          var title = _ref.title,
              content = _ref.content,
              prefixCls = _ref.prefixCls;

          if (!title && !content) {
            return null;
          }

          return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-title")
          }, (0, _getRenderPropValue.getRenderPropValue)(title)), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inner-content")
          }, (0, _getRenderPropValue.getRenderPropValue)(content)));
        };

        var Popover = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var customizePrefixCls = props.prefixCls,
              title = props.title,
              content = props.content,
              _overlay = props._overlay,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'top' : _props$placement,
              _props$trigger = props.trigger,
              trigger = _props$trigger === void 0 ? 'hover' : _props$trigger,
              _props$mouseEnterDela = props.mouseEnterDelay,
              mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0.1 : _props$mouseEnterDela,
              _props$mouseLeaveDela = props.mouseLeaveDelay,
              mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
              _props$overlayStyle = props.overlayStyle,
              overlayStyle = _props$overlayStyle === void 0 ? {} : _props$overlayStyle,
              otherProps = __rest(props, ["prefixCls", "title", "content", "_overlay", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var prefixCls = getPrefixCls('popover', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({
            placement: placement,
            trigger: trigger,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            overlayStyle: overlayStyle
          }, otherProps, {
            prefixCls: prefixCls,
            ref: ref,
            overlay: _overlay || /*#__PURE__*/React.createElement(Overlay, {
              prefixCls: prefixCls,
              title: title,
              content: content
            }),
            transitionName: (0, _motion.getTransitionName)(rootPrefixCls, 'zoom-big', otherProps.transitionName)
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Popover.displayName = 'Popover';
        }

        var _default = Popover;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../config-provider': _req3,
        '../tooltip': _req4,
        '../_util/getRenderPropValue': _req5,
        '../_util/motion': _req6
      }));
    }
  };
});
//# sourceMappingURL=9763d0423b21be9fa85fc08b643fb38c78f552e0.js.map