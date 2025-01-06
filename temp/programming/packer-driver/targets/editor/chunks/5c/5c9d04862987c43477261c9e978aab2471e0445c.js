System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "classnames", "rc-util/lib/hooks/useMergedState", "rc-util/lib/Children/toArray", "rc-util/lib/KeyCode", "rc-util/lib/warning", "react", "rc-textarea", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req6 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req7 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req8 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req9 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_react2) {
      _req10 = _react2.__cjsMetaURL;
    }, function (_rcTextarea2) {
      _req11 = _rcTextarea2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _react = _interopRequireWildcard(require("react"));

        var _rcTextarea = _interopRequireDefault(require("rc-textarea"));

        var _KeywordTrigger = _interopRequireDefault(require("./KeywordTrigger"));

        var _MentionsContext = _interopRequireDefault(require("./MentionsContext"));

        var _Option = _interopRequireDefault(require("./Option"));

        var _util = require("./util");

        var _useEffectState = _interopRequireDefault(require("./hooks/useEffectState"));

        var _excluded = ["prefixCls", "className", "style", "prefix", "split", "notFoundContent", "value", "defaultValue", "children", "options", "open", "validateSearch", "filterOption", "onChange", "onKeyDown", "onKeyUp", "onPressEnter", "onSearch", "onSelect", "onFocus", "onBlur", "transitionName", "placement", "direction", "getPopupContainer", "dropdownClassName"];

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

        var Mentions = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              prefix = props.prefix,
              split = props.split,
              notFoundContent = props.notFoundContent,
              value = props.value,
              defaultValue = props.defaultValue,
              children = props.children,
              options = props.options,
              open = props.open,
              validateSearch = props.validateSearch,
              filterOption = props.filterOption,
              onChange = props.onChange,
              onKeyDown = props.onKeyDown,
              onKeyUp = props.onKeyUp,
              onPressEnter = props.onPressEnter,
              onSearch = props.onSearch,
              onSelect = props.onSelect,
              onFocus = props.onFocus,
              onBlur = props.onBlur,
              transitionName = props.transitionName,
              placement = props.placement,
              direction = props.direction,
              getPopupContainer = props.getPopupContainer,
              dropdownClassName = props.dropdownClassName,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var mergedPrefix = Array.isArray(prefix) ? prefix : [prefix];
          var mergedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            prefix: mergedPrefix
          }); // =============================== Refs ===============================

          var textareaRef = (0, _react.useRef)(null);
          var measureRef = (0, _react.useRef)(null);

          var getTextArea = function getTextArea() {
            var _textareaRef$current, _textareaRef$current$;

            return (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0 ? void 0 : (_textareaRef$current$ = _textareaRef$current.resizableTextArea) === null || _textareaRef$current$ === void 0 ? void 0 : _textareaRef$current$.textArea;
          };

          _react.default.useImperativeHandle(ref, function () {
            var _textareaRef$current4, _textareaRef$current5;

            return {
              focus: function focus() {
                var _textareaRef$current2;

                return (_textareaRef$current2 = textareaRef.current) === null || _textareaRef$current2 === void 0 ? void 0 : _textareaRef$current2.focus();
              },
              blur: function blur() {
                var _textareaRef$current3;

                return (_textareaRef$current3 = textareaRef.current) === null || _textareaRef$current3 === void 0 ? void 0 : _textareaRef$current3.blur();
              },
              textarea: (_textareaRef$current4 = textareaRef.current) === null || _textareaRef$current4 === void 0 ? void 0 : (_textareaRef$current5 = _textareaRef$current4.resizableTextArea) === null || _textareaRef$current5 === void 0 ? void 0 : _textareaRef$current5.textArea
            };
          }); // ============================== State ===============================


          var _useState = (0, _react.useState)(false),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              measuring = _useState2[0],
              setMeasuring = _useState2[1];

          var _useState3 = (0, _react.useState)(''),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              measureText = _useState4[0],
              setMeasureText = _useState4[1];

          var _useState5 = (0, _react.useState)(''),
              _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
              measurePrefix = _useState6[0],
              setMeasurePrefix = _useState6[1];

          var _useState7 = (0, _react.useState)(0),
              _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
              measureLocation = _useState8[0],
              setMeasureLocation = _useState8[1];

          var _useState9 = (0, _react.useState)(0),
              _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
              activeIndex = _useState10[0],
              setActiveIndex = _useState10[1];

          var _useState11 = (0, _react.useState)(false),
              _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
              isFocus = _useState12[0],
              setIsFocus = _useState12[1]; // ============================== Value ===============================


          var _useMergedState = (0, _useMergedState3.default)('', {
            defaultValue: defaultValue,
            value: value
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              mergedValue = _useMergedState2[0],
              setMergedValue = _useMergedState2[1]; // =============================== Open ===============================


          (0, _react.useEffect)(function () {
            // Sync measure div top with textarea for rc-trigger usage
            if (measuring && measureRef.current) {
              measureRef.current.scrollTop = getTextArea().scrollTop;
            }
          }, [measuring]);

          var _React$useMemo = _react.default.useMemo(function () {
            if (open) {
              if (process.env.NODE_ENV !== 'production') {
                (0, _warning.default)(false, '`open` of Mentions is only used for debug usage. Do not use in you production.');
              }

              for (var i = 0; i < mergedPrefix.length; i += 1) {
                var curPrefix = mergedPrefix[i];
                var index = mergedValue.lastIndexOf(curPrefix);

                if (index >= 0) {
                  return [true, '', curPrefix, index];
                }
              }
            }

            return [measuring, measureText, measurePrefix, measureLocation];
          }, [open, measuring, mergedPrefix, mergedValue, measureText, measurePrefix, measureLocation]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 4),
              mergedMeasuring = _React$useMemo2[0],
              mergedMeasureText = _React$useMemo2[1],
              mergedMeasurePrefix = _React$useMemo2[2],
              mergedMeasureLocation = _React$useMemo2[3]; // ============================== Option ==============================


          var getOptions = _react.default.useCallback(function (targetMeasureText) {
            var list;

            if (options && options.length > 0) {
              list = options.map(function (item) {
                var _item$key;

                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                  key: (_item$key = item === null || item === void 0 ? void 0 : item.key) !== null && _item$key !== void 0 ? _item$key : item.value
                });
              });
            } else {
              list = (0, _toArray.default)(children).map(function (_ref) {
                var optionProps = _ref.props,
                    key = _ref.key;
                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, optionProps), {}, {
                  label: optionProps.children,
                  key: key || optionProps.value
                });
              });
            }

            return list.filter(function (option) {
              /** Return all result if `filterOption` is false. */
              if (filterOption === false) {
                return true;
              }

              return filterOption(targetMeasureText, option);
            });
          }, [children, options, filterOption]);

          var mergedOptions = _react.default.useMemo(function () {
            return getOptions(mergedMeasureText);
          }, [getOptions, mergedMeasureText]); // ============================= Measure ==============================
          // Mark that we will reset input selection to target position when user select option


          var onSelectionEffect = (0, _useEffectState.default)();

          var startMeasure = function startMeasure(nextMeasureText, nextMeasurePrefix, nextMeasureLocation) {
            setMeasuring(true);
            setMeasureText(nextMeasureText);
            setMeasurePrefix(nextMeasurePrefix);
            setMeasureLocation(nextMeasureLocation);
            setActiveIndex(0);
          };

          var stopMeasure = function stopMeasure(callback) {
            setMeasuring(false);
            setMeasureLocation(0);
            setMeasureText('');
            onSelectionEffect(callback);
          }; // ============================== Change ==============================


          var triggerChange = function triggerChange(nextValue) {
            setMergedValue(nextValue);
            onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
          };

          var onInternalChange = function onInternalChange(_ref2) {
            var nextValue = _ref2.target.value;
            triggerChange(nextValue);
          };

          var selectOption = function selectOption(option) {
            var _getTextArea;

            var _option$value = option.value,
                mentionValue = _option$value === void 0 ? '' : _option$value;

            var _replaceWithMeasure = (0, _util.replaceWithMeasure)(mergedValue, {
              measureLocation: mergedMeasureLocation,
              targetText: mentionValue,
              prefix: mergedMeasurePrefix,
              selectionStart: (_getTextArea = getTextArea()) === null || _getTextArea === void 0 ? void 0 : _getTextArea.selectionStart,
              split: split
            }),
                text = _replaceWithMeasure.text,
                selectionLocation = _replaceWithMeasure.selectionLocation;

            triggerChange(text);
            stopMeasure(function () {
              // We need restore the selection position
              (0, _util.setInputSelection)(getTextArea(), selectionLocation);
            });
            onSelect === null || onSelect === void 0 ? void 0 : onSelect(option, mergedMeasurePrefix);
          }; // ============================= KeyEvent =============================
          // Check if hit the measure keyword


          var onInternalKeyDown = function onInternalKeyDown(event) {
            var which = event.which;
            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event); // Skip if not measuring

            if (!mergedMeasuring) {
              return;
            }

            if (which === _KeyCode.default.UP || which === _KeyCode.default.DOWN) {
              // Control arrow function
              var optionLen = mergedOptions.length;
              var offset = which === _KeyCode.default.UP ? -1 : 1;
              var newActiveIndex = (activeIndex + offset + optionLen) % optionLen;
              setActiveIndex(newActiveIndex);
              event.preventDefault();
            } else if (which === _KeyCode.default.ESC) {
              stopMeasure();
            } else if (which === _KeyCode.default.ENTER) {
              // Measure hit
              event.preventDefault();

              if (!mergedOptions.length) {
                stopMeasure();
                return;
              }

              var option = mergedOptions[activeIndex];
              selectOption(option);
            }
          };
          /**
           * When to start measure:
           * 1. When user press `prefix`
           * 2. When measureText !== prevMeasureText
           *  - If measure hit
           *  - If measuring
           *
           * When to stop measure:
           * 1. Selection is out of range
           * 2. Contains `space`
           * 3. ESC or select one
           */


          var onInternalKeyUp = function onInternalKeyUp(event) {
            var key = event.key,
                which = event.which;
            var target = event.target;
            var selectionStartText = (0, _util.getBeforeSelectionText)(target);

            var _getLastMeasureIndex = (0, _util.getLastMeasureIndex)(selectionStartText, mergedPrefix),
                measureIndex = _getLastMeasureIndex.location,
                nextMeasurePrefix = _getLastMeasureIndex.prefix; // If the client implements an onKeyUp handler, call it


            onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(event); // Skip if match the white key list

            if ([_KeyCode.default.ESC, _KeyCode.default.UP, _KeyCode.default.DOWN, _KeyCode.default.ENTER].indexOf(which) !== -1) {
              return;
            }

            if (measureIndex !== -1) {
              var nextMeasureText = selectionStartText.slice(measureIndex + nextMeasurePrefix.length);
              var validateMeasure = validateSearch(nextMeasureText, mergedProps);
              var matchOption = !!getOptions(nextMeasureText).length;

              if (validateMeasure) {
                if (key === nextMeasurePrefix || key === 'Shift' || mergedMeasuring || nextMeasureText !== mergedMeasureText && matchOption) {
                  startMeasure(nextMeasureText, nextMeasurePrefix, measureIndex);
                }
              } else if (mergedMeasuring) {
                // Stop if measureText is invalidate
                stopMeasure();
              }
              /**
               * We will trigger `onSearch` to developer since they may use for async update.
               * If met `space` means user finished searching.
               */


              if (onSearch && validateMeasure) {
                onSearch(nextMeasureText, nextMeasurePrefix);
              }
            } else if (mergedMeasuring) {
              stopMeasure();
            }
          };

          var onInternalPressEnter = function onInternalPressEnter(event) {
            if (!mergedMeasuring && onPressEnter) {
              onPressEnter(event);
            }
          }; // ============================ Focus Blur ============================


          var focusRef = (0, _react.useRef)();

          var onInternalFocus = function onInternalFocus(event) {
            window.clearTimeout(focusRef.current);

            if (!isFocus && event && onFocus) {
              onFocus(event);
            }

            setIsFocus(true);
          };

          var onInternalBlur = function onInternalBlur(event) {
            focusRef.current = window.setTimeout(function () {
              setIsFocus(false);
              stopMeasure();
              onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
            }, 0);
          };

          var onDropdownFocus = function onDropdownFocus() {
            onInternalFocus();
          };

          var onDropdownBlur = function onDropdownBlur() {
            onInternalBlur();
          }; // ============================== Render ==============================


          return /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)(prefixCls, className),
            style: style
          }, /*#__PURE__*/_react.default.createElement(_rcTextarea.default, (0, _extends2.default)({
            ref: textareaRef,
            value: mergedValue
          }, restProps, {
            onChange: onInternalChange,
            onKeyDown: onInternalKeyDown,
            onKeyUp: onInternalKeyUp,
            onPressEnter: onInternalPressEnter,
            onFocus: onInternalFocus,
            onBlur: onInternalBlur
          })), mergedMeasuring && /*#__PURE__*/_react.default.createElement("div", {
            ref: measureRef,
            className: "".concat(prefixCls, "-measure")
          }, mergedValue.slice(0, mergedMeasureLocation), /*#__PURE__*/_react.default.createElement(_MentionsContext.default.Provider, {
            value: {
              notFoundContent: notFoundContent,
              activeIndex: activeIndex,
              setActiveIndex: setActiveIndex,
              selectOption: selectOption,
              onFocus: onDropdownFocus,
              onBlur: onDropdownBlur
            }
          }, /*#__PURE__*/_react.default.createElement(_KeywordTrigger.default, {
            prefixCls: prefixCls,
            transitionName: transitionName,
            placement: placement,
            direction: direction,
            options: mergedOptions,
            visible: true,
            getPopupContainer: getPopupContainer,
            dropdownClassName: dropdownClassName
          }, /*#__PURE__*/_react.default.createElement("span", null, mergedMeasurePrefix))), mergedValue.slice(mergedMeasureLocation + mergedMeasurePrefix.length)));
        });

        Mentions.defaultProps = {
          prefixCls: 'rc-mentions',
          prefix: '@',
          split: ' ',
          validateSearch: _util.validateSearch,
          filterOption: _util.filterOption,
          notFoundContent: 'Not Found',
          rows: 1
        };
        Mentions.Option = _Option.default;
        var _default = Mentions;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'classnames': _req5,
        'rc-util/lib/hooks/useMergedState': _req6,
        'rc-util/lib/Children/toArray': _req7,
        'rc-util/lib/KeyCode': _req8,
        'rc-util/lib/warning': _req9,
        'react': _req10,
        'rc-textarea': _req11,
        './KeywordTrigger': _req12,
        './MentionsContext': _req13,
        './Option': _req14,
        './util': _req15,
        './hooks/useEffectState': _req16
      }));
    }
  };
});
//# sourceMappingURL=5c9d04862987c43477261c9e978aab2471e0445c.js.map