System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/CheckOutlined", "@ant-design/icons/CloseOutlined", "classnames", "rc-steps", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsCheckOutlined) {
      _req3 = _antDesignIconsCheckOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req4 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcSteps2) {
      _req6 = _rcSteps2.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcSteps = _interopRequireDefault(require("rc-steps"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _useBreakpoint2 = _interopRequireDefault(require("../grid/hooks/useBreakpoint"));

        var _progress = _interopRequireDefault(require("../progress"));

        var _useLegacyItems = _interopRequireDefault(require("./useLegacyItems"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Steps = function Steps(props) {
          var _classNames;

          var percent = props.percent,
              size = props.size,
              className = props.className,
              direction = props.direction,
              items = props.items,
              _props$responsive = props.responsive,
              responsive = _props$responsive === void 0 ? true : _props$responsive,
              _props$current = props.current,
              current = _props$current === void 0 ? 0 : _props$current,
              children = props.children,
              restProps = __rest(props, ["percent", "size", "className", "direction", "items", "responsive", "current", "children"]);

          var _useBreakpoint = (0, _useBreakpoint2["default"])(responsive),
              xs = _useBreakpoint.xs;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              rtlDirection = _React$useContext.direction;

          var getDirection = React.useCallback(function () {
            return responsive && xs ? 'vertical' : direction;
          }, [xs, direction]);
          var prefixCls = getPrefixCls('steps', props.prefixCls);
          var iconPrefix = getPrefixCls('', props.iconPrefix);
          var mergedItems = (0, _useLegacyItems["default"])(items, children);
          var stepsClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-progress"), percent !== undefined), _classNames), className);
          var icons = {
            finish: /*#__PURE__*/React.createElement(_CheckOutlined["default"], {
              className: "".concat(prefixCls, "-finish-icon")
            }),
            error: /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
              className: "".concat(prefixCls, "-error-icon")
            })
          };

          var stepIconRender = function stepIconRender(_ref) {
            var node = _ref.node,
                status = _ref.status;

            if (status === 'process' && percent !== undefined) {
              // currently it's hard-coded, since we can't easily read the actually width of icon
              var progressWidth = size === 'small' ? 32 : 40; // iconWithProgress

              return /*#__PURE__*/React.createElement("div", {
                className: "".concat(prefixCls, "-progress-icon")
              }, /*#__PURE__*/React.createElement(_progress["default"], {
                type: "circle",
                percent: percent,
                width: progressWidth,
                strokeWidth: 4,
                format: function format() {
                  return null;
                }
              }), node);
            }

            return node;
          };

          return /*#__PURE__*/React.createElement(_rcSteps["default"], (0, _extends2["default"])({
            icons: icons
          }, restProps, {
            current: current,
            size: size,
            items: mergedItems,
            direction: getDirection(),
            stepIcon: stepIconRender,
            prefixCls: prefixCls,
            iconPrefix: iconPrefix,
            className: stepsClassName
          }));
        };

        Steps.Step = _rcSteps["default"].Step;
        var _default = Steps;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/CheckOutlined': _req3,
        '@ant-design/icons/CloseOutlined': _req4,
        'classnames': _req5,
        'rc-steps': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../grid/hooks/useBreakpoint': _req9,
        '../progress': _req10,
        './useLegacyItems': _req11
      }));
    }
  };
});
//# sourceMappingURL=444a54f6a6fcdf9c79461f51ba6a8b955740df48.js.map