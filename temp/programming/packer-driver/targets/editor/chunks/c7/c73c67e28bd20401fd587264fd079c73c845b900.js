System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/LoadingOutlined", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsLoadingOutlined) {
      _req3 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
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

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _reactNode = require("../_util/reactNode");

        var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Timeline = function Timeline(props) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$pending = props.pending,
              pending = _props$pending === void 0 ? null : _props$pending,
              pendingDot = props.pendingDot,
              children = props.children,
              className = props.className,
              _props$reverse = props.reverse,
              reverse = _props$reverse === void 0 ? false : _props$reverse,
              _props$mode = props.mode,
              mode = _props$mode === void 0 ? '' : _props$mode,
              restProps = __rest(props, ["prefixCls", "pending", "pendingDot", "children", "className", "reverse", "mode"]);

          var prefixCls = getPrefixCls('timeline', customizePrefixCls);
          var pendingNode = typeof pending === 'boolean' ? null : pending;
          var pendingItem = pending ? /*#__PURE__*/React.createElement(_TimelineItem["default"], {
            pending: !!pending,
            dot: pendingDot || /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null)
          }, pendingNode) : null;
          var timeLineItems = React.Children.toArray(children);
          timeLineItems.push(pendingItem);

          if (reverse) {
            timeLineItems.reverse();
          }

          var getPositionCls = function getPositionCls(ele, idx) {
            if (mode === 'alternate') {
              if (ele.props.position === 'right') return "".concat(prefixCls, "-item-right");
              if (ele.props.position === 'left') return "".concat(prefixCls, "-item-left");
              return idx % 2 === 0 ? "".concat(prefixCls, "-item-left") : "".concat(prefixCls, "-item-right");
            }

            if (mode === 'left') return "".concat(prefixCls, "-item-left");
            if (mode === 'right') return "".concat(prefixCls, "-item-right");
            if (ele.props.position === 'right') return "".concat(prefixCls, "-item-right");
            return '';
          }; // Remove falsy items


          var truthyItems = timeLineItems.filter(function (item) {
            return !!item;
          });
          var itemsCount = React.Children.count(truthyItems);
          var lastCls = "".concat(prefixCls, "-item-last");
          var items = React.Children.map(truthyItems, function (ele, idx) {
            var pendingClass = idx === itemsCount - 2 ? lastCls : '';
            var readyClass = idx === itemsCount - 1 ? lastCls : '';
            return (0, _reactNode.cloneElement)(ele, {
              className: (0, _classnames["default"])([ele.props.className, !reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
            });
          });
          var hasLabelItem = timeLineItems.some(function (item) {
            var _a;

            return !!((_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.label);
          });
          var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pending"), !!pending), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-reverse"), !!reverse), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mode), !!mode && !hasLabelItem), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-label"), hasLabelItem), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          return /*#__PURE__*/React.createElement("ul", (0, _extends2["default"])({}, restProps, {
            className: classString
          }), items);
        };

        Timeline.Item = _TimelineItem["default"];
        var _default = Timeline;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/LoadingOutlined': _req3,
        'classnames': _req4,
        'react': _req5,
        '../config-provider': _req6,
        '../_util/reactNode': _req7,
        './TimelineItem': _req8
      }));
    }
  };
});
//# sourceMappingURL=c73c67e28bd20401fd587264fd079c73c845b900.js.map