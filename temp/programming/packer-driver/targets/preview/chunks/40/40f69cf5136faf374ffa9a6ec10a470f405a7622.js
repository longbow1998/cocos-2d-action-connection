System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-util/lib/Dom/css", "rc-util/lib/hooks/useMergedState", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req5 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req4 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req6 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibDomCss) {
      _req9 = _rcUtilLibDomCss.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMergedState) {
      _req10 = _rcUtilLibHooksUseMergedState.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req11 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req12 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _css = require("rc-util/lib/Dom/css");

        var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

        var _Preview = _interopRequireDefault(require("./Preview"));

        var _PreviewGroup = _interopRequireWildcard(require("./PreviewGroup"));

        var _excluded = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName", "crossOrigin", "decoding", "loading", "referrerPolicy", "sizes", "srcSet", "useMap", "draggable"],
            _excluded2 = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "icons", "scaleStep"];

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var uuid = 0;

        var ImageInternal = function ImageInternal(_ref) {
          var _imgCommonProps$style;

          var imgSrc = _ref.src,
              alt = _ref.alt,
              onInitialPreviewClose = _ref.onPreviewClose,
              _ref$prefixCls = _ref.prefixCls,
              prefixCls = _ref$prefixCls === void 0 ? 'rc-image' : _ref$prefixCls,
              _ref$previewPrefixCls = _ref.previewPrefixCls,
              previewPrefixCls = _ref$previewPrefixCls === void 0 ? "".concat(prefixCls, "-preview") : _ref$previewPrefixCls,
              placeholder = _ref.placeholder,
              fallback = _ref.fallback,
              width = _ref.width,
              height = _ref.height,
              style = _ref.style,
              _ref$preview = _ref.preview,
              preview = _ref$preview === void 0 ? true : _ref$preview,
              className = _ref.className,
              onClick = _ref.onClick,
              onImageError = _ref.onError,
              wrapperClassName = _ref.wrapperClassName,
              wrapperStyle = _ref.wrapperStyle,
              rootClassName = _ref.rootClassName,
              crossOrigin = _ref.crossOrigin,
              decoding = _ref.decoding,
              loading = _ref.loading,
              referrerPolicy = _ref.referrerPolicy,
              sizes = _ref.sizes,
              srcSet = _ref.srcSet,
              useMap = _ref.useMap,
              draggable = _ref.draggable,
              otherProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
          var isCustomPlaceholder = placeholder && placeholder !== true;

          var _ref2 = (0, _typeof2.default)(preview) === 'object' ? preview : {},
              previewSrc = _ref2.src,
              _ref2$visible = _ref2.visible,
              previewVisible = _ref2$visible === void 0 ? undefined : _ref2$visible,
              _ref2$onVisibleChange = _ref2.onVisibleChange,
              onPreviewVisibleChange = _ref2$onVisibleChange === void 0 ? onInitialPreviewClose : _ref2$onVisibleChange,
              _ref2$getContainer = _ref2.getContainer,
              getPreviewContainer = _ref2$getContainer === void 0 ? undefined : _ref2$getContainer,
              previewMask = _ref2.mask,
              maskClassName = _ref2.maskClassName,
              icons = _ref2.icons,
              scaleStep = _ref2.scaleStep,
              dialogProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);

          var src = previewSrc !== null && previewSrc !== void 0 ? previewSrc : imgSrc;
          var isControlled = previewVisible !== undefined;

          var _useMergedState = (0, _useMergedState3.default)(!!previewVisible, {
            value: previewVisible,
            onChange: onPreviewVisibleChange
          }),
              _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
              isShowPreview = _useMergedState2[0],
              setShowPreview = _useMergedState2[1];

          var _useState = (0, React.useState)(isCustomPlaceholder ? 'loading' : 'normal'),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              status = _useState2[0],
              setStatus = _useState2[1];

          var _useState3 = (0, React.useState)(null),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              mousePosition = _useState4[0],
              setMousePosition = _useState4[1];

          var isError = status === 'error';

          var _React$useContext = React.useContext(_PreviewGroup.context),
              isPreviewGroup = _React$useContext.isPreviewGroup,
              setCurrent = _React$useContext.setCurrent,
              setGroupShowPreview = _React$useContext.setShowPreview,
              setGroupMousePosition = _React$useContext.setMousePosition,
              registerImage = _React$useContext.registerImage;

          var _React$useState = React.useState(function () {
            uuid += 1;
            return uuid;
          }),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
              currentId = _React$useState2[0];

          var canPreview = !!preview;
          var isLoaded = React.useRef(false);

          var onLoad = function onLoad() {
            setStatus('normal');
          };

          var onError = function onError(e) {
            if (onImageError) {
              onImageError(e);
            }

            setStatus('error');
          };

          var onPreview = function onPreview(e) {
            if (!isControlled) {
              var _getOffset = (0, _css.getOffset)(e.target),
                  left = _getOffset.left,
                  top = _getOffset.top;

              if (isPreviewGroup) {
                setCurrent(currentId);
                setGroupMousePosition({
                  x: left,
                  y: top
                });
              } else {
                setMousePosition({
                  x: left,
                  y: top
                });
              }
            }

            if (isPreviewGroup) {
              setGroupShowPreview(true);
            } else {
              setShowPreview(true);
            }

            if (onClick) onClick(e);
          };

          var onPreviewClose = function onPreviewClose(e) {
            e.stopPropagation();
            setShowPreview(false);

            if (!isControlled) {
              setMousePosition(null);
            }
          };

          var getImgRef = function getImgRef(img) {
            isLoaded.current = false;
            if (status !== 'loading') return;

            if (img !== null && img !== void 0 && img.complete && (img.naturalWidth || img.naturalHeight)) {
              isLoaded.current = true;
              onLoad();
            }
          }; // Keep order start
          // Resolve https://github.com/ant-design/ant-design/issues/28881
          // Only need unRegister when component unMount


          React.useEffect(function () {
            var unRegister = registerImage(currentId, src);
            return unRegister;
          }, []);
          React.useEffect(function () {
            registerImage(currentId, src, canPreview);
          }, [src, canPreview]); // Keep order end

          React.useEffect(function () {
            if (isError) {
              setStatus('normal');
            }

            if (isCustomPlaceholder && !isLoaded.current) {
              setStatus('loading');
            }
          }, [imgSrc]);
          var wrapperClass = (0, _classnames.default)(prefixCls, wrapperClassName, rootClassName, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-error"), isError));
          var mergedSrc = isError && fallback ? fallback : src;
          var imgCommonProps = {
            crossOrigin: crossOrigin,
            decoding: decoding,
            draggable: draggable,
            loading: loading,
            referrerPolicy: referrerPolicy,
            sizes: sizes,
            srcSet: srcSet,
            useMap: useMap,
            alt: alt,
            className: (0, _classnames.default)("".concat(prefixCls, "-img"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-img-placeholder"), placeholder === true), className),
            style: (0, _objectSpread2.default)({
              height: height
            }, style)
          };
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, otherProps, {
            className: wrapperClass,
            onClick: canPreview ? onPreview : onClick,
            style: (0, _objectSpread2.default)({
              width: width,
              height: height
            }, wrapperStyle)
          }), /*#__PURE__*/React.createElement("img", (0, _extends2.default)({}, imgCommonProps, {
            ref: getImgRef
          }, isError && fallback ? {
            src: fallback
          } : {
            onLoad: onLoad,
            onError: onError,
            src: imgSrc
          }, {
            width: width,
            height: height
          })), status === 'loading' && /*#__PURE__*/React.createElement("div", {
            "aria-hidden": "true",
            className: "".concat(prefixCls, "-placeholder")
          }, placeholder), previewMask && canPreview && /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(prefixCls, "-mask"), maskClassName),
            style: {
              display: ((_imgCommonProps$style = imgCommonProps.style) === null || _imgCommonProps$style === void 0 ? void 0 : _imgCommonProps$style.display) === 'none' ? 'none' : undefined
            }
          }, previewMask)), !isPreviewGroup && canPreview && /*#__PURE__*/React.createElement(_Preview.default, (0, _extends2.default)({
            "aria-hidden": !isShowPreview,
            visible: isShowPreview,
            prefixCls: previewPrefixCls,
            onClose: onPreviewClose,
            mousePosition: mousePosition,
            src: mergedSrc,
            alt: alt,
            getContainer: getPreviewContainer,
            icons: icons,
            scaleStep: scaleStep,
            rootClassName: rootClassName
          }, dialogProps)));
        };

        ImageInternal.PreviewGroup = _PreviewGroup.default;
        ImageInternal.displayName = 'Image';
        var _default = ImageInternal;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/slicedToArray': _req4,
        '@babel/runtime/helpers/typeof': _req5,
        '@babel/runtime/helpers/objectWithoutProperties': _req6,
        'react': _req7,
        'classnames': _req8,
        'rc-util/lib/Dom/css': _req9,
        'rc-util/lib/hooks/useMergedState': _req10,
        './Preview': _req11,
        './PreviewGroup': _req12
      }));
    }
  };
});
//# sourceMappingURL=40f69cf5136faf374ffa9a6ec10a470f405a7622.js.map