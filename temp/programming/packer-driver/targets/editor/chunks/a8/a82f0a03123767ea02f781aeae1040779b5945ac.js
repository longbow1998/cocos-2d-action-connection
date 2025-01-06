System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/objectSpread2", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req0 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _utils = require("../utils");

        var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
        var twoToneColorPalette = {
          primaryColor: '#333',
          secondaryColor: '#E6E6E6',
          calculated: false
        };

        function setTwoToneColors(_ref) {
          var primaryColor = _ref.primaryColor,
              secondaryColor = _ref.secondaryColor;
          twoToneColorPalette.primaryColor = primaryColor;
          twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
          twoToneColorPalette.calculated = !!secondaryColor;
        }

        function getTwoToneColors() {
          return (0, _objectSpread2.default)({}, twoToneColorPalette);
        }

        var IconBase = function IconBase(props) {
          var icon = props.icon,
              className = props.className,
              onClick = props.onClick,
              style = props.style,
              primaryColor = props.primaryColor,
              secondaryColor = props.secondaryColor,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var colors = twoToneColorPalette;

          if (primaryColor) {
            colors = {
              primaryColor: primaryColor,
              secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
            };
          }

          (0, _utils.useInsertStyles)();
          (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));

          if (!(0, _utils.isIconDefinition)(icon)) {
            return null;
          }

          var target = icon;

          if (target && typeof target.icon === 'function') {
            target = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, target), {}, {
              icon: target.icon(colors.primaryColor, colors.secondaryColor)
            });
          }

          return (0, _utils.generate)(target.icon, "svg-".concat(target.name), (0, _objectSpread2.default)({
            className: className,
            onClick: onClick,
            style: style,
            'data-icon': target.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true'
          }, restProps));
        };

        IconBase.displayName = 'IconReact';
        IconBase.getTwoToneColors = getTwoToneColors;
        IconBase.setTwoToneColors = setTwoToneColors;
        var _default = IconBase;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectWithoutProperties': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '../utils': _req2
      }));
    }
  };
});
//# sourceMappingURL=a82f0a03123767ea02f781aeae1040779b5945ac.js.map