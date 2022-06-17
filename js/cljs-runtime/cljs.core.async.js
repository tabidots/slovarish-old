goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29160 = arguments.length;
switch (G__29160) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29166 = (function (f,blockable,meta29167){
this.f = f;
this.blockable = blockable;
this.meta29167 = meta29167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29168,meta29167__$1){
var self__ = this;
var _29168__$1 = this;
return (new cljs.core.async.t_cljs$core$async29166(self__.f,self__.blockable,meta29167__$1));
}));

(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29168){
var self__ = this;
var _29168__$1 = this;
return self__.meta29167;
}));

(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29167","meta29167",1670558186,null)], null);
}));

(cljs.core.async.t_cljs$core$async29166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29166");

(cljs.core.async.t_cljs$core$async29166.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29166.
 */
cljs.core.async.__GT_t_cljs$core$async29166 = (function cljs$core$async$__GT_t_cljs$core$async29166(f__$1,blockable__$1,meta29167){
return (new cljs.core.async.t_cljs$core$async29166(f__$1,blockable__$1,meta29167));
});

}

return (new cljs.core.async.t_cljs$core$async29166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29216 = arguments.length;
switch (G__29216) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29246 = arguments.length;
switch (G__29246) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29274 = arguments.length;
switch (G__29274) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33154 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33154) : fn1.call(null,val_33154));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33154) : fn1.call(null,val_33154));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29304 = arguments.length;
switch (G__29304) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33168 = n;
var x_33169 = (0);
while(true){
if((x_33169 < n__4741__auto___33168)){
(a[x_33169] = x_33169);

var G__33170 = (x_33169 + (1));
x_33169 = G__33170;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29346 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29346 = (function (flag,meta29347){
this.flag = flag;
this.meta29347 = meta29347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29348,meta29347__$1){
var self__ = this;
var _29348__$1 = this;
return (new cljs.core.async.t_cljs$core$async29346(self__.flag,meta29347__$1));
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29348){
var self__ = this;
var _29348__$1 = this;
return self__.meta29347;
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29347","meta29347",-1163019098,null)], null);
}));

(cljs.core.async.t_cljs$core$async29346.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29346");

(cljs.core.async.t_cljs$core$async29346.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29346");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29346.
 */
cljs.core.async.__GT_t_cljs$core$async29346 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29346(flag__$1,meta29347){
return (new cljs.core.async.t_cljs$core$async29346(flag__$1,meta29347));
});

}

return (new cljs.core.async.t_cljs$core$async29346(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29369 = (function (flag,cb,meta29370){
this.flag = flag;
this.cb = cb;
this.meta29370 = meta29370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29371,meta29370__$1){
var self__ = this;
var _29371__$1 = this;
return (new cljs.core.async.t_cljs$core$async29369(self__.flag,self__.cb,meta29370__$1));
}));

(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29371){
var self__ = this;
var _29371__$1 = this;
return self__.meta29370;
}));

(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29370","meta29370",-94849514,null)], null);
}));

(cljs.core.async.t_cljs$core$async29369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29369");

(cljs.core.async.t_cljs$core$async29369.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29369.
 */
cljs.core.async.__GT_t_cljs$core$async29369 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29369(flag__$1,cb__$1,meta29370){
return (new cljs.core.async.t_cljs$core$async29369(flag__$1,cb__$1,meta29370));
});

}

return (new cljs.core.async.t_cljs$core$async29369(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29382_SHARP_){
var G__29396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29382_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29396) : fret.call(null,G__29396));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29383_SHARP_){
var G__29401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29383_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29401) : fret.call(null,G__29401));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33220 = (i + (1));
i = G__33220;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33228 = arguments.length;
var i__4865__auto___33229 = (0);
while(true){
if((i__4865__auto___33229 < len__4864__auto___33228)){
args__4870__auto__.push((arguments[i__4865__auto___33229]));

var G__33230 = (i__4865__auto___33229 + (1));
i__4865__auto___33229 = G__33230;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29427){
var map__29428 = p__29427;
var map__29428__$1 = cljs.core.__destructure_map(map__29428);
var opts = map__29428__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29416){
var G__29417 = cljs.core.first(seq29416);
var seq29416__$1 = cljs.core.next(seq29416);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29417,seq29416__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29446 = arguments.length;
switch (G__29446) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29062__auto___33253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_29534){
var state_val_29540 = (state_29534[(1)]);
if((state_val_29540 === (7))){
var inst_29524 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29563_33259 = state_29534__$1;
(statearr_29563_33259[(2)] = inst_29524);

(statearr_29563_33259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (1))){
var state_29534__$1 = state_29534;
var statearr_29565_33264 = state_29534__$1;
(statearr_29565_33264[(2)] = null);

(statearr_29565_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (4))){
var inst_29486 = (state_29534[(7)]);
var inst_29486__$1 = (state_29534[(2)]);
var inst_29496 = (inst_29486__$1 == null);
var state_29534__$1 = (function (){var statearr_29572 = state_29534;
(statearr_29572[(7)] = inst_29486__$1);

return statearr_29572;
})();
if(cljs.core.truth_(inst_29496)){
var statearr_29579_33266 = state_29534__$1;
(statearr_29579_33266[(1)] = (5));

} else {
var statearr_29580_33267 = state_29534__$1;
(statearr_29580_33267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (13))){
var state_29534__$1 = state_29534;
var statearr_29587_33270 = state_29534__$1;
(statearr_29587_33270[(2)] = null);

(statearr_29587_33270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (6))){
var inst_29486 = (state_29534[(7)]);
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29534__$1,(11),to,inst_29486);
} else {
if((state_val_29540 === (3))){
var inst_29528 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29534__$1,inst_29528);
} else {
if((state_val_29540 === (12))){
var state_29534__$1 = state_29534;
var statearr_29597_33275 = state_29534__$1;
(statearr_29597_33275[(2)] = null);

(statearr_29597_33275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (2))){
var state_29534__$1 = state_29534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29534__$1,(4),from);
} else {
if((state_val_29540 === (11))){
var inst_29514 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
if(cljs.core.truth_(inst_29514)){
var statearr_29605_33277 = state_29534__$1;
(statearr_29605_33277[(1)] = (12));

} else {
var statearr_29609_33278 = state_29534__$1;
(statearr_29609_33278[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (9))){
var state_29534__$1 = state_29534;
var statearr_29612_33281 = state_29534__$1;
(statearr_29612_33281[(2)] = null);

(statearr_29612_33281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (5))){
var state_29534__$1 = state_29534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29622_33286 = state_29534__$1;
(statearr_29622_33286[(1)] = (8));

} else {
var statearr_29623_33287 = state_29534__$1;
(statearr_29623_33287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (14))){
var inst_29522 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29625_33288 = state_29534__$1;
(statearr_29625_33288[(2)] = inst_29522);

(statearr_29625_33288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (10))){
var inst_29511 = (state_29534[(2)]);
var state_29534__$1 = state_29534;
var statearr_29628_33291 = state_29534__$1;
(statearr_29628_33291[(2)] = inst_29511);

(statearr_29628_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (8))){
var inst_29508 = cljs.core.async.close_BANG_(to);
var state_29534__$1 = state_29534;
var statearr_29630_33296 = state_29534__$1;
(statearr_29630_33296[(2)] = inst_29508);

(statearr_29630_33296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_29632 = [null,null,null,null,null,null,null,null];
(statearr_29632[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_29632[(1)] = (1));

return statearr_29632;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_29534){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_29534);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e29634){var ex__28706__auto__ = e29634;
var statearr_29636_33302 = state_29534;
(statearr_29636_33302[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_29534[(4)]))){
var statearr_29637_33305 = state_29534;
(statearr_29637_33305[(1)] = cljs.core.first((state_29534[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33308 = state_29534;
state_29534 = G__33308;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_29534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_29534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_29642 = f__29063__auto__();
(statearr_29642[(6)] = c__29062__auto___33253);

return statearr_29642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29655){
var vec__29656 = p__29655;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29656,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29656,(1),null);
var job = vec__29656;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29062__auto___33318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_29664){
var state_val_29665 = (state_29664[(1)]);
if((state_val_29665 === (1))){
var state_29664__$1 = state_29664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29664__$1,(2),res,v);
} else {
if((state_val_29665 === (2))){
var inst_29661 = (state_29664[(2)]);
var inst_29662 = cljs.core.async.close_BANG_(res);
var state_29664__$1 = (function (){var statearr_29670 = state_29664;
(statearr_29670[(7)] = inst_29661);

return statearr_29670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29664__$1,inst_29662);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_29701 = [null,null,null,null,null,null,null,null];
(statearr_29701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__);

(statearr_29701[(1)] = (1));

return statearr_29701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1 = (function (state_29664){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_29664);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e29708){var ex__28706__auto__ = e29708;
var statearr_29709_33328 = state_29664;
(statearr_29709_33328[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_29664[(4)]))){
var statearr_29716_33329 = state_29664;
(statearr_29716_33329[(1)] = cljs.core.first((state_29664[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33331 = state_29664;
state_29664 = G__33331;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = function(state_29664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1.call(this,state_29664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_29721 = f__29063__auto__();
(statearr_29721[(6)] = c__29062__auto___33318);

return statearr_29721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29723){
var vec__29724 = p__29723;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29724,(1),null);
var job = vec__29724;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33336 = n;
var __33338 = (0);
while(true){
if((__33338 < n__4741__auto___33336)){
var G__29728_33339 = type;
var G__29728_33340__$1 = (((G__29728_33339 instanceof cljs.core.Keyword))?G__29728_33339.fqn:null);
switch (G__29728_33340__$1) {
case "compute":
var c__29062__auto___33347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33338,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = ((function (__33338,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function (state_29743){
var state_val_29744 = (state_29743[(1)]);
if((state_val_29744 === (1))){
var state_29743__$1 = state_29743;
var statearr_29747_33352 = state_29743__$1;
(statearr_29747_33352[(2)] = null);

(statearr_29747_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (2))){
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29743__$1,(4),jobs);
} else {
if((state_val_29744 === (3))){
var inst_29741 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29743__$1,inst_29741);
} else {
if((state_val_29744 === (4))){
var inst_29731 = (state_29743[(2)]);
var inst_29734 = process(inst_29731);
var state_29743__$1 = state_29743;
if(cljs.core.truth_(inst_29734)){
var statearr_29748_33354 = state_29743__$1;
(statearr_29748_33354[(1)] = (5));

} else {
var statearr_29751_33355 = state_29743__$1;
(statearr_29751_33355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (5))){
var state_29743__$1 = state_29743;
var statearr_29755_33356 = state_29743__$1;
(statearr_29755_33356[(2)] = null);

(statearr_29755_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (6))){
var state_29743__$1 = state_29743;
var statearr_29756_33357 = state_29743__$1;
(statearr_29756_33357[(2)] = null);

(statearr_29756_33357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29744 === (7))){
var inst_29739 = (state_29743[(2)]);
var state_29743__$1 = state_29743;
var statearr_29758_33358 = state_29743__$1;
(statearr_29758_33358[(2)] = inst_29739);

(statearr_29758_33358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33338,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
;
return ((function (__33338,switch__28702__auto__,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_29760 = [null,null,null,null,null,null,null];
(statearr_29760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__);

(statearr_29760[(1)] = (1));

return statearr_29760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1 = (function (state_29743){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_29743);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e29762){var ex__28706__auto__ = e29762;
var statearr_29764_33368 = state_29743;
(statearr_29764_33368[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_29743[(4)]))){
var statearr_29766_33369 = state_29743;
(statearr_29766_33369[(1)] = cljs.core.first((state_29743[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33371 = state_29743;
state_29743 = G__33371;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = function(state_29743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1.call(this,state_29743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__;
})()
;})(__33338,switch__28702__auto__,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
})();
var state__29064__auto__ = (function (){var statearr_29768 = f__29063__auto__();
(statearr_29768[(6)] = c__29062__auto___33347);

return statearr_29768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
});})(__33338,c__29062__auto___33347,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
);


break;
case "async":
var c__29062__auto___33372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33338,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = ((function (__33338,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function (state_29785){
var state_val_29786 = (state_29785[(1)]);
if((state_val_29786 === (1))){
var state_29785__$1 = state_29785;
var statearr_29792_33382 = state_29785__$1;
(statearr_29792_33382[(2)] = null);

(statearr_29792_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (2))){
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29785__$1,(4),jobs);
} else {
if((state_val_29786 === (3))){
var inst_29783 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29785__$1,inst_29783);
} else {
if((state_val_29786 === (4))){
var inst_29772 = (state_29785[(2)]);
var inst_29776 = async(inst_29772);
var state_29785__$1 = state_29785;
if(cljs.core.truth_(inst_29776)){
var statearr_29796_33384 = state_29785__$1;
(statearr_29796_33384[(1)] = (5));

} else {
var statearr_29797_33385 = state_29785__$1;
(statearr_29797_33385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (5))){
var state_29785__$1 = state_29785;
var statearr_29800_33386 = state_29785__$1;
(statearr_29800_33386[(2)] = null);

(statearr_29800_33386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (6))){
var state_29785__$1 = state_29785;
var statearr_29803_33389 = state_29785__$1;
(statearr_29803_33389[(2)] = null);

(statearr_29803_33389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29786 === (7))){
var inst_29781 = (state_29785[(2)]);
var state_29785__$1 = state_29785;
var statearr_29804_33392 = state_29785__$1;
(statearr_29804_33392[(2)] = inst_29781);

(statearr_29804_33392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33338,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
;
return ((function (__33338,switch__28702__auto__,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_29806 = [null,null,null,null,null,null,null];
(statearr_29806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__);

(statearr_29806[(1)] = (1));

return statearr_29806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1 = (function (state_29785){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_29785);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e29808){var ex__28706__auto__ = e29808;
var statearr_29809_33403 = state_29785;
(statearr_29809_33403[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_29785[(4)]))){
var statearr_29811_33404 = state_29785;
(statearr_29811_33404[(1)] = cljs.core.first((state_29785[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33409 = state_29785;
state_29785 = G__33409;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = function(state_29785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1.call(this,state_29785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__;
})()
;})(__33338,switch__28702__auto__,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
})();
var state__29064__auto__ = (function (){var statearr_29812 = f__29063__auto__();
(statearr_29812[(6)] = c__29062__auto___33372);

return statearr_29812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
});})(__33338,c__29062__auto___33372,G__29728_33339,G__29728_33340__$1,n__4741__auto___33336,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29728_33340__$1)].join('')));

}

var G__33418 = (__33338 + (1));
__33338 = G__33418;
continue;
} else {
}
break;
}

var c__29062__auto___33419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_29864){
var state_val_29865 = (state_29864[(1)]);
if((state_val_29865 === (7))){
var inst_29860 = (state_29864[(2)]);
var state_29864__$1 = state_29864;
var statearr_29871_33421 = state_29864__$1;
(statearr_29871_33421[(2)] = inst_29860);

(statearr_29871_33421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29865 === (1))){
var state_29864__$1 = state_29864;
var statearr_29872_33422 = state_29864__$1;
(statearr_29872_33422[(2)] = null);

(statearr_29872_33422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29865 === (4))){
var inst_29827 = (state_29864[(7)]);
var inst_29827__$1 = (state_29864[(2)]);
var inst_29829 = (inst_29827__$1 == null);
var state_29864__$1 = (function (){var statearr_29876 = state_29864;
(statearr_29876[(7)] = inst_29827__$1);

return statearr_29876;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29879_33423 = state_29864__$1;
(statearr_29879_33423[(1)] = (5));

} else {
var statearr_29880_33424 = state_29864__$1;
(statearr_29880_33424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29865 === (6))){
var inst_29827 = (state_29864[(7)]);
var inst_29842 = (state_29864[(8)]);
var inst_29842__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29848 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29850 = [inst_29827,inst_29842__$1];
var inst_29851 = (new cljs.core.PersistentVector(null,2,(5),inst_29848,inst_29850,null));
var state_29864__$1 = (function (){var statearr_29889 = state_29864;
(statearr_29889[(8)] = inst_29842__$1);

return statearr_29889;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29864__$1,(8),jobs,inst_29851);
} else {
if((state_val_29865 === (3))){
var inst_29862 = (state_29864[(2)]);
var state_29864__$1 = state_29864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29864__$1,inst_29862);
} else {
if((state_val_29865 === (2))){
var state_29864__$1 = state_29864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29864__$1,(4),from);
} else {
if((state_val_29865 === (9))){
var inst_29857 = (state_29864[(2)]);
var state_29864__$1 = (function (){var statearr_29902 = state_29864;
(statearr_29902[(9)] = inst_29857);

return statearr_29902;
})();
var statearr_29903_33428 = state_29864__$1;
(statearr_29903_33428[(2)] = null);

(statearr_29903_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29865 === (5))){
var inst_29836 = cljs.core.async.close_BANG_(jobs);
var state_29864__$1 = state_29864;
var statearr_29913_33433 = state_29864__$1;
(statearr_29913_33433[(2)] = inst_29836);

(statearr_29913_33433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29865 === (8))){
var inst_29842 = (state_29864[(8)]);
var inst_29854 = (state_29864[(2)]);
var state_29864__$1 = (function (){var statearr_29923 = state_29864;
(statearr_29923[(10)] = inst_29854);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29864__$1,(9),results,inst_29842);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1 = (function (state_29864){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_29864);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e29930){var ex__28706__auto__ = e29930;
var statearr_29931_33436 = state_29864;
(statearr_29931_33436[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_29864[(4)]))){
var statearr_29932_33437 = state_29864;
(statearr_29932_33437[(1)] = cljs.core.first((state_29864[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33438 = state_29864;
state_29864 = G__33438;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = function(state_29864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1.call(this,state_29864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_29945 = f__29063__auto__();
(statearr_29945[(6)] = c__29062__auto___33419);

return statearr_29945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


var c__29062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30016){
var state_val_30017 = (state_30016[(1)]);
if((state_val_30017 === (7))){
var inst_30005 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30024_33440 = state_30016__$1;
(statearr_30024_33440[(2)] = inst_30005);

(statearr_30024_33440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (20))){
var state_30016__$1 = state_30016;
var statearr_30026_33442 = state_30016__$1;
(statearr_30026_33442[(2)] = null);

(statearr_30026_33442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (1))){
var state_30016__$1 = state_30016;
var statearr_30029_33443 = state_30016__$1;
(statearr_30029_33443[(2)] = null);

(statearr_30029_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (4))){
var inst_29963 = (state_30016[(7)]);
var inst_29963__$1 = (state_30016[(2)]);
var inst_29964 = (inst_29963__$1 == null);
var state_30016__$1 = (function (){var statearr_30030 = state_30016;
(statearr_30030[(7)] = inst_29963__$1);

return statearr_30030;
})();
if(cljs.core.truth_(inst_29964)){
var statearr_30031_33447 = state_30016__$1;
(statearr_30031_33447[(1)] = (5));

} else {
var statearr_30033_33448 = state_30016__$1;
(statearr_30033_33448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (15))){
var inst_29979 = (state_30016[(8)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30016__$1,(18),to,inst_29979);
} else {
if((state_val_30017 === (21))){
var inst_29999 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30037_33450 = state_30016__$1;
(statearr_30037_33450[(2)] = inst_29999);

(statearr_30037_33450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (13))){
var inst_30002 = (state_30016[(2)]);
var state_30016__$1 = (function (){var statearr_30040 = state_30016;
(statearr_30040[(9)] = inst_30002);

return statearr_30040;
})();
var statearr_30043_33451 = state_30016__$1;
(statearr_30043_33451[(2)] = null);

(statearr_30043_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (6))){
var inst_29963 = (state_30016[(7)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30016__$1,(11),inst_29963);
} else {
if((state_val_30017 === (17))){
var inst_29993 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
if(cljs.core.truth_(inst_29993)){
var statearr_30055_33452 = state_30016__$1;
(statearr_30055_33452[(1)] = (19));

} else {
var statearr_30057_33453 = state_30016__$1;
(statearr_30057_33453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (3))){
var inst_30008 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30016__$1,inst_30008);
} else {
if((state_val_30017 === (12))){
var inst_29973 = (state_30016[(10)]);
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30016__$1,(14),inst_29973);
} else {
if((state_val_30017 === (2))){
var state_30016__$1 = state_30016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30016__$1,(4),results);
} else {
if((state_val_30017 === (19))){
var state_30016__$1 = state_30016;
var statearr_30063_33458 = state_30016__$1;
(statearr_30063_33458[(2)] = null);

(statearr_30063_33458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (11))){
var inst_29973 = (state_30016[(2)]);
var state_30016__$1 = (function (){var statearr_30064 = state_30016;
(statearr_30064[(10)] = inst_29973);

return statearr_30064;
})();
var statearr_30065_33459 = state_30016__$1;
(statearr_30065_33459[(2)] = null);

(statearr_30065_33459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (9))){
var state_30016__$1 = state_30016;
var statearr_30067_33460 = state_30016__$1;
(statearr_30067_33460[(2)] = null);

(statearr_30067_33460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (5))){
var state_30016__$1 = state_30016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30069_33461 = state_30016__$1;
(statearr_30069_33461[(1)] = (8));

} else {
var statearr_30073_33462 = state_30016__$1;
(statearr_30073_33462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (14))){
var inst_29979 = (state_30016[(8)]);
var inst_29983 = (state_30016[(11)]);
var inst_29979__$1 = (state_30016[(2)]);
var inst_29982 = (inst_29979__$1 == null);
var inst_29983__$1 = cljs.core.not(inst_29982);
var state_30016__$1 = (function (){var statearr_30080 = state_30016;
(statearr_30080[(8)] = inst_29979__$1);

(statearr_30080[(11)] = inst_29983__$1);

return statearr_30080;
})();
if(inst_29983__$1){
var statearr_30081_33463 = state_30016__$1;
(statearr_30081_33463[(1)] = (15));

} else {
var statearr_30082_33464 = state_30016__$1;
(statearr_30082_33464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (16))){
var inst_29983 = (state_30016[(11)]);
var state_30016__$1 = state_30016;
var statearr_30085_33465 = state_30016__$1;
(statearr_30085_33465[(2)] = inst_29983);

(statearr_30085_33465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (10))){
var inst_29970 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30086_33467 = state_30016__$1;
(statearr_30086_33467[(2)] = inst_29970);

(statearr_30086_33467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (18))){
var inst_29990 = (state_30016[(2)]);
var state_30016__$1 = state_30016;
var statearr_30089_33468 = state_30016__$1;
(statearr_30089_33468[(2)] = inst_29990);

(statearr_30089_33468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30017 === (8))){
var inst_29967 = cljs.core.async.close_BANG_(to);
var state_30016__$1 = state_30016;
var statearr_30093_33469 = state_30016__$1;
(statearr_30093_33469[(2)] = inst_29967);

(statearr_30093_33469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1 = (function (state_30016){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30016);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30100){var ex__28706__auto__ = e30100;
var statearr_30101_33470 = state_30016;
(statearr_30101_33470[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30016[(4)]))){
var statearr_30102_33471 = state_30016;
(statearr_30102_33471[(1)] = cljs.core.first((state_30016[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33473 = state_30016;
state_30016 = G__33473;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__ = function(state_30016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1.call(this,state_30016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30105 = f__29063__auto__();
(statearr_30105[(6)] = c__29062__auto__);

return statearr_30105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

return c__29062__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30114 = arguments.length;
switch (G__30114) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30126 = arguments.length;
switch (G__30126) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30138 = arguments.length;
switch (G__30138) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29062__auto___33486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30174){
var state_val_30175 = (state_30174[(1)]);
if((state_val_30175 === (7))){
var inst_30170 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30182_33487 = state_30174__$1;
(statearr_30182_33487[(2)] = inst_30170);

(statearr_30182_33487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (1))){
var state_30174__$1 = state_30174;
var statearr_30183_33488 = state_30174__$1;
(statearr_30183_33488[(2)] = null);

(statearr_30183_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (4))){
var inst_30146 = (state_30174[(7)]);
var inst_30146__$1 = (state_30174[(2)]);
var inst_30151 = (inst_30146__$1 == null);
var state_30174__$1 = (function (){var statearr_30190 = state_30174;
(statearr_30190[(7)] = inst_30146__$1);

return statearr_30190;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30191_33489 = state_30174__$1;
(statearr_30191_33489[(1)] = (5));

} else {
var statearr_30192_33490 = state_30174__$1;
(statearr_30192_33490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (13))){
var state_30174__$1 = state_30174;
var statearr_30194_33491 = state_30174__$1;
(statearr_30194_33491[(2)] = null);

(statearr_30194_33491[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (6))){
var inst_30146 = (state_30174[(7)]);
var inst_30157 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30146) : p.call(null,inst_30146));
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30157)){
var statearr_30195_33494 = state_30174__$1;
(statearr_30195_33494[(1)] = (9));

} else {
var statearr_30196_33495 = state_30174__$1;
(statearr_30196_33495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (3))){
var inst_30172 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30174__$1,inst_30172);
} else {
if((state_val_30175 === (12))){
var state_30174__$1 = state_30174;
var statearr_30197_33496 = state_30174__$1;
(statearr_30197_33496[(2)] = null);

(statearr_30197_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (2))){
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30174__$1,(4),ch);
} else {
if((state_val_30175 === (11))){
var inst_30146 = (state_30174[(7)]);
var inst_30161 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30174__$1,(8),inst_30161,inst_30146);
} else {
if((state_val_30175 === (9))){
var state_30174__$1 = state_30174;
var statearr_30212_33497 = state_30174__$1;
(statearr_30212_33497[(2)] = tc);

(statearr_30212_33497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (5))){
var inst_30154 = cljs.core.async.close_BANG_(tc);
var inst_30155 = cljs.core.async.close_BANG_(fc);
var state_30174__$1 = (function (){var statearr_30214 = state_30174;
(statearr_30214[(8)] = inst_30154);

return statearr_30214;
})();
var statearr_30216_33500 = state_30174__$1;
(statearr_30216_33500[(2)] = inst_30155);

(statearr_30216_33500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (14))){
var inst_30168 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
var statearr_30218_33501 = state_30174__$1;
(statearr_30218_33501[(2)] = inst_30168);

(statearr_30218_33501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (10))){
var state_30174__$1 = state_30174;
var statearr_30220_33502 = state_30174__$1;
(statearr_30220_33502[(2)] = fc);

(statearr_30220_33502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30175 === (8))){
var inst_30163 = (state_30174[(2)]);
var state_30174__$1 = state_30174;
if(cljs.core.truth_(inst_30163)){
var statearr_30222_33503 = state_30174__$1;
(statearr_30222_33503[(1)] = (12));

} else {
var statearr_30223_33504 = state_30174__$1;
(statearr_30223_33504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null,null,null];
(statearr_30226[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_30174){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30174);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30228){var ex__28706__auto__ = e30228;
var statearr_30229_33513 = state_30174;
(statearr_30229_33513[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30174[(4)]))){
var statearr_30233_33514 = state_30174;
(statearr_30233_33514[(1)] = cljs.core.first((state_30174[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33515 = state_30174;
state_30174 = G__33515;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_30174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_30174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30237 = f__29063__auto__();
(statearr_30237[(6)] = c__29062__auto___33486);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30261){
var state_val_30262 = (state_30261[(1)]);
if((state_val_30262 === (7))){
var inst_30257 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
var statearr_30267_33520 = state_30261__$1;
(statearr_30267_33520[(2)] = inst_30257);

(statearr_30267_33520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (1))){
var inst_30240 = init;
var inst_30241 = inst_30240;
var state_30261__$1 = (function (){var statearr_30268 = state_30261;
(statearr_30268[(7)] = inst_30241);

return statearr_30268;
})();
var statearr_30269_33521 = state_30261__$1;
(statearr_30269_33521[(2)] = null);

(statearr_30269_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (4))){
var inst_30244 = (state_30261[(8)]);
var inst_30244__$1 = (state_30261[(2)]);
var inst_30245 = (inst_30244__$1 == null);
var state_30261__$1 = (function (){var statearr_30270 = state_30261;
(statearr_30270[(8)] = inst_30244__$1);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30245)){
var statearr_30272_33525 = state_30261__$1;
(statearr_30272_33525[(1)] = (5));

} else {
var statearr_30273_33526 = state_30261__$1;
(statearr_30273_33526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (6))){
var inst_30244 = (state_30261[(8)]);
var inst_30248 = (state_30261[(9)]);
var inst_30241 = (state_30261[(7)]);
var inst_30248__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30241,inst_30244) : f.call(null,inst_30241,inst_30244));
var inst_30249 = cljs.core.reduced_QMARK_(inst_30248__$1);
var state_30261__$1 = (function (){var statearr_30275 = state_30261;
(statearr_30275[(9)] = inst_30248__$1);

return statearr_30275;
})();
if(inst_30249){
var statearr_30277_33527 = state_30261__$1;
(statearr_30277_33527[(1)] = (8));

} else {
var statearr_30281_33528 = state_30261__$1;
(statearr_30281_33528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (3))){
var inst_30259 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30261__$1,inst_30259);
} else {
if((state_val_30262 === (2))){
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30261__$1,(4),ch);
} else {
if((state_val_30262 === (9))){
var inst_30248 = (state_30261[(9)]);
var inst_30241 = inst_30248;
var state_30261__$1 = (function (){var statearr_30294 = state_30261;
(statearr_30294[(7)] = inst_30241);

return statearr_30294;
})();
var statearr_30296_33532 = state_30261__$1;
(statearr_30296_33532[(2)] = null);

(statearr_30296_33532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (5))){
var inst_30241 = (state_30261[(7)]);
var state_30261__$1 = state_30261;
var statearr_30297_33537 = state_30261__$1;
(statearr_30297_33537[(2)] = inst_30241);

(statearr_30297_33537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (10))){
var inst_30255 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
var statearr_30298_33538 = state_30261__$1;
(statearr_30298_33538[(2)] = inst_30255);

(statearr_30298_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (8))){
var inst_30248 = (state_30261[(9)]);
var inst_30251 = cljs.core.deref(inst_30248);
var state_30261__$1 = state_30261;
var statearr_30299_33539 = state_30261__$1;
(statearr_30299_33539[(2)] = inst_30251);

(statearr_30299_33539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__28703__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28703__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = cljs$core$async$reduce_$_state_machine__28703__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var cljs$core$async$reduce_$_state_machine__28703__auto____1 = (function (state_30261){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30261);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30305){var ex__28706__auto__ = e30305;
var statearr_30306_33545 = state_30261;
(statearr_30306_33545[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30261[(4)]))){
var statearr_30309_33549 = state_30261;
(statearr_30309_33549[(1)] = cljs.core.first((state_30261[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33550 = state_30261;
state_30261 = G__33550;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28703__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28703__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28703__auto____0;
cljs$core$async$reduce_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28703__auto____1;
return cljs$core$async$reduce_$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30315 = f__29063__auto__();
(statearr_30315[(6)] = c__29062__auto__);

return statearr_30315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

return c__29062__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30324){
var state_val_30325 = (state_30324[(1)]);
if((state_val_30325 === (1))){
var inst_30318 = cljs.core.async.reduce(f__$1,init,ch);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(2),inst_30318);
} else {
if((state_val_30325 === (2))){
var inst_30321 = (state_30324[(2)]);
var inst_30322 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30321) : f__$1.call(null,inst_30321));
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30324__$1,inst_30322);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28703__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28703__auto____0 = (function (){
var statearr_30331 = [null,null,null,null,null,null,null];
(statearr_30331[(0)] = cljs$core$async$transduce_$_state_machine__28703__auto__);

(statearr_30331[(1)] = (1));

return statearr_30331;
});
var cljs$core$async$transduce_$_state_machine__28703__auto____1 = (function (state_30324){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30324);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30332){var ex__28706__auto__ = e30332;
var statearr_30333_33564 = state_30324;
(statearr_30333_33564[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30324[(4)]))){
var statearr_30334_33568 = state_30324;
(statearr_30334_33568[(1)] = cljs.core.first((state_30324[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33572 = state_30324;
state_30324 = G__33572;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28703__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28703__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28703__auto____0;
cljs$core$async$transduce_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28703__auto____1;
return cljs$core$async$transduce_$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30335 = f__29063__auto__();
(statearr_30335[(6)] = c__29062__auto__);

return statearr_30335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

return c__29062__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30341 = arguments.length;
switch (G__30341) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30369){
var state_val_30370 = (state_30369[(1)]);
if((state_val_30370 === (7))){
var inst_30350 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30377_33583 = state_30369__$1;
(statearr_30377_33583[(2)] = inst_30350);

(statearr_30377_33583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (1))){
var inst_30344 = cljs.core.seq(coll);
var inst_30345 = inst_30344;
var state_30369__$1 = (function (){var statearr_30379 = state_30369;
(statearr_30379[(7)] = inst_30345);

return statearr_30379;
})();
var statearr_30380_33584 = state_30369__$1;
(statearr_30380_33584[(2)] = null);

(statearr_30380_33584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (4))){
var inst_30345 = (state_30369[(7)]);
var inst_30348 = cljs.core.first(inst_30345);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30369__$1,(7),ch,inst_30348);
} else {
if((state_val_30370 === (13))){
var inst_30363 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30382_33591 = state_30369__$1;
(statearr_30382_33591[(2)] = inst_30363);

(statearr_30382_33591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (6))){
var inst_30354 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
if(cljs.core.truth_(inst_30354)){
var statearr_30383_33592 = state_30369__$1;
(statearr_30383_33592[(1)] = (8));

} else {
var statearr_30384_33594 = state_30369__$1;
(statearr_30384_33594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (3))){
var inst_30367 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30369__$1,inst_30367);
} else {
if((state_val_30370 === (12))){
var state_30369__$1 = state_30369;
var statearr_30387_33595 = state_30369__$1;
(statearr_30387_33595[(2)] = null);

(statearr_30387_33595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (2))){
var inst_30345 = (state_30369[(7)]);
var state_30369__$1 = state_30369;
if(cljs.core.truth_(inst_30345)){
var statearr_30388_33596 = state_30369__$1;
(statearr_30388_33596[(1)] = (4));

} else {
var statearr_30389_33598 = state_30369__$1;
(statearr_30389_33598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (11))){
var inst_30360 = cljs.core.async.close_BANG_(ch);
var state_30369__$1 = state_30369;
var statearr_30390_33599 = state_30369__$1;
(statearr_30390_33599[(2)] = inst_30360);

(statearr_30390_33599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (9))){
var state_30369__$1 = state_30369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30396_33600 = state_30369__$1;
(statearr_30396_33600[(1)] = (11));

} else {
var statearr_30398_33601 = state_30369__$1;
(statearr_30398_33601[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (5))){
var inst_30345 = (state_30369[(7)]);
var state_30369__$1 = state_30369;
var statearr_30401_33602 = state_30369__$1;
(statearr_30401_33602[(2)] = inst_30345);

(statearr_30401_33602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (10))){
var inst_30365 = (state_30369[(2)]);
var state_30369__$1 = state_30369;
var statearr_30406_33603 = state_30369__$1;
(statearr_30406_33603[(2)] = inst_30365);

(statearr_30406_33603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30370 === (8))){
var inst_30345 = (state_30369[(7)]);
var inst_30356 = cljs.core.next(inst_30345);
var inst_30345__$1 = inst_30356;
var state_30369__$1 = (function (){var statearr_30407 = state_30369;
(statearr_30407[(7)] = inst_30345__$1);

return statearr_30407;
})();
var statearr_30408_33604 = state_30369__$1;
(statearr_30408_33604[(2)] = null);

(statearr_30408_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_30409 = [null,null,null,null,null,null,null,null];
(statearr_30409[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_30409[(1)] = (1));

return statearr_30409;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_30369){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30369);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30410){var ex__28706__auto__ = e30410;
var statearr_30411_33606 = state_30369;
(statearr_30411_33606[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30369[(4)]))){
var statearr_30417_33607 = state_30369;
(statearr_30417_33607[(1)] = cljs.core.first((state_30369[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33608 = state_30369;
state_30369 = G__33608;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_30369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_30369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30421 = f__29063__auto__();
(statearr_30421[(6)] = c__29062__auto__);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

return c__29062__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30424 = arguments.length;
switch (G__30424) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33610 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33610(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33611 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33611(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33617 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33617(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33623 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33623(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30472 = (function (ch,cs,meta30473){
this.ch = ch;
this.cs = cs;
this.meta30473 = meta30473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30474,meta30473__$1){
var self__ = this;
var _30474__$1 = this;
return (new cljs.core.async.t_cljs$core$async30472(self__.ch,self__.cs,meta30473__$1));
}));

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30474){
var self__ = this;
var _30474__$1 = this;
return self__.meta30473;
}));

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30472.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30473","meta30473",994583241,null)], null);
}));

(cljs.core.async.t_cljs$core$async30472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30472");

(cljs.core.async.t_cljs$core$async30472.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30472.
 */
cljs.core.async.__GT_t_cljs$core$async30472 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30472(ch__$1,cs__$1,meta30473){
return (new cljs.core.async.t_cljs$core$async30472(ch__$1,cs__$1,meta30473));
});

}

return (new cljs.core.async.t_cljs$core$async30472(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29062__auto___33624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_30654){
var state_val_30656 = (state_30654[(1)]);
if((state_val_30656 === (7))){
var inst_30648 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30658_33625 = state_30654__$1;
(statearr_30658_33625[(2)] = inst_30648);

(statearr_30658_33625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (20))){
var inst_30526 = (state_30654[(7)]);
var inst_30542 = cljs.core.first(inst_30526);
var inst_30543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30542,(0),null);
var inst_30544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30542,(1),null);
var state_30654__$1 = (function (){var statearr_30659 = state_30654;
(statearr_30659[(8)] = inst_30543);

return statearr_30659;
})();
if(cljs.core.truth_(inst_30544)){
var statearr_30664_33627 = state_30654__$1;
(statearr_30664_33627[(1)] = (22));

} else {
var statearr_30665_33628 = state_30654__$1;
(statearr_30665_33628[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (27))){
var inst_30488 = (state_30654[(9)]);
var inst_30577 = (state_30654[(10)]);
var inst_30586 = (state_30654[(11)]);
var inst_30575 = (state_30654[(12)]);
var inst_30586__$1 = cljs.core._nth(inst_30575,inst_30577);
var inst_30587 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30586__$1,inst_30488,done);
var state_30654__$1 = (function (){var statearr_30675 = state_30654;
(statearr_30675[(11)] = inst_30586__$1);

return statearr_30675;
})();
if(cljs.core.truth_(inst_30587)){
var statearr_30677_33629 = state_30654__$1;
(statearr_30677_33629[(1)] = (30));

} else {
var statearr_30678_33630 = state_30654__$1;
(statearr_30678_33630[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (1))){
var state_30654__$1 = state_30654;
var statearr_30682_33631 = state_30654__$1;
(statearr_30682_33631[(2)] = null);

(statearr_30682_33631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (24))){
var inst_30526 = (state_30654[(7)]);
var inst_30549 = (state_30654[(2)]);
var inst_30550 = cljs.core.next(inst_30526);
var inst_30497 = inst_30550;
var inst_30498 = null;
var inst_30499 = (0);
var inst_30500 = (0);
var state_30654__$1 = (function (){var statearr_30687 = state_30654;
(statearr_30687[(13)] = inst_30499);

(statearr_30687[(14)] = inst_30497);

(statearr_30687[(15)] = inst_30498);

(statearr_30687[(16)] = inst_30500);

(statearr_30687[(17)] = inst_30549);

return statearr_30687;
})();
var statearr_30688_33634 = state_30654__$1;
(statearr_30688_33634[(2)] = null);

(statearr_30688_33634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (39))){
var state_30654__$1 = state_30654;
var statearr_30692_33636 = state_30654__$1;
(statearr_30692_33636[(2)] = null);

(statearr_30692_33636[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (4))){
var inst_30488 = (state_30654[(9)]);
var inst_30488__$1 = (state_30654[(2)]);
var inst_30489 = (inst_30488__$1 == null);
var state_30654__$1 = (function (){var statearr_30693 = state_30654;
(statearr_30693[(9)] = inst_30488__$1);

return statearr_30693;
})();
if(cljs.core.truth_(inst_30489)){
var statearr_30695_33640 = state_30654__$1;
(statearr_30695_33640[(1)] = (5));

} else {
var statearr_30699_33641 = state_30654__$1;
(statearr_30699_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (15))){
var inst_30499 = (state_30654[(13)]);
var inst_30497 = (state_30654[(14)]);
var inst_30498 = (state_30654[(15)]);
var inst_30500 = (state_30654[(16)]);
var inst_30515 = (state_30654[(2)]);
var inst_30522 = (inst_30500 + (1));
var tmp30689 = inst_30499;
var tmp30690 = inst_30497;
var tmp30691 = inst_30498;
var inst_30497__$1 = tmp30690;
var inst_30498__$1 = tmp30691;
var inst_30499__$1 = tmp30689;
var inst_30500__$1 = inst_30522;
var state_30654__$1 = (function (){var statearr_30702 = state_30654;
(statearr_30702[(13)] = inst_30499__$1);

(statearr_30702[(14)] = inst_30497__$1);

(statearr_30702[(15)] = inst_30498__$1);

(statearr_30702[(16)] = inst_30500__$1);

(statearr_30702[(18)] = inst_30515);

return statearr_30702;
})();
var statearr_30708_33648 = state_30654__$1;
(statearr_30708_33648[(2)] = null);

(statearr_30708_33648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (21))){
var inst_30553 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30717_33649 = state_30654__$1;
(statearr_30717_33649[(2)] = inst_30553);

(statearr_30717_33649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (31))){
var inst_30586 = (state_30654[(11)]);
var inst_30590 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30586);
var state_30654__$1 = state_30654;
var statearr_30720_33651 = state_30654__$1;
(statearr_30720_33651[(2)] = inst_30590);

(statearr_30720_33651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (32))){
var inst_30577 = (state_30654[(10)]);
var inst_30574 = (state_30654[(19)]);
var inst_30575 = (state_30654[(12)]);
var inst_30576 = (state_30654[(20)]);
var inst_30592 = (state_30654[(2)]);
var inst_30593 = (inst_30577 + (1));
var tmp30710 = inst_30574;
var tmp30711 = inst_30575;
var tmp30712 = inst_30576;
var inst_30574__$1 = tmp30710;
var inst_30575__$1 = tmp30711;
var inst_30576__$1 = tmp30712;
var inst_30577__$1 = inst_30593;
var state_30654__$1 = (function (){var statearr_30721 = state_30654;
(statearr_30721[(21)] = inst_30592);

(statearr_30721[(10)] = inst_30577__$1);

(statearr_30721[(19)] = inst_30574__$1);

(statearr_30721[(12)] = inst_30575__$1);

(statearr_30721[(20)] = inst_30576__$1);

return statearr_30721;
})();
var statearr_30722_33653 = state_30654__$1;
(statearr_30722_33653[(2)] = null);

(statearr_30722_33653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (40))){
var inst_30617 = (state_30654[(22)]);
var inst_30621 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30617);
var state_30654__$1 = state_30654;
var statearr_30725_33654 = state_30654__$1;
(statearr_30725_33654[(2)] = inst_30621);

(statearr_30725_33654[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (33))){
var inst_30597 = (state_30654[(23)]);
var inst_30602 = cljs.core.chunked_seq_QMARK_(inst_30597);
var state_30654__$1 = state_30654;
if(inst_30602){
var statearr_30727_33655 = state_30654__$1;
(statearr_30727_33655[(1)] = (36));

} else {
var statearr_30728_33656 = state_30654__$1;
(statearr_30728_33656[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (13))){
var inst_30509 = (state_30654[(24)]);
var inst_30512 = cljs.core.async.close_BANG_(inst_30509);
var state_30654__$1 = state_30654;
var statearr_30731_33657 = state_30654__$1;
(statearr_30731_33657[(2)] = inst_30512);

(statearr_30731_33657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (22))){
var inst_30543 = (state_30654[(8)]);
var inst_30546 = cljs.core.async.close_BANG_(inst_30543);
var state_30654__$1 = state_30654;
var statearr_30732_33658 = state_30654__$1;
(statearr_30732_33658[(2)] = inst_30546);

(statearr_30732_33658[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (36))){
var inst_30597 = (state_30654[(23)]);
var inst_30608 = cljs.core.chunk_first(inst_30597);
var inst_30609 = cljs.core.chunk_rest(inst_30597);
var inst_30610 = cljs.core.count(inst_30608);
var inst_30574 = inst_30609;
var inst_30575 = inst_30608;
var inst_30576 = inst_30610;
var inst_30577 = (0);
var state_30654__$1 = (function (){var statearr_30733 = state_30654;
(statearr_30733[(10)] = inst_30577);

(statearr_30733[(19)] = inst_30574);

(statearr_30733[(12)] = inst_30575);

(statearr_30733[(20)] = inst_30576);

return statearr_30733;
})();
var statearr_30734_33663 = state_30654__$1;
(statearr_30734_33663[(2)] = null);

(statearr_30734_33663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (41))){
var inst_30597 = (state_30654[(23)]);
var inst_30623 = (state_30654[(2)]);
var inst_30628 = cljs.core.next(inst_30597);
var inst_30574 = inst_30628;
var inst_30575 = null;
var inst_30576 = (0);
var inst_30577 = (0);
var state_30654__$1 = (function (){var statearr_30737 = state_30654;
(statearr_30737[(25)] = inst_30623);

(statearr_30737[(10)] = inst_30577);

(statearr_30737[(19)] = inst_30574);

(statearr_30737[(12)] = inst_30575);

(statearr_30737[(20)] = inst_30576);

return statearr_30737;
})();
var statearr_30739_33668 = state_30654__$1;
(statearr_30739_33668[(2)] = null);

(statearr_30739_33668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (43))){
var state_30654__$1 = state_30654;
var statearr_30741_33669 = state_30654__$1;
(statearr_30741_33669[(2)] = null);

(statearr_30741_33669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (29))){
var inst_30636 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30742_33670 = state_30654__$1;
(statearr_30742_33670[(2)] = inst_30636);

(statearr_30742_33670[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (44))){
var inst_30645 = (state_30654[(2)]);
var state_30654__$1 = (function (){var statearr_30743 = state_30654;
(statearr_30743[(26)] = inst_30645);

return statearr_30743;
})();
var statearr_30744_33673 = state_30654__$1;
(statearr_30744_33673[(2)] = null);

(statearr_30744_33673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (6))){
var inst_30563 = (state_30654[(27)]);
var inst_30562 = cljs.core.deref(cs);
var inst_30563__$1 = cljs.core.keys(inst_30562);
var inst_30564 = cljs.core.count(inst_30563__$1);
var inst_30565 = cljs.core.reset_BANG_(dctr,inst_30564);
var inst_30570 = cljs.core.seq(inst_30563__$1);
var inst_30574 = inst_30570;
var inst_30575 = null;
var inst_30576 = (0);
var inst_30577 = (0);
var state_30654__$1 = (function (){var statearr_30746 = state_30654;
(statearr_30746[(27)] = inst_30563__$1);

(statearr_30746[(28)] = inst_30565);

(statearr_30746[(10)] = inst_30577);

(statearr_30746[(19)] = inst_30574);

(statearr_30746[(12)] = inst_30575);

(statearr_30746[(20)] = inst_30576);

return statearr_30746;
})();
var statearr_30749_33683 = state_30654__$1;
(statearr_30749_33683[(2)] = null);

(statearr_30749_33683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (28))){
var inst_30597 = (state_30654[(23)]);
var inst_30574 = (state_30654[(19)]);
var inst_30597__$1 = cljs.core.seq(inst_30574);
var state_30654__$1 = (function (){var statearr_30750 = state_30654;
(statearr_30750[(23)] = inst_30597__$1);

return statearr_30750;
})();
if(inst_30597__$1){
var statearr_30752_33687 = state_30654__$1;
(statearr_30752_33687[(1)] = (33));

} else {
var statearr_30758_33691 = state_30654__$1;
(statearr_30758_33691[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (25))){
var inst_30577 = (state_30654[(10)]);
var inst_30576 = (state_30654[(20)]);
var inst_30579 = (inst_30577 < inst_30576);
var inst_30580 = inst_30579;
var state_30654__$1 = state_30654;
if(cljs.core.truth_(inst_30580)){
var statearr_30763_33696 = state_30654__$1;
(statearr_30763_33696[(1)] = (27));

} else {
var statearr_30764_33697 = state_30654__$1;
(statearr_30764_33697[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (34))){
var state_30654__$1 = state_30654;
var statearr_30765_33698 = state_30654__$1;
(statearr_30765_33698[(2)] = null);

(statearr_30765_33698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (17))){
var state_30654__$1 = state_30654;
var statearr_30770_33699 = state_30654__$1;
(statearr_30770_33699[(2)] = null);

(statearr_30770_33699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (3))){
var inst_30650 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30654__$1,inst_30650);
} else {
if((state_val_30656 === (12))){
var inst_30558 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30771_33706 = state_30654__$1;
(statearr_30771_33706[(2)] = inst_30558);

(statearr_30771_33706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (2))){
var state_30654__$1 = state_30654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30654__$1,(4),ch);
} else {
if((state_val_30656 === (23))){
var state_30654__$1 = state_30654;
var statearr_30774_33707 = state_30654__$1;
(statearr_30774_33707[(2)] = null);

(statearr_30774_33707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (35))){
var inst_30634 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30775_33708 = state_30654__$1;
(statearr_30775_33708[(2)] = inst_30634);

(statearr_30775_33708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (19))){
var inst_30526 = (state_30654[(7)]);
var inst_30534 = cljs.core.chunk_first(inst_30526);
var inst_30535 = cljs.core.chunk_rest(inst_30526);
var inst_30536 = cljs.core.count(inst_30534);
var inst_30497 = inst_30535;
var inst_30498 = inst_30534;
var inst_30499 = inst_30536;
var inst_30500 = (0);
var state_30654__$1 = (function (){var statearr_30776 = state_30654;
(statearr_30776[(13)] = inst_30499);

(statearr_30776[(14)] = inst_30497);

(statearr_30776[(15)] = inst_30498);

(statearr_30776[(16)] = inst_30500);

return statearr_30776;
})();
var statearr_30777_33709 = state_30654__$1;
(statearr_30777_33709[(2)] = null);

(statearr_30777_33709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (11))){
var inst_30497 = (state_30654[(14)]);
var inst_30526 = (state_30654[(7)]);
var inst_30526__$1 = cljs.core.seq(inst_30497);
var state_30654__$1 = (function (){var statearr_30778 = state_30654;
(statearr_30778[(7)] = inst_30526__$1);

return statearr_30778;
})();
if(inst_30526__$1){
var statearr_30779_33710 = state_30654__$1;
(statearr_30779_33710[(1)] = (16));

} else {
var statearr_30780_33711 = state_30654__$1;
(statearr_30780_33711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (9))){
var inst_30560 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30783_33715 = state_30654__$1;
(statearr_30783_33715[(2)] = inst_30560);

(statearr_30783_33715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (5))){
var inst_30495 = cljs.core.deref(cs);
var inst_30496 = cljs.core.seq(inst_30495);
var inst_30497 = inst_30496;
var inst_30498 = null;
var inst_30499 = (0);
var inst_30500 = (0);
var state_30654__$1 = (function (){var statearr_30794 = state_30654;
(statearr_30794[(13)] = inst_30499);

(statearr_30794[(14)] = inst_30497);

(statearr_30794[(15)] = inst_30498);

(statearr_30794[(16)] = inst_30500);

return statearr_30794;
})();
var statearr_30796_33716 = state_30654__$1;
(statearr_30796_33716[(2)] = null);

(statearr_30796_33716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (14))){
var state_30654__$1 = state_30654;
var statearr_30801_33717 = state_30654__$1;
(statearr_30801_33717[(2)] = null);

(statearr_30801_33717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (45))){
var inst_30642 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30802_33718 = state_30654__$1;
(statearr_30802_33718[(2)] = inst_30642);

(statearr_30802_33718[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (26))){
var inst_30563 = (state_30654[(27)]);
var inst_30638 = (state_30654[(2)]);
var inst_30639 = cljs.core.seq(inst_30563);
var state_30654__$1 = (function (){var statearr_30803 = state_30654;
(statearr_30803[(29)] = inst_30638);

return statearr_30803;
})();
if(inst_30639){
var statearr_30808_33719 = state_30654__$1;
(statearr_30808_33719[(1)] = (42));

} else {
var statearr_30809_33720 = state_30654__$1;
(statearr_30809_33720[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (16))){
var inst_30526 = (state_30654[(7)]);
var inst_30532 = cljs.core.chunked_seq_QMARK_(inst_30526);
var state_30654__$1 = state_30654;
if(inst_30532){
var statearr_30812_33721 = state_30654__$1;
(statearr_30812_33721[(1)] = (19));

} else {
var statearr_30813_33722 = state_30654__$1;
(statearr_30813_33722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (38))){
var inst_30631 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30814_33723 = state_30654__$1;
(statearr_30814_33723[(2)] = inst_30631);

(statearr_30814_33723[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (30))){
var state_30654__$1 = state_30654;
var statearr_30819_33724 = state_30654__$1;
(statearr_30819_33724[(2)] = null);

(statearr_30819_33724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (10))){
var inst_30498 = (state_30654[(15)]);
var inst_30500 = (state_30654[(16)]);
var inst_30508 = cljs.core._nth(inst_30498,inst_30500);
var inst_30509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30508,(0),null);
var inst_30510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30508,(1),null);
var state_30654__$1 = (function (){var statearr_30820 = state_30654;
(statearr_30820[(24)] = inst_30509);

return statearr_30820;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30821_33731 = state_30654__$1;
(statearr_30821_33731[(1)] = (13));

} else {
var statearr_30822_33732 = state_30654__$1;
(statearr_30822_33732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (18))){
var inst_30556 = (state_30654[(2)]);
var state_30654__$1 = state_30654;
var statearr_30823_33733 = state_30654__$1;
(statearr_30823_33733[(2)] = inst_30556);

(statearr_30823_33733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (42))){
var state_30654__$1 = state_30654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30654__$1,(45),dchan);
} else {
if((state_val_30656 === (37))){
var inst_30597 = (state_30654[(23)]);
var inst_30488 = (state_30654[(9)]);
var inst_30617 = (state_30654[(22)]);
var inst_30617__$1 = cljs.core.first(inst_30597);
var inst_30618 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30617__$1,inst_30488,done);
var state_30654__$1 = (function (){var statearr_30826 = state_30654;
(statearr_30826[(22)] = inst_30617__$1);

return statearr_30826;
})();
if(cljs.core.truth_(inst_30618)){
var statearr_30827_33734 = state_30654__$1;
(statearr_30827_33734[(1)] = (39));

} else {
var statearr_30828_33735 = state_30654__$1;
(statearr_30828_33735[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30656 === (8))){
var inst_30499 = (state_30654[(13)]);
var inst_30500 = (state_30654[(16)]);
var inst_30502 = (inst_30500 < inst_30499);
var inst_30503 = inst_30502;
var state_30654__$1 = state_30654;
if(cljs.core.truth_(inst_30503)){
var statearr_30835_33736 = state_30654__$1;
(statearr_30835_33736[(1)] = (10));

} else {
var statearr_30836_33737 = state_30654__$1;
(statearr_30836_33737[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28703__auto__ = null;
var cljs$core$async$mult_$_state_machine__28703__auto____0 = (function (){
var statearr_30841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30841[(0)] = cljs$core$async$mult_$_state_machine__28703__auto__);

(statearr_30841[(1)] = (1));

return statearr_30841;
});
var cljs$core$async$mult_$_state_machine__28703__auto____1 = (function (state_30654){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_30654);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e30843){var ex__28706__auto__ = e30843;
var statearr_30844_33738 = state_30654;
(statearr_30844_33738[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_30654[(4)]))){
var statearr_30849_33739 = state_30654;
(statearr_30849_33739[(1)] = cljs.core.first((state_30654[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33740 = state_30654;
state_30654 = G__33740;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28703__auto__ = function(state_30654){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28703__auto____1.call(this,state_30654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28703__auto____0;
cljs$core$async$mult_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28703__auto____1;
return cljs$core$async$mult_$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_30850 = f__29063__auto__();
(statearr_30850[(6)] = c__29062__auto___33624);

return statearr_30850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30856 = arguments.length;
switch (G__30856) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33748 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33748(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33749 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33749(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33750 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33750(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33752 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33752(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33759 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33759(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33763 = arguments.length;
var i__4865__auto___33764 = (0);
while(true){
if((i__4865__auto___33764 < len__4864__auto___33763)){
args__4870__auto__.push((arguments[i__4865__auto___33764]));

var G__33765 = (i__4865__auto___33764 + (1));
i__4865__auto___33764 = G__33765;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30949){
var map__30950 = p__30949;
var map__30950__$1 = cljs.core.__destructure_map(map__30950);
var opts = map__30950__$1;
var statearr_30953_33766 = state;
(statearr_30953_33766[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30958_33767 = state;
(statearr_30958_33767[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30960_33768 = state;
(statearr_30960_33768[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30936){
var G__30937 = cljs.core.first(seq30936);
var seq30936__$1 = cljs.core.next(seq30936);
var G__30939 = cljs.core.first(seq30936__$1);
var seq30936__$2 = cljs.core.next(seq30936__$1);
var G__30940 = cljs.core.first(seq30936__$2);
var seq30936__$3 = cljs.core.next(seq30936__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30937,G__30939,G__30940,seq30936__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30982 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30983){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30983 = meta30983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30984,meta30983__$1){
var self__ = this;
var _30984__$1 = this;
return (new cljs.core.async.t_cljs$core$async30982(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30983__$1));
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30984){
var self__ = this;
var _30984__$1 = this;
return self__.meta30983;
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30982.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30983","meta30983",1024552654,null)], null);
}));

(cljs.core.async.t_cljs$core$async30982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30982");

(cljs.core.async.t_cljs$core$async30982.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30982.
 */
cljs.core.async.__GT_t_cljs$core$async30982 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30982(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30983){
return (new cljs.core.async.t_cljs$core$async30982(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30983));
});

}

return (new cljs.core.async.t_cljs$core$async30982(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29062__auto___33772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31086 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31086)){
var statearr_31158_33774 = state_31143__$1;
(statearr_31158_33774[(1)] = (8));

} else {
var statearr_31161_33775 = state_31143__$1;
(statearr_31161_33775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (20))){
var inst_31074 = (state_31143[(7)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31143__$1,(23),out,inst_31074);
} else {
if((state_val_31144 === (1))){
var inst_31047 = calc_state();
var inst_31048 = cljs.core.__destructure_map(inst_31047);
var inst_31049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31048,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31048,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31048,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31054 = inst_31047;
var state_31143__$1 = (function (){var statearr_31165 = state_31143;
(statearr_31165[(8)] = inst_31050);

(statearr_31165[(9)] = inst_31052);

(statearr_31165[(10)] = inst_31049);

(statearr_31165[(11)] = inst_31054);

return statearr_31165;
})();
var statearr_31167_33776 = state_31143__$1;
(statearr_31167_33776[(2)] = null);

(statearr_31167_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (24))){
var inst_31058 = (state_31143[(12)]);
var inst_31054 = inst_31058;
var state_31143__$1 = (function (){var statearr_31169 = state_31143;
(statearr_31169[(11)] = inst_31054);

return statearr_31169;
})();
var statearr_31171_33778 = state_31143__$1;
(statearr_31171_33778[(2)] = null);

(statearr_31171_33778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31074 = (state_31143[(7)]);
var inst_31080 = (state_31143[(13)]);
var inst_31071 = (state_31143[(2)]);
var inst_31074__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31071,(0),null);
var inst_31075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31071,(1),null);
var inst_31080__$1 = (inst_31074__$1 == null);
var state_31143__$1 = (function (){var statearr_31173 = state_31143;
(statearr_31173[(7)] = inst_31074__$1);

(statearr_31173[(14)] = inst_31075);

(statearr_31173[(13)] = inst_31080__$1);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31080__$1)){
var statearr_31175_33779 = state_31143__$1;
(statearr_31175_33779[(1)] = (5));

} else {
var statearr_31177_33780 = state_31143__$1;
(statearr_31177_33780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (15))){
var inst_31107 = (state_31143[(15)]);
var inst_31059 = (state_31143[(16)]);
var inst_31107__$1 = cljs.core.empty_QMARK_(inst_31059);
var state_31143__$1 = (function (){var statearr_31181 = state_31143;
(statearr_31181[(15)] = inst_31107__$1);

return statearr_31181;
})();
if(inst_31107__$1){
var statearr_31182_33785 = state_31143__$1;
(statearr_31182_33785[(1)] = (17));

} else {
var statearr_31183_33786 = state_31143__$1;
(statearr_31183_33786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (21))){
var inst_31058 = (state_31143[(12)]);
var inst_31054 = inst_31058;
var state_31143__$1 = (function (){var statearr_31185 = state_31143;
(statearr_31185[(11)] = inst_31054);

return statearr_31185;
})();
var statearr_31189_33787 = state_31143__$1;
(statearr_31189_33787[(2)] = null);

(statearr_31189_33787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var inst_31095 = (state_31143[(2)]);
var inst_31096 = calc_state();
var inst_31054 = inst_31096;
var state_31143__$1 = (function (){var statearr_31193 = state_31143;
(statearr_31193[(17)] = inst_31095);

(statearr_31193[(11)] = inst_31054);

return statearr_31193;
})();
var statearr_31198_33792 = state_31143__$1;
(statearr_31198_33792[(2)] = null);

(statearr_31198_33792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (22))){
var inst_31129 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31201_33793 = state_31143__$1;
(statearr_31201_33793[(2)] = inst_31129);

(statearr_31201_33793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31075 = (state_31143[(14)]);
var inst_31084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31075,change);
var state_31143__$1 = state_31143;
var statearr_31205_33794 = state_31143__$1;
(statearr_31205_33794[(2)] = inst_31084);

(statearr_31205_33794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (25))){
var state_31143__$1 = state_31143;
var statearr_31209_33799 = state_31143__$1;
(statearr_31209_33799[(2)] = null);

(statearr_31209_33799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (17))){
var inst_31060 = (state_31143[(18)]);
var inst_31075 = (state_31143[(14)]);
var inst_31110 = (inst_31060.cljs$core$IFn$_invoke$arity$1 ? inst_31060.cljs$core$IFn$_invoke$arity$1(inst_31075) : inst_31060.call(null,inst_31075));
var inst_31111 = cljs.core.not(inst_31110);
var state_31143__$1 = state_31143;
var statearr_31214_33800 = state_31143__$1;
(statearr_31214_33800[(2)] = inst_31111);

(statearr_31214_33800[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (3))){
var inst_31133 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31143__$1,inst_31133);
} else {
if((state_val_31144 === (12))){
var state_31143__$1 = state_31143;
var statearr_31218_33801 = state_31143__$1;
(statearr_31218_33801[(2)] = null);

(statearr_31218_33801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var inst_31058 = (state_31143[(12)]);
var inst_31054 = (state_31143[(11)]);
var inst_31058__$1 = cljs.core.__destructure_map(inst_31054);
var inst_31059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31058__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31058__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31058__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31143__$1 = (function (){var statearr_31222 = state_31143;
(statearr_31222[(12)] = inst_31058__$1);

(statearr_31222[(18)] = inst_31060);

(statearr_31222[(16)] = inst_31059);

return statearr_31222;
})();
return cljs.core.async.ioc_alts_BANG_(state_31143__$1,(4),inst_31062);
} else {
if((state_val_31144 === (23))){
var inst_31119 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31119)){
var statearr_31228_33802 = state_31143__$1;
(statearr_31228_33802[(1)] = (24));

} else {
var statearr_31230_33803 = state_31143__$1;
(statearr_31230_33803[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (19))){
var inst_31114 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31233_33804 = state_31143__$1;
(statearr_31233_33804[(2)] = inst_31114);

(statearr_31233_33804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (11))){
var inst_31075 = (state_31143[(14)]);
var inst_31092 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31075);
var state_31143__$1 = state_31143;
var statearr_31236_33805 = state_31143__$1;
(statearr_31236_33805[(2)] = inst_31092);

(statearr_31236_33805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var inst_31059 = (state_31143[(16)]);
var inst_31099 = (state_31143[(19)]);
var inst_31075 = (state_31143[(14)]);
var inst_31099__$1 = (inst_31059.cljs$core$IFn$_invoke$arity$1 ? inst_31059.cljs$core$IFn$_invoke$arity$1(inst_31075) : inst_31059.call(null,inst_31075));
var state_31143__$1 = (function (){var statearr_31241 = state_31143;
(statearr_31241[(19)] = inst_31099__$1);

return statearr_31241;
})();
if(cljs.core.truth_(inst_31099__$1)){
var statearr_31243_33806 = state_31143__$1;
(statearr_31243_33806[(1)] = (14));

} else {
var statearr_31244_33808 = state_31143__$1;
(statearr_31244_33808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var inst_31080 = (state_31143[(13)]);
var state_31143__$1 = state_31143;
var statearr_31248_33809 = state_31143__$1;
(statearr_31248_33809[(2)] = inst_31080);

(statearr_31248_33809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var inst_31099 = (state_31143[(19)]);
var state_31143__$1 = state_31143;
var statearr_31252_33813 = state_31143__$1;
(statearr_31252_33813[(2)] = inst_31099);

(statearr_31252_33813[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (26))){
var inst_31124 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31257_33814 = state_31143__$1;
(statearr_31257_33814[(2)] = inst_31124);

(statearr_31257_33814[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (16))){
var inst_31116 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31116)){
var statearr_31266_33815 = state_31143__$1;
(statearr_31266_33815[(1)] = (20));

} else {
var statearr_31267_33816 = state_31143__$1;
(statearr_31267_33816[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31131 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31268_33817 = state_31143__$1;
(statearr_31268_33817[(2)] = inst_31131);

(statearr_31268_33817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (18))){
var inst_31107 = (state_31143[(15)]);
var state_31143__$1 = state_31143;
var statearr_31269_33818 = state_31143__$1;
(statearr_31269_33818[(2)] = inst_31107);

(statearr_31269_33818[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31074 = (state_31143[(7)]);
var inst_31089 = (inst_31074 == null);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31089)){
var statearr_31270_33819 = state_31143__$1;
(statearr_31270_33819[(1)] = (11));

} else {
var statearr_31271_33820 = state_31143__$1;
(statearr_31271_33820[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__28703__auto__ = null;
var cljs$core$async$mix_$_state_machine__28703__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31282[(0)] = cljs$core$async$mix_$_state_machine__28703__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var cljs$core$async$mix_$_state_machine__28703__auto____1 = (function (state_31143){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_31143);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e31283){var ex__28706__auto__ = e31283;
var statearr_31284_33821 = state_31143;
(statearr_31284_33821[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_31143[(4)]))){
var statearr_31285_33823 = state_31143;
(statearr_31285_33823[(1)] = cljs.core.first((state_31143[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33824 = state_31143;
state_31143 = G__33824;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28703__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28703__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28703__auto____0;
cljs$core$async$mix_$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28703__auto____1;
return cljs$core$async$mix_$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_31286 = f__29063__auto__();
(statearr_31286[(6)] = c__29062__auto___33772);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33826 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33826(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33827 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33827(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33828 = (function() {
var G__33829 = null;
var G__33829__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33829__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33829 = function(p,v){
switch(arguments.length){
case 1:
return G__33829__1.call(this,p);
case 2:
return G__33829__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33829.cljs$core$IFn$_invoke$arity$1 = G__33829__1;
G__33829.cljs$core$IFn$_invoke$arity$2 = G__33829__2;
return G__33829;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31367 = arguments.length;
switch (G__31367) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33828(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33828(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31400 = arguments.length;
switch (G__31400) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31390_SHARP_){
if(cljs.core.truth_((p1__31390_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31390_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31390_SHARP_.call(null,topic)))){
return p1__31390_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31390_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31421 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31422){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31422 = meta31422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31423,meta31422__$1){
var self__ = this;
var _31423__$1 = this;
return (new cljs.core.async.t_cljs$core$async31421(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31422__$1));
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31423){
var self__ = this;
var _31423__$1 = this;
return self__.meta31422;
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31422","meta31422",787320076,null)], null);
}));

(cljs.core.async.t_cljs$core$async31421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31421");

(cljs.core.async.t_cljs$core$async31421.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31421.
 */
cljs.core.async.__GT_t_cljs$core$async31421 = (function cljs$core$async$__GT_t_cljs$core$async31421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31422){
return (new cljs.core.async.t_cljs$core$async31421(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31422));
});

}

return (new cljs.core.async.t_cljs$core$async31421(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29062__auto___33834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_31575){
var state_val_31576 = (state_31575[(1)]);
if((state_val_31576 === (7))){
var inst_31569 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31585_33835 = state_31575__$1;
(statearr_31585_33835[(2)] = inst_31569);

(statearr_31585_33835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (20))){
var state_31575__$1 = state_31575;
var statearr_31594_33836 = state_31575__$1;
(statearr_31594_33836[(2)] = null);

(statearr_31594_33836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (1))){
var state_31575__$1 = state_31575;
var statearr_31602_33837 = state_31575__$1;
(statearr_31602_33837[(2)] = null);

(statearr_31602_33837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (24))){
var inst_31547 = (state_31575[(7)]);
var inst_31560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31547);
var state_31575__$1 = state_31575;
var statearr_31622_33838 = state_31575__$1;
(statearr_31622_33838[(2)] = inst_31560);

(statearr_31622_33838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (4))){
var inst_31485 = (state_31575[(8)]);
var inst_31485__$1 = (state_31575[(2)]);
var inst_31487 = (inst_31485__$1 == null);
var state_31575__$1 = (function (){var statearr_31626 = state_31575;
(statearr_31626[(8)] = inst_31485__$1);

return statearr_31626;
})();
if(cljs.core.truth_(inst_31487)){
var statearr_31628_33839 = state_31575__$1;
(statearr_31628_33839[(1)] = (5));

} else {
var statearr_31631_33840 = state_31575__$1;
(statearr_31631_33840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (15))){
var inst_31537 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31632_33841 = state_31575__$1;
(statearr_31632_33841[(2)] = inst_31537);

(statearr_31632_33841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (21))){
var inst_31565 = (state_31575[(2)]);
var state_31575__$1 = (function (){var statearr_31638 = state_31575;
(statearr_31638[(9)] = inst_31565);

return statearr_31638;
})();
var statearr_31640_33842 = state_31575__$1;
(statearr_31640_33842[(2)] = null);

(statearr_31640_33842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (13))){
var inst_31511 = (state_31575[(10)]);
var inst_31518 = cljs.core.chunked_seq_QMARK_(inst_31511);
var state_31575__$1 = state_31575;
if(inst_31518){
var statearr_31643_33843 = state_31575__$1;
(statearr_31643_33843[(1)] = (16));

} else {
var statearr_31646_33844 = state_31575__$1;
(statearr_31646_33844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (22))){
var inst_31557 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
if(cljs.core.truth_(inst_31557)){
var statearr_31649_33845 = state_31575__$1;
(statearr_31649_33845[(1)] = (23));

} else {
var statearr_31655_33846 = state_31575__$1;
(statearr_31655_33846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (6))){
var inst_31551 = (state_31575[(11)]);
var inst_31485 = (state_31575[(8)]);
var inst_31547 = (state_31575[(7)]);
var inst_31547__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31485) : topic_fn.call(null,inst_31485));
var inst_31550 = cljs.core.deref(mults);
var inst_31551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31550,inst_31547__$1);
var state_31575__$1 = (function (){var statearr_31668 = state_31575;
(statearr_31668[(11)] = inst_31551__$1);

(statearr_31668[(7)] = inst_31547__$1);

return statearr_31668;
})();
if(cljs.core.truth_(inst_31551__$1)){
var statearr_31672_33847 = state_31575__$1;
(statearr_31672_33847[(1)] = (19));

} else {
var statearr_31674_33848 = state_31575__$1;
(statearr_31674_33848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (25))){
var inst_31562 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31679_33849 = state_31575__$1;
(statearr_31679_33849[(2)] = inst_31562);

(statearr_31679_33849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (17))){
var inst_31511 = (state_31575[(10)]);
var inst_31526 = cljs.core.first(inst_31511);
var inst_31527 = cljs.core.async.muxch_STAR_(inst_31526);
var inst_31528 = cljs.core.async.close_BANG_(inst_31527);
var inst_31529 = cljs.core.next(inst_31511);
var inst_31497 = inst_31529;
var inst_31498 = null;
var inst_31499 = (0);
var inst_31500 = (0);
var state_31575__$1 = (function (){var statearr_31683 = state_31575;
(statearr_31683[(12)] = inst_31528);

(statearr_31683[(13)] = inst_31500);

(statearr_31683[(14)] = inst_31499);

(statearr_31683[(15)] = inst_31497);

(statearr_31683[(16)] = inst_31498);

return statearr_31683;
})();
var statearr_31684_33854 = state_31575__$1;
(statearr_31684_33854[(2)] = null);

(statearr_31684_33854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (3))){
var inst_31571 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31575__$1,inst_31571);
} else {
if((state_val_31576 === (12))){
var inst_31539 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31689_33856 = state_31575__$1;
(statearr_31689_33856[(2)] = inst_31539);

(statearr_31689_33856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (2))){
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31575__$1,(4),ch);
} else {
if((state_val_31576 === (23))){
var state_31575__$1 = state_31575;
var statearr_31690_33857 = state_31575__$1;
(statearr_31690_33857[(2)] = null);

(statearr_31690_33857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (19))){
var inst_31551 = (state_31575[(11)]);
var inst_31485 = (state_31575[(8)]);
var inst_31555 = cljs.core.async.muxch_STAR_(inst_31551);
var state_31575__$1 = state_31575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31575__$1,(22),inst_31555,inst_31485);
} else {
if((state_val_31576 === (11))){
var inst_31511 = (state_31575[(10)]);
var inst_31497 = (state_31575[(15)]);
var inst_31511__$1 = cljs.core.seq(inst_31497);
var state_31575__$1 = (function (){var statearr_31699 = state_31575;
(statearr_31699[(10)] = inst_31511__$1);

return statearr_31699;
})();
if(inst_31511__$1){
var statearr_31708_33861 = state_31575__$1;
(statearr_31708_33861[(1)] = (13));

} else {
var statearr_31710_33862 = state_31575__$1;
(statearr_31710_33862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (9))){
var inst_31541 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31721_33863 = state_31575__$1;
(statearr_31721_33863[(2)] = inst_31541);

(statearr_31721_33863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (5))){
var inst_31493 = cljs.core.deref(mults);
var inst_31494 = cljs.core.vals(inst_31493);
var inst_31495 = cljs.core.seq(inst_31494);
var inst_31497 = inst_31495;
var inst_31498 = null;
var inst_31499 = (0);
var inst_31500 = (0);
var state_31575__$1 = (function (){var statearr_31723 = state_31575;
(statearr_31723[(13)] = inst_31500);

(statearr_31723[(14)] = inst_31499);

(statearr_31723[(15)] = inst_31497);

(statearr_31723[(16)] = inst_31498);

return statearr_31723;
})();
var statearr_31724_33868 = state_31575__$1;
(statearr_31724_33868[(2)] = null);

(statearr_31724_33868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (14))){
var state_31575__$1 = state_31575;
var statearr_31728_33869 = state_31575__$1;
(statearr_31728_33869[(2)] = null);

(statearr_31728_33869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (16))){
var inst_31511 = (state_31575[(10)]);
var inst_31521 = cljs.core.chunk_first(inst_31511);
var inst_31522 = cljs.core.chunk_rest(inst_31511);
var inst_31523 = cljs.core.count(inst_31521);
var inst_31497 = inst_31522;
var inst_31498 = inst_31521;
var inst_31499 = inst_31523;
var inst_31500 = (0);
var state_31575__$1 = (function (){var statearr_31729 = state_31575;
(statearr_31729[(13)] = inst_31500);

(statearr_31729[(14)] = inst_31499);

(statearr_31729[(15)] = inst_31497);

(statearr_31729[(16)] = inst_31498);

return statearr_31729;
})();
var statearr_31730_33870 = state_31575__$1;
(statearr_31730_33870[(2)] = null);

(statearr_31730_33870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (10))){
var inst_31500 = (state_31575[(13)]);
var inst_31499 = (state_31575[(14)]);
var inst_31497 = (state_31575[(15)]);
var inst_31498 = (state_31575[(16)]);
var inst_31505 = cljs.core._nth(inst_31498,inst_31500);
var inst_31506 = cljs.core.async.muxch_STAR_(inst_31505);
var inst_31507 = cljs.core.async.close_BANG_(inst_31506);
var inst_31508 = (inst_31500 + (1));
var tmp31725 = inst_31499;
var tmp31726 = inst_31497;
var tmp31727 = inst_31498;
var inst_31497__$1 = tmp31726;
var inst_31498__$1 = tmp31727;
var inst_31499__$1 = tmp31725;
var inst_31500__$1 = inst_31508;
var state_31575__$1 = (function (){var statearr_31731 = state_31575;
(statearr_31731[(13)] = inst_31500__$1);

(statearr_31731[(14)] = inst_31499__$1);

(statearr_31731[(17)] = inst_31507);

(statearr_31731[(15)] = inst_31497__$1);

(statearr_31731[(16)] = inst_31498__$1);

return statearr_31731;
})();
var statearr_31735_33871 = state_31575__$1;
(statearr_31735_33871[(2)] = null);

(statearr_31735_33871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (18))){
var inst_31532 = (state_31575[(2)]);
var state_31575__$1 = state_31575;
var statearr_31738_33872 = state_31575__$1;
(statearr_31738_33872[(2)] = inst_31532);

(statearr_31738_33872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31576 === (8))){
var inst_31500 = (state_31575[(13)]);
var inst_31499 = (state_31575[(14)]);
var inst_31502 = (inst_31500 < inst_31499);
var inst_31503 = inst_31502;
var state_31575__$1 = state_31575;
if(cljs.core.truth_(inst_31503)){
var statearr_31740_33873 = state_31575__$1;
(statearr_31740_33873[(1)] = (10));

} else {
var statearr_31741_33874 = state_31575__$1;
(statearr_31741_33874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_31745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31745[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_31745[(1)] = (1));

return statearr_31745;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_31575){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_31575);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e31746){var ex__28706__auto__ = e31746;
var statearr_31747_33875 = state_31575;
(statearr_31747_33875[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_31575[(4)]))){
var statearr_31748_33877 = state_31575;
(statearr_31748_33877[(1)] = cljs.core.first((state_31575[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33878 = state_31575;
state_31575 = G__33878;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_31575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_31575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_31752 = f__29063__auto__();
(statearr_31752[(6)] = c__29062__auto___33834);

return statearr_31752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31754 = arguments.length;
switch (G__31754) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31771 = arguments.length;
switch (G__31771) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31775 = arguments.length;
switch (G__31775) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29062__auto___33892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_31847){
var state_val_31848 = (state_31847[(1)]);
if((state_val_31848 === (7))){
var state_31847__$1 = state_31847;
var statearr_31856_33896 = state_31847__$1;
(statearr_31856_33896[(2)] = null);

(statearr_31856_33896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (1))){
var state_31847__$1 = state_31847;
var statearr_31857_33897 = state_31847__$1;
(statearr_31857_33897[(2)] = null);

(statearr_31857_33897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (4))){
var inst_31802 = (state_31847[(7)]);
var inst_31801 = (state_31847[(8)]);
var inst_31806 = (inst_31802 < inst_31801);
var state_31847__$1 = state_31847;
if(cljs.core.truth_(inst_31806)){
var statearr_31866_33898 = state_31847__$1;
(statearr_31866_33898[(1)] = (6));

} else {
var statearr_31867_33899 = state_31847__$1;
(statearr_31867_33899[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (15))){
var inst_31832 = (state_31847[(9)]);
var inst_31838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31832);
var state_31847__$1 = state_31847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31847__$1,(17),out,inst_31838);
} else {
if((state_val_31848 === (13))){
var inst_31832 = (state_31847[(9)]);
var inst_31832__$1 = (state_31847[(2)]);
var inst_31833 = cljs.core.some(cljs.core.nil_QMARK_,inst_31832__$1);
var state_31847__$1 = (function (){var statearr_31874 = state_31847;
(statearr_31874[(9)] = inst_31832__$1);

return statearr_31874;
})();
if(cljs.core.truth_(inst_31833)){
var statearr_31875_33900 = state_31847__$1;
(statearr_31875_33900[(1)] = (14));

} else {
var statearr_31876_33904 = state_31847__$1;
(statearr_31876_33904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (6))){
var state_31847__$1 = state_31847;
var statearr_31877_33905 = state_31847__$1;
(statearr_31877_33905[(2)] = null);

(statearr_31877_33905[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (17))){
var inst_31840 = (state_31847[(2)]);
var state_31847__$1 = (function (){var statearr_31881 = state_31847;
(statearr_31881[(10)] = inst_31840);

return statearr_31881;
})();
var statearr_31882_33909 = state_31847__$1;
(statearr_31882_33909[(2)] = null);

(statearr_31882_33909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (3))){
var inst_31845 = (state_31847[(2)]);
var state_31847__$1 = state_31847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31847__$1,inst_31845);
} else {
if((state_val_31848 === (12))){
var _ = (function (){var statearr_31883 = state_31847;
(statearr_31883[(4)] = cljs.core.rest((state_31847[(4)])));

return statearr_31883;
})();
var state_31847__$1 = state_31847;
var ex31880 = (state_31847__$1[(2)]);
var statearr_31884_33910 = state_31847__$1;
(statearr_31884_33910[(5)] = ex31880);


if((ex31880 instanceof Object)){
var statearr_31886_33911 = state_31847__$1;
(statearr_31886_33911[(1)] = (11));

(statearr_31886_33911[(5)] = null);

} else {
throw ex31880;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (2))){
var inst_31799 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31801 = cnt;
var inst_31802 = (0);
var state_31847__$1 = (function (){var statearr_31897 = state_31847;
(statearr_31897[(7)] = inst_31802);

(statearr_31897[(8)] = inst_31801);

(statearr_31897[(11)] = inst_31799);

return statearr_31897;
})();
var statearr_31899_33916 = state_31847__$1;
(statearr_31899_33916[(2)] = null);

(statearr_31899_33916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (11))){
var inst_31810 = (state_31847[(2)]);
var inst_31811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31847__$1 = (function (){var statearr_31902 = state_31847;
(statearr_31902[(12)] = inst_31810);

return statearr_31902;
})();
var statearr_31903_33917 = state_31847__$1;
(statearr_31903_33917[(2)] = inst_31811);

(statearr_31903_33917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (9))){
var inst_31802 = (state_31847[(7)]);
var _ = (function (){var statearr_31907 = state_31847;
(statearr_31907[(4)] = cljs.core.cons((12),(state_31847[(4)])));

return statearr_31907;
})();
var inst_31817 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31802) : chs__$1.call(null,inst_31802));
var inst_31818 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31802) : done.call(null,inst_31802));
var inst_31819 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31817,inst_31818);
var ___$1 = (function (){var statearr_31909 = state_31847;
(statearr_31909[(4)] = cljs.core.rest((state_31847[(4)])));

return statearr_31909;
})();
var state_31847__$1 = state_31847;
var statearr_31913_33918 = state_31847__$1;
(statearr_31913_33918[(2)] = inst_31819);

(statearr_31913_33918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (5))){
var inst_31830 = (state_31847[(2)]);
var state_31847__$1 = (function (){var statearr_31915 = state_31847;
(statearr_31915[(13)] = inst_31830);

return statearr_31915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31847__$1,(13),dchan);
} else {
if((state_val_31848 === (14))){
var inst_31835 = cljs.core.async.close_BANG_(out);
var state_31847__$1 = state_31847;
var statearr_31917_33919 = state_31847__$1;
(statearr_31917_33919[(2)] = inst_31835);

(statearr_31917_33919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (16))){
var inst_31843 = (state_31847[(2)]);
var state_31847__$1 = state_31847;
var statearr_31921_33920 = state_31847__$1;
(statearr_31921_33920[(2)] = inst_31843);

(statearr_31921_33920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (10))){
var inst_31802 = (state_31847[(7)]);
var inst_31822 = (state_31847[(2)]);
var inst_31824 = (inst_31802 + (1));
var inst_31802__$1 = inst_31824;
var state_31847__$1 = (function (){var statearr_31924 = state_31847;
(statearr_31924[(14)] = inst_31822);

(statearr_31924[(7)] = inst_31802__$1);

return statearr_31924;
})();
var statearr_31928_33921 = state_31847__$1;
(statearr_31928_33921[(2)] = null);

(statearr_31928_33921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31848 === (8))){
var inst_31828 = (state_31847[(2)]);
var state_31847__$1 = state_31847;
var statearr_31930_33922 = state_31847__$1;
(statearr_31930_33922[(2)] = inst_31828);

(statearr_31930_33922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_31939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31939[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_31939[(1)] = (1));

return statearr_31939;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_31847){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_31847);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e31941){var ex__28706__auto__ = e31941;
var statearr_31942_33925 = state_31847;
(statearr_31942_33925[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_31847[(4)]))){
var statearr_31943_33926 = state_31847;
(statearr_31943_33926[(1)] = cljs.core.first((state_31847[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33927 = state_31847;
state_31847 = G__33927;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_31847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_31847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_31947 = f__29063__auto__();
(statearr_31947[(6)] = c__29062__auto___33892);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31958 = arguments.length;
switch (G__31958) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___33929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32023){
var state_val_32024 = (state_32023[(1)]);
if((state_val_32024 === (7))){
var inst_31992 = (state_32023[(7)]);
var inst_31993 = (state_32023[(8)]);
var inst_31992__$1 = (state_32023[(2)]);
var inst_31993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31992__$1,(0),null);
var inst_31994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31992__$1,(1),null);
var inst_31995 = (inst_31993__$1 == null);
var state_32023__$1 = (function (){var statearr_32045 = state_32023;
(statearr_32045[(7)] = inst_31992__$1);

(statearr_32045[(8)] = inst_31993__$1);

(statearr_32045[(9)] = inst_31994);

return statearr_32045;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32047_33930 = state_32023__$1;
(statearr_32047_33930[(1)] = (8));

} else {
var statearr_32048_33931 = state_32023__$1;
(statearr_32048_33931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (1))){
var inst_31974 = cljs.core.vec(chs);
var inst_31976 = inst_31974;
var state_32023__$1 = (function (){var statearr_32053 = state_32023;
(statearr_32053[(10)] = inst_31976);

return statearr_32053;
})();
var statearr_32055_33932 = state_32023__$1;
(statearr_32055_33932[(2)] = null);

(statearr_32055_33932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (4))){
var inst_31976 = (state_32023[(10)]);
var state_32023__$1 = state_32023;
return cljs.core.async.ioc_alts_BANG_(state_32023__$1,(7),inst_31976);
} else {
if((state_val_32024 === (6))){
var inst_32011 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32056_33933 = state_32023__$1;
(statearr_32056_33933[(2)] = inst_32011);

(statearr_32056_33933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (3))){
var inst_32013 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32023__$1,inst_32013);
} else {
if((state_val_32024 === (2))){
var inst_31976 = (state_32023[(10)]);
var inst_31984 = cljs.core.count(inst_31976);
var inst_31985 = (inst_31984 > (0));
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_31985)){
var statearr_32063_33934 = state_32023__$1;
(statearr_32063_33934[(1)] = (4));

} else {
var statearr_32064_33935 = state_32023__$1;
(statearr_32064_33935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (11))){
var inst_31976 = (state_32023[(10)]);
var inst_32004 = (state_32023[(2)]);
var tmp32058 = inst_31976;
var inst_31976__$1 = tmp32058;
var state_32023__$1 = (function (){var statearr_32065 = state_32023;
(statearr_32065[(11)] = inst_32004);

(statearr_32065[(10)] = inst_31976__$1);

return statearr_32065;
})();
var statearr_32066_33936 = state_32023__$1;
(statearr_32066_33936[(2)] = null);

(statearr_32066_33936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (9))){
var inst_31993 = (state_32023[(8)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32023__$1,(11),out,inst_31993);
} else {
if((state_val_32024 === (5))){
var inst_32009 = cljs.core.async.close_BANG_(out);
var state_32023__$1 = state_32023;
var statearr_32069_33937 = state_32023__$1;
(statearr_32069_33937[(2)] = inst_32009);

(statearr_32069_33937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (10))){
var inst_32007 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32070_33938 = state_32023__$1;
(statearr_32070_33938[(2)] = inst_32007);

(statearr_32070_33938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (8))){
var inst_31976 = (state_32023[(10)]);
var inst_31992 = (state_32023[(7)]);
var inst_31993 = (state_32023[(8)]);
var inst_31994 = (state_32023[(9)]);
var inst_31999 = (function (){var cs = inst_31976;
var vec__31987 = inst_31992;
var v = inst_31993;
var c = inst_31994;
return (function (p1__31952_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31952_SHARP_);
});
})();
var inst_32000 = cljs.core.filterv(inst_31999,inst_31976);
var inst_31976__$1 = inst_32000;
var state_32023__$1 = (function (){var statearr_32075 = state_32023;
(statearr_32075[(10)] = inst_31976__$1);

return statearr_32075;
})();
var statearr_32077_33939 = state_32023__$1;
(statearr_32077_33939[(2)] = null);

(statearr_32077_33939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_32081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32081[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_32081[(1)] = (1));

return statearr_32081;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32023){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32023);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32082){var ex__28706__auto__ = e32082;
var statearr_32083_33940 = state_32023;
(statearr_32083_33940[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32023[(4)]))){
var statearr_32086_33941 = state_32023;
(statearr_32086_33941[(1)] = cljs.core.first((state_32023[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33942 = state_32023;
state_32023 = G__33942;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32088 = f__29063__auto__();
(statearr_32088[(6)] = c__29062__auto___33929);

return statearr_32088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32094 = arguments.length;
switch (G__32094) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___33949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32145){
var state_val_32146 = (state_32145[(1)]);
if((state_val_32146 === (7))){
var inst_32121 = (state_32145[(7)]);
var inst_32121__$1 = (state_32145[(2)]);
var inst_32126 = (inst_32121__$1 == null);
var inst_32127 = cljs.core.not(inst_32126);
var state_32145__$1 = (function (){var statearr_32149 = state_32145;
(statearr_32149[(7)] = inst_32121__$1);

return statearr_32149;
})();
if(inst_32127){
var statearr_32153_33952 = state_32145__$1;
(statearr_32153_33952[(1)] = (8));

} else {
var statearr_32154_33953 = state_32145__$1;
(statearr_32154_33953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (1))){
var inst_32112 = (0);
var state_32145__$1 = (function (){var statearr_32155 = state_32145;
(statearr_32155[(8)] = inst_32112);

return statearr_32155;
})();
var statearr_32156_33954 = state_32145__$1;
(statearr_32156_33954[(2)] = null);

(statearr_32156_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (4))){
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32145__$1,(7),ch);
} else {
if((state_val_32146 === (6))){
var inst_32138 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32159_33955 = state_32145__$1;
(statearr_32159_33955[(2)] = inst_32138);

(statearr_32159_33955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (3))){
var inst_32140 = (state_32145[(2)]);
var inst_32141 = cljs.core.async.close_BANG_(out);
var state_32145__$1 = (function (){var statearr_32160 = state_32145;
(statearr_32160[(9)] = inst_32140);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32145__$1,inst_32141);
} else {
if((state_val_32146 === (2))){
var inst_32112 = (state_32145[(8)]);
var inst_32117 = (inst_32112 < n);
var state_32145__$1 = state_32145;
if(cljs.core.truth_(inst_32117)){
var statearr_32161_33956 = state_32145__$1;
(statearr_32161_33956[(1)] = (4));

} else {
var statearr_32162_33957 = state_32145__$1;
(statearr_32162_33957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (11))){
var inst_32112 = (state_32145[(8)]);
var inst_32130 = (state_32145[(2)]);
var inst_32131 = (inst_32112 + (1));
var inst_32112__$1 = inst_32131;
var state_32145__$1 = (function (){var statearr_32163 = state_32145;
(statearr_32163[(10)] = inst_32130);

(statearr_32163[(8)] = inst_32112__$1);

return statearr_32163;
})();
var statearr_32165_33962 = state_32145__$1;
(statearr_32165_33962[(2)] = null);

(statearr_32165_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (9))){
var state_32145__$1 = state_32145;
var statearr_32167_33963 = state_32145__$1;
(statearr_32167_33963[(2)] = null);

(statearr_32167_33963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (5))){
var state_32145__$1 = state_32145;
var statearr_32169_33965 = state_32145__$1;
(statearr_32169_33965[(2)] = null);

(statearr_32169_33965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (10))){
var inst_32135 = (state_32145[(2)]);
var state_32145__$1 = state_32145;
var statearr_32171_33966 = state_32145__$1;
(statearr_32171_33966[(2)] = inst_32135);

(statearr_32171_33966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32146 === (8))){
var inst_32121 = (state_32145[(7)]);
var state_32145__$1 = state_32145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32145__$1,(11),out,inst_32121);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_32177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32177[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_32177[(1)] = (1));

return statearr_32177;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32145){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32145);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32180){var ex__28706__auto__ = e32180;
var statearr_32181_33967 = state_32145;
(statearr_32181_33967[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32145[(4)]))){
var statearr_32184_33969 = state_32145;
(statearr_32184_33969[(1)] = cljs.core.first((state_32145[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33970 = state_32145;
state_32145 = G__33970;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32188 = f__29063__auto__();
(statearr_32188[(6)] = c__29062__auto___33949);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32196 = (function (f,ch,meta32197){
this.f = f;
this.ch = ch;
this.meta32197 = meta32197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32198,meta32197__$1){
var self__ = this;
var _32198__$1 = this;
return (new cljs.core.async.t_cljs$core$async32196(self__.f,self__.ch,meta32197__$1));
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32198){
var self__ = this;
var _32198__$1 = this;
return self__.meta32197;
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32221 = (function (f,ch,meta32197,_,fn1,meta32222){
this.f = f;
this.ch = ch;
this.meta32197 = meta32197;
this._ = _;
this.fn1 = fn1;
this.meta32222 = meta32222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32223,meta32222__$1){
var self__ = this;
var _32223__$1 = this;
return (new cljs.core.async.t_cljs$core$async32221(self__.f,self__.ch,self__.meta32197,self__._,self__.fn1,meta32222__$1));
}));

(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32223){
var self__ = this;
var _32223__$1 = this;
return self__.meta32222;
}));

(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32192_SHARP_){
var G__32233 = (((p1__32192_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32192_SHARP_) : self__.f.call(null,p1__32192_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32233) : f1.call(null,G__32233));
});
}));

(cljs.core.async.t_cljs$core$async32221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32197","meta32197",-1644013231,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32196","cljs.core.async/t_cljs$core$async32196",-858689909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32222","meta32222",-606256024,null)], null);
}));

(cljs.core.async.t_cljs$core$async32221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32221");

(cljs.core.async.t_cljs$core$async32221.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32221.
 */
cljs.core.async.__GT_t_cljs$core$async32221 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32221(f__$1,ch__$1,meta32197__$1,___$2,fn1__$1,meta32222){
return (new cljs.core.async.t_cljs$core$async32221(f__$1,ch__$1,meta32197__$1,___$2,fn1__$1,meta32222));
});

}

return (new cljs.core.async.t_cljs$core$async32221(self__.f,self__.ch,self__.meta32197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32248 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32248) : self__.f.call(null,G__32248));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32197","meta32197",-1644013231,null)], null);
}));

(cljs.core.async.t_cljs$core$async32196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32196");

(cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32196.
 */
cljs.core.async.__GT_t_cljs$core$async32196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32196(f__$1,ch__$1,meta32197){
return (new cljs.core.async.t_cljs$core$async32196(f__$1,ch__$1,meta32197));
});

}

return (new cljs.core.async.t_cljs$core$async32196(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32259 = (function (f,ch,meta32260){
this.f = f;
this.ch = ch;
this.meta32260 = meta32260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32261,meta32260__$1){
var self__ = this;
var _32261__$1 = this;
return (new cljs.core.async.t_cljs$core$async32259(self__.f,self__.ch,meta32260__$1));
}));

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32261){
var self__ = this;
var _32261__$1 = this;
return self__.meta32260;
}));

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32260","meta32260",936988589,null)], null);
}));

(cljs.core.async.t_cljs$core$async32259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32259");

(cljs.core.async.t_cljs$core$async32259.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32259.
 */
cljs.core.async.__GT_t_cljs$core$async32259 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32259(f__$1,ch__$1,meta32260){
return (new cljs.core.async.t_cljs$core$async32259(f__$1,ch__$1,meta32260));
});

}

return (new cljs.core.async.t_cljs$core$async32259(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32292 = (function (p,ch,meta32293){
this.p = p;
this.ch = ch;
this.meta32293 = meta32293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32294,meta32293__$1){
var self__ = this;
var _32294__$1 = this;
return (new cljs.core.async.t_cljs$core$async32292(self__.p,self__.ch,meta32293__$1));
}));

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32294){
var self__ = this;
var _32294__$1 = this;
return self__.meta32293;
}));

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32293","meta32293",-636902489,null)], null);
}));

(cljs.core.async.t_cljs$core$async32292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32292");

(cljs.core.async.t_cljs$core$async32292.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32292.
 */
cljs.core.async.__GT_t_cljs$core$async32292 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32292(p__$1,ch__$1,meta32293){
return (new cljs.core.async.t_cljs$core$async32292(p__$1,ch__$1,meta32293));
});

}

return (new cljs.core.async.t_cljs$core$async32292(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32315 = arguments.length;
switch (G__32315) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___33988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32347){
var state_val_32348 = (state_32347[(1)]);
if((state_val_32348 === (7))){
var inst_32343 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32357_33989 = state_32347__$1;
(statearr_32357_33989[(2)] = inst_32343);

(statearr_32357_33989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (1))){
var state_32347__$1 = state_32347;
var statearr_32358_33990 = state_32347__$1;
(statearr_32358_33990[(2)] = null);

(statearr_32358_33990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (4))){
var inst_32326 = (state_32347[(7)]);
var inst_32326__$1 = (state_32347[(2)]);
var inst_32327 = (inst_32326__$1 == null);
var state_32347__$1 = (function (){var statearr_32362 = state_32347;
(statearr_32362[(7)] = inst_32326__$1);

return statearr_32362;
})();
if(cljs.core.truth_(inst_32327)){
var statearr_32364_33991 = state_32347__$1;
(statearr_32364_33991[(1)] = (5));

} else {
var statearr_32367_33992 = state_32347__$1;
(statearr_32367_33992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (6))){
var inst_32326 = (state_32347[(7)]);
var inst_32333 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32326) : p.call(null,inst_32326));
var state_32347__$1 = state_32347;
if(cljs.core.truth_(inst_32333)){
var statearr_32370_33993 = state_32347__$1;
(statearr_32370_33993[(1)] = (8));

} else {
var statearr_32372_33994 = state_32347__$1;
(statearr_32372_33994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (3))){
var inst_32345 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32347__$1,inst_32345);
} else {
if((state_val_32348 === (2))){
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32347__$1,(4),ch);
} else {
if((state_val_32348 === (11))){
var inst_32337 = (state_32347[(2)]);
var state_32347__$1 = state_32347;
var statearr_32379_33995 = state_32347__$1;
(statearr_32379_33995[(2)] = inst_32337);

(statearr_32379_33995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (9))){
var state_32347__$1 = state_32347;
var statearr_32386_33996 = state_32347__$1;
(statearr_32386_33996[(2)] = null);

(statearr_32386_33996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (5))){
var inst_32330 = cljs.core.async.close_BANG_(out);
var state_32347__$1 = state_32347;
var statearr_32390_33997 = state_32347__$1;
(statearr_32390_33997[(2)] = inst_32330);

(statearr_32390_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (10))){
var inst_32340 = (state_32347[(2)]);
var state_32347__$1 = (function (){var statearr_32391 = state_32347;
(statearr_32391[(8)] = inst_32340);

return statearr_32391;
})();
var statearr_32392_33998 = state_32347__$1;
(statearr_32392_33998[(2)] = null);

(statearr_32392_33998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32348 === (8))){
var inst_32326 = (state_32347[(7)]);
var state_32347__$1 = state_32347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32347__$1,(11),out,inst_32326);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32347){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32347);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32402){var ex__28706__auto__ = e32402;
var statearr_32403_33999 = state_32347;
(statearr_32403_33999[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32347[(4)]))){
var statearr_32404_34000 = state_32347;
(statearr_32404_34000[(1)] = cljs.core.first((state_32347[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34001 = state_32347;
state_32347 = G__34001;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32405 = f__29063__auto__();
(statearr_32405[(6)] = c__29062__auto___33988);

return statearr_32405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29062__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32488){
var state_val_32489 = (state_32488[(1)]);
if((state_val_32489 === (7))){
var inst_32484 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32493_34003 = state_32488__$1;
(statearr_32493_34003[(2)] = inst_32484);

(statearr_32493_34003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (20))){
var inst_32451 = (state_32488[(7)]);
var inst_32465 = (state_32488[(2)]);
var inst_32466 = cljs.core.next(inst_32451);
var inst_32437 = inst_32466;
var inst_32438 = null;
var inst_32439 = (0);
var inst_32440 = (0);
var state_32488__$1 = (function (){var statearr_32494 = state_32488;
(statearr_32494[(8)] = inst_32465);

(statearr_32494[(9)] = inst_32437);

(statearr_32494[(10)] = inst_32440);

(statearr_32494[(11)] = inst_32439);

(statearr_32494[(12)] = inst_32438);

return statearr_32494;
})();
var statearr_32495_34005 = state_32488__$1;
(statearr_32495_34005[(2)] = null);

(statearr_32495_34005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (1))){
var state_32488__$1 = state_32488;
var statearr_32496_34006 = state_32488__$1;
(statearr_32496_34006[(2)] = null);

(statearr_32496_34006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (4))){
var inst_32426 = (state_32488[(13)]);
var inst_32426__$1 = (state_32488[(2)]);
var inst_32427 = (inst_32426__$1 == null);
var state_32488__$1 = (function (){var statearr_32497 = state_32488;
(statearr_32497[(13)] = inst_32426__$1);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32498_34009 = state_32488__$1;
(statearr_32498_34009[(1)] = (5));

} else {
var statearr_32499_34010 = state_32488__$1;
(statearr_32499_34010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (15))){
var state_32488__$1 = state_32488;
var statearr_32503_34011 = state_32488__$1;
(statearr_32503_34011[(2)] = null);

(statearr_32503_34011[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (21))){
var state_32488__$1 = state_32488;
var statearr_32504_34012 = state_32488__$1;
(statearr_32504_34012[(2)] = null);

(statearr_32504_34012[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (13))){
var inst_32437 = (state_32488[(9)]);
var inst_32440 = (state_32488[(10)]);
var inst_32439 = (state_32488[(11)]);
var inst_32438 = (state_32488[(12)]);
var inst_32447 = (state_32488[(2)]);
var inst_32448 = (inst_32440 + (1));
var tmp32500 = inst_32437;
var tmp32501 = inst_32439;
var tmp32502 = inst_32438;
var inst_32437__$1 = tmp32500;
var inst_32438__$1 = tmp32502;
var inst_32439__$1 = tmp32501;
var inst_32440__$1 = inst_32448;
var state_32488__$1 = (function (){var statearr_32506 = state_32488;
(statearr_32506[(9)] = inst_32437__$1);

(statearr_32506[(10)] = inst_32440__$1);

(statearr_32506[(14)] = inst_32447);

(statearr_32506[(11)] = inst_32439__$1);

(statearr_32506[(12)] = inst_32438__$1);

return statearr_32506;
})();
var statearr_32508_34013 = state_32488__$1;
(statearr_32508_34013[(2)] = null);

(statearr_32508_34013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (22))){
var state_32488__$1 = state_32488;
var statearr_32512_34014 = state_32488__$1;
(statearr_32512_34014[(2)] = null);

(statearr_32512_34014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (6))){
var inst_32426 = (state_32488[(13)]);
var inst_32435 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32426) : f.call(null,inst_32426));
var inst_32436 = cljs.core.seq(inst_32435);
var inst_32437 = inst_32436;
var inst_32438 = null;
var inst_32439 = (0);
var inst_32440 = (0);
var state_32488__$1 = (function (){var statearr_32513 = state_32488;
(statearr_32513[(9)] = inst_32437);

(statearr_32513[(10)] = inst_32440);

(statearr_32513[(11)] = inst_32439);

(statearr_32513[(12)] = inst_32438);

return statearr_32513;
})();
var statearr_32516_34019 = state_32488__$1;
(statearr_32516_34019[(2)] = null);

(statearr_32516_34019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (17))){
var inst_32451 = (state_32488[(7)]);
var inst_32456 = cljs.core.chunk_first(inst_32451);
var inst_32457 = cljs.core.chunk_rest(inst_32451);
var inst_32458 = cljs.core.count(inst_32456);
var inst_32437 = inst_32457;
var inst_32438 = inst_32456;
var inst_32439 = inst_32458;
var inst_32440 = (0);
var state_32488__$1 = (function (){var statearr_32518 = state_32488;
(statearr_32518[(9)] = inst_32437);

(statearr_32518[(10)] = inst_32440);

(statearr_32518[(11)] = inst_32439);

(statearr_32518[(12)] = inst_32438);

return statearr_32518;
})();
var statearr_32519_34024 = state_32488__$1;
(statearr_32519_34024[(2)] = null);

(statearr_32519_34024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (3))){
var inst_32486 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32488__$1,inst_32486);
} else {
if((state_val_32489 === (12))){
var inst_32474 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32521_34026 = state_32488__$1;
(statearr_32521_34026[(2)] = inst_32474);

(statearr_32521_34026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (2))){
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32488__$1,(4),in$);
} else {
if((state_val_32489 === (23))){
var inst_32482 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32522_34027 = state_32488__$1;
(statearr_32522_34027[(2)] = inst_32482);

(statearr_32522_34027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (19))){
var inst_32469 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32526_34028 = state_32488__$1;
(statearr_32526_34028[(2)] = inst_32469);

(statearr_32526_34028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (11))){
var inst_32437 = (state_32488[(9)]);
var inst_32451 = (state_32488[(7)]);
var inst_32451__$1 = cljs.core.seq(inst_32437);
var state_32488__$1 = (function (){var statearr_32529 = state_32488;
(statearr_32529[(7)] = inst_32451__$1);

return statearr_32529;
})();
if(inst_32451__$1){
var statearr_32531_34030 = state_32488__$1;
(statearr_32531_34030[(1)] = (14));

} else {
var statearr_32532_34031 = state_32488__$1;
(statearr_32532_34031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (9))){
var inst_32476 = (state_32488[(2)]);
var inst_32477 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32488__$1 = (function (){var statearr_32563 = state_32488;
(statearr_32563[(15)] = inst_32476);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32564_34032 = state_32488__$1;
(statearr_32564_34032[(1)] = (21));

} else {
var statearr_32565_34033 = state_32488__$1;
(statearr_32565_34033[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (5))){
var inst_32429 = cljs.core.async.close_BANG_(out);
var state_32488__$1 = state_32488;
var statearr_32566_34036 = state_32488__$1;
(statearr_32566_34036[(2)] = inst_32429);

(statearr_32566_34036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (14))){
var inst_32451 = (state_32488[(7)]);
var inst_32454 = cljs.core.chunked_seq_QMARK_(inst_32451);
var state_32488__$1 = state_32488;
if(inst_32454){
var statearr_32574_34037 = state_32488__$1;
(statearr_32574_34037[(1)] = (17));

} else {
var statearr_32575_34038 = state_32488__$1;
(statearr_32575_34038[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (16))){
var inst_32472 = (state_32488[(2)]);
var state_32488__$1 = state_32488;
var statearr_32578_34040 = state_32488__$1;
(statearr_32578_34040[(2)] = inst_32472);

(statearr_32578_34040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32489 === (10))){
var inst_32440 = (state_32488[(10)]);
var inst_32438 = (state_32488[(12)]);
var inst_32445 = cljs.core._nth(inst_32438,inst_32440);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32488__$1,(13),out,inst_32445);
} else {
if((state_val_32489 === (18))){
var inst_32451 = (state_32488[(7)]);
var inst_32461 = cljs.core.first(inst_32451);
var state_32488__$1 = state_32488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32488__$1,(20),out,inst_32461);
} else {
if((state_val_32489 === (8))){
var inst_32440 = (state_32488[(10)]);
var inst_32439 = (state_32488[(11)]);
var inst_32442 = (inst_32440 < inst_32439);
var inst_32443 = inst_32442;
var state_32488__$1 = state_32488;
if(cljs.core.truth_(inst_32443)){
var statearr_32595_34050 = state_32488__$1;
(statearr_32595_34050[(1)] = (10));

} else {
var statearr_32596_34051 = state_32488__$1;
(statearr_32596_34051[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____0 = (function (){
var statearr_32606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32606[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__);

(statearr_32606[(1)] = (1));

return statearr_32606;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____1 = (function (state_32488){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32488);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32608){var ex__28706__auto__ = e32608;
var statearr_32609_34056 = state_32488;
(statearr_32609_34056[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32488[(4)]))){
var statearr_32610_34058 = state_32488;
(statearr_32610_34058[(1)] = cljs.core.first((state_32488[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34059 = state_32488;
state_32488 = G__34059;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__ = function(state_32488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____1.call(this,state_32488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28703__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32612 = f__29063__auto__();
(statearr_32612[(6)] = c__29062__auto__);

return statearr_32612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

return c__29062__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32638 = arguments.length;
switch (G__32638) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32695 = arguments.length;
switch (G__32695) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32712 = arguments.length;
switch (G__32712) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___34069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32744 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32759_34070 = state_32753__$1;
(statearr_32759_34070[(2)] = inst_32744);

(statearr_32759_34070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var inst_32722 = null;
var state_32753__$1 = (function (){var statearr_32760 = state_32753;
(statearr_32760[(7)] = inst_32722);

return statearr_32760;
})();
var statearr_32761_34075 = state_32753__$1;
(statearr_32761_34075[(2)] = null);

(statearr_32761_34075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var inst_32725 = (state_32753[(8)]);
var inst_32725__$1 = (state_32753[(2)]);
var inst_32730 = (inst_32725__$1 == null);
var inst_32731 = cljs.core.not(inst_32730);
var state_32753__$1 = (function (){var statearr_32765 = state_32753;
(statearr_32765[(8)] = inst_32725__$1);

return statearr_32765;
})();
if(inst_32731){
var statearr_32766_34076 = state_32753__$1;
(statearr_32766_34076[(1)] = (5));

} else {
var statearr_32767_34077 = state_32753__$1;
(statearr_32767_34077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (6))){
var state_32753__$1 = state_32753;
var statearr_32769_34078 = state_32753__$1;
(statearr_32769_34078[(2)] = null);

(statearr_32769_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32746 = (state_32753[(2)]);
var inst_32747 = cljs.core.async.close_BANG_(out);
var state_32753__$1 = (function (){var statearr_32771 = state_32753;
(statearr_32771[(9)] = inst_32746);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32753__$1,inst_32747);
} else {
if((state_val_32754 === (2))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32753__$1,(4),ch);
} else {
if((state_val_32754 === (11))){
var inst_32725 = (state_32753[(8)]);
var inst_32738 = (state_32753[(2)]);
var inst_32722 = inst_32725;
var state_32753__$1 = (function (){var statearr_32773 = state_32753;
(statearr_32773[(7)] = inst_32722);

(statearr_32773[(10)] = inst_32738);

return statearr_32773;
})();
var statearr_32774_34079 = state_32753__$1;
(statearr_32774_34079[(2)] = null);

(statearr_32774_34079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (9))){
var inst_32725 = (state_32753[(8)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32753__$1,(11),out,inst_32725);
} else {
if((state_val_32754 === (5))){
var inst_32722 = (state_32753[(7)]);
var inst_32725 = (state_32753[(8)]);
var inst_32733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32725,inst_32722);
var state_32753__$1 = state_32753;
if(inst_32733){
var statearr_32776_34084 = state_32753__$1;
(statearr_32776_34084[(1)] = (8));

} else {
var statearr_32777_34087 = state_32753__$1;
(statearr_32777_34087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var inst_32741 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32778_34088 = state_32753__$1;
(statearr_32778_34088[(2)] = inst_32741);

(statearr_32778_34088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32722 = (state_32753[(7)]);
var tmp32775 = inst_32722;
var inst_32722__$1 = tmp32775;
var state_32753__$1 = (function (){var statearr_32779 = state_32753;
(statearr_32779[(7)] = inst_32722__$1);

return statearr_32779;
})();
var statearr_32780_34089 = state_32753__$1;
(statearr_32780_34089[(2)] = null);

(statearr_32780_34089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_32781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32781[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_32781[(1)] = (1));

return statearr_32781;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32753){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32753);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32783){var ex__28706__auto__ = e32783;
var statearr_32784_34095 = state_32753;
(statearr_32784_34095[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32753[(4)]))){
var statearr_32785_34097 = state_32753;
(statearr_32785_34097[(1)] = cljs.core.first((state_32753[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34098 = state_32753;
state_32753 = G__34098;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32786 = f__29063__auto__();
(statearr_32786[(6)] = c__29062__auto___34069);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32797 = arguments.length;
switch (G__32797) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___34103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32852){
var state_val_32853 = (state_32852[(1)]);
if((state_val_32853 === (7))){
var inst_32848 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
var statearr_32856_34104 = state_32852__$1;
(statearr_32856_34104[(2)] = inst_32848);

(statearr_32856_34104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (1))){
var inst_32815 = (new Array(n));
var inst_32816 = inst_32815;
var inst_32817 = (0);
var state_32852__$1 = (function (){var statearr_32857 = state_32852;
(statearr_32857[(7)] = inst_32817);

(statearr_32857[(8)] = inst_32816);

return statearr_32857;
})();
var statearr_32858_34106 = state_32852__$1;
(statearr_32858_34106[(2)] = null);

(statearr_32858_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (4))){
var inst_32820 = (state_32852[(9)]);
var inst_32820__$1 = (state_32852[(2)]);
var inst_32821 = (inst_32820__$1 == null);
var inst_32822 = cljs.core.not(inst_32821);
var state_32852__$1 = (function (){var statearr_32860 = state_32852;
(statearr_32860[(9)] = inst_32820__$1);

return statearr_32860;
})();
if(inst_32822){
var statearr_32861_34107 = state_32852__$1;
(statearr_32861_34107[(1)] = (5));

} else {
var statearr_32863_34109 = state_32852__$1;
(statearr_32863_34109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (15))){
var inst_32842 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
var statearr_32864_34110 = state_32852__$1;
(statearr_32864_34110[(2)] = inst_32842);

(statearr_32864_34110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (13))){
var state_32852__$1 = state_32852;
var statearr_32865_34111 = state_32852__$1;
(statearr_32865_34111[(2)] = null);

(statearr_32865_34111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (6))){
var inst_32817 = (state_32852[(7)]);
var inst_32838 = (inst_32817 > (0));
var state_32852__$1 = state_32852;
if(cljs.core.truth_(inst_32838)){
var statearr_32867_34112 = state_32852__$1;
(statearr_32867_34112[(1)] = (12));

} else {
var statearr_32868_34113 = state_32852__$1;
(statearr_32868_34113[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (3))){
var inst_32850 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32852__$1,inst_32850);
} else {
if((state_val_32853 === (12))){
var inst_32816 = (state_32852[(8)]);
var inst_32840 = cljs.core.vec(inst_32816);
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32852__$1,(15),out,inst_32840);
} else {
if((state_val_32853 === (2))){
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32852__$1,(4),ch);
} else {
if((state_val_32853 === (11))){
var inst_32832 = (state_32852[(2)]);
var inst_32833 = (new Array(n));
var inst_32816 = inst_32833;
var inst_32817 = (0);
var state_32852__$1 = (function (){var statearr_32870 = state_32852;
(statearr_32870[(7)] = inst_32817);

(statearr_32870[(10)] = inst_32832);

(statearr_32870[(8)] = inst_32816);

return statearr_32870;
})();
var statearr_32871_34114 = state_32852__$1;
(statearr_32871_34114[(2)] = null);

(statearr_32871_34114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (9))){
var inst_32816 = (state_32852[(8)]);
var inst_32830 = cljs.core.vec(inst_32816);
var state_32852__$1 = state_32852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32852__$1,(11),out,inst_32830);
} else {
if((state_val_32853 === (5))){
var inst_32817 = (state_32852[(7)]);
var inst_32820 = (state_32852[(9)]);
var inst_32825 = (state_32852[(11)]);
var inst_32816 = (state_32852[(8)]);
var inst_32824 = (inst_32816[inst_32817] = inst_32820);
var inst_32825__$1 = (inst_32817 + (1));
var inst_32826 = (inst_32825__$1 < n);
var state_32852__$1 = (function (){var statearr_32874 = state_32852;
(statearr_32874[(12)] = inst_32824);

(statearr_32874[(11)] = inst_32825__$1);

return statearr_32874;
})();
if(cljs.core.truth_(inst_32826)){
var statearr_32877_34115 = state_32852__$1;
(statearr_32877_34115[(1)] = (8));

} else {
var statearr_32878_34116 = state_32852__$1;
(statearr_32878_34116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (14))){
var inst_32845 = (state_32852[(2)]);
var inst_32846 = cljs.core.async.close_BANG_(out);
var state_32852__$1 = (function (){var statearr_32880 = state_32852;
(statearr_32880[(13)] = inst_32845);

return statearr_32880;
})();
var statearr_32885_34117 = state_32852__$1;
(statearr_32885_34117[(2)] = inst_32846);

(statearr_32885_34117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (10))){
var inst_32836 = (state_32852[(2)]);
var state_32852__$1 = state_32852;
var statearr_32888_34118 = state_32852__$1;
(statearr_32888_34118[(2)] = inst_32836);

(statearr_32888_34118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32853 === (8))){
var inst_32825 = (state_32852[(11)]);
var inst_32816 = (state_32852[(8)]);
var tmp32879 = inst_32816;
var inst_32816__$1 = tmp32879;
var inst_32817 = inst_32825;
var state_32852__$1 = (function (){var statearr_32891 = state_32852;
(statearr_32891[(7)] = inst_32817);

(statearr_32891[(8)] = inst_32816__$1);

return statearr_32891;
})();
var statearr_32894_34128 = state_32852__$1;
(statearr_32894_34128[(2)] = null);

(statearr_32894_34128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32852){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32852);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e32902){var ex__28706__auto__ = e32902;
var statearr_32903_34138 = state_32852;
(statearr_32903_34138[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32852[(4)]))){
var statearr_32904_34139 = state_32852;
(statearr_32904_34139[(1)] = cljs.core.first((state_32852[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34140 = state_32852;
state_32852 = G__34140;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_32907 = f__29063__auto__();
(statearr_32907[(6)] = c__29062__auto___34103);

return statearr_32907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32909 = arguments.length;
switch (G__32909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29062__auto___34149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_32954){
var state_val_32955 = (state_32954[(1)]);
if((state_val_32955 === (7))){
var inst_32950 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32956_34150 = state_32954__$1;
(statearr_32956_34150[(2)] = inst_32950);

(statearr_32956_34150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (1))){
var inst_32910 = [];
var inst_32911 = inst_32910;
var inst_32912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32954__$1 = (function (){var statearr_32960 = state_32954;
(statearr_32960[(7)] = inst_32911);

(statearr_32960[(8)] = inst_32912);

return statearr_32960;
})();
var statearr_32961_34162 = state_32954__$1;
(statearr_32961_34162[(2)] = null);

(statearr_32961_34162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (4))){
var inst_32915 = (state_32954[(9)]);
var inst_32915__$1 = (state_32954[(2)]);
var inst_32916 = (inst_32915__$1 == null);
var inst_32917 = cljs.core.not(inst_32916);
var state_32954__$1 = (function (){var statearr_32962 = state_32954;
(statearr_32962[(9)] = inst_32915__$1);

return statearr_32962;
})();
if(inst_32917){
var statearr_32963_34166 = state_32954__$1;
(statearr_32963_34166[(1)] = (5));

} else {
var statearr_32964_34171 = state_32954__$1;
(statearr_32964_34171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (15))){
var inst_32911 = (state_32954[(7)]);
var inst_32942 = cljs.core.vec(inst_32911);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32954__$1,(18),out,inst_32942);
} else {
if((state_val_32955 === (13))){
var inst_32937 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_32965_34183 = state_32954__$1;
(statearr_32965_34183[(2)] = inst_32937);

(statearr_32965_34183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (6))){
var inst_32911 = (state_32954[(7)]);
var inst_32939 = inst_32911.length;
var inst_32940 = (inst_32939 > (0));
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32940)){
var statearr_32973_34193 = state_32954__$1;
(statearr_32973_34193[(1)] = (15));

} else {
var statearr_32977_34194 = state_32954__$1;
(statearr_32977_34194[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (17))){
var inst_32947 = (state_32954[(2)]);
var inst_32948 = cljs.core.async.close_BANG_(out);
var state_32954__$1 = (function (){var statearr_32981 = state_32954;
(statearr_32981[(10)] = inst_32947);

return statearr_32981;
})();
var statearr_32982_34195 = state_32954__$1;
(statearr_32982_34195[(2)] = inst_32948);

(statearr_32982_34195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (3))){
var inst_32952 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32954__$1,inst_32952);
} else {
if((state_val_32955 === (12))){
var inst_32911 = (state_32954[(7)]);
var inst_32930 = cljs.core.vec(inst_32911);
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32954__$1,(14),out,inst_32930);
} else {
if((state_val_32955 === (2))){
var state_32954__$1 = state_32954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32954__$1,(4),ch);
} else {
if((state_val_32955 === (11))){
var inst_32911 = (state_32954[(7)]);
var inst_32915 = (state_32954[(9)]);
var inst_32919 = (state_32954[(11)]);
var inst_32927 = inst_32911.push(inst_32915);
var tmp32983 = inst_32911;
var inst_32911__$1 = tmp32983;
var inst_32912 = inst_32919;
var state_32954__$1 = (function (){var statearr_32995 = state_32954;
(statearr_32995[(7)] = inst_32911__$1);

(statearr_32995[(8)] = inst_32912);

(statearr_32995[(12)] = inst_32927);

return statearr_32995;
})();
var statearr_32996_34203 = state_32954__$1;
(statearr_32996_34203[(2)] = null);

(statearr_32996_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (9))){
var inst_32912 = (state_32954[(8)]);
var inst_32923 = cljs.core.keyword_identical_QMARK_(inst_32912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32954__$1 = state_32954;
var statearr_32997_34207 = state_32954__$1;
(statearr_32997_34207[(2)] = inst_32923);

(statearr_32997_34207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (5))){
var inst_32915 = (state_32954[(9)]);
var inst_32919 = (state_32954[(11)]);
var inst_32920 = (state_32954[(13)]);
var inst_32912 = (state_32954[(8)]);
var inst_32919__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32915) : f.call(null,inst_32915));
var inst_32920__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32919__$1,inst_32912);
var state_32954__$1 = (function (){var statearr_33005 = state_32954;
(statearr_33005[(11)] = inst_32919__$1);

(statearr_33005[(13)] = inst_32920__$1);

return statearr_33005;
})();
if(inst_32920__$1){
var statearr_33009_34222 = state_32954__$1;
(statearr_33009_34222[(1)] = (8));

} else {
var statearr_33010_34226 = state_32954__$1;
(statearr_33010_34226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (14))){
var inst_32915 = (state_32954[(9)]);
var inst_32919 = (state_32954[(11)]);
var inst_32932 = (state_32954[(2)]);
var inst_32933 = [];
var inst_32934 = inst_32933.push(inst_32915);
var inst_32911 = inst_32933;
var inst_32912 = inst_32919;
var state_32954__$1 = (function (){var statearr_33014 = state_32954;
(statearr_33014[(14)] = inst_32932);

(statearr_33014[(7)] = inst_32911);

(statearr_33014[(8)] = inst_32912);

(statearr_33014[(15)] = inst_32934);

return statearr_33014;
})();
var statearr_33019_34243 = state_32954__$1;
(statearr_33019_34243[(2)] = null);

(statearr_33019_34243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (16))){
var state_32954__$1 = state_32954;
var statearr_33020_34244 = state_32954__$1;
(statearr_33020_34244[(2)] = null);

(statearr_33020_34244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (10))){
var inst_32925 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
if(cljs.core.truth_(inst_32925)){
var statearr_33021_34249 = state_32954__$1;
(statearr_33021_34249[(1)] = (11));

} else {
var statearr_33022_34250 = state_32954__$1;
(statearr_33022_34250[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (18))){
var inst_32944 = (state_32954[(2)]);
var state_32954__$1 = state_32954;
var statearr_33025_34251 = state_32954__$1;
(statearr_33025_34251[(2)] = inst_32944);

(statearr_33025_34251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32955 === (8))){
var inst_32920 = (state_32954[(13)]);
var state_32954__$1 = state_32954;
var statearr_33026_34252 = state_32954__$1;
(statearr_33026_34252[(2)] = inst_32920);

(statearr_33026_34252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28703__auto__ = null;
var cljs$core$async$state_machine__28703__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = cljs$core$async$state_machine__28703__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var cljs$core$async$state_machine__28703__auto____1 = (function (state_32954){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_32954);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e33028){var ex__28706__auto__ = e33028;
var statearr_33029_34257 = state_32954;
(statearr_33029_34257[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_32954[(4)]))){
var statearr_33030_34258 = state_32954;
(statearr_33030_34258[(1)] = cljs.core.first((state_32954[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34261 = state_32954;
state_32954 = G__34261;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
cljs$core$async$state_machine__28703__auto__ = function(state_32954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28703__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28703__auto____1.call(this,state_32954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28703__auto____0;
cljs$core$async$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28703__auto____1;
return cljs$core$async$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_33033 = f__29063__auto__();
(statearr_33033[(6)] = c__29062__auto___34149);

return statearr_33033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
