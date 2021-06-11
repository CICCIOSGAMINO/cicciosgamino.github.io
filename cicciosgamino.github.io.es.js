/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,i=new RegExp(`${s}|${n}`);class r{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let p=0,h=-1,d=0;const{strings:u,values:{length:m}}=t;for(;d<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)a(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[d],s=c.exec(e)[2],n=s.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const a=r.split(i);this.parts.push({type:"attribute",index:h,name:s,strings:a}),d+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,r=e.split(i),o=r.length-1;for(let e=0;e<o;e++){let n,i=r[e];if(""===i)n=l();else{const t=c.exec(i);null!==t&&a(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(i)}s.insertBefore(n,t),this.parts.push({type:"node",index:++h})}""===r[o]?(s.insertBefore(l(),t),n.push(t)):t.data=r[o],d+=o}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==p||(h++,e.insertBefore(l(),t)),p=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(n.push(t),h--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=r.pop()}for(const s of n)s.parentNode.removeChild(s)}}const a=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},o=t=>-1!==t.index,l=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(t,e){const{element:{content:s},parts:n}=t,i=document.createTreeWalker(s,133,null,!1);let r=d(n),a=n[r],o=-1,l=0;const c=[];let p=null;for(;i.nextNode();){o++;const t=i.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==a&&a.index===o;)a.index=null!==p?-1:a.index-l,r=d(n,r),a=n[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const h=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},d=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(o(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=t=>"function"==typeof t&&u.has(t),f={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class _{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let r,a=0,l=0,c=i.nextNode();for(;a<n.length;)if(r=n[a],o(r)){for(;l<r.index;)l++,"TEMPLATE"===c.nodeName&&(s.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=s.pop(),c=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),v=` ${s} `;class S{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],a=t.lastIndexOf("\x3c!--");i=(a>-1||i)&&-1===t.indexOf("--\x3e",a+1);const o=c.exec(t);e+=null===o?t+(i?v:n):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==g&&(e=g.createHTML(e)),t.innerHTML=e,t}}class w extends S{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),((t,e,s=null,n=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,n),e=s}})(e,s.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),C=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let n=0;n<s.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new F(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!C(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=s[i];if(void 0!==e){const t=e.value;if(b(t)||!C(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class F{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||b(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class N{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(l()),this.endNode=t.appendChild(l())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=l()),t.__insert(this.endNode=l())}insertAfterPart(t){t.__insert(this.startNode=l()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):C(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof _&&this.value.template===e)this.value.update(t.values);else{const s=new _(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const i of t)s=e[n],void 0===s&&(s=new N(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(i),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class P extends x{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends F{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function k(t){let e=L.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},L.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(s);return n=e.keyString.get(i),void 0===n&&(n=new r(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const L=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const z=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,n){const i=e[0];if("."===i){return new P(t,e.slice(1),s).parts}if("@"===i)return[new E(t,e.slice(1),n.eventContext)];if("?"===i)return[new T(t,e.slice(1),s)];return new x(t,e,s).parts}handleTextExpression(t){return new N(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const O=(t,...e)=>new S(t,e,"html",z),R=(t,e)=>`${t}--${e}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const q=t=>e=>{const n=R(e.type,t);let i=L.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},L.set(n,i));let a=i.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(s);if(a=i.keyString.get(o),void 0===a){const s=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(s,t),a=new r(e,s),i.keyString.set(o,a)}return i.stringsArray.set(e.strings,a),a},H=["html","svg"],I=new Set,j=(t,e,s)=>{I.add(t);const n=s?s.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let c=0;c<r;c++){const t=i[c];t.parentNode.removeChild(t),a.textContent+=t.textContent}(t=>{H.forEach((e=>{const s=L.get(R(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),p(t,s)}))}))})(t);const o=n.content;s?function(t,e,s=null){const{element:{content:n},parts:i}=t;if(null==s)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let a=d(i),o=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(o=h(e),s.parentNode.insertBefore(e,s));-1!==a&&i[a].index===l;){if(o>0){for(;-1!==a;)i[a].index+=o,a=d(i,a);return}a=d(i,a)}}(s,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),p(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const B={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},X=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:X};class D extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=W){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||W}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=X){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||B,i="function"==typeof n?n:n.fromAttribute;return i?i(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||B.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=W){const n=this.constructor,i=n._attributeNameForProperty(t,s);if(void 0!==i){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const i=this.constructor;s=s||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}D.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const J=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,e){if(e!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Q=(t,...e)=>{const s=e.reduce(((e,s,n)=>e+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1]),t[0]);return new K(s,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Y={};class Z extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),n=[];s.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!J){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new K(String(e),G)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Y}}Z.finalized=!0,Z.render=(t,s,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=U.has(s),a=$&&11===s.nodeType&&!!s.host,o=a&&!I.has(i),l=o?document.createDocumentFragment():s;if(((t,s,n)=>{let i=U.get(s);void 0===i&&(e(s,s.firstChild),U.set(s,i=new N(Object.assign({templateFactory:k},n))),i.appendInto(s)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:q(i)},n)),o){const t=U.get(l);U.delete(l);const n=t.value instanceof _?t.value.template:void 0;j(i,l,n),e(s,s.firstChild),s.appendChild(l),U.set(s,t)}!r&&a&&window.ShadyCSS.styleElement(s.host)},Z.shadowRootOptions={mode:"open"};const tt=((t,...e)=>new w(t,e,"svg",z)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */)`
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
`;customElements.define("app-lite",class extends Z{static get styles(){return Q`
      :host {
        display: block;
        margin: 0;
        padding: 0;
        /* margin: 2em 2em; */

        height: 100vh;

        text-align: center;
      }

      svg {
        padding-top: 5rem;
      }

      a {
        text-decoration: none;
      }
    `}render(){return O`

      ${tt}

      <p>
        <a href="https://www.instagram.com/cicciosgamino/" target="_blank">@cicciosgamino</a>
      </p>

      
    `}});
