System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-tree", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcTree2) {
      _req0 = _rcTree2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _rcTree = require("rc-tree");

        var _Tree = _interopRequireDefault(require("./Tree"));

        var _DirectoryTree = _interopRequireDefault(require("./DirectoryTree"));

        var Tree = _Tree["default"];
        Tree.DirectoryTree = _DirectoryTree["default"];
        Tree.TreeNode = _rcTree.TreeNode;
        var _default = Tree;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-tree': _req0,
        './Tree': _req1,
        './DirectoryTree': _req2
      }));
    }
  };
});
//# sourceMappingURL=e5e742ebf6c3a0a879f1e7d1b381bd5fffce9394.js.map