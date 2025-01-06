System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getFieldId, _toArray, __cjsMetaURL;

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
        exports.getFieldId = getFieldId;
        exports.toArray = toArray; // form item name black list.  in form ,you can use form.id get the form item element.
        // use object hasOwnProperty will get better performance if black list is longer.

        var formItemNameBlackList = ['parentNode']; // default form item id prefix.

        var defaultItemNamePrefixCls = 'form_item';

        function toArray(candidate) {
          if (candidate === undefined || candidate === false) return [];
          return Array.isArray(candidate) ? candidate : [candidate];
        }

        function getFieldId(namePath, formName) {
          if (!namePath.length) return undefined;
          var mergedId = namePath.join('_');

          if (formName) {
            return "".concat(formName, "_").concat(mergedId);
          }

          var isIllegalName = formItemNameBlackList.includes(mergedId);
          return isIllegalName ? "".concat(defaultItemNamePrefixCls, "_").concat(mergedId) : mergedId;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getFieldId = module.exports.getFieldId;
        _toArray = module.exports.toArray;
      }, {});
    }
  };
});
//# sourceMappingURL=0ca46071009dac7dccb34306962f2d27da2cb827.js.map