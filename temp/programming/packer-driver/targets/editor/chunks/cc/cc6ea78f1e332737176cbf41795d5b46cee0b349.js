System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames3) {
      _req4 = _classnames3.__cjsMetaURL;
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
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames2 = _interopRequireDefault(require("classnames"));

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
        /* eslint-disable no-underscore-dangle */

        /* eslint-disable react/prop-types */


        var PanelContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classnames;

          var prefixCls = props.prefixCls,
              forceRender = props.forceRender,
              className = props.className,
              style = props.style,
              children = props.children,
              isActive = props.isActive,
              role = props.role;

          var _React$useState = React.useState(isActive || forceRender),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              rendered = _React$useState2[0],
              setRendered = _React$useState2[1];

          React.useEffect(function () {
            if (forceRender || isActive) {
              setRendered(true);
            }
          }, [forceRender, isActive]);

          if (!rendered) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            ref: ref,
            className: (0, _classnames2.default)("".concat(prefixCls, "-content"), (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-content-active"), isActive), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames), className),
            style: style,
            role: role
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content-box")
          }, children));
        });
        PanelContent.displayName = 'PanelContent';
        var _default = PanelContent;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'classnames': _req4
      }));
    }
  };
});
//# sourceMappingURL=cc6ea78f1e332737176cbf41795d5b46cee0b349.js.map