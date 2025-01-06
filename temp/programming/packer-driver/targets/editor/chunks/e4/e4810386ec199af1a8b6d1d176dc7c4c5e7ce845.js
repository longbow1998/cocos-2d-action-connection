System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "rc-util/lib/Dom/canUseDom"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _animationEndName, _getTransitionName, _getVendorPrefixedEventName, _getVendorPrefixes, _transitionEndName, _supportTransition, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req1 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.animationEndName = void 0;
        exports.getTransitionName = getTransitionName;
        exports.getVendorPrefixedEventName = getVendorPrefixedEventName;
        exports.getVendorPrefixes = getVendorPrefixes;
        exports.transitionEndName = exports.supportTransition = void 0;

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom")); // ================= Transition =================
        // Event wrapper. Copy from react source code


        function makePrefixMap(styleProp, eventName) {
          var prefixes = {};
          prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
          prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
          prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
          prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
          prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
          return prefixes;
        }

        function getVendorPrefixes(domSupport, win) {
          var prefixes = {
            animationend: makePrefixMap('Animation', 'AnimationEnd'),
            transitionend: makePrefixMap('Transition', 'TransitionEnd')
          };

          if (domSupport) {
            if (!('AnimationEvent' in win)) {
              delete prefixes.animationend.animation;
            }

            if (!('TransitionEvent' in win)) {
              delete prefixes.transitionend.transition;
            }
          }

          return prefixes;
        }

        var vendorPrefixes = getVendorPrefixes((0, _canUseDom.default)(), typeof window !== 'undefined' ? window : {});
        var style = {};

        if ((0, _canUseDom.default)()) {
          var _document$createEleme = document.createElement('div');

          style = _document$createEleme.style;
        }

        var prefixedEventNames = {};

        function getVendorPrefixedEventName(eventName) {
          if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
          }

          var prefixMap = vendorPrefixes[eventName];

          if (prefixMap) {
            var stylePropList = Object.keys(prefixMap);
            var len = stylePropList.length;

            for (var i = 0; i < len; i += 1) {
              var styleProp = stylePropList[i];

              if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
              }
            }
          }

          return '';
        }

        var internalAnimationEndName = getVendorPrefixedEventName('animationend');
        var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
        var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
        exports.supportTransition = supportTransition;
        var animationEndName = internalAnimationEndName || 'animationend';
        exports.animationEndName = animationEndName;
        var transitionEndName = internalTransitionEndName || 'transitionend';
        exports.transitionEndName = transitionEndName;

        function getTransitionName(transitionName, transitionType) {
          if (!transitionName) return null;

          if ((0, _typeof2.default)(transitionName) === 'object') {
            var type = transitionType.replace(/-\w/g, function (match) {
              return match[1].toUpperCase();
            });
            return transitionName[type];
          }

          return "".concat(transitionName, "-").concat(transitionType);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _animationEndName = module.exports.animationEndName;
        _getTransitionName = module.exports.getTransitionName;
        _getVendorPrefixedEventName = module.exports.getVendorPrefixedEventName;
        _getVendorPrefixes = module.exports.getVendorPrefixes;
        _transitionEndName = module.exports.transitionEndName;
        _supportTransition = module.exports.supportTransition;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'rc-util/lib/Dom/canUseDom': _req1
      }));
    }
  };
});
//# sourceMappingURL=e4810386ec199af1a8b6d1d176dc7c4c5e7ce845.js.map