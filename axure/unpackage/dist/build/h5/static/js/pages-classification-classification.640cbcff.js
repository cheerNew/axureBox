(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-classification-classification"],{"1d20":function(t,i,e){"use strict";e.r(i);var l=e("614a"),a=e("d475");for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);e("8f71");var s=e("2877"),r=Object(s["a"])(a["default"],l["a"],l["b"],!1,null,"6be97f80",null);i["default"]=r.exports},"614a":function(t,i,e){"use strict";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"page-body"},[e("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.categoryList,function(i,l){return e("v-uni-view",{key:l,staticClass:"nav-left-item",class:l==t.categoryActive?"active":"",on:{click:function(i){i=t.$handleEvent(i),t.categoryClickMain(l)}}},[t._v(t._s(i.name))])}),1),e("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":""},on:{scroll:function(i){i=t.$handleEvent(i),t.scroll(i)}}},t._l(t.subCategoryListnew,function(i,l){return e("v-uni-view",{key:l,staticClass:"nav-right-item",attrs:{id:0===l?"first":""}},[e("v-uni-image",{attrs:{src:i.imgurl}}),e("v-uni-view",[t._v(t._s(i.title))])],1)}),1)],1)],1)},a=[];e.d(i,"a",function(){return l}),e.d(i,"b",function(){return a})},"815e":function(t,i,e){var l=e("b7bc");"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var a=e("4f06").default;a("15e9ac91",l,!0,{sourceMap:!1,shadowMode:!1})},"8f71":function(t,i,e){"use strict";var l=e("815e"),a=e.n(l);a.a},b7bc:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".page-body[data-v-6be97f80]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#eee}.nav[data-v-6be97f80]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.nav-left[data-v-6be97f80]{width:30%}.nav-left-item[data-v-6be97f80]{height:%?100?%;border-right:solid 1px #e0e0e0;border-bottom:solid 1px #e0e0e0;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#f2f2f2}.nav-right[data-v-6be97f80]{width:70%}.nav-right-item[data-v-6be97f80]{width:37%;height:%?200?%;float:left;text-align:center;padding:%?11?%;font-size:%?28?%;background-color:#fff;margin-left:6%;margin-bottom:2%;margin-top:3%}.nav-right-item uni-image[data-v-6be97f80]{width:%?100?%;height:%?100?%}.active[data-v-6be97f80]{color:#2ab795}",""])},d475:function(t,i,e){"use strict";e.r(i);var l=e("e2b1"),a=e.n(l);for(var n in l)"default"!==n&&function(t){e.d(i,t,function(){return l[t]})}(n);i["default"]=a.a},e2b1:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l={data:function(){return{categoryList:[{name:"服装"},{name:"餐厨"},{name:"配件"},{name:"居家"},{name:"洗护"},{name:"婴童"},{name:"杂货"},{name:"饮食"}],subCategoryListnew:[],subCategoryList:[{id:0,list:[{imgurl:"../../static/p0.png",title:"内裤"},{imgurl:"../../static/p1.png",title:"内衣"},{imgurl:"../../static/p2.png",title:"袜子"},{imgurl:"../../static/p3.png",title:"大衣"},{imgurl:"../../static/p4.png",title:"家居服"},{imgurl:"../../static/p5.png",title:"衬衫"},{imgurl:"../../static/p6.png",title:"外套"}]},{id:1,list:[{imgurl:"../../static/p7.png",title:"锅具"},{imgurl:"../../static/p8.png",title:"刀铲"},{imgurl:"../../static/p9.png",title:"功能厨具"}]},{id:2,list:[{imgurl:"../../static/p7.png",title:"锅具"},{imgurl:"../../static/p8.png",title:"刀铲"},{imgurl:"../../static/p9.png",title:"功能厨具"},{imgurl:"../../static/p10.png",title:"餐具"},{imgurl:"../../static/p11.png",title:"杯壶"}]},{id:3,list:[{imgurl:"../../static/p0.png",title:"内裤"},{imgurl:"../../static/p1.png",title:"内衣"},{imgurl:"../../static/p2.png",title:"袜子"},{imgurl:"../../static/p3.png",title:"大衣"},{imgurl:"../../static/p4.png",title:"家居服"},{imgurl:"../../static/p5.png",title:"衬衫"},{imgurl:"../../static/p6.png",title:"外套"}]},{id:4,list:[{imgurl:"../../static/p7.png",title:"锅具"},{imgurl:"../../static/p8.png",title:"刀铲"},{imgurl:"../../static/p9.png",title:"功能厨具"},{imgurl:"../../static/p10.png",title:"餐具"},{imgurl:"../../static/p11.png",title:"杯壶"}]},{id:5,list:[{imgurl:"../../static/p0.png",title:"内裤"},{imgurl:"../../static/p1.png",title:"内衣"},{imgurl:"../../static/p2.png",title:"袜子"},{imgurl:"../../static/p3.png",title:"大衣"},{imgurl:"../../static/p4.png",title:"家居服"},{imgurl:"../../static/p5.png",title:"衬衫"},{imgurl:"../../static/p6.png",title:"外套"}]},{id:6,list:[{imgurl:"../../static/p7.png",title:"锅具"},{imgurl:"../../static/p8.png",title:"刀铲"},{imgurl:"../../static/p9.png",title:"功能厨具"},{imgurl:"../../static/p10.png",title:"餐具"},{imgurl:"../../static/p11.png",title:"杯壶"}]},{id:7,list:[{imgurl:"../../static/p7.png",title:"锅具"},{imgurl:"../../static/p8.png",title:"刀铲"},{imgurl:"../../static/p9.png",title:"功能厨具"},{imgurl:"../../static/p10.png",title:"餐具"},{imgurl:"../../static/p11.png",title:"杯壶"},{imgurl:"../../static/p4.png",title:"家居服"},{imgurl:"../../static/p5.png",title:"衬衫"},{imgurl:"../../static/p6.png",title:"外套"},{imgurl:"../../static/p9.png",title:"功能厨具"},{imgurl:"../../static/p10.png",title:"餐具"},{imgurl:"../../static/p11.png",title:"杯壶"},{imgurl:"../../static/p4.png",title:"家居服"},{imgurl:"../../static/p5.png",title:"衬衫"},{imgurl:"../../static/p6.png",title:"外套"}]}],height:0,categoryActive:0,scrollTop:0,scrollHeight:0}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t){this.categoryActive=t,this.subCategoryListnew=this.subCategoryList[t].list,this.scrollTop=-this.scrollHeight*t}},onLoad:function(){this.categoryClickMain(0),this.height=uni.getSystemInfoSync().windowHeight}};i.default=l}}]);