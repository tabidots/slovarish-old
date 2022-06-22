goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__53788 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__53789 = null;
var count__53790 = (0);
var i__53791 = (0);
while(true){
if((i__53791 < count__53790)){
var el = chunk__53789.cljs$core$IIndexed$_nth$arity$2(null,i__53791);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__53816 = seq__53788;
var G__53817 = chunk__53789;
var G__53818 = count__53790;
var G__53819 = (i__53791 + (1));
seq__53788 = G__53816;
chunk__53789 = G__53817;
count__53790 = G__53818;
i__53791 = G__53819;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53788);
if(temp__5753__auto__){
var seq__53788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53788__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53788__$1);
var G__53820 = cljs.core.chunk_rest(seq__53788__$1);
var G__53821 = c__4679__auto__;
var G__53822 = cljs.core.count(c__4679__auto__);
var G__53823 = (0);
seq__53788 = G__53820;
chunk__53789 = G__53821;
count__53790 = G__53822;
i__53791 = G__53823;
continue;
} else {
var el = cljs.core.first(seq__53788__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__53824 = cljs.core.next(seq__53788__$1);
var G__53825 = null;
var G__53826 = (0);
var G__53827 = (0);
seq__53788 = G__53824;
chunk__53789 = G__53825;
count__53790 = G__53826;
i__53791 = G__53827;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53793_SHARP_){
return p1__53793_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__53794 = cljs.core.seq(cells);
var chunk__53796 = null;
var count__53797 = (0);
var i__53798 = (0);
while(true){
if((i__53798 < count__53797)){
var cell = chunk__53796.cljs$core$IIndexed$_nth$arity$2(null,i__53798);
var cell_type_53828 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_53829 = goog.color.hexToRgb((cell_type_53828.cljs$core$IFn$_invoke$arity$1 ? cell_type_53828.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_53828.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_53830 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_53830 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_53829,white,score_53830)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__53802 = slovarish.frontend.state.result();
var G__53802__$1 = (((G__53802 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__53802));
if((G__53802__$1 == null)){
return null;
} else {
return cljs.core.name(G__53802__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__53831 = seq__53794;
var G__53832 = chunk__53796;
var G__53833 = count__53797;
var G__53834 = (i__53798 + (1));
seq__53794 = G__53831;
chunk__53796 = G__53832;
count__53797 = G__53833;
i__53798 = G__53834;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53794);
if(temp__5753__auto__){
var seq__53794__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53794__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53794__$1);
var G__53835 = cljs.core.chunk_rest(seq__53794__$1);
var G__53836 = c__4679__auto__;
var G__53837 = cljs.core.count(c__4679__auto__);
var G__53838 = (0);
seq__53794 = G__53835;
chunk__53796 = G__53836;
count__53797 = G__53837;
i__53798 = G__53838;
continue;
} else {
var cell = cljs.core.first(seq__53794__$1);
var cell_type_53839 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_53840 = goog.color.hexToRgb((cell_type_53839.cljs$core$IFn$_invoke$arity$1 ? cell_type_53839.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_53839.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_53841 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_53841 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_53840,white,score_53841)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__53803 = slovarish.frontend.state.result();
var G__53803__$1 = (((G__53803 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__53803));
if((G__53803__$1 == null)){
return null;
} else {
return cljs.core.name(G__53803__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__53842 = cljs.core.next(seq__53794__$1);
var G__53843 = null;
var G__53844 = (0);
var G__53845 = (0);
seq__53794 = G__53842;
chunk__53796 = G__53843;
count__53797 = G__53844;
i__53798 = G__53845;
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
var len__4864__auto___53846 = arguments.length;
var i__4865__auto___53847 = (0);
while(true){
if((i__4865__auto___53847 < len__4864__auto___53846)){
args__4870__auto__.push((arguments[i__4865__auto___53847]));

var G__53848 = (i__4865__auto___53847 + (1));
i__4865__auto___53847 = G__53848;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__53806){
var map__53807 = p__53806;
var map__53807__$1 = cljs.core.__destructure_map(map__53807);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53807__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53807__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53807__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__53808 = (function (){var G__53809 = cljs.core.deref(slovarish.frontend.state.pos);
var G__53809__$1 = (((G__53809 instanceof cljs.core.Keyword))?G__53809.fqn:null);
switch (G__53809__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var G__53811 = clojure.string.lower_case(word);
var fexpr__53810 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__53810.cljs$core$IFn$_invoke$arity$1 ? fexpr__53810.cljs$core$IFn$_invoke$arity$1(G__53811) : fexpr__53810.call(null,G__53811));

break;
case "adjective":
var G__53813 = clojure.string.lower_case(word);
var fexpr__53812 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__53812.cljs$core$IFn$_invoke$arity$1 ? fexpr__53812.cljs$core$IFn$_invoke$arity$1(G__53813) : fexpr__53812.call(null,G__53813));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__53808);
} else {
return G__53808;
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
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq53804){
var G__53805 = cljs.core.first(seq53804);
var seq53804__$1 = cljs.core.next(seq53804);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53805,seq53804__$1);
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
