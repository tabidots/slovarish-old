goog.provide('slovarish.frontend.nouns.endings');
slovarish.frontend.nouns.endings.pol_words = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u043F\u043E\u043B\u0432\u0435\u043A\u0430",null,"\u043F\u043E\u043B\u0447\u0430\u0441\u0430",null,"\u043F\u043E\u043B\u0433\u043E\u0434\u0430",null], null), null);
slovarish.frontend.nouns.endings.which_declension = (function slovarish$frontend$nouns$endings$which_declension(word,gender){
var ending = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(word));
var cons_stem_QMARK_ = cljs.core.re_find(cljs.core.re_pattern("[^\u0430\u044D\u043E\u0443\u044B\u044F\u0435\u0451\u044E\u0438\u044C]$"),word);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u043F\u0443\u0442\u044C")){
return (3);
} else {
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return (2);
} else {
if(cljs.core.truth_(cljs.core.re_find(/мя$/,word))){
return (3);
} else {
if(cljs.core.truth_(cons_stem_QMARK_)){
return (2);
} else {
if(cljs.core.truth_((function (){var fexpr__81829 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0438",null,"\u044F",null,"\u0430",null], null), null);
return (fexpr__81829.cljs$core$IFn$_invoke$arity$1 ? fexpr__81829.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__81829.call(null,ending));
})())){
return (1);
} else {
if(cljs.core.truth_((function (){var fexpr__81830 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\u0451",null,"\u044B",null,"\u0439",null,"\u043E",null,"\u0435",null], null), null);
return (fexpr__81830.cljs$core$IFn$_invoke$arity$1 ? fexpr__81830.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__81830.call(null,ending));
})())){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ending,"\u044C")){
var G__81831 = gender;
var G__81831__$1 = (((G__81831 instanceof cljs.core.Keyword))?G__81831.fqn:null);
switch (G__81831__$1) {
case "masculine":
return (2);

break;
case "feminine":
return (3);

break;
case "neuter":
return (3);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81831__$1)].join('')));

}
} else {
return null;

}
}
}
}
}
}
}
});
slovarish.frontend.nouns.endings.noun_ending = (function slovarish$frontend$nouns$endings$noun_ending(word,gender,animate,padezh,chislo){
if(cljs.core.truth_(cljs.core.re_find(/[ая]нин$/,word))){
return /(?:и\u0301?н.*?|е|ам|ами|ах)$/;
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var fexpr__81832 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u0434\u0435\u0432\u0447\u0430\u0442\u0430",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null,"\u0440\u0435\u0431\u044F\u0442\u0430",null], null), null);
return (fexpr__81832.cljs$core$IFn$_invoke$arity$1 ? fexpr__81832.cljs$core$IFn$_invoke$arity$1(word) : fexpr__81832.call(null,word));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.re_find(/ёнок$/,word);
}
})())){
return cljs.core.re_pattern(["(?:[\u043E\u0451]\u0301?\u043D\u043E?\u0301?\u043A.*?|[\u0430\u044F]\u0301?\u0442.*?","|\u0438|\u0435\u0301?\u0439|\u044F\u0301?\u043C|\u044C\u043C\u0438\u0301?|\u044F\u0301?\u0445)$"].join(''));
} else {
if(cljs.core.truth_(cljs.core.re_find(/мя$/,word))){
return /м[еёя].*?$/;
} else {
var G__81833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,chislo], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__81833)){
var G__81834 = word;
var G__81835 = gender;
var G__81836 = animate;
var G__81837 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__81838 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__81834,G__81835,G__81836,G__81837,G__81838) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__81834,G__81835,G__81836,G__81837,G__81838));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__81833)){
return /(?:ь|и\u0301?)?[ая]\u0301?м$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__81833)){
return /(?:ь|и\u0301?)?[аяь]\u0301?ми\u0301?$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__81833)){
return /(?:ь|и\u0301?)?[ая]\u0301?х$/;
} else {
var declension_group = slovarish.frontend.nouns.endings.which_declension(word,gender);
var G__81839 = declension_group;
switch (G__81839) {
case (1):
var G__81840 = chislo;
var G__81840__$1 = (((G__81840 instanceof cljs.core.Keyword))?G__81840.fqn:null);
switch (G__81840__$1) {
case "singular":
var G__81841 = padezh;
var G__81841__$1 = (((G__81841 instanceof cljs.core.Keyword))?G__81841.fqn:null);
switch (G__81841__$1) {
case "nominative":
return /(?:ь|и\u0301?)?[ая]\u0301?$/;

break;
case "genitive":
return /(?:ь|и\u0301?)?[ыи]\u0301?$/;

break;
case "accusative":
return /(?:ь|и\u0301?)?[ую]\u0301?$/;

break;
case "dative":
return /(?:ь|и\u0301?)?[еи]\u0301?$/;

break;
case "instrumental":
return /(?:ь|и\u0301?)?[оеё]\u0301?й$/;

break;
case "prepositional":
return /(?:ь|и\u0301?)?[еи]\u0301?$/;

break;
default:
return null;

}

break;
case "plural":
var G__81842 = padezh;
var G__81842__$1 = (((G__81842 instanceof cljs.core.Keyword))?G__81842.fqn:null);
switch (G__81842__$1) {
case "nominative":
return /(?:ь|и\u0301?)?[ыи]\u0301?$/;

break;
case "genitive":
if(cljs.core.truth_(cljs.core.re_find(/[ьи][ия]$/,word))){
return /[еи]\u0301?й$/;
} else {
if(cljs.core.truth_(cljs.core.re_find(/е\u0301?я$/,word))){
return /й$/;
} else {
if(cljs.core.truth_(cljs.core.re_find(/[уо]я$/,word))){
return /й$/;
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"masculine","masculine",-523682579));
if(and__4251__auto__){
return cljs.core.re_find(/и$/,word);
} else {
return and__4251__auto__;
}
})())){
return /[оеё]\u0301?в/;
} else {
return /(?:е\u0301?й|ь)$/;

}
}
}
}

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81840__$1)].join('')));

}

break;
case (2):
var G__81843 = chislo;
var G__81843__$1 = (((G__81843 instanceof cljs.core.Keyword))?G__81843.fqn:null);
switch (G__81843__$1) {
case "singular":
var G__81844 = padezh;
var G__81844__$1 = (((G__81844 instanceof cljs.core.Keyword))?G__81844.fqn:null);
switch (G__81844__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /а\u0301?$/;
} else {
var G__81845 = gender;
var G__81845__$1 = (((G__81845 instanceof cljs.core.Keyword))?G__81845.fqn:null);
switch (G__81845__$1) {
case "masculine":
return /(?:ье?|и?й|о\u0301?)$/;

break;
case "neuter":
return /[ьи]?[оеё]\u0301?$/;

break;
default:
return null;

}
}

break;
case "genitive":
return /[ьи]?[ая]\u0301?$/;

break;
case "accusative":
var G__81846 = word;
var G__81847 = gender;
var G__81848 = animate;
var G__81849 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__81850 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__81846,G__81847,G__81848,G__81849,G__81850) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__81846,G__81847,G__81848,G__81849,G__81850));

break;
case "dative":
return /[ьи]?[ую]\u0301?$/;

break;
case "instrumental":
return /[ьи]?[оеё]\u0301?м$/;

break;
case "prepositional":
return /[ьи]?[еи]\u0301?$/;

break;
case "locative":
return /[ьи]?[ую]\u0301?$/;

break;
case "partitive":
return /[ьи]?[ую]\u0301?$/;

break;
default:
return null;

}

break;
case "plural":
var G__81851 = padezh;
var G__81851__$1 = (((G__81851 instanceof cljs.core.Keyword))?G__81851.fqn:null);
switch (G__81851__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /ы\u0301?$/;
} else {
var G__81852 = gender;
var G__81852__$1 = (((G__81852 instanceof cljs.core.Keyword))?G__81852.fqn:null);
switch (G__81852__$1) {
case "masculine":
return /(?:[ьи]?[ыиая]\u0301?)$/;

break;
case "neuter":
return /[ьи]?[аяи]\u0301?$/;

break;
default:
return null;

}
}

break;
case "genitive":
if(cljs.core.truth_(cljs.core.re_find(/[ьи]е$/,word))){
return /ий$/;
} else {
if(cljs.core.truth_(cljs.core.re_find(/ово$/,word))){
return /овов$/;
} else {
if(cljs.core.truth_(cljs.core.re_find(/ё$/,word))){
return /(?:[ьи][её]в|е\u0301?й|ий)$/;
} else {
return /(?:[ьи]?[оеё]\u0301?в|е\u0301?й)$/;

}
}
}

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81843__$1)].join('')));

}

break;
case (3):
var G__81853 = chislo;
var G__81853__$1 = (((G__81853 instanceof cljs.core.Keyword))?G__81853.fqn:null);
switch (G__81853__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__81854 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nominative","nominative",148321668),null,new cljs.core.Keyword(null,"accusative","accusative",-886115147),null], null), null);
return (fexpr__81854.cljs$core$IFn$_invoke$arity$1 ? fexpr__81854.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__81854.call(null,padezh));
})())){
var G__81855 = gender;
var G__81855__$1 = (((G__81855 instanceof cljs.core.Keyword))?G__81855.fqn:null);
switch (G__81855__$1) {
case "feminine":
return /ь$/;

break;
case "masculine":
return /ь$/;

break;
default:
return null;

}
} else {
if(cljs.core.truth_((function (){var fexpr__81856 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),null,new cljs.core.Keyword(null,"dative","dative",-1601922152),null,new cljs.core.Keyword(null,"genitive","genitive",1156616057),null], null), null);
return (fexpr__81856.cljs$core$IFn$_invoke$arity$1 ? fexpr__81856.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__81856.call(null,padezh));
})())){
var G__81857 = gender;
var G__81857__$1 = (((G__81857 instanceof cljs.core.Keyword))?G__81857.fqn:null);
switch (G__81857__$1) {
case "feminine":
return /и\u0301?$/;

break;
case "masculine":
return /и\u0301?$/;

break;
default:
return null;

}
} else {
var G__81858 = padezh;
var G__81858__$1 = (((G__81858 instanceof cljs.core.Keyword))?G__81858.fqn:null);
switch (G__81858__$1) {
case "instrumental":
var G__81859 = gender;
var G__81859__$1 = (((G__81859 instanceof cljs.core.Keyword))?G__81859.fqn:null);
switch (G__81859__$1) {
case "feminine":
return /ью\u0301?$/;

break;
case "masculine":
return /ём$/;

break;
default:
return null;

}

break;
case "locative":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(gender,new cljs.core.Keyword(null,"feminine","feminine",-223910280))){
return /и\u0301?$/;
} else {
return null;
}

break;
default:
return null;

}

}
}

break;
case "plural":
var G__81860 = padezh;
var G__81860__$1 = (((G__81860 instanceof cljs.core.Keyword))?G__81860.fqn:null);
switch (G__81860__$1) {
case "nominative":
var G__81861 = gender;
var G__81861__$1 = (((G__81861 instanceof cljs.core.Keyword))?G__81861.fqn:null);
switch (G__81861__$1) {
case "feminine":
return /и\u0301?$/;

break;
case "masculine":
return /и\u0301?$/;

break;
default:
return null;

}

break;
case "genitive":
var G__81862 = gender;
var G__81862__$1 = (((G__81862 instanceof cljs.core.Keyword))?G__81862.fqn:null);
switch (G__81862__$1) {
case "feminine":
return /е\u0301?й$/;

break;
case "masculine":
return /е\u0301?й$/;

break;
default:
return null;

}

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81853__$1)].join('')));

}

break;
default:
return null;

}

}
}
}
}

}
}
}
});
slovarish.frontend.nouns.endings.adj_ending = (function slovarish$frontend$nouns$endings$adj_ending(_,gender,___$1,___$2,chislo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chislo,new cljs.core.Keyword(null,"plural","plural",-881591021))){
return /[ыи]\u0301?[емх]?и?$/;
} else {
var G__81863 = gender;
var G__81863__$1 = (((G__81863 instanceof cljs.core.Keyword))?G__81863.fqn:null);
switch (G__81863__$1) {
case "masculine":
return /(?:[ыои]\u0301?й|[ое]\u0301?го|[ое]\u0301?му|[ыиоеё]\u0301?м)$/;

break;
case "feminine":
return /(?:[ая]\u0301?я|[ую]\u0301?ю|[ое]\u0301?й)$/;

break;
case "neuter":
return /(?:[ое]\u0301?е|[ое]\u0301?го|[ое]\u0301?му|[ыиоеё]\u0301?м)$/;

break;
default:
return null;

}
}
});

//# sourceMappingURL=slovarish.frontend.nouns.endings.js.map
