/**
 * TinyMCE version 6.1.2 (2022-07-29)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=(t,e,r)=>{const s="UL"===e?"InsertUnorderedList":"InsertOrderedList";t.execCommand(s,!1,!1===r?null:{"list-style-type":r})},r=t=>e=>e.options.get(t),s=r("advlist_number_styles"),n=r("advlist_bullet_styles");var i=tinymce.util.Tools.resolve("tinymce.util.Tools");class l{constructor(t,e){this.tag=t,this.value=e}static some(t){return new l(!0,t)}static none(){return l.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?l.some(t(this.value)):l.none()}bind(t){return this.tag?t(this.value):l.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:l.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return null==t?l.none():l.some(t)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}l.singletonNone=new l(!1);const o=t=>t&&/^(TH|TD)$/.test(t.nodeName),a=(t,e)=>r=>{const s=s=>{r.setActive(((t,e,r)=>{const s=((t,e)=>{for(let r=0;r<t.length;r++)if(e(t[r]))return r;return-1})(e.parents,o),n=-1!==s?e.parents.slice(0,s):e.parents,l=i.grep(n,(t=>e=>e&&/^(OL|UL|DL)$/.test(e.nodeName)&&((t,e)=>t.dom.isChildOf(e,t.getBody()))(t,e))(t));return l.length>0&&l[0].nodeName===r})(t,s,e))};return t.on("NodeChange",s),()=>t.off("NodeChange",s)},u=(t,r,s,n,o,u)=>{u.length>1?((t,r,s,n,o,u)=>{t.ui.registry.addSplitButton(r,{tooltip:s,icon:"OL"===o?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:t=>{t(i.map(u,(t=>{const e="OL"===o?"num":"bull",r="disc"===t||"decimal"===t?"default":t,s="default"===t?"":t,n=(t=>t.replace(/\-/g," ").replace(/\b\w/g,(t=>t.toUpperCase())))(t);return{type:"choiceitem",value:s,icon:"list-"+e+"-"+r,text:n}})))},onAction:()=>t.execCommand(n),onItemAction:(r,s)=>{e(t,o,s)},select:e=>{const r=(t=>{const e=t.dom.getParent(t.selection.getNode(),"ol,ul"),r=t.dom.getStyle(e,"listStyleType");return l.from(r)})(t);return r.map((t=>e===t)).getOr(!1)},onSetup:a(t,o)})})(t,r,s,n,o,u):((t,e,r,s,n,i)=>{t.ui.registry.addToggleButton(e,{active:!1,tooltip:r,icon:"OL"===n?"ordered-list":"unordered-list",onSetup:a(t,n),onAction:()=>t.execCommand(s)})})(t,r,s,n,o)};t.add("advlist",(t=>{t.hasPlugin("lists")?((t=>{const e=t.options.register;e("advlist_number_styles",{processor:"string[]",default:"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman".split(",")}),e("advlist_bullet_styles",{processor:"string[]",default:"default,circle,square".split(",")})})(t),(t=>{u(t,"numlist","Numbered list","InsertOrderedList","OL",s(t)),u(t,"bullist","Bullet list","InsertUnorderedList","UL",n(t))})(t),(t=>{t.addCommand("ApplyUnorderedListStyle",((r,s)=>{e(t,"UL",s["list-style-type"])})),t.addCommand("ApplyOrderedListStyle",((r,s)=>{e(t,"OL",s["list-style-type"])}))})(t)):console.error("Please use the Lists plugin together with the Advanced List plugin.")}))}();