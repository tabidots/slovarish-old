goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__70181 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__70182 = null;
var count__70183 = (0);
var i__70184 = (0);
while(true){
if((i__70184 < count__70183)){
var el = chunk__70182.cljs$core$IIndexed$_nth$arity$2(null,i__70184);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__70205 = seq__70181;
var G__70206 = chunk__70182;
var G__70207 = count__70183;
var G__70208 = (i__70184 + (1));
seq__70181 = G__70205;
chunk__70182 = G__70206;
count__70183 = G__70207;
i__70184 = G__70208;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70181);
if(temp__5753__auto__){
var seq__70181__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70181__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__70181__$1);
var G__70209 = cljs.core.chunk_rest(seq__70181__$1);
var G__70210 = c__4679__auto__;
var G__70211 = cljs.core.count(c__4679__auto__);
var G__70212 = (0);
seq__70181 = G__70209;
chunk__70182 = G__70210;
count__70183 = G__70211;
i__70184 = G__70212;
continue;
} else {
var el = cljs.core.first(seq__70181__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__70213 = cljs.core.next(seq__70181__$1);
var G__70214 = null;
var G__70215 = (0);
var G__70216 = (0);
seq__70181 = G__70213;
chunk__70182 = G__70214;
count__70183 = G__70215;
i__70184 = G__70216;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__70185_SHARP_){
return p1__70185_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__70186 = cljs.core.seq(cells);
var chunk__70188 = null;
var count__70189 = (0);
var i__70190 = (0);
while(true){
if((i__70190 < count__70189)){
var cell = chunk__70188.cljs$core$IIndexed$_nth$arity$2(null,i__70190);
var cell_type_70217 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_70218 = goog.color.hexToRgb((cell_type_70217.cljs$core$IFn$_invoke$arity$1 ? cell_type_70217.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_70217.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_70219 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_70219 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_70218,white,score_70219)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__70194 = slovarish.frontend.state.result();
var G__70194__$1 = (((G__70194 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__70194));
if((G__70194__$1 == null)){
return null;
} else {
return cljs.core.name(G__70194__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__70221 = seq__70186;
var G__70222 = chunk__70188;
var G__70223 = count__70189;
var G__70224 = (i__70190 + (1));
seq__70186 = G__70221;
chunk__70188 = G__70222;
count__70189 = G__70223;
i__70190 = G__70224;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70186);
if(temp__5753__auto__){
var seq__70186__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70186__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__70186__$1);
var G__70226 = cljs.core.chunk_rest(seq__70186__$1);
var G__70227 = c__4679__auto__;
var G__70228 = cljs.core.count(c__4679__auto__);
var G__70229 = (0);
seq__70186 = G__70226;
chunk__70188 = G__70227;
count__70189 = G__70228;
i__70190 = G__70229;
continue;
} else {
var cell = cljs.core.first(seq__70186__$1);
var cell_type_70230 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_70231 = goog.color.hexToRgb((cell_type_70230.cljs$core$IFn$_invoke$arity$1 ? cell_type_70230.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_70230.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_70232 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_70232 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_70231,white,score_70232)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__70195 = slovarish.frontend.state.result();
var G__70195__$1 = (((G__70195 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__70195));
if((G__70195__$1 == null)){
return null;
} else {
return cljs.core.name(G__70195__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__70239 = cljs.core.next(seq__70186__$1);
var G__70240 = null;
var G__70241 = (0);
var G__70242 = (0);
seq__70186 = G__70239;
chunk__70188 = G__70240;
count__70189 = G__70241;
i__70190 = G__70242;
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
var len__4864__auto___70247 = arguments.length;
var i__4865__auto___70248 = (0);
while(true){
if((i__4865__auto___70248 < len__4864__auto___70247)){
args__4870__auto__.push((arguments[i__4865__auto___70248]));

var G__70250 = (i__4865__auto___70248 + (1));
i__4865__auto___70248 = G__70250;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__70198){
var map__70199 = p__70198;
var map__70199__$1 = cljs.core.__destructure_map(map__70199);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70199__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70199__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70199__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__70200 = (function (){var G__70201 = cljs.core.deref(slovarish.frontend.state.pos);
var G__70201__$1 = (((G__70201 instanceof cljs.core.Keyword))?G__70201.fqn:null);
switch (G__70201__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var fexpr__70202 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__70202.cljs$core$IFn$_invoke$arity$1 ? fexpr__70202.cljs$core$IFn$_invoke$arity$1(word) : fexpr__70202.call(null,word));

break;
case "adjective":
var fexpr__70203 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__70203.cljs$core$IFn$_invoke$arity$1 ? fexpr__70203.cljs$core$IFn$_invoke$arity$1(word) : fexpr__70203.call(null,word));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__70200);
} else {
return G__70200;
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
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq70196){
var G__70197 = cljs.core.first(seq70196);
var seq70196__$1 = cljs.core.next(seq70196);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70197,seq70196__$1);
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
