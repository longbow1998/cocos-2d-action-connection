System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "react", "classnames", "rc-util/lib/isMobile"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibIsMobile) {
      _req5 = _rcUtilLibIsMobile.__cjsMetaURL;
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
        exports.default = StepHandler;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _isMobile = _interopRequireDefault(require("rc-util/lib/isMobile"));

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
        /* eslint-disable react/no-unknown-property */

        /**
         * When click and hold on a button - the speed of auto changing the value.
         */


        var STEP_INTERVAL = 200;
        /**
         * When click and hold on a button - the delay before auto changing the value.
         */

        var STEP_DELAY = 600;

        function StepHandler(_ref) {
          var prefixCls = _ref.prefixCls,
              upNode = _ref.upNode,
              downNode = _ref.downNode,
              upDisabled = _ref.upDisabled,
              downDisabled = _ref.downDisabled,
              onStep = _ref.onStep; // ======================== Step ========================

          var stepTimeoutRef = React.useRef();
          var onStepRef = React.useRef();
          onStepRef.current = onStep; // We will interval update step when hold mouse down

          var onStepMouseDown = function onStepMouseDown(e, up) {
            e.preventDefault();
            onStepRef.current(up); // Loop step for interval

            function loopStep() {
              onStepRef.current(up);
              stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
            } // First time press will wait some time to trigger loop step update


            stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
          };

          var onStopStep = function onStopStep() {
            clearTimeout(stepTimeoutRef.current);
          };

          React.useEffect(function () {
            return onStopStep;
          }, []); // ======================= Render =======================

          if ((0, _isMobile.default)()) {
            return null;
          }

          var handlerClassName = "".concat(prefixCls, "-handler");
          var upClassName = (0, _classnames.default)(handlerClassName, "".concat(handlerClassName, "-up"), (0, _defineProperty2.default)({}, "".concat(handlerClassName, "-up-disabled"), upDisabled));
          var downClassName = (0, _classnames.default)(handlerClassName, "".concat(handlerClassName, "-down"), (0, _defineProperty2.default)({}, "".concat(handlerClassName, "-down-disabled"), downDisabled));
          var sharedHandlerProps = {
            unselectable: 'on',
            role: 'button',
            onMouseUp: onStopStep,
            onMouseLeave: onStopStep
          };
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(handlerClassName, "-wrap")
          }, /*#__PURE__*/React.createElement("span", (0, _extends2.default)({}, sharedHandlerProps, {
            onMouseDown: function onMouseDown(e) {
              onStepMouseDown(e, true);
            },
            "aria-label": "Increase Value",
            "aria-disabled": upDisabled,
            className: upClassName
          }), upNode || /*#__PURE__*/React.createElement("span", {
            unselectable: "on",
            className: "".concat(prefixCls, "-handler-up-inner")
          })), /*#__PURE__*/React.createElement("span", (0, _extends2.default)({}, sharedHandlerProps, {
            onMouseDown: function onMouseDown(e) {
              onStepMouseDown(e, false);
            },
            "aria-label": "Decrease Value",
            "aria-disabled": downDisabled,
            className: downClassName
          }), downNode || /*#__PURE__*/React.createElement("span", {
            unselectable: "on",
            className: "".concat(prefixCls, "-handler-down-inner")
          })));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'react': _req3,
        'classnames': _req4,
        'rc-util/lib/isMobile': _req5
      }));
    }
  };
});
//# sourceMappingURL=b373543c8aea15935f50ac104bd5a3633e9e8e0f.js.map