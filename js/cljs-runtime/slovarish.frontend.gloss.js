goog.provide('slovarish.frontend.gloss');
slovarish.frontend.gloss.smart_quotes = (function slovarish$frontend$gloss$smart_quotes(string){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(string,/'(?=\S)/,"\u2019"),/\"(?=\s|$)/,"\u201D"),/\"(?=\b|[ЁёА-я])/,"\u201C");
});
/**
 * Removes the Romanization after Cyrillic text in Wiktionary glosses.
 */
slovarish.frontend.gloss.remove_pronunciation_guide = (function slovarish$frontend$gloss$remove_pronunciation_guide(string){
var G__53116 = string;
if((G__53116 == null)){
return null;
} else {
return clojure.string.replace(G__53116,/((?:[ЁёА-я]\u0301?)+)\s\(.+?\)/,"$1");
}
});
slovarish.frontend.gloss.decompose_gloss = (function slovarish$frontend$gloss$decompose_gloss(string){
return cljs.core.re_find(/(\(.+?\))?\s?(.+?)$/,string);
});
slovarish.frontend.gloss.format_gloss = (function slovarish$frontend$gloss$format_gloss(string){
var marked_up = clojure.string.replace(clojure.string.replace(slovarish.frontend.gloss.smart_quotes(string),/((?:[ЁёА-я\u0301])+\s?)/,"\" [:span.gloss-cyr \"$1\"] \""),/(\(.+?\)(?!\)))/,"\" [:span.gloss-note \"$1\"] \"");
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(["[:span \"",marked_up,"\"]"].join(''),/\"\"/,""));
});
slovarish.frontend.gloss.render_glosses = (function slovarish$frontend$gloss$render_glosses(p__53117,class$){
var map__53118 = p__53117;
var map__53118__$1 = cljs.core.__destructure_map(map__53118);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var gloss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"gloss","gloss",-1230611425));
var distinction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53118__$1,new cljs.core.Keyword(null,"distinction","distinction",-94508080));
if(cljs.core.empty_QMARK_(gloss)){
return null;
} else {
var vec__53119 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(clojure.string.split.cljs$core$IFn$_invoke$arity$2(gloss,/\|/));
var seq__53120 = cljs.core.seq(vec__53119);
var first__53121 = cljs.core.first(seq__53120);
var seq__53120__$1 = cljs.core.next(seq__53120);
var primary = first__53121;
var secondary = seq__53120__$1;
var glosses = vec__53119;
var vec__53122 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(primary));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53122,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53122,(1),null);
var main = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53122,(2),null);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-wrapper","div.gloss-wrapper",1369105815),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.primary-gloss","div.primary-gloss",-421855967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(more_info_QMARK_)?"more-info":null),class$], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),slovarish.frontend.gloss.format_gloss(main)], null),(cljs.core.truth_(distinction)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic","span.italic",1189814087),"\u00A0(",distinction,")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gloss-popup","div.gloss-popup",-1055993348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.gloss-list","ul.gloss-list",-1647099822),(function (){var iter__4652__auto__ = (function slovarish$frontend$gloss$render_glosses_$_iter__53125(s__53126){
return (new cljs.core.LazySeq(null,(function (){
var s__53126__$1 = s__53126;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53126__$1);
if(temp__5753__auto__){
var s__53126__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53126__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53126__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53128 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53127 = (0);
while(true){
if((i__53127 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__53127);
var vec__53129 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(item));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(0),null);
var field__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(1),null);
var main__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(2),null);
cljs.core.chunk_append(b__53128,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(field__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),field__$1," "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gloss-main","span.gloss-main",50608950),slovarish.frontend.gloss.format_gloss(main__$1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return infinitive;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__53135 = (i__53127 + (1));
i__53127 = G__53135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53128),slovarish$frontend$gloss$render_glosses_$_iter__53125(cljs.core.chunk_rest(s__53126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53128),null);
}
} else {
var item = cljs.core.first(s__53126__$2);
var vec__53132 = slovarish.frontend.gloss.decompose_gloss(slovarish.frontend.gloss.remove_pronunciation_guide(item));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(0),null);
var field__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(1),null);
var main__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(field__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),field__$1," "], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.gloss-main","span.gloss-main",50608950),slovarish.frontend.gloss.format_gloss(main__$1)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return infinitive;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),slovarish$frontend$gloss$render_glosses_$_iter__53125(cljs.core.rest(s__53126__$2)));
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
