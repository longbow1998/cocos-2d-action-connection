System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "classnames", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _context = _interopRequireDefault(require("./context"));

        var AnchorLink = function AnchorLink(props) {
          var _props$href = props.href,
              href = _props$href === void 0 ? '#' : _props$href,
              title = props.title,
              customizePrefixCls = props.prefixCls,
              children = props.children,
              className = props.className,
              target = props.target;
          var context = React.useContext(_context["default"]);

          var _ref = context || {},
              registerLink = _ref.registerLink,
              unregisterLink = _ref.unregisterLink,
              scrollTo = _ref.scrollTo,
              onClick = _ref.onClick,
              activeLink = _ref.activeLink;

          React.useEffect(function () {
            registerLink === null || registerLink === void 0 ? void 0 : registerLink(href);
            return function () {
              unregisterLink === null || unregisterLink === void 0 ? void 0 : unregisterLink(href);
            };
          }, [href, registerLink, unregisterLink]);

          var handleClick = function handleClick(e) {
            onClick === null || onClick === void 0 ? void 0 : onClick(e, {
              title: title,
              href: href
            });
            scrollTo === null || scrollTo === void 0 ? void 0 : scrollTo(href);
          };

          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref2) {
            var getPrefixCls = _ref2.getPrefixCls;
            var prefixCls = getPrefixCls('anchor', customizePrefixCls);
            var active = activeLink === href;
            var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-link"), className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-active"), active));
            var titleClassName = (0, _classnames["default"])("".concat(prefixCls, "-link-title"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-link-title-active"), active));
            return /*#__PURE__*/React.createElement("div", {
              className: wrapperClassName
            }, /*#__PURE__*/React.createElement("a", {
              className: titleClassName,
              href: href,
              title: typeof title === 'string' ? title : '',
              target: target,
              onClick: handleClick
            }, title), children);
          });
        };

        var _default = AnchorLink;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'classnames': _req2,
        'react': _req3,
        '../config-provider': _req4,
        './context': _req5
      }));
    }
  };
});
//# sourceMappingURL=de88485e9ff4f52295506cbf54f0eb97c5b71898.js.map