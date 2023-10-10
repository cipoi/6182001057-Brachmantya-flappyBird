System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,o,n,e,r,a,s,p,u,c,l;return{setters:[function(i){t=i.applyDecoratedDescriptor,o=i.inheritsLoose,n=i.initializerDefineProperty,e=i.assertThisInitialized},function(i){r=i.cclegacy,a=i._decorator,s=i.CCFloat,p=i.Animation,u=i.Vec3,c=i.tween,l=i.Component}],execute:function(){var h,d,f,y,m,b,g;r._RF.push({},"5a2afVLXONBUqayxuAMa3HL","Bird",void 0);var v=a.ccclass,w=a.property;i("Bird",(h=v("Bird"),d=w({type:s,tooltip:"how high can it fly"}),f=w({type:s,tooltip:"how long can it fly"}),h((b=t((m=function(i){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=i.call.apply(i,[this].concat(r))||this,n(t,"jumpHeight",b,e(t)),n(t,"jumpDuration",g,e(t)),t.birdAnimation=void 0,t.birdLocation=void 0,t}o(t,i);var r=t.prototype;return r.onLoad=function(){this.resetBird(),this.birdAnimation=this.getComponent(p)},r.resetBird=function(){this.birdLocation=new u(0,0,0),this.node.setPosition(this.birdLocation)},r.fly=function(){var i=this;this.birdAnimation.stop(),c(this.node.position).to(this.jumpDuration,new u(this.node.position.x,this.node.position.y+this.jumpHeight,0),{easing:"smooth",onUpdate:function(t,o){i.node.position=t}}).start(),this.birdAnimation.play()},t}(l)).prototype,"jumpHeight",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),g=t(m.prototype,"jumpDuration",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3.5}}),y=m))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameControl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Ground.ts","./Bird.ts"],(function(e){var t,r,i,n,o,l,a,p,u,c,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.CCInteger,p=e.Node,u=e.Component},function(e){c=e.Ground},function(e){s=e.Bird}],execute:function(){var d,f,y,b,g,h,m,v,C,G,z;o._RF.push({},"3431f1VM4lFfbBpFDNGFDS1","GameControl",void 0);var w=l.ccclass,D=l.property;e("GameControl",(d=w("GameControl"),f=D({type:c,tooltip:"this is ground"}),y=D({type:s}),b=D({type:a}),g=D({type:a}),d((v=t((m=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,i(t,"ground",v,n(t)),i(t,"bird",C,n(t)),i(t,"speed",G,n(t)),i(t,"pipeSpeed",z,n(t)),t}r(t,e);var o=t.prototype;return o.onLoad=function(){this.initListener()},o.initListener=function(){var e=this;this.node.on(p.EventType.TOUCH_START,(function(){e.bird.fly()}))},t}(u)).prototype,"ground",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=t(m.prototype,"bird",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=t(m.prototype,"speed",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 300}}),z=t(m.prototype,"pipeSpeed",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),h=m))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameControl.ts"],(function(t){var o,i,e,n,r,a,s,d,h,p,u,c,g;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,d=t.UITransform,h=t.director,p=t.Canvas,u=t.Vec3,c=t.Component},function(t){g=t.GameControl}],execute:function(){var m,l,S,L,f,w,y,C,v;r._RF.push({},"656a83572JIZLefTd7m4eZw","Ground",void 0);var x=a.ccclass,W=a.property;t("Ground",(m=x("Ground"),l=W({type:s,tooltip:"Ground 1 is here"}),S=W({type:s,tooltip:"Ground 2 is here"}),L=W({type:s,tooltip:"Ground 3 is here"}),m((y=o((w=function(t){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,e(o,"ground1",y,n(o)),e(o,"ground2",C,n(o)),e(o,"ground3",v,n(o)),o.groundWidth1=void 0,o.groundWidth2=void 0,o.groundWidth3=void 0,o.tempStartLocation1=new u,o.tempStartLocation2=new u,o.tempStartLocation3=new u,o.GameControlSpeed=new g,o.gameSpeed=void 0,o}i(o,t);var r=o.prototype;return r.onLoad=function(){this.startUp()},r.startUp=function(){this.groundWidth1=this.ground1.getComponent(d).width,this.groundWidth2=this.ground2.getComponent(d).width,this.groundWidth3=this.ground3.getComponent(d).width,this.tempStartLocation1.x=0,this.tempStartLocation2.x=this.groundWidth1,this.tempStartLocation3.x=this.groundWidth1+this.groundWidth2,this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},r.update=function(t){this.gameSpeed=this.GameControlSpeed.speed,this.tempStartLocation1=this.ground1.position,this.tempStartLocation2=this.ground2.position,this.tempStartLocation3=this.ground3.position,this.tempStartLocation1.x-=this.gameSpeed*t,this.tempStartLocation2.x-=this.gameSpeed*t,this.tempStartLocation3.x-=this.gameSpeed*t;var o=h.getScene().getComponentInChildren(p);this.tempStartLocation1.x<=0-this.groundWidth1&&(this.tempStartLocation1.x=o.getComponent(d).width),this.tempStartLocation2.x<=0-this.groundWidth2&&(this.tempStartLocation2.x=o.getComponent(d).width),this.tempStartLocation3.x<=0-this.groundWidth3&&(this.tempStartLocation3.x=o.getComponent(d).width),this.ground1.setPosition(this.tempStartLocation1),this.ground2.setPosition(this.tempStartLocation2),this.ground3.setPosition(this.tempStartLocation3)},o}(c)).prototype,"ground1",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=o(w.prototype,"ground2",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=o(w.prototype,"ground3",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=w))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Bird.ts","./GameControl.ts","./Ground.ts"],(function(){return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});