System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/DeleteOutlined", "classnames", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsDeleteOutlined) {
      _req3 = _antDesignIconsDeleteOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons/DeleteOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var React = _interopRequireWildcard(require("react"));

        var _checkbox = _interopRequireDefault(require("../checkbox"));

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _default2 = _interopRequireDefault(require("../locale/default"));

        var _transButton = _interopRequireDefault(require("../_util/transButton"));

        var ListItem = function ListItem(props) {
          var _classNames;

          var renderedText = props.renderedText,
              renderedEl = props.renderedEl,
              item = props.item,
              checked = props.checked,
              disabled = props.disabled,
              prefixCls = props.prefixCls,
              onClick = props.onClick,
              onRemove = props.onRemove,
              showRemove = props.showRemove;
          var className = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-content-item"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-content-item-checked"), checked), _classNames));
          var title;

          if (typeof renderedText === 'string' || typeof renderedText === 'number') {
            title = String(renderedText);
          }

          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "Transfer",
            defaultLocale: _default2["default"].Transfer
          }, function (contextLocale) {
            var liProps = {
              className: className,
              title: title
            };
            var labelNode = /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-content-item-text")
            }, renderedEl); // Show remove

            if (showRemove) {
              return /*#__PURE__*/React.createElement("li", (0, _extends2["default"])({}, liProps), labelNode, /*#__PURE__*/React.createElement(_transButton["default"], {
                disabled: disabled || item.disabled,
                className: "".concat(prefixCls, "-content-item-remove"),
                "aria-label": contextLocale.remove,
                onClick: function onClick() {
                  onRemove === null || onRemove === void 0 ? void 0 : onRemove(item);
                }
              }, /*#__PURE__*/React.createElement(_DeleteOutlined["default"], null)));
            } // Default click to select


            liProps.onClick = disabled || item.disabled ? undefined : function () {
              return onClick(item);
            };
            return /*#__PURE__*/React.createElement("li", (0, _extends2["default"])({}, liProps), /*#__PURE__*/React.createElement(_checkbox["default"], {
              className: "".concat(prefixCls, "-checkbox"),
              checked: checked,
              disabled: disabled || item.disabled
            }), labelNode);
          });
        };

        var _default = /*#__PURE__*/React.memo(ListItem);

        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/DeleteOutlined': _req3,
        'classnames': _req4,
        'react': _req5,
        '../checkbox': _req6,
        '../locale-provider/LocaleReceiver': _req7,
        '../locale/default': _req8,
        '../_util/transButton': _req9
      }));
    }
  };
});
//# sourceMappingURL=fbcfbda7ac2ec35056852fb2669cafc8888ff16b.js.map