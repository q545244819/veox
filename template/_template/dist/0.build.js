webpackJsonp([0],{3:function(t,e,o){var a,s;o(29),a=o(5),s=o(19),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{html:""}},ready:function(){var t=this,e=this.$route,o=e.params,a="/about"!==e.path?"../../posts/"+o.date+"/"+o.title+".html":"../../posts/about.html";fetch(a).then(function(t){return t.text()}).then(function(e){t.html=e})["catch"](function(t){console.error(t)})}}},11:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".date[_v-27489abe],.title[_v-27489abe]{text-align:center}.date[_v-27489abe]{font-size:16px;color:#ccc}",""])},19:function(t,e){t.exports='<h1 v-if="$route.path !== \'/about\'" class=title v-text=$route.params.title _v-27489abe=""></h1> <h1 v-else="" class=title _v-27489abe="">About Me!</h1> <p v-if="$route.path !== \'/about\'" class=date _v-27489abe="">Article Post Time: <span v-text=$route.params.date _v-27489abe=""></span></p> <div class=markdown-body v-html=html _v-27489abe=""></div>'},29:function(t,e,o){var a=o(11);"string"==typeof a&&(a=[[t.id,a,""]]);o(2)(a,{});a.locals&&(t.exports=a.locals)}});
//# sourceMappingURL=0.build.js.map