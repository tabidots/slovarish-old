goog.provide('slovarish.frontend.gen_plur_bugs');
slovarish.frontend.gen_plur_bugs.the_table = (function slovarish$frontend$gen_plur_bugs$the_table(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#container","table#container",1224157779),(function (){var seq__26715 = cljs.core.seq(cljs.core.keys(slovarish.frontend.declension.all_nouns));
var chunk__26724 = null;
var count__26725 = (0);
var i__26726 = (0);
while(true){
if((i__26726 < count__26725)){
var lemma = chunk__26724.cljs$core$IIndexed$_nth$arity$2(null,i__26726);
var seq__26727_26735 = cljs.core.seq(slovarish.frontend.declension.declensions(lemma));
var chunk__26730_26736 = null;
var count__26731_26737 = (0);
var i__26732_26738 = (0);
while(true){
if((i__26732_26738 < count__26731_26737)){
var entry_26739 = chunk__26730_26736.cljs$core$IIndexed$_nth$arity$2(null,i__26732_26738);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lemma,"\u043C\u0435\u0442\u0430")){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26739,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null)))){
cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),lemma], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26739,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"automatic","automatic",104479799)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26739,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lemma),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((100)))].join('')], null));


var G__26740 = seq__26727_26735;
var G__26741 = chunk__26730_26736;
var G__26742 = count__26731_26737;
var G__26743 = (i__26732_26738 + (1));
seq__26727_26735 = G__26740;
chunk__26730_26736 = G__26741;
count__26731_26737 = G__26742;
i__26732_26738 = G__26743;
continue;
} else {
var G__26744 = seq__26727_26735;
var G__26745 = chunk__26730_26736;
var G__26746 = count__26731_26737;
var G__26747 = (i__26732_26738 + (1));
seq__26727_26735 = G__26744;
chunk__26730_26736 = G__26745;
count__26731_26737 = G__26746;
i__26732_26738 = G__26747;
continue;
}
} else {
var G__26748 = seq__26727_26735;
var G__26749 = chunk__26730_26736;
var G__26750 = count__26731_26737;
var G__26751 = (i__26732_26738 + (1));
seq__26727_26735 = G__26748;
chunk__26730_26736 = G__26749;
count__26731_26737 = G__26750;
i__26732_26738 = G__26751;
continue;
}
} else {
var temp__5753__auto___26752 = cljs.core.seq(seq__26727_26735);
if(temp__5753__auto___26752){
var seq__26727_26753__$1 = temp__5753__auto___26752;
if(cljs.core.chunked_seq_QMARK_(seq__26727_26753__$1)){
var c__4679__auto___26754 = cljs.core.chunk_first(seq__26727_26753__$1);
var G__26755 = cljs.core.chunk_rest(seq__26727_26753__$1);
var G__26756 = c__4679__auto___26754;
var G__26757 = cljs.core.count(c__4679__auto___26754);
var G__26758 = (0);
seq__26727_26735 = G__26755;
chunk__26730_26736 = G__26756;
count__26731_26737 = G__26757;
i__26732_26738 = G__26758;
continue;
} else {
var entry_26759 = cljs.core.first(seq__26727_26753__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lemma,"\u043C\u0435\u0442\u0430")){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26759,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null)))){
cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),lemma], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26759,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"automatic","automatic",104479799)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26759,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lemma),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((100)))].join('')], null));


var G__26760 = cljs.core.next(seq__26727_26753__$1);
var G__26761 = null;
var G__26762 = (0);
var G__26763 = (0);
seq__26727_26735 = G__26760;
chunk__26730_26736 = G__26761;
count__26731_26737 = G__26762;
i__26732_26738 = G__26763;
continue;
} else {
var G__26764 = cljs.core.next(seq__26727_26753__$1);
var G__26765 = null;
var G__26766 = (0);
var G__26767 = (0);
seq__26727_26735 = G__26764;
chunk__26730_26736 = G__26765;
count__26731_26737 = G__26766;
i__26732_26738 = G__26767;
continue;
}
} else {
var G__26768 = cljs.core.next(seq__26727_26753__$1);
var G__26769 = null;
var G__26770 = (0);
var G__26771 = (0);
seq__26727_26735 = G__26768;
chunk__26730_26736 = G__26769;
count__26731_26737 = G__26770;
i__26732_26738 = G__26771;
continue;
}
}
} else {
}
}
break;
}

var G__26772 = seq__26715;
var G__26773 = chunk__26724;
var G__26774 = count__26725;
var G__26775 = (i__26726 + (1));
seq__26715 = G__26772;
chunk__26724 = G__26773;
count__26725 = G__26774;
i__26726 = G__26775;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26715);
if(temp__5753__auto__){
var seq__26715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26715__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26715__$1);
var G__26776 = cljs.core.chunk_rest(seq__26715__$1);
var G__26777 = c__4679__auto__;
var G__26778 = cljs.core.count(c__4679__auto__);
var G__26779 = (0);
seq__26715 = G__26776;
chunk__26724 = G__26777;
count__26725 = G__26778;
i__26726 = G__26779;
continue;
} else {
var lemma = cljs.core.first(seq__26715__$1);
var seq__26716_26780 = cljs.core.seq(slovarish.frontend.declension.declensions(lemma));
var chunk__26719_26781 = null;
var count__26720_26782 = (0);
var i__26721_26783 = (0);
while(true){
if((i__26721_26783 < count__26720_26782)){
var entry_26784 = chunk__26719_26781.cljs$core$IIndexed$_nth$arity$2(null,i__26721_26783);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lemma,"\u043C\u0435\u0442\u0430")){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26784,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null)))){
cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),lemma], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26784,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"automatic","automatic",104479799)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26784,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lemma),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((100)))].join('')], null));


var G__26785 = seq__26716_26780;
var G__26786 = chunk__26719_26781;
var G__26787 = count__26720_26782;
var G__26788 = (i__26721_26783 + (1));
seq__26716_26780 = G__26785;
chunk__26719_26781 = G__26786;
count__26720_26782 = G__26787;
i__26721_26783 = G__26788;
continue;
} else {
var G__26789 = seq__26716_26780;
var G__26790 = chunk__26719_26781;
var G__26791 = count__26720_26782;
var G__26792 = (i__26721_26783 + (1));
seq__26716_26780 = G__26789;
chunk__26719_26781 = G__26790;
count__26720_26782 = G__26791;
i__26721_26783 = G__26792;
continue;
}
} else {
var G__26793 = seq__26716_26780;
var G__26794 = chunk__26719_26781;
var G__26795 = count__26720_26782;
var G__26796 = (i__26721_26783 + (1));
seq__26716_26780 = G__26793;
chunk__26719_26781 = G__26794;
count__26720_26782 = G__26795;
i__26721_26783 = G__26796;
continue;
}
} else {
var temp__5753__auto___26797__$1 = cljs.core.seq(seq__26716_26780);
if(temp__5753__auto___26797__$1){
var seq__26716_26798__$1 = temp__5753__auto___26797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26716_26798__$1)){
var c__4679__auto___26799 = cljs.core.chunk_first(seq__26716_26798__$1);
var G__26800 = cljs.core.chunk_rest(seq__26716_26798__$1);
var G__26801 = c__4679__auto___26799;
var G__26802 = cljs.core.count(c__4679__auto___26799);
var G__26803 = (0);
seq__26716_26780 = G__26800;
chunk__26719_26781 = G__26801;
count__26720_26782 = G__26802;
i__26721_26783 = G__26803;
continue;
} else {
var entry_26804 = cljs.core.first(seq__26716_26798__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lemma,"\u043C\u0435\u0442\u0430")){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"irregular-form?","irregular-form?",1272828690)], null)))){
cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),lemma], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"automatic","automatic",104479799)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entry_26804,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"genitive","genitive",1156616057),new cljs.core.Keyword(null,"plural","plural",-881591021),new cljs.core.Keyword(null,"text","text",-1790561697)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(lemma),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((100)))].join('')], null));


var G__26805 = cljs.core.next(seq__26716_26798__$1);
var G__26806 = null;
var G__26807 = (0);
var G__26808 = (0);
seq__26716_26780 = G__26805;
chunk__26719_26781 = G__26806;
count__26720_26782 = G__26807;
i__26721_26783 = G__26808;
continue;
} else {
var G__26809 = cljs.core.next(seq__26716_26798__$1);
var G__26810 = null;
var G__26811 = (0);
var G__26812 = (0);
seq__26716_26780 = G__26809;
chunk__26719_26781 = G__26810;
count__26720_26782 = G__26811;
i__26721_26783 = G__26812;
continue;
}
} else {
var G__26813 = cljs.core.next(seq__26716_26798__$1);
var G__26814 = null;
var G__26815 = (0);
var G__26816 = (0);
seq__26716_26780 = G__26813;
chunk__26719_26781 = G__26814;
count__26720_26782 = G__26815;
i__26721_26783 = G__26816;
continue;
}
}
} else {
}
}
break;
}

var G__26817 = cljs.core.next(seq__26715__$1);
var G__26818 = null;
var G__26819 = (0);
var G__26820 = (0);
seq__26715 = G__26817;
chunk__26724 = G__26818;
count__26725 = G__26819;
i__26726 = G__26820;
continue;
}
} else {
return null;
}
}
break;
}
})()], null);
});
slovarish.frontend.gen_plur_bugs.run = (function slovarish$frontend$gen_plur_bugs$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [slovarish.frontend.gen_plur_bugs.the_table], null),document.getElementById("root"));
});
slovarish.frontend.gen_plur_bugs.init = (function slovarish$frontend$gen_plur_bugs$init(){
return slovarish.frontend.gen_plur_bugs.run();
});

//# sourceMappingURL=slovarish.frontend.gen_plur_bugs.js.map
