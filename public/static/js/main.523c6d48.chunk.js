(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{323:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(42),o=a.n(r),i=(a(85),a(19)),l=a(20),c=a(22),m=a(21),u=(a(86),function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"SignIn"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))}),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onButtonClick=function(){fetch("http://shrouded-forest-77796.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onButtonClick,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register")))))}}]),a}(s.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onSubmitRegister=function(){fetch("http://shrouded-forest-77796.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(s.a.Component),d=a(77),h=a.n(d),A=(a(87),a(78)),b=a.n(A),w=function(){return s.a.createElement("div",{className:"ma4 mt0"},s.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},s.a.createElement("div",{className:"Tilt-inner pa3"}," ",s.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:b.a})," ")))},E=(a(88),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try."),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"form center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),f=(a(89),function(e){var t=e.imageUrl,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),s.a.createElement("div",{className:"bonding-box",style:{top:a.topRow,left:a.leftCol,bottom:a.bottomRow,right:a.rightCol}})))}),C=function(e){var t=e.name,a=e.entries;return s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t,", your current count is...")),s.a.createElement("div",{className:"white f1"},a))},v=a(79),N=a.n(v),B={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},S={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",password:"",entries:0,joined:""}},Y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,password:t.password,entries:t.entries,joined:t.joined}})},e.onInputChange=function(t){console.log(t.target.value),e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),s=Number(a.height);return console.log(n,s),{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onPictureSubmit=function(){console.log("click"),e.setState({imageUrl:e.state.input}),fetch("http://shrouded-forest-77796.herokuapp.com/imageUrl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){console.log(t),fetch("http://shrouded-forest-77796.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(S):"home"===t?e.setState({isSignedIn:!0,route:t}):e.setState({route:t})},e.state=S,e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.route,n=e.box,r=e.imageUrl;return s.a.createElement("div",{className:"App"},s.a.createElement(N.a,{className:"particles",params:B}),s.a.createElement(u,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===a?s.a.createElement("div",null,s.a.createElement(w,null),s.a.createElement(C,{name:this.state.user.name,entries:this.state.user.entries}),s.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onPictureSubmit}),s.a.createElement(f,{box:n,imageUrl:r})):"signin"===a?s.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(g,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(322);o.a.render(s.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t){e.exports="data:image/png;base64,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"},80:function(e,t,a){e.exports=a(323)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.523c6d48.chunk.js.map