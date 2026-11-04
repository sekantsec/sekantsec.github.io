var A=Object.freeze({NOTIFICATION:"NOTIFICATION",SUSPICIOUS:"SUSPICIOUS",UNSAFE:"UNSAFE"}),k=Object.freeze({NOTIFICATION:"NOTIFICATION",WARN:"WARN",BLOCK:"BLOCK",MODAL:"MODAL"}),u=Object.freeze({DISMISS:"DISMISS",MARK_SAFE:"MARK_SAFE",UNLOCK:"UNLOCK"}),m=Object.freeze({KEYBOARD_INPUT:"KEYBOARD_INPUT",MOUSE_CLICKS:"MOUSE_CLICKS",CUT_COPY:"CUT_COPY",PASTE:"PASTE",DRAG_DROP:"DRAG_DROP",FILE_SELECTION:"FILE_SELECTION",FOCUS_INPUTS:"FOCUS_INPUTS",ALL:"ALL"}),te=Object.freeze([m.KEYBOARD_INPUT,m.MOUSE_CLICKS,m.CUT_COPY,m.PASTE,m.DRAG_DROP,m.FILE_SELECTION,m.FOCUS_INPUTS]),Te=Object.freeze({TOP:"top",CENTER:"center",BOTTOM:"bottom"}),we=Object.freeze({LEFT:"left",MIDDLE:"middle",RIGHT:"right"}),Ne=Object.freeze({[u.DISMISS]:"Dismiss",[u.MARK_SAFE]:"Mark Safe",[u.UNLOCK]:"Unlock"}),Mt='<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path></svg>',ee=10;var qt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,Rt=Object.freeze(["action_clicked"]),Ae=Object.freeze({enabled:!0,opacity:.6}),Dt=Object.freeze({visible:!1,showEvidence:!0,severity:"NOTIFICATION",verticalPosition:Te.CENTER,horizontalPosition:we.MIDDLE,title:"",description:"",customNote:"",actions:[u.DISMISS],actionLabels:Ne,lockCapabilities:[],stickyRequested:!1,requiredInput:!1,requiresITApproval:!1,itRequestRaised:!1,failureMessage:"",sticky:!1,timerSeconds:0,timerDeadlineMs:null,requestId:null,eventContext:null,activeCapabilities:[],timerComplete:!0,inputValid:!0}),Ze=Object.freeze({NOTIFICATION:{key:"NOTIFICATION",label:"NOTIFICATION"},WARNING:{key:"SUSPICIOUS",label:"SUSPICIOUS"},SUSPICIOUS:{key:"SUSPICIOUS",label:"SUSPICIOUS"},UNSAFE:{key:"UNSAFE",label:"UNSAFE"}});function v(i){return i==null?"":String(i)}function Oe(i,e=.6){let s=Number(i);return Number.isFinite(s)?Math.min(1,Math.max(0,s)):e}function Le(i){let e=v(i||"NOTIFICATION").toUpperCase();return Ze[e]||Ze.NOTIFICATION}function xe(i){return Object.values(Te).includes(i)?i:Te.CENTER}function Pe(i){return Object.values(we).includes(i)?i:we.MIDDLE}function _t(i){try{return new URL(i).hostname.toLowerCase()}catch{return""}}function Me(i){if(!i||typeof i!="object")return{};let e={...i},s=(r,l)=>{let p=v(r);return p.length>l?p.slice(0,l):p},c={title:200,description:2e3,customNote:150,requestId:100,url:2048};for(let[r,l]of Object.entries(c))e[r]!==void 0&&e[r]!==null&&(e[r]=s(e[r],l));if(e.showEvidence!==void 0&&typeof e.showEvidence!="boolean"&&(e.showEvidence=!0),e.severity!==void 0&&(e.severity=Le(e.severity).key),e.verticalPosition!==void 0&&(e.verticalPosition=xe(e.verticalPosition)),e.horizontalPosition!==void 0&&(e.horizontalPosition=Pe(e.horizontalPosition)),e.actions!==void 0&&(e.actions=tt(e.actions)),e.actionLabels!==void 0&&(e.actionLabels=typeof e.actionLabels=="object"&&e.actionLabels!==null&&!Array.isArray(e.actionLabels)?Object.fromEntries(Object.entries(e.actionLabels).map(([r,l])=>[r,s(l,40)])):{}),e.lockCapabilities!==void 0){let r=Array.isArray(e.lockCapabilities)?e.lockCapabilities:[];e.lockCapabilities=[...new Set(r.filter(l=>Object.values(m).includes(l)))]}if(e.timerSeconds!==void 0){let r=Number(e.timerSeconds);e.timerSeconds=Number.isFinite(r)?Math.min(60,Math.max(0,r)):0}for(let r of["sticky","requiredInput","requiresITApproval"])e[r]!==void 0&&typeof e[r]!="boolean"&&(e[r]=!1);if(e.backdrop!==void 0&&(e.backdrop=typeof e.backdrop=="object"&&e.backdrop!==null&&!Array.isArray(e.backdrop)?{...e.backdrop}:{},e.backdrop.opacity!==void 0&&(e.backdrop.opacity=Oe(e.backdrop.opacity)),e.backdrop.enabled!==void 0&&typeof e.backdrop.enabled!="boolean"&&(e.backdrop.enabled=!0)),e.eventContext!==void 0){let r=e.eventContext;if(r&&typeof r=="object"&&!Array.isArray(r)){let l={};Number.isInteger(r.tabId)&&r.tabId>0&&(l.tabId=r.tabId),typeof r.tabUrl=="string"&&(l.tabUrl=s(r.tabUrl,2048)),typeof r.eventType=="string"&&(l.eventType=s(r.eventType,32)),Number.isFinite(r.timestamp)&&(l.timestamp=r.timestamp),Object.keys(l).length>0?e.eventContext=l:delete e.eventContext}else delete e.eventContext}return e}function et(i){if(typeof i!="string"||!i.trim())return!0;let e=_t(i);if(!e)return!0;let s=(globalThis.location?.hostname||"").toLowerCase();return e===s}function Ft(i){return i==="UNSAFE"?"#ff6685":i==="SUSPICIOUS"?"#ffdd57":"#ffffff"}function Ut(i){let e=[u.MARK_SAFE,u.DISMISS,u.UNLOCK];return[...i].sort((s,c)=>e.indexOf(s)-e.indexOf(c))}function tt(i){let e=Array.isArray(i)?i:[u.DISMISS],s=[];for(let c of e){let r=c===u.UNLOCK?u.DISMISS:c;(r===u.DISMISS||r===u.MARK_SAFE)&&!s.includes(r)&&s.push(r)}return s.includes(u.DISMISS)||s.unshift(u.DISMISS),s.slice(0,2)}function j(i){let e=Array.isArray(i)?i:[];return e.includes(m.ALL)?[...te]:e.filter(s=>te.includes(s))}function zt(i,e={}){let s=Number(e.timerSeconds),c=Number.isFinite(s)?Math.max(0,s):0,r=e.notificationType===k.MODAL,l=r?!1:!!(e.requiredInput??i.requiredInput),p=r?!1:!!e.requiresITApproval,a=p||l,I=r||p?[...te]:j(e.lockCapabilities),y=I.length>0,S=Le(e.severity||i.severity||"NOTIFICATION"),C=Date.now(),E=!!e.sticky,n=r||y||a||E;return{...i,visible:!0,showEvidence:e.showEvidence??i.showEvidence??!0,severity:S.key,severityLabel:S.label,verticalPosition:xe(e.verticalPosition),horizontalPosition:Pe(e.horizontalPosition),title:v(e.title),description:v(e.description),customNote:v(e.customNote),actions:r?[]:tt(e.actions),actionLabels:{...Ne,...Object.fromEntries(Object.entries(e.actionLabels||{}).map(([h,K])=>[h,v(K)]))},lockCapabilities:I,stickyRequested:E,requiredInput:a,requiresITApproval:p,itRequestRaised:!1,failureMessage:"",sticky:n,timerSeconds:c,timerDeadlineMs:n?c>0?C+c*1e3:null:C+Math.max(c,3)*1e3,timerComplete:c<=0,inputValid:!a&&!p,requestId:v(e.requestId)||null,eventContext:e.eventContext&&typeof e.eventContext=="object"?{...e.eventContext}:null,activeCapabilities:[...new Set([...i.activeCapabilities||[],...I])],backdrop:{...Ae,...e.backdrop||{},opacity:Oe(e?.backdrop?.opacity,Ae.opacity)}}}var Bt=`
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

/* Position: the wrap is a full-viewport flex container, so verticalPosition
   maps to align-items (TOP/CENTER/BOTTOM) and horizontalPosition maps to
   justify-content (LEFT/MIDDLE/RIGHT). Defaults are CENTER + MIDDLE, which
   reproduce the original centered panel. The wrap already pads 1.25rem, so a
   TOP/LEFT/BOTTOM/RIGHT-aligned panel stays off the viewport edges. */
.sk-nl-wrap.sk-nl-pos-top {
  align-items: flex-start;
}

.sk-nl-wrap.sk-nl-pos-center {
  align-items: center;
}

.sk-nl-wrap.sk-nl-pos-bottom {
  align-items: flex-end;
}

.sk-nl-wrap.sk-nl-pos-left {
  justify-content: flex-start;
}

.sk-nl-wrap.sk-nl-pos-middle {
  justify-content: center;
}

.sk-nl-wrap.sk-nl-pos-right {
  justify-content: flex-end;
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

/* Inline failure notice (e.g. IT request could not be raised) */
.sk-nl-failure {
  display: none;
  margin-top: 0.5rem;
  padding: 0.55rem 0.7rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 102, 133, 0.5);
  background: rgba(255, 102, 133, 0.12);
  color: #ffb3c0;
  font-size: 0.85em;
  line-height: 1.4;
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
`;function it(i={}){let e=typeof i.eventSink=="function"?i.eventSink:()=>{},s=typeof i.loadEmail=="function"?i.loadEmail:null,c=typeof i.saveEmail=="function"?i.saveEmail:null,r=i.production===!0,l=null,p=null,a=null,I=null,y=null,S=null,C=null,E=!1,n={...Dt},h=new Set,K=new Map,V=new Map,T=null;function w(t,o={}){if(r&&!Rt.includes(t))return;let d={type:"notificationLocking.event",event:t,requestId:n.requestId,timestamp:Date.now(),...n.eventContext&&typeof n.eventContext=="object"?{eventContext:n.eventContext}:{},...o};try{e(d)}catch{}}function Ue(){if(l&&document.documentElement.contains(l))return;l=document.createElement("div"),l.id=`sekant-notification-locking-${Math.random().toString(36).slice(2,9)}`,l.style.setProperty("all","initial","important"),l.style.setProperty("position","fixed","important"),l.style.setProperty("inset","0","important"),l.style.setProperty("z-index","2147483647","important"),l.style.setProperty("pointer-events","none","important"),l.style.setProperty("font-size","clamp(16px, calc(0.25vw + 15px), 20px)","important"),l.style.setProperty("line-height","1.4","important"),l.style.setProperty("font-family",'Avenir Next, Helvetica, "Segoe UI", Arial, sans-serif',"important"),l.style.setProperty("--sk-nl-screen-w",`${window.screen?.width||window.innerWidth}px`),p=l.attachShadow({mode:"closed"});let t=document.createElement("style");t.textContent=Bt;let o=document.createElement("div");o.className="sk-nl-root";let d=document.createElement("div");d.className="sk-nl-backdrop";let f=document.createElement("div");f.className="sk-nl-wrap";let b=document.createElement("div");b.className="sk-nl-panel sk-nl-modal sk-nl-severity-NOTIFICATION";let g=document.createElement("div");g.className="sk-nl-header";let N=document.createElement("span");N.className="sk-nl-shield sk-nl-severity-text",N.innerHTML=Mt;let G=document.createElement("span");G.className="sk-nl-severity-text",G.textContent="Sekant Web Security";let me=document.createElement("span");me.className="sk-nl-type-chip sk-nl-severity-text",g.appendChild(N),g.appendChild(G),g.appendChild(me);let he=document.createElement("div");he.className="sk-nl-title";let be=ze("sk-nl-description"),ke=ze("sk-nl-custom-note"),O=document.createElement("div");O.className="sk-nl-input-wrap";let Y=document.createElement("div");Y.className="sk-nl-note",Y.textContent="Enter your work email and reason to request IT approval.";let q=document.createElement("input");q.className="sk-nl-input sk-nl-email",q.type="email",q.autocomplete="email",q.placeholder="you@company.com";let J=document.createElement("label");J.className="sk-nl-input-label",J.textContent=`Reason (min ${ee} characters)`;let X=document.createElement("input");X.className="sk-nl-input",X.type="text";let Ie=document.createElement("div");Ie.className="sk-nl-input-error",O.appendChild(Y),O.appendChild(q),O.appendChild(J),O.appendChild(X),O.appendChild(Ie);let ve=document.createElement("div");ve.className="sk-nl-actions";let z=document.createElement("div");z.className="sk-nl-progress",z.classList.add("sk-nl-progress-edge");let Ce=document.createElement("div");Ce.className="sk-nl-progress-bar",z.appendChild(Ce),b.appendChild(g),b.appendChild(he),b.appendChild(be.container),b.appendChild(ke.container);let Q=document.createElement("div");Q.className="sk-nl-failure",Q.style.display="none",b.appendChild(Q),b.appendChild(O),b.appendChild(ve),b.appendChild(z),f.appendChild(b),o.appendChild(d),o.appendChild(f);let Z=document.createElement("div");Z.className="sk-nl-confirm-overlay";let B=document.createElement("div");B.className="sk-nl-panel sk-nl-confirm";let ye=document.createElement("div");ye.className="sk-nl-confirm-title",ye.textContent="IT request raised";let Se=document.createElement("div");Se.className="sk-nl-confirm-message",Se.textContent="Please check your email or the IT Request Tracker for an update from IT in some time.",B.appendChild(ye),B.appendChild(Se),Z.appendChild(B),o.appendChild(Z),p.appendChild(t),p.appendChild(o),document.documentElement.appendChild(l),a={backdrop:d,wrap:f,panel:b,shield:N,headerText:G,typeChip:me,title:he,descriptionSection:be,customNoteSection:ke,descriptionValue:be.value,customNoteValue:ke.value,failureNote:Q,inputWrap:O,note:Y,email:q,inputLabel:J,input:X,inputError:Ie,actions:ve,progress:z,progressBar:Ce,confirmOverlay:Z,confirmDialog:B},ut()}function ze(t){let o=document.createElement("div");o.className="sk-nl-section";let d=document.createElement("div");return d.className=`sk-nl-section-value ${t}`,o.appendChild(d),{container:o,value:d}}function ut(){let t=()=>{le(),F()};a.input.addEventListener("input",t),a.email.addEventListener("input",t)}function pt(){I||(I=new MutationObserver(()=>{n.visible&&(!l||!document.documentElement.contains(l))&&Be()}),I.observe(document.documentElement,{childList:!0})),y||(y=setInterval(()=>{n.visible&&(!l||!document.documentElement.contains(l))&&Be()},1e3))}function Be(){l=null,p=null,a=null,Ue(),P()}function _(){C&&(clearInterval(C),C=null)}function ae(){_(),E=n.timerComplete,n.timerDeadlineMs&&(C=setInterval(()=>{je()},100),je())}function je(){let t=Date.now();if(!n.timerComplete&&n.timerDeadlineMs!==null&&t>=n.timerDeadlineMs&&(n.timerComplete=!0,E||(E=!0,w("timer_complete",{reason:"actions_enabled"})),F()),Ke(t),!n.sticky&&n.timerDeadlineMs!==null&&t>=n.timerDeadlineMs){w("auto_dismissed",{reason:"timer_elapsed"}),M({reason:"timer_elapsed"});return}n.timerComplete&&(n.sticky||n.timerDeadlineMs===null)&&_()}function Ke(t=Date.now()){let o=Math.max(0,(n.sticky?n.timerSeconds:Math.max(n.timerSeconds,3))*1e3);if(o<=0||n.timerDeadlineMs===null){a.progress.style.display="none";return}let d=Math.max(0,n.timerDeadlineMs-t),f=Math.max(0,Math.min(1,d/o)),b=`${Math.round(f*100)}%`;a.progress.style.display="block",a.progressBar.style.width=b}function le(){let t=(a.input.value||"").trim(),o=(a.email.value||"").trim(),d=n.requiredInput||n.requiresITApproval,f=n.requiresITApproval,b=!d||t.length>=ee,g=!f||qt.test(o);if(n.inputValid=b&&g,!d&&!f){a.inputError.classList.remove("show");return}if(n.inputValid){a.inputError.classList.remove("show");return}let N=[];f&&!g&&N.push("a valid work email"),b||N.push(`a reason of at least ${ee} characters`),a.inputError.textContent=`Enter ${N.join(" and ")} to proceed.`,a.inputError.classList.add("show")}function $(t){return n.sticky&&!n.timerComplete?!1:t===u.MARK_SAFE||t===u.UNLOCK?n.requiredInput||n.requiresITApproval?n.inputValid:!0:n.requiredInput?n.inputValid:!0}function F(){for(let t of a.actions.querySelectorAll("button[data-action]")){let o=t.getAttribute("data-action");t.disabled=!$(o)}}function ft(t){let o=document.createElement("button");return o.className=`sk-nl-btn ${t.toLowerCase().replace("_","-")}`,o.setAttribute("data-action",t),o.textContent=v(n.actionLabels[t]||Ne[t]||t),o.addEventListener("click",()=>{ce(t,{reason:"user_action"})}),o.disabled=!$(t),o}function Ve(){return h.size>0?u.UNLOCK:u.DISMISS}function mt(){if(a.actions.textContent="",n.actions.length===0){a.actions.style.display="none";return}if(a.actions.style.display="flex",n.requiresITApproval){let t=document.createElement("button");t.className="sk-nl-btn unlock",t.setAttribute("data-action",u.UNLOCK),t.textContent="Submit IT request",t.addEventListener("click",()=>ce(u.UNLOCK,{reason:"user_action"})),t.disabled=!$(u.UNLOCK),a.actions.appendChild(t);return}for(let t of Ut(n.actions)){let o=t===u.DISMISS?Ve():t;a.actions.appendChild(ft(o))}}function ht(t){t.className=t.className.split(" ").filter(o=>!o.startsWith("sk-nl-severity-")).concat(`sk-nl-severity-${n.severity}`).join(" ")}function bt(t){t.className=t.className.split(" ").filter(o=>!o.startsWith("sk-nl-pos-")).concat(`sk-nl-pos-${n.verticalPosition}`,`sk-nl-pos-${n.horizontalPosition}`).join(" ")}function kt(){let t=Ft(n.severity);a.panel.style.borderColor=t,a.panel.style.setProperty("--sk-nl-accent",t),a.shield.style.color=t,a.headerText.style.color=t,a.typeChip.style.color=t,a.typeChip.style.borderColor=t,a.progressBar.style.backgroundColor=t}function It(){let t=n.requiredInput||n.requiresITApproval;if(a.inputWrap.style.display=t?"grid":"none",!t){a.input.value="",a.email.value="",a.inputError.classList.remove("show");return}a.note.style.display=n.requiresITApproval?"block":"none",a.email.style.display=n.requiresITApproval?"block":"none",a.inputLabel.textContent=`Reason (min ${ee} characters)`,a.input.placeholder="Enter reason",n.requiresITApproval&&Et(),le()}function ce(t,{reason:o="user_action"}={}){if(!$(t)||!a)return!1;let d=(a.input.value||"").trim(),f=n.requiresITApproval?(a.email.value||"").trim():"";return n.requiresITApproval&&(t===u.MARK_SAFE||t===u.UNLOCK)?(vt(t,{email:f,rationale:d}),!0):(Ct(t,{reason:o,inputValue:d}),!0)}function vt(t,{email:o="",rationale:d=""}={}){St(o),w("action_clicked",{action:t,email:o,rationale:d}),_(),n.itRequestRaised=!0,P()}function $e({message:t="IT request failed. Please retry your steps."}={}){n.itRequestRaised=!1,n.failureMessage=v(t),a&&(P(),F())}function Ct(t,{reason:o="user_action",inputValue:d=""}={}){if(w("action_clicked",{action:t,rationale:d}),t===u.UNLOCK){fe({unlockCapabilities:[m.ALL]}),M({reason:o,action:t});return}(t===u.DISMISS||t===u.MARK_SAFE)&&M({reason:o,action:t})}let H="",de=null;function yt(){return de||(de=(async()=>{if(s)try{let t=await s();return typeof t=="string"?t:""}catch{return""}return""})().catch(()=>"")),de}async function St(t){let o=v(t).trim();if(H=o,c)try{await c(o);return}catch{}}function Et(){if(H){a&&!a.email.value&&(a.email.value=H);return}yt().then(t=>{t&&(H=t,a&&n.visible&&n.requiresITApproval&&!a.email.value&&(a.email.value=t,le(),F()))})}function gt(){let t=h.size>0;return n.visible&&!t&&(!n.sticky||n.timerComplete)}function Tt(){if(S)return;let t=o=>{gt()&&(!l||!a||ue(o)||ce(u.DISMISS,{reason:"outside_click"}))};window.addEventListener("click",t,{capture:!0,passive:!0}),S=()=>{window.removeEventListener("click",t,{capture:!0,passive:!0}),S=null}}function P(){if(!n.visible)return;if(Ue(),pt(),a.backdrop.style.background=`rgba(0, 0, 0, ${n.backdrop.opacity})`,a.backdrop.classList.toggle("show",!!n.backdrop.enabled),n.itRequestRaised){a.wrap.classList.remove("show"),a.confirmOverlay.classList.add("show");return}a.confirmOverlay.classList.remove("show"),a.wrap.classList.add("show"),bt(a.wrap),ht(a.panel),kt(),a.typeChip.textContent=n.severityLabel||"NOTIFICATION",a.title.textContent=n.title||"",a.title.style.display=n.title?"block":"none",a.descriptionValue.textContent=n.description||"",a.customNoteValue.textContent=n.customNote||"";let t=n.failureMessage||"";a.failureNote.textContent=t,a.failureNote.style.display=t?"block":"none";let o=n.showEvidence&&!!n.description;a.descriptionSection.container.style.display=o?"block":"none",a.customNoteSection.container.style.display=n.customNote?"block":"none",It(),mt(),F(),Ke()}function wt(){if(!a||!n.visible)return{visible:!1};let t=a.panel,o=getComputedStyle(t),d=t.getBoundingClientRect();return{visible:!0,showEvidence:n.showEvidence,severity:n.severity,verticalPosition:n.verticalPosition,horizontalPosition:n.horizontalPosition,width:d.width,height:d.height,fontSize:o.fontSize,lineHeight:o.lineHeight,borderColor:o.borderColor}}function ue(t){if(!l)return!1;let o=typeof t.composedPath=="function"?t.composedPath():[];return Array.isArray(o)&&o.includes(l)}function U(t,o){let d=f=>{o()&&(ue(f)||(f.preventDefault(),f.stopImmediatePropagation()))};for(let f of t)window.addEventListener(f,d,{capture:!0,passive:!1});return()=>{for(let f of t)window.removeEventListener(f,d,{capture:!0,passive:!1})}}function At(t){if(K.has(t))return;let o=()=>{};if(t===m.KEYBOARD_INPUT)o=U(["keydown","keypress","keyup"],()=>h.has(t));else if(t===m.MOUSE_CLICKS)o=U(["pointerdown","click","dblclick","contextmenu","auxclick","mousedown","mouseup"],()=>h.has(t));else if(t===m.CUT_COPY)o=U(["copy","cut"],()=>h.has(t));else if(t===m.PASTE)o=U(["paste"],()=>h.has(t));else if(t===m.DRAG_DROP)o=U(["dragstart","dragover","drop"],()=>h.has(t));else if(t===m.FOCUS_INPUTS){let d=f=>{if(!h.has(t)||ue(f))return;let b=f.target;!b||!(b.tagName==="INPUT"||b.tagName==="TEXTAREA"||b.isContentEditable)||(f.preventDefault(),f.stopImmediatePropagation(),b.blur?.())};window.addEventListener("focusin",d,!0),o=()=>window.removeEventListener("focusin",d,!0)}else if(t===m.FILE_SELECTION){let d=f=>{if(!h.has(t))return;let b=f.target;!(b instanceof Element)||!b.closest('input[type="file"]')||(f.preventDefault(),f.stopImmediatePropagation())};window.addEventListener("mousedown",d,{capture:!0,passive:!1}),window.addEventListener("click",d,{capture:!0,passive:!1}),window.addEventListener("change",d,{capture:!0,passive:!1}),o=()=>{window.removeEventListener("mousedown",d,{capture:!0,passive:!1}),window.removeEventListener("click",d,{capture:!0,passive:!1}),window.removeEventListener("change",d,{capture:!0,passive:!1})}}K.set(t,o)}function He(){let t=document.querySelectorAll('input[type="file"]');for(let o of t)V.has(o)||V.set(o,{disabled:o.disabled}),o.disabled=!0}function Nt(){for(let[t,o]of V.entries())t&&t.isConnected&&(t.disabled=!!o.disabled);V.clear()}function We(){if(h.has(m.FILE_SELECTION)){He(),T||(T=new MutationObserver(()=>{h.has(m.FILE_SELECTION)&&He()}),T.observe(document.documentElement,{childList:!0,subtree:!0}));return}T&&(T.disconnect(),T=null),Nt()}function Ge(t=[]){let o=j(t);for(let d of o)At(d),h.add(d);We(),n.activeCapabilities=[...h]}function Ye(){if(n.requiresITApproval)for(let d of te)h.add(d);let t=h.size>0;n.lockCapabilities=[...h],n.activeCapabilities=[...h];let o=n.sticky;n.sticky=t||!!n.requiredInput||!!n.requiresITApproval||!!n.stickyRequested,n.sticky!==o&&(n.sticky?n.timerDeadlineMs=n.timerSeconds>0?Date.now()+n.timerSeconds*1e3:null:n.visible&&(n.timerDeadlineMs=Date.now()+Math.max(n.timerSeconds,3)*1e3))}function pe(t=[]){let o=j(t);for(let d of o)h.delete(d);We(),n.activeCapabilities=[...h]}function W(t={}){if(!et(t.url))return;let o=new Set(h);n=zt(n,t);for(let d of o)h.delete(d);Ge(n.lockCapabilities),n.activeCapabilities=[...h],P(),ae(),w("shown",{showEvidence:n.showEvidence,actions:n.actions,primary:Ve(),requiresITApproval:n.requiresITApproval,lockCapabilities:n.lockCapabilities})}function Je(t={}){if(!et(t.url))return;if(!n.visible){W(t);return}let o={...n,...t,requestId:t.requestId??n.requestId,lockCapabilities:t.lockCapabilities??n.lockCapabilities,actions:t.actions??n.actions,actionLabels:t.actionLabels??n.actionLabels,requiredInput:t.requiredInput??n.requiredInput,requiresITApproval:t.requiresITApproval??n.requiresITApproval,timerSeconds:t.timerSeconds??n.timerSeconds,sticky:t.sticky??n.sticky,backdrop:t.backdrop??n.backdrop};W(o),w("updated",{requestId:n.requestId})}function M(t={}){_(),pe([m.ALL]),n.visible=!1,n.itRequestRaised=!1,n.timerDeadlineMs=null,l?.parentNode&&l.parentNode.removeChild(l),l=null,p=null,a=null,w("dismissed",t)}function Xe(t={}){let o=j(t.lockCapabilities);Ge(o),Ye(),n.visible&&(P(),ae()),w("lock_changed",{operation:"lock",lockCapabilities:o})}function fe(t={}){let o=j(t.unlockCapabilities);pe(o),Ye(),n.visible&&(P(),ae()),w("lock_changed",{operation:"unlock",unlockCapabilities:o})}function Qe(){M({reason:"clear"})}function Ot(){l?.style.setProperty("visibility","hidden","important")}function Lt(){l?.style.removeProperty("visibility")}function xt(t={}){let o=t.action;t=Me(t),o==="notificationLocking.show"?W(t):o==="notificationLocking.update"?Je(t):o==="notificationLocking.dismiss"?M({reason:"command"}):o==="notificationLocking.lock"?Xe(t):o==="notificationLocking.unlock"?fe(t):o==="notificationLocking.itRequestFailed"?$e(t):o==="notificationLocking.clear"?Qe():o==="notificationLocking.hideForCapture"?Ot():o==="notificationLocking.showAfterCapture"&&Lt()}Tt();function Pt(){_(),pe([m.ALL]),T&&(T.disconnect(),T=null),I&&(I.disconnect(),I=null),y&&(clearInterval(y),y=null),S&&S(),l?.parentNode&&l.parentNode.removeChild(l)}return{ACTIONS:u,CAPABILITIES:m,show:W,update:Je,dismiss:M,lock:Xe,unlock:fe,clear:Qe,showItRequestFailure:$e,handleCommand:xt,destroy:Pt,getLayoutSnapshot:wt,getState:()=>({...n,activeCapabilities:[...h]})}}function R(i,e){return typeof i=="boolean"?i:e}function Ee(i){return i===u.DISMISS||i===u.MARK_SAFE?i:null}function jt(i){return i===u.DISMISS||i===u.MARK_SAFE||i===u.UNLOCK?i:null}function ge(i){return Object.prototype.hasOwnProperty.call(m,i)?i:null}var ie=class i{constructor(e,s,c){this.showEvidence=e!==!1,this.severity=s??A.NOTIFICATION,this.title=c??""}static create(e={}){typeof e=="string"&&(e={title:e});let{title:s,severity:c,showEvidence:r}=e??{};return new i(typeof r=="boolean"?r:void 0,c??i.defaultSeverity??A.NOTIFICATION,s)}setTitle(e){return this.title=v(e),this}setDescription(e){return this.description=v(e),this}setCustomNote(e){return this.customNote=v(e),this}setRequestId(e){return this.requestId=e==null?null:v(e),this}setUrl(e){return this.url=e==null?void 0:v(e),this}addEventContext(e){return this.eventContext=e&&typeof e=="object"&&!Array.isArray(e)?{...e}:void 0,this}setShowEvidence(e){return this.showEvidence=R(e,!0),this}setSeverity(e){return this.severity=Le(e).key,this}setVerticalPosition(e){return this.verticalPosition=xe(e),this}setHorizontalPosition(e){return this.horizontalPosition=Pe(e),this}addAction(e){let s=Ee(e);return s===null?this:(this.actions===void 0&&(this.actions=[]),this.actions.includes(s)||this.actions.push(s),this)}removeAction(e){let s=Ee(e);return s===null?this:(this.actions!==void 0&&(this.actions=this.actions.filter(c=>c!==s)),this)}setActions(e=[]){return this.actions=[...new Set(e.map(Ee).filter(s=>s!==null))],this}clearActions(){return this.actions=[],this}setActionLabel(e,s){let c=jt(e);return c===null?this:(this.actionLabels={...this.actionLabels,[c]:v(s)},this)}enableMarkSafe(){return this.addAction(u.MARK_SAFE),this}addCapability(e){let s=ge(e);return s===null?this:(this.lockCapabilities===void 0&&(this.lockCapabilities=[]),this.lockCapabilities.includes(s)||this.lockCapabilities.push(s),this)}removeCapability(e){let s=ge(e);return s===null?this:(this.lockCapabilities!==void 0&&(this.lockCapabilities=this.lockCapabilities.filter(c=>c!==s)),this)}setCapabilities(e=[]){return this.lockCapabilities=[...new Set(e.map(ge).filter(s=>s!==null))],this}clearCapabilities(){return this.lockCapabilities=[],this}enableBlockPage(){return this.setCapabilities([m.ALL]),this}setTimerSeconds(e){let s=Number(e);return this.timerSeconds=Number.isFinite(s)?Math.max(0,s):0,this}setSticky(e=!0){return this.sticky=R(e,!1),this}setBackdrop({enabled:e,opacity:s}={}){return this.backdrop===void 0&&(this.backdrop={}),e!==void 0&&(this.backdrop.enabled=R(e,!0)),s!==void 0&&this.setBackdropOpacity(s),this}setBackdropEnabled(e=!0){return this.backdrop===void 0&&(this.backdrop={}),this.backdrop.enabled=R(e,!0),this}setBackdropOpacity(e){return this.backdrop===void 0&&(this.backdrop={}),this.backdrop.opacity=Oe(e,Ae.opacity),this}setRequiredInput(e=!0){return this.requiredInput=R(e,!1),this}setRequiresITApproval(e=!0){return this.requiresITApproval=R(e,!1),this}addIfValid(e,s){let c=this[s];return c==null||(Array.isArray(c)?c.length>0&&(e[s]=[...c]):c!==null&&typeof c=="object"?e[s]={...c}:e[s]=c),e}setDefaultOptions(e){this.defaultOptions=e??{}}build(){let e={showEvidence:this.showEvidence,severity:this.severity,title:this.title,...this.defaultOptions??{}};return this.addIfValid(e,"requestId"),this.addIfValid(e,"url"),this.addIfValid(e,"description"),this.addIfValid(e,"customNote"),this.addIfValid(e,"actions"),this.addIfValid(e,"timerSeconds"),this.addIfValid(e,"sticky"),this.addIfValid(e,"actionLabels"),this.addIfValid(e,"backdrop"),this.addIfValid(e,"lockCapabilities"),this.addIfValid(e,"requiredInput"),this.addIfValid(e,"requiresITApproval"),this.addIfValid(e,"eventContext"),this.addIfValid(e,"verticalPosition"),this.addIfValid(e,"horizontalPosition"),e}static setDefaultSeverity(e){i.defaultSeverity=e}static setDefaultAction(e){i.defaultAction=e}static CLEAR_NOTIFICATIONS={action:"notificationLocking.clear"};static SHOW_NOTIFICATION={action:"notificationLocking.show"};static UPDATE_NOTIFICATION={action:"notificationLocking.update"};static DISMISS_NOTIFICATION={action:"notificationLocking.dismiss"};static LOCK_CAPABILITIES={action:"notificationLocking.lock"};static UNLOCK_CAPABILITIES={action:"notificationLocking.unlock"}};var D=Object.freeze([k.NOTIFICATION,k.WARN,k.BLOCK]);function Kt(i){return i==null?"":String(i)}function Vt(i,e){if(typeof i!="boolean")throw new TypeError(`Invalid ${e} "${i}" \u2014 expected a boolean`);return i}function qe(i){let e=Kt(i).toUpperCase();if(!D.includes(e))throw new RangeError(`Invalid template notificationType "${i}" \u2014 expected NOTIFICATION, WARN, or BLOCK`);return e}var nt=Object.freeze({[k.NOTIFICATION]:Object.freeze({showEvidence:!0,customNote:"",actions:[u.DISMISS],sticky:!1,timerSeconds:4,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[k.WARN]:Object.freeze({showEvidence:!0,customNote:"If you believe this is a mistake, contact your administrator.",actions:[u.DISMISS],sticky:!1,timerSeconds:6,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[k.BLOCK]:Object.freeze({showEvidence:!0,customNote:"If you believe this is a mistake, contact your administrator.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!0,timerSeconds:0,requiredInput:!0,requiresITApproval:!1,lockCapabilities:[m.ALL],backdrop:{enabled:!0}})}),se=class i extends ie{constructor(e,s={}){super(!0,A.NOTIFICATION,""),this.notificationType=qe(e),this.enabled=!0,this.backdrop={enabled:!0},this.customNote="",this.actions=[u.DISMISS],this.sticky=!1,this.timerSeconds=0,this.requiredInput=!1,this.requiresITApproval=!1,s&&this.setConfig(s)}static create(e,s={}){return new i(e,s)}setConfig(e={}){for(let[s,c]of Object.entries(e))switch(s){case"showEvidence":this.setShowEvidence(c);break;case"customNote":this.setCustomNote(c);break;case"actions":this.setActions(c??[]);break;case"sticky":this.setSticky(c);break;case"timerSeconds":this.setTimerSeconds(c);break;case"requiredInput":this.setRequiredInput(c);break;case"requiresITApproval":this.setRequiresITApproval(c);break;case"lockCapabilities":this.setCapabilities(c??[]);break;case"backdrop":this.setBackdrop(c??{enabled:!0});break;default:throw new Error(`Unknown NotificationTemplate config key "${s}"`)}return this}setEnabled(e=!0){return this.enabled=Vt(e,"enabled"),this}lockPage(){return this.addCapability(m.ALL)}unlockPage(){return this.clearCapabilities()}build(){let e=super.build();return delete e.action,delete e.requestId,delete e.url,delete e.title,delete e.description,delete e.actionLabels,delete e.severity,e.lockCapabilities=Array.isArray(this.lockCapabilities)&&this.lockCapabilities.length>0?[m.ALL]:[],e}toConfig(){return this.build()}toJSON(){return this.toConfig()}clone(){return new i(this.notificationType,this.toConfig())}},ne=new Map;function L(i){let e=qe(i);return ne.has(e)||ne.set(e,new se(e,nt[e])),ne.get(e)}function st(){let i={};for(let e of D){let s=L(e);s.enabled&&(i[e]=s.toConfig())}return i}function ot(i){let e=qe(i),s=new se(e,nt[e]);return ne.set(e,s),s}var $t=Object.freeze({REQUEST_INIT:"sekant.admin.requestInit",INIT:"sekant.admin.init",GENERATED:"sekant.admin.generated"}),Ht=Object.freeze({CHILD:"sekant-admin-options",PARENT:"iframe-test-parent"});function Wt(i){return!!i&&typeof i=="object"&&!Array.isArray(i)}function rt(i={}){let{onInit:e=()=>{},messageTypes:s=$t,sources:c=Ht,targetOrigin:r="*"}=i,l=!1;function p(){window.parent.postMessage({source:c.CHILD,type:s.REQUEST_INIT},r)}function a(C){window.parent.postMessage({source:c.CHILD,type:s.GENERATED,payload:C},r)}function I(C){let E=C.data;Wt(E)&&E.source===c.PARENT&&E.type===s.INIT&&e(E.payload,E)}function y(){l||(l=!0,window.addEventListener("message",I),p())}function S(){l&&(l=!1,window.removeEventListener("message",I))}return{requestInit:p,sendGenerated:a,start:y,destroy:S}}var Re=typeof window<"u"&&window.self!==window.top,lt=it({eventSink:()=>{}}),Gt={[k.NOTIFICATION]:"Informational updates shown to users.",[k.WARN]:"Warnings for pages that show phishing-like signals.",[k.BLOCK]:"Blocking notifications for unsafe pages."},Yt={[k.NOTIFICATION]:"#1677ff",[k.WARN]:"#fa8c16",[k.BLOCK]:"#ff4d4f"},De=150,ct=60,fi=Object.freeze({title:200,description:2e3,customNote:De,requestId:100,url:2048});function _e(i){return Me(i)}var Jt={[k.NOTIFICATION]:{title:"New notification",description:"Informational update from Sekant."},[k.WARN]:{title:"Suspicious activity detected",description:"This page shows phishing-like signals. Verify before entering credentials."},[k.BLOCK]:{title:"Unsafe page blocked",description:"Sekant has blocked this page because it is unsafe."}},Xt={[k.NOTIFICATION]:A.NOTIFICATION,[k.WARN]:A.SUSPICIOUS,[k.BLOCK]:A.UNSAFE},at=document.getElementById("app"),x=null,re=null;function oe(i,e){x&&(x.textContent=e,x.className=`tag${i==="ok"?" is-success":i==="warn"?" is-warning":""}`)}function dt(){at.innerHTML="";let i=document.createElement("section");i.className="section";let e=document.createElement("div");e.className="container is-max-desktop";let s=document.createElement("div");s.className="box";let c=document.createElement("h1");c.className="title is-4",c.textContent="Notification Template Configurator";let r=document.createElement("p");r.className="subtitle is-6",r.textContent="Configure per-notification-type templates (all options except title & description). Press Show to preview a card against the real notification controller.";let l=document.createElement("div");l.className="level",x=document.createElement("span"),x.className="tag",x.textContent=Re?"Waiting for console\u2026":"Standalone";let p=document.createElement("button");p.type="button",p.className="button is-primary",p.textContent="Generate",p.addEventListener("click",ii);let a=document.createElement("div");a.className="level-left";let I=document.createElement("div");I.className="level-right",I.appendChild(x),I.appendChild(p),l.appendChild(a),l.appendChild(I),s.appendChild(c),s.appendChild(r),s.appendChild(l),e.appendChild(s);let y=document.createElement("div");y.id="templateCards",y.className="columns is-multiline";for(let S of D){if(S===k.NOTIFICATION)continue;let C=document.createElement("div");C.className="column",C.appendChild(Qt(S)),y.appendChild(C)}e.appendChild(y),i.appendChild(e),at.appendChild(i)}function Qt(i){let e=document.createElement("div");return e.className="box",e.dataset.notificationType=i,e.style.borderLeft=`4px solid ${Yt[i]??"#9ca3af"}`,e.innerHTML=`
    <div class="card-head">
      <div>
        <h2 class="title is-5">${i}</h2>
        <p class="help">${Gt[i]??""}</p>
      </div>
    </div>

    <div class="field">
      <label class="label">Custom Note</label>
      <div class="control">
        <textarea class="textarea" data-field="customNote" maxlength="${De}" placeholder="Shown under the title when non-empty"></textarea>
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
        <input class="input" data-field="timerSeconds" type="number" min="0" max="${ct}" step="1" />
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
  `,Zt(e,i),Fe(e,i),e}function Fe(i,e){let s=L(e).toConfig();i.querySelector('[data-field="showEvidence"]').checked=s.showEvidence!==!1,i.querySelector('[data-field="customNote"]').value=s.customNote,i.querySelector('[data-field="timerSeconds"]').value=s.timerSeconds,i.querySelector('[data-field="sticky"]').checked=s.sticky,i.querySelector('[data-field="lock"]').checked=(s.lockCapabilities??[]).length>0,i.querySelector('[data-field="backdrop"]').checked=s.backdrop?.enabled??!0,i.querySelector('[data-field="requiredInput"]').checked=s.requiredInput,i.querySelector('[data-field="requiresITApproval"]').checked=s.requiresITApproval;for(let c of i.querySelectorAll("[data-action]"))c.checked=s.actions.includes(c.dataset.action)}function Zt(i,e){let s=()=>L(e),c={showEvidence:r=>s().setShowEvidence(r.checked),customNote:r=>{let l=r.value.slice(0,De);r.value!==l&&(r.value=l),s().setCustomNote(l)},timerSeconds:r=>{let l=Number(r.value||0),p=Math.min(ct,Math.max(0,l));p!==l&&(r.value=String(p)),s().setTimerSeconds(p)},sticky:r=>s().setSticky(r.checked),lock:r=>{r.checked?s().lockPage():s().unlockPage()},backdrop:r=>s().setBackdropEnabled(r.checked),requiredInput:r=>s().setRequiredInput(r.checked),requiresITApproval:r=>s().setRequiresITApproval(r.checked)};for(let[r,l]of Object.entries(c)){let p=i.querySelector(`[data-field="${r}"]`);p.addEventListener("input",()=>{try{l(p)}catch(a){console.error(`[notificationOptions] ${e}.${r}:`,a)}})}for(let r of i.querySelectorAll("[data-action]"))r.addEventListener("change",()=>{r.checked?s().addAction(r.dataset.action):s().removeAction(r.dataset.action)});i.querySelector("[data-show]").addEventListener("click",()=>{ei(e)}),i.querySelector("[data-reset]").addEventListener("click",()=>{ot(e),Fe(i,e)})}function ei(i){if(!L(i).enabled)return;let e=Jt[i]??{title:i,description:""},s=_e({...L(i).build(),severity:Xt[i]??A.NOTIFICATION,title:e.title,description:e.description,requestId:`template-${i}-${Date.now()}`,action:"notificationLocking.show"});lt.show(s)}function ti(){for(let i of D){let e=document.querySelector(`[data-notificationType="${i}"]`);e&&Fe(e,i)}}function ii(){let i=st();for(let e of Object.keys(i)){let s=_e(i[e]);L(e).setConfig(s),i[e]=s}if(ti(),!Re||!re){oe("warn","Not embedded \u2014 generated config logged to console"),console.log("[notificationOptions] generated config",JSON.stringify(i,null,2));return}re.sendGenerated(i),oe("ok","Saved to console"),window.setTimeout(()=>oe("ok","Synced with console"),1200)}function ni(i){let e=i&&typeof i=="object"&&!Array.isArray(i)?i:{};for(let s of D){let c=e[s],r=L(s);if(c&&typeof c=="object")try{r.setConfig(_e(c))}catch(l){console.warn(`[notificationOptions] invalid ${s} config from console:`,l)}r.setEnabled(!0)}}function si(){Re&&(re=rt({onInit:i=>{ni(i),dt(),oe("ok","Synced with console")}}),re.start())}dt();si();window.addEventListener("beforeunload",()=>{lt.destroy()});
