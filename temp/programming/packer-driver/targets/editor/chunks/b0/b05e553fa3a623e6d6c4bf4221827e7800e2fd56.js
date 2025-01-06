System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "rc-util/lib/pickAttrs", "rc-overflow", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibPickAttrs) {
      _req5 = _rcUtilLibPickAttrs.__cjsMetaURL;
    }, function (_rcOverflow2) {
      _req6 = _rcOverflow2.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));

        var _rcOverflow = _interopRequireDefault(require("rc-overflow"));

        var _TransBtn = _interopRequireDefault(require("../TransBtn"));

        var _Input = _interopRequireDefault(require("./Input"));

        var _useLayoutEffect = _interopRequireDefault(require("../hooks/useLayoutEffect"));

        var _commonUtil = require("../utils/commonUtil");

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
        }

        function itemKey(value) {
          var _value$key;

          return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
        }

        var onPreventMouseDown = function onPreventMouseDown(event) {
          event.preventDefault();
          event.stopPropagation();
        };

        var SelectSelector = function SelectSelector(props) {
          var id = props.id,
              prefixCls = props.prefixCls,
              values = props.values,
              open = props.open,
              searchValue = props.searchValue,
              autoClearSearchValue = props.autoClearSearchValue,
              inputRef = props.inputRef,
              placeholder = props.placeholder,
              disabled = props.disabled,
              mode = props.mode,
              showSearch = props.showSearch,
              autoFocus = props.autoFocus,
              autoComplete = props.autoComplete,
              activeDescendantId = props.activeDescendantId,
              tabIndex = props.tabIndex,
              removeIcon = props.removeIcon,
              maxTagCount = props.maxTagCount,
              maxTagTextLength = props.maxTagTextLength,
              _props$maxTagPlacehol = props.maxTagPlaceholder,
              maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
            return "+ ".concat(omittedValues.length, " ...");
          } : _props$maxTagPlacehol,
              tagRender = props.tagRender,
              onToggleOpen = props.onToggleOpen,
              onRemove = props.onRemove,
              onInputChange = props.onInputChange,
              onInputPaste = props.onInputPaste,
              onInputKeyDown = props.onInputKeyDown,
              onInputMouseDown = props.onInputMouseDown,
              onInputCompositionStart = props.onInputCompositionStart,
              onInputCompositionEnd = props.onInputCompositionEnd;
          var measureRef = React.useRef(null);

          var _useState = (0, React.useState)(0),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              inputWidth = _useState2[0],
              setInputWidth = _useState2[1];

          var _useState3 = (0, React.useState)(false),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              focused = _useState4[0],
              setFocused = _useState4[1];

          var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

          var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === 'tags' ? searchValue : '';
          var inputEditable = mode === 'tags' || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused); // We measure width and set to the input immediately

          (0, _useLayoutEffect.default)(function () {
            setInputWidth(measureRef.current.scrollWidth);
          }, [inputValue]); // ===================== Render ======================
          // >>> Render Selector Node. Includes Item & Rest

          function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
            return /*#__PURE__*/React.createElement("span", {
              className: (0, _classnames.default)("".concat(selectionPrefixCls, "-item"), (0, _defineProperty2.default)({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
              title: (0, _commonUtil.getTitle)(item)
            }, /*#__PURE__*/React.createElement("span", {
              className: "".concat(selectionPrefixCls, "-item-content")
            }, content), closable && /*#__PURE__*/React.createElement(_TransBtn.default, {
              className: "".concat(selectionPrefixCls, "-item-remove"),
              onMouseDown: onPreventMouseDown,
              onClick: onClose,
              customizeIcon: removeIcon
            }, "\xD7"));
          }

          function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
            var onMouseDown = function onMouseDown(e) {
              onPreventMouseDown(e);
              onToggleOpen(!open);
            };

            return /*#__PURE__*/React.createElement("span", {
              onMouseDown: onMouseDown
            }, tagRender({
              label: content,
              value: value,
              disabled: itemDisabled,
              closable: closable,
              onClose: onClose
            }));
          }

          function renderItem(valueItem) {
            var itemDisabled = valueItem.disabled,
                label = valueItem.label,
                value = valueItem.value;
            var closable = !disabled && !itemDisabled;
            var displayLabel = label;

            if (typeof maxTagTextLength === 'number') {
              if (typeof label === 'string' || typeof label === 'number') {
                var strLabel = String(displayLabel);

                if (strLabel.length > maxTagTextLength) {
                  displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
                }
              }
            }

            var onClose = function onClose(event) {
              if (event) event.stopPropagation();
              onRemove(valueItem);
            };

            return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
          }

          function renderRest(omittedValues) {
            var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
            return defaultRenderSelector({
              title: content
            }, content, false);
          } // >>> Input Node


          var inputNode = /*#__PURE__*/React.createElement("div", {
            className: "".concat(selectionPrefixCls, "-search"),
            style: {
              width: inputWidth
            },
            onFocus: function onFocus() {
              setFocused(true);
            },
            onBlur: function onBlur() {
              setFocused(false);
            }
          }, /*#__PURE__*/React.createElement(_Input.default, {
            ref: inputRef,
            open: open,
            prefixCls: prefixCls,
            id: id,
            inputElement: null,
            disabled: disabled,
            autoFocus: autoFocus,
            autoComplete: autoComplete,
            editable: inputEditable,
            activeDescendantId: activeDescendantId,
            value: inputValue,
            onKeyDown: onInputKeyDown,
            onMouseDown: onInputMouseDown,
            onChange: onInputChange,
            onPaste: onInputPaste,
            onCompositionStart: onInputCompositionStart,
            onCompositionEnd: onInputCompositionEnd,
            tabIndex: tabIndex,
            attrs: (0, _pickAttrs.default)(props, true)
          }), /*#__PURE__*/React.createElement("span", {
            ref: measureRef,
            className: "".concat(selectionPrefixCls, "-search-mirror"),
            "aria-hidden": true
          }, inputValue, "\xA0")); // >>> Selections

          var selectionNode = /*#__PURE__*/React.createElement(_rcOverflow.default, {
            prefixCls: "".concat(selectionPrefixCls, "-overflow"),
            data: values,
            renderItem: renderItem,
            renderRest: renderRest,
            suffix: inputNode,
            itemKey: itemKey,
            maxCount: maxTagCount
          });
          return /*#__PURE__*/React.createElement(React.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/React.createElement("span", {
            className: "".concat(selectionPrefixCls, "-placeholder")
          }, placeholder));
        };

        var _default = SelectSelector;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'classnames': _req4,
        'rc-util/lib/pickAttrs': _req5,
        'rc-overflow': _req6,
        '../TransBtn': _req7,
        './Input': _req8,
        '../hooks/useLayoutEffect': _req9,
        '../utils/commonUtil': _req10
      }));
    }
  };
});
//# sourceMappingURL=b05e553fa3a623e6d6c4bf4221827e7800e2fd56.js.map