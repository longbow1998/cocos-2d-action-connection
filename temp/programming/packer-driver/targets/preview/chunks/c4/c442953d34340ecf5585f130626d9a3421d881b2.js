System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "classnames", "rc-tree-select", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _cjsExports, ___esModule, _TreeNode, _default0, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcTreeSelect2) {
      _req4 = _rcTreeSelect2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req5 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req11 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req12 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req13 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req14 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req15 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req16 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req17 = _unresolved_12.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        Object.defineProperty(exports, "TreeNode", {
          enumerable: true,
          get: function get() {
            return _rcTreeSelect.TreeNode;
          }
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTreeSelect = _interopRequireWildcard(require("rc-tree-select"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _context = require("../form/context");

        var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));

        var _iconUtil2 = _interopRequireDefault(require("../tree/utils/iconUtil"));

        var _motion = require("../_util/motion");

        var _statusUtils = require("../_util/statusUtils");

        var _Compact = require("../space/Compact");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var InternalTreeSelect = function InternalTreeSelect(_a, ref) {
          var _classNames2;

          var customizePrefixCls = _a.prefixCls,
              customizeSize = _a.size,
              customDisabled = _a.disabled,
              _a$bordered = _a.bordered,
              bordered = _a$bordered === void 0 ? true : _a$bordered,
              className = _a.className,
              treeCheckable = _a.treeCheckable,
              multiple = _a.multiple,
              _a$listHeight = _a.listHeight,
              listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
              _a$listItemHeight = _a.listItemHeight,
              listItemHeight = _a$listItemHeight === void 0 ? 26 : _a$listItemHeight,
              placement = _a.placement,
              notFoundContent = _a.notFoundContent,
              _switcherIcon = _a.switcherIcon,
              treeLine = _a.treeLine,
              getPopupContainer = _a.getPopupContainer,
              dropdownClassName = _a.dropdownClassName,
              popupClassName = _a.popupClassName,
              _a$treeIcon = _a.treeIcon,
              treeIcon = _a$treeIcon === void 0 ? false : _a$treeIcon,
              transitionName = _a.transitionName,
              _a$choiceTransitionNa = _a.choiceTransitionName,
              choiceTransitionName = _a$choiceTransitionNa === void 0 ? '' : _a$choiceTransitionNa,
              customStatus = _a.status,
              showArrow = _a.showArrow,
              treeExpandAction = _a.treeExpandAction,
              props = __rest(_a, ["prefixCls", "size", "disabled", "bordered", "className", "treeCheckable", "multiple", "listHeight", "listItemHeight", "placement", "notFoundContent", "switcherIcon", "treeLine", "getPopupContainer", "dropdownClassName", "popupClassName", "treeIcon", "transitionName", "choiceTransitionName", "status", "showArrow", "treeExpandAction"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getContextPopupContainer = _React$useContext.getPopupContainer,
              getPrefixCls = _React$useContext.getPrefixCls,
              renderEmpty = _React$useContext.renderEmpty,
              direction = _React$useContext.direction,
              virtual = _React$useContext.virtual,
              dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

          var size = React.useContext(_SizeContext["default"]);
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(multiple !== false || !treeCheckable, 'TreeSelect', '`multiple` will always be `true` when `treeCheckable` is true') : void 0;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!dropdownClassName, 'TreeSelect', '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.') : void 0;
          var prefixCls = getPrefixCls('select', customizePrefixCls);
          var treePrefixCls = getPrefixCls('select-tree', customizePrefixCls);
          var treeSelectPrefixCls = getPrefixCls('tree-select', customizePrefixCls);

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames;

          var mergedDropdownClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, "".concat(treeSelectPrefixCls, "-dropdown"), (0, _defineProperty2["default"])({}, "".concat(treeSelectPrefixCls, "-dropdown-rtl"), direction === 'rtl'));
          var isMultiple = !!(treeCheckable || multiple);
          var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !isMultiple; // ===================== Form =====================

          var _useContext = (0, React.useContext)(_context.FormItemInputContext),
              contextStatus = _useContext.status,
              hasFeedback = _useContext.hasFeedback,
              isFormItemInput = _useContext.isFormItemInput,
              feedbackIcon = _useContext.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus); // ===================== Icons =====================

          var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
            multiple: isMultiple,
            showArrow: mergedShowArrow,
            hasFeedback: hasFeedback,
            feedbackIcon: feedbackIcon,
            prefixCls: prefixCls
          })),
              suffixIcon = _getIcons.suffixIcon,
              removeIcon = _getIcons.removeIcon,
              clearIcon = _getIcons.clearIcon; // ===================== Empty =====================


          var mergedNotFound;

          if (notFoundContent !== undefined) {
            mergedNotFound = notFoundContent;
          } else {
            mergedNotFound = (renderEmpty || _defaultRenderEmpty["default"])('Select');
          } // ==================== Render =====================


          var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'itemIcon', 'removeIcon', 'clearIcon', 'switcherIcon']); // ===================== Placement =====================

          var getPlacement = function getPlacement() {
            if (placement !== undefined) {
              return placement;
            }

            return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
          };

          var mergedSize = compactSize || customizeSize || size; // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
          var mergedClassName = (0, _classnames["default"])(!customizePrefixCls && treeSelectPrefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames2), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className);
          var rootPrefixCls = getPrefixCls();
          return /*#__PURE__*/React.createElement(_rcTreeSelect["default"], (0, _extends2["default"])({
            virtual: virtual,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth,
            disabled: mergedDisabled
          }, selectProps, {
            ref: ref,
            prefixCls: prefixCls,
            className: mergedClassName,
            listHeight: listHeight,
            listItemHeight: listItemHeight,
            treeCheckable: treeCheckable ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-tree-checkbox-inner")
            }) : treeCheckable,
            treeLine: !!treeLine,
            inputIcon: suffixIcon,
            multiple: multiple,
            placement: getPlacement(),
            removeIcon: removeIcon,
            clearIcon: clearIcon,
            switcherIcon: function switcherIcon(nodeProps) {
              return (0, _iconUtil2["default"])(treePrefixCls, _switcherIcon, treeLine, nodeProps);
            },
            showTreeIcon: treeIcon,
            notFoundContent: mergedNotFound,
            getPopupContainer: getPopupContainer || getContextPopupContainer,
            treeMotion: null,
            dropdownClassName: mergedDropdownClassName,
            choiceTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, '', choiceTransitionName),
            transitionName: (0, _motion.getTransitionName)(rootPrefixCls, (0, _motion.getTransitionDirection)(placement), transitionName),
            showArrow: hasFeedback || showArrow,
            treeExpandAction: treeExpandAction
          }));
        };

        var TreeSelectRef = /*#__PURE__*/React.forwardRef(InternalTreeSelect);
        var TreeSelect = TreeSelectRef;
        TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
        TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
        TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
        TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
        var _default = TreeSelect;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _TreeNode = module.exports.TreeNode;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'classnames': _req3,
        'rc-tree-select': _req4,
        'rc-util/lib/omit': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../config-provider/defaultRenderEmpty': _req8,
        '../config-provider/DisabledContext': _req9,
        '../config-provider/SizeContext': _req10,
        '../form/context': _req11,
        '../select/utils/iconUtil': _req12,
        '../tree/utils/iconUtil': _req13,
        '../_util/motion': _req14,
        '../_util/statusUtils': _req15,
        '../space/Compact': _req16,
        '../_util/warning': _req17
      }));
    }
  };
});
//# sourceMappingURL=c442953d34340ecf5585f130626d9a3421d881b2.js.map