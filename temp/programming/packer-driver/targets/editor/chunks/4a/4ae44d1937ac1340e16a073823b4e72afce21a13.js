System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
        exports.default = upload;

        function getError(option, xhr) {
          var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
          var err = new Error(msg);
          err.status = xhr.status;
          err.method = option.method;
          err.url = option.action;
          return err;
        }

        function getBody(xhr) {
          var text = xhr.responseText || xhr.response;

          if (!text) {
            return text;
          }

          try {
            return JSON.parse(text);
          } catch (e) {
            return text;
          }
        }

        function upload(option) {
          // eslint-disable-next-line no-undef
          var xhr = new XMLHttpRequest();

          if (option.onProgress && xhr.upload) {
            xhr.upload.onprogress = function progress(e) {
              if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
              }

              option.onProgress(e);
            };
          } // eslint-disable-next-line no-undef


          var formData = new FormData();

          if (option.data) {
            Object.keys(option.data).forEach(function (key) {
              var value = option.data[key]; // support key-value array data

              if (Array.isArray(value)) {
                value.forEach(function (item) {
                  // { list: [ 11, 22 ] }
                  // formData.append('list[]', 11);
                  formData.append("".concat(key, "[]"), item);
                });
                return;
              }

              formData.append(key, value);
            });
          } // eslint-disable-next-line no-undef


          if (option.file instanceof Blob) {
            formData.append(option.filename, option.file, option.file.name);
          } else {
            formData.append(option.filename, option.file);
          }

          xhr.onerror = function error(e) {
            option.onError(e);
          };

          xhr.onload = function onload() {
            // allow success when 2xx status
            // see https://github.com/react-component/upload/issues/34
            if (xhr.status < 200 || xhr.status >= 300) {
              return option.onError(getError(option, xhr), getBody(xhr));
            }

            return option.onSuccess(getBody(xhr), xhr);
          };

          xhr.open(option.method, option.action, true); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

          if (option.withCredentials && 'withCredentials' in xhr) {
            xhr.withCredentials = true;
          }

          var headers = option.headers || {}; // when set headers['X-Requested-With'] = null , can close default XHR header
          // see https://github.com/react-component/upload/issues/33

          if (headers['X-Requested-With'] !== null) {
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          }

          Object.keys(headers).forEach(function (h) {
            if (headers[h] !== null) {
              xhr.setRequestHeader(h, headers[h]);
            }
          });
          xhr.send(formData);
          return {
            abort: function abort() {
              xhr.abort();
            }
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, {});
    }
  };
});
//# sourceMappingURL=4ae44d1937ac1340e16a073823b4e72afce21a13.js.map