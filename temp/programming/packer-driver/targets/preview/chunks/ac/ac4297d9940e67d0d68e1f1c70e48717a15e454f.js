System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _Track, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req1 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req2 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAssertThisInitialized) {
      _req3 = _babelRuntimeHelpersAssertThisInitialized.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req4 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req5 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req6 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req7 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react2) {
      _req8 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
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
        exports.Track = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _react = _interopRequireDefault(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _innerSliderUtils = require("./utils/innerSliderUtils"); // given specifications/props for a slide, fetch all the classes that need to be applied to the slide


        var getSlideClasses = function getSlideClasses(spec) {
          var slickActive, slickCenter, slickCloned;
          var centerOffset, index;

          if (spec.rtl) {
            index = spec.slideCount - 1 - spec.index;
          } else {
            index = spec.index;
          }

          slickCloned = index < 0 || index >= spec.slideCount;

          if (spec.centerMode) {
            centerOffset = Math.floor(spec.slidesToShow / 2);
            slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

            if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
              slickActive = true;
            }
          } else {
            slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
          }

          var focusedSlide;

          if (spec.targetSlide < 0) {
            focusedSlide = spec.targetSlide + spec.slideCount;
          } else if (spec.targetSlide >= spec.slideCount) {
            focusedSlide = spec.targetSlide - spec.slideCount;
          } else {
            focusedSlide = spec.targetSlide;
          }

          var slickCurrent = index === focusedSlide;
          return {
            "slick-slide": true,
            "slick-active": slickActive,
            "slick-center": slickCenter,
            "slick-cloned": slickCloned,
            "slick-current": slickCurrent // dubious in case of RTL

          };
        };

        var getSlideStyle = function getSlideStyle(spec) {
          var style = {};

          if (spec.variableWidth === undefined || spec.variableWidth === false) {
            style.width = spec.slideWidth;
          }

          if (spec.fade) {
            style.position = "relative";

            if (spec.vertical) {
              style.top = -spec.index * parseInt(spec.slideHeight);
            } else {
              style.left = -spec.index * parseInt(spec.slideWidth);
            }

            style.opacity = spec.currentSlide === spec.index ? 1 : 0;

            if (spec.useCSS) {
              style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
            }
          }

          return style;
        };

        var getKey = function getKey(child, fallbackKey) {
          return child.key + "-" + fallbackKey;
        };

        var renderSlides = function renderSlides(spec) {
          var key;
          var slides = [];
          var preCloneSlides = [];
          var postCloneSlides = [];

          var childrenCount = _react["default"].Children.count(spec.children);

          var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
          var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

          _react["default"].Children.forEach(spec.children, function (elem, index) {
            var child;
            var childOnClickOptions = {
              message: "children",
              index: index,
              slidesToScroll: spec.slidesToScroll,
              currentSlide: spec.currentSlide
            }; // in case of lazyLoad, whether or not we want to fetch the slide

            if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
              child = elem;
            } else {
              child = /*#__PURE__*/_react["default"].createElement("div", null);
            }

            var childStyle = getSlideStyle((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spec), {}, {
              index: index
            }));
            var slideClass = child.props.className || "";
            var slideClasses = getSlideClasses((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spec), {}, {
              index: index
            })); // push a cloned element of the desired slide

            slides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
              key: "original" + getKey(child, index),
              "data-index": index,
              className: (0, _classnames["default"])(slideClasses, slideClass),
              tabIndex: "-1",
              "aria-hidden": !slideClasses["slick-active"],
              style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
                outline: "none"
              }, child.props.style || {}), childStyle),
              onClick: function onClick(e) {
                child.props && child.props.onClick && child.props.onClick(e);

                if (spec.focusOnSelect) {
                  spec.focusOnSelect(childOnClickOptions);
                }
              }
            })); // if slide needs to be precloned or postcloned

            if (spec.infinite && spec.fade === false) {
              var preCloneNo = childrenCount - index;

              if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
                key = -preCloneNo;

                if (key >= startIndex) {
                  child = elem;
                }

                slideClasses = getSlideClasses((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spec), {}, {
                  index: key
                }));
                preCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
                  key: "precloned" + getKey(child, key),
                  "data-index": key,
                  tabIndex: "-1",
                  className: (0, _classnames["default"])(slideClasses, slideClass),
                  "aria-hidden": !slideClasses["slick-active"],
                  style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, child.props.style || {}), childStyle),
                  onClick: function onClick(e) {
                    child.props && child.props.onClick && child.props.onClick(e);

                    if (spec.focusOnSelect) {
                      spec.focusOnSelect(childOnClickOptions);
                    }
                  }
                }));
              }

              if (childrenCount !== spec.slidesToShow) {
                key = childrenCount + index;

                if (key < endIndex) {
                  child = elem;
                }

                slideClasses = getSlideClasses((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, spec), {}, {
                  index: key
                }));
                postCloneSlides.push( /*#__PURE__*/_react["default"].cloneElement(child, {
                  key: "postcloned" + getKey(child, key),
                  "data-index": key,
                  tabIndex: "-1",
                  className: (0, _classnames["default"])(slideClasses, slideClass),
                  "aria-hidden": !slideClasses["slick-active"],
                  style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, child.props.style || {}), childStyle),
                  onClick: function onClick(e) {
                    child.props && child.props.onClick && child.props.onClick(e);

                    if (spec.focusOnSelect) {
                      spec.focusOnSelect(childOnClickOptions);
                    }
                  }
                }));
              }
            }
          });

          if (spec.rtl) {
            return preCloneSlides.concat(slides, postCloneSlides).reverse();
          } else {
            return preCloneSlides.concat(slides, postCloneSlides);
          }
        };

        var Track = /*#__PURE__*/function (_React$PureComponent) {
          (0, _inherits2["default"])(Track, _React$PureComponent);

          var _super = (0, _createSuper2["default"])(Track);

          function Track() {
            var _this;

            (0, _classCallCheck2["default"])(this, Track);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "node", null);
            (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRef", function (ref) {
              _this.node = ref;
            });
            return _this;
          }

          (0, _createClass2["default"])(Track, [{
            key: "render",
            value: function render() {
              var slides = renderSlides(this.props);
              var _this$props = this.props,
                  onMouseEnter = _this$props.onMouseEnter,
                  onMouseOver = _this$props.onMouseOver,
                  onMouseLeave = _this$props.onMouseLeave;
              var mouseEvents = {
                onMouseEnter: onMouseEnter,
                onMouseOver: onMouseOver,
                onMouseLeave: onMouseLeave
              };
              return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle
              }, mouseEvents), slides);
            }
          }]);
          return Track;
        }(_react["default"].PureComponent);

        exports.Track = Track; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Track = module.exports.Track;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '@babel/runtime/helpers/classCallCheck': _req1,
        '@babel/runtime/helpers/createClass': _req2,
        '@babel/runtime/helpers/assertThisInitialized': _req3,
        '@babel/runtime/helpers/inherits': _req4,
        '@babel/runtime/helpers/createSuper': _req5,
        '@babel/runtime/helpers/defineProperty': _req6,
        '@babel/runtime/helpers/objectSpread2': _req7,
        'react': _req8,
        'classnames': _req9,
        './utils/innerSliderUtils': _req10
      }));
    }
  };
});
//# sourceMappingURL=ac4297d9940e67d0d68e1f1c70e48717a15e454f.js.map