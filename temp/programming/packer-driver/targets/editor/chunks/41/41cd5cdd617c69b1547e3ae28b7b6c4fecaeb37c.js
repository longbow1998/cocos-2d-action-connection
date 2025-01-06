System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var Symbol = require('./_Symbol');
        /** Used for built-in method references. */


        var objectProto = Object.prototype;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */

        var nativeObjectToString = objectProto.toString;
        /** Built-in value references. */

        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */

        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {}

          var result = nativeObjectToString.call(value);

          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }

          return result;
        }

        module.exports = getRawTag; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_Symbol': _req
      }));
    }
  };
});
//# sourceMappingURL=41cd5cdd617c69b1547e3ae28b7b6c4fecaeb37c.js.map