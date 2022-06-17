goog.provide('hickory.convert');
/**
 * Given a sequence of hiccup forms representing a full document,
 * returns an equivalent hickory node representation of that document.
 * This will perform HTML5 parsing as a full document, no matter what
 * it is given.
 * 
 * Note that this function is heavyweight: it requires a full HTML
 * re-parse to work.
 */
hickory.convert.hiccup_to_hickory = (function hickory$convert$hiccup_to_hickory(hiccup_forms){
return hickory.core.as_hickory(hickory.core.parse(hickory.render.hiccup_to_html(hiccup_forms)));
});
/**
 * Given a sequence of hiccup forms representing a document fragment,
 * returns an equivalent sequence of hickory fragments.
 * 
 * Note that this function is heavyweight: it requires a full HTML
 * re-parse to work.
 */
hickory.convert.hiccup_fragment_to_hickory = (function hickory$convert$hiccup_fragment_to_hickory(hiccup_forms){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,hickory.core.parse_fragment(hickory.render.hiccup_to_html(hiccup_forms)));
});
/**
 * Given a hickory format dom object, returns an equivalent hiccup
 * representation. This can be done directly and exactly, but in general
 * you will not be able to go back from the hiccup.
 */
hickory.convert.hickory_to_hiccup = (function hickory$convert$hickory_to_hiccup(dom){
if(typeof dom === 'string'){
return hickory.utils.html_escape(dom);
} else {
var G__44245 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dom);
var G__44245__$1 = (((G__44245 instanceof cljs.core.Keyword))?G__44245.fqn:null);
switch (G__44245__$1) {
case "document":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hickory.convert.hickory_to_hiccup,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom));

break;
case "document-type":
return hickory.utils.render_doctype(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"name","name",1843675177)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"publicid","publicid",1557995850)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"systemid","systemid",-2052878192)], null)));

break;
case "element":
if(cljs.core.truth_((function (){var G__44246 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom);
return (hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(G__44246) : hickory.utils.unescapable_content.call(null,G__44246));
})())){
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("An unescapable content tag had non-string children.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-location","error-location",540097671),dom], null));
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.convert.hickory_to_hiccup,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom)));
}

break;
case "comment":
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))),"-->"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44245__$1)].join('')));

}
}
});

//# sourceMappingURL=hickory.convert.js.map
