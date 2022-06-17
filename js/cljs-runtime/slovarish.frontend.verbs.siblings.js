goog.provide('slovarish.frontend.verbs.siblings');
slovarish.frontend.verbs.siblings.prefixes = ["^(\u0432\u0441|\u0432\u043E\u0437|\u0432\u043E\u0441|\u0432\u044B|","(?:\u0432\u0437|\u0438\u0437|\u043D\u0430\u0434|\u043E\u0442|\u043E\u0431?|\u043F\u043E\u0434|\u043F\u0440\u0435\u0434|\u0440\u0430\u0437|\u043E?\u0441)(?![\u0435\u044F])[\u043E\u044B\u044A]?|","\u0432(?![\u0435\u044F])[\u043E\u044B\u044A]?|\u0437\u0430|\u043D\u0430|\u043D\u0435\u0434\u043E|\u0434\u043E|\u043E\u0431\u0435\u0437|\u043E\u0431\u0435\u0441|\u043F\u0435\u0440\u0435|\u043E?\u043F\u043E|\u043F\u0440\u0435|\u043F\u0440\u0438(\u043E\u0442|\u043E)?|","\u043F\u0440\u043E(\u0438\u0437\u043E?)?|\u0440\u0430\u0441\u0441?|\u0441\u043E\u043E\u0442|\u0443)?"].join('');
slovarish.frontend.verbs.siblings.get_prefix = (function slovarish$frontend$verbs$siblings$get_prefix(verb){
return cljs.core.not_empty(cljs.core.first(cljs.core.re_find(cljs.core.re_pattern(slovarish.frontend.verbs.siblings.prefixes),verb)));
});
slovarish.frontend.verbs.siblings.unprefix = (function slovarish$frontend$verbs$siblings$unprefix(verb){
var temp__5751__auto__ = slovarish.frontend.verbs.siblings.get_prefix(verb);
if(cljs.core.truth_(temp__5751__auto__)){
var prefix = temp__5751__auto__;
var G__1025890 = verb;
var G__1025890__$1 = clojure.string.replace_first(G__1025890,prefix,"")
;
var G__1025890__$2 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prefix,"\u0432\u044B")) && (clojure.string.ends_with_QMARK_(prefix,"\u044B"))))?(function (){var v = G__1025890__$1;
return ["\u0438",v].join('');
})():G__1025890__$1);
if(cljs.core.truth_(cljs.core.re_find(/йти(сь)?$/,verb))){
return clojure.string.replace_first(G__1025890__$2,/й/,"\u0438\u0434");
} else {
return G__1025890__$2;
}
} else {
return verb;
}
});
slovarish.frontend.verbs.siblings.s_roots = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0441\u043F\u0430\u0442\u044C","\u0441\u043A\u0430\u0437\u0430\u0442\u044C","\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C","\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C","\u0441\u043B\u0443\u0448\u0430\u0442\u044C","\u0441\u0442\u0430\u0432\u0438\u0442\u044C","\u0447\u0438\u0442\u0430\u0442\u044C","\u043F\u0440\u043E\u0441\u0438\u0442\u044C","\u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C","\u043D\u043E\u0441\u0438\u0442\u044C","\u043D\u0435\u0441\u0442\u0438","\u0441\u043B\u044B\u0445\u0430\u0442\u044C"], null);
slovarish.frontend.verbs.siblings.get_root = (function slovarish$frontend$verbs$siblings$get_root(verb){
var pool = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([verb]),cljs.core.keys(cljs.core.deref(slovarish.frontend.data.all_verbs)));
var prefix = slovarish.frontend.verbs.siblings.get_prefix(verb);
var other_prefix_QMARK_ = (function (possible_root,excluded_prefixes){
var patt = cljs.core.re_pattern([slovarish.frontend.verbs.siblings.prefixes,clojure.string.replace(possible_root,/с[ья]$/,"(\u0441[\u044C\u044F])?$")].join(''));
return cljs.core.some((function (p1__1025891_SHARP_){
var and__4251__auto__ = cljs.core.re_find(patt,p1__1025891_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((function (){var G__1025906 = slovarish.frontend.verbs.siblings.get_prefix(p1__1025891_SHARP_);
var fexpr__1025905 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(excluded_prefixes,prefix);
return (fexpr__1025905.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025905.cljs$core$IFn$_invoke$arity$1(G__1025906) : fexpr__1025905.call(null,G__1025906));
})());
} else {
return and__4251__auto__;
}
}),pool);
});
var s_root = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__1025892_SHARP_){
return clojure.string.includes_QMARK_(verb,p1__1025892_SHARP_);
}),slovarish.frontend.verbs.siblings.s_roots));
return clojure.string.replace(clojure.string.replace([clojure.string.replace((cljs.core.truth_(cljs.core.re_find(/^.ть(ся)?/,verb))?verb:((clojure.string.includes_QMARK_(verb,"\u0441\u0447\u0438\u0442\u0430\u0442\u044C"))?"\u0441\u0447\u0438\u0442\u0430\u0442\u044C":(cljs.core.truth_(s_root)?s_root:(cljs.core.truth_(cljs.core.re_find(/^(вв|сс)/,verb))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(1)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__1025928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\u043E\u0431\u043E",null], null), null);
return (fexpr__1025928.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025928.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__1025928.call(null,prefix));
})();
if(cljs.core.truth_(and__4251__auto__)){
return other_prefix_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(3)),cljs.core.PersistentHashSet.EMPTY);
} else {
return and__4251__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(3)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__1025930 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043D\u0430\u0434",null,"\u043F\u043E\u0434",null], null), null);
return (fexpr__1025930.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025930.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__1025930.call(null,prefix));
})();
if(cljs.core.truth_(and__4251__auto__)){
return other_prefix_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(2)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043D\u0430\u0434",null,"\u043F\u043E\u0434",null], null), null));
} else {
return and__4251__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(2)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__1025931 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0441",null,"\u0432\u0441",null,"\u043E",null], null), null);
return (fexpr__1025931.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025931.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__1025931.call(null,prefix));
})();
if(cljs.core.truth_(and__4251__auto__)){
return other_prefix_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(1)),cljs.core.PersistentHashSet.EMPTY);
} else {
return and__4251__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(1)):(cljs.core.truth_(other_prefix_QMARK_(slovarish.frontend.verbs.siblings.unprefix(verb),cljs.core.PersistentHashSet.EMPTY))?slovarish.frontend.verbs.siblings.unprefix(verb):verb
)))))))),/с[ья]$/,""),"(\u0441[\u044C\u044F])?$"].join(''),/^идти/,"(\u0438\u0434|\u0439)\u0442\u0438"),/^и(?!дти)/,"[\u0438\u044B]");
});
slovarish.frontend.verbs.siblings.get_siblings = (function slovarish$frontend$verbs$siblings$get_siblings(verb){
var match = cljs.core.re_pattern([slovarish.frontend.verbs.siblings.prefixes,slovarish.frontend.verbs.siblings.get_root(verb)].join(''));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"rank","rank",-1706728502),cljs.core._LT_,(function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$siblings$get_siblings_$_iter__1025934(s__1025935){
return (new cljs.core.LazySeq(null,(function (){
var s__1025935__$1 = s__1025935;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025935__$1);
if(temp__5753__auto__){
var s__1025935__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025935__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025935__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025937 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025936 = (0);
while(true){
if((i__1025936 < size__4651__auto__)){
var verb_2 = cljs.core._nth(c__4650__auto__,i__1025936);
var vec__1025940 = cljs.core.re_find(match,verb_2);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025940,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025940,(1),null);
if((!((sibling == null)))){
cljs.core.chunk_append(b__1025937,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var fexpr__1025944 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1025944.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025944.cljs$core$IFn$_invoke$arity$1(sibling) : fexpr__1025944.call(null,sibling));
})()));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (15000);
}
})()], null));

var G__1025978 = (i__1025936 + (1));
i__1025936 = G__1025978;
continue;
} else {
var G__1025979 = (i__1025936 + (1));
i__1025936 = G__1025979;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025937),slovarish$frontend$verbs$siblings$get_siblings_$_iter__1025934(cljs.core.chunk_rest(s__1025935__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025937),null);
}
} else {
var verb_2 = cljs.core.first(s__1025935__$2);
var vec__1025949 = cljs.core.re_find(match,verb_2);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025949,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025949,(1),null);
if((!((sibling == null)))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var fexpr__1025953 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1025953.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025953.cljs$core$IFn$_invoke$arity$1(sibling) : fexpr__1025953.call(null,sibling));
})()));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (15000);
}
})()], null),slovarish$frontend$verbs$siblings$get_siblings_$_iter__1025934(cljs.core.rest(s__1025935__$2)));
} else {
var G__1025980 = cljs.core.rest(s__1025935__$2);
s__1025935__$1 = G__1025980;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys(cljs.core.deref(slovarish.frontend.data.all_verbs)));
})());
});

//# sourceMappingURL=slovarish.frontend.verbs.siblings.js.map
