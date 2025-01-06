System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@ant-design/icons/StarFilled", "rc-rate", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsStarFilled) {
      _req2 = _antDesignIconsStarFilled.__cjsMetaURL;
    }, function (_rcRate2) {
      _req3 = _rcRate2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
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

        var _StarFilled = _interopRequireDefault(require("@ant-design/icons/StarFilled"));

        var _rcRate = _interopRequireDefault(require("rc-rate"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _tooltip = _interopRequireDefault(require("../tooltip"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Rate = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              tooltips = props.tooltips,
              _props$character = props.character,
              character = _props$character === void 0 ? /*#__PURE__*/React.createElement(_StarFilled["default"], null) : _props$character,
              rest = __rest(props, ["prefixCls", "tooltips", "character"]);

          var characterRender = function characterRender(node, _ref) {
            var index = _ref.index;

            if (!tooltips) {
              return node;
            }

            return /*#__PURE__*/React.createElement(_tooltip["default"], {
              title: tooltips[index]
            }, node);
          };

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var ratePrefixCls = getPrefixCls('rate', prefixCls);
          return /*#__PURE__*/React.createElement(_rcRate["default"], (0, _extends2["default"])({
            ref: ref,
            character: character,
            characterRender: characterRender
          }, rest, {
            prefixCls: ratePrefixCls,
            direction: direction
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Rate.displayName = 'Rate';
        }

        var _default = Rate;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@ant-design/icons/StarFilled': _req2,
        'rc-rate': _req3,
        'react': _req4,
        '../config-provider': _req5,
        '../tooltip': _req6
      }));
    }
  };
});
//# sourceMappingURL=cdf909c925f8a0209f62e5bb1e620612020e783d.js.map