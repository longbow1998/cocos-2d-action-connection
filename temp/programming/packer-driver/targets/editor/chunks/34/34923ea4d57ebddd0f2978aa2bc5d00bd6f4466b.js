System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "classnames", "rc-overflow", "rc-util/lib/hooks/useMergedState", "rc-util/lib/warning", "react", "react-dom", "rc-util/lib/isEqual", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req6 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcOverflow2) {
      _req8 = _rcOverflow2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req9 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req10 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_react) {
      _req11 = _react.__cjsMetaURL;
    }, function (_reactDom2) {
      _req12 = _reactDom2.__cjsMetaURL;
    }, function (_rcUtilLibIsEqual) {
      _req13 = _rcUtilLibIsEqual.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req14 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req15 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req16 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req17 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req18 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req19 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req20 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req21 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req22 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req23 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req24 = _unresolved_12.__cjsMetaURL;
    }, function (_unresolved_13) {
      _req25 = _unresolved_13.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcOverflow = _interopRequireDefault(require("rc-overflow"));

        var _useMergedState7 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var React = _interopRequireWildcard(require("react"));

        var _reactDom = require("react-dom");

        var _isEqual = _interopRequireDefault(require("rc-util/lib/isEqual"));

        var _IdContext = require("./context/IdContext");

        var _MenuContext = _interopRequireDefault(require("./context/MenuContext"));

        var _PathContext = require("./context/PathContext");

        var _PrivateContext = _interopRequireDefault(require("./context/PrivateContext"));

        var _useAccessibility = _interopRequireDefault(require("./hooks/useAccessibility"));

        var _useKeyRecords2 = _interopRequireWildcard(require("./hooks/useKeyRecords"));

        var _useMemoCallback = _interopRequireDefault(require("./hooks/useMemoCallback"));

        var _useUUID = _interopRequireDefault(require("./hooks/useUUID"));

        var _MenuItem = _interopRequireDefault(require("./MenuItem"));

        var _SubMenu = _interopRequireDefault(require("./SubMenu"));

        var _nodeUtil = require("./utils/nodeUtil");

        var _warnUtil = require("./utils/warnUtil");

        var _excluded = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"];

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
        /**
         * Menu modify after refactor:
         * ## Add
         * - disabled
         *
         * ## Remove
         * - openTransitionName
         * - openAnimation
         * - onDestroy
         * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
         * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
         */
        // optimize for render


        var EMPTY_LIST = [];
        var Menu = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _childList$, _classNames;

          var _ref = props,
              _ref$prefixCls = _ref.prefixCls,
              prefixCls = _ref$prefixCls === void 0 ? 'rc-menu' : _ref$prefixCls,
              rootClassName = _ref.rootClassName,
              style = _ref.style,
              className = _ref.className,
              _ref$tabIndex = _ref.tabIndex,
              tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
              items = _ref.items,
              children = _ref.children,
              direction = _ref.direction,
              id = _ref.id,
              _ref$mode = _ref.mode,
              mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
              inlineCollapsed = _ref.inlineCollapsed,
              disabled = _ref.disabled,
              disabledOverflow = _ref.disabledOverflow,
              _ref$subMenuOpenDelay = _ref.subMenuOpenDelay,
              subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay,
              _ref$subMenuCloseDela = _ref.subMenuCloseDelay,
              subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela,
              forceSubMenuRender = _ref.forceSubMenuRender,
              defaultOpenKeys = _ref.defaultOpenKeys,
              openKeys = _ref.openKeys,
              activeKey = _ref.activeKey,
              defaultActiveFirst = _ref.defaultActiveFirst,
              _ref$selectable = _ref.selectable,
              selectable = _ref$selectable === void 0 ? true : _ref$selectable,
              _ref$multiple = _ref.multiple,
              multiple = _ref$multiple === void 0 ? false : _ref$multiple,
              defaultSelectedKeys = _ref.defaultSelectedKeys,
              selectedKeys = _ref.selectedKeys,
              onSelect = _ref.onSelect,
              onDeselect = _ref.onDeselect,
              _ref$inlineIndent = _ref.inlineIndent,
              inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent,
              motion = _ref.motion,
              defaultMotions = _ref.defaultMotions,
              _ref$triggerSubMenuAc = _ref.triggerSubMenuAction,
              triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? 'hover' : _ref$triggerSubMenuAc,
              builtinPlacements = _ref.builtinPlacements,
              itemIcon = _ref.itemIcon,
              expandIcon = _ref.expandIcon,
              _ref$overflowedIndica = _ref.overflowedIndicator,
              overflowedIndicator = _ref$overflowedIndica === void 0 ? '...' : _ref$overflowedIndica,
              overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName,
              getPopupContainer = _ref.getPopupContainer,
              onClick = _ref.onClick,
              onOpenChange = _ref.onOpenChange,
              onKeyDown = _ref.onKeyDown,
              openAnimation = _ref.openAnimation,
              openTransitionName = _ref.openTransitionName,
              _internalRenderMenuItem = _ref._internalRenderMenuItem,
              _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem,
              restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
          var childList = React.useMemo(function () {
            return (0, _nodeUtil.parseItems)(children, items, EMPTY_LIST);
          }, [children, items]);

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              mounted = _React$useState2[0],
              setMounted = _React$useState2[1];

          var containerRef = React.useRef();
          var uuid = (0, _useUUID.default)(id);
          var isRtl = direction === 'rtl'; // ========================= Warn =========================

          if (process.env.NODE_ENV !== 'production') {
            (0, _warning.default)(!openAnimation && !openTransitionName, '`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.');
          } // ========================= Open =========================


          var _useMergedState = (0, _useMergedState7.default)(defaultOpenKeys, {
            value: openKeys,
            postState: function postState(keys) {
              return keys || EMPTY_LIST;
            }
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              mergedOpenKeys = _useMergedState2[0],
              setMergedOpenKeys = _useMergedState2[1]; // React 18 will merge mouse event which means we open key will not sync
          // ref: https://github.com/ant-design/ant-design/issues/38818


          var triggerOpenKeys = function triggerOpenKeys(keys) {
            var forceFlush = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            function doUpdate() {
              setMergedOpenKeys(keys);
              onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
            }

            if (forceFlush) {
              (0, _reactDom.flushSync)(doUpdate);
            } else {
              doUpdate();
            }
          }; // >>>>> Cache & Reset open keys when inlineCollapsed changed


          var _React$useState3 = React.useState(mergedOpenKeys),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              inlineCacheOpenKeys = _React$useState4[0],
              setInlineCacheOpenKeys = _React$useState4[1];

          var mountRef = React.useRef(false); // ========================= Mode =========================

          var _React$useMemo = React.useMemo(function () {
            if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
              return ['vertical', inlineCollapsed];
            }

            return [mode, false];
          }, [mode, inlineCollapsed]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
              mergedMode = _React$useMemo2[0],
              mergedInlineCollapsed = _React$useMemo2[1];

          var isInlineMode = mergedMode === 'inline';

          var _React$useState5 = React.useState(mergedMode),
              _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
              internalMode = _React$useState6[0],
              setInternalMode = _React$useState6[1];

          var _React$useState7 = React.useState(mergedInlineCollapsed),
              _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
              internalInlineCollapsed = _React$useState8[0],
              setInternalInlineCollapsed = _React$useState8[1];

          React.useEffect(function () {
            setInternalMode(mergedMode);
            setInternalInlineCollapsed(mergedInlineCollapsed);

            if (!mountRef.current) {
              return;
            } // Synchronously update MergedOpenKeys


            if (isInlineMode) {
              setMergedOpenKeys(inlineCacheOpenKeys);
            } else {
              // Trigger open event in case its in control
              triggerOpenKeys(EMPTY_LIST);
            }
          }, [mergedMode, mergedInlineCollapsed]); // ====================== Responsive ======================

          var _React$useState9 = React.useState(0),
              _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
              lastVisibleIndex = _React$useState10[0],
              setLastVisibleIndex = _React$useState10[1];

          var allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== 'horizontal' || disabledOverflow; // Cache

          React.useEffect(function () {
            if (isInlineMode) {
              setInlineCacheOpenKeys(mergedOpenKeys);
            }
          }, [mergedOpenKeys]);
          React.useEffect(function () {
            mountRef.current = true;
            return function () {
              mountRef.current = false;
            };
          }, []); // ========================= Path =========================

          var _useKeyRecords = (0, _useKeyRecords2.default)(),
              registerPath = _useKeyRecords.registerPath,
              unregisterPath = _useKeyRecords.unregisterPath,
              refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
              isSubPathKey = _useKeyRecords.isSubPathKey,
              getKeyPath = _useKeyRecords.getKeyPath,
              getKeys = _useKeyRecords.getKeys,
              getSubPathKeys = _useKeyRecords.getSubPathKeys;

          var registerPathContext = React.useMemo(function () {
            return {
              registerPath: registerPath,
              unregisterPath: unregisterPath
            };
          }, [registerPath, unregisterPath]);
          var pathUserContext = React.useMemo(function () {
            return {
              isSubPathKey: isSubPathKey
            };
          }, [isSubPathKey]);
          React.useEffect(function () {
            refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
              return child.key;
            }));
          }, [lastVisibleIndex, allVisible]); // ======================== Active ========================

          var _useMergedState3 = (0, _useMergedState7.default)(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
            value: activeKey
          }),
              _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
              mergedActiveKey = _useMergedState4[0],
              setMergedActiveKey = _useMergedState4[1];

          var onActive = (0, _useMemoCallback.default)(function (key) {
            setMergedActiveKey(key);
          });
          var onInactive = (0, _useMemoCallback.default)(function () {
            setMergedActiveKey(undefined);
          });
          (0, React.useImperativeHandle)(ref, function () {
            return {
              list: containerRef.current,
              focus: function focus(options) {
                var _childList$find;

                var shouldFocusKey = mergedActiveKey !== null && mergedActiveKey !== void 0 ? mergedActiveKey : (_childList$find = childList.find(function (node) {
                  return !node.props.disabled;
                })) === null || _childList$find === void 0 ? void 0 : _childList$find.key;

                if (shouldFocusKey) {
                  var _containerRef$current, _containerRef$current2, _containerRef$current3;

                  (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.querySelector("li[data-menu-id='".concat((0, _IdContext.getMenuId)(uuid, shouldFocusKey), "']"))) === null || _containerRef$current2 === void 0 ? void 0 : (_containerRef$current3 = _containerRef$current2.focus) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.call(_containerRef$current2, options);
                }
              }
            };
          }); // ======================== Select ========================
          // >>>>> Select keys

          var _useMergedState5 = (0, _useMergedState7.default)(defaultSelectedKeys || [], {
            value: selectedKeys,
            // Legacy convert key to array
            postState: function postState(keys) {
              if (Array.isArray(keys)) {
                return keys;
              }

              if (keys === null || keys === undefined) {
                return EMPTY_LIST;
              }

              return [keys];
            }
          }),
              _useMergedState6 = (0, _slicedToArray2.default)(_useMergedState5, 2),
              mergedSelectKeys = _useMergedState6[0],
              setMergedSelectKeys = _useMergedState6[1]; // >>>>> Trigger select


          var triggerSelection = function triggerSelection(info) {
            if (selectable) {
              // Insert or Remove
              var targetKey = info.key;
              var exist = mergedSelectKeys.includes(targetKey);
              var newSelectKeys;

              if (multiple) {
                if (exist) {
                  newSelectKeys = mergedSelectKeys.filter(function (key) {
                    return key !== targetKey;
                  });
                } else {
                  newSelectKeys = [].concat((0, _toConsumableArray2.default)(mergedSelectKeys), [targetKey]);
                }
              } else {
                newSelectKeys = [targetKey];
              }

              setMergedSelectKeys(newSelectKeys); // Trigger event

              var selectInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, info), {}, {
                selectedKeys: newSelectKeys
              });

              if (exist) {
                onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
              } else {
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
              }
            } // Whatever selectable, always close it


            if (!multiple && mergedOpenKeys.length && internalMode !== 'inline') {
              triggerOpenKeys(EMPTY_LIST);
            }
          }; // ========================= Open =========================

          /**
           * Click for item. SubMenu do not have selection status
           */


          var onInternalClick = (0, _useMemoCallback.default)(function (info) {
            onClick === null || onClick === void 0 ? void 0 : onClick((0, _warnUtil.warnItemProp)(info));
            triggerSelection(info);
          });
          var onInternalOpenChange = (0, _useMemoCallback.default)(function (key, open) {
            var newOpenKeys = mergedOpenKeys.filter(function (k) {
              return k !== key;
            });

            if (open) {
              newOpenKeys.push(key);
            } else if (internalMode !== 'inline') {
              // We need find all related popup to close
              var subPathKeys = getSubPathKeys(key);
              newOpenKeys = newOpenKeys.filter(function (k) {
                return !subPathKeys.has(k);
              });
            }

            if (!(0, _isEqual.default)(mergedOpenKeys, newOpenKeys, true)) {
              triggerOpenKeys(newOpenKeys, true);
            }
          });
          var getInternalPopupContainer = (0, _useMemoCallback.default)(getPopupContainer); // ==================== Accessibility =====================

          var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
            var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
            onInternalOpenChange(key, nextOpen);
          };

          var onInternalKeyDown = (0, _useAccessibility.default)(internalMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown); // ======================== Effect ========================

          React.useEffect(function () {
            setMounted(true);
          }, []); // ======================= Context ========================

          var privateContext = React.useMemo(function () {
            return {
              _internalRenderMenuItem: _internalRenderMenuItem,
              _internalRenderSubMenuItem: _internalRenderSubMenuItem
            };
          }, [_internalRenderMenuItem, _internalRenderSubMenuItem]); // ======================== Render ========================
          // >>>>> Children

          var wrappedChildList = internalMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
          childList.map(function (child, index) {
            return (
              /*#__PURE__*/
              // Always wrap provider to avoid sub node re-mount
              React.createElement(_MenuContext.default, {
                key: child.key,
                overflowDisabled: index > lastVisibleIndex
              }, child)
            );
          }); // >>>>> Container

          var container = /*#__PURE__*/React.createElement(_rcOverflow.default, (0, _extends2.default)({
            id: id,
            ref: containerRef,
            prefixCls: "".concat(prefixCls, "-overflow"),
            component: "ul",
            itemComponent: _MenuItem.default,
            className: (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(internalMode), className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-inline-collapsed"), internalInlineCollapsed), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames), rootClassName),
            dir: direction,
            style: style,
            role: "menu",
            tabIndex: tabIndex,
            data: wrappedChildList,
            renderRawItem: function renderRawItem(node) {
              return node;
            },
            renderRawRest: function renderRawRest(omitItems) {
              // We use origin list since wrapped list use context to prevent open
              var len = omitItems.length;
              var originOmitItems = len ? childList.slice(-len) : null;
              return /*#__PURE__*/React.createElement(_SubMenu.default, {
                eventKey: _useKeyRecords2.OVERFLOW_KEY,
                title: overflowedIndicator,
                disabled: allVisible,
                internalPopupClose: len === 0,
                popupClassName: overflowedIndicatorPopupClassName
              }, originOmitItems);
            },
            maxCount: internalMode !== 'horizontal' || disabledOverflow ? _rcOverflow.default.INVALIDATE : _rcOverflow.default.RESPONSIVE,
            ssr: "full",
            "data-menu-list": true,
            onVisibleChange: function onVisibleChange(newLastIndex) {
              setLastVisibleIndex(newLastIndex);
            },
            onKeyDown: onInternalKeyDown
          }, restProps)); // >>>>> Render

          return /*#__PURE__*/React.createElement(_PrivateContext.default.Provider, {
            value: privateContext
          }, /*#__PURE__*/React.createElement(_IdContext.IdContext.Provider, {
            value: uuid
          }, /*#__PURE__*/React.createElement(_MenuContext.default, {
            prefixCls: prefixCls,
            rootClassName: rootClassName,
            mode: internalMode,
            openKeys: mergedOpenKeys,
            rtl: isRtl // Disabled
            ,
            disabled: disabled // Motion
            ,
            motion: mounted ? motion : null,
            defaultMotions: mounted ? defaultMotions : null // Active
            ,
            activeKey: mergedActiveKey,
            onActive: onActive,
            onInactive: onInactive // Selection
            ,
            selectedKeys: mergedSelectKeys // Level
            ,
            inlineIndent: inlineIndent // Popup
            ,
            subMenuOpenDelay: subMenuOpenDelay,
            subMenuCloseDelay: subMenuCloseDelay,
            forceSubMenuRender: forceSubMenuRender,
            builtinPlacements: builtinPlacements,
            triggerSubMenuAction: triggerSubMenuAction,
            getPopupContainer: getInternalPopupContainer // Icon
            ,
            itemIcon: itemIcon,
            expandIcon: expandIcon // Events
            ,
            onItemClick: onInternalClick,
            onOpenChange: onInternalOpenChange
          }, /*#__PURE__*/React.createElement(_PathContext.PathUserContext.Provider, {
            value: pathUserContext
          }, container), /*#__PURE__*/React.createElement("div", {
            style: {
              display: 'none'
            },
            "aria-hidden": true
          }, /*#__PURE__*/React.createElement(_PathContext.PathRegisterContext.Provider, {
            value: registerPathContext
          }, childList)))));
        });
        var _default = Menu;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/objectWithoutProperties': _req6,
        'classnames': _req7,
        'rc-overflow': _req8,
        'rc-util/lib/hooks/useMergedState': _req9,
        'rc-util/lib/warning': _req10,
        'react': _req11,
        'react-dom': _req12,
        'rc-util/lib/isEqual': _req13,
        './context/IdContext': _req14,
        './context/MenuContext': _req15,
        './context/PathContext': _req16,
        './context/PrivateContext': _req17,
        './hooks/useAccessibility': _req18,
        './hooks/useKeyRecords': _req19,
        './hooks/useMemoCallback': _req20,
        './hooks/useUUID': _req21,
        './MenuItem': _req22,
        './SubMenu': _req23,
        './utils/nodeUtil': _req24,
        './utils/warnUtil': _req25
      }));
    }
  };
});
//# sourceMappingURL=34923ea4d57ebddd0f2978aa2bc5d00bd6f4466b.js.map