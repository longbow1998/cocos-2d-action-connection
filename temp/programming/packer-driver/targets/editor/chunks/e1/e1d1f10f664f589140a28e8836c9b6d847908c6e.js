System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _allPromiseFinish, __cjsMetaURL;

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
        exports.allPromiseFinish = allPromiseFinish;

        function allPromiseFinish(promiseList) {
          var hasError = false;
          var count = promiseList.length;
          var results = [];

          if (!promiseList.length) {
            return Promise.resolve([]);
          }

          return new Promise(function (resolve, reject) {
            promiseList.forEach(function (promise, index) {
              promise.catch(function (e) {
                hasError = true;
                return e;
              }).then(function (result) {
                count -= 1;
                results[index] = result;

                if (count > 0) {
                  return;
                }

                if (hasError) {
                  reject(results);
                }

                resolve(results);
              });
            });
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _allPromiseFinish = module.exports.allPromiseFinish;
      }, {});
    }
  };
});
//# sourceMappingURL=e1d1f10f664f589140a28e8836c9b6d847908c6e.js.map