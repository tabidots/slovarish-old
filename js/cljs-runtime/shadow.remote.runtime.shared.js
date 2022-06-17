goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31224,res){
var map__31225 = p__31224;
var map__31225__$1 = cljs.core.__destructure_map(map__31225);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31225__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31225__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31227 = res;
var G__31227__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31227,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31227);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31227__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31227__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31239 = arguments.length;
switch (G__31239) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31249,msg,handlers,timeout_after_ms){
var map__31250 = p__31249;
var map__31250__$1 = cljs.core.__destructure_map(map__31250);
var runtime = map__31250__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31250__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___31579 = arguments.length;
var i__4865__auto___31580 = (0);
while(true){
if((i__4865__auto___31580 < len__4864__auto___31579)){
args__4870__auto__.push((arguments[i__4865__auto___31580]));

var G__31581 = (i__4865__auto___31580 + (1));
i__4865__auto___31580 = G__31581;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31272,ev,args){
var map__31273 = p__31272;
var map__31273__$1 = cljs.core.__destructure_map(map__31273);
var runtime = map__31273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31274 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31277 = null;
var count__31278 = (0);
var i__31279 = (0);
while(true){
if((i__31279 < count__31278)){
var ext = chunk__31277.cljs$core$IIndexed$_nth$arity$2(null,i__31279);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31586 = seq__31274;
var G__31587 = chunk__31277;
var G__31588 = count__31278;
var G__31589 = (i__31279 + (1));
seq__31274 = G__31586;
chunk__31277 = G__31587;
count__31278 = G__31588;
i__31279 = G__31589;
continue;
} else {
var G__31590 = seq__31274;
var G__31591 = chunk__31277;
var G__31592 = count__31278;
var G__31593 = (i__31279 + (1));
seq__31274 = G__31590;
chunk__31277 = G__31591;
count__31278 = G__31592;
i__31279 = G__31593;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31274);
if(temp__5753__auto__){
var seq__31274__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31274__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31274__$1);
var G__31597 = cljs.core.chunk_rest(seq__31274__$1);
var G__31598 = c__4679__auto__;
var G__31599 = cljs.core.count(c__4679__auto__);
var G__31600 = (0);
seq__31274 = G__31597;
chunk__31277 = G__31598;
count__31278 = G__31599;
i__31279 = G__31600;
continue;
} else {
var ext = cljs.core.first(seq__31274__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31608 = cljs.core.next(seq__31274__$1);
var G__31609 = null;
var G__31610 = (0);
var G__31611 = (0);
seq__31274 = G__31608;
chunk__31277 = G__31609;
count__31278 = G__31610;
i__31279 = G__31611;
continue;
} else {
var G__31612 = cljs.core.next(seq__31274__$1);
var G__31613 = null;
var G__31614 = (0);
var G__31615 = (0);
seq__31274 = G__31612;
chunk__31277 = G__31613;
count__31278 = G__31614;
i__31279 = G__31615;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31262){
var G__31263 = cljs.core.first(seq31262);
var seq31262__$1 = cljs.core.next(seq31262);
var G__31265 = cljs.core.first(seq31262__$1);
var seq31262__$2 = cljs.core.next(seq31262__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31263,G__31265,seq31262__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31297,p__31298){
var map__31299 = p__31297;
var map__31299__$1 = cljs.core.__destructure_map(map__31299);
var runtime = map__31299__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31299__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31300 = p__31298;
var map__31300__$1 = cljs.core.__destructure_map(map__31300);
var msg = map__31300__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31300__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31313 = cljs.core.deref(state_ref);
var map__31313__$1 = cljs.core.__destructure_map(map__31313);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31313__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31313__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31328){
var map__31330 = p__31328;
var map__31330__$1 = cljs.core.__destructure_map(map__31330);
var runtime = map__31330__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31330__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31338,msg){
var map__31339 = p__31338;
var map__31339__$1 = cljs.core.__destructure_map(map__31339);
var runtime = map__31339__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31339__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31359,key,p__31360){
var map__31362 = p__31359;
var map__31362__$1 = cljs.core.__destructure_map(map__31362);
var state = map__31362__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31362__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31363 = p__31360;
var map__31363__$1 = cljs.core.__destructure_map(map__31363);
var spec = map__31363__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31363__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31374,key,spec){
var map__31375 = p__31374;
var map__31375__$1 = cljs.core.__destructure_map(map__31375);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31375__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31376_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31376_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31377_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31377_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31378_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31378_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31379_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31379_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31380_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31380_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31407,key){
var map__31408 = p__31407;
var map__31408__$1 = cljs.core.__destructure_map(map__31408);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31418,msg){
var map__31419 = p__31418;
var map__31419__$1 = cljs.core.__destructure_map(map__31419);
var runtime = map__31419__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31419__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31441,p__31442){
var map__31444 = p__31441;
var map__31444__$1 = cljs.core.__destructure_map(map__31444);
var runtime = map__31444__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31444__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31445 = p__31442;
var map__31445__$1 = cljs.core.__destructure_map(map__31445);
var msg = map__31445__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31445__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31449 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31451 = null;
var count__31452 = (0);
var i__31453 = (0);
while(true){
if((i__31453 < count__31452)){
var map__31476 = chunk__31451.cljs$core$IIndexed$_nth$arity$2(null,i__31453);
var map__31476__$1 = cljs.core.__destructure_map(map__31476);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31476__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31691 = seq__31449;
var G__31692 = chunk__31451;
var G__31693 = count__31452;
var G__31694 = (i__31453 + (1));
seq__31449 = G__31691;
chunk__31451 = G__31692;
count__31452 = G__31693;
i__31453 = G__31694;
continue;
} else {
var G__31695 = seq__31449;
var G__31696 = chunk__31451;
var G__31697 = count__31452;
var G__31698 = (i__31453 + (1));
seq__31449 = G__31695;
chunk__31451 = G__31696;
count__31452 = G__31697;
i__31453 = G__31698;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__31449);
if(temp__5753__auto__){
var seq__31449__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31449__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31449__$1);
var G__31704 = cljs.core.chunk_rest(seq__31449__$1);
var G__31705 = c__4679__auto__;
var G__31706 = cljs.core.count(c__4679__auto__);
var G__31707 = (0);
seq__31449 = G__31704;
chunk__31451 = G__31705;
count__31452 = G__31706;
i__31453 = G__31707;
continue;
} else {
var map__31486 = cljs.core.first(seq__31449__$1);
var map__31486__$1 = cljs.core.__destructure_map(map__31486);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31486__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31711 = cljs.core.next(seq__31449__$1);
var G__31712 = null;
var G__31713 = (0);
var G__31714 = (0);
seq__31449 = G__31711;
chunk__31451 = G__31712;
count__31452 = G__31713;
i__31453 = G__31714;
continue;
} else {
var G__31716 = cljs.core.next(seq__31449__$1);
var G__31717 = null;
var G__31718 = (0);
var G__31719 = (0);
seq__31449 = G__31716;
chunk__31451 = G__31717;
count__31452 = G__31718;
i__31453 = G__31719;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
