System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/DoubleLeftOutlined", "@ant-design/icons/DoubleRightOutlined", "@ant-design/icons/LeftOutlined", "@ant-design/icons/RightOutlined", "classnames", "rc-pagination", "rc-pagination/lib/locale/en_US", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsDoubleLeftOutlined) {
      _req3 = _antDesignIconsDoubleLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsDoubleRightOutlined) {
      _req4 = _antDesignIconsDoubleRightOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLeftOutlined) {
      _req5 = _antDesignIconsLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRightOutlined) {
      _req6 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcPagination2) {
      _req8 = _rcPagination2.__cjsMetaURL;
    }, function (_rcPaginationLibLocaleEn_US) {
      _req9 = _rcPaginationLibLocaleEn_US.__cjsMetaURL;
    }, function (_react) {
      _req10 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req13 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req14 = _unresolved_5.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _DoubleLeftOutlined = _interopRequireDefault(require("@ant-design/icons/DoubleLeftOutlined"));

        var _DoubleRightOutlined = _interopRequireDefault(require("@ant-design/icons/DoubleRightOutlined"));

        var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcPagination = _interopRequireDefault(require("rc-pagination"));

        var _en_US = _interopRequireDefault(require("rc-pagination/lib/locale/en_US"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _useBreakpoint2 = _interopRequireDefault(require("../grid/hooks/useBreakpoint"));

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _Select = require("./Select");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Pagination = function Pagination(_a) {
          var customizePrefixCls = _a.prefixCls,
              customizeSelectPrefixCls = _a.selectPrefixCls,
              className = _a.className,
              size = _a.size,
              customLocale = _a.locale,
              selectComponentClass = _a.selectComponentClass,
              responsive = _a.responsive,
              showSizeChanger = _a.showSizeChanger,
              restProps = __rest(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]);

          var _useBreakpoint = (0, _useBreakpoint2["default"])(responsive),
              xs = _useBreakpoint.xs;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              _React$useContext$pag = _React$useContext.pagination,
              pagination = _React$useContext$pag === void 0 ? {} : _React$useContext$pag;

          var prefixCls = getPrefixCls('pagination', customizePrefixCls);
          var mergedShowSizeChanger = showSizeChanger !== null && showSizeChanger !== void 0 ? showSizeChanger : pagination.showSizeChanger;

          var getIconsProps = function getIconsProps() {
            var ellipsis = /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-item-ellipsis")
            }, "\u2022\u2022\u2022");
            var prevIcon = /*#__PURE__*/React.createElement("button", {
              className: "".concat(prefixCls, "-item-link"),
              type: "button",
              tabIndex: -1
            }, /*#__PURE__*/React.createElement(_LeftOutlined["default"], null));
            var nextIcon = /*#__PURE__*/React.createElement("button", {
              className: "".concat(prefixCls, "-item-link"),
              type: "button",
              tabIndex: -1
            }, /*#__PURE__*/React.createElement(_RightOutlined["default"], null));
            var jumpPrevIcon = /*#__PURE__*/React.createElement("a", {
              className: "".concat(prefixCls, "-item-link")
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-item-container")
            }, /*#__PURE__*/React.createElement(_DoubleLeftOutlined["default"], {
              className: "".concat(prefixCls, "-item-link-icon")
            }), ellipsis));
            var jumpNextIcon = /*#__PURE__*/React.createElement("a", {
              className: "".concat(prefixCls, "-item-link")
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-item-container")
            }, /*#__PURE__*/React.createElement(_DoubleRightOutlined["default"], {
              className: "".concat(prefixCls, "-item-link-icon")
            }), ellipsis)); // change arrows direction in right-to-left direction

            if (direction === 'rtl') {
              var _ref = [nextIcon, prevIcon];
              prevIcon = _ref[0];
              nextIcon = _ref[1];
              var _ref2 = [jumpNextIcon, jumpPrevIcon];
              jumpPrevIcon = _ref2[0];
              jumpNextIcon = _ref2[1];
            }

            return {
              prevIcon: prevIcon,
              nextIcon: nextIcon,
              jumpPrevIcon: jumpPrevIcon,
              jumpNextIcon: jumpNextIcon
            };
          };

          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Pagination",
            defaultLocale: _en_US["default"]
          }, function (contextLocale) {
            var _classNames;

            var locale = (0, _extends2["default"])((0, _extends2["default"])({}, contextLocale), customLocale);
            var isSmall = size === 'small' || !!(xs && !size && responsive);
            var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
            var extendedClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-mini"), isSmall), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
            return /*#__PURE__*/React.createElement(_rcPagination["default"], (0, _extends2["default"])({}, getIconsProps(), restProps, {
              prefixCls: prefixCls,
              selectPrefixCls: selectPrefixCls,
              className: extendedClassName,
              selectComponentClass: selectComponentClass || (isSmall ? _Select.MiniSelect : _Select.MiddleSelect),
              locale: locale,
              showSizeChanger: mergedShowSizeChanger
            }));
          });
        };

        var _default = Pagination;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/DoubleLeftOutlined': _req3,
        '@ant-design/icons/DoubleRightOutlined': _req4,
        '@ant-design/icons/LeftOutlined': _req5,
        '@ant-design/icons/RightOutlined': _req6,
        'classnames': _req7,
        'rc-pagination': _req8,
        'rc-pagination/lib/locale/en_US': _req9,
        'react': _req10,
        '../config-provider': _req11,
        '../grid/hooks/useBreakpoint': _req12,
        '../locale-provider/LocaleReceiver': _req13,
        './Select': _req14
      }));
    }
  };
});
//# sourceMappingURL=6794b15ad4e11781165d52d80baa844f4985ec87.js.map