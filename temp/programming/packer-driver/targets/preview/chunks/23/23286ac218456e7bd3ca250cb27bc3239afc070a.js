System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "classnames", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _RowContext = _interopRequireDefault(require("./RowContext"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function parseFlex(flex) {
          if (typeof flex === 'number') {
            return "".concat(flex, " ").concat(flex, " auto");
          }

          if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
            return "0 0 ".concat(flex);
          }

          return flex;
        }

        var sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
        var Col = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var _React$useContext2 = React.useContext(_RowContext["default"]),
              gutter = _React$useContext2.gutter,
              wrap = _React$useContext2.wrap,
              supportFlexGap = _React$useContext2.supportFlexGap;

          var customizePrefixCls = props.prefixCls,
              span = props.span,
              order = props.order,
              offset = props.offset,
              push = props.push,
              pull = props.pull,
              className = props.className,
              children = props.children,
              flex = props.flex,
              style = props.style,
              others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]);

          var prefixCls = getPrefixCls('col', customizePrefixCls);
          var sizeClassObj = {};
          sizes.forEach(function (size) {
            var _extends2;

            var sizeProps = {};
            var propSize = props[size];

            if (typeof propSize === 'number') {
              sizeProps.span = propSize;
            } else if ((0, _typeof2["default"])(propSize) === 'object') {
              sizeProps = propSize || {};
            }

            delete others[size];
            sizeClassObj = (0, _extends3["default"])((0, _extends3["default"])({}, sizeClassObj), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), (0, _defineProperty2["default"])(_extends2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _extends2));
          });
          var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-order-").concat(order), order), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-push-").concat(push), push), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
          var mergedStyle = {}; // Horizontal gutter use padding

          if (gutter && gutter[0] > 0) {
            var horizontalGutter = gutter[0] / 2;
            mergedStyle.paddingLeft = horizontalGutter;
            mergedStyle.paddingRight = horizontalGutter;
          } // Vertical gutter use padding when gap not support


          if (gutter && gutter[1] > 0 && !supportFlexGap) {
            var verticalGutter = gutter[1] / 2;
            mergedStyle.paddingTop = verticalGutter;
            mergedStyle.paddingBottom = verticalGutter;
          }

          if (flex) {
            mergedStyle.flex = parseFlex(flex); // Hack for Firefox to avoid size issue
            // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553

            if (wrap === false && !mergedStyle.minWidth) {
              mergedStyle.minWidth = 0;
            }
          }

          return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, others, {
            style: (0, _extends3["default"])((0, _extends3["default"])({}, mergedStyle), style),
            className: classes,
            ref: ref
          }), children);
        });

        if (process.env.NODE_ENV !== 'production') {
          Col.displayName = 'Col';
        }

        var _default = Col;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        'classnames': _req4,
        'react': _req5,
        '../config-provider': _req6,
        './RowContext': _req7
      }));
    }
  };
});
//# sourceMappingURL=23286ac218456e7bd3ca250cb27bc3239afc070a.js.map