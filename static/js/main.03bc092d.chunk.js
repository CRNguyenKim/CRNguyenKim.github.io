(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),i=(a(78),a(79),a(9)),c=a(10),l=a(12),u=a(11),d=a(13),p=a(38),m=a(24),h=a(5),g=a(125),f=a(122),y=a(65),b=a(124),E=a(17),v=a(21),O=a(30),k=a.n(O),S="#303444",x="#80deea",j=["#af4448","#ff8a65","#ffd54f","#aed581","#00bfa5"],C=a(126),w=a(123),D=a(32),T=a(16),A=function(t,e){switch(e){case"hour":return t.map(function(t){var e=new Date(t);return e.getHours(),e.getHours()+":00"});case"day":return t.map(function(t){var e=new Date(t);return"".concat(e.getDate(),"/").concat(e.getMonth())});case"month":return t.map(function(t){var e=new Date(t);return"".concat((e.getMonth()+1)%12===0?12:(e.getMonth()+1)%12,"/").concat(e.getFullYear())})}},R={responsive:{display:"flex",alignItems:"center"},rowOption:{margin:"10px 0px 10px 0px"},selected:{color:"#ffffff"}},I={DURATIONS:T.b,TIMER:T.j,LIMITS:T.f,VIEWS:T.c,LOCATIONS:T.g};function M(t){return t.charAt(0).toUpperCase()+t.slice(1)}var L=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return this.props.data.length?this.props.dropdown?r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:{color:x}},r.a.createElement("p",{style:{margin:0,whiteSpace:"nowrap"}}," ",r.a.createElement(D.a,{icon:I[this.props.name.toUpperCase()]})," ",M(this.props.name),"  ")),r.a.createElement(C.a.Control,{as:"select",onChange:function(e){t.props.onOptionChange(t.props.name,e.target.value)},style:{backgroundColor:S,color:"#ffffff"}},this.props.data.map(function(t){return r.a.createElement("option",{key:t},t)}))):r.a.createElement(f.a,{style:Object(h.a)({},R.responsive,R.rowOption)},r.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:{color:x}},r.a.createElement("p",{style:{whiteSpace:"nowrap",verticalAlign:"middle"}},r.a.createElement("span",{style:{margin:0,fontSize:"2vh"}},"  ",r.a.createElement(D.a,{icon:I[this.props.name.toUpperCase()]})," ",M(this.props.name)," "))),r.a.createElement(y.a,{xs:8,md:8,xl:8,sm:8,lg:8,style:Object(h.a)({},R.responsive,{justifyContent:"center"})},r.a.createElement(w.a,{"aria-label":"Basic example"},this.props.data&&this.props.data.map(function(e){return r.a.createElement(b.a,{size:"sm",variant:"outline-info",key:e,style:t.props.selections[t.props.name]===e?R.selected:null,onClick:function(){return t.props.onOptionChange(t.props.name,e)}},e)})))):""}}]),e}(n.Component),U=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).onOptionChange=function(t,e){a.props.onOptionChange(t,e)},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.dropdown?this.props.dropdown:[];return r.a.createElement(g.a,{fluid:!0},r.a.createElement(f.a,null,r.a.createElement(y.a,{xs:12,sm:12,md:12,xl:8,lg:8},Object.keys(this.props.options).map(function(a){return r.a.createElement(L,{name:a,data:t.props.options[a],key:a,onOptionChange:t.onOptionChange,selections:t.props.selections,dropdown:e.includes(a)})})),r.a.createElement(y.a,{xs:12,sm:12,md:12,xl:4,lg:4},r.a.createElement(f.a,{style:Object(h.a)({},R.responsive,R.rowOption)},r.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:Object(h.a)({color:x},R.responsive)},r.a.createElement("p",{style:{margin:0}}," ",r.a.createElement(D.a,{icon:T.k}),"  ")),r.a.createElement(y.a,{xs:9,md:9,xl:9,sm:9,lg:9,style:Object(h.a)({color:x},R.responsive,{justifyContent:"center"})},r.a.createElement("p",{style:{margin:0}},function(t){t=Number(t);var e=Math.floor(t/3600),a=Math.floor(t%3600/60),n=Math.floor(t%3600%60);return("0"+e).slice(-2)+":"+("0"+a).slice(-2)+":"+("0"+n).slice(-2)}(this.props.countdown)))))))}}]),e}(n.Component),_=a(127),G="SET_MODES",B="SET_DURATIONS",z="SET_LIMITS",N="SET_TIMER",H="SET_VIEWS",W="SET_CATEGORIES",Y="SET_LOCATIONS",F="SET_COUNTDOWN",K="SET_DATA",P="SET_SERIES",V="APPEND_SERIES",X="NODATA",J="UNAUTHORIZED",Q=a(8),Z=a.n(Q),$={modes:"",durations:"",limits:"",views:"",timer:"",series:[],data:[],labels:[],locations:[]};function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t+G:return Object(h.a)({},e,{modes:a.payload.modes});case t+B:return Object(h.a)({},e,{durations:a.payload.durations});case t+z:return Object(h.a)({},e,{limits:a.payload.limits});case t+H:return Object(h.a)({},e,{views:a.payload.views});case t+N:return Object(h.a)({},e,{timer:a.payload.timer});case t+K:return Object(h.a)({},e,{data:a.payload.data});case t+W:return Object(h.a)({},e,{categories:a.payload.categories});case t+P:return Object(h.a)({},e,{series:a.payload.series});case t+V:return Object(h.a)({},e,{series:e.series.concat(a.payload.data)});case t+Y:return Object(h.a)({},e,{locations:a.payload.locations});case t+F:return Object(h.a)({},e,{countdown:a.payload.countdown});default:return e}}}var tt,et={token:localStorage.getItem("token"),isAuthenticated:!!localStorage.getItem("token"),isLoading:!1,user:null},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"USER_LOADING":return Object(h.a)({},t,{isLoading:!0});case"USER_LOAD":return Object(h.a)({},t,{isLoading:!1,user:e.payload.username});case"LOGIN_SUCCESS":return localStorage.setItem("token",e.payload.token),Object(h.a)({},t,{token:e.payload.token,isLoading:!1,user:e.payload.username});case"LOGIN_FAILED":case"USER_LOGOUT":return localStorage.removeItem("token"),Object(h.a)({},t,{token:null,user:null,isAuthenticated:!1,isLoading:!1});case"ADMIN_LOADED":return Object(h.a)({},t,{isAuthenticated:!0});default:return t}},nt=a(18),rt="Authentication Error !",ot="Server error!",st={success:{},error:{}},it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_ERROR":return Object(h.a)({},t,{error:e.payload});case"GET_SUCCESS":return Object(h.a)({},t,{success:e.payload});case"CLEAR_MESSAGES":return{error:{},success:{}};default:return t}},ct=a(31),lt=a(66),ut=Object(ct.c)({generalDashboard:q("generalChart"),circleDashboard:q("circleChart"),columnDashboard:q("columnChart"),auth:at,messages:it}),dt=Object(ct.d)(ut,{},Object(ct.a)(lt.a)),pt=function(t,e,a){return{type:"".concat(a,"SET_").concat(t.toUpperCase()),payload:Object(nt.a)({},t,e)}},mt=function(t,e){return{type:e+K,payload:{data:t}}},ht=function(t,e){return{type:e+P,payload:{series:t}}},gt=function(t,e){return{type:e+V,payload:{data:t}}},ft=function(t,e){return{type:e+F,payload:{countdown:t}}},yt="day",bt="/api/dashboard",Et=function(t,e){return t.map(function(t){return t[e]})},vt=function(t,e,a){return{data:t,name:e,type:a}},Ot=10,kt="circleChart";Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var St={durations:["day","month"],timer:[10,60,3600],locations:[]},xt=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getLocations=function(){var t="all";Z.a.get("".concat(bt,"/location?"),{params:{},headers:{Authorization:"Bearer ".concat(dt.getState().auth.token)}}).then(function(t){return t.data.data}).then(function(e){St.locations=[t].concat(Et(e,"location"))})},a.updateCountdown=function(){0===Ot?(a.update(),a.resetTimer()):Ot-=1,dt.dispatch(ft(Ot,kt))},a.resetTimer=function(){tt&&clearInterval(tt),Ot=dt.getState().circleDashboard.timer,tt=setInterval(a.updateCountdown,1e3)},a.update=function(){var t=[],e=dt.getState().circleDashboard.durations?dt.getState().circleDashboard.durations:St.durations[0],n=dt.getState().circleDashboard.locations?dt.getState().circleDashboard.locations:St.locations[0];"all"===n&&(n=""),Z.a.all([1,2,3,4,5].map(function(r){return a.updateDataByType(r,e,t,n)}))},a.optionChange=function(t,e){dt.dispatch(pt(t,e,kt)),a.update(),a.resetTimer()},a.state={dataError:"",data:[],options:{labels:["R\u1ea5t kh\xf4ng t\u1ed1t","Kh\xf4ng t\u1ed1t","B\xecnh th\u01b0\u1eddng","T\u1ed1t","R\u1ea5t t\u1ed1t"],chart:{id:kt,width:"60%",foreColor:x,fontFamily:"Helvetica, Arial, sans-serif",fontSize:800,toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},colors:j,fill:{opacity:.9},title:{text:"Customer Rating Percentage",align:"left"},stroke:{colors:["transparent"]},theme:{palette:"palette1"},plotOptions:{pie:{customScale:1,offsetX:0,offsetY:0,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"55%",background:"transparent"}}},tooltip:{enabled:!1}}},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.getLocations(),Object.keys(St).map(function(t){return dt.dispatch(pt(t,St[t][0],kt))}),this.update(),this.resetTimer()}},{key:"updateDataByType",value:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hour",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Z.a.get("".concat(bt,"/").concat("total","?"),{params:{rated:t,duration:a,limit:1,location:r},headers:{Authorization:"Bearer ".concat(this.props.auth.token)}}).then(function(t){return t.data.data}).then(function(a){var r=Et(a,"total")[0];n.push({data:r,name:t}),5===n.length&&(n.sort(function(t,e){return t.name>e.name?1:t.name<e.name?-1:0}),dt.dispatch(mt(Et(n,"data"),kt)),0===Math.max.apply(Math,Object(v.a)(n.map(function(t){return t.data})))?e.setState({dataError:X}):e.setState({dataError:""}))}).catch(function(t){t.response&&403===t.response.status&&e.setState({dataError:J})})}},{key:"componentWillUnmount",value:function(){tt&&clearInterval(tt)}},{key:"render",value:function(t){return r.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:S,minHeight:"10vh",height:this.state.dataError===X?"10vh":"auto"}},r.a.createElement(U,{options:St,selections:this.props.options,onOptionChange:this.optionChange,dropdown:["locations"],countdown:Ot}),this.state.dataError===J?r.a.createElement(_.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"):this.state.dataError===X?r.a.createElement(_.a,{variant:"secondary"}," ",r.a.createElement("h2",null,"Data is empty!")):r.a.createElement(k.a,{options:this.state.options,series:this.props.options.data,type:"donut"}))}}]),e}(n.Component),jt=Object(E.b)(function(t){return{options:t.circleDashboard,auth:t.auth}})(xt),Ct=a(22);Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var wt,Dt="generalChart",Tt=2,At=10,Rt={modes:[],durations:["hour","day","month"],limits:[7,12,24],timer:[10,60,3600],views:["area","line"],categories:[]},It=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).resetSeries=function(){Ct.a.exec(Dt,"resetSeries")},a.updateDataByType=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Z.a.get("".concat(bt,"/avg?"),{params:{rated:e,duration:n,limit:r},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(t){return t.data.data}).then(function(e){var r=Et(e,"average"),o=Et(e,yt),s=A(o,n),i=vt(r,"rating AVG",dt.getState().generalDashboard.views);dt.dispatch(gt(i,Dt));try{Ct.a.exec(Dt,"updateOptions",{xaxis:{categories:s}}),"avg"===t&&Ct.a.exec(Dt,"updateOptions",{yaxis:{min:0,tickAmount:5,max:5}})}catch(c){}dt.dispatch(mt([i],Dt)),0===Math.max.apply(Math,Object(v.a)(r))?a.setState({dataError:X}):a.setState({dataError:""})}).catch(function(t){t.response&&403===t.response.status&&a.setState({dataError:J})})},a.updateCountdown=function(){0===At?(a.update(),a.resetTimer()):At-=1,dt.dispatch(ft(At,Dt))},a.resetTimer=function(){wt&&clearInterval(wt),At=dt.getState().generalDashboard.timer,wt=setInterval(a.updateCountdown,1e3)},a.update=function(){a.updateDataByType(dt.getState().generalDashboard.modes,1,dt.getState().generalDashboard.durations,dt.getState().generalDashboard.limits)},a.optionChange=function(t,e){dt.dispatch(pt(t,e,Dt)),a.update(),a.resetTimer()},a.state={dataError:"",countdown:"",series:[],optionsMixedChart:{chart:{width:"100%",background:S,id:Dt},title:{text:"Average customer rating over time",align:"center"},colors:[x],stroke:{width:Tt,opacity:1,curve:"smooth"},markers:{size:0,strokeWidth:1,strokeOpacity:1,hover:{size:4}},yaxis:{tickAmount:5,min:0,max:5},grid:{borderColor:"#40475D"},theme:{mode:"dark"},legend:{offsetX:0,offsetY:-20,height:30,markers:{width:20,height:10,radius:12}},fill:{opacity:.7}}},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(t){Object.keys(Rt).map(function(t){return dt.dispatch(pt(t,Rt[t][0],Dt))}),this.updateDataByType(Rt.modes[0],1,Rt.durations[0],Rt.limits[0]),this.resetTimer()}},{key:"componentWillUnmount",value:function(){wt&&clearInterval(wt)}},{key:"render",value:function(t){return r.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:S,minHeight:"10vh",transition:"0.5s",height:this.state.dataError===X?"auto":"85vh"}},r.a.createElement(U,{onOptionChange:this.optionChange,options:Rt,selections:this.props.options,countdown:this.props.options.countdown}),this.state.dataError===J?r.a.createElement(_.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"):this.state.dataError===X?r.a.createElement(_.a,{variant:"secondary"},r.a.createElement("h2",null,"Data is empty!")):r.a.createElement(k.a,{options:this.state.optionsMixedChart,series:this.props.options.data,type:"line"}))}}]),e}(n.Component),Mt=Object(E.b)(function(t){return{options:t.generalDashboard,auth:t.auth}})(It);Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Lt,Ut="columnChart",_t=2,Gt=10,Bt={modes:[],durations:["hour","day","month"],limits:[7,12,24],timer:[10,60,3600],views:["column","area","line"]},zt=["R\u1ea5t kh\xf4ng t\u1ed1t","Kh\xf4ng t\u1ed1t","B\xecnh th\u01b0\u1eddng","T\u1ed1t","R\u1ea5t t\u1ed1t"],Nt=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getLocations=function(){var t="all";Z.a.get("".concat(bt,"/location?"),{params:{},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(t){return t.data.data}).then(function(e){Bt.locations=[t].concat(Et(e,"location"))}).catch(function(t){401===t.response.status&&a.setState({dataError:J})})},a.updateDataByType=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s={avg:"average",total:"total"};Z.a.get("".concat(bt,"/").concat(t,"?"),{params:{rated:e,duration:n,limit:r,location:o},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(t){return t.data.data}).then(function(r){var o=Et(r,s[t]),i=Et(r,yt),c=A(i,n),l=vt(o,"".concat(e,".  ").concat(zt[e-1]),dt.getState().columnDashboard.views);dt.dispatch(gt(l,Ut));try{Ct.a.exec(Ut,"updateOptions",{xaxis:{categories:c}}),"avg"===t?Ct.a.exec(Ut,"updateOptions",{yaxis:{min:0,tickAmount:5,max:5}}):5===a.props.options.series.length&&Ct.a.exec(Ut,"updateOptions",{yaxis:{min:0,tickAmount:5,max:Math.max.apply(Math,Object(v.a)(a.props.options.series.map(function(t){return Math.max.apply(Math,Object(v.a)(t.data))})))}})}catch(d){}if(5===a.props.options.series.length){var u=a.props.options.series.sort(function(t,e){return t.name>e.name?1:t.name<e.name?-1:0});Ct.a.exec(Ut,"updateSeries",u),a.setState({series:u}),0===Math.max.apply(Math,Object(v.a)(u.map(function(t){return Math.max.apply(Math,Object(v.a)(t.data))})))?a.setState({dataError:X}):a.setState({dataError:""})}}).catch(function(t){t.response&&403===t.response.status&&a.setState({dataError:J})})},a.updateCountdown=function(){0===Gt?(a.update(),a.resetTimer()):Gt-=1,dt.dispatch(ft(Gt,Ut))},a.resetTimer=function(){Lt&&clearInterval(Lt),Gt=dt.getState().columnDashboard.timer,Lt=setInterval(a.updateCountdown,1e3)},a.update=function(){var t="total";Z.a.all([1,2,3,4,5].map(function(e){return a.updateDataByType(t,e,dt.getState().columnDashboard.durations,dt.getState().columnDashboard.limits,"all"===dt.getState().columnDashboard.locations?"":dt.getState().columnDashboard.locations)})).then(function(t){return dt.dispatch(ht([],Ut))})},a.optionChange=function(t,e){dt.dispatch(pt(t,e,Ut)),a.update(),a.resetTimer()},a.state={dataError:"",locations:[],series:[],optionsMixedChart:{chart:{width:"100%",background:S,id:Ut},title:{text:"Total customer rating over time",align:"center"},colors:j,stroke:{width:_t,opacity:1,curve:"smooth"},markers:{size:0,strokeWidth:1,strokeOpacity:1,hover:{size:4}},yaxis:{tickAmount:5,min:0,max:5},grid:{borderColor:"#40475D",xaxis:{lines:{show:!0}}},theme:{mode:"dark"},legend:{offsetX:0,offsetY:-10,height:50,markers:{width:25,height:20,radius:5}},fill:{opacity:.7},dataLabels:{enabled:!1}}},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(t){this.getLocations(),Object.keys(Bt).map(function(t){return dt.dispatch(pt(t,Bt[t][0],Ut))}),dt.dispatch(pt("durations",Bt.durations[0],Ut)),this.update(),this.resetTimer()}},{key:"componentWillUnmount",value:function(){Lt&&clearInterval(Lt)}},{key:"render",value:function(t){return r.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:S,minHeight:"10vh"}},r.a.createElement(U,{onOptionChange:this.optionChange,options:Bt,selections:this.props.options,dropdown:["locations"],countdown:this.props.options.countdown}),this.state.dataError===J?r.a.createElement(_.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"):this.state.dataError===X?r.a.createElement(_.a,{variant:"secondary"},r.a.createElement("h2",null,"Data is empty!")):r.a.createElement(k.a,{options:this.state.optionsMixedChart,series:this.state.series,type:"bar"}))}}]),e}(n.Component),Ht=Object(E.b)(function(t){return{options:t.columnDashboard,auth:t.auth}})(Nt),Wt=a(128);Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Yt,Ft={container:{overflowY:"scroll",maxHeight:"20rem",backgroundColor:S,color:"#aaaaaa"}},Kt=20,Pt=[T.a,T.d,T.h,T.i,T.e],Vt=["R\u1ea5t kh\xf4ng t\u1ed1t","Kh\xf4ng t\u1ed1t","B\xecnh th\u01b0\u1eddng","T\u1ed1t","R\u1ea5t t\u1ed1t"],Xt=function(t){var e=new Date(t.date);return r.a.createElement("p",null," ",e.toLocaleString()," ",r.a.createElement(D.a,{style:{color:j[t.rated-1]},icon:Pt[t.rated-1]}),r.a.createElement("span",{style:{color:j[t.rated-1]}}," (",Vt[t.rated-1]," ) ",t.feedback," "))},Jt=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).update=function(){Z.a.get("api/dashboard/comment?",{params:{limit:Kt},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(t){return t.data.data}).then(function(t){a.setState({comments:t}),0===t.length?a.setState({dataError:X}):a.setState({dataError:""})}).catch(function(t){t.response&&403===t.response.status&&a.setState({dataError:J})})},a.state={dataError:"",comments:[]},a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.update(),Yt=setInterval(this.update,2e3)}},{key:"componentWillUnmount",value:function(){Yt&&clearInterval(Yt)}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{style:{position:"sticky",top:0,background:S,width:"90%",height:"10%",color:x}},r.a.createElement("h3",null," Recent comments "))),r.a.createElement(f.a,{style:Object(h.a)({},Ft.container,{maxHeight:"30vw"})},this.state.dataError===J&&r.a.createElement(_.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"),this.state.dataError===X?r.a.createElement(_.a,{variant:"secondary",style:{width:"100%"}},r.a.createElement("h2",null,"Data is empty!")):r.a.createElement(Wt.a,{variant:"flush"},this.state.comments.map(function(t,e){return r.a.createElement(Xt,{date:t.created_at,rated:t.rated,feedback:t.comment,key:e})}))))}}]),e}(n.Component);Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Qt=function(t){return function(e,a){e({type:"USER_LOADING"});var n=t||a().auth.token;Z.a.get("/api/auth/admin",{params:{},headers:{"Content-Type":"aplication/json",Authorization:"Bearer ".concat(n)}}).then(function(t){e({type:"ADMIN_LOADED",payload:t.data})}).catch(function(t){t.response?403===t.response.status&&(e({type:"GET_ERROR",payload:Object(nt.a)({},rt,"Account is not authorized")}),e({type:"USER_LOGOUT"})):e({type:"GET_ERROR",payload:Object(nt.a)({},ot,"Sever is not responding!")})})}};Z.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Zt={responsive:{display:"flex",justifyContent:"center",alignItems:"center"},brand:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:100,color:"#aaaaaa",fontFamily:"Quantico",background:S,margin:5,borderRadius:10},btn:{background:S,margin:10,borderRadius:10,minHeight:100,display:"flex",justifyContent:"center",alignItems:"center"}},$t=Object(E.b)(function(t){return{isAuthenticated:t.auth.isAuthenticated}})(function(t){return t.isAuthenticated?r.a.createElement(g.a,{fluid:!0,style:{backgroundColor:"#202534"}},r.a.createElement(f.a,{style:Zt.responsive},r.a.createElement(y.a,{xs:9,md:9,xl:9,sm:9,lg:9,style:Zt.brand},r.a.createElement("h2",{style:{fontSize:"3vw",color:x}},"NGUYEN KIM RATING DASHBOARD")),r.a.createElement(y.a,{xs:2,md:2,xl:2,sm:2,lg:2,style:Zt.btn},r.a.createElement(b.a,{variant:"outline-info",onClick:function(){return dt.dispatch(function(t,e){t({type:"USER_LOGOUT"})})}},"Logout"))),r.a.createElement(f.a,{style:Object(h.a)({},Zt.responsive)},r.a.createElement(y.a,{xs:11,md:11,xl:5,sm:11,lg:5,style:{border:"1px solid ".concat(S),background:S,borderRadius:10,margin:10}},r.a.createElement(jt,null)),r.a.createElement(y.a,{xs:11,md:11,xl:5,sm:11,lg:5,style:{border:"1px solid ".concat(S),background:S,borderRadius:10,margin:10}},r.a.createElement(Mt,null)),r.a.createElement(y.a,{xs:11,md:11,xl:10,sm:11,lg:10,style:{border:"1px solid ".concat(S),background:S,borderRadius:10,margin:10}},r.a.createElement(Ht,null)),r.a.createElement(y.a,{xs:11,md:11,xl:10,sm:11,lg:10,style:{border:"1px solid ".concat(S),background:S,borderRadius:10,margin:10}},r.a.createElement(Jt,null)))):r.a.createElement(m.a,{to:"/login"})}),qt=function(t){return t.display&&r.a.createElement(_.a,{variant:"danger",show:!0,dismissible:!0,onClose:t.onClose},r.a.createElement(_.a.Heading,null,t.heading),r.a.createElement("p",null,t.text))},te={responsive:{display:"flex",justifyContent:"center",alignItems:"center"},brand:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:80,color:"#aaaaaa",fontFamily:"Quantico",background:S,margin:"10px 20% 10px 20%"},text:{color:"#dddddd"}},ee=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(l.a)(this,Object(u.a)(e).call(this))).state={username:"",password:""},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(t){var e=this;return this.props.isAuthenticated?r.a.createElement(m.a,{to:"/"}):r.a.createElement(g.a,null,r.a.createElement(f.a,{style:te.responsive},r.a.createElement(y.a,{xs:10,sm:10,md:12,lg:8,xl:8,style:Object(h.a)({},te.brand)},r.a.createElement("h5",{style:{fontSize:"3vw",color:x,whiteSpace:"nowrap"}},"NGUYENKIM RATING DASHBOARD"))),r.a.createElement(f.a,{style:te.responsive},r.a.createElement(y.a,{xs:10,sm:10,md:12,lg:8,xl:8,style:{background:S,padding:"5%"}},r.a.createElement(qt,{display:rt in this.props.messages.error,onClose:function(){dt.dispatch({type:"CLEAR_MESSAGES",payload:{}})},heading:rt,text:this.props.messages.error?this.props.messages.error[rt]:{}}),r.a.createElement(qt,{display:ot in this.props.messages.error,onClose:function(){dt.dispatch({type:"CLEAR_MESSAGES",payload:{}})},heading:ot,text:this.props.messages.error?this.props.messages.error[ot]:{}}),r.a.createElement(C.a,{fullWidth:!0},r.a.createElement("h1",{style:{color:"#dddddd"}},"Login"),r.a.createElement(C.a.Group,{controlId:"formBasicEmail",lg:!0},r.a.createElement(C.a.Label,{style:te.text},"Username"),r.a.createElement(C.a.Control,{type:"text",placeholder:"admin",size:"lg",style:{backgroundColor:S,color:"#ffffff"},value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement(C.a.Group,{controlId:"formBasicPassword",lg:!0},r.a.createElement(C.a.Label,{style:te.text},"Password"),r.a.createElement(C.a.Control,{type:"password",placeholder:"password",size:"lg",style:{backgroundColor:S,color:"#ffffff"},value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement(b.a,{variant:"info",type:"button",onClick:function(){return dt.dispatch((t=e.state.username,a=e.state.password,function(e){Z.a.post("api/auth/login",{username:t,password:a}).then(function(t){e({type:"LOGIN_SUCCESS",payload:t.data})}).catch(function(t){t.response?400===t.response.status&&e({type:"GET_ERROR",payload:Object(nt.a)({},rt,"Invalid login or password")}):e({type:"GET_ERROR",payload:Object(nt.a)({},ot,"Sever is not responding!")})}).then(function(t){return e(Qt())})}));var t,a}},"Submit")))))}}]),e}(n.Component),ae=Object(E.b)(function(t){return{isAuthenticated:t.auth.isAuthenticated,messages:t.messages}})(ee),ne=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){dt.dispatch(Qt())}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/login",component:ae}),r.a.createElement(m.b,{exact:!0,path:"/",component:$t})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E.a,{store:dt},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},73:function(t,e,a){t.exports=a(120)},79:function(t,e,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.03bc092d.chunk.js.map