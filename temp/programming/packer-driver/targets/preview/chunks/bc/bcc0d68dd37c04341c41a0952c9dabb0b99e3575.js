System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _fixControlledValue, _hasAddon, _hasPrefixSuffix, _resolveOnChange, _triggerFocus, __cjsMetaURL;

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
        exports.fixControlledValue = fixControlledValue;
        exports.hasAddon = hasAddon;
        exports.hasPrefixSuffix = hasPrefixSuffix;
        exports.resolveOnChange = resolveOnChange;
        exports.triggerFocus = triggerFocus;

        function hasAddon(props) {
          return !!(props.addonBefore || props.addonAfter);
        }

        function hasPrefixSuffix(props) {
          return !!(props.prefix || props.suffix || props.allowClear);
        }

        function resolveOnChange(target, e, onChange, targetValue) {
          if (!onChange) {
            return;
          }

          var event = e;

          if (e.type === 'click') {
            // Clone a new target for event.
            // Avoid the following usage, the setQuery method gets the original value.
            //
            // const [query, setQuery] = React.useState('');
            // <Input
            //   allowClear
            //   value={query}
            //   onChange={(e)=> {
            //     setQuery((prevStatus) => e.target.value);
            //   }}
            // />
            var currentTarget = target.cloneNode(true); // click clear icon

            event = Object.create(e, {
              target: {
                value: currentTarget
              },
              currentTarget: {
                value: currentTarget
              }
            });
            currentTarget.value = '';
            onChange(event);
            return;
          } // Trigger by composition event, this means we need force change the input value


          if (targetValue !== undefined) {
            event = Object.create(e, {
              target: {
                value: target
              },
              currentTarget: {
                value: target
              }
            });
            target.value = targetValue;
            onChange(event);
            return;
          }

          onChange(event);
        }

        function triggerFocus(element, option) {
          if (!element) return;
          element.focus(option); // Selection content

          var _ref = option || {},
              cursor = _ref.cursor;

          if (cursor) {
            var len = element.value.length;

            switch (cursor) {
              case 'start':
                element.setSelectionRange(0, 0);
                break;

              case 'end':
                element.setSelectionRange(len, len);
                break;

              default:
                element.setSelectionRange(0, len);
            }
          }
        }

        function fixControlledValue(value) {
          if (typeof value === 'undefined' || value === null) {
            return '';
          }

          return String(value);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _fixControlledValue = module.exports.fixControlledValue;
        _hasAddon = module.exports.hasAddon;
        _hasPrefixSuffix = module.exports.hasPrefixSuffix;
        _resolveOnChange = module.exports.resolveOnChange;
        _triggerFocus = module.exports.triggerFocus;
      }, {});
    }
  };
});
//# sourceMappingURL=bcc0d68dd37c04341c41a0952c9dabb0b99e3575.js.map