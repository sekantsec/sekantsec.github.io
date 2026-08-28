var g=Object.freeze({NOTIFICATION:"NOTIFICATION",SUSPICIOUS:"SUSPICIOUS",UNSAFE:"UNSAFE"}),I=Object.freeze({NOTIFICATION:"NOTIFICATION",WARN:"WARN",BLOCK:"BLOCK"}),u=Object.freeze({DISMISS:"DISMISS",MARK_SAFE:"MARK_SAFE",UNLOCK:"UNLOCK"}),f=Object.freeze({KEYBOARD_INPUT:"KEYBOARD_INPUT",MOUSE_CLICKS:"MOUSE_CLICKS",CUT_COPY:"CUT_COPY",PASTE:"PASTE",DRAG_DROP:"DRAG_DROP",FILE_SELECTION:"FILE_SELECTION",FOCUS_INPUTS:"FOCUS_INPUTS",ALL:"ALL"}),Q=Object.freeze([f.KEYBOARD_INPUT,f.MOUSE_CLICKS,f.CUT_COPY,f.PASTE,f.DRAG_DROP,f.FILE_SELECTION,f.FOCUS_INPUTS]),ye=Object.freeze({[u.DISMISS]:"Dismiss",[u.MARK_SAFE]:"Mark Safe",[u.UNLOCK]:"Unlock"}),wt='<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path></svg>',X=10;var gt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,At=Object.freeze(["action_clicked","it_approval_requested"]),$e=Object.freeze({enabled:!0,opacity:.6}),Nt=Object.freeze({visible:!1,showEvidence:!0,severity:"NOTIFICATION",title:"",description:"",customNote:"",actions:[u.DISMISS],actionLabels:ye,lockCapabilities:[],stickyRequested:!1,requiredInput:!1,requiresITApproval:!1,itRequestRaised:!1,sticky:!1,timerSeconds:0,timerDeadlineMs:null,requestId:null,activeCapabilities:[],timerComplete:!0,inputValid:!0}),Ee=Object.freeze({NOTIFICATION:{key:"NOTIFICATION",label:"NOTIFICATION"},WARNING:{key:"SUSPICIOUS",label:"SUSPICIOUS"},SUSPICIOUS:{key:"SUSPICIOUS",label:"SUSPICIOUS"},UNSAFE:{key:"UNSAFE",label:"UNSAFE"}});function v(i){return i==null?"":String(i)}function He(i,e=.6){let n=Number(i);return Number.isFinite(n)?Math.min(1,Math.max(0,n)):e}function Ye(i){let e=v(i||"NOTIFICATION").toUpperCase();return Ee[e]||Ee.NOTIFICATION}function Tt(i){try{return new URL(i).hostname.toLowerCase()}catch{return""}}function we(i){if(!i||typeof i!="object")return{};let e={...i},n=(a,l)=>{let p=v(a);return p.length>l?p.slice(0,l):p},c={title:200,description:2e3,customNote:150,requestId:100,url:2048};for(let[a,l]of Object.entries(c))e[a]!==void 0&&e[a]!==null&&(e[a]=n(e[a],l));if(e.showEvidence!==void 0&&typeof e.showEvidence!="boolean"&&(e.showEvidence=!0),e.severity!==void 0&&(e.severity=Ye(e.severity).key),e.actions!==void 0&&(e.actions=Ge(e.actions)),e.actionLabels!==void 0&&(e.actionLabels=typeof e.actionLabels=="object"&&e.actionLabels!==null&&!Array.isArray(e.actionLabels)?Object.fromEntries(Object.entries(e.actionLabels).map(([a,l])=>[a,n(l,40)])):{}),e.lockCapabilities!==void 0){let a=Array.isArray(e.lockCapabilities)?e.lockCapabilities:[];e.lockCapabilities=[...new Set(a.filter(l=>Object.values(f).includes(l)))]}if(e.timerSeconds!==void 0){let a=Number(e.timerSeconds);e.timerSeconds=Number.isFinite(a)?Math.min(60,Math.max(0,a)):0}for(let a of["sticky","requiredInput","requiresITApproval"])e[a]!==void 0&&typeof e[a]!="boolean"&&(e[a]=!1);return e.backdrop!==void 0&&(e.backdrop=typeof e.backdrop=="object"&&e.backdrop!==null&&!Array.isArray(e.backdrop)?{...e.backdrop}:{},e.backdrop.opacity!==void 0&&(e.backdrop.opacity=He(e.backdrop.opacity)),e.backdrop.enabled!==void 0&&typeof e.backdrop.enabled!="boolean"&&(e.backdrop.enabled=!0)),e}function We(i){if(typeof i!="string"||!i.trim())return!0;let e=Tt(i);if(!e)return!0;let n=(globalThis.location?.hostname||"").toLowerCase();return e===n}function Ot(i){return i==="UNSAFE"?"#ff6685":i==="SUSPICIOUS"?"#ffdd57":"#ffffff"}function Lt(i){let e=[u.MARK_SAFE,u.DISMISS,u.UNLOCK];return[...i].sort((n,c)=>e.indexOf(n)-e.indexOf(c))}function Ge(i){let e=Array.isArray(i)?i:[u.DISMISS],n=[];for(let c of e){let a=c===u.UNLOCK?u.DISMISS:c;(a===u.DISMISS||a===u.MARK_SAFE)&&!n.includes(a)&&n.push(a)}return n.includes(u.DISMISS)||n.unshift(u.DISMISS),n.slice(0,2)}function z(i){let e=Array.isArray(i)?i:[];return e.includes(f.ALL)?[...Q]:e.filter(n=>Q.includes(n))}function xt(i,e={}){let n=Number(e.timerSeconds),c=Number.isFinite(n)?Math.max(0,n):0,a=!!(e.requiredInput??i.requiredInput),l=!!e.requiresITApproval,p=l||a,r=l?[...Q]:z(e.lockCapabilities),k=r.length>0,S=Ye(e.severity||i.severity||"NOTIFICATION"),E=Date.now(),C=!!e.sticky,y=k||p||C;return{...i,visible:!0,showEvidence:e.showEvidence??i.showEvidence??!0,severity:S.key,severityLabel:S.label,title:v(e.title),description:v(e.description),customNote:v(e.customNote),actions:Ge(e.actions),actionLabels:{...ye,...Object.fromEntries(Object.entries(e.actionLabels||{}).map(([s,h])=>[s,v(h)]))},lockCapabilities:r,stickyRequested:C,requiredInput:p,requiresITApproval:l,itRequestRaised:!1,sticky:y,timerSeconds:c,timerDeadlineMs:y?c>0?E+c*1e3:null:E+Math.max(c,3)*1e3,timerComplete:c<=0,inputValid:!p&&!l,requestId:v(e.requestId)||null,activeCapabilities:[...new Set([...i.activeCapabilities||[],...r])],backdrop:{...$e,...e.backdrop||{},opacity:He(e?.backdrop?.opacity,$e.opacity)}}}var qt=`
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
`;function Je(i={}){let e=typeof i.eventSink=="function"?i.eventSink:()=>{},n=typeof i.loadEmail=="function"?i.loadEmail:null,c=typeof i.saveEmail=="function"?i.saveEmail:null,a=i.production===!0,l=null,p=null,r=null,k=null,S=null,E=null,C=null,y=!1,s={...Nt},h=new Set,Le=new Map,K=new Map,A=null;function N(t,o={}){if(a&&!At.includes(t))return;let d={type:"notificationLocking.event",event:t,requestId:s.requestId,timestamp:Date.now(),...o};try{e(d)}catch{}}function xe(){if(l&&document.documentElement.contains(l))return;l=document.createElement("div"),l.id=`sekant-notification-locking-${Math.random().toString(36).slice(2,9)}`,l.style.setProperty("all","initial","important"),l.style.setProperty("position","fixed","important"),l.style.setProperty("inset","0","important"),l.style.setProperty("z-index","2147483647","important"),l.style.setProperty("pointer-events","none","important"),l.style.setProperty("font-size","clamp(16px, calc(0.25vw + 15px), 20px)","important"),l.style.setProperty("line-height","1.4","important"),l.style.setProperty("font-family",'Avenir Next, Helvetica, "Segoe UI", Arial, sans-serif',"important"),l.style.setProperty("--sk-nl-screen-w",`${window.screen?.width||window.innerWidth}px`),p=l.attachShadow({mode:"closed"});let t=document.createElement("style");t.textContent=qt;let o=document.createElement("div");o.className="sk-nl-root";let d=document.createElement("div");d.className="sk-nl-backdrop";let m=document.createElement("div");m.className="sk-nl-wrap";let b=document.createElement("div");b.className="sk-nl-panel sk-nl-modal sk-nl-severity-NOTIFICATION";let w=document.createElement("div");w.className="sk-nl-header";let T=document.createElement("span");T.className="sk-nl-shield sk-nl-severity-text",T.innerHTML=wt;let W=document.createElement("span");W.className="sk-nl-severity-text",W.textContent="Sekant Web Security";let ue=document.createElement("span");ue.className="sk-nl-type-chip sk-nl-severity-text",w.appendChild(T),w.appendChild(W),w.appendChild(ue);let pe=document.createElement("div");pe.className="sk-nl-title";let fe=qe("sk-nl-description"),me=qe("sk-nl-custom-note"),O=document.createElement("div");O.className="sk-nl-input-wrap";let H=document.createElement("div");H.className="sk-nl-note",H.textContent="Enter your work email and rationale to request IT approval.";let M=document.createElement("input");M.className="sk-nl-input sk-nl-email",M.type="email",M.autocomplete="email",M.placeholder="you@company.com";let Y=document.createElement("label");Y.className="sk-nl-input-label",Y.textContent=`Rationale (min ${X} characters)`;let G=document.createElement("input");G.className="sk-nl-input",G.type="text";let he=document.createElement("div");he.className="sk-nl-input-error",O.appendChild(H),O.appendChild(M),O.appendChild(Y),O.appendChild(G),O.appendChild(he);let be=document.createElement("div");be.className="sk-nl-actions";let D=document.createElement("div");D.className="sk-nl-progress",D.classList.add("sk-nl-progress-edge");let Ie=document.createElement("div");Ie.className="sk-nl-progress-bar",D.appendChild(Ie),b.appendChild(w),b.appendChild(pe),b.appendChild(fe.container),b.appendChild(me.container),b.appendChild(O),b.appendChild(be),b.appendChild(D),m.appendChild(b),o.appendChild(d),o.appendChild(m);let J=document.createElement("div");J.className="sk-nl-confirm-overlay";let B=document.createElement("div");B.className="sk-nl-panel sk-nl-confirm";let ke=document.createElement("div");ke.className="sk-nl-confirm-title",ke.textContent="IT request raised";let ve=document.createElement("div");ve.className="sk-nl-confirm-message",ve.textContent="Please check your email or the Sekant notifications for an update from IT in some time.",B.appendChild(ke),B.appendChild(ve),J.appendChild(B),o.appendChild(J),p.appendChild(t),p.appendChild(o),document.documentElement.appendChild(l),r={backdrop:d,wrap:m,panel:b,shield:T,headerText:W,typeChip:ue,title:pe,descriptionSection:fe,customNoteSection:me,descriptionValue:fe.value,customNoteValue:me.value,inputWrap:O,note:H,email:M,inputLabel:Y,input:G,inputError:he,actions:be,progress:D,progressBar:Ie,confirmOverlay:J,confirmDialog:B},ot()}function qe(t){let o=document.createElement("div");o.className="sk-nl-section";let d=document.createElement("div");return d.className=`sk-nl-section-value ${t}`,o.appendChild(d),{container:o,value:d}}function ot(){let t=()=>{oe(),j()};r.input.addEventListener("input",t),r.email.addEventListener("input",t)}function rt(){k||(k=new MutationObserver(()=>{s.visible&&(!l||!document.documentElement.contains(l))&&Me()}),k.observe(document.documentElement,{childList:!0})),S||(S=setInterval(()=>{s.visible&&(!l||!document.documentElement.contains(l))&&Me()},1e3))}function Me(){l=null,p=null,r=null,xe(),F()}function P(){C&&(clearInterval(C),C=null)}function se(){P(),y=s.timerComplete,s.timerDeadlineMs&&(C=setInterval(()=>{Re()},100),Re())}function Re(){let t=Date.now();if(!s.timerComplete&&s.timerDeadlineMs!==null&&t>=s.timerDeadlineMs&&(s.timerComplete=!0,y||(y=!0,N("timer_complete",{reason:"actions_enabled"})),j()),_e(t),!s.sticky&&s.timerDeadlineMs!==null&&t>=s.timerDeadlineMs){N("auto_dismissed",{reason:"timer_elapsed"}),q({reason:"timer_elapsed"});return}s.timerComplete&&(s.sticky||s.timerDeadlineMs===null)&&P()}function _e(t=Date.now()){let o=Math.max(0,(s.sticky?s.timerSeconds:Math.max(s.timerSeconds,3))*1e3);if(o<=0||s.timerDeadlineMs===null){r.progress.style.display="none";return}let d=Math.max(0,s.timerDeadlineMs-t),m=Math.max(0,Math.min(1,d/o)),b=`${Math.round(m*100)}%`;r.progress.style.display="block",r.progressBar.style.width=b}function oe(){let t=(r.input.value||"").trim(),o=(r.email.value||"").trim(),d=s.requiredInput||s.requiresITApproval,m=s.requiresITApproval,b=!d||t.length>=X,w=!m||gt.test(o);if(s.inputValid=b&&w,!d&&!m){r.inputError.classList.remove("show");return}if(s.inputValid){r.inputError.classList.remove("show");return}let T=[];m&&!w&&T.push("a valid work email"),b||T.push(`a rationale of at least ${X} characters`),r.inputError.textContent=`Enter ${T.join(" and ")} to proceed.`,r.inputError.classList.add("show")}function re(t){return s.sticky&&!s.timerComplete?!1:t===u.MARK_SAFE||t===u.UNLOCK?s.requiredInput||s.requiresITApproval?s.inputValid:!0:s.requiredInput?s.inputValid:!0}function j(){for(let t of r.actions.querySelectorAll("button[data-action]")){let o=t.getAttribute("data-action");t.disabled=!re(o)}}function at(t){let o=document.createElement("button");return o.className=`sk-nl-btn ${t.toLowerCase().replace("_","-")}`,o.setAttribute("data-action",t),o.textContent=v(s.actionLabels[t]||ye[t]||t),o.addEventListener("click",()=>{Fe(t,{reason:"user_action"})}),o.disabled=!re(t),o}function Pe(){return h.size>0?u.UNLOCK:u.DISMISS}function ct(){r.actions.textContent="";for(let t of Lt(s.actions)){let o=t===u.DISMISS?Pe():t;r.actions.appendChild(at(o))}}function lt(t){t.className=t.className.split(" ").filter(o=>!o.startsWith("sk-nl-severity-")).concat(`sk-nl-severity-${s.severity}`).join(" ")}function dt(){let t=Ot(s.severity);r.panel.style.borderColor=t,r.panel.style.setProperty("--sk-nl-accent",t),r.shield.style.color=t,r.headerText.style.color=t,r.typeChip.style.color=t,r.typeChip.style.borderColor=t,r.progressBar.style.backgroundColor=t}function ut(){let t=s.requiredInput||s.requiresITApproval;if(r.inputWrap.style.display=t?"grid":"none",!t){r.input.value="",r.email.value="",r.inputError.classList.remove("show");return}r.note.style.display=s.requiresITApproval?"block":"none",r.email.style.display=s.requiresITApproval?"block":"none",r.inputLabel.textContent=`Rationale (min ${X} characters)`,r.input.placeholder="Enter rationale",s.requiresITApproval&&bt(),oe()}function Fe(t,{reason:o="user_action"}={}){if(!re(t)||!r)return!1;let d=(r.input.value||"").trim();return s.requiresITApproval&&(t===u.MARK_SAFE||t===u.UNLOCK)?(pt(t),!0):(ft(t,{reason:o,inputValue:d}),!0)}function pt(t){let o=(r.email.value||"").trim(),d=(r.input.value||"").trim();ht(o),N("it_approval_requested",{action:t,email:o,rationale:d}),P(),s.itRequestRaised=!0,F()}function ft(t,{reason:o="user_action",inputValue:d=""}={}){if(N("action_clicked",{action:t,rationale:d}),t===u.UNLOCK){de({unlockCapabilities:[f.ALL]}),q({reason:o,action:t});return}(t===u.DISMISS||t===u.MARK_SAFE)&&q({reason:o,action:t})}let V="",ae=null;function mt(){return ae||(ae=(async()=>{if(n)try{let t=await n();return typeof t=="string"?t:""}catch{return""}return""})().catch(()=>"")),ae}async function ht(t){let o=v(t).trim();if(V=o,c)try{await c(o);return}catch{}}function bt(){if(V){r&&!r.email.value&&(r.email.value=V);return}mt().then(t=>{t&&(V=t,r&&s.visible&&s.requiresITApproval&&!r.email.value&&(r.email.value=t,oe(),j()))})}function It(){let t=h.size>0;return s.visible&&!t&&(!s.sticky||s.timerComplete)}function kt(){if(E)return;let t=o=>{It()&&(!l||!r||ce(o)||Fe(u.DISMISS,{reason:"outside_click"}))};window.addEventListener("click",t,{capture:!0,passive:!0}),E=()=>{window.removeEventListener("click",t,{capture:!0,passive:!0}),E=null}}function F(){if(!s.visible)return;if(xe(),rt(),r.backdrop.style.background=`rgba(0, 0, 0, ${s.backdrop.opacity})`,r.backdrop.classList.toggle("show",!!s.backdrop.enabled),s.itRequestRaised){r.wrap.classList.remove("show"),r.confirmOverlay.classList.add("show");return}r.confirmOverlay.classList.remove("show"),r.wrap.classList.add("show"),lt(r.panel),dt(),r.typeChip.textContent=s.severityLabel||"NOTIFICATION",r.title.textContent=s.title||"",r.title.style.display=s.title?"block":"none",r.descriptionValue.textContent=s.description||"",r.customNoteValue.textContent=s.customNote||"";let t=s.showEvidence&&!!s.description;r.descriptionSection.container.style.display=t?"block":"none",r.customNoteSection.container.style.display=s.customNote?"block":"none",ut(),ct(),j(),_e()}function vt(){if(!r||!s.visible)return{visible:!1};let t=r.panel,o=getComputedStyle(t),d=t.getBoundingClientRect();return{visible:!0,showEvidence:s.showEvidence,severity:s.severity,width:d.width,height:d.height,fontSize:o.fontSize,lineHeight:o.lineHeight,borderColor:o.borderColor}}function ce(t){if(!l)return!1;let o=typeof t.composedPath=="function"?t.composedPath():[];return Array.isArray(o)&&o.includes(l)}function U(t,o){let d=m=>{o()&&(ce(m)||(m.preventDefault(),m.stopImmediatePropagation()))};for(let m of t)window.addEventListener(m,d,{capture:!0,passive:!1});return()=>{for(let m of t)window.removeEventListener(m,d,{capture:!0,passive:!1})}}function St(t){if(Le.has(t))return;let o=()=>{};if(t===f.KEYBOARD_INPUT)o=U(["keydown","keypress","keyup"],()=>h.has(t));else if(t===f.MOUSE_CLICKS)o=U(["pointerdown","click","dblclick","contextmenu","auxclick","mousedown","mouseup"],()=>h.has(t));else if(t===f.CUT_COPY)o=U(["copy","cut"],()=>h.has(t));else if(t===f.PASTE)o=U(["paste"],()=>h.has(t));else if(t===f.DRAG_DROP)o=U(["dragstart","dragover","drop"],()=>h.has(t));else if(t===f.FOCUS_INPUTS){let d=m=>{if(!h.has(t)||ce(m))return;let b=m.target;!b||!(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||(m.preventDefault(),m.stopImmediatePropagation(),b.blur?.())};window.addEventListener("focusin",d,!0),o=()=>window.removeEventListener("focusin",d,!0)}else if(t===f.FILE_SELECTION){let d=m=>{if(!h.has(t))return;let b=m.target;!(b instanceof Element)||!b.closest('input[type="file"]')||(m.preventDefault(),m.stopImmediatePropagation())};window.addEventListener("mousedown",d,{capture:!0,passive:!1}),window.addEventListener("click",d,{capture:!0,passive:!1}),window.addEventListener("change",d,{capture:!0,passive:!1}),o=()=>{window.removeEventListener("mousedown",d,{capture:!0,passive:!1}),window.removeEventListener("click",d,{capture:!0,passive:!1}),window.removeEventListener("change",d,{capture:!0,passive:!1})}}Le.set(t,o)}function Ue(){let t=document.querySelectorAll('input[type="file"]');for(let o of t)K.has(o)||K.set(o,{disabled:o.disabled}),o.disabled=!0}function Ct(){for(let[t,o]of K.entries())t&&t.isConnected&&(t.disabled=!!o.disabled);K.clear()}function De(){if(h.has(f.FILE_SELECTION)){Ue(),A||(A=new MutationObserver(()=>{h.has(f.FILE_SELECTION)&&Ue()}),A.observe(document.documentElement,{childList:!0,subtree:!0}));return}A&&(A.disconnect(),A=null),Ct()}function Be(t=[]){let o=z(t);for(let d of o)St(d),h.add(d);De(),s.activeCapabilities=[...h]}function ze(){if(s.requiresITApproval)for(let d of Q)h.add(d);let t=h.size>0;s.lockCapabilities=[...h],s.activeCapabilities=[...h];let o=s.sticky;s.sticky=t||!!s.requiredInput||!!s.requiresITApproval||!!s.stickyRequested,s.sticky!==o&&(s.sticky?s.timerDeadlineMs=s.timerSeconds>0?Date.now()+s.timerSeconds*1e3:null:s.visible&&(s.timerDeadlineMs=Date.now()+Math.max(s.timerSeconds,3)*1e3))}function le(t=[]){let o=z(t);for(let d of o)h.delete(d);De(),s.activeCapabilities=[...h]}function $(t={}){if(!We(t.url))return;let o=new Set(h);s=xt(s,t);for(let d of o)h.delete(d);Be(s.lockCapabilities),s.activeCapabilities=[...h],F(),se(),N("shown",{showEvidence:s.showEvidence,actions:s.actions,primary:Pe(),requiresITApproval:s.requiresITApproval,lockCapabilities:s.lockCapabilities})}function Ke(t={}){if(!We(t.url))return;if(!s.visible){$(t);return}let o={...s,...t,requestId:t.requestId??s.requestId,lockCapabilities:t.lockCapabilities??s.lockCapabilities,actions:t.actions??s.actions,actionLabels:t.actionLabels??s.actionLabels,requiredInput:t.requiredInput??s.requiredInput,requiresITApproval:t.requiresITApproval??s.requiresITApproval,timerSeconds:t.timerSeconds??s.timerSeconds,sticky:t.sticky??s.sticky,backdrop:t.backdrop??s.backdrop};$(o),N("updated",{requestId:s.requestId})}function q(t={}){P(),le([f.ALL]),s.visible=!1,s.itRequestRaised=!1,s.timerDeadlineMs=null,l?.parentNode&&l.parentNode.removeChild(l),l=null,p=null,r=null,N("dismissed",t)}function je(t={}){let o=z(t.lockCapabilities);Be(o),ze(),s.visible&&(F(),se()),N("lock_changed",{operation:"lock",lockCapabilities:o})}function de(t={}){let o=z(t.unlockCapabilities);le(o),ze(),s.visible&&(F(),se()),N("lock_changed",{operation:"unlock",unlockCapabilities:o})}function Ve(){q({reason:"clear"})}function Et(t={}){let o=t.action;t=we(t),o==="notificationLocking.show"?$(t):o==="notificationLocking.update"?Ke(t):o==="notificationLocking.dismiss"?q({reason:"command"}):o==="notificationLocking.lock"?je(t):o==="notificationLocking.unlock"?de(t):o==="notificationLocking.clear"&&Ve()}kt();function yt(){P(),le([f.ALL]),A&&(A.disconnect(),A=null),k&&(k.disconnect(),k=null),S&&(clearInterval(S),S=null),E&&E(),l?.parentNode&&l.parentNode.removeChild(l)}return{ACTIONS:u,CAPABILITIES:f,show:$,update:Ke,dismiss:q,lock:je,unlock:de,clear:Ve,handleCommand:Et,destroy:yt,getLayoutSnapshot:vt,getState:()=>({...s,activeCapabilities:[...h]})}}function R(i,e){if(typeof i!="boolean")throw new TypeError(`Invalid ${e} "${i}" \u2014 expected a boolean`);return i}function Se(i){if(i!==u.DISMISS&&i!==u.MARK_SAFE)throw new TypeError(`Invalid action "${i}" \u2014 expected DISMISS or MARK_SAFE`);return i}function Mt(i){if(i!==u.DISMISS&&i!==u.MARK_SAFE&&i!==u.UNLOCK)throw new TypeError(`Invalid action label key "${i}" \u2014 expected DISMISS, MARK_SAFE, or UNLOCK`);return i}function Ce(i){if(!Object.prototype.hasOwnProperty.call(f,i))throw new TypeError(`Invalid capability "${i}" \u2014 expected one of ${Object.keys(f).join(", ")}`);return i}var Z=class i{constructor(e,n,c){this.showEvidence=e!==!1,this.severity=n??g.NOTIFICATION,this.title=c??""}static create(e={}){typeof e=="string"&&(e={title:e});let{title:n,severity:c,showEvidence:a}=e??{};return new i(typeof a=="boolean"?a:void 0,c??i.defaultSeverity??g.NOTIFICATION,n)}setTitle(e){return this.title=v(e),this}setDescription(e){return this.description=v(e),this}setCustomNote(e){return this.customNote=v(e),this}setRequestId(e){return this.requestId=e==null?null:v(e),this}setUrl(e){return this.url=e==null?void 0:v(e),this}setShowEvidence(e){return this.showEvidence=R(e,"showEvidence"),this}setSeverity(e){if(e==null)return this.severity=g.NOTIFICATION,this;let n=v(e).toUpperCase(),c=Ee[n];if(!c)throw new RangeError(`Invalid severity "${e}" \u2014 expected NOTIFICATION, WARNING, SUSPICIOUS, or UNSAFE`);return this.severity=c.key,this}addAction(e){let n=Se(e);return this.actions===void 0&&(this.actions=[]),this.actions.includes(n)||this.actions.push(n),this}removeAction(e){let n=Se(e);return this.actions!==void 0&&(this.actions=this.actions.filter(c=>c!==n)),this}setActions(e=[]){return this.actions=[...new Set(e.map(Se))],this}clearActions(){return this.actions=[],this}setActionLabel(e,n){let c=Mt(e);return this.actionLabels={...this.actionLabels,[c]:v(n)},this}enableMarkSafe(){return this.addAction(u.MARK_SAFE),this}addCapability(e){let n=Ce(e);return this.lockCapabilities===void 0&&(this.lockCapabilities=[]),this.lockCapabilities.includes(n)||this.lockCapabilities.push(n),this}removeCapability(e){let n=Ce(e);return this.lockCapabilities!==void 0&&(this.lockCapabilities=this.lockCapabilities.filter(c=>c!==n)),this}setCapabilities(e=[]){return this.lockCapabilities=[...new Set(e.map(Ce))],this}clearCapabilities(){return this.lockCapabilities=[],this}enableBlockPage(){return this.setCapabilities([f.ALL]),this}setTimerSeconds(e){let n=Number(e);if(!Number.isFinite(n)||n<0)throw new RangeError(`Invalid timerSeconds "${e}" \u2014 expected a finite number >= 0`);return this.timerSeconds=n,this}setSticky(e=!0){return this.sticky=R(e,"sticky"),this}setBackdrop({enabled:e,opacity:n}={}){return this.backdrop===void 0&&(this.backdrop={}),e!==void 0&&(this.backdrop.enabled=R(e,"backdrop.enabled")),n!==void 0&&this.setBackdropOpacity(n),this}setBackdropEnabled(e=!0){return this.backdrop===void 0&&(this.backdrop={}),this.backdrop.enabled=R(e,"backdrop.enabled"),this}setBackdropOpacity(e){this.backdrop===void 0&&(this.backdrop={});let n=Number(e);if(!Number.isFinite(n)||n<0||n>1)throw new RangeError(`Invalid backdrop.opacity "${e}" \u2014 expected a number between 0 and 1`);return this.backdrop.opacity=n,this}setRequiredInput(e=!0){return this.requiredInput=R(e,"requiredInput"),this}setRequiresITApproval(e=!0){return this.requiresITApproval=R(e,"requiresITApproval"),this}addIfValid(e,n){let c=this[n];return c==null||(Array.isArray(c)?c.length>0&&(e[n]=[...c]):c!==null&&typeof c=="object"?e[n]={...c}:e[n]=c),e}setDefaultOptions(e){this.defaultOptions=e??{}}build(){let e={showEvidence:this.showEvidence,severity:this.severity,title:this.title,...this.defaultOptions??{}};return this.addIfValid(e,"requestId"),this.addIfValid(e,"url"),this.addIfValid(e,"description"),this.addIfValid(e,"customNote"),this.addIfValid(e,"actions"),this.addIfValid(e,"timerSeconds"),this.addIfValid(e,"sticky"),this.addIfValid(e,"actionLabels"),this.addIfValid(e,"backdrop"),this.addIfValid(e,"lockCapabilities"),this.addIfValid(e,"requiredInput"),this.addIfValid(e,"requiresITApproval"),e}static setDefaultSeverity(e){i.defaultSeverity=e}static setDefaultAction(e){i.defaultAction=e}static CLEAR_NOTIFICATIONS={action:"notificationLocking.clear"};static SHOW_NOTIFICATION={action:"notificationLocking.show"};static UPDATE_NOTIFICATION={action:"notificationLocking.update"};static DISMISS_NOTIFICATION={action:"notificationLocking.dismiss"};static LOCK_CAPABILITIES={action:"notificationLocking.lock"};static UNLOCK_CAPABILITIES={action:"notificationLocking.unlock"}};var _=Object.freeze([I.NOTIFICATION,I.WARN,I.BLOCK]);function Rt(i){return i==null?"":String(i)}function _t(i,e){if(typeof i!="boolean")throw new TypeError(`Invalid ${e} "${i}" \u2014 expected a boolean`);return i}function ge(i){let e=Rt(i).toUpperCase();if(!_.includes(e))throw new RangeError(`Invalid template notificationType "${i}" \u2014 expected NOTIFICATION, WARN, or BLOCK`);return e}var Xe=Object.freeze({[I.NOTIFICATION]:Object.freeze({showEvidence:!0,customNote:"",actions:[u.DISMISS],sticky:!1,timerSeconds:4,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[I.WARN]:Object.freeze({showEvidence:!0,customNote:"This site shows signals consistent with phishing. Verify the sender before entering credentials.",actions:[u.DISMISS],sticky:!1,timerSeconds:6,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[I.BLOCK]:Object.freeze({showEvidence:!0,customNote:"If you believe this is a mistake, contact your administrator.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!0,timerSeconds:0,requiredInput:!0,requiresITApproval:!1,lockCapabilities:[f.ALL],backdrop:{enabled:!0}})}),te=class i extends Z{constructor(e,n={}){super(!0,g.NOTIFICATION,""),this.notificationType=ge(e),this.enabled=!0,this.backdrop={enabled:!0},this.customNote="",this.actions=[u.DISMISS],this.sticky=!1,this.timerSeconds=0,this.requiredInput=!1,this.requiresITApproval=!1,n&&this.setConfig(n)}static create(e,n={}){return new i(e,n)}setConfig(e={}){for(let[n,c]of Object.entries(e))switch(n){case"showEvidence":this.setShowEvidence(c);break;case"customNote":this.setCustomNote(c);break;case"actions":this.setActions(c??[]);break;case"sticky":this.setSticky(c);break;case"timerSeconds":this.setTimerSeconds(c);break;case"requiredInput":this.setRequiredInput(c);break;case"requiresITApproval":this.setRequiresITApproval(c);break;case"lockCapabilities":this.setCapabilities(c??[]);break;case"backdrop":this.setBackdrop(c??{enabled:!0});break;default:throw new Error(`Unknown NotificationTemplate config key "${n}"`)}return this}setEnabled(e=!0){return this.enabled=_t(e,"enabled"),this}lockPage(){return this.addCapability(f.ALL)}unlockPage(){return this.clearCapabilities()}build(){let e=super.build();return delete e.action,delete e.requestId,delete e.url,delete e.title,delete e.description,delete e.actionLabels,delete e.severity,e.lockCapabilities=Array.isArray(this.lockCapabilities)&&this.lockCapabilities.length>0?[f.ALL]:[],e}toConfig(){return this.build()}toJSON(){return this.toConfig()}clone(){return new i(this.notificationType,this.toConfig())}},ee=new Map;function L(i){let e=ge(i);return ee.has(e)||ee.set(e,new te(e,Xe[e])),ee.get(e)}function Qe(){let i={};for(let e of _){let n=L(e);n.enabled&&(i[e]=n.toConfig())}return i}function Ze(i){let e=ge(i),n=new te(e,Xe[e]);return ee.set(e,n),n}var Pt=Object.freeze({REQUEST_INIT:"sekant.admin.requestInit",INIT:"sekant.admin.init",GENERATED:"sekant.admin.generated"}),Ft=Object.freeze({CHILD:"sekant-admin-options",PARENT:"iframe-test-parent"});function Ut(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function et(i={}){let{onInit:e=()=>{},messageTypes:n=Pt,sources:c=Ft,targetOrigin:a="*"}=i,l=!1;function p(){window.parent.postMessage({source:c.CHILD,type:n.REQUEST_INIT},a)}function r(C){window.parent.postMessage({source:c.CHILD,type:n.GENERATED,payload:C},a)}function k(C){let y=C.data;Ut(y)&&y.source===c.PARENT&&y.type===n.INIT&&e(y.payload,y)}function S(){l||(l=!0,window.addEventListener("message",k),p())}function E(){l&&(l=!1,window.removeEventListener("message",k))}return{requestInit:p,sendGenerated:r,start:S,destroy:E}}var Ae=typeof window<"u"&&window.self!==window.top,it=Je({eventSink:()=>{}}),Dt={[I.NOTIFICATION]:"Informational updates shown to users.",[I.WARN]:"Warnings for pages that show phishing-like signals.",[I.BLOCK]:"Blocking notifications for unsafe pages."},Bt={[I.NOTIFICATION]:"#1677ff",[I.WARN]:"#fa8c16",[I.BLOCK]:"#ff4d4f"},Ne=150,nt=60,si=Object.freeze({title:200,description:2e3,customNote:Ne,requestId:100,url:2048});function Te(i){return we(i)}var zt={[I.NOTIFICATION]:{title:"New notification",description:"Informational update from Sekant."},[I.WARN]:{title:"Suspicious activity detected",description:"This page shows phishing-like signals. Verify before entering credentials."},[I.BLOCK]:{title:"Unsafe page blocked",description:"Sekant has blocked this page because it is unsafe."}},Kt={[I.NOTIFICATION]:g.NOTIFICATION,[I.WARN]:g.SUSPICIOUS,[I.BLOCK]:g.UNSAFE},tt=document.getElementById("app"),x=null,ne=null;function ie(i,e){x&&(x.textContent=e,x.className=`tag${i==="ok"?" is-success":i==="warn"?" is-warning":""}`)}function st(){tt.innerHTML="";let i=document.createElement("section");i.className="section";let e=document.createElement("div");e.className="container is-max-desktop";let n=document.createElement("div");n.className="box";let c=document.createElement("h1");c.className="title is-4",c.textContent="Notification Template Configurator";let a=document.createElement("p");a.className="subtitle is-6",a.textContent="Configure per-notification-type templates (all options except title & description). Press Show to preview a card against the real notification controller.";let l=document.createElement("div");l.className="level",x=document.createElement("span"),x.className="tag",x.textContent=Ae?"Waiting for console\u2026":"Standalone";let p=document.createElement("button");p.type="button",p.className="button is-primary",p.textContent="Generate",p.addEventListener("click",Ht);let r=document.createElement("div");r.className="level-left";let k=document.createElement("div");k.className="level-right",k.appendChild(x),k.appendChild(p),l.appendChild(r),l.appendChild(k),n.appendChild(c),n.appendChild(a),n.appendChild(l),e.appendChild(n);let S=document.createElement("div");S.id="templateCards",S.className="columns is-multiline";for(let E of _){if(E===I.NOTIFICATION)continue;let C=document.createElement("div");C.className="column",C.appendChild(jt(E)),S.appendChild(C)}e.appendChild(S),i.appendChild(e),tt.appendChild(i)}function jt(i){let e=document.createElement("div");return e.className="box",e.dataset.notificationType=i,e.style.borderLeft=`4px solid ${Bt[i]??"#9ca3af"}`,e.innerHTML=`
    <div class="card-head">
      <div>
        <h2 class="title is-5">${i}</h2>
        <p class="help">${Dt[i]??""}</p>
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
      <label class="checkbox" title="Checked = show the evidence (risk description) box; unchecked = compact notification">
        <input data-field="showEvidence" type="checkbox" /> Show evidence (risk description)
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
  `,Vt(e,i),Oe(e,i),e}function Oe(i,e){let n=L(e).toConfig();i.querySelector('[data-field="showEvidence"]').checked=n.showEvidence!==!1,i.querySelector('[data-field="customNote"]').value=n.customNote,i.querySelector('[data-field="timerSeconds"]').value=n.timerSeconds,i.querySelector('[data-field="sticky"]').checked=n.sticky,i.querySelector('[data-field="lock"]').checked=(n.lockCapabilities??[]).length>0,i.querySelector('[data-field="backdrop"]').checked=n.backdrop?.enabled??!0,i.querySelector('[data-field="requiredInput"]').checked=n.requiredInput,i.querySelector('[data-field="requiresITApproval"]').checked=n.requiresITApproval;for(let c of i.querySelectorAll("[data-action]"))c.checked=n.actions.includes(c.dataset.action)}function Vt(i,e){let n=()=>L(e),c={showEvidence:a=>n().setShowEvidence(a.checked),customNote:a=>{let l=a.value.slice(0,Ne);a.value!==l&&(a.value=l),n().setCustomNote(l)},timerSeconds:a=>{let l=Number(a.value||0),p=Math.min(nt,Math.max(0,l));p!==l&&(a.value=String(p)),n().setTimerSeconds(p)},sticky:a=>n().setSticky(a.checked),lock:a=>{a.checked?n().lockPage():n().unlockPage()},backdrop:a=>n().setBackdropEnabled(a.checked),requiredInput:a=>n().setRequiredInput(a.checked),requiresITApproval:a=>n().setRequiresITApproval(a.checked)};for(let[a,l]of Object.entries(c)){let p=i.querySelector(`[data-field="${a}"]`);p.addEventListener("input",()=>{try{l(p)}catch(r){console.error(`[notificationOptions] ${e}.${a}:`,r)}})}for(let a of i.querySelectorAll("[data-action]"))a.addEventListener("change",()=>{a.checked?n().addAction(a.dataset.action):n().removeAction(a.dataset.action)});i.querySelector("[data-show]").addEventListener("click",()=>{$t(e)}),i.querySelector("[data-reset]").addEventListener("click",()=>{Ze(e),Oe(i,e)})}function $t(i){if(!L(i).enabled)return;let e=zt[i]??{title:i,description:""},n=Te({...L(i).build(),severity:Kt[i]??g.NOTIFICATION,title:e.title,description:e.description,requestId:`template-${i}-${Date.now()}`,action:"notificationLocking.show"});it.show(n)}function Wt(){for(let i of _){let e=document.querySelector(`[data-notificationType="${i}"]`);e&&Oe(e,i)}}function Ht(){let i=Qe();for(let e of Object.keys(i)){let n=Te(i[e]);L(e).setConfig(n),i[e]=n}if(Wt(),!Ae||!ne){ie("warn","Not embedded \u2014 generated config logged to console"),console.log("[notificationOptions] generated config",JSON.stringify(i,null,2));return}ne.sendGenerated(i),ie("ok","Saved to console"),window.setTimeout(()=>ie("ok","Synced with console"),1200)}function Yt(i){let e=i&&typeof i=="object"&&!Array.isArray(i)?i:{};for(let n of _){let c=e[n],a=L(n);if(c&&typeof c=="object")try{a.setConfig(Te(c))}catch(l){console.warn(`[notificationOptions] invalid ${n} config from console:`,l)}a.setEnabled(!0)}}function Gt(){Ae&&(ne=et({onInit:i=>{Yt(i),st(),ie("ok","Synced with console")}}),ne.start())}st();Gt();window.addEventListener("beforeunload",()=>{it.destroy()});
