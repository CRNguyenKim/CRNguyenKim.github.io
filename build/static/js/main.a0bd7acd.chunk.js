(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),s=a.n(r),i=(a(78),a(79),a(9)),c=a(10),l=a(12),u=a(11),d=a(13),p=a(38),m=a(24),h=a(5),g=a(125),f=a(122),y=a(65),b=a(124),E=a(17),v=a(23),O=a(30),k=a.n(O),x="#303444",S="#80deea",j=["#af4448","#ff8a65","#ffd54f","#aed581","#00bfa5"],C=a(127),w=a(123),D=a(32),A=a(16),T=function(e,t){switch(t){case"hour":return e.map(function(e){var t=new Date(e);return+t.getHours()>12?t.getHours()+"PM":t.getHours()+"AM"});case"day":return e.map(function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth())});case"month":return e.map(function(e){var t=new Date(e);return"".concat((t.getMonth()+1)%12===0?12:(t.getMonth()+1)%12,"/").concat(t.getFullYear())})}},I={responsive:{display:"flex",alignItems:"center"},rowOption:{margin:"10px 0px 10px 0px"},selected:{color:"#ffffff"}},R={DURATIONS:A.b,TIMER:A.j,LIMITS:A.f,VIEWS:A.c,LOCATIONS:A.g},M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.props.data.length?this.props.dropdown?o.a.createElement(C.a.Group,{controlId:"exampleForm.ControlSelect1"},o.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:{color:S}},o.a.createElement("p",{style:{margin:0}}," ",o.a.createElement(D.a,{icon:R[this.props.name.toUpperCase()]})," ")),o.a.createElement(C.a.Control,{as:"select",onChange:function(t){e.props.onOptionChange(e.props.name,t.target.value)},style:{backgroundColor:x,color:"#ffffff"}},this.props.data.map(function(e){return o.a.createElement("option",{key:e},e)}))):o.a.createElement(f.a,{style:Object(h.a)({},I.responsive,I.rowOption)},o.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:{color:S}},o.a.createElement("p",{style:{margin:0}}," ",o.a.createElement(D.a,{icon:R[this.props.name.toUpperCase()]})," ")),o.a.createElement(y.a,{xs:9,md:9,xl:9,sm:9,lg:9,style:Object(h.a)({},I.responsive,{justifyContent:"center"})},o.a.createElement(w.a,{"aria-label":"Basic example"},this.props.data&&this.props.data.map(function(t){return o.a.createElement(b.a,{size:"sm",variant:"outline-info",key:t,style:e.props.selections[e.props.name]===t?I.selected:null,onClick:function(){return e.props.onOptionChange(e.props.name,t)}},t)})))):""}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onOptionChange=function(e,t){a.props.onOptionChange(e,t)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.dropdown?this.props.dropdown:[];return o.a.createElement(g.a,{fluid:!0},o.a.createElement(f.a,null,o.a.createElement(y.a,{xs:12,sm:12,md:12,xl:8,lg:8},Object.keys(this.props.options).map(function(a){return o.a.createElement(M,{name:a,data:e.props.options[a],key:a,onOptionChange:e.onOptionChange,selections:e.props.selections,dropdown:t.includes(a)})})),o.a.createElement(y.a,{xs:12,sm:12,md:12,xl:4,lg:4},o.a.createElement(f.a,{style:Object(h.a)({},I.responsive,I.rowOption)},o.a.createElement(y.a,{xs:3,md:3,xl:3,sm:3,lg:3,style:Object(h.a)({color:S},I.responsive)},o.a.createElement("p",{style:{margin:0}}," ",o.a.createElement(D.a,{icon:A.k}),"  ")),o.a.createElement(y.a,{xs:9,md:9,xl:9,sm:9,lg:9,style:Object(h.a)({color:S},I.responsive,{justifyContent:"center"})},o.a.createElement("p",{style:{margin:0}},function(e){e=Number(e);var t=Math.floor(e/3600),a=Math.floor(e%3600/60),n=Math.floor(e%3600%60);return("0"+t).slice(-2)+":"+("0"+a).slice(-2)+":"+("0"+n).slice(-2)}(this.props.countdown)))))))}}]),t}(n.Component),U=a(126),_="SET_MODES",G="SET_DURATIONS",N="SET_LIMITS",z="SET_TIMER",B="SET_VIEWS",H="SET_CATEGORIES",W="SET_LOCATIONS",Y="SET_COUNTDOWN",F="SET_DATA",P="SET_SERIES",V="APPEND_SERIES",X="NODATA",J="UNAUTHORIZED",K=a(8),Q=a.n(K),Z={modes:"",durations:"",limits:"",views:"",timer:"",series:[],data:[],labels:[],locations:[]};function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case e+_:return Object(h.a)({},t,{modes:a.payload.modes});case e+G:return Object(h.a)({},t,{durations:a.payload.durations});case e+N:return Object(h.a)({},t,{limits:a.payload.limits});case e+B:return Object(h.a)({},t,{views:a.payload.views});case e+z:return Object(h.a)({},t,{timer:a.payload.timer});case e+F:return Object(h.a)({},t,{data:a.payload.data});case e+H:return Object(h.a)({},t,{categories:a.payload.categories});case e+P:return Object(h.a)({},t,{series:a.payload.series});case e+V:return Object(h.a)({},t,{series:t.series.concat(a.payload.data)});case e+W:return Object(h.a)({},t,{locations:a.payload.locations});case e+Y:return Object(h.a)({},t,{countdown:a.payload.countdown});default:return t}}}var q,ee={token:localStorage.getItem("token"),isAuthenticated:!!localStorage.getItem("token"),isLoading:!1,user:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(h.a)({},e,{isLoading:!0});case"USER_LOAD":return Object(h.a)({},e,{isLoading:!1,isAuthenticated:!0,user:t.payload.username});case"LOGIN_SUCCESS":return localStorage.setItem("token",t.payload.token),Object(h.a)({},e,{token:t.payload.token,isLoading:!1,isAuthenticated:!0,user:t.payload.username});case"LOGIN_FAILED":case"USER_LOGOUT":return localStorage.removeItem("token"),Object(h.a)({},e,{token:null,user:null,isAuthenticated:!1,isLoading:!1});default:return e}},ae=a(20),ne="Authentication Error !",oe="Server error!",re={success:{},error:{}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERROR":return Object(h.a)({},e,{error:t.payload});case"GET_SUCCESS":return Object(h.a)({},e,{success:t.payload});case"CLEAR_MESSAGES":return{error:{},success:{}};default:return e}},ie=a(31),ce=a(66),le=Object(ie.c)({generalDashboard:$("generalChart"),circleDashboard:$("circleChart"),columnDashboard:$("columnChart"),auth:te,messages:se}),ue=Object(ie.d)(le,{},Object(ie.a)(ce.a)),de=function(e,t,a){return{type:"".concat(a,"SET_").concat(e.toUpperCase()),payload:Object(ae.a)({},e,t)}},pe=function(e,t){return{type:t+F,payload:{data:e}}},me=function(e,t){return{type:t+P,payload:{series:e}}},he=function(e,t){return{type:t+V,payload:{data:e}}},ge=function(e,t){return{type:t+Y,payload:{countdown:e}}},fe="day",ye="/api/dashboard",be=function(e,t){return e.map(function(e){return e[t]})},Ee=function(e,t,a){return{data:e,name:t,type:a}},ve=10,Oe="circleChart";Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";var ke={durations:["day","month"],timer:[10,60,3600],locations:[]},xe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getLocations=function(){var e="all";Q.a.get("".concat(ye,"/location?"),{params:{},headers:{Authorization:"Bearer ".concat(ue.getState().auth.token)}}).then(function(e){return e.data.data}).then(function(t){ke.locations=[e].concat(be(t,"location"))})},a.updateCountdown=function(){0===ve?(a.update(),a.resetTimer()):ve-=1,ue.dispatch(ge(ve,Oe))},a.resetTimer=function(){q&&clearInterval(q),ve=ue.getState().circleDashboard.timer,q=setInterval(a.updateCountdown,1e3)},a.update=function(){var e=[],t=ue.getState().circleDashboard.durations?ue.getState().circleDashboard.durations:ke.durations[0],n=ue.getState().circleDashboard.locations?ue.getState().circleDashboard.locations:ke.locations[0];"all"===n&&(n=""),Q.a.all([1,2,3,4,5].map(function(o){return a.updateDataByType(o,t,e,n)}))},a.optionChange=function(e,t){ue.dispatch(de(e,t,Oe)),a.update(),a.resetTimer()},a.state={dataError:"",data:[],options:{labels:["rating 1","rating 2","rating 3","rating 4","rating 5"],chart:{id:Oe,width:"60%",foreColor:S,fontFamily:"Helvetica, Arial, sans-serif",fontSize:800,toolbar:{show:!0,tools:{download:!0,selection:!0,zoom:!0,zoomin:!0,zoomout:!0,pan:!0,reset:!0}}},fill:{opacity:.9},title:{text:"Customer Rating Percentage",align:"left"},stroke:{colors:["transparent"]},theme:{palette:"palette1"},plotOptions:{pie:{customScale:1,offsetX:0,offsetY:0,expandOnClick:!0,dataLabels:{offset:0,minAngleToShowLabel:10},donut:{size:"55%",background:"transparent"}}},tooltip:{enabled:!1}}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getLocations(),Object.keys(ke).map(function(e){return ue.dispatch(de(e,ke[e][0],Oe))}),this.update(),this.resetTimer()}},{key:"updateDataByType",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hour",n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";Q.a.get("".concat(ye,"/").concat("total","?"),{params:{rated:e,duration:a,limit:1,location:o},headers:{Authorization:"Bearer ".concat(this.props.auth.token)}}).then(function(e){return e.data.data}).then(function(a){var o=be(a,"total")[0];n.push({data:o,name:e}),5===n.length&&(n.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}),ue.dispatch(pe(be(n,"data"),Oe)),0===Math.max.apply(Math,Object(v.a)(n.map(function(e){return e.data})))?t.setState({dataError:X}):t.setState({dataError:""}))})}},{key:"componentWillUnmount",value:function(){q&&clearInterval(q)}},{key:"render",value:function(e){return o.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:x}},o.a.createElement(L,{options:ke,selections:this.props.options,onOptionChange:this.optionChange,dropdown:["locations"],countdown:ve}),this.state.dataError===J&&o.a.createElement(U.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"),this.state.dataError===X&&o.a.createElement(U.a,{variant:"secondary"},"Data is empty!"),o.a.createElement(k.a,{options:this.state.options,series:this.props.options.data,type:"donut"}))}}]),t}(n.Component),Se=Object(E.b)(function(e){return{options:e.circleDashboard,auth:e.auth}})(xe),je=a(21);Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Ce,we="generalChart",De=2,Ae=10,Te={modes:[],durations:["hour","day","month"],limits:[7,12,24],timer:[10,60,3600],views:["area","line"],categories:[]},Ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).resetSeries=function(){je.a.exec(we,"resetSeries")},a.updateDataByType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;Q.a.get("".concat(ye,"/avg?"),{params:{rated:t,duration:n,limit:o},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(e){return e.data.data}).then(function(t){var o=be(t,"average"),r=be(t,fe),s=T(r,n),i=Ee(o,"rating AVG",ue.getState().generalDashboard.views);ue.dispatch(he(i,we));try{je.a.exec(we,"updateOptions",{xaxis:{categories:s}}),"avg"===e&&je.a.exec(we,"updateOptions",{yaxis:{min:0,tickAmount:5,max:5}})}catch(c){}ue.dispatch(pe([i],we)),0===Math.max.apply(Math,Object(v.a)(o))?a.setState({dataError:X}):a.setState({dataError:""})}).catch(function(e){401===e.response.status&&a.setState({dataError:J})})},a.updateCountdown=function(){0===Ae?(a.update(),a.resetTimer()):Ae-=1,ue.dispatch(ge(Ae,we))},a.resetTimer=function(){Ce&&clearInterval(Ce),Ae=ue.getState().generalDashboard.timer,Ce=setInterval(a.updateCountdown,1e3)},a.update=function(){a.updateDataByType(ue.getState().generalDashboard.modes,1,ue.getState().generalDashboard.durations,ue.getState().generalDashboard.limits)},a.optionChange=function(e,t){ue.dispatch(de(e,t,we)),a.update(),a.resetTimer()},a.state={dataError:"",countdown:"",series:[],optionsMixedChart:{chart:{width:"100%",background:x,id:we},title:{text:"Average customer rating over time",align:"center"},colors:[S],stroke:{width:De,opacity:1,curve:"smooth"},markers:{size:0,strokeWidth:1,strokeOpacity:1,hover:{size:4}},yaxis:{tickAmount:5,min:0,max:5},grid:{borderColor:"#40475D"},theme:{mode:"dark"},legend:{offsetX:0,offsetY:-20,height:30,markers:{width:20,height:10,radius:12}},fill:{opacity:.7}}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){Object.keys(Te).map(function(e){return ue.dispatch(de(e,Te[e][0],we))}),this.updateDataByType(Te.modes[0],1,Te.durations[0],Te.limits[0]),this.resetTimer()}},{key:"componentWillUnmount",value:function(){Ce&&clearInterval(Ce)}},{key:"render",value:function(e){return o.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:x,minHeight:"45vw"}},o.a.createElement(L,{onOptionChange:this.optionChange,options:Te,selections:this.props.options,countdown:this.props.options.countdown}),this.state.dataError===J&&o.a.createElement(U.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"),this.state.dataError===X&&o.a.createElement(U.a,{variant:"secondary"},"Data is empty!"),o.a.createElement(k.a,{options:this.state.optionsMixedChart,series:this.props.options.data,type:"line"}))}}]),t}(n.Component),Re=Object(E.b)(function(e){return{options:e.generalDashboard,auth:e.auth}})(Ie);Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Me,Le="columnChart",Ue=2,_e=10,Ge={modes:[],durations:["hour","day","month"],limits:[7,12,24],timer:[10,60,3600],views:["column","area","line"]},Ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).getLocations=function(){Q.a.get("".concat(ye,"/location?"),{params:{},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(e){return e.data.data}).then(function(e){Ge.locations=be(e,"location"),0===Math.max.apply(Math,Object(v.a)(e))?a.setState({dataError:X}):a.setState({dataError:""})})},a.updateDataByType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s={avg:"average",total:"total"};Q.a.get("".concat(ye,"/").concat(e,"?"),{params:{rated:t,duration:n,limit:o,location:r},headers:{Authorization:"Bearer ".concat(a.props.auth.token)}}).then(function(e){return e.data.data}).then(function(o){var r=be(o,s[e]),i=be(o,fe),c=T(i,n),l=Ee(r,"rating "+t,ue.getState().columnDashboard.views);ue.dispatch(he(l,Le));try{je.a.exec(Le,"updateOptions",{xaxis:{categories:c}}),"avg"===e?je.a.exec(Le,"updateOptions",{yaxis:{min:0,tickAmount:5,max:5}}):5===a.props.options.series.length&&je.a.exec(Le,"updateOptions",{yaxis:{min:0,tickAmount:5,max:Math.max.apply(Math,Object(v.a)(a.props.options.series.map(function(e){return Math.max.apply(Math,Object(v.a)(e.data))})))}})}catch(d){}if(5===a.props.options.series.length){var u=a.props.options.series.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0});je.a.exec(Le,"updateSeries",u),a.setState({series:u})}})},a.updateCountdown=function(){0===_e?(a.update(),a.resetTimer()):_e-=1,ue.dispatch(ge(_e,Le))},a.resetTimer=function(){Me&&clearInterval(Me),_e=ue.getState().columnDashboard.timer,Me=setInterval(a.updateCountdown,1e3)},a.update=function(){var e="total";Q.a.all([1,2,3,4,5].map(function(t){return a.updateDataByType(e,t,ue.getState().columnDashboard.durations,ue.getState().columnDashboard.limits,ue.getState().columnDashboard.locations)})).then(function(e){return ue.dispatch(me([],Le))})},a.optionChange=function(e,t){ue.dispatch(de(e,t,Le)),a.update(),a.resetTimer()},a.state={dataError:"",locations:[],series:[],optionsMixedChart:{chart:{width:"100%",background:x,id:Le},title:{text:"Total customer rating over time",align:"center"},colors:j,stroke:{width:Ue,opacity:1,curve:"smooth"},markers:{size:0,strokeWidth:1,strokeOpacity:1,hover:{size:4}},yaxis:{tickAmount:5,min:0,max:5},grid:{borderColor:"#40475D",xaxis:{lines:{show:!0}}},theme:{mode:"dark"},legend:{offsetX:0,offsetY:-10,height:50,markers:{width:25,height:20,radius:5}},fill:{opacity:.7},dataLabels:{enabled:!1}}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(e){this.getLocations(),Object.keys(Ge).map(function(e){return ue.dispatch(de(e,Ge[e][0],Le))}),ue.dispatch(de("durations",Ge.durations[0],Le)),this.update(),this.resetTimer()}},{key:"componentWillUnmount",value:function(){Me&&clearInterval(Me)}},{key:"render",value:function(e){return o.a.createElement("div",{style:{borderRadius:0,marginTop:10,display:"flex",flexDirection:"column",background:x,minHeight:"45vw"}},o.a.createElement(L,{onOptionChange:this.optionChange,options:Ge,selections:this.props.options,dropdown:["locations"],countdown:this.props.options.countdown}),this.state.dataError===J&&o.a.createElement(U.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"),this.state.dataError===X&&o.a.createElement(U.a,{variant:"secondary"},"Data is empty!"),o.a.createElement(k.a,{options:this.state.optionsMixedChart,series:this.state.series,type:"bar"}))}}]),t}(n.Component),ze=Object(E.b)(function(e){return{options:e.columnDashboard,auth:e.auth}})(Ne),Be=a(129);Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";var He,We={container:{overflowY:"scroll",maxHeight:"20rem",backgroundColor:x,color:"#aaaaaa"}},Ye=20,Fe=[A.a,A.d,A.h,A.i,A.e],Pe=function(e){var t=new Date(e.date);return o.a.createElement("p",null," ",t.toLocaleString()," ",o.a.createElement(D.a,{icon:Fe[e.rated-1]})," ",e.feedback," ")},Ve=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).update=function(){Q.a.get("api/dashboard/comment?",{params:{limit:Ye},headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(function(e){return e.data.data}).then(function(e){a.setState({comments:e}),0===e.length?a.setState({dataError:X}):a.setState({dataError:""})})},a.state={dataError:"",comments:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.update(),He=setInterval(this.update,1e3)}},{key:"componentWillUnmount",value:function(){He&&clearInterval(He)}},{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(f.a,null,o.a.createElement("div",{style:{position:"sticky",top:0,background:x,width:"90%",height:"10%",color:S}},o.a.createElement("h3",null," Recent comments "))),o.a.createElement(f.a,{style:Object(h.a)({},We.container,{maxHeight:"30vw"})},o.a.createElement(Be.a,{variant:"flush"},this.state.dataError===J&&o.a.createElement(U.a,{variant:"danger"},"Couldn't retrieve data from sever. Make sure your account is admin account!"),this.state.dataError===X&&o.a.createElement(U.a,{variant:"secondary"},"Data is empty!"),this.state.comments.map(function(e,t){return o.a.createElement(Pe,{date:e.created_at,rated:e.rated,feedback:e.comment,key:t})}))))}}]),t}(n.Component);Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";Q.a.defaults.baseURL="https://nk-asp.herokuapp.com";var Xe={responsive:{display:"flex",justifyContent:"center",alignItems:"center"},brand:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:100,color:"#aaaaaa",fontFamily:"Quantico",background:x,margin:5,borderRadius:10},btn:{background:x,margin:10,borderRadius:10,minHeight:100,display:"flex",justifyContent:"center",alignItems:"center"}},Je=Object(E.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}})(function(e){return e.isAuthenticated?o.a.createElement(g.a,{fluid:!0,style:{backgroundColor:"#202534"}},o.a.createElement(f.a,{style:Xe.responsive},o.a.createElement(y.a,{xs:9,md:9,xl:9,sm:9,lg:9,style:Xe.brand},o.a.createElement("h2",{style:{fontSize:"3vw",color:S}},"NGUYEN KIM RATING DASHBOARD")),o.a.createElement(y.a,{xs:2,md:2,xl:2,sm:2,lg:2,style:Xe.btn},o.a.createElement(b.a,{variant:"outline-info",onClick:function(){return ue.dispatch(function(e,t){e({type:"USER_LOGOUT"})})}},"Logout"))),o.a.createElement(f.a,{style:Object(h.a)({},Xe.responsive)},o.a.createElement(y.a,{xs:11,md:11,xl:5,sm:11,lg:5,style:{border:"1px solid ".concat(x),background:x,borderRadius:10,margin:10}},o.a.createElement(Se,null)),o.a.createElement(y.a,{xs:11,md:11,xl:5,sm:11,lg:5,style:{border:"1px solid ".concat(x),background:x,borderRadius:10,margin:10}},o.a.createElement(Re,null)),o.a.createElement(y.a,{xs:11,md:11,xl:10,sm:11,lg:10,style:{border:"1px solid ".concat(x),background:x,borderRadius:10,margin:10}},o.a.createElement(ze,null)),o.a.createElement(y.a,{xs:11,md:11,xl:10,sm:11,lg:10,style:{border:"1px solid ".concat(x),background:x,borderRadius:10,margin:10}},o.a.createElement(Ve,null)))):o.a.createElement(m.a,{to:"/login"})}),Ke=a(128),Qe=function(e){return e.display&&o.a.createElement(Ke.a,{variant:"danger",show:!0,dismissible:!0,onClose:e.onClose},o.a.createElement(Ke.a.Heading,null,e.heading),o.a.createElement("p",null,e.text))},Ze={responsive:{display:"flex",justifyContent:"center",alignItems:"center"},brand:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:80,color:"#aaaaaa",fontFamily:"Quantico",background:x,margin:"10px 20% 10px 20%"},text:{color:"#dddddd"}},$e=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={username:"",password:""},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(e){var t=this;return console.log(this.props.isAuthenticated),this.props.isAuthenticated?o.a.createElement(m.a,{to:"/"}):o.a.createElement(g.a,null,o.a.createElement(f.a,{style:Ze.responsive},o.a.createElement(y.a,{xs:10,sm:10,md:12,lg:8,xl:8,style:Object(h.a)({},Ze.brand)},o.a.createElement("h5",{style:{fontSize:"3vw",color:S,whiteSpace:"nowrap"}},"NGUYENKIM RATING DASHBOARD"))),o.a.createElement(f.a,{style:Ze.responsive},o.a.createElement(y.a,{xs:10,sm:10,md:12,lg:8,xl:8,style:{background:x,padding:"5%"}},o.a.createElement(Qe,{display:ne in this.props.messages.error,onClose:function(){ue.dispatch({type:"CLEAR_MESSAGES",payload:{}})},heading:ne,text:this.props.messages.error?this.props.messages.error[ne]:{}}),o.a.createElement(Qe,{display:oe in this.props.messages.error,onClose:function(){ue.dispatch({type:"CLEAR_MESSAGES",payload:{}})},heading:oe,text:this.props.messages.error?this.props.messages.error[oe]:{}}),o.a.createElement(C.a,{fullWidth:!0},o.a.createElement("h1",{style:{color:"#dddddd"}},"Login"),o.a.createElement(C.a.Group,{controlId:"formBasicEmail",lg:!0},o.a.createElement(C.a.Label,{style:Ze.text},"Username"),o.a.createElement(C.a.Control,{type:"text",placeholder:"admin",size:"lg",style:{backgroundColor:x,color:"#ffffff"},value:this.state.username,onChange:function(e){return t.setState({username:e.target.value})}}),o.a.createElement(C.a.Text,{className:"text-muted"},"Admin login only!")),o.a.createElement(C.a.Group,{controlId:"formBasicPassword",lg:!0},o.a.createElement(C.a.Label,{style:Ze.text},"Password"),o.a.createElement(C.a.Control,{type:"password",placeholder:"password",size:"lg",style:{backgroundColor:x,color:"#ffffff"},value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}})),o.a.createElement(b.a,{variant:"info",type:"button",onClick:function(){return ue.dispatch((e=t.state.username,a=t.state.password,function(t){Q.a.post("api/auth/login",{username:e,password:a}).then(function(e){t({type:"LOGIN_SUCCESS",payload:e.data})}).catch(function(e){e.response?t({type:"GET_ERROR",payload:Object(ae.a)({},ne,"Invalid login or password")}):t({type:"GET_ERROR",payload:Object(ae.a)({},oe,"Sever is not responding!")})})}));var e,a}},"Submit")))))}}]),t}(n.Component),qe=Object(E.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,messages:e.messages}})($e),et=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){ue.dispatch(function(e,t){e({type:"USER_LOADING"});var a=t().auth.token;Q.a.get("/api/auth/user",{params:{},headers:{"Content-Type":"aplication/json",Authorization:"Bearer ".concat(a)}}).then(function(t){e({type:"USER_LOAD",payload:t.data})}).catch(function(t){t.response||e({type:"GET_ERROR",payload:Object(ae.a)({},oe,"Sever is not responding!")})})})}},{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(m.d,null,o.a.createElement(m.b,{path:"/login",component:qe}),o.a.createElement(m.b,{exact:!0,path:"/",component:Je})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(E.a,{store:ue},o.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a(120)},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.a0bd7acd.chunk.js.map