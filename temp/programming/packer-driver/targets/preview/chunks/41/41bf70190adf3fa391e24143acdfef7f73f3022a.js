System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_react2) {
      _req0 = _react2.__cjsMetaURL;
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

        var _react = _interopRequireDefault(require("react"));

        var defaultProps = {
          accessibility: true,
          adaptiveHeight: false,
          afterChange: null,
          appendDots: function appendDots(dots) {
            return /*#__PURE__*/_react["default"].createElement("ul", {
              style: {
                display: "block"
              }
            }, dots);
          },
          arrows: true,
          autoplay: false,
          autoplaySpeed: 3000,
          beforeChange: null,
          centerMode: false,
          centerPadding: "50px",
          className: "",
          cssEase: "ease",
          customPaging: function customPaging(i) {
            return /*#__PURE__*/_react["default"].createElement("button", null, i + 1);
          },
          dots: false,
          dotsClass: "slick-dots",
          draggable: true,
          easing: "linear",
          edgeFriction: 0.35,
          fade: false,
          focusOnSelect: false,
          infinite: true,
          initialSlide: 0,
          lazyLoad: null,
          nextArrow: null,
          onEdge: null,
          onInit: null,
          onLazyLoadError: null,
          onReInit: null,
          pauseOnDotsHover: false,
          pauseOnFocus: false,
          pauseOnHover: true,
          prevArrow: null,
          responsive: null,
          rows: 1,
          rtl: false,
          slide: "div",
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
          swipe: true,
          swipeEvent: null,
          swipeToSlide: false,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          useTransform: true,
          variableWidth: false,
          vertical: false,
          waitForAnimate: true
        };
        var _default = defaultProps;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=41bf70190adf3fa391e24143acdfef7f73f3022a.js.map