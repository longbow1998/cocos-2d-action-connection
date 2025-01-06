System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/hooks/useState", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, _SkipStep, _DoStep, _isActive, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req3 = _rcUtilLibHooksUseState.__cjsMetaURL;
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

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = exports.SkipStep = exports.DoStep = void 0;
        exports.isActive = isActive;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _useState3 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));

        var _interface = require("../interface");

        var _useNextFrame3 = _interopRequireDefault(require("./useNextFrame"));

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

        var STEP_QUEUE = [_interface.STEP_PREPARE, _interface.STEP_START, _interface.STEP_ACTIVE, _interface.STEP_ACTIVATED];
        /** Skip current step */

        var SkipStep = false;
        /** Current step should be update in */

        exports.SkipStep = SkipStep;
        var DoStep = true;
        exports.DoStep = DoStep;

        function isActive(step) {
          return step === _interface.STEP_ACTIVE || step === _interface.STEP_ACTIVATED;
        }

        var _default = function _default(status, callback) {
          var _useState = (0, _useState3.default)(_interface.STEP_NONE),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              step = _useState2[0],
              setStep = _useState2[1];

          var _useNextFrame = (0, _useNextFrame3.default)(),
              _useNextFrame2 = (0, _slicedToArray2.default)(_useNextFrame, 2),
              nextFrame = _useNextFrame2[0],
              cancelNextFrame = _useNextFrame2[1];

          function startQueue() {
            setStep(_interface.STEP_PREPARE, true);
          }

          (0, _useIsomorphicLayoutEffect.default)(function () {
            if (step !== _interface.STEP_NONE && step !== _interface.STEP_ACTIVATED) {
              var index = STEP_QUEUE.indexOf(step);
              var nextStep = STEP_QUEUE[index + 1];
              var result = callback(step);

              if (result === SkipStep) {
                // Skip when no needed
                setStep(nextStep, true);
              } else {
                // Do as frame for step update
                nextFrame(function (info) {
                  function doNext() {
                    // Skip since current queue is ood
                    if (info.isCanceled()) return;
                    setStep(nextStep, true);
                  }

                  if (result === true) {
                    doNext();
                  } else {
                    // Only promise should be async
                    Promise.resolve(result).then(doNext);
                  }
                });
              }
            }
          }, [status, step]);
          React.useEffect(function () {
            return function () {
              cancelNextFrame();
            };
          }, []);
          return [startQueue, step];
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _SkipStep = module.exports.SkipStep;
        _DoStep = module.exports.DoStep;
        _isActive = module.exports.isActive;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        'rc-util/lib/hooks/useState': _req3,
        '../interface': _req4,
        './useNextFrame': _req5,
        './useIsomorphicLayoutEffect': _req6
      }));
    }
  };
});
//# sourceMappingURL=c0994858060dd8f86c174c1adfe09259b453b61d.js.map