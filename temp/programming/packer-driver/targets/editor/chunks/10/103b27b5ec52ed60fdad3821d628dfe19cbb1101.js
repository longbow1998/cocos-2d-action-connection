System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req4 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req5 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req6 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req7 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req8 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react2) {
      _req9 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req10 = _classnames2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _react = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames")); // eslint-disable-next-line import/no-extraneous-dependencies


        var Checkbox = /*#__PURE__*/function (_Component) {
          (0, _inherits2.default)(Checkbox, _Component);

          var _super = (0, _createSuper2.default)(Checkbox);

          function Checkbox(props) {
            var _this;

            (0, _classCallCheck2.default)(this, Checkbox);
            _this = _super.call(this, props);

            _this.handleChange = function (e) {
              var _this$props = _this.props,
                  disabled = _this$props.disabled,
                  onChange = _this$props.onChange;

              if (disabled) {
                return;
              }

              if (!('checked' in _this.props)) {
                _this.setState({
                  checked: e.target.checked
                });
              }

              if (onChange) {
                onChange({
                  target: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.props), {}, {
                    checked: e.target.checked
                  }),
                  stopPropagation: function stopPropagation() {
                    e.stopPropagation();
                  },
                  preventDefault: function preventDefault() {
                    e.preventDefault();
                  },
                  nativeEvent: e.nativeEvent
                });
              }
            };

            _this.saveInput = function (node) {
              _this.input = node;
            };

            var checked = 'checked' in props ? props.checked : props.defaultChecked;
            _this.state = {
              checked: checked
            };
            return _this;
          }

          (0, _createClass2.default)(Checkbox, [{
            key: "focus",
            value: function focus() {
              this.input.focus();
            }
          }, {
            key: "blur",
            value: function blur() {
              this.input.blur();
            }
          }, {
            key: "render",
            value: function render() {
              var _classNames;

              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  className = _this$props2.className,
                  style = _this$props2.style,
                  name = _this$props2.name,
                  id = _this$props2.id,
                  type = _this$props2.type,
                  disabled = _this$props2.disabled,
                  readOnly = _this$props2.readOnly,
                  tabIndex = _this$props2.tabIndex,
                  onClick = _this$props2.onClick,
                  onFocus = _this$props2.onFocus,
                  onBlur = _this$props2.onBlur,
                  onKeyDown = _this$props2.onKeyDown,
                  onKeyPress = _this$props2.onKeyPress,
                  onKeyUp = _this$props2.onKeyUp,
                  autoFocus = _this$props2.autoFocus,
                  value = _this$props2.value,
                  required = _this$props2.required,
                  others = (0, _objectWithoutProperties2.default)(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);
              var globalProps = Object.keys(others).reduce(function (prev, key) {
                if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
                  // eslint-disable-next-line no-param-reassign
                  prev[key] = others[key];
                }

                return prev;
              }, {});
              var checked = this.state.checked;
              var classString = (0, _classnames.default)(prefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-checked"), checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
              return /*#__PURE__*/_react.default.createElement("span", {
                className: classString,
                style: style
              }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
                name: name,
                id: id,
                type: type,
                required: required,
                readOnly: readOnly,
                disabled: disabled,
                tabIndex: tabIndex,
                className: "".concat(prefixCls, "-input"),
                checked: !!checked,
                onClick: onClick,
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyUp: onKeyUp,
                onKeyDown: onKeyDown,
                onKeyPress: onKeyPress,
                onChange: this.handleChange,
                autoFocus: autoFocus,
                ref: this.saveInput,
                value: value
              }, globalProps)), /*#__PURE__*/_react.default.createElement("span", {
                className: "".concat(prefixCls, "-inner")
              }));
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(props, state) {
              if ('checked' in props) {
                return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
                  checked: props.checked
                });
              }

              return null;
            }
          }]);
          return Checkbox;
        }(_react.Component);

        Checkbox.defaultProps = {
          prefixCls: 'rc-checkbox',
          className: '',
          style: {},
          type: 'checkbox',
          defaultChecked: false,
          onFocus: function onFocus() {},
          onBlur: function onBlur() {},
          onChange: function onChange() {},
          onKeyDown: function onKeyDown() {},
          onKeyPress: function onKeyPress() {},
          onKeyUp: function onKeyUp() {}
        };
        var _default = Checkbox;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        '@babel/runtime/helpers/objectSpread2': _req4,
        '@babel/runtime/helpers/classCallCheck': _req5,
        '@babel/runtime/helpers/createClass': _req6,
        '@babel/runtime/helpers/inherits': _req7,
        '@babel/runtime/helpers/createSuper': _req8,
        'react': _req9,
        'classnames': _req10
      }));
    }
  };
});
//# sourceMappingURL=103b27b5ec52ed60fdad3821d628dfe19cbb1101.js.map