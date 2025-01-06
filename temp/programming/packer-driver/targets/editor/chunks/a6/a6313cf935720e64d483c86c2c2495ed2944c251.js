System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
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

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useActive;

        var React = _interopRequireWildcard(require("react"));

        var _MenuContext = require("../context/MenuContext");

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

        function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
          var _React$useContext = React.useContext(_MenuContext.MenuContext),
              activeKey = _React$useContext.activeKey,
              onActive = _React$useContext.onActive,
              onInactive = _React$useContext.onInactive;

          var ret = {
            active: activeKey === eventKey
          }; // Skip when disabled

          if (!disabled) {
            ret.onMouseEnter = function (domEvent) {
              onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
                key: eventKey,
                domEvent: domEvent
              });
              onActive(eventKey);
            };

            ret.onMouseLeave = function (domEvent) {
              onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
                key: eventKey,
                domEvent: domEvent
              });
              onInactive(eventKey);
            };
          }

          return ret;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0,
        '../context/MenuContext': _req1
      }));
    }
  };
});
//# sourceMappingURL=a6313cf935720e64d483c86c2c2495ed2944c251.js.map