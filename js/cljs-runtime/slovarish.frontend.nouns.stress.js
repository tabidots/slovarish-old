goog.provide('slovarish.frontend.nouns.stress');
/**
 * From the keywords :stem and :ending, creates a basic template for a noun's
 *   stress pattern in which all cases of the same number have the same stress,
 *   that is, SS, EE, SE, or ES.
 */
slovarish.frontend.nouns.stress.base_pattern = (function slovarish$frontend$nouns$stress$base_pattern(sg,pl){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$stress$base_pattern_$_iter__1025909(s__1025910){
return (new cljs.core.LazySeq(null,(function (){
var s__1025910__$1 = s__1025910;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025910__$1);
if(temp__5753__auto__){
var s__1025910__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025910__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025910__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1025912 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025911 = (0);
while(true){
if((i__1025911 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__1025911);
cljs.core.chunk_append(b__1025912,cljs.core.PersistentArrayMap.createAsIfByAssoc([padezh,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),sg], null),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),pl], null)], null)]));

var G__1026013 = (i__1025911 + (1));
i__1025911 = G__1026013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1025912),slovarish$frontend$nouns$stress$base_pattern_$_iter__1025909(cljs.core.chunk_rest(s__1025910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1025912),null);
}
} else {
var padezh = cljs.core.first(s__1025910__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([padezh,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),sg], null),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),pl], null)], null)]),slovarish$frontend$nouns$stress$base_pattern_$_iter__1025909(cljs.core.rest(s__1025910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.lower_case),Object.keys(RussianNouns.Case))));
})());
});
/**
 * A hash-map of Andrey Zaliznyak's stress patterns as found on Wiktionary.
 */
slovarish.frontend.nouns.stress.patterns = (function (){var tag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"stem","stem",-1293996747),new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028),true], null);
var a = slovarish.frontend.nouns.stress.base_pattern(new cljs.core.Keyword(null,"stem","stem",-1293996747),new cljs.core.Keyword(null,"stem","stem",-1293996747));
var b = slovarish.frontend.nouns.stress.base_pattern(new cljs.core.Keyword(null,"ending","ending",1236735934),new cljs.core.Keyword(null,"ending","ending",1236735934));
var c = slovarish.frontend.nouns.stress.base_pattern(new cljs.core.Keyword(null,"stem","stem",-1293996747),new cljs.core.Keyword(null,"ending","ending",1236735934));
var d = slovarish.frontend.nouns.stress.base_pattern(new cljs.core.Keyword(null,"ending","ending",1236735934),new cljs.core.Keyword(null,"stem","stem",-1293996747));
var f = cljs.core.assoc_in(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),tag);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"f**","f**",-153877760),new cljs.core.Keyword(null,"d*","d*",-1694593043),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"f*","f*",-689873734),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b*","b*",611664063)],[cljs.core.assoc_in(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),tag),cljs.core.assoc_in(d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),tag),cljs.core.assoc_in(c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),tag),c,b,d,f,cljs.core.assoc_in(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),tag),a,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"stem","stem",-1293996747)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"stem","stem",-1293996747)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),tag)]);
})();
slovarish.frontend.nouns.stress.nom_sing_exceptional_stem_stress = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["\u0437\u0430\u0451\u043C",null,"\u043F\u043E\u043B\u0434\u0435\u043D\u044C",null,"\u0443\u0433\u043E\u0440\u044C",null,"\u0443\u0437\u0435\u043B",null,"\u043D\u0430\u0451\u043C",null,"\u043F\u043E\u043B\u043D\u043E\u0447\u044C",null,"\u0443\u0433\u043E\u043B",null,"\u043F\u043E\u0434\u043D\u0430\u0451\u043C",null], null), null);
slovarish.frontend.nouns.stress.nom_sing_exceptional_ending_stress = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0433\u043E\u0441\u043F\u043E\u0434\u044C",null,"\u043F\u043E\u043B\u0447\u0430\u0441\u0430",null,"\u0413\u043E\u0441\u043F\u043E\u0434\u044C",null], null), null);
slovarish.frontend.nouns.stress.gen_plur_exceptional_stem_stress = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u043C\u0430\u0441\u043B\u043E",null,"\u043C\u0435\u0447\u0442\u0430",null,"\u0434\u0435\u043D\u044C\u0433\u0438",null], null), null);
slovarish.frontend.nouns.stress.gen_plur_exceptional_ending_stress = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["\u0441\u0443\u0434\u044C\u044F",null,"\u0437\u0435\u043C\u043B\u044F",null,"\u0441\u0432\u044B\u043D\u044C\u044F",null,"\u044F\u0439\u0446\u043E",null,"\u043E\u0432\u0446\u0430",null,"\u0441\u0435\u0441\u0442\u0440\u0430",null,"\u0445\u043B\u043E\u043F\u043E\u0442\u044B",null,"\u0441\u0435\u043C\u044C\u044F",null,"\u043A\u043E\u043B\u044C\u0446\u043E",null], null), null);
/**
 * Given a word, its nominative plural (as disambiguator), stress pattern name,
 *   and animacy data, generates its stress pattern with exceptions made where
 *   appropriate, based on the word. Some words have one-off exceptions that are not
 *   mentioned even on the stress pattern page, namely: утро, люди, деньги, and масло.
 *   There may be others. Nom-plur disambiguation is pretty much only for человек/люди.
 */
slovarish.frontend.nouns.stress.generate_pattern = (function slovarish$frontend$nouns$stress$generate_pattern(word,nom_plur,pattern_name,animate_QMARK_){
if(cljs.core.truth_(pattern_name)){
var s_tag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"stem","stem",-1293996747),new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028),true], null);
var e_tag = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"ending","ending",1236735934),new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028),true], null);
var ludi_QMARK_ = cljs.core.some((function (p1__1025933_SHARP_){
return clojure.string.ends_with_QMARK_(p1__1025933_SHARP_,"\u043B\u044E\u0434\u0438");
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [word,nom_plur], null));
var G__1025939 = (pattern_name.cljs$core$IFn$_invoke$arity$1 ? pattern_name.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.stress.patterns) : pattern_name.call(null,slovarish.frontend.nouns.stress.patterns));
var G__1025939__$1 = (cljs.core.truth_((slovarish.frontend.nouns.stress.nom_sing_exceptional_stem_stress.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.stress.nom_sing_exceptional_stem_stress.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.stress.nom_sing_exceptional_stem_stress.call(null,word)))?cljs.core.assoc_in(G__1025939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),s_tag):G__1025939);
var G__1025939__$2 = (cljs.core.truth_((slovarish.frontend.nouns.stress.nom_sing_exceptional_ending_stress.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.stress.nom_sing_exceptional_ending_stress.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.stress.nom_sing_exceptional_ending_stress.call(null,word)))?cljs.core.assoc_in(G__1025939__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),e_tag):G__1025939__$1);
var G__1025939__$3 = (cljs.core.truth_((slovarish.frontend.nouns.stress.gen_plur_exceptional_stem_stress.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.stress.gen_plur_exceptional_stem_stress.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.stress.gen_plur_exceptional_stem_stress.call(null,word)))?cljs.core.assoc_in(G__1025939__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),s_tag):G__1025939__$2);
var G__1025939__$4 = (cljs.core.truth_((slovarish.frontend.nouns.stress.gen_plur_exceptional_ending_stress.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.stress.gen_plur_exceptional_ending_stress.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.stress.gen_plur_exceptional_ending_stress.call(null,word)))?cljs.core.assoc_in(G__1025939__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),e_tag):G__1025939__$3);
var G__1025939__$5 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u0443\u0442\u0440\u043E"))?cljs.core.assoc_in(G__1025939__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),e_tag):G__1025939__$4);
var G__1025939__$6 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u0443\u0442\u0440\u043E"))?cljs.core.assoc_in(G__1025939__$5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),e_tag):G__1025939__$5);
var G__1025939__$7 = (cljs.core.truth_(ludi_QMARK_)?cljs.core.assoc_in(G__1025939__$6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),e_tag):G__1025939__$6);
var G__1025939__$8 = (cljs.core.truth_(ludi_QMARK_)?cljs.core.assoc_in(G__1025939__$7,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),e_tag):G__1025939__$7);
var G__1025939__$9 = ((((cljs.core.not((function (){var fexpr__1025952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d*","d*",-1694593043),null,new cljs.core.Keyword(null,"f*","f*",-689873734),null], null), null);
return (fexpr__1025952.cljs$core$IFn$_invoke$arity$1 ? fexpr__1025952.cljs$core$IFn$_invoke$arity$1(pattern_name) : fexpr__1025952.call(null,pattern_name));
})())) && (cljs.core.not(animate_QMARK_))))?(function (){var p = G__1025939__$8;
return cljs.core.assoc_in(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445)], null)));
})():G__1025939__$8);
var G__1025939__$10 = (cljs.core.truth_(animate_QMARK_)?(function (){var p = G__1025939__$9;
return cljs.core.assoc_in(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021)], null)));
})():G__1025939__$9);
if(cljs.core.not(animate_QMARK_)){
var p = G__1025939__$10;
return cljs.core.assoc_in(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021)], null)));
} else {
return G__1025939__$10;
}
} else {
return null;
}
});
slovarish.frontend.nouns.stress.vowel_indices = (function slovarish$frontend$nouns$stress$vowel_indices(word){
return slovarish.frontend.utils.re_pos(/[аеёиоуяюыэ]/,word);
});
slovarish.frontend.nouns.stress.monosyllable_QMARK_ = (function slovarish$frontend$nouns$stress$monosyllable_QMARK_(word){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.re_seq(/[аеёиоуяюыэ]/,clojure.string.lower_case(word))));
});
slovarish.frontend.nouns.stress.add_stress_mark = (function slovarish$frontend$nouns$stress$add_stress_mark(word,index){
if(cljs.core.truth_((function (){var or__4253__auto__ = (index == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.re_find(/ё|\u0301/,word);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return slovarish.frontend.nouns.stress.monosyllable_QMARK_(word);
}
}
})())){
return word;
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),index),"\u0301",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(word,index)].join('');
}
});
slovarish.frontend.nouns.stress.add_stem_stress = (function slovarish$frontend$nouns$stress$add_stem_stress(unstressed,lemma,index){
return slovarish.frontend.nouns.stress.add_stress_mark(unstressed,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unstressed,"\u043E\u0442\u0447\u0435"))?(1):(cljs.core.truth_(cljs.core.re_find(/^полу(дн|ноч)/,unstressed))?(4):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/^пол[^у]/,lemma);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/^полу/,unstressed);
} else {
return and__4251__auto__;
}
})())?(index + (1)):index
))));
});
slovarish.frontend.nouns.stress.add_end_stress = (function slovarish$frontend$nouns$stress$add_end_stress(unstressed,lemma,index){
var vec__1025972 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.key),cljs.core.reverse(slovarish.frontend.nouns.stress.vowel_indices(unstressed)));
var seq__1025973 = cljs.core.seq(vec__1025972);
var first__1025974 = cljs.core.first(seq__1025973);
var seq__1025973__$1 = cljs.core.next(seq__1025973);
var final$ = first__1025974;
var first__1025974__$1 = cljs.core.first(seq__1025973__$1);
var seq__1025973__$2 = cljs.core.next(seq__1025973__$1);
var penult = first__1025974__$1;
var _ = seq__1025973__$2;
return slovarish.frontend.nouns.stress.add_stress_mark(unstressed,((((clojure.string.ends_with_QMARK_(unstressed,"\u044C\u043C\u0438")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unstressed,"\u0433\u043E\u0441\u043F\u043E\u0434"))))?final$:(cljs.core.truth_(index)?index:(cljs.core.truth_(cljs.core.re_find(/[ая]ми$/,lemma))?final$:(cljs.core.truth_(cljs.core.re_find(/[ая]ми$/,unstressed))?penult:final$
)))));
});
slovarish.frontend.nouns.stress.add_stressed_form = (function slovarish$frontend$nouns$stress$add_stressed_form(p__1025984,lemma,ssi,esi){
var map__1025985 = p__1025984;
var map__1025985__$1 = cljs.core.__destructure_map(map__1025985);
var entry = map__1025985__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025985__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025985__$1,new cljs.core.Keyword(null,"stress","stress",1198669591));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025985__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
if(clojure.string.blank_QMARK_(text)){
return text;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"stressed","stressed",-936375069),(function (){var G__1025988 = stress;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stem","stem",-1293996747),G__1025988)){
return slovarish.frontend.nouns.stress.add_stem_stress(text,lemma,ssi);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ending","ending",1236735934),G__1025988)){
return slovarish.frontend.nouns.stress.add_end_stress(text,lemma,esi);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1025988)){
var or__4253__auto__ = stressed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return text;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1025988)].join('')));

}
}
}
})());
}
});
/**
 * Given a declension table annotated with stress locations for each form (ending/stem)
 *   and an insertion index for the stress mark over the stem (and the ending, if exceptional),
 *   inserts stress marks in all forms at the appropriate place. This is a little messy
 *   because the actual stress location can deviate from pre-defined stress patterns due to
 *   lexical factors (particular words) or morphological factors (particular grammatical cases).
 */
slovarish.frontend.nouns.stress.apply_stress = (function slovarish$frontend$nouns$stress$apply_stress(p__1025990,ssi){
var map__1025991 = p__1025990;
var map__1025991__$1 = cljs.core.__destructure_map(map__1025991);
var table = map__1025991__$1;
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025991__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1025991__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var word = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var stressed_headword = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"stressed","stressed",-936375069)], null),"");
var nom_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var p_ssi = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\u0434\u0435\u0442\u0438",nom_plur);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = clojure.string.ends_with_QMARK_(nom_plur,"\u043B\u044E\u0434\u0438");
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/(?:ья|ата)$/,nom_plur);
} else {
return and__4251__auto__;
}
}
}
})())?cljs.core.second(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.key),cljs.core.reverse(slovarish.frontend.nouns.stress.vowel_indices(nom_plur)))):ssi);
var special_esi = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.re_find(/(?:о́й|о́е|а́я)$/,stressed_headword);
if(cljs.core.truth_(and__4251__auto__)){
var G__1025992 = slovarish.frontend.utils.re_pos(/(?:ие|ые)$/,nom_plur);
var G__1025992__$1 = (((G__1025992 == null))?null:cljs.core.not_empty(G__1025992));
var G__1025992__$2 = (((G__1025992__$1 == null))?null:cljs.core.first(G__1025992__$1));
var G__1025992__$3 = (((G__1025992__$2 == null))?null:cljs.core.key(G__1025992__$2));
if((G__1025992__$3 == null)){
return null;
} else {
return (G__1025992__$3 + (1));
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var G__1025996 = slovarish.frontend.utils.re_pos(/(?:и́н|и́е|ы́е|о́нок|ёнок|о́чка)$/,stressed_headword);
var G__1025996__$1 = (((G__1025996 == null))?null:cljs.core.not_empty(G__1025996));
var G__1025996__$2 = (((G__1025996__$1 == null))?null:cljs.core.first(G__1025996__$1));
var G__1025996__$3 = (((G__1025996__$2 == null))?null:cljs.core.key(G__1025996__$2));
if((G__1025996__$3 == null)){
return null;
} else {
return (G__1025996__$3 + (1));
}
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$stress$apply_stress_$_iter__1025997(s__1025998){
return (new cljs.core.LazySeq(null,(function (){
var s__1025998__$1 = s__1025998;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1025998__$1);
if(temp__5753__auto__){
var s__1025998__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1025998__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1025998__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026000 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1025999 = (0);
while(true){
if((i__1025999 < size__4651__auto__)){
var vec__1026001 = cljs.core._nth(c__4650__auto__,i__1025999);
var padezh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026001,(0),null);
var chisla = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026001,(1),null);
cljs.core.chunk_append(b__1026000,cljs.core.PersistentArrayMap.createAsIfByAssoc([padezh,(function (){var G__1026004 = chisla;
var G__1026004__$1 = ((cljs.core.not(plural_only_QMARK_))?cljs.core.update.cljs$core$IFn$_invoke$arity$6(G__1026004,new cljs.core.Keyword(null,"singular","singular",1409933445),slovarish.frontend.nouns.stress.add_stressed_form,word,ssi,special_esi):G__1026004);
if(cljs.core.not(singular_only_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(G__1026004__$1,new cljs.core.Keyword(null,"plural","plural",-881591021),slovarish.frontend.nouns.stress.add_stressed_form,word,p_ssi,special_esi);
} else {
return G__1026004__$1;
}
})()]));

var G__1026022 = (i__1025999 + (1));
i__1025999 = G__1026022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026000),slovarish$frontend$nouns$stress$apply_stress_$_iter__1025997(cljs.core.chunk_rest(s__1025998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026000),null);
}
} else {
var vec__1026006 = cljs.core.first(s__1025998__$2);
var padezh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026006,(0),null);
var chisla = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026006,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([padezh,(function (){var G__1026009 = chisla;
var G__1026009__$1 = ((cljs.core.not(plural_only_QMARK_))?cljs.core.update.cljs$core$IFn$_invoke$arity$6(G__1026009,new cljs.core.Keyword(null,"singular","singular",1409933445),slovarish.frontend.nouns.stress.add_stressed_form,word,ssi,special_esi):G__1026009);
if(cljs.core.not(singular_only_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(G__1026009__$1,new cljs.core.Keyword(null,"plural","plural",-881591021),slovarish.frontend.nouns.stress.add_stressed_form,word,p_ssi,special_esi);
} else {
return G__1026009__$1;
}
})()]),slovarish$frontend$nouns$stress$apply_stress_$_iter__1025997(cljs.core.rest(s__1025998__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(table);
})());
});

//# sourceMappingURL=slovarish.frontend.nouns.stress.js.map
