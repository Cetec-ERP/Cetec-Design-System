import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BKyFwriW.js";import{B as z}from"./Box-BV3UiX_0.js";import{T as c}from"./Text-CaLd5y6v.js";import{D as V}from"./DatePicker--P5VegnO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./floating-CMrvfkt4.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-mWx37-yQ.js";import"./Icon-B7squOvl.js";import"./IconConfig-B5QOCK9V.js";import"./Spinner-BnBbwk1J.js";import"./IconButton-CDzdZCYs.js";import"./Tooltip-Q0L3A7IH.js";const t=r=>{const{startValue:s,endValue:n,onStartChange:m,onEndChange:o,minDate:a,maxDate:h,disabled:p=!1,error:y=!1,size:D,label:g="Date"}=r;return e.jsxs(z,{display:"flex",alignItems:"center",gap:"8",children:[e.jsx(V,{value:s,onChange:m,minDate:a,maxDate:n??h,label:`Start ${g}`,disabled:p,error:y,size:D}),e.jsx(c,{color:p?"text.disabled":"text.subtlest",children:"–"}),e.jsx(V,{value:n,onChange:o,minDate:s??a,maxDate:h,label:`End ${g}`,disabled:p,error:y,size:D})]})};t.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{startValue:{required:!1,tsType:{name:"union",raw:"DateValue | null",elements:[{name:"DateValue"},{name:"null"}]},description:"Start date value"},endValue:{required:!1,tsType:{name:"union",raw:"DateValue | null",elements:[{name:"DateValue"},{name:"null"}]},description:"End date value"},onStartChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateValue | null) => void",signature:{arguments:[{type:{name:"union",raw:"DateValue | null",elements:[{name:"DateValue"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called when start date changes"},onEndChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateValue | null) => void",signature:{arguments:[{type:{name:"union",raw:"DateValue | null",elements:[{name:"DateValue"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Called when end date changes"},minDate:{required:!1,tsType:{name:"DateValue"},description:"Earliest selectable date (applies to both pickers)"},maxDate:{required:!1,tsType:{name:"DateValue"},description:"Latest selectable date (applies to both pickers)"},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"DatePickerVariantProps['size']",raw:"DatePickerVariantProps['size']"},description:"Size passed to both DatePickers"},label:{required:!1,tsType:{name:"string"},description:'Accessible label prefix — used to build "Start date" and "End date" labels'}}};const Q={title:"Components/DateRangePicker",component:t,parameters:{layout:"centered"},tags:["autodocs"]},R=()=>{const[r,s]=x.useState(null),[n,m]=x.useState(null),o=a=>a?`${a.year}-${String(a.month).padStart(2,"0")}-${String(a.day).padStart(2,"0")}`:"none";return e.jsxs(z,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(t,{startValue:r,endValue:n,onStartChange:s,onEndChange:m}),e.jsxs(c,{size:"14",color:"text.subtle",children:["Start: ",o(r)," - End: ",o(n)]}),e.jsx(c,{size:"12",color:"text.subtlest",children:"Select a start date, then open the end picker - dates before the start are disabled."})]})},l={render:()=>e.jsx(t,{})},i={name:"With Values",render:()=>e.jsx(t,{startValue:{year:2026,month:2,day:1},endValue:{year:2026,month:2,day:28}})},d={name:"Ex: Start Constrains End",render:()=>e.jsx(R,{})},u={render:()=>e.jsx(t,{disabled:!0,startValue:{year:2026,month:1,day:1},endValue:{year:2026,month:12,day:31}})};var f,b,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DateRangePicker />
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,C,j;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Values',
  render: () => <DateRangePicker startValue={{
    year: 2026,
    month: 2,
    day: 1
  }} endValue={{
    year: 2026,
    month: 2,
    day: 28
  }} />
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var k,P,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Ex: Start Constrains End',
  render: () => <StartConstrainsEndExample />
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var q,v,w;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DateRangePicker disabled startValue={{
    year: 2026,
    month: 1,
    day: 1
  }} endValue={{
    year: 2026,
    month: 12,
    day: 31
  }} />
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const U=["Default","WithValues","StartConstrainsEnd","Disabled"];export{l as Default,u as Disabled,d as StartConstrainsEnd,i as WithValues,U as __namedExportsOrder,Q as default};
