(this.webpackJsonphepsiburada=this.webpackJsonphepsiburada||[]).push([[0],{64:function(t,e,a){},79:function(t,e,a){"use strict";a.r(e);var n,s=a(0),c=a.n(s),i=a(13),r=a.n(i),o=(a(64),a(83)),d=a(54),l=a(84),j=a(18),b=a.p+"static/media/hb-logo.7eb8d2fa.svg",u=a(2),m=function(){return Object(u.jsxs)(o.a,{"data-testid":"navigation-container",className:"navigation-container py-3 px-0 d-flex align-items-center justify-content-between border-bottom",children:[Object(u.jsx)(d.a,{children:Object(u.jsx)(j.b,{"data-testid":"navigation-home-link",to:"/",children:Object(u.jsx)(l.a,{"data-testid":"navigation-logo",alt:"Hepsiburada Logo",src:b})})}),Object(u.jsxs)(d.a,{"data-testid":"navigation-right",className:"navigation-text text-right",children:[Object(u.jsx)("span",{children:"Link"}),Object(u.jsx)("span",{children:"VOTE"}),Object(u.jsx)("span",{children:" Challenge"})]})]})},p=a(56),h=a(85),O=function(){return Object(u.jsx)("div",{"data-testid":"submit-link-wrapper",className:"submit-link-button pb-4",children:Object(u.jsx)(j.b,{"data-testid":"submit-link",to:"/submit",children:Object(u.jsxs)(p.a,{"data-testid":"submit-link-button",className:"w-100 py-1 clearfix",variant:"outline-primary",size:"lg",children:[Object(u.jsx)(h.a,{"data-testid":"submit-link-button-icon"}),Object(u.jsx)("span",{children:"Submit Link"})]})})})},x=a(12),f=a(94),g=a(92),v=a(86),w=a(87),N=a(88),k=a(9);!function(t){t.asc="asc",t.desc="desc",t.page="page"}(n||(n={}));var y=Object(s.createContext)({}),C=function(t){var e=Object(k.f)(),a=Object(s.useState)(JSON.parse(localStorage.getItem("posts")||"[]")),c=Object(x.a)(a,2),i=c[0],r=c[1],o=Object(s.useState)([]),d=Object(x.a)(o,2),l=d[0],j=d[1],b=Object(s.useState)(3),m=Object(x.a)(b,1)[0],p=function(){var t=new URLSearchParams(e.location.search),a=t.get("sort"),s=Number(t.get("page"))||1,c=i.slice();a===n.asc?c.sort((function(t,e){return t.votes-e.votes||e.timestamp-t.timestamp})):a===n.desc?c.sort((function(t,e){return e.votes-t.votes||e.timestamp-t.timestamp})):c.sort((function(t,e){return e.timestamp-t.timestamp})),c=c.slice(s*m-m,s*m),j(c),localStorage.setItem("posts",JSON.stringify(i))};return Object(s.useEffect)((function(){return p(),e.listen(p)}),[i]),Object(u.jsx)(y.Provider,{value:{posts:i,setPosts:r,filteredPosts:l,perPage:m,handleClickDeletePost:function(t){var a=i.filter((function(e){return e.timestamp!==t}));r(a);var n=new URLSearchParams(e.location.search),s=Number(n.get("page"));0===(a=a.slice(s*m-m,s*m)).length&&(n.set("page",String(s-1)),e.push({pathname:"/",search:n.toString()}))},handleClickUpvote:function(t){r(i.map((function(e){return e.timestamp===t&&e.votes++,e})))},handleClickDownvote:function(t){r(i.map((function(e){return e.timestamp===t&&e.votes--,e})))}},children:t.children})},S=function(){var t=Object(s.useContext)(y);if(void 0===t)throw new Error("usePosts must be used within a PostsProvider");return t},P=a(23),L=function(t){var e=t.timestamp,a=t.votes,n=t.name,c=t.url,i=S(),r=i.handleClickDeletePost,o=i.handleClickUpvote,d=i.handleClickDownvote,l=Object(P.useToasts)().addToast,j=Object(s.useState)(!1),b=Object(x.a)(j,2),m=b[0],h=b[1],O=function(){return h(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(f.a,{"data-testid":"post-container",className:"mt-2 border post-container d-flex flex-row p-3",children:[Object(u.jsxs)("div",{"data-testid":"post-votes-container",className:"py-1 px-2 votes-container d-flex flex-column align-items-center justify-content-center border rounded",children:[Object(u.jsx)("p",{className:"m-0 h3 font-weight-bolder",children:a}),Object(u.jsx)("p",{className:"m-0",children:"POINTS"})]}),Object(u.jsxs)(f.a.Body,{className:"py-0",children:[Object(u.jsx)(f.a.Title,{"data-testid":"post-name",className:"mb-1",children:n}),Object(u.jsxs)(f.a.Text,{"data-testid":"post-url",children:["(",c,")"]}),Object(u.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(u.jsxs)("button",{"data-testid":"post-upvote-button",onClick:function(){return o(e)},className:"vote-button text-secondary border-0 bg-transparent",children:[Object(u.jsx)(v.a,{}),Object(u.jsx)("span",{children:"Up Vote"})]}),Object(u.jsxs)("button",{"data-testid":"post-downvote-button",onClick:function(){return d(e)},className:"vote-button text-secondary border-0 bg-transparent  ",children:[Object(u.jsx)(w.a,{}),Object(u.jsx)("span",{children:"Down Vote"})]})]})]}),Object(u.jsx)(N.a,{"data-testid":"post-delete-button",onClick:function(){return h(!0)},className:"remove-icon text-danger"})]}),Object(u.jsxs)(g.a,{"data-testid":"post-modal",show:m,onHide:O,children:[Object(u.jsx)(g.a.Header,{closeButton:!0,children:Object(u.jsx)(g.a.Title,{"data-testid":"post-modal-title",children:"Remove Link"})}),Object(u.jsxs)(g.a.Body,{"data-testid":"post-modal-body",children:[Object(u.jsx)("p",{children:"Do you want to remove:"}),Object(u.jsx)("h3",{children:n})]}),Object(u.jsxs)(g.a.Footer,{children:[Object(u.jsx)(p.a,{"data-testid":"post-modal-button-close",onClick:O,variant:"secondary",children:"No"}),Object(u.jsx)(p.a,{"data-testid":"post-modal-button-delete",onClick:function(){r(e),h(!1),l("".concat(n," REMOVED"),{appearance:"success",autoDismiss:!0})},variant:"primary",children:"Yes"})]})]})]})},D=a(27),T=a(91),F=a(89),I=function(){var t,e=Object(k.f)(),a=(t={},Object(D.a)(t,n.asc,Object(u.jsxs)(u.Fragment,{children:["Less Voted (A ",Object(u.jsx)(F.a,{})," Z)"]})),Object(D.a)(t,n.desc,Object(u.jsxs)(u.Fragment,{children:["Most Voted (Z ",Object(u.jsx)(F.a,{})," A)"]})),Object(D.a)(t,"orderby","Order By"),t),c=new URLSearchParams(e.location.search).get("sort"),i=Object(s.useState)(c||"orderby"),r=Object(x.a)(i,2),o=r[0],d=r[1],l=function(t){d(t),e.push({search:"?sort=".concat(t)})};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(T.a,{"data-testid":"dropdown-wrapper",className:"w-50 mt-4",children:[Object(u.jsx)(T.a.Toggle,{"data-testid":"dropdown-selected",className:"w-100 border text-left d-flex align-items-center justify-content-between text-capitalize bg-transparent text-secondary",children:a[o]}),Object(u.jsxs)(T.a.Menu,{className:"w-100",children:[Object(u.jsx)(T.a.Item,{"data-testid":"dropdown-item-orderby",active:"orderby"===o,className:"text-capitalize",onClick:function(){return l("orderby")},children:"Order By"}),Object(u.jsxs)(T.a.Item,{"data-testid":"dropdown-item-desc",active:n.desc===o,className:"text-capitalize",onClick:function(){return l(n.desc)},children:["Most Voted (Z ",Object(u.jsx)(F.a,{})," A)"]}),Object(u.jsxs)(T.a.Item,{"data-testid":"dropdown-item-asc",active:n.asc===o,className:"text-capitalize",onClick:function(){return l(n.asc)},children:["Less Voted (A ",Object(u.jsx)(F.a,{})," Z)"]})]})]})})},R=a(95),U=function(){for(var t=Object(k.f)(),e=S(),a=e.posts,n=e.perPage,c=new URLSearchParams(t.location.search),i=Object(s.useState)(Number(c.get("page")||1)),r=Object(x.a)(i,2),o=r[0],d=r[1],l=Math.ceil(a.length/n),j=[],b=1;b<=l;b++)j.push(b);var m=function(e){var a=new URLSearchParams(t.location.search);a.set("page",String(e)),t.push({pathname:"/",search:a.toString()})};return Object(s.useEffect)((function(){return t.listen((function(){var e=new URLSearchParams(t.location.search);d(Number(e.get("page"))||1)}))}),[]),0===j.length?null:Object(u.jsxs)(R.a,{"data-testid":"pagination-wrapper",className:"mt-3 d-flex flex-row justify-content-center",children:[o>1&&Object(u.jsx)(R.a.Prev,{"data-testid":"pagination-previous",onClick:function(){return m(o-1)}}),j.map((function(t,e){return Object(u.jsx)(R.a.Item,{"data-testid":"pagination-item",active:t===o,onClick:function(){return m(t)},children:t},t)})),o<j.length&&Object(u.jsx)(R.a.Next,{"data-testid":"pagination-next",onClick:function(){return m(o+1)}})]})},V=a(57),B=function(){var t=S().filteredPosts;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I,{}),t.map((function(t){return Object(u.jsx)(L,Object(V.a)({},t),t.timestamp)})),Object(u.jsx)(U,{})]})},E=a(58),A=a(93),z=function(){var t=S(),e=t.posts,a=t.setPosts,n=Object(s.useState)(""),c=Object(x.a)(n,2),i=c[0],r=c[1],o=Object(s.useState)(""),d=Object(x.a)(o,2),l=d[0],j=d[1],b=Object(s.useState)(!1),m=Object(x.a)(b,2),h=m[0],O=m[1],f=Object(P.useToasts)().addToast;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(A.a,{"data-testid":"form-container",className:"clearfix",noValidate:!0,validated:h,onSubmit:function(t){if(t.preventDefault(),!1===t.currentTarget.checkValidity())return t.stopPropagation(),void O(!0);O(!1),a([].concat(Object(E.a)(e),[{timestamp:Date.now(),name:i,url:l,votes:0}])),r(""),j(""),f("".concat(i," ADDED"),{appearance:"success",autoDismiss:!0})},children:[Object(u.jsx)("h2",{className:"my-4",children:"Add a new link"}),Object(u.jsxs)(A.a.Group,{className:"mb-3",controlId:"",children:[Object(u.jsx)(A.a.Label,{children:"Link Name"}),Object(u.jsx)(A.a.Control,{"data-testid":"form-control-name",value:i,onChange:function(t){r(t.target.value)},type:"text",placeholder:"Link Name",minLength:2,maxLength:100,required:!0}),Object(u.jsx)(A.a.Control.Feedback,{"data-testid":"name-invalid",type:"invalid",children:"Please enter a link name."})]}),Object(u.jsxs)(A.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(A.a.Label,{children:"Link URL"}),Object(u.jsx)(A.a.Control,{"data-testid":"form-control-url",value:l,onChange:function(t){j(t.target.value)},type:"url",placeholder:"Link URL",required:!0}),Object(u.jsx)(A.a.Control.Feedback,{"data-testid":"url-invalid",type:"invalid",children:"Please enter a url."})]}),Object(u.jsx)(p.a,{"data-testid":"form-submit-button",variant:"primary",type:"submit",size:"lg",className:"float-right",children:"Submit"})]})})},M=function(){return Object(u.jsxs)("div",{"data-testid":"home",className:"page-wrapper mt-5",children:[Object(u.jsx)(O,{}),Object(u.jsx)(B,{})]})},J=a(90),Z=function(){return Object(u.jsxs)("div",{"data-testid":"submit",className:"page-wrapper mt-3",children:[Object(u.jsxs)(j.b,{"data-testid":"submit-link",to:"/",className:"d-flex align-items-center font-weight-bold",children:[Object(u.jsx)(J.a,{className:"mr-2"}),"Return to list"]}),Object(u.jsx)(z,{})]})},H=function(){return Object(u.jsx)("h1",{"data-testid":"notfound",children:"404 not found"})};var q=function(){return Object(u.jsx)("div",{className:"App pb-4 px-4",children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(C,{children:Object(u.jsx)(P.ToastProvider,{autoDismiss:!0,autoDismissTimeout:3e3,placement:"top-center",children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{path:"/submit",children:Object(u.jsx)(Z,{})}),Object(u.jsx)(k.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(k.a,{component:H})]})})})]})})},G=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root")),G()}},[[79,1,2]]]);
//# sourceMappingURL=main.f909d028.chunk.js.map