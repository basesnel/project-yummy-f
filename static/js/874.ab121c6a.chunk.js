"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[874],{9145:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4165),a=n(5861),i=n(1243),o=n(9113);i.Z.defaults.baseURL=o.F,i.Z.defaults.headers.post["Content-Type"]="multipart/form-data";var c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("DATA >>>",t),e.next=4,i.Z.post("recipes/own-recipes",t);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),s=c;i.Z.defaults.baseURL=o.F;var u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("recipes/category-list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=u;i.Z.defaults.baseURL=o.F;var d=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:8,e.next=4,i.Z.get("recipes/category/".concat(t,"?page=").concat(n,"&limit=").concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=d;i.Z.defaults.baseURL=o.F;var f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=f;i.Z.defaults.baseURL=o.F;var h=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("recipes/main-page");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=h;i.Z.defaults.baseURL=o.F;var Z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,a=t.page,e.next=3,i.Z.get("recipes/own-recipes/".concat(n,"?page=").concat(a));case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("recipes/own-recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();i.Z.defaults.baseURL=o.F;var m=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("ingredients/list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=m;i.Z.defaults.baseURL=o.F;var w=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.patch("favorites/".concat(t));case 2:return n=e.sent,console.log(n.status),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=w;i.Z.defaults.baseURL=o.F;var y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete("favorites/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=y;i.Z.defaults.baseURL=o.F;var R=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,e.next=3,i.Z.get("favorites/?page=".concat(n));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=R;i.Z.defaults.baseURL=o.F;var C=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("favorites/all");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=C;i.Z.defaults.baseURL=o.F;var U=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o,c,s,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.directory,a=t.selector,o=t.query,c=t.page,s=t.cardsPerPage,e.next=3,i.Z.get("".concat(n,"/search?").concat(a,"=").concat(o,"&page=").concat(c,"&limit=").concat(s));case 3:return u=e.sent,e.abrupt("return",u.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=U;i.Z.defaults.baseURL=o.F;var P=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.patch("users/shopping-list",{id:t,measure:n,recipeId:a});case 2:return o=e.sent,e.abrupt("return",o.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),z={addRecipe:s,fetchCategories:p,fetchRecipies:l,getRecipeById:x,fetchRecipesMainPage:v,getIngredients:b,addToFavorites:k,removeFromFavorites:j,getFavorites:F,getAllFavorites:S,fetchSearchResults:L,fetchMyRecipes:Z,deleteMyRecipe:g,toggleProduct:P}},4179:function(e,t,n){var r=n(6934),a=n(2492),i=n(8588),o=n(1374),c=n(1867),s=n(4567),u=n(184),p=(0,r.ZP)(a.Z)((function(e){var t=e.theme;return{backgroundColor:t.palette.background.input,color:t.palette.text.secondary}}));t.Z=function(e){var t=e.id,n=e.title,r=e.thumb,a=e.handleRecipe;return(0,u.jsx)(i.Z,{onClick:function(){return a(t)},sx:{position:"relative"},children:(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(c.Z,{sx:{height:"323px",width:"100%",position:"relative",borderRadius:"8px"},component:"img",image:r,alt:n}),(0,u.jsx)(p,{sx:{p:2,left:"16px",right:"16px",position:"absolute",bottom:"24px",borderRadius:"8px"},children:(0,u.jsx)(s.Z,{variant:"body2",color:"text.secondary",sx:{fontFamily:"Poppins",fontSize:"16px",fontWeight:"500",lineHeight:"20px",letterSpacing:"-0.24px"},children:n})})]})})}},9289:function(e,t,n){n.d(t,{Z:function(){return g}});var r,a,i,o,c=n(168),s=n(6487),u=n(4374),p=s.zo.div(r||(r=(0,c.Z)(["\n  position: relative;\n  padding-top: 114px;\n  padding-bottom: 100px;\n\n  @media screen and (min-width: ",") {\n    padding-top: 136px;\n  }\n\n  @media screen and (min-width: ",") {\n    padding-top: 164px;\n  }\n"])),u.Mq,u.gv),d=(s.zo.div(a||(a=(0,c.Z)(["\n  width: 375px;\n  height: 200px;\n  position: absolute;\n  z-index: -10;\n\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n\n  @media screen and (min-width: ",") {\n    width: 768px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 1440px;\n  }\n"])),u.Mq,u.gv),s.zo.div(i||(i=(0,c.Z)(["\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  border-radius: 3px;\n  background: #8baa36;\n  position: absolute;\n  top: 76px;\n  left: 120px;\n\n  @media screen and (min-width: ",") {\n    width: 14px;\n    height: 14px;\n    top: 85px;\n    left: 187px;\n  }\n\n  @media screen and (min-width: ",") {\n    top: 117px;\n    left: 228px;\n  }\n"])),u.Mq,u.gv)),l=s.zo.div(o||(o=(0,c.Z)(["\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  border-radius: 3px;\n  background: #8baa36;\n  position: absolute;\n  top: 108px;\n  right: 0;\n\n  @media screen and (min-width: ",") {\n    width: 14px;\n    height: 14px;\n    top: 98px;\n    right: -8px;\n  }\n\n  @media screen and (min-width: ",") {\n    top: 130px;\n    right: 72px;\n  }\n"])),u.Mq,u.gv),f=n(4942),x=n(6934),h=n(4554),v=(0,x.ZP)(h.Z)((function(e){var t,n=e.theme;return t={transform:"rotate(-25deg)",borderRadius:"3px",backgroundColor:n.palette.middleCube,position:"absolute"},(0,f.Z)(t,n.breakpoints.up("xs"),{width:"6px",height:"6px",top:"142px",right:"104px"}),(0,f.Z)(t,n.breakpoints.up("md"),{width:"12px",height:"12px",top:"155px",right:"283px"}),(0,f.Z)(t,n.breakpoints.up("lg"),{top:"200px",right:"517px"}),t})),Z=n(184),g=function(e){var t=e.children;return(0,Z.jsxs)(p,{children:[(0,Z.jsx)(d,{}),(0,Z.jsx)(l,{}),(0,Z.jsx)(v,{}),t]})}},5628:function(e,t,n){var r=n(7997),a=(0,r.styled)(r.Box)((function(e){var t=e.theme;return{backgroundColor:t.palette.background.default,color:t.palette.text.primary}}));t.Z=a},1523:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7997),a=(0,r.styled)(r.Typography)((function(e){return{color:e.theme.palette.text.primary}})),i=n(184);function o(e){var t=e.children;return(0,i.jsx)(a,{variant:"h2",sx:{fontFamily:"Poppins",fontWeight:"600",lineHeight:"1",fontSize:{xs:"28px",md:"32px",lg:"44px"},letterSpacing:{xs:"-0.56px",md:"-0.64px",lg:"-0.88px"},mb:{xs:"28px",md:"32px",lg:"72px"}},children:t})}},4874:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(1413),a=n(4165),i=n(5861),o=n(9439),c=n(3967),s=n(1153),u=n(1703),p=n(8371),d=n(2791),l=n(7689),f=n(9198),x=n(4179),h=n(9145),v=n(1523),Z=n(4554),g=n(9347),m=n(1474),b=n(4630),w=n(184);function k(e){var t=e.onError,n=(0,d.useState)([]),r=(0,o.Z)(n,2),c=r[0],s=r[1],u=(0,l.UO)().categoryName,p=(0,l.s0)(),f=(0,d.useState)(!1),x=(0,o.Z)(f,2),v=x[0],k=x[1];(0,d.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,h.Z.fetchCategories();case 4:if(null!==(n=e.sent)&&void 0!==n&&n.length){e.next=7;break}throw new Error("don't find list categories");case 7:return e.t0=s,e.next=10,h.Z.fetchCategories();case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=19;break;case 14:e.prev=14,e.t2=e.catch(1),console.log(e.t2),s([]),t(!0);case 19:return e.prev=19,k(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,14,19,22]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return(0,w.jsxs)(w.Fragment,{children:[!v&&(0,w.jsx)(Z.Z,{sx:{width:"100%"},children:(0,w.jsx)(g.Z,{sx:{mt:10,borderBottom:"1px solid #eaeaea"},value:u,onChange:function(e,t){p("/categories/".concat(t))},variant:"scrollable",scrollButtons:"auto",children:null===c||void 0===c?void 0:c.map((function(e){return(0,w.jsx)(m.Z,{sx:{py:{xs:"32px",md:"28px"},px:{xs:"14px",md:"28px"},textTransform:"capitalize",color:"#BDBDBD",fontWeight:"400",lineHeight:"1",fontFamily:"Poppins",fontSize:{xs:"14px",md:"18px"}},value:e.toLowerCase(),label:e},e)}))})}),v&&(0,w.jsx)(b.Z,{})]})}var y=n(1794),j=n(5628),R=n(9289),F=n(833),C=function(){var e=(0,l.s0)(),t=(0,d.useState)([]),n=(0,o.Z)(t,2),Z=n[0],g=n[1],m=(0,d.useState)(1),C=(0,o.Z)(m,2),S=C[0],U=C[1],L=(0,d.useState)(0),P=(0,o.Z)(L,2),z=P[0],E=P[1],B=(0,l.UO)().categoryName,M=(0,d.useState)(!1),q=(0,o.Z)(M,2),I=q[0],T=q[1],W=(0,d.useState)(!1),_=(0,o.Z)(W,2),D=_[0],N=_[1],A=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,h.Z.fetchRecipies(t);case 4:if(null===(r=e.sent)||void 0===r||null===(n=r.recipes)||void 0===n||!n.length){e.next=11;break}g(r.recipes),E(null===r||void 0===r?void 0:r.totalPages),U(1),e.next=12;break;case 11:throw new Error("dont find this categories");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),g([]),N(!0);case 18:return e.prev=18,T(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,14,18,21]])})));return function(t){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){var t=":categoryName"!==B&&B?B:"beef";A(t),e("/categories/".concat(t))}),[]),(0,d.useEffect)((function(){var t=":categoryName"!==B&&B?B:"beef";A(t),e("/categories/".concat(t))}),[B,e]);var H=(0,c.Z)(),O=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(n),e.prev=1,e.next=4,h.Z.fetchRecipies(B,n);case 4:if(null===(r=e.sent)||void 0===r||!r.recipes){e.next=10;break}g(null===r||void 0===r?void 0:r.recipes),N(!1),e.next=11;break;case 10:throw new Error("dont find this category");case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),g([]),N(!0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(t){e("/recipe/".concat(t))};return(0,w.jsx)(j.Z,{children:(0,w.jsxs)(F.E,{children:[!D&&!I&&(0,w.jsx)(f.W,{children:(0,w.jsxs)(R.Z,{children:[(0,w.jsx)(v.Z,{children:"Categories"}),(0,w.jsx)(k,{onError:function(e){return N(e)}}),(0,w.jsx)(s.ZP,{container:!0,pt:{xs:"32px",md:"50px"},mb:{xs:"60px",md:"100px"},rowSpacing:{xs:3.5,md:4,lg:12.5},columnSpacing:{md:4,lg:1.5},children:Z&&Z.length&&(null===Z||void 0===Z?void 0:Z.map((function(e){var t=e._id,n=e.title,r=e.thumb;return(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,w.jsx)(x.Z,{handleRecipe:G,id:t,title:n,thumb:r})},t)})))}),(0,w.jsx)(u.Z,{sx:{width:"max-content",borderRadius:"26px",p:"12px 18px",m:"50px auto 100px",backgroundColor:H.palette.background.input,boxShadow:"0px 4px 4px 0px rgba(135, 135, 135, 0.20)"},count:z,page:S,onChange:O,variant:"outlined",color:"primary",size:"large",renderItem:function(e){return(0,w.jsx)(p.Z,(0,r.Z)({sx:{backgroundColor:e.selected?H.palette.background.paginator+"!important":"transparent",color:e.selected?H.palette.paginator.active+"!important":H.palette.paginator.inactive,border:"none !important",fontFamily:"Poppins",fontSize:"12px",fontWeight:500,margin:0}},e))}})]})}),I&&(0,w.jsx)(b.Z,{}),D&&(0,w.jsx)(y.Z,{})]})})}}}]);
//# sourceMappingURL=874.ab121c6a.chunk.js.map