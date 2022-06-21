goog.provide('slovarish.frontend.nouns.noun_view');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.ordering !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.ordering = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"traditional","traditional",772812166));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.naming !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.naming = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"english","english",1087501909));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.padezhi !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.padezhi = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"traditional","traditional",772812166),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184)], null),new cljs.core.Keyword(null,"learners","learners",-86599832),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184)], null)], null);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.nouns !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view !== 'undefined') && (typeof slovarish.frontend.nouns.noun_view.case_name_sets !== 'undefined')){
} else {
slovarish.frontend.nouns.noun_view.case_name_sets = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"adjectival","adjectival",63148419),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"genitive","genitive",1156616057)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"relational",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043E\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0430\u043A\u043E\u0439?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"nominative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0438\u043C",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0435\u0441\u0442\u044C \uD83D\uDC49",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0442\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"prepositional",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043F\u0440",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0443\u043C\u0430\u044E \u043E \uD83E\uDD14",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043E \u043A\u0435\u043C? \u043E \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"instrumental",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0442\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043E\u0440\u0436\u0443\u0441\u044C \u263A\uFE0F",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0435\u043C? \u0447\u0435\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"accusative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0432\u0438\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0432\u043D",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0432\u0438\u0436\u0443 \uD83D\uDC40",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"locative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043C\u0435\u0441\u0442\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043C\u0441",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \uD83D\uDCCD",new cljs.core.Keyword(null,"question","question",-1411720117),"\u0433\u0434\u0435? \u043D\u0430 \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"vocative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0437\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0437\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\uD83D\uDDE3\uFE0F",new cljs.core.Keyword(null,"question","question",-1411720117),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"partitive",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"2\u0439 \u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u2797",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043C\u043D\u043E\u0433\u043E \u0447\u0435\u0433\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"dative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0434\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0430\u044E \uD83C\uDF81",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u043C\u0443? \u0447\u0435\u043C\u0443?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"genitive",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0440\u043E\u0434\u0438\u0442\u0435\u043D\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0435\u0442 \uD83D\uDEAB",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0435\u0433\u043E?"], null)]);
}
/**
 * Returns true if the given number (singular or plural) of the noun has a different
 *   stress position in at least one grammatical case.
 */
slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_ = (function slovarish$frontend$nouns$noun_view$has_stress_exceptions_QMARK_(table,chislo){
return cljs.core.some((function (p__26743){
var vec__26744 = p__26743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(0),null);
var chisla = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26744,(1),null);
return new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028).cljs$core$IFn$_invoke$arity$1((chislo.cljs$core$IFn$_invoke$arity$1 ? chislo.cljs$core$IFn$_invoke$arity$1(chisla) : chislo.call(null,chisla)));
}),table);
});
slovarish.frontend.nouns.noun_view.single_cell_table = (function slovarish$frontend$nouns$noun_view$single_cell_table(p__26747){
var map__26748 = p__26747;
var map__26748__$1 = cljs.core.__destructure_map(map__26748);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26748__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__26749(s__26750){
return (new cljs.core.LazySeq(null,(function (){
var s__26750__$1 = s__26750;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26750__$1);
if(temp__5753__auto__){
var s__26750__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26750__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26750__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26752 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26751 = (0);
while(true){
if((i__26751 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__26751);
cljs.core.chunk_append(b__26752,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),(6),new cljs.core.Keyword(null,"data-score","data-score",1628263942),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?(function (){var or__4253__auto__ = stressed;
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

var G__26826 = (i__26751 + (1));
i__26751 = G__26826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26752),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__26749(cljs.core.chunk_rest(s__26750__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26752),null);
}
} else {
var padezh = cljs.core.first(s__26750__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),(6),new cljs.core.Keyword(null,"data-score","data-score",1628263942),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?(function (){var or__4253__auto__ = stressed;
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
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__26749(cljs.core.rest(s__26750__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),(function (){var fexpr__26753 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__26753.cljs$core$IFn$_invoke$arity$1 ? fexpr__26753.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__26753.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})()));
})())], null);
});
/**
 * Displays a single entry in the declension table. If there is a fleeting vowel,
 *   this splits the word up and highlights the fleeting vowel.
 */
slovarish.frontend.nouns.noun_view.display_form = (function slovarish$frontend$nouns$noun_view$display_form(p__26754,ending_patt){
var map__26755 = p__26754;
var map__26755__$1 = cljs.core.__destructure_map(map__26755);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
var fleeting_vowel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26755__$1,new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330));
var base = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
} else {
return and__4251__auto__;
}
})())?stressed:text);
var fv_in_ending = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = (function (){var G__26757 = cljs.core.deref(slovarish.frontend.state.input);
var fexpr__26756 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null], null), null);
return (fexpr__26756.cljs$core$IFn$_invoke$arity$1 ? fexpr__26756.cljs$core$IFn$_invoke$arity$1(G__26757) : fexpr__26756.call(null,G__26757));
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
})())?(function (){var vec__26758 = cljs.core.re_find(/(.+)([еоёия]\u0301?)([^аеёиоуяюыэ]ь?ю?)$/,stem);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),fv], null),b], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),stem], null)),(cljs.core.truth_(ending_patt)?(function (){var temp__5755__auto__ = fv_in_ending;
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),cljs.core.re_find(ending_patt,base)], null);
} else {
var vec__26761 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(3),null);
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
var G__26764 = padezh;
var G__26764__$1 = (((G__26764 instanceof cljs.core.Keyword))?G__26764.fqn:null);
switch (G__26764__$1) {
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
var G__26765 = padezh;
var G__26765__$1 = (((G__26765 instanceof cljs.core.Keyword))?G__26765.fqn:null);
switch (G__26765__$1) {
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
var G__26766 = padezh;
var G__26766__$1 = (((G__26766 instanceof cljs.core.Keyword))?G__26766.fqn:null);
switch (G__26766__$1) {
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
var G__26767 = padezh;
var G__26767__$1 = (((G__26767 instanceof cljs.core.Keyword))?G__26767.fqn:null);
switch (G__26767__$1) {
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
slovarish.frontend.nouns.noun_view.add_classes = (function slovarish$frontend$nouns$noun_view$add_classes(p__26768){
var map__26769 = p__26768;
var map__26769__$1 = cljs.core.__destructure_map(map__26769);
var irregular_form_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26769__$1,new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690));
var unpredictable_stress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26769__$1,new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028));
var same_as_base_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26769__$1,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(irregular_form_QMARK_)?"irregular-form":null),(cljs.core.truth_(unpredictable_stress_QMARK_)?"unpredictable-stress":null),(cljs.core.truth_(same_as_base_QMARK_)?"same-as-base":null)], null);
});
slovarish.frontend.nouns.noun_view.main_stress_location = (function slovarish$frontend$nouns$noun_view$main_stress_location(stress_pattern,chislo){
var G__26770 = chislo;
var G__26770__$1 = (((G__26770 instanceof cljs.core.Keyword))?G__26770.fqn:null);
switch (G__26770__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__26771 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__26771.cljs$core$IFn$_invoke$arity$1 ? fexpr__26771.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__26771.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
case "plural":
if(cljs.core.truth_((function (){var fexpr__26772 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d*","d*",-1694593043),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__26772.cljs$core$IFn$_invoke$arity$1 ? fexpr__26772.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__26772.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26770__$1)].join('')));

}
});
slovarish.frontend.nouns.noun_view.stress_heading = (function slovarish$frontend$nouns$noun_view$stress_heading(table,stress_pattern,chislo){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__26773 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26773__$1 = (((G__26773 instanceof cljs.core.Keyword))?G__26773.fqn:null);
switch (G__26773__$1) {
case "english":
return "stress on the ";

break;
case "russian":
return "\u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26773__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)))?"small-caps":null)], null),(function (){var G__26774 = slovarish.frontend.nouns.noun_view.main_stress_location(stress_pattern,chislo);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"russian","russian",1887936458))){
var fexpr__26775 = new cljs.core.PersistentArrayMap(null, 2, ["stem","\u043E\u0441\u043D\u043E\u0432\u0443","ending","\u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435"], null);
return (fexpr__26775.cljs$core$IFn$_invoke$arity$1 ? fexpr__26775.cljs$core$IFn$_invoke$arity$1(G__26774) : fexpr__26775.call(null,G__26774));
} else {
return G__26774;
}
})()], null),(cljs.core.truth_(slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_(table,chislo))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__26776 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26776__$1 = (((G__26776 instanceof cljs.core.Keyword))?G__26776.fqn:null);
switch (G__26776__$1) {
case "english":
return " (mostly)";

break;
case "russian":
return " (\u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26776__$1)].join('')));

}
})()], null):null)], null);
});
/**
 * This is the body of the HTML table containing the declensions.
 */
slovarish.frontend.nouns.noun_view.assemble_table = (function slovarish$frontend$nouns$noun_view$assemble_table(p__26777){
var map__26778 = p__26777;
var map__26778__$1 = cljs.core.__destructure_map(map__26778);
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var declines_like_adj_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"declines-like-adj?","declines-like-adj?",334554915));
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var sg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"sg-count","sg-count",1387932914));
var adjectivals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"adjectivals","adjectivals",-804770540));
var pl_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"pl-count","pl-count",2104515031));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26778__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26779(s__26780){
return (new cljs.core.LazySeq(null,(function (){
var s__26780__$1 = s__26780;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26780__$1);
if(temp__5753__auto__){
var s__26780__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26780__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26780__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26782 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26781 = (0);
while(true){
if((i__26781 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__26781);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__26783 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__26783__$1 = cljs.core.__destructure_map(map__26783);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26783__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
cljs.core.chunk_append(b__26782,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__26784 = cljs.core.deref(slovarish.frontend.state.input);
var G__26785 = gender;
var G__26786 = animate;
var G__26787 = padezh;
var G__26788 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__26784,G__26785,G__26786,G__26787,G__26788) : ending.call(null,G__26784,G__26785,G__26786,G__26787,G__26788));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__26789 = cljs.core.deref(slovarish.frontend.state.input);
var G__26790 = gender;
var G__26791 = animate;
var G__26792 = padezh;
var G__26793 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__26789,G__26790,G__26791,G__26792,G__26793) : ending.call(null,G__26789,G__26790,G__26791,G__26792,G__26793));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)));

var G__26851 = (i__26781 + (1));
i__26781 = G__26851;
continue;
} else {
var G__26852 = (i__26781 + (1));
i__26781 = G__26852;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26782),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26779(cljs.core.chunk_rest(s__26780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26782),null);
}
} else {
var padezh = cljs.core.first(s__26780__$2);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__26794 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__26794__$1 = cljs.core.__destructure_map(map__26794);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26794__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26794__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__26795 = cljs.core.deref(slovarish.frontend.state.input);
var G__26796 = gender;
var G__26797 = animate;
var G__26798 = padezh;
var G__26799 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__26795,G__26796,G__26797,G__26798,G__26799) : ending.call(null,G__26795,G__26796,G__26797,G__26798,G__26799));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__26800 = cljs.core.deref(slovarish.frontend.state.input);
var G__26801 = gender;
var G__26802 = animate;
var G__26803 = padezh;
var G__26804 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__26800,G__26801,G__26802,G__26803,G__26804) : ending.call(null,G__26800,G__26801,G__26802,G__26803,G__26804));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26779(cljs.core.rest(s__26780__$2)));
} else {
var G__26856 = cljs.core.rest(s__26780__$2);
s__26780__$1 = G__26856;
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
return iter__4652__auto__((function (){var G__26805 = (function (){var fexpr__26806 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__26806.cljs$core$IFn$_invoke$arity$1 ? fexpr__26806.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__26806.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})();
if(cljs.core.truth_(plural_only_QMARK_)){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),G__26805);
} else {
return G__26805;
}
})());
})()),(cljs.core.truth_(adjectivals)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.adjectival","tr.adjectival",1732627573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adjectival","adjectival",63148419),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.wide.light","td.wide.light",1409358502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26807(s__26808){
return (new cljs.core.LazySeq(null,(function (){
var s__26808__$1 = s__26808;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26808__$1);
if(temp__5753__auto__){
var s__26808__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26808__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26808__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26810 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26809 = (0);
while(true){
if((i__26809 < size__4651__auto__)){
var adj = cljs.core._nth(c__4650__auto__,i__26809);
cljs.core.chunk_append(b__26810,(cljs.core.truth_(cljs.core.not_empty((function (){var G__26812 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__26811 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__26811.cljs$core$IFn$_invoke$arity$1 ? fexpr__26811.cljs$core$IFn$_invoke$arity$1(G__26812) : fexpr__26811.call(null,G__26812));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26809,adj,c__4650__auto__,size__4651__auto__,b__26810,s__26808__$2,temp__5753__auto__,map__26778,map__26778__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(i__26809,adj,c__4650__auto__,size__4651__auto__,b__26810,s__26808__$2,temp__5753__auto__,map__26778,map__26778__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))));

var G__26860 = (i__26809 + (1));
i__26809 = G__26860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26810),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26807(cljs.core.chunk_rest(s__26808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26810),null);
}
} else {
var adj = cljs.core.first(s__26808__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty((function (){var G__26814 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__26813 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__26813.cljs$core$IFn$_invoke$arity$1 ? fexpr__26813.cljs$core$IFn$_invoke$arity$1(G__26814) : fexpr__26813.call(null,G__26814));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (adj,s__26808__$2,temp__5753__auto__,map__26778,map__26778__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(adj,s__26808__$2,temp__5753__auto__,map__26778,map__26778__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__26807(cljs.core.rest(s__26808__$2)));
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
slovarish.frontend.nouns.noun_view.noun_table = (function slovarish$frontend$nouns$noun_view$noun_table(p__26815){
var map__26816 = p__26815;
var map__26816__$1 = cljs.core.__destructure_map(map__26816);
var result = map__26816__$1;
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var indeclinable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"indeclinable","indeclinable",1879418998));
var verified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"verified?","verified?",863527758));
var stress_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26816__$1,new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"traditional","traditional",772812166)], null),(function (){var G__26817 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26817__$1 = (((G__26817 instanceof cljs.core.Keyword))?G__26817.fqn:null);
switch (G__26817__$1) {
case "english":
return "trad. order";

break;
case "russian":
return "\u0432 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26817__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"learners","learners",-86599832)], null),(function (){var G__26818 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26818__$1 = (((G__26818 instanceof cljs.core.Keyword))?G__26818.fqn:null);
switch (G__26818__$1) {
case "english":
return "learners\u2019 order";

break;
case "russian":
return "\u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0430\u044E\u0449\u0438\u0445";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26818__$1)].join('')));

}
})()], null)], null)], null),(cljs.core.truth_(plural_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),(function (){var G__26819 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26819__$1 = (((G__26819 instanceof cljs.core.Keyword))?G__26819.fqn:null);
switch (G__26819__$1) {
case "english":
return "singular";

break;
case "russian":
return "\u0435\u0434. \u0447.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26819__$1)].join('')));

}
})()], null)),(cljs.core.truth_(singular_only_QMARK_)?null:(function (){var G__26820 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26820__$1 = (((G__26820 instanceof cljs.core.Keyword))?G__26820.fqn:null);
switch (G__26820__$1) {
case "english":
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.irregular-form","th.column-header.sans.irregular-form",687281997),"plural ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.italic.sans","span.note.italic.sans",-587424658),"(irregular stem)"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),"plural"], null);
}

break;
case "russian":
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-stem?","irregular-stem?",2014776072)], null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.irregular-form.ru","th.column-header.sans.irregular-form.ru",1760467125),"\u043C\u043D. \u0447. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.note.italic.sans","span.note.italic.sans",-587424658),"(\u043D\u0435\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430)"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans.ru","th.column-header.sans.ru",-2105338478),"\u043C\u043D. \u0447."], null);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26820__$1)].join('')));

}
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.stress","tr.stress",1549624366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"naming",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.reset_BANG_(slovarish.frontend.nouns.noun_view.naming,e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"english","english",1087501909)], null),(function (){var G__26821 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26821__$1 = (((G__26821 instanceof cljs.core.Keyword))?G__26821.fqn:null);
switch (G__26821__$1) {
case "english":
return "eng";

break;
case "russian":
return "\u043F\u043E \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u0441\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26821__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"russian","russian",1887936458)], null),(function (){var G__26822 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26822__$1 = (((G__26822 instanceof cljs.core.Keyword))?G__26822.fqn:null);
switch (G__26822__$1) {
case "english":
return "rus";

break;
case "russian":
return "\u043F\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26822__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873)], null),(function (){var G__26823 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26823__$1 = (((G__26823 instanceof cljs.core.Keyword))?G__26823.fqn:null);
switch (G__26823__$1) {
case "english":
return "abbr";

break;
case "russian":
return "\u043F\u043E \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26823__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"verb","verb",-1492655803)], null),(function (){var G__26824 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26824__$1 = (((G__26824 instanceof cljs.core.Keyword))?G__26824.fqn:null);
switch (G__26824__$1) {
case "english":
return "verbs";

break;
case "russian":
return "\u043F\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043B\u043E\u0432\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26824__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"question","question",-1411720117)], null),(function (){var G__26825 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__26825__$1 = (((G__26825 instanceof cljs.core.Keyword))?G__26825.fqn:null);
switch (G__26825__$1) {
case "english":
return "q\u2019s";

break;
case "russian":
return "\u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26825__$1)].join('')));

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
