System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _findExpandedKeys, _getExpandRange, __cjsMetaURL;

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
        exports.findExpandedKeys = findExpandedKeys;
        exports.getExpandRange = getExpandRange;

        function findExpandedKeys() {
          var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var prevLen = prev.length;
          var nextLen = next.length;

          if (Math.abs(prevLen - nextLen) !== 1) {
            return {
              add: false,
              key: null
            };
          }

          function find(shorter, longer) {
            var cache = new Map();
            shorter.forEach(function (key) {
              cache.set(key, true);
            });
            var keys = longer.filter(function (key) {
              return !cache.has(key);
            });
            return keys.length === 1 ? keys[0] : null;
          }

          if (prevLen < nextLen) {
            return {
              add: true,
              key: find(prev, next)
            };
          }

          return {
            add: false,
            key: find(next, prev)
          };
        }

        function getExpandRange(shorter, longer, key) {
          var shorterStartIndex = shorter.findIndex(function (data) {
            return data.key === key;
          });
          var shorterEndNode = shorter[shorterStartIndex + 1];
          var longerStartIndex = longer.findIndex(function (data) {
            return data.key === key;
          });

          if (shorterEndNode) {
            var longerEndIndex = longer.findIndex(function (data) {
              return data.key === shorterEndNode.key;
            });
            return longer.slice(longerStartIndex + 1, longerEndIndex);
          }

          return longer.slice(longerStartIndex + 1);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _findExpandedKeys = module.exports.findExpandedKeys;
        _getExpandRange = module.exports.getExpandRange;
      }, {});
    }
  };
});
//# sourceMappingURL=a63bcca3985551475c902fad431e2eaec3194226.js.map