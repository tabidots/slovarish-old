goog.provide('slovarish.frontend.state');
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.pos !== 'undefined')){
} else {
slovarish.frontend.state.pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"noun","noun",185846460));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.show_stress_QMARK_ !== 'undefined')){
} else {
slovarish.frontend.state.show_stress_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.input !== 'undefined')){
} else {
slovarish.frontend.state.input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.results !== 'undefined')){
} else {
slovarish.frontend.state.results = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.which_result_QMARK_ !== 'undefined')){
} else {
slovarish.frontend.state.which_result_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
slovarish.frontend.state.result = (function slovarish$frontend$state$result(){
if(cljs.core.truth_(cljs.core.deref(slovarish.frontend.state.results))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.results),cljs.core.deref(slovarish.frontend.state.which_result_QMARK_));
} else {
return null;
}
});
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.display_language !== 'undefined')){
} else {
slovarish.frontend.state.display_language = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"english","english",1087501909));
}
if((typeof slovarish !== 'undefined') && (typeof slovarish.frontend !== 'undefined') && (typeof slovarish.frontend.state !== 'undefined') && (typeof slovarish.frontend.state.which_verb_forms_QMARK_ !== 'undefined')){
} else {
slovarish.frontend.state.which_verb_forms_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main","main",-2117802661));
}

//# sourceMappingURL=slovarish.frontend.state.js.map
