System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/extends", "classnames", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, _LayoutContext, _Header, _Footer, _Content, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req4 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = exports.LayoutContext = exports.Header = exports.Footer = exports.Content = void 0;

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

        var LayoutContext = /*#__PURE__*/React.createContext({
          siderHook: {
            addSider: function addSider() {
              return null;
            },
            removeSider: function removeSider() {
              return null;
            }
          }
        });
        exports.LayoutContext = LayoutContext;

        function generator(_ref) {
          var suffixCls = _ref.suffixCls,
              tagName = _ref.tagName,
              displayName = _ref.displayName;
          return function (BasicComponent) {
            var Adapter = /*#__PURE__*/React.forwardRef(function (props, ref) {
              var _React$useContext = React.useContext(_configProvider.ConfigContext),
                  getPrefixCls = _React$useContext.getPrefixCls;

              var customizePrefixCls = props.prefixCls;
              var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
              return /*#__PURE__*/React.createElement(BasicComponent, (0, _extends2["default"])({
                ref: ref,
                prefixCls: prefixCls,
                tagName: tagName
              }, props));
            });

            if (process.env.NODE_ENV !== 'production') {
              Adapter.displayName = displayName;
            }

            return Adapter;
          };
        }

        var Basic = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              className = props.className,
              children = props.children,
              tagName = props.tagName,
              others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

          var classString = (0, _classnames["default"])(prefixCls, className);
          return /*#__PURE__*/React.createElement(tagName, (0, _extends2["default"])((0, _extends2["default"])({
            className: classString
          }, others), {
            ref: ref
          }), children);
        });
        var BasicLayout = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var _React$useContext2 = React.useContext(_configProvider.ConfigContext),
              direction = _React$useContext2.direction;

          var _React$useState = React.useState([]),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              siders = _React$useState2[0],
              setSiders = _React$useState2[1];

          var prefixCls = props.prefixCls,
              className = props.className,
              children = props.children,
              hasSider = props.hasSider,
              Tag = props.tagName,
              others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

          var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
          var contextValue = React.useMemo(function () {
            return {
              siderHook: {
                addSider: function addSider(id) {
                  setSiders(function (prev) {
                    return [].concat((0, _toConsumableArray2["default"])(prev), [id]);
                  });
                },
                removeSider: function removeSider(id) {
                  setSiders(function (prev) {
                    return prev.filter(function (currentId) {
                      return currentId !== id;
                    });
                  });
                }
              }
            };
          }, []);
          return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
            value: contextValue
          }, /*#__PURE__*/React.createElement(Tag, (0, _extends2["default"])({
            ref: ref,
            className: classString
          }, others), children));
        });
        var Layout = generator({
          suffixCls: 'layout',
          tagName: 'section',
          displayName: 'Layout'
        })(BasicLayout);
        var Header = generator({
          suffixCls: 'layout-header',
          tagName: 'header',
          displayName: 'Header'
        })(Basic);
        exports.Header = Header;
        var Footer = generator({
          suffixCls: 'layout-footer',
          tagName: 'footer',
          displayName: 'Footer'
        })(Basic);
        exports.Footer = Footer;
        var Content = generator({
          suffixCls: 'layout-content',
          tagName: 'main',
          displayName: 'Content'
        })(Basic);
        exports.Content = Content;
        var _default = Layout;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _LayoutContext = module.exports.LayoutContext;
        _Header = module.exports.Header;
        _Footer = module.exports.Footer;
        _Content = module.exports.Content;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/extends': _req4,
        'classnames': _req5,
        'react': _req6,
        '../config-provider': _req7
      }));
    }
  };
});
//# sourceMappingURL=7ca3a16baaa42657d2154b4d6a62bae3d4d146c1.js.map