System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var root = require('./_root'),
            stubFalse = require('./stubFalse');
        /** Detect free variable `exports`. */


        var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
        /** Detect free variable `module`. */

        var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
        /** Detect the popular CommonJS extension `module.exports`. */

        var moduleExports = freeModule && freeModule.exports === freeExports;
        /** Built-in value references. */

        var Buffer = moduleExports ? root.Buffer : undefined;
        /* Built-in method references for those with the same name as other `lodash` methods. */

        var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
        /**
         * Checks if `value` is a buffer.
         *
         * @static
         * @memberOf _
         * @since 4.3.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
         * @example
         *
         * _.isBuffer(new Buffer(2));
         * // => true
         *
         * _.isBuffer(new Uint8Array(2));
         * // => false
         */

        var isBuffer = nativeIsBuffer || stubFalse;
        module.exports = isBuffer; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_root': _req,
        './stubFalse': _req0
      }));
    }
  };
});
//# sourceMappingURL=58d38d6e648466c84cb97c0dbd5571d1f8fa41bd.js.map