parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6tv":[function(require,module,exports) {
"use strict";var e=document.querySelector(".header__box"),t=document.querySelector(".right-panel__numbers-box"),r=document.querySelector(".right-panel__vector--up"),n=document.querySelector(".right-panel__vector--down");r.addEventListener("click",function(){i(-1)}),n.addEventListener("click",function(){i(1)});var c=0;function i(i){var a=e.children.length;c+=i,n.disabled=c>=a-1,r.disabled=c<=0,c=(c+a)%a,e.style.transform="translateY(".concat(100*-c,"%)"),t.children[c].classList.add("right-panel__number--active"),t.children[c-1].classList.remove("right-panel__number--active"),t.children[c+1].classList.remove("right-panel__number--active")}
},{}]},{},["d6tv"], null)
//# sourceMappingURL=header-slider.d9e5b1bc.js.map