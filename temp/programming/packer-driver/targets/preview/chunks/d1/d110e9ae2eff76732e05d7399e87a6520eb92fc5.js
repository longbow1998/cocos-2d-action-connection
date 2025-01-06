System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _getPlaceholder, _getRangePlaceholder, _transPlacement2DropdownAlign, __cjsMetaURL;

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
        exports.getPlaceholder = getPlaceholder;
        exports.getRangePlaceholder = getRangePlaceholder;
        exports.transPlacement2DropdownAlign = transPlacement2DropdownAlign;

        function getPlaceholder(picker, locale, customizePlaceholder) {
          if (customizePlaceholder !== undefined) {
            return customizePlaceholder;
          }

          if (picker === 'year' && locale.lang.yearPlaceholder) {
            return locale.lang.yearPlaceholder;
          }

          if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
            return locale.lang.quarterPlaceholder;
          }

          if (picker === 'month' && locale.lang.monthPlaceholder) {
            return locale.lang.monthPlaceholder;
          }

          if (picker === 'week' && locale.lang.weekPlaceholder) {
            return locale.lang.weekPlaceholder;
          }

          if (picker === 'time' && locale.timePickerLocale.placeholder) {
            return locale.timePickerLocale.placeholder;
          }

          return locale.lang.placeholder;
        }

        function getRangePlaceholder(picker, locale, customizePlaceholder) {
          if (customizePlaceholder !== undefined) {
            return customizePlaceholder;
          }

          if (picker === 'year' && locale.lang.yearPlaceholder) {
            return locale.lang.rangeYearPlaceholder;
          }

          if (picker === 'quarter' && locale.lang.quarterPlaceholder) {
            return locale.lang.rangeQuarterPlaceholder;
          }

          if (picker === 'month' && locale.lang.monthPlaceholder) {
            return locale.lang.rangeMonthPlaceholder;
          }

          if (picker === 'week' && locale.lang.weekPlaceholder) {
            return locale.lang.rangeWeekPlaceholder;
          }

          if (picker === 'time' && locale.timePickerLocale.placeholder) {
            return locale.timePickerLocale.rangePlaceholder;
          }

          return locale.lang.rangePlaceholder;
        }

        function transPlacement2DropdownAlign(direction, placement) {
          var overflow = {
            adjustX: 1,
            adjustY: 1
          };

          switch (placement) {
            case 'bottomLeft':
              {
                return {
                  points: ['tl', 'bl'],
                  offset: [0, 4],
                  overflow: overflow
                };
              }

            case 'bottomRight':
              {
                return {
                  points: ['tr', 'br'],
                  offset: [0, 4],
                  overflow: overflow
                };
              }

            case 'topLeft':
              {
                return {
                  points: ['bl', 'tl'],
                  offset: [0, -4],
                  overflow: overflow
                };
              }

            case 'topRight':
              {
                return {
                  points: ['br', 'tr'],
                  offset: [0, -4],
                  overflow: overflow
                };
              }

            default:
              {
                return {
                  points: direction === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
                  offset: [0, 4],
                  overflow: overflow
                };
              }
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getPlaceholder = module.exports.getPlaceholder;
        _getRangePlaceholder = module.exports.getRangePlaceholder;
        _transPlacement2DropdownAlign = module.exports.transPlacement2DropdownAlign;
      }, {});
    }
  };
});
//# sourceMappingURL=d110e9ae2eff76732e05d7399e87a6520eb92fc5.js.map