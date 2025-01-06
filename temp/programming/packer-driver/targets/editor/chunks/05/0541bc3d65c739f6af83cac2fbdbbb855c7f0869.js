System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _Dots, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req1 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req2 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req3 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req4 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react2) {
      _req5 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
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
        exports.Dots = void 0;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _react = _interopRequireDefault(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _innerSliderUtils = require("./utils/innerSliderUtils");

        var getDotCount = function getDotCount(spec) {
          var dots;

          if (spec.infinite) {
            dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
          } else {
            dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
          }

          return dots;
        };

        var Dots = /*#__PURE__*/function (_React$PureComponent) {
          (0, _inherits2["default"])(Dots, _React$PureComponent);

          var _super = (0, _createSuper2["default"])(Dots);

          function Dots() {
            (0, _classCallCheck2["default"])(this, Dots);
            return _super.apply(this, arguments);
          }

          (0, _createClass2["default"])(Dots, [{
            key: "clickHandler",
            value: function clickHandler(options, e) {
              // In Autoplay the focus stays on clicked button even after transition
              // to next slide. That only goes away by click somewhere outside
              e.preventDefault();
              this.props.clickHandler(options);
            }
          }, {
            key: "render",
            value: function render() {
              var _this$props = this.props,
                  onMouseEnter = _this$props.onMouseEnter,
                  onMouseOver = _this$props.onMouseOver,
                  onMouseLeave = _this$props.onMouseLeave,
                  infinite = _this$props.infinite,
                  slidesToScroll = _this$props.slidesToScroll,
                  slidesToShow = _this$props.slidesToShow,
                  slideCount = _this$props.slideCount,
                  currentSlide = _this$props.currentSlide;
              var dotCount = getDotCount({
                slideCount: slideCount,
                slidesToScroll: slidesToScroll,
                slidesToShow: slidesToShow,
                infinite: infinite
              });
              var mouseEvents = {
                onMouseEnter: onMouseEnter,
                onMouseOver: onMouseOver,
                onMouseLeave: onMouseLeave
              };
              var dots = [];

              for (var i = 0; i < dotCount; i++) {
                var _rightBound = (i + 1) * slidesToScroll - 1;

                var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);

                var _leftBound = rightBound - (slidesToScroll - 1);

                var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
                var className = (0, _classnames["default"])({
                  "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
                });
                var dotOptions = {
                  message: "dots",
                  index: i,
                  slidesToScroll: slidesToScroll,
                  currentSlide: currentSlide
                };
                var onClick = this.clickHandler.bind(this, dotOptions);
                dots = dots.concat( /*#__PURE__*/_react["default"].createElement("li", {
                  key: i,
                  className: className
                }, /*#__PURE__*/_react["default"].cloneElement(this.props.customPaging(i), {
                  onClick: onClick
                })));
              }

              return /*#__PURE__*/_react["default"].cloneElement(this.props.appendDots(dots), (0, _objectSpread2["default"])({
                className: this.props.dotsClass
              }, mouseEvents));
            }
          }]);
          return Dots;
        }(_react["default"].PureComponent);

        exports.Dots = Dots; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _Dots = module.exports.Dots;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/classCallCheck': _req1,
        '@babel/runtime/helpers/createClass': _req2,
        '@babel/runtime/helpers/inherits': _req3,
        '@babel/runtime/helpers/createSuper': _req4,
        'react': _req5,
        'classnames': _req6,
        './utils/innerSliderUtils': _req7
      }));
    }
  };
});
//# sourceMappingURL=0541bc3d65c739f6af83cac2fbdbbb855c7f0869.js.map