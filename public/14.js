webpackJsonp([14],{

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(201)
/* script */
var __vue_script__ = __webpack_require__(582)
/* template */
var __vue_template__ = __webpack_require__(583)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/page/BaseForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ce4a17cc", Component.options)
  } else {
    hotAPI.reload("data-v-ce4a17cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'baseform',
    data: function data() {
        return {
            options: [{
                value: 'guangdong',
                label: '广东省',
                children: [{
                    value: 'guangzhou',
                    label: '广州市',
                    children: [{
                        value: 'tianhe',
                        label: '天河区'
                    }, {
                        value: 'haizhu',
                        label: '海珠区'
                    }]
                }, {
                    value: 'dongguan',
                    label: '东莞市',
                    children: [{
                        value: 'changan',
                        label: '长安镇'
                    }, {
                        value: 'humen',
                        label: '虎门镇'
                    }]
                }]
            }, {
                value: 'hunan',
                label: '湖南省',
                children: [{
                    value: 'changsha',
                    label: '长沙市',
                    children: [{
                        value: 'yuelu',
                        label: '岳麓区'
                    }]
                }]
            }],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['步步高'],
                resource: '小天才',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit: function onSubmit() {
            this.$message.success('提交成功！');
        }
    }
});

/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "crumbs" },
      [
        _c(
          "el-breadcrumb",
          { attrs: { separator: "/" } },
          [
            _c("el-breadcrumb-item", [
              _c("i", { staticClass: "el-icon-lx-calendar" }),
              _vm._v(" 表单")
            ]),
            _vm._v(" "),
            _c("el-breadcrumb-item", [_vm._v("基本表单")])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "form-box" },
        [
          _c(
            "el-form",
            { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "表单名称" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "选择器" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.form.region,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "region", $$v)
                        },
                        expression: "form.region"
                      }
                    },
                    [
                      _c("el-option", {
                        key: "bbk",
                        attrs: { label: "步步高", value: "bbk" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "xtc",
                        attrs: { label: "小天才", value: "xtc" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "imoo",
                        attrs: { label: "imoo", value: "imoo" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "日期时间" } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { type: "date", placeholder: "选择日期" },
                        model: {
                          value: _vm.form.date1,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date1", $$v)
                          },
                          expression: "form.date1"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                    _vm._v("-")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-time-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { placeholder: "选择时间" },
                        model: {
                          value: _vm.form.date2,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date2", $$v)
                          },
                          expression: "form.date2"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "城市级联" } },
                [
                  _c("el-cascader", {
                    attrs: { options: _vm.options },
                    model: {
                      value: _vm.form.options,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "options", $$v)
                      },
                      expression: "form.options"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "选择开关" } },
                [
                  _c("el-switch", {
                    model: {
                      value: _vm.form.delivery,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "delivery", $$v)
                      },
                      expression: "form.delivery"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "多选框" } },
                [
                  _c(
                    "el-checkbox-group",
                    {
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    },
                    [
                      _c("el-checkbox", {
                        attrs: { label: "步步高", name: "type" }
                      }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "小天才", name: "type" }
                      }),
                      _vm._v(" "),
                      _c("el-checkbox", {
                        attrs: { label: "imoo", name: "type" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "单选框" } },
                [
                  _c(
                    "el-radio-group",
                    {
                      model: {
                        value: _vm.form.resource,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "resource", $$v)
                        },
                        expression: "form.resource"
                      }
                    },
                    [
                      _c("el-radio", { attrs: { label: "步步高" } }),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "小天才" } }),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "imoo" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "文本框" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: "5" },
                    model: {
                      value: _vm.form.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "desc", $$v)
                      },
                      expression: "form.desc"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                    [_vm._v("表单提交")]
                  ),
                  _vm._v(" "),
                  _c("el-button", [_vm._v("取消")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ce4a17cc", module.exports)
  }
}

/***/ })

});