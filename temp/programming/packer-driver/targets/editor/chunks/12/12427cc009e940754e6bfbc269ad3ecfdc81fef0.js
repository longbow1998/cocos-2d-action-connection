System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, ___esModule, _get, _getClientSize, _getDocSize, _getOffset, _getOuterHeight, _getOuterWidth, _getScroll, _set, __cjsMetaURL;

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
        exports.get = get;
        exports.getClientSize = getClientSize;
        exports.getDocSize = getDocSize;
        exports.getOffset = getOffset;
        exports.getOuterHeight = getOuterHeight;
        exports.getOuterWidth = getOuterWidth;
        exports.getScroll = getScroll;
        exports.set = set;
        /* eslint-disable no-nested-ternary */

        var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
        var removePixel = {
          left: true,
          top: true
        };
        var floatMap = {
          cssFloat: 1,
          styleFloat: 1,
          float: 1
        };

        function getComputedStyle(node) {
          return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
        }

        function getStyleValue(node, type, value) {
          type = type.toLowerCase();

          if (value === 'auto') {
            if (type === 'height') {
              return node.offsetHeight;
            }

            if (type === 'width') {
              return node.offsetWidth;
            }
          }

          if (!(type in removePixel)) {
            removePixel[type] = PIXEL_PATTERN.test(type);
          }

          return removePixel[type] ? parseFloat(value) || 0 : value;
        }

        function get(node, name) {
          var length = arguments.length;
          var style = getComputedStyle(node);
          name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;
          return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
        }

        function set(node, name, value) {
          var length = arguments.length;
          name = floatMap[name] ? 'cssFloat' in node.style ? 'cssFloat' : 'styleFloat' : name;

          if (length === 3) {
            if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
              value = "".concat(value, "px");
            }

            node.style[name] = value; // Number

            return value;
          }

          for (var x in name) {
            if (name.hasOwnProperty(x)) {
              set(node, x, name[x]);
            }
          }

          return getComputedStyle(node);
        }

        function getOuterWidth(el) {
          if (el === document.body) {
            return document.documentElement.clientWidth;
          }

          return el.offsetWidth;
        }

        function getOuterHeight(el) {
          if (el === document.body) {
            return window.innerHeight || document.documentElement.clientHeight;
          }

          return el.offsetHeight;
        }

        function getDocSize() {
          var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
          var height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
          return {
            width: width,
            height: height
          };
        }

        function getClientSize() {
          var width = document.documentElement.clientWidth;
          var height = window.innerHeight || document.documentElement.clientHeight;
          return {
            width: width,
            height: height
          };
        }

        function getScroll() {
          return {
            scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
            scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
          };
        }

        function getOffset(node) {
          var box = node.getBoundingClientRect();
          var docElem = document.documentElement; // < ie8 不支持 win.pageXOffset, 则使用 docElem.scrollLeft

          return {
            left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
            top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
          };
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _get = module.exports.get;
        _getClientSize = module.exports.getClientSize;
        _getDocSize = module.exports.getDocSize;
        _getOffset = module.exports.getOffset;
        _getOuterHeight = module.exports.getOuterHeight;
        _getOuterWidth = module.exports.getOuterWidth;
        _getScroll = module.exports.getScroll;
        _set = module.exports.set;
      }, {});
    }
  };
});
//# sourceMappingURL=12427cc009e940754e6bfbc269ad3ecfdc81fef0.js.map