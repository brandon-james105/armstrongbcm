!function(e){function o(a){if(t[a])return t[a].exports;var s=t[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){window.Site={el:"#settings",data:function(){return _.merge({form:{}},window.$data)},ready:function(){UIkit.tab(this.$els.tab,{connect:this.$els.content})},computed:{sections:function(){var e=[],o=window.location.hash.replace("#","");return _.forIn(this.$options.components,function(t,a){var s=t.options||{},i=s.section;i&&(i.name=a,i.active=a==o,e.push(i))}),e}},methods:{save:function(){this.$broadcast("save",this.config),this.$http.post("admin/system/settings/config",{name:"system/site",config:this.config}).then(function(){this.$notify("Settings saved.")},function(e){this.$notify(e.data,"danger")})}},components:{"site-code":t(26),"site-general":t(27),"site-maintenance":t(28)}},Vue.ready(window.Site)},,,,,,,function(e,o){"use strict";e.exports={section:{label:"Code",icon:"pk-icon-large-code",priority:20},props:["config"]}},function(e,o){"use strict";e.exports={section:{label:"General",icon:"pk-icon-large-settings",priority:10},props:["config"]}},function(e,o){"use strict";e.exports={section:{label:"Maintenance",icon:"pk-icon-large-cone",priority:30},props:["config"]}},,,,,,,,,,function(e,o){e.exports="<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin><div data-uk-margin><h2 class=uk-margin-remove>{{ 'Code' | trans }}</h2></div><div data-uk-margin><button class=\"uk-button uk-button-primary\" type=submit>{{ 'Save' | trans }}</button></div></div><p>{{ 'Insert code in the header and footer of your theme. This is useful for tracking codes and meta tags.' | trans }}</p><div class=\"uk-form uk-form-stacked\"><div class=uk-form-row><label for=form-codeheader class=uk-form-label>{{ 'Header' | trans }}</label><div class=uk-form-controls><v-editor type=code :value.sync=config.code.header></v-editor></div></div><div class=uk-form-row><label for=form-codeheader class=uk-form-label>{{ 'Footer' | trans }}</label><div class=uk-form-controls><v-editor type=code :value.sync=config.code.footer></v-editor></div></div></div>"},function(e,o){e.exports="<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin><div data-uk-margin><h2 class=uk-margin-remove>{{ 'General' | trans }}</h2></div><div data-uk-margin><button class=\"uk-button uk-button-primary\" type=submit>{{ 'Save' | trans }}</button></div></div><div class=\"uk-form uk-form-horizontal\"><div class=uk-form-row><label for=form-title class=uk-form-label>{{ 'Title' | trans }}</label><div class=uk-form-controls><input id=form-title class=uk-form-width-large name=title type=text v-model=config.title v-validate:required><p class=\"uk-form-help-block uk-text-danger\" v-show=form.title.invalid>{{ 'Site title cannot be blank.' | trans }}</p></div></div><div class=uk-form-row><label for=form-appicon class=uk-form-label>{{ 'Logo' | trans }}</label><div class=\"uk-form-controls uk-form-width-large\"><input-image :source.sync=config.view.logo></input-image></div></div><div class=uk-form-row><label for=form-favicon class=uk-form-label>{{ 'Favicon' | trans }}</label><div class=\"uk-form-controls uk-form-width-large\"><input-image :source.sync=config.icons.favicon></input-image></div></div><div class=uk-form-row><label for=form-appicon class=uk-form-label>{{ 'Appicon' | trans }}</label><div class=\"uk-form-controls uk-form-width-large\"><input-image :source.sync=config.icons.appicon></input-image></div></div></div>"},function(e,o){e.exports="<div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin><div data-uk-margin><h2 class=uk-margin-remove>{{ 'Maintenance' | trans }}</h2></div><div data-uk-margin><button class=\"uk-button uk-button-primary\" type=submit>{{ 'Save' | trans }}</button></div></div><div class=\"uk-form uk-form-horizontal\"><div class=uk-form-row><span class=uk-form-label>{{ 'Offline' | trans }}</span><div class=\"uk-form-controls uk-form-controls-text\"><label><input type=checkbox value=1 v-model=config.maintenance.enabled> {{ 'Put the site offline and show the offline message.' | trans }}</label></div></div><div class=uk-form-row><label for=form-offlinemessage class=uk-form-label>{{ 'Message' | trans }}</label><div class=uk-form-controls><textarea id=form-offlinemessage class=uk-form-width-large :placeholder=\"'We\\'ll be back soon.' | trans\" rows=5 v-model=config.maintenance.msg></textarea></div></div></div>"},,,,,function(e,o,t){var a,s;a=t(7),s=t(19),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options:e.exports).template=s)},function(e,o,t){var a,s;a=t(8),s=t(20),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options:e.exports).template=s)},function(e,o,t){var a,s;a=t(9),s=t(21),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options:e.exports).template=s)}]);