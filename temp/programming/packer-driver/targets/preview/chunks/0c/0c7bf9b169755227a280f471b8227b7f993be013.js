System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-trigger", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcTrigger2) {
      _req6 = _rcTrigger2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

        var _placements = require("./placements");

        var _Popup = _interopRequireDefault(require("./Popup"));

        var Tooltip = function Tooltip(props, ref) {
          var overlayClassName = props.overlayClassName,
              _props$trigger = props.trigger,
              trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
              _props$mouseEnterDela = props.mouseEnterDelay,
              mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
              _props$mouseLeaveDela = props.mouseLeaveDelay,
              mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
              overlayStyle = props.overlayStyle,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
              children = props.children,
              onVisibleChange = props.onVisibleChange,
              afterVisibleChange = props.afterVisibleChange,
              transitionName = props.transitionName,
              animation = props.animation,
              motion = props.motion,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'right' : _props$placement,
              _props$align = props.align,
              align = _props$align === void 0 ? {} : _props$align,
              _props$destroyTooltip = props.destroyTooltipOnHide,
              destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
              defaultVisible = props.defaultVisible,
              getTooltipContainer = props.getTooltipContainer,
              overlayInnerStyle = props.overlayInnerStyle,
              arrowContent = props.arrowContent,
              overlay = props.overlay,
              id = props.id,
              showArrow = props.showArrow,
              restProps = (0, _objectWithoutProperties2.default)(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"]);
          var domRef = (0, React.useRef)(null);
          (0, React.useImperativeHandle)(ref, function () {
            return domRef.current;
          });
          var extraProps = (0, _objectSpread2.default)({}, restProps);

          if ('visible' in props) {
            extraProps.popupVisible = props.visible;
          }

          var getPopupElement = function getPopupElement() {
            return /*#__PURE__*/React.createElement(_Popup.default, {
              showArrow: showArrow,
              arrowContent: arrowContent,
              key: "content",
              prefixCls: prefixCls,
              id: id,
              overlayInnerStyle: overlayInnerStyle
            }, overlay);
          };

          var destroyTooltip = false;
          var autoDestroy = false;

          if (typeof destroyTooltipOnHide === 'boolean') {
            destroyTooltip = destroyTooltipOnHide;
          } else if (destroyTooltipOnHide && (0, _typeof2.default)(destroyTooltipOnHide) === 'object') {
            var keepParent = destroyTooltipOnHide.keepParent;
            destroyTooltip = keepParent === true;
            autoDestroy = keepParent === false;
          }

          return /*#__PURE__*/React.createElement(_rcTrigger.default, (0, _extends2.default)({
            popupClassName: overlayClassName,
            prefixCls: prefixCls,
            popup: getPopupElement,
            action: trigger,
            builtinPlacements: _placements.placements,
            popupPlacement: placement,
            ref: domRef,
            popupAlign: align,
            getPopupContainer: getTooltipContainer,
            onPopupVisibleChange: onVisibleChange,
            afterPopupVisibleChange: afterVisibleChange,
            popupTransitionName: transitionName,
            popupAnimation: animation,
            popupMotion: motion,
            defaultPopupVisible: defaultVisible,
            destroyPopupOnHide: destroyTooltip,
            autoDestroy: autoDestroy,
            mouseLeaveDelay: mouseLeaveDelay,
            popupStyle: overlayStyle,
            mouseEnterDelay: mouseEnterDelay
          }, extraProps), children);
        };

        var _default = /*#__PURE__*/(0, React.forwardRef)(Tooltip);

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'rc-trigger': _req6,
        './placements': _req7,
        './Popup': _req8
      }));
    }
  };
});
//# sourceMappingURL=0c7bf9b169755227a280f471b8227b7f993be013.js.map