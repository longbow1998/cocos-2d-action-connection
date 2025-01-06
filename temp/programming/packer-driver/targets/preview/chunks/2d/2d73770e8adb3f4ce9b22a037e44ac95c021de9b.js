System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/toConsumableArray", "classnames", "rc-util/lib/Children/toArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req5 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req11 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req12 = _unresolved_7.__cjsMetaURL;
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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _menu = _interopRequireDefault(require("../menu"));

        var _reactNode = require("../_util/reactNode");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

        var _BreadcrumbSeparator = _interopRequireDefault(require("./BreadcrumbSeparator"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function getBreadcrumbName(route, params) {
          if (!route.breadcrumbName) {
            return null;
          }

          var paramsKeys = Object.keys(params).join('|');
          var name = route.breadcrumbName.replace(new RegExp(":(".concat(paramsKeys, ")"), 'g'), function (replacement, key) {
            return params[key] || replacement;
          });
          return name;
        }

        function defaultItemRender(route, params, routes, paths) {
          var isLastItem = routes.indexOf(route) === routes.length - 1;
          var name = getBreadcrumbName(route, params);
          return isLastItem ? /*#__PURE__*/React.createElement("span", null, name) : /*#__PURE__*/React.createElement("a", {
            href: "#/".concat(paths.join('/'))
          }, name);
        }

        var getPath = function getPath(path, params) {
          path = (path || '').replace(/^\//, '');
          Object.keys(params).forEach(function (key) {
            path = path.replace(":".concat(key), params[key]);
          });
          return path;
        };

        var addChildPath = function addChildPath(paths, childPath, params) {
          var originalPaths = (0, _toConsumableArray2["default"])(paths);
          var path = getPath(childPath || '', params);

          if (path) {
            originalPaths.push(path);
          }

          return originalPaths;
        };

        var Breadcrumb = function Breadcrumb(_a) {
          var customizePrefixCls = _a.prefixCls,
              _a$separator = _a.separator,
              separator = _a$separator === void 0 ? '/' : _a$separator,
              style = _a.style,
              className = _a.className,
              routes = _a.routes,
              children = _a.children,
              _a$itemRender = _a.itemRender,
              itemRender = _a$itemRender === void 0 ? defaultItemRender : _a$itemRender,
              _a$params = _a.params,
              params = _a$params === void 0 ? {} : _a$params,
              restProps = __rest(_a, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var crumbs;
          var prefixCls = getPrefixCls('breadcrumb', customizePrefixCls);

          if (routes && routes.length > 0) {
            // generated by route
            var paths = [];
            crumbs = routes.map(function (route) {
              var path = getPath(route.path, params);

              if (path) {
                paths.push(path);
              } // generated overlay by route.children


              var overlay;

              if (route.children && route.children.length) {
                overlay = /*#__PURE__*/React.createElement(_menu["default"], {
                  items: route.children.map(function (child) {
                    return {
                      key: child.path || child.breadcrumbName,
                      label: itemRender(child, params, routes, addChildPath(paths, child.path, params))
                    };
                  })
                });
              }

              var itemProps = {
                separator: separator
              };

              if (overlay) {
                itemProps.overlay = overlay;
              }

              return /*#__PURE__*/React.createElement(_BreadcrumbItem["default"], (0, _extends2["default"])({}, itemProps, {
                key: path || route.breadcrumbName
              }), itemRender(route, params, routes, paths));
            });
          } else if (children) {
            crumbs = (0, _toArray["default"])(children).map(function (element, index) {
              if (!element) {
                return element;
              }

              process.env.NODE_ENV !== "production" ? (0, _warning["default"])(element.type && (element.type.__ANT_BREADCRUMB_ITEM === true || element.type.__ANT_BREADCRUMB_SEPARATOR === true), 'Breadcrumb', "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children") : void 0;
              return (0, _reactNode.cloneElement)(element, {
                separator: separator,
                key: index
              });
            });
          }

          var breadcrumbClassName = (0, _classnames["default"])(prefixCls, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
          return /*#__PURE__*/React.createElement("nav", (0, _extends2["default"])({
            className: breadcrumbClassName,
            style: style
          }, restProps), /*#__PURE__*/React.createElement("ol", null, crumbs));
        };

        Breadcrumb.Item = _BreadcrumbItem["default"];
        Breadcrumb.Separator = _BreadcrumbSeparator["default"];
        var _default = Breadcrumb;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        'classnames': _req4,
        'rc-util/lib/Children/toArray': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../menu': _req8,
        '../_util/reactNode': _req9,
        '../_util/warning': _req10,
        './BreadcrumbItem': _req11,
        './BreadcrumbSeparator': _req12
      }));
    }
  };
});
//# sourceMappingURL=2d73770e8adb3f4ce9b22a037e44ac95c021de9b.js.map