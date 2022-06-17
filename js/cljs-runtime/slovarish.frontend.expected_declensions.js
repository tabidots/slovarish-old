goog.provide('slovarish.frontend.expected_declensions');
slovarish.frontend.expected_declensions.which_declension = (function slovarish$frontend$expected_declensions$which_declension(word,gender){
var ending = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(word));
var cons_stem_QMARK_ = cljs.core.re_find(cljs.core.re_pattern("[^\u0430\u044D\u043E\u0443\u044B\u044F\u0435\u0451\u044E\u0438\u044C]$"),word);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"\u043F\u0443\u0442\u044C")){
return (3);
} else {
if(cljs.core.truth_(cljs.core.re_find(/мя$/,word))){
return (3);
} else {
if(cljs.core.truth_(cons_stem_QMARK_)){
return (2);
} else {
if(cljs.core.truth_((function (){var fexpr__175339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0438",null,"\u044F",null,"\u0430",null], null), null);
return (fexpr__175339.cljs$core$IFn$_invoke$arity$1 ? fexpr__175339.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__175339.call(null,ending));
})())){
return (1);
} else {
if(cljs.core.truth_((function (){var fexpr__175340 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\u0451",null,"\u044B",null,"\u0439",null,"\u043E",null,"\u0435",null], null), null);
return (fexpr__175340.cljs$core$IFn$_invoke$arity$1 ? fexpr__175340.cljs$core$IFn$_invoke$arity$1(ending) : fexpr__175340.call(null,ending));
})())){
return (2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ending,"\u044C")){
var G__175341 = gender;
var G__175341__$1 = (((G__175341 instanceof cljs.core.Keyword))?G__175341.fqn:null);
switch (G__175341__$1) {
case "masculine":
return (2);

break;
case "feminine":
return (3);

break;
default:
return null;

}
} else {
return null;

}
}
}
}
}
}
});
slovarish.frontend.expected_declensions.noun_ending = (function slovarish$frontend$expected_declensions$noun_ending(word,gender,animate,padezh,chislo){
var G__175342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [padezh,chislo], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accusative","accusative",-886115147),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__175342)){
var G__175343 = word;
var G__175344 = gender;
var G__175345 = animate;
var G__175346 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__175347 = new cljs.core.Keyword(null,"plural","plural",-881591021);
return (slovarish.frontend.expected_declensions.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.expected_declensions.noun_ending.cljs$core$IFn$_invoke$arity$5(G__175343,G__175344,G__175345,G__175346,G__175347) : slovarish.frontend.expected_declensions.noun_ending.call(null,G__175343,G__175344,G__175345,G__175346,G__175347));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dative","dative",-1601922152),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__175342)){
return /(?:мен)?[ая]\u0301?м$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instrumental","instrumental",1991102259),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__175342)){
return /(?:мен)?[аяь]\u0301?ми\u0301?$/;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),new cljs.core.Keyword(null,"plural","plural",-881591021)], null),G__175342)){
return /(?:мен)?[ая]\u0301?х$/;
} else {
var declension_group = slovarish.frontend.expected_declensions.which_declension(word,gender);
var G__175348 = declension_group;
switch (G__175348) {
case (1):
var G__175349 = chislo;
var G__175349__$1 = (((G__175349 instanceof cljs.core.Keyword))?G__175349.fqn:null);
switch (G__175349__$1) {
case "singular":
var G__175350 = padezh;
var G__175350__$1 = (((G__175350 instanceof cljs.core.Keyword))?G__175350.fqn:null);
switch (G__175350__$1) {
case "nominative":
return /[ая]\u0301?$/;

break;
case "genitive":
return /[ыи]\u0301?$/;

break;
case "accusative":
return /[ую]\u0301?$/;

break;
case "dative":
return /[еи]\u0301?$/;

break;
case "instrumental":
return /[оеё]\u0301?й$/;

break;
case "prepositional":
return /[еи]\u0301?$/;

break;
default:
return null;

}

break;
case "plural":
var G__175351 = padezh;
var G__175351__$1 = (((G__175351 instanceof cljs.core.Keyword))?G__175351.fqn:null);
switch (G__175351__$1) {
case "nominative":
return /[ыи]\u0301?$/;

break;
case "genitive":
if(cljs.core.truth_(cljs.core.re_find(/ия$/,word))){
return /й$/;
} else {
return /(?:е\u0301?)?[ьй]$/;
}

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__175349__$1)].join('')));

}

break;
case (2):
var G__175352 = chislo;
var G__175352__$1 = (((G__175352 instanceof cljs.core.Keyword))?G__175352.fqn:null);
switch (G__175352__$1) {
case "singular":
var G__175353 = padezh;
var G__175353__$1 = (((G__175353 instanceof cljs.core.Keyword))?G__175353.fqn:null);
switch (G__175353__$1) {
case "nominative":
var G__175354 = gender;
var G__175354__$1 = (((G__175354 instanceof cljs.core.Keyword))?G__175354.fqn:null);
switch (G__175354__$1) {
case "masculine":
return /[ьй]$/;

break;
case "neuter":
return /[оеё]\u0301?$/;

break;
default:
return null;

}

break;
case "genitive":
return /[ая]\u0301?$/;

break;
case "accusative":
var G__175355 = word;
var G__175356 = gender;
var G__175357 = animate;
var G__175358 = (cljs.core.truth_(animate)?new cljs.core.Keyword(null,"genitive","genitive",1156616057):new cljs.core.Keyword(null,"nominative","nominative",148321668));
var G__175359 = new cljs.core.Keyword(null,"singular","singular",1409933445);
return (slovarish.frontend.expected_declensions.noun_ending.cljs$core$IFn$_invoke$arity$5 ? slovarish.frontend.expected_declensions.noun_ending.cljs$core$IFn$_invoke$arity$5(G__175355,G__175356,G__175357,G__175358,G__175359) : slovarish.frontend.expected_declensions.noun_ending.call(null,G__175355,G__175356,G__175357,G__175358,G__175359));

break;
case "dative":
return /[ую]\u0301?$/;

break;
case "instrumental":
return /[оеё]\u0301?м$/;

break;
case "prepositional":
return /[еи]\u0301?$/;

break;
case "locative":
return /[ую]\u0301?$/;

break;
case "partitive":
return /[ую]\u0301?$/;

break;
default:
return null;

}

break;
case "plural":
var G__175360 = padezh;
var G__175360__$1 = (((G__175360 instanceof cljs.core.Keyword))?G__175360.fqn:null);
switch (G__175360__$1) {
case "nominative":
var G__175361 = gender;
var G__175361__$1 = (((G__175361 instanceof cljs.core.Keyword))?G__175361.fqn:null);
switch (G__175361__$1) {
case "masculine":
return /[ыиая]\u0301?$/;

break;
case "neuter":
return /[аяи]\u0301?$/;

break;
default:
return null;

}

break;
case "genitive":
if(cljs.core.truth_(cljs.core.re_find(/ие$/,word))){
return /й$/;
} else {
return /(?:[оеё]\u0301?в|е\u0301?й)$/;
}

break;
default:
return null;

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__175352__$1)].join('')));

}

break;
case (3):
var G__175362 = chislo;
var G__175362__$1 = (((G__175362 instanceof cljs.core.Keyword))?G__175362.fqn:null);
switch (G__175362__$1) {
case "singular":
if(cljs.core.truth_((function (){var fexpr__175363 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nominative","nominative",148321668),null,new cljs.core.Keyword(null,"accusative","accusative",-886115147),null], null), null);
return (fexpr__175363.cljs$core$IFn$_invoke$arity$1 ? fexpr__175363.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__175363.call(null,padezh));
})())){
var G__175364 = gender;
var G__175364__$1 = (((G__175364 instanceof cljs.core.Keyword))?G__175364.fqn:null);
switch (G__175364__$1) {
case "feminine":
return /ь$/;

break;
case "masculine":
return /ь$/;

break;
case "neuter":
return /мя$/;

break;
default:
return null;

}
} else {
if(cljs.core.truth_((function (){var fexpr__175365 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prepositional","prepositional",-1869030449),null,new cljs.core.Keyword(null,"dative","dative",-1601922152),null,new cljs.core.Keyword(null,"genitive","genitive",1156616057),null], null), null);
return (fexpr__175365.cljs$core$IFn$_invoke$arity$1 ? fexpr__175365.cljs$core$IFn$_invoke$arity$1(padezh) : fexpr__175365.call(null,padezh));
})())){
var G__175366 = gender;
var G__175366__$1 = (((G__175366 instanceof cljs.core.Keyword))?G__175366.fqn:null);
switch (G__175366__$1) {
case "feminine":
return /и\u0301?$/;

break;
case "masculine":
return /и\u0301?$/;

break;
case "neuter":
return /мени\u0301?$/;

break;
default:
return null;

}
} else {
var G__175367 = padezh;
var G__175367__$1 = (((G__175367 instanceof cljs.core.Keyword))?G__175367.fqn:null);
switch (G__175367__$1) {
case "instrumental":
var G__175368 = gender;
var G__175368__$1 = (((G__175368 instanceof cljs.core.Keyword))?G__175368.fqn:null);
switch (G__175368__$1) {
case "feminine":
return /ью\u0301?$/;

break;
case "masculine":
return /ём$/;

break;
case "neuter":
return /менем$/;

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
var G__175369 = padezh;
var G__175369__$1 = (((G__175369 instanceof cljs.core.Keyword))?G__175369.fqn:null);
switch (G__175369__$1) {
case "nominative":
var G__175370 = gender;
var G__175370__$1 = (((G__175370 instanceof cljs.core.Keyword))?G__175370.fqn:null);
switch (G__175370__$1) {
case "feminine":
return /и\u0301?$/;

break;
case "masculine":
return /и\u0301?$/;

break;
case "neuter":
return /мена\u0301?$/;

break;
default:
return null;

}

break;
case "genitive":
var G__175371 = gender;
var G__175371__$1 = (((G__175371 instanceof cljs.core.Keyword))?G__175371.fqn:null);
switch (G__175371__$1) {
case "feminine":
return /е\u0301?й$/;

break;
case "masculine":
return /е\u0301?й$/;

break;
case "neuter":
return /мён$/;

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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__175362__$1)].join('')));

}

break;
default:
return null;

}

}
}
}
}
});
slovarish.frontend.expected_declensions.adj_ending = (function slovarish$frontend$expected_declensions$adj_ending(word,gender,animate,padezh,chislo){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chislo,new cljs.core.Keyword(null,"plural","plural",-881591021))){
return /[ыи]\u0301?[емх]?и?$/;
} else {
var G__175372 = gender;
var G__175372__$1 = (((G__175372 instanceof cljs.core.Keyword))?G__175372.fqn:null);
switch (G__175372__$1) {
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

//# sourceMappingURL=slovarish.frontend.expected_declensions.js.map
