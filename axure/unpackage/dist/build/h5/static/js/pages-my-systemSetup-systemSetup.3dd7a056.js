(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-systemSetup-systemSetup"],{"005e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{title:"获取手机网络状态",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var t=this;uni.getNetworkType({success:function(e){console.log(e),t.hasNetworkType=!0,t.networkType=e.subtype||e.networkType},fail:function(){uni.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};e.default=i},"3bf2":function(t,e,n){"use strict";n.r(e);var i=n("005e"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=u.a},"748f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40upx"}},[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("网络状态")]),!1===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")]),n("v-uni-view",{staticClass:"uni-hello-text uni-center uni-common-mt"},[t._v("请点击下面按钮获取网络状态")])]:t._e(),!0===t.hasNetworkType?[n("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v(t._s(t.networkType))])]:t._e()],2),n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.getNetworkType(e)}}},[t._v("获取手机网络状态")]),n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.clear(e)}}},[t._v("清空")])],1)],1)],1)},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},e61a:function(t,e,n){"use strict";n.r(e);var i=n("748f"),u=n("3bf2");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var a=n("2877"),s=Object(a["a"])(u["default"],i["a"],i["b"],!1,null,"559feab4",null);e["default"]=s.exports}}]);