System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, _getTargetScrollBarSize, __cjsMetaURL;

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
        exports.default = getScrollBarSize;
        exports.getTargetScrollBarSize = getTargetScrollBarSize;
        /* eslint-disable no-param-reassign */

        var cached;

        function getScrollBarSize(fresh) {
          if (typeof document === 'undefined') {
            return 0;
          }

          if (fresh || cached === undefined) {
            var inner = document.createElement('div');
            inner.style.width = '100%';
            inner.style.height = '200px';
            var outer = document.createElement('div');
            var outerStyle = outer.style;
            outerStyle.position = 'absolute';
            outerStyle.top = '0';
            outerStyle.left = '0';
            outerStyle.pointerEvents = 'none';
            outerStyle.visibility = 'hidden';
            outerStyle.width = '200px';
            outerStyle.height = '150px';
            outerStyle.overflow = 'hidden';
            outer.appendChild(inner);
            document.body.appendChild(outer);
            var widthContained = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var widthScroll = inner.offsetWidth;

            if (widthContained === widthScroll) {
              widthScroll = outer.clientWidth;
            }

            document.body.removeChild(outer);
            cached = widthContained - widthScroll;
          }

          return cached;
        }

        function ensureSize(str) {
          var match = str.match(/^(.*)px$/);
          var value = Number(match === null || match === void 0 ? void 0 : match[1]);
          return Number.isNaN(value) ? getScrollBarSize() : value;
        }

        function getTargetScrollBarSize(target) {
          if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
            return {
              width: 0,
              height: 0
            };
          }

          var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
              width = _getComputedStyle.width,
              height = _getComputedStyle.height;

          return {
            width: ensureSize(width),
            height: ensureSize(height)
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _getTargetScrollBarSize = module.exports.getTargetScrollBarSize;
      }, {});
    }
  };
});
//# sourceMappingURL=89be8c6ca142d1209c4a6dad6a6420e0fd384199.js.map