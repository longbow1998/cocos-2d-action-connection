System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "rc-trigger", "classnames", "rc-util/lib/raf", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcTrigger2) {
      _req5 = _rcTrigger2.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req7 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = PopupTrigger;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _MenuContext = require("../context/MenuContext");

        var _placements = require("../placements");

        var _motionUtil = require("../utils/motionUtil");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var popupPlacementMap = {
          horizontal: 'bottomLeft',
          vertical: 'rightTop',
          'vertical-left': 'rightTop',
          'vertical-right': 'leftTop'
        };

        function PopupTrigger(_ref) {
          var prefixCls = _ref.prefixCls,
              visible = _ref.visible,
              children = _ref.children,
              popup = _ref.popup,
              popupClassName = _ref.popupClassName,
              popupOffset = _ref.popupOffset,
              disabled = _ref.disabled,
              mode = _ref.mode,
              onVisibleChange = _ref.onVisibleChange;

          var _React$useContext = React.useContext(_MenuContext.MenuContext),
              getPopupContainer = _React$useContext.getPopupContainer,
              rtl = _React$useContext.rtl,
              subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
              subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
              builtinPlacements = _React$useContext.builtinPlacements,
              triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
              forceSubMenuRender = _React$useContext.forceSubMenuRender,
              rootClassName = _React$useContext.rootClassName,
              motion = _React$useContext.motion,
              defaultMotions = _React$useContext.defaultMotions;

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              innerVisible = _React$useState2[0],
              setInnerVisible = _React$useState2[1];

          var placement = rtl ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _placements.placementsRtl), builtinPlacements) : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _placements.placements), builtinPlacements);
          var popupPlacement = popupPlacementMap[mode];
          var targetMotion = (0, _motionUtil.getMotion)(mode, motion, defaultMotions);
          var targetMotionRef = React.useRef(targetMotion);

          if (mode !== 'inline') {
            /**
             * PopupTrigger is only used for vertical and horizontal types.
             * When collapsed is unfolded, the inline animation will destroy the vertical animation.
             */
            targetMotionRef.current = targetMotion;
          }

          var mergedMotion = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, targetMotionRef.current), {}, {
            leavedClassName: "".concat(prefixCls, "-hidden"),
            removeOnLeave: false,
            motionAppear: true
          }); // Delay to change visible

          var visibleRef = React.useRef();
          React.useEffect(function () {
            visibleRef.current = (0, _raf.default)(function () {
              setInnerVisible(visible);
            });
            return function () {
              _raf.default.cancel(visibleRef.current);
            };
          }, [visible]);
          return /*#__PURE__*/React.createElement(_rcTrigger.default, {
            prefixCls: prefixCls,
            popupClassName: (0, _classnames.default)("".concat(prefixCls, "-popup"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName, rootClassName),
            stretch: mode === 'horizontal' ? 'minWidth' : null,
            getPopupContainer: getPopupContainer,
            builtinPlacements: placement,
            popupPlacement: popupPlacement,
            popupVisible: innerVisible,
            popup: popup,
            popupAlign: popupOffset && {
              offset: popupOffset
            },
            action: disabled ? [] : [triggerSubMenuAction],
            mouseEnterDelay: subMenuOpenDelay,
            mouseLeaveDelay: subMenuCloseDelay,
            onPopupVisibleChange: onVisibleChange,
            forceRender: forceSubMenuRender,
            popupMotion: mergedMotion
          }, children);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-trigger': _req5,
        'classnames': _req6,
        'rc-util/lib/raf': _req7,
        '../context/MenuContext': _req8,
        '../placements': _req9,
        '../utils/motionUtil': _req10
      }));
    }
  };
});
//# sourceMappingURL=0a1238810e063b7b850be86511b43370cf103b1e.js.map