System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "rc-util/lib/KeyCode", "rc-util/lib/raf", "rc-util/lib/Dom/isVisible"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _PickerModeMap, _addGlobalMouseDownEvent, _createKeyDownHandler, _elementsContains, _getDefaultFormat, _getInputSize, _getTargetFromEvent, _scrollTo, _waitElementReady, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req0 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req1 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req2 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibDomIsVisible) {
      _req3 = _rcUtilLibDomIsVisible.__cjsMetaURL;
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
        exports.PickerModeMap = void 0;
        exports.addGlobalMouseDownEvent = addGlobalMouseDownEvent;
        exports.createKeyDownHandler = createKeyDownHandler;
        exports.elementsContains = elementsContains;
        exports.getDefaultFormat = getDefaultFormat;
        exports.getInputSize = getInputSize;
        exports.getTargetFromEvent = getTargetFromEvent;
        exports.scrollTo = scrollTo;
        exports.waitElementReady = waitElementReady;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _isVisible = _interopRequireDefault(require("rc-util/lib/Dom/isVisible"));

        var scrollIds = new Map();
        /** Trigger when element is visible in view */

        function waitElementReady(element, callback) {
          var id;

          function tryOrNextFrame() {
            if ((0, _isVisible.default)(element)) {
              callback();
            } else {
              id = (0, _raf.default)(function () {
                tryOrNextFrame();
              });
            }
          }

          tryOrNextFrame();
          return function () {
            _raf.default.cancel(id);
          };
        }
        /* eslint-disable no-param-reassign */


        function scrollTo(element, to, duration) {
          if (scrollIds.get(element)) {
            cancelAnimationFrame(scrollIds.get(element));
          } // jump to target if duration zero


          if (duration <= 0) {
            scrollIds.set(element, requestAnimationFrame(function () {
              element.scrollTop = to;
            }));
            return;
          }

          var difference = to - element.scrollTop;
          var perTick = difference / duration * 10;
          scrollIds.set(element, requestAnimationFrame(function () {
            element.scrollTop += perTick;

            if (element.scrollTop !== to) {
              scrollTo(element, to, duration - 10);
            }
          }));
        }

        function createKeyDownHandler(event, _ref) {
          var onLeftRight = _ref.onLeftRight,
              onCtrlLeftRight = _ref.onCtrlLeftRight,
              onUpDown = _ref.onUpDown,
              onPageUpDown = _ref.onPageUpDown,
              onEnter = _ref.onEnter;
          var which = event.which,
              ctrlKey = event.ctrlKey,
              metaKey = event.metaKey;

          switch (which) {
            case _KeyCode.default.LEFT:
              if (ctrlKey || metaKey) {
                if (onCtrlLeftRight) {
                  onCtrlLeftRight(-1);
                  return true;
                }
              } else if (onLeftRight) {
                onLeftRight(-1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.RIGHT:
              if (ctrlKey || metaKey) {
                if (onCtrlLeftRight) {
                  onCtrlLeftRight(1);
                  return true;
                }
              } else if (onLeftRight) {
                onLeftRight(1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.UP:
              if (onUpDown) {
                onUpDown(-1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.DOWN:
              if (onUpDown) {
                onUpDown(1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.PAGE_UP:
              if (onPageUpDown) {
                onPageUpDown(-1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.PAGE_DOWN:
              if (onPageUpDown) {
                onPageUpDown(1);
                return true;
              }
              /* istanbul ignore next */


              break;

            case _KeyCode.default.ENTER:
              if (onEnter) {
                onEnter();
                return true;
              }
              /* istanbul ignore next */


              break;
          }

          return false;
        } // ===================== Format =====================


        function getDefaultFormat(format, picker, showTime, use12Hours) {
          var mergedFormat = format;

          if (!mergedFormat) {
            switch (picker) {
              case 'time':
                mergedFormat = use12Hours ? 'hh:mm:ss a' : 'HH:mm:ss';
                break;

              case 'week':
                mergedFormat = 'gggg-wo';
                break;

              case 'month':
                mergedFormat = 'YYYY-MM';
                break;

              case 'quarter':
                mergedFormat = 'YYYY-[Q]Q';
                break;

              case 'year':
                mergedFormat = 'YYYY';
                break;

              default:
                mergedFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
            }
          }

          return mergedFormat;
        }

        function getInputSize(picker, format, generateConfig) {
          var defaultSize = picker === 'time' ? 8 : 10;
          var length = typeof format === 'function' ? format(generateConfig.getNow()).length : format.length;
          return Math.max(defaultSize, length) + 2;
        }

        var globalClickFunc = null;
        var clickCallbacks = new Set();

        function addGlobalMouseDownEvent(callback) {
          if (!globalClickFunc && typeof window !== 'undefined' && window.addEventListener) {
            globalClickFunc = function globalClickFunc(e) {
              // Clone a new list to avoid repeat trigger events
              (0, _toConsumableArray2.default)(clickCallbacks).forEach(function (queueFunc) {
                queueFunc(e);
              });
            };

            window.addEventListener('mousedown', globalClickFunc);
          }

          clickCallbacks.add(callback);
          return function () {
            clickCallbacks.delete(callback);

            if (clickCallbacks.size === 0) {
              window.removeEventListener('mousedown', globalClickFunc);
              globalClickFunc = null;
            }
          };
        }

        function getTargetFromEvent(e) {
          var target = e.target; // get target if in shadow dom

          if (e.composed && target.shadowRoot) {
            var _e$composedPath;

            return ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath.call(e)[0]) || target;
          }

          return target;
        } // ====================== Mode ======================


        var getYearNextMode = function getYearNextMode(next) {
          if (next === 'month' || next === 'date') {
            return 'year';
          }

          return next;
        };

        var getMonthNextMode = function getMonthNextMode(next) {
          if (next === 'date') {
            return 'month';
          }

          return next;
        };

        var getQuarterNextMode = function getQuarterNextMode(next) {
          if (next === 'month' || next === 'date') {
            return 'quarter';
          }

          return next;
        };

        var getWeekNextMode = function getWeekNextMode(next) {
          if (next === 'date') {
            return 'week';
          }

          return next;
        };

        var PickerModeMap = {
          year: getYearNextMode,
          month: getMonthNextMode,
          quarter: getQuarterNextMode,
          week: getWeekNextMode,
          time: null,
          date: null
        };
        exports.PickerModeMap = PickerModeMap;

        function elementsContains(elements, target) {
          return elements.some(function (ele) {
            return ele && ele.contains(target);
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _PickerModeMap = module.exports.PickerModeMap;
        _addGlobalMouseDownEvent = module.exports.addGlobalMouseDownEvent;
        _createKeyDownHandler = module.exports.createKeyDownHandler;
        _elementsContains = module.exports.elementsContains;
        _getDefaultFormat = module.exports.getDefaultFormat;
        _getInputSize = module.exports.getInputSize;
        _getTargetFromEvent = module.exports.getTargetFromEvent;
        _scrollTo = module.exports.scrollTo;
        _waitElementReady = module.exports.waitElementReady;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/toConsumableArray': _req0,
        'rc-util/lib/KeyCode': _req1,
        'rc-util/lib/raf': _req2,
        'rc-util/lib/Dom/isVisible': _req3
      }));
    }
  };
});
//# sourceMappingURL=59640d3f8d21559f82df227750f83798782b6abd.js.map