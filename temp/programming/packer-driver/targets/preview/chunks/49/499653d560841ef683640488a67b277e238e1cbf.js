System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req3 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req4 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req5 = _unresolved_8.__cjsMetaURL;
    }, function (_unresolved_9) {
      _req6 = _unresolved_9.__cjsMetaURL;
    }, function (_unresolved_10) {
      _req7 = _unresolved_10.__cjsMetaURL;
    }, function (_unresolved_11) {
      _req8 = _unresolved_11.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);

          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = {
              enumerable: true,
              get: function get() {
                return m[k];
              }
            };
          }

          Object.defineProperty(o, k2, desc);
        } : function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        });

        var __exportStar = this && this.__exportStar || function (m, exports) {
          for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var index_1 = require("./index");

        __exportStar(require("./index"), exports);

        __exportStar(require("./css-color-names"), exports);

        __exportStar(require("./readability"), exports);

        __exportStar(require("./to-ms-filter"), exports);

        __exportStar(require("./from-ratio"), exports);

        __exportStar(require("./format-input"), exports);

        __exportStar(require("./random"), exports);

        __exportStar(require("./interfaces"), exports);

        __exportStar(require("./conversion"), exports); // kept for backwards compatability with v1


        exports.default = index_1.tinycolor; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        './index': _req,
        './index': _req0,
        './css-color-names': _req1,
        './readability': _req2,
        './to-ms-filter': _req3,
        './from-ratio': _req4,
        './format-input': _req5,
        './random': _req6,
        './interfaces': _req7,
        './conversion': _req8
      }));
    }
  };
});
//# sourceMappingURL=499653d560841ef683640488a67b277e238e1cbf.js.map