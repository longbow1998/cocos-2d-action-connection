System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _clearContainerCache, _injectCSS, _removeCSS, _updateCSS, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req0 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req1 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.clearContainerCache = clearContainerCache;
        exports.injectCSS = injectCSS;
        exports.removeCSS = removeCSS;
        exports.updateCSS = updateCSS;

        var _canUseDom = _interopRequireDefault(require("./canUseDom"));

        var _contains = _interopRequireDefault(require("./contains"));

        var APPEND_ORDER = 'data-rc-order';
        var MARK_KEY = "rc-util-key";
        var containerCache = new Map();

        function getMark() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              mark = _ref.mark;

          if (mark) {
            return mark.startsWith('data-') ? mark : "data-".concat(mark);
          }

          return MARK_KEY;
        }

        function getContainer(option) {
          if (option.attachTo) {
            return option.attachTo;
          }

          var head = document.querySelector('head');
          return head || document.body;
        }

        function getOrder(prepend) {
          if (prepend === 'queue') {
            return 'prependQueue';
          }

          return prepend ? 'prepend' : 'append';
        }
        /**
         * Find style which inject by rc-util
         */


        function findStyles(container) {
          return Array.from((containerCache.get(container) || container).children).filter(function (node) {
            return node.tagName === 'STYLE';
          });
        }

        function injectCSS(css) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (!(0, _canUseDom.default)()) {
            return null;
          }

          var csp = option.csp,
              prepend = option.prepend;
          var styleNode = document.createElement('style');
          styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));

          if (csp !== null && csp !== void 0 && csp.nonce) {
            styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
          }

          styleNode.innerHTML = css;
          var container = getContainer(option);
          var firstChild = container.firstChild;

          if (prepend) {
            // If is queue `prepend`, it will prepend first style and then append rest style
            if (prepend === 'queue') {
              var existStyle = findStyles(container).filter(function (node) {
                return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
              });

              if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
              }
            } // Use `insertBefore` as `prepend`


            container.insertBefore(styleNode, firstChild);
          } else {
            container.appendChild(styleNode);
          }

          return styleNode;
        }

        function findExistNode(key) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var container = getContainer(option);
          return findStyles(container).find(function (node) {
            return node.getAttribute(getMark(option)) === key;
          });
        }

        function removeCSS(key) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var existNode = findExistNode(key, option);

          if (existNode) {
            var container = getContainer(option);
            container.removeChild(existNode);
          }
        }
        /**
         * qiankun will inject `appendChild` to insert into other
         */


        function syncRealContainer(container, option) {
          var cachedRealContainer = containerCache.get(container); // Find real container when not cached or cached container removed

          if (!cachedRealContainer || !(0, _contains.default)(document, cachedRealContainer)) {
            var placeholderStyle = injectCSS('', option);
            var parentNode = placeholderStyle.parentNode;
            containerCache.set(container, parentNode);
            container.removeChild(placeholderStyle);
          }
        }
        /**
         * manually clear container cache to avoid global cache in unit testes
         */


        function clearContainerCache() {
          containerCache.clear();
        }

        function updateCSS(css, key) {
          var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var container = getContainer(option); // Sync real parent

          syncRealContainer(container, option);
          var existNode = findExistNode(key, option);

          if (existNode) {
            var _option$csp, _option$csp2;

            if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
              var _option$csp3;

              existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
            }

            if (existNode.innerHTML !== css) {
              existNode.innerHTML = css;
            }

            return existNode;
          }

          var newNode = injectCSS(css, option);
          newNode.setAttribute(getMark(option), key);
          return newNode;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _clearContainerCache = module.exports.clearContainerCache;
        _injectCSS = module.exports.injectCSS;
        _removeCSS = module.exports.removeCSS;
        _updateCSS = module.exports.updateCSS;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        './canUseDom': _req0,
        './contains': _req1
      }));
    }
  };
});
//# sourceMappingURL=53662a8adfff13421aa8f62b28b9b2784e3bab2f.js.map