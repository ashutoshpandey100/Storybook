import{R as a,r as ne}from"./index-GiUgBvb1.js";import{c as T,b as oe,a as V}from"./cn-C4dKZRVD.js";/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=T("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=T("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=T("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),P=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,q=oe,ce=(n,s)=>e=>{var c;if((s==null?void 0:s.variants)==null)return q(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:p,defaultVariants:d}=s,N=Object.keys(p).map(r=>{const o=e==null?void 0:e[r],l=d==null?void 0:d[r];if(o===null)return null;const i=P(o)||P(l);return p[r][i]}),u=e&&Object.entries(e).reduce((r,o)=>{let[l,i]=o;return i===void 0||(r[l]=i),r},{}),y=s==null||(c=s.compoundVariants)===null||c===void 0?void 0:c.reduce((r,o)=>{let{class:l,className:i,...m}=o;return Object.entries(m).every(C=>{let[g,S]=C;return Array.isArray(S)?S.includes({...d,...u}[g]):{...d,...u}[g]===S})?[...r,l,i]:r},[]);return q(n,N,y,e==null?void 0:e.class,e==null?void 0:e.className)},ue=ce("peer w-full rounded-md outline-none transition-colors duration-200",{variants:{variant:{filled:"bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500",outlined:"bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500",ghost:"bg-transparent border-b-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-none"},size:{sm:"px-2 py-1 text-sm",md:"px-3 py-2 text-base",lg:"px-4 py-3 text-lg"},invalid:{true:"!border-red-500"},disabled:{true:"cursor-not-allowed opacity-50"}},defaultVariants:{variant:"outlined",size:"md"}}),D=a.forwardRef(({className:n,type:s="text",label:e,helperText:c,errorMessage:p,variant:d,size:N,invalid:u,disabled:y,loading:r,onClear:o,...l},i)=>{const[m,C]=ne.useState(!1),g=s==="password";return a.createElement("div",{className:V("relative w-full",n)},e&&a.createElement("label",{htmlFor:l.id,className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"},e),a.createElement("div",{className:"relative"},a.createElement("input",{ref:i,type:g?m?"text":"password":s,className:V(ue({variant:d,size:N,invalid:u,disabled:y})),disabled:y||r,"aria-invalid":u,...l}),r&&a.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3"},a.createElement("div",{className:"h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500"})),!r&&o&&l.value&&a.createElement("button",{type:"button",onClick:o,className:"absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300","aria-label":"Clear input"},a.createElement(de,{size:20})),g&&a.createElement("button",{type:"button",onClick:()=>C(!m),className:"absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300","aria-label":m?"Hide password":"Show password"},m?a.createElement(le,{size:20}):a.createElement(ie,{size:20}))),p&&u?a.createElement("p",{className:"mt-1 text-sm text-red-500"},p):c?a.createElement("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400"},c):null)});D.displayName="InputField";D.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const ge={title:"Components/InputField",component:D,argTypes:{variant:{control:{type:"radio"},options:["filled","outlined","ghost"]},size:{control:{type:"radio"},options:["sm","md","lg"]}}},t={args:{label:"Username",placeholder:"Enter your username"}},b={args:{...t.args,variant:"filled"}},v={args:{...t.args,variant:"ghost"}},f={args:{...t.args,invalid:!0,errorMessage:"This field is required."}},x={args:{...t.args,disabled:!0}},h={args:{...t.args,loading:!0}},w={args:{...t.args,helperText:"This is a hint."}},k={args:{...t.args,label:"Password",type:"password"}},E={args:{...t.args,value:"Some text",onClear:()=>alert("Cleared!")}};var z,I,O;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username'
  }
}`,...(O=(I=t.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,F,M;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'filled'
  }
}`,...(M=(F=b.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var _,A,H;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'ghost'
  }
}`,...(H=(A=v.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var L,R,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    invalid: true,
    errorMessage: 'This field is required.'
  }
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,G,X;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(X=(G=x.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var K,Z,$;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loading: true
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var B,J,Q;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    helperText: 'This is a hint.'
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,re;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password'
  }
}`,...(re=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: 'Some text',
    onClear: () => alert('Cleared!')
  }
}`,...(se=(te=E.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ye=["Default","Filled","Ghost","Invalid","Disabled","Loading","WithHelperText","Password","Clearable"];export{E as Clearable,t as Default,x as Disabled,b as Filled,v as Ghost,f as Invalid,h as Loading,k as Password,w as WithHelperText,ye as __namedExportsOrder,ge as default};
