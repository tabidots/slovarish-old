goog.provide('slovarish.frontend.app');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.app !== 'undefined') && (typeof slovarish.frontend.app.num_batches !== 'undefined')){
} else {
slovarish.frontend.app.num_batches = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nouns","nouns",-314252558),(15),new cljs.core.Keyword(null,"verbs","verbs",-1655382772),(10),new cljs.core.Keyword(null,"adjectives","adjectives",1201932072),(8)], null);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.app !== 'undefined') && (typeof slovarish.frontend.app.batches_loaded !== 'undefined')){
} else {
slovarish.frontend.app.batches_loaded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
slovarish.frontend.app.demo_words_list = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),cljs.core.PersistentVector.fromArray(["\u0441\u043E\u0431\u0430\u043A\u0430","\u0433\u043E\u043B\u043E\u0432\u0430","\u0438\u0441\u0442\u043E\u0440\u0438\u044F","\u0441\u0442\u0440\u0430\u043D\u0430","\u0441\u0435\u043C\u044C\u044F","\u0441\u0442\u0430\u0442\u044C\u044F","\u0437\u0435\u043C\u043B\u044F","\u0445\u043B\u0435\u0431","\u0440\u043E\u0441\u0442","\u043A\u043D\u044F\u0437\u044C","\u043C\u0435\u0441\u0442\u043E","\u043C\u043E\u0440\u0435","\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435","\u043F\u043B\u0430\u0442\u044C\u0435","\u0434\u0435\u043B\u043E","\u043A\u043E\u0441\u0442\u044C","\u043F\u043E\u043B\u0443\u0447\u0430\u0441\u0430","\u0440\u0435\u0447\u044C","\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C","\u043F\u0443\u0442\u044C","\u0432\u0440\u0435\u043C\u044F","\u0433\u043E\u0434","\u0447\u0435\u043B\u043E\u0432\u0435\u043A","\u0440\u0435\u0431\u0451\u043D\u043E\u043A","\u043A\u043E\u043B\u0435\u043D\u043E","\u043B\u0438\u0441\u0442","\u0443\u0433\u043E\u043B","\u0443\u0442\u0440\u043E","\u043C\u0430\u0442\u044C","\u043B\u044E\u0431\u043E\u0432\u044C","\u0446\u0435\u0440\u043A\u043E\u0432\u044C","\u0432\u043E\u043B\u043E\u0441","\u0433\u043B\u0430\u0437","\u0434\u0435\u043D\u044C\u0433\u0438","\u0437\u0430\u043C\u043E\u043A","\u043A\u043E\u043B\u044C\u0446\u043E","\u043C\u0435\u0447\u0442\u0430","\u043A\u043E\u043D\u0435\u0446","\u0442\u0443\u0444\u043B\u044F","\u0437\u0432\u0435\u0437\u0434\u0430","\u0441\u043B\u0435\u0437\u0430","\u0441\u0435\u0441\u0442\u0440\u0430","\u043D\u0430\u0451\u043C","\u0432\u0435\u0449\u044C","\u0440\u0435\u043A\u0430","\u043F\u043B\u0430\u0442\u0451\u0436","\u0441\u0435\u0440\u0434\u0446\u0435","\u0441\u043E\u043B\u043D\u0446\u0435"], true),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0442\u044C","\u0432\u0435\u043D\u0447\u0430\u0442\u044C","\u043E\u043F\u0435\u0440\u0435\u0442\u044C","\u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F","\u0443\u0432\u043B\u0435\u043A\u0430\u0442\u044C","\u0436\u0434\u0430\u0442\u044C","\u043F\u0435\u0447\u044C","\u0437\u043D\u0430\u0442\u044C","\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C","\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C","\u0432\u043B\u0430\u0434\u0435\u0442\u044C","\u0445\u043E\u0442\u0435\u0442\u044C","\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C","\u0438\u0441\u043A\u0430\u0442\u044C","\u0441\u0438\u0434\u0435\u0442\u044C","\u0438\u0434\u0442\u0438","\u043F\u043B\u0430\u0442\u0438\u0442\u044C","\u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","\u043D\u0430\u0439\u0442\u0438"], null),new cljs.core.Keyword(null,"adjective","adjective",441465450),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439","\u0434\u043B\u0438\u043D\u043D\u044B\u0439","\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439","\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439","\u0431\u043E\u043B\u044C\u0448\u043E\u0439","\u043D\u043E\u0432\u044B\u0439","\u0437\u043E\u043B\u043E\u0442\u043E\u0439","\u0434\u0440\u0435\u0432\u043D\u0438\u0439","\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439","\u0443\u0434\u043E\u0431\u043D\u044B\u0439","\u0433\u0440\u043E\u043C\u043A\u0438\u0439","\u0442\u0451\u043F\u043B\u044B\u0439","\u0434\u0435\u0448\u0451\u0432\u044B\u0439","\u043E\u0441\u0442\u0440\u044B\u0439","\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439"], null)], null);
/**
 * Pull hashbang route from URL and navigate to target word.
 */
slovarish.frontend.app.route = (function slovarish$frontend$app$route(var_args){
var args__4870__auto__ = [];
var len__4864__auto___62301 = arguments.length;
var i__4865__auto___62302 = (0);
while(true){
if((i__4865__auto___62302 < len__4864__auto___62301)){
args__4870__auto__.push((arguments[i__4865__auto___62302]));

var G__62303 = (i__4865__auto___62302 + (1));
i__4865__auto___62302 = G__62303;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic = (function (p__62200){
var map__62201 = p__62200;
var map__62201__$1 = cljs.core.__destructure_map(map__62201);
var push_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62201__$1,new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),true);
var hash = window.location.hash;
var vec__62202 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hash,(2)),/\//);
var target_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62202,(0),null);
var raw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62202,(1),null);
var sense = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62202,(2),null);
var word = window.decodeURI(raw);
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/^[ЁёА-я]+$/,word);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(word,cljs.core.deref(slovarish.frontend.state.input))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((sense - (1)),cljs.core.deref(slovarish.frontend.state.which_result_QMARK_))));
} else {
return and__4251__auto__;
}
})())){
cljs.core.reset_BANG_(slovarish.frontend.state.pos,(function (){var fexpr__62205 = new cljs.core.PersistentArrayMap(null, 3, ["n",new cljs.core.Keyword(null,"noun","noun",185846460),"v",new cljs.core.Keyword(null,"verb","verb",-1492655803),"a",new cljs.core.Keyword(null,"adjective","adjective",441465450)], null);
return (fexpr__62205.cljs$core$IFn$_invoke$arity$1 ? fexpr__62205.cljs$core$IFn$_invoke$arity$1(target_pos) : fexpr__62205.call(null,target_pos));
})());

slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(word,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),push_state_QMARK_], 0));

return cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(function (){var or__4253__auto__ = (function (){var G__62206 = sense;
if((G__62206 == null)){
return null;
} else {
return (G__62206 - (1));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
} else {
return null;
}
}));

(slovarish.frontend.app.route.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(slovarish.frontend.app.route.cljs$lang$applyTo = (function (seq62199){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62199));
}));

slovarish.frontend.app.load_mask = (function slovarish$frontend$app$load_mask(){
if((cljs.core.deref(slovarish.frontend.app.batches_loaded) < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mask","div#mask",-1851106387),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"Your comrade-in-words as a learner of the Russian language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"slovarish / \u0441\u043B\u043E\u0432\u0430\u0440\u0438\u0449"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic.sans","p.italic.sans",1935502801),"\u0421\u043B\u043E\u0432\u0430\u0440\u044C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0442\u0430\u043A\u0436\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u0430\u0448\u0438\u043C \u0442\u043E\u0432\u0430\u0440\u0438\u0449\u0435\u043C \u0432 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"Loading..."], null),(cljs.core.truth_(cljs.core.re_find(/Chrome|OPR|Yandex/,navigator.userAgent))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),"For faster loading, please use Chrome, Opera, or Yandex Browser."], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.app.batches_loaded)], null)], null)], null)], null);
} else {
return null;
}
});
slovarish.frontend.app.load_edn = (function slovarish$frontend$app$load_edn(pos,batch){
if((batch > (function (){var G__62210 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pos);
return (slovarish.frontend.app.num_batches.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.app.num_batches.cljs$core$IFn$_invoke$arity$1(G__62210) : slovarish.frontend.app.num_batches.call(null,G__62210));
})())){
var G__62211 = pos;
switch (G__62211) {
case "nouns":
cljs.core.reset_BANG_(slovarish.frontend.data.top_2k_words,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__62212){
var vec__62213 = p__62212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62213,(1),null);
return cljs.core.some((function (p1__62207_SHARP_){
return (new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(p1__62207_SHARP_) <= (2000));
}),entries);
}),cljs.core.deref(slovarish.frontend.data.all_nouns)));

return slovarish.frontend.app.route();

break;
default:
return null;

}
} else {
var batch_no = (((batch < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch)].join(''):cljs.core.str.cljs$core$IFn$_invoke$arity$1(batch));
return fetch(["edn/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),batch_no,".edn"].join('')).then((function (p1__62208_SHARP_){
return p1__62208_SHARP_.text();
})).then((function (p1__62209_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var G__62216 = pos;
switch (G__62216) {
case "nouns":
return slovarish.frontend.data.all_nouns;

break;
case "verbs":
return slovarish.frontend.data.all_verbs;

break;
case "adjectives":
return slovarish.frontend.data.all_adjectives;

break;
default:
return null;

}
})(),cljs.core.merge,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__62209_SHARP_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.app.batches_loaded,cljs.core.inc);

var G__62217 = pos;
var G__62218 = (batch + (1));
return (slovarish.frontend.app.load_edn.cljs$core$IFn$_invoke$arity$2 ? slovarish.frontend.app.load_edn.cljs$core$IFn$_invoke$arity$2(G__62217,G__62218) : slovarish.frontend.app.load_edn.call(null,G__62217,G__62218));
}));
}
});
slovarish.frontend.app.russian_poses = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),"\u0441\u0443\u0449.",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043B\u0430\u0433\u043E\u043B",new cljs.core.Keyword(null,"adjective","adjective",441465450),"\u043F\u0440\u0438\u043B."], null);
slovarish.frontend.app.change_pos = (function slovarish$frontend$app$change_pos(which_pos){
var word_input = document.getElementById("word-input");
slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(slovarish.frontend.state.input),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),which_pos], 0));

if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = slovarish.frontend.state.result();
if(cljs.core.truth_(and__4251__auto__)){
var G__62220 = cljs.core.deref(slovarish.frontend.state.pos);
var fexpr__62219 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"verb","verb",-1492655803),null,new cljs.core.Keyword(null,"adjective","adjective",441465450),null], null), null);
return (fexpr__62219.cljs$core$IFn$_invoke$arity$1 ? fexpr__62219.cljs$core$IFn$_invoke$arity$1(G__62220) : fexpr__62219.call(null,G__62220));
} else {
return and__4251__auto__;
}
}
})())){
return word_input.blur();
} else {
return word_input.focus();
}
});
slovarish.frontend.app.pos_button = (function slovarish$frontend$app$pos_button(which_pos){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),which_pos))?"current":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.app.change_pos(which_pos);
})], null),(function (){var G__62221 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62221__$1 = (((G__62221 instanceof cljs.core.Keyword))?G__62221.fqn:null);
switch (G__62221__$1) {
case "english":
return cljs.core.name(which_pos);

break;
case "russian":
return (slovarish.frontend.app.russian_poses.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.app.russian_poses.cljs$core$IFn$_invoke$arity$1(which_pos) : slovarish.frontend.app.russian_poses.call(null,which_pos));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62221__$1)].join('')));

}
})()], null);
});
slovarish.frontend.app.change_sense = (function slovarish$frontend$app$change_sense(target){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_),(target - (1)))) && ((target <= cljs.core.count(cljs.core.deref(slovarish.frontend.state.results)))))){
cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(target - (1)));

return slovarish.frontend.navigation.push_state();
} else {
return null;
}
});
slovarish.frontend.app.go_to_suggestion = (function slovarish$frontend$app$go_to_suggestion(num){
var G__62222 = document.querySelector(["#suggestions .word-list .word-button:nth-child(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),")");
var G__62222__$1 = (((G__62222 == null))?null:G__62222.innerHTML);
if((G__62222__$1 == null)){
return null;
} else {
return slovarish.frontend.navigation.go_to_word(G__62222__$1);
}
});
slovarish.frontend.app.paypal_donate_button = (function slovarish$frontend$app$paypal_donate_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#donate-button","div#donate-button",698814135),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),"https://www.paypal.com/donate",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"target","target",253001721),"_top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"business",new cljs.core.Keyword(null,"value","value",305978217),"633R23JJCLDF2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"no_recurring",new cljs.core.Keyword(null,"value","value",305978217),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"item_name",new cljs.core.Keyword(null,"value","value",305978217),"If you find this app useful, consider contributing to my coffee fund %3A%29"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"currency_code",new cljs.core.Keyword(null,"value","value",305978217),"USD"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"image",new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"name","name",1843675177),"submit",new cljs.core.Keyword(null,"title","title",636505583),"PayPal - The safer, easier way to pay online!",new cljs.core.Keyword(null,"alt","alt",-3214426),"Donate with PayPal button"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"border","border",1444987323),"0",new cljs.core.Keyword(null,"src","src",-1651076051),"https://www.paypal.com/en_US/i/scr/pixel.gif",new cljs.core.Keyword(null,"width","width",-384071477),"1",new cljs.core.Keyword(null,"height","height",1025178622),"1"], null)], null)], null)], null);
});
slovarish.frontend.app.header = (function slovarish$frontend$app$header(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#header.flex","div#header.flex",-1397866935),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container.flex.row","div.toggle-container.flex.row",1597481623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"\u0440\u0443"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle","label.toggle",-1299806904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"language"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)),new cljs.core.Keyword(null,"name","name",1843675177),"language"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slider","span.slider",-2086261021),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Change language \u2022 \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A \u0441\u0430\u0439\u0442\u0430",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(slovarish.frontend.state.display_language,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)))?new cljs.core.Keyword(null,"russian","russian",1887936458):new cljs.core.Keyword(null,"english","english",1087501909)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"en"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pos-buttons","div#pos-buttons",7096661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"noun","noun",185846460)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"verb","verb",-1492655803)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.pos_button,new cljs.core.Keyword(null,"adjective","adjective",441465450)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button.credits","a.word-button.credits",-147730510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
goog.dom.classlist.toggle(document.getElementById("credits"),"visible");

return goog.dom.classlist.toggle(e.target,"current");
})], null),"\u00A9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggle-container.flex.row","div.toggle-container.flex.row",1597481623),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"a"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.toggle","label.toggle",-1299806904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"stress-marks"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_),new cljs.core.Keyword(null,"name","name",1843675177),"stress-marks"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.slider","span.slider",-2086261021),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Show/hide stress marks \u2022 \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C/\u0441\u0440\u043A\u044B\u0442\u044C \u0437\u043D\u0430\u043A\u0438 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u044F",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(slovarish.frontend.state.show_stress_QMARK_,(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?false:true));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.option","span.option",-1087496857),"\u00E1"], null)], null)], null);
});
slovarish.frontend.app.word_input = (function slovarish$frontend$app$word_input(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#word-input-wrapper","div#word-input-wrapper",940770490),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return e.preventDefault();
}),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),"off",new cljs.core.Keyword(null,"auto-capitalize","auto-capitalize",352725029),"off",new cljs.core.Keyword(null,"auto-correct","auto-correct",555552927),"off",new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#word-input","input#word-input",182703191),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(function (){var G__62223 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62223__$1 = (((G__62223 instanceof cljs.core.Keyword))?G__62223.fqn:null);
switch (G__62223__$1) {
case "english":
return "enter a word";

break;
case "russian":
return "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62223__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__62224 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62224__$1 = (((G__62224 instanceof cljs.core.Keyword))?G__62224.fqn:null);
switch (G__62224__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?null:"light"),(function (){var or__4253__auto__ = (function (){var G__62225 = slovarish.frontend.state.result();
var G__62225__$1 = (((G__62225 == null))?null:new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(G__62225));
if((G__62225__$1 == null)){
return null;
} else {
return cljs.core.name(G__62225__$1);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "default";
}
})()], null);

break;
case "verb":
if(cljs.core.seq_QMARK_(cljs.core.deref(slovarish.frontend.state.results))){
var G__62227 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
}
})();
var fexpr__62226 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"definite","definite",1037141320),"imperfective",new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),"indefinite",new cljs.core.Keyword(null,"pf","pf",1255760069),"perfective",new cljs.core.Keyword(null,"impf","impf",-1164864294),"imperfective",new cljs.core.Keyword(null,"bias","bias",-315297926),"biaspectual"], null);
return (fexpr__62226.cljs$core$IFn$_invoke$arity$1 ? fexpr__62226.cljs$core$IFn$_invoke$arity$1(G__62227) : fexpr__62226.call(null,G__62227));
} else {
return "default";
}

break;
default:
return "default";

}
})(),new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460));
if(and__4251__auto__){
var G__62228 = slovarish.frontend.state.result();
if((G__62228 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(G__62228);
}
} else {
return and__4251__auto__;
}
})())?(function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.result(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.state.result(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
}
})():clojure.string.lower_case(cljs.core.deref(slovarish.frontend.state.input))),new cljs.core.Keyword(null,"on-keyDown","on-keyDown",893393487),(function (e){
var code = e.code;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Space",code)) || (clojure.string.includes_QMARK_(code,"Digit")))){
return e.preventDefault();
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var word = clojure.string.trim(e.target.value);
if(cljs.core.truth_(cljs.core.re_find(/^[ЁёА-я]*$/,word))){
return slovarish.frontend.navigation.go_to_word(word);
} else {
return alert((function (){var G__62229 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62229__$1 = (((G__62229 instanceof cljs.core.Keyword))?G__62229.fqn:null);
switch (G__62229__$1) {
case "english":
return "This app only accepts Russian words as input. Please switch your keyboard to Russian and try again.";

break;
case "russian":
return "\u042D\u0442\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0441\u043B\u043E\u0432\u0430 \u043A\u0430\u043A \u0432\u0445\u043E\u0434. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0435 \u044F\u0437\u044B\u043A \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62229__$1)].join('')));

}
})());
}
})], null)], null)], null),(((cljs.core.count(cljs.core.deref(slovarish.frontend.state.results)) >= (2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#senses","div#senses",-1428700432),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$app$word_input_$_iter__62230(s__62231){
return (new cljs.core.LazySeq(null,(function (){
var s__62231__$1 = s__62231;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62231__$1);
if(temp__5753__auto__){
var s__62231__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62231__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62231__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62233 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62232 = (0);
while(true){
if((i__62232 < size__4651__auto__)){
var raw_index = cljs.core._nth(c__4650__auto__,i__62232);
var i = (raw_index + (1));
cljs.core.chunk_append(b__62233,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_),raw_index))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sense.current","div.sense.current",1137612003),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sense","a.sense",1028938672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62232,i,raw_index,c__4650__auto__,size__4651__auto__,b__62233,s__62231__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var target = e.target.innerHTML;
cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(target - (1)));

return slovarish.frontend.navigation.push_state();
});})(i__62232,i,raw_index,c__4650__auto__,size__4651__auto__,b__62233,s__62231__$2,temp__5753__auto__))
], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null))));

var G__62310 = (i__62232 + (1));
i__62232 = G__62310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62233),slovarish$frontend$app$word_input_$_iter__62230(cljs.core.chunk_rest(s__62231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62233),null);
}
} else {
var raw_index = cljs.core.first(s__62231__$2);
var i = (raw_index + (1));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_result_QMARK_),raw_index))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sense.current","div.sense.current",1137612003),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.sense","a.sense",1028938672),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,raw_index,s__62231__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var target = e.target.innerHTML;
cljs.core.reset_BANG_(slovarish.frontend.state.which_result_QMARK_,(target - (1)));

return slovarish.frontend.navigation.push_state();
});})(i,raw_index,s__62231__$2,temp__5753__auto__))
], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sense-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null))),slovarish$frontend$app$word_input_$_iter__62230(cljs.core.rest(s__62231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(slovarish.frontend.state.results))));
})())], null):null),(cljs.core.truth_(slovarish.frontend.state.result())?(function (){var G__62234 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62234__$1 = (((G__62234 instanceof cljs.core.Keyword))?G__62234.fqn:null);
switch (G__62234__$1) {
case "verb":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-view-toggle-menu","div.verb-view-toggle-menu",1467913183),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"verb-view-toggle",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.state.which_verb_forms_QMARK_),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (e){
return cljs.core.reset_BANG_(slovarish.frontend.state.which_verb_forms_QMARK_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),true], null),(function (){var G__62235 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62235__$1 = (((G__62235 instanceof cljs.core.Keyword))?G__62235.fqn:null);
switch (G__62235__$1) {
case "english":
return "main forms";

break;
case "russian":
return "\u0433\u043B\u0430\u0432\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62235__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"participles","participles",-575696638)], null),(function (){var G__62236 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62236__$1 = (((G__62236 instanceof cljs.core.Keyword))?G__62236.fqn:null);
switch (G__62236__$1) {
case "english":
return "participles";

break;
case "russian":
return "\u043F\u0440\u0438\u0447\u0430\u0441\u0442\u0438\u044F";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62236__$1)].join('')));

}
})()], null)], null)], null);

break;
case "noun":
var gender = new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
var gender_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"common","common",-1822281391)))?"common-gender":cljs.core.name(gender));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icons.flex.column","div.icons.flex.column",1378587515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.gender","div.icon.gender",-1011969728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?["This is a ",gender_name," noun."].join(''):["Based on the ending, this noun is highly likely to be a ",gender_name," noun."].join('')),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(function (){var G__62237 = gender;
var G__62237__$1 = (((G__62237 instanceof cljs.core.Keyword))?G__62237.fqn:null);
switch (G__62237__$1) {
case "masculine":
return "\u2640";

break;
case "feminine":
return "\u2642";

break;
case "neuter":
return "\u26B2";

break;
case "common":
return "\u26A5";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62237__$1)].join('')));

}
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"animate","animate",1850194573).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.animacy","div.icon.animacy",1929906971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),["This is an animate ",cljs.core.name(gender)," noun."].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),(function (){var G__62238 = gender;
var G__62238__$1 = (((G__62238 instanceof cljs.core.Keyword))?G__62238.fqn:null);
switch (G__62238__$1) {
case "masculine":
return "\uD83D\uDC68";

break;
case "feminine":
return "\uD83D\uDC69";

break;
case "neuter":
return "\uD83D\uDC7D";

break;
case "common":
return "\uD83D\uDC6B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62238__$1)].join('')));

}
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon.animacy","div.icon.animacy",1929906971),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?"This is an inanimate noun.":"Nouns not found in the Slovarish dictionary are assumed to be inanimate."),new cljs.core.Keyword(null,"class","class",-2030961996),gender], null),"\uD83E\uDD16"], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),gender,new cljs.core.Keyword(null,"title","title",636505583),"This noun was found in the Slovarish dictionary."], null),"\u2714\uFE0F"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.icon","div.icon",1302290135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),gender,new cljs.core.Keyword(null,"title","title",636505583),["This noun was not found in the Slovarish dictionary. ","Results may contain inaccuracies."].join('')], null),"\u2753"], null))], null);

break;
default:
return null;

}
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.gloss.render_glosses,slovarish.frontend.state.result(),(function (){var G__62239 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62239__$1 = (((G__62239 instanceof cljs.core.Keyword))?G__62239.fqn:null);
switch (G__62239__$1) {
case "noun":
return new cljs.core.Keyword(null,"gender","gender",-733930727).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());

break;
case "verb":
var G__62241 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
}
})();
var fexpr__62240 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),"indefinite",new cljs.core.Keyword(null,"definite","definite",1037141320),"imperfective",new cljs.core.Keyword(null,"pf","pf",1255760069),"perfective",new cljs.core.Keyword(null,"impf","impf",-1164864294),"imperfective",new cljs.core.Keyword(null,"bias","bias",-315297926),"biaspectual"], null);
return (fexpr__62240.cljs$core$IFn$_invoke$arity$1 ? fexpr__62240.cljs$core$IFn$_invoke$arity$1(G__62241) : fexpr__62240.call(null,G__62241));

break;
default:
return "default";

}
})()], null)], null);
});
slovarish.frontend.app.suggestions = (function slovarish$frontend$app$suggestions(){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.pos),new cljs.core.Keyword(null,"noun","noun",185846460))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.deref(slovarish.frontend.state.input)),(2))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#suggestions","div#suggestions",-2009430776)], null);
} else {
if((cljs.core.count(cljs.core.deref(slovarish.frontend.state.input)) < (3))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#get-started","p#get-started",-1735449166),(function (){var G__62243 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62243__$1 = (((G__62243 instanceof cljs.core.Keyword))?G__62243.fqn:null);
switch (G__62243__$1) {
case "english":
return "Simply choose a part of speech and type a word in the field above to get started, or ";

break;
case "russian":
return "\u041F\u0440\u043E\u0441\u0442\u043E \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0441\u0442\u044C \u0440\u0435\u0447\u0438 \u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043B\u043E\u0432\u043E \u0432 \u043F\u043E\u043B\u0435 \u043D\u0430\u0432\u0435\u0440\u0445\u0443, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C, \u0438\u043B\u0438 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62243__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.press-enter-instruction","span.press-enter-instruction",26237171),(function (){var G__62244 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62244__$1 = (((G__62244 instanceof cljs.core.Keyword))?G__62244.fqn:null);
switch (G__62244__$1) {
case "english":
return "press Enter ";

break;
case "russian":
return "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0412\u0432\u043E\u0434, ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62244__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.random-word-button-instruction","span.random-word-button-instruction",1588569131),(function (){var G__62245 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62245__$1 = (((G__62245 instanceof cljs.core.Keyword))?G__62245.fqn:null);
switch (G__62245__$1) {
case "english":
return "tap the \uD83C\uDFB2 icon ";

break;
case "russian":
return "\u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438\u043A\u043E\u043D\u0443 \uD83C\uDFB2, ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62245__$1)].join('')));

}
})()], null),(function (){var G__62246 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62246__$1 = (((G__62246 instanceof cljs.core.Keyword))?G__62246.fqn:null);
switch (G__62246__$1) {
case "english":
return "to look up a random word.";

break;
case "russian":
return "\u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62246__$1)].join('')));

}
})()], null);
} else {
var source = (function (){var G__62247 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62247__$1 = (((G__62247 instanceof cljs.core.Keyword))?G__62247.fqn:null);
switch (G__62247__$1) {
case "noun":
return cljs.core.deref(slovarish.frontend.data.all_nouns);

break;
case "verb":
return cljs.core.deref(slovarish.frontend.data.all_verbs);

break;
case "adjective":
return cljs.core.deref(slovarish.frontend.data.all_adjectives);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62247__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#suggestions","div#suggestions",-2009430776),(function (){var temp__5757__auto__ = cljs.core.not_empty(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.count,cljs.core._LT_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),"\u0441\u044F"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.state.input)),"\u0441\u044C"].join(''),cljs.core.deref(slovarish.frontend.state.input)]),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62242_SHARP_){
return clojure.string.starts_with_QMARK_(p1__62242_SHARP_,clojure.string.lower_case(cljs.core.deref(slovarish.frontend.state.input)));
}),cljs.core.keys(source)))));
if((temp__5757__auto__ == null)){
return null;
} else {
var predictions = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.serif","span.italic.serif",-720224961),(function (){var G__62248 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62248__$1 = (((G__62248 instanceof cljs.core.Keyword))?G__62248.fqn:null);
switch (G__62248__$1) {
case "english":
return "You might be looking for:\u00A0";

break;
case "russian":
return "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0432\u044B \u0438\u0449\u0435\u0442\u0435:\u00A0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62248__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-list","span.word-list",-850024004),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$app$suggestions_$_iter__62249(s__62250){
return (new cljs.core.LazySeq(null,(function (){
var s__62250__$1 = s__62250;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62250__$1);
if(temp__5753__auto__){
var s__62250__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62250__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62250__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62252 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62251 = (0);
while(true){
if((i__62251 < size__4651__auto__)){
var word = cljs.core._nth(c__4650__auto__,i__62251);
cljs.core.chunk_append(b__62252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62251,word,c__4650__auto__,size__4651__auto__,b__62252,s__62250__$2,temp__5753__auto__,predictions,temp__5757__auto__,source){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(i__62251,word,c__4650__auto__,size__4651__auto__,b__62252,s__62250__$2,temp__5753__auto__,predictions,temp__5757__auto__,source))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["autosuggest-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)));

var G__62323 = (i__62251 + (1));
i__62251 = G__62323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62252),slovarish$frontend$app$suggestions_$_iter__62249(cljs.core.chunk_rest(s__62250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62252),null);
}
} else {
var word = cljs.core.first(s__62250__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__62250__$2,temp__5753__auto__,predictions,temp__5757__auto__,source){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(word,s__62250__$2,temp__5753__auto__,predictions,temp__5757__auto__,source))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["autosuggest-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)),slovarish$frontend$app$suggestions_$_iter__62249(cljs.core.rest(s__62250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),predictions));
})())], null),(((cljs.core.count(predictions) > (5)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"..."], null):null)], null);
}
})()], null);

}
}
});
slovarish.frontend.app.legend = (function slovarish$frontend$app$legend(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#legend","div#legend",-1923867619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),(function (){var G__62253 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62253__$1 = (((G__62253 instanceof cljs.core.Keyword))?G__62253.fqn:null);
switch (G__62253__$1) {
case "english":
return ["key to symbols (for ",cljs.core.name(cljs.core.deref(slovarish.frontend.state.pos)),"s)"].join('');

break;
case "russian":
return ["\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0437\u043D\u0430\u043A\u043E\u0432 (\u0434\u043B\u044F ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__62257 = cljs.core.deref(slovarish.frontend.state.pos);
var fexpr__62256 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),"\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043B\u0430\u0433\u043E\u043B\u043E\u0432",new cljs.core.Keyword(null,"adjective","adjective",441465450),"\u043F\u0440\u0438\u043B\u0430\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445"], null);
return (fexpr__62256.cljs$core$IFn$_invoke$arity$1 ? fexpr__62256.cljs$core$IFn$_invoke$arity$1(G__62257) : fexpr__62256.call(null,G__62257));
})()),")"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62253__$1)].join('')));

}
})()], null),(function (){var G__62258 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62258__$1 = (((G__62258 instanceof cljs.core.Keyword))?G__62258.fqn:null);
switch (G__62258__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine","div.word-form.masculine",-544211787),"\uD83D\uDC68"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine","div.word-form.masculine",-544211787),"\u2640\uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.feminine","div.word-form.feminine",-1941960731),"\uD83D\uDC69"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.feminine","div.word-form.feminine",-1941960731),"\u2642\uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.neuter","div.word-form.neuter",660838331),"\uD83D\uDC7D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.neuter","div.word-form.neuter",660838331),"\u26B2\uD83E\uDD16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62259 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62259__$1 = (((G__62259 instanceof cljs.core.Keyword))?G__62259.fqn:null);
switch (G__62259__$1) {
case "english":
return "Animate and inanimate nouns by gender";

break;
case "russian":
return "\u041E\u0434\u0443\u0448\u0435\u0432\u043B\u0451\u043D\u043D\u044B\u0435 \u0438 \u043D\u0435\u043E\u0434\u0443\u0448\u0435\u0432\u043B\u0451\u043D\u043D\u044B\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E \u0440\u043E\u0434\u0443";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62259__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.common","div.word-form.common",1797573662),"\uD83D\uDC6B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.common","div.word-form.common",1797573662),"\u26A5 \uD83E\uDD16"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62260 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62260__$1 = (((G__62260 instanceof cljs.core.Keyword))?G__62260.fqn:null);
switch (G__62260__$1) {
case "english":
return "Common gender (same form can be either m or f)";

break;
case "russian":
return "\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0431\u0449\u0435\u0433\u043E \u0440\u043E\u0434\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62260__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.masculine.unpredictable-stress","div.word-form.noun.masculine.unpredictable-stress",1410284450),"\u0432\u043E\u0301\u043B\u043E\u0441\u044B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.feminine.unpredictable-stress","div.word-form.noun.feminine.unpredictable-stress",1037663372),"\u0433\u043E\u0301\u043B\u043E\u0432\u0443\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.neuter.unpredictable-stress","div.word-form.noun.neuter.unpredictable-stress",-294484822),"\u0443\u0442\u0440\u0430\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62261 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62261__$1 = (((G__62261 instanceof cljs.core.Keyword))?G__62261.fqn:null);
switch (G__62261__$1) {
case "english":
return "Location of stress is different from other singular or plural forms.";

break;
case "russian":
return "\u0423\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u043B\u043E\u0433, \u0447\u0435\u043C \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62261__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u0434\u043E\u043C\u0430\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u0441\u043B\u0451\u0437\u044B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.irregular-form","div.word-form.noun.irregular-form",540423993),"\u043A\u043E\u043B\u0435\u0301\u043D\u0435\u0439\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62262 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62262__$1 = (((G__62262 instanceof cljs.core.Keyword))?G__62262.fqn:null);
switch (G__62262__$1) {
case "english":
return "Form is irregular or different than expected, given the base form and gender of the noun.";

break;
case "russian":
return "\u0414\u0430\u043D\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u2014 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u0430\u044F, \u0447\u0435\u043C \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u0430\u044F \u043F\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u0438 \u0440\u043E\u0434\u0443 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62262__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.masculine","div.word-form.noun.masculine",-1423722711),"\u0440\u044B\u0301\u043D",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u043A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.feminine","div.word-form.noun.feminine",-632878748),"\u0434\u0435\u0301\u0432\u0443\u0448",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u043A"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.noun.neuter","div.word-form.noun.neuter",2003431659),"\u044F",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0438\u0301"], null),"\u0446"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62263 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62263__$1 = (((G__62263 instanceof cljs.core.Keyword))?G__62263.fqn:null);
switch (G__62263__$1) {
case "english":
return "Fleeting vowels that appear only in certain forms of the noun.";

break;
case "russian":
return "\u0431\u0435\u0433\u043B\u044B\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0430\u0445 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62263__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62264 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62264__$1 = (((G__62264 instanceof cljs.core.Keyword))?G__62264.fqn:null);
switch (G__62264__$1) {
case "english":
return ["\u2714\uFE0F Results are verified. ","Gradations of color denote the frequency of each form of the noun (in OpenCorpora data) relative to its other forms."].join('');

break;
case "russian":
return ["\u2714\uFE0F \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D. ","\u0413\u0440\u0430\u0434\u0430\u0446\u0438\u0438 \u0446\u0432\u0435\u0442\u0430 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0442 \u0447\u0430\u0441\u0442\u043E\u0442\u0443 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E (\u0432 \u0434\u0430\u043D\u043D\u044B\u0445 OpenCorpora), \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0435\u0433\u043E \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62264__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62265 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62265__$1 = (((G__62265 instanceof cljs.core.Keyword))?G__62265.fqn:null);
switch (G__62265__$1) {
case "english":
return ["\u2753 Word not found in OpenCorpora or Wiktionary data. ","Results are generated automatically and may contain inaccuracies."].join('');

break;
case "russian":
return ["\u2753 \u0421\u043B\u043E\u0432\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u0434\u0430\u043D\u043D\u044B\u0445 OpenCorpora \u0438\u043B\u0438 Wikitionary. ","\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u0451\u0442\u0441\u044F \u0438 \u0432 \u043D\u0451\u043C \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62265__$1)].join('')));

}
})()], null)], null);

break;
case "verb":
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.imperfective","div.word-form.infinitive.imperfective",-1849419943),"\u23F3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.perfective","div.word-form.infinitive.perfective",763055565),"\uD83D\uDCCC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.biaspectual","div.word-form.infinitive.biaspectual",213279758),"\u23F3\uD83D\uDCCC"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62266 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62266__$1 = (((G__62266 instanceof cljs.core.Keyword))?G__62266.fqn:null);
switch (G__62266__$1) {
case "english":
return "Imperfective/perfective/biaspectual verb";

break;
case "russian":
return "\u0413\u043B\u0430\u0433\u043E\u043B \u041D\u0421\u0412 / \u0433\u043B\u0430\u0433\u043E\u043B \u0421\u0412 / \u0434\u0432\u0443\u0432\u0438\u0434\u043E\u0432\u043E\u0439 \u0433\u043B\u0430\u0433\u043E\u043B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62266__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.indefinite","div.word-form.infinitive.indefinite",489608736),"\uD83D\uDD04"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.definite","div.word-form.infinitive.definite",-20965789),"\u27A1\uFE0F"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62267 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62267__$1 = (((G__62267 instanceof cljs.core.Keyword))?G__62267.fqn:null);
switch (G__62267__$1) {
case "english":
return "Multidirectional/unidirectional verb of motion";

break;
case "russian":
return "\u043C\u043D\u043E\u0433\u043E\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439/\u043E\u0434\u043D\u043E\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0430\u0433\u043E\u043B \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62267__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.present.imperfective.unpredictable-stress","span.word-form.present.imperfective.unpredictable-stress",495831590),"\u0441\u043C\u043E\u0301\u0442\u0440\u0438\u0442\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.feminine.unpredictable-stress","span.word-form.past.feminine.unpredictable-stress",-1718669966),"\u0434\u0430\u043B\u0430\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62268 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62268__$1 = (((G__62268 instanceof cljs.core.Keyword))?G__62268.fqn:null);
switch (G__62268__$1) {
case "english":
return "Location of stress is different from other verb forms of the same tense.";

break;
case "russian":
return "\u0423\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u043B\u043E\u0433, \u0447\u0435\u043C \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u043E\u0440\u043C\u044B \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62268__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.masculine.irregular-form","span.word-form.past.masculine.irregular-form",1748495524),"\u043F\u043E\u0448\u0451\u043B\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-form.past.masculine.irregular-form","span.word-form.past.masculine.irregular-form",1748495524),"\u043C\u043E\u0301\u0433\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62269 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62269__$1 = (((G__62269 instanceof cljs.core.Keyword))?G__62269.fqn:null);
switch (G__62269__$1) {
case "english":
return "Past tense has an irregular form (only the masculine form is marked).";

break;
case "russian":
return "\u0424\u043E\u0440\u043C\u044B \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0433\u043B\u0430\u0433\u043E\u043B\u0430 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 (\u043F\u043E\u043C\u0435\u0447\u0435\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0444\u043E\u0440\u043C\u0430 \u043C\u0443\u0436\u0441\u043A\u043E\u0433\u043E \u0440\u043E\u0434\u0430.)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62269__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.imperfective","div.word-form.infinitive.imperfective",-1849419943),"\u0431",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u0440\u0443\u0301"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.infinitive.perfective","div.word-form.infinitive.perfective",763055565),"\u0432",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u0437\u044C\u043C\u0443\u0301"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62270 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62270__$1 = (((G__62270 instanceof cljs.core.Keyword))?G__62270.fqn:null);
switch (G__62270__$1) {
case "english":
return "Fleeting vowels that appear only in certain forms of the verb.";

break;
case "russian":
return "\u0411\u0435\u0433\u043B\u044B\u0435 \u0433\u043B\u0430\u0441\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0445 \u0444\u043E\u0440\u043C\u0430\u0445 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0433\u043B\u0430\u0433\u043E\u043B\u0430.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62270__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62271 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62271__$1 = (((G__62271 instanceof cljs.core.Keyword))?G__62271.fqn:null);
switch (G__62271__$1) {
case "english":
return "\uD83D\uDD00 Has alternate past tense forms. Mouse over to see them.";

break;
case "russian":
return "\uD83D\uDD00 \u0423 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0433\u043B\u0430\u0433\u043E\u043B\u0430 \u0435\u0441\u0442\u044C \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u0444\u043E\u0440\u043C \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u0441\u043E\u0440\u0430 \u043D\u0430 \u044D\u0442\u0443 \u0438\u043A\u043E\u043D\u0443.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62271__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62272 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62272__$1 = (((G__62272 instanceof cljs.core.Keyword))?G__62272.fqn:null);
switch (G__62272__$1) {
case "english":
return "\uD83D\uDCA1 Denotes a common verb whose conjugation pattern is shared by many other verbs.";

break;
case "russian":
return "\uD83D\uDCA1 \u042D\u0442\u0430 \u0438\u043A\u043E\u043D\u0430 \u043E\u0431\u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0434\u0430\u043D\u043D\u044B\u0439 \u0433\u043B\u0430\u0433\u043E\u043B \u043E\u0447\u0435\u043D\u044C \u0447\u0430\u0441\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F, \u0438 \u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0437\u0446\u0443 \u0441\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u0436\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0442 \u043C\u043D\u043E\u0433\u043E \u0434\u0440\u0443\u0433\u0438\u0445 \u0433\u043B\u0430\u0433\u043E\u043B\u043E\u0432.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62272__$1)].join('')));

}
})()], null)], null);

break;
case "adjective":
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.irregular-form","div.word-form.masculine.irregular-form",-864311620),"\u0441\u0442\u0440\u043E\u0301",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u0435"], null),"\u043D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.irregular-form","div.word-form.masculine.irregular-form",-864311620),"\u043B\u0451\u0433",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),"\u043E"], null),"\u043A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62273 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62273__$1 = (((G__62273 instanceof cljs.core.Keyword))?G__62273.fqn:null);
switch (G__62273__$1) {
case "english":
return "Masculine short form has a buffer vowel.";

break;
case "russian":
return "\u0412 \u043A\u0440\u0430\u0442\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043C\u0443\u0436\u0441\u043A\u043E\u0433\u043E \u0440\u043E\u0434\u0430 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u0430\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u0431\u0435\u0433\u043B\u043E\u0435 \u0433\u043B\u0430\u0441\u043D\u043E\u0435.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62273__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.feminine.unpredictable-stress","div.word-form.short-form.feminine.unpredictable-stress",332361523),"\u0440\u0435\u0434\u043A\u0430\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.neuter.unpredictable-stress","div.word-form.short-form.neuter.unpredictable-stress",601508834),"\u0434\u0430\u043B\u0435\u043A\u043E\u0301\u00A0\u00A0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.short-form.plural.common.unpredictable-stress","div.word-form.short-form.plural.common.unpredictable-stress",-1314740432),"\u0441\u0432\u0435\u0436\u0438\u0301\u00A0\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62274 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62274__$1 = (((G__62274 instanceof cljs.core.Keyword))?G__62274.fqn:null);
switch (G__62274__$1) {
case "english":
return "End-stressed non-masculine short form.";

break;
case "russian":
return "\u041A\u0440\u0430\u0442\u043A\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0436\u0435\u043D\u0441\u043A\u043E\u0433\u043E/\u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0440\u043E\u0434\u0430 \u0438\u043B\u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430, \u0433\u0434\u0435 \u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62274__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.light","div.word-form.masculine.light",-144557812),"\u0431\u043E\u043B\u044C\u0448\u043E\u0301\u0439 \uD83E\uDD16"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.plural.common.light","div.word-form.plural.common.light",-227939052),"\u0431\u043E\u043B\u044C\u0448\u0438\u0301\u0435 \uD83E\uDD16"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.masculine.light","div.word-form.masculine.light",-144557812),"\u0431\u043E\u043B\u044C\u0448\u043E\u0301\u0433\u043E \uD83D\uDC68"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.plural.common.light","div.word-form.plural.common.light",-227939052),"\u0431\u043E\u043B\u044C\u0448\u0438\u0301\u0445 \uD83D\uDC6B"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62275 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62275__$1 = (((G__62275 instanceof cljs.core.Keyword))?G__62275.fqn:null);
switch (G__62275__$1) {
case "english":
return "The accusative case of masculine and plural forms is the same as nominative when used with inanimate nouns and genitive when used with animate ones.";

break;
case "russian":
return "\u0412\u0438\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0434\u0435\u0436 \u0444\u043E\u0440\u043C \u043C\u0443\u0436\u0441\u043A\u043E\u0433\u043E \u0440\u043E\u0434\u0430 \u0438 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435, \u043A\u0430\u043A \u0438 \u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0434\u0435\u0436 \u043F\u0440\u0438 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438 \u0441 \u043D\u0435\u043E\u0434\u0443\u0448\u0435\u0432\u043B\u0451\u043D\u043D\u044B\u043C\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438, \u0430 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u0434\u0435\u0436 \u2014 \u0441 \u043E\u0434\u0443\u0448\u0435\u0432\u043B\u0451\u043D\u043D\u044B\u043C\u0438.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62275__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__62276 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62276__$1 = (((G__62276 instanceof cljs.core.Keyword))?G__62276.fqn:null);
switch (G__62276__$1) {
case "english":
return "\uD83D\uDD00 Has an alternate stress pattern for the short forms. Mouse over to see them.";

break;
case "russian":
return "\uD83D\uDD00 \u0423 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u0430\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0435\u0441\u0442\u044C \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u043D\u0430\u0431\u043E\u0440 \u043A\u0440\u0430\u0442\u043A\u0438\u0445 \u0444\u043E\u0440\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043A\u0430\u0436\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u0441\u043E\u0440\u0430 \u043D\u0430 \u044D\u0442\u0443 \u0438\u043A\u043E\u043D\u0443.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62276__$1)].join('')));

}
})()], null)], null);

break;
default:
return null;

}
})()], null);
});
slovarish.frontend.app.credits = (function slovarish$frontend$app$credits(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#credits","div#credits",-1149036730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"credits"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__62277 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62277__$1 = (((G__62277 instanceof cljs.core.Keyword))?G__62277.fqn:null);
switch (G__62277__$1) {
case "english":
return "Word lists and frequency data are taken from ";

break;
case "russian":
return "\u0421\u043F\u0438\u0441\u043A\u0438 \u0441\u043B\u043E\u0432 \u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0447\u0430\u0441\u0442\u043E\u0442\u0435 \u0441\u043B\u043E\u0432 \u0438\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62277__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//opencorpora.org"], null),"OpenCorpora"], null),(function (){var G__62278 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62278__$1 = (((G__62278 instanceof cljs.core.Keyword))?G__62278.fqn:null);
switch (G__62278__$1) {
case "english":
return " and ";

break;
case "russian":
return " \u0438 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62278__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//bokrcorpora.narod.ru/frqlist/frqlist-en.html"], null),(function (){var G__62279 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62279__$1 = (((G__62279 instanceof cljs.core.Keyword))?G__62279.fqn:null);
switch (G__62279__$1) {
case "english":
return "this page";

break;
case "russian":
return "\u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62279__$1)].join('')));

}
})()], null),(function (){var G__62280 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62280__$1 = (((G__62280 instanceof cljs.core.Keyword))?G__62280.fqn:null);
switch (G__62280__$1) {
case "english":
return ". Primary source for the inflection data is ";

break;
case "russian":
return ". \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043B\u043E\u0432\u043E\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u2014 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62280__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//wiktionary.org"], null),(function (){var G__62281 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62281__$1 = (((G__62281 instanceof cljs.core.Keyword))?G__62281.fqn:null);
switch (G__62281__$1) {
case "english":
return "English Wiktionary";

break;
case "russian":
return "\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F Wiktionary";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62281__$1)].join('')));

}
})()], null),(function (){var G__62282 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62282__$1 = (((G__62282 instanceof cljs.core.Keyword))?G__62282.fqn:null);
switch (G__62282__$1) {
case "english":
return ", with ";

break;
case "russian":
return ". \u0413\u0434\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62282__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//github.com/georgy7/RussianNounsJS"], null),"RussianNouns.js"], null),(function (){var G__62283 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62283__$1 = (((G__62283 instanceof cljs.core.Keyword))?G__62283.fqn:null);
switch (G__62283__$1) {
case "english":
return " handling algorithmic generation of noun forms where possible.";

break;
case "russian":
return "\u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u0444\u043E\u0440\u043C\u044B \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62283__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__62284 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62284__$1 = (((G__62284 instanceof cljs.core.Keyword))?G__62284.fqn:null);
switch (G__62284__$1) {
case "english":
return "Please note that some inaccuracies may still remain.";

break;
case "russian":
return "\u0415\u0449\u0451 \u043C\u043E\u0433\u0443\u0442 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62284__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__62285 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62285__$1 = (((G__62285 instanceof cljs.core.Keyword))?G__62285.fqn:null);
switch (G__62285__$1) {
case "english":
return "Inspired by ";

break;
case "russian":
return "\u042D\u0442\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0434\u043E\u0445\u043D\u043E\u0432\u0438\u043B\u0438 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62285__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//genusly.com"], null),"Genusly"], null),(function (){var G__62286 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62286__$1 = (((G__62286 instanceof cljs.core.Keyword))?G__62286.fqn:null);
switch (G__62286__$1) {
case "english":
return " and ";

break;
case "russian":
return " \u0438 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62286__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"//kartaslov.ru"], null),"\u041A\u0430\u0440\u0442\u0430 \u0441\u043B\u043E\u0432"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__62287 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62287__$1 = (((G__62287 instanceof cljs.core.Keyword))?G__62287.fqn:null);
switch (G__62287__$1) {
case "english":
return "Written with \u2764\uFE0F in Clojure and ClojureScript.";

break;
case "russian":
return "\u041D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0441 \u2764\uFE0F \u0432 Clojure \u0438 ClojureScript.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62287__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var G__62288 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__62288__$1 = (((G__62288 instanceof cljs.core.Keyword))?G__62288.fqn:null);
switch (G__62288__$1) {
case "english":
return "Slovarish";

break;
case "russian":
return "\u0421\u043B\u043E\u0432\u0430\u0440\u0438\u0449";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62288__$1)].join('')));

}
})()," \u00A9 2022 Justin Douglas"], null)], null);
});
slovarish.frontend.app.pick_random_word = (function slovarish$frontend$app$pick_random_word(){
var source = (function (){var G__62290 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62290__$1 = (((G__62290 instanceof cljs.core.Keyword))?G__62290.fqn:null);
switch (G__62290__$1) {
case "noun":
return cljs.core.deref(slovarish.frontend.data.top_2k_words);

break;
case "verb":
return cljs.core.deref(slovarish.frontend.data.all_verbs);

break;
case "adjective":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__62289_SHARP_){
return cljs.core.some(new cljs.core.Keyword(null,"adjective?","adjective?",-496987264),cljs.core.val(p1__62289_SHARP_));
}),cljs.core.deref(slovarish.frontend.data.all_adjectives));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62290__$1)].join('')));

}
})();
return slovarish.frontend.navigation.go_to_word(cljs.core.rand_nth(cljs.core.keys(source)));
});
slovarish.frontend.app.demo_words = (function slovarish$frontend$app$demo_words(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$app$demo_words_$_iter__62291(s__62292){
return (new cljs.core.LazySeq(null,(function (){
var s__62292__$1 = s__62292;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62292__$1);
if(temp__5753__auto__){
var s__62292__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62292__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62292__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62294 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62293 = (0);
while(true){
if((i__62293 < size__4651__auto__)){
var map__62295 = cljs.core._nth(c__4650__auto__,i__62293);
var map__62295__$1 = cljs.core.__destructure_map(map__62295);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62295__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62295__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var long_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62295__$1,new cljs.core.Keyword(null,"long-form","long-form",-1756929166));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62295__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var word = (function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = infinitive;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return long_form;
}
}
})();
cljs.core.chunk_append(b__62294,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__62293,word,map__62295,map__62295__$1,text,infinitive,long_form,rank,c__4650__auto__,size__4651__auto__,b__62294,s__62292__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(i__62293,word,map__62295,map__62295__$1,text,infinitive,long_form,rank,c__4650__auto__,size__4651__auto__,b__62294,s__62292__$2,temp__5753__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["demo-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)));

var G__62357 = (i__62293 + (1));
i__62293 = G__62357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62294),slovarish$frontend$app$demo_words_$_iter__62291(cljs.core.chunk_rest(s__62292__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62294),null);
}
} else {
var map__62296 = cljs.core.first(s__62292__$2);
var map__62296__$1 = cljs.core.__destructure_map(map__62296);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var long_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"long-form","long-form",-1756929166));
var rank = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62296__$1,new cljs.core.Keyword(null,"rank","rank",-1706728502));
var word = (function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = infinitive;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return long_form;
}
}
})();
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,map__62296,map__62296__$1,text,infinitive,long_form,rank,s__62292__$2,temp__5753__auto__){
return (function (e){
e.preventDefault();

var word__$1 = e.target.innerHTML;
return slovarish.frontend.navigation.go_to_word(word__$1);
});})(word,map__62296,map__62296__$1,text,infinitive,long_form,rank,s__62292__$2,temp__5753__auto__))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["demo-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('')], null)),slovarish$frontend$app$demo_words_$_iter__62291(cljs.core.rest(s__62292__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((50),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"rank","rank",-1706728502),cljs.core._LT_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rank","rank",-1706728502),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.vals((function (){var G__62298 = cljs.core.deref(slovarish.frontend.state.pos);
var fexpr__62297 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"noun","noun",185846460),cljs.core.deref(slovarish.frontend.data.all_nouns),new cljs.core.Keyword(null,"verb","verb",-1492655803),cljs.core.deref(slovarish.frontend.data.all_verbs),new cljs.core.Keyword(null,"adjective","adjective",441465450),cljs.core.deref(slovarish.frontend.data.all_adjectives)], null);
return (fexpr__62297.cljs$core$IFn$_invoke$arity$1 ? fexpr__62297.cljs$core$IFn$_invoke$arity$1(G__62298) : fexpr__62297.call(null,G__62298));
})()))))));
})())], null);
});
slovarish.frontend.app.inflector_app = (function slovarish$frontend$app$inflector_app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.load_mask], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.credits], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.paypal_donate_button], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#random-word-button","div#random-word-button",-1340613198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.app.pick_random_word();
})], null),"\u00A0\uD83C\uDFB2\u00A0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.word_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.suggestions], null),(cljs.core.truth_(slovarish.frontend.state.result())?(function (){var G__62299 = cljs.core.deref(slovarish.frontend.state.pos);
var G__62299__$1 = (((G__62299 instanceof cljs.core.Keyword))?G__62299.fqn:null);
switch (G__62299__$1) {
case "noun":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.noun_table,slovarish.frontend.state.result()], null);

break;
case "verb":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.verb_table,slovarish.frontend.state.result()], null);

break;
case "adjective":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.adjectives.adjective_view.adj_table,slovarish.frontend.state.result()], null);

break;
default:
return null;

}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.demo_words], null))], null)], null);
});
slovarish.frontend.app.run = (function slovarish$frontend$app$run(){
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.app.inflector_app], null),document.getElementById("root"));

slovarish.frontend.navigation.go_to_word(cljs.core.deref(slovarish.frontend.state.input));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.app.batches_loaded),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(slovarish.frontend.app.num_batches)))){
return slovarish.frontend.app.route();
} else {
return null;
}
});
slovarish.frontend.app.init = (function slovarish$frontend$app$init(){
slovarish.frontend.app.load_edn("nouns",(1));

slovarish.frontend.app.load_edn("verbs",(1));

slovarish.frontend.app.load_edn("adjectives",(1));

slovarish.frontend.app.run();

window.addEventListener("hashchange",(function (){
return slovarish.frontend.app.route.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"push-state?","push-state?",-1915122392),false], 0));
}));

window.addEventListener("resize",(function (){
return slovarish.frontend.navigation.toggle_gloss_arrows();
}));

return window.addEventListener("keydown",(function (e){
var G__62300 = e.code;
switch (G__62300) {
case "Digit1":
return slovarish.frontend.app.change_sense((1));

break;
case "Digit2":
return slovarish.frontend.app.change_sense((2));

break;
case "Digit3":
return slovarish.frontend.app.go_to_suggestion((1));

break;
case "Digit4":
return slovarish.frontend.app.go_to_suggestion((2));

break;
case "Digit5":
return slovarish.frontend.app.go_to_suggestion((3));

break;
case "Digit6":
return slovarish.frontend.app.go_to_suggestion((4));

break;
case "Digit7":
return slovarish.frontend.app.go_to_suggestion((5));

break;
case "Digit8":
e.preventDefault();

return slovarish.frontend.app.change_pos(new cljs.core.Keyword(null,"noun","noun",185846460));

break;
case "Digit9":
e.preventDefault();

return slovarish.frontend.app.change_pos(new cljs.core.Keyword(null,"verb","verb",-1492655803));

break;
case "Digit0":
e.preventDefault();

return slovarish.frontend.app.change_pos(new cljs.core.Keyword(null,"adjective","adjective",441465450));

break;
case "Escape":
return slovarish.frontend.navigation.go_to_word("");

break;
case "Enter":
return slovarish.frontend.app.pick_random_word();

break;
case "ArrowLeft":
return slovarish.frontend.navigation.prev_sense();

break;
case "ArrowRight":
return slovarish.frontend.navigation.next_sense();

break;
default:
return true;

}
}));
});

//# sourceMappingURL=slovarish.frontend.app.js.map
