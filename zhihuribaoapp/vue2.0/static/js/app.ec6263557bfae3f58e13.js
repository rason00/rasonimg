webpackJsonp([1],[,,,,,,,,,,function(t,e,n){"use strict";var a=n(2),o=n(62),r=n(53),s=n.n(r),i=n(54),c=n.n(i);a.default.use(o.a),e.a=new o.a({scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"首页",component:s.a,meta:{keepAlive:!0}},{path:"/:id",name:"more",component:c.a,meta:{keepAlive:!1}}]})},function(t,e){},,function(t,e,n){function a(t){n(41)}var o=n(1)(n(32),n(57),a,null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"banner",props:["bannerData"],data:function(){return{}},mounted:function(){this.getHeight()},methods:{changeImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},getHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;this.$refs.banner.style.height=t/2-80+"px"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),o=n.n(a),r=n(38);n.n(r);e.default={props:["contentData"],data:function(){return{moreNews:!1,dayNumber:"0",m:"",d:"",scroll:""}},mounted:function(){window.addEventListener("scroll",this.judgeScroll)},creater:function(){},methods:{addDate:function(t){var e=new Date;e.setDate(e.getDate()-t);var n=e.getMonth()+1,t=e.getDate();return{m:n,d:t}},judgeScroll:function(){var t=this;if("首页"===this.$route.name){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=0==document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop,a=0==document.documentElement.scrollTop?document.body.scrollHeight:document.documentElement.scrollHeight;if(0==document.body.scrollTop&&document.documentElement.scrollTop,e+Math.floor(n)==a&&"首页"===this.$route.name||e+Math.ceil(n)==a&&"首页"===this.$route.name){var r=this.contentData.date-this.dayNumber,s="https://zhihu-daily.leanapp.cn/api/v1/before-stories/"+r;this.moreNews||"首页"!==this.$route.name||(this.moreNews=!0,o.a.get(s).then(function(e){t.data=e.data.STORIES;var n=document.getElementById("news"),a="<p class='con-title' style='font-size: 14px;padding: 20px;'>"+t.addDate(t.dayNumber).m+"月"+t.addDate(t.dayNumber).d+"日</p>";n.innerHTML+=a,t.getMoreNews(t.data.stories)})),this.dayNumber++}}},getMoreNews:function(t){var e=this;t.forEach(function(t){e.contentData.stories.push(t)}),this.moreNews=!1},changeImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),o=n.n(a),r=n(51),s=n.n(r),i=n(52),c=n.n(i),u=n(3),l=n.n(u);e.default={name:"indexpage",components:{"my-top":o.a,"my-banner":s.a,"my-content":c.a},data:function(){return{items:[],topStatus:"",topDistance:80}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;l.a.get("https://zhihu-daily.leanapp.cn/api/v1/last-stories").then(function(e){t.items=e.data.STORIES}).catch(function(t){console.log(t)})},handleTopChange:function(t){this.topStatus=t},loadTop:function(){location.reload()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),o=n.n(a);e.default={data:function(){return{msg:"aaa"}},mounted:function(){this.moreContent()},methods:{moreContent:function(){var t=this,e="https://zhihu-daily.leanapp.cn/api/v1/contents/"+this.$route.params.id;o.a.get(e).then(function(e){var n=document.getElementById("moreContent"),a="<div class='more-banner'　ref='moreBanner'><img src="+e.data.CONTENTS.image+" /><span class='span-1'>"+e.data.CONTENTS.title+"</span><span class='span-2'>"+e.data.CONTENTS.image_source+"</span></div>"+e.data.CONTENTS.body;n.innerHTML=a,t.changeSrc()})},changeSrc:function(){for(var t=document.getElementsByTagName("img"),e=0;e<t.length;e++){var n=t[e].src.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p");t[e].src=n}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"top",data:function(){return{msg:"top"}}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),o=n(13),r=n.n(o),s=n(10),i=n(12),c=n.n(i),u=n(11);n.n(u);a.default.use(c.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAHdElNRQfhBBoPDS0gxRa5AAAAUUlEQVRo3u3WsQ3AIAxFQUAZkhHDlKSJFKT0/IK7yp2fXLkUAAir3zjn1sXv5pa+gAAB1zKPdAxAhH9AgIB4AEDc+g/cWxf3f4CHRMCZAQDwAB6ZCNI/RceBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA0LTI2VDE1OjEzOjQ1KzA4OjAwyDqqWgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wNC0yNlQxNToxMzo0NSswODowMLlnEuYAAAAASUVORK5CYII="},,function(t,e,n){function a(t){n(42)}var o=n(1)(n(33),n(58),a,"data-v-5e55ec76",null);t.exports=o.exports},function(t,e,n){function a(t){n(44)}var o=n(1)(n(34),n(60),a,"data-v-6d042fc2",null);t.exports=o.exports},function(t,e,n){function a(t){n(40)}var o=n(1)(n(35),n(56),a,"data-v-13bd2687",null);t.exports=o.exports},function(t,e,n){function a(t){n(45)}var o=n(1)(n(36),n(61),a,null,null);t.exports=o.exports},function(t,e,n){function a(t){n(43)}var o=n(1)(n(37),n(59),a,"data-v-5f3b9dfb",null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-top"),t._v(" "),n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDistance:t.topDistance},on:{"top-status-change":t.handleTopChange}},[n("my-banner",{attrs:{"banner-data":t.items}}),t._v(" "),n("my-content",{ref:"content",attrs:{"content-data":t.items}}),t._v(" "),n("div",{staticClass:"mint-loadmore-top",slot:"top"},[n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!=t.topStatus,expression:"topStatus != 'loading'"}]},[t._v("下拉刷新")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.topStatus,expression:"topStatus == 'loading'"}]},[t._v("刷新中...")])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t._v(" "),t.$route.meta.keepAlive?t._e():n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"banner",staticClass:"banner clearfix swiper-container"},[n("mt-swipe",{attrs:{auto:4e3}},t._l(t.bannerData.top_stories,function(e){return n("mt-swipe-item",{key:e.id,staticClass:"banner-img"},[n("router-link",{attrs:{to:e.id.toString()}},[n("img",{attrs:{src:t.changeImageUrl(e.image),alt:"banner"}}),t._v(" "),n("span",[t._v(t._s(e.title))])])],1)}))],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("mt-header",{attrs:{fixed:""}},[a("router-link",{attrs:{to:"/"},slot:"left"},[a("img",{staticClass:"fl",attrs:{src:n(49),alt:"nav"}}),t._v(" "),a("h1",{staticClass:"title fl"},[t._v(t._s(t.$route.name))])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",attrs:{id:"content"}},[n("p",{staticClass:"con-title"},[t._v("今日热闻")]),t._v(" "),n("ul",{attrs:{id:"news"}},t._l(t.contentData.stories,function(e){return n("li",{key:e.id,staticClass:"con-list-box"},[n("router-link",{attrs:{to:e.id.toString()}},[n("span",{staticClass:"fl"},[t._v(t._s(e.title))]),t._v(" "),n("img",{staticClass:"fr",attrs:{src:t.changeImageUrl(e.images[0]),alt:"news"}})])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"more"},[n("mt-header",{attrs:{fixed:""}},[n("a",{attrs:{onclick:"history.back(-1)"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}})],1)]),t._v(" "),n("div",{attrs:{id:"moreContent"}})],1)},staticRenderFns:[]}}],[39]);