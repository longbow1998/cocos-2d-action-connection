System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "rc-motion", "__unresolved_1", "__unresolved_2", "rc-util/lib/KeyCode", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req7 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req10 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _DrawerPanel = _interopRequireDefault(require("./DrawerPanel"));

        var _context = _interopRequireDefault(require("./context"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _util = require("./util");

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

        var sentinelStyle = {
          width: 0,
          height: 0,
          overflow: 'hidden',
          outline: 'none',
          position: 'absolute'
        };

        function DrawerPopup(props, ref) {
          var _ref, _pushConfig$distance, _pushConfig, _classNames;

          var prefixCls = props.prefixCls,
              open = props.open,
              placement = props.placement,
              inline = props.inline,
              push = props.push,
              forceRender = props.forceRender,
              autoFocus = props.autoFocus,
              keyboard = props.keyboard,
              rootClassName = props.rootClassName,
              rootStyle = props.rootStyle,
              zIndex = props.zIndex,
              className = props.className,
              style = props.style,
              motion = props.motion,
              width = props.width,
              height = props.height,
              children = props.children,
              contentWrapperStyle = props.contentWrapperStyle,
              mask = props.mask,
              maskClosable = props.maskClosable,
              maskMotion = props.maskMotion,
              maskClassName = props.maskClassName,
              maskStyle = props.maskStyle,
              afterOpenChange = props.afterOpenChange,
              onClose = props.onClose; // ================================ Refs ================================

          var panelRef = React.useRef();
          var sentinelStartRef = React.useRef();
          var sentinelEndRef = React.useRef();
          React.useImperativeHandle(ref, function () {
            return panelRef.current;
          });

          var onPanelKeyDown = function onPanelKeyDown(event) {
            var keyCode = event.keyCode,
                shiftKey = event.shiftKey;

            switch (keyCode) {
              // Tab active
              case _KeyCode.default.TAB:
                {
                  if (keyCode === _KeyCode.default.TAB) {
                    if (!shiftKey && document.activeElement === sentinelEndRef.current) {
                      var _sentinelStartRef$cur;

                      (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus({
                        preventScroll: true
                      });
                    } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
                      var _sentinelEndRef$curre;

                      (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0 ? void 0 : _sentinelEndRef$curre.focus({
                        preventScroll: true
                      });
                    }
                  }

                  break;
                }
              // Close

              case _KeyCode.default.ESC:
                {
                  if (onClose && keyboard) {
                    event.stopPropagation();
                    onClose(event);
                  }

                  break;
                }
            }
          }; // ========================== Control ===========================
          // Auto Focus


          React.useEffect(function () {
            if (open && autoFocus) {
              var _panelRef$current;

              (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 ? void 0 : _panelRef$current.focus({
                preventScroll: true
              });
            }
          }, [open]); // ============================ Push ============================

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              pushed = _React$useState2[0],
              setPushed = _React$useState2[1];

          var parentContext = React.useContext(_context.default); // Merge push distance

          var pushConfig;

          if (push === false) {
            pushConfig = {
              distance: 0
            };
          } else if (push === true) {
            pushConfig = {};
          } else {
            pushConfig = push || {};
          }

          var pushDistance = (_ref = (_pushConfig$distance = (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null && _pushConfig$distance !== void 0 ? _pushConfig$distance : parentContext === null || parentContext === void 0 ? void 0 : parentContext.pushDistance) !== null && _ref !== void 0 ? _ref : 180;
          var mergedContext = React.useMemo(function () {
            return {
              pushDistance: pushDistance,
              push: function push() {
                setPushed(true);
              },
              pull: function pull() {
                setPushed(false);
              }
            };
          }, [pushDistance]); // ========================= ScrollLock =========================
          // Tell parent to push

          React.useEffect(function () {
            if (open) {
              var _parentContext$push;

              parentContext === null || parentContext === void 0 ? void 0 : (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0 ? void 0 : _parentContext$push.call(parentContext);
            } else {
              var _parentContext$pull;

              parentContext === null || parentContext === void 0 ? void 0 : (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0 ? void 0 : _parentContext$pull.call(parentContext);
            }
          }, [open]); // Clean up

          React.useEffect(function () {
            return function () {
              var _parentContext$pull2;

              parentContext === null || parentContext === void 0 ? void 0 : (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0 ? void 0 : _parentContext$pull2.call(parentContext);
            };
          }, []); // ============================ Mask ============================

          var maskNode = mask && /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
            key: "mask"
          }, maskMotion, {
            visible: open
          }), function (_ref2, maskRef) {
            var motionMaskClassName = _ref2.className,
                motionMaskStyle = _ref2.style;
            return /*#__PURE__*/React.createElement("div", {
              className: (0, _classnames.default)("".concat(prefixCls, "-mask"), motionMaskClassName, maskClassName),
              style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionMaskStyle), maskStyle),
              onClick: maskClosable && open ? onClose : undefined,
              ref: maskRef
            });
          }); // =========================== Panel ============================

          var motionProps = typeof motion === 'function' ? motion(placement) : motion;
          var wrapperStyle = {};

          if (pushed && pushDistance) {
            switch (placement) {
              case 'top':
                wrapperStyle.transform = "translateY(".concat(pushDistance, "px)");
                break;

              case 'bottom':
                wrapperStyle.transform = "translateY(".concat(-pushDistance, "px)");
                break;

              case 'left':
                wrapperStyle.transform = "translateX(".concat(pushDistance, "px)");
                break;

              default:
                wrapperStyle.transform = "translateX(".concat(-pushDistance, "px)");
                break;
            }
          }

          if (placement === 'left' || placement === 'right') {
            wrapperStyle.width = (0, _util.parseWidthHeight)(width);
          } else {
            wrapperStyle.height = (0, _util.parseWidthHeight)(height);
          }

          var panelNode = /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
            key: "panel"
          }, motionProps, {
            visible: open,
            forceRender: forceRender,
            onVisibleChanged: function onVisibleChanged(nextVisible) {
              afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(nextVisible);
            },
            removeOnLeave: false,
            leavedClassName: "".concat(prefixCls, "-content-wrapper-hidden")
          }), function (_ref3, motionRef) {
            var motionClassName = _ref3.className,
                motionStyle = _ref3.style;
            return /*#__PURE__*/React.createElement("div", {
              className: (0, _classnames.default)("".concat(prefixCls, "-content-wrapper"), motionClassName),
              style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, wrapperStyle), motionStyle), contentWrapperStyle)
            }, /*#__PURE__*/React.createElement(_DrawerPanel.default, {
              containerRef: motionRef,
              prefixCls: prefixCls,
              className: className,
              style: style
            }, children));
          }); // =========================== Render ===========================

          var containerStyle = (0, _objectSpread2.default)({}, rootStyle);

          if (zIndex) {
            containerStyle.zIndex = zIndex;
          }

          return /*#__PURE__*/React.createElement(_context.default.Provider, {
            value: mergedContext
          }, /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(placement), rootClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-open"), open), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-inline"), inline), _classNames)),
            style: containerStyle,
            tabIndex: -1,
            ref: panelRef,
            onKeyDown: onPanelKeyDown
          }, maskNode, /*#__PURE__*/React.createElement("div", {
            tabIndex: 0,
            ref: sentinelStartRef,
            style: sentinelStyle,
            "aria-hidden": "true",
            "data-sentinel": "start"
          }), panelNode, /*#__PURE__*/React.createElement("div", {
            tabIndex: 0,
            ref: sentinelEndRef,
            style: sentinelStyle,
            "aria-hidden": "true",
            "data-sentinel": "end"
          })));
        }

        var RefDrawerPopup = /*#__PURE__*/React.forwardRef(DrawerPopup);

        if (process.env.NODE_ENV !== 'production') {
          RefDrawerPopup.displayName = 'DrawerPopup';
        }

        var _default = RefDrawerPopup;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-motion': _req7,
        './DrawerPanel': _req8,
        './context': _req9,
        'rc-util/lib/KeyCode': _req10,
        './util': _req11
      }));
    }
  };
});
//# sourceMappingURL=2e9835a60c289ab92704cb1ff60f635013ad98c7.js.map