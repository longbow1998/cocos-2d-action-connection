System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "rc-menu", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcMenu2) {
      _req3 = _rcMenu2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
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
        exports["default"] = useItems;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _rcMenu = require("rc-menu");

        var React = _interopRequireWildcard(require("react"));

        var _MenuDivider = _interopRequireDefault(require("../MenuDivider"));

        var _MenuItem = _interopRequireDefault(require("../MenuItem"));

        var _SubMenu = _interopRequireDefault(require("../SubMenu"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function convertItemsToNodes(list) {
          return (list || []).map(function (opt, index) {
            if (opt && (0, _typeof2["default"])(opt) === 'object') {
              var _a = opt,
                  label = _a.label,
                  children = _a.children,
                  key = _a.key,
                  type = _a.type,
                  restProps = __rest(_a, ["label", "children", "key", "type"]);

              var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index); // MenuItemGroup & SubMenuItem

              if (children || type === 'group') {
                if (type === 'group') {
                  // Group
                  return /*#__PURE__*/React.createElement(_rcMenu.ItemGroup, (0, _extends2["default"])({
                    key: mergedKey
                  }, restProps, {
                    title: label
                  }), convertItemsToNodes(children));
                } // Sub Menu


                return /*#__PURE__*/React.createElement(_SubMenu["default"], (0, _extends2["default"])({
                  key: mergedKey
                }, restProps, {
                  title: label
                }), convertItemsToNodes(children));
              } // MenuItem & Divider


              if (type === 'divider') {
                return /*#__PURE__*/React.createElement(_MenuDivider["default"], (0, _extends2["default"])({
                  key: mergedKey
                }, restProps));
              }

              return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({
                key: mergedKey
              }, restProps), label);
            }

            return null;
          }).filter(function (opt) {
            return opt;
          });
        } // FIXME: Move logic here in v5

        /**
         * We simply convert `items` to ReactNode for reuse origin component logic. But we need move all the
         * logic from component into this hooks when in v5
         */


        function useItems(items) {
          return React.useMemo(function () {
            if (!items) {
              return items;
            }

            return convertItemsToNodes(items);
          }, [items]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        'rc-menu': _req3,
        'react': _req4,
        '../MenuDivider': _req5,
        '../MenuItem': _req6,
        '../SubMenu': _req7
      }));
    }
  };
});
//# sourceMappingURL=9bfb91afbf5a0d2b2396c74ade7d66ce97f2e327.js.map