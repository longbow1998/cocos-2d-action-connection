System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        module.exports = function () {
          var selection = document.getSelection();

          if (!selection.rangeCount) {
            return function () {};
          }

          var active = document.activeElement;
          var ranges = [];

          for (var i = 0; i < selection.rangeCount; i++) {
            ranges.push(selection.getRangeAt(i));
          }

          switch (active.tagName.toUpperCase()) {
            // .toUpperCase handles XHTML
            case 'INPUT':
            case 'TEXTAREA':
              active.blur();
              break;

            default:
              active = null;
              break;
          }

          selection.removeAllRanges();
          return function () {
            selection.type === 'Caret' && selection.removeAllRanges();

            if (!selection.rangeCount) {
              ranges.forEach(function (range) {
                selection.addRange(range);
              });
            }

            active && active.focus();
          };
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=bb446063f0d80122f2d4ba080c1481289d03ba43.js.map