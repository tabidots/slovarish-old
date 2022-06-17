goog.provide('slovarish.frontend.wiki_scraper');
slovarish.frontend.wiki_scraper.wiki_fetch = (function slovarish$frontend$wiki_scraper$wiki_fetch(word,destination,status){
return fetch(["https://en.wiktionary.org/w/rest.php/v1/page/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/html"].join('')).then((function (r){
if(cljs.core.truth_(r.ok)){
} else {
throw (new Error(["Could not fetch Wiktionary page for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"."].join('')));
}

return r.text();
})).then((function (r){
var G__28559 = hickory.core.as_hickory(hickory.core.parse(r));
var G__28560 = destination;
var G__28561 = status;
return (slovarish.frontend.wiki_scraper.extract_lexical_info.cljs$core$IFn$_invoke$arity$3 ? slovarish.frontend.wiki_scraper.extract_lexical_info.cljs$core$IFn$_invoke$arity$3(G__28559,G__28560,G__28561) : slovarish.frontend.wiki_scraper.extract_lexical_info.call(null,G__28559,G__28560,G__28561));
})).catch((function (e){
cljs.core.reset_BANG_(status,null);

alert(["It looks like ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)," is not a word. ","Please check the spelling and try again."].join(''));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),e], null)], 0));
}));
});
slovarish.frontend.wiki_scraper.extract_lexical_info = (function slovarish$frontend$wiki_scraper$extract_lexical_info(wiki_data,destination,status){
var word = cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hickory.select.select(hickory.select.tag(new cljs.core.Keyword(null,"title","title",636505583)),wiki_data))));
var gender = (function (){var G__28568 = cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hickory.select.select(hickory.select.child.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.tag(new cljs.core.Keyword(null,"p","p",151049309)),hickory.select.has_child(hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p1__28562_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28562_SHARP_,"ru");
})))], 0)),hickory.select.class$("gender"),hickory.select.tag(new cljs.core.Keyword(null,"abbr","abbr",2088591884))], 0)),wiki_data))));
var fexpr__28567 = new cljs.core.PersistentArrayMap(null, 3, ["m",new cljs.core.Keyword(null,"masculine","masculine",-523682579),"f",new cljs.core.Keyword(null,"feminine","feminine",-223910280),"n",new cljs.core.Keyword(null,"neuter","neuter",-2013207957)], null);
return (fexpr__28567.cljs$core$IFn$_invoke$arity$1 ? fexpr__28567.cljs$core$IFn$_invoke$arity$1(G__28568) : fexpr__28567.call(null,G__28568));
})();
var stressed_headword = cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hickory.select.select(hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.class$("headword"),hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p1__28563_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28563_SHARP_,"ru");
}))], 0)),wiki_data))));
if(cljs.core.truth_(cljs.core.not_empty(hickory.select.select(hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"href","href",-793805698),(function (p1__28564_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28564_SHARP_,"./Appendix:Glossary#indeclinable");
})),wiki_data)))){
cljs.core.reset_BANG_(status,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(destination,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stressed-headword","stressed-headword",-673527941),stressed_headword,new cljs.core.Keyword(null,"indeclinable","indeclinable",1879418998),true,new cljs.core.Keyword(null,"gender","gender",-733930727),gender], null));
} else {
var temp__5755__auto__ = cljs.core.first(hickory.select.select(hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.class$("NavHead"),hickory.select.has_child(hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lang","lang",-1819677104),(function (p1__28565_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28565_SHARP_,"ru");
})))], 0)),wiki_data));
if((temp__5755__auto__ == null)){
cljs.core.reset_BANG_(status,null);

return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)," is not a noun in dictionary form."].join(''));
} else {
var target_node = temp__5755__auto__;
var lexical_info = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28566_SHARP_){
if(typeof p1__28566_SHARP_ === 'string'){
return p1__28566_SHARP_;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__28566_SHARP_));
}
}),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(hickory.select.select(hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.tag(new cljs.core.Keyword(null,"a","a",-2123407586))], 0)),target_node)))));
var surname_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" (surname)",cljs.core.last(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(target_node)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(destination,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stressed-headword","stressed-headword",-673527941),stressed_headword,new cljs.core.Keyword(null,"gender","gender",-733930727),gender,new cljs.core.Keyword(null,"surname","surname",1407918027),surname_QMARK_], null),(cljs.core.truth_(lexical_info)?new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"animate","animate",1850194573),((clojure.string.includes_QMARK_(lexical_info,"anim")) || (clojure.string.includes_QMARK_(lexical_info,"bian"))),new cljs.core.Keyword(null,"plural-only?","plural-only?",727015978),clojure.string.includes_QMARK_(lexical_info,"pl-only"),new cljs.core.Keyword(null,"gender","gender",-733930727),(cljs.core.truth_((function (){var and__4251__auto__ = clojure.string.includes_QMARK_(lexical_info,"pl-only");
if(and__4251__auto__){
return cljs.core.re_find(/[иы]$/,word);
} else {
return and__4251__auto__;
}
})())?new cljs.core.Keyword(null,"common","common",-1822281391):gender),new cljs.core.Keyword(null,"singular-only?","singular-only?",-995012104),clojure.string.includes_QMARK_(lexical_info,"sg-only"),new cljs.core.Keyword(null,"irregular?","irregular?",-216930077),clojure.string.includes_QMARK_(lexical_info,"irreg"),new cljs.core.Keyword(null,"fleeting-vowel?","fleeting-vowel?",-1638057330),clojure.string.includes_QMARK_(lexical_info,"reduc"),new cljs.core.Keyword(null,"stress-pattern","stress-pattern",933242495),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.second(cljs.core.re_find(/(?:accent-)([a-f]'*)/,lexical_info)),/'/,"*"))], null):null));

return cljs.core.reset_BANG_(status,true);
}
}
});

//# sourceMappingURL=slovarish.frontend.wiki_scraper.js.map
