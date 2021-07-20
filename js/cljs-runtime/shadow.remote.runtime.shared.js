goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32713,res){
var map__32714 = p__32713;
var map__32714__$1 = cljs.core.__destructure_map(map__32714);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32714__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32714__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32719 = res;
var G__32719__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32719,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32719);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32719__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32719__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32727 = arguments.length;
switch (G__32727) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32733,msg,handlers,timeout_after_ms){
var map__32734 = p__32733;
var map__32734__$1 = cljs.core.__destructure_map(map__32734);
var runtime = map__32734__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32734__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33159 = arguments.length;
var i__4819__auto___33160 = (0);
while(true){
if((i__4819__auto___33160 < len__4818__auto___33159)){
args__4824__auto__.push((arguments[i__4819__auto___33160]));

var G__33161 = (i__4819__auto___33160 + (1));
i__4819__auto___33160 = G__33161;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32765,ev,args){
var map__32767 = p__32765;
var map__32767__$1 = cljs.core.__destructure_map(map__32767);
var runtime = map__32767__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32767__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32772 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32775 = null;
var count__32776 = (0);
var i__32777 = (0);
while(true){
if((i__32777 < count__32776)){
var ext = chunk__32775.cljs$core$IIndexed$_nth$arity$2(null,i__32777);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33165 = seq__32772;
var G__33166 = chunk__32775;
var G__33167 = count__32776;
var G__33168 = (i__32777 + (1));
seq__32772 = G__33165;
chunk__32775 = G__33166;
count__32776 = G__33167;
i__32777 = G__33168;
continue;
} else {
var G__33169 = seq__32772;
var G__33170 = chunk__32775;
var G__33171 = count__32776;
var G__33172 = (i__32777 + (1));
seq__32772 = G__33169;
chunk__32775 = G__33170;
count__32776 = G__33171;
i__32777 = G__33172;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32772);
if(temp__5753__auto__){
var seq__32772__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32772__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32772__$1);
var G__33177 = cljs.core.chunk_rest(seq__32772__$1);
var G__33178 = c__4638__auto__;
var G__33179 = cljs.core.count(c__4638__auto__);
var G__33180 = (0);
seq__32772 = G__33177;
chunk__32775 = G__33178;
count__32776 = G__33179;
i__32777 = G__33180;
continue;
} else {
var ext = cljs.core.first(seq__32772__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33182 = cljs.core.next(seq__32772__$1);
var G__33183 = null;
var G__33184 = (0);
var G__33185 = (0);
seq__32772 = G__33182;
chunk__32775 = G__33183;
count__32776 = G__33184;
i__32777 = G__33185;
continue;
} else {
var G__33187 = cljs.core.next(seq__32772__$1);
var G__33188 = null;
var G__33189 = (0);
var G__33190 = (0);
seq__32772 = G__33187;
chunk__32775 = G__33188;
count__32776 = G__33189;
i__32777 = G__33190;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32742){
var G__32743 = cljs.core.first(seq32742);
var seq32742__$1 = cljs.core.next(seq32742);
var G__32744 = cljs.core.first(seq32742__$1);
var seq32742__$2 = cljs.core.next(seq32742__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32743,G__32744,seq32742__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32965,p__32966){
var map__32967 = p__32965;
var map__32967__$1 = cljs.core.__destructure_map(map__32967);
var runtime = map__32967__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32967__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32968 = p__32966;
var map__32968__$1 = cljs.core.__destructure_map(map__32968);
var msg = map__32968__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32968__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32972 = cljs.core.deref(state_ref);
var map__32972__$1 = cljs.core.__destructure_map(map__32972);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32977){
var map__32978 = p__32977;
var map__32978__$1 = cljs.core.__destructure_map(map__32978);
var runtime = map__32978__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32978__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32985,msg){
var map__32986 = p__32985;
var map__32986__$1 = cljs.core.__destructure_map(map__32986);
var runtime = map__32986__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32986__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33001,key,p__33002){
var map__33008 = p__33001;
var map__33008__$1 = cljs.core.__destructure_map(map__33008);
var state = map__33008__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33008__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33009 = p__33002;
var map__33009__$1 = cljs.core.__destructure_map(map__33009);
var spec = map__33009__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33009__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33023,key,spec){
var map__33024 = p__33023;
var map__33024__$1 = cljs.core.__destructure_map(map__33024);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33024__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33027_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33027_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33028_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33028_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33029_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33029_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33030_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33030_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33031_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33031_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33044,key){
var map__33046 = p__33044;
var map__33046__$1 = cljs.core.__destructure_map(map__33046);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33052,msg){
var map__33053 = p__33052;
var map__33053__$1 = cljs.core.__destructure_map(map__33053);
var runtime = map__33053__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33070,p__33071){
var map__33074 = p__33070;
var map__33074__$1 = cljs.core.__destructure_map(map__33074);
var runtime = map__33074__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33076 = p__33071;
var map__33076__$1 = cljs.core.__destructure_map(map__33076);
var msg = map__33076__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33076__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33076__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33093 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33095 = null;
var count__33096 = (0);
var i__33097 = (0);
while(true){
if((i__33097 < count__33096)){
var map__33126 = chunk__33095.cljs$core$IIndexed$_nth$arity$2(null,i__33097);
var map__33126__$1 = cljs.core.__destructure_map(map__33126);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33126__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33228 = seq__33093;
var G__33229 = chunk__33095;
var G__33230 = count__33096;
var G__33231 = (i__33097 + (1));
seq__33093 = G__33228;
chunk__33095 = G__33229;
count__33096 = G__33230;
i__33097 = G__33231;
continue;
} else {
var G__33232 = seq__33093;
var G__33233 = chunk__33095;
var G__33234 = count__33096;
var G__33235 = (i__33097 + (1));
seq__33093 = G__33232;
chunk__33095 = G__33233;
count__33096 = G__33234;
i__33097 = G__33235;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33093);
if(temp__5753__auto__){
var seq__33093__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33093__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33093__$1);
var G__33237 = cljs.core.chunk_rest(seq__33093__$1);
var G__33238 = c__4638__auto__;
var G__33239 = cljs.core.count(c__4638__auto__);
var G__33240 = (0);
seq__33093 = G__33237;
chunk__33095 = G__33238;
count__33096 = G__33239;
i__33097 = G__33240;
continue;
} else {
var map__33135 = cljs.core.first(seq__33093__$1);
var map__33135__$1 = cljs.core.__destructure_map(map__33135);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33135__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33241 = cljs.core.next(seq__33093__$1);
var G__33242 = null;
var G__33243 = (0);
var G__33244 = (0);
seq__33093 = G__33241;
chunk__33095 = G__33242;
count__33096 = G__33243;
i__33097 = G__33244;
continue;
} else {
var G__33246 = cljs.core.next(seq__33093__$1);
var G__33248 = null;
var G__33249 = (0);
var G__33250 = (0);
seq__33093 = G__33246;
chunk__33095 = G__33248;
count__33096 = G__33249;
i__33097 = G__33250;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
