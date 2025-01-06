System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "react", "rc-util/lib/Children/toArray", "rc-util/lib/warning", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, __rs, _default0, __cjsMetaURL;

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
    }, function (_rcUtilLibWarning) {
      _req4 = _rcUtilLibWarning.__cjsMetaURL;
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

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "_rs", {
          enumerable: true,
          get: function get() {
            return _observerUtil._rs;
          }
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _warning = require("rc-util/lib/warning");

        var _SingleObserver = _interopRequireDefault(require("./SingleObserver"));

        var _Collection = require("./Collection");

        var _observerUtil = require("./utils/observerUtil");

        var INTERNAL_PREFIX_KEY = 'rc-observer-key';

        function ResizeObserver(props, ref) {
          var children = props.children;
          var childNodes = typeof children === 'function' ? [children] : (0, _toArray.default)(children);

          if (process.env.NODE_ENV !== 'production') {
            if (childNodes.length > 1) {
              (0, _warning.warning)(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');
            } else if (childNodes.length === 0) {
              (0, _warning.warning)(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
            }
          }

          return childNodes.map(function (child, index) {
            var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
            return /*#__PURE__*/React.createElement(_SingleObserver.default, (0, _extends2.default)({}, props, {
              key: key,
              ref: index === 0 ? ref : undefined
            }), child);
          });
        }

        var RefResizeObserver = /*#__PURE__*/React.forwardRef(ResizeObserver);

        if (process.env.NODE_ENV !== 'production') {
          RefResizeObserver.displayName = 'ResizeObserver';
        }

        RefResizeObserver.Collection = _Collection.Collection;
        var _default = RefResizeObserver;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        __rs = module.exports._rs;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        'rc-util/lib/Children/toArray': _req3,
        'rc-util/lib/warning': _req4,
        './SingleObserver': _req5,
        './Collection': _req6,
        './utils/observerUtil': _req7
      }));
    }
  };
});
//# sourceMappingURL=ac480539e85ee45a9f828bbba1abb53ccb6e6ae1.js.map