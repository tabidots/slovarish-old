goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__77115 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__77116 = null;
var count__77117 = (0);
var i__77118 = (0);
while(true){
if((i__77118 < count__77117)){
var el = chunk__77116.cljs$core$IIndexed$_nth$arity$2(null,i__77118);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__77141 = seq__77115;
var G__77142 = chunk__77116;
var G__77143 = count__77117;
var G__77144 = (i__77118 + (1));
seq__77115 = G__77141;
chunk__77116 = G__77142;
count__77117 = G__77143;
i__77118 = G__77144;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77115);
if(temp__5753__auto__){
var seq__77115__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77115__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77115__$1);
var G__77145 = cljs.core.chunk_rest(seq__77115__$1);
var G__77146 = c__4679__auto__;
var G__77147 = cljs.core.count(c__4679__auto__);
var G__77148 = (0);
seq__77115 = G__77145;
chunk__77116 = G__77146;
count__77117 = G__77147;
i__77118 = G__77148;
continue;
} else {
var el = cljs.core.first(seq__77115__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__77149 = cljs.core.next(seq__77115__$1);
var G__77150 = null;
var G__77151 = (0);
var G__77152 = (0);
seq__77115 = G__77149;
chunk__77116 = G__77150;
count__77117 = G__77151;
i__77118 = G__77152;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77119_SHARP_){
return p1__77119_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__77120 = cljs.core.seq(cells);
var chunk__77122 = null;
var count__77123 = (0);
var i__77124 = (0);
while(true){
if((i__77124 < count__77123)){
var cell = chunk__77122.cljs$core$IIndexed$_nth$arity$2(null,i__77124);
var cell_type_77153 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_77154 = goog.color.hexToRgb((cell_type_77153.cljs$core$IFn$_invoke$arity$1 ? cell_type_77153.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_77153.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_77155 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_77155 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_77154,white,score_77155)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__77128 = slovarish.frontend.state.result();
var G__77128__$1 = (((G__77128 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__77128));
if((G__77128__$1 == null)){
return null;
} else {
return cljs.core.name(G__77128__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__77156 = seq__77120;
var G__77157 = chunk__77122;
var G__77158 = count__77123;
var G__77159 = (i__77124 + (1));
seq__77120 = G__77156;
chunk__77122 = G__77157;
count__77123 = G__77158;
i__77124 = G__77159;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77120);
if(temp__5753__auto__){
var seq__77120__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77120__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77120__$1);
var G__77160 = cljs.core.chunk_rest(seq__77120__$1);
var G__77161 = c__4679__auto__;
var G__77162 = cljs.core.count(c__4679__auto__);
var G__77163 = (0);
seq__77120 = G__77160;
chunk__77122 = G__77161;
count__77123 = G__77162;
i__77124 = G__77163;
continue;
} else {
var cell = cljs.core.first(seq__77120__$1);
var cell_type_77164 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_77165 = goog.color.hexToRgb((cell_type_77164.cljs$core$IFn$_invoke$arity$1 ? cell_type_77164.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_77164.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_77166 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_77166 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_77165,white,score_77166)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__77129 = slovarish.frontend.state.result();
var G__77129__$1 = (((G__77129 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__77129));
if((G__77129__$1 == null)){
return null;
} else {
return cljs.core.name(G__77129__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__77167 = cljs.core.next(seq__77120__$1);
var G__77168 = null;
var G__77169 = (0);
var G__77170 = (0);
seq__77120 = G__77167;
chunk__77122 = G__77168;
count__77123 = G__77169;
i__77124 = G__77170;
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
if(clojure.string.blank_QMARK_(cljs.core.deref(slovarish.frontend.state.input))){
return "#/";
} else {
return ["#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.name(cljs.core.deref(slovarish.frontend.state.pos)))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),(((cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) > (0)))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(slovarish.frontend.state.which_result_QMARK_) + (1)))].join(''):null)].join('');
}
});
slovarish.frontend.navigation.push_state = (function slovarish$frontend$navigation$push_state(){
return history.pushState(cljs.core.PersistentArrayMap.EMPTY,null,slovarish.frontend.navigation.current_hash());
});
slovarish.frontend.navigation.go_to_word = (function slovarish$frontend$navigation$go_to_word(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77171 = arguments.length;
var i__4865__auto___77172 = (0);
while(true){
if((i__4865__auto___77172 < len__4864__auto___77171)){
args__4870__auto__.push((arguments[i__4865__auto___77172]));

var G__77173 = (i__4865__auto___77172 + (1));
i__4865__auto___77172 = G__77173;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__77132){
var map__77133 = p__77132;
var map__77133__$1 = cljs.core.__destructure_map(map__77133);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77133__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77133__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77133__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__77134 = (function (){var G__77135 = cljs.core.deref(slovarish.frontend.state.pos);
var G__77135__$1 = (((G__77135 instanceof cljs.core.Keyword))?G__77135.fqn:null);
switch (G__77135__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var G__77137 = clojure.string.lower_case(word);
var fexpr__77136 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__77136.cljs$core$IFn$_invoke$arity$1 ? fexpr__77136.cljs$core$IFn$_invoke$arity$1(G__77137) : fexpr__77136.call(null,G__77137));

break;
case "adjective":
var G__77139 = clojure.string.lower_case(word);
var fexpr__77138 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__77138.cljs$core$IFn$_invoke$arity$1 ? fexpr__77138.cljs$core$IFn$_invoke$arity$1(G__77139) : fexpr__77138.call(null,G__77139));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__77134);
} else {
return G__77134;
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
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq77130){
var G__77131 = cljs.core.first(seq77130);
var seq77130__$1 = cljs.core.next(seq77130);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77131,seq77130__$1);
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
