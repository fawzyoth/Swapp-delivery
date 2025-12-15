import{b as p,u as x,r as c,j as e,L as f,s as r}from"./index-CSAr9akK.js";import{c as s,T as b}from"./truck-D6n8440L.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=s("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=s("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=s("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),z=[{path:"/delivery/dashboard",icon:j,label:"Dashboard"},{path:"/delivery/scan",icon:M,label:"Scanner Bordereau"},{path:"/delivery/verifications",icon:k,label:"Mes Vérifications"},{path:"/delivery/finances",icon:g,label:"Mes Finances"}];function S(){const o=p(),a=x(),[n,i]=c.useState(!1),d=async()=>{await r.auth.signOut(),a("/delivery/login")};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>i(!n),className:"lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg",children:n?e.jsx(L,{className:"w-6 h-6"}):e.jsx(w,{className:"w-6 h-6"})}),e.jsx("aside",{className:`fixed left-0 top-0 h-full bg-white border-r border-slate-200 z-40 transition-transform duration-300 ${n?"translate-x-0":"-translate-x-full"} lg:translate-x-0 w-64`,children:e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsx("div",{className:"p-6 border-b border-slate-200",children:e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center",children:e.jsx(b,{className:"w-6 h-6 text-amber-600"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-semibold text-slate-900",children:"Espace Livreur"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Vérification des échanges"})]})]})}),e.jsx("nav",{className:"flex-1 p-4",children:e.jsx("ul",{className:"space-y-2",children:z.map(t=>{const h=t.icon,l=o.pathname===t.path;return e.jsx("li",{children:e.jsxs(f,{to:t.path,onClick:()=>i(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${l?"bg-amber-50 text-amber-600":"text-slate-600 hover:bg-slate-50"}`,children:[e.jsx(h,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:t.label})]})},t.path)})})}),e.jsxs("div",{className:"p-4 border-t border-slate-200 space-y-2",children:[e.jsxs("button",{onClick:()=>a("/"),className:"flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 w-full transition-colors",children:[e.jsx(v,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Retour à l'accueil"})]}),e.jsxs("button",{onClick:d,className:"flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 w-full transition-colors",children:[e.jsx(N,{className:"w-5 h-5"}),e.jsx("span",{className:"font-medium",children:"Déconnexion"})]})]})]})}),n&&e.jsx("div",{className:"lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30",onClick:()=>i(!1)})]})}function H({children:o}){const a=x(),[n,i]=c.useState(!1),[d,t]=c.useState(!0);c.useEffect(()=>{h()},[]);const h=async()=>{try{const{data:{session:l}}=await r.auth.getSession();if(!l){a("/delivery/login");return}const{data:y}=await r.from("merchants").select("id").eq("email",l.user.email).maybeSingle();if(y){await r.auth.signOut(),a("/delivery/login");return}const{data:u,error:m}=await r.from("delivery_persons").select("id").eq("email",l.user.email).maybeSingle();if(m||!u){a("/delivery/login");return}i(!0)}catch(l){console.error("Auth check error:",l),a("/delivery/login")}finally{t(!1)}};return d?e.jsx("div",{className:"flex min-h-screen bg-slate-50 items-center justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"})}):n?e.jsxs("div",{className:"flex min-h-screen bg-slate-50",children:[e.jsx(S,{}),e.jsx("main",{className:"flex-1 lg:ml-64",children:e.jsx("div",{className:"p-6 lg:p-8",children:o})})]}):null}export{g as B,H as D,v as H,M as S};
