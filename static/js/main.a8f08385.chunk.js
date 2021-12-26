(this["webpackJsonpwork-timers"]=this["webpackJsonpwork-timers"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var c,r=n(1),o=n.n(r),i=n(23),s=n.n(i),a=n(33),u=n(10),d=(n(96),n(17));n(97);!function(e){e[e.CounterTimer=0]="CounterTimer",e[e.MultiStateTimer=1]="MultiStateTimer",e[e.Stopwatch=2]="Stopwatch"}(c||(c={}));n(34);var l=n(18),j=n(9);function m(e,t){var n=Object(r.useRef)(e);Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){var e=n.current;e&&e()}),t);return function(){return clearInterval(e)}}),[t])}var b=n(12),p=n(39),f=Object(p.a)({name:"audio",initialState:{muted:!1,volume:.5},reducers:{setMuted:function(e,t){e.muted=t.payload},setVolume:function(e,t){e.volume=Math.min(Math.max(0,t.payload),1)}}}),O={seconds:0,stopped:!0,flashing:!1,muted:!1,timesCompleted:0,statesSeconds:[0,0,0,0,0,0,0,0,0,0,0,0]},x=Object(p.a)({name:"timers",initialState:{},reducers:{addTimer:function(e,t){e[t.payload]=Object(l.a)({},O)},setTimerState:function(e,t){e[t.payload.key]=t.payload.state},setTimerSeconds:function(e,t){e[t.payload.key].seconds=t.payload.value},setTimerStopped:function(e,t){e[t.payload.key].stopped=t.payload.value},setTimerTimesCompleted:function(e,t){e[t.payload.key].timesCompleted=t.payload.value},setTimerFlashing:function(e,t){e[t.payload.key].flashing=t.payload.value},setTimerMuted:function(e,t){e[t.payload.key].muted=t.payload.value},setStatesSeconds:function(e,t){e[t.payload.key].statesSeconds=t.payload.value},setStatesSecondsAt:function(e,t){e[t.payload.key].statesSeconds[t.payload.index]=t.payload.value},addStatesSecondsAt:function(e,t){e[t.payload.key].statesSeconds[t.payload.index]+=t.payload.value},startAllTimers:function(e){Object.keys(e).forEach((function(t){e[t].stopped=!1}))},stopAllTimers:function(e){Object.keys(e).forEach((function(t){e[t].stopped=!0}))}}}),h=Object(b.b)({timers:x.reducer,audio:f.reducer}),v=Object(b.d)(h),g=function(){return Object(a.b)()},k=a.c,S=v,C=x.actions;function T(e,t){var n=k((function(e){return e.timers})),c=g(),o=Object(r.useMemo)((function(){return e in n?n[e]:void 0}),[n,e]),i=function(e){var t=Object(r.useState)(0),n=Object(j.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(!0),s=Object(j.a)(i,2),a=s[0],u=s[1];return m((function(){a||(o(c+1),e&&e())}),1e3),{currentSeconds:c,stopped:a,setStopped:u}}(t),s=i.currentSeconds,a=i.stopped,u=i.setStopped,d=Object(r.useCallback)((function(t){o&&c(C.setTimerSeconds({key:e,value:t}))}),[e,o,c]),l=Object(r.useCallback)((function(t){o&&c(C.setTimerStopped({key:e,value:t}))}),[e,o,c]),b=Object(r.useCallback)((function(t){o&&c(C.setTimerFlashing({key:e,value:t}))}),[e,o,c]),p=Object(r.useCallback)((function(t){o&&c(C.setTimerMuted({key:e,value:t}))}),[e,o,c]),f=Object(r.useCallback)((function(){o&&c(C.setTimerTimesCompleted({key:e,value:o.timesCompleted+1}))}),[e,o,c]);return Object(r.useEffect)((function(){o&&o.stopped!==a&&u(o.stopped)}),[o,a,u]),Object(r.useEffect)((function(){o&&s!==o.seconds&&d(s)}),[o,s,d]),{timerState:o,seconds:o?o.seconds:-1,stopped:!o||o.stopped,flashing:!o||o.flashing,muted:!o||o.muted,setStopped:l,setFlashing:b,setMuted:p,incrementTimesCompleted:f}}function y(e,t,n){var c=T(e,n),o=c.timerState,i=c.stopped,s=c.seconds,a=c.flashing,u=c.setStopped,d=c.setFlashing,m=c.incrementTimesCompleted,b=Object(r.useState)(0),p=Object(j.a)(b,2),f=p[0],O=p[1],x=Object(r.useState)(!1),h=Object(j.a)(x,2),v=h[0],g=h[1],k=Object(r.useCallback)((function(){O(s),d(!1)}),[O,s,d]),S=Object(r.useCallback)((function(){m(),d(!1)}),[m,d]),C=Object(r.useMemo)((function(){if(o){var e=t-(o.seconds-f);return e<=0&&!a&&!v?d(!0):e<=0&&v&&(g(!1),k()),e}return 99999999999999}),[t,o,f,v,a,g,k,d]),y=Object(r.useMemo)((function(){return o?Math.max(0,C):-1}),[C,o]),M=Object(r.useCallback)((function(){k(),u(!0)}),[k,u]),A=Object(r.useCallback)((function(){k(),u(!1)}),[k,u]);return Object(l.a)(Object(l.a)({},c),{},{timerState:o,secondsRemaining:y,stopped:i,markedForRestart:v,setStopped:u,setFlashing:d,resetTimer:k,resetTimerAndStop:M,resetTimerAndStart:A,incrementTimesCompleted:S,setMarkedForRestart:function(){return g(!0)}})}var M,A,I=n(25),w=n(4);!function(e){e[e.Normal=0]="Normal",e[e.Stopped=1]="Stopped",e[e.MarkedForRestart=2]="MarkedForRestart",e[e.Active=3]="Active"}(A||(A={}));var R=(M={},Object(I.a)(M,A.Normal,"black"),Object(I.a)(M,A.Stopped,"red"),Object(I.a)(M,A.MarkedForRestart,"green"),Object(I.a)(M,A.Active,"green"),M),F=function(e){return e<10?"0".concat(e):e},z=function(e){var t=e.seconds,n=e.state,c=e.size,o=void 0===c?"3xl":c,i=e.heading,s=e.headingColor,a=void 0===s?"gray.500":s,u=Object(r.useMemo)((function(){return function(e){var t="".concat(F(e.minutes),":").concat(F(e.seconds));return e.hours>0?"".concat(F(e.hours),":")+t:t}(function(e){var t=e;return{hours:~~(t/3600),minutes:~~((t%=3600)/60),seconds:t%=60}}(t))}),[t]),l=Object(w.jsx)(d.d,{size:o,color:R[n],children:u});return i?Object(w.jsxs)(d.g,{align:"center",children:[Object(w.jsx)(d.d,{size:"md",color:a,children:i}),l]}):l},N=n(24),E=function(e){var t=e.stopped,n=e.onClick;return Object(w.jsx)(d.a,{onClick:n,children:t?Object(w.jsx)(N.d,{size:90}):Object(w.jsx)(N.c,{size:90})})},W=n(46),B=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Restart":n;return Object(w.jsx)(d.a,{onClick:t,children:Object(w.jsx)(W.a,{bg:"blue.100",leftIcon:Object(w.jsx)(N.a,{size:20}),children:c})})},V=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Complete":n;return Object(w.jsx)(d.a,{onClick:t,children:Object(w.jsx)(W.a,{bg:"blue.100",leftIcon:Object(w.jsx)(N.b,{size:20}),children:c})})},L=n(52),P=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Complete":n;return Object(w.jsx)(d.a,{onClick:t,children:Object(w.jsx)(W.a,{bg:"blue.100",leftIcon:Object(w.jsx)(L.a,{size:20}),children:c})})},D=n(26),J=function(e){var t=e.muted,n=e.volume,c=e.onClick,o=e.color,i=void 0===o?"white":o,s=e.hoverColor,a=void 0===s?"#dddddd":s,u=e.size,d=void 0===u?40:u,m=Object(r.useState)(i),b=Object(j.a)(m,2),p=b[0],f=b[1],O={color:p,size:d,onMouseEnter:function(){return f(a)},onMouseLeave:function(){return f(i)},onClick:c};return t?Object(w.jsx)(D.e,Object(l.a)({},O)):0===n?Object(w.jsx)(D.b,Object(l.a)({},O)):n<.5?Object(w.jsx)(D.d,Object(l.a)({},O)):Object(w.jsx)(D.c,Object(l.a)({},O))},H=function(e){var t=e.title,n=e.muteButtonProps;return n?Object(w.jsxs)(d.c,{width:"100%",children:[Object(w.jsx)(J,{muted:n.muted,volume:1,onClick:function(){return n.setMuted(!n.muted)},size:60,color:"#dddddd",hoverColor:"#888888"}),Object(w.jsx)(d.f,{}),Object(w.jsx)(d.d,{size:"lg",ml:"-".concat(60,"px"),children:t}),Object(w.jsx)(d.f,{}),Object(w.jsx)("div",{})]}):Object(w.jsx)(d.d,{size:"lg",children:t})},q=function(e){var t=e.timer,n=function(e,t){var n=y(e,t.durationInSeconds),c=n.timerState,o=n.secondsRemaining,i=n.stopped,s=n.markedForRestart,a=n.muted,u=n.setMuted,d=n.setStopped,l=n.incrementTimesCompleted,j=n.resetTimer,m=n.setMarkedForRestart,b=c?c.timesCompleted:-1,p=Object(r.useCallback)((function(){l(),j()}),[l,j]),f=Object(r.useCallback)((function(){l(),m()}),[l,m]);return{timesCompleted:b,secondsRemaining:o,stopped:i,markedForRestart:s,muted:a,setMuted:u,setStopped:d,complete:l,restart:j,completeAndRestart:p,completeAndMarkForRestart:f}}(e.timerId,t);return Object(w.jsxs)("div",{className:"timerWrapper",children:[Object(w.jsx)(H,{title:t.title,muteButtonProps:{muted:n.muted,setMuted:n.setMuted}}),Object(w.jsxs)(d.d,{size:"md",color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",children:["Completed ",n.timesCompleted," times today"]}),Object(w.jsx)(z,{seconds:n.secondsRemaining,state:n.stopped?A.Stopped:n.markedForRestart?A.MarkedForRestart:A.Normal}),Object(w.jsxs)(d.g,{direction:"column",spacing:"1rem",align:"center",children:[Object(w.jsx)(E,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}}),Object(w.jsxs)(d.g,{direction:"row",children:[n.secondsRemaining>0&&Object(w.jsx)(P,{onClick:n.complete}),Object(w.jsx)(V,{onClick:n.completeAndRestart}),n.secondsRemaining>0&&Object(w.jsx)(B,{onClick:n.completeAndMarkForRestart,buttonText:"Complete and Autorestart"})]}),Object(w.jsx)(B,{onClick:n.restart})]})]})},G="gray.100";var K=function(e){var t=e.timer,n=T(e.timerId);return Object(w.jsxs)("div",{className:"timerWrapper",children:[Object(w.jsx)(H,{title:t.title}),Object(w.jsx)(z,{seconds:n.seconds,state:n.stopped?A.Stopped:A.Normal}),Object(w.jsx)(E,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}})]})},Q=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Next":n;return Object(w.jsx)(d.a,{onClick:t,children:Object(w.jsx)(W.a,{bg:"blue.100",leftIcon:Object(w.jsx)(D.a,{size:30}),children:c})})},U=x.actions;var X=function(e){var t=e.timer,n=function(e,t){var n=Object(r.useState)(0),c=Object(j.a)(n,2),o=c[0],i=c[1],s=Object(r.useMemo)((function(){return t[o]}),[t,o]),a=g(),u=Object(r.useCallback)((function(t){a(U.addStatesSecondsAt({key:e,index:o,value:t}))}),[a,o,e]),d=y(e,s.durationInSeconds,(function(){return u(1)})),l=d.timerState,m=Object(r.useCallback)((function(){return o>=t.length-1?0:o+1}),[o,t]),b=Object(r.useMemo)((function(){return t[m()].title}),[t,m]),p=Object(r.useCallback)((function(){d.resetTimer(),i(m())}),[i,d,m]),f=Object(r.useMemo)((function(){return l?t.map((function(e,t){return{title:e.title,totalSeconds:l.statesSeconds[t]}})):[]}),[l,t]);return{currentIndex:o,currentTitle:s.title,nextStateTitle:b,secondsRemaining:d.secondsRemaining,stopped:d.stopped,states:f,setStopped:d.setStopped,muted:d.muted,setMuted:d.setMuted,moveToNextState:p}}(e.timerId,t.states);return Object(w.jsxs)("div",{className:"timerWrapper",children:[Object(w.jsx)(H,{title:t.title,muteButtonProps:{muted:n.muted,setMuted:n.setMuted}}),Object(w.jsx)(d.g,{direction:"row",align:"center",spacing:"5rem",children:n.states.map((function(e,t){return Object(w.jsx)(z,{seconds:e.totalSeconds,size:"xl",state:n.currentIndex===t?A.Active:A.Normal,heading:e.title,headingColor:n.currentIndex===t?"black":"gray.500"},"".concat(t))}))}),Object(w.jsx)(E,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}}),Object(w.jsx)(Q,{onClick:n.moveToNextState,buttonText:"Switch to ".concat(n.nextStateTitle)})]})},Y=function(e){var t=e.timerId,n=e.children,c=function(e){var t=k((function(e){return e.timers})),n=Object(r.useState)(G),c=Object(j.a)(n,2),o=c[0],i=c[1],s=Object(r.useMemo)((function(){return!(e in t)||!t[e].stopped&&t[e].flashing}),[t,e]);return m((function(){s?i(o===G?"yellow.200":G):o!==G&&i(G)}),200),{flashing:s,bgColor:o}}(t),o=c.bgColor;return Object(w.jsx)(d.b,{maxW:"container.xl",children:Object(w.jsx)(d.a,{borderWidth:"1px",borderRadius:"lg",className:"timer",bg:o,p:"1rem",height:"100%",children:n})})},Z=function(e){var t=e.timer,n=e.timerId;return t.type===c.CounterTimer?Object(w.jsx)(Y,{timerId:n,children:Object(w.jsx)(q,{timer:t,timerId:n})}):t.type===c.Stopwatch?Object(w.jsx)(Y,{timerId:n,children:Object(w.jsx)(K,{timer:t,timerId:n})}):t.type===c.MultiStateTimer?Object(w.jsx)(Y,{timerId:n,children:Object(w.jsx)(X,{timerId:n,timer:t})}):Object(w.jsxs)("div",{className:"timer",children:["Invalid renderer for ",t.title]})},$=n(53),_=(n(102),n(47)),ee=n(48),te=function(e){var t=e.value,n=e.setValue,c=e.disabled,r=o.a.useState(!1),i=Object(j.a)(r,2),s=i[0],a=i[1];return Object(w.jsxs)(_.a,{"aria-label":"slider-ex-6",onChange:function(e){return n(e)},width:"10rem",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},isReversed:!0,isDisabled:c,children:[Object(w.jsx)(_.c,{value:t,textAlign:"center",bg:"blue.500",color:"white",mt:"-10",ml:"-5",w:"12"}),Object(w.jsx)(_.e,{bg:"white",children:Object(w.jsx)(_.b,{bg:"blue.500"})}),Object(w.jsx)(ee.a,{hasArrow:!0,bg:"teal.500",color:"white",placement:"top",isOpen:s,label:"".concat(Math.round(t),"%"),children:Object(w.jsx)(_.d,{})})]})},ne=f.actions;function ce(){var e=k((function(e){return e.audio})),t=g(),n=Object(r.useCallback)((function(e){return t(ne.setMuted(e))}),[t]),c=Object(r.useCallback)((function(e){return t(ne.setVolume(e))}),[t]);return{muted:e.muted,setMuted:n,volume:e.volume,setVolume:c}}var re=function(){var e=ce(),t=e.volume,n=e.setVolume,c=e.muted,r=e.setMuted;return Object(w.jsxs)(d.g,{direction:"row",align:"center",children:[Object(w.jsx)(te,{value:100*t,setValue:function(e){return n(e/100)},disabled:c}),Object(w.jsx)(J,{muted:c,volume:t,onClick:function(){return r(!c)}}),Object(w.jsx)("div",{style:{marginRight:"1rem"}})]})},oe=function(e){var t=e.startAllTimers,n=e.stopAllTimers;return Object(w.jsx)(d.a,{bg:"tomato",w:"100%",className:"header",children:Object(w.jsxs)(d.c,{width:"100%",children:[Object(w.jsxs)(d.g,{direction:"row",spacing:"1rem",ml:"1rem",pt:"5px",pb:"5px",align:"center",children:[Object(w.jsx)($.a,{size:40,color:"white"}),Object(w.jsx)(d.d,{size:"xl",color:"white",children:"Timers Lesgooo"}),Object(w.jsx)(W.a,{bg:"blue.100",onClick:t,children:"Start All"}),Object(w.jsx)(W.a,{bg:"blue.100",onClick:n,children:"Stop All"})]}),Object(w.jsx)(d.f,{}),Object(w.jsx)(re,{})]})})},ie=x.actions;var se=n.p+"static/media/beep.c21038da.mp3";function ae(){var e=k((function(e){return e.timers})),t=Object(r.useMemo)((function(){return function(e){for(var t=Object.keys(e).map((function(t){return e[t]})),n=0;n<t.length;n++)if(t[n].flashing&&!t[n].stopped&&!t[n].muted)return!0;return!1}(e)}),[e]),n=ce(),c=n.muted,o=n.volume,i=Object(r.useState)(new Audio(se)),s=Object(j.a)(i,1)[0];Object(r.useEffect)((function(){s.volume=c?0:o}),[s,c,o]),m((function(){t&&s.play()}),1e3)}var ue={waterTimer:{type:c.CounterTimer,title:"Drink 1/2 Hydroflask",durationInSeconds:30},officeTimer:{type:c.Stopwatch,title:"In Office"},standingTimer:{type:c.MultiStateTimer,title:"Stand some you lazy ass",states:[{title:"Sitting",durationInSeconds:20},{title:"Standing",durationInSeconds:20}]},breakTimer:{type:c.MultiStateTimer,title:"Take a break my boi",states:[{title:"Working",durationInSeconds:45},{title:"Breaking.. bad",durationInSeconds:15}]}},de=Object.values(ue),le=function(){var e=function(){var e=g();return{addTimers:Object(r.useCallback)((function(t){for(var n=0;n<t;n++)console.log("Adding timer ".concat(n)),e(ie.addTimer("".concat(n)))}),[e]),startAllTimers:Object(r.useCallback)((function(){return e(ie.startAllTimers())}),[e]),stopAllTimers:Object(r.useCallback)((function(){return e(ie.stopAllTimers())}),[e])}}(),t=e.addTimers,n=e.startAllTimers,c=e.stopAllTimers;return Object(r.useEffect)((function(){t(de.length)}),[t]),ae(),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(oe,{startAllTimers:n,stopAllTimers:c}),Object(w.jsx)(d.e,{minChildWidth:"500px",spacing:"40px",marginTop:"5rem",marginBottom:"2rem",children:de.map((function(e,t){var n="".concat(t);return Object(w.jsx)(Z,{timer:e,timerId:n},n)}))})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};s.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(a.a,{store:S,children:Object(w.jsx)(u.a,{children:Object(w.jsx)(le,{})})})}),document.getElementById("root")),je()},34:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.a8f08385.chunk.js.map