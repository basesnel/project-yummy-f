"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[754],{2839:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(4165),a=r(5861),c=r(1243),o=r(9113);c.Z.defaults.baseURL=o.F;var s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("recipes/category-list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=s;c.Z.defaults.baseURL=o.F;var u=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,s=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2&&void 0!==s[2]?s[2]:8,e.next=4,c.Z.get("recipes/category/".concat(t,"?page=").concat(r,"&limit=").concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=u;c.Z.defaults.baseURL=o.F;var l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("recipes/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=l;c.Z.defaults.baseURL=o.F;var d=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("recipes/main-page");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=d;c.Z.defaults.baseURL=o.F;var v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("ingredients/list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=v;c.Z.defaults.baseURL=o.F;var Z=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.patch("favorites/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Z;c.Z.defaults.baseURL=o.F;var m=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("favorites/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=m;c.Z.defaults.baseURL=o.F;var w=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("favorites/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=w;c.Z.defaults.baseURL=o.F;var k=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.directory,a=t.selector,o=t.query,e.next=3,c.Z.get("".concat(r,"/search?").concat(a,"=").concat(o));case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={fetchCategories:i,fetchRecipies:p,getRecipeById:f,fetchRecipesMainPage:x,getIngredients:h,addToFavorites:g,removeFromFavorites:b,getFavorites:y,fetchSearchResults:k}},4179:function(e,t,r){var n=r(8588),a=r(1374),c=r(1867),o=r(2492),s=r(4567),i=r(184);t.Z=function(e){var t=e.id,r=e.title,u=e.thumb,p=e.handleRecipe;return(0,i.jsx)(n.Z,{onClick:function(){return p(t)},sx:{position:"relative"},children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(c.Z,{sx:{height:"323px",width:"100%",position:"relative",borderRadius:"8px"},component:"img",image:u,alt:r}),(0,i.jsx)(o.Z,{sx:{p:2,left:"16px",right:"16px",position:"absolute",bottom:"24px",backgroundColor:"white",borderRadius:"8px"},children:(0,i.jsx)(s.Z,{variant:"body2",color:"text.secondary",sx:{color:" #3E4462",fontFamily:"Poppins",fontSize:"16px",fontWeight:"500",lineHeight:"20px",letterSpacing:"-0.24px"},children:r})})]})})}},5628:function(e,t,r){var n=r(6526),a=(0,n.styled)(n.Box)((function(e){return{backgroundColor:e.theme.palette.background.default}}));t.Z=a},754:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(4165),a=r(5861),c=r(9439),o=r(1153),s=r(1703),i=r(2791),u=r(7689),p=r(9198),l=r(4179),f=r(2839),d=r(6526),x=(0,d.styled)(d.Typography)((function(e){return{color:e.theme.palette.text.primary}})),v=r(184);function h(e){var t=e.children;return(0,v.jsx)(x,{variant:"h2",sx:{fontFamily:"Poppins",fontWeight:"600",lineHeight:"1",pt:{xs:6.5,md:9,lg:20.5},fontSize:{xs:"28px",md:"32px",lg:"44px"},letterSpacing:{xs:"-0.56px",md:"-0.64px",lg:"-0.88px"},mb:{xs:"28px",md:"32px",lg:"72px"}},children:t})}var Z=r(4554),g=r(9347),m=r(1474);function b(e){var t=e.onError,r=(0,i.useState)(!1),o=(0,c.Z)(r,2),s=o[0],p=o[1],l=(0,i.useState)([]),d=(0,c.Z)(l,2),x=d[0],h=d[1],b=(0,u.UO)().categoryName,w=(0,u.s0)();(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=h,e.next=4,f.Z.fetchCategories();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.useEffect)((function(){null!==x&&void 0!==x&&x.length&&null!==x&&void 0!==x&&x.find((function(e){return e.toLowerCase()===b}))?(p(!1),t(!1)):(p(!0),t("Don't find categorie"))}),[x,b,t]);return!s&&(0,v.jsx)(Z.Z,{sx:{width:"100%"},children:(0,v.jsx)(g.Z,{sx:{mt:10,borderBottom:"1px solid #eaeaea"},value:b,onChange:function(e,t){w("/categories/".concat(t))},variant:"scrollable",scrollButtons:"auto",children:null===x||void 0===x?void 0:x.map((function(e){return(0,v.jsx)(m.Z,{sx:{py:{xs:"32px",md:"28px"},px:{xs:"14px",md:"28px"},textTransform:"capitalize",color:"#BDBDBD",fontWeight:"400",lineHeight:"1",fontFamily:"Poppins",fontSize:{xs:"14px",md:"18px"}},value:e.toLowerCase(),label:e},e)}))})})}var w=r(1794),y=r(5628),k=function(){var e=(0,u.s0)(),t=(0,i.useState)([]),r=(0,c.Z)(t,2),d=r[0],x=r[1],Z=(0,i.useState)(1),g=(0,c.Z)(Z,2),m=g[0],k=g[1],j=(0,i.useState)(0),R=(0,c.Z)(j,2),F=R[0],S=R[1],C=(0,u.UO)().categoryName,L=(0,i.useState)(!1),U=(0,c.Z)(L,2),E=U[0],B=U[1];(0,i.useEffect)((function(){var t=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.fetchRecipies(t);case 3:if(null===(r=e.sent)||void 0===r||!r.recipes){e.next=11;break}x(null===r||void 0===r?void 0:r.recipes),S(null===r||void 0===r?void 0:r.totalPages),k(1),B(!1),e.next=12;break;case 11:throw new Error("dont find this categories");case 12:e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),x([]),B(!0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),r=":categoryName"===C?"beef":C;t(r),e("/categories/".concat(r))}),[C,e]);var P=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(r),e.prev=1,e.next=4,f.Z.fetchRecipies(C,r);case 4:if(null===(a=e.sent)||void 0===a||!a.recipes){e.next=10;break}x(null===a||void 0===a?void 0:a.recipes),B(!1),e.next=11;break;case 10:throw new Error("dont find this category");case 11:e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),x([]),B(!0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,r){return e.apply(this,arguments)}}(),z=function(t){e("/recipe/".concat(t))};return(0,v.jsx)(y.Z,{children:(0,v.jsxs)(p.W,{children:[!E&&(0,v.jsx)(h,{children:"Categories"}),(0,v.jsx)(b,{onError:function(e){return B(e)}}),!E&&(0,v.jsx)(o.ZP,{container:!0,pt:{xs:"32px",md:"50px"},mb:{xs:"60px",md:"100px"},rowSpacing:{xs:3.5,md:4,lg:12.5},columnSpacing:{md:4,lg:1.5},children:d&&d.length&&(null===d||void 0===d?void 0:d.map((function(e){var t=e._id,r=e.title,n=e.thumb;return(0,v.jsx)(o.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,v.jsx)(l.Z,{handleRecipe:z,id:t,title:r,thumb:n})},t)})))}),!E&&(0,v.jsx)(s.Z,{sx:{display:"flex",justifyContent:"center",p:"50px 0 100px"},count:F,page:m,onChange:P,variant:"outlined",color:"primary",size:"large"}),E&&(0,v.jsx)(w.Z,{})]})})}}}]);
//# sourceMappingURL=754.e5faf46b.chunk.js.map