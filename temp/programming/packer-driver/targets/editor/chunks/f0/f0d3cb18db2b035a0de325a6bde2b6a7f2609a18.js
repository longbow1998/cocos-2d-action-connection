System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        /* global define */
        (function () {
          'use strict';

          var hasOwn = {}.hasOwnProperty;
          var nativeCodeString = '[native code]';

          function classNames() {
            var classes = [];

            for (var i = 0; i < arguments.length; i++) {
              var arg = arguments[i];
              if (!arg) continue;
              var argType = typeof arg;

              if (argType === 'string' || argType === 'number') {
                classes.push(arg);
              } else if (Array.isArray(arg)) {
                if (arg.length) {
                  var inner = classNames.apply(null, arg);

                  if (inner) {
                    classes.push(inner);
                  }
                }
              } else if (argType === 'object') {
                if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                  classes.push(arg.toString());
                  continue;
                }

                for (var key in arg) {
                  if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                  }
                }
              }
            }

            return classes.join(' ');
          }

          if (typeof module !== 'undefined' && module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
          } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
            // register as 'classnames', consistent with npm package name
            define('classnames', [], function () {
              return classNames;
            });
          } else {
            window.classNames = classNames;
          }
        })(); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=f0d3cb18db2b035a0de325a6bde2b6a7f2609a18.js.map