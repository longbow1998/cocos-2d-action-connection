System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-trigger", "classnames", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcTrigger2) {
      _req6 = _rcTrigger2.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _placements = _interopRequireDefault(require("./placements"));

        var _useAccessibility = _interopRequireDefault(require("./hooks/useAccessibility"));

        var _excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus"];

        function Dropdown(props, ref) {
          var _props$arrow = props.arrow,
              arrow = _props$arrow === void 0 ? false : _props$arrow,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
              transitionName = props.transitionName,
              animation = props.animation,
              align = props.align,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
              _props$placements = props.placements,
              placements = _props$placements === void 0 ? _placements.default : _props$placements,
              getPopupContainer = props.getPopupContainer,
              showAction = props.showAction,
              hideAction = props.hideAction,
              overlayClassName = props.overlayClassName,
              overlayStyle = props.overlayStyle,
              visible = props.visible,
              _props$trigger = props.trigger,
              trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
              autoFocus = props.autoFocus,
              otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);

          var _React$useState = React.useState(),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              triggerVisible = _React$useState2[0],
              setTriggerVisible = _React$useState2[1];

          var mergedVisible = 'visible' in props ? visible : triggerVisible;
          var triggerRef = React.useRef(null);
          React.useImperativeHandle(ref, function () {
            return triggerRef.current;
          });
          (0, _useAccessibility.default)({
            visible: mergedVisible,
            setTriggerVisible: setTriggerVisible,
            triggerRef: triggerRef,
            onVisibleChange: props.onVisibleChange,
            autoFocus: autoFocus
          });

          var getOverlayElement = function getOverlayElement() {
            var overlay = props.overlay;
            var overlayElement;

            if (typeof overlay === 'function') {
              overlayElement = overlay();
            } else {
              overlayElement = overlay;
            }

            return overlayElement;
          };

          var onClick = function onClick(e) {
            var onOverlayClick = props.onOverlayClick;
            setTriggerVisible(false);

            if (onOverlayClick) {
              onOverlayClick(e);
            }
          };

          var onVisibleChange = function onVisibleChange(newVisible) {
            var onVisibleChangeProp = props.onVisibleChange;
            setTriggerVisible(newVisible);

            if (typeof onVisibleChangeProp === 'function') {
              onVisibleChangeProp(newVisible);
            }
          };

          var getMenuElement = function getMenuElement() {
            var overlayElement = getOverlayElement();
            return /*#__PURE__*/React.createElement(React.Fragment, null, arrow && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-arrow")
            }), overlayElement);
          };

          var getMenuElementOrLambda = function getMenuElementOrLambda() {
            var overlay = props.overlay;

            if (typeof overlay === 'function') {
              return getMenuElement;
            }

            return getMenuElement();
          };

          var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
            var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
                alignPoint = props.alignPoint;

            if ('minOverlayWidthMatchTrigger' in props) {
              return minOverlayWidthMatchTrigger;
            }

            return !alignPoint;
          };

          var getOpenClassName = function getOpenClassName() {
            var openClassName = props.openClassName;

            if (openClassName !== undefined) {
              return openClassName;
            }

            return "".concat(prefixCls, "-open");
          };

          var renderChildren = function renderChildren() {
            var children = props.children;
            var childrenProps = children.props ? children.props : {};
            var childClassName = (0, _classnames.default)(childrenProps.className, getOpenClassName());
            return mergedVisible && children ? /*#__PURE__*/React.cloneElement(children, {
              className: childClassName
            }) : children;
          };

          var triggerHideAction = hideAction;

          if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
            triggerHideAction = ['click'];
          }

          return /*#__PURE__*/React.createElement(_rcTrigger.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            builtinPlacements: placements
          }, otherProps), {}, {
            prefixCls: prefixCls,
            ref: triggerRef,
            popupClassName: (0, _classnames.default)(overlayClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
            popupStyle: overlayStyle,
            action: trigger,
            showAction: showAction,
            hideAction: triggerHideAction || [],
            popupPlacement: placement,
            popupAlign: align,
            popupTransitionName: transitionName,
            popupAnimation: animation,
            popupVisible: mergedVisible,
            stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
            popup: getMenuElementOrLambda(),
            onPopupVisibleChange: onVisibleChange,
            onPopupClick: onClick,
            getPopupContainer: getPopupContainer
          }), renderChildren());
        }

        var _default = /*#__PURE__*/React.forwardRef(Dropdown);

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'rc-trigger': _req6,
        'classnames': _req7,
        './placements': _req8,
        './hooks/useAccessibility': _req9
      }));
    }
  };
});
//# sourceMappingURL=e30701ab4fa9f35eb2d6aa8dd55823c5b087dc46.js.map