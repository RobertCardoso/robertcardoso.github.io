(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/aevent.f866b9d9.jpg"},129:function(e,t,a){e.exports=a(180)},136:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(106),c=a.n(r),l=(a(136),a(11)),i=a(266),m=a(267),s=a(269),u=a(270),d=a(3),p=a(33),E=a(20),g=a.n(E),h=a(253),b=a(261),f=a(262),v=a(265),x=a(263),k=a(250),j=a(234),C=a(264),y=a(147),w=a.n(y),O=g.a.parse(document.cookie),S=window.location.pathname,A=function(e){var t=Object(d.m)(),a=Object(n.useState)(!1),r=Object(l.a)(a,2),c=r[0],E=r[1],y=e.window,A=o.a.useState(!1),I=Object(l.a)(A,2),N=I[0],D=I[1],W=(Object.entries(O),function(){D(!N)});Object(n.useEffect)(function(){E("/login"!==S&&"/register"!==S)},[]);var T=o.a.createElement(h.a,{onClick:function(){t("/addevent")},sx:{backgroundColor:"red",color:"white",marginRight:"20px"},variant:"contained",color:"warning"},"Add Event"),z=o.a.createElement(b.a,{onClick:W,sx:{textAlign:"center"}},o.a.createElement(i.a,{variant:"h6",sx:{my:2}},"A - EVENT"),o.a.createElement(f.a,null),o.a.createElement(x.a,null,o.a.createElement(k.a,{disablePadding:!0,sx:{color:"red"}},o.a.createElement(j.a,{sx:{textAlign:"center"}},c&&o.a.createElement(C.a,{primary:o.a.createElement(p.b,{to:"/addevent"},"ADD EVENT")}))),o.a.createElement(k.a,{disablePadding:!0},o.a.createElement(j.a,{sx:{textAlign:"center"}},o.a.createElement(C.a,{primary:o.a.createElement(p.b,{to:"/"},"EVENTS")}))),o.a.createElement(k.a,{disablePadding:!0},o.a.createElement(j.a,{sx:{textAlign:"center"}},c&&o.a.createElement(C.a,{primary:"LOGOUT",onClick:function(){document.cookie=g.a.serialize("loggedIn","false",{maxAge:0}),document.cookie=g.a.serialize("userId",null,{maxAge:0}),document.cookie=g.a.serialize("jwt",null,{maxAge:0}),E(!1),t("/login")}}))))),P=void 0!==y?function(){return y().document.body}:void 0;return o.a.createElement(b.a,{sx:{display:"flex"}},o.a.createElement(m.a,{component:"nav",sx:{backgroundColor:"black"}},o.a.createElement(s.a,null,o.a.createElement(u.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:W,sx:{mr:2,display:{sm:"none"}}},o.a.createElement(w.a,null)),o.a.createElement(i.a,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}},"A - EVENT"),o.a.createElement(b.a,{sx:{display:{xs:"none",sm:"block"}}},c&&T,o.a.createElement(h.a,{sx:{color:"#fff",marginRight:"20px"},onClick:function(){t("/")}},"Events"),c&&o.a.createElement(h.a,{sx:{color:"#fff"},onClick:function(){document.cookie=g.a.serialize("loggedIn","false",{maxAge:0}),document.cookie=g.a.serialize("userId",null,{maxAge:0}),document.cookie=g.a.serialize("jwt",null,{maxAge:0}),E(!1),t("/login")}},"logout")))),o.a.createElement(b.a,{component:"nav"},o.a.createElement(v.a,{container:P,variant:"temporary",open:N,onClose:W,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}}},z)),o.a.createElement(b.a,{component:"main",sx:{p:3}},o.a.createElement(s.a,null)))},I=a(154),N=a(5),D=a(151),W=a(254),T=a(255),z=a(245),P=a(271),q=a(248),R=a(256),B=a(257),V=a(71),M=a.n(V),F=a(179),L=a(260),G=a(249),H=(a(241),a(78),a(38)),U=a.n(H);var J=function(){var e=Object(d.m)(),t=Object(F.a)(),a=Object(n.useState)(!1),r=Object(l.a)(a,2),c=r[0],m=r[1],s=Object(n.useState)(void 0),u=Object(l.a)(s,2),p=u[0],E=(u[1],Object(n.useState)({email:"",password:""})),f=Object(l.a)(E,2),v=f[0],x=f[1],k=function(e){var t=e.target,a=t.name,n=t.value;x(function(e){return Object(D.a)({},e,Object(N.a)({},a,n))})};return o.a.createElement("div",{className:"App"},o.a.createElement(L.a,{theme:t},o.a.createElement(W.a,{component:"main",maxWidth:"xs",className:"login"},o.a.createElement(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement(T.a,{sx:{m:1,bgcolor:"black"}},o.a.createElement(M.a,null)),o.a.createElement(i.a,{component:"h1",variant:"h5"},"Login"),o.a.createElement(b.a,{component:"form",className:"login-form",onSubmit:function(t){t.preventDefault(),U.a.post("https://a-event.herokuapp.com/login",{email:v.email,password:v.password}).then(function(t){console.log(t),document.cookie="jwt=".concat(t.data.signedToken,";max-age=60*1000"),document.cookie=g.a.serialize("loggedIn",!0,{maxAge:6e6}),document.cookie="userId=".concat(t.data.userId,";max-age=60*1000"),console.log("headers",t.headers),console.log("cookie",document.cookie),e("/"),document.location.reload()}).catch(function(e){console.log(e)})},noValidate:!0,sx:{mt:1}},o.a.createElement(z.a,{required:!0,margin:"normal",onChange:k,value:v.email,fullWidth:!0,name:"email",label:"Email",type:"email"}),o.a.createElement(z.a,{required:!0,margin:"normal",fullWidth:!0,onChange:k,value:v.password,name:"password",label:"Password",type:"password"}),o.a.createElement(P.a,{control:o.a.createElement(q.a,{value:"remember",color:"primary"}),label:"Remember me"}),o.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",className:"login-button",sx:{mt:3,mb:2,backgroundColor:"black"}},"Login"),o.a.createElement(R.a,{container:!0,sx:{display:"flex",justifyContent:"center"}},o.a.createElement(R.a,{item:!0},o.a.createElement(B.a,{href:"/register",variant:"body2",sx:{color:"black"}},"Don't have an account? Sign Up"))))))),o.a.createElement(G.a,{open:c,onClose:function(){m(!1)},TransitionComponent:p,message:"I love snacks",autoHideDuration:3e3,key:p?p.name:""}))},K=a(27),Q=a(30),X=a(39),Y=a(31),Z=a(37),$=a(4),_=a(268),ee=a(246),te=a(152),ae=a.n(te);var ne=function(e){var t=Object(n.useState)(!1),r=Object(l.a)(t,2),c=r[0],m=r[1],s=g.a.parse(document.cookie),u=Number(s.userId),d=Object($.a)("img")({margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"});return Object(n.useEffect)(function(){if(u==e.userId)return m(!0),void console.log("carai")},[]),o.a.createElement("div",null,o.a.createElement(_.a,{className:"EventPaper",sx:{mx:"2px",transform:"scale(1)",width:380,height:"130px",p:2,margin:"20px",flexGrow:1,backgroundColor:function(e){return"dark"===e.palette.mode?"#1A2027":"#121212"}}},o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0},o.a.createElement(ee.a,{sx:{width:128,height:128}},o.a.createElement(d,{src:a(104)}))),o.a.createElement(R.a,{item:!0,xs:12,sm:!0,container:!0},o.a.createElement(R.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},o.a.createElement(R.a,{item:!0,xs:!0},o.a.createElement(i.a,{gutterBottom:!0,variant:"subtitle1",component:"div",color:"white"},e.name),o.a.createElement(i.a,{variant:"body2",gutterBottom:!0,color:"white"},e.address),o.a.createElement(i.a,{variant:"body2",color:"rgba(255, 255, 255, 0.7)"},e.eventdate)),o.a.createElement(R.a,{item:!0,sx:{color:"red"}},o.a.createElement(p.b,{to:"/events/".concat(e.id)},"Check Event"))),o.a.createElement(R.a,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},o.a.createElement(i.a,{variant:"subtitle1",component:"div",color:"white"},e.price),c&&o.a.createElement(ae.a,{sx:{color:"red"}}))))))},oe=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(X.a)(this,Object(Y.a)(t).call(this,e))).state={arrayOfEvents:[]},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://a-event.herokuapp.com/events").then(function(t){var a=t.data;e.setState({arrayOfEvents:a})}).catch(function(e){console.log(e),document.location.reload()})}},{key:"render",value:function(){return o.a.createElement(W.a,{sx:{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}},this.state.arrayOfEvents.map(function(e,t){return o.a.createElement(ne,{key:t,id:e.id,name:e.eventName,address:e.address,price:e.price,eventmusic:e.eventmusic,eventdate:e.eventdate,description:e.description,userId:e.userId,variant:"outlined"})}))}}]),t}(n.Component),re=Object(F.a)(),ce=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(X.a)(this,Object(Y.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.name),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),U.a.post("https://a-event.herokuapp.com/register",{email:a.state.email,password:a.state.password}).then(function(e){console.log(e),Object(d.a)("/login")}).catch(function(e){console.log(e)}),a.setState({email:"",password:""})},a.state={email:"",password:""},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(L.a,{theme:re},o.a.createElement(W.a,{className:"Registro",component:"main",maxWidth:"xs",sx:{backgroundColor:"#b5b5b5"}},o.a.createElement(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#b5b5b5"}},o.a.createElement(T.a,{sx:{m:1,bgcolor:"black"}},o.a.createElement(M.a,null)),o.a.createElement(i.a,{component:"h1",variant:"h5"},"Sign up"),o.a.createElement(b.a,{component:"form",noValidate:!0,onSubmit:function(t){e.handleSubmit(t)},sx:{mt:3}},o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0,xs:12},o.a.createElement(z.a,{required:!0,value:this.state.email,onChange:function(t){e.handleChange(t)},fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),o.a.createElement(R.a,{item:!0,xs:12},o.a.createElement(z.a,{required:!0,value:this.state.password,onChange:function(t){e.handleChange(t)},fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})),o.a.createElement(R.a,{item:!0,xs:12},o.a.createElement(P.a,{control:o.a.createElement(q.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),o.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"black"}},"Register"),o.a.createElement(R.a,{container:!0,justifyContent:"flex-end"},o.a.createElement(R.a,{item:!0},o.a.createElement(B.a,{href:"/login",variant:"body2"},"Already have an account? Login")))))))}}]),t}(n.Component),le=g.a.parse(document.cookie),ie=Object(F.a)(),me=Object($.a)("img")({margin:"auto",marginTop:"10px",marginBottom:"10px",display:"block",maxWidth:"100%",maxHeight:"100%"}),se=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(X.a)(this,Object(Y.a)(t).call(this,e))).handleChange=function(e){console.log(e.target.name),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),U.a.post("https://a-event.herokuapp.com/events",{eventName:a.state.eventName,address:a.state.address,price:a.state.price,eventmusic:a.state.eventmusic,eventdate:a.state.eventdate,description:a.state.description},{headers:{Authorization:"token ".concat(le.jwt)}}).then(function(e){console.log(e),Object(d.a)("/login")}).catch(function(e){console.log(e)}),a.setState({eventName:"",price:"",eventmusic:"",description:"",eventdate:"",address:""})},a.state={eventName:"",address:"",price:"",eventmusic:"",eventdate:"",description:""},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(L.a,{theme:ie},o.a.createElement(W.a,{component:"main",maxWidth:"xs"},o.a.createElement(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement(ee.a,{sx:{width:128,height:128}},o.a.createElement(me,{src:a(104)})),o.a.createElement(i.a,{component:"h1",variant:"h5",sx:{marginTop:"20px"}},"CREATE A EVENT"),o.a.createElement(b.a,{component:"form",noValidate:!0,onSubmit:this.handleSubmit,sx:{mt:3}},o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0,xs:12,sm:6},o.a.createElement(z.a,{autoComplete:"given-name",name:"eventName",required:!0,value:this.state.eventName,onChange:function(t){e.handleChange(t)},fullWidth:!0,id:"eventName",label:"Event Name",autoFocus:!0})),o.a.createElement(R.a,{item:!0,xs:12,sm:6},o.a.createElement(z.a,{required:!0,fullWidth:!0,value:this.state.eventdate,onChange:function(t){e.handleChange(t)},id:"eventdate",label:"Date",name:"eventdate",autoComplete:"family-name"})),o.a.createElement(R.a,{item:!0,xs:12,sm:6},o.a.createElement(z.a,{autoComplete:"given-name",name:"eventmusic",required:!0,value:this.state.eventmusic,onChange:function(t){e.handleChange(t)},fullWidth:!0,id:"eventmusic",label:"Type of Music ",autoFocus:!0})),o.a.createElement(R.a,{item:!0,xs:12,sm:6},o.a.createElement(z.a,{value:this.state.price,onChange:function(t){e.handleChange(t)},required:!0,fullWidth:!0,id:"price",label:"Price",name:"price"})),o.a.createElement(R.a,{item:!0,xs:12,x:12},o.a.createElement(z.a,{value:this.state.address,onChange:function(t){e.handleChange(t)},required:!0,fullWidth:!0,id:"address",label:"Address",name:"address",autoComplete:"address"})),o.a.createElement(R.a,{item:!0,xs:12},o.a.createElement(z.a,{value:this.state.description,onChange:function(t){e.handleChange(t)},required:!0,fullWidth:!0,name:"description",label:"Description",type:"description",id:"description",autoComplete:"description",rows:4})),o.a.createElement(R.a,{item:!0,xs:12})),o.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"red"}},"CREATE"),o.a.createElement(R.a,{container:!0,justifyContent:"flex-end"}))))))}}]),t}(n.Component),ue=a(258),de=a(153),pe=a.n(de),Ee=a(244),ge=Object(F.a)({palette:{mode:"dark"}}),he=(window.location.pathname,function(e){var t=Object(n.useState)({}),a=Object(l.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(!1),s=Object(l.a)(m,2),p=s[0],E=s[1],h=Object(d.o)().id,b=g.a.parse(document.cookie),f=Number(b.userId),v=Object(d.m)();Object(n.useEffect)(function(){U.a.get("https://a-event.herokuapp.com/events/".concat(h),{headers:{Authorization:"token ".concat(b.jwt)}}).then(function(e){c(e.data),console.log(e),f==e.data.userId&&(E(!0),console.log("carai"))})},[h]);return console.log(b),o.a.createElement(L.a,{theme:ge},o.a.createElement(_.a,{sx:{p:2,margin:"auto",maxWidth:500,flexGrow:1,backgroundColor:function(e){return"dark"===e.palette.mode?"#121212":"#fff"}}},o.a.createElement(R.a,{container:!0,spacing:2},o.a.createElement(R.a,{item:!0,xs:12,sm:!0,container:!0},o.a.createElement(R.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},o.a.createElement(R.a,{item:!0,xs:!0},o.a.createElement(i.a,{gutterBottom:!0,variant:"h4",component:"div"},r.eventName),o.a.createElement(i.a,{variant:"body1",color:"text.secondary"},r.eventdate),o.a.createElement(i.a,{variant:"body2",mt:2,gutterBottom:!0},o.a.createElement(ue.a,{label:"MUSIC :",size:"medium"}),"  ",r.eventmusic,"                              "),o.a.createElement(i.a,{variant:"body1",mt:2,gutterBottom:!0},o.a.createElement(ue.a,{label:"ADDRESS :",size:"medium"})," ",r.address,"                                "),o.a.createElement(i.a,{variant:"body1",mt:2,gutterBottom:!0},o.a.createElement(ue.a,{label:"DESCRIPTION :",size:"medium"}),"  ",r.description)),o.a.createElement(R.a,{item:!0,sx:{display:"flex",justifyContent:"flex-end"}})),o.a.createElement(R.a,{item:!0,sx:{display:"flex",justifyContent:"space-between",flexDirection:"column"}},o.a.createElement(i.a,{variant:"subtitle1",component:"div"},r.price),p&&o.a.createElement("div",null,o.a.createElement(Ee.a,{title:"Delete"},o.a.createElement(u.a,null,o.a.createElement(pe.a,{sx:{color:"red"},onClick:function(e){U.a.delete("https://a-event.herokuapp.com/events/".concat(h),{headers:{Authorization:"token ".concat(b.jwt)}}).then(function(){return c({status:"Delete successful"})}),v("/")}}))))))))," ")}),be=function(e){var t=e.component,a=Object(I.a)(e,["component"]);return!0===!!g.a.parse(document.cookie).loggedIn?o.a.createElement(t,a):o.a.createElement(d.a,{to:"/login"})},fe=function(){return o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/",element:o.a.createElement(be,{component:oe})}),o.a.createElement(d.b,{path:"/login",element:o.a.createElement(J,null)}),o.a.createElement(d.b,{path:"/register",element:o.a.createElement(ce,null)}),o.a.createElement(d.b,{path:"/addevent",element:o.a.createElement(be,{component:se})}),o.a.createElement(d.b,{path:"/events/:id",element:o.a.createElement(be,{component:he})}))};var ve=function(){return o.a.createElement(p.a,null,o.a.createElement(A,null),o.a.createElement(fe,null))},xe=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,243)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ve,null))),xe()},78:function(e,t,a){}},[[129,3,2]]]);
//# sourceMappingURL=main.8f0ff8b2.chunk.js.map