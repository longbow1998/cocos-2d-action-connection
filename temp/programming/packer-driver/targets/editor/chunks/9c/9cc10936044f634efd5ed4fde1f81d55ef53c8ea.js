System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/typeof", "classnames", "rc-resize-observer", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req3 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req4 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req5 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req6 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req7 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req9 = _rcResizeObserver2.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _throttleByAnimationFrame = require("../_util/throttleByAnimationFrame");

        var _utils = require("./utils");

        var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
          var c = arguments.length,
              r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
              d;
          if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };

        function getDefaultTarget() {
          return typeof window !== 'undefined' ? window : null;
        }

        var AffixStatus;

        (function (AffixStatus) {
          AffixStatus[AffixStatus["None"] = 0] = "None";
          AffixStatus[AffixStatus["Prepare"] = 1] = "Prepare";
        })(AffixStatus || (AffixStatus = {}));

        var Affix = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(Affix, _React$Component);

          var _super = (0, _createSuper2["default"])(Affix);

          function Affix() {
            var _this;

            (0, _classCallCheck2["default"])(this, Affix);
            _this = _super.apply(this, arguments);
            _this.state = {
              status: AffixStatus.None,
              lastAffix: false,
              prevTarget: null
            };

            _this.getOffsetTop = function () {
              var _this$props = _this.props,
                  offsetBottom = _this$props.offsetBottom,
                  offsetTop = _this$props.offsetTop;
              return offsetBottom === undefined && offsetTop === undefined ? 0 : offsetTop;
            };

            _this.getOffsetBottom = function () {
              return _this.props.offsetBottom;
            };

            _this.savePlaceholderNode = function (node) {
              _this.placeholderNode = node;
            };

            _this.saveFixedNode = function (node) {
              _this.fixedNode = node;
            }; // =================== Measure ===================


            _this.measure = function () {
              var _this$state = _this.state,
                  status = _this$state.status,
                  lastAffix = _this$state.lastAffix;
              var onChange = _this.props.onChange;

              var targetFunc = _this.getTargetFunc();

              if (status !== AffixStatus.Prepare || !_this.fixedNode || !_this.placeholderNode || !targetFunc) {
                return;
              }

              var offsetTop = _this.getOffsetTop();

              var offsetBottom = _this.getOffsetBottom();

              var targetNode = targetFunc();

              if (!targetNode) {
                return;
              }

              var newState = {
                status: AffixStatus.None
              };
              var targetRect = (0, _utils.getTargetRect)(targetNode);
              var placeholderReact = (0, _utils.getTargetRect)(_this.placeholderNode);
              var fixedTop = (0, _utils.getFixedTop)(placeholderReact, targetRect, offsetTop);
              var fixedBottom = (0, _utils.getFixedBottom)(placeholderReact, targetRect, offsetBottom);

              if (placeholderReact.top === 0 && placeholderReact.left === 0 && placeholderReact.width === 0 && placeholderReact.height === 0) {
                return;
              }

              if (fixedTop !== undefined) {
                newState.affixStyle = {
                  position: 'fixed',
                  top: fixedTop,
                  width: placeholderReact.width,
                  height: placeholderReact.height
                };
                newState.placeholderStyle = {
                  width: placeholderReact.width,
                  height: placeholderReact.height
                };
              } else if (fixedBottom !== undefined) {
                newState.affixStyle = {
                  position: 'fixed',
                  bottom: fixedBottom,
                  width: placeholderReact.width,
                  height: placeholderReact.height
                };
                newState.placeholderStyle = {
                  width: placeholderReact.width,
                  height: placeholderReact.height
                };
              }

              newState.lastAffix = !!newState.affixStyle;

              if (onChange && lastAffix !== newState.lastAffix) {
                onChange(newState.lastAffix);
              }

              _this.setState(newState);
            }; // @ts-ignore TS6133


            _this.prepareMeasure = function () {
              // event param is used before. Keep compatible ts define here.
              _this.setState({
                status: AffixStatus.Prepare,
                affixStyle: undefined,
                placeholderStyle: undefined
              }); // Test if `updatePosition` called


              if (process.env.NODE_ENV === 'test') {
                var onTestUpdatePosition = _this.props.onTestUpdatePosition;
                onTestUpdatePosition === null || onTestUpdatePosition === void 0 ? void 0 : onTestUpdatePosition();
              }
            };

            return _this;
          }

          (0, _createClass2["default"])(Affix, [{
            key: "getTargetFunc",
            value: function getTargetFunc() {
              var getTargetContainer = this.context.getTargetContainer;
              var target = this.props.target;

              if (target !== undefined) {
                return target;
              }

              return getTargetContainer !== null && getTargetContainer !== void 0 ? getTargetContainer : getDefaultTarget;
            } // Event handler

          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this2 = this;

              var targetFunc = this.getTargetFunc();

              if (targetFunc) {
                // [Legacy] Wait for parent component ref has its value.
                // We should use target as directly element instead of function which makes element check hard.
                this.timeout = setTimeout(function () {
                  (0, _utils.addObserveTarget)(targetFunc(), _this2); // Mock Event object.

                  _this2.updatePosition();
                });
              }
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
              var prevTarget = this.state.prevTarget;
              var targetFunc = this.getTargetFunc();
              var newTarget = (targetFunc === null || targetFunc === void 0 ? void 0 : targetFunc()) || null;

              if (prevTarget !== newTarget) {
                (0, _utils.removeObserveTarget)(this);

                if (newTarget) {
                  (0, _utils.addObserveTarget)(newTarget, this); // Mock Event object.

                  this.updatePosition();
                } // eslint-disable-next-line react/no-did-update-set-state


                this.setState({
                  prevTarget: newTarget
                });
              }

              if (prevProps.offsetTop !== this.props.offsetTop || prevProps.offsetBottom !== this.props.offsetBottom) {
                this.updatePosition();
              }

              this.measure();
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              clearTimeout(this.timeout);
              (0, _utils.removeObserveTarget)(this);
              this.updatePosition.cancel(); // https://github.com/ant-design/ant-design/issues/22683

              this.lazyUpdatePosition.cancel();
            } // Handle realign logic

          }, {
            key: "updatePosition",
            value: function updatePosition() {
              this.prepareMeasure();
            }
          }, {
            key: "lazyUpdatePosition",
            value: function lazyUpdatePosition() {
              var targetFunc = this.getTargetFunc();
              var affixStyle = this.state.affixStyle; // Check position change before measure to make Safari smooth

              if (targetFunc && affixStyle) {
                var offsetTop = this.getOffsetTop();
                var offsetBottom = this.getOffsetBottom();
                var targetNode = targetFunc();

                if (targetNode && this.placeholderNode) {
                  var targetRect = (0, _utils.getTargetRect)(targetNode);
                  var placeholderReact = (0, _utils.getTargetRect)(this.placeholderNode);
                  var fixedTop = (0, _utils.getFixedTop)(placeholderReact, targetRect, offsetTop);
                  var fixedBottom = (0, _utils.getFixedBottom)(placeholderReact, targetRect, offsetBottom);

                  if (fixedTop !== undefined && affixStyle.top === fixedTop || fixedBottom !== undefined && affixStyle.bottom === fixedBottom) {
                    return;
                  }
                }
              } // Directly call prepare measure since it's already throttled.


              this.prepareMeasure();
            } // =================== Render ===================

          }, {
            key: "render",
            value: function render() {
              var _this3 = this;

              var _this$state2 = this.state,
                  affixStyle = _this$state2.affixStyle,
                  placeholderStyle = _this$state2.placeholderStyle;
              var _this$props2 = this.props,
                  affixPrefixCls = _this$props2.affixPrefixCls,
                  children = _this$props2.children;
              var className = (0, _classnames["default"])((0, _defineProperty2["default"])({}, affixPrefixCls, !!affixStyle));
              var props = (0, _omit["default"])(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange', 'affixPrefixCls']); // Omit this since `onTestUpdatePosition` only works on test.

              if (process.env.NODE_ENV === 'test') {
                props = (0, _omit["default"])(props, ['onTestUpdatePosition']);
              }

              return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
                onResize: function onResize() {
                  _this3.updatePosition();
                }
              }, /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, props, {
                ref: this.savePlaceholderNode
              }), affixStyle && /*#__PURE__*/React.createElement("div", {
                style: placeholderStyle,
                "aria-hidden": "true"
              }), /*#__PURE__*/React.createElement("div", {
                className: className,
                ref: this.saveFixedNode,
                style: affixStyle
              }, /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
                onResize: function onResize() {
                  _this3.updatePosition();
                }
              }, children))));
            }
          }]);
          return Affix;
        }(React.Component);

        Affix.contextType = _configProvider.ConfigContext;

        __decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Affix.prototype, "updatePosition", null);

        __decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Affix.prototype, "lazyUpdatePosition", null);

        var AffixFC = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var customizePrefixCls = props.prefixCls;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls;

          var affixPrefixCls = getPrefixCls('affix', customizePrefixCls);
          var affixProps = (0, _extends2["default"])((0, _extends2["default"])({}, props), {
            affixPrefixCls: affixPrefixCls
          });
          return /*#__PURE__*/React.createElement(Affix, (0, _extends2["default"])({}, affixProps, {
            ref: ref
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          AffixFC.displayName = 'Affix';
        }

        var _default = AffixFC;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/classCallCheck': _req3,
        '@babel/runtime/helpers/createClass': _req4,
        '@babel/runtime/helpers/inherits': _req5,
        '@babel/runtime/helpers/createSuper': _req6,
        '@babel/runtime/helpers/typeof': _req7,
        'classnames': _req8,
        'rc-resize-observer': _req9,
        'rc-util/lib/omit': _req10,
        'react': _req11,
        '../config-provider': _req12,
        '../_util/throttleByAnimationFrame': _req13,
        './utils': _req14
      }));
    }
  };
});
//# sourceMappingURL=9cc10936044f634efd5ed4fde1f81d55ef53c8ea.js.map