System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/hooks/useState", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req5 = _rcUtilLibHooksUseState.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
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
        exports.default = useStatus;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _useState7 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));

        var _interface = require("../interface");

        var _useStepQueue3 = _interopRequireWildcard(require("./useStepQueue"));

        var _useDomMotionEvents3 = _interopRequireDefault(require("./useDomMotionEvents"));

        var _useIsomorphicLayoutEffect = _interopRequireDefault(require("./useIsomorphicLayoutEffect"));

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

        function useStatus(supportMotion, visible, getElement, _ref) {
          var _ref$motionEnter = _ref.motionEnter,
              motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
              _ref$motionAppear = _ref.motionAppear,
              motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
              _ref$motionLeave = _ref.motionLeave,
              motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
              motionDeadline = _ref.motionDeadline,
              motionLeaveImmediately = _ref.motionLeaveImmediately,
              onAppearPrepare = _ref.onAppearPrepare,
              onEnterPrepare = _ref.onEnterPrepare,
              onLeavePrepare = _ref.onLeavePrepare,
              onAppearStart = _ref.onAppearStart,
              onEnterStart = _ref.onEnterStart,
              onLeaveStart = _ref.onLeaveStart,
              onAppearActive = _ref.onAppearActive,
              onEnterActive = _ref.onEnterActive,
              onLeaveActive = _ref.onLeaveActive,
              onAppearEnd = _ref.onAppearEnd,
              onEnterEnd = _ref.onEnterEnd,
              onLeaveEnd = _ref.onLeaveEnd,
              onVisibleChanged = _ref.onVisibleChanged; // Used for outer render usage to avoid `visible: false & status: none` to render nothing

          var _useState = (0, _useState7.default)(),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              asyncVisible = _useState2[0],
              setAsyncVisible = _useState2[1];

          var _useState3 = (0, _useState7.default)(_interface.STATUS_NONE),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              status = _useState4[0],
              setStatus = _useState4[1];

          var _useState5 = (0, _useState7.default)(null),
              _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
              style = _useState6[0],
              setStyle = _useState6[1];

          var mountedRef = (0, React.useRef)(false);
          var deadlineRef = (0, React.useRef)(null); // =========================== Dom Node ===========================

          function getDomElement() {
            return getElement();
          } // ========================== Motion End ==========================


          var activeRef = (0, React.useRef)(false);

          function onInternalMotionEnd(event) {
            var element = getDomElement();

            if (event && !event.deadline && event.target !== element) {
              // event exists
              // not initiated by deadline
              // transitionEnd not fired by inner elements
              return;
            }

            var currentActive = activeRef.current;
            var canEnd;

            if (status === _interface.STATUS_APPEAR && currentActive) {
              canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
            } else if (status === _interface.STATUS_ENTER && currentActive) {
              canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
            } else if (status === _interface.STATUS_LEAVE && currentActive) {
              canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
            } // Only update status when `canEnd` and not destroyed


            if (status !== _interface.STATUS_NONE && currentActive && canEnd !== false) {
              setStatus(_interface.STATUS_NONE, true);
              setStyle(null, true);
            }
          }

          var _useDomMotionEvents = (0, _useDomMotionEvents3.default)(onInternalMotionEnd),
              _useDomMotionEvents2 = (0, _slicedToArray2.default)(_useDomMotionEvents, 1),
              patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


          var eventHandlers = React.useMemo(function () {
            var _ref2, _ref3, _ref4;

            switch (status) {
              case _interface.STATUS_APPEAR:
                return _ref2 = {}, (0, _defineProperty2.default)(_ref2, _interface.STEP_PREPARE, onAppearPrepare), (0, _defineProperty2.default)(_ref2, _interface.STEP_START, onAppearStart), (0, _defineProperty2.default)(_ref2, _interface.STEP_ACTIVE, onAppearActive), _ref2;

              case _interface.STATUS_ENTER:
                return _ref3 = {}, (0, _defineProperty2.default)(_ref3, _interface.STEP_PREPARE, onEnterPrepare), (0, _defineProperty2.default)(_ref3, _interface.STEP_START, onEnterStart), (0, _defineProperty2.default)(_ref3, _interface.STEP_ACTIVE, onEnterActive), _ref3;

              case _interface.STATUS_LEAVE:
                return _ref4 = {}, (0, _defineProperty2.default)(_ref4, _interface.STEP_PREPARE, onLeavePrepare), (0, _defineProperty2.default)(_ref4, _interface.STEP_START, onLeaveStart), (0, _defineProperty2.default)(_ref4, _interface.STEP_ACTIVE, onLeaveActive), _ref4;

              default:
                return {};
            }
          }, [status]);

          var _useStepQueue = (0, _useStepQueue3.default)(status, function (newStep) {
            // Only prepare step can be skip
            if (newStep === _interface.STEP_PREPARE) {
              var onPrepare = eventHandlers[_interface.STEP_PREPARE];

              if (!onPrepare) {
                return _useStepQueue3.SkipStep;
              }

              return onPrepare(getDomElement());
            } // Rest step is sync update


            if (step in eventHandlers) {
              var _eventHandlers$step;

              setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
            }

            if (step === _interface.STEP_ACTIVE) {
              // Patch events when motion needed
              patchMotionEvents(getDomElement());

              if (motionDeadline > 0) {
                clearTimeout(deadlineRef.current);
                deadlineRef.current = setTimeout(function () {
                  onInternalMotionEnd({
                    deadline: true
                  });
                }, motionDeadline);
              }
            }

            return _useStepQueue3.DoStep;
          }),
              _useStepQueue2 = (0, _slicedToArray2.default)(_useStepQueue, 2),
              startStep = _useStepQueue2[0],
              step = _useStepQueue2[1];

          var active = (0, _useStepQueue3.isActive)(step);
          activeRef.current = active; // ============================ Status ============================
          // Update with new status

          (0, _useIsomorphicLayoutEffect.default)(function () {
            setAsyncVisible(visible);
            var isMounted = mountedRef.current;
            mountedRef.current = true;

            if (!supportMotion) {
              return;
            }

            var nextStatus; // Appear

            if (!isMounted && visible && motionAppear) {
              nextStatus = _interface.STATUS_APPEAR;
            } // Enter


            if (isMounted && visible && motionEnter) {
              nextStatus = _interface.STATUS_ENTER;
            } // Leave


            if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
              nextStatus = _interface.STATUS_LEAVE;
            } // Update to next status


            if (nextStatus) {
              setStatus(nextStatus);
              startStep();
            }
          }, [visible]); // ============================ Effect ============================
          // Reset when motion changed

          (0, React.useEffect)(function () {
            if ( // Cancel appear
            status === _interface.STATUS_APPEAR && !motionAppear || // Cancel enter
            status === _interface.STATUS_ENTER && !motionEnter || // Cancel leave
            status === _interface.STATUS_LEAVE && !motionLeave) {
              setStatus(_interface.STATUS_NONE);
            }
          }, [motionAppear, motionEnter, motionLeave]);
          (0, React.useEffect)(function () {
            return function () {
              mountedRef.current = false;
              clearTimeout(deadlineRef.current);
            };
          }, []); // Trigger `onVisibleChanged`

          var firstMountChangeRef = React.useRef(false);
          (0, React.useEffect)(function () {
            // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
            if (asyncVisible) {
              firstMountChangeRef.current = true;
            }

            if (asyncVisible !== undefined && status === _interface.STATUS_NONE) {
              // Skip first render is invisible since it's nothing changed
              if (firstMountChangeRef.current || asyncVisible) {
                onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
              }

              firstMountChangeRef.current = true;
            }
          }, [asyncVisible, status]); // ============================ Styles ============================

          var mergedStyle = style;

          if (eventHandlers[_interface.STEP_PREPARE] && step === _interface.STEP_START) {
            mergedStyle = (0, _objectSpread2.default)({
              transition: 'none'
            }, mergedStyle);
          }

          return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-util/lib/hooks/useState': _req5,
        '../interface': _req6,
        './useStepQueue': _req7,
        './useDomMotionEvents': _req8,
        './useIsomorphicLayoutEffect': _req9
      }));
    }
  };
});
//# sourceMappingURL=233f3625f7ac3b98fae307656409d18bd8886117.js.map