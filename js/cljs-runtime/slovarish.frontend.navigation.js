goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__43662 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__43663 = null;
var count__43664 = (0);
var i__43665 = (0);
while(true){
if((i__43665 < count__43664)){
var el = chunk__43663.cljs$core$IIndexed$_nth$arity$2(null,i__43665);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__43689 = seq__43662;
var G__43690 = chunk__43663;
var G__43691 = count__43664;
var G__43692 = (i__43665 + (1));
seq__43662 = G__43689;
chunk__43663 = G__43690;
count__43664 = G__43691;
i__43665 = G__43692;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43662);
if(temp__5753__auto__){
var seq__43662__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43662__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43662__$1);
var G__43693 = cljs.core.chunk_rest(seq__43662__$1);
var G__43694 = c__4679__auto__;
var G__43695 = cljs.core.count(c__4679__auto__);
var G__43696 = (0);
seq__43662 = G__43693;
chunk__43663 = G__43694;
count__43664 = G__43695;
i__43665 = G__43696;
continue;
} else {
var el = cljs.core.first(seq__43662__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__43697 = cljs.core.next(seq__43662__$1);
var G__43698 = null;
var G__43699 = (0);
var G__43700 = (0);
seq__43662 = G__43697;
chunk__43663 = G__43698;
count__43664 = G__43699;
i__43665 = G__43700;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43666_SHARP_){
return p1__43666_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__43667 = cljs.core.seq(cells);
var chunk__43669 = null;
var count__43670 = (0);
var i__43671 = (0);
while(true){
if((i__43671 < count__43670)){
var cell = chunk__43669.cljs$core$IIndexed$_nth$arity$2(null,i__43671);
var cell_type_43701 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_43702 = goog.color.hexToRgb((cell_type_43701.cljs$core$IFn$_invoke$arity$1 ? cell_type_43701.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_43701.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_43703 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_43703 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_43702,white,score_43703)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__43675 = slovarish.frontend.state.result();
var G__43675__$1 = (((G__43675 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__43675));
if((G__43675__$1 == null)){
return null;
} else {
return cljs.core.name(G__43675__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__43704 = seq__43667;
var G__43705 = chunk__43669;
var G__43706 = count__43670;
var G__43707 = (i__43671 + (1));
seq__43667 = G__43704;
chunk__43669 = G__43705;
count__43670 = G__43706;
i__43671 = G__43707;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43667);
if(temp__5753__auto__){
var seq__43667__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43667__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43667__$1);
var G__43708 = cljs.core.chunk_rest(seq__43667__$1);
var G__43709 = c__4679__auto__;
var G__43710 = cljs.core.count(c__4679__auto__);
var G__43711 = (0);
seq__43667 = G__43708;
chunk__43669 = G__43709;
count__43670 = G__43710;
i__43671 = G__43711;
continue;
} else {
var cell = cljs.core.first(seq__43667__$1);
var cell_type_43712 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_43713 = goog.color.hexToRgb((cell_type_43712.cljs$core$IFn$_invoke$arity$1 ? cell_type_43712.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_43712.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_43714 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_43714 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_43713,white,score_43714)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__43676 = slovarish.frontend.state.result();
var G__43676__$1 = (((G__43676 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__43676));
if((G__43676__$1 == null)){
return null;
} else {
return cljs.core.name(G__43676__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__43715 = cljs.core.next(seq__43667__$1);
var G__43716 = null;
var G__43717 = (0);
var G__43718 = (0);
seq__43667 = G__43715;
chunk__43669 = G__43716;
count__43670 = G__43717;
i__43671 = G__43718;
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
var len__4864__auto___43719 = arguments.length;
var i__4865__auto___43720 = (0);
while(true){
if((i__4865__auto___43720 < len__4864__auto___43719)){
args__4870__auto__.push((arguments[i__4865__auto___43720]));

var G__43721 = (i__4865__auto___43720 + (1));
i__4865__auto___43720 = G__43721;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__43680){
var map__43681 = p__43680;
var map__43681__$1 = cljs.core.__destructure_map(map__43681);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43681__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43681__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43681__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__43682 = (function (){var G__43683 = cljs.core.deref(slovarish.frontend.state.pos);
var G__43683__$1 = (((G__43683 instanceof cljs.core.Keyword))?G__43683.fqn:null);
switch (G__43683__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var G__43685 = clojure.string.lower_case(word);
var fexpr__43684 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__43684.cljs$core$IFn$_invoke$arity$1 ? fexpr__43684.cljs$core$IFn$_invoke$arity$1(G__43685) : fexpr__43684.call(null,G__43685));

break;
case "adjective":
var G__43687 = clojure.string.lower_case(word);
var fexpr__43686 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__43686.cljs$core$IFn$_invoke$arity$1 ? fexpr__43686.cljs$core$IFn$_invoke$arity$1(G__43687) : fexpr__43686.call(null,G__43687));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__43682);
} else {
return G__43682;
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
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq43678){
var G__43679 = cljs.core.first(seq43678);
var seq43678__$1 = cljs.core.next(seq43678);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43679,seq43678__$1);
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
