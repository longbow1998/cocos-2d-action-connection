System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
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

        var Meta = function Meta(props) {
          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
            var getPrefixCls = _ref.getPrefixCls;

            var customizePrefixCls = props.prefixCls,
                className = props.className,
                avatar = props.avatar,
                title = props.title,
                description = props.description,
                others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

            var prefixCls = getPrefixCls('card', customizePrefixCls);
            var classString = (0, _classnames["default"])("".concat(prefixCls, "-meta"), className);
            var avatarDom = avatar ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-meta-avatar")
            }, avatar) : null;
            var titleDom = title ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-meta-title")
            }, title) : null;
            var descriptionDom = description ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-meta-description")
            }, description) : null;
            var MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-meta-detail")
            }, titleDom, descriptionDom) : null;
            return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
              className: classString
            }), avatarDom, MetaDetail);
          });
        };

        var _default = Meta;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'classnames': _req2,
        'react': _req3,
        '../config-provider': _req4
      }));
    }
  };
});
//# sourceMappingURL=a5aa5f9707555b9741478a1231721af5deab2997.js.map