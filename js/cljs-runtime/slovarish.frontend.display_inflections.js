goog.provide('slovarish.frontend.display_inflections');
slovarish.frontend.display_inflections.destress = (function slovarish$frontend$display_inflections$destress(word){
var G__69527 = word;
if((G__69527 == null)){
return null;
} else {
return clojure.string.replace(G__69527,/[\u0300\u0301]/,"");
}
});
slovarish.frontend.display_inflections.monosyllable_QMARK_ = (function slovarish$frontend$display_inflections$monosyllable_QMARK_(word){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.re_seq(/[аеиоуяэюёы]/,word)));
});
slovarish.frontend.display_inflections.destress_mono = (function slovarish$frontend$display_inflections$destress_mono(word){
if(slovarish.frontend.display_inflections.monosyllable_QMARK_(word)){
return slovarish.frontend.display_inflections.destress(word);
} else {
return word;
}
});
/**
 * Like str, but will automatically destress if stress marks are toggled off.
 */
slovarish.frontend.display_inflections.dstr = (function slovarish$frontend$display_inflections$dstr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69562 = arguments.length;
var i__4865__auto___69563 = (0);
while(true){
if((i__4865__auto___69563 < len__4864__auto___69562)){
args__4870__auto__.push((arguments[i__4865__auto___69563]));

var G__69564 = (i__4865__auto___69563 + (1));
i__4865__auto___69563 = G__69564;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__69529 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,xs);
if(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_) === false){
return slovarish.frontend.display_inflections.destress(G__69529);
} else {
return G__69529;
}
}));

(slovarish.frontend.display_inflections.dstr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(slovarish.frontend.display_inflections.dstr.cljs$lang$applyTo = (function (seq69528){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69528));
}));

slovarish.frontend.display_inflections.fleeting_vowel_indices = (function slovarish$frontend$display_inflections$fleeting_vowel_indices(base,inflected){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4652__auto__ = (function slovarish$frontend$display_inflections$fleeting_vowel_indices_$_iter__69531(s__69532){
return (new cljs.core.LazySeq(null,(function (){
var s__69532__$1 = s__69532;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__69532__$1);
if(temp__5753__auto__){
var s__69532__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69532__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__69532__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__69534 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__69533 = (0);
while(true){
if((i__69533 < size__4651__auto__)){
var vec__69535 = cljs.core._nth(c__4650__auto__,i__69533);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(0),null);
var vec__69538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69538,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69538,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69538,(2),null);
var a_SINGLEQUOTE_ = vec__69538;
var vec__69541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69535,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69541,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69541,(1),null);
var c4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69541,(2),null);
var b_SINGLEQUOTE_ = vec__69541;
var a = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,a_SINGLEQUOTE_);
var b = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,b_SINGLEQUOTE_);
cljs.core.chunk_append(b__69534,(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,a);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-fv-idx","base-fv-idx",-1237346643),i], null):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,b);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c4)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inflected-fv-idx","inflected-fv-idx",-1838353038),i], null):null
)));

var G__69565 = (i__69533 + (1));
i__69533 = G__69565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69534),slovarish$frontend$display_inflections$fleeting_vowel_indices_$_iter__69531(cljs.core.chunk_rest(s__69532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69534),null);
}
} else {
var vec__69544 = cljs.core.first(s__69532__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69544,(0),null);
var vec__69547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69544,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69547,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69547,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69547,(2),null);
var a_SINGLEQUOTE_ = vec__69547;
var vec__69550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69544,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69550,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69550,(1),null);
var c4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69550,(2),null);
var b_SINGLEQUOTE_ = vec__69550;
var a = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,a_SINGLEQUOTE_);
var b = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,b_SINGLEQUOTE_);
return cljs.core.cons((cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,a);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-fv-idx","base-fv-idx",-1237346643),i], null):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,b);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c4)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inflected-fv-idx","inflected-fv-idx",-1838353038),i], null):null
)),slovarish$frontend$display_inflections$fleeting_vowel_indices_$_iter__69531(cljs.core.rest(s__69532__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.cons(cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69530_SHARP_){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),slovarish.frontend.display_inflections.destress(p1__69530_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,inflected], null)))));
})());
});
slovarish.frontend.display_inflections.decompose_fv = (function slovarish$frontend$display_inflections$decompose_fv(idx,form){
var temp__5755__auto__ = ((clojure.string.starts_with_QMARK_(form,"\u043E\u0431\u043E\u043F\u0440"))?cljs.core.re_find(cljs.core.re_pattern(["^((?:.\u0301?){",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx - (1))),"})(\u0431\u043E)(.*)"].join('')),form):cljs.core.re_find(cljs.core.re_pattern(["^((?:.\u0301?){",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"})([\u0435\u043E\u0451\u0438]\u0301?)(.*)"].join('')),form));
if((temp__5755__auto__ == null)){
return form;
} else {
var vec__69553 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69553,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69553,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69553,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69553,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),fv], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),b], null)], null);
}
});
slovarish.frontend.display_inflections.display_form = (function slovarish$frontend$display_inflections$display_form(var_args){
var args__4870__auto__ = [];
var len__4864__auto___69566 = arguments.length;
var i__4865__auto___69567 = (0);
while(true){
if((i__4865__auto___69567 < len__4864__auto___69566)){
args__4870__auto__.push((arguments[i__4865__auto___69567]));

var G__69568 = (i__4865__auto___69567 + (1));
i__4865__auto___69567 = G__69568;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return slovarish.frontend.display_inflections.display_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(slovarish.frontend.display_inflections.display_form.cljs$core$IFn$_invoke$arity$variadic = (function (css_class,form,p__69559){
var map__69560 = p__69559;
var map__69560__$1 = cljs.core.__destructure_map(map__69560);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69560__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null);
var fv_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69560__$1,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),null);
var supplement = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69560__$1,new cljs.core.Keyword(null,"supplement","supplement",1050079545),null);
if(cljs.core.truth_(form)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form","div.word-form",-1576398333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),css_class], null),(function (){var G__69561 = form;
var G__69561__$1 = ((typeof form === 'string')?slovarish.frontend.display_inflections.destress_mono(G__69561):G__69561);
var G__69561__$2 = ((cljs.core.seq_QMARK_(form))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.display_inflections.destress_mono,G__69561__$1):G__69561__$1);
var G__69561__$3 = ((cljs.core.seq_QMARK_(form))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",G__69561__$2):G__69561__$2);
var G__69561__$4 = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69561__$3)].join(''):G__69561__$3);
var G__69561__$5 = ((cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_) === false)?slovarish.frontend.display_inflections.destress(G__69561__$4):G__69561__$4);
if(cljs.core.truth_(fv_idx)){
return slovarish.frontend.display_inflections.decompose_fv(fv_idx,G__69561__$5);
} else {
return G__69561__$5;
}
})(),supplement], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form","div.word-form",-1576398333),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((typeof css_class === 'string')?[css_class," empty"].join(''):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(css_class,"empty"))], null),"\u200B"], null);
}
}));

(slovarish.frontend.display_inflections.display_form.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(slovarish.frontend.display_inflections.display_form.cljs$lang$applyTo = (function (seq69556){
var G__69557 = cljs.core.first(seq69556);
var seq69556__$1 = cljs.core.next(seq69556);
var G__69558 = cljs.core.first(seq69556__$1);
var seq69556__$2 = cljs.core.next(seq69556__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69557,G__69558,seq69556__$2);
}));


//# sourceMappingURL=slovarish.frontend.display_inflections.js.map
