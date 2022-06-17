goog.provide('slovarish.frontend.data');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.num_batches !== 'undefined')){
} else {
slovarish.frontend.data.num_batches = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nouns","nouns",-314252558),(15),new cljs.core.Keyword(null,"verbs","verbs",-1655382772),(10),new cljs.core.Keyword(null,"adjectives","adjectives",1201932072),(8)], null);
}
slovarish.frontend.data.batches_loaded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.all_nouns !== 'undefined')){
} else {
slovarish.frontend.data.all_nouns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.top_2k_words !== 'undefined')){
} else {
slovarish.frontend.data.top_2k_words = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.nouns_for_adj !== 'undefined')){
} else {
slovarish.frontend.data.nouns_for_adj = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.all_verbs !== 'undefined')){
} else {
slovarish.frontend.data.all_verbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.data !== 'undefined') && (typeof slovarish.frontend.data.all_adjectives !== 'undefined')){
} else {
slovarish.frontend.data.all_adjectives = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
slovarish.frontend.data.load_mask = (function slovarish$frontend$data$load_mask(){
if((cljs.core.deref(slovarish.frontend.data.batches_loaded) < (33))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mask","div#mask",-1851106387),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"Your comrade-in-words as a learner of the Russian language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"slovarish / \u0441\u043B\u043E\u0432\u0430\u0440\u0438\u0449"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"\u0421\u043B\u043E\u0432\u0430\u0440\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0430\u043A\u0436\u0435 \u044F\u0432\u043B\u0430\u0435\u0442\u0441\u044F \u0432\u0430\u0448\u0438\u043C \u0442\u043E\u0432\u0430\u0440\u0438\u0449\u0435\u043C \u0432 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"Loading..."], null),(cljs.core.truth_(cljs.core.re_find(/Chrome|OPR|Yandex/,navigator.userAgent))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"For faster loading, please use Chrome, Opera, or Yandex Browser."], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.data.num_batches)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.data.batches_loaded)], null)], null)], null)], null);
} else {
return null;
}
});
slovarish.frontend.data.load_edn = (function slovarish$frontend$data$load_edn(pos,batch){
if((batch > (function (){var G__1025788 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pos);
return (slovarish.frontend.data.num_batches.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.data.num_batches.cljs$core$IFn$_invoke$arity$1(G__1025788) : slovarish.frontend.data.num_batches.call(null,G__1025788));
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,"nouns")){
cljs.core.reset_BANG_(slovarish.frontend.data.top_2k_words,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__1025793){
var vec__1025797 = p__1025793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025797,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025797,(1),null);
return cljs.core.some((function (p1__1025776_SHARP_){
return (new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(p1__1025776_SHARP_) <= (2000));
}),entries);
}),cljs.core.deref(slovarish.frontend.data.all_nouns)));

return cljs.core.reset_BANG_(slovarish.frontend.data.nouns_for_adj,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec((function (){var iter__4652__auto__ = (function slovarish$frontend$data$load_edn_$_iter__1025816(s__1025817){
return (new cljs.core.LazySeq(null,(function (){
var s__1025817__$1 = s__1025817;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025817__$1);
if(temp__5753__auto__){
var s__1025817__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025817__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025817__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025819 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025818 = (0);
while(true){
if((i__1025818 < size__4651__auto__)){
var gender = cljs.core._nth(c__4650__auto__,i__1025818);
cljs.core.chunk_append(b__1025819,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__1025779_SHARP_,clojure.string.lower_case(p1__1025779_SHARP_));
});})(i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025778_SHARP_){
return new cljs.core.Keyword(null,"stressed","stressed",-936375069).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.val(p1__1025778_SHARP_)));
});})(i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025777_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.val(p1__1025777_SHARP_))),gender);
});})(i__1025818,gender,c__4650__auto__,size__4651__auto__,b__1025819,s__1025817__$2,temp__5753__auto__))
,cljs.core.deref(slovarish.frontend.data.top_2k_words)))));

var G__1025883 = (i__1025818 + (1));
i__1025818 = G__1025883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025819),slovarish$frontend$data$load_edn_$_iter__1025816(cljs.core.chunk_rest(s__1025817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025819),null);
}
} else {
var gender = cljs.core.first(s__1025817__$2);
return cljs.core.cons(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gender,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__1025779_SHARP_,clojure.string.lower_case(p1__1025779_SHARP_));
});})(gender,s__1025817__$2,temp__5753__auto__))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gender,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025778_SHARP_){
return new cljs.core.Keyword(null,"stressed","stressed",-936375069).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.val(p1__1025778_SHARP_)));
});})(gender,s__1025817__$2,temp__5753__auto__))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gender,s__1025817__$2,temp__5753__auto__){
return (function (p1__1025777_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.val(p1__1025777_SHARP_))),gender);
});})(gender,s__1025817__$2,temp__5753__auto__))
,cljs.core.deref(slovarish.frontend.data.top_2k_words)))),slovarish$frontend$data$load_edn_$_iter__1025816(cljs.core.rest(s__1025817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"masculine","masculine",-523682579),new cljs.core.Keyword(null,"feminine","feminine",-223910280),new cljs.core.Keyword(null,"neuter","neuter",-2013207957)], null));
})()),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__1025781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__1025781_SHARP_,clojure.string.lower_case(p1__1025781_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__1025780_SHARP_){
return new cljs.core.Keyword(null,"plural","plural",-881591021).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.val(p1__1025780_SHARP_)));
}),cljs.core.deref(slovarish.frontend.data.top_2k_words))))));
} else {
return null;
}
} else {
var batch_no = (((batch < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch));
return fetch(["edn/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),batch_no,".edn"].join('')).then((function (p1__1025782_SHARP_){
return p1__1025782_SHARP_.text();
})).then((function (p1__1025787_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__1025861 = pos;
switch (G__1025861) {
case "nouns":
return slovarish.frontend.data.all_nouns;

break;
case "verbs":
return slovarish.frontend.data.all_verbs;

break;
case "adjectives":
return slovarish.frontend.data.all_adjectives;

break;
default:
return null;

}
})(),cljs.core.merge,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__1025787_SHARP_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.data.batches_loaded,cljs.core.inc);

var G__1025864 = pos;
var G__1025865 = (batch + (1));
return (slovarish.frontend.data.load_edn.cljs$core$IFn$_invoke$arity$2 ? slovarish.frontend.data.load_edn.cljs$core$IFn$_invoke$arity$2(G__1025864,G__1025865) : slovarish.frontend.data.load_edn.call(null,G__1025864,G__1025865));
}));
}
});

//# sourceMappingURL=slovarish.frontend.data.js.map
