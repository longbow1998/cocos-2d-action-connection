System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/Dom/canUseDom", "__unresolved_1"], function (_export, _context) {
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
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req4 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req5 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useDom;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));

        var _Context = _interopRequireDefault(require("./Context"));

        var EMPTY_LIST = [];
        /**
         * Will add `div` to document. Nest call will keep order
         * @param render Render DOM in document
         */

        function useDom(render, debug) {
          var _React$useState = React.useState(function () {
            if (!(0, _canUseDom.default)()) {
              return null;
            }

            var defaultEle = document.createElement('div');

            if (process.env.NODE_ENV !== 'production' && debug) {
              defaultEle.setAttribute('data-debug', debug);
            }

            return defaultEle;
          }),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
              ele = _React$useState2[0]; // ========================== Order ==========================


          var appendedRef = React.useRef(false);
          var queueCreate = React.useContext(_Context.default);

          var _React$useState3 = React.useState(EMPTY_LIST),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              queue = _React$useState4[0],
              setQueue = _React$useState4[1];

          var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
            setQueue(function (origin) {
              var newQueue = [appendFn].concat((0, _toConsumableArray2.default)(origin));
              return newQueue;
            });
          }); // =========================== DOM ===========================

          function append() {
            if (!ele.parentElement) {
              document.body.appendChild(ele);
            }

            appendedRef.current = true;
          }

          function cleanup() {
            var _ele$parentElement;

            (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
            appendedRef.current = false;
          }

          (0, _useLayoutEffect.default)(function () {
            if (render) {
              if (queueCreate) {
                queueCreate(append);
              } else {
                append();
              }
            } else {
              cleanup();
            }

            return cleanup;
          }, [render]);
          (0, _useLayoutEffect.default)(function () {
            if (queue.length) {
              queue.forEach(function (appendFn) {
                return appendFn();
              });
              setQueue(EMPTY_LIST);
            }
          }, [queue]);
          return [ele, mergedQueueCreate];
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
        'rc-util/lib/hooks/useLayoutEffect': _req4,
        'rc-util/lib/Dom/canUseDom': _req5,
        './Context': _req6
      }));
    }
  };
});
//# sourceMappingURL=d8332c89bf464e44d2eb9f9e825ac25d66e1d6ae.js.map