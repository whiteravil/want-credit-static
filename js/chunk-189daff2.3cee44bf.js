(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-189daff2"],{1276:function(t,e,i){"use strict";var s=i("d784"),a=i("44e7"),n=i("825a"),r=i("1d80"),o=i("4840"),c=i("8aa5"),l=i("50c4"),d=i("14c3"),u=i("9263"),f=i("9f7f"),p=f.UNSUPPORTED_Y,h=[].push,v=Math.min,g=4294967295;s("split",2,(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=String(r(this)),n=void 0===i?g:i>>>0;if(0===n)return[];if(void 0===t)return[s];if(!a(t))return e.call(s,t,n);var o,c,l,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");while(o=u.call(v,s)){if(c=v.lastIndex,c>p&&(d.push(s.slice(p,o.index)),o.length>1&&o.index<s.length&&h.apply(d,o.slice(1)),l=o[0].length,p=c,d.length>=n))break;v.lastIndex===o.index&&v.lastIndex++}return p===s.length?!l&&v.test("")||d.push(""):d.push(s.slice(p)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var a=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,a,i):s.call(String(a),e,i)},function(t,a){var r=i(s,t,this,a,s!==e);if(r.done)return r.value;var u=n(t),f=String(this),h=o(u,RegExp),m=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(p?"g":"y"),b=new h(p?"^(?:"+u.source+")":u,_),C=void 0===a?g:a>>>0;if(0===C)return[];if(0===f.length)return null===d(b,f)?[f]:[];var k=0,w=0,D=[];while(w<f.length){b.lastIndex=p?0:w;var x,P=d(b,p?f.slice(w):f);if(null===P||(x=v(l(b.lastIndex+(p?w:0)),f.length))===k)w=c(f,w,m);else{if(D.push(f.slice(k,w)),D.length===C)return D;for(var M=1;M<=P.length-1;M++)if(D.push(P[M]),D.length===C)return D;w=k=x}}return D.push(f.slice(k)),D}]}),p)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},5843:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agreement-organisation"},[t.success?[t._m(0)]:[i("div",{staticClass:"h3"},[t._v("Добрый день, "),i("br"),t._v(t._s(t.person?t.person.name:"")+"!")]),i("p",[t._v("Для организаций "+t._s(t.person?t.person.company.name:"")+" оформлена кредитная программа. Для оформление заявки, необходимо ваше согласование, как одного из учредителей.")]),i("div",{staticClass:"signing-documents-list"},[i("div",{staticClass:"h4"},[t._v("Ознакомиться с документами")]),t._l(t.finalDocsList,(function(e){return i("div",{key:e.id,staticClass:"upload-documents-item"},[i("div",{staticClass:"upload-documents-img"},[i("div",{staticClass:"upload-documents-poster"},[t._v(" "+t._s(e.files[0].format)+" ")])]),i("div",{staticClass:"upload-documents-title"},[i("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.downloadFile(e)}}},[t._v(t._s(e.name))]),i("div",{staticClass:"upload-documents-links"},[i("span",[t._v(t._s(t.listQnt(e.files.length)))]),t._v(" – "),i("a",{attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.downloadFile(e)}}},[t._v("Скачать")])])])])}))],2),i("button",{staticClass:"btn btn-block btn-lg",class:{loading:t.load},attrs:{disabled:t.load},on:{click:t.initDiadocScript}},[t._v("Подписать")]),i("div",{staticClass:"footer-text"},[t._v("Подписание осуществляется при помощи ЭП")])],t.diadocModal?i("Popup",{ref:"diadocModal",attrs:{classes:"diadoc-plugins-modal"},on:{"close-modal":function(t){this.diadocModal=!1}}},[i("div",{staticClass:"popup-title"},[i("div",{staticClass:"h2"},[t._v("Для подписания документов при помощи ЭЦП Вам необходимо:")])]),i("div",{staticClass:"popup-body"},[i("div",{staticClass:"plugins-list"},[i("div",{staticClass:"plugins-list-item"},[t._v("1. Установить криптопровайдер: "),i("br"),i("a",{staticClass:"link",attrs:{href:"https://www.cryptopro.ru/products/cades/plugin",target:"_blank"}},[t._v("КриптоПро CSP")])]),i("div",{staticClass:"plugins-list-item"},[t._v("2. Установите КриптоПро ЭЦП Browser plug-in: "),i("br"),i("a",{staticClass:"link",attrs:{href:"https://cryptopro.ru/products/cades/plugin/get_2_0",target:"_blank"}},[t._v("КриптоПро CSP Browser plug-in")])])])])]):t._e(),t.sertificatesModal?i("Popup",{ref:"sertificatesModal",attrs:{classes:"sertificates-modal"},on:{"close-modal":function(e){t.sertificatesModal=!1}}},[i("div",{staticClass:"popup-title"},[i("div",{staticClass:"h2"},[t._v("Выберите необходимый сертификат для цифровой подписи документов:")])]),i("div",{staticClass:"popup-body"},[i("div",{staticClass:"select-sertificates"},t._l(t.sertificates,(function(e){return i("div",{key:e._cadesCertificate.objid,staticClass:"sertificates-item",class:{active:t.selectedSertificates==e},on:{click:function(i){t.selectedSertificates=e}}},[i("span",[t._v(t._s(e.name)+" (действителен до: "+t._s(t.parseDate(e.validTo))+")")])])})),0),i("div",{staticClass:"sertificate-helper"},[i("p",[t._v(" * Если не видите необходимый сертификат, то возможно он не добавлен в программе КриптоПро. Чтобы добавить сертификат в КриптоПро следуйте следующей инструкции:"),i("br"),i("a",{staticClass:"download-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.instructionPopup=!0}}},[t._v("Инструкция по добавлению сертификата")])])]),i("button",{staticClass:"btn btn-block",class:{loading:t.signLoad},attrs:{disabled:t.signLoad},on:{click:t.createSignature}},[t._v("Подписать")])])]):t._e(),t.errorDiadocModal?i("Popup",{attrs:{error:!0,classes:"error-modal",zIndex:101},on:{"close-modal":function(e){t.errorDiadocModal=!1}}},[i("div",{staticClass:"popup-title"},[i("div",{staticClass:"h3"},[t._v("Ошибка")])]),i("div",{staticClass:"popup-body"},[i("p",{staticClass:"error-text"},[t._v(t._s(t.errorDiadocText))]),i("button",{staticClass:"btn btn-lg btn-block close-modal"},[t._v("Попробовать снова")])])]):t._e(),t.instructionPopup?i("Popup",{ref:"instructionPopup",attrs:{classes:"instruction-modal"},on:{"close-modal":function(e){t.instructionPopup=!1}}},[i("div",{staticClass:"popup-title"},[i("div",{staticClass:"h2"},[t._v("Инструкция по добавлению сертификата")])]),i("div",{staticClass:"popup-body"},[i("ol",[i("li",[t._v("Вставьте цифровой носитель электронной подписи")]),i("li",[t._v("Откройте программу КриптоПро CSP на компьютере")]),i("li",[t._v('Нажмите на вкладку "Сервис"')]),i("li",[t._v('В окне выберите пункт "Просмотреть сертификаты в контейнере"')]),i("li",[t._v('В открывшемся окне нажмите на кнопку "Обзор". Выберите контейнер и подтвердите свой выбор кнопкой ОК')]),i("li",[t._v('В открывшемся окне нажмите на кнопку "Установить". После этого согласитесь с предложением заменить сертификат')]),i("li",[t._v("Обновите страницу в браузере")])]),i("p",[t._v("С более подробной инструкцией вы можете ознакомиться по "),i("a",{staticClass:"link",attrs:{href:"https://cryptostore.ru/article/instruktsii/kak_ustanovit_sertifikat_podpisi_cherez_kriptopro_csp/",target:"_blank"}},[t._v("ссылке")])])])]):t._e()],2)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"agreement-result"},[i("div",{staticClass:"agreement-result-icon"},[i("span",{staticClass:"icon-double-checkmark"})]),i("div",{staticClass:"h3"},[t._v("Успешно!")])])}],n=i("5530"),r=(i("159b"),i("d3b7"),i("3ca3"),i("ddb0"),i("498a"),i("ac1f"),i("5319"),i("b0c0"),i("1276"),i("841c"),i("fb07")),o=i("c1df"),c=i.n(o),l=i("2f62"),d=i("8acc"),u={name:"AgreementOrganisitionMain",components:{Popup:d["a"]},data:function(){return{load:!1,signLoad:!1,sertificates:[],selectedSertificates:"",sertificatesModal:!1,diadocModal:!1,downloadLoading:!1,success:!1,errorDiadocModal:!1,errorDiadocText:"",orderId:"",instructionPopup:!1}},computed:Object(n["a"])({},Object(l["c"])({person:function(t){return t.agreement.personFinish},finalDocsList:function(t){return t.agreement.docs}})),methods:{listQnt:function(t){return"".concat(t,1==t?" лист":t>1&&t<5?" листа":" листов")},parseDate:function(t){return c()(t).format("DD.MM.YYYY")},initDiadocScript:function(){var t=this;this.load||(this.load=!0,Object(r["getSystemInfo"])().then((function(e){t.load=!1,Object(r["getUserCertificates"])().then((function(e){if(e.length>0){var i=[];t.sertificates=[],e.forEach((function(e){i.push(new Promise((function(i){e.isValid().then((function(){t.sertificates.push(e),i()}))})))})),Promise.all(i).then((function(){t.load=!1,t.selectedSertificates=t.sertificates[0],t.sertificatesModal=!0}))}})).catch((function(e){switch(e){case"certificates_not_found":t.errorDiadocText="Не найдено ни одного сертификата.";break;case"valid_certificates_not_found":t.errorDiadocText="Не найдено ни одного валидного сертификата.";break;case"certificate_read_error":t.errorDiadocText="Ошибка чтения одного из сертификатов.";break}t.errorDiadocModal=!0}))})).catch((function(e){t.load=!1,t.diadocModal=!0})))},readFile:function(t){return new Promise((function(e){var i=new FileReader;i.onload=function(){e(this.result)},i.readAsArrayBuffer(t)}))},generateSignature:function(t){var e,i=this,s=this.selectedSertificates;return new Promise((function(a,n){e=Object(r["createAttachedSignature"])(s.thumbprint,t),e.then((function(t){a(t)}),(function(t){this.errorDiadocText=t.message,this.errorDiadocModal=!0,this.signLoad=!1,n()})).catch((function(t){i.errorDiadocText=t.message,i.errorDiadocModal=!0,i.signLoad=!1}))}))},createSignature:function(){var t=this,e=this.selectedSertificates.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"").toLowerCase().trim(),i=this.company.name.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,"").toLowerCase().trim();if(e!==i)return this.errorDiadocText="Вы выбрали сертификат, который не принадлежит компании",this.errorDiadocModal=!0,!1;this.signLoad=!0;var s=this,a=[],n={orderId:this.orderId,token:this.getParametr,docs:[]};this.finalDocsList.forEach((function(e){var i={docId:e.id,files:[]};e.files.forEach((function(e){a.push(new Promise((function(a,n){t.$store.dispatch("getFileWithoutToken",{token:t.getParametr,fileId:e.id}).then((function(o){var c=new File([o],e.name,{type:e.format}),l=t.readFile(c);l.then((function(t){Object(r["createHash"])(t).then((function(){var n=this;s.generateSignature(t).then((function(t){i.files.push({id:e.id,signature:t}),a()})).catch((function(){n.signLoad=!1}))}),(function(t){this.errorDiadocText=t.message,this.errorDiadocModal=!0,this.signLoad=!1,n()}))}))}))})))})),n.docs.push(i)})),Promise.all(a).then((function(){t.$store.dispatch("sendSignatureForFoundersFinish",n).then((function(){t.signLoad=!1,t.$refs.sertificatesModal.closePopup(),t.successModal=!0,t.success=!0}))})).catch((function(){return t.signLoad=!1}))},downloadFile:function(t){var e=this;t.files.forEach((function(t){e.$store.dispatch("getFile",t.id).then((function(i){e.$store.dispatch("downloadFile",{content:i,name:t.name,format:t.format})}))}))}},mounted:function(){var t=window.location.search.replace("?","").split("&").reduce((function(t,e){var i=e.split("=");return t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]),t}),{});this.getParametr=t["c"],this.orderId=t["id"],this.$store.dispatch("getPersonDataFinish",{token:this.getParametr,orderId:this.orderId}),this.$store.dispatch("getAgreementDocsFinish",{token:this.getParametr,orderId:this.orderId})}},f=u,p=i("2877"),h=Object(p["a"])(f,s,a,!1,null,"73558f36",null);e["default"]=h.exports},"841c":function(t,e,i){"use strict";var s=i("d784"),a=i("825a"),n=i("1d80"),r=i("129f"),o=i("14c3");s("search",1,(function(t,e,i){return[function(e){var i=n(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i):new RegExp(e)[t](String(i))},function(t){var s=i(e,t,this);if(s.done)return s.value;var n=a(t),c=String(this),l=n.lastIndex;r(l,0)||(n.lastIndex=0);var d=o(n,c);return r(n.lastIndex,l)||(n.lastIndex=l),null===d?-1:d.index}]}))}}]);
//# sourceMappingURL=chunk-189daff2.3cee44bf.js.map