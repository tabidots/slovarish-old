goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36437 = arguments.length;
var i__4865__auto___36438 = (0);
while(true){
if((i__4865__auto___36438 < len__4864__auto___36437)){
args__4870__auto__.push((arguments[i__4865__auto___36438]));

var G__36439 = (i__4865__auto___36438 + (1));
i__4865__auto___36438 = G__36439;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36052){
var G__36053 = cljs.core.first(seq36052);
var seq36052__$1 = cljs.core.next(seq36052);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36053,seq36052__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36062 = cljs.core.seq(sources);
var chunk__36063 = null;
var count__36064 = (0);
var i__36065 = (0);
while(true){
if((i__36065 < count__36064)){
var map__36075 = chunk__36063.cljs$core$IIndexed$_nth$arity$2(null,i__36065);
var map__36075__$1 = cljs.core.__destructure_map(map__36075);
var src = map__36075__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36075__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36076){var e_36440 = e36076;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36440);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36440.message)].join('')));
}

var G__36441 = seq__36062;
var G__36442 = chunk__36063;
var G__36443 = count__36064;
var G__36444 = (i__36065 + (1));
seq__36062 = G__36441;
chunk__36063 = G__36442;
count__36064 = G__36443;
i__36065 = G__36444;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36062);
if(temp__5753__auto__){
var seq__36062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36062__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36062__$1);
var G__36445 = cljs.core.chunk_rest(seq__36062__$1);
var G__36446 = c__4679__auto__;
var G__36447 = cljs.core.count(c__4679__auto__);
var G__36448 = (0);
seq__36062 = G__36445;
chunk__36063 = G__36446;
count__36064 = G__36447;
i__36065 = G__36448;
continue;
} else {
var map__36083 = cljs.core.first(seq__36062__$1);
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var src = map__36083__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36087){var e_36449 = e36087;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36449);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36449.message)].join('')));
}

var G__36450 = cljs.core.next(seq__36062__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__36062 = G__36450;
chunk__36063 = G__36451;
count__36064 = G__36452;
i__36065 = G__36453;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36090 = cljs.core.seq(js_requires);
var chunk__36091 = null;
var count__36092 = (0);
var i__36093 = (0);
while(true){
if((i__36093 < count__36092)){
var js_ns = chunk__36091.cljs$core$IIndexed$_nth$arity$2(null,i__36093);
var require_str_36454 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36454);


var G__36455 = seq__36090;
var G__36456 = chunk__36091;
var G__36457 = count__36092;
var G__36458 = (i__36093 + (1));
seq__36090 = G__36455;
chunk__36091 = G__36456;
count__36092 = G__36457;
i__36093 = G__36458;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36090);
if(temp__5753__auto__){
var seq__36090__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36090__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36090__$1);
var G__36459 = cljs.core.chunk_rest(seq__36090__$1);
var G__36460 = c__4679__auto__;
var G__36461 = cljs.core.count(c__4679__auto__);
var G__36462 = (0);
seq__36090 = G__36459;
chunk__36091 = G__36460;
count__36092 = G__36461;
i__36093 = G__36462;
continue;
} else {
var js_ns = cljs.core.first(seq__36090__$1);
var require_str_36463 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36463);


var G__36464 = cljs.core.next(seq__36090__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__36090 = G__36464;
chunk__36091 = G__36465;
count__36092 = G__36466;
i__36093 = G__36467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36100){
var map__36101 = p__36100;
var map__36101__$1 = cljs.core.__destructure_map(map__36101);
var msg = map__36101__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36102(s__36103){
return (new cljs.core.LazySeq(null,(function (){
var s__36103__$1 = s__36103;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36103__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36115 = cljs.core.first(xs__6308__auto__);
var map__36115__$1 = cljs.core.__destructure_map(map__36115);
var src = map__36115__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36103__$1,map__36115,map__36115__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36101,map__36101__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36102_$_iter__36104(s__36105){
return (new cljs.core.LazySeq(null,((function (s__36103__$1,map__36115,map__36115__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36101,map__36101__$1,msg,info,reload_info){
return (function (){
var s__36105__$1 = s__36105;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36105__$1);
if(temp__5753__auto____$1){
var s__36105__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36105__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36105__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36107 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36106 = (0);
while(true){
if((i__36106 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36106);
cljs.core.chunk_append(b__36107,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36474 = (i__36106 + (1));
i__36106 = G__36474;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36107),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36102_$_iter__36104(cljs.core.chunk_rest(s__36105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36107),null);
}
} else {
var warning = cljs.core.first(s__36105__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36102_$_iter__36104(cljs.core.rest(s__36105__$2)));
}
} else {
return null;
}
break;
}
});})(s__36103__$1,map__36115,map__36115__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36101,map__36101__$1,msg,info,reload_info))
,null,null));
});})(s__36103__$1,map__36115,map__36115__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36101,map__36101__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36102(cljs.core.rest(s__36103__$1)));
} else {
var G__36475 = cljs.core.rest(s__36103__$1);
s__36103__$1 = G__36475;
continue;
}
} else {
var G__36476 = cljs.core.rest(s__36103__$1);
s__36103__$1 = G__36476;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36129_36477 = cljs.core.seq(warnings);
var chunk__36130_36478 = null;
var count__36131_36479 = (0);
var i__36132_36480 = (0);
while(true){
if((i__36132_36480 < count__36131_36479)){
var map__36150_36481 = chunk__36130_36478.cljs$core$IIndexed$_nth$arity$2(null,i__36132_36480);
var map__36150_36482__$1 = cljs.core.__destructure_map(map__36150_36481);
var w_36483 = map__36150_36482__$1;
var msg_36484__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36482__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36482__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36482__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36482__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36487)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36485),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36486),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36484__$1)].join(''));


var G__36491 = seq__36129_36477;
var G__36492 = chunk__36130_36478;
var G__36493 = count__36131_36479;
var G__36494 = (i__36132_36480 + (1));
seq__36129_36477 = G__36491;
chunk__36130_36478 = G__36492;
count__36131_36479 = G__36493;
i__36132_36480 = G__36494;
continue;
} else {
var temp__5753__auto___36495 = cljs.core.seq(seq__36129_36477);
if(temp__5753__auto___36495){
var seq__36129_36496__$1 = temp__5753__auto___36495;
if(cljs.core.chunked_seq_QMARK_(seq__36129_36496__$1)){
var c__4679__auto___36497 = cljs.core.chunk_first(seq__36129_36496__$1);
var G__36498 = cljs.core.chunk_rest(seq__36129_36496__$1);
var G__36499 = c__4679__auto___36497;
var G__36500 = cljs.core.count(c__4679__auto___36497);
var G__36501 = (0);
seq__36129_36477 = G__36498;
chunk__36130_36478 = G__36499;
count__36131_36479 = G__36500;
i__36132_36480 = G__36501;
continue;
} else {
var map__36154_36502 = cljs.core.first(seq__36129_36496__$1);
var map__36154_36503__$1 = cljs.core.__destructure_map(map__36154_36502);
var w_36504 = map__36154_36503__$1;
var msg_36505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36503__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36154_36503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36508)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36506),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36507),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36505__$1)].join(''));


var G__36509 = cljs.core.next(seq__36129_36496__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__36129_36477 = G__36509;
chunk__36130_36478 = G__36510;
count__36131_36479 = G__36511;
i__36132_36480 = G__36512;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36097_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36097_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36160){
var map__36161 = p__36160;
var map__36161__$1 = cljs.core.__destructure_map(map__36161);
var msg = map__36161__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36161__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36162 = cljs.core.seq(updates);
var chunk__36164 = null;
var count__36165 = (0);
var i__36166 = (0);
while(true){
if((i__36166 < count__36165)){
var path = chunk__36164.cljs$core$IIndexed$_nth$arity$2(null,i__36166);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36253_36514 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36257_36515 = null;
var count__36258_36516 = (0);
var i__36259_36517 = (0);
while(true){
if((i__36259_36517 < count__36258_36516)){
var node_36518 = chunk__36257_36515.cljs$core$IIndexed$_nth$arity$2(null,i__36259_36517);
if(cljs.core.not(node_36518.shadow$old)){
var path_match_36519 = shadow.cljs.devtools.client.browser.match_paths(node_36518.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36519)){
var new_link_36520 = (function (){var G__36270 = node_36518.cloneNode(true);
G__36270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36519),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36270;
})();
(node_36518.shadow$old = true);

(new_link_36520.onload = ((function (seq__36253_36514,chunk__36257_36515,count__36258_36516,i__36259_36517,seq__36162,chunk__36164,count__36165,i__36166,new_link_36520,path_match_36519,node_36518,path,map__36161,map__36161__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36518);
});})(seq__36253_36514,chunk__36257_36515,count__36258_36516,i__36259_36517,seq__36162,chunk__36164,count__36165,i__36166,new_link_36520,path_match_36519,node_36518,path,map__36161,map__36161__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36519], 0));

goog.dom.insertSiblingAfter(new_link_36520,node_36518);


var G__36523 = seq__36253_36514;
var G__36524 = chunk__36257_36515;
var G__36525 = count__36258_36516;
var G__36526 = (i__36259_36517 + (1));
seq__36253_36514 = G__36523;
chunk__36257_36515 = G__36524;
count__36258_36516 = G__36525;
i__36259_36517 = G__36526;
continue;
} else {
var G__36527 = seq__36253_36514;
var G__36528 = chunk__36257_36515;
var G__36529 = count__36258_36516;
var G__36530 = (i__36259_36517 + (1));
seq__36253_36514 = G__36527;
chunk__36257_36515 = G__36528;
count__36258_36516 = G__36529;
i__36259_36517 = G__36530;
continue;
}
} else {
var G__36531 = seq__36253_36514;
var G__36532 = chunk__36257_36515;
var G__36533 = count__36258_36516;
var G__36534 = (i__36259_36517 + (1));
seq__36253_36514 = G__36531;
chunk__36257_36515 = G__36532;
count__36258_36516 = G__36533;
i__36259_36517 = G__36534;
continue;
}
} else {
var temp__5753__auto___36535 = cljs.core.seq(seq__36253_36514);
if(temp__5753__auto___36535){
var seq__36253_36536__$1 = temp__5753__auto___36535;
if(cljs.core.chunked_seq_QMARK_(seq__36253_36536__$1)){
var c__4679__auto___36537 = cljs.core.chunk_first(seq__36253_36536__$1);
var G__36538 = cljs.core.chunk_rest(seq__36253_36536__$1);
var G__36539 = c__4679__auto___36537;
var G__36540 = cljs.core.count(c__4679__auto___36537);
var G__36541 = (0);
seq__36253_36514 = G__36538;
chunk__36257_36515 = G__36539;
count__36258_36516 = G__36540;
i__36259_36517 = G__36541;
continue;
} else {
var node_36542 = cljs.core.first(seq__36253_36536__$1);
if(cljs.core.not(node_36542.shadow$old)){
var path_match_36543 = shadow.cljs.devtools.client.browser.match_paths(node_36542.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36543)){
var new_link_36544 = (function (){var G__36275 = node_36542.cloneNode(true);
G__36275.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36543),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36275;
})();
(node_36542.shadow$old = true);

(new_link_36544.onload = ((function (seq__36253_36514,chunk__36257_36515,count__36258_36516,i__36259_36517,seq__36162,chunk__36164,count__36165,i__36166,new_link_36544,path_match_36543,node_36542,seq__36253_36536__$1,temp__5753__auto___36535,path,map__36161,map__36161__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36542);
});})(seq__36253_36514,chunk__36257_36515,count__36258_36516,i__36259_36517,seq__36162,chunk__36164,count__36165,i__36166,new_link_36544,path_match_36543,node_36542,seq__36253_36536__$1,temp__5753__auto___36535,path,map__36161,map__36161__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36543], 0));

goog.dom.insertSiblingAfter(new_link_36544,node_36542);


var G__36545 = cljs.core.next(seq__36253_36536__$1);
var G__36546 = null;
var G__36547 = (0);
var G__36548 = (0);
seq__36253_36514 = G__36545;
chunk__36257_36515 = G__36546;
count__36258_36516 = G__36547;
i__36259_36517 = G__36548;
continue;
} else {
var G__36549 = cljs.core.next(seq__36253_36536__$1);
var G__36550 = null;
var G__36551 = (0);
var G__36552 = (0);
seq__36253_36514 = G__36549;
chunk__36257_36515 = G__36550;
count__36258_36516 = G__36551;
i__36259_36517 = G__36552;
continue;
}
} else {
var G__36554 = cljs.core.next(seq__36253_36536__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__36253_36514 = G__36554;
chunk__36257_36515 = G__36555;
count__36258_36516 = G__36556;
i__36259_36517 = G__36557;
continue;
}
}
} else {
}
}
break;
}


var G__36558 = seq__36162;
var G__36559 = chunk__36164;
var G__36560 = count__36165;
var G__36561 = (i__36166 + (1));
seq__36162 = G__36558;
chunk__36164 = G__36559;
count__36165 = G__36560;
i__36166 = G__36561;
continue;
} else {
var G__36562 = seq__36162;
var G__36563 = chunk__36164;
var G__36564 = count__36165;
var G__36565 = (i__36166 + (1));
seq__36162 = G__36562;
chunk__36164 = G__36563;
count__36165 = G__36564;
i__36166 = G__36565;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36162);
if(temp__5753__auto__){
var seq__36162__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36162__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36162__$1);
var G__36566 = cljs.core.chunk_rest(seq__36162__$1);
var G__36567 = c__4679__auto__;
var G__36568 = cljs.core.count(c__4679__auto__);
var G__36569 = (0);
seq__36162 = G__36566;
chunk__36164 = G__36567;
count__36165 = G__36568;
i__36166 = G__36569;
continue;
} else {
var path = cljs.core.first(seq__36162__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36277_36570 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36281_36571 = null;
var count__36282_36572 = (0);
var i__36283_36573 = (0);
while(true){
if((i__36283_36573 < count__36282_36572)){
var node_36574 = chunk__36281_36571.cljs$core$IIndexed$_nth$arity$2(null,i__36283_36573);
if(cljs.core.not(node_36574.shadow$old)){
var path_match_36575 = shadow.cljs.devtools.client.browser.match_paths(node_36574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36575)){
var new_link_36576 = (function (){var G__36374 = node_36574.cloneNode(true);
G__36374.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36374;
})();
(node_36574.shadow$old = true);

(new_link_36576.onload = ((function (seq__36277_36570,chunk__36281_36571,count__36282_36572,i__36283_36573,seq__36162,chunk__36164,count__36165,i__36166,new_link_36576,path_match_36575,node_36574,path,seq__36162__$1,temp__5753__auto__,map__36161,map__36161__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36574);
});})(seq__36277_36570,chunk__36281_36571,count__36282_36572,i__36283_36573,seq__36162,chunk__36164,count__36165,i__36166,new_link_36576,path_match_36575,node_36574,path,seq__36162__$1,temp__5753__auto__,map__36161,map__36161__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36575], 0));

goog.dom.insertSiblingAfter(new_link_36576,node_36574);


var G__36577 = seq__36277_36570;
var G__36578 = chunk__36281_36571;
var G__36579 = count__36282_36572;
var G__36580 = (i__36283_36573 + (1));
seq__36277_36570 = G__36577;
chunk__36281_36571 = G__36578;
count__36282_36572 = G__36579;
i__36283_36573 = G__36580;
continue;
} else {
var G__36581 = seq__36277_36570;
var G__36582 = chunk__36281_36571;
var G__36583 = count__36282_36572;
var G__36584 = (i__36283_36573 + (1));
seq__36277_36570 = G__36581;
chunk__36281_36571 = G__36582;
count__36282_36572 = G__36583;
i__36283_36573 = G__36584;
continue;
}
} else {
var G__36585 = seq__36277_36570;
var G__36586 = chunk__36281_36571;
var G__36587 = count__36282_36572;
var G__36588 = (i__36283_36573 + (1));
seq__36277_36570 = G__36585;
chunk__36281_36571 = G__36586;
count__36282_36572 = G__36587;
i__36283_36573 = G__36588;
continue;
}
} else {
var temp__5753__auto___36589__$1 = cljs.core.seq(seq__36277_36570);
if(temp__5753__auto___36589__$1){
var seq__36277_36590__$1 = temp__5753__auto___36589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36277_36590__$1)){
var c__4679__auto___36591 = cljs.core.chunk_first(seq__36277_36590__$1);
var G__36592 = cljs.core.chunk_rest(seq__36277_36590__$1);
var G__36593 = c__4679__auto___36591;
var G__36594 = cljs.core.count(c__4679__auto___36591);
var G__36595 = (0);
seq__36277_36570 = G__36592;
chunk__36281_36571 = G__36593;
count__36282_36572 = G__36594;
i__36283_36573 = G__36595;
continue;
} else {
var node_36596 = cljs.core.first(seq__36277_36590__$1);
if(cljs.core.not(node_36596.shadow$old)){
var path_match_36601 = shadow.cljs.devtools.client.browser.match_paths(node_36596.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36601)){
var new_link_36602 = (function (){var G__36395 = node_36596.cloneNode(true);
G__36395.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36601),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36395;
})();
(node_36596.shadow$old = true);

(new_link_36602.onload = ((function (seq__36277_36570,chunk__36281_36571,count__36282_36572,i__36283_36573,seq__36162,chunk__36164,count__36165,i__36166,new_link_36602,path_match_36601,node_36596,seq__36277_36590__$1,temp__5753__auto___36589__$1,path,seq__36162__$1,temp__5753__auto__,map__36161,map__36161__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36596);
});})(seq__36277_36570,chunk__36281_36571,count__36282_36572,i__36283_36573,seq__36162,chunk__36164,count__36165,i__36166,new_link_36602,path_match_36601,node_36596,seq__36277_36590__$1,temp__5753__auto___36589__$1,path,seq__36162__$1,temp__5753__auto__,map__36161,map__36161__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36601], 0));

goog.dom.insertSiblingAfter(new_link_36602,node_36596);


var G__36603 = cljs.core.next(seq__36277_36590__$1);
var G__36604 = null;
var G__36605 = (0);
var G__36606 = (0);
seq__36277_36570 = G__36603;
chunk__36281_36571 = G__36604;
count__36282_36572 = G__36605;
i__36283_36573 = G__36606;
continue;
} else {
var G__36607 = cljs.core.next(seq__36277_36590__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36277_36570 = G__36607;
chunk__36281_36571 = G__36608;
count__36282_36572 = G__36609;
i__36283_36573 = G__36610;
continue;
}
} else {
var G__36611 = cljs.core.next(seq__36277_36590__$1);
var G__36612 = null;
var G__36613 = (0);
var G__36614 = (0);
seq__36277_36570 = G__36611;
chunk__36281_36571 = G__36612;
count__36282_36572 = G__36613;
i__36283_36573 = G__36614;
continue;
}
}
} else {
}
}
break;
}


var G__36615 = cljs.core.next(seq__36162__$1);
var G__36616 = null;
var G__36617 = (0);
var G__36618 = (0);
seq__36162 = G__36615;
chunk__36164 = G__36616;
count__36165 = G__36617;
i__36166 = G__36618;
continue;
} else {
var G__36619 = cljs.core.next(seq__36162__$1);
var G__36620 = null;
var G__36621 = (0);
var G__36622 = (0);
seq__36162 = G__36619;
chunk__36164 = G__36620;
count__36165 = G__36621;
i__36166 = G__36622;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36401){
var map__36402 = p__36401;
var map__36402__$1 = cljs.core.__destructure_map(map__36402);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36410){
var map__36411 = p__36410;
var map__36411__$1 = cljs.core.__destructure_map(map__36411);
var _ = map__36411__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36412,done,error){
var map__36413 = p__36412;
var map__36413__$1 = cljs.core.__destructure_map(map__36413);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36413__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36414,done,error){
var map__36415 = p__36414;
var map__36415__$1 = cljs.core.__destructure_map(map__36415);
var msg = map__36415__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36415__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36415__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36415__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36416){
var map__36417 = p__36416;
var map__36417__$1 = cljs.core.__destructure_map(map__36417);
var src = map__36417__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36417__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36418 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36418) : done.call(null,G__36418));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36419){
var map__36420 = p__36419;
var map__36420__$1 = cljs.core.__destructure_map(map__36420);
var msg__$1 = map__36420__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36420__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36421){var ex = e36421;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36422){
var map__36423 = p__36422;
var map__36423__$1 = cljs.core.__destructure_map(map__36423);
var env = map__36423__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36423__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36424){
var map__36425 = p__36424;
var map__36425__$1 = cljs.core.__destructure_map(map__36425);
var msg = map__36425__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36425__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36428){
var map__36429 = p__36428;
var map__36429__$1 = cljs.core.__destructure_map(map__36429);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36429__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36433){
var map__36434 = p__36433;
var map__36434__$1 = cljs.core.__destructure_map(map__36434);
var svc = map__36434__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36434__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
