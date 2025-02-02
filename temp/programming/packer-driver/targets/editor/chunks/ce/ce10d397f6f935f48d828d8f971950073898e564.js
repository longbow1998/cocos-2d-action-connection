System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-dialog", "classnames", "rc-util/lib/Dom/addEventListener", "rc-util/lib/KeyCode", "rc-util/lib/warning", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req5 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react2) {
      _req6 = _react2.__cjsMetaURL;
    }, function (_rcDialog2) {
      _req7 = _rcDialog2.__cjsMetaURL;
    }, function (_classnames) {
      _req8 = _classnames.__cjsMetaURL;
    }, function (_rcUtilLibDomAddEventListener) {
      _req9 = _rcUtilLibDomAddEventListener.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req10 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req11 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
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
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _react = _interopRequireWildcard(require("react"));

        var _rcDialog = _interopRequireDefault(require("rc-dialog"));

        var _classnames2 = _interopRequireDefault(require("classnames"));

        var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _warning = require("rc-util/lib/warning");

        var _PreviewGroup = require("./PreviewGroup");

        var _Operations = _interopRequireDefault(require("./Operations"));

        var _useImageTransform2 = _interopRequireDefault(require("./hooks/useImageTransform"));

        var _getFixScaleEleTransPosition = _interopRequireDefault(require("./getFixScaleEleTransPosition"));

        var _previewConfig = require("./previewConfig");

        var _excluded = ["prefixCls", "src", "alt", "onClose", "afterClose", "visible", "icons", "rootClassName", "getContainer", "countRender", "scaleStep", "transitionName", "maskTransitionName"];

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

        var Preview = function Preview(props) {
          var prefixCls = props.prefixCls,
              src = props.src,
              alt = props.alt,
              onClose = props.onClose,
              afterClose = props.afterClose,
              visible = props.visible,
              _props$icons = props.icons,
              icons = _props$icons === void 0 ? {} : _props$icons,
              rootClassName = props.rootClassName,
              getContainer = props.getContainer,
              countRender = props.countRender,
              _props$scaleStep = props.scaleStep,
              scaleStep = _props$scaleStep === void 0 ? 0.5 : _props$scaleStep,
              _props$transitionName = props.transitionName,
              transitionName = _props$transitionName === void 0 ? 'zoom' : _props$transitionName,
              _props$maskTransition = props.maskTransitionName,
              maskTransitionName = _props$maskTransition === void 0 ? 'fade' : _props$maskTransition,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var imgRef = (0, _react.useRef)();
          var downPositionRef = (0, _react.useRef)({
            deltaX: 0,
            deltaY: 0,
            transformX: 0,
            transformY: 0
          });

          var _useState = (0, _react.useState)(false),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              isMoving = _useState2[0],
              setMoving = _useState2[1];

          var _useContext = (0, _react.useContext)(_PreviewGroup.context),
              previewUrls = _useContext.previewUrls,
              current = _useContext.current,
              isPreviewGroup = _useContext.isPreviewGroup,
              setCurrent = _useContext.setCurrent;

          var previewGroupCount = previewUrls.size;
          var previewUrlsKeys = Array.from(previewUrls.keys());
          var currentPreviewIndex = previewUrlsKeys.indexOf(current);
          var combinationSrc = isPreviewGroup ? previewUrls.get(current) : src;
          var showLeftOrRightSwitches = isPreviewGroup && previewGroupCount > 1;
          var showOperationsProgress = isPreviewGroup && previewGroupCount >= 1;

          var _useImageTransform = (0, _useImageTransform2.default)(imgRef),
              transform = _useImageTransform.transform,
              resetTransform = _useImageTransform.resetTransform,
              updateTransform = _useImageTransform.updateTransform,
              dispatchZoonChange = _useImageTransform.dispatchZoonChange;

          var rotate = transform.rotate,
              scale = transform.scale;
          var wrapClassName = (0, _classnames2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-moving"), isMoving));

          var onAfterClose = function onAfterClose() {
            resetTransform();
          };

          var onZoomIn = function onZoomIn() {
            dispatchZoonChange(_previewConfig.BASE_SCALE_RATIO + scaleStep);
          };

          var onZoomOut = function onZoomOut() {
            dispatchZoonChange(_previewConfig.BASE_SCALE_RATIO - scaleStep);
          };

          var onRotateRight = function onRotateRight() {
            updateTransform({
              rotate: rotate + 90
            });
          };

          var onRotateLeft = function onRotateLeft() {
            updateTransform({
              rotate: rotate - 90
            });
          };

          var onSwitchLeft = function onSwitchLeft(event) {
            event.preventDefault();
            event.stopPropagation();

            if (currentPreviewIndex > 0) {
              setCurrent(previewUrlsKeys[currentPreviewIndex - 1]);
            }
          };

          var onSwitchRight = function onSwitchRight(event) {
            event.preventDefault();
            event.stopPropagation();

            if (currentPreviewIndex < previewGroupCount - 1) {
              setCurrent(previewUrlsKeys[currentPreviewIndex + 1]);
            }
          };

          var onMouseUp = function onMouseUp() {
            if (visible && isMoving) {
              setMoving(false);
              /** No need to restore the position when the picture is not moved, So as not to interfere with the click */

              var _downPositionRef$curr = downPositionRef.current,
                  transformX = _downPositionRef$curr.transformX,
                  transformY = _downPositionRef$curr.transformY;
              var hasChangedPosition = transform.x !== transformX && transform.y !== transformY;

              if (!hasChangedPosition) {
                return;
              }

              var width = imgRef.current.offsetWidth * scale;
              var height = imgRef.current.offsetHeight * scale; // eslint-disable-next-line @typescript-eslint/no-shadow

              var _imgRef$current$getBo = imgRef.current.getBoundingClientRect(),
                  left = _imgRef$current$getBo.left,
                  top = _imgRef$current$getBo.top;

              var isRotate = rotate % 180 !== 0;
              var fixState = (0, _getFixScaleEleTransPosition.default)(isRotate ? height : width, isRotate ? width : height, left, top);

              if (fixState) {
                updateTransform((0, _objectSpread2.default)({}, fixState));
              }
            }
          };

          var onMouseDown = function onMouseDown(event) {
            // Only allow main button
            if (event.button !== 0) return;
            event.preventDefault();
            event.stopPropagation();
            downPositionRef.current = {
              deltaX: event.pageX - transform.x,
              deltaY: event.pageY - transform.y,
              transformX: transform.x,
              transformY: transform.y
            };
            setMoving(true);
          };

          var onMouseMove = function onMouseMove(event) {
            if (visible && isMoving) {
              updateTransform({
                x: event.pageX - downPositionRef.current.deltaX,
                y: event.pageY - downPositionRef.current.deltaY
              });
            }
          };

          var onWheel = function onWheel(event) {
            if (!visible || event.deltaY == 0) return; // Scale ratio depends on the deltaY size

            var scaleRatio = Math.abs(event.deltaY / 100); // Limit the maximum scale ratio

            var mergedScaleRatio = Math.min(scaleRatio, _previewConfig.WHEEL_MAX_SCALE_RATIO); // Scale the ratio each time

            var ratio = _previewConfig.BASE_SCALE_RATIO + mergedScaleRatio * scaleStep;

            if (event.deltaY > 0) {
              ratio = _previewConfig.BASE_SCALE_RATIO / ratio;
            }

            dispatchZoonChange(ratio, event.clientX, event.clientY);
          };

          var onKeyDown = (0, _react.useCallback)(function (event) {
            if (!visible || !showLeftOrRightSwitches) return;

            if (event.keyCode === _KeyCode.default.LEFT) {
              if (currentPreviewIndex > 0) {
                setCurrent(previewUrlsKeys[currentPreviewIndex - 1]);
              }
            } else if (event.keyCode === _KeyCode.default.RIGHT) {
              if (currentPreviewIndex < previewGroupCount - 1) {
                setCurrent(previewUrlsKeys[currentPreviewIndex + 1]);
              }
            }
          }, [currentPreviewIndex, previewGroupCount, previewUrlsKeys, setCurrent, showLeftOrRightSwitches, visible]);

          var onDoubleClick = function onDoubleClick(event) {
            if (visible) {
              if (scale !== 1) {
                updateTransform({
                  x: 0,
                  y: 0,
                  scale: 1
                });
              } else {
                dispatchZoonChange(_previewConfig.BASE_SCALE_RATIO + scaleStep, event.clientX, event.clientY);
              }
            }
          };

          (0, _react.useEffect)(function () {
            var onTopMouseUpListener;
            var onTopMouseMoveListener;
            var onMouseUpListener = (0, _addEventListener.default)(window, 'mouseup', onMouseUp, false);
            var onMouseMoveListener = (0, _addEventListener.default)(window, 'mousemove', onMouseMove, false);
            var onKeyDownListener = (0, _addEventListener.default)(window, 'keydown', onKeyDown, false);

            try {
              // Resolve if in iframe lost event

              /* istanbul ignore next */
              if (window.top !== window.self) {
                onTopMouseUpListener = (0, _addEventListener.default)(window.top, 'mouseup', onMouseUp, false);
                onTopMouseMoveListener = (0, _addEventListener.default)(window.top, 'mousemove', onMouseMove, false);
              }
            } catch (error) {
              /* istanbul ignore next */
              (0, _warning.warning)(false, "[rc-image] ".concat(error));
            }

            return function () {
              var _onTopMouseUpListener, _onTopMouseMoveListen;

              onMouseUpListener.remove();
              onMouseMoveListener.remove();
              onKeyDownListener.remove();
              /* istanbul ignore next */

              (_onTopMouseUpListener = onTopMouseUpListener) === null || _onTopMouseUpListener === void 0 ? void 0 : _onTopMouseUpListener.remove();
              /* istanbul ignore next */

              (_onTopMouseMoveListen = onTopMouseMoveListener) === null || _onTopMouseMoveListen === void 0 ? void 0 : _onTopMouseMoveListen.remove();
            };
          }, [visible, isMoving, onKeyDown]);
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_rcDialog.default, (0, _extends2.default)({
            transitionName: transitionName,
            maskTransitionName: maskTransitionName,
            closable: false,
            keyboard: true,
            prefixCls: prefixCls,
            onClose: onClose,
            afterClose: onAfterClose,
            visible: visible,
            wrapClassName: wrapClassName,
            rootClassName: rootClassName,
            getContainer: getContainer
          }, restProps), /*#__PURE__*/_react.default.createElement("div", {
            className: "".concat(prefixCls, "-img-wrapper")
          }, /*#__PURE__*/_react.default.createElement("img", {
            width: props.width,
            height: props.height,
            onWheel: onWheel,
            onMouseDown: onMouseDown,
            onDoubleClick: onDoubleClick,
            ref: imgRef,
            className: "".concat(prefixCls, "-img"),
            src: combinationSrc,
            alt: alt,
            style: {
              transform: "translate3d(".concat(transform.x, "px, ").concat(transform.y, "px, 0) scale3d(").concat(scale, ", ").concat(scale, ", 1) rotate(").concat(rotate, "deg)")
            }
          }))), /*#__PURE__*/_react.default.createElement(_Operations.default, {
            visible: visible,
            maskTransitionName: maskTransitionName,
            getContainer: getContainer,
            prefixCls: prefixCls,
            rootClassName: rootClassName,
            icons: icons,
            countRender: countRender,
            showSwitch: showLeftOrRightSwitches,
            showProgress: showOperationsProgress,
            current: currentPreviewIndex,
            count: previewGroupCount,
            scale: scale,
            onSwitchLeft: onSwitchLeft,
            onSwitchRight: onSwitchRight,
            onZoomIn: onZoomIn,
            onZoomOut: onZoomOut,
            onRotateRight: onRotateRight,
            onRotateLeft: onRotateLeft,
            onClose: onClose
          }));
        };

        var _default = Preview;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/objectWithoutProperties': _req5,
        'react': _req6,
        'rc-dialog': _req7,
        'classnames': _req8,
        'rc-util/lib/Dom/addEventListener': _req9,
        'rc-util/lib/KeyCode': _req10,
        'rc-util/lib/warning': _req11,
        './PreviewGroup': _req12,
        './Operations': _req13,
        './hooks/useImageTransform': _req14,
        './getFixScaleEleTransPosition': _req15,
        './previewConfig': _req16
      }));
    }
  };
});
//# sourceMappingURL=ce10d397f6f935f48d828d8f971950073898e564.js.map