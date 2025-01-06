System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "rc-util/lib/Children/toArray", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_rcUtilLibChildrenToArray) {
      _req3 = _rcUtilLibChildrenToArray.__cjsMetaURL;
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
        exports["default"] = useLegacyItems;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _warning = _interopRequireDefault(require("../../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function filter(items) {
          return items.filter(function (item) {
            return item;
          });
        }

        function useLegacyItems(items, children) {
          if (items) {
            return items;
          }

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!children, 'Tabs', 'Tabs.TabPane is deprecated. Please use `items` directly.') : void 0;
          var childrenItems = (0, _toArray["default"])(children).map(function (node) {
            if ( /*#__PURE__*/React.isValidElement(node)) {
              var key = node.key,
                  props = node.props;

              var _a = props || {},
                  tab = _a.tab,
                  restProps = __rest(_a, ["tab"]);

              var item = (0, _extends2["default"])((0, _extends2["default"])({
                key: String(key)
              }, restProps), {
                label: tab
              });
              return item;
            }

            return null;
          });
          return filter(childrenItems);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        'rc-util/lib/Children/toArray': _req3,
        '../../_util/warning': _req4
      }));
    }
  };
});
//# sourceMappingURL=d7d4201a8f354daa540b0f06a0a41adfa65948af.js.map