System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var isFunction = require('./isFunction'),
            isMasked = require('./_isMasked'),
            isObject = require('./isObject'),
            toSource = require('./_toSource');
        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */


        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
        /** Used to detect host constructors (Safari). */

        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        /** Used for built-in method references. */

        var funcProto = Function.prototype,
            objectProto = Object.prototype;
        /** Used to resolve the decompiled source of functions. */

        var funcToString = funcProto.toString;
        /** Used to check objects for own properties. */

        var hasOwnProperty = objectProto.hasOwnProperty;
        /** Used to detect if a method is native. */

        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */

        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }

          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        module.exports = baseIsNative; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './isFunction': _req,
        './_isMasked': _req0,
        './isObject': _req1,
        './_toSource': _req2
      }));
    }
  };
});
//# sourceMappingURL=df1960cba1620e00c01595cf72d639416a74de92.js.map