webpackJsonp([1],[,,,,,,function(t,e,n){"use strict";var o=n(2),a=n(3),s=n(55),i=n(54),r=n(52),c=n.n(r),u=n(53),l=n.n(u);o.default.use(a.b),e.a=new a.b.Store({state:s.a,mutations:i.a,actions:c.a,getters:l.a})},,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(2),a=n(106),s=n(97),i=n.n(s),r=n(98),c=n.n(r);o.default.use(a.a),e.a=new a.a({scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"首页",component:i.a,meta:{keepAlive:!0}},{path:"/:id",name:"more",component:c.a,meta:{keepAlive:!1}}]})},function(t,e){},,function(t,e,n){function o(t){n(85)}var a=n(1)(n(44),n(101),o,null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"banner",props:["bannerData"],data:function(){return{}},mounted:function(){this.getHeight()},methods:{changeImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},getHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;this.$refs.banner.style.height=t/2-80+"px"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),a=n.n(o),s=n(4),i=n.n(s),r=n(50),c=(n.n(r),n(6)),u=n(3);e.default={store:c.a,props:["contentData"],data:function(){return{moreNews:!1,dayNumber:"0",m:"",d:"",scroll:""}},mounted:function(){window.addEventListener("scroll",this.judgeScroll),this.getYestoday()},methods:{getYestoday:function(){Date.parse(new Date(20170908))},addDate:function(t){var e=new Date;e.setDate(e.getDate()-t);var n=e.getFullYear(),o=e.getMonth()+1;o<10&&(o="0"+o);var t=e.getDate();return t<10&&(t="0"+t),{m:o,d:t,td:n+o+t}},judgeScroll:function(){var t=this;if("首页"===this.$route.name){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=0==document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop,o=0==document.documentElement.scrollTop?document.body.scrollHeight:document.documentElement.scrollHeight;if(0==document.body.scrollTop&&document.documentElement.scrollTop,(e+Math.floor(n)==o&&"首页"===this.$route.name||e+Math.ceil(n)==o&&"首页"===this.$route.name)&&!this.moreNews&&"首页"===this.$route.name){this.moreNews=!0;var a=this.addDate(this.dayNumber).td,s="https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+a;i.a.get(s).then(function(e){t.data=e.data.STORIES;var n=document.getElementById("news"),o="<p class='con-title' style='font-size: 14px;padding: 20px;'>"+t.addDate(t.dayNumber).m+"月"+t.addDate(t.dayNumber).d+"日</p>";n.innerHTML+=o,console.log(),t.getMoreNews(t.data.stories)}),this.dayNumber++}}},getMoreNews:function(t){var e=this;t.forEach(function(t){e.contentData.stories.push(t)}),this.moreNews=!1},changeImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}},computed:a()({},n.i(u.a)(["NightMode"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(99),a=n.n(o),s=n(95),i=n.n(s),r=n(96),c=n.n(r),u=n(4),l=n.n(u);e.default={name:"indexpage",components:{"my-top":a.a,"my-banner":i.a,"my-content":c.a},data:function(){return{items:[],topStatus:"",topDistance:80}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;l.a.get("https://zhihu-daily.leanapp.cn/api/v1/last-stories").then(function(e){t.items=e.data.STORIES}).catch(function(t){console.log(t)})},handleTopChange:function(t){this.topStatus=t},loadTop:function(){location.reload()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),a=n.n(o),s=n(4),i=n.n(s),r=n(6),c=n(3);e.default={store:r.a,data:function(){return{msg:"aaa"}},mounted:function(){this.moreContent()},methods:{moreContent:function(){var t=this,e="https://zhihu-daily.leanapp.cn/api/v1/contents/"+this.$route.params.id;i.a.get(e).then(function(e){var n=document.getElementById("moreContent"),o="<div class='more-banner'　ref='moreBanner'><img src="+e.data.CONTENTS.image+" /><span class='span-1'>"+e.data.CONTENTS.title+"</span><span class='span-2'>"+e.data.CONTENTS.image_source+"</span></div>"+e.data.CONTENTS.body;n.innerHTML=o,t.changeSrc()})},changeSrc:function(){for(var t=document.getElementsByTagName("img"),e=0;e<t.length;e++){var n=t[e].src.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p");t[e].src=n}}},computed:a()({},n.i(c.a)(["NightMode"]))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),a=n.n(o),s=n(6),i=n(3);e.default={name:"top",data:function(){return{msg:"top",tog:!1,modemsg:"夜间模式"}},computed:a()({},n.i(i.a)(["NightMode"])),methods:a()({},n.i(i.c)(["ChengeMode"]),{show:function(){this.tog=!0},hide:function(){this.tog=!1},chenge:function(){this.ChengeMode(),this.hide(),this.NightMode?this.modemsg="日间模式":this.modemsg="夜间模式"}}),store:s.a}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=n(25),s=n.n(a),i=n(22),r=n(24),c=n.n(r),u=n(23);n.n(u);o.default.use(c.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:i.a,template:"<App/>",components:{App:s.a}})},function(t,e){},function(t,e){},function(t,e,n){"use strict";e.a={ChengeMode:function(t){t.NightMode=!t.NightMode}}},function(t,e,n){"use strict";e.a={NightMode:!1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBBoPDS0gxRa5AAAAUUlEQVRo3u3WsQ3AIAxFQUAZkhHDlKSJFKT0/IK7yp2fXLkUAAir3zjn1sXv5pa+gAAB1zKPdAxAhH9AgIB4AEDc+g/cWxf3f4CHRMCZAQDwAB6ZCNI/RceBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTI2VDE1OjEzOjQ1KzA4OjAwyDqqWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0yNlQxNToxMzo0NSswODowMLlnEuYAAAAASUVORK5CYII="},,function(t,e,n){function o(t){n(86)}var a=n(1)(n(45),n(102),o,"data-v-5e55ec76",null);t.exports=a.exports},function(t,e,n){function o(t){n(88)}var a=n(1)(n(46),n(104),o,"data-v-6d042fc2",null);t.exports=a.exports},function(t,e,n){function o(t){n(84)}var a=n(1)(n(47),n(100),o,"data-v-13bd2687",null);t.exports=a.exports},function(t,e,n){function o(t){n(89)}var a=n(1)(n(48),n(105),o,null,null);t.exports=a.exports},function(t,e,n){function o(t){n(87)}var a=n(1)(n(49),n(103),o,"data-v-5f3b9dfb",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-top"),t._v(" "),n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDistance:t.topDistance},on:{"top-status-change":t.handleTopChange}},[n("my-banner",{attrs:{"banner-data":t.items}}),t._v(" "),n("my-content",{ref:"content",attrs:{"content-data":t.items}}),t._v(" "),n("div",{staticClass:"mint-loadmore-top",slot:"top"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!=t.topStatus,expression:"topStatus != 'loading'"}]},[t._v("下拉刷新")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.topStatus,expression:"topStatus == 'loading'"}]},[t._v("刷新中...")])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"banner",staticClass:"banner clearfix swiper-container"},[n("mt-swipe",{attrs:{auto:4e3}},t._l(t.bannerData.top_stories,function(e){return n("mt-swipe-item",{key:e.id,staticClass:"banner-img"},[n("router-link",{attrs:{to:e.id.toString()}},[n("img",{attrs:{src:t.changeImageUrl(e.image),alt:"banner"}}),t._v(" "),n("span",[t._v(t._s(e.title))])])],1)}))],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top"},[o("mt-header",{class:{night:t.NightMode},attrs:{fixed:""}},[o("router-link",{attrs:{to:"/"},slot:"left"},[o("img",{staticClass:"fl",attrs:{src:n(93),alt:"nav"}}),t._v(" "),o("h1",{staticClass:"title fl"},[t._v(t._s(t.$route.name))])]),t._v(" "),o("mt-button",{attrs:{icon:"more"},on:{click:function(e){t.show()}},slot:"right"})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.tog,expression:"tog"}],staticClass:"choice-box",on:{click:function(e){t.hide()}}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.tog,expression:"tog"}],staticClass:"choice"},[o("ul",[o("li",{on:{click:function(e){t.chenge()}}},[t._v(t._s(t.modemsg))])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",class:{night:t.NightMode},attrs:{id:"content"}},[n("p",{staticClass:"con-title"},[t._v("今日热闻")]),t._v(" "),n("ul",{attrs:{id:"news"}},t._l(t.contentData.stories,function(e){return n("li",{key:e.id,staticClass:"con-list-box",class:{nightli:t.NightMode}},[n("router-link",{attrs:{to:e.id.toString()}},[n("span",{staticClass:"fl"},[t._v(t._s(e.title))]),t._v(" "),n("img",{staticClass:"fr",attrs:{src:t.changeImageUrl(e.images[0]),alt:"news"}})])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"more"},[n("mt-header",{class:{night:t.NightMode},attrs:{fixed:""}},[n("a",{attrs:{onclick:"history.back(-1)"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}})],1)]),t._v(" "),n("div",{class:{nightcon:t.NightMode},attrs:{id:"moreContent"}})],1)},staticRenderFns:[]}}],[51]);
