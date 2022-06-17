goog.provide('slovarish.frontend.gloss');
slovarish.frontend.gloss.smart_quotes = (function slovarish$frontend$gloss$smart_quotes(string){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(string,/'(?=\S)/,"\u2019"),/\"(?=\b)/,"\u201C"),/\"(?=\S)/,"\u201D");
});
/**
 * Removes the Romanization after Cyrillic text in Wiktionary glosses.
 */
slovarish.frontend.gloss.remove_pronunciation_guide = (function slovarish$frontend$gloss$remove_pronunciation_guide(string){
var G__1025774 = string;
if((G__1025774 == null)){
return null;
} else {
return clojure.string.replace(G__1025774,/((?:[ЁёА-я]\u0301?)+)\s\(.+?\)/,"$1");
}
});
slovarish.frontend.gloss.decompose_gloss = (function slovarish$frontend$gloss$decompose_gloss(string){
return cljs.core.re_find(/(\(.+?\))?\s?(.+?)$/,string);
});
slovarish.frontend.gloss.format_gloss = (function slovarish$frontend$gloss$format_gloss(string){
var marked_up = clojure.string.replace(clojure.string.replace(slovarish.frontend.gloss.smart_quotes(string),/((?:[ЁёА-я\u0301])+\s?)/,"\" [:span.gloss-cyr \"$1\"] \""),/(\(.+?\)(?!\)))/,"\" [:span.gloss-note \"$1\"] \"");
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(["[:span \"",marked_up,"\"]"].join(''),/\"\"/,""));
});
slovarish.frontend.gloss.render_glosses = (function slovarish$frontend$gloss$render_glosses(p__1025789,class$){
var map__1025790 = p__1025789;
var map__1025790__$1 = cljs.core.__destructure_map(map__1025790);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025790__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025790__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var gloss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025790__$1,new cljs.core.Keyword(null,"gloss","gloss",-1230611425));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025790__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
if(cljs.core.empty_QMARK_(gloss)){
return null;
} else {
var vec__1025805 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(gloss,/\|/));
var seq__1025806 = cljs.core.seq(vec__1025805);
var first__1025807 = cljs.core.first(seq__1025806);
var seq__1025806__$1 = cljs.core.next(seq__1025806);
var primary = first__1025807;
var secondary = seq__1025806__$1;
var glosses = vec__1025805;
var vec__1025808 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(primary));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025808,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025808,(1),null);
var main = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025808,(2),null);
var more_info_QMARK_ = (function (){var or__4253__auto__ = field;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = distinction;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return secondary;
}
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss","div.primary-gloss",-421855967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(more_info_QMARK_)?"more-info":null),class$], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.gloss.format_gloss(main)], null),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic","span.italic",1189814087),"\u00A0(",distinction,")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),(function (){var iter__4652__auto__ = (function slovarish$frontend$gloss$render_glosses_$_iter__1025823(s__1025824){
return (new cljs.core.LazySeq(null,(function (){
var s__1025824__$1 = s__1025824;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025824__$1);
if(temp__5753__auto__){
var s__1025824__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025824__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025824__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025826 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025825 = (0);
while(true){
if((i__1025825 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__1025825);
var vec__1025835 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(item));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025835,(0),null);
var field__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025835,(1),null);
var main__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025835,(2),null);
cljs.core.chunk_append(b__1025826,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(field__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),field__$1," "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gloss-main","span.gloss-main",50608950),slovarish.frontend.gloss.format_gloss(main__$1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return infinitive;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__1025885 = (i__1025825 + (1));
i__1025825 = G__1025885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025826),slovarish$frontend$gloss$render_glosses_$_iter__1025823(cljs.core.chunk_rest(s__1025824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025826),null);
}
} else {
var item = cljs.core.first(s__1025824__$2);
var vec__1025853 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(item));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025853,(0),null);
var field__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025853,(1),null);
var main__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025853,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(field__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),field__$1," "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gloss-main","span.gloss-main",50608950),slovarish.frontend.gloss.format_gloss(main__$1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return infinitive;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),slovarish$frontend$gloss$render_glosses_$_iter__1025823(cljs.core.rest(s__1025824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(glosses);
})()], null)], null)], null)], null);
}
});

//# sourceMappingURL=slovarish.frontend.gloss.js.map
