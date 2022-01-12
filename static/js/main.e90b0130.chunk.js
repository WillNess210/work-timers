(this["webpackJsonpwork-timers"]=this["webpackJsonpwork-timers"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c,r=n(1),i=n.n(r),o=n(23),s=n.n(o),a=n(33),u=n(8),d=n(50),l=n.n(d),j=(n(100),n(17));n(101);!function(e){e[e.CounterTimer=0]="CounterTimer",e[e.MultiStateTimer=1]="MultiStateTimer",e[e.Stopwatch=2]="Stopwatch"}(c||(c={}));n(41);var b=n(18),m=n(9);function p(e,t){var n=Object(r.useRef)(e);Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){var e=n.current;e&&e()}),t);return function(){return clearInterval(e)}}),[t])}var O=n(12),f=n(38),x=Object(f.a)({name:"audio",initialState:{muted:!1,volume:.5},reducers:{setMuted:function(e,t){e.muted=t.payload},setVolume:function(e,t){e.volume=Math.min(Math.max(0,t.payload),1)}}}),h={seconds:0,stopped:!0,flashing:!1,muted:!1,timesCompleted:0,statesSeconds:[0,0,0,0,0,0,0,0,0,0,0,0]},g=Object(f.a)({name:"timers",initialState:{},reducers:{addTimer:function(e,t){e[t.payload]=Object(b.a)({},h)},setTimerState:function(e,t){e[t.payload.key]=t.payload.state},setTimerSeconds:function(e,t){e[t.payload.key].seconds=t.payload.value},setTimerStopped:function(e,t){e[t.payload.key].stopped=t.payload.value},setTimerTimesCompleted:function(e,t){e[t.payload.key].timesCompleted=t.payload.value},setTimerFlashing:function(e,t){e[t.payload.key].flashing=t.payload.value},setTimerMuted:function(e,t){e[t.payload.key].muted=t.payload.value},setStatesSeconds:function(e,t){e[t.payload.key].statesSeconds=t.payload.value},setStatesSecondsAt:function(e,t){e[t.payload.key].statesSeconds[t.payload.index]=t.payload.value},addStatesSecondsAt:function(e,t){e[t.payload.key].statesSeconds[t.payload.index]+=t.payload.value},startAllTimers:function(e){Object.keys(e).forEach((function(t){e[t].stopped=!1}))},stopAllTimers:function(e){Object.keys(e).forEach((function(t){e[t].stopped=!0}))}}}),v=Object(O.b)({timers:g.reducer,audio:x.reducer}),S=Object(O.d)(v),k=function(){return Object(a.b)()},C=a.c,T=S,y=g.actions;function M(e,t){var n=C((function(e){return e.timers})),c=k(),i=Object(r.useMemo)((function(){return e in n?n[e]:void 0}),[n,e]),o=function(e){var t=Object(r.useState)(0),n=Object(m.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(Date.now()),s=Object(m.a)(o,2),a=s[0],u=s[1],d=Object(r.useState)(!0),l=Object(m.a)(d,2),j=l[0],b=l[1],O=Object(r.useCallback)((function(e){j&&!e&&u(Date.now()),b(e)}),[j,b,u]);return p((function(){if(!j){var t=Date.now(),n=(t-a)/1e3;i(c+n),u(t),e&&e(n)}}),1e3),{currentSeconds:Math.round(c),stopped:j,setStopped:O}}(t),s=o.currentSeconds,a=o.stopped,u=o.setStopped,d=Object(r.useCallback)((function(t){i&&c(y.setTimerSeconds({key:e,value:t}))}),[e,i,c]),l=Object(r.useCallback)((function(t){i&&c(y.setTimerStopped({key:e,value:t}))}),[e,i,c]),j=Object(r.useCallback)((function(t){i&&c(y.setTimerFlashing({key:e,value:t}))}),[e,i,c]),b=Object(r.useCallback)((function(t){i&&c(y.setTimerMuted({key:e,value:t}))}),[e,i,c]),O=Object(r.useCallback)((function(){i&&c(y.setTimerTimesCompleted({key:e,value:i.timesCompleted+1}))}),[e,i,c]);return Object(r.useEffect)((function(){i&&i.stopped!==a&&u(i.stopped)}),[i,a,u]),Object(r.useEffect)((function(){i&&s!==i.seconds&&d(s)}),[i,s,d]),{timerState:i,seconds:i?i.seconds:-1,stopped:!i||i.stopped,flashing:!i||i.flashing,muted:!i||i.muted,setStopped:l,setFlashing:j,setMuted:b,incrementTimesCompleted:O}}function w(e,t,n){var c=M(e,n),i=c.timerState,o=c.stopped,s=c.seconds,a=c.flashing,u=c.setStopped,d=c.setFlashing,l=c.incrementTimesCompleted,j=Object(r.useState)(0),p=Object(m.a)(j,2),O=p[0],f=p[1],x=Object(r.useState)(!1),h=Object(m.a)(x,2),g=h[0],v=h[1],S=Object(r.useCallback)((function(){f(s),d(!1)}),[f,s,d]),k=Object(r.useCallback)((function(){l(),d(!1)}),[l,d]),C=Object(r.useMemo)((function(){if(i){var e=t-(i.seconds-O);return e<=0&&!a&&!g?d(!0):e<=0&&g&&(v(!1),S()),e}return 99999999999999}),[t,i,O,g,a,v,S,d]),T=Object(r.useMemo)((function(){return i?Math.max(0,C):-1}),[C,i]),y=Object(r.useCallback)((function(){S(),u(!0)}),[S,u]),w=Object(r.useCallback)((function(){S(),u(!1)}),[S,u]);return Object(b.a)(Object(b.a)({},c),{},{timerState:i,secondsRemaining:T,stopped:o,markedForRestart:g,setStopped:u,setFlashing:d,resetTimer:S,resetTimerAndStop:y,resetTimerAndStart:w,incrementTimesCompleted:k,setMarkedForRestart:function(){return v(!0)}})}var A,I,R=n(25),F=n(4);!function(e){e[e.Normal=0]="Normal",e[e.Stopped=1]="Stopped",e[e.MarkedForRestart=2]="MarkedForRestart",e[e.Active=3]="Active"}(I||(I={}));var z=(A={},Object(R.a)(A,I.Normal,"black"),Object(R.a)(A,I.Stopped,"red"),Object(R.a)(A,I.MarkedForRestart,"green"),Object(R.a)(A,I.Active,"green"),A),E=function(e){return e<10?"0".concat(e):e},N=function(e){var t=e.seconds,n=e.state,c=e.size,i=void 0===c?"3xl":c,o=e.heading,s=e.headingColor,a=void 0===s?"gray.500":s,u=Object(r.useMemo)((function(){return function(e){var t="".concat(E(e.minutes),":").concat(E(e.seconds));return e.hours>0?"".concat(E(e.hours),":")+t:t}(function(e){var t=e;return{hours:~~(t/3600),minutes:~~((t%=3600)/60),seconds:t%=60}}(t))}),[t]),d=Object(F.jsx)(j.d,{size:i,color:z[n],children:u});return o?Object(F.jsxs)(j.g,{align:"center",children:[Object(F.jsx)(j.d,{size:"md",color:a,children:o}),d]}):d},B=n(24),L=function(e){var t=e.stopped,n=e.onClick;return Object(F.jsx)(j.a,{onClick:n,children:t?Object(F.jsx)(B.d,{size:90}):Object(F.jsx)(B.c,{size:90})})},D=n(46),V=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Restart":n;return Object(F.jsx)(j.a,{onClick:t,children:Object(F.jsx)(D.a,{bg:"blue.100",leftIcon:Object(F.jsx)(B.a,{size:20}),children:c})})},W=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Complete":n;return Object(F.jsx)(j.a,{onClick:t,children:Object(F.jsx)(D.a,{bg:"blue.100",leftIcon:Object(F.jsx)(B.b,{size:20}),children:c})})},P=n(53),J=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Complete":n;return Object(F.jsx)(j.a,{onClick:t,children:Object(F.jsx)(D.a,{bg:"blue.100",leftIcon:Object(F.jsx)(P.a,{size:20}),children:c})})},H=n(26),q=function(e){var t=e.muted,n=e.volume,c=e.onClick,i=e.color,o=void 0===i?"white":i,s=e.hoverColor,a=void 0===s?"#dddddd":s,u=e.size,d=void 0===u?40:u,l=Object(r.useState)(o),j=Object(m.a)(l,2),p=j[0],O=j[1],f={color:p,size:d,onMouseEnter:function(){return O(a)},onMouseLeave:function(){return O(o)},onClick:c};return t?Object(F.jsx)(H.e,Object(b.a)({},f)):0===n?Object(F.jsx)(H.b,Object(b.a)({},f)):n<.5?Object(F.jsx)(H.d,Object(b.a)({},f)):Object(F.jsx)(H.c,Object(b.a)({},f))},G=function(e){var t=e.title,n=e.muteButtonProps,c=e.subTitle;return n?Object(F.jsxs)(j.c,{width:"100%",children:[Object(F.jsx)(q,{muted:n.muted,volume:1,onClick:function(){return n.setMuted(!n.muted)},size:60,color:"#dddddd",hoverColor:"#888888"}),Object(F.jsx)(j.f,{}),Object(F.jsxs)(j.g,{align:"center",ml:"-".concat(60,"px"),children:[Object(F.jsx)(j.d,{size:"lg",children:t}),c&&Object(F.jsx)(j.d,{size:"md",color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",children:c})]}),Object(F.jsx)(j.f,{}),Object(F.jsx)("div",{})]}):Object(F.jsxs)(j.g,{align:"center",children:[Object(F.jsx)(j.d,{size:"lg",children:t}),c]})},K=function(e){var t=e.text;return Object(F.jsx)(j.d,{size:"md",color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",children:t})},Q=function(e){var t=e.timer,n=function(e,t){var n=w(e,t.durationInSeconds),c=n.timerState,i=n.secondsRemaining,o=n.stopped,s=n.markedForRestart,a=n.muted,u=n.setMuted,d=n.setStopped,l=n.incrementTimesCompleted,j=n.resetTimer,b=n.setMarkedForRestart,m=c?c.timesCompleted:-1,p=Object(r.useCallback)((function(){l(),j()}),[l,j]),O=Object(r.useCallback)((function(){l(),b()}),[l,b]);return{timesCompleted:m,secondsRemaining:i,stopped:o,markedForRestart:s,muted:a,setMuted:u,setStopped:d,complete:l,restart:j,completeAndRestart:p,completeAndMarkForRestart:O}}(e.timerId,t);return Object(F.jsxs)(j.g,{align:"center",height:"100%",children:[Object(F.jsx)(G,{title:t.title,muteButtonProps:{muted:n.muted,setMuted:n.setMuted},subTitle:Object(F.jsx)(K,{text:"Completed ".concat(n.timesCompleted," times today")})}),Object(F.jsx)(N,{seconds:n.secondsRemaining,state:n.stopped?I.Stopped:n.markedForRestart?I.MarkedForRestart:I.Normal}),Object(F.jsxs)(j.g,{direction:"column",spacing:"1rem",align:"center",children:[Object(F.jsx)(L,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}}),Object(F.jsxs)(j.g,{direction:"row",marginTop:"0px !important",children:[n.secondsRemaining>0&&Object(F.jsx)(J,{onClick:n.complete}),Object(F.jsx)(W,{onClick:n.completeAndRestart}),n.secondsRemaining>0&&Object(F.jsx)(V,{onClick:n.completeAndMarkForRestart,buttonText:"Complete and Autorestart"})]}),Object(F.jsx)(V,{onClick:n.restart})]})]})},U="gray.100";var X=function(e){var t=e.timer,n=M(e.timerId);return Object(F.jsxs)(j.g,{align:"center",height:"100%",children:[Object(F.jsx)(G,{title:t.title}),Object(F.jsxs)(j.c,{direction:"column",align:"center",height:"100%",justifyContent:"space-around",children:[Object(F.jsx)(N,{seconds:n.seconds,state:n.stopped?I.Stopped:I.Normal}),Object(F.jsx)(L,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}})]})]})},Y=function(e){var t=e.onClick,n=e.buttonText,c=void 0===n?"Next":n;return Object(F.jsx)(j.a,{onClick:t,children:Object(F.jsx)(D.a,{bg:"blue.100",leftIcon:Object(F.jsx)(H.a,{size:30}),children:c})})},Z=g.actions;var $=function(e){var t=e.timer,n=function(e,t){var n=Object(r.useState)(0),c=Object(m.a)(n,2),i=c[0],o=c[1],s=Object(r.useMemo)((function(){return t[i]}),[t,i]),a=k(),u=Object(r.useCallback)((function(t){a(Z.addStatesSecondsAt({key:e,index:i,value:t}))}),[a,i,e]),d=w(e,s.durationInSeconds,(function(e){return u(e)})),l=d.timerState,j=Object(r.useCallback)((function(){return i>=t.length-1?0:i+1}),[i,t]),b=Object(r.useMemo)((function(){return t[j()].title}),[t,j]),p=Object(r.useCallback)((function(){d.resetTimer(),o(j())}),[o,d,j]),O=Object(r.useMemo)((function(){return l?t.map((function(e,t){return{title:e.title,totalSeconds:Math.round(l.statesSeconds[t])}})):[]}),[l,t]);return{currentIndex:i,currentTitle:s.title,nextStateTitle:b,secondsRemaining:d.secondsRemaining,stopped:d.stopped,states:O,setStopped:d.setStopped,muted:d.muted,setMuted:d.setMuted,moveToNextState:p}}(e.timerId,t.states);return Object(F.jsxs)(j.g,{align:"center",height:"100%",children:[Object(F.jsx)(G,{title:t.title,muteButtonProps:{muted:n.muted,setMuted:n.setMuted},subTitle:Object(F.jsx)(j.g,{direction:"row",align:"center",spacing:"5rem",children:n.states.map((function(e,t){return Object(F.jsx)(N,{seconds:e.totalSeconds,size:"xl",state:n.currentIndex===t?n.stopped?I.Stopped:I.Active:I.Normal,heading:e.title,headingColor:n.currentIndex===t?"black":"gray.500"},"".concat(t))}))})}),Object(F.jsxs)(j.c,{direction:"column",align:"center",height:"100%",justifyContent:"space-around",children:[Object(F.jsx)(j.d,{size:"lg",children:n.currentTitle}),Object(F.jsx)(N,{seconds:n.secondsRemaining,state:n.stopped?I.Stopped:I.Normal}),Object(F.jsx)(L,{stopped:n.stopped,onClick:function(){return n.setStopped(!n.stopped)}}),Object(F.jsx)(Y,{onClick:n.moveToNextState,buttonText:"Switch to ".concat(n.nextStateTitle)})]})]})},_=function(e){var t=e.timerId,n=e.children,c=function(e){var t=C((function(e){return e.timers})),n=Object(r.useState)(U),c=Object(m.a)(n,2),i=c[0],o=c[1],s=Object(r.useMemo)((function(){return!(e in t)||!t[e].stopped&&t[e].flashing}),[t,e]);return p((function(){s?o(i===U?"yellow.200":U):i!==U&&o(U)}),200),{flashing:s,bgColor:i}}(t),i=c.bgColor;return Object(F.jsx)(j.b,{maxW:"container.xl",children:Object(F.jsx)(j.a,{borderWidth:"1px",borderRadius:"lg",className:"timer",bg:i,p:"1rem",height:"100%",children:n})})},ee=function(e){var t=e.timer,n=e.timerId;return t.type===c.CounterTimer?Object(F.jsx)(_,{timerId:n,children:Object(F.jsx)(Q,{timer:t,timerId:n})}):t.type===c.Stopwatch?Object(F.jsx)(_,{timerId:n,children:Object(F.jsx)(X,{timer:t,timerId:n})}):t.type===c.MultiStateTimer?Object(F.jsx)(_,{timerId:n,children:Object(F.jsx)($,{timerId:n,timer:t})}):Object(F.jsxs)("div",{className:"timer",children:["Invalid renderer for ",t.title]})},te=n(54),ne=(n(106),n(47)),ce=n(48),re=function(e){var t=e.value,n=e.setValue,c=e.disabled,r=i.a.useState(!1),o=Object(m.a)(r,2),s=o[0],a=o[1];return Object(F.jsxs)(ne.a,{"aria-label":"slider-ex-6",onChange:function(e){return n(e)},width:"10rem",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},isReversed:!0,isDisabled:c,children:[Object(F.jsx)(ne.c,{value:t,textAlign:"center",bg:"blue.500",color:"white",mt:"-10",ml:"-5",w:"12"}),Object(F.jsx)(ne.e,{bg:"white",children:Object(F.jsx)(ne.b,{bg:"blue.500"})}),Object(F.jsx)(ce.a,{hasArrow:!0,bg:"teal.500",color:"white",placement:"top",isOpen:s,label:"".concat(Math.round(t),"%"),children:Object(F.jsx)(ne.d,{})})]})},ie=x.actions;function oe(){var e=C((function(e){return e.audio})),t=k(),n=Object(r.useCallback)((function(e){return t(ie.setMuted(e))}),[t]),c=Object(r.useCallback)((function(e){return t(ie.setVolume(e))}),[t]);return{muted:e.muted,setMuted:n,volume:e.volume,setVolume:c}}var se=function(){var e=oe(),t=e.volume,n=e.setVolume,c=e.muted,r=e.setMuted;return Object(F.jsxs)(j.g,{direction:"row",align:"center",children:[Object(F.jsx)(re,{value:100*t,setValue:function(e){return n(e/100)},disabled:c}),Object(F.jsx)(q,{muted:c,volume:t,onClick:function(){return r(!c)}}),Object(F.jsx)("div",{style:{marginRight:"1rem"}})]})},ae=function(e){var t=e.startAllTimers,n=e.stopAllTimers;return Object(F.jsx)(j.a,{bg:"tomato",w:"100%",className:"header",children:Object(F.jsxs)(j.c,{width:"100%",children:[Object(F.jsxs)(j.g,{direction:"row",spacing:"1rem",ml:"1rem",pt:"5px",pb:"5px",align:"center",children:[Object(F.jsx)(te.a,{size:40,color:"white"}),Object(F.jsx)(j.d,{size:"xl",color:"white",children:"Timers Lesgooo"}),Object(F.jsx)(D.a,{bg:"blue.100",onClick:t,children:"Start All"}),Object(F.jsx)(D.a,{bg:"blue.100",onClick:n,children:"Stop All"})]}),Object(F.jsx)(j.f,{}),Object(F.jsx)(se,{})]})})},ue=g.actions;var de=n.p+"static/media/beep.c21038da.mp3";function le(){var e=C((function(e){return e.timers})),t=Object(r.useMemo)((function(){return function(e){for(var t=Object.keys(e).map((function(t){return e[t]})),n=0;n<t.length;n++)if(t[n].flashing&&!t[n].stopped&&!t[n].muted)return!0;return!1}(e)}),[e]),n=oe(),c=n.muted,i=n.volume,o=Object(r.useState)(new Audio(de)),s=Object(m.a)(o,1)[0];Object(r.useEffect)((function(){s.volume=c?0:i}),[s,c,i]),p((function(){t&&s.play()}),1e3)}var je={waterTimer:{type:c.CounterTimer,title:"Drink 1/2 Hydroflask",durationInSeconds:7200},officeTimer:{type:c.Stopwatch,title:"In Office"},standingTimer:{type:c.MultiStateTimer,title:"Stand some you lazy ass",states:[{title:"Sitting",durationInSeconds:3600},{title:"Standing",durationInSeconds:3600}]},breakTimer:{type:c.MultiStateTimer,title:"Take a break my boi",states:[{title:"Working",durationInSeconds:3600},{title:"Breaking.. bad",durationInSeconds:600}]}},be=Object.values(je),me=function(){var e=function(){var e=k();return{addTimers:Object(r.useCallback)((function(t){for(var n=0;n<t;n++)console.log("Adding timer ".concat(n)),e(ue.addTimer("".concat(n)))}),[e]),startAllTimers:Object(r.useCallback)((function(){return e(ue.startAllTimers())}),[e]),stopAllTimers:Object(r.useCallback)((function(){return e(ue.stopAllTimers())}),[e])}}(),t=e.addTimers,n=e.startAllTimers,c=e.stopAllTimers;return Object(r.useEffect)((function(){t(be.length)}),[t]),le(),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(ae,{startAllTimers:n,stopAllTimers:c}),Object(F.jsx)(j.e,{minChildWidth:"500px",spacing:"40px",marginTop:"5rem",marginBottom:"2rem",children:be.map((function(e,t){var n="".concat(t);return Object(F.jsx)(ee,{timer:e,timerId:n},n)}))})]})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))},Oe=new l.a;document.addEventListener("touchstart",(function e(){Oe.enable(),document.removeEventListener("touchstart",e,!1)}),!1),s.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(a.a,{store:T,children:Object(F.jsx)(u.a,{children:Object(F.jsx)(me,{})})})}),document.getElementById("root")),pe()},41:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.e90b0130.chunk.js.map