System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _VALUE_SPLIT, _SHOW_PARENT, _SHOW_CHILD, _fillFieldNames, _isLeaf, _scrollIntoParentView, _toPathKey, _toPathKeys, _toPathValueStr, __cjsMetaURL;

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
        exports.VALUE_SPLIT = exports.SHOW_PARENT = exports.SHOW_CHILD = void 0;
        exports.fillFieldNames = fillFieldNames;
        exports.isLeaf = isLeaf;
        exports.scrollIntoParentView = scrollIntoParentView;
        exports.toPathKey = toPathKey;
        exports.toPathKeys = toPathKeys;
        exports.toPathValueStr = toPathValueStr;
        var VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
        exports.VALUE_SPLIT = VALUE_SPLIT;
        var SHOW_PARENT = 'SHOW_PARENT';
        exports.SHOW_PARENT = SHOW_PARENT;
        var SHOW_CHILD = 'SHOW_CHILD';
        exports.SHOW_CHILD = SHOW_CHILD;

        function toPathKey(value) {
          return value.join(VALUE_SPLIT);
        }

        function toPathKeys(value) {
          return value.map(toPathKey);
        }

        function toPathValueStr(pathKey) {
          return pathKey.split(VALUE_SPLIT);
        }

        function fillFieldNames(fieldNames) {
          var _ref = fieldNames || {},
              label = _ref.label,
              value = _ref.value,
              children = _ref.children;

          var val = value || 'value';
          return {
            label: label || 'label',
            value: val,
            key: val,
            children: children || 'children'
          };
        }

        function isLeaf(option, fieldNames) {
          var _option$isLeaf, _option$fieldNames$ch;

          return (_option$isLeaf = option.isLeaf) !== null && _option$isLeaf !== void 0 ? _option$isLeaf : !((_option$fieldNames$ch = option[fieldNames.children]) === null || _option$fieldNames$ch === void 0 ? void 0 : _option$fieldNames$ch.length);
        }

        function scrollIntoParentView(element) {
          var parent = element.parentElement;

          if (!parent) {
            return;
          }

          var elementToParent = element.offsetTop - parent.offsetTop; // offsetParent may not be parent.

          if (elementToParent - parent.scrollTop < 0) {
            parent.scrollTo({
              top: elementToParent
            });
          } else if (elementToParent + element.offsetHeight - parent.scrollTop > parent.offsetHeight) {
            parent.scrollTo({
              top: elementToParent + element.offsetHeight - parent.offsetHeight
            });
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _VALUE_SPLIT = module.exports.VALUE_SPLIT;
        _SHOW_PARENT = module.exports.SHOW_PARENT;
        _SHOW_CHILD = module.exports.SHOW_CHILD;
        _fillFieldNames = module.exports.fillFieldNames;
        _isLeaf = module.exports.isLeaf;
        _scrollIntoParentView = module.exports.scrollIntoParentView;
        _toPathKey = module.exports.toPathKey;
        _toPathKeys = module.exports.toPathKeys;
        _toPathValueStr = module.exports.toPathValueStr;
      }, {});
    }
  };
});
//# sourceMappingURL=cd5c346a6b3e91e02904404e56731be7e8d88821.js.map