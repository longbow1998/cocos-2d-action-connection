System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/objectSpread2", "react", "rc-util/lib/hooks/useMemo", "rc-util/lib/isEqual"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _MenuContext, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req1 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMemo) {
      _req4 = _rcUtilLibHooksUseMemo.__cjsMetaURL;
    }, function (_rcUtilLibIsEqual) {
      _req5 = _rcUtilLibIsEqual.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.MenuContext = void 0;
        exports.default = InheritableContextProvider;

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

        var _isEqual = _interopRequireDefault(require("rc-util/lib/isEqual"));

        var _excluded = ["children", "locked"];

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

        var MenuContext = /*#__PURE__*/React.createContext(null);
        exports.MenuContext = MenuContext;

        function mergeProps(origin, target) {
          var clone = (0, _objectSpread2.default)({}, origin);
          Object.keys(target).forEach(function (key) {
            var value = target[key];

            if (value !== undefined) {
              clone[key] = value;
            }
          });
          return clone;
        }

        function InheritableContextProvider(_ref) {
          var children = _ref.children,
              locked = _ref.locked,
              restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
          var context = React.useContext(MenuContext);
          var inheritableContext = (0, _useMemo.default)(function () {
            return mergeProps(context, restProps);
          }, [context, restProps], function (prev, next) {
            return !locked && (prev[0] !== next[0] || !(0, _isEqual.default)(prev[1], next[1], true));
          });
          return /*#__PURE__*/React.createElement(MenuContext.Provider, {
            value: inheritableContext
          }, children);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _MenuContext = module.exports.MenuContext;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectWithoutProperties': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        'rc-util/lib/hooks/useMemo': _req4,
        'rc-util/lib/isEqual': _req5
      }));
    }
  };
});
//# sourceMappingURL=d13ba5a2dc4303ae95810fe0797ce852769fd627.js.map