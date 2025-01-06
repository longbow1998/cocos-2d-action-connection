System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "classnames", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var Steps = function Steps(props) {
          var size = props.size,
              steps = props.steps,
              _props$percent = props.percent,
              percent = _props$percent === void 0 ? 0 : _props$percent,
              _props$strokeWidth = props.strokeWidth,
              strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
              strokeColor = props.strokeColor,
              _props$trailColor = props.trailColor,
              trailColor = _props$trailColor === void 0 ? null : _props$trailColor,
              prefixCls = props.prefixCls,
              children = props.children;
          var current = Math.round(steps * (percent / 100));
          var stepWidth = size === 'small' ? 2 : 14;
          var styledSteps = new Array(steps);

          for (var i = 0; i < steps; i++) {
            var color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
            styledSteps[i] = /*#__PURE__*/React.createElement("div", {
              key: i,
              className: (0, _classnames["default"])("".concat(prefixCls, "-steps-item"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
              style: {
                backgroundColor: i <= current - 1 ? color : trailColor,
                width: stepWidth,
                height: strokeWidth
              }
            });
          }

          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-steps-outer")
          }, styledSteps, children);
        };

        var _default = Steps;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'classnames': _req2,
        'react': _req3
      }));
    }
  };
});
//# sourceMappingURL=e658b0d684540ee9c9d12d73f53549dc978185c6.js.map