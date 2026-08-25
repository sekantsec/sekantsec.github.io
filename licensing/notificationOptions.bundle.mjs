var k=Object.freeze({SMALL:"SMALL",LARGE:"LARGE"}),A=Object.freeze({NOTIFICATION:"NOTIFICATION",SUSPICIOUS:"SUSPICIOUS",UNSAFE:"UNSAFE"}),u=Object.freeze({DISMISS:"DISMISS",MARK_SAFE:"MARK_SAFE",UNLOCK:"UNLOCK"}),f=Object.freeze({KEYBOARD_INPUT:"KEYBOARD_INPUT",MOUSE_CLICKS:"MOUSE_CLICKS",CUT_COPY:"CUT_COPY",PASTE:"PASTE",DRAG_DROP:"DRAG_DROP",FILE_SELECTION:"FILE_SELECTION",FOCUS_INPUTS:"FOCUS_INPUTS",ALL:"ALL"}),Z=Object.freeze([f.KEYBOARD_INPUT,f.MOUSE_CLICKS,f.CUT_COPY,f.PASTE,f.DRAG_DROP,f.FILE_SELECTION,f.FOCUS_INPUTS]),ge=Object.freeze({[u.DISMISS]:"Dismiss",[u.MARK_SAFE]:"Mark Safe",[u.UNLOCK]:"Unlock"}),At='<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path></svg>',Q=10;var gt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,wt=Object.freeze(["action_clicked","it_approval_requested"]),Ke=Object.freeze({enabled:!0,opacity:.6}),Tt=Object.freeze({visible:!1,variant:k.SMALL,severity:"NOTIFICATION",title:"",description:"",customNote:"",actions:[u.DISMISS],actionLabels:ge,lockCapabilities:[],stickyRequested:!1,requiredInput:!1,requiresITApproval:!1,itRequestRaised:!1,sticky:!1,timerSeconds:0,timerDeadlineMs:null,requestId:null,activeCapabilities:[],timerComplete:!0,inputValid:!0}),Ae=Object.freeze({NOTIFICATION:{key:"NOTIFICATION",label:"NOTIFICATION"},WARNING:{key:"SUSPICIOUS",label:"SUSPICIOUS"},SUSPICIOUS:{key:"SUSPICIOUS",label:"SUSPICIOUS"},UNSAFE:{key:"UNSAFE",label:"UNSAFE"}});function v(i){return i==null?"":String(i)}function He(i,e=.6){let n=Number(i);return Number.isFinite(n)?Math.min(1,Math.max(0,n)):e}function Ye(i){let e=v(i||"NOTIFICATION").toUpperCase();return Ae[e]||Ae.NOTIFICATION}function Nt(i){try{return new URL(i).hostname.toLowerCase()}catch{return""}}function we(i){if(!i||typeof i!="object")return{};let e={...i},n=(a,c)=>{let p=v(a);return p.length>c?p.slice(0,c):p},l={title:200,description:2e3,customNote:150,requestId:100,url:2048};for(let[a,c]of Object.entries(l))e[a]!==void 0&&e[a]!==null&&(e[a]=n(e[a],c));if(e.variant!==void 0&&(e.variant=e.variant===k.LARGE?k.LARGE:k.SMALL),e.severity!==void 0&&(e.severity=Ye(e.severity).key),e.actions!==void 0&&(e.actions=We(e.actions)),e.actionLabels!==void 0&&(e.actionLabels=typeof e.actionLabels=="object"&&e.actionLabels!==null&&!Array.isArray(e.actionLabels)?Object.fromEntries(Object.entries(e.actionLabels).map(([a,c])=>[a,n(c,40)])):{}),e.lockCapabilities!==void 0){let a=Array.isArray(e.lockCapabilities)?e.lockCapabilities:[];e.lockCapabilities=[...new Set(a.filter(c=>Object.values(f).includes(c)))]}if(e.timerSeconds!==void 0){let a=Number(e.timerSeconds);e.timerSeconds=Number.isFinite(a)?Math.min(60,Math.max(0,a)):0}for(let a of["sticky","requiredInput","requiresITApproval"])e[a]!==void 0&&typeof e[a]!="boolean"&&(e[a]=!1);return e.backdrop!==void 0&&(e.backdrop=typeof e.backdrop=="object"&&e.backdrop!==null&&!Array.isArray(e.backdrop)?{...e.backdrop}:{},e.backdrop.opacity!==void 0&&(e.backdrop.opacity=He(e.backdrop.opacity)),e.backdrop.enabled!==void 0&&typeof e.backdrop.enabled!="boolean"&&(e.backdrop.enabled=!0)),e}function Ge(i){if(typeof i!="string"||!i.trim())return!0;let e=Nt(i);if(!e)return!0;let n=(globalThis.location?.hostname||"").toLowerCase();return e===n}function Lt(i){return i==="UNSAFE"?"#ff6685":i==="SUSPICIOUS"?"#ffdd57":"#ffffff"}function Ot(i){let e=[u.MARK_SAFE,u.DISMISS,u.UNLOCK];return[...i].sort((n,l)=>e.indexOf(n)-e.indexOf(l))}function We(i){let e=Array.isArray(i)?i:[u.DISMISS],n=[];for(let l of e){let a=l===u.UNLOCK?u.DISMISS:l;(a===u.DISMISS||a===u.MARK_SAFE)&&!n.includes(a)&&n.push(a)}return n.includes(u.DISMISS)||n.unshift(u.DISMISS),n.slice(0,2)}function z(i){let e=Array.isArray(i)?i:[];return e.includes(f.ALL)?[...Z]:e.filter(n=>Z.includes(n))}function xt(i,e={}){let n=e.variant===k.LARGE?k.LARGE:k.SMALL,l=Number(e.timerSeconds),a=Number.isFinite(l)?Math.max(0,l):0,c=!!(e.requiredInput??i.requiredInput),p=!!e.requiresITApproval,o=p||c,I=p?[...Z]:z(e.lockCapabilities),C=I.length>0,y=Ye(e.severity||i.severity||"NOTIFICATION"),S=Date.now(),E=!!e.sticky,s=C||o||E;return{...i,visible:!0,variant:n,severity:y.key,severityLabel:y.label,title:v(e.title),description:v(e.description),customNote:v(e.customNote),actions:We(e.actions),actionLabels:{...ge,...Object.fromEntries(Object.entries(e.actionLabels||{}).map(([h,B])=>[h,v(B)]))},lockCapabilities:I,stickyRequested:E,requiredInput:o,requiresITApproval:p,itRequestRaised:!1,sticky:s,timerSeconds:a,timerDeadlineMs:s?a>0?S+a*1e3:null:S+Math.max(a,3)*1e3,timerComplete:a<=0,inputValid:!o&&!p,requestId:v(e.requestId)||null,activeCapabilities:[...new Set([...i.activeCapabilities||[],...I])],backdrop:{...Ke,...e.backdrop||{},opacity:He(e?.backdrop?.opacity,Ke.opacity)}}}var Rt=`
/* Shadow-DOM styles for the unified notification + locking overlay.
   SMALL and LARGE share one centered panel; the only difference is whether
   the description section renders (LARGE shows it, SMALL hides it). */

:host {
  all: initial;
}

:host,
:host * {
  box-sizing: border-box;
}

.sk-nl-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  opacity: 0;
  transition: opacity 120ms ease;
}

.sk-nl-backdrop.show {
  opacity: 1;
}

.sk-nl-root {
  position: fixed;
  inset: 0;
  pointer-events: none;
  font-family: 'Avenir Next', Helvetica, "Segoe UI", Arial, sans-serif;
  font-size: clamp(16px, calc(0.25vw + 15px), 20px);
  line-height: 1.4;
}

.sk-nl-wrap {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  box-sizing: border-box;
  /* Only the panel captures events; the surrounding backdrop passes through so
     outside-click dismissal still works for the darkened area. */
  pointer-events: none;
}

.sk-nl-wrap.show {
  display: flex;
}

.sk-nl-panel {
  box-sizing: border-box;
  color: #fff;
  background: #111;
  border: 1px solid #fff;
  border-radius: 0.75rem;
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.45);
  pointer-events: auto;
  overflow: hidden;
}

.sk-nl-modal {
  position: relative;
  width: fit-content;
  /* Default (non-desktop) cap: 90% of the current window width. The wrap
     spans the full viewport, so "90%" resolves to 90% of the window width. */
  max-width: min(90%, calc(100dvw - 2.5rem));
  max-height: calc(100dvh - 2.5rem);
  overflow: auto;
  display: grid;
  gap: 0.75rem;
  padding: 1.125rem;
  padding-bottom: 1.625rem;
  border-radius: 1rem;
}

/* Desktop (fine pointer + hover): cap the dialog to the lesser of 60% of the
   screen width or 90% of the current window width. The screen width is exposed
   at runtime via the --sk-nl-screen-w custom property set on the host. */
@media (hover: hover) and (pointer: fine) {
  .sk-nl-modal {
    max-width: min(
      calc(var(--sk-nl-screen-w, 100vw) * 0.6),
      90%,
      calc(100dvw - 2.5rem)
    );
  }
}

.sk-nl-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 1em;
  font-weight: 700;
}

.sk-nl-shield {
  width: 1.125rem;
  height: 1.125rem;
  display: inline-flex;
}

.sk-nl-shield svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.sk-nl-severity-text {
  color: #ffffff;
}

.sk-nl-type-chip {
  display: inline-flex;
  align-items: center;
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 0.125rem 0.5rem;
  font-size: 0.6875em;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: currentColor;
  white-space: nowrap;
}

.sk-nl-title {
  font-size: 1.125em;
  font-weight: 700;
}

.sk-nl-section {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.625rem;
  padding: 0.625rem;
}

.sk-nl-section-value {
  font-size: 0.875em;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: hidden;
}

.sk-nl-description {
  max-height: 6.5625rem;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.sk-nl-custom-note {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.sk-nl-input-wrap {
  display: grid;
  gap: 0.375rem;
}

.sk-nl-note {
  font-size: 0.8125em;
  color: #d1d5db;
  line-height: 1.5;
}

.sk-nl-input-label {
  font-size: 0.8125em;
}

.sk-nl-input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: #20232f;
  color: #fff;
  padding: 0.5rem 0.625rem;
  font-size: 0.875em;
}

.sk-nl-input-error {
  font-size: 0.75em;
  color: #fca5a5;
  display: none;
}

.sk-nl-input-error.show {
  display: block;
}

.sk-nl-actions {
  display: flex;
  gap: 0.5rem;
  position: relative;
  flex-wrap: wrap;
}

.sk-nl-btn {
  flex: 1;
  min-width: 0;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.8125em;
  font-weight: 600;
  color: #fff;
  background: #5f6675;
  cursor: pointer;
}

.sk-nl-btn:hover:enabled {
  background: #515868;
}

.sk-nl-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.sk-nl-btn.mark-safe {
  background: #6b7280;
}

.sk-nl-btn.unlock {
  background: #ff6685;
}

.sk-nl-btn.dismiss {
  background: #1677ff;
}

.sk-nl-progress {
  position: relative;
  width: 100%;
  height: 0.375rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.sk-nl-progress-bar {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0%;
  background: #9ca3af;
  transition: width 120ms linear;
}

.sk-nl-progress-edge {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.3125rem;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.2);
  z-index: 2;
}

.sk-nl-severity-NOTIFICATION {
  border-color: #ffffff;
  --sk-nl-accent: #ffffff;
}

.sk-nl-severity-WARNING {
  border-color: #ffdd57;
  --sk-nl-accent: #ffdd57;
}

.sk-nl-severity-SUSPICIOUS {
  border-color: #ffdd57;
  --sk-nl-accent: #ffdd57;
}

.sk-nl-severity-UNSAFE {
  border-color: #ff6685;
  --sk-nl-accent: #ff6685;
}

.sk-nl-severity-NOTIFICATION .sk-nl-severity-text {
  color: #ffffff;
}

.sk-nl-severity-SUSPICIOUS .sk-nl-severity-text {
  color: #ffdd57;
}

.sk-nl-severity-UNSAFE .sk-nl-severity-text {
  color: #ff6685;
}

/* IT request confirmation dialog (shown after raising a ticket; page stays locked) */
.sk-nl-confirm-overlay {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  box-sizing: border-box;
  pointer-events: auto;
}

.sk-nl-confirm-overlay.show {
  display: flex;
}

.sk-nl-confirm {
  width: min(34rem, calc(100dvw - 2.5rem));
  display: grid;
  gap: 0.75rem;
  padding: 1.125rem;
  border-radius: 1rem;
  text-align: center;
}

.sk-nl-confirm-title {
  font-size: 1.125em;
  font-weight: 700;
}

.sk-nl-confirm-message {
  font-size: 0.875em;
  line-height: 1.5;
  color: #d1d5db;
}

@media (max-width: 68.75em) {
  .sk-nl-wrap {
    padding: 0.75rem;
  }

  .sk-nl-modal {
    width: calc(100dvw - 1.5rem);
    max-height: calc(100dvh - 1.5rem);
  }

  .sk-nl-confirm-overlay {
    padding: 0.75rem;
  }

  .sk-nl-confirm {
    width: calc(100dvw - 1.5rem);
  }
}
`;function Je(i={}){let e=typeof i.eventSink=="function"?i.eventSink:()=>{},n=typeof i.loadEmail=="function"?i.loadEmail:null,l=typeof i.saveEmail=="function"?i.saveEmail:null,a=i.production===!0,c=null,p=null,o=null,I=null,C=null,y=null,S=null,E=!1,s={...Tt},h=new Set,B=new Map,j=new Map,w=null;function T(t,r={}){if(a&&!wt.includes(t))return;let d={type:"notificationLocking.event",event:t,requestId:s.requestId,timestamp:Date.now(),...r};try{e(d)}catch{}}function xe(){if(c&&document.documentElement.contains(c))return;c=document.createElement("div"),c.id=`sekant-notification-locking-${Math.random().toString(36).slice(2,9)}`,c.style.setProperty("all","initial","important"),c.style.setProperty("position","fixed","important"),c.style.setProperty("inset","0","important"),c.style.setProperty("z-index","2147483647","important"),c.style.setProperty("pointer-events","none","important"),c.style.setProperty("font-size","clamp(16px, calc(0.25vw + 15px), 20px)","important"),c.style.setProperty("line-height","1.4","important"),c.style.setProperty("font-family",'Avenir Next, Helvetica, "Segoe UI", Arial, sans-serif',"important"),c.style.setProperty("--sk-nl-screen-w",`${window.screen?.width||window.innerWidth}px`),p=c.attachShadow({mode:"closed"});let t=document.createElement("style");t.textContent=Rt;let r=document.createElement("div");r.className="sk-nl-root";let d=document.createElement("div");d.className="sk-nl-backdrop";let m=document.createElement("div");m.className="sk-nl-wrap";let b=document.createElement("div");b.className="sk-nl-panel sk-nl-modal sk-nl-severity-NOTIFICATION";let g=document.createElement("div");g.className="sk-nl-header";let N=document.createElement("span");N.className="sk-nl-shield sk-nl-severity-text",N.innerHTML=At;let H=document.createElement("span");H.className="sk-nl-severity-text",H.textContent="Sekant Web Security";let fe=document.createElement("span");fe.className="sk-nl-type-chip sk-nl-severity-text",g.appendChild(N),g.appendChild(H),g.appendChild(fe);let me=document.createElement("div");me.className="sk-nl-title";let he=Re("sk-nl-description"),be=Re("sk-nl-custom-note"),L=document.createElement("div");L.className="sk-nl-input-wrap";let Y=document.createElement("div");Y.className="sk-nl-note",Y.textContent="Enter your work email and rationale to request IT approval.";let M=document.createElement("input");M.className="sk-nl-input sk-nl-email",M.type="email",M.autocomplete="email",M.placeholder="you@company.com";let W=document.createElement("label");W.className="sk-nl-input-label",W.textContent=`Rationale (min ${Q} characters)`;let J=document.createElement("input");J.className="sk-nl-input",J.type="text";let ke=document.createElement("div");ke.className="sk-nl-input-error",L.appendChild(Y),L.appendChild(M),L.appendChild(W),L.appendChild(J),L.appendChild(ke);let Ie=document.createElement("div");Ie.className="sk-nl-actions";let _=document.createElement("div");_.className="sk-nl-progress",_.classList.add("sk-nl-progress-edge");let ve=document.createElement("div");ve.className="sk-nl-progress-bar",_.appendChild(ve),b.appendChild(g),b.appendChild(me),b.appendChild(he.container),b.appendChild(be.container),b.appendChild(L),b.appendChild(Ie),b.appendChild(_),m.appendChild(b),r.appendChild(d),r.appendChild(m);let X=document.createElement("div");X.className="sk-nl-confirm-overlay";let F=document.createElement("div");F.className="sk-nl-panel sk-nl-confirm";let Se=document.createElement("div");Se.className="sk-nl-confirm-title",Se.textContent="IT request raised";let Ce=document.createElement("div");Ce.className="sk-nl-confirm-message",Ce.textContent="Please check your email or the Sekant notifications for an update from IT in some time.",F.appendChild(Se),F.appendChild(Ce),X.appendChild(F),r.appendChild(X),p.appendChild(t),p.appendChild(r),document.documentElement.appendChild(c),o={backdrop:d,wrap:m,panel:b,shield:N,headerText:H,typeChip:fe,title:me,descriptionSection:he,customNoteSection:be,descriptionValue:he.value,customNoteValue:be.value,inputWrap:L,note:Y,email:M,inputLabel:W,input:J,inputError:ke,actions:Ie,progress:_,progressBar:ve,confirmOverlay:X,confirmDialog:F},rt()}function Re(t){let r=document.createElement("div");r.className="sk-nl-section";let d=document.createElement("div");return d.className=`sk-nl-section-value ${t}`,r.appendChild(d),{container:r,value:d}}function rt(){let t=()=>{ae(),$()};o.input.addEventListener("input",t),o.email.addEventListener("input",t)}function ot(){I||(I=new MutationObserver(()=>{s.visible&&(!c||!document.documentElement.contains(c))&&Me()}),I.observe(document.documentElement,{childList:!0})),C||(C=setInterval(()=>{s.visible&&(!c||!document.documentElement.contains(c))&&Me()},1e3))}function Me(){c=null,p=null,o=null,xe(),D()}function U(){S&&(clearInterval(S),S=null)}function oe(){U(),E=s.timerComplete,s.timerDeadlineMs&&(S=setInterval(()=>{qe()},100),qe())}function qe(){let t=Date.now();if(!s.timerComplete&&s.timerDeadlineMs!==null&&t>=s.timerDeadlineMs&&(s.timerComplete=!0,E||(E=!0,T("timer_complete",{reason:"actions_enabled"})),$()),Ue(t),!s.sticky&&s.timerDeadlineMs!==null&&t>=s.timerDeadlineMs){T("auto_dismissed",{reason:"timer_elapsed"}),R({reason:"timer_elapsed"});return}s.timerComplete&&(s.sticky||s.timerDeadlineMs===null)&&U()}function Ue(t=Date.now()){let r=Math.max(0,(s.sticky?s.timerSeconds:Math.max(s.timerSeconds,3))*1e3);if(r<=0||s.timerDeadlineMs===null){o.progress.style.display="none";return}let d=Math.max(0,s.timerDeadlineMs-t),m=Math.max(0,Math.min(1,d/r)),b=`${Math.round(m*100)}%`;o.progress.style.display="block",o.progressBar.style.width=b}function ae(){let t=(o.input.value||"").trim(),r=(o.email.value||"").trim(),d=s.requiredInput||s.requiresITApproval,m=s.requiresITApproval,b=!d||t.length>=Q,g=!m||gt.test(r);if(s.inputValid=b&&g,!d&&!m){o.inputError.classList.remove("show");return}if(s.inputValid){o.inputError.classList.remove("show");return}let N=[];m&&!g&&N.push("a valid work email"),b||N.push(`a rationale of at least ${Q} characters`),o.inputError.textContent=`Enter ${N.join(" and ")} to proceed.`,o.inputError.classList.add("show")}function le(t){return s.sticky&&!s.timerComplete?!1:t===u.MARK_SAFE||t===u.UNLOCK?s.requiredInput||s.requiresITApproval?s.inputValid:!0:s.requiredInput?s.inputValid:!0}function $(){for(let t of o.actions.querySelectorAll("button[data-action]")){let r=t.getAttribute("data-action");t.disabled=!le(r)}}function at(t){let r=document.createElement("button");return r.className=`sk-nl-btn ${t.toLowerCase().replace("_","-")}`,r.setAttribute("data-action",t),r.textContent=v(s.actionLabels[t]||ge[t]||t),r.addEventListener("click",()=>{Pe(t,{reason:"user_action"})}),r.disabled=!le(t),r}function De(){return h.size>0?u.UNLOCK:u.DISMISS}function lt(){o.actions.textContent="";for(let t of Ot(s.actions)){let r=t===u.DISMISS?De():t;o.actions.appendChild(at(r))}}function ct(t){t.className=t.className.split(" ").filter(r=>!r.startsWith("sk-nl-severity-")).concat(`sk-nl-severity-${s.severity}`).join(" ")}function dt(){let t=Lt(s.severity);o.panel.style.borderColor=t,o.panel.style.setProperty("--sk-nl-accent",t),o.shield.style.color=t,o.headerText.style.color=t,o.typeChip.style.color=t,o.typeChip.style.borderColor=t,o.progressBar.style.backgroundColor=t}function ut(){let t=s.requiredInput||s.requiresITApproval;if(o.inputWrap.style.display=t?"grid":"none",!t){o.input.value="",o.email.value="",o.inputError.classList.remove("show");return}o.note.style.display=s.requiresITApproval?"block":"none",o.email.style.display=s.requiresITApproval?"block":"none",o.inputLabel.textContent=`Rationale (min ${Q} characters)`,o.input.placeholder="Enter rationale",s.requiresITApproval&&bt(),ae()}function Pe(t,{reason:r="user_action"}={}){if(!le(t)||!o)return!1;let d=(o.input.value||"").trim();return s.requiresITApproval&&(t===u.MARK_SAFE||t===u.UNLOCK)?(pt(t),!0):(ft(t,{reason:r,inputValue:d}),!0)}function pt(t){let r=(o.email.value||"").trim(),d=(o.input.value||"").trim();ht(r),T("it_approval_requested",{action:t,email:r,rationale:d}),U(),s.itRequestRaised=!0,D()}function ft(t,{reason:r="user_action",inputValue:d=""}={}){if(T("action_clicked",{action:t,rationale:d}),t===u.UNLOCK){pe({unlockCapabilities:[f.ALL]}),R({reason:r,action:t});return}(t===u.DISMISS||t===u.MARK_SAFE)&&R({reason:r,action:t})}let K="",ce=null;function mt(){return ce||(ce=(async()=>{if(n)try{let t=await n();return typeof t=="string"?t:""}catch{return""}return""})().catch(()=>"")),ce}async function ht(t){let r=v(t).trim();if(K=r,l)try{await l(r);return}catch{}}function bt(){if(K){o&&!o.email.value&&(o.email.value=K);return}mt().then(t=>{t&&(K=t,o&&s.visible&&s.requiresITApproval&&!o.email.value&&(o.email.value=t,ae(),$()))})}function kt(){let t=h.size>0;return s.visible&&!t&&(!s.sticky||s.timerComplete)}function It(){if(y)return;let t=r=>{kt()&&(!c||!o||de(r)||Pe(u.DISMISS,{reason:"outside_click"}))};window.addEventListener("click",t,{capture:!0,passive:!0}),y=()=>{window.removeEventListener("click",t,{capture:!0,passive:!0}),y=null}}function D(){if(!s.visible)return;if(xe(),ot(),o.backdrop.style.background=`rgba(0, 0, 0, ${s.backdrop.opacity})`,o.backdrop.classList.toggle("show",!!s.backdrop.enabled),s.itRequestRaised){o.wrap.classList.remove("show"),o.confirmOverlay.classList.add("show");return}o.confirmOverlay.classList.remove("show"),o.wrap.classList.add("show"),ct(o.panel),dt(),o.typeChip.textContent=s.severityLabel||"NOTIFICATION",o.title.textContent=s.title||"",o.title.style.display=s.title?"block":"none",o.descriptionValue.textContent=s.description||"",o.customNoteValue.textContent=s.customNote||"";let t=s.variant===k.LARGE&&!!s.description;o.descriptionSection.container.style.display=t?"block":"none",o.customNoteSection.container.style.display=s.customNote?"block":"none",ut(),lt(),$(),Ue()}function vt(){if(!o||!s.visible)return{visible:!1};let t=o.panel,r=getComputedStyle(t),d=t.getBoundingClientRect();return{visible:!0,variant:s.variant,severity:s.severity,width:d.width,height:d.height,fontSize:r.fontSize,lineHeight:r.lineHeight,borderColor:r.borderColor}}function de(t){if(!c)return!1;let r=typeof t.composedPath=="function"?t.composedPath():[];return Array.isArray(r)&&r.includes(c)}function P(t,r){let d=m=>{r()&&(de(m)||(m.preventDefault(),m.stopImmediatePropagation()))};for(let m of t)window.addEventListener(m,d,{capture:!0,passive:!1});return()=>{for(let m of t)window.removeEventListener(m,d,{capture:!0,passive:!1})}}function St(t){if(B.has(t))return;let r=()=>{};if(t===f.KEYBOARD_INPUT)r=P(["keydown","keypress","keyup"],()=>h.has(t));else if(t===f.MOUSE_CLICKS)r=P(["pointerdown","click","dblclick","contextmenu","auxclick","mousedown","mouseup"],()=>h.has(t));else if(t===f.CUT_COPY)r=P(["copy","cut"],()=>h.has(t));else if(t===f.PASTE)r=P(["paste"],()=>h.has(t));else if(t===f.DRAG_DROP)r=P(["dragstart","dragover","drop"],()=>h.has(t));else if(t===f.FOCUS_INPUTS){let d=m=>{if(!h.has(t)||de(m))return;let b=m.target;!b||!(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||(m.preventDefault(),m.stopImmediatePropagation(),b.blur?.())};window.addEventListener("focusin",d,!0),r=()=>window.removeEventListener("focusin",d,!0)}else if(t===f.FILE_SELECTION){let d=m=>{if(!h.has(t))return;let b=m.target;!(b instanceof Element)||!b.closest('input[type="file"]')||(m.preventDefault(),m.stopImmediatePropagation())};window.addEventListener("mousedown",d,{capture:!0,passive:!1}),window.addEventListener("click",d,{capture:!0,passive:!1}),window.addEventListener("change",d,{capture:!0,passive:!1}),r=()=>{window.removeEventListener("mousedown",d,{capture:!0,passive:!1}),window.removeEventListener("click",d,{capture:!0,passive:!1}),window.removeEventListener("change",d,{capture:!0,passive:!1})}}B.set(t,r)}function _e(){let t=document.querySelectorAll('input[type="file"]');for(let r of t)j.has(r)||j.set(r,{disabled:r.disabled}),r.disabled=!0}function Ct(){for(let[t,r]of j.entries())t&&t.isConnected&&(t.disabled=!!r.disabled);j.clear()}function Fe(){if(h.has(f.FILE_SELECTION)){_e(),w||(w=new MutationObserver(()=>{h.has(f.FILE_SELECTION)&&_e()}),w.observe(document.documentElement,{childList:!0,subtree:!0}));return}w&&(w.disconnect(),w=null),Ct()}function Ve(t=[]){let r=z(t);for(let d of r)St(d),h.add(d);Fe(),s.activeCapabilities=[...h]}function ze(){if(s.requiresITApproval)for(let d of Z)h.add(d);let t=h.size>0;s.lockCapabilities=[...h],s.activeCapabilities=[...h];let r=s.sticky;s.sticky=t||!!s.requiredInput||!!s.requiresITApproval||!!s.stickyRequested,s.sticky!==r&&(s.sticky?s.timerDeadlineMs=s.timerSeconds>0?Date.now()+s.timerSeconds*1e3:null:s.visible&&(s.timerDeadlineMs=Date.now()+Math.max(s.timerSeconds,3)*1e3))}function ue(t=[]){let r=z(t);for(let d of r)h.delete(d);Fe(),s.activeCapabilities=[...h]}function G(t={}){if(!Ge(t.url))return;let r=new Set(h);s=xt(s,t);for(let d of r)h.delete(d);Ve(s.lockCapabilities),s.activeCapabilities=[...h],D(),oe(),T("shown",{variant:s.variant,actions:s.actions,primary:De(),requiresITApproval:s.requiresITApproval,lockCapabilities:s.lockCapabilities})}function Be(t={}){if(!Ge(t.url))return;if(!s.visible){G(t);return}let r={...s,...t,requestId:t.requestId??s.requestId,lockCapabilities:t.lockCapabilities??s.lockCapabilities,actions:t.actions??s.actions,actionLabels:t.actionLabels??s.actionLabels,requiredInput:t.requiredInput??s.requiredInput,requiresITApproval:t.requiresITApproval??s.requiresITApproval,timerSeconds:t.timerSeconds??s.timerSeconds,sticky:t.sticky??s.sticky,backdrop:t.backdrop??s.backdrop};G(r),T("updated",{requestId:s.requestId})}function R(t={}){U(),ue([f.ALL]),s.visible=!1,s.itRequestRaised=!1,s.timerDeadlineMs=null,c?.parentNode&&c.parentNode.removeChild(c),c=null,p=null,o=null,T("dismissed",t)}function je(t={}){let r=z(t.lockCapabilities);Ve(r),ze(),s.visible&&(D(),oe()),T("lock_changed",{operation:"lock",lockCapabilities:r})}function pe(t={}){let r=z(t.unlockCapabilities);ue(r),ze(),s.visible&&(D(),oe()),T("lock_changed",{operation:"unlock",unlockCapabilities:r})}function $e(){R({reason:"clear"})}function yt(t={}){let r=t.action;t=we(t),r==="notificationLocking.show"?G(t):r==="notificationLocking.update"?Be(t):r==="notificationLocking.dismiss"?R({reason:"command"}):r==="notificationLocking.lock"?je(t):r==="notificationLocking.unlock"?pe(t):r==="notificationLocking.clear"&&$e()}It();function Et(){U(),ue([f.ALL]),w&&(w.disconnect(),w=null),I&&(I.disconnect(),I=null),C&&(clearInterval(C),C=null),y&&y(),c?.parentNode&&c.parentNode.removeChild(c)}return{ACTIONS:u,CAPABILITIES:f,VARIANTS:k,show:G,update:Be,dismiss:R,lock:je,unlock:pe,clear:$e,handleCommand:yt,destroy:Et,getLayoutSnapshot:vt,getState:()=>({...s,activeCapabilities:[...h]})}}function V(i,e){if(typeof i!="boolean")throw new TypeError(`Invalid ${e} "${i}" \u2014 expected a boolean`);return i}function ye(i){if(i!==u.DISMISS&&i!==u.MARK_SAFE)throw new TypeError(`Invalid action "${i}" \u2014 expected DISMISS or MARK_SAFE`);return i}function Mt(i){if(i!==u.DISMISS&&i!==u.MARK_SAFE&&i!==u.UNLOCK)throw new TypeError(`Invalid action label key "${i}" \u2014 expected DISMISS, MARK_SAFE, or UNLOCK`);return i}function Ee(i){if(!Object.prototype.hasOwnProperty.call(f,i))throw new TypeError(`Invalid capability "${i}" \u2014 expected one of ${Object.keys(f).join(", ")}`);return i}var ee=class i{constructor(e,n,l){this.variant=e??k.SMALL,this.severity=n??A.NOTIFICATION,this.title=l??""}static create(e={}){typeof e=="string"&&(e={title:e});let{title:n,severity:l,variant:a}=e??{};return new i(a??i.defaultVariant??k.SMALL,l??i.defaultSeverity??A.NOTIFICATION,n)}setTitle(e){return this.title=v(e),this}setDescription(e){return this.description=v(e),this}setCustomNote(e){return this.customNote=v(e),this}setRequestId(e){return this.requestId=e==null?null:v(e),this}setUrl(e){return this.url=e==null?void 0:v(e),this}setVariant(e){if(e!==k.SMALL&&e!==k.LARGE)throw new RangeError(`Invalid variant "${e}" \u2014 expected SMALL or LARGE`);return this.variant=e,this}setSeverity(e){if(e==null)return this.severity=A.NOTIFICATION,this;let n=v(e).toUpperCase(),l=Ae[n];if(!l)throw new RangeError(`Invalid severity "${e}" \u2014 expected NOTIFICATION, WARNING, SUSPICIOUS, or UNSAFE`);return this.severity=l.key,this}addAction(e){let n=ye(e);return this.actions===void 0&&(this.actions=[]),this.actions.includes(n)||this.actions.push(n),this}removeAction(e){let n=ye(e);return this.actions!==void 0&&(this.actions=this.actions.filter(l=>l!==n)),this}setActions(e=[]){return this.actions=[...new Set(e.map(ye))],this}clearActions(){return this.actions=[],this}setActionLabel(e,n){let l=Mt(e);return this.actionLabels={...this.actionLabels,[l]:v(n)},this}enableMarkSafe(){return this.addAction(u.MARK_SAFE),this}addCapability(e){let n=Ee(e);return this.lockCapabilities===void 0&&(this.lockCapabilities=[]),this.lockCapabilities.includes(n)||this.lockCapabilities.push(n),this}removeCapability(e){let n=Ee(e);return this.lockCapabilities!==void 0&&(this.lockCapabilities=this.lockCapabilities.filter(l=>l!==n)),this}setCapabilities(e=[]){return this.lockCapabilities=[...new Set(e.map(Ee))],this}clearCapabilities(){return this.lockCapabilities=[],this}enableBlockPage(){return this.setCapabilities([f.ALL]),this}setTimerSeconds(e){let n=Number(e);if(!Number.isFinite(n)||n<0)throw new RangeError(`Invalid timerSeconds "${e}" \u2014 expected a finite number >= 0`);return this.timerSeconds=n,this}setSticky(e=!0){return this.sticky=V(e,"sticky"),this}setBackdrop({enabled:e,opacity:n}={}){return this.backdrop===void 0&&(this.backdrop={}),e!==void 0&&(this.backdrop.enabled=V(e,"backdrop.enabled")),n!==void 0&&this.setBackdropOpacity(n),this}setBackdropEnabled(e=!0){return this.backdrop===void 0&&(this.backdrop={}),this.backdrop.enabled=V(e,"backdrop.enabled"),this}setBackdropOpacity(e){this.backdrop===void 0&&(this.backdrop={});let n=Number(e);if(!Number.isFinite(n)||n<0||n>1)throw new RangeError(`Invalid backdrop.opacity "${e}" \u2014 expected a number between 0 and 1`);return this.backdrop.opacity=n,this}setRequiredInput(e=!0){return this.requiredInput=V(e,"requiredInput"),this}setRequiresITApproval(e=!0){return this.requiresITApproval=V(e,"requiresITApproval"),this}addIfValid(e,n){let l=this[n];return l==null||(Array.isArray(l)?l.length>0&&(e[n]=[...l]):l!==null&&typeof l=="object"?e[n]={...l}:e[n]=l),e}setDefaultOptions(e){this.defaultOptions=e??{}}build(){let e={variant:this.variant,severity:this.severity,title:this.title,...this.defaultOptions??{}};return this.addIfValid(e,"requestId"),this.addIfValid(e,"url"),this.addIfValid(e,"description"),this.addIfValid(e,"customNote"),this.addIfValid(e,"actions"),this.addIfValid(e,"timerSeconds"),this.addIfValid(e,"sticky"),this.addIfValid(e,"actionLabels"),this.addIfValid(e,"backdrop"),this.addIfValid(e,"lockCapabilities"),this.addIfValid(e,"requiredInput"),this.addIfValid(e,"requiresITApproval"),e}static setDefaultVariant(e){i.defaultVariant=e}static setDefaultSeverity(e){i.defaultSeverity=e}static setDefaultAction(e){i.defaultAction=e}static CLEAR_NOTIFICATIONS={action:"notificationLocking.clear"};static SHOW_NOTIFICATION={action:"notificationLocking.show"};static UPDATE_NOTIFICATION={action:"notificationLocking.update"};static DISMISS_NOTIFICATION={action:"notificationLocking.dismiss"};static LOCK_CAPABILITIES={action:"notificationLocking.lock"};static UNLOCK_CAPABILITIES={action:"notificationLocking.unlock"}};var q=Object.freeze([A.NOTIFICATION,A.SUSPICIOUS,A.UNSAFE]);function qt(i){return i==null?"":String(i)}function Ut(i,e){if(typeof i!="boolean")throw new TypeError(`Invalid ${e} "${i}" \u2014 expected a boolean`);return i}function ie(i){let e=qt(i).toUpperCase();if(!q.includes(e))throw new RangeError(`Invalid template severity "${i}" \u2014 expected NOTIFICATION, SUSPICIOUS, or UNSAFE`);return e}var Xe=Object.freeze({[A.NOTIFICATION]:Object.freeze({variant:k.LARGE,customNote:"",actions:[u.DISMISS],sticky:!1,timerSeconds:4,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[A.SUSPICIOUS]:Object.freeze({variant:k.LARGE,customNote:"This site shows signals consistent with phishing. Verify the sender before entering credentials.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!1,timerSeconds:6,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[A.UNSAFE]:Object.freeze({variant:k.LARGE,customNote:"If you believe this is a mistake, contact your administrator.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!0,timerSeconds:0,requiredInput:!0,requiresITApproval:!1,lockCapabilities:[f.ALL],backdrop:{enabled:!0}})}),ne=class i extends ee{constructor(e,n={}){super(k.LARGE,ie(e),""),this.enabled=!0,this.backdrop={enabled:!0},this.customNote="",this.actions=[u.DISMISS],this.sticky=!1,this.timerSeconds=0,this.requiredInput=!1,this.requiresITApproval=!1,n&&this.setConfig(n)}static create(e,n={}){return new i(e,n)}setConfig(e={}){for(let[n,l]of Object.entries(e))switch(n){case"severity":if(ie(l)!==this.severity)throw new RangeError(`Cannot change template severity via setConfig (already "${this.severity}")`);break;case"variant":this.setVariant(l);break;case"customNote":this.setCustomNote(l);break;case"actions":this.setActions(l??[]);break;case"sticky":this.setSticky(l);break;case"timerSeconds":this.setTimerSeconds(l);break;case"requiredInput":this.setRequiredInput(l);break;case"requiresITApproval":this.setRequiresITApproval(l);break;case"lockCapabilities":this.setCapabilities(l??[]);break;case"backdrop":this.setBackdrop(l??{enabled:!0});break;default:throw new Error(`Unknown NotificationTemplate config key "${n}"`)}return this}setEnabled(e=!0){return this.enabled=Ut(e,"enabled"),this}lockPage(){return this.addCapability(f.ALL)}unlockPage(){return this.clearCapabilities()}build(){let e=super.build();return delete e.action,delete e.requestId,delete e.url,delete e.title,delete e.description,delete e.actionLabels,e.lockCapabilities=Array.isArray(this.lockCapabilities)&&this.lockCapabilities.length>0?[f.ALL]:[],e}toConfig(){return this.build()}toJSON(){return this.toConfig()}clone(){return new i(this.severity,this.toConfig())}},te=new Map;function O(i){let e=ie(i);return te.has(e)||te.set(e,new ne(e,Xe[e])),te.get(e)}function Qe(){let i={};for(let e of q){let n=O(e);n.enabled&&(i[e]=n.toConfig())}return i}function Ze(i){let e=ie(i),n=new ne(e,Xe[e]);return te.set(e,n),n}var Dt=Object.freeze({REQUEST_INIT:"sekant.admin.requestInit",INIT:"sekant.admin.init",GENERATED:"sekant.admin.generated"}),Pt=Object.freeze({CHILD:"sekant-admin-options",PARENT:"iframe-test-parent"});function _t(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function et(i={}){let{onInit:e=()=>{},messageTypes:n=Dt,sources:l=Pt,targetOrigin:a="*"}=i,c=!1;function p(){window.parent.postMessage({source:l.CHILD,type:n.REQUEST_INIT},a)}function o(S){window.parent.postMessage({source:l.CHILD,type:n.GENERATED,payload:S},a)}function I(S){let E=S.data;_t(E)&&E.source===l.PARENT&&E.type===n.INIT&&e(E.payload,E)}function C(){c||(c=!0,window.addEventListener("message",I),p())}function y(){c&&(c=!1,window.removeEventListener("message",I))}return{requestInit:p,sendGenerated:o,start:C,destroy:y}}var Te=typeof window<"u"&&window.self!==window.top,it=Je({eventSink:()=>{}}),Ft={NOTIFICATION:"Informational updates shown to users.",SUSPICIOUS:"Warnings for pages that show phishing-like signals.",UNSAFE:"Blocking notifications for unsafe pages."},Vt={NOTIFICATION:"#1677ff",SUSPICIOUS:"#fa8c16",UNSAFE:"#ff4d4f"},Ne=150,nt=60,si=Object.freeze({title:200,description:2e3,customNote:Ne,requestId:100,url:2048});function Le(i){return we(i)}var zt={NOTIFICATION:{title:"New notification",description:"Informational update from Sekant."},SUSPICIOUS:{title:"Suspicious activity detected",description:"This page shows phishing-like signals. Verify before entering credentials."},UNSAFE:{title:"Unsafe page blocked",description:"Sekant has blocked this page because it is unsafe."}},tt=document.getElementById("app"),x=null,re=null;function se(i,e){x&&(x.textContent=e,x.className=`tag${i==="ok"?" is-success":i==="warn"?" is-warning":""}`)}function st(){tt.innerHTML="";let i=document.createElement("section");i.className="section";let e=document.createElement("div");e.className="container is-max-desktop";let n=document.createElement("div");n.className="box";let l=document.createElement("h1");l.className="title is-4",l.textContent="Notification Template Configurator";let a=document.createElement("p");a.className="subtitle is-6",a.textContent="Configure per-severity notification templates (all options except title & description). Press Show to preview a card against the real notification controller.";let c=document.createElement("div");c.className="level",x=document.createElement("span"),x.className="tag",x.textContent=Te?"Waiting for console\u2026":"Standalone";let p=document.createElement("button");p.type="button",p.className="button is-primary",p.textContent="Generate",p.addEventListener("click",Gt);let o=document.createElement("div");o.className="level-left";let I=document.createElement("div");I.className="level-right",I.appendChild(x),I.appendChild(p),c.appendChild(o),c.appendChild(I),n.appendChild(l),n.appendChild(a),n.appendChild(c),e.appendChild(n);let C=document.createElement("div");C.id="templateCards",C.className="columns is-multiline";for(let y of q){if(y===A.NOTIFICATION)continue;let S=document.createElement("div");S.className="column",S.appendChild(Bt(y)),C.appendChild(S)}e.appendChild(C),i.appendChild(e),tt.appendChild(i)}function Bt(i){let e=document.createElement("div");return e.className="box",e.dataset.severity=i,e.style.borderLeft=`4px solid ${Vt[i]??"#9ca3af"}`,e.innerHTML=`
    <div class="card-head">
      <div>
        <h2 class="title is-5">${i}</h2>
        <p class="help">${Ft[i]??""}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">Custom Note</label>
      <div class="control">
        <textarea class="textarea" data-field="customNote" maxlength="${Ne}" placeholder="Shown under the title when non-empty"></textarea>
      </div>
    </div>

    <fieldset class="box">
      <legend class="label">Actions</legend>
      <div class="field"><label class="checkbox"><input type="checkbox" data-action="${u.DISMISS}" /> Dismiss</label></div>
      <div class="field"><label class="checkbox"><input type="checkbox" data-action="${u.MARK_SAFE}" /> Mark Safe</label></div>
    </fieldset>

    <div class="field">
      <label class="label">Auto-Dismiss Timer (seconds)</label>
      <div class="control">
        <input class="input" data-field="timerSeconds" type="number" min="0" max="${nt}" step="1" />
      </div>
    </div>

    <div class="field">
      <label class="checkbox" title="Checked = LARGE panel (risk description); unchecked = SMALL compact notification">
        <input data-field="variant" type="checkbox" /> Show risk description
      </label>
    </div>
    <div class="field"><label class="checkbox"><input data-field="sticky" type="checkbox" /> Sticky (no auto-dismiss)</label></div>
    <div class="field"><label class="checkbox"><input data-field="lock" type="checkbox" /> Lock page (ALL capabilities)</label></div>
    <div class="field"><label class="checkbox"><input data-field="backdrop" type="checkbox" /> Backdrop enabled</label></div>
    <div class="field"><label class="checkbox"><input data-field="requiredInput" type="checkbox" /> Requires rationale (min 10 chars)</label></div>
    <div class="field"><label class="checkbox"><input data-field="requiresITApproval" type="checkbox" /> Requires IT approval (email + rationale)</label></div>

    <div class="field is-grouped">
      <div class="control"><button type="button" class="button is-primary" data-show>Show</button></div>
      <div class="control"><button type="button" class="button" data-reset>Reset</button></div>
    </div>
  `,jt(e,i),Oe(e,i),e}function Oe(i,e){let n=O(e).toConfig();i.querySelector('[data-field="variant"]').checked=n.variant===k.LARGE,i.querySelector('[data-field="customNote"]').value=n.customNote,i.querySelector('[data-field="timerSeconds"]').value=n.timerSeconds,i.querySelector('[data-field="sticky"]').checked=n.sticky,i.querySelector('[data-field="lock"]').checked=(n.lockCapabilities??[]).length>0,i.querySelector('[data-field="backdrop"]').checked=n.backdrop?.enabled??!0,i.querySelector('[data-field="requiredInput"]').checked=n.requiredInput,i.querySelector('[data-field="requiresITApproval"]').checked=n.requiresITApproval;for(let l of i.querySelectorAll("[data-action]"))l.checked=n.actions.includes(l.dataset.action)}function jt(i,e){let n=()=>O(e),l={variant:a=>n().setVariant(a.checked?k.LARGE:k.SMALL),customNote:a=>{let c=a.value.slice(0,Ne);a.value!==c&&(a.value=c),n().setCustomNote(c)},timerSeconds:a=>{let c=Number(a.value||0),p=Math.min(nt,Math.max(0,c));p!==c&&(a.value=String(p)),n().setTimerSeconds(p)},sticky:a=>n().setSticky(a.checked),lock:a=>{a.checked?n().lockPage():n().unlockPage()},backdrop:a=>n().setBackdropEnabled(a.checked),requiredInput:a=>n().setRequiredInput(a.checked),requiresITApproval:a=>n().setRequiresITApproval(a.checked)};for(let[a,c]of Object.entries(l)){let p=i.querySelector(`[data-field="${a}"]`);p.addEventListener("input",()=>{try{c(p)}catch(o){console.error(`[notificationOptions] ${e}.${a}:`,o)}})}for(let a of i.querySelectorAll("[data-action]"))a.addEventListener("change",()=>{a.checked?n().addAction(a.dataset.action):n().removeAction(a.dataset.action)});i.querySelector("[data-show]").addEventListener("click",()=>{$t(e)}),i.querySelector("[data-reset]").addEventListener("click",()=>{Ze(e),Oe(i,e)})}function $t(i){if(!O(i).enabled)return;let e=zt[i]??{title:i,description:""},n=Le({...O(i).build(),title:e.title,description:e.description,requestId:`template-${i}-${Date.now()}`,action:"notificationLocking.show"});it.show(n)}function Kt(){for(let i of q){let e=document.querySelector(`[data-severity="${i}"]`);e&&Oe(e,i)}}function Gt(){let i=Qe();for(let e of Object.keys(i)){let n=Le(i[e]);O(e).setConfig(n),i[e]=n}if(Kt(),!Te||!re){se("warn","Not embedded \u2014 generated config logged to console"),console.log("[notificationOptions] generated config",JSON.stringify(i,null,2));return}re.sendGenerated(i),se("ok","Saved to console"),window.setTimeout(()=>se("ok","Synced with console"),1200)}function Ht(i){let e=i&&typeof i=="object"&&!Array.isArray(i)?i:{};for(let n of q){let l=e[n],a=O(n);if(l&&typeof l=="object")try{a.setConfig(Le(l))}catch(c){console.warn(`[notificationOptions] invalid ${n} config from console:`,c)}a.setEnabled(!0)}}function Yt(){Te&&(re=et({onInit:i=>{Ht(i),st(),se("ok","Synced with console")}}),re.start())}st();Yt();window.addEventListener("beforeunload",()=>{it.destroy()});
