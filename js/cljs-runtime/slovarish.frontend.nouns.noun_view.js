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
slovarish.frontend.nouns.noun_view.case_name_sets = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"adjectival","adjectival",63148419),new cljs.core.Keyword(null,"nominative","nominative",148321668),new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"locative","locative",-170644907),new cljs.core.Keyword(null,"vocative","vocative",996674712),new cljs.core.Keyword(null,"partitive","partitive",1489732184),new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"genitive","genitive",1156616057)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"relational",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043E\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0430\u043A\u043E\u0439?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"nominative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0438\u043C\u0435\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0438\u043C",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0435\u0441\u0442\u044C \uD83D\uDC49",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0442\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"prepositional",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043F\u0440",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0443\u043C\u0430\u044E \u043E \uD83E\uDD14",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043E \u043A\u0435\u043C? \u043E \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"instrumental",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0442\u0432\u043E\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0442\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0433\u043E\u0440\u0436\u0443\u0441\u044C \u263A\uFE0F",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u0435\u043C? \u0447\u0435\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"accusative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0432\u0438\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0432\u043D",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0432\u0438\u0436\u0443 \uD83D\uDC40",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0442\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"locative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u043C\u0435\u0441\u0442\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u043C\u0441",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \uD83D\uDCCD",new cljs.core.Keyword(null,"question","question",-1411720117),"\u0433\u0434\u0435? \u043D\u0430 \u0447\u0451\u043C?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"vocative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0437\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0437\u0432",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\uD83D\uDDE3\uFE0F",new cljs.core.Keyword(null,"question","question",-1411720117),""], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"partitive",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0447\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"2\u0439 \u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u2797",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043C\u043D\u043E\u0433\u043E \u0447\u0435\u0433\u043E?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"dative",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0434\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0434\u0442",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u0434\u0430\u044E \uD83C\uDF81",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u043C\u0443? \u0447\u0435\u043C\u0443?"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"english","english",1087501909),"genitive",new cljs.core.Keyword(null,"russian","russian",1887936458),"\u0440\u043E\u0434\u0438\u0442\u0435\u043D\u043B\u044C\u043D\u044B\u0439",new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873),"\u0440\u0434",new cljs.core.Keyword(null,"verb","verb",-1492655803),"\u043D\u0435\u0442 \uD83D\uDEAB",new cljs.core.Keyword(null,"question","question",-1411720117),"\u043A\u043E\u0433\u043E? \u0447\u0435\u0433\u043E?"], null)]);
}
/**
 * Returns true if the given number (singular or plural) of the noun has a different
 *   stress position in at least one grammatical case.
 */
slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_ = (function slovarish$frontend$nouns$noun_view$has_stress_exceptions_QMARK_(table,chislo){
return cljs.core.some((function (p__28179){
var vec__28180 = p__28179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28180,(0),null);
var chisla = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28180,(1),null);
return new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028).cljs$core$IFn$_invoke$arity$1((chislo.cljs$core$IFn$_invoke$arity$1 ? chislo.cljs$core$IFn$_invoke$arity$1(chisla) : chislo.call(null,chisla)));
}),table);
});
slovarish.frontend.nouns.noun_view.single_cell_table = (function slovarish$frontend$nouns$noun_view$single_cell_table(p__28183){
var map__28184 = p__28183;
var map__28184__$1 = cljs.core.__destructure_map(map__28184);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28184__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28184__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__28185(s__28186){
return (new cljs.core.LazySeq(null,(function (){
var s__28186__$1 = s__28186;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28186__$1);
if(temp__5753__auto__){
var s__28186__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28186__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28186__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28188 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28187 = (0);
while(true){
if((i__28187 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__28187);
cljs.core.chunk_append(b__28188,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),(6),new cljs.core.Keyword(null,"data-score","data-score",1628263942),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_))?(function (){var or__4253__auto__ = stressed;
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

var G__28262 = (i__28187 + (1));
i__28187 = G__28262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28188),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__28185(cljs.core.chunk_rest(s__28186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28188),null);
}
} else {
var padezh = cljs.core.first(s__28186__$2);
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
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$single_cell_table_$_iter__28185(cljs.core.rest(s__28186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),(function (){var fexpr__28189 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__28189.cljs$core$IFn$_invoke$arity$1 ? fexpr__28189.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__28189.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})()));
})())], null);
});
/**
 * Displays a single entry in the declension table. If there is a fleeting vowel,
 *   this splits the word up and highlights the fleeting vowel.
 */
slovarish.frontend.nouns.noun_view.display_form = (function slovarish$frontend$nouns$noun_view$display_form(p__28190,ending_patt){
var map__28191 = p__28190;
var map__28191__$1 = cljs.core.__destructure_map(map__28191);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28191__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var stressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28191__$1,new cljs.core.Keyword(null,"stressed","stressed",-936375069));
var fleeting_vowel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28191__$1,new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330));
var base = (cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_);
if(cljs.core.truth_(and__4251__auto__)){
return new cljs.core.Keyword(null,"verified?","verified?",863527758).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
} else {
return and__4251__auto__;
}
})())?stressed:text);
var fv_in_ending = (function (){var and__4251__auto__ = (function (){var or__4253__auto__ = (function (){var G__28193 = cljs.core.deref(slovarish.frontend.state.input);
var fexpr__28192 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null], null), null);
return (fexpr__28192.cljs$core$IFn$_invoke$arity$1 ? fexpr__28192.cljs$core$IFn$_invoke$arity$1(G__28193) : fexpr__28192.call(null,G__28193));
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
})())?(function (){var vec__28194 = cljs.core.re_find(/(.+)([еёои]\u0301?)([^аеёиоуяюыэ]ь?ю?)$/,stem);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28194,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fleeting-vowel","span.fleeting-vowel",1494768284),fv], null),b], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.stem","span.stem",-899646523),stem], null)),(cljs.core.truth_(ending_patt)?(function (){var temp__5755__auto__ = fv_in_ending;
if((temp__5755__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.ending","span.ending",1562206745),cljs.core.re_find(ending_patt,base)], null);
} else {
var vec__28197 = temp__5755__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(1),null);
var fv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28197,(3),null);
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
var G__28200 = padezh;
var G__28200__$1 = (((G__28200 instanceof cljs.core.Keyword))?G__28200.fqn:null);
switch (G__28200__$1) {
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
var G__28201 = padezh;
var G__28201__$1 = (((G__28201 instanceof cljs.core.Keyword))?G__28201.fqn:null);
switch (G__28201__$1) {
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
var G__28202 = padezh;
var G__28202__$1 = (((G__28202 instanceof cljs.core.Keyword))?G__28202.fqn:null);
switch (G__28202__$1) {
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
var G__28203 = padezh;
var G__28203__$1 = (((G__28203 instanceof cljs.core.Keyword))?G__28203.fqn:null);
switch (G__28203__$1) {
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
slovarish.frontend.nouns.noun_view.add_classes = (function slovarish$frontend$nouns$noun_view$add_classes(p__28204){
var map__28205 = p__28204;
var map__28205__$1 = cljs.core.__destructure_map(map__28205);
var irregular_form_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28205__$1,new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690));
var unpredictable_stress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28205__$1,new cljs.core.Keyword(null,"unpredictable-stress?","unpredictable-stress?",8527028));
var same_as_base_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28205__$1,new cljs.core.Keyword(null,"same-as-base?","same-as-base?",-1058135259));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(irregular_form_QMARK_)?"irregular-form":null),(cljs.core.truth_(unpredictable_stress_QMARK_)?"unpredictable-stress":null),(cljs.core.truth_(same_as_base_QMARK_)?"same-as-base":null)], null);
});
slovarish.frontend.nouns.noun_view.main_stress_location = (function slovarish$frontend$nouns$noun_view$main_stress_location(stress_pattern,chislo){
var G__28206 = chislo;
var G__28206__$1 = (((G__28206 instanceof cljs.core.Keyword))?G__28206.fqn:null);
switch (G__28206__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__28207 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__28207.cljs$core$IFn$_invoke$arity$1 ? fexpr__28207.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__28207.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
case "plural":
if(cljs.core.truth_((function (){var fexpr__28208 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d*","d*",-1694593043),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null);
return (fexpr__28208.cljs$core$IFn$_invoke$arity$1 ? fexpr__28208.cljs$core$IFn$_invoke$arity$1(stress_pattern) : fexpr__28208.call(null,stress_pattern));
})())){
return "stem";
} else {
return "ending";
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28206__$1)].join('')));

}
});
slovarish.frontend.nouns.noun_view.stress_heading = (function slovarish$frontend$nouns$noun_view$stress_heading(table,stress_pattern,chislo){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__28209 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28209__$1 = (((G__28209 instanceof cljs.core.Keyword))?G__28209.fqn:null);
switch (G__28209__$1) {
case "english":
return "stress on the ";

break;
case "russian":
return "\u0443\u0434\u0430\u0440\u0435\u043D\u0438\u0435 \u043D\u0430 ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28209__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"english","english",1087501909)))?"small-caps":null)], null),(function (){var G__28210 = slovarish.frontend.nouns.noun_view.main_stress_location(stress_pattern,chislo);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.display_language),new cljs.core.Keyword(null,"russian","russian",1887936458))){
var fexpr__28211 = new cljs.core.PersistentArrayMap(null, 2, ["stem","\u043E\u0441\u043D\u043E\u0432\u0443","ending","\u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435"], null);
return (fexpr__28211.cljs$core$IFn$_invoke$arity$1 ? fexpr__28211.cljs$core$IFn$_invoke$arity$1(G__28210) : fexpr__28211.call(null,G__28210));
} else {
return G__28210;
}
})()], null),(cljs.core.truth_(slovarish.frontend.nouns.noun_view.has_stress_exceptions_QMARK_(table,chislo))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.note","span.italic.note",1871095314),(function (){var G__28212 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28212__$1 = (((G__28212 instanceof cljs.core.Keyword))?G__28212.fqn:null);
switch (G__28212__$1) {
case "english":
return " (mostly)";

break;
case "russian":
return " (\u0432 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0435)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28212__$1)].join('')));

}
})()], null):null)], null);
});
/**
 * This is the body of the HTML table containing the declensions.
 */
slovarish.frontend.nouns.noun_view.assemble_table = (function slovarish$frontend$nouns$noun_view$assemble_table(p__28213){
var map__28214 = p__28213;
var map__28214__$1 = cljs.core.__destructure_map(map__28214);
var gender = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"gender","gender",-733930727));
var declines_like_adj_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"declines-like-adj?","declines-like-adj?",334554915));
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var animate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"animate","animate",1850194573));
var sg_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"sg-count","sg-count",1387932914));
var adjectivals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"adjectivals","adjectivals",-804770540));
var pl_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"pl-count","pl-count",2104515031));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28214__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28215(s__28216){
return (new cljs.core.LazySeq(null,(function (){
var s__28216__$1 = s__28216;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28216__$1);
if(temp__5753__auto__){
var s__28216__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28216__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28216__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28218 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28217 = (0);
while(true){
if((i__28217 < size__4651__auto__)){
var padezh = cljs.core._nth(c__4650__auto__,i__28217);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__28219 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__28219__$1 = cljs.core.__destructure_map(map__28219);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28219__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28219__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
cljs.core.chunk_append(b__28218,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__28220 = cljs.core.deref(slovarish.frontend.state.input);
var G__28221 = gender;
var G__28222 = animate;
var G__28223 = padezh;
var G__28224 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__28220,G__28221,G__28222,G__28223,G__28224) : ending.call(null,G__28220,G__28221,G__28222,G__28223,G__28224));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__28225 = cljs.core.deref(slovarish.frontend.state.input);
var G__28226 = gender;
var G__28227 = animate;
var G__28228 = padezh;
var G__28229 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__28225,G__28226,G__28227,G__28228,G__28229) : ending.call(null,G__28225,G__28226,G__28227,G__28228,G__28229));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)));

var G__28270 = (i__28217 + (1));
i__28217 = G__28270;
continue;
} else {
var G__28271 = (i__28217 + (1));
i__28217 = G__28271;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28218),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28215(cljs.core.chunk_rest(s__28216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28218),null);
}
} else {
var padezh = cljs.core.first(s__28216__$2);
if(cljs.core.truth_((padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table)))){
var map__28230 = (padezh.cljs$core$IFn$_invoke$arity$1 ? padezh.cljs$core$IFn$_invoke$arity$1(table) : padezh.call(null,table));
var map__28230__$1 = cljs.core.__destructure_map(map__28230);
var singular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28230__$1,new cljs.core.Keyword(null,"singular","singular",1409933445));
var plural = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28230__$1,new cljs.core.Keyword(null,"plural","plural",-881591021));
var ending = (cljs.core.truth_(declines_like_adj_QMARK_)?slovarish.frontend.nouns.endings.adj_ending:slovarish.frontend.nouns.endings.noun_ending);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),(cljs.core.truth_(plural_only_QMARK_)?null:(function (){var temp__5757__auto__ = slovarish.frontend.nouns.noun_view.rowspan(padezh,gender,animate,new cljs.core.Keyword(null,"singular","singular",1409933445));
if((temp__5757__auto__ == null)){
return null;
} else {
var rs = temp__5757__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(singular),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(singular)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,singular,(function (){var G__28231 = cljs.core.deref(slovarish.frontend.state.input);
var G__28232 = gender;
var G__28233 = animate;
var G__28234 = padezh;
var G__28235 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__28231,G__28232,G__28233,G__28234,G__28235) : ending.call(null,G__28231,G__28232,G__28233,G__28234,G__28235));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.word-form","td.word-form",-2126605889),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),rs,new cljs.core.Keyword(null,"data-score","data-score",1628263942),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(plural),new cljs.core.Keyword(null,"class","class",-2030961996),slovarish.frontend.nouns.noun_view.add_classes(plural)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.nouns.noun_view.display_form,plural,(function (){var G__28236 = cljs.core.deref(slovarish.frontend.state.input);
var G__28237 = gender;
var G__28238 = animate;
var G__28239 = padezh;
var G__28240 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (ending.cljs$core$IFn$_invoke$arity$5 ? ending.cljs$core$IFn$_invoke$arity$5(G__28236,G__28237,G__28238,G__28239,G__28240) : ending.call(null,G__28236,G__28237,G__28238,G__28239,G__28240));
})()], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"nominative","nominative",148321668))) || (((cljs.core.not(animate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(padezh,new cljs.core.Keyword(null,"accusative","accusative",-886115147)))))))?(cljs.core.truth_(sg_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270C\uFE0F\uD83E\uDD1F\uD83D\uDD96 ",sg_count], null):(cljs.core.truth_(pl_count)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.count-form","span.count-form",1454942314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Count form after numbers NOT ending in \u0434\u0432\u0430, \u0442\u0440\u0438, \u0447\u0435\u0442\u044B\u0440\u0435"], null),"\u270B\uD83D\uDE4C ",pl_count], null):null
)):null)], null);
}
})():null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),padezh], null)),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28215(cljs.core.rest(s__28216__$2)));
} else {
var G__28272 = cljs.core.rest(s__28216__$2);
s__28216__$1 = G__28272;
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
return iter__4652__auto__((function (){var G__28241 = (function (){var fexpr__28242 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.ordering));
return (fexpr__28242.cljs$core$IFn$_invoke$arity$1 ? fexpr__28242.cljs$core$IFn$_invoke$arity$1(slovarish.frontend.nouns.noun_view.padezhi) : fexpr__28242.call(null,slovarish.frontend.nouns.noun_view.padezhi));
})();
if(cljs.core.truth_(plural_only_QMARK_)){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),G__28241);
} else {
return G__28241;
}
})());
})()),(cljs.core.truth_(adjectivals)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.adjectival","tr.adjectival",1732627573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.row-header.sans.italic","th.row-header.sans.italic",-258857296),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.nouns.noun_view.case_name_sets,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adjectival","adjectival",63148419),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(slovarish.frontend.nouns.noun_view.naming))], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.wide.light","td.wide.light",1409358502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(2)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28243(s__28244){
return (new cljs.core.LazySeq(null,(function (){
var s__28244__$1 = s__28244;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28244__$1);
if(temp__5753__auto__){
var s__28244__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28244__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__28244__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__28246 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__28245 = (0);
while(true){
if((i__28245 < size__4651__auto__)){
var adj = cljs.core._nth(c__4650__auto__,i__28245);
cljs.core.chunk_append(b__28246,(cljs.core.truth_(cljs.core.not_empty((function (){var G__28248 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__28247 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__28247.cljs$core$IFn$_invoke$arity$1 ? fexpr__28247.cljs$core$IFn$_invoke$arity$1(G__28248) : fexpr__28247.call(null,G__28248));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28245,adj,c__4650__auto__,size__4651__auto__,b__28246,s__28244__$2,temp__5753__auto__,map__28214,map__28214__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(i__28245,adj,c__4650__auto__,size__4651__auto__,b__28246,s__28244__$2,temp__5753__auto__,map__28214,map__28214__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))));

var G__28273 = (i__28245 + (1));
i__28245 = G__28273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28246),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28243(cljs.core.chunk_rest(s__28244__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28246),null);
}
} else {
var adj = cljs.core.first(s__28244__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty((function (){var G__28250 = slovarish.frontend.display_inflections.destress(adj);
var fexpr__28249 = cljs.core.deref(slovarish.frontend.data.all_adjectives);
return (fexpr__28249.cljs$core$IFn$_invoke$arity$1 ? fexpr__28249.cljs$core$IFn$_invoke$arity$1(G__28250) : fexpr__28249.call(null,G__28250));
})()))?cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (adj,s__28244__$2,temp__5753__auto__,map__28214,map__28214__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_){
return (function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(adj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
});})(adj,s__28244__$2,temp__5753__auto__,map__28214,map__28214__$1,gender,declines_like_adj_QMARK_,table,plural_only_QMARK_,animate,sg_count,adjectivals,pl_count,singular_only_QMARK_))
], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.word-button","span.word-button",1723860172),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([adj], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),adj], null))),slovarish$frontend$nouns$noun_view$assemble_table_$_iter__28243(cljs.core.rest(s__28244__$2)));
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
slovarish.frontend.nouns.noun_view.noun_table = (function slovarish$frontend$nouns$noun_view$noun_table(p__28251){
var map__28252 = p__28251;
var map__28252__$1 = cljs.core.__destructure_map(map__28252);
var result = map__28252__$1;
var table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"table","table",-564943036));
var plural_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978));
var singular_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104));
var indeclinable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"indeclinable","indeclinable",1879418998));
var verified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"verified?","verified?",863527758));
var stress_pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28252__$1,new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495));
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"traditional","traditional",772812166)], null),(function (){var G__28253 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28253__$1 = (((G__28253 instanceof cljs.core.Keyword))?G__28253.fqn:null);
switch (G__28253__$1) {
case "english":
return "trad. order";

break;
case "russian":
return "\u0432 \u043E\u0431\u044B\u0447\u043D\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28253__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"learners","learners",-86599832)], null),(function (){var G__28254 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28254__$1 = (((G__28254 instanceof cljs.core.Keyword))?G__28254.fqn:null);
switch (G__28254__$1) {
case "english":
return "learners\u2019 order";

break;
case "russian":
return "\u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0430\u044E\u0449\u0438\u0445";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28254__$1)].join('')));

}
})()], null)], null)], null),(cljs.core.truth_(plural_only_QMARK_)?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.column-header.sans","th.column-header.sans",2019543545),(function (){var G__28255 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28255__$1 = (((G__28255 instanceof cljs.core.Keyword))?G__28255.fqn:null);
switch (G__28255__$1) {
case "english":
return "singular";

break;
case "russian":
return "\u0435\u0434. \u0447.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28255__$1)].join('')));

}
})()], null)),(cljs.core.truth_(singular_only_QMARK_)?null:(function (){var G__28256 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28256__$1 = (((G__28256 instanceof cljs.core.Keyword))?G__28256.fqn:null);
switch (G__28256__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28256__$1)].join('')));

}
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.stress","tr.stress",1549624366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"naming",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(slovarish.frontend.nouns.noun_view.naming),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

return cljs.core.reset_BANG_(slovarish.frontend.nouns.noun_view.naming,e.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"english","english",1087501909)], null),(function (){var G__28257 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28257__$1 = (((G__28257 instanceof cljs.core.Keyword))?G__28257.fqn:null);
switch (G__28257__$1) {
case "english":
return "eng";

break;
case "russian":
return "\u043F\u043E \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u0441\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28257__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"russian","russian",1887936458)], null),(function (){var G__28258 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28258__$1 = (((G__28258 instanceof cljs.core.Keyword))?G__28258.fqn:null);
switch (G__28258__$1) {
case "english":
return "rus";

break;
case "russian":
return "\u043F\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28258__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rus-abbr","rus-abbr",-721404873)], null),(function (){var G__28259 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28259__$1 = (((G__28259 instanceof cljs.core.Keyword))?G__28259.fqn:null);
switch (G__28259__$1) {
case "english":
return "abbr";

break;
case "russian":
return "\u043F\u043E \u0430\u0431\u0431\u0440\u0435\u0432\u0438\u0430\u0442\u0443\u0440\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28259__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"verb","verb",-1492655803)], null),(function (){var G__28260 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28260__$1 = (((G__28260 instanceof cljs.core.Keyword))?G__28260.fqn:null);
switch (G__28260__$1) {
case "english":
return "verbs";

break;
case "russian":
return "\u043F\u043E \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043B\u043E\u0432\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28260__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"question","question",-1411720117)], null),(function (){var G__28261 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__28261__$1 = (((G__28261 instanceof cljs.core.Keyword))?G__28261.fqn:null);
switch (G__28261__$1) {
case "english":
return "q\u2019s";

break;
case "russian":
return "\u043F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28261__$1)].join('')));

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
