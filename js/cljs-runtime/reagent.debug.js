goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__35287__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35288__i = 0, G__35288__a = new Array(arguments.length -  0);
while (G__35288__i < G__35288__a.length) {G__35288__a[G__35288__i] = arguments[G__35288__i + 0]; ++G__35288__i;}
  args = new cljs.core.IndexedSeq(G__35288__a,0,null);
} 
return G__35287__delegate.call(this,args);};
G__35287.cljs$lang$maxFixedArity = 0;
G__35287.cljs$lang$applyTo = (function (arglist__35289){
var args = cljs.core.seq(arglist__35289);
return G__35287__delegate(args);
});
G__35287.cljs$core$IFn$_invoke$arity$variadic = G__35287__delegate;
return G__35287;
})()
);

(o.error = (function() { 
var G__35290__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35291__i = 0, G__35291__a = new Array(arguments.length -  0);
while (G__35291__i < G__35291__a.length) {G__35291__a[G__35291__i] = arguments[G__35291__i + 0]; ++G__35291__i;}
  args = new cljs.core.IndexedSeq(G__35291__a,0,null);
} 
return G__35290__delegate.call(this,args);};
G__35290.cljs$lang$maxFixedArity = 0;
G__35290.cljs$lang$applyTo = (function (arglist__35292){
var args = cljs.core.seq(arglist__35292);
return G__35290__delegate(args);
});
G__35290.cljs$core$IFn$_invoke$arity$variadic = G__35290__delegate;
return G__35290;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
