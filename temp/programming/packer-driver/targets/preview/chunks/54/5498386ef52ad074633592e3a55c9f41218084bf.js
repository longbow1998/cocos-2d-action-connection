System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getColumnKey, _getColumnPos, _renderColumnTitle, _safeColumnTitle, __cjsMetaURL;

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
        exports.getColumnKey = getColumnKey;
        exports.getColumnPos = getColumnPos;
        exports.renderColumnTitle = renderColumnTitle;
        exports.safeColumnTitle = safeColumnTitle;

        function getColumnKey(column, defaultKey) {
          if ('key' in column && column.key !== undefined && column.key !== null) {
            return column.key;
          }

          if (column.dataIndex) {
            return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
          }

          return defaultKey;
        }

        function getColumnPos(index, pos) {
          return pos ? "".concat(pos, "-").concat(index) : "".concat(index);
        }

        function renderColumnTitle(title, props) {
          if (typeof title === 'function') {
            return title(props);
          }

          return title;
        }
        /**
         * Safe get column title
         *
         * Should filter [object Object]
         *
         * @param title
         * @returns
         */


        function safeColumnTitle(title, props) {
          var res = renderColumnTitle(title, props);
          if (Object.prototype.toString.call(res) === '[object Object]') return '';
          return res;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getColumnKey = module.exports.getColumnKey;
        _getColumnPos = module.exports.getColumnPos;
        _renderColumnTitle = module.exports.renderColumnTitle;
        _safeColumnTitle = module.exports.safeColumnTitle;
      }, {});
    }
  };
});
//# sourceMappingURL=5498386ef52ad074633592e3a55c9f41218084bf.js.map