System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "rc-select", "rc-util/lib/KeyCode", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcSelect2) {
      _req4 = _rcSelect2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req5 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
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
        exports.default = void 0;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _rcSelect = require("rc-select");

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _useSearchOptions = require("../hooks/useSearchOptions");

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

        var _default = function _default(ref, options, fieldNames, activeValueCells, setActiveValueCells, onKeyBoardSelect) {
          var _useBaseProps = (0, _rcSelect.useBaseProps)(),
              direction = _useBaseProps.direction,
              searchValue = _useBaseProps.searchValue,
              toggleOpen = _useBaseProps.toggleOpen,
              open = _useBaseProps.open;

          var rtl = direction === 'rtl';

          var _React$useMemo = React.useMemo(function () {
            var activeIndex = -1;
            var currentOptions = options;
            var mergedActiveIndexes = [];
            var mergedActiveValueCells = [];
            var len = activeValueCells.length; // Fill validate active value cells and index

            var _loop = function _loop(i) {
              // Mark the active index for current options
              var nextActiveIndex = currentOptions.findIndex(function (option) {
                return option[fieldNames.value] === activeValueCells[i];
              });

              if (nextActiveIndex === -1) {
                return "break";
              }

              activeIndex = nextActiveIndex;
              mergedActiveIndexes.push(activeIndex);
              mergedActiveValueCells.push(activeValueCells[i]);
              currentOptions = currentOptions[activeIndex][fieldNames.children];
            };

            for (var i = 0; i < len && currentOptions; i += 1) {
              var _ret = _loop(i);

              if (_ret === "break") break;
            } // Fill last active options


            var activeOptions = options;

            for (var _i = 0; _i < mergedActiveIndexes.length - 1; _i += 1) {
              activeOptions = activeOptions[mergedActiveIndexes[_i]][fieldNames.children];
            }

            return [mergedActiveValueCells, activeIndex, activeOptions];
          }, [activeValueCells, fieldNames, options]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 3),
              validActiveValueCells = _React$useMemo2[0],
              lastActiveIndex = _React$useMemo2[1],
              lastActiveOptions = _React$useMemo2[2]; // Update active value cells and scroll to target element


          var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
            setActiveValueCells(next);
          }; // Same options offset


          var offsetActiveOption = function offsetActiveOption(offset) {
            var len = lastActiveOptions.length;
            var currentIndex = lastActiveIndex;

            if (currentIndex === -1 && offset < 0) {
              currentIndex = len;
            }

            for (var i = 0; i < len; i += 1) {
              currentIndex = (currentIndex + offset + len) % len;
              var option = lastActiveOptions[currentIndex];

              if (option && !option.disabled) {
                var value = option[fieldNames.value];
                var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
                internalSetActiveValueCells(nextActiveCells);
                return;
              }
            }
          }; // Different options offset


          var prevColumn = function prevColumn() {
            if (validActiveValueCells.length > 1) {
              var nextActiveCells = validActiveValueCells.slice(0, -1);
              internalSetActiveValueCells(nextActiveCells);
            } else {
              toggleOpen(false);
            }
          };

          var nextColumn = function nextColumn() {
            var _lastActiveOptions$la;

            var nextOptions = ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null || _lastActiveOptions$la === void 0 ? void 0 : _lastActiveOptions$la[fieldNames.children]) || [];
            var nextOption = nextOptions.find(function (option) {
              return !option.disabled;
            });

            if (nextOption) {
              var nextActiveCells = [].concat((0, _toConsumableArray2.default)(validActiveValueCells), [nextOption[fieldNames.value]]);
              internalSetActiveValueCells(nextActiveCells);
            }
          };

          React.useImperativeHandle(ref, function () {
            return {
              // scrollTo: treeRef.current?.scrollTo,
              onKeyDown: function onKeyDown(event) {
                var which = event.which;

                switch (which) {
                  // >>> Arrow keys
                  case _KeyCode.default.UP:
                  case _KeyCode.default.DOWN:
                    {
                      var offset = 0;

                      if (which === _KeyCode.default.UP) {
                        offset = -1;
                      } else if (which === _KeyCode.default.DOWN) {
                        offset = 1;
                      }

                      if (offset !== 0) {
                        offsetActiveOption(offset);
                      }

                      break;
                    }

                  case _KeyCode.default.LEFT:
                    {
                      if (rtl) {
                        nextColumn();
                      } else {
                        prevColumn();
                      }

                      break;
                    }

                  case _KeyCode.default.RIGHT:
                    {
                      if (rtl) {
                        prevColumn();
                      } else {
                        nextColumn();
                      }

                      break;
                    }

                  case _KeyCode.default.BACKSPACE:
                    {
                      if (!searchValue) {
                        prevColumn();
                      }

                      break;
                    }
                  // >>> Select

                  case _KeyCode.default.ENTER:
                    {
                      if (validActiveValueCells.length) {
                        var option = lastActiveOptions[lastActiveIndex]; // Search option should revert back of origin options

                        var originOptions = (option === null || option === void 0 ? void 0 : option[_useSearchOptions.SEARCH_MARK]) || [];

                        if (originOptions.length) {
                          onKeyBoardSelect(originOptions.map(function (opt) {
                            return opt[fieldNames.value];
                          }), originOptions[originOptions.length - 1]);
                        } else {
                          onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
                        }
                      }

                      break;
                    }
                  // >>> Close

                  case _KeyCode.default.ESC:
                    {
                      toggleOpen(false);

                      if (open) {
                        event.stopPropagation();
                      }
                    }
                }
              },
              onKeyUp: function onKeyUp() {}
            };
          });
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'rc-select': _req4,
        'rc-util/lib/KeyCode': _req5,
        '../hooks/useSearchOptions': _req6
      }));
    }
  };
});
//# sourceMappingURL=a78cdc891f93af75c07b43de944ad5991b24c250.js.map