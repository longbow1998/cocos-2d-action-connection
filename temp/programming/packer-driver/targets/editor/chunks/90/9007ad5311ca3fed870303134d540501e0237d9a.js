System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/BarsOutlined", "@ant-design/icons/LeftOutlined", "@ant-design/icons/RightOutlined", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, _SiderContext, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsBarsOutlined) {
      _req4 = _antDesignIconsBarsOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLeftOutlined) {
      _req5 = _antDesignIconsLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRightOutlined) {
      _req6 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req8 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req9 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
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
        exports["default"] = exports.SiderContext = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _BarsOutlined = _interopRequireDefault(require("@ant-design/icons/BarsOutlined"));

        var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _isNumeric = _interopRequireDefault(require("../_util/isNumeric"));

        var _layout = require("./layout");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var dimensionMaxMap = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px'
        };
        var SiderContext = /*#__PURE__*/React.createContext({});
        exports.SiderContext = SiderContext;

        var generateId = function () {
          var i = 0;
          return function () {
            var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            i += 1;
            return "".concat(prefix).concat(i);
          };
        }();

        var Sider = /*#__PURE__*/React.forwardRef(function (_a, ref) {
          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              trigger = _a.trigger,
              children = _a.children,
              _a$defaultCollapsed = _a.defaultCollapsed,
              defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
              _a$theme = _a.theme,
              theme = _a$theme === void 0 ? 'dark' : _a$theme,
              _a$style = _a.style,
              style = _a$style === void 0 ? {} : _a$style,
              _a$collapsible = _a.collapsible,
              collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
              _a$reverseArrow = _a.reverseArrow,
              reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
              _a$width = _a.width,
              width = _a$width === void 0 ? 200 : _a$width,
              _a$collapsedWidth = _a.collapsedWidth,
              collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
              zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
              breakpoint = _a.breakpoint,
              onCollapse = _a.onCollapse,
              onBreakpoint = _a.onBreakpoint,
              props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

          var _useContext = (0, React.useContext)(_layout.LayoutContext),
              siderHook = _useContext.siderHook;

          var _useState = (0, React.useState)('collapsed' in props ? props.collapsed : defaultCollapsed),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              collapsed = _useState2[0],
              setCollapsed = _useState2[1];

          var _useState3 = (0, React.useState)(false),
              _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
              below = _useState4[0],
              setBelow = _useState4[1];

          (0, React.useEffect)(function () {
            if ('collapsed' in props) {
              setCollapsed(props.collapsed);
            }
          }, [props.collapsed]);

          var handleSetCollapsed = function handleSetCollapsed(value, type) {
            if (!('collapsed' in props)) {
              setCollapsed(value);
            }

            onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
          }; // ========================= Responsive =========================


          var responsiveHandlerRef = (0, React.useRef)();

          responsiveHandlerRef.current = function (mql) {
            setBelow(mql.matches);
            onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

            if (collapsed !== mql.matches) {
              handleSetCollapsed(mql.matches, 'responsive');
            }
          };

          (0, React.useEffect)(function () {
            function responsiveHandler(mql) {
              return responsiveHandlerRef.current(mql);
            }

            var mql;

            if (typeof window !== 'undefined') {
              var _window = window,
                  matchMedia = _window.matchMedia;

              if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
                mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

                try {
                  mql.addEventListener('change', responsiveHandler);
                } catch (error) {
                  mql.addListener(responsiveHandler);
                }

                responsiveHandler(mql);
              }
            }

            return function () {
              try {
                mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
              } catch (error) {
                mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
              }
            };
          }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.

          (0, React.useEffect)(function () {
            var uniqueId = generateId('ant-sider-');
            siderHook.addSider(uniqueId);
            return function () {
              return siderHook.removeSider(uniqueId);
            };
          }, []);

          var toggle = function toggle() {
            handleSetCollapsed(!collapsed, 'clickTrigger');
          };

          var _useContext2 = (0, React.useContext)(_configProvider.ConfigContext),
              getPrefixCls = _useContext2.getPrefixCls;

          var renderSider = function renderSider() {
            var _classNames;

            var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
            var divProps = (0, _omit["default"])(props, ['collapsed']);
            var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

            var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

            var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
              onClick: toggle,
              className: (0, _classnames["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
              style: zeroWidthTriggerStyle
            }, trigger || /*#__PURE__*/React.createElement(_BarsOutlined["default"], null)) : null;
            var iconObj = {
              expanded: reverseArrow ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
              collapsed: reverseArrow ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
            };
            var status = collapsed ? 'collapsed' : 'expanded';
            var defaultTrigger = iconObj[status];
            var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-trigger"),
              onClick: toggle,
              style: {
                width: siderWidth
              }
            }, trigger || defaultTrigger) : null;
            var divStyle = (0, _extends2["default"])((0, _extends2["default"])({}, style), {
              flex: "0 0 ".concat(siderWidth),
              maxWidth: siderWidth,
              minWidth: siderWidth,
              width: siderWidth
            });
            var siderCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-below"), !!below), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
            return /*#__PURE__*/React.createElement("aside", (0, _extends2["default"])({
              className: siderCls
            }, divProps, {
              style: divStyle,
              ref: ref
            }), /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-children")
            }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
          };

          var contextValue = React.useMemo(function () {
            return {
              siderCollapsed: collapsed
            };
          }, [collapsed]);
          return /*#__PURE__*/React.createElement(SiderContext.Provider, {
            value: contextValue
          }, renderSider());
        });

        if (process.env.NODE_ENV !== 'production') {
          Sider.displayName = 'Sider';
        }

        var _default = Sider;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _SiderContext = module.exports.SiderContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@ant-design/icons/BarsOutlined': _req4,
        '@ant-design/icons/LeftOutlined': _req5,
        '@ant-design/icons/RightOutlined': _req6,
        'classnames': _req7,
        'rc-util/lib/omit': _req8,
        'react': _req9,
        '../config-provider': _req10,
        '../_util/isNumeric': _req11,
        './layout': _req12
      }));
    }
  };
});
//# sourceMappingURL=9007ad5311ca3fed870303134d540501e0237d9a.js.map