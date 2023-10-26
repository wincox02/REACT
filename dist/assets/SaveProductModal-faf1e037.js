import{r as n,j as t,c as u,u as h,e as S,f as G}from"./index-68470780.js";import{B as V}from"./ProductsTable-dba3e635.js";import{P as C}from"./divWithClassName-ab280b7d.js";import{M as N}from"./Modal-be153b84.js";import"./Admin-f2a3b927.js";import"./BootstrapModalManager-a1d1eda3.js";function oe({as:s,bsPrefix:a,className:e,...o}){a=h(a,"col");const l=S(),r=G(),i=[],m=[];return l.forEach(d=>{const c=o[d];delete o[d];let f,j,x;typeof c=="object"&&c!=null?{span:f,offset:j,order:x}=c:f=c;const F=d!==r?`-${d}`:"";f&&i.push(f===!0?`${a}${F}`:`${a}${F}-${f}`),x!=null&&m.push(`order${F}-${x}`),j!=null&&m.push(`offset${F}-${j}`)}),[{...o,className:u(e,...i,...m)},{as:s,bsPrefix:a,spans:i}]}const E=n.forwardRef((s,a)=>{const[{className:e,...o},{as:l="div",bsPrefix:r,spans:i}]=oe(s);return t.jsx(l,{...o,ref:a,className:u(e,!i.length&&r)})});E.displayName="Col";const $=E,le={type:C.string,tooltip:C.bool,as:C.elementType},I=n.forwardRef(({as:s="div",className:a,type:e="valid",tooltip:o=!1,...l},r)=>t.jsx(s,{...l,ref:r,className:u(a,`${e}-${o?"tooltip":"feedback"}`)}));I.displayName="Feedback";I.propTypes=le;const O=I,re=n.createContext({}),y=re,M=n.forwardRef(({id:s,bsPrefix:a,className:e,type:o="checkbox",isValid:l=!1,isInvalid:r=!1,as:i="input",...m},d)=>{const{controlId:c}=n.useContext(y);return a=h(a,"form-check-input"),t.jsx(i,{...m,ref:d,type:o,id:s||c,className:u(e,a,l&&"is-valid",r&&"is-invalid")})});M.displayName="FormCheckInput";const q=M,D=n.forwardRef(({bsPrefix:s,className:a,htmlFor:e,...o},l)=>{const{controlId:r}=n.useContext(y);return s=h(s,"form-check-label"),t.jsx("label",{...o,ref:l,htmlFor:e||r,className:u(a,s)})});D.displayName="FormCheckLabel";const L=D;function ne(s,a){return n.Children.toArray(s).some(e=>n.isValidElement(e)&&e.type===a)}const z=n.forwardRef(({id:s,bsPrefix:a,bsSwitchPrefix:e,inline:o=!1,reverse:l=!1,disabled:r=!1,isValid:i=!1,isInvalid:m=!1,feedbackTooltip:d=!1,feedback:c,feedbackType:f,className:j,style:x,title:F="",type:v="checkbox",label:R,children:k,as:P="input",...ee},se)=>{a=h(a,"form-check"),e=h(e,"form-switch");const{controlId:b}=n.useContext(y),ae=n.useMemo(()=>({controlId:s||b}),[b,s]),B=!k&&R!=null&&R!==!1||ne(k,L),te=t.jsx(q,{...ee,type:v==="switch"?"checkbox":v,ref:se,isValid:i,isInvalid:m,disabled:r,as:P});return t.jsx(y.Provider,{value:ae,children:t.jsx("div",{style:x,className:u(j,B&&a,o&&`${a}-inline`,l&&`${a}-reverse`,v==="switch"&&e),children:k||t.jsxs(t.Fragment,{children:[te,B&&t.jsx(L,{title:F,children:R}),c&&t.jsx(O,{type:f,tooltip:d,children:c})]})})})});z.displayName="FormCheck";const w=Object.assign(z,{Input:q,Label:L}),A=n.forwardRef(({bsPrefix:s,type:a,size:e,htmlSize:o,id:l,className:r,isValid:i=!1,isInvalid:m=!1,plaintext:d,readOnly:c,as:f="input",...j},x)=>{const{controlId:F}=n.useContext(y);return s=h(s,"form-control"),t.jsx(f,{...j,type:a,size:o,ref:x,readOnly:c,id:l||F,className:u(r,d?`${s}-plaintext`:s,e&&`${s}-${e}`,a==="color"&&`${s}-color`,i&&"is-valid",m&&"is-invalid")})});A.displayName="FormControl";const ce=Object.assign(A,{Feedback:O}),_=n.forwardRef(({className:s,bsPrefix:a,as:e="div",...o},l)=>(a=h(a,"form-floating"),t.jsx(e,{ref:l,className:u(s,a),...o})));_.displayName="FormFloating";const ie=_,H=n.forwardRef(({controlId:s,as:a="div",...e},o)=>{const l=n.useMemo(()=>({controlId:s}),[s]);return t.jsx(y.Provider,{value:l,children:t.jsx(a,{...e,ref:o})})});H.displayName="FormGroup";const J=H,K=n.forwardRef(({as:s="label",bsPrefix:a,column:e=!1,visuallyHidden:o=!1,className:l,htmlFor:r,...i},m)=>{const{controlId:d}=n.useContext(y);a=h(a,"form-label");let c="col-form-label";typeof e=="string"&&(c=`${c} ${c}-${e}`);const f=u(l,a,o&&"visually-hidden",e&&c);return r=r||d,e?t.jsx($,{ref:m,as:"label",className:f,htmlFor:r,...i}):t.jsx(s,{ref:m,className:f,htmlFor:r,...i})});K.displayName="FormLabel";const me=K,Q=n.forwardRef(({bsPrefix:s,className:a,id:e,...o},l)=>{const{controlId:r}=n.useContext(y);return s=h(s,"form-range"),t.jsx("input",{...o,type:"range",ref:l,className:u(a,s),id:e||r})});Q.displayName="FormRange";const de=Q,U=n.forwardRef(({bsPrefix:s,size:a,htmlSize:e,className:o,isValid:l=!1,isInvalid:r=!1,id:i,...m},d)=>{const{controlId:c}=n.useContext(y);return s=h(s,"form-select"),t.jsx("select",{...m,size:e,ref:d,className:u(o,s,a&&`${s}-${a}`,l&&"is-valid",r&&"is-invalid"),id:i||c})});U.displayName="FormSelect";const fe=U,W=n.forwardRef(({bsPrefix:s,className:a,as:e="small",muted:o,...l},r)=>(s=h(s,"form-text"),t.jsx(e,{...l,ref:r,className:u(a,s,o&&"text-muted")})));W.displayName="FormText";const pe=W,X=n.forwardRef((s,a)=>t.jsx(w,{...s,ref:a,type:"switch"}));X.displayName="Switch";const ue=Object.assign(X,{Input:w.Input,Label:w.Label}),Y=n.forwardRef(({bsPrefix:s,className:a,children:e,controlId:o,label:l,...r},i)=>(s=h(s,"form-floating"),t.jsxs(J,{ref:i,className:u(a,s),controlId:o,...r,children:[e,t.jsx("label",{htmlFor:o,children:l})]})));Y.displayName="FloatingLabel";const he=Y,je={_ref:C.any,validated:C.bool,as:C.elementType},T=n.forwardRef(({className:s,validated:a,as:e="form",...o},l)=>t.jsx(e,{...o,ref:l,className:u(s,a&&"was-validated")}));T.displayName="Form";T.propTypes=je;const p=Object.assign(T,{Group:J,Control:ce,Floating:ie,Check:w,Switch:ue,Label:me,Text:pe,Range:de,Select:fe,FloatingLabel:he}),Z=n.forwardRef(({bsPrefix:s,className:a,as:e="div",...o},l)=>{const r=h(s,"row"),i=S(),m=G(),d=`${r}-cols`,c=[];return i.forEach(f=>{const j=o[f];delete o[f];let x;j!=null&&typeof j=="object"?{cols:x}=j:x=j;const F=f!==m?`-${f}`:"";x!=null&&c.push(`${d}${F}-${x}`)}),t.jsx(e,{ref:l,...o,className:u(a,r,...c)})});Z.displayName="Row";const g=Z,ge=({onSave:s,onHide:a,product:e,show:o})=>{const[l,r]=n.useState(!1),i=m=>{const d=m.currentTarget;if(m.preventDefault(),m.stopPropagation(),d.checkValidity()===!1){r(!0);return}const c=Object.fromEntries(new FormData(d));s({...e,...c})};return t.jsx(N,{show:o,onHide:a,children:t.jsxs(p,{noValidate:!0,onSubmit:i,validated:l,children:[t.jsx(N.Header,{closeButton:!0,children:t.jsxs(N.Title,{children:[(e==null?void 0:e.id)===0?"Create":"Edit"," Product"]})}),t.jsxs(N.Body,{children:[t.jsx(g,{className:"mb-3",children:t.jsxs(p.Group,{as:$,children:[t.jsx(p.Label,{children:"Title"}),t.jsx(p.Control,{defaultValue:e==null?void 0:e.title,name:"title",placeholder:"Title",required:!0,type:"text"})]})}),t.jsx(g,{className:"mb-3",children:t.jsxs(p.Group,{as:$,children:[t.jsx(p.Label,{children:"Description"}),t.jsx(p.Control,{defaultValue:e==null?void 0:e.description,name:"description",placeholder:"Description",required:!0,type:"text"})]})}),t.jsx(g,{className:"mb-3",children:t.jsxs(p.Group,{as:$,children:[t.jsx(p.Label,{children:"Category"}),t.jsx(p.Control,{defaultValue:e==null?void 0:e.category,name:"category",placeholder:"Category",required:!0,type:"text"})]})}),t.jsx(g,{className:"mb-3",children:t.jsxs(p.Group,{as:$,children:[t.jsx(p.Label,{children:"Image"}),t.jsx(p.Control,{defaultValue:e==null?void 0:e.image,name:"image",placeholder:"Image",required:!0,type:"text"})]})}),t.jsx(g,{className:"mb-3",children:t.jsxs(p.Group,{as:$,children:[t.jsx(p.Label,{children:"Price"}),t.jsx(p.Control,{defaultValue:e==null?void 0:e.price,name:"price",placeholder:"Price",required:!0,type:"text"})]})})]}),t.jsxs(N.Footer,{children:[t.jsx(V,{variant:"secondary",onClick:a,children:"Close"}),t.jsx(V,{type:"submit",variant:"primary",children:"Save"})]})]})})};export{ge as default};
