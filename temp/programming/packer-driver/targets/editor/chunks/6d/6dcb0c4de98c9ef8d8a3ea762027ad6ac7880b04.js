System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/CloseOutlined", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsCloseOutlined) {
      _req4 = _antDesignIconsCloseOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req6 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _colors = require("../_util/colors");

        var _wave = _interopRequireDefault(require("../_util/wave"));

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _CheckableTag = _interopRequireDefault(require("./CheckableTag"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$"));
        var PresetStatusColorRegex = new RegExp("^(".concat(_colors.PresetStatusColorTypes.join('|'), ")$"));

        var InternalTag = function InternalTag(_a, ref) {
          var _classNames;

          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              style = _a.style,
              children = _a.children,
              icon = _a.icon,
              color = _a.color,
              onClose = _a.onClose,
              closeIcon = _a.closeIcon,
              _a$closable = _a.closable,
              closable = _a$closable === void 0 ? false : _a$closable,
              props = __rest(_a, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var _React$useState = React.useState(true),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              visible = _React$useState2[0],
              setVisible = _React$useState2[1]; // Warning for deprecated usage


          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('visible' in props), 'Tag', '`visible` will be removed in next major version, please use `visible && <Tag />` instead.') : void 0;
          }

          React.useEffect(function () {
            if ('visible' in props) {
              setVisible(props.visible);
            }
          }, [props.visible]);

          var isPresetColor = function isPresetColor() {
            if (!color) {
              return false;
            }

            return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
          };

          var tagStyle = (0, _extends2["default"])({
            backgroundColor: color && !isPresetColor() ? color : undefined
          }, style);
          var presetColor = isPresetColor();
          var prefixCls = getPrefixCls('tag', customizePrefixCls);
          var tagClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(color), presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-color"), color && !presetColor), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hidden"), !visible), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

          var handleCloseClick = function handleCloseClick(e) {
            e.stopPropagation();
            onClose === null || onClose === void 0 ? void 0 : onClose(e);

            if (e.defaultPrevented) {
              return;
            }

            if (!('visible' in props)) {
              setVisible(false);
            }
          };

          var renderCloseIcon = function renderCloseIcon() {
            if (closable) {
              return closeIcon ? /*#__PURE__*/React.createElement("span", {
                className: "".concat(prefixCls, "-close-icon"),
                onClick: handleCloseClick
              }, closeIcon) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
                className: "".concat(prefixCls, "-close-icon"),
                onClick: handleCloseClick
              });
            }

            return null;
          };

          var isNeedWave = 'onClick' in props || children && children.type === 'a';
          var tagProps = (0, _omit["default"])(props, ['visible']);
          var iconNode = icon || null;
          var kids = iconNode ? /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement("span", null, children)) : children;
          var tagNode = /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, tagProps, {
            ref: ref,
            className: tagClassName,
            style: tagStyle
          }), kids, renderCloseIcon());
          return isNeedWave ? /*#__PURE__*/React.createElement(_wave["default"], null, tagNode) : tagNode;
        };

        var Tag = /*#__PURE__*/React.forwardRef(InternalTag);

        if (process.env.NODE_ENV !== 'production') {
          Tag.displayName = 'Tag';
        }

        Tag.CheckableTag = _CheckableTag["default"];
        var _default = Tag;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@ant-design/icons/CloseOutlined': _req4,
        'classnames': _req5,
        'rc-util/lib/omit': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../_util/colors': _req9,
        '../_util/wave': _req10,
        '../_util/warning': _req11,
        './CheckableTag': _req12
      }));
    }
  };
});
//# sourceMappingURL=6dcb0c4de98c9ef8d8a3ea762027ad6ac7880b04.js.map