System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req6 = _unresolved_4.__cjsMetaURL;
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
        exports["default"] = useModal;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _usePatchElement3 = _interopRequireDefault(require("../../_util/hooks/usePatchElement"));

        var _confirm = require("../confirm");

        var _HookModal = _interopRequireDefault(require("./HookModal"));

        var uuid = 0;
        var ElementsHolder = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(function (_props, ref) {
          var _usePatchElement = (0, _usePatchElement3["default"])(),
              _usePatchElement2 = (0, _slicedToArray2["default"])(_usePatchElement, 2),
              elements = _usePatchElement2[0],
              patchElement = _usePatchElement2[1];

          React.useImperativeHandle(ref, function () {
            return {
              patchElement: patchElement
            };
          }, []); // eslint-disable-next-line react/jsx-no-useless-fragment

          return /*#__PURE__*/React.createElement(React.Fragment, null, elements);
        }));

        function useModal() {
          var holderRef = React.useRef(null); // ========================== Effect ==========================

          var _React$useState = React.useState([]),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              actionQueue = _React$useState2[0],
              setActionQueue = _React$useState2[1];

          React.useEffect(function () {
            if (actionQueue.length) {
              var cloneQueue = (0, _toConsumableArray2["default"])(actionQueue);
              cloneQueue.forEach(function (action) {
                action();
              });
              setActionQueue([]);
            }
          }, [actionQueue]); // =========================== Hook ===========================

          var getConfirmFunc = React.useCallback(function (withFunc) {
            return function hookConfirm(config) {
              var _a;

              uuid += 1;
              var modalRef = /*#__PURE__*/React.createRef();
              var closeFunc;
              var modal = /*#__PURE__*/React.createElement(_HookModal["default"], {
                key: "modal-".concat(uuid),
                config: withFunc(config),
                ref: modalRef,
                afterClose: function afterClose() {
                  closeFunc === null || closeFunc === void 0 ? void 0 : closeFunc();
                }
              });
              closeFunc = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.patchElement(modal);
              return {
                destroy: function destroy() {
                  function destroyAction() {
                    var _a;

                    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
                  }

                  if (modalRef.current) {
                    destroyAction();
                  } else {
                    setActionQueue(function (prev) {
                      return [].concat((0, _toConsumableArray2["default"])(prev), [destroyAction]);
                    });
                  }
                },
                update: function update(newConfig) {
                  function updateAction() {
                    var _a;

                    (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.update(newConfig);
                  }

                  if (modalRef.current) {
                    updateAction();
                  } else {
                    setActionQueue(function (prev) {
                      return [].concat((0, _toConsumableArray2["default"])(prev), [updateAction]);
                    });
                  }
                }
              };
            };
          }, []);
          var fns = React.useMemo(function () {
            return {
              info: getConfirmFunc(_confirm.withInfo),
              success: getConfirmFunc(_confirm.withSuccess),
              error: getConfirmFunc(_confirm.withError),
              warning: getConfirmFunc(_confirm.withWarn),
              confirm: getConfirmFunc(_confirm.withConfirm)
            };
          }, []); // eslint-disable-next-line react/jsx-key

          return [fns, /*#__PURE__*/React.createElement(ElementsHolder, {
            ref: holderRef
          })];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        '../../_util/hooks/usePatchElement': _req4,
        '../confirm': _req5,
        './HookModal': _req6
      }));
    }
  };
});
//# sourceMappingURL=0a24c782c6f6560fb619b5c9949d84cc0993df5c.js.map