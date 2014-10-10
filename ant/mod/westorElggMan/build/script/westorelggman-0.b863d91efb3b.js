qx.$$packageData['b863d91efb3b']={"locales":{},"resources":{},"translations":{}};

qx.Part.$$notifyLoad("b863d91efb3b", function() {
(function(){var k="textfield",j="",i="downbutton",h="upbutton",g="Number",f="inner",d="PageUp",c="Boolean",b="changeValue",a="Down",I="Up",H="execute",G="PageDown",F="changeLocale",E="qx.dynlocale",D="_applyEditable",C="_applyWrap",B="keydown",A="\-]",z="mousewheel",r="_applyValue",s="number",p="_applyMinimum",q="qx.util.format.NumberFormat",n="[0-9",o="keyup",l="spinner",m="this._checkValue(value)",t="_applyMaximum",u="changeNumberFormat",w="changeMaximum",v="changeMinimum",y="_applyNumberFormat",x="qx.ui.form.Spinner";
qx.Class.define(x,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(J,K,L){qx.ui.core.Widget.call(this);
var M=new qx.ui.layout.Grid();
M.setColumnFlex(0,1);
M.setRowFlex(0,1);
M.setRowFlex(1,1);
this._setLayout(M);
this.addListener(B,this._onKeyDown,this);
this.addListener(o,this._onKeyUp,this);
this.addListener(z,this._onMouseWheel,this);

if(qx.core.Environment.get(E)){qx.locale.Manager.getInstance().addListener(F,this._onChangeLocale,this);
}this._createChildControl(k);
this._createChildControl(h);
this._createChildControl(i);
if(J!=null){this.setMinimum(J);
}
if(L!=null){this.setMaximum(L);
}
if(K!==undefined){this.setValue(K);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:l},focusable:{refine:true,init:true},singleStep:{check:g,init:1},pageStep:{check:g,init:10},minimum:{check:g,apply:p,init:0,event:v},value:{check:m,nullable:true,apply:r,init:0,event:b},maximum:{check:g,apply:t,init:100,event:w},wrap:{check:c,init:false,apply:C},editable:{check:c,init:true,apply:D},numberFormat:{check:q,apply:y,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__wd:null,__we:false,__wf:false,_createChildControlImpl:function(N,O){var P;

switch(N){case k:P=new qx.ui.form.TextField();
P.setFilter(this._getFilterRegExp());
P.addState(f);
P.setWidth(40);
P.setFocusable(false);
P.addListener(b,this._onTextChange,this);
this._add(P,{column:0,row:0,rowSpan:2});
break;
case h:P=new qx.ui.form.RepeatButton();
P.addState(f);
P.setFocusable(false);
P.addListener(H,this._countUp,this);
this._add(P,{column:1,row:0});
break;
case i:P=new qx.ui.form.RepeatButton();
P.addState(f);
P.setFocusable(false);
P.addListener(H,this._countDown,this);
this._add(P,{column:1,row:1});
break;
}return P||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,N);
},_getFilterRegExp:function(){var U=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var T=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var S=j;
var Q=j;

if(this.getNumberFormat()!==null){S=this.getNumberFormat().getPrefix()||j;
Q=this.getNumberFormat().getPostfix()||j;
}var R=new RegExp(n+qx.lang.String.escapeRegexpChars(U)+qx.lang.String.escapeRegexpChars(T)+qx.lang.String.escapeRegexpChars(S)+qx.lang.String.escapeRegexpChars(Q)+A);
return R;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var V=this.getChildControl(k);
V.getFocusElement().focus();
V.selectAllText();
},_applyMinimum:function(W,X){if(this.getMaximum()<W){this.setMaximum(W);
}
if(this.getValue()<W){this.setValue(W);
}else{this._updateButtons();
}},_applyMaximum:function(Y,ba){if(this.getMinimum()>Y){this.setMinimum(Y);
}
if(this.getValue()>Y){this.setValue(Y);
}else{this._updateButtons();
}},_applyEnabled:function(bb,bc){qx.ui.core.Widget.prototype._applyEnabled.call(this,bb,bc);
this._updateButtons();
},_checkValue:function(bd){return typeof bd===s&&bd>=this.getMinimum()&&bd<=this.getMaximum();
},_applyValue:function(be,bf){var bg=this.getChildControl(k);
this._updateButtons();
this.__wd=be;
if(be!==null){if(this.getNumberFormat()){bg.setValue(this.getNumberFormat().format(be));
}else{bg.setValue(be+j);
}}else{bg.setValue(j);
}},_applyEditable:function(bh,bi){var bj=this.getChildControl(k);

if(bj){bj.setReadOnly(!bh);
}},_applyWrap:function(bk,bl){this._updateButtons();
},_applyNumberFormat:function(bm,bn){var bo=this.getChildControl(k);
bo.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(u,this._onChangeNumberFormat,this);
this._applyValue(this.__wd,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(k);
},_updateButtons:function(){var bq=this.getChildControl(h);
var bp=this.getChildControl(i);
var br=this.getValue();

if(!this.getEnabled()){bq.setEnabled(false);
bp.setEnabled(false);
}else{if(this.getWrap()){bq.setEnabled(true);
bp.setEnabled(true);
}else{if(br!==null&&br<this.getMaximum()){bq.setEnabled(true);
}else{bq.setEnabled(false);
}if(br!==null&&br>this.getMinimum()){bp.setEnabled(true);
}else{bp.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:this.__we=true;
case I:this.getChildControl(h).press();
break;
case G:this.__wf=true;
case a:this.getChildControl(i).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case d:this.getChildControl(h).release();
this.__we=false;
break;
case I:this.getChildControl(h).release();
break;
case G:this.getChildControl(i).release();
this.__wf=false;
break;
case a:this.getChildControl(i).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bs=this.getChildControl(k);
var bt;
if(this.getNumberFormat()){try{bt=this.getNumberFormat().parse(bs.getValue());
}catch(bu){}}if(bt===undefined){bt=parseFloat(bs.getValue());
}if(!isNaN(bt)){if(bt>this.getMaximum()){bs.setValue(this.getMaximum()+j);
return;
}else if(bt<this.getMinimum()){bs.setValue(this.getMinimum()+j);
return;
}this.setValue(bt);
}else{this._applyValue(this.__wd,undefined);
}},_onChangeLocale:function(bv){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bw=this.getChildControl(k);
bw.setFilter(this._getFilterRegExp());
bw.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(bx){var by=this.getChildControl(k);
by.setFilter(this._getFilterRegExp());
by.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__we){var bA=this.getValue()+this.getPageStep();
}else{var bA=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bA>this.getMaximum()){var bz=this.getMaximum()-bA;
bA=this.getMinimum()+bz;
}}this.gotoValue(bA);
},_countDown:function(){if(this.__wf){var bC=this.getValue()-this.getPageStep();
}else{var bC=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(bC<this.getMinimum()){var bB=this.getMinimum()+bC;
bC=this.getMaximum()-bB;
}}this.gotoValue(bC);
},gotoValue:function(bD){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bD)));
}},destruct:function(){if(qx.core.Environment.get(E)){qx.locale.Manager.getInstance().removeListener(F,this._onChangeLocale,this);
}}});
})();
(function(){var m="saveSettings",l="execute",k='westorelggman/media-playback-start.png',j="colwidths",h="colnames",g="data",f="getAllColumns",d="modern",b="dark",a="theme",W="val",V="helpTxt",U="onServerAnswer",T="auto",S="themeLine",R="changeSelection",Q="reloadButton",P="SilverBlue",O='resetGeneralSettings',N="saveTheme",t="pollingInterval",u="Reset To Default",r="Theme Settings",s="Save Columnwidths",p="Table Settings",q="qx.event.type.Data",n='cs24',o="westorelggman.Settings",v='SilverBlue',w="westorelggman/view-refresh.png",D='saveTheme',B='resetColumnWidth',H="resetColumnWidth",F="getElggData",J="demo",I="General Settings",y='dark',M='modern',L="cs24",K='saveColumnWidth',x="Reset to default",z="Save",A="generalForm",C="pluginWidth",E="changeValue",G='saveGeneralSettings';
qx.Class.define(o,{extend:qx.ui.container.Composite,construct:function(X){if(!X){this.debug("rpc object must have been specified in construct");
return;
}westorelggmanSettings=this;
this.__wg=X;
qx.ui.container.Composite.call(this);
this.__wh=qx.theme.manager.Meta.getInstance().getTheme();
this.__wi();
this.addListener(U,this._onServerAnswer,this);
},events:{"onServerAnswer":q},members:{__wh:null,__wg:null,__wi:function(){this.setLayout(new qx.ui.layout.VBox(10));
this.getChildControl(S);
var Y=new qx.ui.groupbox.GroupBox(I);
Y.setLayout(new qx.ui.layout.Canvas());
this.add(Y);
var be=new qx.ui.form.Form();
var bi=this.__wj=new qx.ui.form.Spinner(400,elggmanMainContainer.getWidth(),2048);
bi.setWidth(200);
bi.addListener(E,function(e){var bq=e.getData();
elggmanMainContainer.setWidth(bq);
elggmanMainContainer.setMaxWidth(bq);
elggmanMainContainer.setMinWidth(bq);
});
be.add(bi,C,null,T);
var ba=this.__wk=new qx.ui.form.Spinner(0,ElggMan_PollingInterval,300);
ba.setWidth(200);
be.add(ba,t,null,T);
var bn=new qx.ui.form.Button(z);
be.addButton(bn);
var bg=new qx.ui.form.Button(x);
be.addButton(bg);
Y.add(new westorelggman.form.renderer.Single(be));
var bl=new qx.data.controller.Form(null,be);
var bo=bl.createModel();
bn.addListener(l,function(){this.__ws();
},this);
bg.addListener(l,function(){this.__wt();
},this);
this.add(new qx.ui.basic.Label(p));
var bc=new qx.ui.container.Composite();
bc.setLayout(new qx.ui.layout.HBox(10));
var bf=new qx.ui.form.RadioButton(ElggMan_rb_view_admin);
var bd=new qx.ui.form.RadioButton(ElggMan_rb_view_user);
this.__wl=ElggMan_friends;
var bb=new qx.ui.form.RadioGroup(bf,bd);
bb.addListener(R,function(e){this.__wl=e.getData()[0].getLabel();
this.__wg.callAsync(function(br,bs,bt){if(bs!=null){elggmanMainContainer.alert("Async("+bt+") exception: "+bs);
}else{self.__wx(this,br.data);
}},f,W,this.__wl);
},this);
bc.add(bf);
bc.add(bd);
this.add(bc);
var bh=this.__wm=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.add(bh);
var bm=this.__wn=new qx.ui.basic.Label();
bm.set({rich:true,wrap:true});
this.add(bm);
var bk=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
var bj=this.__wo=new qx.ui.form.Button(s);
bj.addListener(l,this.__wu,this);
var bp=this.__wp=new qx.ui.form.Button(u);
bp.addListener(l,this.__wv,this);
bk.add(bj);
bk.add(bp);
this.add(bk);
var self=this;
this.__wg.callAsync(function(bu,bv,bw){if(bv!=null){elggmanMainContainer.alert("Async("+bw+") exception: "+bv);
}else{self.__wx(this,bu.data);
}},f,W,this.__wl);
},_createChildControlImpl:function(bx){var by;

switch(bx){case S:by=new qx.ui.groupbox.GroupBox(r);
by.setLayout(new qx.ui.layout.HBox(10));
by.add(this.getChildControl(a));
by.add(this.getChildControl(Q));
this.add(by);
break;
case a:by=new qx.ui.form.SelectBox();
by.setWidth(200);
by.add(this.getChildControl(d));
by.add(this.getChildControl(b));
by.add(this.getChildControl(P));
by.setSelection([this.getChildControl(ElggMan_Theme)]);
by.addListener(R,this.__wq,by);
break;
case d:by=new qx.ui.form.ListItem(ElggMan_theme_modern,k,M);
break;
case b:by=new qx.ui.form.ListItem(ElggMan_theme_dark,k,y);
break;
case L:by=new qx.ui.form.ListItem(ElggMan_theme_cs24,k,n);
break;
case P:by=new qx.ui.form.ListItem(ElggMan_theme_cs24,k,v);
break;
case Q:by=new qx.ui.form.Button(ElggMan_save_reload,w);
by.addListener(l,this.__wr,this);
break;
case A:break;
}return by||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,bx);
},__wq:function(e){var bz=this.getSelection()[0].getModel();

switch(bz){case b:break;
case d:break;
}},__wr:function(){var bA=this.getChildControl(a).getSelection()[0].getModel();
var bB={action:D,theme:bA};
this.__ww(m,bB);
},__ws:function(){var bC={action:G,pluginWidth:this.__wj.getValue(),pollingInterval:this.__wk.getValue()};
this.__ww(m,bC);
},__wt:function(){var bD={action:O};
this.__ww(m,bD);
},__wu:function(){var c=this.__wA.getOverallColumnCount();
var bF=[];

for(var i=0;i<c;i++){bF.push(this.__wA.getColumnWidth(i));
}var bE={action:K,type:this.__wl,colWidths:bF};
this.__ww(m,bE);
},__wv:function(){var bG={action:B,type:this.__wl};
this.__ww(m,bG);
},__ww:function(bH,bI){var bJ={method:bH,action:bI.action};
var self=this;
this.__wg.callAsync(function(bK,bL,bM){if(bL!=null){elggmanMainContainer.alert("Async("+bM+") exception: "+bL);
}else{if(bK.err)elggmanMainContainer.alert(bK.err);
else{if(bK.msg)elggmanMainContainer.alert(bK.txt);
self.fireDataEvent(U,bK);
}}},bH,bI,bJ);
},_onServerAnswer:function(e){var bN=e.getData();

if(bN.method==m){switch(bN.action){case N:if(bN.success){window.location.reload(true);
}break;
case H:var self=this;
this.__wg.callAsync(function(bO,bP,bQ){if(bP!=null){elggmanMainContainer.alert("Async("+bQ+") exception: "+bP);
}else{self.__wx(this,bO.data);
}},f,W,this.__wl);
break;
}if(bN.txt){elggmanMainContainer.alert(bN.txt);
}}},__wx:function(bR,bS){var bT=this.__wy=new qx.ui.table.model.Simple();
bT.setColumns(bS);
var bV=this.__wz=new westorelggman.Table(bT);
bV.set({decorator:null,height:100,columnVisibilityButtonVisible:false,showCellFocusIndicator:true});
this.__wm.add(bV,{left:0,right:0});
var bU=this.__wA=bV.getTableColumnModel();

with(bU){setColumnVisible(0,false);
setColumnWidth(0,0);
setColumnWidth(1,22);
setColumnWidth(2,22);
setDataCellRenderer(1,new qx.ui.table.cellrenderer.Boolean());
setDataCellRenderer(2,new qx.ui.table.cellrenderer.Image(16,16));
}this.__wB();
},__wB:function(){var self=this;
var bW=this.__wy;
var bX=this.__wA;
this.__wg.callAsync(function(bY,ca,cb){if(ca!=null){elggmanMainContainer.alert("Async("+cb+") exception: "+ca);
}else{if(!bY)bY=new Array();

if(bY.err){elggmanMainContainer.alert(bY.err);
return;
}var cd=[[]];

if(!bY[g])bY[g]=new Array();
bW.setData(bY[g]);

if(bY[h]&&bY[h].length){bW.setColumns(bY[h],bY[h]);
}rlen=bY[j].length;
var cc=[null,null,null];

if(rlen){for(i=0;i<rlen;i++){bX.setColumnWidth(i,bY[j][i]);

if(bY[j][i]==0){bX.setColumnVisible(i,false);
}
if(i>2){cc.push(bY[j][i]);
bW.setColumnEditable(i,true);
}else{bW.setColumnEditable(i,false);
}}}if(bY[V]){self.__wn.setValue(bY[V]);
}}},F,J,null,this.__wl);
},__wC:function(e){}}});
})();

});