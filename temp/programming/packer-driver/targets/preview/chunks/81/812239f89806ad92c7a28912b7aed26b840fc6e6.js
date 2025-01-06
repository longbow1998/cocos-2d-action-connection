System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;
        var initialState = {
          animating: false,
          autoplaying: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          dragging: false,
          edgeDragged: false,
          initialized: false,
          lazyLoadedList: [],
          listHeight: null,
          listWidth: null,
          scrolling: false,
          slideCount: null,
          slideHeight: null,
          slideWidth: null,
          swipeLeft: null,
          swiped: false,
          // used by swipeEvent. differentites between touch and swipe.
          swiping: false,
          touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
          },
          trackStyle: {},
          trackWidth: 0,
          targetSlide: 0
        };
        var _default = initialState;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=812239f89806ad92c7a28912b7aed26b840fc6e6.js.map