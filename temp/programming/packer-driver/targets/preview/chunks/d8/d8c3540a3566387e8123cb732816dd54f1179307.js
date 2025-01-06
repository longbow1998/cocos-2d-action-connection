System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "classnames", "rc-util/lib/Children/toArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req3 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req9 = _unresolved_6.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _popover = _interopRequireDefault(require("../popover"));

        var _reactNode = require("../_util/reactNode");

        var _avatar = _interopRequireDefault(require("./avatar"));

        var _SizeContext = require("./SizeContext");

        var Group = function Group(props) {
          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              maxCount = props.maxCount,
              maxStyle = props.maxStyle,
              size = props.size;
          var prefixCls = getPrefixCls('avatar-group', customizePrefixCls);
          var cls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
          var children = props.children,
              _props$maxPopoverPlac = props.maxPopoverPlacement,
              maxPopoverPlacement = _props$maxPopoverPlac === void 0 ? 'top' : _props$maxPopoverPlac,
              _props$maxPopoverTrig = props.maxPopoverTrigger,
              maxPopoverTrigger = _props$maxPopoverTrig === void 0 ? 'hover' : _props$maxPopoverTrig;
          var childrenWithProps = (0, _toArray["default"])(children).map(function (child, index) {
            return (0, _reactNode.cloneElement)(child, {
              key: "avatar-key-".concat(index)
            });
          });
          var numOfChildren = childrenWithProps.length;

          if (maxCount && maxCount < numOfChildren) {
            var childrenShow = childrenWithProps.slice(0, maxCount);
            var childrenHidden = childrenWithProps.slice(maxCount, numOfChildren);
            childrenShow.push( /*#__PURE__*/React.createElement(_popover["default"], {
              key: "avatar-popover-key",
              content: childrenHidden,
              trigger: maxPopoverTrigger,
              placement: maxPopoverPlacement,
              overlayClassName: "".concat(prefixCls, "-popover")
            }, /*#__PURE__*/React.createElement(_avatar["default"], {
              style: maxStyle
            }, "+".concat(numOfChildren - maxCount))));
            return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
              size: size
            }, /*#__PURE__*/React.createElement("div", {
              className: cls,
              style: props.style
            }, childrenShow));
          }

          return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
            size: size
          }, /*#__PURE__*/React.createElement("div", {
            className: cls,
            style: props.style
          }, childrenWithProps));
        };

        var _default = Group;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'classnames': _req2,
        'rc-util/lib/Children/toArray': _req3,
        'react': _req4,
        '../config-provider': _req5,
        '../popover': _req6,
        '../_util/reactNode': _req7,
        './avatar': _req8,
        './SizeContext': _req9
      }));
    }
  };
});
//# sourceMappingURL=d8c3540a3566387e8123cb732816dd54f1179307.js.map