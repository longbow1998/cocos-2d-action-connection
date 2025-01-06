System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/KeyCode", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react2) {
      _req1 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req2 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = usePickerInput;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _uiUtil = require("../utils/uiUtil");

        function usePickerInput(_ref) {
          var open = _ref.open,
              value = _ref.value,
              isClickOutside = _ref.isClickOutside,
              triggerOpen = _ref.triggerOpen,
              forwardKeyDown = _ref.forwardKeyDown,
              _onKeyDown = _ref.onKeyDown,
              blurToCancel = _ref.blurToCancel,
              onSubmit = _ref.onSubmit,
              onCancel = _ref.onCancel,
              _onFocus = _ref.onFocus,
              _onBlur = _ref.onBlur,
              currentFocusedKey = _ref.currentFocusedKey,
              _ref$key = _ref.key,
              key = _ref$key === void 0 ? 'start' : _ref$key;

          var _useState = (0, _react.useState)(false),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              typing = _useState2[0],
              setTyping = _useState2[1];

          var _useState3 = (0, _react.useState)(false),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              focused = _useState4[0],
              setFocused = _useState4[1];

          var delayBlurTimer = (0, _react.useRef)();
          /**
           * We will prevent blur to handle open event when user click outside,
           * since this will repeat trigger `onOpenChange` event.
           */

          var preventBlurRef = (0, _react.useRef)(false);
          var valueChangedRef = (0, _react.useRef)(false);
          var preventDefaultRef = (0, _react.useRef)(false);
          var inputProps = {
            onMouseDown: function onMouseDown() {
              setTyping(true);
              triggerOpen(true);
            },
            onKeyDown: function onKeyDown(e) {
              var preventDefault = function preventDefault() {
                preventDefaultRef.current = true;
              };

              _onKeyDown(e, preventDefault);

              if (preventDefaultRef.current) return;

              switch (e.which) {
                case _KeyCode.default.ENTER:
                  {
                    if (!open) {
                      triggerOpen(true);
                    } else if (onSubmit() !== false) {
                      setTyping(true);
                    }

                    e.preventDefault();
                    return;
                  }

                case _KeyCode.default.TAB:
                  {
                    if (typing && open && !e.shiftKey) {
                      setTyping(false);
                      e.preventDefault();
                    } else if (!typing && open) {
                      if (!forwardKeyDown(e) && e.shiftKey) {
                        setTyping(true);
                        e.preventDefault();
                      }
                    }

                    return;
                  }

                case _KeyCode.default.ESC:
                  {
                    setTyping(true);
                    onCancel();
                    return;
                  }
              }

              if (!open && ![_KeyCode.default.SHIFT].includes(e.which)) {
                triggerOpen(true);
              } else if (!typing) {
                // Let popup panel handle keyboard
                forwardKeyDown(e);
              }
            },
            onFocus: function onFocus(e) {
              setTyping(true);
              setFocused(true);

              if (currentFocusedKey) {
                currentFocusedKey.current = key;
              }

              clearTimeout(delayBlurTimer.current);

              if (_onFocus) {
                _onFocus(e);
              }
            },
            onBlur: function onBlur(e) {
              if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
                preventBlurRef.current = false;
                return;
              }

              if (blurToCancel) {
                setTimeout(function () {
                  var _document = document,
                      activeElement = _document.activeElement;

                  while (activeElement && activeElement.shadowRoot) {
                    activeElement = activeElement.shadowRoot.activeElement;
                  }

                  if (isClickOutside(activeElement)) {
                    onCancel();
                  }
                }, 0);
              } else if (open) {
                triggerOpen(false);

                if (valueChangedRef.current) {
                  onSubmit();
                }
              }

              setFocused(false);

              if (currentFocusedKey) {
                currentFocusedKey.current = ''; // Delay to prevent 'range' focus transitions from firing resulting in incorrect out-of-focus events

                delayBlurTimer.current = setTimeout(function () {
                  // Prevent the 'blur' event from firing when there is currently a focused input
                  if (currentFocusedKey.current) {
                    return;
                  }

                  _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
                }, 100);
              } else {
                _onBlur === null || _onBlur === void 0 ? void 0 : _onBlur(e);
              }
            }
          }; // check if value changed

          (0, _react.useEffect)(function () {
            valueChangedRef.current = false;
          }, [open]);
          (0, _react.useEffect)(function () {
            valueChangedRef.current = true;
          }, [value]); // Global click handler

          (0, _react.useEffect)(function () {
            return (0, _uiUtil.addGlobalMouseDownEvent)(function (e) {
              var target = (0, _uiUtil.getTargetFromEvent)(e);

              if (open) {
                var clickedOutside = isClickOutside(target);

                if (!clickedOutside) {
                  preventBlurRef.current = true; // Always set back in case `onBlur` prevented by user

                  requestAnimationFrame(function () {
                    preventBlurRef.current = false;
                  });
                } else if (!focused || clickedOutside) {
                  triggerOpen(false);
                }
              }
            });
          });
          (0, _react.useEffect)(function () {
            return function () {
              return clearTimeout(delayBlurTimer.current);
            };
          }, []);
          return [inputProps, {
            focused: focused,
            typing: typing
          }];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'react': _req1,
        'rc-util/lib/KeyCode': _req2,
        '../utils/uiUtil': _req3
      }));
    }
  };
});
//# sourceMappingURL=e4f957e415d734b2554815d074c48ba1e79c8eff.js.map