webpackJsonp([12],{

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(633)
}
var normalizeComponent = __webpack_require__(201)
/* script */
var __vue_script__ = __webpack_require__(635)
/* template */
var __vue_template__ = __webpack_require__(636)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-714e61fa"
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
Component.options.__file = "resources/js/components/page/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-714e61fa", Component.options)
  } else {
    hotAPI.reload("data-v-714e61fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(202)("345d5847", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-714e61fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-714e61fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "\n.error-page[data-v-714e61fa]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    background: #f3f3f3;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.error-code[data-v-714e61fa]{\n    line-height: 1;\n    font-size: 250px;\n    font-weight: bolder;\n    color: #2d8cf0;\n}\n.error-code span[data-v-714e61fa]{\n    color: #00a854;\n}\n.error-desc[data-v-714e61fa]{\n    font-size: 30px;\n    color: #777;\n}\n.error-handle[data-v-714e61fa]{\n    margin-top: 30px;\n    padding-bottom: 200px;\n}\n.error-btn[data-v-714e61fa]{\n    margin-left: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ 635:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        goBack: function goBack() {
            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "error-desc" }, [
      _vm._v("啊哦~ 你所访问的页面不存在")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "error-handle" },
      [
        _c(
          "router-link",
          { attrs: { to: "/" } },
          [
            _c("el-button", { attrs: { type: "primary", size: "large" } }, [
              _vm._v("返回首页")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-button",
          {
            staticClass: "error-btn",
            attrs: { type: "primary", size: "large" },
            on: { click: _vm.goBack }
          },
          [_vm._v("返回上一页")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "error-code" }, [
      _vm._v("4"),
      _c("span", [_vm._v("0")]),
      _vm._v("4")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-714e61fa", module.exports)
  }
}

/***/ })

});