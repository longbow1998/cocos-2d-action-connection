System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req4 = _rcUtilLibOmit.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _skeleton = _interopRequireDefault(require("../skeleton"));

        var _tabs = _interopRequireDefault(require("../tabs"));

        var _Grid = _interopRequireDefault(require("./Grid"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function getAction(actions) {
          var actionList = actions.map(function (action, index) {
            return (
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              React.createElement("li", {
                style: {
                  width: "".concat(100 / actions.length, "%")
                },
                key: "action-".concat(index)
              }, /*#__PURE__*/React.createElement("span", null, action))
            );
          });
          return actionList;
        }

        var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _extends2, _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var size = React.useContext(_SizeContext["default"]);

          var onTabChange = function onTabChange(key) {
            var _a;

            (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
          };

          var isContainGrid = function isContainGrid() {
            var containGrid;
            React.Children.forEach(props.children, function (element) {
              if (element && element.type && element.type === _Grid["default"]) {
                containGrid = true;
              }
            });
            return containGrid;
          };

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              extra = props.extra,
              _props$headStyle = props.headStyle,
              headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
              _props$bodyStyle = props.bodyStyle,
              bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
              title = props.title,
              loading = props.loading,
              _props$bordered = props.bordered,
              bordered = _props$bordered === void 0 ? true : _props$bordered,
              customizeSize = props.size,
              type = props.type,
              cover = props.cover,
              actions = props.actions,
              tabList = props.tabList,
              children = props.children,
              activeTabKey = props.activeTabKey,
              defaultActiveTabKey = props.defaultActiveTabKey,
              tabBarExtraContent = props.tabBarExtraContent,
              hoverable = props.hoverable,
              _props$tabProps = props.tabProps,
              tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
              others = __rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);

          var prefixCls = getPrefixCls('card', customizePrefixCls);
          var loadingBlock = /*#__PURE__*/React.createElement(_skeleton["default"], {
            loading: true,
            active: true,
            paragraph: {
              rows: 4
            },
            title: false
          }, children);
          var hasActiveTabKey = activeTabKey !== undefined;
          var extraProps = (0, _extends3["default"])((0, _extends3["default"])({}, tabProps), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0, _defineProperty2["default"])(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));
          var head;
          var tabs = tabList && tabList.length ? /*#__PURE__*/React.createElement(_tabs["default"], (0, _extends3["default"])({
            size: "large"
          }, extraProps, {
            className: "".concat(prefixCls, "-head-tabs"),
            onChange: onTabChange,
            items: tabList.map(function (item) {
              var _a;

              return {
                label: item.tab,
                key: item.key,
                disabled: (_a = item.disabled) !== null && _a !== void 0 ? _a : false
              };
            })
          })) : null;

          if (title || extra || tabs) {
            head = /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-head"),
              style: headStyle
            }, /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-head-wrapper")
            }, title && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-head-title")
            }, title), extra && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-extra")
            }, extra)), tabs);
          }

          var coverDom = cover ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-cover")
          }, cover) : null;
          var body = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-body"),
            style: bodyStyle
          }, loading ? loadingBlock : children);
          var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
            className: "".concat(prefixCls, "-actions")
          }, getAction(actions)) : null;
          var divProps = (0, _omit["default"])(others, ['onTabChange']);
          var mergedSize = customizeSize || size;
          var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-contain-grid"), isContainGrid()), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({
            ref: ref
          }, divProps, {
            className: classString
          }), head, coverDom, body, actionDom);
        });
        var _default = Card;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'classnames': _req3,
        'rc-util/lib/omit': _req4,
        'react': _req5,
        '../config-provider': _req6,
        '../config-provider/SizeContext': _req7,
        '../skeleton': _req8,
        '../tabs': _req9,
        './Grid': _req10
      }));
    }
  };
});
//# sourceMappingURL=9d6c4b5a4295bb75de40b79a2be3a66445c09941.js.map