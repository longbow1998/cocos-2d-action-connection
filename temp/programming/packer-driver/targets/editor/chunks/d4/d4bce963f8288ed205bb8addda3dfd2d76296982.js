System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/regeneratorRuntime", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/raf", "rc-util/lib/hooks/useState"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersRegeneratorRuntime) {
      _req0 = _babelRuntimeHelpersRegeneratorRuntime.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAsyncToGenerator) {
      _req1 = _babelRuntimeHelpersAsyncToGenerator.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react2) {
      _req3 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req4 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req5 = _rcUtilLibHooksUseState.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));

        var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _react = require("react");

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _useState3 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));

        var StatusQueue = ['measure', 'alignPre', 'align', null, 'motion'];

        var _default = function _default(visible, doMeasure) {
          var _useState = (0, _useState3.default)(null),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              status = _useState2[0],
              setInternalStatus = _useState2[1];

          var rafRef = (0, _react.useRef)();

          function setStatus(nextStatus) {
            setInternalStatus(nextStatus, true);
          }

          function cancelRaf() {
            _raf.default.cancel(rafRef.current);
          }

          function goNextStatus(callback) {
            cancelRaf();
            rafRef.current = (0, _raf.default)(function () {
              // Only align should be manually trigger
              setStatus(function (prev) {
                switch (status) {
                  case 'align':
                    return 'motion';

                  case 'motion':
                    return 'stable';

                  default:
                }

                return prev;
              });
              callback === null || callback === void 0 ? void 0 : callback();
            });
          } // Init status


          (0, _react.useEffect)(function () {
            setStatus('measure');
          }, [visible]); // Go next status

          (0, _react.useEffect)(function () {
            switch (status) {
              case 'measure':
                doMeasure();
                break;

              default:
            }

            if (status) {
              rafRef.current = (0, _raf.default)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
                var index, nextStatus;
                return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        index = StatusQueue.indexOf(status);
                        nextStatus = StatusQueue[index + 1];

                        if (nextStatus && index !== -1) {
                          setStatus(nextStatus);
                        }

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            }
          }, [status]);
          (0, _react.useEffect)(function () {
            return function () {
              cancelRaf();
            };
          }, []);
          return [status, goNextStatus];
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/regeneratorRuntime': _req0,
        '@babel/runtime/helpers/asyncToGenerator': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'rc-util/lib/raf': _req4,
        'rc-util/lib/hooks/useState': _req5
      }));
    }
  };
});
//# sourceMappingURL=d4bce963f8288ed205bb8addda3dfd2d76296982.js.map