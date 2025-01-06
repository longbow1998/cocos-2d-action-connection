System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/pickAttrs", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_rcUtilLibPickAttrs) {
      _req3 = _rcUtilLibPickAttrs.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));

        var _Input = _interopRequireDefault(require("./Input"));

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

        var SingleSelector = function SingleSelector(props) {
          var inputElement = props.inputElement,
              prefixCls = props.prefixCls,
              id = props.id,
              inputRef = props.inputRef,
              disabled = props.disabled,
              autoFocus = props.autoFocus,
              autoComplete = props.autoComplete,
              activeDescendantId = props.activeDescendantId,
              mode = props.mode,
              open = props.open,
              values = props.values,
              placeholder = props.placeholder,
              tabIndex = props.tabIndex,
              showSearch = props.showSearch,
              searchValue = props.searchValue,
              activeValue = props.activeValue,
              maxLength = props.maxLength,
              onInputKeyDown = props.onInputKeyDown,
              onInputMouseDown = props.onInputMouseDown,
              onInputChange = props.onInputChange,
              onInputPaste = props.onInputPaste,
              onInputCompositionStart = props.onInputCompositionStart,
              onInputCompositionEnd = props.onInputCompositionEnd;

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              inputChanged = _React$useState2[0],
              setInputChanged = _React$useState2[1];

          var combobox = mode === 'combobox';
          var inputEditable = combobox || showSearch;
          var item = values[0];
          var inputValue = searchValue || '';

          if (combobox && activeValue && !inputChanged) {
            inputValue = activeValue;
          }

          React.useEffect(function () {
            if (combobox) {
              setInputChanged(false);
            }
          }, [combobox, activeValue]); // Not show text when closed expect combobox mode

          var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue; // Get title

          var title = (0, _commonUtil.getTitle)(item);

          var renderPlaceholder = function renderPlaceholder() {
            if (item) {
              return null;
            }

            var hiddenStyle = hasTextInput ? {
              visibility: 'hidden'
            } : undefined;
            return /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-selection-placeholder"),
              style: hiddenStyle
            }, placeholder);
          };

          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-selection-search")
          }, /*#__PURE__*/React.createElement(_Input.default, {
            ref: inputRef,
            prefixCls: prefixCls,
            id: id,
            open: open,
            inputElement: inputElement,
            disabled: disabled,
            autoFocus: autoFocus,
            autoComplete: autoComplete,
            editable: inputEditable,
            activeDescendantId: activeDescendantId,
            value: inputValue,
            onKeyDown: onInputKeyDown,
            onMouseDown: onInputMouseDown,
            onChange: function onChange(e) {
              setInputChanged(true);
              onInputChange(e);
            },
            onPaste: onInputPaste,
            onCompositionStart: onInputCompositionStart,
            onCompositionEnd: onInputCompositionEnd,
            tabIndex: tabIndex,
            attrs: (0, _pickAttrs.default)(props, true),
            maxLength: combobox ? maxLength : undefined
          })), !combobox && item && !hasTextInput && /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-selection-item"),
            title: title
          }, item.label), renderPlaceholder());
        };

        var _default = SingleSelector;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        'rc-util/lib/pickAttrs': _req3,
        './Input': _req4,
        '../utils/commonUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=ef548f6e49d478e2b686497f3016c82f6dfc58d9.js.map