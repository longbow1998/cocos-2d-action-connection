System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-pagination/lib/locale/en_US", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcPaginationLibLocaleEn_US) {
      _req0 = _rcPaginationLibLocaleEn_US.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req3 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _en_US = _interopRequireDefault(require("rc-pagination/lib/locale/en_US"));

        var _en_US2 = _interopRequireDefault(require("../calendar/locale/en_US"));

        var _en_US3 = _interopRequireDefault(require("../date-picker/locale/en_US"));

        var _en_US4 = _interopRequireDefault(require("../time-picker/locale/en_US"));
        /* eslint-disable no-template-curly-in-string */


        var typeTemplate = '${label} is not a valid ${type}';
        var localeValues = {
          locale: 'en',
          Pagination: _en_US["default"],
          DatePicker: _en_US3["default"],
          TimePicker: _en_US4["default"],
          Calendar: _en_US2["default"],
          global: {
            placeholder: 'Please select'
          },
          Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'No filters',
            filterCheckall: 'Select all items',
            filterSearchPlaceholder: 'Search in filters',
            emptyText: 'No data',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectNone: 'Clear all data',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting'
          },
          Modal: {
            okText: 'OK',
            cancelText: 'Cancel',
            justOkText: 'OK'
          },
          Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancel'
          },
          Transfer: {
            titles: ['', ''],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page'
          },
          Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file'
          },
          Empty: {
            description: 'No data'
          },
          Icon: {
            icon: 'icon'
          },
          Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand'
          },
          PageHeader: {
            back: 'Back'
          },
          Form: {
            optional: '(optional)',
            defaultValidateMessages: {
              "default": 'Field validation error for ${label}',
              required: 'Please enter ${label}',
              "enum": '${label} must be one of [${enum}]',
              whitespace: '${label} cannot be a blank character',
              date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
              },
              types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                "boolean": typeTemplate,
                integer: typeTemplate,
                "float": typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
              },
              string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
              },
              number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
              },
              array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
              },
              pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
              }
            }
          },
          Image: {
            preview: 'Preview'
          }
        };
        var _default = localeValues;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-pagination/lib/locale/en_US': _req0,
        '../calendar/locale/en_US': _req1,
        '../date-picker/locale/en_US': _req2,
        '../time-picker/locale/en_US': _req3
      }));
    }
  };
});
//# sourceMappingURL=81a3a934123ea43263c783f86ce767ec1b27acc3.js.map