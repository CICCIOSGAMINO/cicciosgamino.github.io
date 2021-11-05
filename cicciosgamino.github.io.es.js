var t,e,i,s,r,n,o,a,l,c,h=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},d=(t,e,i)=>(((t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)})(t,e,"access private method"),i);!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const i of t)if("childList"===i.type)for(const t of i.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),v=new Map;class b{constructor(t,e){if(this._$cssResult$=!0,e!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=v.get(this.cssText);return u&&void 0===t&&(v.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const f=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new b(i,p)},m=u?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new b("string"==typeof t?t:t+"",p))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var g,w,$,y;const _={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},k=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:k};class A extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||x}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{u?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$Eg(t,e,i=x){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:_.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:_.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||k)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$E_()}catch(s){throw e=!1,this._$E_(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$E_(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$E_()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var C,F,E,S;A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},null===(w=(g=globalThis).reactiveElementPlatformSupport)||void 0===w||w.call(g,{ReactiveElement:A}),(null!==($=(y=globalThis).reactiveElementVersions)&&void 0!==$?$:y.reactiveElementVersions=[]).push("1.0.0-rc.3");const T=globalThis.trustedTypes,M=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,L=`lit$${(Math.random()+"").slice(9)}$`,N="?"+L,z=`<${N}>`,P=document,H=(t="")=>P.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,D=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,V=/'/g,X=/"/g,W=/^(?:script|style|textarea)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=j(1),K=j(2),G=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Z=new WeakMap,Q=P.createTreeWalker(P,129,null,!1);class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=O;for(let l=0;l<i;l++){const e=t[l];let i,a,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,a=o.exec(e),null!==a);)h=o.lastIndex,o===O?"!--"===a[1]?o=B:void 0!==a[1]?o=D:void 0!==a[2]?(W.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=null!=r?r:O,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,i=a[1],o=void 0===a[3]?I:'"'===a[3]?X:V):o===X||o===V?o=I:o===B||o===D?o=O:(o=I,r=void 0);const d=o===I&&t[l+1].startsWith("/>")?" ":"";n+=o===O?e+z:c>=0?(s.push(i),e.slice(0,c)+"$lit$"+e.slice(c)+L+d):e+L+(-2===c?(s.push(void 0),l):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==M?M.createHTML(a):a,s]})(t,e);if(this.el=Y.createElement(l,i),Q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(L)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(L),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?rt:"?"===e[1]?nt:"@"===e[1]?ot:st})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(W.test(s.tagName)){const t=s.textContent.split(L),e=t.length-1;if(e>0){s.textContent=T?T.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],H()),Q.nextNode(),a.push({type:2,index:++r});s.append(t[e],H())}}}else if(8===s.nodeType)if(s.data===N)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(L,t+1));)a.push({type:7,index:r}),t+=L.length-1}r++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function tt(t,e,i=t,s){var r,n,o,a;if(e===G)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=U(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=tt(t,l._$AS(t,e.values),l,s)),e}class et{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(i,!0);Q.currentNode=r;let n=Q.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new it(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new at(n,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=Q.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class it{constructor(t,e,i,s){this.type=2,this._$C_=!0,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){return this._$AA.parentNode}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tt(this,t,e),U(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==G&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.A(t):(t=>{var e;return R(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}C(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}A(t){this._$AH!==t&&(this._$AR(),this._$AH=this.C(t))}$(t){const e=this._$AA.nextSibling;null!==e&&3===e.nodeType&&(null===this._$AB?null===e.nextSibling:e===this._$AB.previousSibling)?e.data=t:this.A(P.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new et(r,this),e=t.p(this.options);t.m(i),this.A(e),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Y(t)),e}M(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new it(this.C(H()),this.C(H()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class st{constructor(t,e,i,s,r){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(J),this.strings=i):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=tt(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==G,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=tt(this,s[i+o],e,o),a===G&&(a=this._$AH[o]),n||(n=!U(a)||a!==this._$AH[o]),a===J?t=J:t!==J&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.P(t)}P(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class rt extends st{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===J?void 0:t}}class nt extends st{constructor(){super(...arguments),this.type=4}P(t){t&&t!==J?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class ot extends st{constructor(){super(...arguments),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tt(this,t,e,0))&&void 0!==i?i:J)===G)return;const s=this._$AH,r=t===J&&s!==J||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==J&&(s===J||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lt,ct,ht,dt,ut,pt;null===(F=(C=globalThis).litHtmlPlatformSupport)||void 0===F||F.call(C,Y,it),(null!==(E=(S=globalThis).litHtmlVersions)&&void 0!==E?E:S.litHtmlVersions=[]).push("2.0.0-rc.4");class vt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this._$Dt=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new it(e.insertBefore(H(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return G}}vt.finalized=!0,vt._$litElement$=!0,null===(ct=(lt=globalThis).litElementHydrateSupport)||void 0===ct||ct.call(lt,{LitElement:vt}),null===(dt=(ht=globalThis).litElementPlatformSupport)||void 0===dt||dt.call(ht,{LitElement:vt}),(null!==(ut=(pt=globalThis).litElementVersions)&&void 0!==ut?ut:pt.litElementVersions=[]).push("3.0.0-rc.3");t=new WeakSet,e=function(t){const e=13,i=32;if(!this.disabled)switch(t.keyCode){case i:case e:d(this,r,n).call(this)}},i=new WeakSet,s=function(){this.disabled||(this.checked=this.shadowRoot.querySelector("#switch").checked,d(this,o,a).call(this),d(this,l,c).call(this,this.checked))},r=new WeakSet,n=function(){this.disabled||(this.checked=!this.checked,d(this,o,a).call(this),d(this,l,c).call(this,this.checked))},o=new WeakSet,a=function(){this.text=this.checked?this.trueText:this.falseText},l=new WeakSet,c=function(t){const e=new CustomEvent("change",{detail:{checked:t},bubbles:!0,composed:!0});this.dispatchEvent(e)},customElements.define("images-switch",class extends vt{constructor(){super(),h(this,t),h(this,i),h(this,r),h(this,o),h(this,l),this.checked=!1,this.disabled=!1,this.value="",this.trueText="",this.falseText="",this.text=""}static get styles(){return f`
      :host {
        display: inline-block;
        position: relative;

        /* All custom vars
        --switch-width: 80px;
        --switch-height: 40px;
        --switch-border: none;
        --switch-border-checked: none;
        --switch-shadow: none;
        --switch-bk-color: #455A64;
        --switch-bk-ck-color: #0336FF;
        --switch-bk-disabled-color: #999;
        --switch-bk-focus-color: #FF0266;
        --switch-bk-hover-color: red;
        --switch-bk-ck-url: url(/images/dark_o.svg);
        --switch-bk-url: url(/images/light_o.svg);
        --switch-bk-disabled-url: url(/images/disabled_o.svg);

        --circle-url: url(/images/moon.svg);
        --circle-ck-url: url();
        --circle-disabled-url: url();

        --circle-margin: 7px;
        --circle-bkcolor: whitesmoke;
        --circle-ck-bkcolor: whitesmoke;
        --circle-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
        --circle-shadow-focus-on: 0 0 5px 6px #FFDE03;
        --circle-shadow-hover-on: 0 0 5px 6px #FFDE03;

        --text-font-family: sans-serif;
        --text-font-size: 2rem;
        --text-font-weight: 300;
        --text-absolute-top: -1.5rem;
        --text-absolute-right: -7rem; */
        
      }

      /*  1- Now we need to change the label position as relative , so that we can make 
        use of label::after and style that to appear like a switch. */ 
      label {
        position: relative;
        display: block;
        width: var(--switch-width, 80px);
        height: var(--switch-height, 40px);
        background-color: var(--switch-bk-color, transparent);
        border-radius: var(--switch-height, 40px);

        cursor: pointer;
        transition: all .3s;

        background-image: var(--switch-bk-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);

        /* out or inner shadow */
        border: var(--switch-border, none);
        box-shadow: var(--switch-shadow, none);
      }

      /* 2 - Add the circle to the toggle switch using ::after pseudo class */ 
      label:after {
        content: "";
        position: absolute;
        width: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        height: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        border-radius: 50%;
        background-color: var(--circle-bkcolor, transparent);
        background-image: var(--circle-url, none);
        /* background-size: var(calc(--switch-height / 3), 10px) var(calc(--switch-height / 3), 10px);*/
        background-size: calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2)) calc(var(--switch-height, 40px) - (var(--circle-margin, 3px) * 2));
        /* to give an effect of circle inside switch */ 
        top: var(--circle-margin, 3px);
        left: var(--circle-margin, 3px);
        transition: all .3s;

        /* shadow */ 
        box-shadow: var(--circle-shadow, none);
      }

      /* 3 - Now we need to change the background color and position of circle when the 
            checkbox is selected, we use :checked property on input. if checked */
      input:checked + label::after {
        /* move left */ 
        left: calc(100% - (var(--switch-height, 40px) - var(--circle-margin, 3px)));
        background-color: var(--circle-ck-bkcolor, transparent);
      }

      input:checked + label {
        border: var(--switch-border-checked, none);
        /* fallback color */
        background-color: var(--switch-bk-ck-color, transparent);
        background-image: var(--switch-bk-ck-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);
      }

      /* handle the fallback background hover focus (useless with images) */ 
      input[type=checkbox]:focus + label {
        background-color: var(--switch-bk-focus-color, transparent);
      }

      input[type=checkbox]:hover + label {
        /* background-color: var(--switch-bk-hover-color, transparent); */
      }

      /* Handle the circle when :hover or :focus */ 
      input[type=checkbox]:focus + label::after {
        box-shadow: var(--circle-shadow-focus-on, none);
      }

      input[type=checkbox]:hover + label::after {
        box-shadow: var(--circle-shadow-hover-on, none);
      }

      /* 4 - Handling the disabled style */ 
      input[type=checkbox][disabled] + label {
        background-color: var(--switch-bk-disabled-color, transparent);
        background-image: var(--switch-bk-disabled-url, none);
        background-size: var(--switch-width, 80px) var(--switch-height, 40px);
        cursor: not-allowed;
      }

      input[type=checkbox][disabled] + label::after {
        /* move left */
        left: calc(100% - (var(--switch-height, 40px) - var(--circle-margin, 3px)));
        cursor: not-allowed;
        box-shadow: none;
      }

      /* 5 - Handling indeterminate */ 
      input[type=checkbox]:indeterminate + label {
        background-color: var(--switch-bk-disabled-color, transparent);
        background-image: none;
      }

      input[type=checkbox]:indeterminate + label::after {
        /* left middle position */ 
        left: calc(100% - (var(--switch-height, 40px) * 1.4));
      }

      /* 6 - Let's hide the default checkbox */ 
      input[type=checkbox] {
        display: none;
      }

      /* 7 - Absolute positioning the text if needed */
      p {
        font-family: var(--text-font-family, sans-serif);
        font-size: var(--text-font-size, 2rem);
        font-weight: var(--text-font-weight, 300);
        position: absolute;
        top: var(--text-absolute-top, -1.5rem);
        right: var(--text-absolute-right, -7rem);
      }
    `}static get properties(){return{checked:{type:Boolean,attribute:!0,reflect:!0},disabled:{type:Boolean,attribute:!0,refelect:!0},value:String,trueText:String,falseText:String}}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.setAttribute("role","switch"),this.addEventListener("keyup",d(this,t,e)),d(this,o,a).call(this)}disconnectedCallback(){this.removeEventListener("keyup",d(this,t,e)),super.disconnectedCallback()}render(){return q`
        <input type="checkbox"
          id="switch"
          role="switch"
          name="label-switch"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${d(this,i,s)}"
          aria-labelledby="label-switch"/>
        <label id="label-switch" for="switch"></label>
        <p id="text">${this.text}</p>
    `}});const bt=K`
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="98px" height="100px" viewBox="0 0 98 100" enable-background="new 0 0 98 100" xml:space="preserve">
      <path fill="#FFFFFF" d="M85.715,26.547h-7.457c1.711-5.512,0.539-11.744-3.043-15.975c-3.587-4.236-9.158-6.766-14.896-6.766
          c-4.109,0-7.852,1.29-10.733,3.6c-3.045-4.6-9.469-7.03-15.613-7.03c-7.055,0-14.166,3.225-16.001,10.323
          c-1.147-0.196-2.492-0.347-3.91-0.347c-8.456,0-13.503,5.16-13.846,14.155c-0.185,4.844,1.047,8.677,3.662,11.394
          c1.359,1.413,3.049,2.442,4.988,3.094v48.546c0,6.663,5.421,12.083,12.083,12.083h43.364c6.662,0,12.084-5.42,12.084-12.083v-9.373
          c0,0,0,0.001,0.002,0.001c0.006,0,0.013-0.007,0.018-0.008l9.305,0.004c6.661,0,12.084-5.419,12.084-12.083V38.63
          C97.799,31.968,92.378,26.547,85.715,26.547z"/>
      <path fill="none" d="M85.715,32.589H75.023v-0.178c-2.688,3-6.535,4.606-11.271,4.606c-4.216,0-8.304-1.251-10.778-2.189
          c-2.216,2.709-6.748,6.943-13.577,7.167c-0.236,0.008-0.467,0.012-0.696,0.012c-6.706,0-10.612-3.162-12.737-5.904
          c-2.943,2.091-7.034,3.49-11.06,3.669V87.54c0,3.321,2.719,6.041,6.042,6.041h43.366c3.322,0,6.041-2.72,6.041-6.041v-9.376
          c0-3.322,2.723-6.041,6.043-6.041h9.318c3.322,0,6.043-2.719,6.043-6.042v-27.45C91.758,35.307,89.037,32.589,85.715,32.589z"/>
      <path fill="none" d="M75.042,32.605h10.69c1.653,0,3.156,0.674,4.25,1.759c-1.096-1.095-2.606-1.775-4.268-1.775H75.041
          L75.042,32.605L75.042,32.605z"/>
      <path fill="none" d="M39.416,42.01c6.829-0.225,11.361-4.458,13.576-7.167c2.476,0.938,6.562,2.188,10.777,2.188
          c4.727,0,8.567-1.6,11.254-4.588v-0.032c-2.688,3-6.535,4.606-11.271,4.606c-4.216,0-8.303-1.251-10.778-2.189
          c-2.216,2.709-6.748,6.943-13.577,7.167c-0.236,0.008-0.467,0.012-0.696,0.012c-4.608,0-7.895-1.493-10.189-3.317
          c2.295,1.831,5.586,3.332,10.207,3.332C38.949,42.022,39.18,42.018,39.416,42.01z"/>
      <path fill="none" d="M14.923,87.557V39.788c4.025-0.18,8.114-1.577,11.056-3.667c-0.004-0.006-0.01-0.012-0.014-0.018
          c-2.943,2.091-7.034,3.49-11.06,3.669V87.54c0,1.669,0.688,3.186,1.792,4.281C15.603,90.727,14.923,89.217,14.923,87.557z"/>
      <polygon fill="#FF9C08" points="80.162,59.326 80.162,45.717 75.939,45.717 75.939,59.33 80.162,59.33 "/>
      <polygon fill="none" points="75.939,59.33 80.162,59.33 80.162,59.326 80.162,45.717 75.939,45.717 "/>
      <g>
          <polygon fill="#FF9C08" points="75.939,59.33 80.162,59.33 80.162,59.326 80.162,45.717 75.939,45.717     "/>
          <path fill="#FF9C08" d="M89.982,34.364c-1.094-1.085-2.597-1.759-4.25-1.759h-10.69h-0.001v-0.016h-0.018v-0.146
              c-2.687,2.988-6.527,4.588-11.254,4.588c-4.215,0-8.302-1.25-10.777-2.188c-2.215,2.709-6.747,6.942-13.576,7.167
              c-0.236,0.008-0.467,0.012-0.696,0.012c-4.621,0-7.912-1.501-10.207-3.332c-1.038-0.825-1.872-1.717-2.534-2.569
              c-2.942,2.09-7.031,3.487-11.056,3.667v47.769c0,1.66,0.68,3.17,1.774,4.265c1.094,1.086,2.597,1.76,4.25,1.76h43.366
              c3.322,0,6.041-2.72,6.041-6.041v-9.376c0-3.322,2.723-6.041,6.043-6.041h9.318c3.322,0,6.043-2.719,6.043-6.042v-27.45
              C91.758,36.97,91.078,35.459,89.982,34.364z M85.6,59.297c0.01,0.526-0.062,2.496-1.494,3.98c-0.656,0.681-1.832,1.492-3.692,1.492
              h-7.19c-1.502,0-2.721-1.219-2.721-2.72V42.999c0-1.502,1.219-2.719,2.721-2.719h7.03c1.979,0,3.205,0.814,3.884,1.498
              c1.405,1.417,1.467,3.22,1.463,3.567V59.297z"/>
      </g>
    
      <path opacity="0.3" fill="#FFFFFF" enable-background="new" d="M28.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0
          c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.574,3.574-3.574l0,0C26.418,77.646,28.018,79.246,28.018,81.221
          L28.018,81.221z">
    
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2.8s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M39.018,51.221c0,1.975-1.6,3.573-3.574,3.573l0,0
          c-1.974,0-3.574-1.601-3.574-3.573l0,0c0-1.975,1.601-3.575,3.574-3.575l0,0C37.418,47.646,39.018,49.246,39.018,51.221
          L39.018,51.221z">
    
      <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="4s"
                            repeatCount="indefinite"/>
    
      </path> 
    
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M65.018,81.221c0,1.975-1.6,3.573-3.574,3.573l0,0
          c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C63.418,77.646,65.018,79.246,65.018,81.221
          L65.018,81.221z">
    
      <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="2 50;2 -50;"
                            dur="2.2s"
                            repeatCount="indefinite"/>
    
      </path> 
    
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M58.018,59.221c0,1.975-1.6,3.573-3.574,3.573l0,0
          c-1.973,0-3.573-1.601-3.573-3.573l0,0c0-1.975,1.601-3.574,3.573-3.574l0,0C56.418,55.646,58.018,57.246,58.018,59.221
          L58.018,59.221z">
    
      <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2.5s"
                            repeatCount="indefinite"/>
    
      </path>     
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M23.165,61.221c0,0.949-0.771,1.719-1.721,1.719l0,0
          c-0.949,0-1.72-0.77-1.72-1.719l0,0c0-0.951,0.771-1.721,1.72-1.721l0,0C22.394,59.5,23.165,60.27,23.165,61.221L23.165,61.221z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="3s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M45.165,71.221c0,2.055-1.667,3.719-3.721,3.719l0,0
          c-2.053,0-3.719-1.664-3.719-3.719l0,0c0-2.056,1.667-3.72,3.719-3.72l0,0C43.498,67.501,45.165,69.165,45.165,71.221L45.165,71.221
          z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="4s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M43.877,86.221c0,1.344-1.09,2.432-2.434,2.432l0,0
          c-1.343,0-2.433-1.088-2.433-2.432l0,0c0-1.345,1.09-2.434,2.433-2.434l0,0C42.788,83.787,43.877,84.876,43.877,86.221
          L43.877,86.221z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="3s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M63.999,42.22c0,1.411-1.146,2.554-2.556,2.554l0,0
          c-1.408,0-2.553-1.143-2.553-2.554l0,0c0-1.411,1.145-2.554,2.553-2.554l0,0C62.854,39.666,63.999,40.809,63.999,42.22L63.999,42.22
          z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="3s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M23.109,46.601c0,0.709-0.575,1.283-1.285,1.283l0,0
          c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.284,1.283-1.284l0,0C22.534,45.317,23.109,45.891,23.109,46.601
          L23.109,46.601z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M53.075,49.444c0,0.709-0.574,1.283-1.284,1.283l0,0
          c-0.708,0-1.283-0.573-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C52.5,48.161,53.075,48.734,53.075,49.444L53.075,49.444
          z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2.5s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M53.497,74.723c0,0.711-0.575,1.283-1.284,1.283l0,0
          c-0.708,0-1.283-0.572-1.283-1.283l0,0c0-0.709,0.575-1.281,1.283-1.281l0,0C52.921,73.439,53.497,74.014,53.497,74.723
          L53.497,74.723z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2.2s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M26.061,70.771c0,0.709-0.575,1.283-1.284,1.283l0,0
          c-0.708,0-1.283-0.574-1.283-1.283l0,0c0-0.709,0.575-1.283,1.283-1.283l0,0C25.486,69.486,26.061,70.062,26.061,70.771
          L26.061,70.771z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="0 50;0 -50;"
                            dur="2s"
                            repeatCount="indefinite"/>
    
      </path> 
      <path opacity="0.3" fill="#FFFFFF" enable-background="new    " d="M65.877,68.221c0,1.344-1.09,2.432-2.434,2.432l0,0
          c-1.344,0-2.434-1.088-2.434-2.432l0,0c0-1.345,1.09-2.434,2.434-2.434l0,0C64.788,65.787,65.877,66.876,65.877,68.221
          L65.877,68.221z">
          <animateTransform attributeName="transform"
                            attributeType="XML"
                            type="translate"
                            values="-10 50;-10 -50;"
                            dur="5s"
                            repeatCount="indefinite"/>
    
      </path> 
    </svg>
`;customElements.define("app-lite",class extends vt{static get styles(){return f`
      :host {
        display: block;
        margin: 0;
        padding: 0;

        height: 100vh;
        text-align: center;
      }

      svg {
        padding-top: 5rem;
      }

      p {
        position: absolute;
        width: 100%;
        text-align: center;
        z-index: 10;
      }

      a {
        text-decoration: none;
      }

      a:link {
        color: var(--ciccio-color);
      }

      a:visited {
        color: var(--ciccio-color);
      }

      images-switch {
        --switch-width: 100px;
        --switch-height: 40px;
        --circle-margin: 5px;

        --switch-border: 3px solid whitesmoke;
        --switch-border-checked: 3px solid black;

        /* --switch-bk-ck-color: whitesmoke; */
        --switch-bk-disabled-color: #ccc;

        --circle-bkcolor: #000;
        --circle-ck-bkcolor: whitesmoke;

        --text-font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        --text-font-size: 2rem;
        --text-font-weight: 300;
        --text-absolute-top: -2rem;
        --text-absolute-right: -2rem;

        position: absolute;
        bottom: 5rem;
        z-index: 10;

        transform: translate(-5rem)
      }
    `}static get properties(){return{dark:{type:Boolean,reflect:!0}}}constructor(){super(),this.addEventListener("change",(t=>{this.dark=t.detail.checked,t.detail.checked?console.log("@DARK"):console.log("@LIGHT")}))}render(){return q`

      <div>
        ${bt}
      </div>

      <div>
        <p>
          <a href="https://www.instagram.com/cicciosgamino/" target="_blank">@cicciosgamino</a>
        </p>
      </div>

      <images-switch .checked=${this.dark}></images-switch>
    `}});
