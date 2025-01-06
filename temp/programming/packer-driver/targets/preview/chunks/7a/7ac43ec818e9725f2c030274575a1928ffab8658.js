System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _Divider0, _Item, _ItemGroup, _MenuItem0, _MenuItemGroup0, _SubMenu0, _default0, _useFullPath, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req2 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req3 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req4 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req5 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "Divider", {
          enumerable: true,
          get: function get() {
            return _Divider.default;
          }
        });
        Object.defineProperty(exports, "Item", {
          enumerable: true,
          get: function get() {
            return _MenuItem.default;
          }
        });
        Object.defineProperty(exports, "ItemGroup", {
          enumerable: true,
          get: function get() {
            return _MenuItemGroup.default;
          }
        });
        Object.defineProperty(exports, "MenuItem", {
          enumerable: true,
          get: function get() {
            return _MenuItem.default;
          }
        });
        Object.defineProperty(exports, "MenuItemGroup", {
          enumerable: true,
          get: function get() {
            return _MenuItemGroup.default;
          }
        });
        Object.defineProperty(exports, "SubMenu", {
          enumerable: true,
          get: function get() {
            return _SubMenu.default;
          }
        });
        exports.default = void 0;
        Object.defineProperty(exports, "useFullPath", {
          enumerable: true,
          get: function get() {
            return _PathContext.useFullPath;
          }
        });

        var _Menu = _interopRequireDefault(require("./Menu"));

        var _MenuItem = _interopRequireDefault(require("./MenuItem"));

        var _SubMenu = _interopRequireDefault(require("./SubMenu"));

        var _MenuItemGroup = _interopRequireDefault(require("./MenuItemGroup"));

        var _PathContext = require("./context/PathContext");

        var _Divider = _interopRequireDefault(require("./Divider"));

        var ExportMenu = _Menu.default;
        ExportMenu.Item = _MenuItem.default;
        ExportMenu.SubMenu = _SubMenu.default;
        ExportMenu.ItemGroup = _MenuItemGroup.default;
        ExportMenu.Divider = _Divider.default;
        var _default = ExportMenu;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Divider0 = module.exports.Divider;
        _Item = module.exports.Item;
        _ItemGroup = module.exports.ItemGroup;
        _MenuItem0 = module.exports.MenuItem;
        _MenuItemGroup0 = module.exports.MenuItemGroup;
        _SubMenu0 = module.exports.SubMenu;
        _default0 = module.exports.default;
        _useFullPath = module.exports.useFullPath;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './Menu': _req0,
        './MenuItem': _req1,
        './SubMenu': _req2,
        './MenuItemGroup': _req3,
        './context/PathContext': _req4,
        './Divider': _req5
      }));
    }
  };
});
//# sourceMappingURL=7ac43ec818e9725f2c030274575a1928ffab8658.js.map