"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[520],{9145:function(n,t,e){e.d(t,{Z:function(){return M}});var r=e(4165),a=e(5861),i=e(1243),o=e(9113);i.Z.defaults.baseURL=o.F,i.Z.defaults.headers.post["Content-Type"]="multipart/form-data";var c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("DATA >>>",t),n.next=4,i.Z.post("recipes/own-recipes",t);case 4:return e=n.sent,a=e.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}(),s=c;i.Z.defaults.baseURL=o.F;var u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("recipes/category-list");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=u;i.Z.defaults.baseURL=o.F;var d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,o,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:8,n.next=4,i.Z.get("recipes/category/".concat(t,"?page=").concat(e,"&limit=").concat(a));case 4:return o=n.sent,n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=d;i.Z.defaults.baseURL=o.F;var x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("recipes/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=x;i.Z.defaults.baseURL=o.F;var g=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("recipes/main-page");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=g;i.Z.defaults.baseURL=o.F;var v=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.userId,a=t.page,n.next=3,i.Z.get("recipes/own-recipes/".concat(e,"?page=").concat(a));case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.delete("recipes/own-recipes/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();i.Z.defaults.baseURL=o.F;var Z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("ingredients/list");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=Z;i.Z.defaults.baseURL=o.F;var w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.patch("favorites/".concat(t));case 2:return e=n.sent,console.log(e.status),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=w;i.Z.defaults.baseURL=o.F;var y=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.delete("favorites/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),R=y;i.Z.defaults.baseURL=o.F;var F=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("favorites/");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),j=F;i.Z.defaults.baseURL=o.F;var z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("favorites/all");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=z;i.Z.defaults.baseURL=o.F;var U=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,o,c,s,u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.directory,a=t.selector,o=t.query,c=t.page,s=t.cardsPerPage,n.next=3,i.Z.get("".concat(e,"/search?").concat(a,"=").concat(o,"&page=").concat(c,"&limit=").concat(s));case 3:return u=n.sent,n.abrupt("return",u.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),_=U;i.Z.defaults.baseURL=o.F;var q=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e,a){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.patch("users/shopping-list",{id:t,measure:e,recipeId:a});case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),M={addRecipe:s,fetchCategories:p,fetchRecipies:f,getRecipeById:l,fetchRecipesMainPage:h,getIngredients:b,addToFavorites:k,removeFromFavorites:R,getFavorites:j,getAllFavorites:L,fetchSearchResults:_,fetchMyRecipes:v,deleteMyRecipe:m,toggleProduct:q}},9289:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,i,o,c=e(168),s=e(6487),u=e(4374),p=s.zo.div(r||(r=(0,c.Z)(["\n  position: relative;\n  padding-top: 114px;\n  padding-bottom: 100px;\n\n  @media screen and (min-width: ",") {\n    padding-top: 136px;\n  }\n\n  @media screen and (min-width: ",") {\n    padding-top: 164px;\n  }\n"])),u.Mq,u.gv),d=(s.zo.div(a||(a=(0,c.Z)(["\n  width: 375px;\n  height: 200px;\n  position: absolute;\n  z-index: -10;\n\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n\n  @media screen and (min-width: ",") {\n    width: 768px;\n  }\n\n  @media screen and (min-width: ",") {\n    width: 1440px;\n  }\n"])),u.Mq,u.gv),s.zo.div(i||(i=(0,c.Z)(["\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  border-radius: 3px;\n  background: #8baa36;\n  position: absolute;\n  top: 76px;\n  left: 120px;\n\n  @media screen and (min-width: ",") {\n    width: 14px;\n    height: 14px;\n    top: 85px;\n    left: 187px;\n  }\n\n  @media screen and (min-width: ",") {\n    top: 117px;\n    left: 228px;\n  }\n"])),u.Mq,u.gv)),f=s.zo.div(o||(o=(0,c.Z)(["\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  border-radius: 3px;\n  background: #8baa36;\n  position: absolute;\n  top: 108px;\n  right: 0;\n\n  @media screen and (min-width: ",") {\n    width: 14px;\n    height: 14px;\n    top: 98px;\n    right: -8px;\n  }\n\n  @media screen and (min-width: ",") {\n    top: 130px;\n    right: 72px;\n  }\n"])),u.Mq,u.gv),x=e(4942),l=e(6934),g=e(4554),h=(0,l.ZP)(g.Z)((function(n){var t,e=n.theme;return t={transform:"rotate(-25deg)",borderRadius:"3px",backgroundColor:e.palette.middleCube,position:"absolute"},(0,x.Z)(t,e.breakpoints.up("xs"),{width:"6px",height:"6px",top:"142px",right:"104px"}),(0,x.Z)(t,e.breakpoints.up("md"),{width:"12px",height:"12px",top:"155px",right:"283px"}),(0,x.Z)(t,e.breakpoints.up("lg"),{top:"200px",right:"517px"}),t})),v=e(184),m=function(n){var t=n.children;return(0,v.jsxs)(p,{children:[(0,v.jsx)(d,{}),(0,v.jsx)(f,{}),(0,v.jsx)(h,{}),t]})}},833:function(n,t,e){e.d(t,{E:function(){return s}});var r,a=e(168),i=e(6487),o=e(6230),c=e(4374),s=i.zo.div(r||(r=(0,a.Z)(["\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-position: left bottom -220px;\n\n\t@media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n\t\tbackground-image: url(",");\n\t\tbackground-size: 300px;\n\t\tbackground-position: left bottom -220px;\n\t}\n\n\t@media screen and (min-width: ",") {\n\t\tbackground-image: url(",");\n\t\tbackground-position: left bottom -360px;\n\n\t\t@media (min-device-pixel-ratio: 2),\n\t\t(min-resolution: 192dpi),\n\t\t(min-resolution: 2dppx) {\n\t\t\tbackground-image: url(",");\n\t\t\tbackground-size: 500px;\n\t\t\tbackground-position: left bottom -370px;\n\t\t}\n\t}\n\n\t@media screen and (min-width: ",") {\n\t\tbackground-image: url(",");\n\t\tbackground-position: left bottom -480px;\n\n\t\t@media (min-device-pixel-ratio: 2),\n\t\t(min-resolution: 192dpi),\n\t\t(min-resolution: 2dppx) {\n\t\t\tbackground-image: url(",");\n\t\t\tbackground-size: 700px;\n\t\t\tbackground-position: left bottom -500px;\n\t\t}\n\t}\n"])),o.I4,o.Yt,c.Mq,o.vw,o.cl,c.gv,o.vX,o.HX)},2261:function(n,t,e){e.d(t,{f:function(){return p},q:function(){return d}});var r,a,i=e(168),o=e(6487),c=e(1703),s=e(7770),u=e(4374),p=o.zo.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),d=(0,o.zo)(c.Z)(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 275px;\n  padding: 12px 18px;\n\n  border-radius: 26px;\n  /* background-color: ","; */\n  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);\n\n  @media screen and (min-width: ",") {\n    width: 324px;\n    display: block;\n\n    ul {\n      display: flex;\n      justify-content: space-between;\n    }\n  }\n"])),s.E0,u.Mq)},7201:function(n,t,e){e.d(t,{q:function(){return g}});var r,a,i=e.p+"static/media/veg_375_1x.a214cce90e7e0d118497.png",o=e.p+"static/media/veg_375_2x.585ebc13c47eeb780a42.png",c=e.p+"static/media/veg_768_1x.c5ea041f71ee0010905e.png",s=e.p+"static/media/veg_768_2x.fb5229fd610efcf8df80.png",u=e(168),p=e(4374),d=e(6487),f=d.ZP.div(r||(r=(0,u.Z)(["\n  margin-top: 50px;\n  display: flex;\n  gap: 24px;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: ",") {\n    gap: 32px;\n    margin-bottom: 100px;\n  }\n"])),p.Mq),x=d.ZP.p(a||(a=(0,u.Z)(["\n  opacity: 0.5;\n  font-size: 14px;\n\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: -0.28px;\n  @media screen and (min-width: ",") {\n    font-size: 24px;\n  }\n"])),p.Mq),l=e(184),g=function(n){var t=n.text;return(0,l.jsxs)(f,{children:[(0,l.jsxs)("picture",{children:[(0,l.jsx)("source",{srcSet:"".concat(c," 1x,").concat(s," 2x"),media:"(min-width: 768px)"}),(0,l.jsx)("source",{srcSet:"".concat(i," 1x,").concat(o," 2x"),media:"(min-width: 375px)"}),(0,l.jsx)("img",{src:i,alt:"Busket with vegetables"})]}),(0,l.jsx)(x,{children:t})]})}},5628:function(n,t,e){var r=e(7997),a=(0,r.styled)(r.Box)((function(n){var t=n.theme;return{backgroundColor:t.palette.background.default,color:t.palette.text.primary}}));t.Z=a}}]);
//# sourceMappingURL=520.4a48c1b8.chunk.js.map