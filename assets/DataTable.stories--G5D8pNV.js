import{r as f,R as a}from"./index-GiUgBvb1.js";import{c as R,a as M}from"./cn-C4dKZRVD.js";/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=R("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=R("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function A({data:n,columns:c,loading:z=!1,selectable:l=!1,onRowSelect:s}){const[r,_]=f.useState(null),[g,y]=f.useState(new Set),k=f.useMemo(()=>{let e=[...n];return r!==null&&e.sort((t,o)=>t[r.key]<o[r.key]?r.direction==="ascending"?-1:1:t[r.key]>o[r.key]?r.direction==="ascending"?1:-1:0),e},[n,r]),J=e=>{let t="ascending";r&&r.key===e&&r.direction==="ascending"&&(t="descending"),_({key:e,direction:t})},U=e=>{const t=new Set(g);t.has(e)?t.delete(e):t.add(e),y(t),s&&s(n.filter(o=>t.has(o.id)))},V=e=>{if(e.target.checked){const t=new Set(n.map(o=>o.id));y(t),s&&s(n)}else y(new Set),s&&s([])};return a.createElement("div",{className:"overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"},a.createElement("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},a.createElement("thead",{className:"bg-gray-50 dark:bg-gray-800"},a.createElement("tr",null,l&&a.createElement("th",{scope:"col",className:"p-4"},a.createElement("input",{type:"checkbox",onChange:V})),c.map(e=>a.createElement("th",{key:e.key,scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"},a.createElement("div",{className:"flex items-center"},e.title,e.sortable&&a.createElement("button",{onClick:()=>J(e.dataIndex),className:"ml-2"},(r==null?void 0:r.key)===e.dataIndex?r.direction==="ascending"?a.createElement(h,{size:16}):a.createElement(O,{size:16}):a.createElement(h,{size:16,className:"text-gray-400"}))))))),a.createElement("tbody",{className:"bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"},z?a.createElement("tr",null,a.createElement("td",{colSpan:c.length+(l?1:0),className:"text-center p-4"},"Loading...")):k.length===0?a.createElement("tr",null,a.createElement("td",{colSpan:c.length+(l?1:0),className:"text-center p-4"},"No data available")):k.map(e=>a.createElement("tr",{key:e.id,className:M(g.has(e.id)&&"bg-blue-50 dark:bg-blue-900")},l&&a.createElement("td",{className:"p-4"},a.createElement("input",{type:"checkbox",checked:g.has(e.id),onChange:()=>U(e.id)})),c.map(t=>a.createElement("td",{key:t.key,className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"},String(e[t.dataIndex]))))))))}A.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:""}}};const j={title:"Components/DataTable",component:A},u=[{key:"name",title:"Name",dataIndex:"name",sortable:!0},{key:"age",title:"Age",dataIndex:"age",sortable:!0},{key:"city",title:"City",dataIndex:"city"}],L=[{id:1,name:"John Doe",age:30,city:"New York"},{id:2,name:"Jane Doe",age:25,city:"London"},{id:3,name:"Sam Smith",age:45,city:"Paris"}],d={args:{columns:u,data:L}},i={args:{columns:u,data:[],loading:!0}},m={args:{columns:u,data:[]}},p={args:{columns:u,data:L,selectable:!0,onRowSelect:n=>console.log(n)}};var b,x,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns,
    data
  }
}`,...(w=(x=d.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var E,S,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    loading: true
  }
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,T,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns,
    data: []
  }
}`,...(C=(T=m.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,I,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    columns,
    data,
    selectable: true,
    onRowSelect: selectedRows => console.log(selectedRows)
  }
}`,...(q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const B=["Default","Loading","Empty","Selectable"];export{d as Default,m as Empty,i as Loading,p as Selectable,B as __namedExportsOrder,j as default};
