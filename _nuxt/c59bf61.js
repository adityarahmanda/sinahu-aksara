(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{380:function(l,e,t){"use strict";t.r(e);t(270);var n={props:{currentSyllable:{type:Number,default:0},syllables:{type:Array,default:function(){return[]}},questionAnswered:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0}},data:function(){return{spacer:10,mobileBreakpoint:768,mobileSpacer:5}},watch:{questionAnswered:function(){var l=this;this.$nextTick((function(){l.adjustStyle()}))},isLoading:function(){var l=this;this.isLoading||this.$nextTick((function(){l.adjustStyle()}))}},mounted:function(){this.isMobile()&&(this.spacer=this.mobileSpacer)},methods:{isMobile:function(){return screen.width<=this.mobileBreakpoint},adjustStyle:function(){if(this.questionAnswered)for(var i=0;i<this.syllables.length;i++)this.$refs.latinSyllables[i].style.transition="all .4s ease-out",this.$refs.aksaraSyllables[i].style.width=this.$refs.aksaraSyllables[i].firstChild.offsetWidth+1+"px",this.$refs.aksaraSyllables[i].style.transition="all .4s ease-out",this.$refs.latinSyllables[i].style.width=this.$refs.latinSyllables[i].firstChild.offsetWidth+1+"px";if(!this.questionAnswered)for(var l=0;l<this.syllables.length;l++)this.$refs.aksaraSyllables[l].style.transition="none",this.$refs.aksaraSyllables[l].style.width=this.$refs.aksaraSyllables[l].firstChild.offsetWidth+1+this.spacer+"px",this.$refs.latinSyllables[l].style.transition="none",this.$refs.latinSyllables[l].style.width=this.$refs.aksaraSyllables[l].offsetWidth+1+"px"}}},r=t(50),component=Object(r.a)(n,(function(){var l=this,e=l._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-5"},l._l(l.syllables,(function(t,i){return e("div",{key:i,ref:"aksaraSyllables",refInFor:!0,staticClass:"aksara-syllable d-inline-block",class:{current:i===l.currentSyllable,answered:i<l.currentSyllable}},[e("span",[l._v(l._s(l.latinToJava(t)))])])})),0),l._v(" "),e("div",{staticClass:"col-12"},l._l(l.syllables,(function(t,i){return e("div",{key:i,ref:"latinSyllables",refInFor:!0,staticClass:"latin-syllable d-inline-block",class:{current:i===l.currentSyllable,answered:i<l.currentSyllable}},[l.questionAnswered||i<l.currentSyllable?e("span",[l._v(l._s(t))]):e("span",[l._v("...")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);