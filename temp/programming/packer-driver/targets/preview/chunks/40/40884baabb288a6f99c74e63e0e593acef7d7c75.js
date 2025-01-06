System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getOffsetLeft, __cjsMetaURL;

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
        exports.getOffsetLeft = getOffsetLeft;

        function getScroll(w) {
          var ret = w.pageXOffset;
          var method = 'scrollLeft';

          if (typeof ret !== 'number') {
            var d = w.document; // ie6,7,8 standard mode

            ret = d.documentElement[method];

            if (typeof ret !== 'number') {
              // quirks mode
              ret = d.body[method];
            }
          }

          return ret;
        }

        function getClientPosition(elem) {
          var x;
          var y;
          var doc = elem.ownerDocument;
          var body = doc.body;
          var docElem = doc && doc.documentElement;
          var box = elem.getBoundingClientRect();
          x = box.left;
          y = box.top;
          x -= docElem.clientLeft || body.clientLeft || 0;
          y -= docElem.clientTop || body.clientTop || 0;
          return {
            left: x,
            top: y
          };
        }

        function getOffsetLeft(el) {
          var pos = getClientPosition(el);
          var doc = el.ownerDocument; // Only IE use `parentWindow`

          var w = doc.defaultView || doc.parentWindow;
          pos.left += getScroll(w);
          return pos.left;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getOffsetLeft = module.exports.getOffsetLeft;
      }, {});
    }
  };
});
//# sourceMappingURL=40884baabb288a6f99c74e63e0e593acef7d7c75.js.map