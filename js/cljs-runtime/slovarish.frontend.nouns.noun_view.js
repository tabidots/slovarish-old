goog.provide('slovarish.frontend.nouns.noun_view');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.ordering !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.ordering = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"traditional","traditional",772812166));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.naming !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.naming = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"abbr","abbr",2088591884));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.padezhi !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.padezhi = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"traditional","traditional",772812166),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184)], null),new cljs.core.Keyword(null,"learners","learners",-86599832),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184)], null)], null);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.case_name_sets !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.case_name_sets = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"english","english",1087501909),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"adjectival","adjectival",63148419),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"genitive","genitive",1156616057)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"relational",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"rel",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0430\u043A\u043E\u0439?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"nominative",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"nom",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0435\u0441\u0442\u044C",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0442\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"prepositional",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"prep",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0443\u043C\u0430\u044E \u043E",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043E \u043A\u0435\u043C? \u043E \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"instrumental",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"inst",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043E\u0440\u0436\u0443\u0441\u044C",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0435\u043C? \u0447\u0435\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"accusative",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"acc",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0432\u0438\u0436\u0443",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"locative",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"loc",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432/\u043D\u0430",new cljs.core.Keyword(null,"question","question",-1411720117),"\u0433\u0434\u0435? \u043D\u0430 \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"vocative",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"voc",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"partitive",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"part",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043C\u043D\u043E\u0433\u043E \u0447\u0435\u0433\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"dative",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"dat",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0430\u044E",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u043C\u0443? \u0447\u0435\u043C\u0443?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"genitive",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"gen",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0435\u0442",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0435\u0433\u043E?"], null)]),new cljs.core.Keyword(null,"russian","russian",1887936458),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"adjectival","adjectival",63148419),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"genitive","genitive",1156616057)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u043E\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0430\u043A\u043E\u0439?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0438\u043C",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0435\u0441\u0442\u044C",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0442\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u043F\u0440",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0443\u043C\u0430\u044E \u043E",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043E \u043A\u0435\u043C? \u043E \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0442\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043E\u0440\u0436\u0443\u0441\u044C",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0435\u043C? \u0447\u0435\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0432\u0438\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0432\u043D",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0432\u0438\u0436\u0443",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u043C\u0435\u0441\u0442\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u043C\u0441",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432/\u043D\u0430",new cljs.core.Keyword(null,"question","question",-1411720117),"\u0433\u0434\u0435? \u043D\u0430 \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0437\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0437\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\uFE0F",new cljs.core.Keyword(null,"question","question",-1411720117),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"2\u0439 \u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043C\u043D\u043E\u0433\u043E \u0447\u0435\u0433\u043E?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0434\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0430\u044E",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u043C\u0443? \u0447\u0435\u043C\u0443?"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"case-name","case-name",668298969),"\u0440\u043E\u0434\u0438\u0442\u0435\u043D\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"abbr","abbr",2088591884),"\u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0435\u0442",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0435\u0433\u043E?"], null)]),new cljs.core.Keyword(null,"emoji","emoji",1031230144),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"adjectival","adjectival",63148419),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"genitive","genitive",1156616057)],["","\uD83D\uDC49","\uD83E\uDD14","\u263A\uFE0F","\uD83D\uDC40","\uD83D\uDCCD","\uD83D\uDDE3","\u2797","\uD83C\uDF81","\uD83D\uDEAB"])], null);
}
/**
 * Returns true if the given number (singular or plural) of the noun has a different
 *   stress position in at least one grammatical case.
 */
slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_ = (function slovarish$frontend$nouns$noun_view$has_stress_exceptions_QMARK_(table,chislo){
return cljs.core.some((function (p__27892){
var vec__27893 = p__27892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(0),null);
var chisla = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27893,(1),null);
return new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028).cljs$core$IFn$_invoke$arity$1((chislo.cljs$core$IFn$_invoke$arity$1 ? chislo.cljs$core$IFn$_invoke$arity$1(chisla) : chislo.call(null,chisla)));
}),table);
});
slovarish.frontend.nouns.noun_view.starts_with_vowel_QMARK_ = (function slovarish$frontend$nouns$noun_view$starts_with_vowel_QMARK_(word){
return clojure.string.includes_QMARK_("\u0430\u044F\u0443\u044E\u0438\u0435\u044D\u043E\u0451\u044B",cljs.core.first(word));
});
slovarish.frontend.nouns.noun_view.single_cell_table = (function slovarish$frontend$nouns$noun_view$single_cell_table(p__27896){
var map__27897 = p__27896;
var map__27897__$1 = cljs.core.__destructure_map(map__27897);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__27898(s__27899){
return (new cljs.core.LazySeq(null,(function (){
var s__27899__$1 = s__27899;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27899__$1);
if(temp__5753__auto__){
var s__27899__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27899__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27899__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27901 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27900 = (0);
while(true){
if((i__27900 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__27900);
cljs.core.chunk_append(b__27901,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(slovarish.frontend.state.display_language),padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),"verb"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && (slovarish.frontend.nouns.noun_view.starts_with_vowel_QMARK_(cljs.core.deref(slovarish.frontend.state.input)))))?"\u0431":null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),padezh], null))], null)], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),(6),new cljs.core.Keyword(null,"data-score","data-score",1628263942),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?(function (){var or__4253__auto__ = stressed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})():(function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)));

var G__27975 = (i__27900 + (1));
i__27900 = G__27975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27901),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__27898(cljs.core.chunk_rest(s__27899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27901),null);
}
} else {
var padezh = cljs.core.first(s__27899__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(slovarish.frontend.state.display_language),padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),"verb"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && (slovarish.frontend.nouns.noun_view.starts_with_vowel_QMARK_(cljs.core.deref(slovarish.frontend.state.input)))))?"\u0431":null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),padezh], null))], null)], null):null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),(6),new cljs.core.Keyword(null,"data-score","data-score",1628263942),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?(function (){var or__4253__auto__ = stressed;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})():(function (){var or__4253__auto__ = text;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__27898(cljs.core.rest(s__27899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),(function (){var fexpr__27902 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__27902.cljs$core$IFn$_invoke$arity$1 ? fexpr__27902.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__27902.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})()));
})())], null);
});
/**
 * Displays a single entry in the declension table. If there is a fleeting vowel,
 *   this splits the word up and highlights the fleeting vowel.
 */
slovarish.frontend.nouns.noun_view.display_form = (function slovarish$frontend$nouns$noun_view$display_form(p__27903,ending_patt){
var map__27904 = p__27903;
var map__27904__$1 = cljs.core.__destructure_map(map__27904);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
var fleeting_vowel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330));
var base = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
} else {
return and__4251__auto__;
}
})())?stressed:text);
var fv_in_ending = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = (function (){var G__27906 = cljs.core.deref(slovarish.frontend.state.input);
var fexpr__27905 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null], null), null);
return (fexpr__27905.cljs$core$IFn$_invoke$arity$1 ? fexpr__27905.cljs$core$IFn$_invoke$arity$1(G__27906) : fexpr__27905.call(null,G__27906));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.re_find(/ёнок$/,cljs.core.deref(slovarish.frontend.state.input));
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.re_find(/([оё]\u0301?н)(о)(к)$/,base);
} else {
return and__4251__auto__;
}
})();
if(clojure.string.blank_QMARK_(base)){
return base;
} else {
var stem = (cljs.core.truth_(ending_patt)?clojure.string.replace_first(base,ending_patt,""):base);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_((function (){var and__4251__auto__ = fleeting_vowel_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(fv_in_ending);
} else {
return and__4251__auto__;
}
})())?(function (){var vec__27907 = cljs.core.re_find(/(.+)([еоёия]\u0301?)([^аеёиоуяюыэ]ь?ю?)$/,stem);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),fv], null),b], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),stem], null)),(cljs.core.truth_(ending_patt)?(function (){var temp__5755__auto__ = fv_in_ending;
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),cljs.core.re_find(ending_patt,base)], null);
} else {
var vec__27910 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27910,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),fv], null),b], null);
}
})():null)], null);
}
});
/**
 * Generates the rowspan for certain table cells so that they can be merged when
 *   appropriate (prep/loc plur in both orderings, nom/acc/gen in learners' ordering).
 */
slovarish.frontend.nouns.noun_view.rowspan = (function slovarish$frontend$nouns$noun_view$rowspan(padezh,gender,animate,chislo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering)),new cljs.core.Keyword(null,"traditional","traditional",772812166))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chislo,new cljs.core.Keyword(null,"plural","plural",-881591021))){
var G__27913 = padezh;
var G__27913__$1 = (((G__27913 instanceof cljs.core.Keyword))?G__27913.fqn:null);
switch (G__27913__$1) {
case "nominative":
if(cljs.core.truth_(animate)){
return (1);
} else {
return (2);
}

break;
case "accusative":
if(cljs.core.truth_(animate)){
return (2);
} else {
return null;
}

break;
case "genitive":
if(cljs.core.truth_(animate)){
return null;
} else {
return (1);
}

break;
case "locative":
return null;

break;
case "partitive":
return null;

break;
case "vocative":
return null;

break;
default:
return (1);

}
} else {
if(((clojure.string.ends_with_QMARK_(cljs.core.deref(slovarish.frontend.state.input),"\u043C\u044F")) || (((((clojure.string.ends_with_QMARK_(cljs.core.deref(slovarish.frontend.state.input),"\u044C")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"feminine","feminine",-223910280))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.input),"\u043F\u0443\u0442\u044C")))))){
var G__27914 = padezh;
var G__27914__$1 = (((G__27914 instanceof cljs.core.Keyword))?G__27914.fqn:null);
switch (G__27914__$1) {
case "nominative":
return (2);

break;
case "accusative":
return null;

break;
case "genitive":
return (2);

break;
case "dative":
return null;

break;
default:
return (1);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"masculine","masculine",-523682579))){
var G__27915 = padezh;
var G__27915__$1 = (((G__27915 instanceof cljs.core.Keyword))?G__27915.fqn:null);
switch (G__27915__$1) {
case "nominative":
if(cljs.core.truth_(animate)){
return (1);
} else {
return (2);
}

break;
case "accusative":
if(cljs.core.truth_(animate)){
return (2);
} else {
return null;
}

break;
case "genitive":
if(cljs.core.truth_(animate)){
return null;
} else {
return (1);
}

break;
default:
return (1);

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"neuter","neuter",-2013207957))){
var G__27916 = padezh;
var G__27916__$1 = (((G__27916 instanceof cljs.core.Keyword))?G__27916.fqn:null);
switch (G__27916__$1) {
case "nominative":
return (2);

break;
case "accusative":
return null;

break;
default:
return (1);

}
} else {
return (1);

}
}
}
}
}
});
slovarish.frontend.nouns.noun_view.add_classes = (function slovarish$frontend$nouns$noun_view$add_classes(p__27917){
var map__27918 = p__27917;
var map__27918__$1 = cljs.core.__destructure_map(map__27918);
var irregular_form_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690));
var unpredictable_stress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028));
var same_as_base_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(irregular_form_QMARK_)?"irregular-form":null),(cljs.core.truth_(unpredictable_stress_QMARK_)?"unpredictable-stress":null),(cljs.core.truth_(same_as_base_QMARK_)?"same-as-base":null)], null);
});
slovarish.frontend.nouns.noun_view.main_stress_location = (function slovarish$frontend$nouns$noun_view$main_stress_location(stress_pattern,chislo){
var G__27919 = chislo;
var G__27919__$1 = (((G__27919 instanceof cljs.core.Keyword))?G__27919.fqn:null);
switch (G__27919__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__27920 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__27920.cljs$core$IFn$_invoke$arity$1 ? fexpr__27920.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__27920.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
case "plural":
if(cljs.core.truth_((function (){var fexpr__27921 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d*","d*",-1694593043),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__27921.cljs$core$IFn$_invoke$arity$1 ? fexpr__27921.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__27921.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27919__$1)].join('')));

}
});
slovarish.frontend.nouns.noun_view.stress_heading = (function slovarish$frontend$nouns$noun_view$stress_heading(table,stress_pattern,chislo){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__27922 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27922__$1 = (((G__27922 instanceof cljs.core.Keyword))?G__27922.fqn:null);
switch (G__27922__$1) {
case "english":
return "stress on the ";

break;
case "russian":
return "\u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27922__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)))?"small-caps":null)], null),(function (){var G__27923 = slovarish.frontend.nouns.noun_view.main_stress_location(stress_pattern,chislo);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"russian","russian",1887936458))){
var fexpr__27924 = new cljs.core.PersistentArrayMap(null, 2, ["stem","\u043E\u0441\u043D\u043E\u0432\u0443","ending","\u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435"], null);
return (fexpr__27924.cljs$core$IFn$_invoke$arity$1 ? fexpr__27924.cljs$core$IFn$_invoke$arity$1(G__27923) : fexpr__27924.call(null,G__27923));
} else {
return G__27923;
}
})()], null),(cljs.core.truth_(slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_(table,chislo))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__27925 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27925__$1 = (((G__27925 instanceof cljs.core.Keyword))?G__27925.fqn:null);
switch (G__27925__$1) {
case "english":
return " (mostly)";

break;
case "russian":
return " (\u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27925__$1)].join('')));

}
})()], null):null)], null);
});
/**
 * This is the body of the HTML table containing the declensions.
 */
slovarish.frontend.nouns.noun_view.assemble_table = (function slovarish$frontend$nouns$noun_view$assemble_table(p__27926){
var map__27927 = p__27926;
var map__27927__$1 = cljs.core.__destructure_map(map__27927);
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var declines_like_adj_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"declines-like-adj?","declines-like-adj?",334554915));
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var sg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"sg-count","sg-count",1387932914));
var adjectivals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"adjectivals","adjectivals",-804770540));
var pl_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"pl-count","pl-count",2104515031));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27927__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27928(s__27929){
return (new cljs.core.LazySeq(null,(function (){
var s__27929__$1 = s__27929;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27929__$1);
if(temp__5753__auto__){
var s__27929__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27929__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27929__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27931 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27930 = (0);
while(true){
if((i__27930 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__27930);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__27932 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__27932__$1 = cljs.core.__destructure_map(map__27932);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27932__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27932__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
cljs.core.chunk_append(b__27931,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(slovarish.frontend.state.display_language),padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),"verb"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && (slovarish.frontend.nouns.noun_view.starts_with_vowel_QMARK_(cljs.core.deref(slovarish.frontend.state.input)))))?"\u0431":null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),padezh], null))], null)], null):null)], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__27933 = cljs.core.deref(slovarish.frontend.state.input);
var G__27934 = gender;
var G__27935 = animate;
var G__27936 = padezh;
var G__27937 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__27933,G__27934,G__27935,G__27936,G__27937) : ending.call(null,G__27933,G__27934,G__27935,G__27936,G__27937));
})()], null)], null);
}
})()),(cljs.core.truth_((function (){var and__4251__auto__ = plural;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(singular_only_QMARK_);
} else {
return and__4251__auto__;
}
})())?(function (){var temp__5757__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && ((!((new cljs.core.Keyword(null,"locative","locative",-170644907).cljs$core$IFn$_invoke$arity$1(table) == null))))))?(2):slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"plural","plural",-881591021)));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__27938 = cljs.core.deref(slovarish.frontend.state.input);
var G__27939 = gender;
var G__27940 = animate;
var G__27941 = padezh;
var G__27942 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__27938,G__27939,G__27940,G__27941,G__27942) : ending.call(null,G__27938,G__27939,G__27940,G__27941,G__27942));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)));

var G__28002 = (i__27930 + (1));
i__27930 = G__28002;
continue;
} else {
var G__28003 = (i__27930 + (1));
i__27930 = G__28003;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27931),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27928(cljs.core.chunk_rest(s__27929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27931),null);
}
} else {
var padezh = cljs.core.first(s__27929__$2);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__27943 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__27943__$1 = cljs.core.__destructure_map(map__27943);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27943__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(slovarish.frontend.state.display_language),padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),"verb"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && (slovarish.frontend.nouns.noun_view.starts_with_vowel_QMARK_(cljs.core.deref(slovarish.frontend.state.input)))))?"\u0431":null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.emoji","span.emoji",1964684671),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),padezh], null))], null)], null):null)], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__27944 = cljs.core.deref(slovarish.frontend.state.input);
var G__27945 = gender;
var G__27946 = animate;
var G__27947 = padezh;
var G__27948 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__27944,G__27945,G__27946,G__27947,G__27948) : ending.call(null,G__27944,G__27945,G__27946,G__27947,G__27948));
})()], null)], null);
}
})()),(cljs.core.truth_((function (){var and__4251__auto__ = plural;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(singular_only_QMARK_);
} else {
return and__4251__auto__;
}
})())?(function (){var temp__5757__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449))) && ((!((new cljs.core.Keyword(null,"locative","locative",-170644907).cljs$core$IFn$_invoke$arity$1(table) == null))))))?(2):slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"plural","plural",-881591021)));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__27949 = cljs.core.deref(slovarish.frontend.state.input);
var G__27950 = gender;
var G__27951 = animate;
var G__27952 = padezh;
var G__27953 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__27949,G__27950,G__27951,G__27952,G__27953) : ending.call(null,G__27949,G__27950,G__27951,G__27952,G__27953));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27928(cljs.core.rest(s__27929__$2)));
} else {
var G__28007 = cljs.core.rest(s__27929__$2);
s__27929__$1 = G__28007;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__((function (){var G__27954 = (function (){var fexpr__27955 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__27955.cljs$core$IFn$_invoke$arity$1 ? fexpr__27955.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__27955.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})();
if(cljs.core.truth_(plural_only_QMARK_)){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),G__27954);
} else {
return G__27954;
}
})());
})()),(cljs.core.truth_(adjectivals)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.adjectival","tr.adjectival",1732627573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"adjectival","adjectival",63148419),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.wide.light","td.wide.light",1409358502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27956(s__27957){
return (new cljs.core.LazySeq(null,(function (){
var s__27957__$1 = s__27957;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27957__$1);
if(temp__5753__auto__){
var s__27957__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27957__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27957__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27959 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27958 = (0);
while(true){
if((i__27958 < size__4651__auto__)){
var adj = cljs.core._nth(c__4650__auto__,i__27958);
cljs.core.chunk_append(b__27959,(cljs.core.truth_(cljs.core.not_empty((function (){var G__27961 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__27960 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__27960.cljs$core$IFn$_invoke$arity$1 ? fexpr__27960.cljs$core$IFn$_invoke$arity$1(G__27961) : fexpr__27960.call(null,G__27961));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27958,adj,c__4650__auto__,size__4651__auto__,b__27959,s__27957__$2,temp__5753__auto__,map__27927,map__27927__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(i__27958,adj,c__4650__auto__,size__4651__auto__,b__27959,s__27957__$2,temp__5753__auto__,map__27927,map__27927__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))));

var G__28009 = (i__27958 + (1));
i__27958 = G__28009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27959),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27956(cljs.core.chunk_rest(s__27957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27959),null);
}
} else {
var adj = cljs.core.first(s__27957__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty((function (){var G__27963 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__27962 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__27962.cljs$core$IFn$_invoke$arity$1 ? fexpr__27962.cljs$core$IFn$_invoke$arity$1(G__27963) : fexpr__27962.call(null,G__27963));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (adj,s__27957__$2,temp__5753__auto__,map__27927,map__27927__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(adj,s__27957__$2,temp__5753__auto__,map__27927,map__27927__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__27956(cljs.core.rest(s__27957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(adjectivals);
})())], null)], null):null)], null);
});
/**
 * This is the shell of the HTML table containing the declensions. It contains
 *   the header rows and columns.
 */
slovarish.frontend.nouns.noun_view.noun_table = (function slovarish$frontend$nouns$noun_view$noun_table(p__27964){
var map__27965 = p__27964;
var map__27965__$1 = cljs.core.__destructure_map(map__27965);
var result = map__27965__$1;
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var indeclinable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"indeclinable","indeclinable",1879418998));
var verified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"verified?","verified?",863527758));
var stress_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495));
if(cljs.core.truth_(table)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#noun-table","table#noun-table",-162367063),(cljs.core.truth_((function (){var or__4253__auto__ = plural_only_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return singular_only_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"76%"], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"24%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"38%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"38%"], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.number","tr.number",-1950910013),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"ordering",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

cljs.core.reset_BANG_(slovarish.frontend.nouns.noun_view.ordering,e.target.value);

return setTimeout(slovarish.frontend.navigation.color_cells_by_score,(25));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"traditional","traditional",772812166)], null),(function (){var G__27966 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27966__$1 = (((G__27966 instanceof cljs.core.Keyword))?G__27966.fqn:null);
switch (G__27966__$1) {
case "english":
return "trad. order";

break;
case "russian":
return "\u0432 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27966__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"learners","learners",-86599832)], null),(function (){var G__27967 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27967__$1 = (((G__27967 instanceof cljs.core.Keyword))?G__27967.fqn:null);
switch (G__27967__$1) {
case "english":
return "learners\u2019 order";

break;
case "russian":
return "\u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0430\u044E\u0449\u0438\u0445";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27967__$1)].join('')));

}
})()], null)], null)], null),(cljs.core.truth_(plural_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),(function (){var G__27968 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27968__$1 = (((G__27968 instanceof cljs.core.Keyword))?G__27968.fqn:null);
switch (G__27968__$1) {
case "english":
return "singular";

break;
case "russian":
return "\u0435\u0434. \u0447.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27968__$1)].join('')));

}
})()], null)),(cljs.core.truth_(singular_only_QMARK_)?null:(function (){var G__27969 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27969__$1 = (((G__27969 instanceof cljs.core.Keyword))?G__27969.fqn:null);
switch (G__27969__$1) {
case "english":
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.irregular-form","th.column-header.sans.irregular-form",687281997),"plural ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.italic.sans","span.note.italic.sans",-587424658),"(irregular stem)"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),"plural"], null);
}

break;
case "russian":
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.irregular-form.ru","th.column-header.sans.irregular-form.ru",1760467125),"\u043C\u043D. \u0447. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.italic.sans","span.note.italic.sans",-587424658),"(\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430)"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.ru","th.column-header.sans.ru",-2105338478),"\u043C\u043D. \u0447."], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27969__$1)].join('')));

}
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.stress","tr.stress",1549624366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"naming",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.reset_BANG_(slovarish.frontend.nouns.noun_view.naming,e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"abbr","abbr",2088591884)], null),(function (){var G__27970 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27970__$1 = (((G__27970 instanceof cljs.core.Keyword))?G__27970.fqn:null);
switch (G__27970__$1) {
case "english":
return "abbr";

break;
case "russian":
return "\u043F\u043E \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27970__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"case-name","case-name",668298969)], null),(function (){var G__27971 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27971__$1 = (((G__27971 instanceof cljs.core.Keyword))?G__27971.fqn:null);
switch (G__27971__$1) {
case "english":
return "eng";

break;
case "russian":
return "\u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27971__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"verb","verb",-1492655803)], null),(function (){var G__27972 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27972__$1 = (((G__27972 instanceof cljs.core.Keyword))?G__27972.fqn:null);
switch (G__27972__$1) {
case "english":
return "verbs";

break;
case "russian":
return "\u043F\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043B\u043E\u0432\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27972__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"question","question",-1411720117)], null),(function (){var G__27973 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__27973__$1 = (((G__27973 instanceof cljs.core.Keyword))?G__27973.fqn:null);
switch (G__27973__$1) {
case "english":
return "q\u2019s";

break;
case "russian":
return "\u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27973__$1)].join('')));

}
})()], null)], null)], null),(cljs.core.truth_((function (){var or__4253__auto__ = plural_only_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return indeclinable;
}
})())?null:(cljs.core.truth_(verified_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.stress_heading,table,stress_pattern,new cljs.core.Keyword(null,"singular","singular",1409933445)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null)], null))),(cljs.core.truth_((function (){var and__4251__auto__ = verified_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.not(singular_only_QMARK_)) && (cljs.core.not(indeclinable)));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.stress_heading,table,stress_pattern,new cljs.core.Keyword(null,"plural","plural",-881591021)], null):null)], null)], null),(cljs.core.truth_(indeclinable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.single_cell_table,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,(cljs.core.truth_(new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"singular","singular",1409933445)], null)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.assemble_table,result], null))], null);
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.nouns.noun_view.js.map
