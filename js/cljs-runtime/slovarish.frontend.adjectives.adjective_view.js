goog.provide('slovarish.frontend.adjectives.adjective_view');
slovarish.frontend.adjectives.adjective_view.special_stem_type = (function slovarish$frontend$adjectives$adjective_view$special_stem_type(form){
if(((clojure.string.ends_with_QMARK_(form,"\u043D\u0438\u0439")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"\u043A\u0430\u0301\u0440\u0438\u0439")))){
return new cljs.core.Keyword(null,"soft","soft",144891873);
} else {
var letter = cljs.core.re_find(/.(?=.\u0301?.(?:ся)?$)/,form);
if(clojure.string.includes_QMARK_("\u0448\u0449\u0436\u0447",letter)){
return new cljs.core.Keyword(null,"sibilant","sibilant",1873258377);
} else {
if(clojure.string.includes_QMARK_("\u043A\u0433\u0445",letter)){
return new cljs.core.Keyword(null,"velar","velar",1801791161);
} else {
return null;

}
}
}
});
slovarish.frontend.adjectives.adjective_view.endings = (function slovarish$frontend$adjectives$adjective_view$endings(gender,possessive_QMARK_,end_stress_QMARK_,special_stem){
var G__80728 = gender;
switch (G__80728) {
case "masculine":
if(cljs.core.truth_(possessive_QMARK_)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),null,"\u044C\u0435\u0433\u043E","\u044C\u0435\u043C\u0443","\u044C\u0438\u043C","\u044C\u0435\u043C"], null);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),special_stem);
if(and__4251__auto__){
return end_stress_QMARK_;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"velar","velar",1801791161),special_stem);
}
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,"\u043E\u0433\u043E","\u043E\u043C\u0443","\u0438\u043C","\u043E\u043C"], null);
} else {
if(cljs.core.truth_(end_stress_QMARK_)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,"\u043E\u0433\u043E","\u043E\u043C\u0443","\u044B\u043C","\u043E\u043C"], null);
} else {
if(cljs.core.truth_((function (){var fexpr__80729 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"soft","soft",144891873),null,new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),null], null), null);
return (fexpr__80729.cljs$core$IFn$_invoke$arity$1 ? fexpr__80729.cljs$core$IFn$_invoke$arity$1(special_stem) : fexpr__80729.call(null,special_stem));
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),null,"\u0435\u0433\u043E","\u0435\u043C\u0443","\u0438\u043C","\u0435\u043C"], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,"\u043E\u0433\u043E","\u043E\u043C\u0443","\u044B\u043C","\u043E\u043C"], null);

}
}
}
}

break;
case "feminine":
if(cljs.core.truth_(possessive_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u044C\u044F","\u044C\u044E","\u044C\u0435\u0439"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(special_stem,new cljs.core.Keyword(null,"soft","soft",144891873))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u044F\u044F","\u044E\u044E","\u0435\u0439"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u0430\u044F","\u0443\u044E","\u043E\u0439"], null);

}
}

break;
case "neuter":
if(cljs.core.truth_(possessive_QMARK_)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u044C\u0435","\u044C\u0435\u0433\u043E","\u044C\u0435\u043C\u0443","\u044C\u0438\u043C","\u044C\u0435\u043C"], null);
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),special_stem);
if(and__4251__auto__){
return end_stress_QMARK_;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"velar","velar",1801791161),special_stem);
}
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u043E\u0435","\u043E\u0433\u043E","\u043E\u043C\u0443","\u0438\u043C","\u043E\u043C"], null);
} else {
if(cljs.core.truth_(end_stress_QMARK_)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u043E\u0435","\u043E\u0433\u043E","\u043E\u043C\u0443","\u044B\u043C","\u043E\u043C"], null);
} else {
if(cljs.core.truth_((function (){var fexpr__80730 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"soft","soft",144891873),null,new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),null], null), null);
return (fexpr__80730.cljs$core$IFn$_invoke$arity$1 ? fexpr__80730.cljs$core$IFn$_invoke$arity$1(special_stem) : fexpr__80730.call(null,special_stem));
})())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u0435\u0435","\u0435\u0433\u043E","\u0435\u043C\u0443","\u0438\u043C","\u0435\u043C"], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u043E\u0435","\u043E\u0433\u043E","\u043E\u043C\u0443","\u044B\u043C","\u043E\u043C"], null);

}
}
}
}

break;
case "plural":
if(cljs.core.truth_(possessive_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u044C\u0438","\u044C\u0438\u0445","\u044C\u0438\u043C","\u044C\u0438\u043C\u0438"], null);
} else {
if(cljs.core.truth_(special_stem)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"\u0438\u0435","\u0438\u0445","\u0438\u043C","\u0438\u043C\u0438"], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\u044B\u0435","\u044B\u0445","\u044B\u043C","\u044B\u043C\u0438"], null);

}
}

break;
default:
return null;

}
});
slovarish.frontend.adjectives.adjective_view.show_long_forms = (function slovarish$frontend$adjectives$adjective_view$show_long_forms(long_form,reflexive_QMARK_){
if(cljs.core.truth_(long_form)){
var vec__80733 = cljs.core.re_find(/((?:[^\u0301]\u0301?)+)([^\u0301]\u0301?й)$/,long_form);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80733,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80733,(1),null);
var m_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80733,(2),null);
var possessive_QMARK_ = (function (){var fexpr__80736 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u0442\u0440\u0435\u0301\u0442\u0438\u0439",null,"\u0447\u0435\u0439",null], null), null);
return (fexpr__80736.cljs$core$IFn$_invoke$arity$1 ? fexpr__80736.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__80736.call(null,long_form));
})();
var end_stress_QMARK_ = cljs.core.re_find(/\u0301(?=\S$)/,long_form);
var special_stem = slovarish.frontend.adjectives.adjective_view.special_stem_type(long_form);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737(s__80738){
return (new cljs.core.LazySeq(null,(function (){
var s__80738__$1 = s__80738;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80738__$1);
if(temp__5753__auto__){
var s__80738__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80738__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__80738__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__80740 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__80739 = (0);
while(true){
if((i__80739 < size__4651__auto__)){
var vec__80741 = cljs.core._nth(c__4650__auto__,i__80739);
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80741,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80741,(1),null);
var vec__80744 = slovarish.frontend.adjectives.adjective_view.endings(gender,possessive_QMARK_,end_stress_QMARK_,special_stem);
var seq__80745 = cljs.core.seq(vec__80744);
var first__80746 = cljs.core.first(seq__80745);
var seq__80745__$1 = cljs.core.next(seq__80745);
var strong_QMARK_ = first__80746;
var first__80746__$1 = cljs.core.first(seq__80745__$1);
var seq__80745__$2 = cljs.core.next(seq__80745__$1);
var nom = first__80746__$1;
var other_cases = seq__80745__$2;
var vec__80747 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80731_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80731_SHARP_,(1));
});})(i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = nom;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80747,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80747,(1),null);
cljs.core.chunk_append(b__80740,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-row","div.top-row",1084331990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.emoji","div.emoji",-1281840773),emoji], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form","span.word-form",354931654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_], 0))], null),b], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_,b], 0))),reflexive_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.oblique-drawer","div.oblique-drawer",-1776120464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80750(s__80751){
return (new cljs.core.LazySeq(null,((function (i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (){
var s__80751__$1 = s__80751;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__80751__$1);
if(temp__5753__auto____$1){
var s__80751__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80751__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__80751__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__80753 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__80752 = (0);
while(true){
if((i__80752 < size__4651__auto____$1)){
var form = cljs.core._nth(c__4650__auto____$1,i__80752);
var vec__80754 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__80752,i__80739,form,c__4650__auto____$1,size__4651__auto____$1,b__80753,s__80751__$2,temp__5753__auto____$1,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80732_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80732_SHARP_,(1));
});})(i__80752,i__80739,form,c__4650__auto____$1,size__4651__auto____$1,b__80753,s__80751__$2,temp__5753__auto____$1,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80754,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80754,(1),null);
cljs.core.chunk_append(b__80753,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)));

var G__80849 = (i__80752 + (1));
i__80752 = G__80849;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80753),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80750(cljs.core.chunk_rest(s__80751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80753),null);
}
} else {
var form = cljs.core.first(s__80751__$2);
var vec__80757 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__80739,form,s__80751__$2,temp__5753__auto____$1,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80732_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80732_SHARP_,(1));
});})(i__80739,form,s__80751__$2,temp__5753__auto____$1,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80757,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80757,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80750(cljs.core.rest(s__80751__$2)));
}
} else {
return null;
}
break;
}
});})(i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
,null,null));
});})(i__80739,vec__80744,seq__80745,first__80746,seq__80745__$1,strong_QMARK_,first__80746__$1,seq__80745__$2,nom,other_cases,vec__80747,a,b,vec__80741,emoji,gender,c__4650__auto__,size__4651__auto__,b__80740,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
;
return iter__4652__auto__(cljs.core.cons(nom,other_cases));
})())], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)));

var G__80851 = (i__80739 + (1));
i__80739 = G__80851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80740),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737(cljs.core.chunk_rest(s__80738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80740),null);
}
} else {
var vec__80760 = cljs.core.first(s__80738__$2);
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80760,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80760,(1),null);
var vec__80763 = slovarish.frontend.adjectives.adjective_view.endings(gender,possessive_QMARK_,end_stress_QMARK_,special_stem);
var seq__80764 = cljs.core.seq(vec__80763);
var first__80765 = cljs.core.first(seq__80764);
var seq__80764__$1 = cljs.core.next(seq__80764);
var strong_QMARK_ = first__80765;
var first__80765__$1 = cljs.core.first(seq__80764__$1);
var seq__80764__$2 = cljs.core.next(seq__80764__$1);
var nom = first__80765__$1;
var other_cases = seq__80764__$2;
var vec__80766 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80731_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80731_SHARP_,(1));
});})(vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = nom;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80766,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80766,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-row","div.top-row",1084331990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.emoji","div.emoji",-1281840773),emoji], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form","span.word-form",354931654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_], 0))], null),b], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_,b], 0))),reflexive_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.oblique-drawer","div.oblique-drawer",-1776120464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80769(s__80770){
return (new cljs.core.LazySeq(null,(function (){
var s__80770__$1 = s__80770;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__80770__$1);
if(temp__5753__auto____$1){
var s__80770__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80770__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__80770__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__80772 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__80771 = (0);
while(true){
if((i__80771 < size__4651__auto__)){
var form = cljs.core._nth(c__4650__auto__,i__80771);
var vec__80773 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__80771,form,c__4650__auto__,size__4651__auto__,b__80772,s__80770__$2,temp__5753__auto____$1,vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80732_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80732_SHARP_,(1));
});})(i__80771,form,c__4650__auto__,size__4651__auto__,b__80772,s__80770__$2,temp__5753__auto____$1,vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80773,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80773,(1),null);
cljs.core.chunk_append(b__80772,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)));

var G__80862 = (i__80771 + (1));
i__80771 = G__80862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80772),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80769(cljs.core.chunk_rest(s__80770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80772),null);
}
} else {
var form = cljs.core.first(s__80770__$2);
var vec__80776 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (form,s__80770__$2,temp__5753__auto____$1,vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__80732_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__80732_SHARP_,(1));
});})(form,s__80770__$2,temp__5753__auto____$1,vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80776,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80776,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737_$_iter__80769(cljs.core.rest(s__80770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__80763,seq__80764,first__80765,seq__80764__$1,strong_QMARK_,first__80765__$1,seq__80764__$2,nom,other_cases,vec__80766,a,b,vec__80760,emoji,gender,s__80738__$2,temp__5753__auto__,vec__80733,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
;
return iter__4652__auto__(cljs.core.cons(nom,other_cases));
})())], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__80737(cljs.core.rest(s__80738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC68","masculine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC69","feminine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC7D","neuter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\uD83D\uDC6B","plural"], null)], null));
})())], null);
} else {
return null;
}
});
slovarish.frontend.adjectives.adjective_view.buffer_vowel_idx = (function slovarish$frontend$adjectives$adjective_view$buffer_vowel_idx(long_form,m){
if(cljs.core.truth_((function (){var and__4251__auto__ = long_form;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = m;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.string.replace(long_form,/н+ый$/,"\u043D"));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var vec__80779 = cljs.core.re_find(/(.)(.)(?=.{2}$)/,slovarish.frontend.display_inflections.destress(long_form));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80779,(0),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80779,(1),null);
var end_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80779,(2),null);
var vec__80782 = cljs.core.re_find(/(.*?)(.)(.)$/,slovarish.frontend.display_inflections.destress(m));
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80782,(0),null);
var chars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80782,(1),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80782,(2),null);
var end_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80782,(3),null);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_1,end_2)))){
return cljs.core.count(chars);
} else {
return null;
}
} else {
return null;
}
});
slovarish.frontend.adjectives.adjective_view.irregular_short_forms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["\u043C\u0430\u0301\u043B\u0435\u043D\u044C\u043A\u0438\u0439",null,"\u0434\u043E\u0441\u0442\u043E\u0301\u0439\u043D\u044B\u0439",null,"\u0441\u0438\u0301\u043D\u0438\u0439",null,"\u0438\u0301\u0441\u043A\u0440\u0435\u043D\u043D\u0438\u0439",null,"\u0431\u043E\u043B\u044C\u0448\u043E\u0301\u0439",null,"\u0441\u043E\u0301\u043B\u0451\u043D\u044B\u0439",null], null), null);
/**
 * Rough approxmination of stem stress index.
 */
slovarish.frontend.adjectives.adjective_view.stress_index = (function slovarish$frontend$adjectives$adjective_view$stress_index(form){
return cljs.core.count(cljs.core.re_find(/.+?[\u0301ё]/,form));
});
/**
 * Marks adjectives like дешёвый, счастливый.
 */
slovarish.frontend.adjectives.adjective_view.short_form_has_diff_stem_stress_QMARK_ = (function slovarish$frontend$adjectives$adjective_view$short_form_has_diff_stem_stress_QMARK_(long_form,short_forms){
if(cljs.core.truth_((function (){var and__4251__auto__ = long_form;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = short_forms;
if(cljs.core.truth_(and__4251__auto____$1)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(long_form,"\u0441\u043C\u0435\u0448\u043D\u043E\u0301\u0439")) && (cljs.core.not((slovarish.frontend.adjectives.adjective_view.irregular_short_forms.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.adjectives.adjective_view.irregular_short_forms.cljs$core$IFn$_invoke$arity$1(long_form) : slovarish.frontend.adjectives.adjective_view.irregular_short_forms.call(null,long_form)))));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.not_any_QMARK_((function (p1__80786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.adjectives.adjective_view.stress_index(p1__80786_SHARP_),slovarish.frontend.adjectives.adjective_view.stress_index(long_form));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__80785_SHARP_){
return (((p1__80785_SHARP_ == null)) || (clojure.string.ends_with_QMARK_(p1__80785_SHARP_,"\u0301")));
}),cljs.core.flatten(cljs.core.vals(cljs.core.select_keys(short_forms,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p","p",151049309)], null))))));
} else {
return null;
}
});
slovarish.frontend.adjectives.adjective_view.breakdown_short_forms = (function slovarish$frontend$adjectives$adjective_view$breakdown_short_forms(p__80790){
var map__80791 = p__80790;
var map__80791__$1 = cljs.core.__destructure_map(map__80791);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80791__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80791__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80791__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80791__$1,new cljs.core.Keyword(null,"p","p",151049309));
var fv_idx = slovarish.frontend.adjectives.adjective_view.buffer_vowel_idx(cljs.core.deref(slovarish.frontend.state.input),((typeof m === 'string')?slovarish.frontend.display_inflections.destress(m):slovarish.frontend.display_inflections.destress(cljs.core.first(m))));
var end_stress_QMARK_ = (function (p1__80787_SHARP_){
return clojure.string.ends_with_QMARK_(p1__80787_SHARP_,"\u0301");
});
if(((cljs.core.every_QMARK_(cljs.core.string_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,f,n,p], null))) && ((((!(slovarish.frontend.display_inflections.monosyllable_QMARK_(m)))) && (cljs.core.every_QMARK_((function (p1__80788_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.string.replace(p1__80788_SHARP_,/.\u0301?$/,""));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.quad-gradient","div.column.quad-gradient",-1129187423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"quad-gradient single short-form light",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,f)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,n)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,p))].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((m == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no masculine short form)"], null):((cljs.core.seq_QMARK_(m))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine primary on short-form",(cljs.core.truth_(fv_idx)?"irregular-form":"light")], null),cljs.core.first(m),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine alternate off d-none short-form",(((fv_idx > cljs.core.count(cljs.core.second(m))))?"irregular-form":"light")], null),cljs.core.second(m),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine single short-form",(cljs.core.truth_(fv_idx)?"irregular-form":"light")], null),m,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null)], null)
)),((((cljs.core.every_QMARK_(cljs.core.string_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null))) && (cljs.core.every_QMARK_((function (p1__80789_SHARP_){
return clojure.string.includes_QMARK_(p1__80789_SHARP_,clojure.string.replace(f,/.\u0301?$/,""));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,p], null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.triple-gradient","div.column.triple-gradient",284614719),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["triple-gradient single short-form",((end_stress_QMARK_(f))?"unpredictable-stress":"light")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,n)),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,p))].join('')], null)], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__80792(s__80793){
return (new cljs.core.LazySeq(null,(function (){
var s__80793__$1 = s__80793;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80793__$1);
if(temp__5753__auto__){
var s__80793__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80793__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__80793__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__80795 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__80794 = (0);
while(true){
if((i__80794 < size__4651__auto__)){
var vec__80796 = cljs.core._nth(c__4650__auto__,i__80794);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80796,(0),null);
var vec__80799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80796,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80799,(1),null);
var forms = vec__80799;
cljs.core.chunk_append(b__80795,(((forms == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no ",gender," short form)"], null):((cljs.core.coll_QMARK_(forms))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"primary on short-form",((end_stress_QMARK_(a))?"unpredictable-stress":"light")], null),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"alternate off d-none short-form",((end_stress_QMARK_(b))?"unpredictable-stress":"light")], null),b], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"single short-form",((end_stress_QMARK_(forms))?"unpredictable-stress":"light")], null),forms], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null))
)));

var G__80869 = (i__80794 + (1));
i__80794 = G__80869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80795),slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__80792(cljs.core.chunk_rest(s__80793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80795),null);
}
} else {
var vec__80802 = cljs.core.first(s__80793__$2);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(0),null);
var vec__80805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80802,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80805,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80805,(1),null);
var forms = vec__80805;
return cljs.core.cons((((forms == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no ",gender," short form)"], null):((cljs.core.coll_QMARK_(forms))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"primary on short-form",((end_stress_QMARK_(a))?"unpredictable-stress":"light")], null),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"alternate off d-none short-form",((end_stress_QMARK_(b))?"unpredictable-stress":"light")], null),b], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"single short-form",((end_stress_QMARK_(forms))?"unpredictable-stress":"light")], null),forms], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null))
)),slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__80792(cljs.core.rest(s__80793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["feminine",f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["neuter",n], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["plural",p], null)], null));
})())
)], null);
}
});
slovarish.frontend.adjectives.adjective_view.rus_participle = (function slovarish$frontend$adjectives$adjective_view$rus_participle(string){

var G__80808 = "\u043F\u0440\u0438\u0447.";
var G__80808__$1 = ((clojure.string.includes_QMARK_(string,"active"))?[G__80808," \u0434\u0435\u0439\u0441\u0442\u0432."].join(''):G__80808);
var G__80808__$2 = ((clojure.string.includes_QMARK_(string,"passive"))?[G__80808__$1," \u0441\u0442\u0440\u0430\u0434."].join(''):G__80808__$1);
var G__80808__$3 = ((clojure.string.includes_QMARK_(string,"present"))?[G__80808__$2," \u043D\u0430\u0441\u0442. \u0432\u0440."].join(''):G__80808__$2);
var G__80808__$4 = ((clojure.string.includes_QMARK_(string,"past"))?[G__80808__$3," \u043F\u0440\u043E\u0448. \u0432\u0440."].join(''):G__80808__$3);
var G__80808__$5 = [G__80808__$4," \u0433\u043B\u0430\u0433\u043E\u043B\u0430"].join('')
;
var G__80808__$6 = ((clojure.string.includes_QMARK_(string,"imperfective"))?[G__80808__$5," \u041D\u0421\u0412"].join(''):G__80808__$5);
if((!(clojure.string.includes_QMARK_(string,"imperfective")))){
return [G__80808__$6," \u0421\u0412"].join('');
} else {
return G__80808__$6;
}
});
slovarish.frontend.adjectives.adjective_view.adj_table = (function slovarish$frontend$adjectives$adjective_view$adj_table(p__80809){
var map__80810 = p__80809;
var map__80810__$1 = cljs.core.__destructure_map(map__80810);
var self = map__80810__$1;
var adjective_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"adjective?","adjective?",-496987264));
var from_verb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var from_noun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"from-noun","from-noun",1131235132));
var long_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"long-form","long-form",-1756929166));
var short_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"short-forms","short-forms",644568209));
var comparatives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"comparatives","comparatives",-1500838595));
var superlatives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"superlatives","superlatives",-434443465));
var adverb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80810__$1,new cljs.core.Keyword(null,"adverb","adverb",353843337));
var vec__80811 = (cljs.core.truth_(long_form)?cljs.core.re_find(/(.+?)(с[яь])?$/,long_form):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80811,(0),null);
var without_reflexive = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80811,(1),null);
var reflexive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80811,(2),null);
var mark_sf_stress_QMARK_ = slovarish.frontend.adjectives.adjective_view.short_form_has_diff_stem_stress_QMARK_(long_form,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),short_forms)));
var alternates_QMARK_ = cljs.core.some(cljs.core.coll_QMARK_,cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,short_forms)));
var verb = (function (){var or__4253__auto__ = from_verb;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__80814 = short_forms;
var G__80814__$1 = (((G__80814 == null))?null:cljs.core.first(G__80814));
if((G__80814__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370).cljs$core$IFn$_invoke$arity$1(G__80814__$1);
}
}
})();
if(cljs.core.truth_(self)){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#adj-table","div#adj-table",-1544959807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.sans","div.column-header.sans",938022652),(function (){var G__80815 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80815__$1 = (((G__80815 instanceof cljs.core.Keyword))?G__80815.fqn:null);
switch (G__80815__$1) {
case "english":
return "long form";

break;
case "russian":
return "\u043F\u043E\u043B\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80815__$1)].join('')));

}
})()], null),(cljs.core.truth_(long_form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.long-forms.flex.row","div.long-forms.flex.row",-725303646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.show_long_forms,without_reflexive,reflexive_QMARK_], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.long-forms.flex.row.no-form.italic.sans","div.long-forms.flex.row.no-form.italic.sans",1614549404),(function (){var G__80816 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80816__$1 = (((G__80816 instanceof cljs.core.Keyword))?G__80816.fqn:null);
switch (G__80816__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80816__$1)].join('')));

}
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.column-header.sans","span.column-header.sans",-1768806937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(mark_sf_stress_QMARK_)?"unpredictable-stress":null)], null),(function (){var G__80817 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80817__$1 = (((G__80817 instanceof cljs.core.Keyword))?G__80817.fqn:null);
switch (G__80817__$1) {
case "english":
return "short form";

break;
case "russian":
return "\u043A\u0440\u0430\u0442\u043A\u0430\u044F \u0444\u043E\u0440\u043C\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80817__$1)].join('')));

}
})(),(cljs.core.truth_(mark_sf_stress_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__80818 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80818__$1 = (((G__80818 instanceof cljs.core.Keyword))?G__80818.fqn:null);
switch (G__80818__$1) {
case "english":
return " (different stem stress)";

break;
case "russian":
return " (\u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0438\u043D\u043E\u0439 \u0441\u043B\u043E\u0433)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80818__$1)].join('')));

}
})()], null):null)], null),(cljs.core.truth_(alternates_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.alternate-forms-trigger","span.alternate-forms-trigger",-599628264),"\uD83D\uDD00"], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.Keyword(null,"class","class",-2030961996),short_forms))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80819(s__80820){
return (new cljs.core.LazySeq(null,(function (){
var s__80820__$1 = s__80820;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80820__$1);
if(temp__5753__auto__){
var s__80820__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80820__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__80820__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__80822 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__80821 = (0);
while(true){
if((i__80821 < size__4651__auto__)){
var map__80823 = cljs.core._nth(c__4650__auto__,i__80821);
var map__80823__$1 = cljs.core.__destructure_map(map__80823);
var sf = map__80823__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
var participle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"participle?","participle?",-1231367896));
var from_verb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80823__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var no_long_form_QMARK_ = (function (){var and__4251__auto__ = (function (){var fexpr__80824 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u0443\u0301\u0437\u043A\u0438\u0439",null,"\u0448\u0438\u0440\u043E\u0301\u043A\u0438\u0439",null,"\u0442\u0435\u0301\u0441\u043D\u044B\u0439",null,"\u0434\u043B\u0438\u0301\u043D\u043D\u044B\u0439",null], null), null);
return (fexpr__80824.cljs$core$IFn$_invoke$arity$1 ? fexpr__80824.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__80824.call(null,long_form));
})();
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(distinction,"too");
} else {
return and__4251__auto__;
}
})();
cljs.core.chunk_append(b__80822,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms-header","div.short-forms-header",-722181868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss.serif.default","div.primary-gloss.serif.default",608431775),slovarish.frontend.gloss.smart_quotes(distinction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),slovarish.frontend.gloss.smart_quotes(distinction)], null)], null)], null)], null):null)], null),(cljs.core.truth_(no_long_form_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__80825 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80825__$1 = (((G__80825 instanceof cljs.core.Keyword))?G__80825.fqn:null);
switch (G__80825__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80825__$1)].join('')));

}
})()], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = participle_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return adjective_QMARK_;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.participle-type.italic.sans.note","div.participle-type.italic.sans.note",1489554159),(function (){var G__80826 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80826__$1 = (((G__80826 instanceof cljs.core.Keyword))?G__80826.fqn:null);
switch (G__80826__$1) {
case "english":
return [(cljs.core.truth_(class$)?"when used either as adjective or as ":"no short form when used as the "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(participle_QMARK_)," of"].join('');

break;
case "russian":
return [(cljs.core.truth_(class$)?"\u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A \u0438 \u043F\u0440\u0438\u043B. \u0438 ":"\u043D\u0435\u0442 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A "),slovarish.frontend.adjectives.adjective_view.rus_participle(participle_QMARK_)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80826__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80821,no_long_form_QMARK_,map__80823,map__80823__$1,sf,m,f,class$,distinction,participle_QMARK_,from_verb__$1,c__4650__auto__,size__4651__auto__,b__80822,s__80820__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(from_verb__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
});})(i__80821,no_long_form_QMARK_,map__80823,map__80823__$1,sf,m,f,class$,distinction,participle_QMARK_,from_verb__$1,c__4650__auto__,size__4651__auto__,b__80822,s__80820__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb))
], null),from_verb__$1], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row","div.short-forms.flex.row",1781936900),(cljs.core.truth_(class$)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.breakdown_short_forms,sf], null):(cljs.core.truth_(participle_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-form.italic.sans","div.no-form.italic.sans",1451468352),(function (){var G__80827 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80827__$1 = (((G__80827 instanceof cljs.core.Keyword))?G__80827.fqn:null);
switch (G__80827__$1) {
case "english":
return "(has short form only when used as a participle)";

break;
case "russian":
return "(\u0435\u0441\u0442\u044C \u043A\u0440\u0430\u0442\u043A\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A \u043F\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u0435)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80827__$1)].join('')));

}
})()], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = m;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)));

var G__80884 = (i__80821 + (1));
i__80821 = G__80884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80822),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80819(cljs.core.chunk_rest(s__80820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80822),null);
}
} else {
var map__80828 = cljs.core.first(s__80820__$2);
var map__80828__$1 = cljs.core.__destructure_map(map__80828);
var sf = map__80828__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
var participle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"participle?","participle?",-1231367896));
var from_verb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80828__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var no_long_form_QMARK_ = (function (){var and__4251__auto__ = (function (){var fexpr__80829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u0443\u0301\u0437\u043A\u0438\u0439",null,"\u0448\u0438\u0440\u043E\u0301\u043A\u0438\u0439",null,"\u0442\u0435\u0301\u0441\u043D\u044B\u0439",null,"\u0434\u043B\u0438\u0301\u043D\u043D\u044B\u0439",null], null), null);
return (fexpr__80829.cljs$core$IFn$_invoke$arity$1 ? fexpr__80829.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__80829.call(null,long_form));
})();
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(distinction,"too");
} else {
return and__4251__auto__;
}
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms-header","div.short-forms-header",-722181868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss.serif.default","div.primary-gloss.serif.default",608431775),slovarish.frontend.gloss.smart_quotes(distinction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),slovarish.frontend.gloss.smart_quotes(distinction)], null)], null)], null)], null):null)], null),(cljs.core.truth_(no_long_form_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__80830 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80830__$1 = (((G__80830 instanceof cljs.core.Keyword))?G__80830.fqn:null);
switch (G__80830__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80830__$1)].join('')));

}
})()], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = participle_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return adjective_QMARK_;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.participle-type.italic.sans.note","div.participle-type.italic.sans.note",1489554159),(function (){var G__80831 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80831__$1 = (((G__80831 instanceof cljs.core.Keyword))?G__80831.fqn:null);
switch (G__80831__$1) {
case "english":
return [(cljs.core.truth_(class$)?"when used either as adjective or as ":"no short form when used as the "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(participle_QMARK_)," of"].join('');

break;
case "russian":
return [(cljs.core.truth_(class$)?"\u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A \u0438 \u043F\u0440\u0438\u043B. \u0438 ":"\u043D\u0435\u0442 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A "),slovarish.frontend.adjectives.adjective_view.rus_participle(participle_QMARK_)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80831__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (no_long_form_QMARK_,map__80828,map__80828__$1,sf,m,f,class$,distinction,participle_QMARK_,from_verb__$1,s__80820__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(from_verb__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
});})(no_long_form_QMARK_,map__80828,map__80828__$1,sf,m,f,class$,distinction,participle_QMARK_,from_verb__$1,s__80820__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb))
], null),from_verb__$1], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row","div.short-forms.flex.row",1781936900),(cljs.core.truth_(class$)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.breakdown_short_forms,sf], null):(cljs.core.truth_(participle_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-form.italic.sans","div.no-form.italic.sans",1451468352),(function (){var G__80832 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80832__$1 = (((G__80832 instanceof cljs.core.Keyword))?G__80832.fqn:null);
switch (G__80832__$1) {
case "english":
return "(has short form only when used as a participle)";

break;
case "russian":
return "(\u0435\u0441\u0442\u044C \u043A\u0440\u0430\u0442\u043A\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u043A\u0430\u043A \u043F\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u0435)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80832__$1)].join('')));

}
})()], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = m;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80819(cljs.core.rest(s__80820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(short_forms);
})()):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row.no-form.italic.sans","div.short-forms.flex.row.no-form.italic.sans",1724482178),(function (){var G__80833 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80833__$1 = (((G__80833 instanceof cljs.core.Keyword))?G__80833.fqn:null);
switch (G__80833__$1) {
case "english":
return "(no short form)";

break;
case "russian":
return "(\u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80833__$1)].join('')));

}
})()], null)),(cljs.core.truth_(verb)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),(function (){var G__80834 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80834__$1 = (((G__80834 instanceof cljs.core.Keyword))?G__80834.fqn:null);
switch (G__80834__$1) {
case "english":
return "derived from";

break;
case "russian":
return "\u043E\u0442 \u0433\u043B\u0430\u0433\u043E\u043B\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80834__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(verb),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
})], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([verb], 0))], null)], null):null),(cljs.core.truth_(from_noun)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),(function (){var G__80835 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80835__$1 = (((G__80835 instanceof cljs.core.Keyword))?G__80835.fqn:null);
switch (G__80835__$1) {
case "english":
return "derived from";

break;
case "russian":
return "\u043E\u0442 \u0441\u0443\u0449.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80835__$1)].join('')));

}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80836(s__80837){
return (new cljs.core.LazySeq(null,(function (){
var s__80837__$1 = s__80837;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__80837__$1);
if(temp__5753__auto__){
var s__80837__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80837__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__80837__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__80839 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__80838 = (0);
while(true){
if((i__80838 < size__4651__auto__)){
var noun = cljs.core._nth(c__4650__auto__,i__80838);
cljs.core.chunk_append(b__80839,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80838,noun,c__4650__auto__,size__4651__auto__,b__80839,s__80837__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(noun),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"noun","noun",185846460)], 0));
});})(i__80838,noun,c__4650__auto__,size__4651__auto__,b__80839,s__80837__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([noun], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),noun], null)));

var G__80897 = (i__80838 + (1));
i__80838 = G__80897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80839),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80836(cljs.core.chunk_rest(s__80837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80839),null);
}
} else {
var noun = cljs.core.first(s__80837__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (noun,s__80837__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(noun),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"noun","noun",185846460)], 0));
});})(noun,s__80837__$2,temp__5753__auto__,vec__80811,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__80810,map__80810__$1,self,adjective_QMARK_,from_verb,from_noun,long_form,short_forms,comparatives,superlatives,adverb))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([noun], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),noun], null)),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__80836(cljs.core.rest(s__80837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(from_noun);
})())], null):null),(cljs.core.truth_((function (){var or__4253__auto__ = adverb;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = comparatives;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return superlatives;
}
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.sans","div.column-header.sans",938022652),(function (){var G__80840 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__80840__$1 = (((G__80840 instanceof cljs.core.Keyword))?G__80840.fqn:null);
switch (G__80840__$1) {
case "english":
return "other forms";

break;
case "russian":
return "\u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80840__$1)].join('')));

}
})()], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-forms","div.more-forms",762173312),(cljs.core.truth_(adverb)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-ly"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",adverb], null)], null):null),(cljs.core.truth_(comparatives)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-er"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",comparatives], null)], null):null),(cljs.core.truth_(superlatives)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-est"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",superlatives], null)], null):null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.adjectives.adjective_view.js.map
