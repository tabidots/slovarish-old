goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34527 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34527(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34530 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34530(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33201 = coll;
var G__33202 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33201,G__33202) : shadow.dom.lazy_native_coll_seq.call(null,G__33201,G__33202));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33300 = arguments.length;
switch (G__33300) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33325 = arguments.length;
switch (G__33325) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33346 = arguments.length;
switch (G__33346) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33367 = arguments.length;
switch (G__33367) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33395 = arguments.length;
switch (G__33395) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33429 = arguments.length;
switch (G__33429) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33441){if((e33441 instanceof Object)){
var e = e33441;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33441;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33454 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33455 = null;
var count__33456 = (0);
var i__33457 = (0);
while(true){
if((i__33457 < count__33456)){
var el = chunk__33455.cljs$core$IIndexed$_nth$arity$2(null,i__33457);
var handler_34560__$1 = ((function (seq__33454,chunk__33455,count__33456,i__33457,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33454,chunk__33455,count__33456,i__33457,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34560__$1);


var G__34561 = seq__33454;
var G__34562 = chunk__33455;
var G__34563 = count__33456;
var G__34564 = (i__33457 + (1));
seq__33454 = G__34561;
chunk__33455 = G__34562;
count__33456 = G__34563;
i__33457 = G__34564;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33454);
if(temp__5753__auto__){
var seq__33454__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33454__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33454__$1);
var G__34565 = cljs.core.chunk_rest(seq__33454__$1);
var G__34566 = c__4679__auto__;
var G__34567 = cljs.core.count(c__4679__auto__);
var G__34568 = (0);
seq__33454 = G__34565;
chunk__33455 = G__34566;
count__33456 = G__34567;
i__33457 = G__34568;
continue;
} else {
var el = cljs.core.first(seq__33454__$1);
var handler_34569__$1 = ((function (seq__33454,chunk__33455,count__33456,i__33457,el,seq__33454__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33454,chunk__33455,count__33456,i__33457,el,seq__33454__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34569__$1);


var G__34570 = cljs.core.next(seq__33454__$1);
var G__34571 = null;
var G__34572 = (0);
var G__34573 = (0);
seq__33454 = G__34570;
chunk__33455 = G__34571;
count__33456 = G__34572;
i__33457 = G__34573;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33485 = arguments.length;
switch (G__33485) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33505 = cljs.core.seq(events);
var chunk__33506 = null;
var count__33507 = (0);
var i__33508 = (0);
while(true){
if((i__33508 < count__33507)){
var vec__33522 = chunk__33506.cljs$core$IIndexed$_nth$arity$2(null,i__33508);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33522,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34579 = seq__33505;
var G__34580 = chunk__33506;
var G__34581 = count__33507;
var G__34582 = (i__33508 + (1));
seq__33505 = G__34579;
chunk__33506 = G__34580;
count__33507 = G__34581;
i__33508 = G__34582;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33505);
if(temp__5753__auto__){
var seq__33505__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33505__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33505__$1);
var G__34583 = cljs.core.chunk_rest(seq__33505__$1);
var G__34584 = c__4679__auto__;
var G__34585 = cljs.core.count(c__4679__auto__);
var G__34586 = (0);
seq__33505 = G__34583;
chunk__33506 = G__34584;
count__33507 = G__34585;
i__33508 = G__34586;
continue;
} else {
var vec__33529 = cljs.core.first(seq__33505__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34588 = cljs.core.next(seq__33505__$1);
var G__34589 = null;
var G__34590 = (0);
var G__34591 = (0);
seq__33505 = G__34588;
chunk__33506 = G__34589;
count__33507 = G__34590;
i__33508 = G__34591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33540 = cljs.core.seq(styles);
var chunk__33541 = null;
var count__33542 = (0);
var i__33543 = (0);
while(true){
if((i__33543 < count__33542)){
var vec__33569 = chunk__33541.cljs$core$IIndexed$_nth$arity$2(null,i__33543);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34597 = seq__33540;
var G__34598 = chunk__33541;
var G__34599 = count__33542;
var G__34600 = (i__33543 + (1));
seq__33540 = G__34597;
chunk__33541 = G__34598;
count__33542 = G__34599;
i__33543 = G__34600;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33540);
if(temp__5753__auto__){
var seq__33540__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33540__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33540__$1);
var G__34606 = cljs.core.chunk_rest(seq__33540__$1);
var G__34607 = c__4679__auto__;
var G__34608 = cljs.core.count(c__4679__auto__);
var G__34609 = (0);
seq__33540 = G__34606;
chunk__33541 = G__34607;
count__33542 = G__34608;
i__33543 = G__34609;
continue;
} else {
var vec__33580 = cljs.core.first(seq__33540__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33580,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33580,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34610 = cljs.core.next(seq__33540__$1);
var G__34611 = null;
var G__34612 = (0);
var G__34613 = (0);
seq__33540 = G__34610;
chunk__33541 = G__34611;
count__33542 = G__34612;
i__33543 = G__34613;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33593_34614 = key;
var G__33593_34615__$1 = (((G__33593_34614 instanceof cljs.core.Keyword))?G__33593_34614.fqn:null);
switch (G__33593_34615__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34617 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34617,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34617,"aria-");
}
})())){
el.setAttribute(ks_34617,value);
} else {
(el[ks_34617] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33633){
var map__33635 = p__33633;
var map__33635__$1 = cljs.core.__destructure_map(map__33635);
var props = map__33635__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33635__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33637 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33647 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33647,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33647;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33652 = arguments.length;
switch (G__33652) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33664){
var vec__33665 = p__33664;
var seq__33666 = cljs.core.seq(vec__33665);
var first__33667 = cljs.core.first(seq__33666);
var seq__33666__$1 = cljs.core.next(seq__33666);
var nn = first__33667;
var first__33667__$1 = cljs.core.first(seq__33666__$1);
var seq__33666__$2 = cljs.core.next(seq__33666__$1);
var np = first__33667__$1;
var nc = seq__33666__$2;
var node = vec__33665;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33671 = nn;
var G__33672 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33671,G__33672) : create_fn.call(null,G__33671,G__33672));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33674 = nn;
var G__33675 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33674,G__33675) : create_fn.call(null,G__33674,G__33675));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33688 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33688,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33688,(1),null);
var seq__33692_34627 = cljs.core.seq(node_children);
var chunk__33693_34628 = null;
var count__33694_34629 = (0);
var i__33695_34630 = (0);
while(true){
if((i__33695_34630 < count__33694_34629)){
var child_struct_34631 = chunk__33693_34628.cljs$core$IIndexed$_nth$arity$2(null,i__33695_34630);
var children_34632 = shadow.dom.dom_node(child_struct_34631);
if(cljs.core.seq_QMARK_(children_34632)){
var seq__33742_34634 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34632));
var chunk__33744_34635 = null;
var count__33745_34636 = (0);
var i__33746_34637 = (0);
while(true){
if((i__33746_34637 < count__33745_34636)){
var child_34638 = chunk__33744_34635.cljs$core$IIndexed$_nth$arity$2(null,i__33746_34637);
if(cljs.core.truth_(child_34638)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34638);


var G__34639 = seq__33742_34634;
var G__34640 = chunk__33744_34635;
var G__34641 = count__33745_34636;
var G__34642 = (i__33746_34637 + (1));
seq__33742_34634 = G__34639;
chunk__33744_34635 = G__34640;
count__33745_34636 = G__34641;
i__33746_34637 = G__34642;
continue;
} else {
var G__34643 = seq__33742_34634;
var G__34644 = chunk__33744_34635;
var G__34645 = count__33745_34636;
var G__34646 = (i__33746_34637 + (1));
seq__33742_34634 = G__34643;
chunk__33744_34635 = G__34644;
count__33745_34636 = G__34645;
i__33746_34637 = G__34646;
continue;
}
} else {
var temp__5753__auto___34647 = cljs.core.seq(seq__33742_34634);
if(temp__5753__auto___34647){
var seq__33742_34648__$1 = temp__5753__auto___34647;
if(cljs.core.chunked_seq_QMARK_(seq__33742_34648__$1)){
var c__4679__auto___34649 = cljs.core.chunk_first(seq__33742_34648__$1);
var G__34650 = cljs.core.chunk_rest(seq__33742_34648__$1);
var G__34651 = c__4679__auto___34649;
var G__34652 = cljs.core.count(c__4679__auto___34649);
var G__34653 = (0);
seq__33742_34634 = G__34650;
chunk__33744_34635 = G__34651;
count__33745_34636 = G__34652;
i__33746_34637 = G__34653;
continue;
} else {
var child_34654 = cljs.core.first(seq__33742_34648__$1);
if(cljs.core.truth_(child_34654)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34654);


var G__34655 = cljs.core.next(seq__33742_34648__$1);
var G__34656 = null;
var G__34657 = (0);
var G__34658 = (0);
seq__33742_34634 = G__34655;
chunk__33744_34635 = G__34656;
count__33745_34636 = G__34657;
i__33746_34637 = G__34658;
continue;
} else {
var G__34659 = cljs.core.next(seq__33742_34648__$1);
var G__34660 = null;
var G__34661 = (0);
var G__34662 = (0);
seq__33742_34634 = G__34659;
chunk__33744_34635 = G__34660;
count__33745_34636 = G__34661;
i__33746_34637 = G__34662;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34632);
}


var G__34663 = seq__33692_34627;
var G__34664 = chunk__33693_34628;
var G__34665 = count__33694_34629;
var G__34666 = (i__33695_34630 + (1));
seq__33692_34627 = G__34663;
chunk__33693_34628 = G__34664;
count__33694_34629 = G__34665;
i__33695_34630 = G__34666;
continue;
} else {
var temp__5753__auto___34667 = cljs.core.seq(seq__33692_34627);
if(temp__5753__auto___34667){
var seq__33692_34668__$1 = temp__5753__auto___34667;
if(cljs.core.chunked_seq_QMARK_(seq__33692_34668__$1)){
var c__4679__auto___34669 = cljs.core.chunk_first(seq__33692_34668__$1);
var G__34670 = cljs.core.chunk_rest(seq__33692_34668__$1);
var G__34671 = c__4679__auto___34669;
var G__34672 = cljs.core.count(c__4679__auto___34669);
var G__34673 = (0);
seq__33692_34627 = G__34670;
chunk__33693_34628 = G__34671;
count__33694_34629 = G__34672;
i__33695_34630 = G__34673;
continue;
} else {
var child_struct_34674 = cljs.core.first(seq__33692_34668__$1);
var children_34675 = shadow.dom.dom_node(child_struct_34674);
if(cljs.core.seq_QMARK_(children_34675)){
var seq__33753_34676 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34675));
var chunk__33755_34677 = null;
var count__33756_34678 = (0);
var i__33757_34679 = (0);
while(true){
if((i__33757_34679 < count__33756_34678)){
var child_34680 = chunk__33755_34677.cljs$core$IIndexed$_nth$arity$2(null,i__33757_34679);
if(cljs.core.truth_(child_34680)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34680);


var G__34681 = seq__33753_34676;
var G__34682 = chunk__33755_34677;
var G__34683 = count__33756_34678;
var G__34684 = (i__33757_34679 + (1));
seq__33753_34676 = G__34681;
chunk__33755_34677 = G__34682;
count__33756_34678 = G__34683;
i__33757_34679 = G__34684;
continue;
} else {
var G__34685 = seq__33753_34676;
var G__34686 = chunk__33755_34677;
var G__34687 = count__33756_34678;
var G__34688 = (i__33757_34679 + (1));
seq__33753_34676 = G__34685;
chunk__33755_34677 = G__34686;
count__33756_34678 = G__34687;
i__33757_34679 = G__34688;
continue;
}
} else {
var temp__5753__auto___34689__$1 = cljs.core.seq(seq__33753_34676);
if(temp__5753__auto___34689__$1){
var seq__33753_34690__$1 = temp__5753__auto___34689__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33753_34690__$1)){
var c__4679__auto___34691 = cljs.core.chunk_first(seq__33753_34690__$1);
var G__34692 = cljs.core.chunk_rest(seq__33753_34690__$1);
var G__34693 = c__4679__auto___34691;
var G__34694 = cljs.core.count(c__4679__auto___34691);
var G__34695 = (0);
seq__33753_34676 = G__34692;
chunk__33755_34677 = G__34693;
count__33756_34678 = G__34694;
i__33757_34679 = G__34695;
continue;
} else {
var child_34696 = cljs.core.first(seq__33753_34690__$1);
if(cljs.core.truth_(child_34696)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34696);


var G__34697 = cljs.core.next(seq__33753_34690__$1);
var G__34698 = null;
var G__34699 = (0);
var G__34700 = (0);
seq__33753_34676 = G__34697;
chunk__33755_34677 = G__34698;
count__33756_34678 = G__34699;
i__33757_34679 = G__34700;
continue;
} else {
var G__34701 = cljs.core.next(seq__33753_34690__$1);
var G__34702 = null;
var G__34703 = (0);
var G__34704 = (0);
seq__33753_34676 = G__34701;
chunk__33755_34677 = G__34702;
count__33756_34678 = G__34703;
i__33757_34679 = G__34704;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34675);
}


var G__34705 = cljs.core.next(seq__33692_34668__$1);
var G__34706 = null;
var G__34707 = (0);
var G__34708 = (0);
seq__33692_34627 = G__34705;
chunk__33693_34628 = G__34706;
count__33694_34629 = G__34707;
i__33695_34630 = G__34708;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33781 = cljs.core.seq(node);
var chunk__33782 = null;
var count__33783 = (0);
var i__33784 = (0);
while(true){
if((i__33784 < count__33783)){
var n = chunk__33782.cljs$core$IIndexed$_nth$arity$2(null,i__33784);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34710 = seq__33781;
var G__34711 = chunk__33782;
var G__34712 = count__33783;
var G__34713 = (i__33784 + (1));
seq__33781 = G__34710;
chunk__33782 = G__34711;
count__33783 = G__34712;
i__33784 = G__34713;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33781);
if(temp__5753__auto__){
var seq__33781__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33781__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33781__$1);
var G__34716 = cljs.core.chunk_rest(seq__33781__$1);
var G__34717 = c__4679__auto__;
var G__34718 = cljs.core.count(c__4679__auto__);
var G__34719 = (0);
seq__33781 = G__34716;
chunk__33782 = G__34717;
count__33783 = G__34718;
i__33784 = G__34719;
continue;
} else {
var n = cljs.core.first(seq__33781__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34721 = cljs.core.next(seq__33781__$1);
var G__34722 = null;
var G__34723 = (0);
var G__34724 = (0);
seq__33781 = G__34721;
chunk__33782 = G__34722;
count__33783 = G__34723;
i__33784 = G__34724;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33810 = arguments.length;
switch (G__33810) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33825 = arguments.length;
switch (G__33825) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33833 = arguments.length;
switch (G__33833) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34736 = arguments.length;
var i__4865__auto___34737 = (0);
while(true){
if((i__4865__auto___34737 < len__4864__auto___34736)){
args__4870__auto__.push((arguments[i__4865__auto___34737]));

var G__34738 = (i__4865__auto___34737 + (1));
i__4865__auto___34737 = G__34738;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33864_34740 = cljs.core.seq(nodes);
var chunk__33865_34741 = null;
var count__33866_34742 = (0);
var i__33867_34743 = (0);
while(true){
if((i__33867_34743 < count__33866_34742)){
var node_34745 = chunk__33865_34741.cljs$core$IIndexed$_nth$arity$2(null,i__33867_34743);
fragment.appendChild(shadow.dom._to_dom(node_34745));


var G__34746 = seq__33864_34740;
var G__34747 = chunk__33865_34741;
var G__34748 = count__33866_34742;
var G__34749 = (i__33867_34743 + (1));
seq__33864_34740 = G__34746;
chunk__33865_34741 = G__34747;
count__33866_34742 = G__34748;
i__33867_34743 = G__34749;
continue;
} else {
var temp__5753__auto___34750 = cljs.core.seq(seq__33864_34740);
if(temp__5753__auto___34750){
var seq__33864_34751__$1 = temp__5753__auto___34750;
if(cljs.core.chunked_seq_QMARK_(seq__33864_34751__$1)){
var c__4679__auto___34752 = cljs.core.chunk_first(seq__33864_34751__$1);
var G__34753 = cljs.core.chunk_rest(seq__33864_34751__$1);
var G__34754 = c__4679__auto___34752;
var G__34755 = cljs.core.count(c__4679__auto___34752);
var G__34756 = (0);
seq__33864_34740 = G__34753;
chunk__33865_34741 = G__34754;
count__33866_34742 = G__34755;
i__33867_34743 = G__34756;
continue;
} else {
var node_34757 = cljs.core.first(seq__33864_34751__$1);
fragment.appendChild(shadow.dom._to_dom(node_34757));


var G__34759 = cljs.core.next(seq__33864_34751__$1);
var G__34760 = null;
var G__34761 = (0);
var G__34762 = (0);
seq__33864_34740 = G__34759;
chunk__33865_34741 = G__34760;
count__33866_34742 = G__34761;
i__33867_34743 = G__34762;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33855){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33855));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33879_34766 = cljs.core.seq(scripts);
var chunk__33880_34767 = null;
var count__33881_34768 = (0);
var i__33882_34769 = (0);
while(true){
if((i__33882_34769 < count__33881_34768)){
var vec__33893_34771 = chunk__33880_34767.cljs$core$IIndexed$_nth$arity$2(null,i__33882_34769);
var script_tag_34772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33893_34771,(0),null);
var script_body_34773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33893_34771,(1),null);
eval(script_body_34773);


var G__34774 = seq__33879_34766;
var G__34775 = chunk__33880_34767;
var G__34776 = count__33881_34768;
var G__34777 = (i__33882_34769 + (1));
seq__33879_34766 = G__34774;
chunk__33880_34767 = G__34775;
count__33881_34768 = G__34776;
i__33882_34769 = G__34777;
continue;
} else {
var temp__5753__auto___34778 = cljs.core.seq(seq__33879_34766);
if(temp__5753__auto___34778){
var seq__33879_34779__$1 = temp__5753__auto___34778;
if(cljs.core.chunked_seq_QMARK_(seq__33879_34779__$1)){
var c__4679__auto___34780 = cljs.core.chunk_first(seq__33879_34779__$1);
var G__34781 = cljs.core.chunk_rest(seq__33879_34779__$1);
var G__34782 = c__4679__auto___34780;
var G__34783 = cljs.core.count(c__4679__auto___34780);
var G__34784 = (0);
seq__33879_34766 = G__34781;
chunk__33880_34767 = G__34782;
count__33881_34768 = G__34783;
i__33882_34769 = G__34784;
continue;
} else {
var vec__33906_34785 = cljs.core.first(seq__33879_34779__$1);
var script_tag_34786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33906_34785,(0),null);
var script_body_34787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33906_34785,(1),null);
eval(script_body_34787);


var G__34788 = cljs.core.next(seq__33879_34779__$1);
var G__34789 = null;
var G__34790 = (0);
var G__34791 = (0);
seq__33879_34766 = G__34788;
chunk__33880_34767 = G__34789;
count__33881_34768 = G__34790;
i__33882_34769 = G__34791;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33912){
var vec__33913 = p__33912;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33913,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33913,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33924 = arguments.length;
switch (G__33924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33945 = cljs.core.seq(style_keys);
var chunk__33946 = null;
var count__33947 = (0);
var i__33948 = (0);
while(true){
if((i__33948 < count__33947)){
var it = chunk__33946.cljs$core$IIndexed$_nth$arity$2(null,i__33948);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34799 = seq__33945;
var G__34800 = chunk__33946;
var G__34801 = count__33947;
var G__34802 = (i__33948 + (1));
seq__33945 = G__34799;
chunk__33946 = G__34800;
count__33947 = G__34801;
i__33948 = G__34802;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33945);
if(temp__5753__auto__){
var seq__33945__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33945__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33945__$1);
var G__34803 = cljs.core.chunk_rest(seq__33945__$1);
var G__34804 = c__4679__auto__;
var G__34805 = cljs.core.count(c__4679__auto__);
var G__34806 = (0);
seq__33945 = G__34803;
chunk__33946 = G__34804;
count__33947 = G__34805;
i__33948 = G__34806;
continue;
} else {
var it = cljs.core.first(seq__33945__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34807 = cljs.core.next(seq__33945__$1);
var G__34808 = null;
var G__34809 = (0);
var G__34810 = (0);
seq__33945 = G__34807;
chunk__33946 = G__34808;
count__33947 = G__34809;
i__33948 = G__34810;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33959,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33968 = k33959;
var G__33968__$1 = (((G__33968 instanceof cljs.core.Keyword))?G__33968.fqn:null);
switch (G__33968__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33959,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33971){
var vec__33972 = p__33971;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33972,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33972,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33958){
var self__ = this;
var G__33958__$1 = this;
return (new cljs.core.RecordIter((0),G__33958__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33960,other33961){
var self__ = this;
var this33960__$1 = this;
return (((!((other33961 == null)))) && ((((this33960__$1.constructor === other33961.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33960__$1.x,other33961.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33960__$1.y,other33961.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33960__$1.__extmap,other33961.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33959){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33983 = k33959;
var G__33983__$1 = (((G__33983 instanceof cljs.core.Keyword))?G__33983.fqn:null);
switch (G__33983__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33959);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33958){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33984 = cljs.core.keyword_identical_QMARK_;
var expr__33985 = k__4511__auto__;
if(cljs.core.truth_((pred__33984.cljs$core$IFn$_invoke$arity$2 ? pred__33984.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33985) : pred__33984.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33985)))){
return (new shadow.dom.Coordinate(G__33958,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33984.cljs$core$IFn$_invoke$arity$2 ? pred__33984.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33985) : pred__33984.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33985)))){
return (new shadow.dom.Coordinate(self__.x,G__33958,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33958),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33958){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33958,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33964){
var extmap__4542__auto__ = (function (){var G__34004 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33964,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33964)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34004);
} else {
return G__34004;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33964),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33964),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34021,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34034 = k34021;
var G__34034__$1 = (((G__34034 instanceof cljs.core.Keyword))?G__34034.fqn:null);
switch (G__34034__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34021,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34041){
var vec__34042 = p__34041;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34042,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34020){
var self__ = this;
var G__34020__$1 = this;
return (new cljs.core.RecordIter((0),G__34020__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34022,other34023){
var self__ = this;
var this34022__$1 = this;
return (((!((other34023 == null)))) && ((((this34022__$1.constructor === other34023.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34022__$1.w,other34023.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34022__$1.h,other34023.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34022__$1.__extmap,other34023.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34021){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34096 = k34021;
var G__34096__$1 = (((G__34096 instanceof cljs.core.Keyword))?G__34096.fqn:null);
switch (G__34096__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34021);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34020){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34100 = cljs.core.keyword_identical_QMARK_;
var expr__34101 = k__4511__auto__;
if(cljs.core.truth_((pred__34100.cljs$core$IFn$_invoke$arity$2 ? pred__34100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34101) : pred__34100.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34101)))){
return (new shadow.dom.Size(G__34020,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34100.cljs$core$IFn$_invoke$arity$2 ? pred__34100.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34101) : pred__34100.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34101)))){
return (new shadow.dom.Size(self__.w,G__34020,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34020),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34020){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34020,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34025){
var extmap__4542__auto__ = (function (){var G__34123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34025,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34123);
} else {
return G__34123;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34025),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34025),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34868 = (i + (1));
var G__34869 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34868;
ret = G__34869;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34231){
var vec__34240 = p__34231;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34240,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34255 = arguments.length;
switch (G__34255) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34875 = ps;
var G__34876 = (i + (1));
el__$1 = G__34875;
i = G__34876;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34296 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34296,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34296,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34296,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34303_34893 = cljs.core.seq(props);
var chunk__34304_34894 = null;
var count__34305_34895 = (0);
var i__34306_34896 = (0);
while(true){
if((i__34306_34896 < count__34305_34895)){
var vec__34341_34899 = chunk__34304_34894.cljs$core$IIndexed$_nth$arity$2(null,i__34306_34896);
var k_34900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34341_34899,(0),null);
var v_34901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34341_34899,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34900);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34900),v_34901);


var G__34907 = seq__34303_34893;
var G__34908 = chunk__34304_34894;
var G__34909 = count__34305_34895;
var G__34910 = (i__34306_34896 + (1));
seq__34303_34893 = G__34907;
chunk__34304_34894 = G__34908;
count__34305_34895 = G__34909;
i__34306_34896 = G__34910;
continue;
} else {
var temp__5753__auto___34911 = cljs.core.seq(seq__34303_34893);
if(temp__5753__auto___34911){
var seq__34303_34912__$1 = temp__5753__auto___34911;
if(cljs.core.chunked_seq_QMARK_(seq__34303_34912__$1)){
var c__4679__auto___34914 = cljs.core.chunk_first(seq__34303_34912__$1);
var G__34915 = cljs.core.chunk_rest(seq__34303_34912__$1);
var G__34916 = c__4679__auto___34914;
var G__34917 = cljs.core.count(c__4679__auto___34914);
var G__34918 = (0);
seq__34303_34893 = G__34915;
chunk__34304_34894 = G__34916;
count__34305_34895 = G__34917;
i__34306_34896 = G__34918;
continue;
} else {
var vec__34344_34919 = cljs.core.first(seq__34303_34912__$1);
var k_34920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34344_34919,(0),null);
var v_34921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34344_34919,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34920);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34920),v_34921);


var G__34925 = cljs.core.next(seq__34303_34912__$1);
var G__34926 = null;
var G__34927 = (0);
var G__34928 = (0);
seq__34303_34893 = G__34925;
chunk__34304_34894 = G__34926;
count__34305_34895 = G__34927;
i__34306_34896 = G__34928;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34371 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34371,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34371,(1),null);
var seq__34384_34932 = cljs.core.seq(node_children);
var chunk__34386_34933 = null;
var count__34387_34934 = (0);
var i__34388_34935 = (0);
while(true){
if((i__34388_34935 < count__34387_34934)){
var child_struct_34937 = chunk__34386_34933.cljs$core$IIndexed$_nth$arity$2(null,i__34388_34935);
if((!((child_struct_34937 == null)))){
if(typeof child_struct_34937 === 'string'){
var text_34938 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34938),child_struct_34937].join(''));
} else {
var children_34939 = shadow.dom.svg_node(child_struct_34937);
if(cljs.core.seq_QMARK_(children_34939)){
var seq__34459_34940 = cljs.core.seq(children_34939);
var chunk__34461_34941 = null;
var count__34462_34942 = (0);
var i__34463_34943 = (0);
while(true){
if((i__34463_34943 < count__34462_34942)){
var child_34944 = chunk__34461_34941.cljs$core$IIndexed$_nth$arity$2(null,i__34463_34943);
if(cljs.core.truth_(child_34944)){
node.appendChild(child_34944);


var G__34945 = seq__34459_34940;
var G__34947 = chunk__34461_34941;
var G__34948 = count__34462_34942;
var G__34949 = (i__34463_34943 + (1));
seq__34459_34940 = G__34945;
chunk__34461_34941 = G__34947;
count__34462_34942 = G__34948;
i__34463_34943 = G__34949;
continue;
} else {
var G__34950 = seq__34459_34940;
var G__34951 = chunk__34461_34941;
var G__34952 = count__34462_34942;
var G__34953 = (i__34463_34943 + (1));
seq__34459_34940 = G__34950;
chunk__34461_34941 = G__34951;
count__34462_34942 = G__34952;
i__34463_34943 = G__34953;
continue;
}
} else {
var temp__5753__auto___34955 = cljs.core.seq(seq__34459_34940);
if(temp__5753__auto___34955){
var seq__34459_34956__$1 = temp__5753__auto___34955;
if(cljs.core.chunked_seq_QMARK_(seq__34459_34956__$1)){
var c__4679__auto___34957 = cljs.core.chunk_first(seq__34459_34956__$1);
var G__34958 = cljs.core.chunk_rest(seq__34459_34956__$1);
var G__34959 = c__4679__auto___34957;
var G__34960 = cljs.core.count(c__4679__auto___34957);
var G__34961 = (0);
seq__34459_34940 = G__34958;
chunk__34461_34941 = G__34959;
count__34462_34942 = G__34960;
i__34463_34943 = G__34961;
continue;
} else {
var child_34964 = cljs.core.first(seq__34459_34956__$1);
if(cljs.core.truth_(child_34964)){
node.appendChild(child_34964);


var G__34965 = cljs.core.next(seq__34459_34956__$1);
var G__34966 = null;
var G__34967 = (0);
var G__34968 = (0);
seq__34459_34940 = G__34965;
chunk__34461_34941 = G__34966;
count__34462_34942 = G__34967;
i__34463_34943 = G__34968;
continue;
} else {
var G__34969 = cljs.core.next(seq__34459_34956__$1);
var G__34970 = null;
var G__34971 = (0);
var G__34972 = (0);
seq__34459_34940 = G__34969;
chunk__34461_34941 = G__34970;
count__34462_34942 = G__34971;
i__34463_34943 = G__34972;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34939);
}
}


var G__34976 = seq__34384_34932;
var G__34977 = chunk__34386_34933;
var G__34978 = count__34387_34934;
var G__34979 = (i__34388_34935 + (1));
seq__34384_34932 = G__34976;
chunk__34386_34933 = G__34977;
count__34387_34934 = G__34978;
i__34388_34935 = G__34979;
continue;
} else {
var G__34981 = seq__34384_34932;
var G__34982 = chunk__34386_34933;
var G__34983 = count__34387_34934;
var G__34984 = (i__34388_34935 + (1));
seq__34384_34932 = G__34981;
chunk__34386_34933 = G__34982;
count__34387_34934 = G__34983;
i__34388_34935 = G__34984;
continue;
}
} else {
var temp__5753__auto___34985 = cljs.core.seq(seq__34384_34932);
if(temp__5753__auto___34985){
var seq__34384_34986__$1 = temp__5753__auto___34985;
if(cljs.core.chunked_seq_QMARK_(seq__34384_34986__$1)){
var c__4679__auto___34990 = cljs.core.chunk_first(seq__34384_34986__$1);
var G__34991 = cljs.core.chunk_rest(seq__34384_34986__$1);
var G__34992 = c__4679__auto___34990;
var G__34993 = cljs.core.count(c__4679__auto___34990);
var G__34994 = (0);
seq__34384_34932 = G__34991;
chunk__34386_34933 = G__34992;
count__34387_34934 = G__34993;
i__34388_34935 = G__34994;
continue;
} else {
var child_struct_34997 = cljs.core.first(seq__34384_34986__$1);
if((!((child_struct_34997 == null)))){
if(typeof child_struct_34997 === 'string'){
var text_34998 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34998),child_struct_34997].join(''));
} else {
var children_35000 = shadow.dom.svg_node(child_struct_34997);
if(cljs.core.seq_QMARK_(children_35000)){
var seq__34478_35001 = cljs.core.seq(children_35000);
var chunk__34480_35002 = null;
var count__34481_35003 = (0);
var i__34482_35004 = (0);
while(true){
if((i__34482_35004 < count__34481_35003)){
var child_35006 = chunk__34480_35002.cljs$core$IIndexed$_nth$arity$2(null,i__34482_35004);
if(cljs.core.truth_(child_35006)){
node.appendChild(child_35006);


var G__35007 = seq__34478_35001;
var G__35008 = chunk__34480_35002;
var G__35009 = count__34481_35003;
var G__35010 = (i__34482_35004 + (1));
seq__34478_35001 = G__35007;
chunk__34480_35002 = G__35008;
count__34481_35003 = G__35009;
i__34482_35004 = G__35010;
continue;
} else {
var G__35011 = seq__34478_35001;
var G__35012 = chunk__34480_35002;
var G__35013 = count__34481_35003;
var G__35014 = (i__34482_35004 + (1));
seq__34478_35001 = G__35011;
chunk__34480_35002 = G__35012;
count__34481_35003 = G__35013;
i__34482_35004 = G__35014;
continue;
}
} else {
var temp__5753__auto___35015__$1 = cljs.core.seq(seq__34478_35001);
if(temp__5753__auto___35015__$1){
var seq__34478_35016__$1 = temp__5753__auto___35015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34478_35016__$1)){
var c__4679__auto___35017 = cljs.core.chunk_first(seq__34478_35016__$1);
var G__35018 = cljs.core.chunk_rest(seq__34478_35016__$1);
var G__35019 = c__4679__auto___35017;
var G__35020 = cljs.core.count(c__4679__auto___35017);
var G__35021 = (0);
seq__34478_35001 = G__35018;
chunk__34480_35002 = G__35019;
count__34481_35003 = G__35020;
i__34482_35004 = G__35021;
continue;
} else {
var child_35022 = cljs.core.first(seq__34478_35016__$1);
if(cljs.core.truth_(child_35022)){
node.appendChild(child_35022);


var G__35023 = cljs.core.next(seq__34478_35016__$1);
var G__35024 = null;
var G__35025 = (0);
var G__35026 = (0);
seq__34478_35001 = G__35023;
chunk__34480_35002 = G__35024;
count__34481_35003 = G__35025;
i__34482_35004 = G__35026;
continue;
} else {
var G__35027 = cljs.core.next(seq__34478_35016__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__34478_35001 = G__35027;
chunk__34480_35002 = G__35028;
count__34481_35003 = G__35029;
i__34482_35004 = G__35030;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35000);
}
}


var G__35031 = cljs.core.next(seq__34384_34986__$1);
var G__35032 = null;
var G__35033 = (0);
var G__35034 = (0);
seq__34384_34932 = G__35031;
chunk__34386_34933 = G__35032;
count__34387_34934 = G__35033;
i__34388_34935 = G__35034;
continue;
} else {
var G__35035 = cljs.core.next(seq__34384_34986__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__34384_34932 = G__35035;
chunk__34386_34933 = G__35036;
count__34387_34934 = G__35037;
i__34388_34935 = G__35038;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35048 = arguments.length;
var i__4865__auto___35049 = (0);
while(true){
if((i__4865__auto___35049 < len__4864__auto___35048)){
args__4870__auto__.push((arguments[i__4865__auto___35049]));

var G__35050 = (i__4865__auto___35049 + (1));
i__4865__auto___35049 = G__35050;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34486){
var G__34487 = cljs.core.first(seq34486);
var seq34486__$1 = cljs.core.next(seq34486);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34487,seq34486__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34503 = arguments.length;
switch (G__34503) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29062__auto___35060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29063__auto__ = (function (){var switch__28702__auto__ = (function (state_34512){
var state_val_34513 = (state_34512[(1)]);
if((state_val_34513 === (1))){
var state_34512__$1 = state_34512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34512__$1,(2),once_or_cleanup);
} else {
if((state_val_34513 === (2))){
var inst_34509 = (state_34512[(2)]);
var inst_34510 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34512__$1 = (function (){var statearr_34514 = state_34512;
(statearr_34514[(7)] = inst_34509);

return statearr_34514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34512__$1,inst_34510);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28703__auto__ = null;
var shadow$dom$state_machine__28703__auto____0 = (function (){
var statearr_34515 = [null,null,null,null,null,null,null,null];
(statearr_34515[(0)] = shadow$dom$state_machine__28703__auto__);

(statearr_34515[(1)] = (1));

return statearr_34515;
});
var shadow$dom$state_machine__28703__auto____1 = (function (state_34512){
while(true){
var ret_value__28704__auto__ = (function (){try{while(true){
var result__28705__auto__ = switch__28702__auto__(state_34512);
if(cljs.core.keyword_identical_QMARK_(result__28705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28705__auto__;
}
break;
}
}catch (e34516){var ex__28706__auto__ = e34516;
var statearr_34517_35064 = state_34512;
(statearr_34517_35064[(2)] = ex__28706__auto__);


if(cljs.core.seq((state_34512[(4)]))){
var statearr_34518_35065 = state_34512;
(statearr_34518_35065[(1)] = cljs.core.first((state_34512[(4)])));

} else {
throw ex__28706__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35069 = state_34512;
state_34512 = G__35069;
continue;
} else {
return ret_value__28704__auto__;
}
break;
}
});
shadow$dom$state_machine__28703__auto__ = function(state_34512){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28703__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28703__auto____1.call(this,state_34512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28703__auto____0;
shadow$dom$state_machine__28703__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28703__auto____1;
return shadow$dom$state_machine__28703__auto__;
})()
})();
var state__29064__auto__ = (function (){var statearr_34520 = f__29063__auto__();
(statearr_34520[(6)] = c__29062__auto___35060);

return statearr_34520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29064__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
