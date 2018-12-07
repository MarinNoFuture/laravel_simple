webpackJsonp([10],{

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(641)
}
var normalizeComponent = __webpack_require__(201)
/* script */
var __vue_script__ = __webpack_require__(643)
/* template */
var __vue_template__ = __webpack_require__(644)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8d9ed858"
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
Component.options.__file = "resources/js/components/page/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d9ed858", Component.options)
  } else {
    hotAPI.reload("data-v-8d9ed858", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(642);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(202)("0648dbb9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d9ed858\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d9ed858\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "\n.login-wrap[data-v-8d9ed858]{\n    position: relative;\n    width:100%;\n    height:100%;\n    background-image: url('/images/login-bg.jpg');\n    background-size: cover;\n}\n.ms-title[data-v-8d9ed858]{\n    width:100%;\n    line-height: 50px;\n    text-align: center;\n    font-size:20px;\n    color: #fff;\n    border-bottom: 1px solid #ddd;\n}\n.ms-login[data-v-8d9ed858]{\n    position: absolute;\n    left:50%;\n    top:50%;\n    width:350px;\n    margin:-190px 0 0 -175px;\n    border-radius: 5px;\n    background: rgba(255,255,255, 0.3);\n    overflow: hidden;\n}\n.ms-content[data-v-8d9ed858]{\n    padding: 30px 30px;\n}\n.login-btn[data-v-8d9ed858]{\n    text-align: center;\n}\n.login-btn button[data-v-8d9ed858]{\n    width:100%;\n    height:36px;\n    margin-bottom: 10px;\n}\n.login-tips[data-v-8d9ed858]{\n    font-size:12px;\n    line-height:30px;\n    color:#fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 643:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            ruleForm: {
                username: 'admin',
                password: '123123'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm: function submitForm(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    var url = '/api/admin.login';
                    var formData = { name: _this.ruleForm.username, password: _this.ruleForm.password };
                    _this.$axios({
                        url: url,
                        method: 'post',
                        data: formData,
                        headers: { 'Accept': 'application/vnd.marvin.system+json' }
                    }).then(function (res) {
                        localStorage.setItem('ms_username', res.data.user_data.name);
                        localStorage.setItem('ms_token', res.data.token);
                        _this.$router.push('/');
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
});

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-wrap" }, [
    _c(
      "div",
      { staticClass: "ms-login" },
      [
        _c("div", { staticClass: "ms-title" }, [_vm._v("后台管理系统")]),
        _vm._v(" "),
        _c(
          "el-form",
          {
            ref: "ruleForm",
            staticClass: "ms-content",
            attrs: {
              model: _vm.ruleForm,
              rules: _vm.rules,
              "label-width": "0px"
            }
          },
          [
            _c(
              "el-form-item",
              { attrs: { prop: "username" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { placeholder: "username" },
                    model: {
                      value: _vm.ruleForm.username,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "username", $$v)
                      },
                      expression: "ruleForm.username"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "prepend", icon: "el-icon-lx-people" },
                      slot: "prepend"
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
              { attrs: { prop: "password" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { type: "password", placeholder: "password" },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        _vm.submitForm("ruleForm")
                      }
                    },
                    model: {
                      value: _vm.ruleForm.password,
                      callback: function($$v) {
                        _vm.$set(_vm.ruleForm, "password", $$v)
                      },
                      expression: "ruleForm.password"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "prepend", icon: "el-icon-lx-lock" },
                      slot: "prepend"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "login-btn" },
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        _vm.submitForm("ruleForm")
                      }
                    }
                  },
                  [_vm._v("登录")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "login-tips" }, [
              _vm._v("Tips : 用户名和密码随便填。")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8d9ed858", module.exports)
  }
}

/***/ })

});