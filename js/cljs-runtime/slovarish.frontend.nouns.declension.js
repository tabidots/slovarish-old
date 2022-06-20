goog.provide('slovarish.frontend.nouns.declension');
goog.scope(function(){
  slovarish.frontend.nouns.declension.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$russian_nouns_js$RussianNouns=shadow.js.require("module$node_modules$russian_nouns_js$RussianNouns", {});
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.declension !== 'undefined') && (typeof slovarish.frontend.nouns.declension.inflector !== 'undefined')){
} else {
slovarish.frontend.nouns.declension.inflector = (new module$node_modules$russian_nouns_js$RussianNouns.Engine());
}
/**
 * Wrapper around RussianNouns.createLemma() that allows gender to be passed in
 *   as a lower-case English keyword (in Clojure-ish style).
 */
slovarish.frontend.nouns.declension.create_lemma = (function slovarish$frontend$nouns$declension$create_lemma(p__55930){
var map__55931 = p__55930;
var map__55931__$1 = cljs.core.__destructure_map(map__55931);
var attributes = map__55931__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55931__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var rod = (RussianNouns.Gender[clojure.string.upper_case(cljs.core.name(gender))]);
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attributes,new cljs.core.Keyword(null,"gender","gender",-733930727),rod,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pluraleTantum","pluraleTantum",-492975629),plural_only_QMARK_], 0)));
});
slovarish.frontend.nouns.declension.soft_sign_locatives = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, ["\u0434\u0432\u0435\u0440\u044C",null,"\u043F\u043E\u043B\u0443\u043E\u0441\u044C",null,"\u0434\u0430\u043B\u044C",null,"\u043F\u044B\u043B\u044C",null,"\u043A\u0440\u043E\u0432\u044C",null,"\u043E\u0441\u044C",null,"\u0433\u043E\u0440\u0441\u0442\u044C",null,"\u0441\u0435\u043D\u044C",null,"\u043F\u0435\u0447\u044C",null,"\u0441\u0435\u0442\u044C",null,"\u0433\u0440\u0443\u0434\u044C",null,"\u0440\u044B\u0441\u044C",null,"\u0442\u0435\u043D\u044C",null,"\u043D\u043E\u0447\u044C",null,"\u043C\u0435\u043B\u044C",null,"\u0447\u0435\u0441\u0442\u044C",null,"\u0433\u0440\u044F\u0437\u044C",null], null), null);
/**
 * Given a shell (basic attributes of a noun) and an optional plural form, returns
 *   a declension table of the noun based on RussianNounsJS output. This table does
 *   not include stress information and it may have inaccuracies. Both of these will
 *   be fixed a later stage.
 */
slovarish.frontend.nouns.declension.plain_declensions = (function slovarish$frontend$nouns$declension$plain_declensions(var_args){
var args__4870__auto__ = [];
var len__4864__auto___55978 = arguments.length;
var i__4865__auto___55979 = (0);
while(true){
if((i__4865__auto___55979 < len__4864__auto___55978)){
args__4870__auto__.push((arguments[i__4865__auto___55979]));

var G__55980 = (i__4865__auto___55979 + (1));
i__4865__auto___55979 = G__55980;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return slovarish.frontend.nouns.declension.plain_declensions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(slovarish.frontend.nouns.declension.plain_declensions.cljs$core$IFn$_invoke$arity$variadic = (function (p__55934,p__55935){
var map__55936 = p__55934;
var map__55936__$1 = cljs.core.__destructure_map(map__55936);
var shell = map__55936__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var reduced_stem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"reduced-stem","reduced-stem",2063593333));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var map__55937 = p__55935;
var map__55937__$1 = cljs.core.__destructure_map(map__55937);
var bare_plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55937__$1,new cljs.core.Keyword(null,"bare-plural","bare-plural",1472208170));
var lemma = slovarish.frontend.nouns.declension.create_lemma(shell);
var result = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
slovarish.frontend.nouns.declension.goog$module$goog$object.forEach(RussianNouns.Case,(function (padezh,eng_str){
var eng_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(eng_str));
var s_form = cljs.core.first(slovarish.frontend.nouns.declension.inflector.decline(lemma,padezh));
var p_form = (cljs.core.truth_(plural_only_QMARK_)?s_form:cljs.core.first(slovarish.frontend.nouns.declension.inflector.decline(lemma,padezh,(function (){var or__4253__auto__ = bare_plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.first(slovarish.frontend.nouns.declension.inflector.pluralize(lemma));
}
})())));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eng_kw,new cljs.core.Keyword(null,"locative","locative",-170644907))){
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.re_find(/[ую]$/,s_form);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (slovarish.frontend.nouns.declension.soft_sign_locatives.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.declension.soft_sign_locatives.cljs$core$IFn$_invoke$arity$1(text) : slovarish.frontend.nouns.declension.soft_sign_locatives.call(null,text));
}
})())){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),s_form,new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)], null)], null));
} else {
return null;
}
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,(function (){var G__55938 = cljs.core.PersistentArrayMap.EMPTY;
var G__55938__$1 = ((cljs.core.not(plural_only_QMARK_))?cljs.core.assoc_in(G__55938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eng_kw,new cljs.core.Keyword(null,"singular","singular",1409933445)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),s_form,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s_form,text)], null)):G__55938);
if(cljs.core.not(singular_only_QMARK_)){
return cljs.core.assoc_in(G__55938__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eng_kw,new cljs.core.Keyword(null,"plural","plural",-881591021)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),p_form,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p_form,text)], null));
} else {
return G__55938__$1;
}
})());
}
}));

return cljs.core.persistent_BANG_(result);
}));

(slovarish.frontend.nouns.declension.plain_declensions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(slovarish.frontend.nouns.declension.plain_declensions.cljs$lang$applyTo = (function (seq55932){
var G__55933 = cljs.core.first(seq55932);
var seq55932__$1 = cljs.core.next(seq55932);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55933,seq55932__$1);
}));

/**
 * Adds special forms to the shell, with stress info, if they are attested in
 *   OpenCorpora data. There are some instances where a special form exists but is
 *   not attested, e.g. вес has an unattested locative, but by definition they are
 *   probably not worth including.
 */
slovarish.frontend.nouns.declension.special_forms = (function slovarish$frontend$nouns$declension$special_forms(locative,vocative,partitive,pattern){
var G__55939 = cljs.core.PersistentArrayMap.EMPTY;
var G__55939__$1 = (cljs.core.truth_(locative)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55939,new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),locative,new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"ending","ending",1236735934)], null)], null)):G__55939);
var G__55939__$2 = (cljs.core.truth_(vocative)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55939__$1,new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),vocative,new cljs.core.Keyword(null,"stress","stress",1198669591),new cljs.core.Keyword(null,"stem","stem",-1293996747)], null)], null)):G__55939__$1);
if(cljs.core.truth_(partitive)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55939__$2,new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),partitive,new cljs.core.Keyword(null,"stress","stress",1198669591),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"stress","stress",1198669591)], null))], null)], null));
} else {
return G__55939__$2;
}
});
/**
 * There are too many genitive plural exceptions that RussianNounsJS doesn't get
 *   right, so it's easier to just take it from Wiktionary.
 */
slovarish.frontend.nouns.declension.overwrite_gen_plur = (function slovarish$frontend$nouns$declension$overwrite_gen_plur(table,p__55940){
var map__55941 = p__55940;
var map__55941__$1 = cljs.core.__destructure_map(map__55941);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var gen_plur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55941__$1,new cljs.core.Keyword(null,"gen-plur","gen-plur",375459229));
var temp__5751__auto__ = (function (){var G__55942 = gen_plur;
if((G__55942 == null)){
return null;
} else {
return clojure.string.replace(G__55942,/\u0301/,"");
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var bare_gp = temp__5751__auto__;
var new_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),bare_gp,new cljs.core.Keyword(null,"plural","plural",-881591021),gen_plur,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,bare_gp)], null);
var G__55943 = table;
var G__55943__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__55943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),cljs.core.merge,new_data)
;
if(cljs.core.truth_(animate)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__55943__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),cljs.core.merge,new_data);
} else {
return G__55943__$1;
}
} else {
return table;
}
});
/**
 * RussianNounsJS doesn't always get masculine nouns with fleeting vowels in nom. sing.
 *   right, such as огонь, орёл, 
 */
slovarish.frontend.nouns.declension.reduce_reducible_stems = (function slovarish$frontend$nouns$declension$reduce_reducible_stems(table,p__55944){
var map__55945 = p__55944;
var map__55945__$1 = cljs.core.__destructure_map(map__55945);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55945__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reduced_stem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55945__$1,new cljs.core.Keyword(null,"reduced-stem","reduced-stem",2063593333));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55945__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
if(cljs.core.truth_(reduced_stem)){
var patt = cljs.core.re_pattern(clojure.string.replace(text,/ь$/,""));
var G__55946 = table;
var G__55946__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__55946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace,patt,reduced_stem)
;
var G__55946__$2 = (cljs.core.truth_(animate)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__55946__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace,patt,reduced_stem):G__55946__$1);
var G__55946__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__55946__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace,patt,reduced_stem)
;
var G__55946__$4 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__55946__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace,patt,reduced_stem)
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__55946__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace,patt,reduced_stem);

} else {
return table;
}
});
slovarish.frontend.nouns.declension.partitives = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, ["\u043A\u0432\u0430\u0441",null,"\u0448\u0451\u043B\u043A",null,"\u043D\u0435\u0441\u043E\u043A",null,"\u0448\u043E\u043A\u043E\u043B\u0430\u0434",null,"\u043D\u0430\u0440\u043E\u0434",null,"\u043C\u0435\u0445",null,"\u0442\u0432\u043E\u0440\u043E\u0433",null,"\u043C\u0435\u043B",null,"\u0441\u044B\u0440",null,"\u0442\u0430\u0431\u0430\u043A",null,"\u0447\u0435\u0441\u043D\u043E\u043A",null,"\u0441\u043D\u0435\u0433",null,"\u043B\u0443\u043A",null,"\u0441\u0443\u043F",null,"\u043A\u043B\u0435\u0439",null,"\u0436\u0438\u0440",null,"\u043C\u0451\u0434",null,"\u0441\u0430\u0445\u0430\u0440",null,"\u0440\u0438\u0441",null], null), null);
/**
 * RussianNounsJS seems to conflate locative and partitive.
 */
slovarish.frontend.nouns.declension.locatives__GT_partitives = (function slovarish$frontend$nouns$declension$locatives__GT_partitives(table,p__55947){
var map__55948 = p__55947;
var map__55948__$1 = cljs.core.__destructure_map(map__55948);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55948__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(cljs.core.truth_((slovarish.frontend.nouns.declension.partitives.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.declension.partitives.cljs$core$IFn$_invoke$arity$1(text) : slovarish.frontend.nouns.declension.partitives.call(null,text)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152).cljs$core$IFn$_invoke$arity$1(table)),new cljs.core.Keyword(null,"locative","locative",-170644907));
} else {
return table;
}
});
/**
 * In addition to the genitive plural, there are some isolated inaccuracies in RussianNounsJS.
 */
slovarish.frontend.nouns.declension.fix_inaccuracies = (function slovarish$frontend$nouns$declension$fix_inaccuracies(table,p__55949){
var map__55950 = p__55949;
var map__55950__$1 = cljs.core.__destructure_map(map__55950);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55950__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043D\u043E\u043B\u044C")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(plural,"\u043D\u0443\u043B\u0438\u0301")))){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043D\u0443\u043B\u044F"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043D\u0443\u043B\u044E"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043D\u0443\u043B\u0451\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043D\u0443\u043B\u0435");
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0449\u0435\u043A\u0430")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"stress","stress",1198669591)], null)),new cljs.core.Keyword(null,"stem","stem",-1293996747))))){
return cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0449\u0451\u043A\u0443");
} else {
var G__55951 = text;
switch (G__55951) {
case "\u0447\u0435\u043B\u043E\u0432\u0435\u043A":
return cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u044E\u0434\u0438");

break;
case "\u043F\u043E\u0434\u043D\u0430\u0451\u043C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u0434\u043D\u0430\u0439\u043C\u0430"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u0434\u043D\u0430\u0439\u043C\u0443"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u0434\u043D\u0430\u0439\u043C\u043E\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u0434\u043D\u0430\u0439\u043C\u0435");

break;
case "\u0434\u043E\u0447\u044C":
return cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0434\u043E\u0447\u0435\u0440\u044C\u043C\u0438");

break;
case "\u0446\u0435\u0440\u043A\u043E\u0432\u044C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0446\u0435\u0440\u043A\u0432\u0430\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0446\u0435\u0440\u043A\u0432\u0430\u043C\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0446\u0435\u0440\u043A\u0432\u0430\u0445");

break;
case "\u043B\u044E\u0431\u043E\u0432\u044C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u044E\u0431\u0432\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u044E\u0431\u0432\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u044E\u0431\u0432\u0438");

break;
case "\u043B\u043E\u0436\u044C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u0436\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u0436\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043B\u0436\u0438");

break;
case "\u043F\u043E\u043B\u043D\u043E\u0447\u044C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u044C\u044E"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0435\u0439"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0430\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0430\u043C\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0430\u0445");

break;
case "\u043F\u043E\u043B\u0434\u0435\u043D\u044C":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u044F"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u044E"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u0435\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u0435"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u0435\u0439"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u044F\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u044F\u043C\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0443\u0434\u043D\u044F\u0445");

break;
case "\u043F\u043E\u043B\u0441\u043E\u0442\u043D\u0438":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0441\u043E\u0442\u043D\u044E"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0441\u043E\u0442\u043D\u0435\u0439");

break;
case "\u043F\u043E\u043B\u0434\u043E\u0440\u043E\u0433\u0438":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u0434\u043E\u0440\u043E\u0433\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259)], null),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"singular","singular",1409933445)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"singular","singular",1409933445));

break;
case "\u043F\u043E\u043B\u043F\u0443\u0442\u0438":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u043F\u043E\u043B\u043F\u0443\u0442\u0438"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259)], null),true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259)], null),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"singular","singular",1409933445)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"singular","singular",1409933445));

break;
case "\u0425\u0430\u043D\u043E\u0439":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0425\u0430\u043D\u043E\u044F"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0425\u0430\u043D\u043E\u044E"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0425\u0430\u043D\u043E\u0435\u043C"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"\u0425\u0430\u043D\u043E\u0435");

break;
default:
return table;

}

}
}
});
/**
 * Changes е -> ё in instrumental singular forms of день, семья, земля, etc.,
 *   as RussianNounsJS does not do this.
 */
slovarish.frontend.nouns.declension.yotify = (function slovarish$frontend$nouns$declension$yotify(table){
var map__55952 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445)], null));
var map__55952__$1 = cljs.core.__destructure_map(map__55952);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55952__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55952__$1,new cljs.core.Keyword(null,"stress","stress",1198669591));
if(cljs.core.truth_((function (){var and__4251__auto__ = text;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stress,new cljs.core.Keyword(null,"ending","ending",1236735934));
if(and__4251__auto____$1){
return cljs.core.re_find(/е(?=[мй]$)/,text);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),clojure.string.replace_first,/е(?=[мй]$)/,"\u0451");
} else {
return table;
}
});
/**
 * Marks plurals with irregular stems (by matching against certain words, endings, or
 *   a threshold of similarity with the singular), as well as individual irregular forms.
 *   Irregular forms are those that are unexpected given the typical declension (1st/2nd/3rd)
 *   of the noun.
 */
slovarish.frontend.nouns.declension.mark_irregular_forms = (function slovarish$frontend$nouns$declension$mark_irregular_forms(table,p__55953){
var map__55954 = p__55953;
var map__55954__$1 = cljs.core.__destructure_map(map__55954);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var indeclinable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55954__$1,new cljs.core.Keyword(null,"indeclinable","indeclinable",1879418998));
var nom_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var gen_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var gen_sing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var polu_word_QMARK_ = (function (){var and__4251__auto__ = cljs.core.not(cljs.core.re_find(/полу/,text));
if(and__4251__auto__){
return cljs.core.re_find(/полу/,gen_sing);
} else {
return and__4251__auto__;
}
})();
var irregular_stem_QMARK_ = (function (){var or__4253__auto__ = (function (){var fexpr__55955 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["\u043F\u043B\u0435\u0447\u043E",null,"\u0443\u0445\u043E",null,"\u0447\u0451\u0440\u0442",null,"\u043E\u043A\u043E",null,"\u0437\u0430\u0440\u044F",null,"\u0441\u043E\u0441\u0435\u0434",null], null), null);
return (fexpr__55955.cljs$core$IFn$_invoke$arity$1 ? fexpr__55955.cljs$core$IFn$_invoke$arity$1(text) : fexpr__55955.call(null,text));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (((!(clojure.string.ends_with_QMARK_(text,"\u044C")))) && ((cljs.core.count(text) > cljs.core.count(nom_plur))));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (((!(clojure.string.ends_with_QMARK_(text,"\u0435\u0441")))) && (clojure.string.ends_with_QMARK_(nom_plur,"\u0435\u0441\u0430")));
if(or__4253__auto____$2){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = cljs.core.re_find(/(?:[ая]не|мена|[ая]та)$/,nom_plur);
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
return ((((cljs.core.not(cljs.core.re_find(/ь[ёе]$/,text))) && (clojure.string.ends_with_QMARK_(nom_plur,"\u044C\u044F")))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043A\u043E\u043B\u0435\u043D\u043E")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nom_plur,"\u043A\u043E\u043B\u0435\u043D\u0438")))) || ((((!(clojure.string.ends_with_QMARK_(text,"\u044C\u0451")))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0441\u043B\u0435\u0437\u0430")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.re_seq(/ё/,gen_sing)),cljs.core.count(cljs.core.re_seq(/ё/,nom_plur)))))))))));
}
}
}
}
})();
var irregular_nom_pl_QMARK_ = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cljs.core.re_find(/[^ь][ая]$/,nom_plur);
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(cljs.core.re_find(/[aя]та$/,nom_plur))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"masculine","masculine",-523682579))));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var fexpr__55956 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043F\u043B\u0435\u0447\u043E",null,"\u0441\u043B\u0435\u0437\u0430",null], null), null);
return (fexpr__55956.cljs$core$IFn$_invoke$arity$1 ? fexpr__55956.cljs$core$IFn$_invoke$arity$1(text) : fexpr__55956.call(null,text));
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return ((clojure.string.ends_with_QMARK_(text,"\u043A\u043E")) && (clojure.string.ends_with_QMARK_(nom_plur,"\u043A\u0438")));
}
}
})();
var expected_gen_plur = (cljs.core.truth_((function (){var or__4253__auto__ = plural_only_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = singular_only_QMARK_;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = indeclinable;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = clojure.string.blank_QMARK_(gen_plur);
if(or__4253__auto____$3){
return or__4253__auto____$3;
} else {
return polu_word_QMARK_;
}
}
}
}
})())?null:slovarish.frontend.nouns.gen_plur.expected_gp(table,irregular_stem_QMARK_));
var irregular_gen_pl_QMARK_ = (function (){var or__4253__auto__ = (function (){var and__4251__auto__ = expected_gen_plur;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(gen_plur,expected_gen_plur);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var fexpr__55957 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043F\u043B\u0435\u0447\u043E",null,"\u0441\u043B\u0435\u0437\u0430",null], null), null);
return (fexpr__55957.cljs$core$IFn$_invoke$arity$1 ? fexpr__55957.cljs$core$IFn$_invoke$arity$1(text) : fexpr__55957.call(null,text));
}
})();
var irregular_nom_sg_QMARK_ = (function (){var or__4253__auto__ = (function (){var fexpr__55958 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0434\u043E\u0447\u044C",null,"\u043C\u0430\u0442\u044C",null,"\u0413\u043E\u0441\u043F\u043E\u0434\u044C",null], null), null);
return (fexpr__55958.cljs$core$IFn$_invoke$arity$1 ? fexpr__55958.cljs$core$IFn$_invoke$arity$1(text) : fexpr__55958.call(null,text));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043D\u043E\u043B\u044C")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nom_plur,"\u043D\u0443\u043B\u0438")));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
return polu_word_QMARK_;
}
}
})();
var _ = console.log(["Expected gen plur: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_gen_plur)].join(''));
var G__55959 = table;
var G__55959__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043F\u0443\u0442\u044C"))?cljs.core.assoc_in(G__55959,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959);
var G__55959__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043F\u0443\u0442\u044C"))?cljs.core.assoc_in(G__55959__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$1);
var G__55959__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u043F\u0443\u0442\u044C"))?cljs.core.assoc_in(G__55959__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$2);
var G__55959__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0446\u0435\u0440\u043A\u043E\u0432\u044C"))?cljs.core.assoc_in(G__55959__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$3);
var G__55959__$5 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0446\u0435\u0440\u043A\u043E\u0432\u044C"))?cljs.core.assoc_in(G__55959__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$4);
var G__55959__$6 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0446\u0435\u0440\u043A\u043E\u0432\u044C"))?cljs.core.assoc_in(G__55959__$5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$5);
var G__55959__$7 = (cljs.core.truth_(irregular_nom_sg_QMARK_)?cljs.core.assoc_in(G__55959__$6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$6);
var G__55959__$8 = (cljs.core.truth_((function (){var and__4251__auto__ = irregular_nom_sg_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445)], null)));
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc_in(G__55959__$7,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$7);
var G__55959__$9 = (cljs.core.truth_(irregular_stem_QMARK_)?cljs.core.assoc_in(G__55959__$8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null),true):G__55959__$8);
var G__55959__$10 = (cljs.core.truth_(irregular_nom_pl_QMARK_)?cljs.core.assoc_in(G__55959__$9,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$9);
var G__55959__$11 = (cljs.core.truth_(irregular_gen_pl_QMARK_)?cljs.core.assoc_in(G__55959__$10,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$10);
var G__55959__$12 = (cljs.core.truth_((function (){var and__4251__auto__ = irregular_nom_pl_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(animate);
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc_in(G__55959__$11,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true):G__55959__$11);
if(cljs.core.truth_((function (){var and__4251__auto__ = irregular_gen_pl_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return animate;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc_in(G__55959__$12,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null),true);
} else {
return G__55959__$12;
}
});
slovarish.frontend.nouns.declension.ends_in_consonant_QMARK_ = (function slovarish$frontend$nouns$declension$ends_in_consonant_QMARK_(word){
return cljs.core.re_find(/[бдфгчклмнпрствхзшщжць]$/,word);
});
slovarish.frontend.nouns.declension.mark_fleeting_vowels = (function slovarish$frontend$nouns$declension$mark_fleeting_vowels(table,p__55961){
var map__55962 = p__55961;
var map__55962__$1 = cljs.core.__destructure_map(map__55962);
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55962__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var nom_sing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var nom_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var gen_sing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var gen_plur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null),"");
var vec__55963 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55960_SHARP_){
return cljs.core.keys(slovarish.frontend.utils.re_pos(/[аеёиоуяюыэ]/,p1__55960_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nom_sing,gen_sing,nom_plur,gen_plur], null));
var ns_vowels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963,(0),null);
var gs_vowels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963,(1),null);
var np_vowels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963,(2),null);
var gp_vowels = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55963,(3),null);
var nsfv = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ns_vowels),cljs.core.count(gs_vowels));
if(and__4251__auto__){
var and__4251__auto____$1 = slovarish.frontend.nouns.declension.ends_in_consonant_QMARK_(nom_sing);
if(cljs.core.truth_(and__4251__auto____$1)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,ns_vowels) < cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,gs_vowels));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var gpfv = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(np_vowels),cljs.core.count(gp_vowels));
if(and__4251__auto__){
var and__4251__auto____$1 = slovarish.frontend.nouns.declension.ends_in_consonant_QMARK_(gen_plur);
if(cljs.core.truth_(and__4251__auto____$1)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,np_vowels) > cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,gp_vowels));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
var G__55966 = table;
var G__55966__$1 = (cljs.core.truth_(nsfv)?cljs.core.assoc_in(G__55966,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330)], null),true):G__55966);
var G__55966__$2 = (cljs.core.truth_((function (){var and__4251__auto__ = nsfv;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(animate);
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc_in(G__55966__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330)], null),true):G__55966__$1);
var G__55966__$3 = (cljs.core.truth_((function (){var fexpr__55967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0440\u043E\u0436\u044C",null,"\u043B\u043E\u0436\u044C",null,"\u043B\u044E\u0431\u043E\u0432\u044C",null], null), null);
return (fexpr__55967.cljs$core$IFn$_invoke$arity$1 ? fexpr__55967.cljs$core$IFn$_invoke$arity$1(nom_sing) : fexpr__55967.call(null,nom_sing));
})())?cljs.core.assoc_in(G__55966__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330)], null),true):G__55966__$2);
var G__55966__$4 = (cljs.core.truth_(gpfv)?cljs.core.assoc_in(G__55966__$3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330)], null),true):G__55966__$3);
if(cljs.core.truth_((function (){var and__4251__auto__ = gpfv;
if(cljs.core.truth_(and__4251__auto__)){
return animate;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc_in(G__55966__$4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330)], null),true);
} else {
return G__55966__$4;
}
});
slovarish.frontend.nouns.declension.null_ending_pl_count = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["\u043E\u043C",null,"\u0431\u0438\u0442",null,"\u0434\u0435\u0446\u0438\u0431\u0435\u043B",null,"\u043C\u0430\u043D\u0430\u0442",null,"\u0433\u0435\u043A\u0442\u0430\u0440",null,"\u043A\u0432\u0430\u043D\u0442",null,"\u0430\u043D\u0433\u0441\u0442\u0440\u0435\u043C",null,"\u043C\u0438\u043A\u0440\u043E\u043D",null,"\u0430\u0440\u0448\u0438\u043D",null,"\u0447\u0435\u043B\u043E\u0432\u0435\u043A",null], null), null);
/**
 * Adds key-value pairs for singular and plural count forms if the target noun has them.
 */
slovarish.frontend.nouns.declension.count_forms = (function slovarish$frontend$nouns$declension$count_forms(text){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pl-count","pl-count",2104515031),(function (){var or__4253__auto__ = (slovarish.frontend.nouns.declension.null_ending_pl_count.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.declension.null_ending_pl_count.cljs$core$IFn$_invoke$arity$1(text) : slovarish.frontend.nouns.declension.null_ending_pl_count.call(null,text));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\u0433\u043E\u0434")){
return "\u043B\u0435\u0442";
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"sg-count","sg-count",1387932914),(function (){var fexpr__55968 = new cljs.core.PersistentArrayMap(null, 4, ["\u0440\u044F\u0434","\u0440\u044F\u0434\u0430\u0301","\u0447\u0430\u0441","\u0447\u0430\u0441\u0430\u0301","\u0448\u0430\u0440","\u0448\u0430\u0440\u0430\u0301","\u0448\u0430\u0433","\u0448\u0430\u0433\u0430\u0301"], null);
return (fexpr__55968.cljs$core$IFn$_invoke$arity$1 ? fexpr__55968.cljs$core$IFn$_invoke$arity$1(text) : fexpr__55968.call(null,text));
})()], null);
});
slovarish.frontend.nouns.declension.declines_like_adjective_QMARK_ = (function slovarish$frontend$nouns$declension$declines_like_adjective_QMARK_(word,gender,table){
var gen = (function (){var or__4253__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"feminine","feminine",-223910280))){
var and__4251__auto__ = cljs.core.re_find(/[ая]я$/,word);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/(?:ой|[иы]х)$/,gen);
} else {
return and__4251__auto__;
}
} else {
var and__4251__auto__ = cljs.core.re_find(/(?:[оиы]й|[иыое]е)$/,word);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/(?:ого|[иы]х)/,gen);
} else {
return and__4251__auto__;
}
}
});
/**
 * Guesses the gender of an input word based on rules and statistical data, to be
 *   used in cases where the target word is not found in the Slovarish dictionary.
 */
slovarish.frontend.nouns.declension.guess_gender = (function slovarish$frontend$nouns$declension$guess_gender(word){
if(clojure.string.ends_with_QMARK_(word,"\u043C\u044F")){
return new cljs.core.Keyword(null,"neuter","neuter",-2013207957);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u0451")){
return new cljs.core.Keyword(null,"neuter","neuter",-2013207957);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u043A\u0430")){
return new cljs.core.Keyword(null,"feminine","feminine",-223910280);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u043A\u043E")){
return new cljs.core.Keyword(null,"neuter","neuter",-2013207957);
} else {
if(cljs.core.truth_(cljs.core.re_find(/[ая]$/,word))){
return new cljs.core.Keyword(null,"feminine","feminine",-223910280);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u044B\u0435")){
return new cljs.core.Keyword(null,"common","common",-1822281391);
} else {
if(cljs.core.truth_(cljs.core.re_find(/[ео]$/,word))){
return new cljs.core.Keyword(null,"neuter","neuter",-2013207957);
} else {
if(cljs.core.truth_(cljs.core.re_find(/(ар|тел)ь$/,word))){
return new cljs.core.Keyword(null,"masculine","masculine",-523682579);
} else {
if(cljs.core.truth_(cljs.core.re_find(/([чшщбвдзст]|ост)ь$/,word))){
return new cljs.core.Keyword(null,"feminine","feminine",-223910280);
} else {
if(clojure.string.ends_with_QMARK_(word,"\u044C")){
return new cljs.core.Keyword(null,"masculine","masculine",-523682579);
} else {
if(cljs.core.truth_(cljs.core.re_find(/[иыу]$/,word))){
return new cljs.core.Keyword(null,"masculine","masculine",-523682579);
} else {
return new cljs.core.Keyword(null,"masculine","masculine",-523682579);

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
/**
 * If all entries are the same rank, leave the order unchanged; Wiktionary usually
 *   lists them by commonness.
 */
slovarish.frontend.nouns.declension.rank_entries = (function slovarish$frontend$nouns$declension$rank_entries(entries){
if((cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rank","rank",-1706728502),entries))) > (1))){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__55969_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__55969_SHARP_,new cljs.core.Keyword(null,"rank","rank",-1706728502),(30000));
}),cljs.core._LT_,entries);
} else {
return entries;
}
});
slovarish.frontend.nouns.declension.declensions = (function slovarish$frontend$nouns$declension$declensions(word){
var temp__5755__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.data.all_nouns),clojure.string.lower_case(word));
if((temp__5755__auto__ == null)){
var gender = slovarish.frontend.nouns.declension.guess_gender(word);
var animate = (!((cljs.core.re_find(/(?:[ая]нин|[оё]нок)$/,word) == null)));
var shell = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),word,new cljs.core.Keyword(null,"gender","gender",-733930727),gender,new cljs.core.Keyword(null,"animate","animate",1850194573),animate], null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"verified?","verified?",863527758),false,new cljs.core.Keyword(null,"gloss","gloss",-1230611425),"",new cljs.core.Keyword(null,"gender","gender",-733930727),gender,new cljs.core.Keyword(null,"animate","animate",1850194573),animate,new cljs.core.Keyword(null,"table","table",-564943036),slovarish.frontend.nouns.declension.mark_fleeting_vowels(slovarish.frontend.nouns.declension.mark_irregular_forms(slovarish.frontend.nouns.declension.plain_declensions(shell),shell),animate)], null)], null);
} else {
var entries = temp__5755__auto__;
return cljs.core.vec((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$declension$declensions_$_iter__55970(s__55971){
return (new cljs.core.LazySeq(null,(function (){
var s__55971__$1 = s__55971;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__55971__$1);
if(temp__5753__auto__){
var s__55971__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55971__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__55971__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__55973 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__55972 = (0);
while(true){
if((i__55972 < size__4651__auto__)){
var map__55974 = cljs.core._nth(c__4650__auto__,i__55972);
var map__55974__$1 = cljs.core.__destructure_map(map__55974);
var shell = map__55974__$1;
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var wordform_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"wordform-scores","wordform-scores",454926526));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stress_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var stem_stress_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"stem-stress-index","stem-stress-index",-1684581199));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var locative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"locative","locative",-170644907));
var partitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"partitive","partitive",1489732184));
var vocative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55974__$1,new cljs.core.Keyword(null,"vocative","vocative",996674712));
var bare_plural = (function (){var G__55975 = plural;
if((G__55975 == null)){
return null;
} else {
return clojure.string.replace(G__55975,/\u0301/,"");
}
})();
var unstressed = slovarish.frontend.nouns.declension.plain_declensions.cljs$core$IFn$_invoke$arity$variadic(shell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bare-plural","bare-plural",1472208170),bare_plural], 0));
var pattern = slovarish.frontend.nouns.stress.generate_pattern(text,bare_plural,stress_pattern,animate);
var special = slovarish.frontend.nouns.declension.special_forms(locative,vocative,partitive,pattern);
var table = slovarish.frontend.nouns.declension.mark_fleeting_vowels(slovarish.frontend.nouns.stress.apply_stress(slovarish.frontend.nouns.declension.mark_irregular_forms(slovarish.frontend.nouns.declension.yotify(slovarish.frontend.nouns.declension.fix_inaccuracies(slovarish.frontend.nouns.declension.reduce_reducible_stems(slovarish.frontend.nouns.declension.overwrite_gen_plur(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unstressed,pattern,special,wordform_scores], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"stressed","stressed",-936375069)], null),stressed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"stressed","stressed",-936375069)], null),plural),shell),shell),shell)),shell),stem_stress_index),shell);
cljs.core.chunk_append(b__55973,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shell,new cljs.core.Keyword(null,"verified?","verified?",863527758),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"table","table",-564943036),table,new cljs.core.Keyword(null,"declines-like-adj?","declines-like-adj?",334554915),slovarish.frontend.nouns.declension.declines_like_adjective_QMARK_(word,gender,table)], 0)),slovarish.frontend.nouns.declension.count_forms(text)], 0)));

var G__56007 = (i__55972 + (1));
i__55972 = G__56007;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55973),slovarish$frontend$nouns$declension$declensions_$_iter__55970(cljs.core.chunk_rest(s__55971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55973),null);
}
} else {
var map__55976 = cljs.core.first(s__55971__$2);
var map__55976__$1 = cljs.core.__destructure_map(map__55976);
var shell = map__55976__$1;
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var wordform_scores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"wordform-scores","wordform-scores",454926526));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stress_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var stem_stress_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"stem-stress-index","stem-stress-index",-1684581199));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var locative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"locative","locative",-170644907));
var partitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"partitive","partitive",1489732184));
var vocative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55976__$1,new cljs.core.Keyword(null,"vocative","vocative",996674712));
var bare_plural = (function (){var G__55977 = plural;
if((G__55977 == null)){
return null;
} else {
return clojure.string.replace(G__55977,/\u0301/,"");
}
})();
var unstressed = slovarish.frontend.nouns.declension.plain_declensions.cljs$core$IFn$_invoke$arity$variadic(shell,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bare-plural","bare-plural",1472208170),bare_plural], 0));
var pattern = slovarish.frontend.nouns.stress.generate_pattern(text,bare_plural,stress_pattern,animate);
var special = slovarish.frontend.nouns.declension.special_forms(locative,vocative,partitive,pattern);
var table = slovarish.frontend.nouns.declension.mark_fleeting_vowels(slovarish.frontend.nouns.stress.apply_stress(slovarish.frontend.nouns.declension.mark_irregular_forms(slovarish.frontend.nouns.declension.yotify(slovarish.frontend.nouns.declension.fix_inaccuracies(slovarish.frontend.nouns.declension.reduce_reducible_stems(slovarish.frontend.nouns.declension.overwrite_gen_plur(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.into),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unstressed,pattern,special,wordform_scores], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445),new cljs.core.Keyword(null,"stressed","stressed",-936375069)], null),stressed),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"stressed","stressed",-936375069)], null),plural),shell),shell),shell)),shell),stem_stress_index),shell);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shell,new cljs.core.Keyword(null,"verified?","verified?",863527758),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"table","table",-564943036),table,new cljs.core.Keyword(null,"declines-like-adj?","declines-like-adj?",334554915),slovarish.frontend.nouns.declension.declines_like_adjective_QMARK_(word,gender,table)], 0)),slovarish.frontend.nouns.declension.count_forms(text)], 0)),slovarish$frontend$nouns$declension$declensions_$_iter__55970(cljs.core.rest(s__55971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(slovarish.frontend.nouns.declension.rank_entries(entries));
})());
}
});

//# sourceMappingURL=slovarish.frontend.nouns.declension.js.map
