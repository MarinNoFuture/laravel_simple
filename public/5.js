webpackJsonp([5],{

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(619)
}
var normalizeComponent = __webpack_require__(201)
/* script */
var __vue_script__ = __webpack_require__(621)
/* template */
var __vue_template__ = __webpack_require__(622)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ce723ab"
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
Component.options.__file = "resources/js/components/page/BaseCharts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ce723ab", Component.options)
  } else {
    hotAPI.reload("data-v-7ce723ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(201)
/* script */
var __vue_script__ = __webpack_require__(544)
/* template */
var __vue_template__ = __webpack_require__(546)
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
Component.options.__file = "node_modules/vue-schart/src/vue-schart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-260b29c3", Component.options)
  } else {
    hotAPI.reload("data-v-260b29c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_schart_js__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_schart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_schart_js__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            schart: null,
            opt: {}
        };
    },

    props: {
        canvasId: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'bar'
        },
        data: {
            type: Array,
            default: []
        },
        options: {
            type: Object,
            required: false
        }
    },
    mounted: function mounted() {
        this.renderChart();
    },

    methods: {
        renderChart: function renderChart() {
            this.schart = null;
            this.opt = this.options;
            if (!this.width || !this.height) {
                if (!this.opt) {
                    this.opt = { autoWidth: true };
                } else {
                    this.opt['autoWidth'] = true;
                }
            }
            this.schart = new __WEBPACK_IMPORTED_MODULE_0_schart_js___default.a(this.canvasId, this.type, this.data, this.opt);
        }
    },
    watch: {
        data: function data() {
            this.renderChart();
        },
        options: function options() {
            this.renderChart();
        },
        type: function type() {
            this.renderChart();
        }
    }
});

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * sChart JavaScript Library v2.0.1
 * http://blog.gdfengshuo.com/example/sChart/ | Released under the MIT license
 * Date: 2018-04-16T18:59Z
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return factory(root);
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.sChart = factory(root);
    }
})(this, function (root) {
    'use strict';
    /**
     * 生成图表
     * @param {String} canvas 画布元素id
     * @param {String} type 图表类型
     * @param {Array} data 生成图表的数据
     * @param {Object} options 图表参数 可选参数
     */
    function sChart(canvas, type, data, options) {
        this.canvas = document.getElementById(canvas);
        this.ctx = this.canvas.getContext('2d');
        this.dpi = window.devicePixelRatio || 1;
        this.type = type;
        this.data = data; // 存放图表数据
        this.dataLength = this.data.length; // 图表数据的长度
        this.showValue = true; // 是否在图表中显示数值
        this.autoWidth = false; // 宽高是否自适应
        this.width = this.canvas.width * this.dpi; // canvas 宽度
        this.height = this.canvas.height * this.dpi; // canvas 高度
        this.topPadding = 50 * this.dpi;
        this.leftPadding = 50 * this.dpi;
        this.rightPadding = 0 * this.dpi;
        this.bottomPadding = 50 * this.dpi;
        this.yEqual = 5; // y轴分成5等分
        this.yLength = 0; // y轴坐标点之间的真实长度
        this.xLength = 0; // x轴坐标点之间的真实长度
        this.yFictitious = 0; // y轴坐标点之间显示的间距
        this.yRatio = 0; // y轴坐标真实长度和坐标间距的比
        this.bgColor = '#ffffff'; // 默认背景颜色
        this.fillColor = '#1E9FFF'; // 默认填充颜色
        this.axisColor = '#666666'; // 坐标轴颜色
        this.contentColor = '#eeeeee'; // 内容横线颜色
        this.titleColor = '#000000'; // 图表标题颜色
        this.title = ''; // 图表标题
        this.titlePosition = 'top'; // 图表标题位置: top / bottom
        this.radius = 100 * this.dpi; // 饼图半径和环形图外圆半径
        this.innerRadius = 70 * this.dpi; // 环形图内圆半径
        this.colorList = ['#1E9FFF', '#13CE66', '#F7BA2A', '#FF4949', '#72f6ff', '#199475', '#e08031', '#726dd1']; // 饼图颜色列表
        this.legendColor = '#000000'; // 图例文字颜色
        this.legendTop = 40 * this.dpi; // 图例距离顶部高度
        this.totalValue = this.getTotalValue(); // 获取饼图数据总和
        this.init(options);
    }
    sChart.prototype = {
        init: function (options) {
            if (this.dataLength === 0) {
                return false;
            }
            if (options) {
                var dpiList = ['topPadding', 'leftPadding', 'rightPadding', 'bottomPadding', 'radius', 'innerRadius', 'legendTop'];
                for (var key in options) {
                    if (key === 'colorList' && Array.isArray(options[key])) {
                        this[key] = options[key].concat(this[key])
                    } else if (dpiList.indexOf(key) > -1) {
                        this[key] = options[key] * this.dpi;
                    } else {
                        this[key] = options[key];
                    }
                }
            }

            // 如果设置了自动宽高的话，则就宽高设为父元素的宽高
            if (options.autoWidth) {
                this.width = this.canvas.width = this.canvas.parentNode.offsetWidth * this.dpi;
                this.height = this.canvas.height = this.canvas.parentNode.offsetHeight * this.dpi;
                this.canvas.setAttribute('style', 'width:' + this.canvas.parentNode.offsetWidth + 'px;height:' + this.canvas.parentNode.offsetHeight + 'px;')
            } else {
                this.canvas.setAttribute('style', 'width:' + this.canvas.width + 'px;height:' + this.canvas.height + 'px;');
                this.canvas.width *= this.dpi;
                this.canvas.height *= this.dpi;
            }

            if (this.type === 'bar' || this.type === 'line') {
                this.yLength = Math.floor((this.height - this.topPadding - this.bottomPadding - 10) / this.yEqual);
                this.xLength = Math.floor((this.width - this.leftPadding - this.rightPadding - 10) / this.dataLength);
                this.yFictitious = this.getYFictitious(this.data);
                this.yRatio = this.yLength / this.yFictitious;
                this.drawBarUpdate();
            } else {
                this.drawPieUpdate();
            }
        },
        /**
         * 绘制完整的柱状图或折线图
         */
        drawBarUpdate: function () {
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.drawAxis();
            this.drawPoint();
            this.drawTitle();
            this.drawBarChart();
        },
        /**
         * 绘制完整的饼状图或环形图
         */
        drawPieUpdate: function () {
            this.ctx.fillStyle = this.bgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            this.drawLegend();
            this.drawTitle();
            this.drawPieChart();
        },
        /**
         * 把数据绘制出柱状或折线
         */
        drawBarChart: function () {
            this.ctx.fillStyle = this.fillColor;
            this.ctx.strokeStyle = this.fillColor;
            for (var i = 0; i < this.dataLength; i++) {
                this.data[i].left = this.leftPadding + this.xLength * (i + 0.25);
                this.data[i].top = this.height - this.bottomPadding - this.data[i].value * this.yRatio;
                this.data[i].right = this.leftPadding + this.xLength * (i + 0.75);
                this.data[i].bottom = this.height - this.bottomPadding;

                // 绘制折线
                if (this.type === 'line') {
                    this.ctx.beginPath();
                    this.ctx.arc(this.data[i].left + this.xLength / 4, this.data[i].top, 2, 0, 2 * Math.PI, true);
                    this.ctx.fill();
                    if (i !== 0) {
                        this.ctx.moveTo(this.data[i].left + this.xLength / 4, this.data[i].top);
                        this.ctx.lineTo(this.data[i - 1].left + this.xLength / 4, this.data[i - 1].top);
                    }
                    this.ctx.stroke();
                } else if (this.type === 'bar') {
                    // 绘制柱状
                    this.ctx.fillRect(
                        this.data[i].left,
                        this.data[i].top,
                        this.data[i].right - this.data[i].left,
                        this.data[i].bottom - this.data[i].top
                    );
                }
                if (this.showValue) {
                    this.ctx.font = 12 * this.dpi + 'px Arial'
                    this.ctx.fillText(
                        this.data[i].value,
                        this.data[i].left + this.xLength / 4,
                        this.data[i].top - 5
                    );
                }
            }
        },
        /**
         * 把数据绘制出饼状或环形
         */
        drawPieChart: function () {
            var x = this.width / 2,
                y = this.height / 2,
                x1 = 0,
                y1 = 0;
            for (var i = 0; i < this.dataLength; i++) {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.colorList[i];
                this.ctx.moveTo(x, y);
                this.data[i].start = i === 0 ? -Math.PI / 2 : this.data[i - 1].end;
                this.data[i].end = this.data[i].start + this.data[i].value / this.totalValue * 2 * Math.PI;
                // 绘制扇形
                this.ctx.arc(x, y, this.radius, this.data[i].start, this.data[i].end);
                this.ctx.closePath();
                this.ctx.fill();

                this.data[i].middle = (this.data[i].start + this.data[i].end) / 2;
                x1 = Math.ceil(Math.abs(this.radius * Math.cos(this.data[i].middle)));
                y1 = Math.floor(Math.abs(this.radius * Math.sin(this.data[i].middle)));

                this.ctx.strokeStyle = this.colorList[i];
                // 绘制各个扇形边上的数据
                if(this.showValue){
                    if (this.data[i].middle <= 0) {
                        this.ctx.textAlign = 'left';
                        this.ctx.moveTo(x + x1, y - y1);
                        this.ctx.lineTo(x + x1 + 10, y - y1 - 10);
                        this.ctx.moveTo(x + x1 + 10, y - y1 - 10);
                        this.ctx.lineTo(x + x1 + this.radius / 2, y - y1 - 10);
                        this.ctx.stroke();
                        this.ctx.fillText(this.data[i].value, x + x1 + 5 + this.radius / 2, y - y1 - 5);
                    } else if (this.data[i].middle > 0 && this.data[i].middle <= Math.PI / 2) {
                        this.ctx.textAlign = 'left';
                        this.ctx.moveTo(x + x1, y + y1);
                        this.ctx.lineTo(x + x1 + 10, y + y1 + 10);
                        this.ctx.moveTo(x + x1 + 10, y + y1 + 10);
                        this.ctx.lineTo(x + x1 + this.radius / 2, y + y1 + 10);
                        this.ctx.stroke();
                        this.ctx.fillText(this.data[i].value, x + x1 + 5 + this.radius / 2, y + y1 + 15);
                    } else if (this.data[i].middle > Math.PI / 2 && this.data[i].middle < Math.PI) {
                        this.ctx.textAlign = 'right';
                        this.ctx.moveTo(x - x1, y + y1);
                        this.ctx.lineTo(x - x1 - 10, y + y1 + 10);
                        this.ctx.moveTo(x - x1 - 10, y + y1 + 10);
                        this.ctx.lineTo(x - x1 - this.radius / 2, y + y1 + 10);
                        this.ctx.stroke();
                        this.ctx.fillText(this.data[i].value, x - x1 - 5 - this.radius / 2, y + y1 + 15);
                    } else {
                        this.ctx.textAlign = 'right';
                        this.ctx.moveTo(x - x1, y - y1);
                        this.ctx.lineTo(x - x1 - 10, y - y1 - 10);
                        this.ctx.moveTo(x - x1 - 10, y - y1 - 10);
                        this.ctx.lineTo(x - x1 - this.radius / 2, y - y1 - 10);
                        this.ctx.stroke();
                        this.ctx.fillText(this.data[i].value, x - x1 - 5 - this.radius / 2, y - y1 - 5);
                    }
                }
            }
            // 如果类型是环形图，绘制一个内圆
            if (this.type === 'ring') {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.bgColor;
                this.ctx.arc(x, y, this.innerRadius, 0, Math.PI * 2);
                this.ctx.fill();
            }
        },
        /**
         * 绘制坐标轴
         */
        drawAxis: function () {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.axisColor;
            // y轴线, +0.5是为了解决canvas画1像素会显示成2像素的问题
            this.ctx.moveTo(this.leftPadding + 0.5, this.height - this.bottomPadding + 0.5);
            this.ctx.lineTo(this.leftPadding + 0.5, this.topPadding + 0.5);
            // x轴线
            this.ctx.moveTo(this.leftPadding + 0.5, this.height - this.bottomPadding + 0.5);
            this.ctx.lineTo(this.width - this.rightPadding - 0.5, this.height - this.bottomPadding + 0.5);
            this.ctx.stroke();
        },
        /**
         * 绘制坐标轴上的点和值
         */
        drawPoint: function () {
            // x轴坐标点
            this.ctx.beginPath();
            this.ctx.font = 12 * this.dpi + 'px Microsoft YaHei';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = this.axisColor;
            for (var i = 0; i < this.dataLength; i++) {
                var name = this.data[i].name;
                var xlen = this.xLength * (i + 1);
                this.ctx.moveTo(this.leftPadding + xlen + 0.5, this.height - this.bottomPadding + 0.5);
                this.ctx.lineTo(this.leftPadding + xlen + 0.5, this.height - this.bottomPadding + 5.5);
                this.ctx.fillText(name, this.leftPadding + xlen - this.xLength / 2, this.height - this.bottomPadding + 15 * this.dpi);
            }
            this.ctx.stroke();

            // y轴坐标点
            this.ctx.beginPath();
            this.ctx.font = 12 * this.dpi + 'px Microsoft YaHei';
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = this.axisColor;
            this.ctx.moveTo(this.leftPadding + 0.5, this.height - this.bottomPadding + 0.5);
            this.ctx.lineTo(this.leftPadding - 4.5, this.height - this.bottomPadding + 0.5);
            this.ctx.fillText(0, this.leftPadding - 10, this.height - this.bottomPadding + 5);
            for (var i = 0; i < this.yEqual; i++) {
                var y = this.yFictitious * (i + 1);
                var ylen = this.yLength * (i + 1);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.axisColor;
                this.ctx.moveTo(this.leftPadding + 0.5, this.height - this.bottomPadding - ylen + 0.5);
                this.ctx.lineTo(this.leftPadding - 4.5, this.height - this.bottomPadding - ylen + 0.5);
                this.ctx.stroke();
                this.ctx.fillText(y, this.leftPadding - 10, this.height - this.bottomPadding - ylen + 5);
                this.ctx.beginPath();
                this.ctx.strokeStyle = this.contentColor;
                this.ctx.moveTo(this.leftPadding + 0.5, this.height - this.bottomPadding - ylen + 0.5)
                this.ctx.lineTo(this.width - this.rightPadding - 0.5, this.height - this.bottomPadding - ylen + 0.5);
                this.ctx.stroke();
            }
        },
        /**
         * 绘制图表标题
         */
        drawTitle: function () {
            if (this.title) {
                this.ctx.beginPath();
                this.ctx.textAlign = 'center';
                this.ctx.fillStyle = this.titleColor;
                this.ctx.font = 16 * this.dpi + 'px Microsoft YaHei';
                if (this.titlePosition === 'bottom' && this.bottomPadding >= 40) {
                    this.ctx.fillText(this.title, this.width / 2, this.height - 5)
                } else {
                    this.ctx.fillText(this.title, this.width / 2, this.topPadding / 2 + 5)
                }
            }
        },
        /**
         * 绘制饼状图或环形图的图例
         */
        drawLegend: function () {
            for (var i = 0; i < this.dataLength; i++) {
                this.ctx.fillStyle = this.colorList[i];
                this.ctx.fillRect(10, this.legendTop + 15 * i * this.dpi, 20, 11);
                this.ctx.fillStyle = this.legendColor;
                this.ctx.font = 12 * this.dpi + 'px Microsoft YaHei';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(this.data[i].name, 35, this.legendTop + 10 + 15 * i * this.dpi);
            }
        },
        /**
         * y轴坐标点之间显示的间距
         * @param data 生成图表的数据
         * @return y轴坐标间距
         */
        getYFictitious: function (data) {
            var arr = data.slice(0);
            arr.sort(function (a, b) {
                return -(a.value - b.value);
            });
            var len = Math.ceil(arr[0].value / this.yEqual);
            var pow = len.toString().length - 1;
            pow = pow > 2 ? 2 : pow;
            return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow);
        },
        /**
         * 获取饼状或环形图的数据总和
         * @return {Number} total
         */
        getTotalValue: function () {
            var total = 0;
            for (var i = 0; i < this.dataLength; i++) {
                total += this.data[i].value;
            }
            return total;
        }
    }
    return sChart;
});

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("canvas", { attrs: { id: _vm.canvasId } })])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-260b29c3", module.exports)
  }
}

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(620);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(202)("a624fdb4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ce723ab\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BaseCharts.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ce723ab\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BaseCharts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// imports


// module
exports.push([module.i, "\n.schart-box[data-v-7ce723ab]{\r\n    display: inline-block;\r\n    margin: 20px;\n}\n.schart[data-v-7ce723ab]{\r\n        width: 500px;\r\n        height: 400px;\n}\n.content-title[data-v-7ce723ab]{\r\n        clear: both;\r\n        font-weight: 400;\r\n        line-height: 50px;\r\n        margin: 10px 0;\r\n        font-size: 22px;\r\n        color: #1f2f3d;\n}\r\n    \r\n", ""]);

// exports


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_schart__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_schart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_schart__);
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
    name: 'basecharts',
    components: {
        Schart: __WEBPACK_IMPORTED_MODULE_0_vue_schart___default.a
    },
    data: function data() {
        return {
            data1: [{ name: '2012', value: 1141 }, { name: '2013', value: 1499 }, { name: '2014', value: 2260 }, { name: '2015', value: 1170 }, { name: '2016', value: 970 }, { name: '2017', value: 1450 }],
            data2: [{ name: '短袖', value: 1200 }, { name: '休闲裤', value: 1222 }, { name: '连衣裙', value: 1283 }, { name: '外套', value: 1314 }, { name: '羽绒服', value: 2314 }],
            options1: {
                title: '某商店近年营业总额',
                autoWidth: true, // 设置宽高自适应
                showValue: false,
                bgColor: '#F9EFCC',
                fillColor: '#00887C',
                contentColor: 'rgba(46,199,201,0.3)',
                yEqual: 7
            },
            options2: {
                title: '某商店近年营业总额',
                bgColor: '#D5E4EB',
                titleColor: '#00887C',
                fillColor: 'red',
                contentColor: 'rgba(46,199,201,0.3)'
            },
            options3: {
                title: '某商店各商品年度销量',
                bgColor: '#829dca',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120
            },
            options4: {
                title: '某商店各商品年度销量',
                bgColor: '#829daa',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120,
                innerRadius: 80
            }
        };
    }
});

/***/ }),

/***/ 622:
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
              _c("i", { staticClass: "el-icon-lx-favor" }),
              _vm._v(" schart图表")
            ])
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "schart-box" },
        [
          _c("div", { staticClass: "content-title" }, [_vm._v("柱状图")]),
          _vm._v(" "),
          _c("schart", {
            staticClass: "schart",
            attrs: {
              canvasId: "bar",
              data: _vm.data1,
              type: "bar",
              options: _vm.options1
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "schart-box" },
        [
          _c("div", { staticClass: "content-title" }, [_vm._v("折线图")]),
          _vm._v(" "),
          _c("schart", {
            staticClass: "schart",
            attrs: {
              canvasId: "line",
              data: _vm.data1,
              type: "line",
              options: _vm.options2
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "schart-box" },
        [
          _c("div", { staticClass: "content-title" }, [_vm._v("饼状图")]),
          _vm._v(" "),
          _c("schart", {
            staticClass: "schart",
            attrs: {
              canvasId: "pie",
              data: _vm.data2,
              type: "pie",
              options: _vm.options3
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "schart-box" },
        [
          _c("div", { staticClass: "content-title" }, [_vm._v("环形图")]),
          _vm._v(" "),
          _c("schart", {
            staticClass: "schart",
            attrs: {
              canvasId: "ring",
              data: _vm.data2,
              type: "ring",
              options: _vm.options4
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "plugins-tips" }, [
      _vm._v(
        "\n            vue-schart：vue.js封装sChart.js的图表组件。\n            访问地址："
      ),
      _c(
        "a",
        {
          attrs: {
            href: "https://github.com/lin-xin/vue-schart",
            target: "_blank"
          }
        },
        [_vm._v("vue-schart")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ce723ab", module.exports)
  }
}

/***/ })

});