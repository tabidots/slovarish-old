goog.provide('slovarish.frontend.endings');
slovarish.frontend.endings.pol_words = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u043F\u043E\u043B\u0432\u0435\u043A\u0430",null,"\u043F\u043E\u043B\u0447\u0430\u0441\u0430",null,"\u043F\u043E\u043B\u0433\u043E\u0434\u0430",null], null), null);
slovarish.frontend.endings.which_declension = (function slovarish$frontend$endings$which_declension(word,gender){
var ending = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(word));
var cons_stem_QMARK_ = cljs.core.re_find(cljs.core.re_pattern("[^\u0430\u044D\u043E\u0443\u044B\u044F\u0435\u0451\u044E\u0438\u044C]$"),word);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u043F\u0443\u0442\u044C")){
return (3);
} else {
if(cljs.core.truth_((slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.endings.pol_words.call(null,word)))){
return (2);
} else {
if(cljs.core.truth_(cljs.core.re_find(/мя$/,word))){
return (3);
} else {
if(cljs.core.truth_(cons_stem_QMARK_)){
return (2);
} else {
if(cljs.core.truth_((function (){var fexpr__36713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0438",null,"\u044F",null,"\u0430",null], null), null);
return (fexpr__36713.cljs$core$IFn$_invoke$arity$1 ? fexpr__36713.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__36713.call(null,ending));
})())){
return (1);
} else {
if(cljs.core.truth_((function (){var fexpr__36714 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\u0451",null,"\u044B",null,"\u0439",null,"\u043E",null,"\u0435",null], null), null);
return (fexpr__36714.cljs$core$IFn$_invoke$arity$1 ? fexpr__36714.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__36714.call(null,ending));
})())){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ending,"\u044C")){
var G__36719 = gender;
var G__36719__$1 = (((G__36719 instanceof cljs.core.Keyword))?G__36719.fqn:null);
switch (G__36719__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36719__$1)].join('')));

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
slovarish.frontend.endings.noun_ending = (function slovarish$frontend$endings$noun_ending(word,gender,animate,padezh,chislo){
if(cljs.core.truth_(cljs.core.re_find(/[ая]нин$/,word))){
return /(?:и\u0301?н.*?|е|ам|ами|ах)$/;
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var fexpr__36728 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u0434\u0435\u0432\u0447\u0430\u0442\u0430",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null,"\u0440\u0435\u0431\u044F\u0442\u0430",null], null), null);
return (fexpr__36728.cljs$core$IFn$_invoke$arity$1 ? fexpr__36728.cljs$core$IFn$_invoke$arity$1(word) : fexpr__36728.call(null,word));
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
var G__36729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,chislo], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__36729)){
var G__36730 = word;
var G__36731 = gender;
var G__36732 = animate;
var G__36733 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__36734 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (slovarish.frontend.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__36730,G__36731,G__36732,G__36733,G__36734) : slovarish.frontend.endings.noun_ending.call(null,G__36730,G__36731,G__36732,G__36733,G__36734));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__36729)){
return /(?:ь|и\u0301?)?[ая]\u0301?м$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__36729)){
return /(?:ь|и\u0301?)?[аяь]\u0301?ми\u0301?$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__36729)){
return /(?:ь|и\u0301?)?[ая]\u0301?х$/;
} else {
var declension_group = slovarish.frontend.endings.which_declension(word,gender);
var G__36735 = declension_group;
switch (G__36735) {
case (1):
var G__36736 = chislo;
var G__36736__$1 = (((G__36736 instanceof cljs.core.Keyword))?G__36736.fqn:null);
switch (G__36736__$1) {
case "singular":
var G__36738 = padezh;
var G__36738__$1 = (((G__36738 instanceof cljs.core.Keyword))?G__36738.fqn:null);
switch (G__36738__$1) {
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
var G__36739 = padezh;
var G__36739__$1 = (((G__36739 instanceof cljs.core.Keyword))?G__36739.fqn:null);
switch (G__36739__$1) {
case "nominative":
return /(?:ь|и\u0301?)?[ыи]\u0301?$/;

break;
case "genitive":
if(cljs.core.truth_(cljs.core.re_find(/[ьи][ия]$/,word))){
return /[еи]\u0301?й$/;
} else {
if(cljs.core.truth_(cljs.core.re_find(/е\u0301?я$/,word))){
return /ейей/;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36736__$1)].join('')));

}

break;
case (2):
var G__36743 = chislo;
var G__36743__$1 = (((G__36743 instanceof cljs.core.Keyword))?G__36743.fqn:null);
switch (G__36743__$1) {
case "singular":
var G__36744 = padezh;
var G__36744__$1 = (((G__36744 instanceof cljs.core.Keyword))?G__36744.fqn:null);
switch (G__36744__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.endings.pol_words.call(null,word)))){
return /а\u0301?$/;
} else {
var G__36748 = gender;
var G__36748__$1 = (((G__36748 instanceof cljs.core.Keyword))?G__36748.fqn:null);
switch (G__36748__$1) {
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
var G__36749 = word;
var G__36750 = gender;
var G__36751 = animate;
var G__36752 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__36753 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (slovarish.frontend.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__36749,G__36750,G__36751,G__36752,G__36753) : slovarish.frontend.endings.noun_ending.call(null,G__36749,G__36750,G__36751,G__36752,G__36753));

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
var G__36754 = padezh;
var G__36754__$1 = (((G__36754 instanceof cljs.core.Keyword))?G__36754.fqn:null);
switch (G__36754__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.endings.pol_words.call(null,word)))){
return /ы\u0301?$/;
} else {
var G__36758 = gender;
var G__36758__$1 = (((G__36758 instanceof cljs.core.Keyword))?G__36758.fqn:null);
switch (G__36758__$1) {
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
if(cljs.core.truth_(cljs.core.re_find(/ие$/,word))){
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36743__$1)].join('')));

}

break;
case (3):
var G__36762 = chislo;
var G__36762__$1 = (((G__36762 instanceof cljs.core.Keyword))?G__36762.fqn:null);
switch (G__36762__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__36764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nominative","nominative",148321668),null,new cljs.core.Keyword(null,"accusative","accusative",-886115147),null], null), null);
return (fexpr__36764.cljs$core$IFn$_invoke$arity$1 ? fexpr__36764.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__36764.call(null,padezh));
})())){
var G__36765 = gender;
var G__36765__$1 = (((G__36765 instanceof cljs.core.Keyword))?G__36765.fqn:null);
switch (G__36765__$1) {
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
if(cljs.core.truth_((function (){var fexpr__36766 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),null,new cljs.core.Keyword(null,"dative","dative",-1601922152),null,new cljs.core.Keyword(null,"genitive","genitive",1156616057),null], null), null);
return (fexpr__36766.cljs$core$IFn$_invoke$arity$1 ? fexpr__36766.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__36766.call(null,padezh));
})())){
var G__36767 = gender;
var G__36767__$1 = (((G__36767 instanceof cljs.core.Keyword))?G__36767.fqn:null);
switch (G__36767__$1) {
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
var G__36768 = padezh;
var G__36768__$1 = (((G__36768 instanceof cljs.core.Keyword))?G__36768.fqn:null);
switch (G__36768__$1) {
case "instrumental":
var G__36769 = gender;
var G__36769__$1 = (((G__36769 instanceof cljs.core.Keyword))?G__36769.fqn:null);
switch (G__36769__$1) {
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
var G__36775 = padezh;
var G__36775__$1 = (((G__36775 instanceof cljs.core.Keyword))?G__36775.fqn:null);
switch (G__36775__$1) {
case "nominative":
var G__36779 = gender;
var G__36779__$1 = (((G__36779 instanceof cljs.core.Keyword))?G__36779.fqn:null);
switch (G__36779__$1) {
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
var G__36780 = gender;
var G__36780__$1 = (((G__36780 instanceof cljs.core.Keyword))?G__36780.fqn:null);
switch (G__36780__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36762__$1)].join('')));

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
slovarish.frontend.endings.adj_ending = (function slovarish$frontend$endings$adj_ending(word,gender,animate,padezh,chislo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chislo,new cljs.core.Keyword(null,"plural","plural",-881591021))){
return /[ыи]\u0301?[емх]?и?$/;
} else {
var G__36786 = gender;
var G__36786__$1 = (((G__36786 instanceof cljs.core.Keyword))?G__36786.fqn:null);
switch (G__36786__$1) {
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

//# sourceMappingURL=slovarish.frontend.endings.js.map
