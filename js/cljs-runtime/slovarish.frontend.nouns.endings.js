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
if(clojure.string.includes_QMARK_("\u0430\u044F",ending)){
return (1);
} else {
if(clojure.string.includes_QMARK_("\u0439\u043E\u0435\u0451",ending)){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ending,"\u044C")){
var G__28125 = gender;
var G__28125__$1 = (((G__28125 instanceof cljs.core.Keyword))?G__28125.fqn:null);
switch (G__28125__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28125__$1)].join('')));

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
});
slovarish.frontend.nouns.endings.noun_ending = (function slovarish$frontend$nouns$endings$noun_ending(word,gender,animate,padezh,chislo){
if(cljs.core.truth_(cljs.core.re_find(/[ая]нин$/,word))){
return /(?:и\u0301?н.*?|е|ам|ами|ах)$/;
} else {
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var fexpr__28126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["\u043C\u044B\u0448\u043E\u043D\u043E\u043A",null,"\u0434\u0435\u0432\u0447\u0430\u0442\u0430",null,"\u043C\u0435\u0434\u0432\u0435\u0436\u043E\u043D\u043E\u043A",null,"\u0440\u0435\u0431\u044F\u0442\u0430",null], null), null);
return (fexpr__28126.cljs$core$IFn$_invoke$arity$1 ? fexpr__28126.cljs$core$IFn$_invoke$arity$1(word) : fexpr__28126.call(null,word));
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
var G__28127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,chislo], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28127)){
var G__28128 = word;
var G__28129 = gender;
var G__28130 = animate;
var G__28131 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__28132 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__28128,G__28129,G__28130,G__28131,G__28132) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__28128,G__28129,G__28130,G__28131,G__28132));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28127)){
return /(?:ь|и\u0301?)?[ая]\u0301?м$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28127)){
return /(?:ь|и\u0301?)?[аяь]\u0301?ми\u0301?$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__28127)){
return /(?:ь|и\u0301?)?[ая]\u0301?х$/;
} else {
var G__28133 = slovarish.frontend.nouns.endings.which_declension(word,gender);
switch (G__28133) {
case (1):
var G__28134 = chislo;
var G__28134__$1 = (((G__28134 instanceof cljs.core.Keyword))?G__28134.fqn:null);
switch (G__28134__$1) {
case "singular":
var G__28135 = padezh;
var G__28135__$1 = (((G__28135 instanceof cljs.core.Keyword))?G__28135.fqn:null);
switch (G__28135__$1) {
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
var G__28136 = padezh;
var G__28136__$1 = (((G__28136 instanceof cljs.core.Keyword))?G__28136.fqn:null);
switch (G__28136__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28134__$1)].join('')));

}

break;
case (2):
var G__28137 = chislo;
var G__28137__$1 = (((G__28137 instanceof cljs.core.Keyword))?G__28137.fqn:null);
switch (G__28137__$1) {
case "singular":
var G__28138 = padezh;
var G__28138__$1 = (((G__28138 instanceof cljs.core.Keyword))?G__28138.fqn:null);
switch (G__28138__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /а\u0301?$/;
} else {
var G__28139 = gender;
var G__28139__$1 = (((G__28139 instanceof cljs.core.Keyword))?G__28139.fqn:null);
switch (G__28139__$1) {
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
var G__28140 = word;
var G__28141 = gender;
var G__28142 = animate;
var G__28143 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__28144 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.nouns.endings.noun_ending.cljs$core$IFn$_invoke$arity$5(G__28140,G__28141,G__28142,G__28143,G__28144) : slovarish.frontend.nouns.endings.noun_ending.call(null,G__28140,G__28141,G__28142,G__28143,G__28144));

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
var G__28145 = padezh;
var G__28145__$1 = (((G__28145 instanceof cljs.core.Keyword))?G__28145.fqn:null);
switch (G__28145__$1) {
case "nominative":
if(cljs.core.truth_((slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1 ? slovarish.frontend.nouns.endings.pol_words.cljs$core$IFn$_invoke$arity$1(word) : slovarish.frontend.nouns.endings.pol_words.call(null,word)))){
return /ы\u0301?$/;
} else {
var G__28146 = gender;
var G__28146__$1 = (((G__28146 instanceof cljs.core.Keyword))?G__28146.fqn:null);
switch (G__28146__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28137__$1)].join('')));

}

break;
case (3):
var G__28147 = chislo;
var G__28147__$1 = (((G__28147 instanceof cljs.core.Keyword))?G__28147.fqn:null);
switch (G__28147__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__28148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nominative","nominative",148321668),null,new cljs.core.Keyword(null,"accusative","accusative",-886115147),null], null), null);
return (fexpr__28148.cljs$core$IFn$_invoke$arity$1 ? fexpr__28148.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__28148.call(null,padezh));
})())){
var G__28149 = gender;
var G__28149__$1 = (((G__28149 instanceof cljs.core.Keyword))?G__28149.fqn:null);
switch (G__28149__$1) {
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
if(cljs.core.truth_((function (){var fexpr__28150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),null,new cljs.core.Keyword(null,"dative","dative",-1601922152),null,new cljs.core.Keyword(null,"genitive","genitive",1156616057),null], null), null);
return (fexpr__28150.cljs$core$IFn$_invoke$arity$1 ? fexpr__28150.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__28150.call(null,padezh));
})())){
var G__28151 = gender;
var G__28151__$1 = (((G__28151 instanceof cljs.core.Keyword))?G__28151.fqn:null);
switch (G__28151__$1) {
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
var G__28152 = padezh;
var G__28152__$1 = (((G__28152 instanceof cljs.core.Keyword))?G__28152.fqn:null);
switch (G__28152__$1) {
case "instrumental":
var G__28153 = gender;
var G__28153__$1 = (((G__28153 instanceof cljs.core.Keyword))?G__28153.fqn:null);
switch (G__28153__$1) {
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
var G__28154 = padezh;
var G__28154__$1 = (((G__28154 instanceof cljs.core.Keyword))?G__28154.fqn:null);
switch (G__28154__$1) {
case "nominative":
var G__28155 = gender;
var G__28155__$1 = (((G__28155 instanceof cljs.core.Keyword))?G__28155.fqn:null);
switch (G__28155__$1) {
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
var G__28156 = gender;
var G__28156__$1 = (((G__28156 instanceof cljs.core.Keyword))?G__28156.fqn:null);
switch (G__28156__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28147__$1)].join('')));

}

break;
case (4):
var G__28157 = padezh;
var G__28157__$1 = (((G__28157 instanceof cljs.core.Keyword))?G__28157.fqn:null);
switch (G__28157__$1) {
case "nominative":
return /[иыа]\u0301?$/;

break;
case "genitive":
return /[ео]\u0301?[вй]$/;

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
var G__28158 = gender;
var G__28158__$1 = (((G__28158 instanceof cljs.core.Keyword))?G__28158.fqn:null);
switch (G__28158__$1) {
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
