System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "rc-util/lib/KeyCode", "rc-util/lib/raf", "rc-util/lib/Dom/focus"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req2 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req3 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibDomFocus) {
      _req4 = _rcUtilLibDomFocus.__cjsMetaURL;
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
        exports.default = useAccessibility;

        var React = _interopRequireWildcard(require("react"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _focus = require("rc-util/lib/Dom/focus");

        var ESC = _KeyCode.default.ESC,
            TAB = _KeyCode.default.TAB;

        function useAccessibility(_ref) {
          var visible = _ref.visible,
              setTriggerVisible = _ref.setTriggerVisible,
              triggerRef = _ref.triggerRef,
              onVisibleChange = _ref.onVisibleChange,
              autoFocus = _ref.autoFocus;
          var focusMenuRef = React.useRef(false);

          var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
            if (visible && triggerRef.current) {
              var _triggerRef$current, _triggerRef$current$t, _triggerRef$current$t2, _triggerRef$current$t3;

              (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$t = _triggerRef$current.triggerRef) === null || _triggerRef$current$t === void 0 ? void 0 : (_triggerRef$current$t2 = _triggerRef$current$t.current) === null || _triggerRef$current$t2 === void 0 ? void 0 : (_triggerRef$current$t3 = _triggerRef$current$t2.focus) === null || _triggerRef$current$t3 === void 0 ? void 0 : _triggerRef$current$t3.call(_triggerRef$current$t2);
              setTriggerVisible(false);

              if (typeof onVisibleChange === 'function') {
                onVisibleChange(false);
              }
            }
          };

          var focusMenu = function focusMenu() {
            var _triggerRef$current2, _triggerRef$current2$, _triggerRef$current2$2, _triggerRef$current2$3;

            var elements = (0, _focus.getFocusNodeList)((_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : (_triggerRef$current2$ = _triggerRef$current2.popupRef) === null || _triggerRef$current2$ === void 0 ? void 0 : (_triggerRef$current2$2 = _triggerRef$current2$.current) === null || _triggerRef$current2$2 === void 0 ? void 0 : (_triggerRef$current2$3 = _triggerRef$current2$2.getElement) === null || _triggerRef$current2$3 === void 0 ? void 0 : _triggerRef$current2$3.call(_triggerRef$current2$2));
            var firstElement = elements[0];

            if (firstElement === null || firstElement === void 0 ? void 0 : firstElement.focus) {
              firstElement.focus();
              focusMenuRef.current = true;
              return true;
            }

            return false;
          };

          var handleKeyDown = function handleKeyDown(event) {
            switch (event.keyCode) {
              case ESC:
                handleCloseMenuAndReturnFocus();
                break;

              case TAB:
                {
                  var focusResult = false;

                  if (!focusMenuRef.current) {
                    focusResult = focusMenu();
                  }

                  if (focusResult) {
                    event.preventDefault();
                  } else {
                    handleCloseMenuAndReturnFocus();
                  }

                  break;
                }
            }
          };

          React.useEffect(function () {
            if (visible) {
              window.addEventListener('keydown', handleKeyDown);

              if (autoFocus) {
                // FIXME: hack with raf
                (0, _raf.default)(focusMenu, 3);
              }

              return function () {
                window.removeEventListener('keydown', handleKeyDown);
                focusMenuRef.current = false;
              };
            }

            return function () {
              focusMenuRef.current = false;
            };
          }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        'rc-util/lib/KeyCode': _req2,
        'rc-util/lib/raf': _req3,
        'rc-util/lib/Dom/focus': _req4
      }));
    }
  };
});
//# sourceMappingURL=239a18a2b5d7dc060c4e09a025b5a6bc4ca3f04a.js.map