goog.provide('slovarish.frontend.gen_plur');
slovarish.frontend.gen_plur.vowels = "\u0430\u0435\u0438\u043E\u0443\u044F\u0451\u044D\u044E\u044B";
slovarish.frontend.gen_plur.soft_vowels = "\u044F\u0438\u0435\u0451\u044E";
slovarish.frontend.gen_plur.ending = (function slovarish$frontend$gen_plur$ending(word){
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["[",slovarish.frontend.gen_plur.vowels,"]$"].join('')),word))){
return new cljs.core.Keyword(null,"vowel","vowel",-1467750494);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u044C")){
return new cljs.core.Keyword(null,"soft","soft",144891873);
} else {
if(cljs.core.truth_(cljs.core.re_find(/[шжщч]$/,word))){
return new cljs.core.Keyword(null,"sibilant","sibilant",1873258377);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u0439")){
return new cljs.core.Keyword(null,"j","j",-1397974765);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u0446")){
return new cljs.core.Keyword(null,"ts","ts",1617209904);
} else {
return new cljs.core.Keyword(null,"hard","hard",2068420191);

}
}
}
}
}
});
slovarish.frontend.gen_plur.chop_last = (function slovarish$frontend$gen_plur$chop_last(var_args){
var G__36678 = arguments.length;
switch (G__36678) {
case 1:
return slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1 = (function (word){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(cljs.core.count(word) - (1)));
}));

(slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$2 = (function (n,word){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(cljs.core.count(word) - n));
}));

(slovarish.frontend.gen_plur.chop_last.cljs$lang$maxFixedArity = 2);

slovarish.frontend.gen_plur.expected_gp_STAR_ = (function slovarish$frontend$gen_plur$expected_gp_STAR_(table,irregular_stem_QMARK_){
var nom_sing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
var nom_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
var base = slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(nom_plur);
var stress = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"stress","stress",1198669591)], null),new cljs.core.Keyword(null,"stem","stem",-1293996747));
var ns_ending = slovarish.frontend.gen_plur.ending(nom_sing);
if(cljs.core.truth_(irregular_stem_QMARK_)){
if(clojure.string.ends_with_QMARK_(nom_plur,"\u044C\u044F")){
var G__36681 = stress;
var G__36681__$1 = (((G__36681 instanceof cljs.core.Keyword))?G__36681.fqn:null);
switch (G__36681__$1) {
case "ending":
return [slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(base),"\u0435\u0439"].join('');

break;
case "stem":
return [base,"\u0435\u0432"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36681__$1)].join('')));

}
} else {
if(clojure.string.ends_with_QMARK_(nom_plur,"\u043C\u0435\u043D\u0430")){
return [slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$2((2),base),"\u0451\u043D"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_ending,new cljs.core.Keyword(null,"vowel","vowel",-1467750494))){
return slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(nom_plur);
} else {
if(clojure.string.ends_with_QMARK_(nom_plur,"\u0438")){
return [base,"\u0435\u0439"].join('');
} else {
if(cljs.core.truth_(cljs.core.re_find(/(?:[ая]нин|[оё]нок)$/,nom_sing))){
return slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(nom_plur);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_ending,new cljs.core.Keyword(null,"hard","hard",2068420191))){
return [base,"\u043E\u0432"].join('');
} else {
return slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(nom_plur);

}
}
}
}
}
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/[иы]е$/,nom_plur))){
return [base,"\u0445"].join('');
} else {
if(cljs.core.truth_((function (){var fexpr__36685 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ts","ts",1617209904),null,new cljs.core.Keyword(null,"j","j",-1397974765),null], null), null);
return (fexpr__36685.cljs$core$IFn$_invoke$arity$1 ? fexpr__36685.cljs$core$IFn$_invoke$arity$1(ns_ending) : fexpr__36685.call(null,ns_ending));
})())){
var G__36686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_ending,stress], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"stem","stem",-1293996747)], null),G__36686)){
return [base,"\u0435\u0432"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"j","j",-1397974765),new cljs.core.Keyword(null,"ending","ending",1236735934)], null),G__36686)){
return [base,"\u0451\u0432"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"stem","stem",-1293996747)], null),G__36686)){
return [base,"\u0435\u0432"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"ending","ending",1236735934)], null),G__36686)){
return [base,"\u043E\u0432"].join('');
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36686)].join('')));

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_ending,new cljs.core.Keyword(null,"hard","hard",2068420191))){
return [base,"\u043E\u0432"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_ending,new cljs.core.Keyword(null,"sibilant","sibilant",1873258377))){
return [base,"\u0435\u0439"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_ending,new cljs.core.Keyword(null,"soft","soft",144891873))){
return [base,"\u0435\u0439"].join('');
} else {
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["\u044C[",slovarish.frontend.gen_plur.vowels,"]$"].join('')),nom_sing))){
var G__36688 = stress;
var G__36688__$1 = (((G__36688 instanceof cljs.core.Keyword))?G__36688.fqn:null);
switch (G__36688__$1) {
case "ending":
return [slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(base),"\u0435\u0439"].join('');

break;
case "stem":
return [slovarish.frontend.gen_plur.chop_last.cljs$core$IFn$_invoke$arity$1(base),"\u0438\u0439"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36688__$1)].join('')));

}
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stress,new cljs.core.Keyword(null,"ending","ending",1236735934));
if(and__4251__auto__){
var or__4253__auto__ = cljs.core.re_find(cljs.core.re_pattern(["[\u0448\u0436\u0449\u0447][",slovarish.frontend.gen_plur.vowels,"]$"].join('')),nom_sing);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return clojure.string.ends_with_QMARK_(nom_sing,"\u043D\u044F");
}
} else {
return and__4251__auto__;
}
})())){
return [base,"\u0435\u0439"].join('');
} else {
if(clojure.string.ends_with_QMARK_(nom_sing,"\u0446\u0435")){
return base;
} else {
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["[^",slovarish.frontend.gen_plur.vowels,"\u0439][\u0435]$"].join('')),nom_sing))){
return [base,"\u0435\u0439"].join('');
} else {
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["[^",slovarish.frontend.gen_plur.vowels,"\u0439][",slovarish.frontend.gen_plur.soft_vowels,"]$"].join('')),nom_sing))){
return [base,"\u044C"].join('');
} else {
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern(["[",slovarish.frontend.gen_plur.vowels,"][",slovarish.frontend.gen_plur.soft_vowels,"]$"].join('')),nom_sing))){
return [base,"\u0439"].join('');
} else {
return base;

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
slovarish.frontend.gen_plur.expected_gp = (function slovarish$frontend$gen_plur$expected_gp(table,irregular_stem_QMARK_){
var base = slovarish.frontend.gen_plur.expected_gp_STAR_(table,irregular_stem_QMARK_);
var temp__5755__auto__ = cljs.core.re_find(cljs.core.re_pattern(["(.*?)([^",slovarish.frontend.gen_plur.vowels,"])([^",slovarish.frontend.gen_plur.vowels,"])(\u044C)?$"].join('')),base);
if((temp__5755__auto__ == null)){
return base;
} else {
var vec__36693 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(0),null);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(2),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(3),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(4),null);
var vowel = (cljs.core.truth_((function (){var fexpr__36696 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["\u044C",null,"\u0449",null,"\u0448",null,"\u0439",null,"\u0447",null,"\u0436",null], null), null);
return (fexpr__36696.cljs$core$IFn$_invoke$arity$1 ? fexpr__36696.cljs$core$IFn$_invoke$arity$1(x) : fexpr__36696.call(null,x));
})())?"\u0435":(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([x,y]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0433",null,"\u0445",null,"\u043A",null], null), null)))?"\u043E":"\u0435"
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return base;
} else {
if(cljs.core.not((function (){var fexpr__36698 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u0446",null,"\u043B",null,"\u043D",null,"\u043A",null], null), null);
return (fexpr__36698.cljs$core$IFn$_invoke$arity$1 ? fexpr__36698.cljs$core$IFn$_invoke$arity$1(y) : fexpr__36698.call(null,y));
})())){
return base;
} else {
if(cljs.core.truth_((function (){var fexpr__36700 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u044C",null,"\u0439",null], null), null);
return (fexpr__36700.cljs$core$IFn$_invoke$arity$1 ? fexpr__36700.cljs$core$IFn$_invoke$arity$1(x) : fexpr__36700.call(null,x));
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),vowel,cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(head),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),vowel,cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail)].join('');

}
}
}
}
});

//# sourceMappingURL=slovarish.frontend.gen_plur.js.map
