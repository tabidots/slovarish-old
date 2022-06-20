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
if(clojure.string.includes_QMARK_("\u0438\u044B",ending)){
return (4);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u043F\u0440\u0435\u043D\u0438\u044F")){
return (4);
} else {
if(clojure.string.includes_QMARK_("\u0430\u044F",ending)){
return (1);
} else {
if(clojure.string.includes_QMARK_("\u0439\u043E\u0435\u0451",ending)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ending,"\u044C")){
var G__28757 = gender;
var G__28757__$1 = (((G__28757 instanceof cljs.core.Keyword))?G__28757.fqn:null);
switch (G__28757__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28757__$1)].join('')));

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
}
}
});
slovarish.frontend.nouns.endings.noun_ending = (function slovarish$frontend$nouns$endings$noun_ending(word,gender,animate,padezh,chislo){
if(cljs.core.truth_(cljs.core.re_find(/[ая]нин$/,word))){
return /(?:и\u0301?н.*?|е|ам|ами|ах)$/;
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var fexpr__28758 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u0434\u0435\u0432\u0447\u0430\u0442\u0430",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null,"\u0440\u0435\u0431\u044F\u0442\u0430",null], null), null);
return (fexpr__28758.cljs$core$IFn$_invoke$arity$1 ? fexpr__28758.cljs$core$IFn$_invoke$arity$1(word) : fexpr__28758.call(null,word));
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
var G__28759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,chislo], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28759)){
var G__28760 = word;
var G__28761 = gender;
var G__28762 = animate;
var G__28763 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__28764 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__28760,G__28761,G__28762,G__28763,G__28764) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__28760,G__28761,G__28762,G__28763,G__28764));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28759)){
return /(?:ь|и\u0301?)?[ая]\u0301?м$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28759)){
return /(?:ь|и\u0301?)?[аяь]\u0301?ми\u0301?$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28759)){
return /(?:ь|и\u0301?)?[ая]\u0301?х$/;
} else {
var G__28765 = slovarish.frontend.nouns.endings.which_declension(word,gender);
switch (G__28765) {
case (1):
var G__28766 = chislo;
var G__28766__$1 = (((G__28766 instanceof cljs.core.Keyword))?G__28766.fqn:null);
switch (G__28766__$1) {
case "singular":
var G__28767 = padezh;
var G__28767__$1 = (((G__28767 instanceof cljs.core.Keyword))?G__28767.fqn:null);
switch (G__28767__$1) {
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
var G__28768 = padezh;
var G__28768__$1 = (((G__28768 instanceof cljs.core.Keyword))?G__28768.fqn:null);
switch (G__28768__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28766__$1)].join('')));

}

break;
case (2):
var G__28769 = chislo;
var G__28769__$1 = (((G__28769 instanceof cljs.core.Keyword))?G__28769.fqn:null);
switch (G__28769__$1) {
case "singular":
var G__28770 = padezh;
var G__28770__$1 = (((G__28770 instanceof cljs.core.Keyword))?G__28770.fqn:null);
switch (G__28770__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /а\u0301?$/;
} else {
var G__28771 = gender;
var G__28771__$1 = (((G__28771 instanceof cljs.core.Keyword))?G__28771.fqn:null);
switch (G__28771__$1) {
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
var G__28772 = word;
var G__28773 = gender;
var G__28774 = animate;
var G__28775 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__28776 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__28772,G__28773,G__28774,G__28775,G__28776) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__28772,G__28773,G__28774,G__28775,G__28776));

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
var G__28777 = padezh;
var G__28777__$1 = (((G__28777 instanceof cljs.core.Keyword))?G__28777.fqn:null);
switch (G__28777__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /ы\u0301?$/;
} else {
var G__28778 = gender;
var G__28778__$1 = (((G__28778 instanceof cljs.core.Keyword))?G__28778.fqn:null);
switch (G__28778__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28769__$1)].join('')));

}

break;
case (3):
var G__28779 = chislo;
var G__28779__$1 = (((G__28779 instanceof cljs.core.Keyword))?G__28779.fqn:null);
switch (G__28779__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__28780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nominative","nominative",148321668),null,new cljs.core.Keyword(null,"accusative","accusative",-886115147),null], null), null);
return (fexpr__28780.cljs$core$IFn$_invoke$arity$1 ? fexpr__28780.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__28780.call(null,padezh));
})())){
var G__28781 = gender;
var G__28781__$1 = (((G__28781 instanceof cljs.core.Keyword))?G__28781.fqn:null);
switch (G__28781__$1) {
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
if(cljs.core.truth_((function (){var fexpr__28782 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),null,new cljs.core.Keyword(null,"dative","dative",-1601922152),null,new cljs.core.Keyword(null,"genitive","genitive",1156616057),null], null), null);
return (fexpr__28782.cljs$core$IFn$_invoke$arity$1 ? fexpr__28782.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__28782.call(null,padezh));
})())){
var G__28783 = gender;
var G__28783__$1 = (((G__28783 instanceof cljs.core.Keyword))?G__28783.fqn:null);
switch (G__28783__$1) {
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
var G__28784 = padezh;
var G__28784__$1 = (((G__28784 instanceof cljs.core.Keyword))?G__28784.fqn:null);
switch (G__28784__$1) {
case "instrumental":
var G__28785 = gender;
var G__28785__$1 = (((G__28785 instanceof cljs.core.Keyword))?G__28785.fqn:null);
switch (G__28785__$1) {
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
var G__28786 = padezh;
var G__28786__$1 = (((G__28786 instanceof cljs.core.Keyword))?G__28786.fqn:null);
switch (G__28786__$1) {
case "nominative":
var G__28787 = gender;
var G__28787__$1 = (((G__28787 instanceof cljs.core.Keyword))?G__28787.fqn:null);
switch (G__28787__$1) {
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
var G__28788 = gender;
var G__28788__$1 = (((G__28788 instanceof cljs.core.Keyword))?G__28788.fqn:null);
switch (G__28788__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28779__$1)].join('')));

}

break;
case (4):
var G__28789 = padezh;
var G__28789__$1 = (((G__28789 instanceof cljs.core.Keyword))?G__28789.fqn:null);
switch (G__28789__$1) {
case "nominative":
return /(?:[иыа]\u0301?|ия)$/;

break;
case "genitive":
return /[еои]\u0301?[вй]$/;

break;
default:
return null;

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
var G__28790 = gender;
var G__28790__$1 = (((G__28790 instanceof cljs.core.Keyword))?G__28790.fqn:null);
switch (G__28790__$1) {
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
