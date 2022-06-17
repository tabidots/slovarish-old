goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34007){
var map__34008 = p__34007;
var map__34008__$1 = cljs.core.__destructure_map(map__34008);
var m = map__34008__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34015_34348 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34016_34349 = null;
var count__34017_34350 = (0);
var i__34018_34351 = (0);
while(true){
if((i__34018_34351 < count__34017_34350)){
var f_34353 = chunk__34016_34349.cljs$core$IIndexed$_nth$arity$2(null,i__34018_34351);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34353], 0));


var G__34354 = seq__34015_34348;
var G__34355 = chunk__34016_34349;
var G__34356 = count__34017_34350;
var G__34357 = (i__34018_34351 + (1));
seq__34015_34348 = G__34354;
chunk__34016_34349 = G__34355;
count__34017_34350 = G__34356;
i__34018_34351 = G__34357;
continue;
} else {
var temp__5753__auto___34358 = cljs.core.seq(seq__34015_34348);
if(temp__5753__auto___34358){
var seq__34015_34359__$1 = temp__5753__auto___34358;
if(cljs.core.chunked_seq_QMARK_(seq__34015_34359__$1)){
var c__4679__auto___34360 = cljs.core.chunk_first(seq__34015_34359__$1);
var G__34361 = cljs.core.chunk_rest(seq__34015_34359__$1);
var G__34362 = c__4679__auto___34360;
var G__34363 = cljs.core.count(c__4679__auto___34360);
var G__34364 = (0);
seq__34015_34348 = G__34361;
chunk__34016_34349 = G__34362;
count__34017_34350 = G__34363;
i__34018_34351 = G__34364;
continue;
} else {
var f_34365 = cljs.core.first(seq__34015_34359__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34365], 0));


var G__34366 = cljs.core.next(seq__34015_34359__$1);
var G__34367 = null;
var G__34368 = (0);
var G__34369 = (0);
seq__34015_34348 = G__34366;
chunk__34016_34349 = G__34367;
count__34017_34350 = G__34368;
i__34018_34351 = G__34369;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34370 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34370], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34370)))?cljs.core.second(arglists_34370):arglists_34370)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34045_34374 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34046_34375 = null;
var count__34047_34376 = (0);
var i__34048_34377 = (0);
while(true){
if((i__34048_34377 < count__34047_34376)){
var vec__34071_34378 = chunk__34046_34375.cljs$core$IIndexed$_nth$arity$2(null,i__34048_34377);
var name_34379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34071_34378,(0),null);
var map__34074_34380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34071_34378,(1),null);
var map__34074_34381__$1 = cljs.core.__destructure_map(map__34074_34380);
var doc_34382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34074_34381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34074_34381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34379], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34383], 0));

if(cljs.core.truth_(doc_34382)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34382], 0));
} else {
}


var G__34390 = seq__34045_34374;
var G__34391 = chunk__34046_34375;
var G__34392 = count__34047_34376;
var G__34393 = (i__34048_34377 + (1));
seq__34045_34374 = G__34390;
chunk__34046_34375 = G__34391;
count__34047_34376 = G__34392;
i__34048_34377 = G__34393;
continue;
} else {
var temp__5753__auto___34394 = cljs.core.seq(seq__34045_34374);
if(temp__5753__auto___34394){
var seq__34045_34395__$1 = temp__5753__auto___34394;
if(cljs.core.chunked_seq_QMARK_(seq__34045_34395__$1)){
var c__4679__auto___34396 = cljs.core.chunk_first(seq__34045_34395__$1);
var G__34397 = cljs.core.chunk_rest(seq__34045_34395__$1);
var G__34398 = c__4679__auto___34396;
var G__34399 = cljs.core.count(c__4679__auto___34396);
var G__34400 = (0);
seq__34045_34374 = G__34397;
chunk__34046_34375 = G__34398;
count__34047_34376 = G__34399;
i__34048_34377 = G__34400;
continue;
} else {
var vec__34080_34405 = cljs.core.first(seq__34045_34395__$1);
var name_34406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080_34405,(0),null);
var map__34083_34407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34080_34405,(1),null);
var map__34083_34408__$1 = cljs.core.__destructure_map(map__34083_34407);
var doc_34409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34083_34408__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34083_34408__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34406], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34410], 0));

if(cljs.core.truth_(doc_34409)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34409], 0));
} else {
}


var G__34417 = cljs.core.next(seq__34045_34395__$1);
var G__34418 = null;
var G__34419 = (0);
var G__34420 = (0);
seq__34045_34374 = G__34417;
chunk__34046_34375 = G__34418;
count__34047_34376 = G__34419;
i__34048_34377 = G__34420;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34091 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34092 = null;
var count__34093 = (0);
var i__34094 = (0);
while(true){
if((i__34094 < count__34093)){
var role = chunk__34092.cljs$core$IIndexed$_nth$arity$2(null,i__34094);
var temp__5753__auto___34423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34423__$1)){
var spec_34424 = temp__5753__auto___34423__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34424)], 0));
} else {
}


var G__34425 = seq__34091;
var G__34426 = chunk__34092;
var G__34427 = count__34093;
var G__34428 = (i__34094 + (1));
seq__34091 = G__34425;
chunk__34092 = G__34426;
count__34093 = G__34427;
i__34094 = G__34428;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34091);
if(temp__5753__auto____$1){
var seq__34091__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34091__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34091__$1);
var G__34429 = cljs.core.chunk_rest(seq__34091__$1);
var G__34430 = c__4679__auto__;
var G__34431 = cljs.core.count(c__4679__auto__);
var G__34432 = (0);
seq__34091 = G__34429;
chunk__34092 = G__34430;
count__34093 = G__34431;
i__34094 = G__34432;
continue;
} else {
var role = cljs.core.first(seq__34091__$1);
var temp__5753__auto___34433__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34433__$2)){
var spec_34434 = temp__5753__auto___34433__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34434)], 0));
} else {
}


var G__34435 = cljs.core.next(seq__34091__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__34091 = G__34435;
chunk__34092 = G__34436;
count__34093 = G__34437;
i__34094 = G__34438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34441 = cljs.core.ex_cause(t);
via = G__34440;
t = G__34441;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34227 = datafied_throwable;
var map__34227__$1 = cljs.core.__destructure_map(map__34227);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34227__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34227__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34227__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34228 = cljs.core.last(via);
var map__34228__$1 = cljs.core.__destructure_map(map__34228);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34228__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34228__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34229 = data;
var map__34229__$1 = cljs.core.__destructure_map(map__34229);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34230 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34230__$1 = cljs.core.__destructure_map(map__34230);
var top_data = map__34230__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34253 = phase;
var G__34253__$1 = (((G__34253 instanceof cljs.core.Keyword))?G__34253.fqn:null);
switch (G__34253__$1) {
case "read-source":
var map__34256 = data;
var map__34256__$1 = cljs.core.__destructure_map(map__34256);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34259__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34259,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34259);
var G__34259__$2 = (cljs.core.truth_((function (){var fexpr__34262 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34262.cljs$core$IFn$_invoke$arity$1 ? fexpr__34262.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34262.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34259__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34259__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34259__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34263 = top_data;
var G__34263__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34263,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34263);
var G__34263__$2 = (cljs.core.truth_((function (){var fexpr__34265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34265.cljs$core$IFn$_invoke$arity$1 ? fexpr__34265.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34265.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34263__$1);
var G__34263__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34263__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34263__$2);
var G__34263__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34263__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34263__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34263__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34263__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34266 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34266,(3),null);
var G__34269 = top_data;
var G__34269__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34269,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34269);
var G__34269__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34269__$1);
var G__34269__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34269__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34269__$2);
var G__34269__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34269__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34269__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34269__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34269__$4;
}

break;
case "execution":
var vec__34272 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34205_SHARP_){
var or__4253__auto__ = (p1__34205_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34276.cljs$core$IFn$_invoke$arity$1 ? fexpr__34276.cljs$core$IFn$_invoke$arity$1(p1__34205_SHARP_) : fexpr__34276.call(null,p1__34205_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34277__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34277,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34277);
var G__34277__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34277__$1);
var G__34277__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34277__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34277__$2);
var G__34277__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34277__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34277__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34277__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34277__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34253__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34281){
var map__34282 = p__34281;
var map__34282__$1 = cljs.core.__destructure_map(map__34282);
var triage_data = map__34282__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34283 = phase;
var G__34283__$1 = (((G__34283 instanceof cljs.core.Keyword))?G__34283.fqn:null);
switch (G__34283__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34288 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34289 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34290 = loc;
var G__34291 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34292_34469 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34293_34470 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34294_34471 = true;
var _STAR_print_fn_STAR__temp_val__34295_34472 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34294_34471);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34295_34472);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34279_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34279_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34293_34470);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34292_34469);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34288,G__34289,G__34290,G__34291) : format.call(null,G__34288,G__34289,G__34290,G__34291));

break;
case "macroexpansion":
var G__34307 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34308 = cause_type;
var G__34309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34310 = loc;
var G__34311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34307,G__34308,G__34309,G__34310,G__34311) : format.call(null,G__34307,G__34308,G__34309,G__34310,G__34311));

break;
case "compile-syntax-check":
var G__34315 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34316 = cause_type;
var G__34317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34318 = loc;
var G__34319 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34315,G__34316,G__34317,G__34318,G__34319) : format.call(null,G__34315,G__34316,G__34317,G__34318,G__34319));

break;
case "compilation":
var G__34320 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34321 = cause_type;
var G__34322 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34323 = loc;
var G__34324 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34320,G__34321,G__34322,G__34323,G__34324) : format.call(null,G__34320,G__34321,G__34322,G__34323,G__34324));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34325 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34326 = symbol;
var G__34327 = loc;
var G__34328 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34329_34473 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34330_34474 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34331_34475 = true;
var _STAR_print_fn_STAR__temp_val__34332_34476 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34331_34475);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34332_34476);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34280_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34280_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34330_34474);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34329_34473);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34325,G__34326,G__34327,G__34328) : format.call(null,G__34325,G__34326,G__34327,G__34328));
} else {
var G__34336 = "Execution error%s at %s(%s).\n%s\n";
var G__34337 = cause_type;
var G__34338 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34339 = loc;
var G__34340 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34336,G__34337,G__34338,G__34339,G__34340) : format.call(null,G__34336,G__34337,G__34338,G__34339,G__34340));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34283__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
