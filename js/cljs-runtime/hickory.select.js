goog.provide('hickory.select');
/**
 * Calls f on val until pred called on the result is true. If not, it
 * repeats by calling f on the result, etc. The value that made pred
 * return true is returned.
 */
hickory.select.until = (function hickory$select$until(f,val,pred){
while(true){
var next_val = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(next_val) : pred.call(null,next_val)))){
return next_val;
} else {
var G__34229 = f;
var G__34230 = next_val;
var G__34231 = pred;
f = G__34229;
val = G__34230;
pred = G__34231;
continue;
}
break;
}
});
/**
 * Calls f on val until pred called on the result is true. If not, it
 * repeats by calling f on the result, etc. The count of times this
 * process was repeated until pred returned true is returned.
 */
hickory.select.count_until = (function hickory$select$count_until(f,val,pred){
var next_val = val;
var cnt = (0);
while(true){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(next_val) : pred.call(null,next_val)))){
return cnt;
} else {
var G__34232 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(next_val) : f.call(null,next_val));
var G__34233 = (cnt + (1));
next_val = G__34232;
cnt = G__34233;
continue;
}
break;
}
});
/**
 * Like clojure.zip/next, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the end.
 */
hickory.select.next_pred = (function hickory$select$next_pred(hzip_loc,pred){
return hickory.select.until(clojure.zip.next,hzip_loc,(function (p1__34175_SHARP_){
var or__4253__auto__ = clojure.zip.end_QMARK_(p1__34175_SHARP_);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__34175_SHARP_) : pred.call(null,p1__34175_SHARP_));
}
}));
});
/**
 * Like clojure.zip/prev, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the beginning.
 */
hickory.select.prev_pred = (function hickory$select$prev_pred(hzip_loc,pred){
return hickory.select.until(clojure.zip.prev,hzip_loc,(function (p1__34176_SHARP_){
var or__4253__auto__ = (p1__34176_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__34176_SHARP_) : pred.call(null,p1__34176_SHARP_));
}
}));
});
/**
 * Like clojure.zip/left, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the left boundary of the current group of siblings.
 */
hickory.select.left_pred = (function hickory$select$left_pred(hzip_loc,pred){
return hickory.select.until(clojure.zip.left,hzip_loc,(function (p1__34177_SHARP_){
var or__4253__auto__ = (p1__34177_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__34177_SHARP_) : pred.call(null,p1__34177_SHARP_));
}
}));
});
/**
 * Like clojure.zip/right, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the right boundary of the current group of siblings.
 */
hickory.select.right_pred = (function hickory$select$right_pred(hzip_loc,pred){
return hickory.select.until(clojure.zip.right,hzip_loc,(function (p1__34178_SHARP_){
var or__4253__auto__ = (p1__34178_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__34178_SHARP_) : pred.call(null,p1__34178_SHARP_));
}
}));
});
/**
 * Like clojure.zip/up, but moves until it reaches a node that returns
 * true when the function in the pred argument is called on them, or reaches
 * the beginning.
 */
hickory.select.up_pred = (function hickory$select$up_pred(hzip_loc,pred){
return hickory.select.until(clojure.zip.up,hzip_loc,(function (p1__34179_SHARP_){
var or__4253__auto__ = (p1__34179_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__34179_SHARP_) : pred.call(null,p1__34179_SHARP_));
}
}));
});
/**
 * Like clojure.zip/next, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.next_of_node_type = (function hickory$select$next_of_node_type(hzip_loc,node_type){
return hickory.select.next_pred(hzip_loc,(function (p1__34180_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(p1__34180_SHARP_)));
}));
});
/**
 * Like clojure.zip/prev, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.prev_of_node_type = (function hickory$select$prev_of_node_type(hzip_loc,node_type){
return hickory.select.prev_pred(hzip_loc,(function (p1__34181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(p1__34181_SHARP_)));
}));
});
/**
 * Like clojure.zip/left, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.left_of_node_type = (function hickory$select$left_of_node_type(hzip_loc,node_type){
return hickory.select.left_pred(hzip_loc,(function (p1__34182_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(p1__34182_SHARP_)));
}));
});
/**
 * Like clojure.zip/right, but only counts moves to nodes that have
 * the given type.
 */
hickory.select.right_of_node_type = (function hickory$select$right_of_node_type(hzip_loc,node_type){
return hickory.select.right_pred(hzip_loc,(function (p1__34183_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(p1__34183_SHARP_)));
}));
});
/**
 * Given a zipper loc, returns the zipper loc that is the first one after
 * the arg's subtree, if there is a subtree. If there is no loc after this
 * loc's subtree, returns the end node.
 */
hickory.select.after_subtree = (function hickory$select$after_subtree(zip_loc){
if(clojure.zip.end_QMARK_(zip_loc)){
return zip_loc;
} else {
var or__4253__auto__ = clojure.zip.right(zip_loc);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var curr_loc = zip_loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(curr_loc))){
var or__4253__auto____$1 = clojure.zip.right(clojure.zip.up(curr_loc));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var G__34234 = clojure.zip.up(curr_loc);
curr_loc = G__34234;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(curr_loc),new cljs.core.Keyword(null,"end","end",-268185958)], null);
}
break;
}
}
}
});
/**
 * Given a selector function and a loc inside a hickory zip data structure,
 * returns the next zipper loc that satisfies the selection function. This can
 * be the loc that is passed in, so be sure to move to the next loc if you
 * want to use this function to exhaustively search through a tree manually.
 * Note that if there is no next node that satisfies the selection function, nil
 * is returned.
 * 
 * The third argument, if present, must be a function of one argument that is
 * called on a zipper loc to return the next loc to consider in the search. By
 * default, this argument is zip/next. The fourth argument, if present, must be
 * a function of one argument that is called on a zipper loc to determine if
 * the end of the search has been reached (true return value). When the fourth
 * argument returns true on a loc, that loc is not considered in the search and
 * the search finishes with a nil return. By default, the fourth argument is
 * zip/end?.
 */
hickory.select.select_next_loc = (function hickory$select$select_next_loc(var_args){
var G__34185 = arguments.length;
switch (G__34185) {
case 2:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2 = (function (selector_fn,hzip_loc){
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$3(selector_fn,hzip_loc,clojure.zip.next);
}));

(hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$3 = (function (selector_fn,hzip_loc,next_fn){
return hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4(selector_fn,hzip_loc,next_fn,clojure.zip.end_QMARK_);
}));

(hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4 = (function (selector_fn,hzip_loc,next_fn,end_QMARK__fn){
var loc = hzip_loc;
while(true){
if(cljs.core.truth_((end_QMARK__fn.cljs$core$IFn$_invoke$arity$1 ? end_QMARK__fn.cljs$core$IFn$_invoke$arity$1(loc) : end_QMARK__fn.call(null,loc)))){
return null;
} else {
if(cljs.core.truth_((selector_fn.cljs$core$IFn$_invoke$arity$1 ? selector_fn.cljs$core$IFn$_invoke$arity$1(loc) : selector_fn.call(null,loc)))){
return loc;
} else {
var G__34236 = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(loc) : next_fn.call(null,loc));
loc = G__34236;
continue;
}
}
break;
}
}));

(hickory.select.select_next_loc.cljs$lang$maxFixedArity = 4);

/**
 * Given a selector function and a hickory data structure, returns a vector
 * containing all of the zipper locs selected by the selector function.
 */
hickory.select.select_locs = (function hickory$select$select_locs(selector_fn,hickory_tree){
var loc = hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2(selector_fn,hickory.zip.hickory_zip(hickory_tree));
var selected_nodes = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((loc == null)){
return cljs.core.persistent_BANG_(selected_nodes);
} else {
var G__34238 = hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$2(selector_fn,clojure.zip.next(loc));
var G__34239 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(selected_nodes,loc);
loc = G__34238;
selected_nodes = G__34239;
continue;
}
break;
}
});
/**
 * Given a selector function and a hickory data structure, returns a vector
 * containing all of the hickory nodes selected by the selector function.
 */
hickory.select.select = (function hickory$select$select(selector_fn,hickory_tree){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.zip.node,hickory.select.select_locs(selector_fn,hickory_tree));
});
/**
 * Return a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given node type. The type
 * argument can be a String or Named (keyword, symbol). The node type
 * comparison is done case-insensitively.
 */
hickory.select.node_type = (function hickory$select$node_type(type){
return (function (hzip_loc){
var node = clojure.zip.node(hzip_loc);
var node_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__4251__auto__ = node_type;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(cljs.core.name(node_type)),clojure.string.lower_case(cljs.core.name(type)));
} else {
return and__4251__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Return a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given tag. The tag argument can be
 * a String or Named (keyword, symbol). The tag name comparison
 * is done case-insensitively.
 */
hickory.select.tag = (function hickory$select$tag(tag){
return (function (hzip_loc){
var node = clojure.zip.node(hzip_loc);
var node_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_((function (){var and__4251__auto__ = node_tag;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(cljs.core.name(node_tag)),clojure.string.lower_case(cljs.core.name(tag)));
} else {
return and__4251__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given attribute, and that attribute
 * optionally satisfies a predicate given as an additional argument. With
 * a single argument, the attribute name (a string, keyword, or symbol),
 * the function returned will return the zip-loc if that attribute is
 * present (and has any value) on the zip-loc's node. The attribute name
 * will be compared case-insensitively, but the attribute value (if present),
 * will be passed as-is to the predicate.
 * 
 * If the predicate argument is given, it will only return the zip-loc if
 * that predicate is satisfied when given the attribute's value as its only
 * argument. Note that the predicate only gets called when the attribute is
 * present, so it can assume its argument is not nil.
 */
hickory.select.attr = (function hickory$select$attr(var_args){
var G__34187 = arguments.length;
switch (G__34187) {
case 1:
return hickory.select.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return hickory.select.attr.cljs$core$IFn$_invoke$arity$2(attr_name,(function (_){
return true;
}));
}));

(hickory.select.attr.cljs$core$IFn$_invoke$arity$2 = (function (attr_name,predicate){
return (function (hzip_loc){
var node = clojure.zip.node(hzip_loc);
var attr_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(attr_name)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node),attr_key);
if(and__4251__auto__){
var G__34188 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attr_key], null));
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(G__34188) : predicate.call(null,G__34188));
} else {
return and__4251__auto__;
}
})())){
return hzip_loc;
} else {
return null;
}
});
}));

(hickory.select.attr.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given id. The id argument can be
 * a String or Named (keyword, symbol). The id name comparison
 * is done case-insensitively.
 */
hickory.select.id = (function hickory$select$id(id){
return hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),(function (p1__34189_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(p1__34189_SHARP_),clojure.string.lower_case(cljs.core.name(id)));
}));
});
/**
 * Returns a function that takes a zip-loc argument and returns the
 * zip-loc passed in iff it has the given class. The class argument can
 * be a String or Named (keyword, symbol). The class name comparison
 * is done case-insensitively.
 */
hickory.select.class$ = (function hickory$select$class(class_name){
var parse_classes = (function hickory$select$class_$_parse_classes(class_str){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(class_str,/ /)));
});
return hickory.select.attr.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__34190_SHARP_){
return cljs.core.contains_QMARK_(parse_classes(p1__34190_SHARP_),clojure.string.lower_case(cljs.core.name(class_name)));
}));
});
/**
 * This selector takes no args, it simply is the selector function. It returns
 * true on any element it is called on; corresponds to the CSS '*' selector.
 */
hickory.select.any = (function hickory$select$any(hzip_loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
 * Another name for the any selector, to express that it can be used to only
 * select elements.
 */
hickory.select.element = hickory.select.any;
/**
 * This selector takes no args, it simply is the selector function. It returns
 * the zip-loc passed in iff that loc is an element, and it has a parent
 * that is also an element.
 */
hickory.select.element_child = (function hickory$select$element_child(hzip_loc){
var possible_parent = clojure.zip.up(hzip_loc);
var and__4251__auto__ = (hickory.select.element.cljs$core$IFn$_invoke$arity$1 ? hickory.select.element.cljs$core$IFn$_invoke$arity$1(hzip_loc) : hickory.select.element.call(null,hzip_loc));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = possible_parent;
if(cljs.core.truth_(and__4251__auto____$1)){
return (hickory.select.element.cljs$core$IFn$_invoke$arity$1 ? hickory.select.element.cljs$core$IFn$_invoke$arity$1(possible_parent) : hickory.select.element.call(null,possible_parent));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
/**
 * This selector takes no args, it simply is the selector function. It returns
 * the zip-loc of the root node (the HTML element).
 */
hickory.select.root = (function hickory$select$root(hzip_loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
/**
 * Returns a function that takes a zip-loc argument and returns the zip-loc
 * passed in iff it has some text node in its contents that matches the regular
 * expression. Note that this only applies to the direct text content of a node;
 * nodes which have the given text in one of their child nodes will not be
 * selected.
 */
hickory.select.find_in_text = (function hickory$select$find_in_text(re){
return (function (hzip_loc){
return cljs.core.some((function (p1__34191_SHARP_){
return cljs.core.re_find(re,p1__34191_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(hzip_loc))));
});
});
/**
 * This selector returns a selector function that selects its argument if
 * that argument is some "distance" from a "boundary." This is an abstract
 * way of phrasing it, but it captures the full generality.
 * 
 * The selector this function returns will apply the move argument to its own
 * output, beginning with its zipper loc argument, until the term-pred argument
 * called on its output returns true. At that point, the number of times the
 * move function was called successfully is compared to kn+c; if there exists
 * some value of k such that the two quantities are equal, then the selector
 * will return the argument zipper loc successfully.
 * 
 * For example, (n-moves-until 2 1 clojure.zip/left nil?) will return a selector
 * that calls zip/left on its own output, beginning with the argument zipper
 * loc, until its return value is nil (nil? returns true). Suppose it called
 * left 5 times before zip/left returned nil. Then the selector will return
 * with success, since 2k+1 = 5 for k = 2.
 * 
 * Most nth-child-* selectors in this package use n-moves-until in their
 * implementation.
 */
hickory.select.n_moves_until = (function hickory$select$n_moves_until(n,c,move,term_pred){
return (function (hzip_loc){
var distance = hickory.select.count_until(move,hzip_loc,term_pred);
if(((0) === n)){
if((distance === c)){
return hzip_loc;
} else {
return null;
}
} else {
if(((0) === cljs.core.rem((distance - c),n))){
return hzip_loc;
} else {
return null;
}
}
});
});
/**
 * Returns a function that returns true if the node is the nth child of
 * its parent (and it has a parent) of the given tag type. First element is 1,
 * last is n.
 */
hickory.select.nth_of_type = (function hickory$select$nth_of_type(var_args){
var G__34194 = arguments.length;
switch (G__34194) {
case 2:
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (c,typ){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3((2),(1),typ);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3((2),(0),typ);
} else {
return hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3((0),c,typ);

}
}
}));

(hickory.select.nth_of_type.cljs$core$IFn$_invoke$arity$3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__4251__auto__ = hickory.select.element_child(hzip_loc);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(hzip_loc)));
} else {
return and__4251__auto__;
}
})())){
var sel = hickory.select.n_moves_until(n,c,(function (p1__34192_SHARP_){
return hickory.select.left_pred(p1__34192_SHARP_,(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel(hzip_loc);
} else {
return null;
}
});
}));

(hickory.select.nth_of_type.cljs$lang$maxFixedArity = 3);

/**
 * Returns a function that returns true if the node is the nth last child of
 * its parent (and it has a parent) of the given tag type. First element is 1,
 * last is n.
 */
hickory.select.nth_last_of_type = (function hickory$select$nth_last_of_type(var_args){
var G__34197 = arguments.length;
switch (G__34197) {
case 2:
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (c,typ){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3((2),(1),typ);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3((2),(0),typ);
} else {
return hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3((0),c,typ);

}
}
}));

(hickory.select.nth_last_of_type.cljs$core$IFn$_invoke$arity$3 = (function (n,c,typ){
return (function (hzip_loc){
if(cljs.core.truth_((function (){var and__4251__auto__ = hickory.select.element_child(hzip_loc);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(typ,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(hzip_loc)));
} else {
return and__4251__auto__;
}
})())){
var sel = hickory.select.n_moves_until(n,c,(function (p1__34195_SHARP_){
return hickory.select.right_pred(p1__34195_SHARP_,(function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(x)),typ);
}));
}),cljs.core.nil_QMARK_);
return sel(hzip_loc);
} else {
return null;
}
});
}));

(hickory.select.nth_last_of_type.cljs$lang$maxFixedArity = 3);

/**
 * Returns a function that returns true if the node is the nth child of
 * its parent (and it has a parent). First element is 1, last is n.
 */
hickory.select.nth_child = (function hickory$select$nth_child(var_args){
var G__34200 = arguments.length;
switch (G__34200) {
case 1:
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2((2),(1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2((2),(0));
} else {
return hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2((0),c);

}
}
}));

(hickory.select.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child(hzip_loc))){
var sel = hickory.select.n_moves_until(n,c,(function (p1__34198_SHARP_){
return hickory.select.left_of_node_type(p1__34198_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel(hzip_loc);
} else {
return null;
}
});
}));

(hickory.select.nth_child.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function that returns true if the node has n siblings after it,
 * and has a parent.
 */
hickory.select.nth_last_child = (function hickory$select$nth_last_child(var_args){
var G__34203 = arguments.length;
switch (G__34203) {
case 1:
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"odd","odd",-1213409872),c)){
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2((2),(1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"even","even",-275845692),c)){
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2((2),(0));
} else {
return hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2((0),c);

}
}
}));

(hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (n,c){
return (function (hzip_loc){
if(cljs.core.truth_(hickory.select.element_child(hzip_loc))){
var sel = hickory.select.n_moves_until(n,c,(function (p1__34201_SHARP_){
return hickory.select.right_of_node_type(p1__34201_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.nil_QMARK_);
return sel(hzip_loc);
} else {
return null;
}
});
}));

(hickory.select.nth_last_child.cljs$lang$maxFixedArity = 2);

/**
 * This selector takes no args, it is simply the selector. Returns
 * true if the node is the first child of its parent (and it has a
 * parent).
 */
hickory.select.first_child = (function hickory$select$first_child(hzip_loc){
var and__4251__auto__ = hickory.select.element_child(hzip_loc);
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__34204 = hickory.select.nth_child.cljs$core$IFn$_invoke$arity$1((1));
return (fexpr__34204.cljs$core$IFn$_invoke$arity$1 ? fexpr__34204.cljs$core$IFn$_invoke$arity$1(hzip_loc) : fexpr__34204.call(null,hzip_loc));
} else {
return and__4251__auto__;
}
});
/**
 * This selector takes no args, it is simply the selector. Returns
 * true if the node is the last child of its parent (and it has a
 * parent.
 */
hickory.select.last_child = (function hickory$select$last_child(hzip_loc){
var and__4251__auto__ = hickory.select.element_child(hzip_loc);
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__34205 = hickory.select.nth_last_child.cljs$core$IFn$_invoke$arity$1((1));
return (fexpr__34205.cljs$core$IFn$_invoke$arity$1 ? fexpr__34205.cljs$core$IFn$_invoke$arity$1(hzip_loc) : fexpr__34205.call(null,hzip_loc));
} else {
return and__4251__auto__;
}
});
/**
 * Takes any number of selectors and returns a selector that is true if
 * all of the argument selectors are true.
 */
hickory.select.and = (function hickory$select$and(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34253 = arguments.length;
var i__4865__auto___34254 = (0);
while(true){
if((i__4865__auto___34254 < len__4864__auto___34253)){
args__4870__auto__.push((arguments[i__4865__auto___34254]));

var G__34255 = (i__4865__auto___34254 + (1));
i__4865__auto___34254 = G__34255;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.and.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (zip_loc){
if(cljs.core.every_QMARK_((function (p1__34206_SHARP_){
return (p1__34206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34206_SHARP_.cljs$core$IFn$_invoke$arity$1(zip_loc) : p1__34206_SHARP_.call(null,zip_loc));
}),selectors)){
return zip_loc;
} else {
return null;
}
});
}));

(hickory.select.and.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.and.cljs$lang$applyTo = (function (seq34207){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34207));
}));

/**
 * Takes any number of selectors and returns a selector that is true if
 * any of the argument selectors are true.
 */
hickory.select.or = (function hickory$select$or(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34256 = arguments.length;
var i__4865__auto___34257 = (0);
while(true){
if((i__4865__auto___34257 < len__4864__auto___34256)){
args__4870__auto__.push((arguments[i__4865__auto___34257]));

var G__34258 = (i__4865__auto___34257 + (1));
i__4865__auto___34257 = G__34258;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.or.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.or.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (zip_loc){
if(cljs.core.truth_(cljs.core.some((function (p1__34208_SHARP_){
return (p1__34208_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34208_SHARP_.cljs$core$IFn$_invoke$arity$1(zip_loc) : p1__34208_SHARP_.call(null,zip_loc));
}),selectors))){
return zip_loc;
} else {
return null;
}
});
}));

(hickory.select.or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.or.cljs$lang$applyTo = (function (seq34209){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34209));
}));

/**
 * Takes a selector argument and returns a selector that is true if
 * the underlying selector is false on its argument, and vice versa.
 */
hickory.select.not = (function hickory$select$not(selector){
return (function (hzip_loc){
if(cljs.core.not((selector.cljs$core$IFn$_invoke$arity$1 ? selector.cljs$core$IFn$_invoke$arity$1(hzip_loc) : selector.call(null,hzip_loc)))){
return hzip_loc;
} else {
return null;
}
});
});
/**
 * Takes a selector argument and returns a selector that is true if
 * the underlying selector is false on its argument and vice versa, and
 * additionally that argument is an element node. Compared to the 'not'
 * selector, this corresponds more closely to the CSS equivalent, which
 * will only ever select elements.
 */
hickory.select.el_not = (function hickory$select$el_not(selector){
return hickory.select.and.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hickory.select.node_type(new cljs.core.Keyword(null,"element","element",1974019749)),hickory.select.not(selector)], 0));
});
/**
 * Takes a zipper movement function and any number of selectors as arguments
 * and returns a selector that returns true when the zip-loc given as the
 * argument is satisfied by the first selector, and the zip-loc arrived at by
 * applying the move-fn argument is satisfied by the second selector, and so
 * on for all the selectors given as arguments. If the move-fn
 * moves to nil before the full selector list is satisfied, the entire
 * selector fails, but note that success is checked before a move to nil is
 * checked, so satisfying the last selector with the last node you can move
 * to succeeds.
 */
hickory.select.ordered_adjacent = (function hickory$select$ordered_adjacent(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34262 = arguments.length;
var i__4865__auto___34263 = (0);
while(true){
if((i__4865__auto___34263 < len__4864__auto___34262)){
args__4870__auto__.push((arguments[i__4865__auto___34263]));

var G__34264 = (i__4865__auto___34263 + (1));
i__4865__auto___34263 = G__34264;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return hickory.select.ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(hickory.select.ordered_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(cljs.core.IFn,selectors);
return (function (hzip_loc){
var curr_loc = hzip_loc;
var idx = (0);
while(true){
if((idx >= cljs.core.count(selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
var temp__5751__auto__ = (function (){var fexpr__34212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(selectors__$1,idx);
return (fexpr__34212.cljs$core$IFn$_invoke$arity$1 ? fexpr__34212.cljs$core$IFn$_invoke$arity$1(curr_loc) : fexpr__34212.call(null,curr_loc));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_loc = temp__5751__auto__;
var G__34266 = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(next_loc) : move_fn.call(null,next_loc));
var G__34267 = (idx + (1));
curr_loc = G__34266;
idx = G__34267;
continue;
} else {
return null;
}

}
}
break;
}
});
}));

(hickory.select.ordered_adjacent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hickory.select.ordered_adjacent.cljs$lang$applyTo = (function (seq34210){
var G__34211 = cljs.core.first(seq34210);
var seq34210__$1 = cljs.core.next(seq34210);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34211,seq34210__$1);
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of direct child relationships specified by the selectors given as
 * arguments.
 * 
 * Example: (child (tag :div) (class :foo) (attr :disabled))
 *   will select the input in
 * <div><span class="foo"><input disabled></input></span></div>
 *   but not in
 * <div><span class="foo"><b><input disabled></input></b></span></div>
 */
hickory.select.child = (function hickory$select$child(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34271 = arguments.length;
var i__4865__auto___34272 = (0);
while(true){
if((i__4865__auto___34272 < len__4864__auto___34271)){
args__4870__auto__.push((arguments[i__4865__auto___34272]));

var G__34273 = (i__4865__auto___34272 + (1));
i__4865__auto___34272 = G__34273;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.child.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.child.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered_adjacent,clojure.zip.up,cljs.core.reverse(selectors));
}));

(hickory.select.child.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.child.cljs$lang$applyTo = (function (seq34213){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34213));
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of direct element sibling relationships specified by the selectors
 * given as arguments.
 * 
 * Example: (follow-adjacent (tag :div) (class :foo))
 *   will select the span in
 * <div>...</div><span class="foo">...</span>
 *   but not in
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.follow_adjacent = (function hickory$select$follow_adjacent(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34274 = arguments.length;
var i__4865__auto___34275 = (0);
while(true){
if((i__4865__auto___34275 < len__4864__auto___34274)){
args__4870__auto__.push((arguments[i__4865__auto___34275]));

var G__34276 = (i__4865__auto___34275 + (1));
i__4865__auto___34275 = G__34276;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.follow_adjacent.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.follow_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered_adjacent,(function (p1__34214_SHARP_){
return hickory.select.left_of_node_type(p1__34214_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse(selectors));
}));

(hickory.select.follow_adjacent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.follow_adjacent.cljs$lang$applyTo = (function (seq34215){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34215));
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the beginning of
 * a chain of direct element sibling relationships specified by the selectors
 * given as arguments.
 * 
 * Example: (precede-adjacent (tag :div) (class :foo))
 *   will select the div in
 * <div>...</div><span class="foo">...</span>
 *   but not in
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.precede_adjacent = (function hickory$select$precede_adjacent(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34277 = arguments.length;
var i__4865__auto___34278 = (0);
while(true){
if((i__4865__auto___34278 < len__4864__auto___34277)){
args__4870__auto__.push((arguments[i__4865__auto___34278]));

var G__34279 = (i__4865__auto___34278 + (1));
i__4865__auto___34278 = G__34279;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.precede_adjacent.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.precede_adjacent.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered_adjacent,(function (p1__34216_SHARP_){
return hickory.select.right_of_node_type(p1__34216_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
}));

(hickory.select.precede_adjacent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.precede_adjacent.cljs$lang$applyTo = (function (seq34217){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34217));
}));

/**
 * Takes a zipper movement function and any number of selectors as arguments
 * and returns a selector that returns true when the zip-loc given as the
 * argument is satisfied by the first selector, and some zip-loc arrived at by
 * applying the move-fn argument *one or more times* is satisfied by the second
 * selector, and so on for all the selectors given as arguments. If the move-fn
 * moves to nil before a the full selector list is satisfied, the entire
 * selector fails, but note that success is checked before a move to nil is
 * checked, so satisfying the last selector with the last node you can move
 * to succeeds.
 */
hickory.select.ordered = (function hickory$select$ordered(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34280 = arguments.length;
var i__4865__auto___34281 = (0);
while(true){
if((i__4865__auto___34281 < len__4864__auto___34280)){
args__4870__auto__.push((arguments[i__4865__auto___34281]));

var G__34282 = (i__4865__auto___34281 + (1));
i__4865__auto___34281 = G__34282;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return hickory.select.ordered.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(hickory.select.ordered.cljs$core$IFn$_invoke$arity$variadic = (function (move_fn,selectors){
var selectors__$1 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$2(cljs.core.IFn,selectors);
return (function (hzip_loc){
var fst_selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(selectors__$1,(0));
if(cljs.core.truth_((fst_selector.cljs$core$IFn$_invoke$arity$1 ? fst_selector.cljs$core$IFn$_invoke$arity$1(hzip_loc) : fst_selector.call(null,hzip_loc)))){
var curr_loc = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(hzip_loc) : move_fn.call(null,hzip_loc));
var idx = (1);
while(true){
if((idx >= cljs.core.count(selectors__$1))){
return hzip_loc;
} else {
if((curr_loc == null)){
return null;
} else {
if(cljs.core.truth_((function (){var fexpr__34221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(selectors__$1,idx);
return (fexpr__34221.cljs$core$IFn$_invoke$arity$1 ? fexpr__34221.cljs$core$IFn$_invoke$arity$1(curr_loc) : fexpr__34221.call(null,curr_loc));
})())){
var G__34286 = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(curr_loc) : move_fn.call(null,curr_loc));
var G__34287 = (idx + (1));
curr_loc = G__34286;
idx = G__34287;
continue;
} else {
var G__34288 = (move_fn.cljs$core$IFn$_invoke$arity$1 ? move_fn.cljs$core$IFn$_invoke$arity$1(curr_loc) : move_fn.call(null,curr_loc));
var G__34289 = idx;
curr_loc = G__34288;
idx = G__34289;
continue;
}

}
}
break;
}
} else {
return null;
}
});
}));

(hickory.select.ordered.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hickory.select.ordered.cljs$lang$applyTo = (function (seq34218){
var G__34219 = cljs.core.first(seq34218);
var seq34218__$1 = cljs.core.next(seq34218);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34219,seq34218__$1);
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of descendant relationships specified by the
 * selectors given as arguments. To be clear, the node selected matches
 * the final selector, but the previous selectors can match anywhere in
 * the node's ancestry, provided they match in the order they are given
 * as arguments, from top to bottom.
 * 
 * Example: (descendant (tag :div) (class :foo) (attr :disabled))
 *   will select the input in both
 * <div><span class="foo"><input disabled></input></span></div>
 *   and
 * <div><span class="foo"><b><input disabled></input></b></span></div>
 */
hickory.select.descendant = (function hickory$select$descendant(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34290 = arguments.length;
var i__4865__auto___34291 = (0);
while(true){
if((i__4865__auto___34291 < len__4864__auto___34290)){
args__4870__auto__.push((arguments[i__4865__auto___34291]));

var G__34292 = (i__4865__auto___34291 + (1));
i__4865__auto___34291 = G__34292;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered,clojure.zip.up,cljs.core.reverse(selectors));
}));

(hickory.select.descendant.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.descendant.cljs$lang$applyTo = (function (seq34222){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34222));
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the end of
 * a chain of element sibling relationships specified by the selectors
 * given as arguments; intervening elements that do not satisfy a selector
 * are simply ignored and do not prevent a match.
 * 
 * Example: (follow (tag :div) (class :foo))
 *   will select the span in both
 * <div>...</div><span class="foo">...</span>
 *   and
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.follow = (function hickory$select$follow(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34293 = arguments.length;
var i__4865__auto___34294 = (0);
while(true){
if((i__4865__auto___34294 < len__4864__auto___34293)){
args__4870__auto__.push((arguments[i__4865__auto___34294]));

var G__34295 = (i__4865__auto___34294 + (1));
i__4865__auto___34294 = G__34295;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.follow.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.follow.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered,(function (p1__34223_SHARP_){
return hickory.select.left_of_node_type(p1__34223_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),cljs.core.reverse(selectors));
}));

(hickory.select.follow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.follow.cljs$lang$applyTo = (function (seq34224){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34224));
}));

/**
 * Takes any number of selectors as arguments and returns a selector that
 * returns true when the zip-loc given as the argument is at the beginning of
 * a chain of element sibling relationships specified by the selectors
 * given as arguments; intervening elements that do not satisfy a selector
 * are simply ignored and do not prevent a match.
 * 
 * Example: (precede (tag :div) (class :foo))
 *   will select the div in both
 * <div>...</div><span class="foo">...</span>
 *   and
 * <div>...</div><b>...</b><span class="foo">...</span>
 */
hickory.select.precede = (function hickory$select$precede(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34296 = arguments.length;
var i__4865__auto___34297 = (0);
while(true){
if((i__4865__auto___34297 < len__4864__auto___34296)){
args__4870__auto__.push((arguments[i__4865__auto___34297]));

var G__34298 = (i__4865__auto___34297 + (1));
i__4865__auto___34297 = G__34298;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return hickory.select.precede.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(hickory.select.precede.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hickory.select.ordered,(function (p1__34225_SHARP_){
return hickory.select.right_of_node_type(p1__34225_SHARP_,new cljs.core.Keyword(null,"element","element",1974019749));
}),selectors);
}));

(hickory.select.precede.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hickory.select.precede.cljs$lang$applyTo = (function (seq34226){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34226));
}));

/**
 * Takes a selector as argument and returns a selector that returns true
 * when some descendant node of the zip-loc given as the argument satisfies
 * the selector.
 * 
 * Be aware that because this selector must do a full sub-tree search on
 * each node examined, it can have terrible performance. It's helpful if this is
 * a late clause in an `and`, to prevent it from even attempting to match
 * unless other criteria have been met first.
 * 
 * Example: (has-descendant (tag :div))
 *   will select the span and the outer div, but not the inner div, in
 * <span><div><div></div></div></span>
 */
hickory.select.has_descendant = (function hickory$select$has_descendant(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down(hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,subtree_start_loc);
if(has_children_QMARK_){
var subtree_end_loc = hickory.select.after_subtree(hzip_loc);
if(cljs.core.truth_(hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4(selector,subtree_start_loc,clojure.zip.next,(function (p1__34227_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__34227_SHARP_,subtree_end_loc);
})))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});
/**
 * Takes a selector as argument and returns a selector that returns true
 * when some direct child node of the zip-loc given as the argument satisfies
 * the selector.
 * 
 * Example: (has-child (tag :div))
 *   will select only the inner span in
 * <div><span><div></div></span></div>
 */
hickory.select.has_child = (function hickory$select$has_child(selector){
return (function (hzip_loc){
var subtree_start_loc = clojure.zip.down(hzip_loc);
var has_children_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,subtree_start_loc);
if(has_children_QMARK_){
if(cljs.core.truth_(hickory.select.select_next_loc.cljs$core$IFn$_invoke$arity$4(selector,subtree_start_loc,clojure.zip.right,(function (p1__34228_SHARP_){
return (p1__34228_SHARP_ == null);
})))){
return hzip_loc;
} else {
return null;
}
} else {
return null;
}
});
});

//# sourceMappingURL=hickory.select.js.map
