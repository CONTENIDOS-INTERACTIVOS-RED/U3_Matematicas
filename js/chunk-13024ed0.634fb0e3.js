(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13024ed0"],{"1dde":function(t,e,a){var i=a("d039"),n=a("b622"),o=a("2d00"),r=n("species");t.exports=function(t){return o>=51||!i((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3209:function(t,e,a){"use strict";a("99af");e["a"]={props:{audio:{type:String,default:""}},data:function(){return{audioElement:null,audioCanPlay:!1,audioDuration:0,currentTime:0,state:"pause"}},computed:{currentTimeDisplay:function(){return this.getTimeFormated(this.currentTime)},audioDurationDisplay:function(){return this.getTimeFormated(this.audioDuration)}},mounted:function(){var t=this;this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=function(){t.audioCanPlay=!0},this.audioElement.onloadedmetadata=function(e){var a=e.target;t.audioCanPlay=!0,t.audioDuration=a.duration},this.audioElement.onended=function(){t.audioElement.currentTime=0,t.state="pause"},this.audioElement.ontimeupdate=function(e){var a=e.target;t.currentTime=a.currentTime}},beforeDestroy:function(){this.audioElement.remove()},methods:{getTimeFormated:function(t){var e=Math.floor(t),a=Math.floor(e/60),i=e%60;return a=a<10?"0".concat(a):a,i=i<10?"0".concat(i):i,"".concat(a,":").concat(i)},createAudioElement:function(){var t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play:function(){this.state="play",this.audioElement.play()},pause:function(){this.state="pause",this.audioElement.pause()},stop:function(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"65f0":function(t,e,a){var i=a("861d"),n=a("e8b5"),o=a("b622"),r=o("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?i(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},"68a0":function(t,e,a){t.exports=a.p+"img/audio-new.94237904.svg"},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?n.f(t,r,o(0,a)):t[r]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),o=a("e8b5"),r=a("861d"),s=a("7b0b"),u=a("50c4"),c=a("8418"),d=a("65f0"),l=a("1dde"),p=a("b622"),m=a("2d00"),f=p("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},_=!b||!y;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,n,o,r=s(this),l=d(r,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?r:arguments[e],g(o)){if(n=u(o.length),p+n>v)throw TypeError(h);for(a=0;a<n;a++,p++)a in o&&c(l,p,o[a])}else{if(p>=v)throw TypeError(h);c(l,p++,o)}return l.length=p,l}})},b052:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tarjeta-audio p-4"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-auto ps-0"},[i("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn",on:{click:t.play}},[i("img",{attrs:{src:a("68a0")}})]):i("button",{staticClass:"audio__btn",on:{click:t.pause}},[i("img",{attrs:{src:a("68a0")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)]),i("div",{staticClass:"col"},[i("div",{staticClass:"d-flex justify-content-between mb-4"},[i("div",{staticClass:"tarjeta-audio__texto text-smaller mb-2",domProps:{innerHTML:t._s(t.texto)}}),i("div",{staticClass:"audio position-relative",staticStyle:{width:"36px"},on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t.audioCanPlay?"pause"===t.state?i("button",{staticClass:"audio__btn bg-btn",on:{click:t.play}},[i("img",{attrs:{src:a("5ccd")}})]):i("button",{staticClass:"audio__btn bg-btn",on:{click:t.pause}},[i("img",{attrs:{src:a("f034")}})]):i("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])])]),t.noBarra?t._e():i("div",{staticClass:"tarjeta-audio__input mt-2"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderVal,expression:"sliderVal"}],style:{"background-size":t.sliderVal+"% 100%"},attrs:{type:"range",max:"100"},domProps:{value:t.sliderVal},on:{input:t.onSliderMove,__r:function(e){t.sliderVal=e.target.value}}})]),t.tiempo?i("div",{staticClass:"tarjeta-audio__tiempo text-end pt-1"},[i("span",[t._v(t._s(t.currentTimeDisplay))]),i("span",[t._v(t._s(t.audioDurationDisplay))])]):t._e()])])])},n=[],o=a("3209"),r={name:"TarjetaAudio",mixins:[o["a"]],props:{texto:{type:String,required:!0},noBarra:{type:Boolean,default:!1},tiempo:{type:Boolean,default:!1}},data:function(){return{sliderVal:0}},watch:{currentTime:function(){this.sliderVal=this.currentTime/this.audioDuration*100}},methods:{onSliderMove:function(){this.audioElement.currentTime=this.sliderVal/100*this.audioDuration}}},s=r,u=(a("bb47"),a("2877")),c=Object(u["a"])(s,i,n,!1,null,null,null);e["default"]=c.exports},bb47:function(t,e,a){"use strict";a("d806")},d806:function(t,e,a){},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-13024ed0.634fb0e3.js.map