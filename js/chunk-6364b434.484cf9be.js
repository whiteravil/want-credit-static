(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6364b434"],{1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=o},"2a12":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=o},3360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,r)}),!0)}))};t.default=o},"3a54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=o},"45b8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.regex)("numeric",/^[0-9]*$/);t.default=o},"46bc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=o},"53bf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"s-confirm-admin"},[n("NeedConfirmation")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"need-confirmation"},[n("div",{staticClass:"need-confirmation-title"},[n("div",{staticClass:"h1",domProps:{innerHTML:e._s(e.company.ul?e.$t("need_confirm.title"):"Необходима идентификация индивидуального предпринимателя")}}),n("p",{domProps:{innerHTML:e._s(e.company.ul?e.$t("need_confirm.descr"):"На номер телефона директора будет направлена ссылка для авторизации через Портал Госуслуг")}})]),n("div",{staticClass:"need-confirmation-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"need-confirmation-form-block"},[n("form",{staticClass:"need-confirmation-form",on:{submit:function(t){return t.preventDefault(),e.personSendHandler.apply(null,arguments)}}},[n("div",{staticClass:"form-title"},[n("div",{staticClass:"h2",domProps:{innerHTML:e._s(e.$t("need_confirm.employee_title"))}})]),n("div",{staticClass:"form-descr"},[n("p",{domProps:{innerHTML:e._s(e.company.ul?e.$t("need_confirm.employee_descr"):"Введите номер телефона индивидуального предпринимателя")}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"mask",rawName:"v-mask",value:"+7 ### ### ## ##",expression:"'+7 ### ### ## ##'"}],staticClass:"form-control no-label",class:{invalid:!!e.$v.phone.$error&&(!e.$v.phone.required||!e.$v.phone.minLength)},attrs:{type:"text",placeholder:"Введите телефон "+(e.company.ul?"директора":"ИП")},domProps:{value:e.phone},on:{change:e.addCountryCode,input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("button",{staticClass:"btn",class:{loading:e.load},attrs:{type:"submit",disabled:e.load}},[e._v("ОТПРАВИТЬ")])])])])]),n("div",{staticClass:"col-6"},[n("div",{staticClass:"need-confirmation-form-block"},[n("div",{staticClass:"check-on-director"},[n("div",{staticClass:"h2",domProps:{innerHTML:e._s(e.company.ul?"Я директор":"Я индивидуальный предприниматель")}}),n("p",{domProps:{innerHTML:e._s(e.$t("need_confirm.director_descr"))}}),n("button",{staticClass:"btn",class:{loading:e.load2},attrs:{disabled:e.load2},on:{click:e.confirmAccountAdmin}},[e._v("Подтвердить личность")])])])])])]),e.successModal?n("Popup",{ref:"successModal",attrs:{classes:"code-modal-popup"},on:{"close-modal":e.closeSuccessModal}},[n("div",{staticClass:"popup-title"},[n("div",{staticClass:"h3"},[e._v("Ссылка на подтверждение отправлена по номеру телефона")])]),n("div",{staticClass:"popup-body"},[n("p",[e._v("Мы отправили код для подтверждения на номер "),n("span",{staticStyle:{"white-space":"nowrap","font-weight":"bold"}},[e._v(e._s(e._f("VMask")(e.phone,"+# ### ###-##-##")))])]),n("p",[e._v("После подтверждения личности "+e._s(e.company.ul?"директора":"ИП")+" необходимо обновить страницу.")]),n("button",{staticClass:"btn btn-block close-modal"},[e._v("Хорошо")])])]):e._e(),e.updatePageModal?n("Popup",{ref:"updatePageModal",attrs:{noClose:!0}},[n("div",{staticClass:"popup-title"},[n("div",{staticClass:"h3"},[e._v("Для входа нужно перезагрузить страницу")])]),n("div",{staticClass:"popup-body"},[n("p",[e._v("После подтверждения учетной записи, перезагрузите страницу")]),n("button",{staticClass:"btn btn-block",on:{click:e.reloadPage}},[e._v("Перезагрузить")])])]):e._e()],1)},u=[],i=n("5530"),c=n("b5ae"),d=n("2f62"),f=n("8acc"),s={name:"NeedConfirmation",components:{Popup:f["a"]},validations:{phone:{required:c["required"],minLength:Object(c["minLength"])(16)}},data:function(){return{phone:"",load:!1,load2:!1,codeModal:!1,codeVal:"",sendCodeDisabled:!0,sendCodeLoading:!1,successModal:!1,checkAdminTimeout:"",updatePageModal:!1}},computed:Object(i["a"])({},Object(d["c"])({currentUser:function(e){return e.users.currentUser},company:function(e){return e.users.company}})),methods:{personSendHandler:function(){var e=this;this.$v.$invalid?this.$v.$touch():(this.load=!0,this.$store.dispatch("sendMessageForAdmin",this.$options.filters.phoneFilter(this.phone)).then((function(t){t&&(e.successModal=!0),e.successModal=!0,e.load=!1})).catch((function(){return e.load=!1})))},confirmAccountAdmin:function(){var e=this;this.load2=!0,this.$store.dispatch("sendMessageForAdmin",this.currentUser.phone).then((function(){e.successModal=!0,e.load2=!1})).catch((function(){return e.load2=!1}))},startCheck:function(){},closeSuccessModal:function(){var e=this;this.successModal=!1,setTimeout((function(){e.updatePageModal=!0}),3e3)},addCountryCode:function(e){0!==e.indexOf("+7")&&"9"!==e.charAt(0)&&(this.phone="+7")},reloadPage:function(){location.reload()}},mounted:function(){}},l=s,p=n("2877"),m=Object(p["a"])(l,a,u,!1,null,"db79e87c",null),v=m.exports,b={name:"ConfirmAdmin",components:{NeedConfirmation:v}},y=b,h=Object(p["a"])(y,r,o,!1,null,"04e66b7a",null);t["default"]=h.exports},"5d75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,a=(0,r.regex)("email",o);t.default=a},"5db3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=o},6235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=o},6417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"not"},(function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)}))};t.default=o},"772d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,r.regex)("url",o);t.default=a},"78ef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=o(n("8750"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=i;var c=function(e,t,n){return"function"===typeof e?e.call(t,n):n[e]};t.ref=c;var d=function(e,t){return(0,r.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=d},8750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",BASE_URL:"/service/"}).BUILD?n("cb69").withParams:n("0234").withParams,o=r;t.default=o},"91d3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var n="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(a)}))};t.default=o;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)}))};t.default=o},b5ae:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var r=w(n("6235")),o=w(n("3a54")),a=w(n("45b8")),u=w(n("ec11")),i=w(n("5d75")),c=w(n("c99d")),d=w(n("91d3")),f=w(n("2a12")),s=w(n("5db3")),l=w(n("d4f4")),p=w(n("aa82")),m=w(n("e652")),v=w(n("b6cb")),b=w(n("772d")),y=w(n("d294")),h=w(n("3360")),_=w(n("6417")),P=w(n("eb66")),g=w(n("46bc")),O=w(n("1331")),j=w(n("c301")),x=M(n("78ef"));function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,r.ref)(e,this,n)}))};t.default=o},c301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=o},c99d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=o;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,n){"use strict";(function(e){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},a=r.vuelidate?r.vuelidate.withParams:o;t.withParams=a}).call(this,n("c8ba"))},d294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,r)}),!1)}))};t.default=o},d4f4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=o},e652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)}))};t.default=o},eb66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=o},ec11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),o=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))};t.default=o}}]);
//# sourceMappingURL=chunk-6364b434.484cf9be.js.map