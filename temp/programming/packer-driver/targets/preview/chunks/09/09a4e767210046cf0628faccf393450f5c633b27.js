System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/KeyCode", "rc-util/lib/omit", "rc-util/lib/pickAttrs", "rc-util/lib/hooks/useMemo", "classnames", "rc-virtual-list", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req7 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req8 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_rcUtilLibPickAttrs) {
      _req9 = _rcUtilLibPickAttrs.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMemo) {
      _req10 = _rcUtilLibHooksUseMemo.__cjsMetaURL;
    }, function (_classnames2) {
      _req11 = _classnames2.__cjsMetaURL;
    }, function (_rcVirtualList2) {
      _req12 = _rcVirtualList2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req13 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req14 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req15 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req16 = _unresolved_5.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));

        var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcVirtualList = _interopRequireDefault(require("rc-virtual-list"));

        var _TransBtn = _interopRequireDefault(require("./TransBtn"));

        var _platformUtil = require("./utils/platformUtil");

        var _useBaseProps2 = _interopRequireDefault(require("./hooks/useBaseProps"));

        var _SelectContext = _interopRequireDefault(require("./SelectContext"));

        var _excluded = ["disabled", "title", "children", "style", "className"];

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

        function isTitleType(content) {
          return typeof content === 'string' || typeof content === 'number';
        }
        /**
         * Using virtual list of option display.
         * Will fallback to dom if use customize render.
         */


        var OptionList = function OptionList(_, ref) {
          var _useBaseProps = (0, _useBaseProps2.default)(),
              prefixCls = _useBaseProps.prefixCls,
              id = _useBaseProps.id,
              open = _useBaseProps.open,
              multiple = _useBaseProps.multiple,
              mode = _useBaseProps.mode,
              searchValue = _useBaseProps.searchValue,
              toggleOpen = _useBaseProps.toggleOpen,
              notFoundContent = _useBaseProps.notFoundContent,
              onPopupScroll = _useBaseProps.onPopupScroll;

          var _React$useContext = React.useContext(_SelectContext.default),
              flattenOptions = _React$useContext.flattenOptions,
              onActiveValue = _React$useContext.onActiveValue,
              defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
              onSelect = _React$useContext.onSelect,
              menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
              rawValues = _React$useContext.rawValues,
              fieldNames = _React$useContext.fieldNames,
              virtual = _React$useContext.virtual,
              listHeight = _React$useContext.listHeight,
              listItemHeight = _React$useContext.listItemHeight;

          var itemPrefixCls = "".concat(prefixCls, "-item");
          var memoFlattenOptions = (0, _useMemo.default)(function () {
            return flattenOptions;
          }, [open, flattenOptions], function (prev, next) {
            return next[0] && prev[1] !== next[1];
          }); // =========================== List ===========================

          var listRef = React.useRef(null);

          var onListMouseDown = function onListMouseDown(event) {
            event.preventDefault();
          };

          var scrollIntoView = function scrollIntoView(args) {
            if (listRef.current) {
              listRef.current.scrollTo(typeof args === 'number' ? {
                index: args
              } : args);
            }
          }; // ========================== Active ==========================


          var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
            var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            var len = memoFlattenOptions.length;

            for (var i = 0; i < len; i += 1) {
              var current = (index + i * offset + len) % len;
              var _memoFlattenOptions$c = memoFlattenOptions[current],
                  group = _memoFlattenOptions$c.group,
                  data = _memoFlattenOptions$c.data;

              if (!group && !data.disabled) {
                return current;
              }
            }

            return -1;
          };

          var _React$useState = React.useState(function () {
            return getEnabledActiveIndex(0);
          }),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              activeIndex = _React$useState2[0],
              setActiveIndex = _React$useState2[1];

          var setActive = function setActive(index) {
            var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            setActiveIndex(index);
            var info = {
              source: fromKeyboard ? 'keyboard' : 'mouse'
            }; // Trigger active event

            var flattenItem = memoFlattenOptions[index];

            if (!flattenItem) {
              onActiveValue(null, -1, info);
              return;
            }

            onActiveValue(flattenItem.value, index, info);
          }; // Auto active first item when list length or searchValue changed


          (0, React.useEffect)(function () {
            setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
          }, [memoFlattenOptions.length, searchValue]); // https://github.com/ant-design/ant-design/issues/34975

          var isSelected = React.useCallback(function (value) {
            return rawValues.has(value) && mode !== 'combobox';
          }, [mode, (0, _toConsumableArray2.default)(rawValues).toString(), rawValues.size]); // Auto scroll to item position in single mode

          (0, React.useEffect)(function () {
            /**
             * React will skip `onChange` when component update.
             * `setActive` function will call root accessibility state update which makes re-render.
             * So we need to delay to let Input component trigger onChange first.
             */
            var timeoutId = setTimeout(function () {
              if (!multiple && open && rawValues.size === 1) {
                var value = Array.from(rawValues)[0];
                var index = memoFlattenOptions.findIndex(function (_ref) {
                  var data = _ref.data;
                  return data.value === value;
                });

                if (index !== -1) {
                  setActive(index);
                  scrollIntoView(index);
                }
              }
            }); // Force trigger scrollbar visible when open

            if (open) {
              var _listRef$current;

              (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
            }

            return function () {
              return clearTimeout(timeoutId);
            };
          }, [open, searchValue]); // ========================== Values ==========================

          var onSelectValue = function onSelectValue(value) {
            if (value !== undefined) {
              onSelect(value, {
                selected: !rawValues.has(value)
              });
            } // Single mode should always close by select


            if (!multiple) {
              toggleOpen(false);
            }
          }; // ========================= Keyboard =========================


          React.useImperativeHandle(ref, function () {
            return {
              onKeyDown: function onKeyDown(event) {
                var which = event.which,
                    ctrlKey = event.ctrlKey;

                switch (which) {
                  // >>> Arrow keys & ctrl + n/p on Mac
                  case _KeyCode.default.N:
                  case _KeyCode.default.P:
                  case _KeyCode.default.UP:
                  case _KeyCode.default.DOWN:
                    {
                      var offset = 0;

                      if (which === _KeyCode.default.UP) {
                        offset = -1;
                      } else if (which === _KeyCode.default.DOWN) {
                        offset = 1;
                      } else if ((0, _platformUtil.isPlatformMac)() && ctrlKey) {
                        if (which === _KeyCode.default.N) {
                          offset = 1;
                        } else if (which === _KeyCode.default.P) {
                          offset = -1;
                        }
                      }

                      if (offset !== 0) {
                        var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                        scrollIntoView(nextActiveIndex);
                        setActive(nextActiveIndex, true);
                      }

                      break;
                    }
                  // >>> Select

                  case _KeyCode.default.ENTER:
                    {
                      // value
                      var item = memoFlattenOptions[activeIndex];

                      if (item && !item.data.disabled) {
                        onSelectValue(item.value);
                      } else {
                        onSelectValue(undefined);
                      }

                      if (open) {
                        event.preventDefault();
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
              onKeyUp: function onKeyUp() {},
              scrollTo: function scrollTo(index) {
                scrollIntoView(index);
              }
            };
          }); // ========================== Render ==========================

          if (memoFlattenOptions.length === 0) {
            return /*#__PURE__*/React.createElement("div", {
              role: "listbox",
              id: "".concat(id, "_list"),
              className: "".concat(itemPrefixCls, "-empty"),
              onMouseDown: onListMouseDown
            }, notFoundContent);
          }

          var omitFieldNameList = Object.keys(fieldNames).map(function (key) {
            return fieldNames[key];
          });

          var getLabel = function getLabel(item) {
            return item.label;
          };

          var renderItem = function renderItem(index) {
            var item = memoFlattenOptions[index];
            if (!item) return null;
            var itemData = item.data || {};
            var value = itemData.value;
            var group = item.group;
            var attrs = (0, _pickAttrs.default)(itemData, true);
            var mergedLabel = getLabel(item);
            return item ? /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
              "aria-label": typeof mergedLabel === 'string' && !group ? mergedLabel : null
            }, attrs, {
              key: index,
              role: group ? 'presentation' : 'option',
              id: "".concat(id, "_list_").concat(index),
              "aria-selected": isSelected(value)
            }), value) : null;
          };

          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            role: "listbox",
            id: "".concat(id, "_list"),
            style: {
              height: 0,
              width: 0,
              overflow: 'hidden'
            }
          }, renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/React.createElement(_rcVirtualList.default, {
            itemKey: "key",
            ref: listRef,
            data: memoFlattenOptions,
            height: listHeight,
            itemHeight: listItemHeight,
            fullHeight: false,
            onMouseDown: onListMouseDown,
            onScroll: onPopupScroll,
            virtual: virtual
          }, function (item, itemIndex) {
            var _classNames;

            var group = item.group,
                groupOption = item.groupOption,
                data = item.data,
                label = item.label,
                value = item.value;
            var key = data.key; // Group

            if (group) {
              var _data$title;

              var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : undefined;
              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames.default)(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
                title: groupTitle
              }, label !== undefined ? label : key);
            }

            var disabled = data.disabled,
                title = data.title,
                children = data.children,
                style = data.style,
                className = data.className,
                otherProps = (0, _objectWithoutProperties2.default)(data, _excluded);
            var passedProps = (0, _omit.default)(otherProps, omitFieldNameList); // Option

            var selected = isSelected(value);
            var optionPrefixCls = "".concat(itemPrefixCls, "-option");
            var optionClassName = (0, _classnames.default)(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
            var mergedLabel = getLabel(item);
            var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected; // https://github.com/ant-design/ant-design/issues/34145

            var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

            var optionTitle = isTitleType(content) ? content.toString() : undefined;

            if (title !== undefined) {
              optionTitle = title;
            }

            return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, (0, _pickAttrs.default)(passedProps), {
              "aria-selected": selected,
              className: optionClassName,
              title: optionTitle,
              onMouseMove: function onMouseMove() {
                if (activeIndex === itemIndex || disabled) {
                  return;
                }

                setActive(itemIndex);
              },
              onClick: function onClick() {
                if (!disabled) {
                  onSelectValue(value);
                }
              },
              style: style
            }), /*#__PURE__*/React.createElement("div", {
              className: "".concat(optionPrefixCls, "-content")
            }, content), /*#__PURE__*/React.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/React.createElement(_TransBtn.default, {
              className: "".concat(itemPrefixCls, "-option-state"),
              customizeIcon: menuItemSelectedIcon,
              customizeIconProps: {
                isSelected: selected
              }
            }, selected ? '✓' : null));
          }));
        };

        var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
        RefOptionList.displayName = 'OptionList';
        var _default = RefOptionList;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        'react': _req6,
        'rc-util/lib/KeyCode': _req7,
        'rc-util/lib/omit': _req8,
        'rc-util/lib/pickAttrs': _req9,
        'rc-util/lib/hooks/useMemo': _req10,
        'classnames': _req11,
        'rc-virtual-list': _req12,
        './TransBtn': _req13,
        './utils/platformUtil': _req14,
        './hooks/useBaseProps': _req15,
        './SelectContext': _req16
      }));
    }
  };
});
//# sourceMappingURL=09a4e767210046cf0628faccf393450f5c633b27.js.map