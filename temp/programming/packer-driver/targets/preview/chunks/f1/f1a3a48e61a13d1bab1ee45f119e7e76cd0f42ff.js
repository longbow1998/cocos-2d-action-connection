System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
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

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _empty = _interopRequireDefault(require("./empty"));

        var _simple = _interopRequireDefault(require("./simple"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
        var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

        var Empty = function Empty(_a) {
          var className = _a.className,
              customizePrefixCls = _a.prefixCls,
              _a$image = _a.image,
              image = _a$image === void 0 ? defaultEmptyImg : _a$image,
              description = _a.description,
              children = _a.children,
              imageStyle = _a.imageStyle,
              restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Empty"
          }, function (contextLocale) {
            var _classNames;

            var prefixCls = getPrefixCls('empty', customizePrefixCls);
            var des = typeof description !== 'undefined' ? description : contextLocale.description;
            var alt = typeof des === 'string' ? des : 'empty';
            var imageNode = null;

            if (typeof image === 'string') {
              imageNode = /*#__PURE__*/React.createElement("img", {
                alt: alt,
                src: image
              });
            } else {
              imageNode = image;
            }

            return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
              className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
            }, restProps), /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-image"),
              style: imageStyle
            }, imageNode), des && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-description")
            }, des), children && /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-footer")
            }, children));
          });
        };

        Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
        Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
        var _default = Empty;
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
        'react': _req4,
        '../config-provider': _req5,
        '../locale-provider/LocaleReceiver': _req6,
        './empty': _req7,
        './simple': _req8
      }));
    }
  };
});
//# sourceMappingURL=f1a3a48e61a13d1bab1ee45f119e7e76cd0f42ff.js.map