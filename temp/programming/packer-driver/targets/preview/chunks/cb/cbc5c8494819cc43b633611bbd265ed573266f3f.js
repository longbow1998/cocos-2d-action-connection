System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "rc-util/lib/hooks/useMergedState", "rc-util/lib/ref", "rc-util/lib/omit", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req6 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req4 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req5 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req9 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req10 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req11 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _ref2 = require("rc-util/lib/ref");

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var _MotionThumb = _interopRequireDefault(require("./MotionThumb"));

        var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];

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

        function getValidTitle(option) {
          if (typeof option.title !== 'undefined') {
            return option.title;
          } // read `label` when title is `undefined`


          if ((0, _typeof2.default)(option.label) !== 'object') {
            var _option$label;

            return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
          }
        }

        function normalizeOptions(options) {
          return options.map(function (option) {
            if ((0, _typeof2.default)(option) === 'object' && option !== null) {
              var validTitle = getValidTitle(option);
              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, option), {}, {
                title: validTitle
              });
            }

            return {
              label: option === null || option === void 0 ? void 0 : option.toString(),
              title: option === null || option === void 0 ? void 0 : option.toString(),
              value: option
            };
          });
        }

        var InternalSegmentedOption = function InternalSegmentedOption(_ref) {
          var prefixCls = _ref.prefixCls,
              className = _ref.className,
              disabled = _ref.disabled,
              checked = _ref.checked,
              label = _ref.label,
              title = _ref.title,
              value = _ref.value,
              onChange = _ref.onChange;

          var handleChange = function handleChange(event) {
            if (disabled) {
              return;
            }

            onChange(event, value);
          };

          return /*#__PURE__*/React.createElement("label", {
            className: (0, _classnames.default)(className, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-item-disabled"), disabled))
          }, /*#__PURE__*/React.createElement("input", {
            className: "".concat(prefixCls, "-item-input"),
            type: "radio",
            disabled: disabled,
            checked: checked,
            onChange: handleChange
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-item-label"),
            title: title
          }, label));
        };

        var Segmented = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _segmentedOptions$, _classNames2;

          var _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-segmented' : _props$prefixCls,
              direction = props.direction,
              options = props.options,
              disabled = props.disabled,
              defaultValue = props.defaultValue,
              value = props.value,
              onChange = props.onChange,
              _props$className = props.className,
              className = _props$className === void 0 ? '' : _props$className,
              _props$motionName = props.motionName,
              motionName = _props$motionName === void 0 ? 'thumb-motion' : _props$motionName,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var containerRef = React.useRef(null);
          var mergedRef = React.useMemo(function () {
            return (0, _ref2.composeRef)(containerRef, ref);
          }, [containerRef, ref]);
          var segmentedOptions = React.useMemo(function () {
            return normalizeOptions(options);
          }, [options]); // Note: We should not auto switch value when value not exist in options
          // which may break single source of truth.

          var _useMergedState = (0, _useMergedState3.default)((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
            value: value,
            defaultValue: defaultValue
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              rawValue = _useMergedState2[0],
              setRawValue = _useMergedState2[1]; // ======================= Change ========================


          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              thumbShow = _React$useState2[0],
              setThumbShow = _React$useState2[1];

          var handleChange = function handleChange(event, val) {
            if (disabled) {
              return;
            }

            setRawValue(val);
            onChange === null || onChange === void 0 ? void 0 : onChange(val);
          };

          var divProps = (0, _omit.default)(restProps, ['children']);
          return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, divProps, {
            className: (0, _classnames.default)(prefixCls, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
            ref: mergedRef
          }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-group")
          }, /*#__PURE__*/React.createElement(_MotionThumb.default, {
            prefixCls: prefixCls,
            value: rawValue,
            containerRef: containerRef,
            motionName: "".concat(prefixCls, "-").concat(motionName),
            direction: direction,
            getValueIndex: function getValueIndex(val) {
              return segmentedOptions.findIndex(function (n) {
                return n.value === val;
              });
            },
            onMotionStart: function onMotionStart() {
              setThumbShow(true);
            },
            onMotionEnd: function onMotionEnd() {
              setThumbShow(false);
            }
          }), segmentedOptions.map(function (segmentedOption) {
            return /*#__PURE__*/React.createElement(InternalSegmentedOption, (0, _extends2.default)({
              key: segmentedOption.value,
              prefixCls: prefixCls,
              className: (0, _classnames.default)(segmentedOption.className, "".concat(prefixCls, "-item"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
              checked: segmentedOption.value === rawValue,
              onChange: handleChange
            }, segmentedOption, {
              disabled: !!disabled || !!segmentedOption.disabled
            }));
          })));
        });
        Segmented.displayName = 'Segmented';
        Segmented.defaultProps = {
          options: []
        };
        var _default = Segmented;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        '@babel/runtime/helpers/defineProperty': _req4,
        '@babel/runtime/helpers/objectSpread2': _req5,
        '@babel/runtime/helpers/typeof': _req6,
        'react': _req7,
        'classnames': _req8,
        'rc-util/lib/hooks/useMergedState': _req9,
        'rc-util/lib/ref': _req10,
        'rc-util/lib/omit': _req11,
        './MotionThumb': _req12
      }));
    }
  };
});
//# sourceMappingURL=cbc5c8494819cc43b633611bbd265ed573266f3f.js.map