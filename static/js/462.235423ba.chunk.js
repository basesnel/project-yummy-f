"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[462],{3600:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(4165),a=n(5861),c=n(1243),i="https://project-yummy-b.onrender.com/api";c.Z.defaults.baseURL=i;var o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/recipes/category-list");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=o;c.Z.defaults.baseURL=i;var u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i,o=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,a=o.length>2&&void 0!==o[2]?o[2]:8,e.next=4,c.Z.get("recipes/category/".concat(t,"?page=").concat(n,"&limit=").concat(a));case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=u;c.Z.defaults.baseURL=i;var l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/recipes/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x={fetchCategories:s,fetchRecipies:p,getRecipeById:l}},1462:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(4165),a=n(5861),c=n(9439),i=n(890),o=n(4554),s=n(1022),u=n(3896),p=n(1889),l=n(9648),x=n(2791),f=n(9198),d=n(7689),h=n(7621),v=n(6647),m=n(2169),g=n(9504),Z=n(184),b=function(e){var t=e.id,n=e.title,r=e.thumb,a=e.handleRecipe;return(0,Z.jsx)(h.Z,{onClick:function(){return a(t)},sx:{position:"relative"},children:(0,Z.jsxs)(v.Z,{children:[(0,Z.jsx)(m.Z,{sx:{height:"323px",width:"100%",position:"relative",borderRadius:"8px"},component:"img",image:r,alt:n}),(0,Z.jsx)(g.Z,{sx:{p:2,left:"16px",right:"16px",position:"absolute",bottom:"24px",backgroundColor:"white",borderRadius:"8px"},children:(0,Z.jsx)(i.Z,{variant:"body2",color:"text.secondary",sx:{color:" #3E4462",fontFamily:"Poppins",fontSize:"16px",fontWeight:"500",lineHeight:"20px",letterSpacing:"-0.24px"},children:n})})]})})},w=n(3600),y=function(){var e=(0,d.s0)(),t=(0,x.useState)([]),n=(0,c.Z)(t,2),h=n[0],v=n[1],m=(0,x.useState)([]),g=(0,c.Z)(m,2),y=g[0],k=g[1],j=(0,x.useState)(1),R=(0,c.Z)(j,2),C=R[0],S=R[1],B=(0,d.UO)().categoryName;(0,x.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=k,e.next=4,w.Z.fetchCategories();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.log(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,x.useEffect)((function(){var t=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Z.fetchRecipies(t);case 3:n=e.sent,v(null===n||void 0===n?void 0:n.recipes),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n=":categoryName"===B?"beef":B;t(n),e("/categories/".concat(n))}),[B,e]);var P=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(n),e.prev=1,e.next=4,w.Z.fetchRecipies(B,C);case 4:a=e.sent,v(null===a||void 0===a?void 0:a.recipes),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),_=function(t){e("/recipe/".concat(t))};return(0,Z.jsx)("section",{children:(0,Z.jsxs)(f.W,{children:[(0,Z.jsx)(i.Z,{variant:"h2",sx:{color:"#001833",fontFamily:"Poppins",fontWeight:"600",lineHeight:"1",pt:{xs:6.5,md:9,lg:20.5},fontSize:{xs:"28px",md:"32px",lg:"44px"},letterSpacing:{xs:"-0.56px",md:"-0.64px",lg:"-0.88px"},mb:{xs:"28px",md:"32px",lg:"72px"}},children:"Categories"}),(0,Z.jsx)(o.Z,{sx:{width:"100%"},children:(null===y||void 0===y?void 0:y.length)&&":categoryName"!==B&&(0,Z.jsx)(s.Z,{sx:{mt:10,borderBottom:"1px solid #eaeaea"},value:B,onChange:function(t,n){e("/categories/".concat(n))},variant:"scrollable",scrollButtons:"auto",children:y.length&&y.map((function(e){return(0,Z.jsx)(u.Z,{sx:{py:{xs:"32px",md:"28px"},px:{xs:"14px",md:"28px"},textTransform:"capitalize",color:"#BDBDBD",fontWeight:"400",lineHeight:"1",fontFamily:"Poppins",fontSize:{xs:"14px",md:"18px"}},value:e.toLowerCase(),label:e},e)}))})}),(0,Z.jsx)(p.ZP,{container:!0,pt:{xs:"32px",md:"50px"},mb:{xs:"60px",md:"100px"},rowSpacing:{xs:3.5,md:4,lg:12.5},columnSpacing:{md:4,lg:1.5},children:h&&h.length&&(null===h||void 0===h?void 0:h.map((function(e){var t=e._id,n=e.title,r=e.thumb;return(0,Z.jsx)(p.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,Z.jsx)(b,{handleRecipe:_,id:t,title:n,thumb:r})},t)})))}),(0,Z.jsx)(l.Z,{count:10,page:C,onChange:P,variant:"outlined",color:"primary"})]})})}}}]);
//# sourceMappingURL=462.235423ba.chunk.js.map