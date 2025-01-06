System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@ant-design/icons/RightOutlined", "classnames", "rc-collapse", "react", "rc-util/lib/Children/toArray", "rc-util/lib/omit", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_antDesignIconsRightOutlined) {
      _req3 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcCollapse2) {
      _req5 = _rcCollapse2.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req7 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req8 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
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

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcCollapse = _interopRequireDefault(require("rc-collapse"));

        var React = _interopRequireWildcard(require("react"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _configProvider = require("../config-provider");

        var _motion = _interopRequireDefault(require("../_util/motion"));

        var _reactNode = require("../_util/reactNode");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _CollapsePanel = _interopRequireDefault(require("./CollapsePanel"));

        var Collapse = function Collapse(props) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var customizePrefixCls = props.prefixCls,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              _props$bordered = props.bordered,
              bordered = _props$bordered === void 0 ? true : _props$bordered,
              ghost = props.ghost,
              _props$expandIconPosi = props.expandIconPosition,
              expandIconPosition = _props$expandIconPosi === void 0 ? 'start' : _props$expandIconPosi;
          var prefixCls = getPrefixCls('collapse', customizePrefixCls); // Warning if use legacy type `expandIconPosition`

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(expandIconPosition !== 'left' && expandIconPosition !== 'right', 'Collapse', '`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.') : void 0; // Align with logic position

          var mergedExpandIconPosition = React.useMemo(function () {
            if (expandIconPosition === 'left') {
              return 'start';
            }

            return expandIconPosition === 'right' ? 'end' : expandIconPosition;
          }, [expandIconPosition]);

          var renderExpandIcon = function renderExpandIcon() {
            var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var expandIcon = props.expandIcon;
            var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/React.createElement(_RightOutlined["default"], {
              rotate: panelProps.isActive ? 90 : undefined
            });
            return (0, _reactNode.cloneElement)(icon, function () {
              return {
                className: (0, _classnames["default"])(icon.props.className, "".concat(prefixCls, "-arrow"))
              };
            });
          };

          var collapseClassName = (0, _classnames["default"])("".concat(prefixCls, "-icon-position-").concat(mergedExpandIconPosition), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ghost"), !!ghost), _classNames), className);
          var openMotion = (0, _extends2["default"])((0, _extends2["default"])({}, _motion["default"]), {
            motionAppear: false,
            leavedClassName: "".concat(prefixCls, "-content-hidden")
          });

          var getItems = function getItems() {
            var children = props.children;
            return (0, _toArray["default"])(children).map(function (child, index) {
              var _a;

              if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
                var key = child.key || String(index);
                var _child$props = child.props,
                    disabled = _child$props.disabled,
                    collapsible = _child$props.collapsible;
                var childProps = (0, _extends2["default"])((0, _extends2["default"])({}, (0, _omit["default"])(child.props, ['disabled'])), {
                  key: key,
                  collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
                });
                return (0, _reactNode.cloneElement)(child, childProps);
              }

              return child;
            });
          };

          return /*#__PURE__*/React.createElement(_rcCollapse["default"], (0, _extends2["default"])({
            openMotion: openMotion
          }, props, {
            expandIcon: renderExpandIcon,
            prefixCls: prefixCls,
            className: collapseClassName
          }), getItems());
        };

        Collapse.Panel = _CollapsePanel["default"];
        var _default = Collapse;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@ant-design/icons/RightOutlined': _req3,
        'classnames': _req4,
        'rc-collapse': _req5,
        'react': _req6,
        'rc-util/lib/Children/toArray': _req7,
        'rc-util/lib/omit': _req8,
        '../config-provider': _req9,
        '../_util/motion': _req10,
        '../_util/reactNode': _req11,
        '../_util/warning': _req12,
        './CollapsePanel': _req13
      }));
    }
  };
});
//# sourceMappingURL=dd535014f084ace41292b735bdfd2f595b035916.js.map