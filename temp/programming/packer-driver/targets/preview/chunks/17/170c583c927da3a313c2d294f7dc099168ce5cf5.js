System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "rc-util/lib/hooks/useState", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req3 = _rcUtilLibHooksUseState.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _useState3 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var _button2 = require("../button/button");

        function isThenable(thing) {
          return !!(thing && !!thing.then);
        }

        var ActionButton = function ActionButton(props) {
          var clickedRef = React.useRef(false);
          var ref = React.useRef(null);

          var _useState = (0, _useState3["default"])(false),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              loading = _useState2[0],
              setLoading = _useState2[1];

          var close = props.close;

          var onInternalClose = function onInternalClose() {
            close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
          };

          React.useEffect(function () {
            var timeoutId = null;

            if (props.autoFocus) {
              timeoutId = setTimeout(function () {
                var _a;

                (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
              });
            }

            return function () {
              if (timeoutId) {
                clearTimeout(timeoutId);
              }
            };
          }, []);

          var handlePromiseOnOk = function handlePromiseOnOk(returnValueOfOnOk) {
            if (!isThenable(returnValueOfOnOk)) {
              return;
            }

            setLoading(true);
            returnValueOfOnOk.then(function () {
              setLoading(false, true);
              onInternalClose.apply(void 0, arguments);
              clickedRef.current = false;
            }, function (e) {
              // Emit error when catch promise reject
              // eslint-disable-next-line no-console
              console.error(e); // See: https://github.com/ant-design/ant-design/issues/6183

              setLoading(false, true);
              clickedRef.current = false;
            });
          };

          var onClick = function onClick(e) {
            var actionFn = props.actionFn;

            if (clickedRef.current) {
              return;
            }

            clickedRef.current = true;

            if (!actionFn) {
              onInternalClose();
              return;
            }

            var returnValueOfOnOk;

            if (props.emitEvent) {
              returnValueOfOnOk = actionFn(e);

              if (props.quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
                clickedRef.current = false;
                onInternalClose(e);
                return;
              }
            } else if (actionFn.length) {
              returnValueOfOnOk = actionFn(close); // https://github.com/ant-design/ant-design/issues/23358

              clickedRef.current = false;
            } else {
              returnValueOfOnOk = actionFn();

              if (!returnValueOfOnOk) {
                onInternalClose();
                return;
              }
            }

            handlePromiseOnOk(returnValueOfOnOk);
          };

          var type = props.type,
              children = props.children,
              prefixCls = props.prefixCls,
              buttonProps = props.buttonProps;
          return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, (0, _button2.convertLegacyProps)(type), {
            onClick: onClick,
            loading: loading,
            prefixCls: prefixCls
          }, buttonProps, {
            ref: ref
          }), children);
        };

        var _default = ActionButton;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'rc-util/lib/hooks/useState': _req3,
        'react': _req4,
        '../button': _req5,
        '../button/button': _req6
      }));
    }
  };
});
//# sourceMappingURL=170c583c927da3a313c2d294f7dc099168ce5cf5.js.map