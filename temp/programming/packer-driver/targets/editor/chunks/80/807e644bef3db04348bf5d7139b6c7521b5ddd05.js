System.register(["__unresolved_0", "string-convert/camel2hyphen"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_stringConvertCamel2hyphen) {
      _req = _stringConvertCamel2hyphen.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        var camel2hyphen = require('string-convert/camel2hyphen');

        var isDimension = function (feature) {
          var re = /[height|width]$/;
          return re.test(feature);
        };

        var obj2mq = function (obj) {
          var mq = '';
          var features = Object.keys(obj);
          features.forEach(function (feature, index) {
            var value = obj[feature];
            feature = camel2hyphen(feature); // Add px to dimension features

            if (isDimension(feature) && typeof value === 'number') {
              value = value + 'px';
            }

            if (value === true) {
              mq += feature;
            } else if (value === false) {
              mq += 'not ' + feature;
            } else {
              mq += '(' + feature + ': ' + value + ')';
            }

            if (index < features.length - 1) {
              mq += ' and ';
            }
          });
          return mq;
        };

        var json2mq = function (query) {
          var mq = '';

          if (typeof query === 'string') {
            return query;
          } // Handling array of media queries


          if (query instanceof Array) {
            query.forEach(function (q, index) {
              mq += obj2mq(q);

              if (index < query.length - 1) {
                mq += ', ';
              }
            });
            return mq;
          } // Handling single media query


          return obj2mq(query);
        };

        module.exports = json2mq; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        'string-convert/camel2hyphen': _req
      }));
    }
  };
});
//# sourceMappingURL=807e644bef3db04348bf5d7139b6c7521b5ddd05.js.map