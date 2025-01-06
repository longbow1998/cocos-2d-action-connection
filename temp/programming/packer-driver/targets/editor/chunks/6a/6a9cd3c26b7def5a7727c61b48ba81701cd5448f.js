System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
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

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _Context = _interopRequireDefault(require("./Context"));

        var _IconBase = _interopRequireDefault(require("./IconBase"));

        var _twoTonePrimaryColor = require("./twoTonePrimaryColor");

        var _utils = require("../utils");

        var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];

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
        } // Initial setting
        // should move it to antd main repo?


        (0, _twoTonePrimaryColor.setTwoToneColor)('#1890ff');
        var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames;

          var className = props.className,
              icon = props.icon,
              spin = props.spin,
              rotate = props.rotate,
              tabIndex = props.tabIndex,
              onClick = props.onClick,
              twoToneColor = props.twoToneColor,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);

          var _React$useContext = React.useContext(_Context.default),
              _React$useContext$pre = _React$useContext.prefixCls,
              prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
              rootClassName = _React$useContext.rootClassName;

          var classString = (0, _classnames.default)(rootClassName, prefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
          var iconTabIndex = tabIndex;

          if (iconTabIndex === undefined && onClick) {
            iconTabIndex = -1;
          }

          var svgStyle = rotate ? {
            msTransform: "rotate(".concat(rotate, "deg)"),
            transform: "rotate(".concat(rotate, "deg)")
          } : undefined;

          var _normalizeTwoToneColo = (0, _utils.normalizeTwoToneColors)(twoToneColor),
              _normalizeTwoToneColo2 = (0, _slicedToArray2.default)(_normalizeTwoToneColo, 2),
              primaryColor = _normalizeTwoToneColo2[0],
              secondaryColor = _normalizeTwoToneColo2[1];

          return /*#__PURE__*/React.createElement("span", (0, _objectSpread2.default)((0, _objectSpread2.default)({
            role: "img",
            "aria-label": icon.name
          }, restProps), {}, {
            ref: ref,
            tabIndex: iconTabIndex,
            onClick: onClick,
            className: classString
          }), /*#__PURE__*/React.createElement(_IconBase.default, {
            icon: icon,
            primaryColor: primaryColor,
            secondaryColor: secondaryColor,
            style: svgStyle
          }));
        });
        Icon.displayName = 'AntdIcon';
        Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
        Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
        var _default = Icon;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'classnames': _req6,
        './Context': _req7,
        './IconBase': _req8,
        './twoTonePrimaryColor': _req9,
        '../utils': _req10
      }));
    }
  };
});
//# sourceMappingURL=6a9cd3c26b7def5a7727c61b48ba81701cd5448f.js.map