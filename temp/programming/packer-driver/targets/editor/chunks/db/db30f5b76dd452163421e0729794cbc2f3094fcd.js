System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, __cjsMetaURL;

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
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var DataView = require('./_DataView'),
            Map = require('./_Map'),
            Promise = require('./_Promise'),
            Set = require('./_Set'),
            WeakMap = require('./_WeakMap'),
            baseGetTag = require('./_baseGetTag'),
            toSource = require('./_toSource');
        /** `Object#toString` result references. */


        var mapTag = '[object Map]',
            objectTag = '[object Object]',
            promiseTag = '[object Promise]',
            setTag = '[object Set]',
            weakMapTag = '[object WeakMap]';
        var dataViewTag = '[object DataView]';
        /** Used to detect maps, sets, and weakmaps. */

        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */

        var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function (value) {
            var result = baseGetTag(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString = Ctor ? toSource(Ctor) : '';

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;

                case mapCtorString:
                  return mapTag;

                case promiseCtorString:
                  return promiseTag;

                case setCtorString:
                  return setTag;

                case weakMapCtorString:
                  return weakMapTag;
              }
            }

            return result;
          };
        }

        module.exports = getTag; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './_DataView': _req,
        './_Map': _req0,
        './_Promise': _req1,
        './_Set': _req2,
        './_WeakMap': _req3,
        './_baseGetTag': _req4,
        './_toSource': _req5
      }));
    }
  };
});
//# sourceMappingURL=db30f5b76dd452163421e0729794cbc2f3094fcd.js.map