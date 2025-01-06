System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getCellFixedInfo, __cjsMetaURL;

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
        exports.getCellFixedInfo = getCellFixedInfo;

        function getCellFixedInfo(colStart, colEnd, columns, stickyOffsets, direction) {
          var startColumn = columns[colStart] || {};
          var endColumn = columns[colEnd] || {};
          var fixLeft;
          var fixRight;

          if (startColumn.fixed === 'left') {
            fixLeft = stickyOffsets.left[colStart];
          } else if (endColumn.fixed === 'right') {
            fixRight = stickyOffsets.right[colEnd];
          }

          var lastFixLeft = false;
          var firstFixRight = false;
          var lastFixRight = false;
          var firstFixLeft = false;
          var nextColumn = columns[colEnd + 1];
          var prevColumn = columns[colStart - 1];

          if (direction === 'rtl') {
            if (fixLeft !== undefined) {
              var prevFixLeft = prevColumn && prevColumn.fixed === 'left';
              firstFixLeft = !prevFixLeft;
            } else if (fixRight !== undefined) {
              var nextFixRight = nextColumn && nextColumn.fixed === 'right';
              lastFixRight = !nextFixRight;
            }
          } else if (fixLeft !== undefined) {
            var nextFixLeft = nextColumn && nextColumn.fixed === 'left';
            lastFixLeft = !nextFixLeft;
          } else if (fixRight !== undefined) {
            var prevFixRight = prevColumn && prevColumn.fixed === 'right';
            firstFixRight = !prevFixRight;
          }

          return {
            fixLeft: fixLeft,
            fixRight: fixRight,
            lastFixLeft: lastFixLeft,
            firstFixRight: firstFixRight,
            lastFixRight: lastFixRight,
            firstFixLeft: firstFixLeft,
            isSticky: stickyOffsets.isSticky
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getCellFixedInfo = module.exports.getCellFixedInfo;
      }, {});
    }
  };
});
//# sourceMappingURL=61c80b2a100599214f1540eb90569f108d2719cc.js.map