goog.provide('slovarish.frontend.router');
slovarish.frontend.router.route = (function slovarish$frontend$router$route(){
var hash = window.location.hash;
var vec__52155 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(2)),/\//);
var target_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52155,(0),null);
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52155,(1),null);
var sense = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52155,(2),null);
var word = window.decodeURI(raw);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/^[ЁёА-я]+$/,word);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(word,cljs.core.deref(slovarish.frontend.state.input))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((sense - (1)),cljs.core.deref(slovarish.frontend.state.which_result_QMARK_))));
} else {
return and__4251__auto__;
}
})())){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,(function (){var fexpr__52158 = new cljs.core.PersistentArrayMap(null, 3, ["n",new cljs.core.Keyword(null,"noun","noun",185846460),"v",new cljs.core.Keyword(null,"verb","verb",-1492655803),"a",new cljs.core.Keyword(null,"adjective","adjective",441465450)], null);
return (fexpr__52158.cljs$core$IFn$_invoke$arity$1 ? fexpr__52158.cljs$core$IFn$_invoke$arity$1(target_pos) : fexpr__52158.call(null,target_pos));
})());

cljs.core.reset_BANG_(cljs.core.deref(slovarish.frontend.state.input),word);

if(cljs.core.truth_(sense)){
return cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(sense - (1)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.router.js.map
