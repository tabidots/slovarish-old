goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__74397 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__74398 = null;
var count__74399 = (0);
var i__74400 = (0);
while(true){
if((i__74400 < count__74399)){
var el = chunk__74398.cljs$core$IIndexed$_nth$arity$2(null,i__74400);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__74423 = seq__74397;
var G__74424 = chunk__74398;
var G__74425 = count__74399;
var G__74426 = (i__74400 + (1));
seq__74397 = G__74423;
chunk__74398 = G__74424;
count__74399 = G__74425;
i__74400 = G__74426;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74397);
if(temp__5753__auto__){
var seq__74397__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74397__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74397__$1);
var G__74427 = cljs.core.chunk_rest(seq__74397__$1);
var G__74428 = c__4679__auto__;
var G__74429 = cljs.core.count(c__4679__auto__);
var G__74430 = (0);
seq__74397 = G__74427;
chunk__74398 = G__74428;
count__74399 = G__74429;
i__74400 = G__74430;
continue;
} else {
var el = cljs.core.first(seq__74397__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__74431 = cljs.core.next(seq__74397__$1);
var G__74432 = null;
var G__74433 = (0);
var G__74434 = (0);
seq__74397 = G__74431;
chunk__74398 = G__74432;
count__74399 = G__74433;
i__74400 = G__74434;
continue;
}
} else {
return null;
}
}
break;
}
});
slovarish.frontend.navigation.base_cell_colors = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),"#eee",new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882),"#D7EBBA",new cljs.core.Keyword(null,"masculine","masculine",-523682579),"#bdd6ff",new cljs.core.Keyword(null,"feminine","feminine",-223910280),"#ffc2e9",new cljs.core.Keyword(null,"neuter","neuter",-2013207957),"#fff0a6",new cljs.core.Keyword(null,"common","common",-1822281391),"#deccf4"], null);
slovarish.frontend.navigation.color_cells_by_score = (function slovarish$frontend$navigation$color_cells_by_score(){
var white = goog.color.hexToRgb("#fffcf5");
var cells = document.querySelectorAll("#noun-table td");
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__74401_SHARP_){
return p1__74401_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__74403 = cljs.core.seq(cells);
var chunk__74405 = null;
var count__74406 = (0);
var i__74407 = (0);
while(true){
if((i__74407 < count__74406)){
var cell = chunk__74405.cljs$core$IIndexed$_nth$arity$2(null,i__74407);
var cell_type_74435 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_74436 = goog.color.hexToRgb((cell_type_74435.cljs$core$IFn$_invoke$arity$1 ? cell_type_74435.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_74435.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_74437 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() * factor);
goog.dom.classlist.removeAll(cell,["masculine","feminine","neuter","common","default","light","uncommon"]);

if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"wordform-scores","wordform-scores",454926526).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
} else {
return and__4251__auto__;
}
})())){
if((score_74437 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_74436,white,score_74437)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__74411 = slovarish.frontend.state.result();
var G__74411__$1 = (((G__74411 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__74411));
if((G__74411__$1 == null)){
return null;
} else {
return cljs.core.name(G__74411__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__74438 = seq__74403;
var G__74439 = chunk__74405;
var G__74440 = count__74406;
var G__74441 = (i__74407 + (1));
seq__74403 = G__74438;
chunk__74405 = G__74439;
count__74406 = G__74440;
i__74407 = G__74441;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74403);
if(temp__5753__auto__){
var seq__74403__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74403__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74403__$1);
var G__74442 = cljs.core.chunk_rest(seq__74403__$1);
var G__74443 = c__4679__auto__;
var G__74444 = cljs.core.count(c__4679__auto__);
var G__74445 = (0);
seq__74403 = G__74442;
chunk__74405 = G__74443;
count__74406 = G__74444;
i__74407 = G__74445;
continue;
} else {
var cell = cljs.core.first(seq__74403__$1);
var cell_type_74446 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_74447 = goog.color.hexToRgb((cell_type_74446.cljs$core$IFn$_invoke$arity$1 ? cell_type_74446.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_74446.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_74448 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() * factor);
goog.dom.classlist.removeAll(cell,["masculine","feminine","neuter","common","default","light","uncommon"]);

if(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"wordform-scores","wordform-scores",454926526).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
} else {
return and__4251__auto__;
}
})())){
if((score_74448 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_74447,white,score_74448)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__74412 = slovarish.frontend.state.result();
var G__74412__$1 = (((G__74412 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__74412));
if((G__74412__$1 == null)){
return null;
} else {
return cljs.core.name(G__74412__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__74449 = cljs.core.next(seq__74403__$1);
var G__74450 = null;
var G__74451 = (0);
var G__74452 = (0);
seq__74403 = G__74449;
chunk__74405 = G__74450;
count__74406 = G__74451;
i__74407 = G__74452;
continue;
}
} else {
return null;
}
}
break;
}
});
slovarish.frontend.navigation.current_hash = (function slovarish$frontend$navigation$current_hash(){
return ["#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(cljs.core.deref(slovarish.frontend.state.pos)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),(((cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) > (0)))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) + (1)))].join(''):null)].join('');
});
slovarish.frontend.navigation.push_state = (function slovarish$frontend$navigation$push_state(){
return history.pushState(cljs.core.PersistentArrayMap.EMPTY,null,slovarish.frontend.navigation.current_hash());
});
slovarish.frontend.navigation.go_to_word = (function slovarish$frontend$navigation$go_to_word(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74453 = arguments.length;
var i__4865__auto___74454 = (0);
while(true){
if((i__4865__auto___74454 < len__4864__auto___74453)){
args__4870__auto__.push((arguments[i__4865__auto___74454]));

var G__74455 = (i__4865__auto___74454 + (1));
i__4865__auto___74454 = G__74455;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__74415){
var map__74416 = p__74415;
var map__74416__$1 = cljs.core.__destructure_map(map__74416);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74416__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74416__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74416__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__74417 = (function (){var G__74418 = cljs.core.deref(slovarish.frontend.state.pos);
var G__74418__$1 = (((G__74418 instanceof cljs.core.Keyword))?G__74418.fqn:null);
switch (G__74418__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var fexpr__74419 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__74419.cljs$core$IFn$_invoke$arity$1 ? fexpr__74419.cljs$core$IFn$_invoke$arity$1(word) : fexpr__74419.call(null,word));

break;
case "adjective":
var fexpr__74420 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__74420.cljs$core$IFn$_invoke$arity$1 ? fexpr__74420.cljs$core$IFn$_invoke$arity$1(word) : fexpr__74420.call(null,word));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__74417);
} else {
return G__74417;
}
})():null));
}

cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(0));

cljs.core.reset_BANG_(slovarish.frontend.state.which_verb_forms_QMARK_,new cljs.core.Keyword(null,"main","main",-2117802661));

slovarish.frontend.navigation.resize_input_text();

setTimeout(slovarish.frontend.navigation.toggle_gloss_arrows,(25));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))){
setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = push_state_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
var or__4253__auto__ = new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460));
if(and__4251__auto____$1){
return slovarish.frontend.state.result();
} else {
return and__4251__auto____$1;
}
}
} else {
return and__4251__auto__;
}
})())){
return slovarish.frontend.navigation.push_state();
} else {
return null;
}
}));

(slovarish.frontend.navigation.go_to_word.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq74413){
var G__74414 = cljs.core.first(seq74413);
var seq74413__$1 = cljs.core.next(seq74413);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74414,seq74413__$1);
}));

slovarish.frontend.navigation.prev_sense = (function slovarish$frontend$navigation$prev_sense(){
if(cljs.core.truth_((function (){var and__4251__auto__ = (cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) > (0));
if(and__4251__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.results),(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) - (1)));
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.which_result_QMARK_,cljs.core.dec);

slovarish.frontend.navigation.push_state();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))){
return setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
} else {
return null;
}
});
slovarish.frontend.navigation.next_sense = (function slovarish$frontend$navigation$next_sense(){
if(((cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) + (1)) < cljs.core.count(cljs.core.deref(slovarish.frontend.state.results)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.which_result_QMARK_,cljs.core.inc);

slovarish.frontend.navigation.push_state();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))){
return setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.navigation.js.map
