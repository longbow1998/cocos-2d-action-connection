System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "classnames", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/hooks/useMergedState", "rc-util/lib/isMobile", "rc-util/lib/KeyCode", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _cjsExports, ___esModule, _default0, _isMultiple, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req1 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req6 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req7 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req9 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req10 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibIsMobile) {
      _req11 = _rcUtilLibIsMobile.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req12 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req13 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req14 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req15 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req16 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req17 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req18 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req19 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req20 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req21 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req22 = _unresolved_9.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;
        exports.isMultiple = isMultiple;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _isMobile = _interopRequireDefault(require("rc-util/lib/isMobile"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _ref2 = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _useBaseProps = require("./hooks/useBaseProps");

        var _useDelayReset3 = _interopRequireDefault(require("./hooks/useDelayReset"));

        var _useLock3 = _interopRequireDefault(require("./hooks/useLock"));

        var _useSelectTriggerControl = _interopRequireDefault(require("./hooks/useSelectTriggerControl"));

        var _Selector = _interopRequireDefault(require("./Selector"));

        var _SelectTrigger = _interopRequireDefault(require("./SelectTrigger"));

        var _TransBtn = _interopRequireDefault(require("./TransBtn"));

        var _valueUtil = require("./utils/valueUtil");

        var _excluded = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

        var DEFAULT_OMIT_PROPS = ['value', 'onChange', 'removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'onPopupScroll', 'tabIndex'];

        function isMultiple(mode) {
          return mode === 'tags' || mode === 'multiple';
        }

        var BaseSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _customizeRawInputEle, _classNames2;

          var id = props.id,
              prefixCls = props.prefixCls,
              className = props.className,
              showSearch = props.showSearch,
              tagRender = props.tagRender,
              direction = props.direction,
              omitDomProps = props.omitDomProps,
              displayValues = props.displayValues,
              onDisplayValuesChange = props.onDisplayValuesChange,
              emptyOptions = props.emptyOptions,
              _props$notFoundConten = props.notFoundContent,
              notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
              onClear = props.onClear,
              mode = props.mode,
              disabled = props.disabled,
              loading = props.loading,
              getInputElement = props.getInputElement,
              getRawInputElement = props.getRawInputElement,
              open = props.open,
              defaultOpen = props.defaultOpen,
              onDropdownVisibleChange = props.onDropdownVisibleChange,
              activeValue = props.activeValue,
              onActiveValueChange = props.onActiveValueChange,
              activeDescendantId = props.activeDescendantId,
              searchValue = props.searchValue,
              autoClearSearchValue = props.autoClearSearchValue,
              onSearch = props.onSearch,
              onSearchSplit = props.onSearchSplit,
              tokenSeparators = props.tokenSeparators,
              allowClear = props.allowClear,
              showArrow = props.showArrow,
              inputIcon = props.inputIcon,
              clearIcon = props.clearIcon,
              OptionList = props.OptionList,
              animation = props.animation,
              transitionName = props.transitionName,
              dropdownStyle = props.dropdownStyle,
              dropdownClassName = props.dropdownClassName,
              dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
              dropdownRender = props.dropdownRender,
              dropdownAlign = props.dropdownAlign,
              placement = props.placement,
              getPopupContainer = props.getPopupContainer,
              _props$showAction = props.showAction,
              showAction = _props$showAction === void 0 ? [] : _props$showAction,
              onFocus = props.onFocus,
              onBlur = props.onBlur,
              onKeyUp = props.onKeyUp,
              onKeyDown = props.onKeyDown,
              onMouseDown = props.onMouseDown,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded); // ============================== MISC ==============================

          var multiple = isMultiple(mode);
          var mergedShowSearch = (showSearch !== undefined ? showSearch : multiple) || mode === 'combobox';
          var domProps = (0, _objectSpread2.default)({}, restProps);
          DEFAULT_OMIT_PROPS.forEach(function (propName) {
            delete domProps[propName];
          });
          omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach(function (propName) {
            delete domProps[propName];
          }); // ============================= Mobile =============================

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              mobile = _React$useState2[0],
              setMobile = _React$useState2[1];

          React.useEffect(function () {
            // Only update on the client side
            setMobile((0, _isMobile.default)());
          }, []); // ============================== Refs ==============================

          var containerRef = React.useRef(null);
          var selectorDomRef = React.useRef(null);
          var triggerRef = React.useRef(null);
          var selectorRef = React.useRef(null);
          var listRef = React.useRef(null);
          /** Used for component focused management */

          var _useDelayReset = (0, _useDelayReset3.default)(),
              _useDelayReset2 = (0, _slicedToArray2.default)(_useDelayReset, 3),
              mockFocused = _useDelayReset2[0],
              setMockFocused = _useDelayReset2[1],
              cancelSetMockFocused = _useDelayReset2[2]; // =========================== Imperative ===========================


          React.useImperativeHandle(ref, function () {
            var _selectorRef$current, _selectorRef$current2;

            return {
              focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
              blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
              scrollTo: function scrollTo(arg) {
                var _listRef$current;

                return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
              }
            };
          }); // ========================== Search Value ==========================

          var mergedSearchValue = React.useMemo(function () {
            var _displayValues$;

            if (mode !== 'combobox') {
              return searchValue;
            }

            var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
            return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
          }, [searchValue, mode, displayValues]); // ========================== Custom Input ==========================
          // Only works in `combobox`

          var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null; // Used for customize replacement for `rc-cascader`

          var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
          var customizeRawInputRef = (0, _ref2.useComposeRef)(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 ? void 0 : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref); // ============================== Open ==============================

          var _useMergedState = (0, _useMergedState3.default)(undefined, {
            defaultValue: defaultOpen,
            value: open
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              innerOpen = _useMergedState2[0],
              setInnerOpen = _useMergedState2[1];

          var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

          var emptyListContent = !notFoundContent && emptyOptions;

          if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
            mergedOpen = false;
          }

          var triggerOpen = emptyListContent ? false : mergedOpen;
          var onToggleOpen = React.useCallback(function (newOpen) {
            var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

            if (!disabled) {
              setInnerOpen(nextOpen);

              if (mergedOpen !== nextOpen) {
                onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 ? void 0 : onDropdownVisibleChange(nextOpen);
              }
            }
          }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]); // ============================= Search =============================

          var tokenWithEnter = React.useMemo(function () {
            return (tokenSeparators || []).some(function (tokenSeparator) {
              return ['\n', '\r\n'].includes(tokenSeparator);
            });
          }, [tokenSeparators]);

          var onInternalSearch = function onInternalSearch(searchText, fromTyping, isCompositing) {
            var ret = true;
            var newSearchText = searchText;
            onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null); // Check if match the `tokenSeparators`

            var patchLabels = isCompositing ? null : (0, _valueUtil.getSeparatedContent)(searchText, tokenSeparators); // Ignore combobox since it's not split-able

            if (mode !== 'combobox' && patchLabels) {
              newSearchText = '';
              onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels); // Should close when paste finish

              onToggleOpen(false); // Tell Selector that break next actions

              ret = false;
            }

            if (onSearch && mergedSearchValue !== newSearchText) {
              onSearch(newSearchText, {
                source: fromTyping ? 'typing' : 'effect'
              });
            }

            return ret;
          }; // Only triggered when menu is closed & mode is tags
          // If menu is open, OptionList will take charge
          // If mode isn't tags, press enter is not meaningful when you can't see any option


          var onInternalSearchSubmit = function onInternalSearchSubmit(searchText) {
            // prevent empty tags from appearing when you click the Enter button
            if (!searchText || !searchText.trim()) {
              return;
            }

            onSearch(searchText, {
              source: 'submit'
            });
          }; // Close will clean up single mode search text


          React.useEffect(function () {
            if (!mergedOpen && !multiple && mode !== 'combobox') {
              onInternalSearch('', false, false);
            }
          }, [mergedOpen]); // ============================ Disabled ============================
          // Close dropdown & remove focus state when disabled change

          React.useEffect(function () {
            if (innerOpen && disabled) {
              setInnerOpen(false);
            }

            if (disabled) {
              setMockFocused(false);
            }
          }, [disabled]); // ============================ Keyboard ============================

          /**
           * We record input value here to check if can press to clean up by backspace
           * - null: Key is not down, this is reset by key up
           * - true: Search text is empty when first time backspace down
           * - false: Search text is not empty when first time backspace down
           */

          var _useLock = (0, _useLock3.default)(),
              _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
              getClearLock = _useLock2[0],
              setClearLock = _useLock2[1]; // KeyDown


          var onInternalKeyDown = function onInternalKeyDown(event) {
            var clearLock = getClearLock();
            var which = event.which;

            if (which === _KeyCode.default.ENTER) {
              // Do not submit form when type in the input
              if (mode !== 'combobox') {
                event.preventDefault();
              } // We only manage open state here, close logic should handle by list component


              if (!mergedOpen) {
                onToggleOpen(true);
              }
            }

            setClearLock(!!mergedSearchValue); // Remove value by `backspace`

            if (which === _KeyCode.default.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
              var cloneDisplayValues = (0, _toConsumableArray2.default)(displayValues);
              var removedDisplayValue = null;

              for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
                var current = cloneDisplayValues[i];

                if (!current.disabled) {
                  cloneDisplayValues.splice(i, 1);
                  removedDisplayValue = current;
                  break;
                }
              }

              if (removedDisplayValue) {
                onDisplayValuesChange(cloneDisplayValues, {
                  type: 'remove',
                  values: [removedDisplayValue]
                });
              }
            }

            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }

            if (mergedOpen && listRef.current) {
              var _listRef$current2;

              (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
            }

            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
          }; // KeyUp


          var onInternalKeyUp = function onInternalKeyUp(event) {
            for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              rest[_key2 - 1] = arguments[_key2];
            }

            if (mergedOpen && listRef.current) {
              var _listRef$current3;

              (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
            }

            onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
          }; // ============================ Selector ============================


          var onSelectorRemove = function onSelectorRemove(val) {
            var newValues = displayValues.filter(function (i) {
              return i !== val;
            });
            onDisplayValuesChange(newValues, {
              type: 'remove',
              values: [val]
            });
          }; // ========================== Focus / Blur ==========================

          /** Record real focus status */


          var focusRef = React.useRef(false);

          var onContainerFocus = function onContainerFocus() {
            setMockFocused(true);

            if (!disabled) {
              if (onFocus && !focusRef.current) {
                onFocus.apply(void 0, arguments);
              } // `showAction` should handle `focus` if set


              if (showAction.includes('focus')) {
                onToggleOpen(true);
              }
            }

            focusRef.current = true;
          };

          var onContainerBlur = function onContainerBlur() {
            setMockFocused(false, function () {
              focusRef.current = false;
              onToggleOpen(false);
            });

            if (disabled) {
              return;
            }

            if (mergedSearchValue) {
              // `tags` mode should move `searchValue` into values
              if (mode === 'tags') {
                onSearch(mergedSearchValue, {
                  source: 'submit'
                });
              } else if (mode === 'multiple') {
                // `multiple` mode only clean the search value but not trigger event
                onSearch('', {
                  source: 'blur'
                });
              }
            }

            if (onBlur) {
              onBlur.apply(void 0, arguments);
            }
          }; // Give focus back of Select


          var activeTimeoutIds = [];
          React.useEffect(function () {
            return function () {
              activeTimeoutIds.forEach(function (timeoutId) {
                return clearTimeout(timeoutId);
              });
              activeTimeoutIds.splice(0, activeTimeoutIds.length);
            };
          }, []);

          var onInternalMouseDown = function onInternalMouseDown(event) {
            var _triggerRef$current;

            var target = event.target;
            var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

            if (popupElement && popupElement.contains(target)) {
              var timeoutId = setTimeout(function () {
                var index = activeTimeoutIds.indexOf(timeoutId);

                if (index !== -1) {
                  activeTimeoutIds.splice(index, 1);
                }

                cancelSetMockFocused();

                if (!mobile && !popupElement.contains(document.activeElement)) {
                  var _selectorRef$current3;

                  (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
                }
              });
              activeTimeoutIds.push(timeoutId);
            }

            for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              restArgs[_key3 - 1] = arguments[_key3];
            }

            onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
          }; // ============================ Dropdown ============================


          var _React$useState3 = React.useState(null),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              containerWidth = _React$useState4[0],
              setContainerWidth = _React$useState4[1];

          var _React$useState5 = React.useState({}),
              _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
              forceUpdate = _React$useState6[1]; // We need force update here since popup dom is render async


          function onPopupMouseEnter() {
            forceUpdate({});
          }

          (0, _useLayoutEffect.default)(function () {
            if (triggerOpen) {
              var _containerRef$current;

              var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);

              if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
                setContainerWidth(newWidth);
              }
            }
          }, [triggerOpen]); // Used for raw custom input trigger

          var onTriggerVisibleChange;

          if (customizeRawInputElement) {
            onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
              onToggleOpen(newOpen);
            };
          } // Close when click on non-select element


          (0, _useSelectTriggerControl.default)(function () {
            var _triggerRef$current2;

            return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
          }, triggerOpen, onToggleOpen, !!customizeRawInputElement); // ============================ Context =============================

          var baseSelectContext = React.useMemo(function () {
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
              notFoundContent: notFoundContent,
              open: mergedOpen,
              triggerOpen: triggerOpen,
              id: id,
              showSearch: mergedShowSearch,
              multiple: multiple,
              toggleOpen: onToggleOpen
            });
          }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]); // ==================================================================
          // ==                            Render                            ==
          // ==================================================================
          // ============================= Arrow ==============================

          var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !multiple && mode !== 'combobox';
          var arrowNode;

          if (mergedShowArrow) {
            arrowNode = /*#__PURE__*/React.createElement(_TransBtn.default, {
              className: (0, _classnames.default)("".concat(prefixCls, "-arrow"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-arrow-loading"), loading)),
              customizeIcon: inputIcon,
              customizeIconProps: {
                loading: loading,
                searchValue: mergedSearchValue,
                open: mergedOpen,
                focused: mockFocused,
                showSearch: mergedShowSearch
              }
            });
          } // ============================= Clear ==============================


          var clearNode;

          var onClearMouseDown = function onClearMouseDown() {
            var _selectorRef$current4;

            onClear === null || onClear === void 0 ? void 0 : onClear();
            (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 ? void 0 : _selectorRef$current4.focus();
            onDisplayValuesChange([], {
              type: 'clear',
              values: displayValues
            });
            onInternalSearch('', false, false);
          };

          if (!disabled && allowClear && (displayValues.length || mergedSearchValue) && !(mode === 'combobox' && mergedSearchValue === '')) {
            clearNode = /*#__PURE__*/React.createElement(_TransBtn.default, {
              className: "".concat(prefixCls, "-clear"),
              onMouseDown: onClearMouseDown,
              customizeIcon: clearIcon
            }, "\xD7");
          } // =========================== OptionList ===========================


          var optionList = /*#__PURE__*/React.createElement(OptionList, {
            ref: listRef
          }); // ============================= Select =============================

          var mergedClassName = (0, _classnames.default)(prefixCls, className, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-multiple"), multiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-single"), !multiple), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2)); // >>> Selector

          var selectorNode = /*#__PURE__*/React.createElement(_SelectTrigger.default, {
            ref: triggerRef,
            disabled: disabled,
            prefixCls: prefixCls,
            visible: triggerOpen,
            popupElement: optionList,
            containerWidth: containerWidth,
            animation: animation,
            transitionName: transitionName,
            dropdownStyle: dropdownStyle,
            dropdownClassName: dropdownClassName,
            direction: direction,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth,
            dropdownRender: dropdownRender,
            dropdownAlign: dropdownAlign,
            placement: placement,
            getPopupContainer: getPopupContainer,
            empty: emptyOptions,
            getTriggerDOMNode: function getTriggerDOMNode() {
              return selectorDomRef.current;
            },
            onPopupVisibleChange: onTriggerVisibleChange,
            onPopupMouseEnter: onPopupMouseEnter
          }, customizeRawInputElement ? /*#__PURE__*/React.cloneElement(customizeRawInputElement, {
            ref: customizeRawInputRef
          }) : /*#__PURE__*/React.createElement(_Selector.default, (0, _extends2.default)({}, props, {
            domRef: selectorDomRef,
            prefixCls: prefixCls,
            inputElement: customizeInputElement,
            ref: selectorRef,
            id: id,
            showSearch: mergedShowSearch,
            autoClearSearchValue: autoClearSearchValue,
            mode: mode,
            activeDescendantId: activeDescendantId,
            tagRender: tagRender,
            values: displayValues,
            open: mergedOpen,
            onToggleOpen: onToggleOpen,
            activeValue: activeValue,
            searchValue: mergedSearchValue,
            onSearch: onInternalSearch,
            onSearchSubmit: onInternalSearchSubmit,
            onRemove: onSelectorRemove,
            tokenWithEnter: tokenWithEnter
          }))); // >>> Render

          var renderNode; // Render raw

          if (customizeRawInputElement) {
            renderNode = selectorNode;
          } else {
            renderNode = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
              className: mergedClassName
            }, domProps, {
              ref: containerRef,
              onMouseDown: onInternalMouseDown,
              onKeyDown: onInternalKeyDown,
              onKeyUp: onInternalKeyUp,
              onFocus: onContainerFocus,
              onBlur: onContainerBlur
            }), mockFocused && !mergedOpen && /*#__PURE__*/React.createElement("span", {
              style: {
                width: 0,
                height: 0,
                position: 'absolute',
                overflow: 'hidden',
                opacity: 0
              },
              "aria-live": "polite"
            }, "".concat(displayValues.map(function (_ref) {
              var label = _ref.label,
                  value = _ref.value;
              return ['number', 'string'].includes((0, _typeof2.default)(label)) ? label : value;
            }).join(', '))), selectorNode, arrowNode, clearNode);
          }

          return /*#__PURE__*/React.createElement(_useBaseProps.BaseSelectContext.Provider, {
            value: baseSelectContext
          }, renderNode);
        }); // Set display name for dev

        if (process.env.NODE_ENV !== 'production') {
          BaseSelect.displayName = 'BaseSelect';
        }

        var _default = BaseSelect;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _isMultiple = module.exports.isMultiple;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/typeof': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/objectSpread2': _req6,
        '@babel/runtime/helpers/objectWithoutProperties': _req7,
        'classnames': _req8,
        'rc-util/lib/hooks/useLayoutEffect': _req9,
        'rc-util/lib/hooks/useMergedState': _req10,
        'rc-util/lib/isMobile': _req11,
        'rc-util/lib/KeyCode': _req12,
        'rc-util/lib/ref': _req13,
        'react': _req14,
        './hooks/useBaseProps': _req15,
        './hooks/useDelayReset': _req16,
        './hooks/useLock': _req17,
        './hooks/useSelectTriggerControl': _req18,
        './Selector': _req19,
        './SelectTrigger': _req20,
        './TransBtn': _req21,
        './utils/valueUtil': _req22
      }));
    }
  };
});
//# sourceMappingURL=d6523489f015ebc602df3ecf8611602cd04432c3.js.map