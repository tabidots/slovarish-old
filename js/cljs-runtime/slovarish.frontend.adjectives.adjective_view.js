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
var G__1026834 = gender;
switch (G__1026834) {
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
if(cljs.core.truth_((function (){var fexpr__1026835 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"soft","soft",144891873),null,new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),null], null), null);
return (fexpr__1026835.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026835.cljs$core$IFn$_invoke$arity$1(special_stem) : fexpr__1026835.call(null,special_stem));
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
if(cljs.core.truth_((function (){var fexpr__1026841 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"soft","soft",144891873),null,new cljs.core.Keyword(null,"sibilant","sibilant",1873258377),null], null), null);
return (fexpr__1026841.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026841.cljs$core$IFn$_invoke$arity$1(special_stem) : fexpr__1026841.call(null,special_stem));
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
var vec__1026854 = cljs.core.re_find(/((?:[^\u0301]\u0301?)+)([^\u0301]\u0301?й)$/,long_form);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026854,(0),null);
var stem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026854,(1),null);
var m_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026854,(2),null);
var possessive_QMARK_ = (function (){var fexpr__1026866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u0442\u0440\u0435\u0301\u0442\u0438\u0439",null,"\u0447\u0435\u0439",null], null), null);
return (fexpr__1026866.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026866.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__1026866.call(null,long_form));
})();
var end_stress_QMARK_ = cljs.core.re_find(/\u0301(?=\S$)/,long_form);
var special_stem = slovarish.frontend.adjectives.adjective_view.special_stem_type(long_form);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867(s__1026868){
return (new cljs.core.LazySeq(null,(function (){
var s__1026868__$1 = s__1026868;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026868__$1);
if(temp__5753__auto__){
var s__1026868__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026868__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026868__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026870 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026869 = (0);
while(true){
if((i__1026869 < size__4651__auto__)){
var vec__1026871 = cljs.core._nth(c__4650__auto__,i__1026869);
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026871,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026871,(1),null);
var vec__1026874 = slovarish.frontend.adjectives.adjective_view.endings(gender,possessive_QMARK_,end_stress_QMARK_,special_stem);
var seq__1026875 = cljs.core.seq(vec__1026874);
var first__1026876 = cljs.core.first(seq__1026875);
var seq__1026875__$1 = cljs.core.next(seq__1026875);
var strong_QMARK_ = first__1026876;
var first__1026876__$1 = cljs.core.first(seq__1026875__$1);
var seq__1026875__$2 = cljs.core.next(seq__1026875__$1);
var nom = first__1026876__$1;
var other_cases = seq__1026875__$2;
var vec__1026877 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026846_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026846_SHARP_,(1));
});})(i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = nom;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026877,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026877,(1),null);
cljs.core.chunk_append(b__1026870,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-row","div.top-row",1084331990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.emoji","div.emoji",-1281840773),emoji], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form","span.word-form",354931654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_], 0))], null),b], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_,b], 0))),reflexive_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.oblique-drawer","div.oblique-drawer",-1776120464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026889(s__1026890){
return (new cljs.core.LazySeq(null,((function (i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (){
var s__1026890__$1 = s__1026890;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__1026890__$1);
if(temp__5753__auto____$1){
var s__1026890__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__1026890__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__1026890__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__1026892 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__1026891 = (0);
while(true){
if((i__1026891 < size__4651__auto____$1)){
var form = cljs.core._nth(c__4650__auto____$1,i__1026891);
var vec__1026895 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__1026891,i__1026869,form,c__4650__auto____$1,size__4651__auto____$1,b__1026892,s__1026890__$2,temp__5753__auto____$1,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026847_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026847_SHARP_,(1));
});})(i__1026891,i__1026869,form,c__4650__auto____$1,size__4651__auto____$1,b__1026892,s__1026890__$2,temp__5753__auto____$1,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026895,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026895,(1),null);
cljs.core.chunk_append(b__1026892,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)));

var G__1027116 = (i__1026891 + (1));
i__1026891 = G__1027116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026892),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026889(cljs.core.chunk_rest(s__1026890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026892),null);
}
} else {
var form = cljs.core.first(s__1026890__$2);
var vec__1026902 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__1026869,form,s__1026890__$2,temp__5753__auto____$1,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026847_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026847_SHARP_,(1));
});})(i__1026869,form,s__1026890__$2,temp__5753__auto____$1,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026902,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026902,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026889(cljs.core.rest(s__1026890__$2)));
}
} else {
return null;
}
break;
}
});})(i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
,null,null));
});})(i__1026869,vec__1026874,seq__1026875,first__1026876,seq__1026875__$1,strong_QMARK_,first__1026876__$1,seq__1026875__$2,nom,other_cases,vec__1026877,a,b,vec__1026871,emoji,gender,c__4650__auto__,size__4651__auto__,b__1026870,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
;
return iter__4652__auto__(cljs.core.cons(nom,other_cases));
})())], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)));

var G__1027124 = (i__1026869 + (1));
i__1026869 = G__1027124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026870),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867(cljs.core.chunk_rest(s__1026868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026870),null);
}
} else {
var vec__1026911 = cljs.core.first(s__1026868__$2);
var emoji = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026911,(0),null);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026911,(1),null);
var vec__1026917 = slovarish.frontend.adjectives.adjective_view.endings(gender,possessive_QMARK_,end_stress_QMARK_,special_stem);
var seq__1026918 = cljs.core.seq(vec__1026917);
var first__1026919 = cljs.core.first(seq__1026918);
var seq__1026918__$1 = cljs.core.next(seq__1026918);
var strong_QMARK_ = first__1026919;
var first__1026919__$1 = cljs.core.first(seq__1026918__$1);
var seq__1026918__$2 = cljs.core.next(seq__1026918__$1);
var nom = first__1026919__$1;
var other_cases = seq__1026918__$2;
var vec__1026920 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026846_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026846_SHARP_,(1));
});})(vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = nom;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026920,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026920,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-row","div.top-row",1084331990),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.emoji","div.emoji",-1281840773),emoji], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form","span.word-form",354931654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_], 0))], null),b], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,end_stress_QMARK_,b], 0))),reflexive_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.oblique-drawer","div.oblique-drawer",-1776120464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = ((function (vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026923(s__1026924){
return (new cljs.core.LazySeq(null,(function (){
var s__1026924__$1 = s__1026924;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__1026924__$1);
if(temp__5753__auto____$1){
var s__1026924__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__1026924__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026924__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026926 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026925 = (0);
while(true){
if((i__1026925 < size__4651__auto__)){
var form = cljs.core._nth(c__4650__auto__,i__1026925);
var vec__1026932 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (i__1026925,form,c__4650__auto__,size__4651__auto__,b__1026926,s__1026924__$2,temp__5753__auto____$1,vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026847_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026847_SHARP_,(1));
});})(i__1026925,form,c__4650__auto__,size__4651__auto__,b__1026926,s__1026924__$2,temp__5753__auto____$1,vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026932,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026932,(1),null);
cljs.core.chunk_append(b__1026926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)));

var G__1027137 = (i__1026925 + (1));
i__1026925 = G__1027137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026926),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026923(cljs.core.chunk_rest(s__1026924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026926),null);
}
} else {
var form = cljs.core.first(s__1026924__$2);
var vec__1026936 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,((function (form,s__1026924__$2,temp__5753__auto____$1,vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem){
return (function (p1__1026847_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__1026847_SHARP_,(1));
});})(form,s__1026924__$2,temp__5753__auto____$1,vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
)((function (){var or__4253__auto__ = form;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return slovarish.frontend.display_inflections.destress(m_end);
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026936,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026936,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.oblique.light","div.word-form.oblique.light",1488688393),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stem], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),(cljs.core.truth_(strong_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_], 0))], null),b__$1], null):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,end_stress_QMARK_,b__$1], 0)))], null),reflexive_QMARK_], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gender),cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('')], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867_$_iter__1026923(cljs.core.rest(s__1026924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__1026917,seq__1026918,first__1026919,seq__1026918__$1,strong_QMARK_,first__1026919__$1,seq__1026918__$2,nom,other_cases,vec__1026920,a,b,vec__1026911,emoji,gender,s__1026868__$2,temp__5753__auto__,vec__1026854,_,stem,m_end,possessive_QMARK_,end_stress_QMARK_,special_stem))
;
return iter__4652__auto__(cljs.core.cons(nom,other_cases));
})())], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)),slovarish$frontend$adjectives$adjective_view$show_long_forms_$_iter__1026867(cljs.core.rest(s__1026868__$2)));
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
var vec__1026948 = cljs.core.re_find(/(.)(.)(?=.{2}$)/,slovarish.frontend.display_inflections.destress(long_form));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026948,(0),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026948,(1),null);
var end_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026948,(2),null);
var vec__1026951 = cljs.core.re_find(/(.*?)(.)(.)$/,slovarish.frontend.display_inflections.destress(m));
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026951,(0),null);
var chars = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026951,(1),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026951,(2),null);
var end_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026951,(3),null);
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
return cljs.core.not_any_QMARK_((function (p1__1026961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.adjectives.adjective_view.stress_index(p1__1026961_SHARP_),slovarish.frontend.adjectives.adjective_view.stress_index(long_form));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__1026960_SHARP_){
return (((p1__1026960_SHARP_ == null)) || (clojure.string.ends_with_QMARK_(p1__1026960_SHARP_,"\u0301")));
}),cljs.core.flatten(cljs.core.vals(cljs.core.select_keys(short_forms,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.Keyword(null,"p","p",151049309)], null))))));
} else {
return null;
}
});
slovarish.frontend.adjectives.adjective_view.breakdown_short_forms = (function slovarish$frontend$adjectives$adjective_view$breakdown_short_forms(long_form,p__1026978){
var map__1026979 = p__1026978;
var map__1026979__$1 = cljs.core.__destructure_map(map__1026979);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026979__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026979__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026979__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026979__$1,new cljs.core.Keyword(null,"p","p",151049309));
var fv_idx = slovarish.frontend.adjectives.adjective_view.buffer_vowel_idx(cljs.core.deref(slovarish.frontend.state.input),((typeof m === 'string')?slovarish.frontend.display_inflections.destress(m):slovarish.frontend.display_inflections.destress(cljs.core.first(m))));
var end_stress_QMARK_ = (function (p1__1026966_SHARP_){
return clojure.string.ends_with_QMARK_(p1__1026966_SHARP_,"\u0301");
});
if(((cljs.core.every_QMARK_(cljs.core.string_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,f,n,p], null))) && ((((!(slovarish.frontend.display_inflections.monosyllable_QMARK_(m)))) && (cljs.core.every_QMARK_((function (p1__1026968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.string.replace(p1__1026968_SHARP_,/.\u0301?$/,""));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null))))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.quad-gradient","div.column.quad-gradient",-1129187423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"quad-gradient single short-form light",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,f)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,n)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,p))].join('')], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((m == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no masculine short form)"], null):((cljs.core.seq_QMARK_(m))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine primary on short-form",(cljs.core.truth_(fv_idx)?"irregular-form":"light")], null),cljs.core.first(m),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine alternate off d-none short-form",(((fv_idx > cljs.core.count(cljs.core.second(m))))?"irregular-form":"light")], null),cljs.core.second(m),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["masculine single short-form",(cljs.core.truth_(fv_idx)?"irregular-form":"light")], null),m,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),fv_idx], null)], null)
)),((((cljs.core.every_QMARK_(cljs.core.string_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null))) && (cljs.core.every_QMARK_((function (p1__1026977_SHARP_){
return clojure.string.includes_QMARK_(p1__1026977_SHARP_,clojure.string.replace(f,/.\u0301?$/,""));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,p], null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.triple-gradient","div.column.triple-gradient",284614719),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["triple-gradient single short-form",((end_stress_QMARK_(f))?"unpredictable-stress":"light")], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,n)),", -",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.re_find(/.\u0301?$/,p))].join('')], null)], null):cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__1026987(s__1026988){
return (new cljs.core.LazySeq(null,(function (){
var s__1026988__$1 = s__1026988;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026988__$1);
if(temp__5753__auto__){
var s__1026988__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026988__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026988__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026990 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026989 = (0);
while(true){
if((i__1026989 < size__4651__auto__)){
var vec__1026997 = cljs.core._nth(c__4650__auto__,i__1026989);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026997,(0),null);
var vec__1027000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026997,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027000,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027000,(1),null);
var forms = vec__1027000;
cljs.core.chunk_append(b__1026990,(((forms == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no ",gender," short form)"], null):((cljs.core.coll_QMARK_(forms))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"primary on short-form",((end_stress_QMARK_(a))?"unpredictable-stress":"light")], null),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"alternate off d-none short-form",((end_stress_QMARK_(b))?"unpredictable-stress":"light")], null),b], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"single short-form",((end_stress_QMARK_(forms))?"unpredictable-stress":"light")], null),forms], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null))
)));

var G__1027145 = (i__1026989 + (1));
i__1026989 = G__1027145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026990),slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__1026987(cljs.core.chunk_rest(s__1026988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026990),null);
}
} else {
var vec__1027003 = cljs.core.first(s__1026988__$2);
var gender = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027003,(0),null);
var vec__1027006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027003,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027006,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027006,(1),null);
var forms = vec__1027006;
return cljs.core.cons((((forms == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.short-form.no-form.italic.sans","div.column.short-form.no-form.italic.sans",1699143458),"(no ",gender," short form)"], null):((cljs.core.coll_QMARK_(forms))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"primary on short-form",((end_stress_QMARK_(a))?"unpredictable-stress":"light")], null),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"alternate off d-none short-form",((end_stress_QMARK_(b))?"unpredictable-stress":"light")], null),b], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gender,"single short-form",((end_stress_QMARK_(forms))?"unpredictable-stress":"light")], null),forms], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),gender], null))
)),slovarish$frontend$adjectives$adjective_view$breakdown_short_forms_$_iter__1026987(cljs.core.rest(s__1026988__$2)));
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
slovarish.frontend.adjectives.adjective_view.adj_table = (function slovarish$frontend$adjectives$adjective_view$adj_table(p__1027015){
var map__1027016 = p__1027015;
var map__1027016__$1 = cljs.core.__destructure_map(map__1027016);
var self = map__1027016__$1;
var from_noun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"from-noun","from-noun",1131235132));
var comparatives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"comparatives","comparatives",-1500838595));
var gloss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"gloss","gloss",-1230611425));
var adjective_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"adjective?","adjective?",-496987264));
var participle_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"participle?","participle?",-1231367896));
var adverb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"adverb","adverb",353843337));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var abstract_noun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"abstract-noun","abstract-noun",-1782194866));
var short_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"short-forms","short-forms",644568209));
var long_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"long-form","long-form",-1756929166));
var from_verb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var superlatives = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027016__$1,new cljs.core.Keyword(null,"superlatives","superlatives",-434443465));
var vec__1027022 = (cljs.core.truth_(long_form)?cljs.core.re_find(/(.+?)(с[яь])?$/,long_form):null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027022,(0),null);
var without_reflexive = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027022,(1),null);
var reflexive_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027022,(2),null);
var mark_sf_stress_QMARK_ = slovarish.frontend.adjectives.adjective_view.short_form_has_diff_stem_stress_QMARK_(long_form,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),short_forms)));
var alternates_QMARK_ = cljs.core.some(cljs.core.coll_QMARK_,cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,short_forms)));
var verb = (function (){var or__4253__auto__ = from_verb;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__1027025 = short_forms;
var G__1027025__$1 = (((G__1027025 == null))?null:cljs.core.first(G__1027025));
if((G__1027025__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370).cljs$core$IFn$_invoke$arity$1(G__1027025__$1);
}
}
})();
if(cljs.core.truth_(self)){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#adj-table","div#adj-table",-1544959807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.sans","div.column-header.sans",938022652),(function (){var G__1027031 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027031__$1 = (((G__1027031 instanceof cljs.core.Keyword))?G__1027031.fqn:null);
switch (G__1027031__$1) {
case "english":
return "long form";

break;
case "russian":
return "\u043F\u043E\u043B\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027031__$1)].join('')));

}
})()], null),(cljs.core.truth_(long_form)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.long-forms.flex.row","div.long-forms.flex.row",-725303646),(function (){var vec__1027032 = cljs.core.re_find(/(.+?)(с[яь])?$/,long_form);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027032,(0),null);
var without_reflexive__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027032,(1),null);
var reflexive_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027032,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.show_long_forms,without_reflexive__$1,reflexive_QMARK___$1], null);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.long-forms.flex.row.no-form.italic.sans","div.long-forms.flex.row.no-form.italic.sans",1614549404),(function (){var G__1027036 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027036__$1 = (((G__1027036 instanceof cljs.core.Keyword))?G__1027036.fqn:null);
switch (G__1027036__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027036__$1)].join('')));

}
})()], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.column-header.sans","span.column-header.sans",-1768806937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(mark_sf_stress_QMARK_)?"unpredictable-stress":null)], null),(function (){var G__1027040 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027040__$1 = (((G__1027040 instanceof cljs.core.Keyword))?G__1027040.fqn:null);
switch (G__1027040__$1) {
case "english":
return "short forms";

break;
case "russian":
return "\u043A\u0440\u0430\u0442\u043A\u0438\u0435 \u0444\u043E\u0440\u043C\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027040__$1)].join('')));

}
})(),(cljs.core.truth_(mark_sf_stress_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457)," (different stem stress)"], null):null)], null),(cljs.core.truth_(alternates_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.alternate-forms-trigger","span.alternate-forms-trigger",-599628264),"\uD83D\uDD00"], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.Keyword(null,"class","class",-2030961996),short_forms))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027047(s__1027048){
return (new cljs.core.LazySeq(null,(function (){
var s__1027048__$1 = s__1027048;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1027048__$1);
if(temp__5753__auto__){
var s__1027048__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1027048__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1027048__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1027050 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1027049 = (0);
while(true){
if((i__1027049 < size__4651__auto__)){
var map__1027053 = cljs.core._nth(c__4650__auto__,i__1027049);
var map__1027053__$1 = cljs.core.__destructure_map(map__1027053);
var sf = map__1027053__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"p","p",151049309));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
var participle_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"participle?","participle?",-1231367896));
var from_verb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027053__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var no_long_form_QMARK_ = (function (){var and__4251__auto__ = (function (){var fexpr__1027054 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u0443\u0301\u0437\u043A\u0438\u0439",null,"\u0448\u0438\u0440\u043E\u0301\u043A\u0438\u0439",null,"\u0442\u0435\u0301\u0441\u043D\u044B\u0439",null,"\u0434\u043B\u0438\u0301\u043D\u043D\u044B\u0439",null], null), null);
return (fexpr__1027054.cljs$core$IFn$_invoke$arity$1 ? fexpr__1027054.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__1027054.call(null,long_form));
})();
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(distinction,"too");
} else {
return and__4251__auto__;
}
})();
cljs.core.chunk_append(b__1027050,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms-header","div.short-forms-header",-722181868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss.serif.default","div.primary-gloss.serif.default",608431775),slovarish.frontend.gloss.smart_quotes(distinction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),slovarish.frontend.gloss.smart_quotes(distinction)], null)], null)], null)], null):null)], null),(cljs.core.truth_(no_long_form_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__1027057 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027057__$1 = (((G__1027057 instanceof cljs.core.Keyword))?G__1027057.fqn:null);
switch (G__1027057__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027057__$1)].join('')));

}
})()], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = participle_QMARK___$1;
if(cljs.core.truth_(and__4251__auto__)){
return adjective_QMARK_;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.participle-type.italic.sans.note","div.participle-type.italic.sans.note",1489554159),[(cljs.core.truth_(class$)?"also as the ":"no short forms as the "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(participle_QMARK___$1)," of"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__1027049,no_long_form_QMARK_,map__1027053,map__1027053__$1,sf,m,f,n,p,class$,distinction,participle_QMARK___$1,from_verb__$1,c__4650__auto__,size__4651__auto__,b__1027050,s__1027048__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(from_verb__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
});})(i__1027049,no_long_form_QMARK_,map__1027053,map__1027053__$1,sf,m,f,n,p,class$,distinction,participle_QMARK___$1,from_verb__$1,c__4650__auto__,size__4651__auto__,b__1027050,s__1027048__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives))
], null),from_verb__$1], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row","div.short-forms.flex.row",1781936900),(cljs.core.truth_(class$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.breakdown_short_forms,long_form,sf], null):(cljs.core.truth_(participle_QMARK___$1)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-form.italic.sans","div.no-form.italic.sans",1451468352),(function (){var G__1027058 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027058__$1 = (((G__1027058 instanceof cljs.core.Keyword))?G__1027058.fqn:null);
switch (G__1027058__$1) {
case "english":
return "(no non-participial short forms)";

break;
case "russian":
return "(\u043D\u0435\u043F\u0440\u0438\u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043A\u0440\u0430\u0442\u043A\u0438\u0445 \u0444\u043E\u0440\u043C \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027058__$1)].join('')));

}
})()], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = m;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)));

var G__1027173 = (i__1027049 + (1));
i__1027049 = G__1027173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1027050),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027047(cljs.core.chunk_rest(s__1027048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1027050),null);
}
} else {
var map__1027062 = cljs.core.first(s__1027048__$2);
var map__1027062__$1 = cljs.core.__destructure_map(map__1027062);
var sf = map__1027062__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"n","n",562130025));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"p","p",151049309));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
var participle_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"participle?","participle?",-1231367896));
var from_verb__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1027062__$1,new cljs.core.Keyword(null,"from-verb","from-verb",-1429643370));
var no_long_form_QMARK_ = (function (){var and__4251__auto__ = (function (){var fexpr__1027063 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u0443\u0301\u0437\u043A\u0438\u0439",null,"\u0448\u0438\u0440\u043E\u0301\u043A\u0438\u0439",null,"\u0442\u0435\u0301\u0441\u043D\u044B\u0439",null,"\u0434\u043B\u0438\u0301\u043D\u043D\u044B\u0439",null], null), null);
return (fexpr__1027063.cljs$core$IFn$_invoke$arity$1 ? fexpr__1027063.cljs$core$IFn$_invoke$arity$1(long_form) : fexpr__1027063.call(null,long_form));
})();
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(distinction,"too");
} else {
return and__4251__auto__;
}
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms-header","div.short-forms-header",-722181868),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss.serif.default","div.primary-gloss.serif.default",608431775),slovarish.frontend.gloss.smart_quotes(distinction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),slovarish.frontend.gloss.smart_quotes(distinction)], null)], null)], null)], null):null)], null),(cljs.core.truth_(no_long_form_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__1027064 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027064__$1 = (((G__1027064 instanceof cljs.core.Keyword))?G__1027064.fqn:null);
switch (G__1027064__$1) {
case "english":
return "(no long form)";

break;
case "russian":
return "(\u043F\u043E\u043B\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027064__$1)].join('')));

}
})()], null):null),(cljs.core.truth_((function (){var and__4251__auto__ = participle_QMARK___$1;
if(cljs.core.truth_(and__4251__auto__)){
return adjective_QMARK_;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.participle-type.italic.sans.note","div.participle-type.italic.sans.note",1489554159),[(cljs.core.truth_(class$)?"also as the ":"no short forms as the "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(participle_QMARK___$1)," of"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (no_long_form_QMARK_,map__1027062,map__1027062__$1,sf,m,f,n,p,class$,distinction,participle_QMARK___$1,from_verb__$1,s__1027048__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(from_verb__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
});})(no_long_form_QMARK_,map__1027062,map__1027062__$1,sf,m,f,n,p,class$,distinction,participle_QMARK___$1,from_verb__$1,s__1027048__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives))
], null),from_verb__$1], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row","div.short-forms.flex.row",1781936900),(cljs.core.truth_(class$)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.breakdown_short_forms,long_form,sf], null):(cljs.core.truth_(participle_QMARK___$1)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.no-form.italic.sans","div.no-form.italic.sans",1451468352),(function (){var G__1027069 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027069__$1 = (((G__1027069 instanceof cljs.core.Keyword))?G__1027069.fqn:null);
switch (G__1027069__$1) {
case "english":
return "(no non-participial short forms)";

break;
case "russian":
return "(\u043D\u0435\u043F\u0440\u0438\u0447\u0430\u0441\u0442\u043D\u044B\u0445 \u043A\u0440\u0430\u0442\u043A\u0438\u0445 \u0444\u043E\u0440\u043C \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027069__$1)].join('')));

}
})()], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = m;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return f;
}
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027047(cljs.core.rest(s__1027048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(short_forms);
})()):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.short-forms.flex.row.no-form.italic.sans","div.short-forms.flex.row.no-form.italic.sans",1724482178),(function (){var G__1027073 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027073__$1 = (((G__1027073 instanceof cljs.core.Keyword))?G__1027073.fqn:null);
switch (G__1027073__$1) {
case "english":
return "(no short forms)";

break;
case "russian":
return "(\u043A\u0440\u0430\u0442\u043A\u0438\u0445 \u0444\u043E\u0440\u043C \u043D\u0435\u0442)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027073__$1)].join('')));

}
})()], null)),(cljs.core.truth_(verb)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),(function (){var G__1027077 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027077__$1 = (((G__1027077 instanceof cljs.core.Keyword))?G__1027077.fqn:null);
switch (G__1027077__$1) {
case "english":
return "derived from";

break;
case "russian":
return "\u043E\u0442 \u0433\u043B\u0430\u0433\u043E\u043B\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027077__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(verb),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"verb","verb",-1492655803)], 0));
})], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([verb], 0))], null)], null):null),(cljs.core.truth_(from_noun)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),(function (){var G__1027079 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027079__$1 = (((G__1027079 instanceof cljs.core.Keyword))?G__1027079.fqn:null);
switch (G__1027079__$1) {
case "english":
return "derived from";

break;
case "russian":
return "\u043E\u0442 \u0441\u0443\u0449.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027079__$1)].join('')));

}
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027082(s__1027083){
return (new cljs.core.LazySeq(null,(function (){
var s__1027083__$1 = s__1027083;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1027083__$1);
if(temp__5753__auto__){
var s__1027083__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1027083__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1027083__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1027085 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1027084 = (0);
while(true){
if((i__1027084 < size__4651__auto__)){
var noun = cljs.core._nth(c__4650__auto__,i__1027084);
cljs.core.chunk_append(b__1027085,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__1027084,noun,c__4650__auto__,size__4651__auto__,b__1027085,s__1027083__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(noun),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"noun","noun",185846460)], 0));
});})(i__1027084,noun,c__4650__auto__,size__4651__auto__,b__1027085,s__1027083__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([noun], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),noun], null)));

var G__1027191 = (i__1027084 + (1));
i__1027084 = G__1027191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1027085),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027082(cljs.core.chunk_rest(s__1027083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1027085),null);
}
} else {
var noun = cljs.core.first(s__1027083__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (noun,s__1027083__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(noun),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"noun","noun",185846460)], 0));
});})(noun,s__1027083__$2,temp__5753__auto__,vec__1027022,_,without_reflexive,reflexive_QMARK_,mark_sf_stress_QMARK_,alternates_QMARK_,verb,map__1027016,map__1027016__$1,self,from_noun,comparatives,gloss,adjective_QMARK_,participle_QMARK_,adverb,rank,abstract_noun,short_forms,long_form,from_verb,superlatives))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([noun], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),noun], null)),slovarish$frontend$adjectives$adjective_view$adj_table_$_iter__1027082(cljs.core.rest(s__1027083__$2)));
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
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.sans","div.column-header.sans",938022652),(function (){var G__1027092 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1027092__$1 = (((G__1027092 instanceof cljs.core.Keyword))?G__1027092.fqn:null);
switch (G__1027092__$1) {
case "english":
return "other forms";

break;
case "russian":
return "\u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1027092__$1)].join('')));

}
})()], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.more-forms","div.more-forms",762173312),(cljs.core.truth_(adverb)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-ly"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",adverb], null)], null):null),(cljs.core.truth_(comparatives)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-er"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",comparatives], null)], null):null),(cljs.core.truth_(superlatives)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.row","div.flex.row",-1491836189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.italic.sans.row-header","div.italic.sans.row-header",-146921788),"-est"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"default",superlatives], null)], null):null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.adjectives.adjective_view.js.map
