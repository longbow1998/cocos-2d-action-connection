System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "@ant-design/icons/LeftOutlined", "@ant-design/icons/LoadingOutlined", "@ant-design/icons/RightOutlined", "classnames", "rc-cascader", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_antDesignIconsLeftOutlined) {
      _req5 = _antDesignIconsLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req6 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_antDesignIconsRightOutlined) {
      _req7 = _antDesignIconsRightOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcCascader2) {
      _req9 = _rcCascader2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req10 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req11 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req17 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req18 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req19 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req20 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req21 = _unresolved_11.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _LeftOutlined = _interopRequireDefault(require("@ant-design/icons/LeftOutlined"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _RightOutlined = _interopRequireDefault(require("@ant-design/icons/RightOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcCascader = _interopRequireDefault(require("rc-cascader"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));

        var _DisabledContext = _interopRequireDefault(require("../config-provider/DisabledContext"));

        var _SizeContext = _interopRequireDefault(require("../config-provider/SizeContext"));

        var _Compact = require("../space/Compact");

        var _context = require("../form/context");

        var _iconUtil = _interopRequireDefault(require("../select/utils/iconUtil"));

        var _motion = require("../_util/motion");

        var _statusUtils = require("../_util/statusUtils");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var SHOW_CHILD = _rcCascader["default"].SHOW_CHILD,
            SHOW_PARENT = _rcCascader["default"].SHOW_PARENT;

        function highlightKeyword(str, lowerKeyword, prefixCls) {
          var cells = str.toLowerCase().split(lowerKeyword).reduce(function (list, cur, index) {
            return index === 0 ? [cur] : [].concat((0, _toConsumableArray2["default"])(list), [lowerKeyword, cur]);
          }, []);
          var fillCells = [];
          var start = 0;
          cells.forEach(function (cell, index) {
            var end = start + cell.length;
            var originWorld = str.slice(start, end);
            start = end;

            if (index % 2 === 1) {
              originWorld =
              /*#__PURE__*/
              // eslint-disable-next-line react/no-array-index-key
              React.createElement("span", {
                className: "".concat(prefixCls, "-menu-item-keyword"),
                key: "seperator-".concat(index)
              }, originWorld);
            }

            fillCells.push(originWorld);
          });
          return fillCells;
        }

        var defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
          var optionList = []; // We do lower here to save perf

          var lower = inputValue.toLowerCase();
          path.forEach(function (node, index) {
            if (index !== 0) {
              optionList.push(' / ');
            }

            var label = node[fieldNames.label];
            var type = (0, _typeof2["default"])(label);

            if (type === 'string' || type === 'number') {
              label = highlightKeyword(String(label), lower, prefixCls);
            }

            optionList.push(label);
          });
          return optionList;
        };

        var Cascader = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames2;

          var customizePrefixCls = props.prefixCls,
              customizeSize = props.size,
              customDisabled = props.disabled,
              className = props.className,
              multiple = props.multiple,
              _props$bordered = props.bordered,
              bordered = _props$bordered === void 0 ? true : _props$bordered,
              transitionName = props.transitionName,
              _props$choiceTransiti = props.choiceTransitionName,
              choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
              popupClassName = props.popupClassName,
              dropdownClassName = props.dropdownClassName,
              expandIcon = props.expandIcon,
              placement = props.placement,
              showSearch = props.showSearch,
              _props$allowClear = props.allowClear,
              allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
              notFoundContent = props.notFoundContent,
              direction = props.direction,
              getPopupContainer = props.getPopupContainer,
              customStatus = props.status,
              showArrow = props.showArrow,
              rest = __rest(props, ["prefixCls", "size", "disabled", "className", "multiple", "bordered", "transitionName", "choiceTransitionName", "popupClassName", "dropdownClassName", "expandIcon", "placement", "showSearch", "allowClear", "notFoundContent", "direction", "getPopupContainer", "status", "showArrow"]);

          var restProps = (0, _omit["default"])(rest, ['suffixIcon']);

          var _useContext = (0, React.useContext)(_configProvider.ConfigContext),
              getContextPopupContainer = _useContext.getPopupContainer,
              getPrefixCls = _useContext.getPrefixCls,
              renderEmpty = _useContext.renderEmpty,
              rootDirection = _useContext.direction;

          var mergedDirection = direction || rootDirection;
          var isRtl = mergedDirection === 'rtl'; // =================== Form =====================

          var _useContext2 = (0, React.useContext)(_context.FormItemInputContext),
              contextStatus = _useContext2.status,
              hasFeedback = _useContext2.hasFeedback,
              isFormItemInput = _useContext2.isFormItemInput,
              feedbackIcon = _useContext2.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus); // =================== Warning =====================

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!dropdownClassName, 'Cascader', '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.') : void 0;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!multiple || !props.displayRender, 'Cascader', '`displayRender` not work on `multiple`. Please use `tagRender` instead.') : void 0; // =================== No Found ====================

          var mergedNotFoundContent = notFoundContent || (renderEmpty || _defaultRenderEmpty["default"])('Cascader'); // ==================== Prefix =====================


          var rootPrefixCls = getPrefixCls();
          var prefixCls = getPrefixCls('select', customizePrefixCls);
          var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls);

          var _useCompactItemContex = (0, _Compact.useCompactItemContext)(prefixCls, direction),
              compactSize = _useCompactItemContex.compactSize,
              compactItemClassnames = _useCompactItemContex.compactItemClassnames; // =================== Dropdown ====================


          var mergedDropdownClassName = (0, _classnames["default"])(popupClassName || dropdownClassName, "".concat(cascaderPrefixCls, "-dropdown"), (0, _defineProperty2["default"])({}, "".concat(cascaderPrefixCls, "-dropdown-rtl"), mergedDirection === 'rtl')); // ==================== Search =====================

          var mergedShowSearch = React.useMemo(function () {
            if (!showSearch) {
              return showSearch;
            }

            var searchConfig = {
              render: defaultSearchRender
            };

            if ((0, _typeof2["default"])(showSearch) === 'object') {
              searchConfig = (0, _extends2["default"])((0, _extends2["default"])({}, searchConfig), showSearch);
            }

            return searchConfig;
          }, [showSearch]); // ===================== Size ======================

          var size = React.useContext(_SizeContext["default"]);
          var mergedSize = compactSize || customizeSize || size; // ===================== Disabled =====================

          var disabled = React.useContext(_DisabledContext["default"]);
          var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled; // ===================== Icon ======================

          var mergedExpandIcon = expandIcon;

          if (!expandIcon) {
            mergedExpandIcon = isRtl ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null);
          }

          var loadingIcon = /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-menu-item-loading-icon")
          }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
            spin: true
          })); // =================== Multiple ====================

          var checkable = React.useMemo(function () {
            return multiple ? /*#__PURE__*/React.createElement("span", {
              className: "".concat(cascaderPrefixCls, "-checkbox-inner")
            }) : false;
          }, [multiple]); // ===================== Icons =====================

          var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !multiple;

          var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
            hasFeedback: hasFeedback,
            feedbackIcon: feedbackIcon,
            showArrow: mergedShowArrow,
            multiple: multiple,
            prefixCls: prefixCls
          })),
              suffixIcon = _getIcons.suffixIcon,
              removeIcon = _getIcons.removeIcon,
              clearIcon = _getIcons.clearIcon; // ===================== Placement =====================


          var getPlacement = function getPlacement() {
            if (placement !== undefined) {
              return placement;
            }

            return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
          }; // ==================== Render =====================


          return /*#__PURE__*/React.createElement(_rcCascader["default"], (0, _extends2["default"])({
            prefixCls: prefixCls,
            className: (0, _classnames["default"])(!customizePrefixCls && cascaderPrefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), isRtl), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-in-form-item"), isFormItemInput), _classNames2), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, className),
            disabled: mergedDisabled
          }, restProps, {
            direction: mergedDirection,
            placement: getPlacement(),
            notFoundContent: mergedNotFoundContent,
            allowClear: allowClear,
            showSearch: mergedShowSearch,
            expandIcon: mergedExpandIcon,
            inputIcon: suffixIcon,
            removeIcon: removeIcon,
            clearIcon: clearIcon,
            loadingIcon: loadingIcon,
            checkable: checkable,
            dropdownClassName: mergedDropdownClassName,
            dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
            choiceTransitionName: (0, _motion.getTransitionName)(rootPrefixCls, '', choiceTransitionName),
            transitionName: (0, _motion.getTransitionName)(rootPrefixCls, (0, _motion.getTransitionDirection)(placement), transitionName),
            getPopupContainer: getPopupContainer || getContextPopupContainer,
            ref: ref,
            showArrow: hasFeedback || showArrow
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Cascader.displayName = 'Cascader';
        }

        Cascader.SHOW_PARENT = SHOW_PARENT;
        Cascader.SHOW_CHILD = SHOW_CHILD;
        var _default = Cascader;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        '@ant-design/icons/LeftOutlined': _req5,
        '@ant-design/icons/LoadingOutlined': _req6,
        '@ant-design/icons/RightOutlined': _req7,
        'classnames': _req8,
        'rc-cascader': _req9,
        'rc-util/lib/omit': _req10,
        'react': _req11,
        '../config-provider': _req12,
        '../config-provider/defaultRenderEmpty': _req13,
        '../config-provider/DisabledContext': _req14,
        '../config-provider/SizeContext': _req15,
        '../space/Compact': _req16,
        '../form/context': _req17,
        '../select/utils/iconUtil': _req18,
        '../_util/motion': _req19,
        '../_util/statusUtils': _req20,
        '../_util/warning': _req21
      }));
    }
  };
});
//# sourceMappingURL=f2b5e28ad1e415ccf2827ff9c75d85e85589d1ef.js.map