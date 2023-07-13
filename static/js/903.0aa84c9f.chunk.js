"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[903],{1454:function(n,e,a){a.d(e,{Z:function(){return I}});var t=a(4942),i=a(3366),o=a(7462),r=a(2791),c=a(8182),d=a(5735),l=a(4419),s=a(2065),p=a(7630),m=a(1046),u=a(527),x=a(4036),g=a(5878),h=a(1217);function v(n){return(0,h.Z)("MuiButton",n)}var f=(0,g.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=r.createContext({}),w=a(184),z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=function(n){return(0,o.Z)({},"small"===n.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===n.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===n.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},y=(0,p.ZP)(u.Z,{shouldForwardProp:function(n){return(0,p.FO)(n)||"classes"===n},name:"MuiButton",slot:"Root",overridesResolver:function(n,e){var a=n.ownerState;return[e.root,e[a.variant],e["".concat(a.variant).concat((0,x.Z)(a.color))],e["size".concat((0,x.Z)(a.size))],e["".concat(a.variant,"Size").concat((0,x.Z)(a.size))],"inherit"===a.color&&e.colorInherit,a.disableElevation&&e.disableElevation,a.fullWidth&&e.fullWidth]}})((function(n){var e,a,i,r=n.theme,c=n.ownerState,d="light"===r.palette.mode?r.palette.grey[300]:r.palette.grey[800],l="light"===r.palette.mode?r.palette.grey.A100:r.palette.grey[700];return(0,o.Z)({},r.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:(r.vars||r).shape.borderRadius,transition:r.transitions.create(["background-color","box-shadow","border-color","color"],{duration:r.transitions.duration.short}),"&:hover":(0,o.Z)({textDecoration:"none",backgroundColor:r.vars?"rgba(".concat(r.vars.palette.text.primaryChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(r.palette.text.primary,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:r.vars?"rgba(".concat(r.vars.palette[c.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(r.palette[c.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((r.vars||r).palette[c.color].main),backgroundColor:r.vars?"rgba(".concat(r.vars.palette[c.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,s.Fq)(r.palette[c.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:r.vars?r.vars.palette.Button.inheritContainedHoverBg:l,boxShadow:(r.vars||r).shadows[4],"@media (hover: none)":{boxShadow:(r.vars||r).shadows[2],backgroundColor:(r.vars||r).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(r.vars||r).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(r.vars||r).palette[c.color].main}}),"&:active":(0,o.Z)({},"contained"===c.variant&&{boxShadow:(r.vars||r).shadows[8]})},(0,t.Z)(e,"&.".concat(f.focusVisible),(0,o.Z)({},"contained"===c.variant&&{boxShadow:(r.vars||r).shadows[6]})),(0,t.Z)(e,"&.".concat(f.disabled),(0,o.Z)({color:(r.vars||r).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((r.vars||r).palette.action.disabledBackground)},"contained"===c.variant&&{color:(r.vars||r).palette.action.disabled,boxShadow:(r.vars||r).shadows[0],backgroundColor:(r.vars||r).palette.action.disabledBackground})),e),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].main,border:r.vars?"1px solid rgba(".concat(r.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,s.Fq)(r.palette[c.color].main,.5))},"contained"===c.variant&&{color:r.vars?r.vars.palette.text.primary:null==(a=(i=r.palette).getContrastText)?void 0:a.call(i,r.palette.grey[300]),backgroundColor:r.vars?r.vars.palette.Button.inheritContainedBg:d,boxShadow:(r.vars||r).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(r.vars||r).palette[c.color].contrastText,backgroundColor:(r.vars||r).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:r.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:r.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:r.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:r.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(n){var e;return n.ownerState.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,t.Z)(e,"&.".concat(f.focusVisible),{boxShadow:"none"}),(0,t.Z)(e,"&:active",{boxShadow:"none"}),(0,t.Z)(e,"&.".concat(f.disabled),{boxShadow:"none"}),e)})),Z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(n,e){var a=n.ownerState;return[e.startIcon,e["iconSize".concat((0,x.Z)(a.size))]]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e))})),k=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(n,e){var a=n.ownerState;return[e.endIcon,e["iconSize".concat((0,x.Z)(a.size))]]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))})),C=r.forwardRef((function(n,e){var a=r.useContext(b),t=(0,d.Z)(a,n),s=(0,m.Z)({props:t,name:"MuiButton"}),p=s.children,u=s.color,g=void 0===u?"primary":u,h=s.component,f=void 0===h?"button":h,S=s.className,C=s.disabled,j=void 0!==C&&C,I=s.disableElevation,R=void 0!==I&&I,P=s.disableFocusRipple,M=void 0!==P&&P,W=s.endIcon,E=s.focusVisibleClassName,B=s.fullWidth,F=void 0!==B&&B,N=s.size,T=void 0===N?"medium":N,q=s.startIcon,L=s.type,H=s.variant,O=void 0===H?"text":H,V=(0,i.Z)(s,z),_=(0,o.Z)({},s,{color:g,component:f,disabled:j,disableElevation:R,disableFocusRipple:M,fullWidth:F,size:T,type:L,variant:O}),D=function(n){var e=n.color,a=n.disableElevation,t=n.fullWidth,i=n.size,r=n.variant,c=n.classes,d={root:["root",r,"".concat(r).concat((0,x.Z)(e)),"size".concat((0,x.Z)(i)),"".concat(r,"Size").concat((0,x.Z)(i)),"inherit"===e&&"colorInherit",a&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,x.Z)(i))],endIcon:["endIcon","iconSize".concat((0,x.Z)(i))]},s=(0,l.Z)(d,v,c);return(0,o.Z)({},c,s)}(_),A=q&&(0,w.jsx)(Z,{className:D.startIcon,ownerState:_,children:q}),G=W&&(0,w.jsx)(k,{className:D.endIcon,ownerState:_,children:W});return(0,w.jsxs)(y,(0,o.Z)({ownerState:_,className:(0,c.Z)(a.className,D.root,S),component:f,disabled:j,focusRipple:!M,focusVisibleClassName:(0,c.Z)(D.focusVisible,E),ref:e,type:L},V,{classes:D,children:[A,p,G]}))})),j=a(7770),I=function(n){var e=n.children,a=n.bgColor,t=n.paddingHxs,i=n.paddingHmd,o=n.paddingHlg,r=n.paddingWxs,c=n.paddingWmd,d=n.paddingWlg,l=a,s="inherit",p="none";return"transparent"===a?(s=j.DH,p="1px solid"):"dark"===a?(a=j._4,l=j.DH):(a=a||j.DH,l=j._4),(0,w.jsx)(C,{sx:{color:"inherit",backgroundColor:a,transform:"skew(30deg)",border:p,borderRadius:{xs:"".concat(1.4*t,"px"),md:"".concat(1.4*i,"px"),lg:"".concat(1.4*o,"px")},padding:{xs:"".concat(t,"px ").concat(r,"px"),md:"".concat(i,"px ").concat(c,"px"),lg:"".concat(o,"px ").concat(d,"px")},"&:hover":{color:s,backgroundColor:l}},children:(0,w.jsx)("span",{className:"text",style:{transform:"skew(-30deg)"},children:e})})}},4537:function(n,e,a){a.r(e),a.d(e,{default:function(){return I}});var t,i,o,r,c,d,l,s,p=a(1454),m=a(168),u=a(6487),x=a.p+"static/media/heroMob.a3c32aa11ce76775737e.jpg",g=a.p+"static/media/heroMob@2x.f9d2e02d90e1a8601765.jpg",h=a.p+"static/media/heroTab.57e54600e065829c7da1.jpg",v=a.p+"static/media/heroTab@2x.3acf8c18f977f87b4a48.jpg",f=a(4374),b=u.ZP.section(t||(t=(0,m.Z)(["\n  width: 100vw;\n  background-image: url('","');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url('","');\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n"])),x,g,f.ai,h,v,f.Mq,h,v),w=u.ZP.h1(i||(i=(0,m.Z)(["\n  color: '#8baa36';\n  font-family: Poppins;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: -0.48px;\n  margin: 0;\n\n  @media screen and (min-width: ",") {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n  }\n"])),f.ai),z=u.ZP.p(o||(o=(0,m.Z)(["\n  color: #22252a;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3;\n  letter-spacing: -0.24px;\n  margin: 24px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    letter-spacing: -0.36px;\n  }\n"])),f.ai),S=u.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  margin: 42px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    gap: 8px;\n    margin-top: 60px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 48px;\n  }\n\n  p {\n    font-family: Poppins;\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 1.4;\n    letter-spacing: -0.24px;\n    color: #23262a;\n\n    @media screen and (min-width: ",") {\n      font-size: 14px;\n      line-height: 1.4;\n    }\n  }\n"])),f.ai,f.Mq,f.ai),y=u.ZP.section(c||(c=(0,m.Z)(["\n  padding: 50px 100px;\n"]))),Z=u.ZP.div(d||(d=(0,m.Z)(["\n  background-color: #8baa36;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n\n  p {\n    font-family: Poppins;\n    color: #fafafa;\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n\n    @media screen and (min-width: ",") {\n      font-size: 18px;\n      letter-spacing: 0.54px;\n    }\n  }\n"])),f.ai),k=u.ZP.ul(l||(l=(0,m.Z)(["\n  margin: 24px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    margin-top: 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 50px;\n  }\n"])),f.ai,f.Mq),C=u.ZP.section(s||(s=(0,m.Z)(["\n  padding: 18px 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: left;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n\n  h2 {\n    color: #3e4462;\n    font-family: Poppins;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1;\n    letter-spacing: -0.48px;\n\n    @media screen and (min-width: ",") {\n      letter-spacing: -0.24px;\n    }\n\n    ul {\n      margin: 31.5px 0 0 0;\n\n      @media screen and (min-width: ",") {\n        margin: 33.5px 0 0 0;\n      }\n    }\n\n    img {\n      margin: 40px 0 0 0;\n      border-radius: 8px;\n\n      @media screen and (min-width: ",") {\n        margin-top: 53px;\n      }\n\n      @media screen and (min-width: ",") {\n        margin: 0;\n      }\n    }\n  }\n"])),f.Mq,f.ai,f.ai,f.ai,f.Mq),j=a(184),I=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(w,{children:"RecipePage"}),(0,j.jsx)(z,{}),(0,j.jsx)(p.Z,{bgColor:"transparent",children:"Add to favorite recipes"}),(0,j.jsxs)(S,{children:[(0,j.jsx)("img",{src:a(4191).Z,alt:"clock"}),(0,j.jsx)("p",{})]})]}),(0,j.jsxs)(y,{children:[(0,j.jsxs)(Z,{children:[(0,j.jsx)("p",{}),(0,j.jsx)("p",{}),(0,j.jsx)("p",{})]}),(0,j.jsx)(k,{})]}),(0,j.jsxs)(C,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:"Recipe Preparation"}),(0,j.jsx)("ul",{})]}),(0,j.jsx)("img",{alt:"dish"})]})]})}},4191:function(n,e,a){a(2791);e.Z=a.p+"static/media/clock.5146b559adfd629e728ba916dba25f35.svg"}}]);
//# sourceMappingURL=903.0aa84c9f.chunk.js.map