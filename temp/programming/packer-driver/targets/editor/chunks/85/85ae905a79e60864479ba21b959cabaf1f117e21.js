System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "classnames", "rc-overflow", "rc-util/lib/warning", "rc-util/lib/KeyCode", "rc-util/lib/omit", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req4 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req5 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req6 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req7 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req8 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req9 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req11 = _classnames2.__cjsMetaURL;
    }, function (_rcOverflow2) {
      _req12 = _rcOverflow2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req13 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req14 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req15 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req16 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req17 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req18 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req19 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req20 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req21 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req22 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req23 = _unresolved_9.__cjsMetaURL;
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

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcOverflow = _interopRequireDefault(require("rc-overflow"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _MenuContext = require("./context/MenuContext");

        var _useActive2 = _interopRequireDefault(require("./hooks/useActive"));

        var _warnUtil = require("./utils/warnUtil");

        var _Icon = _interopRequireDefault(require("./Icon"));

        var _useDirectionStyle = _interopRequireDefault(require("./hooks/useDirectionStyle"));

        var _PathContext = require("./context/PathContext");

        var _IdContext = require("./context/IdContext");

        var _PrivateContext = _interopRequireDefault(require("./context/PrivateContext"));

        var _excluded = ["title", "attribute", "elementRef"],
            _excluded2 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
            _excluded3 = ["active"];

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
        } // Since Menu event provide the `info.item` which point to the MenuItem node instance.
        // We have to use class component here.
        // This should be removed from doc & api in future.


        var LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2.default)(LegacyMenuItem, _React$Component);

          var _super = (0, _createSuper2.default)(LegacyMenuItem);

          function LegacyMenuItem() {
            (0, _classCallCheck2.default)(this, LegacyMenuItem);
            return _super.apply(this, arguments);
          }

          (0, _createClass2.default)(LegacyMenuItem, [{
            key: "render",
            value: function render() {
              var _this$props = this.props,
                  title = _this$props.title,
                  attribute = _this$props.attribute,
                  elementRef = _this$props.elementRef,
                  restProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
              var passedProps = (0, _omit.default)(restProps, ['eventKey']);
              (0, _warning.default)(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
              return /*#__PURE__*/React.createElement(_rcOverflow.default.Item, (0, _extends2.default)({}, attribute, {
                title: typeof title === 'string' ? title : undefined
              }, passedProps, {
                ref: elementRef
              }));
            }
          }]);
          return LegacyMenuItem;
        }(React.Component);
        /**
         * Real Menu Item component
         */


        var InternalMenuItem = function InternalMenuItem(props) {
          var _classNames;

          var style = props.style,
              className = props.className,
              eventKey = props.eventKey,
              warnKey = props.warnKey,
              disabled = props.disabled,
              itemIcon = props.itemIcon,
              children = props.children,
              role = props.role,
              onMouseEnter = props.onMouseEnter,
              onMouseLeave = props.onMouseLeave,
              onClick = props.onClick,
              onKeyDown = props.onKeyDown,
              onFocus = props.onFocus,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded2);
          var domDataId = (0, _IdContext.useMenuId)(eventKey);

          var _React$useContext = React.useContext(_MenuContext.MenuContext),
              prefixCls = _React$useContext.prefixCls,
              onItemClick = _React$useContext.onItemClick,
              contextDisabled = _React$useContext.disabled,
              overflowDisabled = _React$useContext.overflowDisabled,
              contextItemIcon = _React$useContext.itemIcon,
              selectedKeys = _React$useContext.selectedKeys,
              onActive = _React$useContext.onActive;

          var _React$useContext2 = React.useContext(_PrivateContext.default),
              _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;

          var itemCls = "".concat(prefixCls, "-item");
          var legacyMenuItemRef = React.useRef();
          var elementRef = React.useRef();
          var mergedDisabled = contextDisabled || disabled;
          var connectedKeys = (0, _PathContext.useFullPath)(eventKey); // ================================ Warn ================================

          if (process.env.NODE_ENV !== 'production' && warnKey) {
            (0, _warning.default)(false, 'MenuItem should not leave undefined `key`.');
          } // ============================= Info =============================


          var getEventInfo = function getEventInfo(e) {
            return {
              key: eventKey,
              // Note: For legacy code is reversed which not like other antd component
              keyPath: (0, _toConsumableArray2.default)(connectedKeys).reverse(),
              item: legacyMenuItemRef.current,
              domEvent: e
            };
          }; // ============================= Icon =============================


          var mergedItemIcon = itemIcon || contextItemIcon; // ============================ Active ============================

          var _useActive = (0, _useActive2.default)(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
              active = _useActive.active,
              activeProps = (0, _objectWithoutProperties2.default)(_useActive, _excluded3); // ============================ Select ============================


          var selected = selectedKeys.includes(eventKey); // ======================== DirectionStyle ========================

          var directionStyle = (0, _useDirectionStyle.default)(connectedKeys.length); // ============================ Events ============================

          var onInternalClick = function onInternalClick(e) {
            if (mergedDisabled) {
              return;
            }

            var info = getEventInfo(e);
            onClick === null || onClick === void 0 ? void 0 : onClick((0, _warnUtil.warnItemProp)(info));
            onItemClick(info);
          };

          var onInternalKeyDown = function onInternalKeyDown(e) {
            onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);

            if (e.which === _KeyCode.default.ENTER) {
              var info = getEventInfo(e); // Legacy. Key will also trigger click event

              onClick === null || onClick === void 0 ? void 0 : onClick((0, _warnUtil.warnItemProp)(info));
              onItemClick(info);
            }
          };
          /**
           * Used for accessibility. Helper will focus element without key board.
           * We should manually trigger an active
           */


          var onInternalFocus = function onInternalFocus(e) {
            onActive(eventKey);
            onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
          }; // ============================ Render ============================


          var optionRoleProps = {};

          if (props.role === 'option') {
            optionRoleProps['aria-selected'] = selected;
          }

          var renderNode = /*#__PURE__*/React.createElement(LegacyMenuItem, (0, _extends2.default)({
            ref: legacyMenuItemRef,
            elementRef: elementRef,
            role: role === null ? 'none' : role || 'menuitem',
            tabIndex: disabled ? null : -1,
            "data-menu-id": overflowDisabled && domDataId ? null : domDataId
          }, restProps, activeProps, optionRoleProps, {
            component: "li",
            "aria-disabled": disabled,
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, directionStyle), style),
            className: (0, _classnames.default)(itemCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(itemCls, "-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(itemCls, "-selected"), selected), (0, _defineProperty2.default)(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
            onClick: onInternalClick,
            onKeyDown: onInternalKeyDown,
            onFocus: onInternalFocus
          }), children, /*#__PURE__*/React.createElement(_Icon.default, {
            props: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
              isSelected: selected
            }),
            icon: mergedItemIcon
          }));

          if (_internalRenderMenuItem) {
            renderNode = _internalRenderMenuItem(renderNode, props, {
              selected: selected
            });
          }

          return renderNode;
        };

        function MenuItem(props) {
          var eventKey = props.eventKey; // ==================== Record KeyPath ====================

          var measure = (0, _PathContext.useMeasure)();
          var connectedKeyPath = (0, _PathContext.useFullPath)(eventKey); // eslint-disable-next-line consistent-return

          React.useEffect(function () {
            if (measure) {
              measure.registerPath(eventKey, connectedKeyPath);
              return function () {
                measure.unregisterPath(eventKey, connectedKeyPath);
              };
            }
          }, [connectedKeyPath]);

          if (measure) {
            return null;
          } // ======================== Render ========================


          return /*#__PURE__*/React.createElement(InternalMenuItem, props);
        }

        var _default = MenuItem;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        '@babel/runtime/helpers/extends': _req4,
        '@babel/runtime/helpers/objectWithoutProperties': _req5,
        '@babel/runtime/helpers/classCallCheck': _req6,
        '@babel/runtime/helpers/createClass': _req7,
        '@babel/runtime/helpers/inherits': _req8,
        '@babel/runtime/helpers/createSuper': _req9,
        'react': _req10,
        'classnames': _req11,
        'rc-overflow': _req12,
        'rc-util/lib/warning': _req13,
        'rc-util/lib/KeyCode': _req14,
        'rc-util/lib/omit': _req15,
        './context/MenuContext': _req16,
        './hooks/useActive': _req17,
        './utils/warnUtil': _req18,
        './Icon': _req19,
        './hooks/useDirectionStyle': _req20,
        './context/PathContext': _req21,
        './context/IdContext': _req22,
        './context/PrivateContext': _req23
      }));
    }
  };
});
//# sourceMappingURL=85ae905a79e60864479ba21b959cabaf1f117e21.js.map