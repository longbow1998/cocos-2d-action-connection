System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@ant-design/colors", "react", "rc-util/lib/warning", "rc-util/lib/Dom/dynamicCSS", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _generate, _getSecondaryColor, _iconStyles, _isIconDefinition, _normalizeAttrs, _normalizeTwoToneColors, _useInsertStyles, _svgBaseProps, _warning0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_antDesignColors) {
      _req3 = _antDesignColors.__cjsMetaURL;
    }, function (_react2) {
      _req4 = _react2.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req5 = _rcUtilLibWarning.__cjsMetaURL;
    }, function (_rcUtilLibDomDynamicCSS) {
      _req6 = _rcUtilLibDomDynamicCSS.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.generate = generate;
        exports.getSecondaryColor = getSecondaryColor;
        exports.iconStyles = void 0;
        exports.isIconDefinition = isIconDefinition;
        exports.normalizeAttrs = normalizeAttrs;
        exports.normalizeTwoToneColors = normalizeTwoToneColors;
        exports.useInsertStyles = exports.svgBaseProps = void 0;
        exports.warning = warning;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _colors = require("@ant-design/colors");

        var _react = _interopRequireWildcard(require("react"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _dynamicCSS = require("rc-util/lib/Dom/dynamicCSS");

        var _Context = _interopRequireDefault(require("./components/Context"));

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

        function warning(valid, message) {
          (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
        }

        function isIconDefinition(target) {
          return (0, _typeof2.default)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0, _typeof2.default)(target.icon) === 'object' || typeof target.icon === 'function');
        }

        function normalizeAttrs() {
          var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object.keys(attrs).reduce(function (acc, key) {
            var val = attrs[key];

            switch (key) {
              case 'class':
                acc.className = val;
                delete acc.class;
                break;

              default:
                acc[key] = val;
            }

            return acc;
          }, {});
        }

        function generate(node, key, rootProps) {
          if (!rootProps) {
            return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)({
              key: key
            }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
              return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
            }));
          }

          return /*#__PURE__*/_react.default.createElement(node.tag, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            key: key
          }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
            return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
          }));
        }

        function getSecondaryColor(primaryColor) {
          // choose the second color
          return (0, _colors.generate)(primaryColor)[0];
        }

        function normalizeTwoToneColors(twoToneColor) {
          if (!twoToneColor) {
            return [];
          }

          return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
        } // These props make sure that the SVG behaviours like general text.
        // Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4


        var svgBaseProps = {
          width: '1em',
          height: '1em',
          fill: 'currentColor',
          'aria-hidden': 'true',
          focusable: 'false'
        };
        exports.svgBaseProps = svgBaseProps;
        var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
        exports.iconStyles = iconStyles;

        var useInsertStyles = function useInsertStyles() {
          var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

          var _useContext = (0, _react.useContext)(_Context.default),
              csp = _useContext.csp;

          (0, _react.useEffect)(function () {
            (0, _dynamicCSS.updateCSS)(styleStr, '@ant-design-icons', {
              prepend: true,
              csp: csp
            });
          }, []);
        };

        exports.useInsertStyles = useInsertStyles; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _generate = module.exports.generate;
        _getSecondaryColor = module.exports.getSecondaryColor;
        _iconStyles = module.exports.iconStyles;
        _isIconDefinition = module.exports.isIconDefinition;
        _normalizeAttrs = module.exports.normalizeAttrs;
        _normalizeTwoToneColors = module.exports.normalizeTwoToneColors;
        _useInsertStyles = module.exports.useInsertStyles;
        _svgBaseProps = module.exports.svgBaseProps;
        _warning0 = module.exports.warning;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@ant-design/colors': _req3,
        'react': _req4,
        'rc-util/lib/warning': _req5,
        'rc-util/lib/Dom/dynamicCSS': _req6,
        './components/Context': _req7
      }));
    }
  };
});
//# sourceMappingURL=d6600c75e048dcc484c69b9ec1b7edd64c0186ff.js.map