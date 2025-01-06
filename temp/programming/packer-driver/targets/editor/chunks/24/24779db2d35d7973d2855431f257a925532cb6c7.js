System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "rc-resize-observer", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req5 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
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
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _classnames = _interopRequireDefault(require("classnames"));
        /**
         * Fill component to provided the scroll content real height.
         */


        var Filler = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
          var height = _ref.height,
              offset = _ref.offset,
              children = _ref.children,
              prefixCls = _ref.prefixCls,
              onInnerResize = _ref.onInnerResize,
              innerProps = _ref.innerProps;
          var outerStyle = {};
          var innerStyle = {
            display: 'flex',
            flexDirection: 'column'
          };

          if (offset !== undefined) {
            outerStyle = {
              height: height,
              position: 'relative',
              overflow: 'hidden'
            };
            innerStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, innerStyle), {}, {
              transform: "translateY(".concat(offset, "px)"),
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0
            });
          }

          return /*#__PURE__*/React.createElement("div", {
            style: outerStyle
          }, /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
            onResize: function onResize(_ref2) {
              var offsetHeight = _ref2.offsetHeight;

              if (offsetHeight && onInnerResize) {
                onInnerResize();
              }
            }
          }, /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
            style: innerStyle,
            className: (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
            ref: ref
          }, innerProps), children)));
        });
        Filler.displayName = 'Filler';
        var _default = Filler;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        'react': _req4,
        'rc-resize-observer': _req5,
        'classnames': _req6
      }));
    }
  };
});
//# sourceMappingURL=24779db2d35d7973d2855431f257a925532cb6c7.js.map