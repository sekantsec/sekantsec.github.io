var I=Object.freeze({SMALL:"SMALL",LARGE:"LARGE"}),A=Object.freeze({NOTIFICATION:"NOTIFICATION",SUSPICIOUS:"SUSPICIOUS",UNSAFE:"UNSAFE"}),u=Object.freeze({DISMISS:"DISMISS",MARK_SAFE:"MARK_SAFE",UNLOCK:"UNLOCK"}),p=Object.freeze({KEYBOARD_INPUT:"KEYBOARD_INPUT",MOUSE_CLICKS:"MOUSE_CLICKS",CUT_COPY:"CUT_COPY",PASTE:"PASTE",DRAG_DROP:"DRAG_DROP",FILE_SELECTION:"FILE_SELECTION",FOCUS_INPUTS:"FOCUS_INPUTS",ALL:"ALL"}),Z=Object.freeze([p.KEYBOARD_INPUT,p.MOUSE_CLICKS,p.CUT_COPY,p.PASTE,p.DRAG_DROP,p.FILE_SELECTION,p.FOCUS_INPUTS]),Ae=Object.freeze({[u.DISMISS]:"Dismiss",[u.MARK_SAFE]:"Mark Safe",[u.UNLOCK]:"Unlock"}),kt='<svg viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path></svg>',X=10;var vt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,St=Object.freeze(["action_clicked","it_approval_requested"]),ze=Object.freeze({enabled:!0,opacity:.6}),Ct=Object.freeze({visible:!1,variant:I.SMALL,severity:"NOTIFICATION",title:"",description:"",customNote:"",actions:[u.DISMISS],actionLabels:Ae,lockCapabilities:[],stickyRequested:!1,requiredInput:!1,requiresITApproval:!1,itRequestRaised:!1,sticky:!1,timerSeconds:0,timerDeadlineMs:null,requestId:null,activeCapabilities:[],timerComplete:!0,inputValid:!0}),ye=Object.freeze({NOTIFICATION:{key:"NOTIFICATION",label:"NOTIFICATION"},WARNING:{key:"SUSPICIOUS",label:"SUSPICIOUS"},SUSPICIOUS:{key:"SUSPICIOUS",label:"SUSPICIOUS"},UNSAFE:{key:"UNSAFE",label:"UNSAFE"}});function S(n){return n==null?"":String(n)}function Et(n,e=.6){let s=Number(n);return Number.isFinite(s)?Math.min(1,Math.max(0,s)):e}function gt(n){let e=S(n||"NOTIFICATION").toUpperCase();return ye[e]||ye.NOTIFICATION}function yt(n){try{return new URL(n).hostname.toLowerCase()}catch{return""}}function Be(n){if(typeof n!="string"||!n.trim())return!0;let e=yt(n);if(!e)return!0;let s=(globalThis.location?.hostname||"").toLowerCase();return e===s}function At(n){return n==="UNSAFE"?"#ff6685":n==="SUSPICIOUS"?"#ffdd57":"#ffffff"}function wt(n){let e=[u.MARK_SAFE,u.DISMISS,u.UNLOCK];return[...n].sort((s,o)=>e.indexOf(s)-e.indexOf(o))}function Tt(n){let e=Array.isArray(n)?n:[u.DISMISS],s=[];for(let o of e){let l=o===u.UNLOCK?u.DISMISS:o;(l===u.DISMISS||l===u.MARK_SAFE)&&!s.includes(l)&&s.push(l)}return s.includes(u.DISMISS)||s.unshift(u.DISMISS),s.slice(0,2)}function V(n){let e=Array.isArray(n)?n:[];return e.includes(p.ALL)?[...Z]:e.filter(s=>Z.includes(s))}function Nt(n,e={}){let s=e.variant===I.LARGE?I.LARGE:I.SMALL,o=Number(e.timerSeconds),l=Number.isFinite(o)?Math.max(0,o):0,c=!!(e.requiredInput??n.requiredInput),b=!!e.requiresITApproval,a=b||c,k=b?[...Z]:V(e.lockCapabilities),C=k.length>0,E=gt(e.severity||n.severity||"NOTIFICATION"),v=Date.now(),g=!!e.sticky,i=C||a||g;return{...n,visible:!0,variant:s,severity:E.key,severityLabel:E.label,title:S(e.title),description:S(e.description),customNote:S(e.customNote),actions:Tt(e.actions),actionLabels:{...Ae,...Object.fromEntries(Object.entries(e.actionLabels||{}).map(([m,B])=>[m,S(B)]))},lockCapabilities:k,stickyRequested:g,requiredInput:a,requiresITApproval:b,itRequestRaised:!1,sticky:i,timerSeconds:l,timerDeadlineMs:i?l>0?v+l*1e3:null:v+Math.max(l,3)*1e3,timerComplete:l<=0,inputValid:!a&&!b,requestId:S(e.requestId)||null,activeCapabilities:[...new Set([...n.activeCapabilities||[],...k])],backdrop:{...ze,...e.backdrop||{},opacity:Et(e?.backdrop?.opacity,ze.opacity)}}}var Lt=`
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
  max-width: min(87.5rem, calc(100dvw - 2.5rem));
  max-height: calc(100dvh - 2.5rem);
  overflow: auto;
  display: grid;
  gap: 0.75rem;
  padding: 1.125rem;
  padding-bottom: 1.625rem;
  border-radius: 1rem;
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
`;function $e(n={}){let e=typeof n.eventSink=="function"?n.eventSink:()=>{},s=typeof n.loadEmail=="function"?n.loadEmail:null,o=typeof n.saveEmail=="function"?n.saveEmail:null,l=n.production===!0,c=null,b=null,a=null,k=null,C=null,E=null,v=null,g=!1,i={...Ct},m=new Set,B=new Map,$=new Map,w=null;function T(t,r={}){if(l&&!St.includes(t))return;let d={type:"notificationLocking.event",event:t,requestId:i.requestId,timestamp:Date.now(),...r};try{e(d)}catch{}}function Te(){if(c&&document.documentElement.contains(c))return;c=document.createElement("div"),c.id=`sekant-notification-locking-${Math.random().toString(36).slice(2,9)}`,c.style.setProperty("all","initial","important"),c.style.setProperty("position","fixed","important"),c.style.setProperty("inset","0","important"),c.style.setProperty("z-index","2147483647","important"),c.style.setProperty("pointer-events","none","important"),c.style.setProperty("font-size","clamp(16px, calc(0.25vw + 15px), 20px)","important"),c.style.setProperty("line-height","1.4","important"),c.style.setProperty("font-family",'Avenir Next, Helvetica, "Segoe UI", Arial, sans-serif',"important"),b=c.attachShadow({mode:"closed"});let t=document.createElement("style");t.textContent=Lt;let r=document.createElement("div");r.className="sk-nl-root";let d=document.createElement("div");d.className="sk-nl-backdrop";let f=document.createElement("div");f.className="sk-nl-wrap";let h=document.createElement("div");h.className="sk-nl-panel sk-nl-modal sk-nl-severity-NOTIFICATION";let y=document.createElement("div");y.className="sk-nl-header";let N=document.createElement("span");N.className="sk-nl-shield sk-nl-severity-text",N.innerHTML=kt;let H=document.createElement("span");H.className="sk-nl-severity-text",H.textContent="Sekant Web Security";let fe=document.createElement("span");fe.className="sk-nl-type-chip sk-nl-severity-text",y.appendChild(N),y.appendChild(H),y.appendChild(fe);let me=document.createElement("div");me.className="sk-nl-title";let he=Ne("sk-nl-description"),be=Ne("sk-nl-custom-note"),L=document.createElement("div");L.className="sk-nl-input-wrap";let Y=document.createElement("div");Y.className="sk-nl-note",Y.textContent="Enter your work email and rationale to request IT approval.";let M=document.createElement("input");M.className="sk-nl-input sk-nl-email",M.type="email",M.autocomplete="email",M.placeholder="you@company.com";let W=document.createElement("label");W.className="sk-nl-input-label",W.textContent=`Rationale (min ${X} characters)`;let J=document.createElement("input");J.className="sk-nl-input",J.type="text";let Ie=document.createElement("div");Ie.className="sk-nl-input-error",L.appendChild(Y),L.appendChild(M),L.appendChild(W),L.appendChild(J),L.appendChild(Ie);let ke=document.createElement("div");ke.className="sk-nl-actions";let P=document.createElement("div");P.className="sk-nl-progress",P.classList.add("sk-nl-progress-edge");let ve=document.createElement("div");ve.className="sk-nl-progress-bar",P.appendChild(ve),h.appendChild(y),h.appendChild(me),h.appendChild(he.container),h.appendChild(be.container),h.appendChild(L),h.appendChild(ke),h.appendChild(P),f.appendChild(h),r.appendChild(d),r.appendChild(f);let Q=document.createElement("div");Q.className="sk-nl-confirm-overlay";let F=document.createElement("div");F.className="sk-nl-panel sk-nl-confirm";let Se=document.createElement("div");Se.className="sk-nl-confirm-title",Se.textContent="IT request raised";let Ce=document.createElement("div");Ce.className="sk-nl-confirm-message",Ce.textContent="Please check your email or the Sekant notifications for an update from IT in some time.",F.appendChild(Se),F.appendChild(Ce),Q.appendChild(F),r.appendChild(Q),b.appendChild(t),b.appendChild(r),document.documentElement.appendChild(c),a={backdrop:d,wrap:f,panel:h,shield:N,headerText:H,typeChip:fe,title:me,descriptionSection:he,customNoteSection:be,descriptionValue:he.value,customNoteValue:be.value,inputWrap:L,note:Y,email:M,inputLabel:W,input:J,inputError:Ie,actions:ke,progress:P,progressBar:ve,confirmOverlay:Q,confirmDialog:F},Ze()}function Ne(t){let r=document.createElement("div");r.className="sk-nl-section";let d=document.createElement("div");return d.className=`sk-nl-section-value ${t}`,r.appendChild(d),{container:r,value:d}}function Ze(){let t=()=>{ae(),K()};a.input.addEventListener("input",t),a.email.addEventListener("input",t)}function et(){k||(k=new MutationObserver(()=>{i.visible&&(!c||!document.documentElement.contains(c))&&Le()}),k.observe(document.documentElement,{childList:!0})),C||(C=setInterval(()=>{i.visible&&(!c||!document.documentElement.contains(c))&&Le()},1e3))}function Le(){c=null,b=null,a=null,Te(),U()}function q(){v&&(clearInterval(v),v=null)}function oe(){q(),g=i.timerComplete,i.timerDeadlineMs&&(v=setInterval(()=>{Oe()},100),Oe())}function Oe(){let t=Date.now();if(!i.timerComplete&&i.timerDeadlineMs!==null&&t>=i.timerDeadlineMs&&(i.timerComplete=!0,g||(g=!0,T("timer_complete",{reason:"actions_enabled"})),K()),xe(t),!i.sticky&&i.timerDeadlineMs!==null&&t>=i.timerDeadlineMs){T("auto_dismissed",{reason:"timer_elapsed"}),R({reason:"timer_elapsed"});return}i.timerComplete&&(i.sticky||i.timerDeadlineMs===null)&&q()}function xe(t=Date.now()){let r=Math.max(0,(i.sticky?i.timerSeconds:Math.max(i.timerSeconds,3))*1e3);if(r<=0||i.timerDeadlineMs===null){a.progress.style.display="none";return}let d=Math.max(0,i.timerDeadlineMs-t),f=Math.max(0,Math.min(1,d/r)),h=`${Math.round(f*100)}%`;a.progress.style.display="block",a.progressBar.style.width=h}function ae(){let t=(a.input.value||"").trim(),r=(a.email.value||"").trim(),d=i.requiredInput||i.requiresITApproval,f=i.requiresITApproval,h=!d||t.length>=X,y=!f||vt.test(r);if(i.inputValid=h&&y,!d&&!f){a.inputError.classList.remove("show");return}if(i.inputValid){a.inputError.classList.remove("show");return}let N=[];f&&!y&&N.push("a valid work email"),h||N.push(`a rationale of at least ${X} characters`),a.inputError.textContent=`Enter ${N.join(" and ")} to proceed.`,a.inputError.classList.add("show")}function le(t){return i.sticky&&!i.timerComplete?!1:t===u.MARK_SAFE||t===u.UNLOCK?i.requiredInput||i.requiresITApproval?i.inputValid:!0:i.requiredInput?i.inputValid:!0}function K(){for(let t of a.actions.querySelectorAll("button[data-action]")){let r=t.getAttribute("data-action");t.disabled=!le(r)}}function tt(t){let r=document.createElement("button");return r.className=`sk-nl-btn ${t.toLowerCase().replace("_","-")}`,r.setAttribute("data-action",t),r.textContent=S(i.actionLabels[t]||Ae[t]||t),r.addEventListener("click",()=>{Me(t,{reason:"user_action"})}),r.disabled=!le(t),r}function Re(){return m.size>0?u.UNLOCK:u.DISMISS}function nt(){a.actions.textContent="";for(let t of wt(i.actions)){let r=t===u.DISMISS?Re():t;a.actions.appendChild(tt(r))}}function it(t){t.className=t.className.split(" ").filter(r=>!r.startsWith("sk-nl-severity-")).concat(`sk-nl-severity-${i.severity}`).join(" ")}function st(){let t=At(i.severity);a.panel.style.borderColor=t,a.panel.style.setProperty("--sk-nl-accent",t),a.shield.style.color=t,a.headerText.style.color=t,a.typeChip.style.color=t,a.typeChip.style.borderColor=t,a.progressBar.style.backgroundColor=t}function rt(){let t=i.requiredInput||i.requiresITApproval;if(a.inputWrap.style.display=t?"grid":"none",!t){a.input.value="",a.email.value="",a.inputError.classList.remove("show");return}a.note.style.display=i.requiresITApproval?"block":"none",a.email.style.display=i.requiresITApproval?"block":"none",a.inputLabel.textContent=`Rationale (min ${X} characters)`,a.input.placeholder="Enter rationale",i.requiresITApproval&&dt(),ae()}function Me(t,{reason:r="user_action"}={}){if(!le(t)||!a)return!1;let d=(a.input.value||"").trim();return i.requiresITApproval&&(t===u.MARK_SAFE||t===u.UNLOCK)?(ot(t),!0):(at(t,{reason:r,inputValue:d}),!0)}function ot(t){let r=(a.email.value||"").trim(),d=(a.input.value||"").trim();ct(r),T("it_approval_requested",{action:t,email:r,rationale:d}),q(),i.itRequestRaised=!0,U()}function at(t,{reason:r="user_action",inputValue:d=""}={}){if(T("action_clicked",{action:t,rationale:d}),t===u.UNLOCK){pe({unlockCapabilities:[p.ALL]}),R({reason:r,action:t});return}(t===u.DISMISS||t===u.MARK_SAFE)&&R({reason:r,action:t})}let j="",ce=null;function lt(){return ce||(ce=(async()=>{if(s)try{let t=await s();return typeof t=="string"?t:""}catch{return""}return""})().catch(()=>"")),ce}async function ct(t){let r=S(t).trim();if(j=r,o)try{await o(r);return}catch{}}function dt(){if(j){a&&!a.email.value&&(a.email.value=j);return}lt().then(t=>{t&&(j=t,a&&i.visible&&i.requiresITApproval&&!a.email.value&&(a.email.value=t,ae(),K()))})}function ut(){let t=m.size>0;return i.visible&&!t&&(!i.sticky||i.timerComplete)}function pt(){if(E)return;let t=r=>{ut()&&(!c||!a||de(r)||Me(u.DISMISS,{reason:"outside_click"}))};window.addEventListener("click",t,{capture:!0,passive:!0}),E=()=>{window.removeEventListener("click",t,{capture:!0,passive:!0}),E=null}}function U(){if(!i.visible)return;if(Te(),et(),a.backdrop.style.background=`rgba(0, 0, 0, ${i.backdrop.opacity})`,a.backdrop.classList.toggle("show",!!i.backdrop.enabled),i.itRequestRaised){a.wrap.classList.remove("show"),a.confirmOverlay.classList.add("show");return}a.confirmOverlay.classList.remove("show"),a.wrap.classList.add("show"),it(a.panel),st(),a.typeChip.textContent=i.severityLabel||"NOTIFICATION",a.title.textContent=i.title||"",a.title.style.display=i.title?"block":"none",a.descriptionValue.textContent=i.description||"",a.customNoteValue.textContent=i.customNote||"";let t=i.variant===I.LARGE&&!!i.description;a.descriptionSection.container.style.display=t?"block":"none",a.customNoteSection.container.style.display=i.customNote?"block":"none",rt(),nt(),K(),xe()}function ft(){if(!a||!i.visible)return{visible:!1};let t=a.panel,r=getComputedStyle(t),d=t.getBoundingClientRect();return{visible:!0,variant:i.variant,severity:i.severity,width:d.width,height:d.height,fontSize:r.fontSize,lineHeight:r.lineHeight,borderColor:r.borderColor}}function de(t){if(!c)return!1;let r=typeof t.composedPath=="function"?t.composedPath():[];return Array.isArray(r)&&r.includes(c)}function D(t,r){let d=f=>{r()&&(de(f)||(f.preventDefault(),f.stopImmediatePropagation()))};for(let f of t)window.addEventListener(f,d,{capture:!0,passive:!1});return()=>{for(let f of t)window.removeEventListener(f,d,{capture:!0,passive:!1})}}function mt(t){if(B.has(t))return;let r=()=>{};if(t===p.KEYBOARD_INPUT)r=D(["keydown","keypress","keyup"],()=>m.has(t));else if(t===p.MOUSE_CLICKS)r=D(["pointerdown","click","dblclick","contextmenu","auxclick","mousedown","mouseup"],()=>m.has(t));else if(t===p.CUT_COPY)r=D(["copy","cut"],()=>m.has(t));else if(t===p.PASTE)r=D(["paste"],()=>m.has(t));else if(t===p.DRAG_DROP)r=D(["dragstart","dragover","drop"],()=>m.has(t));else if(t===p.FOCUS_INPUTS){let d=f=>{if(!m.has(t)||de(f))return;let h=f.target;!h||!(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.isContentEditable)||(f.preventDefault(),f.stopImmediatePropagation(),h.blur?.())};window.addEventListener("focusin",d,!0),r=()=>window.removeEventListener("focusin",d,!0)}else if(t===p.FILE_SELECTION){let d=f=>{if(!m.has(t))return;let h=f.target;!(h instanceof Element)||!h.closest('input[type="file"]')||(f.preventDefault(),f.stopImmediatePropagation())};window.addEventListener("mousedown",d,{capture:!0,passive:!1}),window.addEventListener("click",d,{capture:!0,passive:!1}),window.addEventListener("change",d,{capture:!0,passive:!1}),r=()=>{window.removeEventListener("mousedown",d,{capture:!0,passive:!1}),window.removeEventListener("click",d,{capture:!0,passive:!1}),window.removeEventListener("change",d,{capture:!0,passive:!1})}}B.set(t,r)}function qe(){let t=document.querySelectorAll('input[type="file"]');for(let r of t)$.has(r)||$.set(r,{disabled:r.disabled}),r.disabled=!0}function ht(){for(let[t,r]of $.entries())t&&t.isConnected&&(t.disabled=!!r.disabled);$.clear()}function Ue(){if(m.has(p.FILE_SELECTION)){qe(),w||(w=new MutationObserver(()=>{m.has(p.FILE_SELECTION)&&qe()}),w.observe(document.documentElement,{childList:!0,subtree:!0}));return}w&&(w.disconnect(),w=null),ht()}function De(t=[]){let r=V(t);for(let d of r)mt(d),m.add(d);Ue(),i.activeCapabilities=[...m]}function Pe(){if(i.requiresITApproval)for(let d of Z)m.add(d);let t=m.size>0;i.lockCapabilities=[...m],i.activeCapabilities=[...m];let r=i.sticky;i.sticky=t||!!i.requiredInput||!!i.requiresITApproval||!!i.stickyRequested,i.sticky!==r&&(i.sticky?i.timerDeadlineMs=i.timerSeconds>0?Date.now()+i.timerSeconds*1e3:null:i.visible&&(i.timerDeadlineMs=Date.now()+Math.max(i.timerSeconds,3)*1e3))}function ue(t=[]){let r=V(t);for(let d of r)m.delete(d);Ue(),i.activeCapabilities=[...m]}function G(t={}){if(!Be(t.url))return;let r=new Set(m);i=Nt(i,t);for(let d of r)m.delete(d);De(i.lockCapabilities),i.activeCapabilities=[...m],U(),oe(),T("shown",{variant:i.variant,actions:i.actions,primary:Re(),requiresITApproval:i.requiresITApproval,lockCapabilities:i.lockCapabilities})}function Fe(t={}){if(!Be(t.url))return;if(!i.visible){G(t);return}let r={...i,...t,requestId:t.requestId??i.requestId,lockCapabilities:t.lockCapabilities??i.lockCapabilities,actions:t.actions??i.actions,actionLabels:t.actionLabels??i.actionLabels,requiredInput:t.requiredInput??i.requiredInput,requiresITApproval:t.requiresITApproval??i.requiresITApproval,timerSeconds:t.timerSeconds??i.timerSeconds,sticky:t.sticky??i.sticky,backdrop:t.backdrop??i.backdrop};G(r),T("updated",{requestId:i.requestId})}function R(t={}){q(),ue([p.ALL]),i.visible=!1,i.itRequestRaised=!1,i.timerDeadlineMs=null,c?.parentNode&&c.parentNode.removeChild(c),c=null,b=null,a=null,T("dismissed",t)}function _e(t={}){let r=V(t.lockCapabilities);De(r),Pe(),i.visible&&(U(),oe()),T("lock_changed",{operation:"lock",lockCapabilities:r})}function pe(t={}){let r=V(t.unlockCapabilities);ue(r),Pe(),i.visible&&(U(),oe()),T("lock_changed",{operation:"unlock",unlockCapabilities:r})}function Ve(){R({reason:"clear"})}function bt(t={}){let r=t.action;r==="notificationLocking.show"?G(t):r==="notificationLocking.update"?Fe(t):r==="notificationLocking.dismiss"?R({reason:"command"}):r==="notificationLocking.lock"?_e(t):r==="notificationLocking.unlock"?pe(t):r==="notificationLocking.clear"&&Ve()}pt();function It(){q(),ue([p.ALL]),w&&(w.disconnect(),w=null),k&&(k.disconnect(),k=null),C&&(clearInterval(C),C=null),E&&E(),c?.parentNode&&c.parentNode.removeChild(c)}return{ACTIONS:u,CAPABILITIES:p,VARIANTS:I,show:G,update:Fe,dismiss:R,lock:_e,unlock:pe,clear:Ve,handleCommand:bt,destroy:It,getLayoutSnapshot:ft,getState:()=>({...i,activeCapabilities:[...m]})}}function _(n,e){if(typeof n!="boolean")throw new TypeError(`Invalid ${e} "${n}" \u2014 expected a boolean`);return n}function Ee(n){if(n!==u.DISMISS&&n!==u.MARK_SAFE)throw new TypeError(`Invalid action "${n}" \u2014 expected DISMISS or MARK_SAFE`);return n}function Ot(n){if(n!==u.DISMISS&&n!==u.MARK_SAFE&&n!==u.UNLOCK)throw new TypeError(`Invalid action label key "${n}" \u2014 expected DISMISS, MARK_SAFE, or UNLOCK`);return n}function ge(n){if(!Object.prototype.hasOwnProperty.call(p,n))throw new TypeError(`Invalid capability "${n}" \u2014 expected one of ${Object.keys(p).join(", ")}`);return n}var ee=class n{constructor(e,s,o){this.variant=e??I.SMALL,this.severity=s??A.NOTIFICATION,this.title=o??""}static create(e={}){typeof e=="string"&&(e={title:e});let{title:s,severity:o,variant:l}=e??{};return new n(l??n.defaultVariant??I.SMALL,o??n.defaultSeverity??A.NOTIFICATION,s)}setTitle(e){return this.title=S(e),this}setDescription(e){return this.description=S(e),this}setCustomNote(e){return this.customNote=S(e),this}setRequestId(e){return this.requestId=e==null?null:S(e),this}setUrl(e){return this.url=e==null?void 0:S(e),this}setVariant(e){if(e!==I.SMALL&&e!==I.LARGE)throw new RangeError(`Invalid variant "${e}" \u2014 expected SMALL or LARGE`);return this.variant=e,this}setSeverity(e){if(e==null)return this.severity=A.NOTIFICATION,this;let s=S(e).toUpperCase(),o=ye[s];if(!o)throw new RangeError(`Invalid severity "${e}" \u2014 expected NOTIFICATION, WARNING, SUSPICIOUS, or UNSAFE`);return this.severity=o.key,this}addAction(e){let s=Ee(e);return this.actions===void 0&&(this.actions=[]),this.actions.includes(s)||this.actions.push(s),this}removeAction(e){let s=Ee(e);return this.actions!==void 0&&(this.actions=this.actions.filter(o=>o!==s)),this}setActions(e=[]){return this.actions=[...new Set(e.map(Ee))],this}clearActions(){return this.actions=[],this}setActionLabel(e,s){let o=Ot(e);return this.actionLabels={...this.actionLabels,[o]:S(s)},this}enableMarkSafe(){return this.addAction(u.MARK_SAFE),this}addCapability(e){let s=ge(e);return this.lockCapabilities===void 0&&(this.lockCapabilities=[]),this.lockCapabilities.includes(s)||this.lockCapabilities.push(s),this}removeCapability(e){let s=ge(e);return this.lockCapabilities!==void 0&&(this.lockCapabilities=this.lockCapabilities.filter(o=>o!==s)),this}setCapabilities(e=[]){return this.lockCapabilities=[...new Set(e.map(ge))],this}clearCapabilities(){return this.lockCapabilities=[],this}enableBlockPage(){return this.setCapabilities([p.ALL]),this}setTimerSeconds(e){let s=Number(e);if(!Number.isFinite(s)||s<0)throw new RangeError(`Invalid timerSeconds "${e}" \u2014 expected a finite number >= 0`);return this.timerSeconds=s,this}setSticky(e=!0){return this.sticky=_(e,"sticky"),this}setBackdrop({enabled:e,opacity:s}={}){return this.backdrop===void 0&&(this.backdrop={}),e!==void 0&&(this.backdrop.enabled=_(e,"backdrop.enabled")),s!==void 0&&this.setBackdropOpacity(s),this}setBackdropEnabled(e=!0){return this.backdrop===void 0&&(this.backdrop={}),this.backdrop.enabled=_(e,"backdrop.enabled"),this}setBackdropOpacity(e){this.backdrop===void 0&&(this.backdrop={});let s=Number(e);if(!Number.isFinite(s)||s<0||s>1)throw new RangeError(`Invalid backdrop.opacity "${e}" \u2014 expected a number between 0 and 1`);return this.backdrop.opacity=s,this}setRequiredInput(e=!0){return this.requiredInput=_(e,"requiredInput"),this}setRequiresITApproval(e=!0){return this.requiresITApproval=_(e,"requiresITApproval"),this}addIfValid(e,s){let o=this[s];return o==null||(Array.isArray(o)?o.length>0&&(e[s]=[...o]):o!==null&&typeof o=="object"?e[s]={...o}:e[s]=o),e}setDefaultOptions(e){this.defaultOptions=e??{}}build(){let e={variant:this.variant,severity:this.severity,title:this.title,...this.defaultOptions??{}};return this.addIfValid(e,"requestId"),this.addIfValid(e,"url"),this.addIfValid(e,"description"),this.addIfValid(e,"customNote"),this.addIfValid(e,"actions"),this.addIfValid(e,"timerSeconds"),this.addIfValid(e,"sticky"),this.addIfValid(e,"actionLabels"),this.addIfValid(e,"backdrop"),this.addIfValid(e,"lockCapabilities"),this.addIfValid(e,"requiredInput"),this.addIfValid(e,"requiresITApproval"),e}static setDefaultVariant(e){n.defaultVariant=e}static setDefaultSeverity(e){n.defaultSeverity=e}static setDefaultAction(e){n.defaultAction=e}static CLEAR_NOTIFICATIONS={action:"notificationLocking.clear"};static SHOW_NOTIFICATION={action:"notificationLocking.show"};static UPDATE_NOTIFICATION={action:"notificationLocking.update"};static DISMISS_NOTIFICATION={action:"notificationLocking.dismiss"};static LOCK_CAPABILITIES={action:"notificationLocking.lock"};static UNLOCK_CAPABILITIES={action:"notificationLocking.unlock"}};var z=Object.freeze([A.NOTIFICATION,A.SUSPICIOUS,A.UNSAFE]);function xt(n){return n==null?"":String(n)}function Rt(n,e){if(typeof n!="boolean")throw new TypeError(`Invalid ${e} "${n}" \u2014 expected a boolean`);return n}function ne(n){let e=xt(n).toUpperCase();if(!z.includes(e))throw new RangeError(`Invalid template severity "${n}" \u2014 expected NOTIFICATION, SUSPICIOUS, or UNSAFE`);return e}var Ke=Object.freeze({[A.NOTIFICATION]:Object.freeze({variant:I.LARGE,customNote:"",actions:[u.DISMISS],sticky:!1,timerSeconds:4,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[A.SUSPICIOUS]:Object.freeze({variant:I.LARGE,customNote:"This site shows signals consistent with phishing. Verify the sender before entering credentials.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!1,timerSeconds:6,requiredInput:!1,requiresITApproval:!1,lockCapabilities:[],backdrop:{enabled:!0}}),[A.UNSAFE]:Object.freeze({variant:I.LARGE,customNote:"If you believe this is a mistake, contact your administrator.",actions:[u.DISMISS,u.MARK_SAFE],sticky:!0,timerSeconds:0,requiredInput:!0,requiresITApproval:!1,lockCapabilities:[p.ALL],backdrop:{enabled:!0}})}),ie=class n extends ee{constructor(e,s={}){super(I.LARGE,ne(e),""),this.enabled=!0,this.backdrop={enabled:!0},this.customNote="",this.actions=[u.DISMISS],this.sticky=!1,this.timerSeconds=0,this.requiredInput=!1,this.requiresITApproval=!1,s&&this.setConfig(s)}static create(e,s={}){return new n(e,s)}setConfig(e={}){for(let[s,o]of Object.entries(e))switch(s){case"severity":if(ne(o)!==this.severity)throw new RangeError(`Cannot change template severity via setConfig (already "${this.severity}")`);break;case"variant":this.setVariant(o);break;case"customNote":this.setCustomNote(o);break;case"actions":this.setActions(o??[]);break;case"sticky":this.setSticky(o);break;case"timerSeconds":this.setTimerSeconds(o);break;case"requiredInput":this.setRequiredInput(o);break;case"requiresITApproval":this.setRequiresITApproval(o);break;case"lockCapabilities":this.setCapabilities(o??[]);break;case"backdrop":this.setBackdrop(o??{enabled:!0});break;default:throw new Error(`Unknown NotificationTemplate config key "${s}"`)}return this}setEnabled(e=!0){return this.enabled=Rt(e,"enabled"),this}lockPage(){return this.addCapability(p.ALL)}unlockPage(){return this.clearCapabilities()}build(){let e=super.build();return delete e.action,delete e.requestId,delete e.url,delete e.title,delete e.description,delete e.actionLabels,e.lockCapabilities=Array.isArray(this.lockCapabilities)&&this.lockCapabilities.length>0?[p.ALL]:[],e}toConfig(){return this.build()}toJSON(){return this.toConfig()}clone(){return new n(this.severity,this.toConfig())}},te=new Map;function O(n){let e=ne(n);return te.has(e)||te.set(e,new ie(e,Ke[e])),te.get(e)}function je(){let n={};for(let e of z){let s=O(e);s.enabled&&(n[e]=s.toConfig())}return n}function Ge(n){let e=ne(n),s=new ie(e,Ke[e]);return te.set(e,s),s}var Mt=Object.freeze({REQUEST_INIT:"sekant.admin.requestInit",INIT:"sekant.admin.init",GENERATED:"sekant.admin.generated"}),qt=Object.freeze({CHILD:"sekant-admin-options",PARENT:"iframe-test-parent"});function Ut(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}function He(n={}){let{onInit:e=()=>{},messageTypes:s=Mt,sources:o=qt,targetOrigin:l="*"}=n,c=!1;function b(){window.parent.postMessage({source:o.CHILD,type:s.REQUEST_INIT},l)}function a(v){window.parent.postMessage({source:o.CHILD,type:s.GENERATED,payload:v},l)}function k(v){let g=v.data;Ut(g)&&g.source===o.PARENT&&g.type===s.INIT&&e(g.payload,g)}function C(){c||(c=!0,window.addEventListener("message",k),b())}function E(){c&&(c=!1,window.removeEventListener("message",k))}return{requestInit:b,sendGenerated:a,start:C,destroy:E}}var we=typeof window<"u"&&window.self!==window.top,We=$e({eventSink:()=>{}}),Dt={NOTIFICATION:"Informational updates shown to users.",SUSPICIOUS:"Warnings for pages that show phishing-like signals.",UNSAFE:"Blocking notifications for unsafe pages."},Pt={NOTIFICATION:"#1677ff",SUSPICIOUS:"#fa8c16",UNSAFE:"#ff4d4f"},Ft={NOTIFICATION:{title:"New notification",description:"Informational update from Sekant."},SUSPICIOUS:{title:"Suspicious activity detected",description:"This page shows phishing-like signals. Verify before entering credentials."},UNSAFE:{title:"Unsafe page blocked",description:"Sekant has blocked this page because it is unsafe."}},Ye=document.getElementById("app"),x=null,re=null;function se(n,e){x&&(x.textContent=e,x.className=`tag${n==="ok"?" is-success":n==="warn"?" is-warning":""}`)}function Je(){Ye.innerHTML="";let n=document.createElement("section");n.className="section";let e=document.createElement("div");e.className="container is-max-desktop";let s=document.createElement("div");s.className="box";let o=document.createElement("h1");o.className="title is-4",o.textContent="Notification Template Configurator";let l=document.createElement("p");l.className="subtitle is-6",l.textContent="Configure per-severity notification templates (all options except title & description). Toggle Enabled on a card to include that severity in the generated config; disabled cards are grayed out and omitted. Press Show to preview a card against the real notification controller.";let c=document.createElement("div");c.className="level",x=document.createElement("span"),x.className="tag",x.textContent=we?"Waiting for console\u2026":"Standalone";let b=document.createElement("button");b.type="button",b.className="button is-primary",b.textContent="Generate",b.addEventListener("click",Bt);let a=document.createElement("div");a.className="level-left";let k=document.createElement("div");k.className="level-right",k.appendChild(x),k.appendChild(b),c.appendChild(a),c.appendChild(k),s.appendChild(o),s.appendChild(l),s.appendChild(c),e.appendChild(s);let C=document.createElement("div");C.id="templateCards",C.className="columns is-multiline";for(let E of z){let v=document.createElement("div");v.className="column",v.appendChild(_t(E)),C.appendChild(v)}e.appendChild(C),n.appendChild(e),Ye.appendChild(n)}function _t(n){let e=document.createElement("div");return e.className="box",e.dataset.severity=n,e.style.borderLeft=`4px solid ${Pt[n]??"#9ca3af"}`,e.innerHTML=`
    <div class="card-head">
      <div>
        <h2 class="title is-5">${n}</h2>
        <p class="help">${Dt[n]??""}</p>
      </div>
      <label class="checkbox" title="Include this severity in the generated config">
        <input type="checkbox" data-field="enabled" /> Enabled
      </label>
    </div>

    <div class="field">
      <label class="label">Variant</label>
      <div class="control">
        <div class="select">
          <select data-field="variant">
            <option value="${I.SMALL}">${I.SMALL}</option>
            <option value="${I.LARGE}">${I.LARGE}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Custom Note</label>
      <div class="control">
        <textarea class="textarea" data-field="customNote" placeholder="Shown under the title when non-empty"></textarea>
      </div>
    </div>

    <fieldset class="box">
      <legend class="label">Actions</legend>
      <label class="checkbox"><input type="checkbox" data-action="${u.DISMISS}" /> Dismiss</label>
      <label class="checkbox"><input type="checkbox" data-action="${u.MARK_SAFE}" /> Mark Safe</label>
    </fieldset>

    <div class="field">
      <label class="label">Timer (seconds)</label>
      <div class="control">
        <input class="input" data-field="timerSeconds" type="number" min="0" step="1" />
      </div>
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
  `,Vt(e,n),Qe(e,n),e}function Qe(n,e){let s=O(e),o=s.toConfig();n.querySelector('[data-field="enabled"]').checked=s.enabled,n.querySelector('[data-field="variant"]').value=o.variant,n.querySelector('[data-field="customNote"]').value=o.customNote,n.querySelector('[data-field="timerSeconds"]').value=o.timerSeconds,n.querySelector('[data-field="sticky"]').checked=o.sticky,n.querySelector('[data-field="lock"]').checked=(o.lockCapabilities??[]).length>0,n.querySelector('[data-field="backdrop"]').checked=o.backdrop?.enabled??!0,n.querySelector('[data-field="requiredInput"]').checked=o.requiredInput,n.querySelector('[data-field="requiresITApproval"]').checked=o.requiresITApproval;for(let l of n.querySelectorAll("[data-action]"))l.checked=o.actions.includes(l.dataset.action);Xe(n,e)}function Xe(n,e){let s=O(e).enabled;n.classList.toggle("is-disabled",!s);for(let o of n.querySelectorAll("input, select, textarea, button"))o.dataset.field!=="enabled"&&(o.disabled=!s)}function Vt(n,e){let s=()=>O(e),o={enabled:l=>s().setEnabled(l.checked),variant:l=>s().setVariant(l.value),customNote:l=>s().setCustomNote(l.value),timerSeconds:l=>s().setTimerSeconds(Number(l.value||0)),sticky:l=>s().setSticky(l.checked),lock:l=>{l.checked?s().lockPage():s().unlockPage()},backdrop:l=>s().setBackdropEnabled(l.checked),requiredInput:l=>s().setRequiredInput(l.checked),requiresITApproval:l=>s().setRequiresITApproval(l.checked)};for(let[l,c]of Object.entries(o)){let b=n.querySelector(`[data-field="${l}"]`);b.addEventListener("input",()=>{try{c(b),Xe(n,e)}catch(a){console.error(`[notificationOptions] ${e}.${l}:`,a)}})}for(let l of n.querySelectorAll("[data-action]"))l.addEventListener("change",()=>{l.checked?s().addAction(l.dataset.action):s().removeAction(l.dataset.action)});n.querySelector("[data-show]").addEventListener("click",()=>{zt(e)}),n.querySelector("[data-reset]").addEventListener("click",()=>{Ge(e),Qe(n,e)})}function zt(n){if(!O(n).enabled)return;let e=Ft[n]??{title:n,description:""},s={...O(n).build(),title:e.title,description:e.description,requestId:`template-${n}-${Date.now()}`,action:"notificationLocking.show"};We.show(s)}function Bt(){let n=je();if(!we||!re){se("warn","Not embedded \u2014 generated config logged to console"),console.log("[notificationOptions] generated config",JSON.stringify(n,null,2));return}re.sendGenerated(n),se("ok","Saved to console"),window.setTimeout(()=>se("ok","Synced with console"),1200)}function $t(n){let e=n&&typeof n=="object"&&!Array.isArray(n)?n:{};for(let s of z){let o=e[s],l=O(s);if(o&&typeof o=="object")try{l.setConfig(o),l.setEnabled(!0)}catch(c){console.warn(`[notificationOptions] invalid ${s} config from console:`,c),l.setEnabled(!1)}else l.setEnabled(!1)}}function Kt(){we&&(re=He({onInit:n=>{$t(n),Je(),se("ok","Synced with console")}}),re.start())}Je();Kt();window.addEventListener("beforeunload",()=>{We.destroy()});
