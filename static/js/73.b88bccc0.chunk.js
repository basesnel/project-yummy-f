"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[73],{3600:function(n,e,t){t.d(e,{Z:function(){return u}});var a=t(4165),i=t(5861),o=t(1243),r="https://project-yummy-b.onrender.com/api";o.Z.defaults.baseURL=r;var c=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/recipes/category-list");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=c;o.Z.defaults.baseURL=r;var d=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){var t,i,r,c=arguments;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,i=c.length>2&&void 0!==c[2]?c[2]:8,n.next=4,o.Z.get("recipes/category/".concat(e,"?page=").concat(t,"&limit=").concat(i));case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=d;o.Z.defaults.baseURL=r;var p=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/recipes/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u={fetchCategories:s,fetchRecipies:l,getRecipeById:p}},1978:function(n,e,t){t.d(e,{Z:function(){return d}});var a,i=t(168),o=t(6487),r=t(4374),c=o.zo.h1(a||(a=(0,i.Z)(["\n    margin-top: 50px;\n    font-size: 28px;\n    font-weight: 600;\n\n    @media screen and (min-width: ",") {\n        margin-top: 72px;\n        font-size: 32px;\n    }\n\n    @media screen and (min-width: ",") {\n        margin-top: 100px;\n        font-size: 44px;\n    }\n"])),r.Mq,r.gv),s=t(184),d=function(n){var e=n.title,t=n.color;return(0,s.jsx)(c,{style:{color:t},children:e})}},1454:function(n,e,t){t.d(e,{Z:function(){return R}});var a=t(4942),i=t(3366),o=t(7462),r=t(2791),c=t(8182),s=t(5735),d=t(4419),l=t(2065),p=t(7630),u=t(1046),m=t(527),x=t(4036),h=t(5878),g=t(1217);function v(n){return(0,g.Z)("MuiButton",n)}var f=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=r.createContext({}),Z=t(184),w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(n){return(0,o.Z)({},"small"===n.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===n.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===n.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},S=(0,p.ZP)(m.Z,{shouldForwardProp:function(n){return(0,p.FO)(n)||"classes"===n},name:"MuiButton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["".concat(t.variant).concat((0,x.Z)(t.color))],e["size".concat((0,x.Z)(t.size))],e["".concat(t.variant,"Size").concat((0,x.Z)(t.size))],"inherit"===t.color&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})((function(n){var e,t,i,r=n.theme,c=n.ownerState,s="light"===r.palette.mode?r.palette.grey[300]:r.palette.grey[800],d="light"===r.palette.mode?r.palette.grey.A100:r.palette.grey[700];return(0,o.Z)({},r.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[c.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(r.palette[c.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((r.vars||r).palette[c.color].main),backgroundColor:r.vars?"rgba(".concat(r.vars.palette[c.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(r.palette[c.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:d,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(r.vars||r).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[c.color].main}}),"&:active":(0,o.Z)({},"contained"===c.variant&&{boxShadow:(r.vars||r).shadows[8]})},(0,a.Z)(e,"&.".concat(f.focusVisible),(0,o.Z)({},"contained"===c.variant&&{boxShadow:(r.vars||r).shadows[6]})),(0,a.Z)(e,"&.".concat(f.disabled),(0,o.Z)({color:(r.vars||r).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)},"contained"===c.variant&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})),e),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].main,border:r.vars?"1px solid rgba(".concat(r.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,l.Fq)(r.palette[c.color].main,.5))},"contained"===c.variant&&{color:r.vars?r.vars.palette.text.primary:null==(t=(i=r.palette).getContrastText)?void 0:t.call(i,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:s,boxShadow:(r.vars||r).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].contrastText,backgroundColor:(r.vars||r).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(n){var e;return n.ownerState.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(e,"&.".concat(f.focusVisible),{boxShadow:"none"}),(0,a.Z)(e,"&:active",{boxShadow:"none"}),(0,a.Z)(e,"&.".concat(f.disabled),{boxShadow:"none"}),e)})),z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.startIcon,e["iconSize".concat((0,x.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))})),k=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.endIcon,e["iconSize".concat((0,x.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))})),j=r.forwardRef((function(n,e){var t=r.useContext(b),a=(0,s.Z)(t,n),l=(0,u.Z)({props:a,name:"MuiButton"}),p=l.children,m=l.color,h=void 0===m?"primary":m,g=l.component,f=void 0===g?"button":g,y=l.className,j=l.disabled,C=void 0!==j&&j,R=l.disableElevation,I=void 0!==R&&R,M=l.disableFocusRipple,P=void 0!==M&&M,W=l.endIcon,B=l.focusVisibleClassName,E=l.fullWidth,F=void 0!==E&&E,q=l.size,L=void 0===q?"medium":q,N=l.startIcon,T=l.type,O=l.variant,H=void 0===O?"text":O,V=(0,i.Z)(l,w),_=(0,o.Z)({},l,{color:h,component:f,disabled:C,disableElevation:I,disableFocusRipple:P,fullWidth:F,size:L,type:T,variant:H}),D=function(n){var e=n.color,t=n.disableElevation,a=n.fullWidth,i=n.size,r=n.variant,c=n.classes,s={root:["root",r,"".concat(r).concat((0,x.Z)(e)),"size".concat((0,x.Z)(i)),"".concat(r,"Size").concat((0,x.Z)(i)),"inherit"===e&&"colorInherit",t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,x.Z)(i))],endIcon:["endIcon","iconSize".concat((0,x.Z)(i))]},l=(0,d.Z)(s,v,c);return(0,o.Z)({},c,l)}(_),U=N&&(0,Z.jsx)(z,{className:D.startIcon,ownerState:_,children:N}),A=W&&(0,Z.jsx)(k,{className:D.endIcon,ownerState:_,children:W});return(0,Z.jsxs)(S,(0,o.Z)({ownerState:_,className:(0,c.Z)(t.className,D.root,y),component:f,disabled:C,focusRipple:!P,focusVisibleClassName:(0,c.Z)(D.focusVisible,B),ref:e,type:T},V,{classes:D,children:[U,p,A]}))})),C=t(7770),R=function(n){var e=n.children,t=n.bgColor,a=n.paddingHxs,i=n.paddingHmd,o=n.paddingHlg,r=n.paddingWxs,c=n.paddingWmd,s=n.paddingWlg,d=t,l="inherit",p="none";return"transparent"===t?(l=C.DH,p="1px solid"):"dark"===t?(t=C._4,d=C.DH):(t=t||C.DH,d=C._4),(0,Z.jsx)(j,{sx:{color:"inherit",backgroundColor:t,transform:"skew(30deg)",border:p,borderRadius:{xs:"".concat(1.4*a,"px"),md:"".concat(1.4*i,"px"),lg:"".concat(1.4*o,"px")},padding:{xs:"".concat(a,"px ").concat(r,"px"),md:"".concat(i,"px ").concat(c,"px"),lg:"".concat(o,"px ").concat(s,"px")},"&:hover":{color:l,backgroundColor:d}},children:(0,Z.jsx)("span",{className:"text",style:{transform:"skew(-30deg)"},children:e})})}},1544:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var a,i,o,r,c,s,d,l=t(4165),p=t(5861),u=t(9439),m=t(2791),x=t(7689),h=t(3600),g=t(168),v=t(6487),f=t.p+"static/media/heroMob.a3c32aa11ce76775737e.jpg",b=t.p+"static/media/heroMob@2x.f9d2e02d90e1a8601765.jpg",Z=t.p+"static/media/heroTab.57e54600e065829c7da1.jpg",w=t.p+"static/media/heroTab@2x.3acf8c18f977f87b4a48.jpg",y=t(4374),S=v.ZP.section(a||(a=(0,g.Z)(["\n  width: 100vw;\n  height: 455px;\n  background-image: url('","');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url('","');\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n    height: 495px;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n    height: 493px;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n"])),f,b,y.ai,Z,w,y.Mq,Z,w),z=v.ZP.p(i||(i=(0,g.Z)(["\n  color: #22252a;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3;\n  letter-spacing: -0.24px;\n  margin: 24px 0 24px 0;\n  max-width: 299px;\n  text-align: center;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    letter-spacing: -0.36px;\n    max-width: 509px;\n  }\n\n  @media screen and (min-width: ",") {\n    max-width: 656px;\n    margin-bottom: 30px;\n  }\n"])),y.ai,y.Mq),k=v.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  margin: 42px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    gap: 8px;\n    margin-top: 60px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 48px;\n  }\n\n  p {\n    font-family: Poppins;\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 1.4;\n    letter-spacing: -0.24px;\n    color: #23262a;\n\n    @media screen and (min-width: ",") {\n      font-size: 14px;\n      line-height: 1.4;\n    }\n  }\n"])),y.ai,y.Mq,y.ai),j=t(1454),C=t(1978),R=t(184),I=function(n){var e=n.title,a=n.descr,i=n.time,o=n.isFavorite,r=Math.floor(+i/60),c=+i-60*r;return console.log(e),(0,R.jsxs)(S,{children:[(0,R.jsx)(C.Z,{title:e,color:"#8baa36"}),(0,R.jsx)(z,{children:a}),(0,R.jsx)(j.Z,{bgColor:"transparent",children:o?"Remove from favorite":"Add to favorite recipes"}),(0,R.jsxs)(k,{children:[(0,R.jsx)("img",{src:t(4191).Z,alt:"clock"}),(0,R.jsx)("p",{children:0!==r?"".concat(r," h ").concat(c," min"):"".concat(c)})]})]})},M=v.ZP.section(r||(r=(0,g.Z)(["\n  padding: 50px 100px;\n"]))),P=v.ZP.div(c||(c=(0,g.Z)(["\n  background-color: #8baa36;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n\n  p {\n    font-family: Poppins;\n    color: #fafafa;\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n\n    @media screen and (min-width: ",") {\n      font-size: 18px;\n      letter-spacing: 0.54px;\n    }\n  }\n"])),y.ai),W=v.ZP.ul(s||(s=(0,g.Z)(["\n  margin: 24px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    margin-top: 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 50px;\n  }\n"])),y.ai,y.Mq),B=function(){return(0,R.jsxs)(M,{children:[(0,R.jsxs)(P,{children:[(0,R.jsx)("p",{}),(0,R.jsx)("p",{}),(0,R.jsx)("p",{})]}),(0,R.jsx)(W,{})]})},E=v.ZP.section(d||(d=(0,g.Z)(["\n  padding: 18px 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: left;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n\n  h2 {\n    color: #3e4462;\n    font-family: Poppins;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1;\n    letter-spacing: -0.48px;\n\n    @media screen and (min-width: ",") {\n      letter-spacing: -0.24px;\n    }\n\n    ul {\n      margin: 31.5px 0 0 0;\n\n      @media screen and (min-width: ",") {\n        margin: 33.5px 0 0 0;\n      }\n    }\n\n    img {\n      margin: 40px 0 0 0;\n      border-radius: 8px;\n\n      @media screen and (min-width: ",") {\n        margin-top: 53px;\n      }\n\n      @media screen and (min-width: ",") {\n        margin: 0;\n      }\n    }\n  }\n"])),y.Mq,y.ai,y.ai,y.ai,y.Mq),F=function(){return(0,R.jsxs)(E,{children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("h2",{children:"Recipe Preparation"}),(0,R.jsx)("ul",{})]}),(0,R.jsx)("img",{alt:"dish"})]})},q=function(){var n=(0,x.UO)().recipeId,e=(0,m.useState)([]),t=(0,u.Z)(e,2),a=t[0],i=t[1],o=(0,m.useState)(""),r=(0,u.Z)(o,2),c=r[0],s=r[1],d=(0,m.useState)(""),g=(0,u.Z)(d,2),v=g[0],f=g[1],b=(0,m.useState)(""),Z=(0,u.Z)(b,2),w=Z[0],y=Z[1],S=(0,m.useState)(""),z=(0,u.Z)(S,2),k=z[0],j=z[1],C=(0,m.useState)(!1),M=(0,u.Z)(C,2),P=M[0],W=M[1];return(0,m.useEffect)((function(){var e=function(){var n=(0,p.Z)((0,l.Z)().mark((function n(e){var t;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.Z.getRecipeById(e);case 3:t=n.sent,console.log(t),f(t.title),y(t.description),j(t.time),W(!!t.favorite),i(t.ingredients),s(t.instructions),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0,e);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[n]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(I,{title:v,descr:w,time:k,isFavorite:P}),(0,R.jsx)(B,{ingredients:a}),(0,R.jsx)(F,{instructions:c})]})}},4191:function(n,e,t){t(2791);e.Z=t.p+"static/media/clock.5146b559adfd629e728ba916dba25f35.svg"}}]);
//# sourceMappingURL=73.b88bccc0.chunk.js.map