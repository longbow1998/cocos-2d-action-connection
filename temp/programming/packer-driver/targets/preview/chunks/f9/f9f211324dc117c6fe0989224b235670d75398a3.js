System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _datePicker = _interopRequireDefault(require("../date-picker"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InternalTimePicker = _datePicker["default"].TimePicker,
            InternalRangePicker = _datePicker["default"].RangePicker;
        var RangePicker = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var dropdownClassName = props.dropdownClassName,
              popupClassName = props.popupClassName;
          return /*#__PURE__*/React.createElement(InternalRangePicker, (0, _extends2["default"])({}, props, {
            dropdownClassName: dropdownClassName,
            popupClassName: popupClassName,
            picker: "time",
            mode: undefined,
            ref: ref
          }));
        });
        var TimePicker = /*#__PURE__*/React.forwardRef(function (_a, ref) {
          var addon = _a.addon,
              renderExtraFooter = _a.renderExtraFooter,
              popupClassName = _a.popupClassName,
              dropdownClassName = _a.dropdownClassName,
              restProps = __rest(_a, ["addon", "renderExtraFooter", "popupClassName", "dropdownClassName"]);

          var internalRenderExtraFooter = React.useMemo(function () {
            if (renderExtraFooter) {
              return renderExtraFooter;
            }

            if (addon) {
              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'TimePicker', '`addon` is deprecated. Please use `renderExtraFooter` instead.') : void 0;
              return addon;
            }

            return undefined;
          }, [addon, renderExtraFooter]);
          return /*#__PURE__*/React.createElement(InternalTimePicker, (0, _extends2["default"])({
            dropdownClassName: dropdownClassName,
            popupClassName: popupClassName
          }, restProps, {
            mode: undefined,
            ref: ref,
            renderExtraFooter: internalRenderExtraFooter
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          TimePicker.displayName = 'TimePicker';
        }

        TimePicker.RangePicker = RangePicker;
        var _default = TimePicker;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        '../date-picker': _req3,
        '../_util/warning': _req4
      }));
    }
  };
});
//# sourceMappingURL=f9f211324dc117c6fe0989224b235670d75398a3.js.map