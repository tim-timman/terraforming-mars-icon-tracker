(this["webpackJsonpterraforming-mars-icon-tracker"]=this["webpackJsonpterraforming-mars-icon-tracker"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./animal.png":16,"./building.png":17,"./city.png":18,"./earth.png":19,"./energy.png":20,"./event.png":21,"./jovian.png":22,"./leaf.png":23,"./microbe.png":24,"./science.png":25,"./space.png":26,"./terraforming-mars-icons.png":27};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id=15},function(e,t,n){e.exports=n.p+"static/media/animal.db449f30.png"},function(e,t,n){e.exports=n.p+"static/media/building.3658288f.png"},function(e,t,n){e.exports=n.p+"static/media/city.dd2118e6.png"},function(e,t,n){e.exports=n.p+"static/media/earth.a61a6523.png"},function(e,t,n){e.exports=n.p+"static/media/energy.85c4bf5c.png"},function(e,t,n){e.exports=n.p+"static/media/event.5fe00ced.png"},function(e,t,n){e.exports=n.p+"static/media/jovian.c077f899.png"},function(e,t,n){e.exports=n.p+"static/media/leaf.0d8667d4.png"},function(e,t,n){e.exports=n.p+"static/media/microbe.c78f6e8f.png"},function(e,t,n){e.exports=n.p+"static/media/science.e815961d.png"},function(e,t,n){e.exports=n.p+"static/media/space.ef80108a.png"},function(e,t,n){e.exports=n.p+"static/media/terraforming-mars-icons.06ac25f4.png"},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),i=n.n(o),r=(n(13),n(1)),s=n(4),l=n(5),p=n(7),u=n(6),m=(n(14),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;if(Object(s.a)(this,a),(n=t.call(this,e)).isLocalStorageSupported=localStorage&&"function"===typeof localStorage.setItem&&"function"===typeof localStorage.getItem,n.state={},n.resetValues(),n.isLocalStorageSupported){var c=localStorage.getItem("mars-icons");c&&(n.state=JSON.parse(c))}return n}return Object(l.a)(a,[{key:"storeStates",value:function(){this.isLocalStorageSupported&&localStorage.setItem("mars-icons",JSON.stringify(this.state))}},{key:"resetValues",value:function(){this.setState({earth:0,jovian:0,science:0,space:0,building:0,event:0,city:0,energy:0,animal:0,leaf:0,microbe:0},this.storeStates)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"icons"},Object.keys(this.state).map((function(t){return c.a.createElement("div",{className:"icon-container",key:t},c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"btn",onClick:function(){e.state[t]>0&&e.setState(Object(r.a)({},t,e.state[t]-1),e.storeStates)}},c.a.createElement("i",{className:"fa fa-minus-circle"}))),c.a.createElement("div",{className:"icon",style:{backgroundImage:"url("+n(15)("./".concat(t,".png"))+")"}},c.a.createElement("span",{class:"icon-count"},e.state[t])),c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{className:"btn",onClick:function(){e.setState(Object(r.a)({},t,e.state[t]+1),e.storeStates)}},c.a.createElement("i",{className:"fa fa-plus-circle"}))))}))),c.a.createElement("div",{className:"reset-button-container"},c.a.createElement("button",{type:"button",onClick:function(){window.confirm("Are you sure you want to reset the counters?")&&e.resetValues()}},"Reset")))}}]),a}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.69436786.chunk.js.map