(function(t){function e(e){for(var r,i,u=e[0],s=e[1],a=e[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/blockchain-mid/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0693":function(t,e,n){},"12fd":function(t,e,n){"use strict";n("55c9")},"407b":function(t,e,n){"use strict";n("0693")},"55c9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(t,e,n,o,c,i){var u=Object(r["k"])("Shop");return Object(r["i"])(),Object(r["c"])(u,{class:"open-sans"})}var c=n("eafa"),i=n.n(c),u={class:"content"},s=Object(r["f"])("h1",{style:{"font-size":"50px","text-align":"center"}},"Cat Shop",-1),a={class:"content__inner"},d={key:0,class:"items-list"},l={key:1,src:i.a,alt:"Loading...",width:"200",height:"200",style:{"border-radius":"100%"}};function p(t,e,n,o,c,i){var p=Object(r["k"])("ShopItem");return Object(r["i"])(),Object(r["e"])("section",u,[s,Object(r["f"])("div",a,[c.isLoading?(Object(r["i"])(),Object(r["e"])("img",l)):(Object(r["i"])(),Object(r["e"])("div",d,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(c.products,(function(t){return Object(r["i"])(),Object(r["c"])(p,{key:t.id,product:t,order:c.orders[t.id],style:{"margin-bottom":"20px"},onOnOrder:i.orderProduct},null,8,["product","order","onOnOrder"])})),128))]))])])}var f=n("ade3"),b=n("5530"),m=(n("d3b7"),n("bc3a")),O=n.n(m),h=O.a.create({baseURL:"https://616bdfe216c3fa00171717fd.mockapi.io/"}),j=h,y=(n("b0c0"),{class:"item"}),g=["src","alt"],v={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-top":"10px"}},x={class:"item__title"},C={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-top":"20px"}},S={key:0,style:{display:"flex","align-items":"center","justify-content":"space-between"}},k=["disabled"];function w(t,e,n,o,c,i){return Object(r["i"])(),Object(r["e"])("div",y,[Object(r["f"])("img",{src:i.productImage,alt:n.product.name,class:"item__image"},null,8,g),Object(r["f"])("div",v,[Object(r["f"])("p",x,Object(r["l"])(n.product.name),1),n.order?(Object(r["i"])(),Object(r["e"])("button",{key:0,class:"status-btn",type:"button",onClick:e[0]||(e[0]=function(){return i.setStatus&&i.setStatus.apply(i,arguments)})},Object(r["l"])(null!==i.statusText?i.statusText:"Проверить статус"),1)):Object(r["d"])("",!0)]),Object(r["f"])("div",C,[Object(r["f"])("button",{class:Object(r["h"])(["item__button",n.order?"--ordered":""]),type:"button",onClick:e[1]||(e[1]=function(){return i.orderProduct&&i.orderProduct.apply(i,arguments)})},Object(r["l"])(n.order?i.orderText:"Купить"),3),n.order?Object(r["d"])("",!0):(Object(r["i"])(),Object(r["e"])("div",S,[Object(r["f"])("button",{class:Object(r["h"])(["counter-btn",c.itemCounter<=1?"--disabled":""]),style:{"margin-right":"10px"},type:"button",disabled:c.itemCounter<=1,onClick:e[2]||(e[2]=function(){return i.decrementItemCounter&&i.decrementItemCounter.apply(i,arguments)})},"-",10,k),Object(r["g"])(" "+Object(r["l"])(c.itemCounter)+" ",1),Object(r["f"])("button",{class:"counter-btn",style:{"margin-left":"10px"},type:"button",onClick:e[3]||(e[3]=function(){return i.incrementItemCounter&&i.incrementItemCounter.apply(i,arguments)})},"+")]))])])}n("99af");var I=["В пути","Вылизывается","Мурчит...","Доставляется","Мяукает","Доставлен"],_={name:"ShopItem",props:{product:{type:Object,required:!0},order:{type:Object,default:null}},data:function(){return{itemCounter:1,status:null}},computed:{productImage:function(){return"https://cataas.com/cat/says/".concat(this.product.name,"?width=240&height=240")},orderText:function(){return"Заказано ".concat(this.order.amount," ").concat(this.product.name)},statusText:function(){return this.status?I[this.status]:null}},methods:{incrementItemCounter:function(){this.itemCounter+=1},decrementItemCounter:function(){this.itemCounter>1&&(this.itemCounter-=1)},orderProduct:function(){this.$emit("onOrder",{productId:this.product.id,amount:this.itemCounter})},setStatus:function(){this.status=Math.floor(6*Math.random())}}},P=(n("12fd"),n("6b0d")),T=n.n(P);const L=T()(_,[["render",w]]);var M=L,J={name:"Shop",components:{ShopItem:M},data:function(){return{products:[],orders:{},isLoading:!1}},mounted:function(){var t=this;this.isLoading=!0,this.orders=this.getOrders(),j.get("products").then((function(e){var n=e.data;return t.products=n})).finally((function(){return t.isLoading=!1}))},methods:{getOrders:function(){return JSON.parse(localStorage.getItem("orders"))||{}},setOrders:function(){localStorage.setItem("orders",JSON.stringify(this.orders))},orderProduct:function(t){var e=t.productId,n=t.amount;this.orders=Object(b["a"])(Object(b["a"])({},this.orders),{},Object(f["a"])({},e,{amount:n})),this.setOrders(this.orders)}}};n("407b");const N=T()(J,[["render",p]]);var q=N,z={name:"App",components:{Shop:q}};const A=T()(z,[["render",o]]);var R=A;n("5aea");Object(r["b"])(R).mount("#app")},"5aea":function(t,e,n){},eafa:function(t,e,n){t.exports=n.p+"img/cat-loader.01c4a5b2.gif"}});
//# sourceMappingURL=app.ca64569b.js.map