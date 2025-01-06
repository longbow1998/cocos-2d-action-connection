System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react", "rc-util/lib/raf"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req3 = _rcUtilLibRaf.__cjsMetaURL;
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
        exports.default = useScrollTo;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));
        /* eslint-disable no-param-reassign */


        function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
          var scrollRef = React.useRef();
          return function (arg) {
            // When not argument provided, we think dev may want to show the scrollbar
            if (arg === null || arg === undefined) {
              triggerFlash();
              return;
            } // Normal scroll logic


            _raf.default.cancel(scrollRef.current);

            if (typeof arg === 'number') {
              syncScrollTop(arg);
            } else if (arg && (0, _typeof2.default)(arg) === 'object') {
              var index;
              var align = arg.align;

              if ('index' in arg) {
                index = arg.index;
              } else {
                index = data.findIndex(function (item) {
                  return getKey(item) === arg.key;
                });
              }

              var _arg$offset = arg.offset,
                  offset = _arg$offset === void 0 ? 0 : _arg$offset; // We will retry 3 times in case dynamic height shaking

              var syncScroll = function syncScroll(times, targetAlign) {
                if (times < 0 || !containerRef.current) return;
                var height = containerRef.current.clientHeight;
                var needCollectHeight = false;
                var newTargetAlign = targetAlign; // Go to next frame if height not exist

                if (height) {
                  var mergedAlign = targetAlign || align; // Get top & bottom

                  var stackTop = 0;
                  var itemTop = 0;
                  var itemBottom = 0;
                  var maxLen = Math.min(data.length, index);

                  for (var i = 0; i <= maxLen; i += 1) {
                    var key = getKey(data[i]);
                    itemTop = stackTop;
                    var cacheHeight = heights.get(key);
                    itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
                    stackTop = itemBottom;

                    if (i === index && cacheHeight === undefined) {
                      needCollectHeight = true;
                    }
                  } // Scroll to


                  var targetTop = null;

                  switch (mergedAlign) {
                    case 'top':
                      targetTop = itemTop - offset;
                      break;

                    case 'bottom':
                      targetTop = itemBottom - height + offset;
                      break;

                    default:
                      {
                        var scrollTop = containerRef.current.scrollTop;
                        var scrollBottom = scrollTop + height;

                        if (itemTop < scrollTop) {
                          newTargetAlign = 'top';
                        } else if (itemBottom > scrollBottom) {
                          newTargetAlign = 'bottom';
                        }
                      }
                  }

                  if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
                    syncScrollTop(targetTop);
                  }
                } // We will retry since element may not sync height as it described


                scrollRef.current = (0, _raf.default)(function () {
                  if (needCollectHeight) {
                    collectHeight();
                  }

                  syncScroll(times - 1, newTargetAlign);
                }, 2); // Delay 2 to wait for List collect heights
              };

              syncScroll(3);
            }
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        'react': _req2,
        'rc-util/lib/raf': _req3
      }));
    }
  };
});
//# sourceMappingURL=32dc2135f42d0f6ad80cf5e2f15d085f203f38f2.js.map