goog.provide('slovarish.frontend.verbs.verb_view');
slovarish.frontend.verbs.verb_view.verb_type_names = new cljs.core.PersistentArrayMap(null, 5, ["indefinite",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\uD83D\uDD04",new cljs.core.Keyword(null,"full-name","full-name",408178550),"indefinite verb / \u0440\u0430\u0437\u043D\u043E\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0430\u0433\u043E\u043B"], null),"definite",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\u27A1\uFE0F",new cljs.core.Keyword(null,"full-name","full-name",408178550),"definite verb / \u043E\u0434\u043D\u043E\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0439 \u0433\u043B\u0430\u0433\u043E\u043B"], null),"imperfective",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\u23F3",new cljs.core.Keyword(null,"full-name","full-name",408178550),"imperfective verb / \u0433\u043B\u0430\u0433\u043E\u043B \u041D\u0421\u0412"], null),"perfective",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\uD83D\uDCCC",new cljs.core.Keyword(null,"full-name","full-name",408178550),"perfective verb / \u0433\u043B\u0430\u0433\u043E\u043B \u0421\u0412"], null),"biaspectual",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emoji","emoji",1031230144),"\u23F3\uD83D\uDCCC",new cljs.core.Keyword(null,"full-name","full-name",408178550),"biaspectual verb / \u0434\u0432\u0443\u0432\u0438\u0434\u043E\u0432\u043E\u0439 \u0433\u043B\u0430\u0433\u043E\u043B"], null)], null);
slovarish.frontend.verbs.verb_view.fleeting_vowel_indices = (function slovarish$frontend$verbs$verb_view$fleeting_vowel_indices(infinitive,ya,ty,on,my,vy,oni){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(infinitive,"\u043E\u043F\u0435\u0440\u0435\u0301\u0442\u044C\u0441\u044F")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753),(2),new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431),(2)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(infinitive,"\u0438\u0441\u043F\u0438\u0301\u0442\u044C")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753),null,new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431),(2)], null);
} else {
if(cljs.core.truth_((function (){var fexpr__1026116 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0440\u0430\u0441\u0442\u0435\u0440\u0435\u0301\u0442\u044C",null,"\u0440\u0430\u0441\u043F\u0435\u0440\u0435\u0301\u0442\u044C",null,"\u0440\u0430\u0441\u043F\u0438\u0301\u0442\u044C",null], null), null);
return (fexpr__1026116.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026116.cljs$core$IFn$_invoke$arity$1(infinitive) : fexpr__1026116.call(null,infinitive));
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753),null,new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431),(3)], null);
} else {
var temp__5753__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ya,ty,on,my,vy,oni], null)));
if(cljs.core.truth_(temp__5753__auto__)){
var conjugated = temp__5753__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$verb_view$fleeting_vowel_indices_$_iter__1026120(s__1026121){
return (new cljs.core.LazySeq(null,(function (){
var s__1026121__$1 = s__1026121;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__1026121__$1);
if(temp__5753__auto____$1){
var s__1026121__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__1026121__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026121__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026123 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026122 = (0);
while(true){
if((i__1026122 < size__4651__auto__)){
var vec__1026132 = cljs.core._nth(c__4650__auto__,i__1026122);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026132,(0),null);
var vec__1026135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026132,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026135,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026135,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026135,(2),null);
var a_SINGLEQUOTE_ = vec__1026135;
var vec__1026138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026132,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026138,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026138,(1),null);
var c4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026138,(2),null);
var b_SINGLEQUOTE_ = vec__1026138;
var a = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,a_SINGLEQUOTE_);
var b = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,b_SINGLEQUOTE_);
cljs.core.chunk_append(b__1026123,(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,a);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753),i], null):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,b);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c4)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431),i], null):null
)));

var G__1026422 = (i__1026122 + (1));
i__1026122 = G__1026422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026123),slovarish$frontend$verbs$verb_view$fleeting_vowel_indices_$_iter__1026120(cljs.core.chunk_rest(s__1026121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026123),null);
}
} else {
var vec__1026157 = cljs.core.first(s__1026121__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026157,(0),null);
var vec__1026160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026157,(1),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026160,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026160,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026160,(2),null);
var a_SINGLEQUOTE_ = vec__1026160;
var vec__1026163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026157,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026163,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026163,(1),null);
var c4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026163,(2),null);
var b_SINGLEQUOTE_ = vec__1026163;
var a = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,a_SINGLEQUOTE_);
var b = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,b_SINGLEQUOTE_);
return cljs.core.cons((cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,a);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(b,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753),i], null):(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.re_find(/[^аеиоуяэюёы][ое][^аеиоуяэюёы]/,b);
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c4)].join(''));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431),i], null):null
)),slovarish$frontend$verbs$verb_view$fleeting_vowel_indices_$_iter__1026120(cljs.core.rest(s__1026121__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.cons(cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__1026111_SHARP_){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),slovarish.frontend.display_inflections.destress(p1__1026111_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infinitive,conjugated], null)))));
})());
} else {
return null;
}

}
}
}
});
slovarish.frontend.verbs.verb_view.siblings_menu = (function slovarish$frontend$verbs$verb_view$siblings_menu(siblings){
if((cljs.core.count(siblings) > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"sibling",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"siblings",new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__1026180_SHARP_){
var word = p1__1026180_SHARP_.target.value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,"siblings")){
return null;
} else {
return slovarish.frontend.navigation.go_to_word(slovarish.frontend.display_inflections.destress(word));
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),"siblings"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$verb_view$siblings_menu_$_iter__1026186(s__1026187){
return (new cljs.core.LazySeq(null,(function (){
var s__1026187__$1 = s__1026187;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026187__$1);
if(temp__5753__auto__){
var s__1026187__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026187__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026187__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026189 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026188 = (0);
while(true){
if((i__1026188 < size__4651__auto__)){
var map__1026192 = cljs.core._nth(c__4650__auto__,i__1026188);
var map__1026192__$1 = cljs.core.__destructure_map(map__1026192);
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026192__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026192__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var reflexive = cljs.core.re_find(/с[ья]$/,sibling);
cljs.core.chunk_append(b__1026189,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sibling], null),(cljs.core.truth_((function (){var and__4251__auto__ = prefix;
if(cljs.core.truth_(and__4251__auto__)){
return reflexive;
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reflexive)].join(''):(cljs.core.truth_(reflexive)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reflexive)].join(''):(cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-"].join(''):sibling
)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sibling-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibling)].join('')], null)));

var G__1026428 = (i__1026188 + (1));
i__1026188 = G__1026428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026189),slovarish$frontend$verbs$verb_view$siblings_menu_$_iter__1026186(cljs.core.chunk_rest(s__1026187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026189),null);
}
} else {
var map__1026202 = cljs.core.first(s__1026187__$2);
var map__1026202__$1 = cljs.core.__destructure_map(map__1026202);
var sibling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026202__$1,new cljs.core.Keyword(null,"sibling","sibling",-1183865000));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026202__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var reflexive = cljs.core.re_find(/с[ья]$/,sibling);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sibling], null),(cljs.core.truth_((function (){var and__4251__auto__ = prefix;
if(cljs.core.truth_(and__4251__auto__)){
return reflexive;
} else {
return and__4251__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reflexive)].join(''):(cljs.core.truth_(reflexive)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reflexive)].join(''):(cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"-"].join(''):sibling
)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sibling-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sibling)].join('')], null)),slovarish$frontend$verbs$verb_view$siblings_menu_$_iter__1026186(cljs.core.rest(s__1026187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(siblings);
})())], null)], null);
} else {
return null;
}
});
slovarish.frontend.verbs.verb_view.nonpast_forms = (function slovarish$frontend$verbs$verb_view$nonpast_forms(p__1026217,conj_fv_idx){
var map__1026218 = p__1026217;
var map__1026218__$1 = cljs.core.__destructure_map(map__1026218);
var gloss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"gloss","gloss",-1230611425));
var dont_confuse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"dont-confuse","dont-confuse",574468479));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var aspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var impersonal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"impersonal?","impersonal?",1681285315));
var irregular_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"irregular?","irregular?",-216930077));
var no_nonpast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"no-nonpast?","no-nonpast?",-786837082));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var no_1sg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"no-1sg?","no-1sg?",789824562));
var conjugation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026218__$1,new cljs.core.Keyword(null,"conjugation","conjugation",332660020));
var map__1026224 = conjugation;
var map__1026224__$1 = cljs.core.__destructure_map(map__1026224);
var ya = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"ya","ya",1172180389));
var ty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"on","on",173873944));
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var oni = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026224__$1,new cljs.core.Keyword(null,"oni","oni",1840832692));
var mobile_stress_QMARK_ = cljs.core.re_find(/^(\d+|irreg-)c/,category);
if(cljs.core.truth_(no_nonpast_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic","div.row-header.left.sans.italic",-2088328329)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.full-width.no-form.sans.italic.present.triple-row","div.full-width.no-form.sans.italic.present.triple-row",-1128500305),["(no ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1026227 = aspect;
var G__1026227__$1 = (((G__1026227 instanceof cljs.core.Keyword))?G__1026227.fqn:null);
switch (G__1026227__$1) {
case "pf":
return "future";

break;
case "impf":
return "present";

break;
case "bias":
return "present/future";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026227__$1)].join('')));

}
})())," tense)"].join('')], null)], null);
} else {
if(cljs.core.truth_(impersonal_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic","div.row-header.left.sans.italic",-2088328329),(cljs.core.truth_((function (){var fexpr__1026232 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\u0442\u043E\u0448\u043D\u0438\u0301\u0442\u044C",null,"\u043F\u043E\u043D\u043E\u0301\u0441\u0438\u0442\u044C",null,"\u0440\u0432\u0430\u0301\u0442\u044C",null], null), null);
return (fexpr__1026232.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026232.cljs$core$IFn$_invoke$arity$1(infinitive) : fexpr__1026232.call(null,infinitive));
})())?"\u043A\u043E\u0433\u043E-\u043B.":(cljs.core.truth_((function (){var fexpr__1026234 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\u0437\u0430\u0431\u043B\u0430\u0433\u043E\u0440\u0430\u0441\u0441\u0443\u0301\u0434\u0438\u0442\u044C\u0441\u044F",null,"\u043F\u0440\u0438\u0441\u043F\u0438\u0301\u0447\u0438\u0442\u044C",null], null), null);
return (fexpr__1026234.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026234.cljs$core$IFn$_invoke$arity$1(infinitive) : fexpr__1026234.call(null,infinitive));
})())?"\u043A\u043E\u043C\u0443-\u043B.":(cljs.core.truth_((function (){var fexpr__1026235 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["\u0440\u0430\u0437\u0443\u043C\u0435\u0301\u0442\u044C\u0441\u044F",null,"\u0440\u0430\u0441\u0441\u0432\u0435\u0441\u0442\u0438\u0301",null,"\u0441\u0432\u0435\u0442\u0430\u0301\u0442\u044C",null,"\u0440\u0430\u0441\u0441\u0432\u0435\u0442\u0430\u0301\u0442\u044C",null,"\u0442\u0432\u043E\u0440\u0438\u0442\u044C\u0441\u044F",null], null), null);
return (fexpr__1026235.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026235.cljs$core$IFn$_invoke$arity$1(infinitive) : fexpr__1026235.call(null,infinitive));
})())?"\u043E\u043D":((clojure.string.includes_QMARK_(gloss,"impersonal"))?"\u043A\u043E\u043C\u0443-\u043B.":"\u043E\u043D"
))))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"present ya full-width",on,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null)], null);
} else {
if(cljs.core.truth_(irregular_QMARK_)){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row1","div.row-header.left.sans.italic.row1",-1861755793),"\u044F / \u043C\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row2","div.row-header.left.sans.italic.row2",137747842),"\u0442\u044B / \u0432\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row3","div.row-header.left.sans.italic.row3",1404189634),"\u043E\u043D / \u043E\u043D\u0438"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"present ya half-width row1",ya,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"my half-width",my,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["present","ty","half-width","row2",(cljs.core.truth_(mobile_stress_QMARK_)?"unpredictable-stress":null)], null),ty,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"vy half-width",vy,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["present","on","half-width","row3",(cljs.core.truth_(mobile_stress_QMARK_)?"unpredictable-stress":null)], null),on,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"oni half-width",oni,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null)], null);
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row1","div.row-header.left.sans.italic.row1",-1861755793),"\u044F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row2","div.row-header.left.sans.italic.row2",137747842),"\u0442\u044B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.left.sans.italic.row3","div.row-header.left.sans.italic.row3",1404189634),"\u043E\u043D\u0438"], null),(cljs.core.truth_(no_1sg_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.full-width.row1.no-form.sans.italic.present.irregular-form","div.full-width.row1.no-form.sans.italic.present.irregular-form",926263955),"(no \u044F form)"], null):new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"present ya full-width row1",ya,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx,new cljs.core.Keyword(null,"supplement","supplement",1050079545),(cljs.core.truth_(dont_confuse)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dont-confuse","div.dont-confuse",364315775),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u2757\u00A0",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans","span.italic.sans",-1879009862),(function (){var G__1026236 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026236__$1 = (((G__1026236 instanceof cljs.core.Keyword))?G__1026236.fqn:null);
switch (G__1026236__$1) {
case "english":
return "don\u2018t confuse with\u00A0";

break;
case "russian":
return "\u043D\u0435 \u043F\u0443\u0442\u0430\u0439\u0442\u0435 \u0441\u00A0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026236__$1)].join('')));

}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word(slovarish.frontend.display_inflections.destress(dont_confuse));
})], null),dont_confuse], null)], null):null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["present","ty","full-width","row2",(cljs.core.truth_(mobile_stress_QMARK_)?"unpredictable-stress":null)], null),ty,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["present","oni","full-width","row 3",(cljs.core.truth_(mobile_stress_QMARK_)?"unpredictable-stress":null)], null),oni,new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null)], null);

}
}
}
});
slovarish.frontend.verbs.verb_view.past_tense_forms = (function slovarish$frontend$verbs$verb_view$past_tense_forms(infinitive,primary_QMARK_,past,category){
if((new cljs.core.Keyword(null,"masculine","masculine",-523682579).cljs$core$IFn$_invoke$arity$1(past) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row1.past.neuter.light","div.word-form.row1.past.neuter.light",1325320070),(function (){var G__1026249 = new cljs.core.Keyword(null,"neuter","neuter",-2013207957).cljs$core$IFn$_invoke$arity$1(past);
if(cljs.core.seq_QMARK_(new cljs.core.Keyword(null,"neuter","neuter",-2013207957).cljs$core$IFn$_invoke$arity$1(past))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",G__1026249);
} else {
return G__1026249;
}
})()], null);
} else {
var which_set = (cljs.core.truth_(primary_QMARK_)?"primary":"alternate");
var end_stressed_QMARK_ = (function (p1__1026240_SHARP_){
return cljs.core.re_find(/(?:ся\u0301|[аио]\u0301(?:сь)?)$/,p1__1026240_SHARP_);
});
var stem_stressed_QMARK_ = cljs.core.complement(end_stressed_QMARK_);
var vec__1026252 = (function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$verb_view$past_tense_forms_$_iter__1026257(s__1026258){
return (new cljs.core.LazySeq(null,(function (){
var s__1026258__$1 = s__1026258;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026258__$1);
if(temp__5753__auto__){
var s__1026258__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026258__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026258__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026260 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026259 = (0);
while(true){
if((i__1026259 < size__4651__auto__)){
var form = cljs.core._nth(c__4650__auto__,i__1026259);
cljs.core.chunk_append(b__1026260,((typeof form === 'string')?form:(cljs.core.truth_(primary_QMARK_)?cljs.core.first(form):cljs.core.second(form)
)));

var G__1026453 = (i__1026259 + (1));
i__1026259 = G__1026453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026260),slovarish$frontend$verbs$verb_view$past_tense_forms_$_iter__1026257(cljs.core.chunk_rest(s__1026258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026260),null);
}
} else {
var form = cljs.core.first(s__1026258__$2);
return cljs.core.cons(((typeof form === 'string')?form:(cljs.core.truth_(primary_QMARK_)?cljs.core.first(form):cljs.core.second(form)
)),slovarish$frontend$verbs$verb_view$past_tense_forms_$_iter__1026257(cljs.core.rest(s__1026258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(past));
})();
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026252,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026252,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026252,(2),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1026252,(3),null);
var pasts = vec__1026252;
var reflexive_QMARK_ = cljs.core.re_find(/сь$/,f);
var irregular_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.display_inflections.destress(clojure.string.replace(m,/ся\u0301?$/,"")),slovarish.frontend.display_inflections.destress(clojure.string.replace(infinitive,/ть(ся)?$/,"\u043B")));
var irl = ((irregular_QMARK_)?"\u043B":null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_((function (){var and__4251__auto__ = (!(irregular_QMARK_));
if(and__4251__auto__){
var and__4251__auto____$1 = reflexive_QMARK_;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.every_QMARK_(stem_stressed_QMARK_,pasts);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row1.past.light.triple-row","div.word-form.row1.past.light.triple-row",1514510227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.replace(m,/ся$/,"|\u0441\u044F"),", -\u0430\u0441\u044C, -\u043E\u0441\u044C, -\u0438\u0441\u044C"], 0))], null):(((((!(irregular_QMARK_))) && (cljs.core.every_QMARK_(stem_stressed_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row1.past.light.triple-row","div.word-form.row1.past.light.triple-row",1514510227),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m," + \u0430, \u043E, \u0438"], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row1.past.masculine","div.word-form.row1.past.masculine",-1614316447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__1026273 = cljs.core.PersistentVector.EMPTY;
var G__1026273__$1 = (((!(typeof new cljs.core.Keyword(null,"masculine","masculine",-523682579).cljs$core$IFn$_invoke$arity$1(past) === 'string')))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1026273,which_set):G__1026273);
var G__1026273__$2 = (((((!(irregular_QMARK_))) && (clojure.string.includes_QMARK_(category,"c,a"))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1026273__$1,which_set):G__1026273__$1);
var G__1026273__$3 = ((irregular_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1026273__$2,"irregular-form"):G__1026273__$2);
var G__1026273__$4 = (cljs.core.truth_(end_stressed_QMARK_(m))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1026273__$3,"unpredictable-stress"):G__1026273__$3);
if(cljs.core.not((function (){var or__4253__auto__ = irregular_QMARK_;
if(or__4253__auto__){
return or__4253__auto__;
} else {
return end_stressed_QMARK_(m);
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__1026273__$4,"light");
} else {
return G__1026273__$4;
}
})()], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))], null),((cljs.core.every_QMARK_(end_stressed_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row2.past.light.double-row","div.word-form.row2.past.light.double-row",-637650200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.re_find(/\/b\*,b$/,category))?null:which_set)], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,", -",irl,"\u043E\u0301",reflexive_QMARK_,", -",irl,"\u0438\u0301",reflexive_QMARK_], 0))], null):((cljs.core.every_QMARK_(stem_stressed_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n,p], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row2.past.light.double-row","div.word-form.row2.past.light.double-row",-637650200),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,", -",irl,"\u043E",reflexive_QMARK_,", -",irl,"\u0438",reflexive_QMARK_], 0))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row2.past.feminine.unpredictable-stress","div.word-form.row2.past.feminine.unpredictable-stress",857982935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.re_find(/\/c'$/,category))?null:which_set)], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))], null),((cljs.core.every_QMARK_(end_stressed_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,n], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row3.past.neuter.unpredictable-stress.half-width","div.word-form.row3.past.neuter.unpredictable-stress.half-width",-695174627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row3.past.plural.half-width.light","div.word-form.row3.past.plural.half-width.light",-1067944716),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0))], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.word-form.row3.past.light","div.word-form.row3.past.light",1034295010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),which_set], null),((cljs.core.every_QMARK_(end_stressed_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,p], null)))?slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,", -",irl,"\u0438\u0301",reflexive_QMARK_], 0)):slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,", -",irl,"\u0438",reflexive_QMARK_], 0)))], null))], null)
))], null)
))], null);
}
});
slovarish.frontend.verbs.verb_view.participle_forms = (function slovarish$frontend$verbs$verb_view$participle_forms(aspect,p__1026288,p__1026289){
var map__1026297 = p__1026288;
var map__1026297__$1 = cljs.core.__destructure_map(map__1026297);
var pres_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026297__$1,new cljs.core.Keyword(null,"pres-act","pres-act",820629395));
var pres_pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026297__$1,new cljs.core.Keyword(null,"pres-pass","pres-pass",-1485388268));
var pres_adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026297__$1,new cljs.core.Keyword(null,"pres-adv","pres-adv",582035399));
var map__1026298 = p__1026289;
var map__1026298__$1 = cljs.core.__destructure_map(map__1026298);
var past_act = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026298__$1,new cljs.core.Keyword(null,"past-act","past-act",-1598037616));
var past_pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026298__$1,new cljs.core.Keyword(null,"past-pass","past-pass",-2090820466));
var past_adv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026298__$1,new cljs.core.Keyword(null,"past-adv","past-adv",-1428753747));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.italic.row1","div.row-header.middle.sans.italic.row1",-682897302),"active"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.italic.row2","div.row-header.middle.sans.italic.row2",-1988578551),"passive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.italic.row3","div.row-header.middle.sans.italic.row3",1273426847),"adverbial"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"pf","pf",1255760069)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.data.all_adjectives),slovarish.frontend.display_inflections.destress(pres_act)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row1.present.active.participle","a.row1.present.active.participle",2058017964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(pres_act),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"",pres_act], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row1 present active participle",pres_act], null)),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.data.all_adjectives),slovarish.frontend.display_inflections.destress(pres_pass)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row2.present.passive.participle","a.row2.present.passive.participle",320917136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(pres_pass),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"",pres_pass], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row2 present passive participle",pres_pass], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row3 present adverbial participle",pres_adv], null)], null)),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.data.all_adjectives),slovarish.frontend.display_inflections.destress(past_act)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row2.past.passive.participle","a.row2.past.passive.participle",1285180994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(past_act),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"",past_act], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row1 past passive participle",past_act], null)),(function (){var pp = (function (){var G__1026310 = past_pass;
var G__1026310__$1 = (((G__1026310 == null))?null:clojure.string.replace(G__1026310,/н+ый$/,"\u043D(\u043D\u044B\u0439)"));
if((G__1026310__$1 == null)){
return null;
} else {
return clojure.string.replace(G__1026310__$1,/ый$/,"(\u044B\u0439)");
}
})();
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.data.all_adjectives),slovarish.frontend.display_inflections.destress(past_pass)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.row2.past.passive.participle","a.row2.past.passive.participle",1285180994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(past_pass),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target-pos","target-pos",1907947494),new cljs.core.Keyword(null,"adjective","adjective",441465450)], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"",pp], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row2 past passive participle",pp], null);
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row3 past adverbial participle",past_adv], null)], null);
});
slovarish.frontend.verbs.verb_view.single_verb = (function slovarish$frontend$verbs$verb_view$single_verb(verb_type,p__1026323){
var map__1026324 = p__1026323;
var map__1026324__$1 = cljs.core.__destructure_map(map__1026324);
var verb = map__1026324__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"model","model",331153215));
var gloss = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"gloss","gloss",-1230611425));
var dont_confuse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"dont-confuse","dont-confuse",574468479));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var aspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var impersonal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"impersonal?","impersonal?",1681285315));
var irregular_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"irregular?","irregular?",-216930077));
var no_nonpast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"no-nonpast?","no-nonpast?",-786837082));
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var partners = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"partners","partners",588855982));
var no_1sg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"no-1sg?","no-1sg?",789824562));
var conjugation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026324__$1,new cljs.core.Keyword(null,"conjugation","conjugation",332660020));
if(cljs.core.truth_(verb)){
var map__1026329 = conjugation;
var map__1026329__$1 = cljs.core.__destructure_map(map__1026329);
var my = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var past_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"past-part","past-part",336420481));
var ya = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"ya","ya",1172180389));
var past = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"past","past",182249289));
var ty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var pres_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"pres-part","pres-part",-1052363923));
var imperative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"imperative","imperative",-1312952880));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var oni = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"oni","oni",1840832692));
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026329__$1,new cljs.core.Keyword(null,"on","on",173873944));
var map__1026330 = slovarish.frontend.verbs.verb_view.fleeting_vowel_indices(infinitive,ya,ty,on,my,vy,oni);
var map__1026330__$1 = cljs.core.__destructure_map(map__1026330);
var inf_fv_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026330__$1,new cljs.core.Keyword(null,"inf-fv-idx","inf-fv-idx",955806753));
var conj_fv_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026330__$1,new cljs.core.Keyword(null,"conj-fv-idx","conj-fv-idx",1102050431));
var alternate_pasts_QMARK_ = (function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_verb_forms_QMARK_),new cljs.core.Keyword(null,"main","main",-2117802661));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not(impersonal_QMARK_);
if(and__4251__auto____$1){
return cljs.core.some(cljs.core.coll_QMARK_,cljs.core.vals(past));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.verb-entry","div.verb-entry",-982395543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),verb_type,new cljs.core.Keyword(null,"data-verb","data-verb",-1717056570),infinitive], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-left","div.top-left",53582168),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.infinitive","div.infinitive",-769562534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),verb_type], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon","span.icon",-1181275586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.verbs.verb_view.verb_type_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb_type,new cljs.core.Keyword(null,"full-name","full-name",408178550)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(slovarish.frontend.verbs.verb_view.verb_type_names,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [verb_type,new cljs.core.Keyword(null,"emoji","emoji",1031230144)], null))], null),(function (){var G__1026338 = infinitive;
var G__1026338__$1 = ((cljs.core.deref(slovarish.frontend.state.show_stress_QMARK_) === false)?slovarish.frontend.display_inflections.destress(G__1026338):G__1026338);
if(cljs.core.truth_(inf_fv_idx)){
return slovarish.frontend.display_inflections.decompose_fv(inf_fv_idx,G__1026338__$1);
} else {
return G__1026338__$1;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.top-right","div.top-right",-60894130),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__1026342 = gloss;
var G__1026342__$1 = (((G__1026342 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__1026342,/\|/));
if((G__1026342__$1 == null)){
return null;
} else {
return cljs.core.first(G__1026342__$1);
}
})(),(function (){var G__1026344 = new cljs.core.Keyword(null,"gloss","gloss",-1230611425).cljs$core$IFn$_invoke$arity$1(slovarish.frontend.state.result());
var G__1026344__$1 = (((G__1026344 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__1026344,/\|/));
if((G__1026344__$1 == null)){
return null;
} else {
return cljs.core.first(G__1026344__$1);
}
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.gloss.render_glosses,verb,verb_type], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.half-width","div.column-header.half-width",-1196869239),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.siblings_menu,slovarish.frontend.verbs.siblings.get_siblings(slovarish.frontend.display_inflections.destress(infinitive))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.present.sans","div.column-header.present.sans",538677564),(cljs.core.truth_(no_nonpast_QMARK_)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(verb_type,"perfective")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(infinitive,"\u0431\u044B\u0301\u0442\u044C"))))?(function (){var G__1026352 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026352__$1 = (((G__1026352 instanceof cljs.core.Keyword))?G__1026352.fqn:null);
switch (G__1026352__$1) {
case "english":
return "future";

break;
case "russian":
return "\u0431\u0443\u0434.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026352__$1)].join('')));

}
})():(function (){var G__1026353 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026353__$1 = (((G__1026353 instanceof cljs.core.Keyword))?G__1026353.fqn:null);
switch (G__1026353__$1) {
case "english":
return "present";

break;
case "russian":
return "\u043D\u0430\u0441\u0442.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026353__$1)].join('')));

}
})()),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(slovarish.frontend.state.which_verb_forms_QMARK_),new cljs.core.Keyword(null,"participles","participles",-575696638))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"bias","bias",-315297926)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__1026356 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026356__$1 = (((G__1026356 instanceof cljs.core.Keyword))?G__1026356.fqn:null);
switch (G__1026356__$1) {
case "english":
return " (imperf. only)";

break;
case "russian":
return " (\u0442\u043E\u043B\u044C\u043A\u043E \u041D\u0421\u0412)";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026356__$1)].join('')));

}
})()], null):null)], null)),(cljs.core.truth_((function (){var or__4253__auto__ = no_nonpast_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (model == null);
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.conjugation-model","div.conjugation-model",1022831586),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(infinitive,model))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCA1\u00A0",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__1026359 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026359__$1 = (((G__1026359 instanceof cljs.core.Keyword))?G__1026359.fqn:null);
switch (G__1026359__$1) {
case "english":
return "model verb";

break;
case "russian":
return "\u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u043E\u0431\u0440\u0430\u0437\u0435\u0446";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026359__$1)].join('')));

}
})()], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.italic.sans.note","span.italic.sans.note",-1191261457),(function (){var G__1026361 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026361__$1 = (((G__1026361 instanceof cljs.core.Keyword))?G__1026361.fqn:null);
switch (G__1026361__$1) {
case "english":
return "like";

break;
case "russian":
return "\u043F\u043E\u0445\u043E\u0436 \u043D\u0430";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026361__$1)].join('')));

}
})()], null),"\u00A0",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.word-button","a.word-button",1642105003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-destination","data-destination",938747560),model,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var word = e.target.getAttribute("data-destination");
return slovarish.frontend.navigation.go_to_word.cljs$core$IFn$_invoke$arity$variadic(slovarish.frontend.display_inflections.destress(word),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-fn","filter-fn",1689475675),(function (p1__1026317_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(p1__1026317_SHARP_),word)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"model","model",331153215).cljs$core$IFn$_invoke$arity$1(p1__1026317_SHARP_),word)));
})], 0));
})], null),slovarish.frontend.display_inflections.dstr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([model], 0))], null)], null))], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.half-width","div.column-header.half-width",-1196869239)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.past.sans","div.column-header.past.sans",1938644960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(alternate_pasts_QMARK_)?"alternate-forms-trigger":null)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__1026368 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026368__$1 = (((G__1026368 instanceof cljs.core.Keyword))?G__1026368.fqn:null);
switch (G__1026368__$1) {
case "english":
return "past";

break;
case "russian":
return "\u043F\u0440\u043E\u0448.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026368__$1)].join('')));

}
})()),(cljs.core.truth_(alternate_pasts_QMARK_)?"\u00A0\uD83D\uDD00":null)], null),(function (){var G__1026371 = cljs.core.deref(slovarish.frontend.state.which_verb_forms_QMARK_);
var G__1026371__$1 = (((G__1026371 instanceof cljs.core.Keyword))?G__1026371.fqn:null);
switch (G__1026371__$1) {
case "main":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.nonpast_forms,verb,conj_fv_idx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(impersonal_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.row1","div.row-header.middle.sans.row1",1902977800),"\uD83D\uDC7D"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.row1","div.row-header.middle.sans.row1",1902977800),"\uD83D\uDC68"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.row2","div.row-header.middle.sans.row2",1732065027),"\uD83D\uDC69"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row-header.middle.sans.row3","div.row-header.middle.sans.row3",149811648),"\uD83D\uDC7D\uD83D\uDC6B"], null)], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.past_tense_forms,infinitive,"primary",past,category], null),(cljs.core.truth_(alternate_pasts_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.past_tense_forms,infinitive,false,past,category], null):null)], null)], null);

break;
case "participles":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.participle_forms,aspect,pres_part,past_part], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026371__$1)].join('')));

}
})(),(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(impersonal_QMARK_);
if(and__4251__auto__){
return cljs.core.not_empty(imperative);
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column-header.half-width.imperative.sans","div.column-header.half-width.imperative.sans",1836462751),(function (){var G__1026373 = cljs.core.deref(slovarish.frontend.state.display_language);
var G__1026373__$1 = (((G__1026373 instanceof cljs.core.Keyword))?G__1026373.fqn:null);
switch (G__1026373__$1) {
case "english":
return "imperative";

break;
case "russian":
return "\u043F\u043E\u0432\u0435\u043B.";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026373__$1)].join('')));

}
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row1 imperative",new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(imperative),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.display_inflections.display_form,"row2 imperative",new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(imperative),new cljs.core.Keyword(null,"fv-idx","fv-idx",117070489),conj_fv_idx], null)], null):null)], null);
} else {
return null;
}
});
slovarish.frontend.verbs.verb_view.get_partner = (function slovarish$frontend$verbs$verb_view$get_partner(partner,partner_aspect){
var G__1026377 = partner;
var G__1026377__$1 = (((G__1026377 == null))?null:slovarish.frontend.display_inflections.destress(G__1026377));
var G__1026377__$2 = (((G__1026377__$1 == null))?null:(function (){var fexpr__1026379 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1026379.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026379.cljs$core$IFn$_invoke$arity$1(G__1026377__$1) : fexpr__1026379.call(null,G__1026377__$1));
})());
var G__1026377__$3 = (((G__1026377__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__1026375_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(partner,slovarish.frontend.display_inflections.destress_mono(new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(p1__1026375_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(partner_aspect,new cljs.core.Keyword(null,"aspect","aspect",-839905246).cljs$core$IFn$_invoke$arity$1(p1__1026375_SHARP_))));
}),G__1026377__$2));
if((G__1026377__$3 == null)){
return null;
} else {
return cljs.core.first(G__1026377__$3);
}
});
slovarish.frontend.verbs.verb_view.verb_table = (function slovarish$frontend$verbs$verb_view$verb_table(p__1026385){
var map__1026386 = p__1026385;
var map__1026386__$1 = cljs.core.__destructure_map(map__1026386);
var self = map__1026386__$1;
var infinitive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"infinitive","infinitive",1638685481));
var aspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"aspect","aspect",-839905246));
var conjugation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"conjugation","conjugation",332660020));
var partners = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"partners","partners",588855982));
var motion_partner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"motion-partner","motion-partner",936995932));
var definiteness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1026386__$1,new cljs.core.Keyword(null,"definiteness","definiteness",-1907614985));
if(cljs.core.truth_(infinitive)){
var partner_aspect = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aspect,new cljs.core.Keyword(null,"pf","pf",1255760069)))?new cljs.core.Keyword(null,"impf","impf",-1164864294):new cljs.core.Keyword(null,"pf","pf",1255760069));
var partner_verbs = (function (){var G__1026388 = partners;
if((G__1026388 == null)){
return null;
} else {
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__1026381_SHARP_){
return slovarish.frontend.verbs.verb_view.get_partner(p1__1026381_SHARP_,partner_aspect);
}),G__1026388);
}
})();
var motion_partner_verb = (function (){var G__1026390 = (function (){var or__4253__auto__ = motion_partner;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"motion-partner","motion-partner",936995932).cljs$core$IFn$_invoke$arity$1(cljs.core.first(partner_verbs));
}
})();
var G__1026390__$1 = (((G__1026390 == null))?null:slovarish.frontend.display_inflections.destress(G__1026390));
var G__1026390__$2 = (((G__1026390__$1 == null))?null:(function (){var fexpr__1026395 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1026395.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026395.cljs$core$IFn$_invoke$arity$1(G__1026390__$1) : fexpr__1026395.call(null,G__1026390__$1));
})());
if((G__1026390__$2 == null)){
return null;
} else {
return cljs.core.first(G__1026390__$2);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#verb-table","div#verb-table",-462892006),(cljs.core.truth_(motion_partner_verb)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"indefinite",(function (){var G__1026396 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__1026396)){
return self;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__1026396)){
return motion_partner_verb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1026396)){
return motion_partner_verb;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026396)].join('')));

}
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"definite",(function (){var G__1026397 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__1026397)){
return self;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__1026397)){
return motion_partner_verb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1026397)){
return cljs.core.first(partner_verbs);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026397)].join('')));

}
}
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"perfective",(function (){var G__1026398 = definiteness;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"definite","definite",1037141320),G__1026398)){
return cljs.core.first(partner_verbs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indefinite","indefinite",-1961185434),G__1026398)){
return cljs.core.first((function (){var G__1026400 = slovarish.frontend.display_inflections.destress(cljs.core.first(new cljs.core.Keyword(null,"partners","partners",588855982).cljs$core$IFn$_invoke$arity$1(motion_partner_verb)));
var fexpr__1026399 = cljs.core.deref(slovarish.frontend.data.all_verbs);
return (fexpr__1026399.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026399.cljs$core$IFn$_invoke$arity$1(G__1026400) : fexpr__1026399.call(null,G__1026400));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__1026398)){
return self;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1026398)].join('')));

}
}
}
})()], null)], null):(cljs.core.truth_((function (){var fexpr__1026401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),null,new cljs.core.Keyword(null,"bias","bias",-315297926),null], null), null);
return (fexpr__1026401.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026401.cljs$core$IFn$_invoke$arity$1(aspect) : fexpr__1026401.call(null,aspect));
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,(function (){var fexpr__1026403 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impf","impf",-1164864294),"imperfective",new cljs.core.Keyword(null,"bias","bias",-315297926),"biaspectual"], null);
return (fexpr__1026403.cljs$core$IFn$_invoke$arity$1 ? fexpr__1026403.cljs$core$IFn$_invoke$arity$1(aspect) : fexpr__1026403.call(null,aspect));
})(),self], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026405(s__1026406){
return (new cljs.core.LazySeq(null,(function (){
var s__1026406__$1 = s__1026406;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026406__$1);
if(temp__5753__auto__){
var s__1026406__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026406__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026406__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026408 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026407 = (0);
while(true){
if((i__1026407 < size__4651__auto__)){
var partner = cljs.core._nth(c__4650__auto__,i__1026407);
cljs.core.chunk_append(b__1026408,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"perfective",partner], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(partner)], null)));

var G__1026506 = (i__1026407 + (1));
i__1026407 = G__1026506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026408),slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026405(cljs.core.chunk_rest(s__1026406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026408),null);
}
} else {
var partner = cljs.core.first(s__1026406__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"perfective",partner], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(partner)], null)),slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026405(cljs.core.rest(s__1026406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__1026382_SHARP_){
var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(p1__1026382_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (30000);
}
}),cljs.core._LT_,partner_verbs));
})())], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026409(s__1026410){
return (new cljs.core.LazySeq(null,(function (){
var s__1026410__$1 = s__1026410;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__1026410__$1);
if(temp__5753__auto__){
var s__1026410__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1026410__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__1026410__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__1026412 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__1026411 = (0);
while(true){
if((i__1026411 < size__4651__auto__)){
var partner = cljs.core._nth(c__4650__auto__,i__1026411);
cljs.core.chunk_append(b__1026412,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"imperfective",partner], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(partner)], null)));

var G__1026508 = (i__1026411 + (1));
i__1026411 = G__1026508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1026412),slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026409(cljs.core.chunk_rest(s__1026410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1026412),null);
}
} else {
var partner = cljs.core.first(s__1026410__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"imperfective",partner], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"infinitive","infinitive",1638685481).cljs$core$IFn$_invoke$arity$1(partner)], null)),slovarish$frontend$verbs$verb_view$verb_table_$_iter__1026409(cljs.core.rest(s__1026410__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__1026383_SHARP_){
var or__4253__auto__ = new cljs.core.Keyword(null,"rank","rank",-1706728502).cljs$core$IFn$_invoke$arity$1(p1__1026383_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (30000);
}
}),cljs.core._LT_,partner_verbs));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.verbs.verb_view.single_verb,"perfective",self], null)], null)
))], null);
} else {
return null;
}
});

//# sourceMappingURL=slovarish.frontend.verbs.verb_view.js.map
