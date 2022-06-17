goog.provide('slovarish.frontend.utils');
/**
 * Returns a map of all regex matches in s in the form {index match}, or an
 *   empty map if no matches.
 */
slovarish.frontend.utils.re_pos = (function slovarish$frontend$utils$re_pos(re,s){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(re,(new RegExp("")))){
var re__$1 = (new RegExp(re.source,"g"));
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var temp__5751__auto__ = re__$1.exec(s);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var G__1025886 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,m.index,cljs.core.first(m));
res = G__1025886;
continue;
} else {
return res;
}
break;
}
} else {
return null;
}
});
slovarish.frontend.utils.ordered_matches = (function slovarish$frontend$utils$ordered_matches(s1,s2){
var enumerate = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
});
var floor = (function (x){
return Math.floor(x);
});
var window_span = (floor(((function (){var x__4336__auto__ = cljs.core.count(s1);
var y__4337__auto__ = cljs.core.count(s2);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() / (2))) - (1));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4652__auto__ = (function slovarish$frontend$utils$ordered_matches_$_iter__1025783(s__1025784){
return (new cljs.core.LazySeq(null,(function (){
var s__1025784__$1 = s__1025784;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025784__$1);
if(temp__5753__auto__){
var s__1025784__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025784__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025784__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025786 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025785 = (0);
while(true){
if((i__1025785 < size__4651__auto__)){
var vec__1025794 = cljs.core._nth(c__4650__auto__,i__1025785);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025794,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025794,(1),null);
cljs.core.chunk_append(b__1025786,cljs.core.first((function (){var iter__4652__auto__ = ((function (i__1025785,vec__1025794,i,top,c__4650__auto__,size__4651__auto__,b__1025786,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025811(s__1025812){
return (new cljs.core.LazySeq(null,((function (i__1025785,vec__1025794,i,top,c__4650__auto__,size__4651__auto__,b__1025786,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function (){
var s__1025812__$1 = s__1025812;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__1025812__$1);
if(temp__5753__auto____$1){
var s__1025812__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__1025812__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__1025812__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__1025814 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__1025813 = (0);
while(true){
if((i__1025813 < size__4651__auto____$1)){
var vec__1025828 = cljs.core._nth(c__4650__auto____$1,i__1025813);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025828,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025828,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
cljs.core.chunk_append(b__1025814,top);

var G__1025895 = (i__1025813 + (1));
i__1025813 = G__1025895;
continue;
} else {
var G__1025897 = (i__1025813 + (1));
i__1025813 = G__1025897;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025814),slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025811(cljs.core.chunk_rest(s__1025812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025814),null);
}
} else {
var vec__1025839 = cljs.core.first(s__1025812__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025839,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025839,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
return cljs.core.cons(top,slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025811(cljs.core.rest(s__1025812__$2)));
} else {
var G__1025902 = cljs.core.rest(s__1025812__$2);
s__1025812__$1 = G__1025902;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__1025785,vec__1025794,i,top,c__4650__auto__,size__4651__auto__,b__1025786,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span))
,null,null));
});})(i__1025785,vec__1025794,i,top,c__4650__auto__,size__4651__auto__,b__1025786,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span))
;
return iter__4652__auto__(enumerate(s2));
})()));

var G__1025903 = (i__1025785 + (1));
i__1025785 = G__1025903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025786),slovarish$frontend$utils$ordered_matches_$_iter__1025783(cljs.core.chunk_rest(s__1025784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025786),null);
}
} else {
var vec__1025850 = cljs.core.first(s__1025784__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025850,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025850,(1),null);
return cljs.core.cons(cljs.core.first((function (){var iter__4652__auto__ = ((function (vec__1025850,i,top,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025856(s__1025857){
return (new cljs.core.LazySeq(null,(function (){
var s__1025857__$1 = s__1025857;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__1025857__$1);
if(temp__5753__auto____$1){
var s__1025857__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__1025857__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025857__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025859 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025858 = (0);
while(true){
if((i__1025858 < size__4651__auto__)){
var vec__1025867 = cljs.core._nth(c__4650__auto__,i__1025858);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025867,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025867,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
cljs.core.chunk_append(b__1025859,top);

var G__1025913 = (i__1025858 + (1));
i__1025858 = G__1025913;
continue;
} else {
var G__1025914 = (i__1025858 + (1));
i__1025858 = G__1025914;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025859),slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025856(cljs.core.chunk_rest(s__1025857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025859),null);
}
} else {
var vec__1025874 = cljs.core.first(s__1025857__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025874,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1025874,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
return cljs.core.cons(top,slovarish$frontend$utils$ordered_matches_$_iter__1025783_$_iter__1025856(cljs.core.rest(s__1025857__$2)));
} else {
var G__1025918 = cljs.core.rest(s__1025857__$2);
s__1025857__$1 = G__1025918;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__1025850,i,top,s__1025784__$2,temp__5753__auto__,enumerate,floor,window_span))
;
return iter__4652__auto__(enumerate(s2));
})()),slovarish$frontend$utils$ordered_matches_$_iter__1025783(cljs.core.rest(s__1025784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(enumerate(s1));
})());
});
/**
 * Returns the Jaro similarity of two strings (1 = exact match).
 */
slovarish.frontend.utils.jaro_similarity = (function slovarish$frontend$utils$jaro_similarity(s1,s2){
var m1 = slovarish.frontend.utils.ordered_matches(s1,s2);
var m2 = slovarish.frontend.utils.ordered_matches(s2,s1);
if(cljs.core.empty_QMARK_(m1)){
return (0);
} else {
var m = cljs.core.count(m1);
var non_matches = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,m1,m2)));
var t = (non_matches / (2));
return ((((m / cljs.core.count(s1)) + (m / cljs.core.count(s2))) + ((m - t) / m)) / (3));
}
});

//# sourceMappingURL=slovarish.frontend.utils.js.map
