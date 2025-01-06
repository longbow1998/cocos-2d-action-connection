System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useChildren;

        var React = _interopRequireWildcard(require("react"));

        var _Item = require("../Item");

        function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
          var getKey = _ref.getKey;
          return list.slice(startIndex, endIndex + 1).map(function (item, index) {
            var eleIndex = startIndex + index;
            var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
            });
            var key = getKey(item);
            return /*#__PURE__*/React.createElement(_Item.Item, {
              key: key,
              setRef: function setRef(ele) {
                return setNodeRef(item, ele);
              }
            }, node);
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        'react': _req0,
        '../Item': _req1
      }));
    }
  };
});
//# sourceMappingURL=7a1ec90263a30e1377d31e56b9098f580212dca4.js.map