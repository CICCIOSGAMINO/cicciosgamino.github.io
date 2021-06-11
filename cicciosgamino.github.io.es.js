var t,e,s,i,n,r,o,a,l,c,h=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},d=(t,e,s)=>(((t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)})(t,e,"access private method"),s);
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
const p="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,u=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},m=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${m}--\x3e`,v=new RegExp(`${m}|${f}`);class g{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=n.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)b(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[a],s=S.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(v);this.parts.push({type:"attribute",index:o,name:s,strings:r}),a+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(m)>=0){const i=t.parentNode,n=e.split(v),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=w();else{const t=S.exec(r);null!==t&&b(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===n[r]?(i.insertBefore(w(),t),s.push(t)):t.data=n[r],a+=r}}else if(8===t.nodeType)if(t.data===m){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(w(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(m,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const h of s)h.parentNode.removeChild(h)}}const b=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},y=t=>-1!==t.index,w=()=>document.createComment(""),S=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=k(i),o=i[r],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,r=k(i,r),o=i[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const x=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},k=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(y(e))return s}return-1};
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
const C=new WeakMap,T=t=>"function"==typeof t&&C.has(t),P={},N={};
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
class F{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const s of this.__parts)void 0!==s&&s.commit()}_clone(){const t=p?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,r=0,o=0,a=i.nextNode();for(;r<s.length;)if(n=s[r],y(n)){for(;o<n.index;)o++,"TEMPLATE"===a.nodeName&&(e.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=e.pop(),a=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return p&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const E=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),A=` ${m} `;class M{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=S.exec(t);e+=null===r?t+(s?A:f):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+m}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==E&&(e=E.createHTML(e)),t.innerHTML=e,t}}class U extends M{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,s=e.firstChild;return e.removeChild(s),((t,e,s=null,i=null)=>{for(;e!==s;){const s=e.nextSibling;t.insertBefore(e,i),e=s}})(e,s.firstChild),t}}
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
 */const L=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class V{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let i=0;i<s.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new O(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!$(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=s[n];if(void 0!==e){const t=e.value;if(L(t)||!$(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class O{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===P||L(t)&&t===this.value||(this.value=t,T(t)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){const t=this.value;this.value=P,t(this)}this.value!==P&&this.committer.commit()}}class R{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(w()),this.endNode=t.appendChild(w())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=w()),t.__insert(this.endNode=w())}insertAfterPart(t){t.__insert(this.startNode=w()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}const t=this.__pendingValue;t!==P&&(L(t)?t!==this.value&&this.__commitText(t):t instanceof M?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):$(t)?this.__commitIterable(t):t===N?(this.value=N,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof F&&this.value.template===e)this.value.update(t.values);else{const s=new F(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new R(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){u(this.startNode.parentNode,t.nextSibling,this.endNode)}}class z{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}if(this.__pendingValue===P)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=P}}class H extends V{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new B(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class B extends O{}let I=!1;(()=>{try{const t={get capture(){return I=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class j{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}if(this.__pendingValue===P)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=W(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=P}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const W=t=>t&&(I?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function q(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(m);return s=e.keyString.get(i),void 0===s&&(s=new g(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const D=new Map,X=new WeakMap;
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
 */const J=new
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
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new H(t,e.slice(1),s).parts}if("@"===n)return[new j(t,e.slice(1),i.eventContext)];if("?"===n)return[new z(t,e.slice(1),s)];return new V(t,e,s).parts}handleTextExpression(t){return new R(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const K=(t,...e)=>new M(t,e,"html",J),G=(t,e)=>`${t}--${e}`;let Z=!0;void 0===window.ShadyCSS?Z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Z=!1);const Q=t=>e=>{const s=G(e.type,t);let i=D.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},D.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(m);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();Z&&window.ShadyCSS.prepareTemplateDom(s,t),n=new g(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},Y=["html","svg"],tt=new Set,et=(t,e,s)=>{tt.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let c=0;c<r;c++){const t=n[c];t.parentNode.removeChild(t),o.textContent+=t.textContent}(t=>{Y.forEach((e=>{const s=D.get(G(e,t));void 0!==s&&s.keyString.forEach((t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{s.add(t)})),_(t,s)}))}))})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=k(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=x(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=k(n,o);return}o=k(n,o)}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),_(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const st={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},it=(t,e)=>e!==t&&(e==e||t==t),nt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:it};class rt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=nt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||nt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=it){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||st,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||st.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=nt){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let i=!0;if(void 0!==t){const n=this.constructor;s=s||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}rt.finalized=!0;
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
const ot=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol();class lt{constructor(t,e){if(e!==at)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ot?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ct=(t,...e)=>{const s=e.reduce(((e,s,i)=>e+(t=>{if(t instanceof lt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1]),t[0]);return new lt(s,at)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ht={};class dt extends rt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight(((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t)),s),s=e(t,new Set),i=[];s.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!ot){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new lt(String(e),at)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ht&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ht}}dt.finalized=!0,dt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=X.has(e),r=Z&&11===e.nodeType&&!!e.host,o=r&&!tt.has(i),a=o?document.createDocumentFragment():e;if(((t,e,s)=>{let i=X.get(e);void 0===i&&(u(e,e.firstChild),X.set(e,i=new R(Object.assign({templateFactory:q},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:Q(i)},s)),o){const t=X.get(a);X.delete(a);const s=t.value instanceof F?t.value.template:void 0;et(i,a,s),u(e,e.firstChild),e.appendChild(a),X.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)},dt.shadowRootOptions={mode:"open"};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ut=Symbol();class mt{constructor(t,e){if(e!==ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return pt&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const ft=new Map,vt=t=>{let e=ft.get(t);return void 0===e&&ft.set(t,e=new mt(t,ut)),e},gt=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(t instanceof mt)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return vt(s)},bt=pt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>vt("string"==typeof t?t:t+""))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var yt,wt,St,_t;const xt={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(i){s=null}}return s}},kt=(t,e)=>e!==t&&(e==e||t==t),Ct={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:kt};class Tt extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this.Πp(s,e);void 0!==i&&(this.Πm.set(i,s),t.push(i))})),t}static createProperty(t,e=Ct){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ct}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(bt(t))}else void 0!==t&&e.push(bt(t));return e}static"Πp"(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{pt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style");s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,s){this.K(t,s)}"Πj"(t,e,s=Ct){var i,n;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:xt.toAttribute)(e,s.type);this.Πh=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this.Πh=null}}K(t,e){var s,i,n;const r=this.constructor,o=r.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(i=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:xt.fromAttribute;this.Πh=o,this[o]=l(e,t.type),this.Πh=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||kt)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const s=this.L;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this.Π$()}catch(i){throw e=!1,this.Π$(),i}e&&this.E(s)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pt,Nt,Ft,Et;Tt.finalized=!0,Tt.elementProperties=new Map,Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},null===(wt=(yt=globalThis).reactiveElementPlatformSupport)||void 0===wt||wt.call(yt,{ReactiveElement:Tt}),(null!==(St=(_t=globalThis).reactiveElementVersions)&&void 0!==St?St:_t.reactiveElementVersions=[]).push("1.0.0-rc.2");const At=globalThis.trustedTypes,Mt=At?At.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ut=`lit$${(Math.random()+"").slice(9)}$`,Lt="?"+Ut,$t=`<${Lt}>`,Vt=document,Ot=(t="")=>Vt.createComment(t),Rt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,zt=Array.isArray,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,It=/>/g,jt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Wt=/'/g,qt=/"/g,Dt=/^(?:script|style|textarea)$/i,Xt=(Qt=1,(t,...e)=>({_$litType$:Qt,strings:t,values:e})),Jt=Symbol.for("lit-noChange"),Kt=Symbol.for("lit-nothing"),Gt=new WeakMap,Zt=Vt.createTreeWalker(Vt,129,null,!1);var Qt,Yt,te,ee,se,ie,ne;class re{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=Ht;for(let l=0;l<s;l++){const e=t[l];let s,a,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,a=o.exec(e),null!==a);)h=o.lastIndex,o===Ht?"!--"===a[1]?o=Bt:void 0!==a[1]?o=It:void 0!==a[2]?(Dt.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=jt):void 0!==a[3]&&(o=jt):o===jt?">"===a[0]?(o=null!=n?n:Ht,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,s=a[1],o=void 0===a[3]?jt:'"'===a[3]?qt:Wt):o===qt||o===Wt?o=jt:o===Bt||o===It?o=Ht:(o=jt,n=void 0);const d=o===jt&&t[l+1].startsWith("/>")?" ":"";r+=o===Ht?e+$t:c>=0?(i.push(s),e.slice(0,c)+"$lit$"+e.slice(c)+Ut+d):e+Ut+(-2===c?(i.push(void 0),l):d)}const a=r+(t[s]||"<?>")+(2===e?"</svg>":"");return[void 0!==Mt?Mt.createHTML(a):a,i]})(t,e);if(this.el=re.createElement(l,s),Zt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=Zt.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Ut)){const s=c[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(Ut),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?he:"?"===e[1]?de:"@"===e[1]?pe:ce})}else a.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(Dt.test(i.tagName)){const t=i.textContent.split(Ut),e=t.length-1;if(e>0){i.textContent=At?At.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],Ot()),Zt.nextNode(),a.push({type:2,index:++n});i.append(t[e],Ot())}}}else if(8===i.nodeType)if(i.data===Lt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(Ut,t+1));)a.push({type:7,index:n}),t+=Ut.length-1}n++}}static createElement(t,e){const s=Vt.createElement("template");return s.innerHTML=t,s}}function oe(t,e,s=t,i){var n,r,o,a;if(e===Jt)return e;let l=void 0!==i?null===(n=s.Σi)||void 0===n?void 0:n[i]:s.Σo;const c=Rt(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l.T(t,s,i)),void 0!==i?(null!==(o=(a=s).Σi)&&void 0!==o?o:a.Σi=[])[i]=l:s.Σo=l),void 0!==l&&(e=oe(t,l.S(t,e.values),l,i)),e}class ae{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:s},parts:i}=this.D,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Vt).importNode(s,!0);Zt.currentNode=n;let r=Zt.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new le(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ue(r,this,t)),this.l.push(e),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=Zt.nextNode(),o++)}return n}v(t){let e=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,e),e+=s.strings.length-2):s.I(t[e])),e++}}class le{constructor(t,e,s,i){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=s,this.options=i}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=oe(this,t,e),Rt(t)?t===Kt||null==t||""===t?(this.H!==Kt&&this.R(),this.H=Kt):t!==this.H&&t!==Jt&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return zt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(Vt.createTextNode(t)),this.H=t}_(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this.C(t):(void 0===i.el&&(i.el=re.createElement(i.h,this.options)),i);if((null===(e=this.H)||void 0===e?void 0:e.D)===n)this.H.v(s);else{const t=new ae(n,this),e=t.u(this.options);t.v(s),this.$(e),this.H=t}}C(t){let e=Gt.get(t.strings);return void 0===e&&Gt.set(t.strings,e=new re(t)),e}g(t){zt(this.H)||(this.H=[],this.R());const e=this.H;let s,i=0;for(const n of t)i===e.length?e.push(s=new le(this.k(Ot()),this.k(Ot()),this,this.options)):s=e[i],s.I(n),i++;i<e.length&&(this.R(s&&s.B.nextSibling,i),e.length=i)}R(t=this.A.nextSibling,e){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class ce{constructor(t,e,s,i,n){this.type=1,this.H=Kt,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(Kt),this.strings=s):this.H=Kt}get tagName(){return this.element.tagName}I(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=oe(this,t,e,0),r=!Rt(t)||t!==this.H&&t!==Jt,r&&(this.H=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=oe(this,i[s+o],e,o),a===Jt&&(a=this.H[o]),r||(r=!Rt(a)||a!==this.H[o]),a===Kt?t=Kt:t!==Kt&&(t+=(null!=a?a:"")+n[o+1]),this.H[o]=a}r&&!i&&this.W(t)}W(t){t===Kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class he extends ce{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===Kt?void 0:t}}class de extends ce{constructor(){super(...arguments),this.type=4}W(t){t&&t!==Kt?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class pe extends ce{constructor(){super(...arguments),this.type=5}I(t,e=this){var s;if((t=null!==(s=oe(this,t,e,0))&&void 0!==s?s:Kt)===Jt)return;const i=this.H,n=t===Kt&&i!==Kt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Kt&&(i===Kt||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,s;"function"==typeof this.H?this.H.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class ue{constructor(t,e,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=s}I(t){oe(this,t)}}null===(Nt=(Pt=globalThis).litHtmlPlatformSupport)||void 0===Nt||Nt.call(Pt,re,le),(null!==(Ft=(Et=globalThis).litHtmlVersions)&&void 0!==Ft?Ft:Et.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Yt=(ne=globalThis).litElementVersions)&&void 0!==Yt?Yt:ne.litElementVersions=[]).push("3.0.0-rc.2");class me extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();super.update(t),this.Φt=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new le(e.insertBefore(Ot(),t),t,void 0,s)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return Jt}}me.finalized=!0,me._$litElement$=!0,null===(ee=(te=globalThis).litElementHydrateSupport)||void 0===ee||ee.call(te,{LitElement:me}),null===(ie=(se=globalThis).litElementPlatformSupport)||void 0===ie||ie.call(se,{LitElement:me});t=new WeakSet,e=function(t){const e=13,s=32;if(!this.disabled)switch(t.keyCode){case s:case e:d(this,n,r).call(this)}},s=new WeakSet,i=function(){this.disabled||(this.checked=this.shadowRoot.querySelector("#switch").checked,d(this,o,a).call(this),d(this,l,c).call(this,this.checked))},n=new WeakSet,r=function(){this.disabled||(this.checked=!this.checked,d(this,o,a).call(this),d(this,l,c).call(this,this.checked))},o=new WeakSet,a=function(){this.text=this.checked?this.trueText:this.falseText},l=new WeakSet,c=function(t){const e=new CustomEvent("change",{detail:{checked:t},bubbles:!0,composed:!0});this.dispatchEvent(e)},customElements.define("images-switch",class extends me{constructor(){super(),h(this,t),h(this,s),h(this,n),h(this,o),h(this,l),this.checked=!1,this.disabled=!1,this.value="",this.trueText="",this.falseText="",this.text=""}static get styles(){return gt`
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
    `}static get properties(){return{checked:{type:Boolean,attribute:!0,reflect:!0},disabled:{type:Boolean,attribute:!0,refelect:!0},value:String,trueText:String,falseText:String}}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),this.setAttribute("role","switch"),this.addEventListener("keyup",d(this,t,e)),d(this,o,a).call(this)}disconnectedCallback(){this.removeEventListener("keyup",d(this,t,e)),super.disconnectedCallback()}render(){return Xt`
        <input type="checkbox"
          id="switch"
          role="switch"
          name="label-switch"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${d(this,s,i)}"
          aria-labelledby="label-switch"/>
        <label id="label-switch" for="switch"></label>
        <p id="text">${this.text}</p>
    `}});const fe=((t,...e)=>new U(t,e,"svg",J)
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
`;customElements.define("app-lite",class extends dt{static get styles(){return ct`
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
        transform: translate(-5rem)
      }
    `}static get properties(){return{dark:{type:Boolean,reflect:!0}}}constructor(){super(),this.addEventListener("change",(t=>{this.dark=t.detail.checked,t.detail.checked?console.log("@DARK"):console.log("@LIGHT")}))}render(){return K`

      ${fe}

      <p>
        <a href="https://www.instagram.com/cicciosgamino/" target="_blank">@cicciosgamino</a>
      </p>

      <images-switch .checked=${this.dark}></images-switch>
    `}});
