System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react-is", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _composeRef, _fillRef, _supportRef, _useComposeRef, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_reactIs2) {
      _req1 = _reactIs2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.composeRef = composeRef;
        exports.fillRef = fillRef;
        exports.supportRef = supportRef;
        exports.useComposeRef = useComposeRef;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _reactIs = require("react-is");

        var _useMemo = _interopRequireDefault(require("./hooks/useMemo"));
        /* eslint-disable no-param-reassign */


        function fillRef(ref, node) {
          if (typeof ref === 'function') {
            ref(node);
          } else if ((0, _typeof2.default)(ref) === 'object' && ref && 'current' in ref) {
            ref.current = node;
          }
        }
        /**
         * Merge refs into one ref function to support ref passing.
         */


        function composeRef() {
          for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
            refs[_key] = arguments[_key];
          }

          var refList = refs.filter(function (ref) {
            return ref;
          });

          if (refList.length <= 1) {
            return refList[0];
          }

          return function (node) {
            refs.forEach(function (ref) {
              fillRef(ref, node);
            });
          };
        }

        function useComposeRef() {
          for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            refs[_key2] = arguments[_key2];
          }

          return (0, _useMemo.default)(function () {
            return composeRef.apply(void 0, refs);
          }, refs, function (prev, next) {
            return prev.length === next.length && prev.every(function (ref, i) {
              return ref === next[i];
            });
          });
        }

        function supportRef(nodeOrComponent) {
          var _type$prototype, _nodeOrComponent$prot;

          var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

          if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
            return false;
          } // Class component


          if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
            return false;
          }

          return true;
        }
        /* eslint-enable */
        // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _composeRef = module.exports.composeRef;
        _fillRef = module.exports.fillRef;
        _supportRef = module.exports.supportRef;
        _useComposeRef = module.exports.useComposeRef;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'react-is': _req1,
        './hooks/useMemo': _req2
      }));
    }
  };
});
//# sourceMappingURL=2ac6937c310a4f77f46d6ea9b32e21c2629c092a.js.map