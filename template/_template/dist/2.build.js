webpackJsonp([2],{7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{lists:{}}},asyncData:function(t,e){fetch("../../posts/readme.json").then(function(t){return t.json()}).then(function(e){t({lists:e})})["catch"](function(t){console.error(t)})}}},14:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".date[_v-ba737abc]{font-weight:inherit;font-style:italic;color:#333}.date span[_v-ba737abc]{margin-left:10px}.list li[_v-ba737abc]{line-height:2}.list a[_v-ba737abc]{color:#444;text-decoration:initial}.list a[_v-ba737abc]:hover{color:#039;text-decoration:underline}",""])},22:function(t,e){t.exports='<div v-for="list in lists" _v-ba737abc=""> <h2 class=date _v-ba737abc=""><span v-text=$key _v-ba737abc=""></span></h2> <ul class=list _v-ba737abc=""> <li v-for="item in list" _v-ba737abc=""> <a v-text=item.title v-link="{ name: \'article\', params: { date: item.date, title: item.title } }" _v-ba737abc=""></a> </li> </ul> </div>'},24:function(t,e,a){var i,o;a(32),i=a(7),o=a(22),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},32:function(t,e,a){var i=a(14);"string"==typeof i&&(i=[[t.id,i,""]]);a(2)(i,{});i.locals&&(t.exports=i.locals)}});
//# sourceMappingURL=2.build.js.map