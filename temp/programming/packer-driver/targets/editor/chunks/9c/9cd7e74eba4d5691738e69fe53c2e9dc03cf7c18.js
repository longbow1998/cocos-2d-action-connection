System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-resize-observer", "rc-util/lib/hooks/useLayoutEffect", "rc-util/lib/raf", "rc-util/lib/hooks/useMergedState", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req6 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req8 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req9 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_rcUtilLibRaf) {
      _req10 = _rcUtilLibRaf.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req11 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_classnames2) {
      _req12 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req13 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _raf = _interopRequireDefault(require("rc-util/lib/raf"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _calculateNodeHeight = _interopRequireDefault(require("./calculateNodeHeight"));

        var _excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

        var RESIZE_START = 0;
        var RESIZE_MEASURING = 1;
        var RESIZE_STABLE = 2;
        var ResizableTextArea = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-textarea' : _props$prefixCls,
              onPressEnter = props.onPressEnter,
              defaultValue = props.defaultValue,
              value = props.value,
              autoSize = props.autoSize,
              onResize = props.onResize,
              className = props.className,
              style = props.style,
              disabled = props.disabled,
              onChange = props.onChange,
              onInternalAutoSize = props.onInternalAutoSize,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded); // =============================== Value ================================

          var _useMergedState = (0, _useMergedState3.default)(defaultValue, {
            value: value,
            postState: function postState(val) {
              return val !== null && val !== void 0 ? val : '';
            }
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              mergedValue = _useMergedState2[0],
              setMergedValue = _useMergedState2[1];

          var onInternalChange = function onInternalChange(event) {
            setMergedValue(event.target.value);
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
          }; // ================================ Ref =================================


          var textareaRef = React.useRef();
          React.useImperativeHandle(ref, function () {
            return {
              textArea: textareaRef.current
            };
          }); // ============================== AutoSize ==============================

          var _React$useMemo = React.useMemo(function () {
            if (autoSize && (0, _typeof2.default)(autoSize) === 'object') {
              return [autoSize.minRows, autoSize.maxRows];
            }

            return [];
          }, [autoSize]),
              _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
              minRows = _React$useMemo2[0],
              maxRows = _React$useMemo2[1];

          var needAutoSize = !!autoSize; // =============================== Scroll ===============================
          // https://github.com/ant-design/ant-design/issues/21870

          var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
            try {
              // FF has bug with jump of scroll to top. We force back here.
              if (document.activeElement === textareaRef.current) {
                var _textareaRef$current = textareaRef.current,
                    selectionStart = _textareaRef$current.selectionStart,
                    selectionEnd = _textareaRef$current.selectionEnd,
                    scrollTop = _textareaRef$current.scrollTop; // Fix Safari bug which not rollback when break line
                // This makes Chinese IME can't input. Do not fix this
                // const { value: tmpValue } = textareaRef.current;
                // textareaRef.current.value = '';
                // textareaRef.current.value = tmpValue;

                textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
                textareaRef.current.scrollTop = scrollTop;
              }
            } catch (e) {// Fix error in Chrome:
              // Failed to read the 'selectionStart' property from 'HTMLInputElement'
              // http://stackoverflow.com/q/21177489/3040605
            }
          }; // =============================== Resize ===============================


          var _React$useState = React.useState(RESIZE_STABLE),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              resizeState = _React$useState2[0],
              setResizeState = _React$useState2[1];

          var _React$useState3 = React.useState(),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              autoSizeStyle = _React$useState4[0],
              setAutoSizeStyle = _React$useState4[1];

          var startResize = function startResize() {
            setResizeState(RESIZE_START);

            if (process.env.NODE_ENV === 'test') {
              onInternalAutoSize === null || onInternalAutoSize === void 0 ? void 0 : onInternalAutoSize();
            }
          }; // Change to trigger resize measure


          (0, _useLayoutEffect.default)(function () {
            if (needAutoSize) {
              startResize();
            }
          }, [value, minRows, maxRows, needAutoSize]);
          (0, _useLayoutEffect.default)(function () {
            if (resizeState === RESIZE_START) {
              setResizeState(RESIZE_MEASURING);
            } else if (resizeState === RESIZE_MEASURING) {
              var textareaStyles = (0, _calculateNodeHeight.default)(textareaRef.current, false, minRows, maxRows); // Safari has bug that text will keep break line on text cut when it's prev is break line.
              // ZombieJ: This not often happen. So we just skip it.
              // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
              // const { value: tmpValue } = textareaRef.current;
              // textareaRef.current.value = '';
              // textareaRef.current.value = tmpValue;
              // if (document.activeElement === textareaRef.current) {
              //   textareaRef.current.scrollTop = scrollTop;
              //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
              // }

              setResizeState(RESIZE_STABLE);
              setAutoSizeStyle(textareaStyles);
            } else {
              fixFirefoxAutoScroll();
            }
          }, [resizeState]); // We lock resize trigger by raf to avoid Safari warning

          var resizeRafRef = React.useRef();

          var cleanRaf = function cleanRaf() {
            _raf.default.cancel(resizeRafRef.current);
          };

          var onInternalResize = function onInternalResize(size) {
            if (resizeState === RESIZE_STABLE) {
              onResize === null || onResize === void 0 ? void 0 : onResize(size);

              if (autoSize) {
                cleanRaf();
                resizeRafRef.current = (0, _raf.default)(function () {
                  startResize();
                });
              }
            }
          };

          React.useEffect(function () {
            return cleanRaf;
          }, []); // =============================== Render ===============================

          var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
          var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), mergedAutoSizeStyle);

          if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
            mergedStyle.overflowY = 'hidden';
            mergedStyle.overflowX = 'hidden';
          }

          return /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
            onResize: onInternalResize,
            disabled: !(autoSize || onResize)
          }, /*#__PURE__*/React.createElement("textarea", (0, _extends2.default)({}, restProps, {
            ref: textareaRef,
            style: mergedStyle,
            className: (0, _classnames.default)(prefixCls, className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-disabled"), disabled)),
            disabled: disabled,
            value: mergedValue,
            onChange: onInternalChange
          })));
        });
        var _default = ResizableTextArea;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/typeof': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        '@babel/runtime/helpers/objectWithoutProperties': _req6,
        'react': _req7,
        'rc-resize-observer': _req8,
        'rc-util/lib/hooks/useLayoutEffect': _req9,
        'rc-util/lib/raf': _req10,
        'rc-util/lib/hooks/useMergedState': _req11,
        'classnames': _req12,
        './calculateNodeHeight': _req13
      }));
    }
  };
});
//# sourceMappingURL=9cd7e74eba4d5691738e69fe53c2e9dc03cf7c18.js.map