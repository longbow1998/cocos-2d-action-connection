System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/KeyCode", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req4 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req8 = _unresolved_5.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _MultipleSelector = _interopRequireDefault(require("./MultipleSelector"));

        var _SingleSelector = _interopRequireDefault(require("./SingleSelector"));

        var _useLock3 = _interopRequireDefault(require("../hooks/useLock"));

        var _keyUtil = require("../utils/keyUtil");

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
        /**
         * Cursor rule:
         * 1. Only `showSearch` enabled
         * 2. Only `open` is `true`
         * 3. When typing, set `open` to `true` which hit rule of 2
         *
         * Accessibility:
         * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
         */


        var Selector = function Selector(props, ref) {
          var inputRef = (0, React.useRef)(null);
          var compositionStatusRef = (0, React.useRef)(false);
          var prefixCls = props.prefixCls,
              open = props.open,
              mode = props.mode,
              showSearch = props.showSearch,
              tokenWithEnter = props.tokenWithEnter,
              autoClearSearchValue = props.autoClearSearchValue,
              onSearch = props.onSearch,
              onSearchSubmit = props.onSearchSubmit,
              onToggleOpen = props.onToggleOpen,
              onInputKeyDown = props.onInputKeyDown,
              domRef = props.domRef; // ======================= Ref =======================

          React.useImperativeHandle(ref, function () {
            return {
              focus: function focus() {
                inputRef.current.focus();
              },
              blur: function blur() {
                inputRef.current.blur();
              }
            };
          }); // ====================== Input ======================

          var _useLock = (0, _useLock3.default)(0),
              _useLock2 = (0, _slicedToArray2.default)(_useLock, 2),
              getInputMouseDown = _useLock2[0],
              setInputMouseDown = _useLock2[1];

          var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
            var which = event.which;

            if (which === _KeyCode.default.UP || which === _KeyCode.default.DOWN) {
              event.preventDefault();
            }

            if (onInputKeyDown) {
              onInputKeyDown(event);
            }

            if (which === _KeyCode.default.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
              // When menu isn't open, OptionList won't trigger a value change
              // So when enter is pressed, the tag's input value should be emitted here to let selector know
              onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
            }

            if ((0, _keyUtil.isValidateOpenKey)(which)) {
              onToggleOpen(true);
            }
          };
          /**
           * We can not use `findDOMNode` sine it will get warning,
           * have to use timer to check if is input element.
           */


          var onInternalInputMouseDown = function onInternalInputMouseDown() {
            setInputMouseDown(true);
          }; // When paste come, ignore next onChange


          var pastedTextRef = (0, React.useRef)(null);

          var triggerOnSearch = function triggerOnSearch(value) {
            if (onSearch(value, true, compositionStatusRef.current) !== false) {
              onToggleOpen(true);
            }
          };

          var onInputCompositionStart = function onInputCompositionStart() {
            compositionStatusRef.current = true;
          };

          var onInputCompositionEnd = function onInputCompositionEnd(e) {
            compositionStatusRef.current = false; // Trigger search again to support `tokenSeparators` with typewriting

            if (mode !== 'combobox') {
              triggerOnSearch(e.target.value);
            }
          };

          var onInputChange = function onInputChange(event) {
            var value = event.target.value; // Pasted text should replace back to origin content

            if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
              // CRLF will be treated as a single space for input element
              var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
              value = value.replace(replacedText, pastedTextRef.current);
            }

            pastedTextRef.current = null;
            triggerOnSearch(value);
          };

          var onInputPaste = function onInputPaste(e) {
            var clipboardData = e.clipboardData;
            var value = clipboardData.getData('text');
            pastedTextRef.current = value;
          };

          var onClick = function onClick(_ref) {
            var target = _ref.target;

            if (target !== inputRef.current) {
              // Should focus input if click the selector
              var isIE = document.body.style.msTouchAction !== undefined;

              if (isIE) {
                setTimeout(function () {
                  inputRef.current.focus();
                });
              } else {
                inputRef.current.focus();
              }
            }
          };

          var onMouseDown = function onMouseDown(event) {
            var inputMouseDown = getInputMouseDown(); // when mode is combobox, don't prevent default behavior
            // https://github.com/ant-design/ant-design/issues/37320

            if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
              event.preventDefault();
            }

            if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
              if (open && autoClearSearchValue !== false) {
                onSearch('', true, false);
              }

              onToggleOpen();
            }
          }; // ================= Inner Selector ==================


          var sharedProps = {
            inputRef: inputRef,
            onInputKeyDown: onInternalInputKeyDown,
            onInputMouseDown: onInternalInputMouseDown,
            onInputChange: onInputChange,
            onInputPaste: onInputPaste,
            onInputCompositionStart: onInputCompositionStart,
            onInputCompositionEnd: onInputCompositionEnd
          };
          var selectNode = mode === 'multiple' || mode === 'tags' ? /*#__PURE__*/React.createElement(_MultipleSelector.default, (0, _extends2.default)({}, props, sharedProps)) : /*#__PURE__*/React.createElement(_SingleSelector.default, (0, _extends2.default)({}, props, sharedProps));
          return /*#__PURE__*/React.createElement("div", {
            ref: domRef,
            className: "".concat(prefixCls, "-selector"),
            onClick: onClick,
            onMouseDown: onMouseDown
          }, selectNode);
        };

        var ForwardSelector = /*#__PURE__*/React.forwardRef(Selector);
        ForwardSelector.displayName = 'Selector';
        var _default = ForwardSelector;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        'rc-util/lib/KeyCode': _req4,
        './MultipleSelector': _req5,
        './SingleSelector': _req6,
        '../hooks/useLock': _req7,
        '../utils/keyUtil': _req8
      }));
    }
  };
});
//# sourceMappingURL=80a11c8343599511df12c26efc2eca2f8ca53c18.js.map