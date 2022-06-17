goog.provide('slovarish.frontend.verb_view');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.verb_view !== 'undefined') && (typeof slovarish.frontend.verb_view.which_forms_QMARK_ !== 'undefined')){
} else {
slovarish.frontend.verb_view.which_forms_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"definite","definite",1037141320),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"imperfective","imperfective",298562661),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"perfective","perfective",1441285175),new cljs.core.Keyword(null,"main","main",-2117802661)], null));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.verb_view !== 'undefined') && (typeof slovarish.frontend.verb_view.which_past_set_QMARK_ !== 'undefined')){
} else {
slovarish.frontend.verb_view.which_past_set_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"definite","definite",1037141320),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"imperfective","imperfective",298562661),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"perfective","perfective",1441285175),new cljs.core.Keyword(null,"main","main",-2117802661)], null));
}
slovarish.frontend.verb_view.verb_type_names = new cljs.core.PersistentArrayMap(null, 4, ["indefinite",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\uD83D\uDD04",new cljs.core.Keyword(null,"english","english",1087501909),"indef",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0440\u0430\u0437\u043D\u043E\u043D\u0430\u043F."], null),"definite",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\u27A1\uFE0F",new cljs.core.Keyword(null,"english","english",1087501909),"def",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043E\u0434\u043D\u043E\u043D\u0430\u043F."], null),"imperfective",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\u23F3",new cljs.core.Keyword(null,"english","english",1087501909),"impf",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u041D\u0421\u0412"], null),"perfective",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\uD83D\uDCCC",new cljs.core.Keyword(null,"english","english",1087501909),"pf",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0421\u0412"], null)], null);
slovarish.frontend.verb_view.reset_views = (function slovarish$frontend$verb_view$reset_views(){
var seq__31206_31283 = cljs.core.seq(cljs.core.keys(cljs.core.deref(slovarish.frontend.verb_view.which_forms_QMARK_)));
var chunk__31207_31284 = null;
var count__31208_31285 = (0);
var i__31209_31286 = (0);
while(true){
if((i__31209_31286 < count__31208_31285)){
var v_31287 = chunk__31207_31284.cljs$core$IIndexed$_nth$arity$2(null,i__31209_31286);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_forms_QMARK_,cljs.core.assoc,v_31287,new cljs.core.Keyword(null,"main","main",-2117802661));


var G__31288 = seq__31206_31283;
var G__31289 = chunk__31207_31284;
var G__31290 = count__31208_31285;
var G__31291 = (i__31209_31286 + (1));
seq__31206_31283 = G__31288;
chunk__31207_31284 = G__31289;
count__31208_31285 = G__31290;
i__31209_31286 = G__31291;
continue;
} else {
var temp__5753__auto___31292 = cljs.core.seq(seq__31206_31283);
if(temp__5753__auto___31292){
var seq__31206_31293__$1 = temp__5753__auto___31292;
if(cljs.core.chunked_seq_QMARK_(seq__31206_31293__$1)){
var c__4679__auto___31294 = cljs.core.chunk_first(seq__31206_31293__$1);
var G__31295 = cljs.core.chunk_rest(seq__31206_31293__$1);
var G__31296 = c__4679__auto___31294;
var G__31297 = cljs.core.count(c__4679__auto___31294);
var G__31298 = (0);
seq__31206_31283 = G__31295;
chunk__31207_31284 = G__31296;
count__31208_31285 = G__31297;
i__31209_31286 = G__31298;
continue;
} else {
var v_31299 = cljs.core.first(seq__31206_31293__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_forms_QMARK_,cljs.core.assoc,v_31299,new cljs.core.Keyword(null,"main","main",-2117802661));


var G__31300 = cljs.core.next(seq__31206_31293__$1);
var G__31301 = null;
var G__31302 = (0);
var G__31303 = (0);
seq__31206_31283 = G__31300;
chunk__31207_31284 = G__31301;
count__31208_31285 = G__31302;
i__31209_31286 = G__31303;
continue;
}
} else {
}
}
break;
}

var seq__31210 = cljs.core.seq(cljs.core.keys(cljs.core.deref(slovarish.frontend.verb_view.which_past_set_QMARK_)));
var chunk__31211 = null;
var count__31212 = (0);
var i__31213 = (0);
while(true){
if((i__31213 < count__31212)){
var v = chunk__31211.cljs$core$IIndexed$_nth$arity$2(null,i__31213);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,v,new cljs.core.Keyword(null,"main","main",-2117802661));


var G__31304 = seq__31210;
var G__31305 = chunk__31211;
var G__31306 = count__31212;
var G__31307 = (i__31213 + (1));
seq__31210 = G__31304;
chunk__31211 = G__31305;
count__31212 = G__31306;
i__31213 = G__31307;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31210);
if(temp__5753__auto__){
var seq__31210__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31210__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31210__$1);
var G__31308 = cljs.core.chunk_rest(seq__31210__$1);
var G__31309 = c__4679__auto__;
var G__31310 = cljs.core.count(c__4679__auto__);
var G__31311 = (0);
seq__31210 = G__31308;
chunk__31211 = G__31309;
count__31212 = G__31310;
i__31213 = G__31311;
continue;
} else {
var v = cljs.core.first(seq__31210__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,v,new cljs.core.Keyword(null,"main","main",-2117802661));


var G__31312 = cljs.core.next(seq__31210__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31210 = G__31312;
chunk__31211 = G__31313;
count__31212 = G__31314;
i__31213 = G__31315;
continue;
}
} else {
return null;
}
}
break;
}
});
slovarish.frontend.verb_view.destress = (function slovarish$frontend$verb_view$destress(word){
var G__31214 = word;
if((G__31214 == null)){
return null;
} else {
return clojure.string.replace(G__31214,/[\u0300\u0301]/,"");
}
});
slovarish.frontend.verb_view.monosyllable_QMARK_ = (function slovarish$frontend$verb_view$monosyllable_QMARK_(word){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.re_seq(/[аеиоуяэюёы]/,word)));
});
slovarish.frontend.verb_view.similar_conjugation_QMARK_ = (function slovarish$frontend$verb_view$similar_conjugation_QMARK_(ya,inf){
if(cljs.core.truth_(inf)){
var temp__5753__auto__ = (function (){var G__31215 = slovarish.frontend.verb_view.destress(inf);
var G__31215__$1 = (((G__31215 == null))?null:(function (){var fexpr__31216 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__31216.cljs$core$IFn$_invoke$arity$1 ? fexpr__31216.cljs$core$IFn$_invoke$arity$1(G__31215) : fexpr__31216.call(null,G__31215));
})());
var G__31215__$2 = (((G__31215__$1 == null))?null:cljs.core.first(G__31215__$1));
var G__31215__$3 = (((G__31215__$2 == null))?null:new cljs.core.Keyword(null,"conjugation","conjugation",332660020).cljs$core$IFn$_invoke$arity$1(G__31215__$2));
if((G__31215__$3 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"ya","ya",1172180389).cljs$core$IFn$_invoke$arity$1(G__31215__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var other_ya = temp__5753__auto__;
var G__31217 = other_ya;
var G__31217__$1 = ((cljs.core.seq_QMARK_(other_ya))?cljs.core.first(G__31217):G__31217);
return clojure.string.ends_with_QMARK_(G__31217__$1,cljs.core.re_find(/\S\u0301?\S\u0301?(?:сь)?$/,ya));

} else {
return null;
}
} else {
return null;
}
});
slovarish.frontend.verb_view.same_past_tense_stress_QMARK_ = (function slovarish$frontend$verb_view$same_past_tense_stress_QMARK_(forms){
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,forms)){
return ((cljs.core.every_QMARK_((function (p1__31218_SHARP_){
return cljs.core.re_find(/\u0301(?:сь)?$/,p1__31218_SHARP_);
}),forms)) || (cljs.core.every_QMARK_((function (p1__31219_SHARP_){
return cljs.core.re_find(/[аои](?:сь)?$/,p1__31219_SHARP_);
}),forms)));
} else {
return null;
}
});
slovarish.frontend.verb_view.defective_ya = new cljs.core.PersistentArrayMap(null, 3, ["\u043F\u043E\u0431\u0435\u0434\u0438\u0301\u0442\u044C","\u0441\u043C\u043E\u0433\u0443\u0301 \u0443\u0431\u0435\u0434\u0438\u0442\u044C","\u0443\u0431\u0435\u0434\u0438\u0301\u0442\u044C","\u0441\u043C\u043E\u0433\u0443\u0301 \u0443\u0431\u0435\u0434\u0438\u0442\u044C","\u0434\u0435\u0440\u0437\u0438\u0301\u0442\u044C","\u0433\u043E\u0432\u043E\u0440\u044E\u0301 \u0434\u0435\u0440\u0437\u043E\u0441\u0442\u0438"], null);
slovarish.frontend.verb_view.display_form = (function slovarish$frontend$verb_view$display_form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31316 = arguments.length;
var i__4865__auto___31317 = (0);
while(true){
if((i__4865__auto___31317 < len__4864__auto___31316)){
args__4870__auto__.push((arguments[i__4865__auto___31317]));

var G__31318 = (i__4865__auto___31317 + (1));
i__4865__auto___31317 = G__31318;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return slovarish.frontend.verb_view.display_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(slovarish.frontend.verb_view.display_form.cljs$core$IFn$_invoke$arity$variadic = (function (css_class,form,p__31223){
var map__31224 = p__31223;
var map__31224__$1 = cljs.core.__destructure_map(map__31224);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31224__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"");
if((form == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.empty","div.verb-form.empty",-1504129580),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null),"\u200B"], null);
} else {
if(typeof form === 'string'){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form","div.verb-form",-1818629478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),form].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form","div.verb-form",-1818629478),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",form)].join('')], null);
}
}
}));

(slovarish.frontend.verb_view.display_form.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(slovarish.frontend.verb_view.display_form.cljs$lang$applyTo = (function (seq31220){
var G__31221 = cljs.core.first(seq31220);
var seq31220__$1 = cljs.core.next(seq31220);
var G__31222 = cljs.core.first(seq31220__$1);
var seq31220__$2 = cljs.core.next(seq31220__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31221,G__31222,seq31220__$2);
}));

slovarish.frontend.verb_view.stress_patterns = (function slovarish$frontend$verb_view$stress_patterns(verb_class){
var vec__31225 = cljs.core.re_find(/(?:\d+\W*|irreg\-)([a-c]'?)(?:\/?([a-c]\*?'*))?(?:,([a-c]))?/,verb_class);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(0),null);
var nonpast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(1),null);
var past = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(2),null);
var past_alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31225,(3),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nonpast","nonpast",970572167),nonpast,new cljs.core.Keyword(null,"past","past",182249289),(function (){var or__4253__auto__ = past;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "a";
}
})(),new cljs.core.Keyword(null,"past-alt","past-alt",-1468433601),past_alt], null);
});
slovarish.frontend.verb_view.past_tense_forms = (function slovarish$frontend$verb_view$past_tense_forms(stress,primary_QMARK_,past){
if((new cljs.core.Keyword(null,"masculine","masculine",-523682579).cljs$core$IFn$_invoke$arity$1(past) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.neuter.light.triple-row","div.verb-form.row1.past.neuter.light.triple-row",-722978021),new cljs.core.Keyword(null,"neuter","neuter",-2013207957).cljs$core$IFn$_invoke$arity$1(past)], null);
} else {
var vec__31229 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31228_SHARP_){
if(typeof p1__31228_SHARP_ === 'string'){
return p1__31228_SHARP_;
} else {
if(cljs.core.truth_(primary_QMARK_)){
return cljs.core.first(p1__31228_SHARP_);
} else {
return cljs.core.second(p1__31228_SHARP_);

}
}
}),cljs.core.vals(past));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(2),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(3),null);
var primary_tag = (cljs.core.truth_(primary_QMARK_)?"primary":"alternate");
var pattern = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(primary_QMARK_);
if(and__4251__auto__){
return new cljs.core.Keyword(null,"past-alt","past-alt",-1468433601).cljs$core$IFn$_invoke$arity$1(stress);
} else {
return and__4251__auto__;
}
})())?new cljs.core.Keyword(null,"past-alt","past-alt",-1468433601).cljs$core$IFn$_invoke$arity$1(stress):new cljs.core.Keyword(null,"past","past",182249289).cljs$core$IFn$_invoke$arity$1(stress));
var G__31232 = pattern;
switch (G__31232) {
case "a":
if(cljs.core.truth_(cljs.core.re_find(/лся$/,m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.light.triple-row","div.verb-form.row1.past.light.triple-row",-173920878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[clojure.string.replace(m,/ся$/,"|\u0441\u044F"),", -\u0430\u0441\u044C, -\u043E\u0441\u044C, -\u0438\u0441\u044C"].join('')], null)], null);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.re_find(/л$/,m);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),"\u0430"].join(''));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((slovarish.frontend.verb_view.monosyllable_QMARK_(m)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.verb_view.destress(f),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),"\u0430"].join(''))));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.light.triple-row","div.verb-form.row1.past.light.triple-row",-173920878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[clojure.string.replace(f,/а$/,""),", -\u0430, -\u043E, -\u0438"].join('')], null)], null);
} else {
if(cljs.core.truth_(cljs.core.re_find(/ся$/,m))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light.irregular-form","div.verb-form.row1.past.masculine.light.irregular-form",-1767491593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.light.double-row","div.verb-form.row2.past.light.double-row",1469584805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -\u043E\u0441\u044C, -\u0438\u0441\u044C"].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light.irregular-form","div.verb-form.row1.past.masculine.light.irregular-form",-1767491593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.light.double-row","div.verb-form.row2.past.light.double-row",1469584805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -\u043E, -\u0438"].join('')], null)], null);

}
}
}

break;
case "b":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light.irregular-form","div.verb-form.row1.past.masculine.light.irregular-form",-1767491593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.light.double-row","div.verb-form.row2.past.light.double-row",1469584805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -\u043E\u0301, -\u0438\u0301"].join('')], null)], null);

break;
case "b*":
if(clojure.string.ends_with_QMARK_(m,"\u043B\u0441\u044F\u0301")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.light.triple-row","div.verb-form.row1.past.light.triple-row",-173920878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[clojure.string.replace(m,/ся́$/,"|\u0441\u044F\u0301"),", -\u0430\u0301\u0441\u044C, -\u043E\u0301\u0441\u044C, -\u0438\u0301\u0441\u044C"].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light.unpredictable-stress","div.verb-form.row1.past.masculine.light.unpredictable-stress",-160716259),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.light.double-row","div.verb-form.row2.past.light.double-row",1469584805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -\u043E\u0301\u0441\u044C, -\u0438\u0301\u0441\u044C"].join('')], null)], null);
}

break;
case "c":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light","div.verb-form.row1.past.masculine.light",2036959759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.feminine.light.unpredictable-stress","div.verb-form.row2.past.feminine.light.unpredictable-stress",-856419459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),f], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row3.past.light","div.verb-form.row3.past.light",-810417889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),", -\u0438"].join('')], null)], null);

break;
case "c'":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light","div.verb-form.row1.past.masculine.light",2036959759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),m], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.feminine.light.unpredictable-stress","div.verb-form.row2.past.feminine.light.unpredictable-stress",-856419459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),((clojure.string.ends_with_QMARK_(n,"\u043E\u0301"))?", -\u043E\u0301":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row3.past.light","div.verb-form.row3.past.light",-810417889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),((clojure.string.ends_with_QMARK_(n,"\u043E"))?", -\u0438":null)].join('')], null)], null);

break;
case "c''":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row1.past.masculine.light","div.verb-form.row1.past.masculine.light",2036959759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[((clojure.string.ends_with_QMARK_(m,"\u043B\u0441\u044F\u0301"))?"unpredictable-stress ":null),primary_tag].join('')], null),m], null),((clojure.string.ends_with_QMARK_(n,"\u043E\u0301\u0441\u044C"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.light.double-row","div.verb-form.row2.past.light.double-row",1469584805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -\u043E\u0301\u0441\u044C, -\u0438\u0301\u0441\u044C"].join('')], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row2.past.feminine.light.unpredictable-stress","div.verb-form.row2.past.feminine.light.unpredictable-stress",-856419459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),f], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-form.row3.past.light","div.verb-form.row3.past.light",-810417889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),primary_tag], null),((clojure.string.ends_with_QMARK_(n,"\u043E\u0301\u0441\u044C"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),", -\u0438\u0301\u0441\u044C"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),", -\u0438\u0441\u044C"].join(''))], null)], null))], null);

break;
default:
return null;

}
}
});
slovarish.frontend.verb_view.single_verb = (function slovarish$frontend$verb_view$single_verb(verb_type,p__31238){
var map__31239 = p__31238;
var map__31239__$1 = cljs.core.__destructure_map(map__31239);
var verb = map__31239__$1;
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var aspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var conjugation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"conjugation","conjugation",332660020));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var partner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31239__$1,new cljs.core.Keyword(null,"partner","partner",-443349881));
if(cljs.core.truth_(verb)){
var map__31240 = conjugation;
var map__31240__$1 = cljs.core.__destructure_map(map__31240);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var past_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"past-part","past-part",336420481));
var ya = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"ya","ya",1172180389));
var past = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"past","past",182249289));
var ty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var pres_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"pres-part","pres-part",-1052363923));
var imperative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"imperative","imperative",-1312952880));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var oni = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"oni","oni",1840832692));
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31240__$1,new cljs.core.Keyword(null,"on","on",173873944));
var map__31241 = past;
var map__31241__$1 = cljs.core.__destructure_map(map__31241);
var masculine = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,new cljs.core.Keyword(null,"masculine","masculine",-523682579));
var feminine = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,new cljs.core.Keyword(null,"feminine","feminine",-223910280));
var neuter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,new cljs.core.Keyword(null,"neuter","neuter",-2013207957));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31241__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var map__31242 = pres_part;
var map__31242__$1 = cljs.core.__destructure_map(map__31242);
var pres_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"pres-act","pres-act",820629395));
var pres_pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"pres-pass","pres-pass",-1485388268));
var pres_adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"pres-adv","pres-adv",582035399));
var map__31243 = past_part;
var map__31243__$1 = cljs.core.__destructure_map(map__31243);
var past_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"past-act","past-act",-1598037616));
var past_pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"past-pass","past-pass",-2090820466));
var past_adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31243__$1,new cljs.core.Keyword(null,"past-adv","past-adv",-1428753747));
var bare = slovarish.frontend.verb_view.destress(infinitive);
var stress = slovarish.frontend.verb_view.stress_patterns(class$);
var similars = (function (){var G__31244 = (function (){var fexpr__31245 = cljs.core.deref(slovarish.frontend.data.verbs_by_category);
return (fexpr__31245.cljs$core$IFn$_invoke$arity$1 ? fexpr__31245.cljs$core$IFn$_invoke$arity$1(category) : fexpr__31245.call(null,category));
})();
var G__31244__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([partner,infinitive]),G__31244)
;
var G__31244__$2 = ((cljs.core.seq_QMARK_(ya))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31233_SHARP_){
return slovarish.frontend.verb_view.similar_conjugation_QMARK_(cljs.core.first(ya),p1__31233_SHARP_);
}),G__31244__$1):G__31244__$1);
var G__31244__$3 = ((typeof ya === 'string')?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31234_SHARP_){
return slovarish.frontend.verb_view.similar_conjugation_QMARK_(ya,p1__31234_SHARP_);
}),G__31244__$2):G__31244__$2);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__31235_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__31235_SHARP_,new cljs.core.Keyword(null,"rank","rank",-1706728502),(30000));
}),cljs.core._LT_,G__31244__$3);

})();
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-entry","div.verb-entry",-982395543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),verb_type], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-left","div.top-left",53582168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.verb-type","span.verb-type",-1831545578),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.verb_view.verb_type_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb_type,cljs.core.deref(slovarish.frontend.state.display_language)], null))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.infinitive","span.infinitive",473527633),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),verb_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.verb_view.verb_type_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb_type,new cljs.core.Keyword(null,"emoji","emoji",1031230144)], null))," ",infinitive], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.verb-type","span.verb-type",-1831545578),class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),rank], null)], null),((cljs.core.empty_QMARK_(similars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-right","div.top-right",-60894130),"unique verb"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-right","div.top-right",-60894130),(function (){var G__31246 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31246__$1 = (((G__31246 instanceof cljs.core.Keyword))?G__31246.fqn:null);
switch (G__31246__$1) {
case "english":
return "conjugates like ";

break;
case "russian":
return "\u0441\u043F\u0440\u044F\u0433\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31246__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"similar-conjugation",new cljs.core.Keyword(null,"onFocus","onFocus",1152444958),(function (p1__31236_SHARP_){
(p1__31236_SHARP_.target.selectedIndex = (-1));

return p1__31236_SHARP_.target.blur();
}),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__31237_SHARP_){
var word = slovarish.frontend.verb_view.destress(p1__31237_SHARP_.target.value);
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(0));

cljs.core.reset_BANG_(slovarish.frontend.state.results,(function (){var fexpr__31247 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__31247.cljs$core$IFn$_invoke$arity$1 ? fexpr__31247.cljs$core$IFn$_invoke$arity$1(word) : fexpr__31247.call(null,word));
})());

return slovarish.frontend.verb_view.reset_views();
})], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$verb_view$single_verb_$_iter__31248(s__31249){
return (new cljs.core.LazySeq(null,(function (){
var s__31249__$1 = s__31249;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31249__$1);
if(temp__5753__auto__){
var s__31249__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31249__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__31249__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__31251 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__31250 = (0);
while(true){
if((i__31250 < size__4651__auto__)){
var vb = cljs.core._nth(c__4650__auto__,i__31250);
cljs.core.chunk_append(b__31251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),slovarish.frontend.verb_view.destress(vb)], null),vb], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),vb], null)));

var G__31330 = (i__31250 + (1));
i__31250 = G__31330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31251),slovarish$frontend$verb_view$single_verb_$_iter__31248(cljs.core.chunk_rest(s__31249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31251),null);
}
} else {
var vb = cljs.core.first(s__31249__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),slovarish.frontend.verb_view.destress(vb)], null),vb], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),vb], null)),slovarish$frontend$verb_view$single_verb_$_iter__31248(cljs.core.rest(s__31249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),similars)));
})())], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-header-cell","div.top-header-cell",-1535068504),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(verb_type),"-verb-view"].join(''),new cljs.core.Keyword(null,"value","value",305978217),(function (){var G__31253 = cljs.core.deref(slovarish.frontend.verb_view.which_forms_QMARK_);
var fexpr__31252 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type);
return (fexpr__31252.cljs$core$IFn$_invoke$arity$1 ? fexpr__31252.cljs$core$IFn$_invoke$arity$1(G__31253) : fexpr__31252.call(null,G__31253));
})(),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_forms_QMARK_,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),true], null),"main forms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"participles","participles",-575696638)], null),"participles"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-header-cell.full-width","div.top-header-cell.full-width",795155515),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,"perfective"))?(function (){var G__31254 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31254__$1 = (((G__31254 instanceof cljs.core.Keyword))?G__31254.fqn:null);
switch (G__31254__$1) {
case "english":
return "future";

break;
case "russian":
return "\u0431\u0443\u0434.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31254__$1)].join('')));

}
})():(function (){var G__31255 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31255__$1 = (((G__31255 instanceof cljs.core.Keyword))?G__31255.fqn:null);
switch (G__31255__$1) {
case "english":
return "present";

break;
case "russian":
return "\u043D\u0430\u0441\u0442.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31255__$1)].join('')));

}
})())], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-header-cell.full-width","div.top-header-cell.full-width",795155515),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31257 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31257__$1 = (((G__31257 instanceof cljs.core.Keyword))?G__31257.fqn:null);
switch (G__31257__$1) {
case "english":
return "past";

break;
case "russian":
return "\u043F\u0440\u043E\u0448.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31257__$1)].join('')));

}
})())," "].join(''),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31259 = cljs.core.deref(slovarish.frontend.verb_view.which_forms_QMARK_);
var fexpr__31258 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type);
return (fexpr__31258.cljs$core$IFn$_invoke$arity$1 ? fexpr__31258.cljs$core$IFn$_invoke$arity$1(G__31259) : fexpr__31258.call(null,G__31259));
})(),new cljs.core.Keyword(null,"main","main",-2117802661));
if(and__4251__auto__){
return cljs.core.some(cljs.core.seq_QMARK_,cljs.core.vals(past));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type),new cljs.core.Keyword(null,"alternate","alternate",-931038644));
}),new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type),new cljs.core.Keyword(null,"main","main",-2117802661));
})], null),"\uD83D\uDD00"], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-header-cell.half-width","div.top-header-cell.half-width",-686333443),(function (){var G__31260 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__31260__$1 = (((G__31260 instanceof cljs.core.Keyword))?G__31260.fqn:null);
switch (G__31260__$1) {
case "english":
return "imperative";

break;
case "russian":
return "\u043F\u043E\u0432\u0435\u043B.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31260__$1)].join('')));

}
})()], null),(function (){var G__31261 = (function (){var G__31263 = cljs.core.deref(slovarish.frontend.verb_view.which_forms_QMARK_);
var fexpr__31262 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type);
return (fexpr__31262.cljs$core$IFn$_invoke$arity$1 ? fexpr__31262.cljs$core$IFn$_invoke$arity$1(G__31263) : fexpr__31262.call(null,G__31263));
})();
var G__31261__$1 = (((G__31261 instanceof cljs.core.Keyword))?G__31261.fqn:null);
switch (G__31261__$1) {
case "main":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_((function (){var or__4253__auto__ = on;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = my;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = vy;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return (ty == null);
}
}
}
})())?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row1","div.left-header-cell.row1",-249659818),"\u044F / \u043C\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row2","div.left-header-cell.row2",1144057125),"\u0442\u044B / \u0432\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row3","div.left-header-cell.row3",1757409202),"\u043E\u043D(\u0430, \u043E) / \u043E\u043D\u0438"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ya half-width",ya], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"my half-width",my], null),(cljs.core.truth_((function (){var and__4251__auto__ = ty;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/хотеть(?:ся)?/,slovarish.frontend.verb_view.destress(infinitive));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ty half-width unpredictable-stress",ty], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ty half-width",ty], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"vy half-width",vy], null),(cljs.core.truth_(cljs.core.re_find(/хотеть(?:ся)?/,slovarish.frontend.verb_view.destress(infinitive)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present on half-width unpredictable-stress",on], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present on half-width",on], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"oni half-width",oni], null)], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row1","div.left-header-cell.row1",-249659818),"\u044F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row2","div.left-header-cell.row2",1144057125),"\u0442\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left-header-cell.row3","div.left-header-cell.row3",1757409202),"\u043E\u043D\u0438"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ya full-width",ya], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nonpast","nonpast",970572167).cljs$core$IFn$_invoke$arity$1(stress),"c"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ty full-width unpredictable-stress",ty], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present ty full-width",ty], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nonpast","nonpast",970572167).cljs$core$IFn$_invoke$arity$1(stress),"c"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present oni full-width unpredictable-stress",oni], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"present oni full-width",oni], null))], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row1","div.middle-header-cell.row1",985573397),"\uD83D\uDC68"], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"past","past",182249289).cljs$core$IFn$_invoke$arity$1(stress),"c'")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31265 = cljs.core.deref(slovarish.frontend.verb_view.which_past_set_QMARK_);
var fexpr__31264 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type);
return (fexpr__31264.cljs$core$IFn$_invoke$arity$1 ? fexpr__31264.cljs$core$IFn$_invoke$arity$1(G__31265) : fexpr__31264.call(null,G__31265));
})(),new cljs.core.Keyword(null,"alternate","alternate",-931038644)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row2","div.middle-header-cell.row2",-1054572450),"\uD83D\uDC69\uD83D\uDC7D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row3","div.middle-header-cell.row3",-1116955687),"\uD83D\uDC6B"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row2","div.middle-header-cell.row2",-1054572450),"\uD83D\uDC69"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row3","div.middle-header-cell.row3",-1116955687),"\uD83D\uDC7D\uD83D\uDC6B"], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.past_tense_forms,stress,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31267 = cljs.core.deref(slovarish.frontend.verb_view.which_past_set_QMARK_);
var fexpr__31266 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type);
return (fexpr__31266.cljs$core$IFn$_invoke$arity$1 ? fexpr__31266.cljs$core$IFn$_invoke$arity$1(G__31267) : fexpr__31266.call(null,G__31267));
})(),new cljs.core.Keyword(null,"main","main",-2117802661)),past], null),(cljs.core.truth_(cljs.core.some(cljs.core.seq_QMARK_,cljs.core.vals(past)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.past-trigger","div.past-trigger",-786795390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onMouseOver","onMouseOver",1787360977),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type),new cljs.core.Keyword(null,"alternate","alternate",-931038644));
}),new cljs.core.Keyword(null,"onMouseOut","onMouseOut",1953812864),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(slovarish.frontend.verb_view.which_past_set_QMARK_,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(verb_type),new cljs.core.Keyword(null,"main","main",-2117802661));
})], null)], null):null)], null)], null);

break;
case "participles":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row1","div.middle-header-cell.row1",985573397),"active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row2","div.middle-header-cell.row2",-1054572450),"passive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.middle-header-cell.row3","div.middle-header-cell.row3",-1116955687),"adverbial"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"pf","pf",1255760069)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row1 present active participle",pres_act], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row2 present passive participle",pres_pass], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row3 present adverbial participle",pres_adv], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row1 past active participle",past_act], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,(function (){var G__31268 = "row2 past passive participle ";
var G__31268__$1 = ((clojure.string.includes_QMARK_(class$,"(-\u0451-)"))?[G__31268,"irregular-form"].join(''):G__31268);
var G__31268__$2 = ((clojure.string.includes_QMARK_(class$,"(-\u043E-)"))?[G__31268__$1,"irregular-form"].join(''):G__31268__$1);
if(cljs.core.truth_((function (){var fexpr__31269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["1a\u2466",null], null), null);
return (fexpr__31269.cljs$core$IFn$_invoke$arity$1 ? fexpr__31269.cljs$core$IFn$_invoke$arity$1(class$) : fexpr__31269.call(null,class$));
})())){
return [G__31268__$2,"unpredictable-stress"].join('');
} else {
return G__31268__$2;
}
})(),past_pass], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row3 past adverbial participle",past_adv], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31261__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row1 imperative",new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(imperative)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.display_form,"row2 imperative",new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(imperative)], null)], null);
} else {
return null;
}
});
slovarish.frontend.verb_view.verb_table = (function slovarish$frontend$verb_view$verb_table(p__31271){
var map__31272 = p__31271;
var map__31272__$1 = cljs.core.__destructure_map(map__31272);
var self = map__31272__$1;
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var aspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var conjugation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"conjugation","conjugation",332660020));
var partner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"partner","partner",-443349881));
var motion_partner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"motion-partner","motion-partner",936995932));
var definiteness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31272__$1,new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985));
if(cljs.core.truth_(self)){
var partner_aspect = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"pf","pf",1255760069)))?new cljs.core.Keyword(null,"impf","impf",-1164864294):new cljs.core.Keyword(null,"pf","pf",1255760069));
var partner_verb = (function (){var G__31273 = (function (){var G__31275 = slovarish.frontend.verb_view.destress(partner);
var fexpr__31274 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__31274.cljs$core$IFn$_invoke$arity$1 ? fexpr__31274.cljs$core$IFn$_invoke$arity$1(G__31275) : fexpr__31274.call(null,G__31275));
})();
var G__31273__$1 = (((G__31273 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31270_SHARP_){
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(partner,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(p1__31270_SHARP_))) || (slovarish.frontend.verb_view.monosyllable_QMARK_(partner)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(partner_aspect,new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(p1__31270_SHARP_))));
}),G__31273));
if((G__31273__$1 == null)){
return null;
} else {
return cljs.core.first(G__31273__$1);
}
})();
var motion_partner_verb = (function (){var G__31276 = (function (){var or__4253__auto__ = motion_partner;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"motion-partner","motion-partner",936995932).cljs$core$IFn$_invoke$arity$1(partner_verb);
}
})();
var G__31276__$1 = (((G__31276 == null))?null:slovarish.frontend.verb_view.destress(G__31276));
var G__31276__$2 = (((G__31276__$1 == null))?null:(function (){var fexpr__31277 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__31277.cljs$core$IFn$_invoke$arity$1 ? fexpr__31277.cljs$core$IFn$_invoke$arity$1(G__31276__$1) : fexpr__31277.call(null,G__31276__$1));
})());
if((G__31276__$2 == null)){
return null;
} else {
return cljs.core.first(G__31276__$2);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#verb-table","div#verb-table",-462892006),(cljs.core.truth_(motion_partner_verb)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.single_verb,"indefinite",(function (){var G__31278 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__31278)){
return self;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__31278)){
return motion_partner_verb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31278)){
return motion_partner_verb;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31278)].join('')));

}
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.single_verb,"definite",(function (){var G__31279 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__31279)){
return self;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__31279)){
return motion_partner_verb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31279)){
return partner_verb;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31279)].join('')));

}
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.single_verb,"perfective",(function (){var G__31280 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__31280)){
return partner_verb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__31280)){
return cljs.core.first((function (){var G__31282 = slovarish.frontend.verb_view.destress(new cljs.core.Keyword(null,"partner","partner",-443349881).cljs$core$IFn$_invoke$arity$1(motion_partner_verb));
var fexpr__31281 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__31281.cljs$core$IFn$_invoke$arity$1 ? fexpr__31281.cljs$core$IFn$_invoke$arity$1(G__31282) : fexpr__31281.call(null,G__31282));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__31280)){
return self;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31280)].join('')));

}
}
}
})()], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.single_verb,"imperfective",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"impf","impf",-1164864294)))?self:partner_verb)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verb_view.single_verb,"perfective",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"pf","pf",1255760069)))?self:partner_verb)], null)], null))], null);
} else {
goog.dom.classlist.set(goog.dom.getElement("word-input"),"default");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Please enter a verb."], null);
}
});

//# sourceMappingURL=slovarish.frontend.verb_view.js.map
