import{d as l,o as s,c,a as n,x as r}from"./BygsRCwf.js";const p={__name:"ProgressBar",props:{width:{type:String,default:null},height:{type:Number,default:12},percentage:{type:Number,default:0},backgroundColor:{type:String,default:null},colorFill:{type:String,default:null}},setup(t){const e=t,o=l(()=>({width:e.width?e.width:null,height:e.height>=0?e.height+"px":"0","background-color":e.backgroundColor?e.backgroundColor:null})),a=l(()=>({width:e.percentage>=0&&e.percentage<=100?e.percentage+"%":"0%",height:e.height>=0?e.height+"px":"0","background-color":e.colorFill?e.colorFill:null}));return(i,u)=>(s(),c("div",{class:"progress-bar",style:r(o.value)},[n("div",{class:"progress-bar-fill",style:r(a.value)},null,4)],4))}};export{p as _};