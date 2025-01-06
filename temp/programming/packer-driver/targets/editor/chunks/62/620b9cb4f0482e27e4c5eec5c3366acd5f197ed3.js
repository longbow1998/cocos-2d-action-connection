System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "classnames", "react", "__unresolved_1"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Comment = function Comment(_a) {
          var actions = _a.actions,
              author = _a.author,
              avatar = _a.avatar,
              children = _a.children,
              className = _a.className,
              content = _a.content,
              customizePrefixCls = _a.prefixCls,
              datetime = _a.datetime,
              otherProps = __rest(_a, ["actions", "author", "avatar", "children", "className", "content", "prefixCls", "datetime"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var renderNested = function renderNested(prefixCls, nestedChildren) {
            return /*#__PURE__*/React.createElement("div", {
              className: (0, _classnames["default"])("".concat(prefixCls, "-nested"))
            }, nestedChildren);
          };

          var prefixCls = getPrefixCls('comment', customizePrefixCls);
          var avatarDom = avatar ? /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-avatar")
          }, typeof avatar === 'string' ? /*#__PURE__*/React.createElement("img", {
            src: avatar,
            alt: "comment-avatar"
          }) : avatar) : null;
          var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
            className: "".concat(prefixCls, "-actions")
          }, actions.map(function (action, index) {
            return /*#__PURE__*/React.createElement("li", {
              key: "action-".concat(index)
            }, action) // eslint-disable-line react/no-array-index-key
            ;
          })) : null;
          var authorContent = (author || datetime) && /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content-author")
          }, author && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-content-author-name")
          }, author), datetime && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-content-author-time")
          }, datetime));
          var contentDom = /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, authorContent, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content-detail")
          }, content), actionDom);
          var cls = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, otherProps, {
            className: cls
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inner")
          }, avatarDom, contentDom), children ? renderNested(prefixCls, children) : null);
        };

        var _default = Comment;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'classnames': _req3,
        'react': _req4,
        '../config-provider': _req5
      }));
    }
  };
});
//# sourceMappingURL=620b9cb4f0482e27e4c5eec5c3366acd5f197ed3.js.map