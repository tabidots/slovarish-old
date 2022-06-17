goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__1026773 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__1026774 = null;
var count__1026775 = (0);
var i__1026776 = (0);
while(true){
if((i__1026776 < count__1026775)){
var el = chunk__1026774.cljs$core$IIndexed$_nth$arity$2(null,i__1026776);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__1026798 = seq__1026773;
var G__1026799 = chunk__1026774;
var G__1026800 = count__1026775;
var G__1026801 = (i__1026776 + (1));
seq__1026773 = G__1026798;
chunk__1026774 = G__1026799;
count__1026775 = G__1026800;
i__1026776 = G__1026801;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__1026773);
if(temp__5753__auto__){
var seq__1026773__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1026773__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__1026773__$1);
var G__1026802 = cljs.core.chunk_rest(seq__1026773__$1);
var G__1026803 = c__4679__auto__;
var G__1026804 = cljs.core.count(c__4679__auto__);
var G__1026805 = (0);
seq__1026773 = G__1026802;
chunk__1026774 = G__1026803;
count__1026775 = G__1026804;
i__1026776 = G__1026805;
continue;
} else {
var el = cljs.core.first(seq__1026773__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__1026806 = cljs.core.next(seq__1026773__$1);
var G__1026807 = null;
var G__1026808 = (0);
var G__1026809 = (0);
seq__1026773 = G__1026806;
chunk__1026774 = G__1026807;
count__1026775 = G__1026808;
i__1026776 = G__1026809;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1026778_SHARP_){
return p1__1026778_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__1026779 = cljs.core.seq(cells);
var chunk__1026781 = null;
var count__1026782 = (0);
var i__1026783 = (0);
while(true){
if((i__1026783 < count__1026782)){
var cell = chunk__1026781.cljs$core$IIndexed$_nth$arity$2(null,i__1026783);
var cell_type_1026810 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_1026811 = goog.color.hexToRgb((cell_type_1026810.cljs$core$IFn$_invoke$arity$1 ? cell_type_1026810.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_1026810.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_1026812 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_1026812 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_1026811,white,score_1026812)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__1026787 = slovarish.frontend.state.result();
var G__1026787__$1 = (((G__1026787 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__1026787));
if((G__1026787__$1 == null)){
return null;
} else {
return cljs.core.name(G__1026787__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__1026814 = seq__1026779;
var G__1026815 = chunk__1026781;
var G__1026816 = count__1026782;
var G__1026817 = (i__1026783 + (1));
seq__1026779 = G__1026814;
chunk__1026781 = G__1026815;
count__1026782 = G__1026816;
i__1026783 = G__1026817;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__1026779);
if(temp__5753__auto__){
var seq__1026779__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1026779__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__1026779__$1);
var G__1026818 = cljs.core.chunk_rest(seq__1026779__$1);
var G__1026819 = c__4679__auto__;
var G__1026820 = cljs.core.count(c__4679__auto__);
var G__1026821 = (0);
seq__1026779 = G__1026818;
chunk__1026781 = G__1026819;
count__1026782 = G__1026820;
i__1026783 = G__1026821;
continue;
} else {
var cell = cljs.core.first(seq__1026779__$1);
var cell_type_1026822 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_1026823 = goog.color.hexToRgb((cell_type_1026822.cljs$core$IFn$_invoke$arity$1 ? cell_type_1026822.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_1026822.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_1026824 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_1026824 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_1026823,white,score_1026824)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__1026788 = slovarish.frontend.state.result();
var G__1026788__$1 = (((G__1026788 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__1026788));
if((G__1026788__$1 == null)){
return null;
} else {
return cljs.core.name(G__1026788__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__1026825 = cljs.core.next(seq__1026779__$1);
var G__1026826 = null;
var G__1026827 = (0);
var G__1026828 = (0);
seq__1026779 = G__1026825;
chunk__1026781 = G__1026826;
count__1026782 = G__1026827;
i__1026783 = G__1026828;
continue;
}
} else {
return null;
}
}
break;
}
});
slovarish.frontend.navigation.go_to_word = (function slovarish$frontend$navigation$go_to_word(var_args){
var args__4870__auto__ = [];
var len__4864__auto___1026829 = arguments.length;
var i__4865__auto___1026830 = (0);
while(true){
if((i__4865__auto___1026830 < len__4864__auto___1026829)){
args__4870__auto__.push((arguments[i__4865__auto___1026830]));

var G__1026831 = (i__4865__auto___1026830 + (1));
i__4865__auto___1026830 = G__1026831;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__1026791){
var map__1026792 = p__1026791;
var map__1026792__$1 = cljs.core.__destructure_map(map__1026792);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1026792__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1026792__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__1026793 = (function (){var G__1026794 = cljs.core.deref(slovarish.frontend.state.pos);
var G__1026794__$1 = (((G__1026794 instanceof cljs.core.Keyword))?G__1026794.fqn:null);
switch (G__1026794__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var fexpr__1026795 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1026795.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026795.cljs$core$IFn$_invoke$arity$1(word) : fexpr__1026795.call(null,word));

break;
case "adjective":
var fexpr__1026796 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__1026796.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026796.cljs$core$IFn$_invoke$arity$1(word) : fexpr__1026796.call(null,word));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__1026793);
} else {
return G__1026793;
}
})():null));
}

cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(0));

cljs.core.reset_BANG_(slovarish.frontend.state.which_verb_forms_QMARK_,new cljs.core.Keyword(null,"main","main",-2117802661));

slovarish.frontend.navigation.resize_input_text();

setTimeout(slovarish.frontend.navigation.toggle_gloss_arrows,(25));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))){
return setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
} else {
return null;
}
}));

(slovarish.frontend.navigation.go_to_word.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq1026789){
var G__1026790 = cljs.core.first(seq1026789);
var seq1026789__$1 = cljs.core.next(seq1026789);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1026790,seq1026789__$1);
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
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))){
return setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.navigation.js.map
