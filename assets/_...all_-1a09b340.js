import{o as t,c as r,t as o,aj as s,i as a,a as i,j as _,T as d,f as l,c0 as p,p as m}from"./index-b0764633.js";const u={class:"text-center mb-4"},h={key:0,class:"text-h1 font-weight-medium"},f={key:1,class:"text-h5 font-weight-medium mb-3"},g={key:2},x={__name:"ErrorHeader",props:{errorCode:{type:String,required:!1},errorTitle:{type:String,required:!1},errorDescription:{type:String,required:!1}},setup(c){const e=c;return(n,w)=>(t(),r("div",u,[e.errorCode?(t(),r("h1",h,o(e.errorCode),1)):s("",!0),e.errorTitle?(t(),r("h5",f,o(e.errorTitle),1)):s("",!0),e.errorDescription?(t(),r("p",g,o(e.errorDescription),1)):s("",!0)]))}},y="/sneat/assets/404-df5d1da7.png";const k={class:"misc-wrapper"},v={class:"misc-avatar w-100 text-center"},V={__name:"[...all]",setup(c){return(e,n)=>(t(),r("div",k,[a(x,{"error-code":"404","error-title":"Page Not Found ⚠️","error-description":"We couldn't find the page you are looking for."}),i("div",v,[a(d,{src:_(y),alt:"Coming Soon","max-width":800,class:"mx-auto"},null,8,["src"]),a(p,{to:"/",class:"mt-10"},{default:l(()=>[m(" Back to Home ")]),_:1})])]))}};export{V as default};
