System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/VerticalAlignTopOutlined", "classnames", "rc-motion", "rc-util/lib/Dom/addEventListener", "rc-util/lib/hooks/useMergedState", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsVerticalAlignTopOutlined) {
      _req4 = _antDesignIconsVerticalAlignTopOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req6 = _rcMotion2.__cjsMetaURL;
    }, function (_rcUtilLibDomAddEventListener) {
      _req7 = _rcUtilLibDomAddEventListener.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req8 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req9 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req14 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req15 = _unresolved_6.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _VerticalAlignTopOutlined = _interopRequireDefault(require("@ant-design/icons/VerticalAlignTopOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _getScroll = _interopRequireDefault(require("../_util/getScroll"));

        var _reactNode = require("../_util/reactNode");

        var _scrollTo = _interopRequireDefault(require("../_util/scrollTo"));

        var _throttleByAnimationFrame = require("../_util/throttleByAnimationFrame");

        var BackTopContent = function BackTopContent(props) {
          var prefixCls = props.prefixCls,
              rootPrefixCls = props.rootPrefixCls,
              children = props.children,
              visible = props.visible;
          var defaultElement = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-icon")
          }, /*#__PURE__*/React.createElement(_VerticalAlignTopOutlined["default"], null)));
          return /*#__PURE__*/React.createElement(_rcMotion["default"], {
            visible: visible,
            motionName: "".concat(rootPrefixCls, "-fade")
          }, function (_ref) {
            var motionClassName = _ref.className;
            return (0, _reactNode.cloneElement)(children || defaultElement, function (_ref2) {
              var className = _ref2.className;
              return {
                className: (0, _classnames["default"])(motionClassName, className)
              };
            });
          });
        };

        var BackTop = function BackTop(props) {
          var _useMergedState = (0, _useMergedState3["default"])(false, {
            value: props.visible
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              visible = _useMergedState2[0],
              setVisible = _useMergedState2[1];

          var ref = /*#__PURE__*/React.createRef();
          var scrollEvent = React.useRef(null);

          var getDefaultTarget = function getDefaultTarget() {
            return ref.current && ref.current.ownerDocument ? ref.current.ownerDocument : window;
          };

          var handleScroll = (0, _throttleByAnimationFrame.throttleByAnimationFrame)(function (e) {
            var _props$visibilityHeig = props.visibilityHeight,
                visibilityHeight = _props$visibilityHeig === void 0 ? 400 : _props$visibilityHeig;
            var scrollTop = (0, _getScroll["default"])(e.target, true);
            setVisible(scrollTop > visibilityHeight);
          });

          var bindScrollEvent = function bindScrollEvent() {
            var target = props.target;
            var getTarget = target || getDefaultTarget;
            var container = getTarget();
            scrollEvent.current = (0, _addEventListener["default"])(container, 'scroll', function (e) {
              handleScroll(e);
            });
            handleScroll({
              target: container
            });
          };

          React.useEffect(function () {
            bindScrollEvent();
            return function () {
              if (scrollEvent.current) {
                scrollEvent.current.remove();
              }

              handleScroll.cancel();
            };
          }, [props.target]);

          var scrollToTop = function scrollToTop(e) {
            var onClick = props.onClick,
                target = props.target,
                _props$duration = props.duration,
                duration = _props$duration === void 0 ? 450 : _props$duration;
            (0, _scrollTo["default"])(0, {
              getContainer: target || getDefaultTarget,
              duration: duration
            });

            if (typeof onClick === 'function') {
              onClick(e);
            }
          };

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className;
          var prefixCls = getPrefixCls('back-top', customizePrefixCls);
          var rootPrefixCls = getPrefixCls();
          var classString = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className); // fix https://fb.me/react-unknown-prop

          var divProps = (0, _omit["default"])(props, ['prefixCls', 'className', 'children', 'visibilityHeight', 'target', 'visible']);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, divProps, {
            className: classString,
            onClick: scrollToTop,
            ref: ref
          }), /*#__PURE__*/React.createElement(BackTopContent, {
            prefixCls: prefixCls,
            rootPrefixCls: rootPrefixCls,
            visible: visible
          }, props.children));
        };

        var _default = /*#__PURE__*/React.memo(BackTop);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@ant-design/icons/VerticalAlignTopOutlined': _req4,
        'classnames': _req5,
        'rc-motion': _req6,
        'rc-util/lib/Dom/addEventListener': _req7,
        'rc-util/lib/hooks/useMergedState': _req8,
        'rc-util/lib/omit': _req9,
        'react': _req10,
        '../config-provider': _req11,
        '../_util/getScroll': _req12,
        '../_util/reactNode': _req13,
        '../_util/scrollTo': _req14,
        '../_util/throttleByAnimationFrame': _req15
      }));
    }
  };
});
//# sourceMappingURL=ca98b4da0f5b234331d032c2fea16571f1f410c7.js.map