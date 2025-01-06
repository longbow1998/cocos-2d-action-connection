System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _IdContext, _getMenuId, _useMenuId, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.IdContext = void 0;
        exports.getMenuId = getMenuId;
        exports.useMenuId = useMenuId;

        var React = _interopRequireWildcard(require("react"));

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var IdContext = /*#__PURE__*/React.createContext(null);
        exports.IdContext = IdContext;

        function getMenuId(uuid, eventKey) {
          if (uuid === undefined) {
            return null;
          }

          return "".concat(uuid, "-").concat(eventKey);
        }
        /**
         * Get `data-menu-id`
         */


        function useMenuId(eventKey) {
          var id = React.useContext(IdContext);
          return getMenuId(id, eventKey);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _IdContext = module.exports.IdContext;
        _getMenuId = module.exports.getMenuId;
        _useMenuId = module.exports.useMenuId;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=96fdd10a55ffdad1614566327adf761fe44e7829.js.map