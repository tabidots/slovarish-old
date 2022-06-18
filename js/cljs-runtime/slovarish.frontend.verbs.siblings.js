goog.provide('slovarish.frontend.verbs.siblings');
slovarish.frontend.verbs.siblings.prefixes = ["^(\u0432\u0441|\u0432\u043E\u0437|\u0432\u043E\u0441|\u0432\u044B|","(?:\u0432\u0437|\u0438\u0437|\u043D\u0430\u0434|\u043E\u0442|\u043E\u0431?|\u043F\u043E\u0434|\u043F\u0440\u0435\u0434|\u0440\u0430\u0437|\u043E?\u0441)(?![\u0435\u044F])[\u043E\u044B\u044A]?|","\u0432(?![\u0435\u044F])[\u043E\u044B\u044A]?|\u0437\u0430|\u043D\u0430|\u043D\u0435\u0434\u043E|\u0434\u043E|\u043E\u0431\u0435\u0437|\u043E\u0431\u0435\u0441|\u043F\u0435\u0440\u0435|\u043E?\u043F\u043E|\u043F\u0440\u0435|\u043F\u0440\u0438(\u043E\u0442|\u043E)?|","\u043F\u0440\u043E(\u0438\u0437\u043E?)?|\u0440\u0430\u0441\u0441?|\u0441\u043E\u043E\u0442|\u0443)?"].join('');
slovarish.frontend.verbs.siblings.get_prefix = (function slovarish$frontend$verbs$siblings$get_prefix(verb){
return cljs.core.not_empty(cljs.core.first(cljs.core.re_find(cljs.core.re_pattern(slovarish.frontend.verbs.siblings.prefixes),verb)));
});
slovarish.frontend.verbs.siblings.unprefix = (function slovarish$frontend$verbs$siblings$unprefix(verb){
var temp__5751__auto__ = slovarish.frontend.verbs.siblings.get_prefix(verb);
if(cljs.core.truth_(temp__5751__auto__)){
var prefix = temp__5751__auto__;
var G__61256 = verb;
var G__61256__$1 = clojure.string.replace_first(G__61256,prefix,"")
;
var G__61256__$2 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prefix,"\u0432\u044B")) && (clojure.string.ends_with_QMARK_(prefix,"\u044B"))))?(function (){var v = G__61256__$1;
return ["\u0438",v].join('');
})():G__61256__$1);
if(cljs.core.truth_(cljs.core.re_find(/йти(сь)?$/,verb))){
return clojure.string.replace_first(G__61256__$2,/й/,"\u0438\u0434");
} else {
return G__61256__$2;
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
return cljs.core.some((function (p1__61259_SHARP_){
var and__4251__auto__ = cljs.core.re_find(patt,p1__61259_SHARP_);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((function (){var G__61264 = slovarish.frontend.verbs.siblings.get_prefix(p1__61259_SHARP_);
var fexpr__61263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(excluded_prefixes,prefix);
return (fexpr__61263.cljs$core$IFn$_invoke$arity$1 ? fexpr__61263.cljs$core$IFn$_invoke$arity$1(G__61264) : fexpr__61263.call(null,G__61264));
})());
} else {
return and__4251__auto__;
}
}),pool);
});
var s_root = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__61260_SHARP_){
return clojure.string.includes_QMARK_(verb,p1__61260_SHARP_);
}),slovarish.frontend.verbs.siblings.s_roots));
return clojure.string.replace(clojure.string.replace([clojure.string.replace((cljs.core.truth_(cljs.core.re_find(/^.ть(ся)?/,verb))?verb:((clojure.string.includes_QMARK_(verb,"\u0441\u0447\u0438\u0442\u0430\u0442\u044C"))?"\u0441\u0447\u0438\u0442\u0430\u0442\u044C":(cljs.core.truth_(s_root)?s_root:(cljs.core.truth_(cljs.core.re_find(/^(вв|сс)/,verb))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(1)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__61273 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\u043E\u0431\u043E",null], null), null);
return (fexpr__61273.cljs$core$IFn$_invoke$arity$1 ? fexpr__61273.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__61273.call(null,prefix));
})();
if(cljs.core.truth_(and__4251__auto__)){
return other_prefix_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(3)),cljs.core.PersistentHashSet.EMPTY);
} else {
return and__4251__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(3)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__61274 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043D\u0430\u0434",null,"\u043F\u043E\u0434",null], null), null);
return (fexpr__61274.cljs$core$IFn$_invoke$arity$1 ? fexpr__61274.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__61274.call(null,prefix));
})();
if(cljs.core.truth_(and__4251__auto__)){
return other_prefix_QMARK_(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(2)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043D\u0430\u0434",null,"\u043F\u043E\u0434",null], null), null));
} else {
return and__4251__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(verb,(2)):(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var fexpr__61275 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0441",null,"\u0432\u0441",null,"\u043E",null], null), null);
return (fexpr__61275.cljs$core$IFn$_invoke$arity$1 ? fexpr__61275.cljs$core$IFn$_invoke$arity$1(prefix) : fexpr__61275.call(null,prefix));
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"rank","rank",-1706728502),cljs.core._LT_,(function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$siblings$get_siblings_$_iter__61277(s__61278){
return (new cljs.core.LazySeq(null,(function (){
var s__61278__$1 = s__61278;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__61278__$1);
if(temp__5753__auto__){
var s__61278__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61278__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__61278__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__61280 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__61279 = (0);
while(true){
if((i__61279 < size__4651__auto__)){
var verb_2 = cljs.core._nth(c__4650__auto__,i__61279);
var vec__61284 = cljs.core.re_find(match,verb_2);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61284,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61284,(1),null);
if((!((sibling == null)))){
cljs.core.chunk_append(b__61280,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var fexpr__61288 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__61288.cljs$core$IFn$_invoke$arity$1 ? fexpr__61288.cljs$core$IFn$_invoke$arity$1(sibling) : fexpr__61288.call(null,sibling));
})()));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (15000);
}
})()], null));

var G__61297 = (i__61279 + (1));
i__61279 = G__61297;
continue;
} else {
var G__61298 = (i__61279 + (1));
i__61279 = G__61298;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61280),slovarish$frontend$verbs$siblings$get_siblings_$_iter__61277(cljs.core.chunk_rest(s__61278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61280),null);
}
} else {
var verb_2 = cljs.core.first(s__61278__$2);
var vec__61289 = cljs.core.re_find(match,verb_2);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61289,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61289,(1),null);
if((!((sibling == null)))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sibling","sibling",-1183865000),sibling,new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"rank","rank",-1706728502),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(cljs.core.first((function (){var fexpr__61292 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__61292.cljs$core$IFn$_invoke$arity$1 ? fexpr__61292.cljs$core$IFn$_invoke$arity$1(sibling) : fexpr__61292.call(null,sibling));
})()));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (15000);
}
})()], null),slovarish$frontend$verbs$siblings$get_siblings_$_iter__61277(cljs.core.rest(s__61278__$2)));
} else {
var G__61299 = cljs.core.rest(s__61278__$2);
s__61278__$1 = G__61299;
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
