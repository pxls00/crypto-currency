"use strict";(self["webpackChunkcrypto_currency"]=self["webpackChunkcrypto_currency"]||[]).push([[213],{8213:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});s(7658);var r=s(6878),i=s(6669),o=s(1444),a=s(7678),n=(0,a.Z)(r.Z,i.Z,o.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),c=s(6750),l=s(5352),d=r.Z.extend({name:"v-progress-circular",directives:{intersect:c.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,l.kb)(this.calculatedSize),width:(0,l.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,s){this.isVisible=s}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"crypto d-flex flex-column pb-5"},[e("OrdersBookPrice",{attrs:{price:t.cryptoPrice,lastPrice:t.cryptoLastPrice}}),e("div",{staticClass:"crypto__column crypto__column--orders-book border--right border--left mx-auto align-streetch d-flex flex-wrap"},[e("OrdersBookList",{attrs:{list:t.orderBookListAsk,cryptoName:t.cryptoName}}),e("div",{staticClass:"border--left"}),e("OrdersBookList",{attrs:{list:t.orderBookListBids,cryptoName:t.cryptoName,bids:!0}})],1),e(n,{attrs:{value:t.showLoader,opacity:".9"}},[e(d,{attrs:{indeterminate:"",color:"amber",dark:"",size:"64"}})],1)],1)},h=[],u=s(629),m=s(3819);function y(t,e){let s,r,i=!1;function o(){if(i)return r=arguments,void(s=this);t.apply(this,arguments),i=!0,setTimeout((function(){i=!1,r&&(o.apply(s,r),r=s=null)}),e)}return o}var g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders-book"},[e("h4",{staticClass:"white--text text-h5 text-center"},[t._v(t._s(t.bids?"Bids":"Asks"))]),e("div",{staticClass:"orders-book__top px-5 light--text"},[e("div",{staticClass:"orders-book__top-info py-2 d-flex"},[e("div",{staticClass:"text-left"},[e("span",{staticClass:"text-subtitle-2 font-weight-regular grey--text lighten-3"},[t._v(" Price("+t._s(t.cryptoName?.split("/")[1])+") ")])]),e("div",{staticClass:"text-center"},[e("span",{staticClass:"text-subtitle-2 font-weight-regular grey--text lighten-3"},[t._v(" Amount("+t._s(t.cryptoName?.split("/")[0])+") ")])]),t._m(0)])]),e("div",{class:`orders-book__list orders-book__list--${t.bids?"bids":"asks"} py-2 px-2`},[t.list.length?t._e():e("p",{staticClass:"grey--text text-center"},[t._v("No data to display")]),t._l(t.list,(function(s,r){return e("OrdersBookItem",{key:r,attrs:{item:s,bids:t.bids}})}))],2)])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-right"},[e("span",{staticClass:"text-subtitle-2 font-weight-regular grey--text lighten-3"},[t._v(" Total ")])])}],f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders-book__item d-flex px-5"},[e("div",{staticClass:"orders-book__item-info orders-book__item--price text-left"},[e("span",{class:(t.bids?"green--text":"red--text")+" text-body-2 font-weigth-ligth"},[t._v(t._s(t.item?.price))])]),e("div",{staticClass:"orders-book__item-info orders-book__item--amount text-center"},[e("span",{staticClass:"grey--text text-body-2 font-weigth-ligth"},[t._v(t._s(t.item?.amount))])]),e("div",{staticClass:"orders-book__item-info orders-book__item--total text-right"},[e("span",{staticClass:"grey--text text-body-2 font-weigth-ligth"},[t._v(t._s(t.item?.totalPrice))])]),e("div",{class:"orders-book__item-progress "+(t.bids?"orders-book__item-progress--green":"orders-book__item-progress--red"),style:{width:parseFloat(t.item?.totalPrice)/(parseFloat(t.item?.price)/100)+"%"}})])},_=[],k={name:"OrdersBookItemComponent",props:{item:{type:Object,required:!0},bids:{type:Boolean,default:!1}}},b=k,x=s(1001),C=(0,x.Z)(b,f,_,!1,null,"76d617d5",null),B=C.exports,w={name:"OrdersBookListComponent",components:{OrdersBookItem:B},props:{list:{type:Array,required:!0},cryptoName:{type:String,required:!0},bids:{type:Boolean,default:!1}}},S=w,L=(0,x.Z)(S,g,v,!1,null,"29f14eed",null),$=L.exports,P=s(4324),O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"orders-book__list-info d-flex align-center px-5 pt-4 justify-center pb-5"},[e("h5",{class:"text-h5 d-flex align-center font-weight-regular "+("equal"===t.priceDiff?"white--text":"more"===t.priceDiff?"green--text":"red--text")},[t._v(" "+t._s(t.price||"0")+" "),"equal"!==t.priceDiff?e(P.Z,{class:"equal"===t.priceDiff?"white--text":"more"===t.priceDiff?"green--text":"red--text"},[t._v("mdi"+t._s("more"===t.priceDiff?"mdi-arrow-top-right":"mdi-arrow-bottom-right-thin"))]):t._e()],1),e("h5",{staticClass:"font-weight-regula grey--text lighten-3 mx-2 mt-2"},[t._v(" $"+t._s(t.lastPrice||"0")+" ")])])},N=[];function z(t,e){return t&&t!==e?e>t?"more":"less":"equal"}var F={name:"OrdersBookPriceComponent",props:{price:{type:String,default:"0"},lastPrice:{type:String,default:"0"}},computed:{priceDiff(){return z(this.lastPrice,this.price)}}},I=F,Z=(0,x.Z)(I,O,N,!1,null,null,null),A=Z.exports,D={name:"CryptoItemPage",components:{OrdersBookList:$,OrdersBookPrice:A},data(){return{cryptoLastPrice:"",cryptoPrice:"",cryptoName:"",orderBookListAsk:[],orderBookListBids:[],ordersBookSocket:null,cryptoSocket:null,lastUpdatedId:null,showLoader:!1,setOrdersBookListThrottled:y(this.setOrdersBookList,1e3),setCryptoPriceThrottled:y(this.setCryptoPrice,1e3)}},computed:{...(0,u.Se)(["getCryptoList"])},created(){this.cryptoChangedEventBusListener()},async mounted(){this.closeCryptoSockets(),this.setCryptoEventBusEmitter(),this.getCryptoName(),this.getCrypto(this.$route.params.crypto_name),await this.getOrdersBookListHttps(this.$route.params.crypto_name),this.getOrdersBookList(this.$route.params.crypto_name)},methods:{cryptoChangedEventBusListener(){m.Z.$on("cryptoChanged",(async()=>{this.closeCryptoSockets(),this.getCryptoName(),await this.getOrdersBookListHttps(this.$route.params.crypto_name),this.getOrdersBookList(this.$route.params.crypto_name),this.getCrypto(this.$route.params.crypto_name)}))},getCryptoName(){const t=this.$route.params.crypto_name;this.cryptoName=this.getCryptoList.find((e=>e.path===t)).name},closeCryptoSockets(){this.showLoader=!0,this.cryptoSocket?.close(),this.ordersBookSocket?.close(),setTimeout((()=>{this.cryptoPrice=this.cryptoLastPrice="",this.orderBookListAsk=this.orderBookListBids=[],this.showLoader=!1}),1e3)},setCryptoEventBusEmitter(){m.Z.$emit("setCrypto",this.$route.params.crypto_name)},setCryptoPrice(t){const e=parseFloat(t.p).toFixed(2);this.cryptoLastPrice=this.cryptoPrice||e,this.cryptoPrice=e},setOrdersBookList(t){this.lastUpdatedId<=t.u&&(this.orderBookListAsk=t.a.filter((t=>+t[1])).map((t=>{const e=parseFloat(t[0]),s=parseFloat(t[1]);return{price:e.toFixed(2),amount:s.toFixed(5),totalPrice:(e*s).toFixed(5)}})),this.orderBookListBids=t.b.filter((t=>+t[1])).map((t=>{const e=parseFloat(t[0]),s=parseFloat(t[1]);return{price:e.toFixed(2),amount:s.toFixed(5),totalPrice:(e*s).toFixed(5)}})))},getCrypto(t){this.cryptoSocket=new WebSocket(`wss://stream.binance.com:9443/ws/${t}@trade`),this.cryptoSocket.onmessage=t=>{const e=JSON.parse(t.data);this.setCryptoPriceThrottled(e)}},getOrdersBookList(t){this.ordersBookSocket=new WebSocket(`wss://stream.binance.com:9443/ws/${t}@depth`),this.ordersBookSocket.onmessage=t=>{const e=JSON.parse(t.data);this.setOrdersBookListThrottled(e)}},getCryptoHttps(t){return new Promise(((e,s)=>{this.axios.get(`https://api.binance.com/api/v3/avgPrice?symbol=${t}`).then((t=>e(t.data))).catch((t=>s(t)))}))},getOrdersBookListHttps(t){return new Promise(((e,s)=>{this.axios.get(`https://api.binance.com/api/v3/depth?symbol=${t.toUpperCase()}&limit=50`).then((t=>t.data)).then((t=>{this.lastUpdatedId=t.lastUpdateId,e(t)})).catch((t=>s(t)))}))}}},E=D,T=(0,x.Z)(E,p,h,!1,null,null,null),q=T.exports}}]);
//# sourceMappingURL=213.e53fc401.js.map