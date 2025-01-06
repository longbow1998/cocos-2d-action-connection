System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@ant-design/icons/EnterOutlined", "classnames", "rc-util/lib/KeyCode", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_antDesignIconsEnterOutlined) {
      _req3 = _antDesignIconsEnterOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req5 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _EnterOutlined = _interopRequireDefault(require("@ant-design/icons/EnterOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var _TextArea = _interopRequireDefault(require("../input/TextArea"));

        var _reactNode = require("../_util/reactNode");

        var Editable = function Editable(_ref) {
          var prefixCls = _ref.prefixCls,
              ariaLabel = _ref['aria-label'],
              className = _ref.className,
              style = _ref.style,
              direction = _ref.direction,
              maxLength = _ref.maxLength,
              _ref$autoSize = _ref.autoSize,
              autoSize = _ref$autoSize === void 0 ? true : _ref$autoSize,
              value = _ref.value,
              onSave = _ref.onSave,
              onCancel = _ref.onCancel,
              onEnd = _ref.onEnd,
              component = _ref.component,
              _ref$enterIcon = _ref.enterIcon,
              enterIcon = _ref$enterIcon === void 0 ? /*#__PURE__*/React.createElement(_EnterOutlined["default"], null) : _ref$enterIcon;
          var ref = React.useRef(null);
          var inComposition = React.useRef(false);
          var lastKeyCode = React.useRef();

          var _React$useState = React.useState(value),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              current = _React$useState2[0],
              setCurrent = _React$useState2[1];

          React.useEffect(function () {
            setCurrent(value);
          }, [value]);
          React.useEffect(function () {
            if (ref.current && ref.current.resizableTextArea) {
              var textArea = ref.current.resizableTextArea.textArea;
              textArea.focus();
              var length = textArea.value.length;
              textArea.setSelectionRange(length, length);
            }
          }, []);

          var onChange = function onChange(_ref2) {
            var target = _ref2.target;
            setCurrent(target.value.replace(/[\n\r]/g, ''));
          };

          var onCompositionStart = function onCompositionStart() {
            inComposition.current = true;
          };

          var onCompositionEnd = function onCompositionEnd() {
            inComposition.current = false;
          };

          var onKeyDown = function onKeyDown(_ref3) {
            var keyCode = _ref3.keyCode; // We don't record keyCode when IME is using

            if (inComposition.current) return;
            lastKeyCode.current = keyCode;
          };

          var confirmChange = function confirmChange() {
            onSave(current.trim());
          };

          var onKeyUp = function onKeyUp(_ref4) {
            var keyCode = _ref4.keyCode,
                ctrlKey = _ref4.ctrlKey,
                altKey = _ref4.altKey,
                metaKey = _ref4.metaKey,
                shiftKey = _ref4.shiftKey; // Check if it's a real key

            if (lastKeyCode.current === keyCode && !inComposition.current && !ctrlKey && !altKey && !metaKey && !shiftKey) {
              if (keyCode === _KeyCode["default"].ENTER) {
                confirmChange();
                onEnd === null || onEnd === void 0 ? void 0 : onEnd();
              } else if (keyCode === _KeyCode["default"].ESC) {
                onCancel();
              }
            }
          };

          var onBlur = function onBlur() {
            confirmChange();
          };

          var textClassName = component ? "".concat(prefixCls, "-").concat(component) : '';
          var textAreaClassName = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-edit-content"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, textClassName);
          return /*#__PURE__*/React.createElement("div", {
            className: textAreaClassName,
            style: style
          }, /*#__PURE__*/React.createElement(_TextArea["default"], {
            ref: ref,
            maxLength: maxLength,
            value: current,
            onChange: onChange,
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            onCompositionStart: onCompositionStart,
            onCompositionEnd: onCompositionEnd,
            onBlur: onBlur,
            "aria-label": ariaLabel,
            rows: 1,
            autoSize: autoSize
          }), enterIcon !== null ? (0, _reactNode.cloneElement)(enterIcon, {
            className: "".concat(prefixCls, "-edit-content-confirm")
          }) : null);
        };

        var _default = Editable;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@ant-design/icons/EnterOutlined': _req3,
        'classnames': _req4,
        'rc-util/lib/KeyCode': _req5,
        'react': _req6,
        '../input/TextArea': _req7,
        '../_util/reactNode': _req8
      }));
    }
  };
});
//# sourceMappingURL=c63d20a1d092440ba57d1ea20a2b8cada44eae4e.js.map