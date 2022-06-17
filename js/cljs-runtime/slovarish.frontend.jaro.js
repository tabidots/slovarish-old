goog.provide('slovarish.frontend.jaro');
slovarish.frontend.jaro.ordered_matches = (function slovarish$frontend$jaro$ordered_matches(s1,s2){
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4652__auto__ = (function slovarish$frontend$jaro$ordered_matches_$_iter__35665(s__35666){
return (new cljs.core.LazySeq(null,(function (){
var s__35666__$1 = s__35666;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35666__$1);
if(temp__5753__auto__){
var s__35666__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35666__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35666__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35668 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35667 = (0);
while(true){
if((i__35667 < size__4651__auto__)){
var vec__35669 = cljs.core._nth(c__4650__auto__,i__35667);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35669,(1),null);
cljs.core.chunk_append(b__35668,cljs.core.first((function (){var iter__4652__auto__ = ((function (i__35667,vec__35669,i,top,c__4650__auto__,size__4651__auto__,b__35668,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35672(s__35673){
return (new cljs.core.LazySeq(null,((function (i__35667,vec__35669,i,top,c__4650__auto__,size__4651__auto__,b__35668,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function (){
var s__35673__$1 = s__35673;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35673__$1);
if(temp__5753__auto____$1){
var s__35673__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35673__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__35673__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__35675 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__35674 = (0);
while(true){
if((i__35674 < size__4651__auto____$1)){
var vec__35676 = cljs.core._nth(c__4650__auto____$1,i__35674);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35676,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35676,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
cljs.core.chunk_append(b__35675,top);

var G__35695 = (i__35674 + (1));
i__35674 = G__35695;
continue;
} else {
var G__35696 = (i__35674 + (1));
i__35674 = G__35696;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35675),slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35672(cljs.core.chunk_rest(s__35673__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35675),null);
}
} else {
var vec__35679 = cljs.core.first(s__35673__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35679,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
return cljs.core.cons(top,slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35672(cljs.core.rest(s__35673__$2)));
} else {
var G__35697 = cljs.core.rest(s__35673__$2);
s__35673__$1 = G__35697;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__35667,vec__35669,i,top,c__4650__auto__,size__4651__auto__,b__35668,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span))
,null,null));
});})(i__35667,vec__35669,i,top,c__4650__auto__,size__4651__auto__,b__35668,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span))
;
return iter__4652__auto__(enumerate(s2));
})()));

var G__35698 = (i__35667 + (1));
i__35667 = G__35698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35668),slovarish$frontend$jaro$ordered_matches_$_iter__35665(cljs.core.chunk_rest(s__35666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35668),null);
}
} else {
var vec__35682 = cljs.core.first(s__35666__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(1),null);
return cljs.core.cons(cljs.core.first((function (){var iter__4652__auto__ = ((function (vec__35682,i,top,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span){
return (function slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35685(s__35686){
return (new cljs.core.LazySeq(null,(function (){
var s__35686__$1 = s__35686;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35686__$1);
if(temp__5753__auto____$1){
var s__35686__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35686__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35686__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35688 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35687 = (0);
while(true){
if((i__35687 < size__4651__auto__)){
var vec__35689 = cljs.core._nth(c__4650__auto__,i__35687);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35689,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
cljs.core.chunk_append(b__35688,top);

var G__35703 = (i__35687 + (1));
i__35687 = G__35703;
continue;
} else {
var G__35704 = (i__35687 + (1));
i__35687 = G__35704;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35688),slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35685(cljs.core.chunk_rest(s__35686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35688),null);
}
} else {
var vec__35692 = cljs.core.first(s__35686__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35692,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35692,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(top,bottom)) && (((((i - window_span) <= j)) && ((j <= ((i + window_span) + (1)))))))){
return cljs.core.cons(top,slovarish$frontend$jaro$ordered_matches_$_iter__35665_$_iter__35685(cljs.core.rest(s__35686__$2)));
} else {
var G__35705 = cljs.core.rest(s__35686__$2);
s__35686__$1 = G__35705;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__35682,i,top,s__35666__$2,temp__5753__auto__,enumerate,floor,window_span))
;
return iter__4652__auto__(enumerate(s2));
})()),slovarish$frontend$jaro$ordered_matches_$_iter__35665(cljs.core.rest(s__35666__$2)));
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
slovarish.frontend.jaro.jaro_distance = (function slovarish$frontend$jaro$jaro_distance(s1,s2){
var m1 = slovarish.frontend.jaro.ordered_matches(s1,s2);
var m2 = slovarish.frontend.jaro.ordered_matches(s2,s1);
if(cljs.core.empty_QMARK_(m1)){
return (0);
} else {
var m = cljs.core.count(m1);
var non_matches = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,m1,m2)));
var t = (non_matches / (2));
return ((((m / cljs.core.count(s1)) + (m / cljs.core.count(s2))) + ((m - t) / m)) / (3));
}
});

//# sourceMappingURL=slovarish.frontend.jaro.js.map
