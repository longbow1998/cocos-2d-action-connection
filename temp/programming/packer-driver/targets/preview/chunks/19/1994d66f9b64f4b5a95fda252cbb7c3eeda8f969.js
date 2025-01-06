System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "rc-util/lib/KeyCode", "rc-util/lib/hooks/useId", "rc-util/lib/Dom/contains", "rc-util/lib/pickAttrs", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req6 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseId) {
      _req7 = _rcUtilLibHooksUseId.__cjsMetaURL;
    }, function (_rcUtilLibDomContains) {
      _req8 = _rcUtilLibDomContains.__cjsMetaURL;
    }, function (_rcUtilLibPickAttrs) {
      _req9 = _rcUtilLibPickAttrs.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
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
        exports.default = Dialog;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _useId = _interopRequireDefault(require("rc-util/lib/hooks/useId"));

        var _contains = _interopRequireDefault(require("rc-util/lib/Dom/contains"));

        var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));

        var _Mask = _interopRequireDefault(require("./Mask"));

        var _util = require("../util");

        var _Content = _interopRequireDefault(require("./Content"));

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

        function Dialog(props) {
          var _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
              zIndex = props.zIndex,
              _props$visible = props.visible,
              visible = _props$visible === void 0 ? false : _props$visible,
              _props$keyboard = props.keyboard,
              keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
              _props$focusTriggerAf = props.focusTriggerAfterClose,
              focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
              wrapStyle = props.wrapStyle,
              wrapClassName = props.wrapClassName,
              wrapProps = props.wrapProps,
              onClose = props.onClose,
              afterClose = props.afterClose,
              transitionName = props.transitionName,
              animation = props.animation,
              _props$closable = props.closable,
              closable = _props$closable === void 0 ? true : _props$closable,
              _props$mask = props.mask,
              mask = _props$mask === void 0 ? true : _props$mask,
              maskTransitionName = props.maskTransitionName,
              maskAnimation = props.maskAnimation,
              _props$maskClosable = props.maskClosable,
              maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
              maskStyle = props.maskStyle,
              maskProps = props.maskProps,
              rootClassName = props.rootClassName;
          var lastOutSideActiveElementRef = (0, React.useRef)();
          var wrapperRef = (0, React.useRef)();
          var contentRef = (0, React.useRef)();

          var _React$useState = React.useState(visible),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              animatedVisible = _React$useState2[0],
              setAnimatedVisible = _React$useState2[1]; // ========================== Init ==========================


          var ariaId = (0, _useId.default)();

          function saveLastOutSideActiveElementRef() {
            if (!(0, _contains.default)(wrapperRef.current, document.activeElement)) {
              lastOutSideActiveElementRef.current = document.activeElement;
            }
          }

          function focusDialogContent() {
            if (!(0, _contains.default)(wrapperRef.current, document.activeElement)) {
              var _contentRef$current;

              (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.focus();
            }
          } // ========================= Events =========================


          function onDialogVisibleChanged(newVisible) {
            // Try to focus
            if (newVisible) {
              focusDialogContent();
            } else {
              // Clean up scroll bar & focus back
              setAnimatedVisible(false);

              if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
                try {
                  lastOutSideActiveElementRef.current.focus({
                    preventScroll: true
                  });
                } catch (e) {// Do nothing
                }

                lastOutSideActiveElementRef.current = null;
              } // Trigger afterClose only when change visible from true to false


              if (animatedVisible) {
                afterClose === null || afterClose === void 0 ? void 0 : afterClose();
              }
            }
          }

          function onInternalClose(e) {
            onClose === null || onClose === void 0 ? void 0 : onClose(e);
          } // >>> Content


          var contentClickRef = (0, React.useRef)(false);
          var contentTimeoutRef = (0, React.useRef)(); // We need record content click incase content popup out of dialog

          var onContentMouseDown = function onContentMouseDown() {
            clearTimeout(contentTimeoutRef.current);
            contentClickRef.current = true;
          };

          var onContentMouseUp = function onContentMouseUp() {
            contentTimeoutRef.current = setTimeout(function () {
              contentClickRef.current = false;
            });
          }; // >>> Wrapper
          // Close only when element not on dialog


          var onWrapperClick = null;

          if (maskClosable) {
            onWrapperClick = function onWrapperClick(e) {
              if (contentClickRef.current) {
                contentClickRef.current = false;
              } else if (wrapperRef.current === e.target) {
                onInternalClose(e);
              }
            };
          }

          function onWrapperKeyDown(e) {
            if (keyboard && e.keyCode === _KeyCode.default.ESC) {
              e.stopPropagation();
              onInternalClose(e);
              return;
            } // keep focus inside dialog


            if (visible) {
              if (e.keyCode === _KeyCode.default.TAB) {
                contentRef.current.changeActive(!e.shiftKey);
              }
            }
          } // ========================= Effect =========================


          (0, React.useEffect)(function () {
            if (visible) {
              setAnimatedVisible(true);
              saveLastOutSideActiveElementRef();
            }
          }, [visible]); // Remove direct should also check the scroll bar update

          (0, React.useEffect)(function () {
            return function () {
              clearTimeout(contentTimeoutRef.current);
            };
          }, []); // ========================= Render =========================

          return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
            className: (0, _classnames.default)("".concat(prefixCls, "-root"), rootClassName)
          }, (0, _pickAttrs.default)(props, {
            data: true
          })), /*#__PURE__*/React.createElement(_Mask.default, {
            prefixCls: prefixCls,
            visible: mask && visible,
            motionName: (0, _util.getMotionName)(prefixCls, maskTransitionName, maskAnimation),
            style: (0, _objectSpread2.default)({
              zIndex: zIndex
            }, maskStyle),
            maskProps: maskProps
          }), /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
            tabIndex: -1,
            onKeyDown: onWrapperKeyDown,
            className: (0, _classnames.default)("".concat(prefixCls, "-wrap"), wrapClassName),
            ref: wrapperRef,
            onClick: onWrapperClick,
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({
              zIndex: zIndex
            }, wrapStyle), {}, {
              display: !animatedVisible ? 'none' : null
            })
          }, wrapProps), /*#__PURE__*/React.createElement(_Content.default, (0, _extends2.default)({}, props, {
            onMouseDown: onContentMouseDown,
            onMouseUp: onContentMouseUp,
            ref: contentRef,
            closable: closable,
            ariaId: ariaId,
            prefixCls: prefixCls,
            visible: visible && animatedVisible,
            onClose: onInternalClose,
            onVisibleChanged: onDialogVisibleChanged,
            motionName: (0, _util.getMotionName)(prefixCls, transitionName, animation)
          }))));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'classnames': _req5,
        'rc-util/lib/KeyCode': _req6,
        'rc-util/lib/hooks/useId': _req7,
        'rc-util/lib/Dom/contains': _req8,
        'rc-util/lib/pickAttrs': _req9,
        './Mask': _req10,
        '../util': _req11,
        './Content': _req12
      }));
    }
  };
});
//# sourceMappingURL=1994d66f9b64f4b5a95fda252cbb7c3eeda8f969.js.map