goog.provide('slovarish.frontend.navigation');
slovarish.frontend.navigation.resize_input_text = (function slovarish$frontend$navigation$resize_input_text(){
var reciprocal_size = ((7) / (0.08 * cljs.core.count(cljs.core.deref(slovarish.frontend.state.input))));
return goog.style.setStyle(document.querySelector("#word-input"),"font-size",["clamp(12px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((reciprocal_size > (7)))?(7):reciprocal_size)),"vw, ","80px)"].join(''));
});
slovarish.frontend.navigation.truncated_QMARK_ = (function slovarish$frontend$navigation$truncated_QMARK_(el){
return (el.offsetWidth < el.scrollWidth);
});
slovarish.frontend.navigation.toggle_gloss_arrows = (function slovarish$frontend$navigation$toggle_gloss_arrows(){
var seq__1026059 = cljs.core.seq(document.querySelectorAll(".primary-gloss"));
var chunk__1026060 = null;
var count__1026061 = (0);
var i__1026062 = (0);
while(true){
if((i__1026062 < count__1026061)){
var el = chunk__1026060.cljs$core$IIndexed$_nth$arity$2(null,i__1026062);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__1026084 = seq__1026059;
var G__1026085 = chunk__1026060;
var G__1026086 = count__1026061;
var G__1026087 = (i__1026062 + (1));
seq__1026059 = G__1026084;
chunk__1026060 = G__1026085;
count__1026061 = G__1026086;
i__1026062 = G__1026087;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__1026059);
if(temp__5753__auto__){
var seq__1026059__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1026059__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__1026059__$1);
var G__1026088 = cljs.core.chunk_rest(seq__1026059__$1);
var G__1026089 = c__4679__auto__;
var G__1026090 = cljs.core.count(c__4679__auto__);
var G__1026091 = (0);
seq__1026059 = G__1026088;
chunk__1026060 = G__1026089;
count__1026061 = G__1026090;
i__1026062 = G__1026091;
continue;
} else {
var el = cljs.core.first(seq__1026059__$1);
if(slovarish.frontend.navigation.truncated_QMARK_(el)){
goog.dom.classlist.add(el,"down-arrow");
} else {
goog.dom.classlist.remove(el,"down-arrow");
}


var G__1026092 = cljs.core.next(seq__1026059__$1);
var G__1026093 = null;
var G__1026094 = (0);
var G__1026095 = (0);
seq__1026059 = G__1026092;
chunk__1026060 = G__1026093;
count__1026061 = G__1026094;
i__1026062 = G__1026095;
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
var max_score = (function (){var or__4253__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1026063_SHARP_){
return p1__1026063_SHARP_.getAttribute("data-score");
}),cells));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})();
var factor = ((1) / max_score);
var seq__1026065 = cljs.core.seq(cells);
var chunk__1026067 = null;
var count__1026068 = (0);
var i__1026069 = (0);
while(true){
if((i__1026069 < count__1026068)){
var cell = chunk__1026067.cljs$core$IIndexed$_nth$arity$2(null,i__1026069);
var cell_type_1026096 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_1026097 = goog.color.hexToRgb((cell_type_1026096.cljs$core$IFn$_invoke$arity$1 ? cell_type_1026096.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_1026096.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_1026098 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_1026098 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_1026097,white,score_1026098)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__1026073 = slovarish.frontend.state.result();
var G__1026073__$1 = (((G__1026073 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__1026073));
if((G__1026073__$1 == null)){
return null;
} else {
return cljs.core.name(G__1026073__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__1026100 = seq__1026065;
var G__1026101 = chunk__1026067;
var G__1026102 = count__1026068;
var G__1026103 = (i__1026069 + (1));
seq__1026065 = G__1026100;
chunk__1026067 = G__1026101;
count__1026068 = G__1026102;
i__1026069 = G__1026103;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__1026065);
if(temp__5753__auto__){
var seq__1026065__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1026065__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__1026065__$1);
var G__1026104 = cljs.core.chunk_rest(seq__1026065__$1);
var G__1026105 = c__4679__auto__;
var G__1026106 = cljs.core.count(c__4679__auto__);
var G__1026107 = (0);
seq__1026065 = G__1026104;
chunk__1026067 = G__1026105;
count__1026068 = G__1026106;
i__1026069 = G__1026107;
continue;
} else {
var cell = cljs.core.first(seq__1026065__$1);
var cell_type_1026108 = (cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?new cljs.core.Keyword(null,"irregular-form","irregular-form",-1497468882):(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})());
var base_color_1026109 = goog.color.hexToRgb((cell_type_1026108.cljs$core$IFn$_invoke$arity$1 ? cell_type_1026108.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.navigation.base_cell_colors) : cell_type_1026108.call(null,slovarish.frontend.navigation.base_cell_colors)));
var score_1026110 = ((function (){var or__4253__auto__ = cell.getAttribute("data-score");
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
if((score_1026110 <= 0.2)){
goog.dom.classlist.add(cell,"uncommon");
} else {
}

goog.style.setStyle(cell,"background-color",goog.color.rgbArrayToHex(goog.color.blend(base_color_1026109,white,score_1026110)));
} else {
goog.style.setStyle(cell,"background-color","");

goog.dom.classlist.addAll(cell,["light",(cljs.core.truth_(goog.dom.classlist.contains(cell,"irregular-form"))?null:(function (){var or__4253__auto__ = (function (){var G__1026074 = slovarish.frontend.state.result();
var G__1026074__$1 = (((G__1026074 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__1026074));
if((G__1026074__$1 == null)){
return null;
} else {
return cljs.core.name(G__1026074__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})())]);
}


var G__1026112 = cljs.core.next(seq__1026065__$1);
var G__1026113 = null;
var G__1026114 = (0);
var G__1026115 = (0);
seq__1026065 = G__1026112;
chunk__1026067 = G__1026113;
count__1026068 = G__1026114;
i__1026069 = G__1026115;
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
var len__4864__auto___1026117 = arguments.length;
var i__4865__auto___1026118 = (0);
while(true){
if((i__4865__auto___1026118 < len__4864__auto___1026117)){
args__4870__auto__.push((arguments[i__4865__auto___1026118]));

var G__1026119 = (i__4865__auto___1026118 + (1));
i__4865__auto___1026118 = G__1026119;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__1026077){
var map__1026078 = p__1026077;
var map__1026078__$1 = cljs.core.__destructure_map(map__1026078);
var target_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1026078__$1,new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),null);
var filter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__1026078__$1,new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.input,"");

cljs.core.reset_BANG_(slovarish.frontend.state.results,null);
} else {
cljs.core.reset_BANG_(slovarish.frontend.state.input,word);

if(cljs.core.truth_(target_pos)){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,target_pos);
} else {
}

cljs.core.reset_BANG_(slovarish.frontend.state.results,(((cljs.core.count(word) >= (2)))?(function (){var G__1026079 = (function (){var G__1026080 = cljs.core.deref(slovarish.frontend.state.pos);
var G__1026080__$1 = (((G__1026080 instanceof cljs.core.Keyword))?G__1026080.fqn:null);
switch (G__1026080__$1) {
case "noun":
return slovarish.frontend.nouns.declension.declensions(word);

break;
case "verb":
var fexpr__1026081 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1026081.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026081.cljs$core$IFn$_invoke$arity$1(word) : fexpr__1026081.call(null,word));

break;
case "adjective":
var fexpr__1026082 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__1026082.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026082.cljs$core$IFn$_invoke$arity$1(word) : fexpr__1026082.call(null,word));

break;
default:
return null;

}
})();
if(cljs.core.truth_(filter_fn)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,G__1026079);
} else {
return G__1026079;
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
(slovarish.frontend.navigation.go_to_word.cljs$lang$applyTo = (function (seq1026075){
var G__1026076 = cljs.core.first(seq1026075);
var seq1026075__$1 = cljs.core.next(seq1026075);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1026076,seq1026075__$1);
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
