System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@ant-design/icons/CloseOutlined", "@ant-design/icons/EllipsisOutlined", "@ant-design/icons/PlusOutlined", "classnames", "rc-tabs", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
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
    }, function (_antDesignIconsCloseOutlined) {
      _req3 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_antDesignIconsEllipsisOutlined) {
      _req4 = _antDesignIconsEllipsisOutlined.__cjsMetaURL;
    }, function (_antDesignIconsPlusOutlined) {
      _req5 = _antDesignIconsPlusOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcTabs2) {
      _req7 = _rcTabs2.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req14 = _unresolved_7.__cjsMetaURL;
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

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _EllipsisOutlined = _interopRequireDefault(require("@ant-design/icons/EllipsisOutlined"));

        var _PlusOutlined = _interopRequireDefault(require("@ant-design/icons/PlusOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTabs = _interopRequireDefault(require("rc-tabs"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _useAnimateConfig = _interopRequireDefault(require("./hooks/useAnimateConfig"));

        var _useLegacyItems = _interopRequireDefault(require("./hooks/useLegacyItems"));

        var _TabPane = _interopRequireDefault(require("./TabPane"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function Tabs(_a) {
          var type = _a.type,
              className = _a.className,
              propSize = _a.size,
              _onEdit = _a.onEdit,
              hideAdd = _a.hideAdd,
              centered = _a.centered,
              addIcon = _a.addIcon,
              children = _a.children,
              items = _a.items,
              animated = _a.animated,
              props = __rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "children", "items", "animated"]);

          var customizePrefixCls = props.prefixCls,
              _props$moreIcon = props.moreIcon,
              moreIcon = _props$moreIcon === void 0 ? /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null) : _props$moreIcon;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction,
              getPopupContainer = _React$useContext.getPopupContainer;

          var prefixCls = getPrefixCls('tabs', customizePrefixCls);
          var editable;

          if (type === 'editable-card') {
            editable = {
              onEdit: function onEdit(editType, _ref) {
                var key = _ref.key,
                    event = _ref.event;
                _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
              },
              removeIcon: /*#__PURE__*/React.createElement(_CloseOutlined["default"], null),
              addIcon: addIcon || /*#__PURE__*/React.createElement(_PlusOutlined["default"], null),
              showAdd: hideAdd !== true
            };
          }

          var rootPrefixCls = getPrefixCls();
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.') : void 0;
          var mergedItems = (0, _useLegacyItems["default"])(items, children);
          var mergedAnimated = (0, _useAnimateConfig["default"])(prefixCls, animated);
          return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (contextSize) {
            var _classNames;

            var size = propSize !== undefined ? propSize : contextSize;
            return /*#__PURE__*/React.createElement(_rcTabs["default"], (0, _extends2["default"])({
              direction: direction,
              getPopupContainer: getPopupContainer,
              moreTransitionName: "".concat(rootPrefixCls, "-slide-up")
            }, props, {
              items: mergedItems,
              className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
              editable: editable,
              moreIcon: moreIcon,
              prefixCls: prefixCls,
              animated: mergedAnimated
            }));
          });
        }

        Tabs.TabPane = _TabPane["default"];
        var _default = Tabs;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@ant-design/icons/CloseOutlined': _req3,
        '@ant-design/icons/EllipsisOutlined': _req4,
        '@ant-design/icons/PlusOutlined': _req5,
        'classnames': _req6,
        'rc-tabs': _req7,
        'react': _req8,
        '../config-provider': _req9,
        '../config-provider/SizeContext': _req10,
        '../_util/warning': _req11,
        './hooks/useAnimateConfig': _req12,
        './hooks/useLegacyItems': _req13,
        './TabPane': _req14
      }));
    }
  };
});
//# sourceMappingURL=1791e863785300d1670098961353359c2a01eb78.js.map