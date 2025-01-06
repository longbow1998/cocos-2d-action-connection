System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/CheckOutlined", "@ant-design/icons/CopyOutlined", "@ant-design/icons/EditOutlined", "classnames", "copy-to-clipboard", "rc-resize-observer", "rc-util/lib/Children/toArray", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/hooks/useMergedState", "rc-util/lib/omit", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _req19, _req20, _req21, _req22, _req23, _req24, _req25, _req26, _req27, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsCheckOutlined) {
      _req5 = _antDesignIconsCheckOutlined.__cjsMetaURL;
    }, function (_antDesignIconsCopyOutlined) {
      _req6 = _antDesignIconsCopyOutlined.__cjsMetaURL;
    }, function (_antDesignIconsEditOutlined) {
      _req7 = _antDesignIconsEditOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_copyToClipboard2) {
      _req9 = _copyToClipboard2.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req10 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req11 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req12 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req13 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req14 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req15 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req16 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req17 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req18 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req19 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req20 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req21 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req22 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req23 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req24 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req25 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req26 = _unresolved_11.__cjsMetaURL;
    }, function (_unresolved_12) {
      _req27 = _unresolved_12.__cjsMetaURL;
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

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _CheckOutlined = _interopRequireDefault(require("@ant-design/icons/CheckOutlined"));

        var _CopyOutlined = _interopRequireDefault(require("@ant-design/icons/CopyOutlined"));

        var _EditOutlined = _interopRequireDefault(require("@ant-design/icons/EditOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _ref3 = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../../config-provider");

        var _LocaleReceiver = require("../../locale-provider/LocaleReceiver");

        var _transButton = _interopRequireDefault(require("../../_util/transButton"));

        var _styleChecker = require("../../_util/styleChecker");

        var _tooltip = _interopRequireDefault(require("../../tooltip"));

        var _Editable = _interopRequireDefault(require("../Editable"));

        var _useMergedConfig7 = _interopRequireDefault(require("../hooks/useMergedConfig"));

        var _useUpdatedEffect = _interopRequireDefault(require("../hooks/useUpdatedEffect"));

        var _Typography = _interopRequireDefault(require("../Typography"));

        var _Ellipsis = _interopRequireDefault(require("./Ellipsis"));

        var _EllipsisTooltip = _interopRequireDefault(require("./EllipsisTooltip"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        function wrapperDecorations(_ref, content) {
          var mark = _ref.mark,
              code = _ref.code,
              underline = _ref.underline,
              del = _ref["delete"],
              strong = _ref.strong,
              keyboard = _ref.keyboard,
              italic = _ref.italic;
          var currentContent = content;

          function wrap(needed, tag) {
            if (!needed) return;
            currentContent = /*#__PURE__*/React.createElement(tag, {}, currentContent);
          }

          wrap(strong, 'strong');
          wrap(underline, 'u');
          wrap(del, 'del');
          wrap(code, 'code');
          wrap(mark, 'mark');
          wrap(keyboard, 'kbd');
          wrap(italic, 'i');
          return currentContent;
        }

        function getNode(dom, defaultNode, needDom) {
          if (dom === true || dom === undefined) {
            return defaultNode;
          }

          return dom || needDom && defaultNode;
        }

        function toList(val) {
          if (val === false) {
            return [false, false];
          }

          return Array.isArray(val) ? val : [val];
        }

        var ELLIPSIS_STR = '...';
        var Base = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _a, _b, _c;

          var customizePrefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              type = props.type,
              disabled = props.disabled,
              children = props.children,
              ellipsis = props.ellipsis,
              editable = props.editable,
              copyable = props.copyable,
              component = props.component,
              title = props.title,
              restProps = __rest(props, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]);

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction;

          var textLocale = (0, _LocaleReceiver.useLocaleReceiver)('Text')[0]; // Force TS get this

          var typographyRef = React.useRef(null);
          var editIconRef = React.useRef(null); // ============================ MISC ============================

          var prefixCls = getPrefixCls('typography', customizePrefixCls);
          var textProps = (0, _omit["default"])(restProps, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']); // ========================== Editable ==========================

          var _useMergedConfig = (0, _useMergedConfig7["default"])(editable),
              _useMergedConfig2 = (0, _slicedToArray2["default"])(_useMergedConfig, 2),
              enableEdit = _useMergedConfig2[0],
              editConfig = _useMergedConfig2[1];

          var _useMergedState = (0, _useMergedState3["default"])(false, {
            value: editConfig.editing
          }),
              _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
              editing = _useMergedState2[0],
              setEditing = _useMergedState2[1];

          var _editConfig$triggerTy = editConfig.triggerType,
              triggerType = _editConfig$triggerTy === void 0 ? ['icon'] : _editConfig$triggerTy;

          var triggerEdit = function triggerEdit(edit) {
            var _a;

            if (edit) {
              (_a = editConfig.onStart) === null || _a === void 0 ? void 0 : _a.call(editConfig);
            }

            setEditing(edit);
          }; // Focus edit icon when back


          (0, _useUpdatedEffect["default"])(function () {
            var _a;

            if (!editing) {
              (_a = editIconRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
          }, [editing]);

          var onEditClick = function onEditClick(e) {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            triggerEdit(true);
          };

          var onEditChange = function onEditChange(value) {
            var _a;

            (_a = editConfig.onChange) === null || _a === void 0 ? void 0 : _a.call(editConfig, value);
            triggerEdit(false);
          };

          var onEditCancel = function onEditCancel() {
            var _a;

            (_a = editConfig.onCancel) === null || _a === void 0 ? void 0 : _a.call(editConfig);
            triggerEdit(false);
          }; // ========================== Copyable ==========================


          var _useMergedConfig3 = (0, _useMergedConfig7["default"])(copyable),
              _useMergedConfig4 = (0, _slicedToArray2["default"])(_useMergedConfig3, 2),
              enableCopy = _useMergedConfig4[0],
              copyConfig = _useMergedConfig4[1];

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              copied = _React$useState2[0],
              setCopied = _React$useState2[1];

          var copyIdRef = React.useRef();
          var copyOptions = {};

          if (copyConfig.format) {
            copyOptions.format = copyConfig.format;
          }

          var cleanCopyId = function cleanCopyId() {
            window.clearTimeout(copyIdRef.current);
          };

          var onCopyClick = function onCopyClick(e) {
            var _a;

            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopPropagation();
            (0, _copyToClipboard["default"])(copyConfig.text || String(children) || '', copyOptions);
            setCopied(true); // Trigger tips update

            cleanCopyId();
            copyIdRef.current = window.setTimeout(function () {
              setCopied(false);
            }, 3000);
            (_a = copyConfig.onCopy) === null || _a === void 0 ? void 0 : _a.call(copyConfig, e);
          };

          React.useEffect(function () {
            return cleanCopyId;
          }, []); // ========================== Ellipsis ==========================

          var _React$useState3 = React.useState(false),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              isLineClampSupport = _React$useState4[0],
              setIsLineClampSupport = _React$useState4[1];

          var _React$useState5 = React.useState(false),
              _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
              isTextOverflowSupport = _React$useState6[0],
              setIsTextOverflowSupport = _React$useState6[1];

          var _React$useState7 = React.useState(false),
              _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
              expanded = _React$useState8[0],
              setExpanded = _React$useState8[1];

          var _React$useState9 = React.useState(false),
              _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
              isJsEllipsis = _React$useState10[0],
              setIsJsEllipsis = _React$useState10[1];

          var _React$useState11 = React.useState(false),
              _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
              isNativeEllipsis = _React$useState12[0],
              setIsNativeEllipsis = _React$useState12[1];

          var _React$useState13 = React.useState(true),
              _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
              isNativeVisible = _React$useState14[0],
              setIsNativeVisible = _React$useState14[1];

          var _useMergedConfig5 = (0, _useMergedConfig7["default"])(ellipsis, {
            expandable: false
          }),
              _useMergedConfig6 = (0, _slicedToArray2["default"])(_useMergedConfig5, 2),
              enableEllipsis = _useMergedConfig6[0],
              ellipsisConfig = _useMergedConfig6[1];

          var mergedEnableEllipsis = enableEllipsis && !expanded; // Shared prop to reduce bundle size

          var _ellipsisConfig$rows = ellipsisConfig.rows,
              rows = _ellipsisConfig$rows === void 0 ? 1 : _ellipsisConfig$rows;
          var needMeasureEllipsis = React.useMemo(function () {
            return (// Disable ellipsis
              !mergedEnableEllipsis || // Provide suffix
              ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
              ellipsisConfig.expandable || enableEdit || enableCopy
            );
          }, [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
          (0, _useLayoutEffect["default"])(function () {
            if (enableEllipsis && !needMeasureEllipsis) {
              setIsLineClampSupport((0, _styleChecker.isStyleSupport)('webkitLineClamp'));
              setIsTextOverflowSupport((0, _styleChecker.isStyleSupport)('textOverflow'));
            }
          }, [needMeasureEllipsis, enableEllipsis]);
          var cssEllipsis = React.useMemo(function () {
            if (needMeasureEllipsis) {
              return false;
            }

            if (rows === 1) {
              return isTextOverflowSupport;
            }

            return isLineClampSupport;
          }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
          var isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
          var cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
          var cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis; // >>>>> Expand

          var onExpandClick = function onExpandClick(e) {
            var _a;

            setExpanded(true);
            (_a = ellipsisConfig.onExpand) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, e);
          };

          var _React$useState15 = React.useState(0),
              _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
              ellipsisWidth = _React$useState16[0],
              setEllipsisWidth = _React$useState16[1];

          var _React$useState17 = React.useState(0),
              _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
              ellipsisFontSize = _React$useState18[0],
              setEllipsisFontSize = _React$useState18[1];

          var onResize = function onResize(_ref2, element) {
            var offsetWidth = _ref2.offsetWidth;

            var _a;

            setEllipsisWidth(offsetWidth);
            setEllipsisFontSize(parseInt((_a = window.getComputedStyle) === null || _a === void 0 ? void 0 : _a.call(window, element).fontSize, 10) || 0);
          }; // >>>>> JS Ellipsis


          var onJsEllipsis = function onJsEllipsis(jsEllipsis) {
            var _a;

            setIsJsEllipsis(jsEllipsis); // Trigger if changed

            if (isJsEllipsis !== jsEllipsis) {
              (_a = ellipsisConfig.onEllipsis) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, jsEllipsis);
            }
          }; // >>>>> Native ellipsis


          React.useEffect(function () {
            var textEle = typographyRef.current;

            if (enableEllipsis && cssEllipsis && textEle) {
              var currentEllipsis = cssLineClamp ? textEle.offsetHeight < textEle.scrollHeight : textEle.offsetWidth < textEle.scrollWidth;

              if (isNativeEllipsis !== currentEllipsis) {
                setIsNativeEllipsis(currentEllipsis);
              }
            }
          }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible]); // https://github.com/ant-design/ant-design/issues/36786
          // Use IntersectionObserver to check if element is invisible

          React.useEffect(function () {
            var textEle = typographyRef.current;

            if (typeof IntersectionObserver === 'undefined' || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
              return;
            }
            /* eslint-disable-next-line compat/compat */


            var observer = new IntersectionObserver(function () {
              setIsNativeVisible(!!textEle.offsetParent);
            });
            observer.observe(textEle);
            return function () {
              observer.disconnect();
            };
          }, [cssEllipsis, mergedEnableEllipsis]); // ========================== Tooltip ===========================

          var tooltipProps = {};

          if (ellipsisConfig.tooltip === true) {
            tooltipProps = {
              title: (_a = editConfig.text) !== null && _a !== void 0 ? _a : children
            };
          } else if ( /*#__PURE__*/React.isValidElement(ellipsisConfig.tooltip)) {
            tooltipProps = {
              title: ellipsisConfig.tooltip
            };
          } else if ((0, _typeof2["default"])(ellipsisConfig.tooltip) === 'object') {
            tooltipProps = (0, _extends2["default"])({
              title: (_b = editConfig.text) !== null && _b !== void 0 ? _b : children
            }, ellipsisConfig.tooltip);
          } else {
            tooltipProps = {
              title: ellipsisConfig.tooltip
            };
          }

          var topAriaLabel = React.useMemo(function () {
            var isValid = function isValid(val) {
              return ['string', 'number'].includes((0, _typeof2["default"])(val));
            };

            if (!enableEllipsis || cssEllipsis) {
              return undefined;
            }

            if (isValid(editConfig.text)) {
              return editConfig.text;
            }

            if (isValid(children)) {
              return children;
            }

            if (isValid(title)) {
              return title;
            }

            if (isValid(tooltipProps.title)) {
              return tooltipProps.title;
            }

            return undefined;
          }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]); // =========================== Render ===========================
          // >>>>>>>>>>> Editing input

          if (editing) {
            return /*#__PURE__*/React.createElement(_Editable["default"], {
              value: (_c = editConfig.text) !== null && _c !== void 0 ? _c : typeof children === 'string' ? children : '',
              onSave: onEditChange,
              onCancel: onEditCancel,
              onEnd: editConfig.onEnd,
              prefixCls: prefixCls,
              className: className,
              style: style,
              direction: direction,
              component: component,
              maxLength: editConfig.maxLength,
              autoSize: editConfig.autoSize,
              enterIcon: editConfig.enterIcon
            });
          } // >>>>>>>>>>> Typography
          // Expand


          var renderExpand = function renderExpand() {
            var expandable = ellipsisConfig.expandable,
                symbol = ellipsisConfig.symbol;
            if (!expandable) return null;
            var expandContent;

            if (symbol) {
              expandContent = symbol;
            } else {
              expandContent = textLocale.expand;
            }

            return /*#__PURE__*/React.createElement("a", {
              key: "expand",
              className: "".concat(prefixCls, "-expand"),
              onClick: onExpandClick,
              "aria-label": textLocale.expand
            }, expandContent);
          }; // Edit


          var renderEdit = function renderEdit() {
            if (!enableEdit) return;
            var icon = editConfig.icon,
                tooltip = editConfig.tooltip;
            var editTitle = (0, _toArray["default"])(tooltip)[0] || textLocale.edit;
            var ariaLabel = typeof editTitle === 'string' ? editTitle : '';
            return triggerType.includes('icon') ? /*#__PURE__*/React.createElement(_tooltip["default"], {
              key: "edit",
              title: tooltip === false ? '' : editTitle
            }, /*#__PURE__*/React.createElement(_transButton["default"], {
              ref: editIconRef,
              className: "".concat(prefixCls, "-edit"),
              onClick: onEditClick,
              "aria-label": ariaLabel
            }, icon || /*#__PURE__*/React.createElement(_EditOutlined["default"], {
              role: "button"
            }))) : null;
          }; // Copy


          var renderCopy = function renderCopy() {
            if (!enableCopy) return;
            var tooltips = copyConfig.tooltips,
                icon = copyConfig.icon;
            var tooltipNodes = toList(tooltips);
            var iconNodes = toList(icon);
            var copyTitle = copied ? getNode(tooltipNodes[1], textLocale.copied) : getNode(tooltipNodes[0], textLocale.copy);
            var systemStr = copied ? textLocale.copied : textLocale.copy;
            var ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
            return /*#__PURE__*/React.createElement(_tooltip["default"], {
              key: "copy",
              title: copyTitle
            }, /*#__PURE__*/React.createElement(_transButton["default"], {
              className: (0, _classnames["default"])("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
              onClick: onCopyClick,
              "aria-label": ariaLabel
            }, copied ? getNode(iconNodes[1], /*#__PURE__*/React.createElement(_CheckOutlined["default"], null), true) : getNode(iconNodes[0], /*#__PURE__*/React.createElement(_CopyOutlined["default"], null), true)));
          };

          var renderOperations = function renderOperations(renderExpanded) {
            return [renderExpanded && renderExpand(), renderEdit(), renderCopy()];
          };

          var renderEllipsis = function renderEllipsis(needEllipsis) {
            return [needEllipsis && /*#__PURE__*/React.createElement("span", {
              "aria-hidden": true,
              key: "ellipsis"
            }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(needEllipsis)];
          };

          return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
            onResize: onResize,
            disabled: !mergedEnableEllipsis || cssEllipsis
          }, function (resizeRef) {
            var _classNames;

            return /*#__PURE__*/React.createElement(_EllipsisTooltip["default"], {
              tooltipProps: tooltipProps,
              enabledEllipsis: mergedEnableEllipsis,
              isEllipsis: isMergedEllipsis
            }, /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
              className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis"), enableEllipsis), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-single-line"), mergedEnableEllipsis && rows === 1), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames), className),
              prefixCls: customizePrefixCls,
              style: (0, _extends2["default"])((0, _extends2["default"])({}, style), {
                WebkitLineClamp: cssLineClamp ? rows : undefined
              }),
              component: component,
              ref: (0, _ref3.composeRef)(resizeRef, typographyRef, ref),
              direction: direction,
              onClick: triggerType.includes('text') ? onEditClick : undefined,
              "aria-label": topAriaLabel === null || topAriaLabel === void 0 ? void 0 : topAriaLabel.toString(),
              title: title
            }, textProps), /*#__PURE__*/React.createElement(_Ellipsis["default"], {
              enabledMeasure: mergedEnableEllipsis && !cssEllipsis,
              text: children,
              rows: rows,
              width: ellipsisWidth,
              fontSize: ellipsisFontSize,
              onEllipsis: onJsEllipsis
            }, function (node, needEllipsis) {
              var renderNode = node;

              if (node.length && needEllipsis && topAriaLabel) {
                renderNode = /*#__PURE__*/React.createElement("span", {
                  key: "show-content",
                  "aria-hidden": true
                }, renderNode);
              }

              var wrappedContext = wrapperDecorations(props, /*#__PURE__*/React.createElement(React.Fragment, null, renderNode, renderEllipsis(needEllipsis)));
              return wrappedContext;
            })));
          });
        });
        var _default = Base;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@ant-design/icons/CheckOutlined': _req5,
        '@ant-design/icons/CopyOutlined': _req6,
        '@ant-design/icons/EditOutlined': _req7,
        'classnames': _req8,
        'copy-to-clipboard': _req9,
        'rc-resize-observer': _req10,
        'rc-util/lib/Children/toArray': _req11,
        'rc-util/lib/hooks/useLayoutEffect': _req12,
        'rc-util/lib/hooks/useMergedState': _req13,
        'rc-util/lib/omit': _req14,
        'rc-util/lib/ref': _req15,
        'react': _req16,
        '../../config-provider': _req17,
        '../../locale-provider/LocaleReceiver': _req18,
        '../../_util/transButton': _req19,
        '../../_util/styleChecker': _req20,
        '../../tooltip': _req21,
        '../Editable': _req22,
        '../hooks/useMergedConfig': _req23,
        '../hooks/useUpdatedEffect': _req24,
        '../Typography': _req25,
        './Ellipsis': _req26,
        './EllipsisTooltip': _req27
      }));
    }
  };
});
//# sourceMappingURL=567598cc90be13023996ad92bc3e58a92f96c9ab.js.map