System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "classnames", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _PrevArrow, _NextArrow, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersInherits) {
      _req4 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req5 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react2) {
      _req6 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
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
        exports.PrevArrow = exports.NextArrow = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var _react = _interopRequireDefault(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _innerSliderUtils = require("./utils/innerSliderUtils");

        var PrevArrow = /*#__PURE__*/function (_React$PureComponent) {
          (0, _inherits2["default"])(PrevArrow, _React$PureComponent);

          var _super = (0, _createSuper2["default"])(PrevArrow);

          function PrevArrow() {
            (0, _classCallCheck2["default"])(this, PrevArrow);
            return _super.apply(this, arguments);
          }

          (0, _createClass2["default"])(PrevArrow, [{
            key: "clickHandler",
            value: function clickHandler(options, e) {
              if (e) {
                e.preventDefault();
              }

              this.props.clickHandler(options, e);
            }
          }, {
            key: "render",
            value: function render() {
              var prevClasses = {
                "slick-arrow": true,
                "slick-prev": true
              };
              var prevHandler = this.clickHandler.bind(this, {
                message: "previous"
              });

              if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
                prevClasses["slick-disabled"] = true;
                prevHandler = null;
              }

              var prevArrowProps = {
                key: "0",
                "data-role": "none",
                className: (0, _classnames["default"])(prevClasses),
                style: {
                  display: "block"
                },
                onClick: prevHandler
              };
              var customProps = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
              };
              var prevArrow;

              if (this.props.prevArrow) {
                prevArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.prevArrow, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, prevArrowProps), customProps));
              } else {
                prevArrow = /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
                  key: "0",
                  type: "button"
                }, prevArrowProps), " ", "Previous");
              }

              return prevArrow;
            }
          }]);
          return PrevArrow;
        }(_react["default"].PureComponent);

        exports.PrevArrow = PrevArrow;

        var NextArrow = /*#__PURE__*/function (_React$PureComponent2) {
          (0, _inherits2["default"])(NextArrow, _React$PureComponent2);

          var _super2 = (0, _createSuper2["default"])(NextArrow);

          function NextArrow() {
            (0, _classCallCheck2["default"])(this, NextArrow);
            return _super2.apply(this, arguments);
          }

          (0, _createClass2["default"])(NextArrow, [{
            key: "clickHandler",
            value: function clickHandler(options, e) {
              if (e) {
                e.preventDefault();
              }

              this.props.clickHandler(options, e);
            }
          }, {
            key: "render",
            value: function render() {
              var nextClasses = {
                "slick-arrow": true,
                "slick-next": true
              };
              var nextHandler = this.clickHandler.bind(this, {
                message: "next"
              });

              if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
                nextClasses["slick-disabled"] = true;
                nextHandler = null;
              }

              var nextArrowProps = {
                key: "1",
                "data-role": "none",
                className: (0, _classnames["default"])(nextClasses),
                style: {
                  display: "block"
                },
                onClick: nextHandler
              };
              var customProps = {
                currentSlide: this.props.currentSlide,
                slideCount: this.props.slideCount
              };
              var nextArrow;

              if (this.props.nextArrow) {
                nextArrow = /*#__PURE__*/_react["default"].cloneElement(this.props.nextArrow, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, nextArrowProps), customProps));
              } else {
                nextArrow = /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
                  key: "1",
                  type: "button"
                }, nextArrowProps), " ", "Next");
              }

              return nextArrow;
            }
          }]);
          return NextArrow;
        }(_react["default"].PureComponent);

        exports.NextArrow = NextArrow; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _PrevArrow = module.exports.PrevArrow;
        _NextArrow = module.exports.NextArrow;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/classCallCheck': _req2,
        '@babel/runtime/helpers/createClass': _req3,
        '@babel/runtime/helpers/inherits': _req4,
        '@babel/runtime/helpers/createSuper': _req5,
        'react': _req6,
        'classnames': _req7,
        './utils/innerSliderUtils': _req8
      }));
    }
  };
});
//# sourceMappingURL=3a36131578bc3fbb028e5ee30f4a6e45935e3f47.js.map