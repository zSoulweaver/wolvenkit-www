(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{338:function(e,t,o){var content=o(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("5eb0df5f",content,!0,{sourceMap:!1})},372:function(e,t,o){var map={"./blog/2020-12-14-cyberpunk-modding-status/blogpost1.jpg":341,"./blog/2020-12-17-cyberpunk-update-no1/blogpost2.jpg":342,"./blog/2021-01-15-cyberpunk-update-no2/blogpost3.jpg":343,"./blog/2021-02-17-website-and-co/blogpost4.jpg":344,"./indexImages/CET_Background.jpg":320,"./indexImages/CET_Feature.jpg":321,"./indexImages/CyberCAT_Background.jpg":322,"./indexImages/CyberCAT_Feature.jpg":323,"./indexImages/WolvenKit_Background.jpg":324,"./indexImages/WolvenKit_Feature.jpg":325,"./projects/community/cet/CET_Feature.jpg":345,"./projects/team/wolvenkit/wolvenkit.jpg":346,"./teamMembers/soulweaver/soulweaver.jpg":347};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=372},373:function(e,t,o){var map={"./blog/2020-12-14-cyberpunk-modding-status/blogpost1.jpg":348,"./blog/2020-12-17-cyberpunk-update-no1/blogpost2.jpg":349,"./blog/2021-01-15-cyberpunk-update-no2/blogpost3.jpg":350,"./blog/2021-02-17-website-and-co/blogpost4.jpg":351,"./indexImages/CET_Background.jpg":352,"./indexImages/CET_Feature.jpg":326,"./indexImages/CyberCAT_Background.jpg":353,"./indexImages/CyberCAT_Feature.jpg":327,"./indexImages/WolvenKit_Background.jpg":354,"./indexImages/WolvenKit_Feature.jpg":328,"./projects/community/cet/CET_Feature.jpg":355,"./projects/team/wolvenkit/wolvenkit.jpg":356,"./teamMembers/soulweaver/soulweaver.jpg":357};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=n,e.exports=r,r.id=373},374:function(e,t,o){"use strict";o(338)},375:function(e,t,o){var r=o(40)(!1);r.push([e.i,".projectItem[data-v-3d37b1e2]{display:flex;align-items:center;justify-content:center;padding:2em 0;border-bottom:2px solid var(--color-bg-alt)}.projectItem[data-v-3d37b1e2]:first-child{padding-top:0}.projectItem[data-v-3d37b1e2]:last-child{border-bottom:0;margin-bottom:2em}.projectItem__imageContainer[data-v-3d37b1e2],.projectItem__imageContainerNone[data-v-3d37b1e2]{max-width:35vmin;min-width:250px;margin-left:2em;border-radius:.5em;overflow:hidden;border:5px solid var(--color-bg-alt);box-shadow:0 .25em 15px 0 rgba(0,0,0,.2)}@media(max-width:720px){.projectItem__imageContainer[data-v-3d37b1e2],.projectItem__imageContainerNone[data-v-3d37b1e2]{display:none}}.projectItem__imageContainer img[data-v-3d37b1e2],.projectItem__imageContainerNone img[data-v-3d37b1e2]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;transition:all .2s ease}.projectItem__imageContainer img[lazy=loaded][data-v-3d37b1e2],.projectItem__imageContainerNone img[lazy=loaded][data-v-3d37b1e2]{transform:scale(1);filter:none}.projectItem__info[data-v-3d37b1e2]{width:100%}.projectItem__name[data-v-3d37b1e2]{font-size:1.5em;font-weight:600;margin-bottom:.25em;margin-right:.5em}.projectItem__buttons[data-v-3d37b1e2]{display:flex;flex-wrap:wrap;margin:-1em 0 0 -1em;width:calc(100% + 1em)}.projectItem__button[data-v-3d37b1e2]{height:2.5em;margin:1.5em 0 0 1em;flex:1;display:flex;align-items:center;justify-content:center;background:var(--project-color);color:var(--color-text);padding:.5em 2em;border-radius:.25em;font-weight:600;text-decoration:none;white-space:nowrap}.projectItem__github[data-v-3d37b1e2]{height:100%;min-width:2em;margin-right:.5em}.projectItem__github[data-v-3d37b1e2]  svg{height:100%;width:100%}[data-v-3d37b1e2] .projectItem__description p{line-height:1.6em;margin-bottom:1em;font-size:14px}.projectItem__contributors[data-v-3d37b1e2]{width:100%;min-height:34px;margin-top:1em}.projectItem__contributors span[data-v-3d37b1e2]{float:left;line-height:34px;margin-right:1em}.projectItem__contributors__contributor[data-v-3d37b1e2]{position:relative;float:left;width:30px;height:30px;margin:2px}.projectItem__contributors__contributor[data-v-3d37b1e2]:hover:after{content:attr(title);min-height:22px;line-height:22px;font-size:12px;min-width:40px;padding:0 4px;background-color:var(--color-bg-alt);color:var(--color-text);position:absolute;top:110%;left:0;border:1px solid var(--project-color);border-radius:4px;text-align:center}.projectItem__contributors__contributor img[data-v-3d37b1e2]{width:100%;height:100%;border-radius:100%;background-color:var(--project-color)}",""]),e.exports=r},388:function(e,t,o){"use strict";o.r(t);o(25),o(52);var r={components:{GithubIcon:o(135).a},props:{project:{type:Object,required:!0},members:{type:Array,default:function(){return[]}}},data:function(){return{projectImage:null}},created:function(){var e=this;this.projectImage=this.getProjectImage(),this.members.forEach((function(t){t.profileImageObj=e.getProfileImage(t)}))},methods:{getProjectImage:function(){var e=this.project.dir.substring(1).substr(0,this.project.dir.lastIndexOf("/")-1);if(this.project.image)try{return{image:o(309)("./".concat(e,"/").concat(this.project.image)),placeholder:o(308)("./".concat(e,"/").concat(this.project.image,""))}}catch(e){return null}else try{return{image:o(372)("./".concat(e,".jpg")),placeholder:o(373)("./".concat(e,".jpg"))}}catch(e){return null}},getProfileImage:function(e){if(!e.profileImage)return{image:null,placeholder:null};try{return{image:o(309)("./".concat(e.dir.substring(1),"/").concat(e.profileImage)),placeholder:o(308)("./".concat(e.dir.substring(1),"/").concat(e.profileImage,""))}}catch(e){return{image:null,placeholder:null}}}}},n=(o(374),o(11)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"projectItem"},[o("div",{staticClass:"projectItem__info",style:"--project-color: "+e.project.color},[o("p",{staticClass:"projectItem__name"},[e._v("\n      "+e._s(e.project.name)+"\n    ")]),e._v(" "),o("nuxt-content",{staticClass:"projectItem__description",attrs:{document:e.project}}),e._v(" "),o("div",{staticClass:"projectItem__buttons"},[e.project.getStarted?o("a",{staticClass:"projectItem__button projectItem__getStarted",attrs:{href:e.project.getStarted}},[e._v("\n        "+e._s(e.$t("general.getStarted"))+"\n      ")]):e._e(),e._v(" "),e.project.download?o("a",{staticClass:"projectItem__button projectItem__download",attrs:{href:e.project.download}},[e._v("\n        "+e._s(e.$t("general.download"))+"\n      ")]):e._e(),e._v(" "),e.project.link?o("a",{staticClass:"projectItem__button projectItem__contribute",attrs:{href:e.project.link}},[o("GithubIcon",{staticClass:"projectItem__github"}),e._v("\n        "+e._s(e.$t("projects.contribute"))+"\n      ")],1):e._e()]),e._v(" "),o("div",{staticClass:"projectItem__contributors"},[o("span",[e._v(e._s(e.$t("projects.contributors"))+": ")]),e._v(" "),e._l(e.members,(function(e){return o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],key:e.name,staticClass:"projectItem__contributors__contributor",attrs:{title:e.name}},[o("img",{attrs:{"data-src":e.profileImageObj.image,"data-loading":e.profileImageObj.placeholder,alt:e.name+"'s profile picture"}})])}))],2)],1),e._v(" "),e.projectImage?o("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"projectItem__imageContainer"},[o("img",{attrs:{"data-src":e.projectImage.image,"data-loading":e.projectImage.placeholder,alt:"Preview/feature image of "+e.project.name+" in action"}})]):e._e()])}),[],!1,null,"3d37b1e2",null);t.default=component.exports}}]);