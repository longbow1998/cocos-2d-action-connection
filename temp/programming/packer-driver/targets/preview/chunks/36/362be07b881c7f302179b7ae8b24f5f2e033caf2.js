System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/EllipsisOutlined", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsEllipsisOutlined) {
      _req3 = _antDesignIconsEllipsisOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req10 = _unresolved_6.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons/EllipsisOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../button"));

        var _configProvider = require("../config-provider");

        var _Compact = require("../space/Compact");

        var _dropdown = _interopRequireDefault(require("./dropdown"));

        var _space = _interopRequireDefault(require("../space"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var DropdownButton = function DropdownButton(props) {
          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getContextPopupContainer = _React$useContext.getPopupContainer,
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$type = props.type,
              type = _props$type === void 0 ? 'default' : _props$type,
              danger = props.danger,
              disabled = props.disabled,
              loading = props.loading,
              onClick = props.onClick,
              htmlType = props.htmlType,
              children = props.children,
              className = props.className,
              menu = props.menu,
              arrow = props.arrow,
              autoFocus = props.autoFocus,
              overlay = props.overlay,
              trigger = props.trigger,
              align = props.align,
              visible = props.visible,
              open = props.open,
              onVisibleChange = props.onVisibleChange,
              onOpenChange = props.onOpenChange,
              placement = props.placement,
              getPopupContainer = props.getPopupContainer,
              href = props.href,
              _props$icon = props.icon,
              icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null) : _props$icon,
              title = props.title,
              _props$buttonsRender = props.buttonsRender,
              buttonsRender = _props$buttonsRender === void 0 ? function (buttons) {
            return buttons;
          } : _props$buttonsRender,
              mouseEnterDelay = props.mouseEnterDelay,
              mouseLeaveDelay = props.mouseLeaveDelay,
              overlayClassName = props.overlayClassName,
              overlayStyle = props.overlayStyle,
              destroyPopupOnHide = props.destroyPopupOnHide,
              restProps = __rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "visible", "open", "onVisibleChange", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide"]);

          var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
          var dropdownProps = {
            menu: menu,
            arrow: arrow,
            autoFocus: autoFocus,
            align: align,
            disabled: disabled,
            trigger: disabled ? [] : trigger,
            onOpenChange: onOpenChange || onVisibleChange,
            getPopupContainer: getPopupContainer || getContextPopupContainer,
            mouseEnterDelay: mouseEnterDelay,
            mouseLeaveDelay: mouseLeaveDelay,
            overlayClassName: overlayClassName,
            overlayStyle: overlayStyle,
            destroyPopupOnHide: destroyPopupOnHide
          };

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames;

          var classes = (0, _classnames["default"])(prefixCls, compactItemClassnames, className);

          if ('overlay' in props) {
            dropdownProps.overlay = overlay;
          }

          if ('open' in props) {
            dropdownProps.open = open;
          } else if ('visible' in props) {
            dropdownProps.open = visible;
          }

          if ('placement' in props) {
            dropdownProps.placement = placement;
          } else {
            dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
          }

          var leftButton = /*#__PURE__*/React.createElement(_button["default"], {
            type: type,
            danger: danger,
            disabled: disabled,
            loading: loading,
            onClick: onClick,
            htmlType: htmlType,
            href: href,
            title: title
          }, children);
          var rightButton = /*#__PURE__*/React.createElement(_button["default"], {
            type: type,
            danger: danger,
            icon: icon
          });

          var _buttonsRender = buttonsRender([leftButton, rightButton]),
              _buttonsRender2 = (0, _slicedToArray2["default"])(_buttonsRender, 2),
              leftButtonToRender = _buttonsRender2[0],
              rightButtonToRender = _buttonsRender2[1];

          return /*#__PURE__*/React.createElement(_space["default"].Compact, (0, _extends2["default"])({
            className: classes,
            size: compactSize,
            block: true
          }, restProps), leftButtonToRender, /*#__PURE__*/React.createElement(_dropdown["default"], (0, _extends2["default"])({}, dropdownProps), rightButtonToRender));
        };

        DropdownButton.__ANT_BUTTON = true;
        var _default = DropdownButton;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@ant-design/icons/EllipsisOutlined': _req3,
        'classnames': _req4,
        'react': _req5,
        '../button': _req6,
        '../config-provider': _req7,
        '../space/Compact': _req8,
        './dropdown': _req9,
        '../space': _req10
      }));
    }
  };
});
//# sourceMappingURL=362be07b881c7f302179b7ae8b24f5f2e033caf2.js.map