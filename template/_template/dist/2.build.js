webpackJsonp([2],{7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{lists:{}}},asyncData:function(t,e){fetch("../../posts/readme.json").then(function(t){return t.json()}).then(function(e){t({lists:e})})["catch"](function(t){console.error(t)})}}},14:function(t,e,i){e=t.exports=i(1)(),e.push([t.id,".date[_v-42b44bd1]{font-weight:inherit;font-style:italic;color:#333}.date span[_v-42b44bd1]{margin-left:10px}.list li[_v-42b44bd1]{line-height:2}.list a[_v-42b44bd1]{color:#444;text-decoration:initial}.list a[_v-42b44bd1]:hover{color:#039;text-decoration:underline}",""])},23:function(t,e){t.exports='<div v-for="list in lists" _v-42b44bd1=""> <h2 class=date _v-42b44bd1=""><span v-text=$key _v-42b44bd1=""></span></h2> <ul class=list _v-42b44bd1=""> <li v-for="item in list" _v-42b44bd1=""> <a v-text=item.title v-link="{ name: \'article\', params: { date: item.date, title: item.title } }" _v-42b44bd1=""></a> </li> </ul> </div>'},26:function(t,e,i){var o,n;i(34),o=i(7),n=i(23),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},34:function(t,e,i){var o=i(14);"string"==typeof o&&(o=[[t.id,o,""]]);i(2)(o,{});o.locals&&(t.exports=o.locals)}});
//# sourceMappingURL=2.build.js.map