(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-item-item"],{1370:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-37ba456a]{height:100%;background-color:#f2f2f2}.swiper-box[data-v-37ba456a]{background-color:#f2f2f2}uni-page-body[data-v-37ba456a]{height:100%;background-color:#f2f2f2}.swiper-tab-list uni-image[data-v-37ba456a]{width:%?50?%;height:%?50?%}.uni-swiper-tab[data-v-37ba456a]{width:100%;white-space:nowrap;line-height:70px;height:61px;border-bottom:1px solid #c8c7cc;padding-top:10px;background-color:#fff}.uni-tab-bar .active[data-v-37ba456a]{color:#2ab795}.swiper-box[data-v-37ba456a]{width:100%;height:%?950?%;overflow-y:auto}.mainBox[data-v-37ba456a]{margin:4% 0;border-top:1px solid #ccc;background-color:#fff}.title-box[data-v-37ba456a]{width:100%;padding:2% 3%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.title-box uni-image[data-v-37ba456a]{width:%?50?%;height:%?50?%;padding-right:2%}.title-box uni-text[data-v-37ba456a]{color:#333}.banner-main[data-v-37ba456a]{width:100%;position:relative}.banner-main uni-image[data-v-37ba456a]{width:100%;height:%?280?%}.remen[data-v-37ba456a]{position:absolute;top:3%;right:2%;background-color:#fd994b;border-radius:%?20?%;width:%?120?%;text-align:center;color:#fff}.title-main[data-v-37ba456a]{width:100%;padding:1% 3%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box}.main-left[data-v-37ba456a]{width:70%;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box}.main-right[data-v-37ba456a]{width:30%;color:#fb0017;text-align:right}.scond-title[data-v-37ba456a]{color:#ccc;width:100%;padding:0 3%;-webkit-box-sizing:border-box;box-sizing:border-box}.main-bottom[data-v-37ba456a]{width:100%;border-bottom:1px solid #ccc;border-top:1px solid #ccc;padding:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:2%;-webkit-box-sizing:border-box;box-sizing:border-box}.bottom-left[data-v-37ba456a]{width:60%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bottom-left uni-image[data-v-37ba456a]{width:%?40?%;height:%?40?%}.bottom-left uni-text[data-v-37ba456a]{padding:0 1%}.bottom-right[data-v-37ba456a]{width:40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.imgstyle[data-v-37ba456a]{margin-left:12%}.bottom-right uni-image[data-v-37ba456a]{width:%?40?%;height:%?40?%}.bottom-right uni-text[data-v-37ba456a]{padding:0 2%;margin-right:5%}body.?%PAGE?%[data-v-37ba456a]{background-color:#f2f2f2}",""])},"1c07":function(t,e,a){"use strict";a.r(e);var i=a("5bca"),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);e["default"]=n.a},"2bc1":function(t,e,a){"use strict";var i=a("3ce4"),n=a.n(i);n.a},"38b6":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-tab-bar"},[a("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,i){return a("v-uni-view",{key:e.id,staticClass:"swiper-tab-list",class:t.tabIndex==i?"active":""},[a("v-uni-image",{attrs:{src:e.imgurl}}),a("v-uni-view",{attrs:{"data-current":i,"data-id":e.id},on:{click:function(e){e=t.$handleEvent(e),t.tapTab(e)}}},[t._v(t._s(e.name))])],1)}),1),a("v-uni-view",{staticClass:"swiper-box"},t._l(t.newsitems,function(e,i){return a("v-uni-view",{key:i,staticClass:"mainBox"},[a("v-uni-view",{staticClass:"title-box"},[a("v-uni-image",{attrs:{src:e.titleIcon}}),a("v-uni-text",[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"banner-main"},[a("v-uni-image",{attrs:{src:e.bannerUrl}}),a("v-uni-text",{staticClass:"remen"},[t._v(t._s(e.bannerTitle))])],1),a("v-uni-view",{staticClass:"title-main"},[a("v-uni-text",{staticClass:"main-left"},[t._v(t._s(e.content))]),a("v-uni-text",{staticClass:"main-right"},[t._v("￥"+t._s(e.value)+"元起")])],1),a("v-uni-view",{staticClass:"scond-title"},[t._v(t._s(e.smallTitle))]),a("v-uni-view",{staticClass:"main-bottom"},[a("v-uni-view",{staticClass:"bottom-left"},[a("v-uni-image",{attrs:{src:"../../static/xin.png"}}),a("v-uni-text",[t._v(t._s(e.xinValue))]),a("v-uni-image",{staticClass:"imgstyle",attrs:{src:"../../static/yanjing.png"}}),a("v-uni-text",[t._v(t._s(e.jinValue))])],1),a("v-uni-view",{staticClass:"bottom-right"},[a("v-uni-image",{attrs:{src:"../../static/xiaoxi.png"}}),a("v-uni-text",[t._v(t._s(e.commentValue))]),a("v-uni-image",{attrs:{src:"../../static/right.png"}})],1)],1)],1)}),1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"3ce4":function(t,e,a){var i=a("1370");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("793db7cc",i,!0,{sourceMap:!1,shadowMode:!1})},"550c":function(t,e,a){"use strict";a.r(e);var i=a("38b6"),n=a("1c07");for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);a("2bc1");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"37ba456a",null);e["default"]=s.exports},"5bca":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function l(t,e,a,i,n,l,r){try{var s=t[l](r),o=s.value}catch(c){return void a(c)}s.done?e(o):Promise.resolve(o).then(i,n)}function r(t){return function(){var e=this,a=arguments;return new Promise(function(i,n){var r=t.apply(e,a);function s(t){l(r,i,n,s,o,"next",t)}function o(t){l(r,i,n,s,o,"throw",t)}s(void 0)})}}var s={data:function(){return{scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[{titleIcon:"../../static/nav1.png",title:"餐厨专题",bannerUrl:"../../static/banner1.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"},{titleIcon:"../../static/nav2.png",title:"餐厨专题",bannerUrl:"../../static/banner2.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"},{titleIcon:"../../static/nav4.png",title:"餐厨专题",bannerUrl:"../../static/banner3.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"}],tabBars:[{name:"全部专题",id:"111111",imgurl:"../../static/p0.png"},{name:"服装专题",id:"22222",imgurl:"../../static/p1.png"},{name:"配件专题",id:"33333",imgurl:"../../static/p2.png"},{name:"居家专题",id:"44444",imgurl:"../../static/p3.png"},{name:"洗护专题",id:"55555",imgurl:"../../static/p4.png"},{name:"娱乐",id:"666666",imgurl:"../../static/p5.png"},{name:"军事",id:"77777",imgurl:"../../static/p6.png"}]}},onLoad:function(){},methods:{getElSize:function(t){return new Promise(function(e,a){uni.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(t){e(t)}).exec()})},tapTab:function(){var t=r(i.default.mark(function t(e){var a,n,l;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(55555==e.currentTarget.dataset.id?this.newsitems=[{titleIcon:"../../static/nav1.png",title:"餐厨专题",bannerUrl:"../../static/banner.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"}]:22222==e.currentTarget.dataset.id?this.newsitems=[{titleIcon:"../../static/nav1.png",title:"餐厨专题",bannerUrl:"../../static/banner3.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"}]:33333==e.currentTarget.dataset.id?this.newsitems=[{titleIcon:"../../static/nav4.png",title:"餐厨专题",bannerUrl:"../../static/banner2.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"}]:this.newsitems=[{titleIcon:"../../static/nav1.png",title:"餐厨专题",bannerUrl:"../../static/banner1.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"},{titleIcon:"../../static/nav2.png",title:"餐厨专题",bannerUrl:"../../static/banner3.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"},{titleIcon:"../../static/nav4.png",title:"餐厨专题",bannerUrl:"../../static/banner.jpg",bannerTitle:"热门",content:"五个春天的生活新提案",value:"99",smallTitle:"餐厨起居好物",xinValue:"100",jinValue:"10000",commentValue:"100"}],console.log(e.currentTarget.dataset.id),a=e.target.dataset.current,this.tabIndex!==a){t.next=7;break}return t.abrupt("return",!1);case 7:return t.next=9,this.getElSize("tab-bar");case 9:n=t.sent,l=n.scrollLeft,this.scrollLeft=l,this.isClickChange=!0,this.tabIndex=a;case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}};e.default=s},a34a:function(t,e,a){t.exports=a("bbdd")},bbdd:function(t,e,a){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,l=n&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=a("96cf"),n)i.regeneratorRuntime=l;else try{delete i.regeneratorRuntime}catch(r){i.regeneratorRuntime=void 0}}}]);