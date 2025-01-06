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
        exports.default = void 0;

        function loopFiles(item, callback) {
          var dirReader = item.createReader();
          var fileList = [];

          function sequence() {
            dirReader.readEntries(function (entries) {
              var entryList = Array.prototype.slice.apply(entries);
              fileList = fileList.concat(entryList); // Check if all the file has been viewed

              var isFinished = !entryList.length;

              if (isFinished) {
                callback(fileList);
              } else {
                sequence();
              }
            });
          }

          sequence();
        }

        var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          var _traverseFileTree = function _traverseFileTree(item, path) {
            // eslint-disable-next-line no-param-reassign
            item.path = path || '';

            if (item.isFile) {
              item.file(function (file) {
                if (isAccepted(file)) {
                  // https://github.com/ant-design/ant-design/issues/16426
                  if (item.fullPath && !file.webkitRelativePath) {
                    Object.defineProperties(file, {
                      webkitRelativePath: {
                        writable: true
                      }
                    }); // eslint-disable-next-line no-param-reassign

                    file.webkitRelativePath = item.fullPath.replace(/^\//, '');
                    Object.defineProperties(file, {
                      webkitRelativePath: {
                        writable: false
                      }
                    });
                  }

                  callback([file]);
                }
              });
            } else if (item.isDirectory) {
              loopFiles(item, function (entries) {
                entries.forEach(function (entryItem) {
                  _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
                });
              });
            }
          };

          files.forEach(function (file) {
            _traverseFileTree(file.webkitGetAsEntry());
          });
        };

        var _default = traverseFileTree;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=3d76728d8d6b1cf0ade0e1654cae160e9f2f477b.js.map