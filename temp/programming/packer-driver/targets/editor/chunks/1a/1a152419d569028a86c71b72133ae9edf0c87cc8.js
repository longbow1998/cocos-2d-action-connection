System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/CloseOutlined", "classnames", "rc-drawer", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req4 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcDrawer2) {
      _req6 = _rcDrawer2.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req13 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcDrawer = _interopRequireDefault(require("rc-drawer"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _context = require("../form/context");

        var _motion = require("../_util/motion");

        var _type = require("../_util/type");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _Compact = require("../space/Compact");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var SizeTypes = (0, _type.tuple)('default', 'large');
        var defaultPushState = {
          distance: 180
        };

        function Drawer(props) {
          var width = props.width,
              height = props.height,
              _props$size = props.size,
              size = _props$size === void 0 ? 'default' : _props$size,
              _props$closable = props.closable,
              closable = _props$closable === void 0 ? true : _props$closable,
              _props$mask = props.mask,
              mask = _props$mask === void 0 ? true : _props$mask,
              _props$push = props.push,
              push = _props$push === void 0 ? defaultPushState : _props$push,
              _props$closeIcon = props.closeIcon,
              closeIcon = _props$closeIcon === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _props$closeIcon,
              bodyStyle = props.bodyStyle,
              drawerStyle = props.drawerStyle,
              className = props.className,
              visible = props.visible,
              open = props.open,
              children = props.children,
              style = props.style,
              title = props.title,
              headerStyle = props.headerStyle,
              onClose = props.onClose,
              footer = props.footer,
              footerStyle = props.footerStyle,
              customizePrefixCls = props.prefixCls,
              customizeGetContainer = props.getContainer,
              extra = props.extra,
              afterVisibleChange = props.afterVisibleChange,
              _afterOpenChange = props.afterOpenChange,
              rest = __rest(props, ["width", "height", "size", "closable", "mask", "push", "closeIcon", "bodyStyle", "drawerStyle", "className", "visible", "open", "children", "style", "title", "headerStyle", "onClose", "footer", "footerStyle", "prefixCls", "getContainer", "extra", "afterVisibleChange", "afterOpenChange"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPopupContainer = _React$useContext.getPopupContainer,
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var prefixCls = getPrefixCls('drawer', customizePrefixCls);
          var getContainer = // 有可能为 false，所以不能直接判断
          customizeGetContainer === undefined && getPopupContainer ? function () {
            return getPopupContainer(document.body);
          } : customizeGetContainer;
          var closeIconNode = closable && /*#__PURE__*/React.createElement("button", {
            type: "button",
            onClick: onClose,
            "aria-label": "Close",
            className: "".concat(prefixCls, "-close")
          }, closeIcon);
          [['visible', 'open'], ['afterVisibleChange', 'afterOpenChange']].forEach(function (_ref) {
            var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                deprecatedName = _ref2[0],
                newName = _ref2[1];

            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(deprecatedName in props), 'Drawer', "`".concat(deprecatedName, "` is deprecated which will be removed in next major version, please use `").concat(newName, "` instead.")) : void 0;
          });

          function renderHeader() {
            if (!title && !closable) {
              return null;
            }

            return /*#__PURE__*/React.createElement("div", {
              className: (0, _classnames["default"])("".concat(prefixCls, "-header"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-header-close-only"), closable && !title && !extra)),
              style: headerStyle
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-header-title")
            }, closeIconNode, title && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-title")
            }, title)), extra && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-extra")
            }, extra));
          }

          function renderFooter() {
            if (!footer) {
              return null;
            }

            var footerClassName = "".concat(prefixCls, "-footer");
            return /*#__PURE__*/React.createElement("div", {
              className: footerClassName,
              style: footerStyle
            }, footer);
          }

          var drawerClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({
            'no-mask': !mask
          }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className); // ============================ Size ============================

          var mergedWidth = React.useMemo(function () {
            return width !== null && width !== void 0 ? width : size === 'large' ? 736 : 378;
          }, [width, size]);
          var mergedHeight = React.useMemo(function () {
            return height !== null && height !== void 0 ? height : size === 'large' ? 736 : 378;
          }, [height, size]); // =========================== Motion ===========================

          var maskMotion = {
            motionName: (0, _motion.getTransitionName)(prefixCls, 'mask-motion'),
            motionAppear: true,
            motionEnter: true,
            motionLeave: true,
            motionDeadline: 500
          };

          var panelMotion = function panelMotion(motionPlacement) {
            return {
              motionName: (0, _motion.getTransitionName)(prefixCls, "panel-motion-".concat(motionPlacement)),
              motionAppear: true,
              motionEnter: true,
              motionLeave: true,
              motionDeadline: 500
            };
          }; // =========================== Render ===========================


          return /*#__PURE__*/React.createElement(_Compact.NoCompactStyle, null, /*#__PURE__*/React.createElement(_context.NoFormStyle, {
            status: true,
            override: true
          }, /*#__PURE__*/React.createElement(_rcDrawer["default"], (0, _extends2["default"])({
            prefixCls: prefixCls,
            onClose: onClose
          }, rest, {
            open: open !== null && open !== void 0 ? open : visible,
            mask: mask,
            push: push,
            width: mergedWidth,
            height: mergedHeight,
            rootClassName: drawerClassName,
            getContainer: getContainer,
            afterOpenChange: function afterOpenChange(isOpen) {
              _afterOpenChange === null || _afterOpenChange === void 0 ? void 0 : _afterOpenChange(isOpen);
              afterVisibleChange === null || afterVisibleChange === void 0 ? void 0 : afterVisibleChange(isOpen);
            },
            maskMotion: maskMotion,
            motion: panelMotion,
            rootStyle: style
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-wrapper-body"),
            style: (0, _extends2["default"])({}, drawerStyle)
          }, renderHeader(), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body"),
            style: bodyStyle
          }, children), renderFooter()))));
        }

        if (process.env.NODE_ENV !== 'production') {
          Drawer.displayName = 'Drawer';
        }

        var _default = Drawer;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@ant-design/icons/CloseOutlined': _req4,
        'classnames': _req5,
        'rc-drawer': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../form/context': _req9,
        '../_util/motion': _req10,
        '../_util/type': _req11,
        '../_util/warning': _req12,
        '../space/Compact': _req13
      }));
    }
  };
});
//# sourceMappingURL=1a152419d569028a86c71b72133ae9edf0c87cc8.js.map