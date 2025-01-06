System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/defineProperty", "react", "__unresolved_1", "json2mq", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req2 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req3 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAssertThisInitialized) {
      _req4 = _babelRuntimeHelpersAssertThisInitialized.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req5 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req6 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req7 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react2) {
      _req8 = _react2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_json2mq2) {
      _req10 = _json2mq2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _react = _interopRequireDefault(require("react"));

        var _innerSlider = require("./inner-slider");

        var _json2mq = _interopRequireDefault(require("json2mq"));

        var _defaultProps = _interopRequireDefault(require("./default-props"));

        var _innerSliderUtils = require("./utils/innerSliderUtils");

        var Slider = /*#__PURE__*/function (_React$Component) {
          (0, _inherits2["default"])(Slider, _React$Component);

          var _super = (0, _createSuper2["default"])(Slider);

          function Slider(props) {
            var _this;

            (0, _classCallCheck2["default"])(this, Slider);
            _this = _super.call(this, props);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "innerSliderRefHandler", function (ref) {
              return _this.innerSlider = ref;
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slickPrev", function () {
              return _this.innerSlider.slickPrev();
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slickNext", function () {
              return _this.innerSlider.slickNext();
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slickGoTo", function (slide) {
              var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              return _this.innerSlider.slickGoTo(slide, dontAnimate);
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slickPause", function () {
              return _this.innerSlider.pause("paused");
            });
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slickPlay", function () {
              return _this.innerSlider.autoPlay("play");
            });
            _this.state = {
              breakpoint: null
            };
            _this._responsiveMediaHandlers = [];
            return _this;
          }

          (0, _createClass2["default"])(Slider, [{
            key: "media",
            value: function media(query, handler) {
              // javascript handler for  css media query
              var mql = window.matchMedia(query);

              var listener = function listener(_ref) {
                var matches = _ref.matches;

                if (matches) {
                  handler();
                }
              };

              mql.addListener(listener);
              listener(mql);

              this._responsiveMediaHandlers.push({
                mql: mql,
                query: query,
                listener: listener
              });
            } // handles responsive breakpoints

          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this2 = this; // performance monitoring
              //if (process.env.NODE_ENV !== 'production') {
              //const { whyDidYouUpdate } = require('why-did-you-update')
              //whyDidYouUpdate(React)
              //}


              if (this.props.responsive) {
                var breakpoints = this.props.responsive.map(function (breakpt) {
                  return breakpt.breakpoint;
                }); // sort them in increasing order of their numerical value

                breakpoints.sort(function (x, y) {
                  return x - y;
                });
                breakpoints.forEach(function (breakpoint, index) {
                  // media query for each breakpoint
                  var bQuery;

                  if (index === 0) {
                    bQuery = (0, _json2mq["default"])({
                      minWidth: 0,
                      maxWidth: breakpoint
                    });
                  } else {
                    bQuery = (0, _json2mq["default"])({
                      minWidth: breakpoints[index - 1] + 1,
                      maxWidth: breakpoint
                    });
                  } // when not using server side rendering


                  (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
                    _this2.setState({
                      breakpoint: breakpoint
                    });
                  });
                }); // Register media query for full screen. Need to support resize from small to large
                // convert javascript object to media query string

                var query = (0, _json2mq["default"])({
                  minWidth: breakpoints.slice(-1)[0]
                });
                (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
                  _this2.setState({
                    breakpoint: null
                  });
                });
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this._responsiveMediaHandlers.forEach(function (obj) {
                obj.mql.removeListener(obj.listener);
              });
            }
          }, {
            key: "render",
            value: function render() {
              var _this3 = this;

              var settings;
              var newProps;

              if (this.state.breakpoint) {
                newProps = this.props.responsive.filter(function (resp) {
                  return resp.breakpoint === _this3.state.breakpoint;
                });
                settings = newProps[0].settings === "unslick" ? "unslick" : (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, _defaultProps["default"]), this.props), newProps[0].settings);
              } else {
                settings = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, _defaultProps["default"]), this.props);
              } // force scrolling by one if centerMode is on


              if (settings.centerMode) {
                if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
                  console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
                }

                settings.slidesToScroll = 1;
              } // force showing one slide and scrolling by one if the fade mode is on


              if (settings.fade) {
                if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
                  console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
                }

                if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
                  console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
                }

                settings.slidesToShow = 1;
                settings.slidesToScroll = 1;
              } // makes sure that children is an array, even when there is only 1 child


              var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
              // children may also contain string filled with spaces (in certain cases where we use jsx strings)


              children = children.filter(function (child) {
                if (typeof child === "string") {
                  return !!child.trim();
                }

                return !!child;
              }); // rows and slidesPerRow logic is handled here

              if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
                console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
                settings.variableWidth = false;
              }

              var newChildren = [];
              var currentWidth = null;

              for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
                var newSlide = [];

                for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
                  var row = [];

                  for (var k = j; k < j + settings.slidesPerRow; k += 1) {
                    if (settings.variableWidth && children[k].props.style) {
                      currentWidth = children[k].props.style.width;
                    }

                    if (k >= children.length) break;
                    row.push( /*#__PURE__*/_react["default"].cloneElement(children[k], {
                      key: 100 * i + 10 * j + k,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / settings.slidesPerRow, "%"),
                        display: "inline-block"
                      }
                    }));
                  }

                  newSlide.push( /*#__PURE__*/_react["default"].createElement("div", {
                    key: 10 * i + j
                  }, row));
                }

                if (settings.variableWidth) {
                  newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
                    key: i,
                    style: {
                      width: currentWidth
                    }
                  }, newSlide));
                } else {
                  newChildren.push( /*#__PURE__*/_react["default"].createElement("div", {
                    key: i
                  }, newSlide));
                }
              }

              if (settings === "unslick") {
                var className = "regular slider " + (this.props.className || "");
                return /*#__PURE__*/_react["default"].createElement("div", {
                  className: className
                }, children);
              } else if (newChildren.length <= settings.slidesToShow) {
                settings.unslick = true;
              }

              return /*#__PURE__*/_react["default"].createElement(_innerSlider.InnerSlider, (0, _extends2["default"])({
                style: this.props.style,
                ref: this.innerSliderRefHandler
              }, settings), newChildren);
            }
          }]);
          return Slider;
        }(_react["default"].Component);

        exports["default"] = Slider; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/assertThisInitialized': _req4,
        '@babel/runtime/helpers/inherits': _req5,
        '@babel/runtime/helpers/createSuper': _req6,
        '@babel/runtime/helpers/defineProperty': _req7,
        'react': _req8,
        './inner-slider': _req9,
        'json2mq': _req10,
        './default-props': _req11,
        './utils/innerSliderUtils': _req12
      }));
    }
  };
});
//# sourceMappingURL=6bc39a96bba0722ea6362733f943291965b70a40.js.map