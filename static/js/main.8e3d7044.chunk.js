(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{328:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var s=n(9),a=n.n(s),i=n(47),r=n.n(i),o=(n(85),n(20)),c=n(21),l=n(23),h=n(22),d=n(79),b=n.n(d),m=(n(328),n(2)),u=function(e){var t=e.imageUrl,n=e.box;return Object(m.jsx)("div",{className:"center ma",children:Object(m.jsxs)("div",{className:"absolute mt3 ",children:[Object(m.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),Object(m.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})},g=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(m.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)("p",{onClick:function(){return t("signout")},className:"f3 link dim white underline pa3 pointer",children:"Sign Out"})}):Object(m.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim white underline pa3 pointer",children:"Sign In"}),Object(m.jsx)("p",{onClick:function(){return t("register ")},className:"f3 link dim white underline pa3 pointer",children:"Register"})]})},j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onEmailChange=function(e){s.setState({signInEmail:e.target.value})},s.onPasswordChange=function(e){s.setState({signInPassword:e.target.value})},s.onSubmitSignIn=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.state.signInEmail,password:s.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(s.props.loadUser(e),s.props.onRouteChange("home"))}))},s.state={signInEmail:"",signInPassword:""},s}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(m.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(m.jsx)("main",{className:"pa4 black-80",children:Object(m.jsxs)("div",{className:"measure",children:[Object(m.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(m.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(m.jsx)("div",{className:"lh-copy mt3",children:Object(m.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(a.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).onNameChange=function(e){s.setState({name:e.target.value})},s.onEmailChange=function(e){s.setState({email:e.target.value})},s.onPasswordChange=function(e){s.setState({password:e.target.value})},s.onSubmitSignIn=function(){fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s.state.name,email:s.state.email,password:s.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(s.props.loadUser(e),s.props.onRouteChange("home"))}))},s.state={name:"",email:"",password:""},s}return Object(c.a)(n,[{key:"render",value:function(){return Object(m.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(m.jsx)("main",{className:"pa4 black-80",children:Object(m.jsxs)("div",{className:"measure",children:[Object(m.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(m.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(m.jsxs)("div",{class:"mv3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(a.a.Component),f=n(80),w=n.n(f),O=(n(330),function(){return Object(m.jsx)("div",{className:"ma4 mt0",children:Object(m.jsx)(w.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(m.jsxs)("div",{className:"Tilt-inner pa1",children:[" ",Object(m.jsx)("img",{style:{paddingTop:"35px"},alt:"logo",src:"data:image/png;base64,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"})," "]})})})}),x=(n(331),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Give it a try"}),Object(m.jsx)("div",{className:"center pa5",children:Object(m.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(m.jsx)("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),Object(m.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib bg-light-purple",onClick:n,children:"Detect"})]})})]})}),N=function(e){var t=e.name,n=e.entries;return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is...")}),Object(m.jsx)("div",{className:"white f1",children:n})]})},A=(n(332),{input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}}),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage"),s=Number(n.width),a=Number(n.height);return{leftCol:t.left_col*s,topRow:t.top_row*a,rightCol:s-t.right_col*s,bottomRow:a-t.bottom_row*a}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3000/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3000/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(A):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=A,e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,s=e.route,a=e.box;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b.a,{className:"particles"}),Object(m.jsx)(g,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===s?Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{}),Object(m.jsx)(N,{name:this.state.user.name,entries:this.state.user.entries}),Object(m.jsx)(x,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(m.jsx)(u,{box:a,imageUrl:n})]}):"signin"===s?Object(m.jsx)(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(m.jsx)(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(s.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};n(333);r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),C()},85:function(e,t,n){}},[[334,1,2]]]);
//# sourceMappingURL=main.8e3d7044.chunk.js.map