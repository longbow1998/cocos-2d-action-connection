System.register(["__unresolved_0", "compute-scroll-into-view"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_computeScrollIntoView2) {
      _req = _computeScrollIntoView2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        exports.__esModule = true;
        exports["default"] = void 0;

        var _computeScrollIntoView = _interopRequireDefault(require("compute-scroll-into-view"));

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }

        function isOptionsObject(options) {
          return options === Object(options) && Object.keys(options).length !== 0;
        }

        function defaultBehavior(actions, behavior) {
          if (behavior === void 0) {
            behavior = 'auto';
          }

          var canSmoothScroll = ('scrollBehavior' in document.body.style);
          actions.forEach(function (_ref) {
            var el = _ref.el,
                top = _ref.top,
                left = _ref.left;

            if (el.scroll && canSmoothScroll) {
              el.scroll({
                top: top,
                left: left,
                behavior: behavior
              });
            } else {
              el.scrollTop = top;
              el.scrollLeft = left;
            }
          });
        }

        function getOptions(options) {
          if (options === false) {
            return {
              block: 'end',
              inline: 'nearest'
            };
          }

          if (isOptionsObject(options)) {
            return options;
          }

          return {
            block: 'start',
            inline: 'nearest'
          };
        }

        function scrollIntoView(target, options) {
          var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);

          if (isOptionsObject(options) && typeof options.behavior === 'function') {
            return options.behavior(isTargetAttached ? (0, _computeScrollIntoView["default"])(target, options) : []);
          }

          if (!isTargetAttached) {
            return;
          }

          var computeOptions = getOptions(options);
          return defaultBehavior((0, _computeScrollIntoView["default"])(target, computeOptions), computeOptions.behavior);
        }

        var _default = scrollIntoView;
        exports["default"] = _default;
        module.exports = exports.default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        'compute-scroll-into-view': _req
      }));
    }
  };
});
//# sourceMappingURL=1b5270807c3a99c54c1653f49a9feb4668d23adf.js.map