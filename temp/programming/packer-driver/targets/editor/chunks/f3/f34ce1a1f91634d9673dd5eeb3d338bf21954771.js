System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _convertLegacyProps, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
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
    }, function (_unresolved_7) {
      _req13 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req14 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req15 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req16 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req17 = _unresolved_11.__cjsMetaURL;
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
        exports.convertLegacyProps = convertLegacyProps;
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _Compact = require("../space/Compact");

        var _reactNode = require("../_util/reactNode");

        var _type = require("../_util/type");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var _wave = _interopRequireDefault(require("../_util/wave"));

        var _buttonGroup = _interopRequireWildcard(require("./button-group"));

        var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        /* eslint-disable react/button-has-type */


        var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
        var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

        function isString(str) {
          return typeof str === 'string';
        }

        function isUnBorderedButtonType(type) {
          return type === 'text' || type === 'link';
        } // Insert one space between two chinese characters automatically.


        function insertSpace(child, needInserted) {
          // Check the child if is undefined or null.
          if (child === null || child === undefined) {
            return;
          }

          var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

          if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
            return (0, _reactNode.cloneElement)(child, {
              children: child.props.children.split('').join(SPACE)
            });
          }

          if (typeof child === 'string') {
            return isTwoCNChar(child) ? /*#__PURE__*/React.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/React.createElement("span", null, child);
          }

          if ((0, _reactNode.isFragment)(child)) {
            return /*#__PURE__*/React.createElement("span", null, child);
          }

          return child;
        }

        function spaceChildren(children, needInserted) {
          var isPrevChildPure = false;
          var childList = [];
          React.Children.forEach(children, function (child) {
            var type = (0, _typeof2["default"])(child);
            var isCurrentChildPure = type === 'string' || type === 'number';

            if (isPrevChildPure && isCurrentChildPure) {
              var lastIndex = childList.length - 1;
              var lastChild = childList[lastIndex];
              childList[lastIndex] = "".concat(lastChild).concat(child);
            } else {
              childList.push(child);
            }

            isPrevChildPure = isCurrentChildPure;
          }); // Pass to React.Children.map to auto fill key

          return React.Children.map(childList, function (child) {
            return insertSpace(child, needInserted);
          });
        }

        var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
        var ButtonShapes = (0, _type.tuple)('default', 'circle', 'round');
        var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

        function convertLegacyProps(type) {
          if (type === 'danger') {
            return {
              danger: true
            };
          }

          return {
            type: type
          };
        }

        var InternalButton = function InternalButton(props, ref) {
          var _classNames;

          var _props$loading = props.loading,
              loading = _props$loading === void 0 ? false : _props$loading,
              customizePrefixCls = props.prefixCls,
              _props$type = props.type,
              type = _props$type === void 0 ? 'default' : _props$type,
              danger = props.danger,
              _props$shape = props.shape,
              shape = _props$shape === void 0 ? 'default' : _props$shape,
              customizeSize = props.size,
              customDisabled = props.disabled,
              className = props.className,
              children = props.children,
              icon = props.icon,
              _props$ghost = props.ghost,
              ghost = _props$ghost === void 0 ? false : _props$ghost,
              _props$block = props.block,
              block = _props$block === void 0 ? false : _props$block,
              _props$htmlType = props.htmlType,
              htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
              rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);

          var size = React.useContext(_SizeContext["default"]); // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
          var groupSize = React.useContext(_buttonGroup.GroupSizeContext);

          var _React$useState = React.useState(!!loading),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              innerLoading = _React$useState2[0],
              setLoading = _React$useState2[1];

          var _React$useState3 = React.useState(false),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              hasTwoCNChar = _React$useState4[0],
              setHasTwoCNChar = _React$useState4[1];

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
              direction = _React$useContext.direction;

          var buttonRef = ref || /*#__PURE__*/React.createRef();

          var isNeedInserted = function isNeedInserted() {
            return React.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
          };

          var fixTwoCNChar = function fixTwoCNChar() {
            // Fix for HOC usage like <FormatMessage />
            if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
              return;
            }

            var buttonText = buttonRef.current.textContent;

            if (isNeedInserted() && isTwoCNChar(buttonText)) {
              if (!hasTwoCNChar) {
                setHasTwoCNChar(true);
              }
            } else if (hasTwoCNChar) {
              setHasTwoCNChar(false);
            }
          }; // =============== Update Loading ===============


          var loadingOrDelay = typeof loading === 'boolean' ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
          React.useEffect(function () {
            var delayTimer = null;

            if (typeof loadingOrDelay === 'number') {
              delayTimer = window.setTimeout(function () {
                delayTimer = null;
                setLoading(loadingOrDelay);
              }, loadingOrDelay);
            } else {
              setLoading(loadingOrDelay);
            }

            return function () {
              if (delayTimer) {
                // in order to not perform a React state update on an unmounted component
                // and clear timer after 'loadingOrDelay' updated.
                window.clearTimeout(delayTimer);
                delayTimer = null;
              }
            };
          }, [loadingOrDelay]);
          React.useEffect(fixTwoCNChar, [buttonRef]);

          var handleClick = function handleClick(e) {
            var onClick = props.onClick; // https://github.com/ant-design/ant-design/issues/30207

            if (innerLoading || mergedDisabled) {
              e.preventDefault();
              return;
            }

            onClick === null || onClick === void 0 ? void 0 : onClick(e);
          };

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon")) : void 0;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!(ghost && isUnBorderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.") : void 0;
          var prefixCls = getPrefixCls('btn', customizePrefixCls);
          var autoInsertSpace = autoInsertSpaceInButton !== false;

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames;

          var sizeClassNameMap = {
            large: 'lg',
            small: 'sm',
            middle: undefined
          };
          var sizeFullname = compactSize || groupSize || customizeSize || size;
          var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';
          var iconType = innerLoading ? 'loading' : icon;
          var linkButtonRestProps = (0, _omit["default"])(rest, ['navigate']);
          var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== 'default' && shape), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== undefined && mergedDisabled), _classNames), compactItemClassnames, className);
          var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/React.createElement(_LoadingIcon["default"], {
            existIcon: !!icon,
            prefixCls: prefixCls,
            loading: !!innerLoading
          });
          var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;

          if (linkButtonRestProps.href !== undefined) {
            return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({}, linkButtonRestProps, {
              className: classes,
              onClick: handleClick,
              ref: buttonRef
            }), iconNode, kids);
          }

          var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, rest, {
            type: htmlType,
            className: classes,
            onClick: handleClick,
            disabled: mergedDisabled,
            ref: buttonRef
          }), iconNode, kids);

          if (isUnBorderedButtonType(type)) {
            return buttonNode;
          }

          return /*#__PURE__*/React.createElement(_wave["default"], {
            disabled: !!innerLoading
          }, buttonNode);
        };

        var Button = /*#__PURE__*/React.forwardRef(InternalButton);

        if (process.env.NODE_ENV !== 'production') {
          Button.displayName = 'Button';
        }

        Button.Group = _buttonGroup["default"];
        Button.__ANT_BUTTON = true;
        var _default = Button;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _convertLegacyProps = module.exports.convertLegacyProps;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/typeof': _req4,
        'classnames': _req5,
        'rc-util/lib/omit': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../config-provider/DisabledContext': _req9,
        '../config-provider/SizeContext': _req10,
        '../space/Compact': _req11,
        '../_util/reactNode': _req12,
        '../_util/type': _req13,
        '../_util/warning': _req14,
        '../_util/wave': _req15,
        './button-group': _req16,
        './LoadingIcon': _req17
      }));
    }
  };
});
//# sourceMappingURL=f34ce1a1f91634d9673dd5eeb3d338bf21954771.js.map