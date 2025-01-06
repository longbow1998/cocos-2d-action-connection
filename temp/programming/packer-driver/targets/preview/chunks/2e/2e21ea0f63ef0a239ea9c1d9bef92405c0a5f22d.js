System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "rc-util/lib/ref", "rc-util/lib/warning"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req4 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req5 = _rcUtilLibWarning.__cjsMetaURL;
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

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _ref2 = require("rc-util/lib/ref");

        var _warning = require("rc-util/lib/warning");

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

        var Input = function Input(_ref, ref) {
          var _inputNode2, _inputNode2$props;

          var prefixCls = _ref.prefixCls,
              id = _ref.id,
              inputElement = _ref.inputElement,
              disabled = _ref.disabled,
              tabIndex = _ref.tabIndex,
              autoFocus = _ref.autoFocus,
              autoComplete = _ref.autoComplete,
              editable = _ref.editable,
              activeDescendantId = _ref.activeDescendantId,
              value = _ref.value,
              maxLength = _ref.maxLength,
              _onKeyDown = _ref.onKeyDown,
              _onMouseDown = _ref.onMouseDown,
              _onChange = _ref.onChange,
              onPaste = _ref.onPaste,
              _onCompositionStart = _ref.onCompositionStart,
              _onCompositionEnd = _ref.onCompositionEnd,
              open = _ref.open,
              attrs = _ref.attrs;
          var inputNode = inputElement || /*#__PURE__*/React.createElement("input", null);
          var _inputNode = inputNode,
              originRef = _inputNode.ref,
              originProps = _inputNode.props;
          var onOriginKeyDown = originProps.onKeyDown,
              onOriginChange = originProps.onChange,
              onOriginMouseDown = originProps.onMouseDown,
              onOriginCompositionStart = originProps.onCompositionStart,
              onOriginCompositionEnd = originProps.onCompositionEnd,
              style = originProps.style;
          (0, _warning.warning)(!('maxLength' in inputNode.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled.");
          inputNode = /*#__PURE__*/React.cloneElement(inputNode, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
            type: 'search'
          }, originProps), {}, {
            // Override over origin props
            id: id,
            ref: (0, _ref2.composeRef)(ref, originRef),
            disabled: disabled,
            tabIndex: tabIndex,
            autoComplete: autoComplete || 'off',
            autoFocus: autoFocus,
            className: (0, _classnames.default)("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
            role: 'combobox',
            'aria-expanded': open,
            'aria-haspopup': 'listbox',
            'aria-owns': "".concat(id, "_list"),
            'aria-autocomplete': 'list',
            'aria-controls': "".concat(id, "_list"),
            'aria-activedescendant': activeDescendantId
          }, attrs), {}, {
            value: editable ? value : '',
            maxLength: maxLength,
            readOnly: !editable,
            unselectable: !editable ? 'on' : null,
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), {}, {
              opacity: editable ? null : 0
            }),
            onKeyDown: function onKeyDown(event) {
              _onKeyDown(event);

              if (onOriginKeyDown) {
                onOriginKeyDown(event);
              }
            },
            onMouseDown: function onMouseDown(event) {
              _onMouseDown(event);

              if (onOriginMouseDown) {
                onOriginMouseDown(event);
              }
            },
            onChange: function onChange(event) {
              _onChange(event);

              if (onOriginChange) {
                onOriginChange(event);
              }
            },
            onCompositionStart: function onCompositionStart(event) {
              _onCompositionStart(event);

              if (onOriginCompositionStart) {
                onOriginCompositionStart(event);
              }
            },
            onCompositionEnd: function onCompositionEnd(event) {
              _onCompositionEnd(event);

              if (onOriginCompositionEnd) {
                onOriginCompositionEnd(event);
              }
            },
            onPaste: onPaste
          }));
          return inputNode;
        };

        var RefInput = /*#__PURE__*/React.forwardRef(Input);
        RefInput.displayName = 'Input';
        var _default = RefInput;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'react': _req2,
        'classnames': _req3,
        'rc-util/lib/ref': _req4,
        'rc-util/lib/warning': _req5
      }));
    }
  };
});
//# sourceMappingURL=2e21ea0f63ef0a239ea9c1d9bef92405c0a5f22d.js.map