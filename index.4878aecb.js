!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var o=function(){"use strict";function r(n){e(t)(this,r),this.name=n}return e(n)(r,[{key:"fetchCountries",value:function(){fetch("".concat("https://restcountries.com/v3.1/","name/").concat(this.name,"?fields=").concat("name,capital,languages,population,flags")).then((function(e){return e.json()})).then((function(e){var t=!0,n=!1,r=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var a=o.value;console.log(a)}}catch(e){n=!0,r=e}finally{try{t||null==u.return||u.return()}finally{if(n)throw r}}}))}}]),r}(),u={inputText:document.querySelector("#search-box"),countryListHTML:document.querySelector(".country-list"),countryInfoHTML:document.querySelector(".country-info")};u.inputText.addEventListener("input",(function(){var e=u.inputText.value;""!==u.inputText.value&&new o(e).fetchCountries()}))}();
//# sourceMappingURL=index.4878aecb.js.map
