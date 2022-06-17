goog.provide('hickory.render');
/**
 * Given a map entry m, representing the attribute name and value, returns a
 * string representing that key/value pair as it would be rendered into HTML.
 */
hickory.render.render_hickory_attribute = (function hickory$render$render_hickory_attribute(m){
return [" ",cljs.core.name(cljs.core.key(m)),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hickory.utils.html_escape(cljs.core.val(m))),"\""].join('');
});
/**
 * Given a hickory HTML DOM map structure (as returned by as-hickory), returns a
 * string containing HTML it represents. Keep in mind this function is not super
 * fast or heavy-duty.
 * 
 * Note that it will NOT in general be the case that
 * 
 *   (= my-html-src (hickory-to-html (as-hickory (parse my-html-src))))
 * 
 * as we do not keep any letter case or whitespace information, any
 * "tag-soupy" elements, attribute quote characters used, etc.
 */
hickory.render.hickory_to_html = (function hickory$render$hickory_to_html(dom){
if(typeof dom === 'string'){
return hickory.utils.html_escape(dom);
} else {
try{var G__44225 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(dom);
var G__44225__$1 = (((G__44225 instanceof cljs.core.Keyword))?G__44225.fqn:null);
switch (G__44225__$1) {
case "document":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.hickory_to_html,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom)));

break;
case "document-type":
return hickory.utils.render_doctype(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"name","name",1843675177)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"publicid","publicid",1557995850)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"systemid","systemid",-2052878192)], null)));

break;
case "element":
if(cljs.core.truth_((function (){var G__44226 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom);
return (hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1(G__44226) : hickory.utils.void_element.call(null,G__44226));
})())){
return ["<",cljs.core.name(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),">"].join('');
} else {
if(cljs.core.truth_((function (){var G__44227 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom);
return (hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(G__44227) : hickory.utils.unescapable_content.call(null,G__44227));
})())){
return ["<",cljs.core.name(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))),"</",cljs.core.name(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)),">"].join('');
} else {
return ["<",cljs.core.name(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.render_hickory_attribute,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(dom)))),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.render.hickory_to_html,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom)))),"</",cljs.core.name(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(dom)),">"].join('');

}
}

break;
case "comment":
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dom))),"-->"].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44225__$1)].join('')));

}
}catch (e44224){if((e44224 instanceof Error)){
var e = e44224;
throw (cljs.core.truth_(hickory.utils.starts_with((e["message"]),"No matching clause: "))?cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not a valid node: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",-1236537922),dom], null)):e);
} else {
throw e44224;

}
}}
});
/**
 * Given a hiccup attribute map, returns a string containing the attributes
 * rendered as they should appear in an HTML tag, right after the tag (including
 * a leading space to separate from the tag, if any attributes present).
 */
hickory.render.render_hiccup_attrs = (function hickory$render$render_hiccup_attrs(attrs){
var attrs_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44228_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__44228_SHARP_)));
}),(function (){var iter__4652__auto__ = (function hickory$render$render_hiccup_attrs_$_iter__44229(s__44230){
return (new cljs.core.LazySeq(null,(function (){
var s__44230__$1 = s__44230;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44230__$1);
if(temp__5753__auto__){
var s__44230__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44230__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__44230__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__44232 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__44231 = (0);
while(true){
if((i__44231 < size__4651__auto__)){
var vec__44233 = cljs.core._nth(c__4650__auto__,i__44231);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44233,(1),null);
cljs.core.chunk_append(b__44232,((v === true)?cljs.core.name(k):(((v == null))?"":[cljs.core.name(k),"=","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hickory.utils.html_escape(v)),"\""].join('')
)));

var G__44244 = (i__44231 + (1));
i__44231 = G__44244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44232),hickory$render$render_hiccup_attrs_$_iter__44229(cljs.core.chunk_rest(s__44230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44232),null);
}
} else {
var vec__44236 = cljs.core.first(s__44230__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44236,(1),null);
return cljs.core.cons(((v === true)?cljs.core.name(k):(((v == null))?"":[cljs.core.name(k),"=","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hickory.utils.html_escape(v)),"\""].join('')
)),hickory$render$render_hiccup_attrs_$_iter__44229(cljs.core.rest(s__44230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(attrs);
})())));
if((!(cljs.core.empty_QMARK_(attrs_str)))){
return [" ",attrs_str].join('');
} else {
return attrs_str;
}
});
/**
 * Given a normalized hiccup element (such as the output of
 * hickory.hiccup-utils/normalize-form; see this function's docstring
 * for more detailed definition of a normalized hiccup element), renders
 * it to HTML and returns it as a string.
 */
hickory.render.render_hiccup_element = (function hickory$render$render_hiccup_element(n_element){
var vec__44239 = n_element;
var seq__44240 = cljs.core.seq(vec__44239);
var first__44241 = cljs.core.first(seq__44240);
var seq__44240__$1 = cljs.core.next(seq__44240);
var tag = first__44241;
var first__44241__$1 = cljs.core.first(seq__44240__$1);
var seq__44240__$2 = cljs.core.next(seq__44240__$1);
var attrs = first__44241__$1;
var content = seq__44240__$2;
if(cljs.core.truth_((hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.void_element.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.void_element.call(null,tag)))){
return ["<",cljs.core.name(tag),hickory.render.render_hiccup_attrs(attrs),">"].join('');
} else {
return ["<",cljs.core.name(tag),hickory.render.render_hiccup_attrs(attrs),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((hickory.render.hiccup_to_html.cljs$core$IFn$_invoke$arity$1 ? hickory.render.hiccup_to_html.cljs$core$IFn$_invoke$arity$1(content) : hickory.render.hiccup_to_html.call(null,content))),"</",cljs.core.name(tag),">"].join('');
}
});
/**
 * Given a normalized hiccup form (such as the output of
 * hickory.hiccup-utils/normalize-form; see this function's docstring
 * for more detailed definition of a normalized hiccup form), renders
 * it to HTML and returns it as a string.
 */
hickory.render.render_hiccup_form = (function hickory$render$render_hiccup_form(n_form){
if(cljs.core.vector_QMARK_(n_form)){
return hickory.render.render_hiccup_element(n_form);
} else {
return n_form;
}
});
/**
 * Given a sequence of hiccup forms (as returned by as-hiccup), returns a
 * string containing HTML it represents. Keep in mind this function is not super
 * fast or heavy-duty, and definitely not a replacement for dedicated hiccup
 * renderers, like hiccup itself, which *is* fast and heavy-duty.
 * 
 * ```klipse
 *   (hiccup-to-html '([:html {} [:head {}] [:body {} [:a {} "foo"]]]))
 * ```
 * 
 * Note that it will NOT in general be the case that
 * 
 *   (= my-html-src (hiccup-to-html (as-hiccup (parse my-html-src))))
 * 
 * as we do not keep any letter case or whitespace information, any
 * "tag-soupy" elements, attribute quote characters used, etc. It will also
 * not generally be the case that this function's output will exactly match
 * hiccup's.
 * For instance:
 * 
 * ```klipse
 * (hiccup-to-html (as-hiccup (parse "<A href=\"foo\">foo</A>")))
 * ```
 *   
 */
hickory.render.hiccup_to_html = (function hickory$render$hiccup_to_html(hiccup_forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44242_SHARP_){
return hickory.render.render_hiccup_form(hickory.hiccup_utils.normalize_form(p1__44242_SHARP_));
}),hiccup_forms));
});

//# sourceMappingURL=hickory.render.js.map
