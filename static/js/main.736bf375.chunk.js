(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),l=a.n(o),i=(a(74),a(5)),c=a(6),s=a(7),u=a(8),m=a(10),d=a(11),h=a(19),p=a(16),f=a(56),b=a(35),v=a.n(b);function g(){var e=Object(m.a)([""]);return g=function(){return e},e}var E=d.a.a.attrs({className:"navbar-brand"})(g()),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(E,{href:!0},r.a.createElement("img",{src:v.a,width:"50",height:"50",alt:"logo"}))}}]),a}(n.Component);function O(){var e=Object(m.a)([""]);return O=function(){return e},e}function k(){var e=Object(m.a)(["\nmargin-left: 1em;\n"]);return k=function(){return e},e}function w(){var e=Object(m.a)([""]);return w=function(){return e},e}var C=d.a.div.attrs({className:"collpase navbar-collapse"})(w()),j=d.a.div.attrs({className:"navbar-nav mr-auto"})(k()),S=d.a.div.attrs({className:"collpase navbar-collapse"})(O()),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/",style:{color:"white"},className:"navbar-brand"},"CapyVal"),r.a.createElement(C,null,r.a.createElement(j,null,r.a.createElement(S,null,r.a.createElement(p.b,{to:"/MyProfile",style:{color:"#FFF"},className:"nav-link"},"My Profile")),r.a.createElement(S,null,r.a.createElement(p.b,{to:"/ManagerView",style:{color:"#FFF"},className:"nav-link"},"View Direct Reports")),r.a.createElement(S,null,r.a.createElement(p.b,{to:"/RequestEvaluations",style:{color:"#FFF"},className:"nav-link"},"Request Evaluations")),r.a.createElement(S,null,r.a.createElement(p.b,{to:"/ReviewRequest",style:{color:"#FFF"},className:"nav-link"},"Review Request")),r.a.createElement(S,null,r.a.createElement(p.b,{to:"/ViewEvaluations",style:{color:"#FFF"},className:"nav-link"},"View Your Evaluations")),r.a.createElement(S,null,r.a.createElement(p.b,{to:"/",style:{color:"#FFF"},className:"Logout"},"Logout")))))}}]),a}(n.Component);function N(){var e=Object(m.a)(["\n  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n  height: 100%;\n  width: 195px;     /* Set the width of the sidebar */\n  z-index: 1;      /* Stay on top of everything */\n  background-color: #50c878; \n  overflow-x: hidden;     /* Disable horizontal scroll */\n  padding-top: 10px;\n"]);return N=function(){return e},e}var R=d.a.div.attrs({className:"navbar-dark"})(N()),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(y,null),r.a.createElement(x,null))}}]),a}(r.a.Component),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(T,null)}}]),a}(r.a.Component),I=a(18),M=a(65),F=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var r=e.children,o=e.height,l=(e.initialCard,r.length||1),c=o/l;if(l<=1)throw new Error("CardStack component must have at least two child Card components. Please check the children of this CardStack instance.");return n.initialTopOffsets=e.children.map((function(e,t){return 0===t?0:c*t})),n.state={topOffsets:n.initialTopOffsets,cardSelected:!1},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.props.initialCard>=this.props.children.length?console.warn('prop "initialCard" cannot be equal or greater than children.length'):this.props.initialCard>=0&&this.handleCardClick(this.props.initialCard)}},{key:"handleCardClick",value:function(e,t){var a=this,n=this.state.cardSelected;this.setState(this.state.topOffsets.reduce((function(t,r,o){var l=o===e?0:a.props.height;return{cardSelected:!n,topOffsets:[].concat(Object(M.a)(t.topOffsets),[n?a.initialTopOffsets[o]:l])}}),{topOffsets:[],cardSelected:!0})),t&&t(this.state.cardSelected,e)}},{key:"renderCards",value:function(){var e=this;return this.props.children.map((function(t,a){return r.a.cloneElement(t,{key:a,cardId:a,hoverOffset:e.props.hoverOffset,cardSelected:e.state.cardSelected,height:e.props.height,topOffset:e.state.topOffsets[a],onClick:e.handleCardClick.bind(e)})}))}},{key:"render",value:function(){var e=Object(I.a)({},A,{background:this.props.background,height:this.props.height,width:this.props.width});return r.a.createElement("ul",{style:e},this.renderCards())}}]),a}(r.a.Component),A={display:"flex",flexDirection:"column",position:"relative",overflow:"hidden",padding:0,margin:0};F.defaultProps={width:350,height:600,bgColor:"f8f8f8",hoverOffset:30,initialCard:-1};var B=F,D=a(23),z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={hover:!1},n.handleMouseEnter=n.handleMouseEnter.bind(Object(D.a)(n)),n.handleMouseLeave=n.handleMouseLeave.bind(Object(D.a)(n)),n}return Object(c.a)(a,[{key:"handleMouseEnter",value:function(){this.setState({hover:!0})}},{key:"handleMouseLeave",value:function(){this.setState({hover:!1})}},{key:"handleClick",value:function(){var e=this.props,t=e.cardId,a=e.cardClicked;this.props.onClick(t,a),this.setState({hover:!1})}},{key:"render",value:function(){var e=this.props,t=e.cardId,a=e.cardSelected,n=e.topOffset,o=e.hoverOffset,l=0!==t&&this.state.hover&&!a?o:0,i="translate3d(0,".concat(n-l,"px,0)"),c=Object(I.a)({},H,{background:this.props.background,transform:i,WebkitTransform:i,height:this.props.height});return r.a.createElement("li",{style:c,onClick:this.handleClick.bind(this),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.props.children)}}]),a}(r.a.Component),H={position:"absolute",top:0,width:"100%",cursor:"pointer",transition:"0.5s transform ease",WebkitTransition:"-webkit-transform 0.5s ease"},U=z;function P(){var e=Object(m.a)(["\n    margin-bottom: 20 px;\n"]);return P=function(){return e},e}function q(){var e=Object(m.a)([""]);return q=function(){return e},e}var _=d.a.div.attrs({className:"container"})(q()),V=d.a.nav.attrs({className:"navbar navbar-expand-lg navbar-dark bg-success"})(P()),W=(n.Component,[{firstName:"Reed",lastName:"Fischer",companyId:3,password:"fischerre",positionTitle:"CEO",companyName:"Blue Llama Consulting Co.",employeeId:1,email:"Reed_Fischer@bluellamaconsultingco.com",startDate:"1997-07-07"},{firstName:"Kale",lastName:"Marquez",companyId:3,password:"marquezka",positionTitle:"Engineering Manager",companyName:"Blue Llama Consulting Co.",employeeId:2,managerId:1,email:"Kale_Marquez@bluellamaconsultingco.com",startDate:"2014-01-12"},{firstName:"Audrina",lastName:"Gregory",companyId:3,password:"gregoryau",positionTitle:"Engineering Manager",companyName:"Blue Llama Consulting Co.",employeeId:3,managerId:1,email:"Audrina_Gregory@bluellamaconsultingco.com",startDate:"1996-01-07"}]),G=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).searchSpace=function(t){var a=t.target.value;e.setState({search:a})},e.state={search:null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={paddingRight:"10px"},a=W.filter((function(t){return null==e.state.search||t.firstName.toLowerCase().includes(e.state.search.toLowerCase())||t.lastName.toLowerCase().includes(e.state.search.toLowerCase())||t.positionTitle.toLowerCase().includes(e.state.search.toLowerCase())||t.email.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).map((function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{style:{position:"relative",left:"10vh"}},r.a.createElement("span",{style:t},e.firstName," ",e.lastName),r.a.createElement("span",{style:t},e.positionTitle),r.a.createElement("span",{style:t},e.email))))}));return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Search for person",style:{border:"solid",borderRadius:"10px",position:"relative",left:"10vh",height:"4vh",width:"40vh",marginTop:"5vh",marginBottom:"10vh"},onChange:function(t){return e.searchSpace(t)}}),a)}}]),a}(n.Component),J=[{background:"#2980B9",imgSrc:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",imgBorderColor:"#015389",name:"James Stuart",title:"Training Manager",mobileNo:"0491 570 156",location:"Sydney, Australia",role:"Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years."},{background:"#27AE60",imgSrc:"https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg",imgBorderColor:"#086C32",name:"Isaac Pullman",title:"Creative Director",mobileNo:"0491 570 157",location:"Brisbane, Australia",role:"Isaac has overseen all of Hunter and Co's creative efforts for the last five years. He's ability to generate a shared vision between teams throughout the company has been his biggest achievement."},{background:"#9B27AE",imgSrc:"https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg",imgBorderColor:"#6A067A",name:"Sarah Oscar",title:"Sales Rep",mobileNo:"0491 570 158",location:"Sydney, Australia",role:"In Sarah's short time with the company, she is now a key figure in the sales team for the Sydney and outer region. Her excellent communication skills has opened up the door to let her mentoring any new hires in sales."},{background:"#e67e22",imgSrc:"https://s3.amazonaws.com/uifaces/faces/twitter/9lessons/128.jpg",imgBorderColor:"#9D4F09",name:"Srinivas Tamada",title:"Tech Lead",mobileNo:"0491 570 110",location:"Melbourne, Australia",role:"In recent years Hunter & Co's website and accompaning app has undergone a massive face lift. Srinivas was responsible for the exploration and planning of the new technology used. He now works on maintaining and continually improving the website."}],Y=(a(28),a(29)),K=a.n(Y),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isChecked:!1},e.toggleCheckboxChange=function(){var t=e.props,a=t.handleCheckboxChange,n=t.label;e.setState((function(e){return{isChecked:!e.isChecked}})),a(n)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.label,t=this.state.isChecked;return r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:e,checked:t,onChange:this.toggleCheckboxChange}),e))}}]),a}(n.Component),$=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentWillMount=function(){n.selectedCheckboxes=new Set},n.toggleCheckbox=function(e){n.selectedCheckboxes.has(e)?n.selectedCheckboxes.delete(e):n.selectedCheckboxes.add(e)},n.handleFormSubmit=function(e){e.preventDefault();var t,a=Object(f.a)(n.selectedCheckboxes);try{for(a.s();!(t=a.n()).done;){var r=t.value;console.log(r,"is selected.")}}catch(o){a.e(o)}finally{a.f()}},n.createCheckbox=function(e){return r.a.createElement(Q,{label:e,handleCheckboxChange:n.toggleCheckbox,key:e})},n.state={people:J},n}return Object(c.a)(a,[{key:"renderTableData",value:function(){var e=this;return this.state.people.map((function(t){t.background;var a=t.imgSrc,n=(t.imgBorderColor,t.name),o=t.title;t.mobileNo,t.location,t.role;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement(X,{imgSrc:a})," ",n,", ",o),r.a.createElement("td",null,r.a.createElement("form",{onSubmit:e.handleFormSubmit},e.createCheckbox())))}))}},{key:"renderTableHeader",value:function(){return["EMPLOYEES","REQUEST EVALUATION"].map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"title"},"REQUEST EVALUATION"),r.a.createElement("table",{id:"evaluations"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())),r.a.createElement(G,null))}}]),a}(n.Component),X=function(e){var t=e.imgSrc;e.borderColor;return r.a.createElement("img",{style:{width:"60px",height:"60px"},src:t})},Z=$,ee=a(103),te=a(62),ae=a(101),ne=a(102);function re(){var e=Object(m.a)(["\n.jumbo {\n    background-color: #696;\n    background-size: cover;\n    color: #fff;\n    height 1000px;\n    width 1000px;\n    postion: relative;\n    z-index: -2:\n\n.overlay {\n    background-color: #000;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: -1;\n}\n}\n"]);return re=function(){return e},e}var oe=d.a.div(re()),le=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(D.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(D.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Evaluation submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null,r.a.createElement(ae.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}," "),r.a.createElement(ne.a,null,r.a.createElement(ee.a,null,r.a.createElement(ee.a.Item,{href:"../RequestEvaluations"},"RequestEvaluations"),r.a.createElement(te.a,{active:!0},"Submit")),r.a.createElement("h1",{align:"center"},r.a.createElement("form",{onSubmit:this.handleSubmit,align:"center"},r.a.createElement("h2",{align:"center"},r.a.createElement("label",null,r.a.createElement("h3",{style:{color:"#000",fontWeight:400,lineHeight:1.45,fontSize:"40px"},align:"center"},"Evaluation:"),r.a.createElement("div",null,"Courtesy of"," ",r.a.createElement("img",{src:v.a,style:{height:60,width:60},img:!0})),r.a.createElement("textarea",{rows:"10",placeholder:"Your Review...",value:this.state.value,onChange:this.handleChange,align:"center"}))),r.a.createElement("button",{type:"submit",value:"Submit",align:"center"},"Submit"))))))))}}]),a}(r.a.Component),ie=[{from:"James Stuart",evaluation:"Good coworker.",date:"4/18/2020"},{from:"Isaac Pullman",evaluation:"They have been doign very well recently. Good communication skills.",date:"8/24/2019"}],ce=(a(53),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={evaluations:ie},n}return Object(c.a)(a,[{key:"renderTableData",value:function(){return this.state.evaluations.map((function(e){var t=e.from,a=e.evaluation,n=e.date;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n))}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.evaluations[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"title"},"Evaluations of You"),r.a.createElement("table",{id:"evaluations"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())))}}]),a}(n.Component)),se=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"My Profile")}}]),a}(n.Component),ue=a(63),me=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={people:J},n}return Object(c.a)(a,[{key:"renderTableData",value:function(){return this.state.people.map((function(e){e.background;var t=e.imgSrc,a=(e.imgBorderColor,e.name),n=e.title;e.mobileNo,e.location,e.role;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement(de,{imgSrc:t})," ",a,", ",n),r.a.createElement("td",null,r.a.createElement(ue.a,{variant:"success"},"View Evaluations")))}))}},{key:"renderTableHeader",value:function(){return["EMPLOYEES","EVALUATIONS"].map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"title"},"Your Direct Reports"),r.a.createElement("table",{id:"evaluations"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader()),this.renderTableData())))}}]),a}(n.Component),de=function(e){var t=e.imgSrc;e.borderColor;return r.a.createElement("img",{style:{width:"60px",height:"60px"},src:t})},he=me,pe=function(e){var t=e.imgSrc,a=e.borderColor;return r.a.createElement("img",{style:{width:"60px",height:"60px",borderRadius:"100%",border:"3px solid ".concat(a)},src:t})},fe=function(e){var t=e.icon,a=e.title,n=e.summary;return r.a.createElement("div",{style:ve.detailsRow.row},r.a.createElement("span",{className:"icon ".concat(t),style:Object(I.a)({},ve.detailsRow.icon,{alignSelf:"flex-start"})}),r.a.createElement("div",{style:{width:"80%"}},r.a.createElement("h2",{style:ve.detailsRow.title},a),n?r.a.createElement("p",{style:{fontWeight:300,lineHeight:1.45}},n):null))},be=function(e){return r.a.createElement("div",{style:{position:"absolute",top:0},onClick:e.onClick},r.a.createElement("header",{style:ve.cardHeader,className:"card-header-details"},r.a.createElement(pe,{imgSrc:e.imgSrc,borderColor:e.imgBorderColor}),r.a.createElement("div",null,r.a.createElement("h1",{style:ve.headerName},e.name),r.a.createElement("h3",{style:ve.headerTitle,className:"icon ion-ios-arrow-down"},e.title))),r.a.createElement("div",{style:{color:"#fff"}},r.a.createElement(fe,{icon:"ion-ios-telephone-outline",title:e.mobileNo}),r.a.createElement(fe,{icon:"ion-ios-location-outline",title:e.location}),r.a.createElement(fe,{icon:"icon ion-ios-paper-outline",title:"Main Role",summary:e.role})),r.a.createElement(ue.a,{href:"/submit-view",variant:"success",align:"center"},"Accept")," ",r.a.createElement(ue.a,{variant:"danger",align:"center"},"Decline"))},ve={cardHeader:{display:"flex",height:"125px",justifyContent:"space-between",alignItems:"center",padding:"10px 20px",color:"#fff"},headerName:{margin:0,fontWeight:500,fontSize:"25px",textAlign:"right"},headerTitle:{margin:"4px 0 0",fontWeight:300,fontSize:"17px",opacity:.8,textAlign:"right"},detailsRow:{row:{width:"100%",padding:"0 20px",display:"flex",alignItems:"center",margin:"25px 0"},icon:{display:"block",width:"25px",height:"30px",margin:"0 20px 0 0",borderBottom:"1px solid rgba(255, 255, 255, 0.8)",textAlign:"center",fontSize:"22px"},title:{fontWeight:500,fontSize:"20px",margin:0,fontStyle:"italic"}},messages:{position:"relative",paddingTop:"50px"}},ge=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("h1",{align:"center"},"Requests for Evaluations!")),r.a.createElement(B,{height:500,width:"full",background:"#f8f8f8",hoverOffset:25},J.map((function(e,t){return r.a.createElement(U,{key:t,background:e.background},r.a.createElement(be,e))}))),r.a.createElement("div",null))},Ee=a(104);var ye=a(36),Oe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onHandleLogin=function(t){t.preventDefault();var a={email:t.target.email.value,password:t.target.password.value};e.props.dispatch({type:"LOGIN_USER",user:a})},e.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},e.state={email:"",password:"",employee:{},errors:{},isSuccess:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.title="React Login"}},{key:"render",value:function(){return this.props.response.login.hasOwnProperty("response")&&(this.state.isSuccess=this.props.response.login.response.data.success,this.props.response.login.response.message,this.state.isSuccess&&function(e,t,a){var n=new Date;n.setTime(n.getTime()+60*a*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}("token",this.props.response.login.response.token,1)),this.state.isSuccess?r.a.createElement(h.a,{to:"./MyProfile"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below")),r.a.createElement("form",{noValidate:!0,onSubmit:this.onHandleLogin},r.a.createElement(Ee.a,{controlId:"Username",bsSize:"large"},r.a.createElement("input",{type:"email",name:"email",id:"email",className:"col-10",placeholder:"Email",style:ke.inputBar})),r.a.createElement(Ee.a,{controlId:"password",bsSize:"large"},r.a.createElement("input",{type:"password",name:"password",id:"password",className:"col-10",placeholder:"Password",style:ke.inputBar})),r.a.createElement(ue.a,{type:"submit"},"Login")))))}}]),a}(n.Component),ke={inputBar:{margin:"auto",width:"75%",border:0,outline:0,background:"transparent",borderBottom:"1px solid black"},button:{margin:30},errorMessage:{color:"red",fontSize:13,textAlign:"right",paddingTop:10}},we=Object(ye.b)((function(e){return{response:e}}))(Oe),Ce=a(21),je=a(66),Se=Object(Ce.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.response;switch(console.log(a),t.type){case"LOGIN_USER_SUCCESS":case"LOGIN_USER_ERROR":return Object(I.a)({},e,{response:a});default:return e}}}),xe=a(22),Ne=a.n(xe),Re=a(25),Te=(a(97),Ne.a.mark(Le));function Le(e){var t;return Ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Re.a)((function(){return K.a.post("http://localhost:3000/collection2/login",e.user).then((function(e){return e})).then((function(e){return e}))}));case 3:return t=a.sent,console.log(t),a.next=7,Object(Re.c)({type:"LOGIN_USER_SUCCESS",response:t});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(Re.c)({type:"LOGIN_USER_ERROR",error:a.t0});case 13:case"end":return a.stop()}}),Te,null,[[0,9]])}var Ie=Ne.a.mark(Me);function Me(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.d)("LOGIN_USER",Le);case 2:case"end":return e.stop()}}),Ie)}var Fe=Ne.a.mark(Ae);function Ae(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Re.b)(Me);case 2:case"end":return e.stop()}}),Fe)}var Be=function(){var e=Object(je.a)();return Object(I.a)({},Object(Ce.e)(Se,Object(Ce.a)(e)),{runSaga:e.run(Ae)})};a(68);function De(){var e=Object(m.a)(["\n  margin-left: 200px;\n  margin-right: 1em;\n"]);return De=function(){return e},e}var ze=d.a.div(De()),He=Object(h.g)((function(e){var t=e.location;return r.a.createElement("div",null,"/"!==t.pathname&&r.a.createElement(L,null),r.a.createElement(h.b,{exact:!0,path:"/",component:we}),r.a.createElement(ze,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/submit-view",component:le}),r.a.createElement(h.b,{path:"/RequestEvaluations",component:Z}),r.a.createElement(h.b,{path:"/ReviewRequest",component:ge}),r.a.createElement(h.b,{path:"/ViewEvaluations",component:ce}),r.a.createElement(h.b,{path:"/ManagerView",component:he}),r.a.createElement(h.b,{path:"/MyProfile",component:se}))))})),Ue=Be(),Pe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(ye.a,{store:Ue},r.a.createElement(p.a,null,r.a.createElement(He,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){e.exports=a.p+"static/media/logo.8135297a.png"},53:function(e,t,a){},69:function(e,t,a){e.exports=a(100)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.736bf375.chunk.js.map