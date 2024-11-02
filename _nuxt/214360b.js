(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5],{376:function(t,e,n){"use strict";n.r(e);n(270);var r={props:{width:{type:String,default:null},height:{type:Number,default:12},percentage:{type:Number,default:0},backgroundColor:{type:String,default:null},colorFill:{type:String,default:null}},computed:{progressBar:function(){return{width:this.width?this.width:null,height:this.height>=0?this.height+"px":"0","background-color":this.backgroundColor?this.backgroundColor:null}},progressFill:function(){return{width:this.percentage>=0&&this.percentage<=100?this.percentage+"%":"0%",height:this.height>=0?this.height+"px":"0","background-color":this.colorFill?this.colorFill:null}}}},l=n(50),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"progress-bar",style:t.progressBar},[e("div",{staticClass:"progress-bar-fill",style:t.progressFill})])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,n){"use strict";n.r(e);n(270);var r={props:{currentSyllable:{type:Number,default:0},syllables:{type:Array,default:function(){return[]}},questionAnswered:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0}},data:function(){return{spacer:10,mobileBreakpoint:768,mobileSpacer:5}},watch:{questionAnswered:function(){var t=this;this.$nextTick((function(){t.adjustStyle()}))},isLoading:function(){var t=this;this.isLoading||this.$nextTick((function(){t.adjustStyle()}))}},mounted:function(){this.isMobile()&&(this.spacer=this.mobileSpacer)},methods:{isMobile:function(){return screen.width<=this.mobileBreakpoint},adjustStyle:function(){if(this.questionAnswered)for(var i=0;i<this.syllables.length;i++)this.$refs.latinSyllables[i].style.transition="all .4s ease-out",this.$refs.aksaraSyllables[i].style.width=this.$refs.aksaraSyllables[i].firstChild.offsetWidth+1+"px",this.$refs.aksaraSyllables[i].style.transition="all .4s ease-out",this.$refs.latinSyllables[i].style.width=this.$refs.latinSyllables[i].firstChild.offsetWidth+1+"px";if(!this.questionAnswered)for(var t=0;t<this.syllables.length;t++)this.$refs.aksaraSyllables[t].style.transition="none",this.$refs.aksaraSyllables[t].style.width=this.$refs.aksaraSyllables[t].firstChild.offsetWidth+1+this.spacer+"px",this.$refs.latinSyllables[t].style.transition="none",this.$refs.latinSyllables[t].style.width=this.$refs.aksaraSyllables[t].offsetWidth+1+"px"}}},l=n(50),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 mb-5"},t._l(t.syllables,(function(n,i){return e("div",{key:i,ref:"aksaraSyllables",refInFor:!0,staticClass:"aksara-syllable d-inline-block",class:{current:i===t.currentSyllable,answered:i<t.currentSyllable}},[e("span",[t._v(t._s(t.latinToJava(n)))])])})),0),t._v(" "),e("div",{staticClass:"col-12"},t._l(t.syllables,(function(n,i){return e("div",{key:i,ref:"latinSyllables",refInFor:!0,staticClass:"latin-syllable d-inline-block",class:{current:i===t.currentSyllable,answered:i<t.currentSyllable}},[t.questionAnswered||i<t.currentSyllable?e("span",[t._v(t._s(n))]):e("span",[t._v("...")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){"use strict";n.r(e);var r={props:{choices:{type:Array,default:function(){return["ha","na","ca","ra"]}}}},l=n(50),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.choices,(function(n,i){return e("button",{key:i,ref:"choices",refInFor:!0,staticClass:"btn mx-2",on:{click:function(e){return t.$emit("select-choices",t.$refs.choices[i],n)}}},[t._v("\n        "+t._s(n)+"\n    ")])})),0)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,n){"use strict";n.r(e);var r={props:{visible:{type:Boolean,default:!1},icon:{type:String,default:""},variant:{type:String,default:"primary"},message:{type:String,default:"Notification Message"}}},l=n(50),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification",class:[{visible:t.visible},t.variant]},[""!==t.icon?e("i",{staticClass:"fa fa-solid mr-2",class:"fa-"+t.icon}):t._e(),t._v(" "),e("span",[t._v(t._s(t.message))])])}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){var map={"./correct.mp3":386,"./tada.mp3":387,"./wrong.mp3":388};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=385},386:function(t,e,n){t.exports=n.p+"assets/sounds/correct.mp3"},387:function(t,e,n){t.exports=n.p+"assets/sounds/tada.mp3"},388:function(t,e,n){t.exports=n.p+"assets/sounds/wrong.mp3"},390:function(t,e,n){"use strict";n.r(e);var r=n(193),l=n(26),o=(n(91),n(133),n(271),n(80),n(34),n(113),{layout:"quiz",serverMiddleware:["quiz"],data:function(){return{isLoading:!0,isCompleted:!1,user:void 0,slug:"",title:"",currentLevel:0,maxLevel:0,questions:{},currQuestion:0,syllables:[],currSyllable:0,totalChoices:4,choices:[],questionPercentage:0,questionAnswered:!1,streakCount:0,maxStreakCount:0,learnedNewWords:!1,hasNewStreak:!1,notification:{visible:!1,timeout:{},selected:{},correct:{icon:"check",variant:"success",message:"Jawaban Benar!"},wrong:{icon:"times",variant:"danger",message:"Jawaban Salah!"},streak:{icon:"fire",variant:"success",message:"Jawaban Benar! 0x Streak!"},losestreak:{icon:"sad-tear",variant:"danger",message:"Salah! Kehilangan Streak!"}},enableAudio:!0,audio:null}},head:function(){var title=void 0!==this.title?"Kuis "+this.title:"Kuis Tidak Ditemukan",t="https://adityarahmanda.github.io/macaksara/"+this.$route.params.slug;return{title:"".concat(title," - Macaksara"),meta:[{name:"robots",content:"noindex, follow"},{hid:"title",name:"title",content:title},{property:"og:title",content:title},{property:"og:url",content:t},{name:"twitter:title",content:title},{name:"twitter:url",content:t}],link:[{rel:"canonical",href:t}]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.slug=t.$route.params.slug,e.prev=1,e.next=4,t.$axios.$get("https://adityarahmanda.github.io/macaksara/quizzes.json");case 4:n=e.sent,t.quiz=n.find((function(e){return e.slug===t.slug})),t.verifyUser(),t.startQuiz(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),t.$router.push("/");case 14:return e.prev=14,t.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,10,14,17]])})))()},methods:{verifyUser:function(){this.user=JSON.parse(localStorage.getItem("userData")),this.user&&void 0!==this.user.learnedWords&&null!==this.user.learnedWords&&void 0!==this.user.maxStreak&&null!==this.user.maxStreak||this.$router.push("/")},startQuiz:function(){if(this.title=this.quiz.title,this.currentLevel=this.user.quizProgresses[this.slug].currentLevel,this.maxLevel=this.quiz.levels.length,this.currentLevel>this.maxLevel)this.$router.push("/");else{var t=Object.keys(this.quiz.levels);for(var e in t)if(this.quiz.levels[e].value===this.currentLevel){this.questions=this.quiz.levels[e].questions;break}this.shuffleArray(this.questions),this.startNewQuestion()}},generateChoices:function(t){for(var e=[t],i=1;i<this.totalChoices;i++){var n=void 0;do{n=this.generateJavaneseSyllable()}while(n===t);e=[].concat(Object(r.a)(e),[n])}return this.shuffleArray(e)},selectChoices:function(t,e){if(!this.questionAnswered){if(e===this.syllables[this.currSyllable])return this.playSound("correct.mp3"),this.streakCount++,this.streakCount>this.maxStreakCount&&(this.maxStreakCount=this.streakCount),this.streakCount>=2?(this.notification.streak.message="Benar, "+this.streakCount+"x Streak",this.setNotification(this.notification.streak)):this.setNotification(this.notification.correct),this.currSyllable<this.syllables.length-1?(this.currSyllable++,this.choices=this.generateChoices(this.syllables[this.currSyllable])):(this.questionAnswered=!0,this.questionPercentage=(this.currQuestion+1)/this.questions.length*100),void t.blur();this.playSound("wrong.mp3"),0!==this.streakCount?(this.streakCount=0,this.setNotification(this.notification.losestreak)):this.setNotification(this.notification.wrong)}},setNextQuestion:function(){if(this.questionAnswered)if(this.currQuestion<this.questions.length-1)this.currQuestion++,this.currSyllable=0,this.startNewQuestion();else{this.playSound("tada.mp3");var t=this.user.quizProgresses[this.slug];t.isCompleted||(this.currentLevel===this.maxLevel?t.isCompleted=!0:t.currentLevel++,this.user.quizProgresses[this.slug]=t,this.user.learnedWords+=this.questions.length,this.learnedNewWords=!0),this.maxStreakCount>this.user.maxStreak&&(this.user.maxStreak=this.maxStreakCount,this.hasNewStreak=!0),localStorage.setItem("userData",JSON.stringify(this.user)),this.isCompleted=!0}},startNewQuestion:function(){this.questionAnswered=!1,this.syllables=this.toSyllables(this.questions[this.currQuestion].value),this.choices=this.generateChoices(this.syllables[this.currSyllable])},setNotification:function(t){var e=this;this.notification.selected=t,this.notification.visible=!0,clearTimeout(this.notification.timeout),this.notification.timeout=setTimeout((function(){e.notification.visible=!1}),1500)},toggleAudio:function(){this.enableAudio=!this.enableAudio,localStorage.setItem("enableAudio",this.enableAudio)},playSound:function(t){this.enableAudio&&(this.audio=null,this.audio=new Audio(n(385)("./"+t)),this.audio.currentTime=0,this.audio.play())}}}),c=n(50),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"quiz-wrapper"},[e("div",{staticClass:"container position-relative d-flex flex-column h-100"},[e("div",{staticClass:"quiz-top-area-wrapper row align-items-center no-gutters px-4 px-md-0 py-4"},[e("div",{staticClass:"col-2"},[e("nuxt-link",{attrs:{to:"/",custom:""},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.navigate;return[e("div",{staticClass:"close-icon mr-auto",on:{click:n}},[e("i",{staticClass:"fa fa-solid fa-times"})])]}}])})],1),t._v(" "),e("div",{staticClass:"col-8"},[e("ProgressBar",{attrs:{percentage:t.questionPercentage}})],1),t._v(" "),e("div",{staticClass:"col-2"},[e("div",{staticClass:"sound-icon ml-auto",on:{click:t.toggleAudio}},[t.enableAudio?e("i",{staticClass:"fa fa-solid fa-volume-up"}):e("i",{staticClass:"fa fa-solid fa-volume-mute"})])])]),t._v(" "),t.isCompleted?t._e():e("div",{staticClass:"row align-content-center flex-grow-1",class:t.isLoading?"invisible":"visible"},[e("div",{staticClass:"col-12 text-center mb-4"},[t.questionAnswered?e("h3",{staticClass:"quiz-instruction px-3 px-md-0"},[t._v("Satu Kata Telah Terbaca Dengan Benar!")]):e("h3",{staticClass:"quiz-instruction"},[t._v("Pilih Cara Baca Yang Benar Dari Aksara Jawa Berikut!")])]),t._v(" "),e("Question",{staticClass:"col-12 text-center",attrs:{"question-answered":t.questionAnswered,"current-syllable":t.currSyllable,syllables:t.syllables,"is-loading":t.isLoading}}),t._v(" "),t.questionAnswered?t._e():e("div",{staticClass:"col-12 text-center mt-5"},[e("MultipleChoices",{attrs:{choices:t.choices},on:{"select-choices":t.selectChoices}})],1),t._v(" "),e("div",{staticClass:"quiz-translation col-12 text-center",class:t.questionAnswered?"visible  mb-5":"invisible"},[t.questionAnswered?e("b",[t._v(t._s(t.questions[t.currQuestion].translation))]):t._e()]),t._v(" "),e("div",{staticClass:"quiz-next-button-area col-12 text-center",class:t.questionAnswered?"visible":"invisible"},[t.questionAnswered?e("button",{staticClass:"btn next-question-button",on:{click:t.setNextQuestion}},[t._v("Lanjut")]):t._e()])],1),t._v(" "),t.isCompleted?e("div",{staticClass:"row align-content-center flex-grow-1"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12 text-center",class:t.learnedNewWords||t.hasNewStreak?"mb-4":"mb-5"},[t._m(1)]),t._v(" "),t.learnedNewWords||t.hasNewStreak?e("div",{staticClass:"col-12 text-center mb-4"},[t.learnedNewWords?e("h5",{class:t.hasNewStreak?"mb-3":"mb-0"},[t._v(t._s(t.questions.length)+" kata baru telah dibaca!")]):t._e(),t._v(" "),t.hasNewStreak?e("h5",[t._v(t._s(t.maxStreakCount)+" streak baru didapatkan!")]):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"col-12 text-center"},[e("nuxt-link",{staticClass:"btn btn-primary rounded-pill border-0 px-4",attrs:{to:"/"}},[t._v("\n                    Kembali ke Beranda\n                ")])],1)]):t._e(),t._v(" "),t.isCompleted?t._e():e("Notification",{attrs:{visible:t.notification.visible,icon:t.notification.selected.icon,variant:t.notification.selected.variant,message:t.notification.selected.message}})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 text-center mb-4"},[e("h3",[t._v("Selamat!")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Kamu telah berhasil menyelesaikan kuis.")])])},function(){var t=this._self._c;return t("div",{staticClass:"thumbs-up-icon"},[t("i",{staticClass:"fa fa-solid fa-thumbs-up"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProgressBar:n(376).default,Question:n(380).default,MultipleChoices:n(381).default,Notification:n(382).default})}}]);