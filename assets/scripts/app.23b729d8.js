(function(t){function e(e){for(var i,s,r=e[0],o=e[1],u=e[2],p=0,d=[];p<r.length;p++)s=r[p],n[s]&&d.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);c&&c(e);while(d.length)d.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},l=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact_page_wrapper",attrs:{id:"app"}},[a("section",{staticClass:"page_content"},[t._m(0),t.isFormSubmitted?t._e():a("div",{staticClass:"form_view"},[a("h1",{staticClass:"contact_title"},[t._v("Say hi")]),a("p",{staticClass:"form_info_basic"},[t._v("It's a form. You know what to do.")]),t._m(1),a("section",{staticClass:"form_wrapper"},[a("form",{staticClass:"contact_form",on:{submit:t.checkForm}},[a("div",{staticClass:"form_content"},[a("MaterialInput",{attrs:{type:"text",name:"username",label:"Name",isValid:t.validity.username,errorText:"Don't be shy."},on:{validitySetter:t.inputValidSetter},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[t._v("What is your name?")]),a("MaterialInput",{attrs:{type:"text",name:"email",label:"Your fancy email",isValid:t.validity.email,errorText:"That email address looks a bit weird 🤔"},on:{validitySetter:t.inputValidSetter},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[t._v("Your fancy email")]),a("MaterialInput",{attrs:{type:"textarea",name:"projectInfo",label:"Your message",isValid:t.validity.projectInfo,errorText:"Go on. Nothing bad will happen.",isAttachable:"true"},on:{validitySetter:t.inputValidSetter},model:{value:t.projectInfo,callback:function(e){t.projectInfo=e},expression:"projectInfo"}},[t._v("Tell us about your project")])],1),t._m(2)])])]),t.isFormSubmitted?a("div",{staticClass:"submitted_form_view"},[a("p",{staticClass:"contact_title"},[t._v("Thank you!")]),a("p",{staticClass:"form_info_basic"},[t._v("Your message has been sent successfully.")])]):t._e()])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav_menu"},[a("a",{staticClass:"home_link",attrs:{href:"index.html"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"form_info_details"},[t._v("or email us at "),a("a",{staticClass:"contact_email",attrs:{href:"mailto:hello@epicmax.co"}},[t._v("hello@epicmax.co")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"buttons_wrapper"},[a("button",{staticClass:"submit_wrapper",attrs:{type:"submit"}},[a("div",{staticClass:"action_button"},[t._v("Send Message")])])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"material_input_component",class:t.computedClasses},[a("div",{staticClass:"input_wrapper"},["text"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"material_input",attrs:{type:"text",name:t.name,id:t.id,placeholder:t.placeholder},domProps:{value:t.inputValue},on:{focus:function(e){return t.handleFocus(!0)},blur:function(e){return t.handleFocus(!1)},input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.handleModelInput]}}):t._e(),"textarea"===t.type?a("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"material_input",attrs:{type:"text",rows:"1",name:t.name,id:t.id,placeholder:t.placeholder},domProps:{value:t.inputValue},on:{focus:function(e){return t.handleFocus(!0)},blur:function(e){return t.handleFocus(!1)},input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.handleModelInput]}}):t._e()]),t.isAttachable&&t.focus||t.isAttachable&&t.files.length||t.isAttachable&&this.inputValue?a("div",{staticClass:"attachment_container"},[a("div",{staticClass:"attachment_file_input"},[a("label",{staticClass:"attachment_file_input_label",attrs:{for:"inputfile"},on:{mousedown:function(e){return t.keepFocus()}}},[a("span",{staticClass:"file_name"},[t._v(t._s(t.attachmentFileName))]),a("input",{staticClass:"attachment_file_input_field",attrs:{id:"inputfile",type:"file",name:"attachment"},on:{change:t.fileChangeHandler}})])])]):t._e(),a("span",{staticClass:"material_input_bar"}),a("label",{staticClass:"material_placeholder"},[t._t("default")],2),a("label",{staticClass:"material_label"},[t._v(t._s(t.label))]),a("div",{staticClass:"material_error",class:{visibility_none:t.isValid||t.focus}},[t._v(t._s(t.errorText))])])},r=[],o=(a("5df3"),a("1c4c"),a("7f7f"),a("d7f3")),u={name:"material_input",directives:{autosize:o["a"]},computed:{computedClasses:function(){return{material_active:this.focus,material_has_errors:Boolean(!this.isValid&&!this.focus),material_raised:Boolean(this.focus||this.inputValue||this.placeholder&&!this.inputValue||this.files.length),attachable:this.isAttachable,has_content:this.files.length||this.inputValue}},attachmentFileName:function(){return this.files.length>0&&"name"in this.files[0]?this.files[0].name:this.attachmentFilePlaceholder}},data:function(){return{inputValue:null,focus:!1,isFocusUpdateNeed:!0,valid:!0,files:[]}},methods:{handleModelInput:function(t){this.$emit("input",t.target.value,t),this.handleValidation()},handleFocus:function(t){this.isFocusUpdateNeed?this.focus=t:this.isFocusUpdateNeed=!0,this.$emit("validitySetter",this.name,!0)},handleValidation:function(){this.valid=this.$el?this.$el.querySelector(".material_input").validity.valid:this.valid},fileChangeHandler:function(t){this.files=Array.from(t.target.files)},keepFocus:function(){var t=this;this.isFocusUpdateNeed=!1,document.body.onfocus=function(){document.body.onfocus=null,t.$el.querySelector(".material_input").focus()}}},props:{id:{type:String,default:null},name:{type:String,default:null},type:{type:String,default:"text"},placeholder:{type:String,default:null},label:{type:String,default:null},attachmentFilePlaceholder:{type:String,default:"Add attachment"},isValid:{type:Boolean},errorText:{type:String},isAttachable:{type:String,default:null}}},c=u,p=a("2877"),d=Object(p["a"])(c,s,r,!1,null,null,null),f=d.exports,m={name:"App",data:function(){return{username:"",email:"",projectInfo:"",validity:{username:!0,email:!0,projectInfo:!0},isFormSubmitted:!1}},methods:{checkForm:function(t){this.username||(this.validity.username=!1),this.email&&this.validEmail(this.email)||(this.validity.email=!1),this.projectInfo||(this.validity.projectInfo=!1),this.validity.username&&this.validity.email&&this.validity.projectInfo&&(this.isFormSubmitted=!0),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)},inputValidSetter:function(t,e){this.validity[t]=e}},components:{MaterialInput:f}},h=m,v=Object(p["a"])(h,n,l,!1,null,null,null),_=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.23b729d8.js.map