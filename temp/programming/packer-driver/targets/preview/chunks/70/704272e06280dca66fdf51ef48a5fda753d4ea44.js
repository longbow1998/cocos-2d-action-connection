System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getMotionName, _offset, __cjsMetaURL;

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
        exports.getMotionName = getMotionName;
        exports.offset = offset; // =============================== Motion ===============================

        function getMotionName(prefixCls, transitionName, animationName) {
          var motionName = transitionName;

          if (!motionName && animationName) {
            motionName = "".concat(prefixCls, "-").concat(animationName);
          }

          return motionName;
        } // =============================== Offset ===============================


        function getScroll(w, top) {
          var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
          var method = "scroll".concat(top ? 'Top' : 'Left');

          if (typeof ret !== 'number') {
            var d = w.document;
            ret = d.documentElement[method];

            if (typeof ret !== 'number') {
              ret = d.body[method];
            }
          }

          return ret;
        }

        function offset(el) {
          var rect = el.getBoundingClientRect();
          var pos = {
            left: rect.left,
            top: rect.top
          };
          var doc = el.ownerDocument;
          var w = doc.defaultView || doc.parentWindow;
          pos.left += getScroll(w);
          pos.top += getScroll(w, true);
          return pos;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getMotionName = module.exports.getMotionName;
        _offset = module.exports.offset;
      }, {});
    }
  };
});
//# sourceMappingURL=704272e06280dca66fdf51ef48a5fda753d4ea44.js.map