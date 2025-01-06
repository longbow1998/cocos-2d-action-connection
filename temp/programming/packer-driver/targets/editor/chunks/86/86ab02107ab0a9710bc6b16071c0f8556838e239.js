System.register(["__unresolved_0", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _useTransitionDuration, _defaultProps, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_react2) {
      _req = _react2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.useTransitionDuration = exports.defaultProps = void 0;

        var _react = require("react");

        var defaultProps = {
          className: '',
          percent: 0,
          prefixCls: 'rc-progress',
          strokeColor: '#2db7f5',
          strokeLinecap: 'round',
          strokeWidth: 1,
          style: {},
          trailColor: '#D9D9D9',
          trailWidth: 1,
          gapPosition: 'bottom'
        };
        exports.defaultProps = defaultProps;

        var useTransitionDuration = function useTransitionDuration() {
          var pathsRef = (0, _react.useRef)([]);
          var prevTimeStamp = (0, _react.useRef)(null);
          (0, _react.useEffect)(function () {
            var now = Date.now();
            var updated = false;
            pathsRef.current.forEach(function (path) {
              if (!path) {
                return;
              }

              updated = true;
              var pathStyle = path.style;
              pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

              if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
                pathStyle.transitionDuration = '0s, 0s';
              }
            });

            if (updated) {
              prevTimeStamp.current = Date.now();
            }
          });
          return pathsRef.current;
        };

        exports.useTransitionDuration = useTransitionDuration; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _useTransitionDuration = module.exports.useTransitionDuration;
        _defaultProps = module.exports.defaultProps;
      }, () => ({
        'react': _req
      }));
    }
  };
});
//# sourceMappingURL=86ab02107ab0a9710bc6b16071c0f8556838e239.js.map