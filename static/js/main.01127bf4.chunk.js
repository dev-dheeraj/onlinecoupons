(this["webpackJsonponline-coupons"]=this["webpackJsonponline-coupons"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(28),s=n.n(o),r=(n(36),n(66)),l=(n(37),n(2)),i=n.n(l),u=n(8),d=n(29),p=n(9),j=n(10),h=n(12),m=n(11),b=n(15),x=n.n(b),O="https://oninecoponsapp.herokuapp.com/api",v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(O+t,{});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(O+t,n);case 3:return c=e.sent,e.abrupt("return",c);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=n(6),C=Object(f.a)(),y=n(0),N=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).handleFormChange=function(e){if(e){var t=e.target,n=t.name,a=t.value;console.log(a),c.setState(Object(d.a)({},n,a))}},c.handleCouponUpoadButton=Object(u.a)(i.a.mark((function e(){var t,n,a,o,s,r,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.state,n=t.couponCategory,a=t.couponCode,o=t.couponImage,s=t.couponTitle,r=t.couponValidity,""===n||""===a||""===s||""===r){e.next=9;break}return l={category:n,code:a,image:o,title:s,validity:r},e.next=5,g("/coupon/addCoupon",l);case 5:(u=e.sent)&&u.data&&u.data.is_success&&(console.log(u),C.push("/")),e.next=10;break;case 9:alert("Please fill all details");case 10:case"end":return e.stop()}}),e)}))),c.state={couponTitle:"",couponCategory:"",couponImage:"",couponCode:"",couponValidity:""},c}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.couponCategory,c=t.couponCode,a=(t.couponImage,t.couponTitle),o=t.couponValidity;return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("form",{children:[Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-25",children:Object(y.jsxs)("label",{htmlFor:"c_title",children:["Coupon Title",Object(y.jsxs)("small",{className:"fnt-sm",children:[" ","(e.g. 10% off, only for addidas)"]})]})}),Object(y.jsx)("div",{className:"col-75",children:Object(y.jsx)("input",{type:"text",id:"coupon_title",name:"couponTitle",value:a,onChange:function(t){return e.handleFormChange(t)},placeholder:"Title..."})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-25",children:Object(y.jsx)("label",{htmlFor:"couponCode",children:"Coupon code"})}),Object(y.jsx)("div",{className:"col-75",children:Object(y.jsx)("input",{type:"text",id:"coupon_code",name:"couponCode",value:c,onChange:function(t){return e.handleFormChange(t)},placeholder:"Coupon Code .."})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-25",children:Object(y.jsx)("label",{htmlFor:"couponCode",children:"Valid till"})}),Object(y.jsx)("div",{className:"col-75",children:Object(y.jsx)("input",{type:"date",id:"coupon_validity",name:"couponValidity",value:o,onChange:function(t){return e.handleFormChange(t)},placeholder:"valid till"})})]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-25",children:Object(y.jsxs)("label",{htmlFor:"couponcategory",children:["Coupon category"," ",Object(y.jsxs)("small",{className:"fnt-sm",children:[" ","(e.g. amazon, udemy, flipkart..)"]})]})}),Object(y.jsx)("div",{className:"col-75",children:Object(y.jsx)("input",{type:"text",id:"coupon_cat",name:"couponCategory",value:n,onChange:function(t){return e.handleFormChange(t)},placeholder:"Coupon category .."})})]}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("input",{type:"button",value:"upload coupon",onClick:this.handleCouponUpoadButton})})]})})}}]),n}(c.Component),w=n(30),k=n.n(w),F=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(u.a)(i.a.mark((function e(){var t,n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,n=new URL(t),a=n.pathname?n.pathname.substring(n.pathname.lastIndexOf("/")+1):"",e.next=5,g("/coupon/getCouponsList",{category:a});case 5:o=e.sent,console.log(o),o.data&&o.data.content&&o.data.content.length&&c.setState({couponsList:o.data.content});case 8:case"end":return e.stop()}}),e)}))),c.renderCouponsList=function(){return c.state.couponsList.map((function(e,t){var n=e.validity?k()(e.validity).format("DD-MM-YYYY"):null;return Object(y.jsx)("div",{className:"col-lg-4 mb-6 sm-2",children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("img",{className:"card-img-top",src:"../assets/images/promoCode.png",alt:""}),Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsxs)("h5",{className:"card-text",children:[e.title," "]}),Object(y.jsx)("p",{className:"card-title",children:e.category}),Object(y.jsxs)("h5",{className:"card-text",children:[" ",n?"valid till: ".concat(n):""]}),Object(y.jsxs)("p",{children:["code: ",e.code]}),Object(y.jsx)("a",{href:"#",className:"btn btn-outline-secondary btn-sm",children:Object(y.jsx)("i",{className:"far fa-heart"})})]})]})})}))},c.state={couponsList:[]},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("section",{className:"col-lg-10 col-md-10 col-sm-9",children:this.renderCouponsList()}),Object(y.jsx)("aside",{className:"col-lg-2 col-md-2 col-sm-3",children:Object(y.jsx)("div",{className:"row",children:[1,2,3].map((function(e){return Object(y.jsxs)("div",{className:"col-lg-12 ",children:[Object(y.jsx)("h3",{children:"---"}),Object(y.jsx)("img",{className:"couponCat",src:"../assets/images/Discount-Coupons.png",alt:"react "})]})}))})})]})})}}]),n}(c.Component),T=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).componentDidMount=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/coupon/getAllCategory");case 2:t=e.sent,console.log(t),t.data&&t.data.content&&t.data.content.length&&c.setState({couponCategory:t.data.content});case 5:case"end":return e.stop()}}),e)}))),c.handleCategoryClick=function(e){var t=e||"category";C.push("/coupon/".concat(t)),console.log("-itm",e)},c.renderCouponCategory=function(){var e=c.state.couponCategory;return e&&e.map((function(e){return Object(y.jsxs)("div",{className:"col-md-2 col-sm-4 col-xs-6",children:[Object(y.jsx)("h3",{children:e.category}),Object(y.jsx)("img",{className:"couponCat",src:"../assets/images/discountCouponsCat.png",alt:"react ",onClick:function(){c.handleCategoryClick(e.category)}})]})}))},c.state={couponCategory:[]},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("div",{className:"row",children:this.renderCouponCategory()})})}}]),n}(c.Component);function L(){return Object(y.jsx)("div",{children:Object(y.jsx)(T,{})})}function I(){return Object(y.jsxs)("div",{className:"topnav",id:"commonTopnav",children:[Object(y.jsx)("a",{href:"/",className:"active",children:"Home"}),Object(y.jsx)("a",{href:"/form/uploadcoupon",children:"Upload Coupons"}),Object(y.jsxs)("button",{className:"",style:{background:"#04aa6d",color:"white",position:"absolute",right:0,height:"8%",width:"30%"},onClick:function(){return function(){var e=document.getElementById("commonTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}()},children:[" ","Toggle"]})]})}var D=function(){return Object(y.jsx)(r.b,{history:C,children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(I,{}),Object(y.jsx)("header",{className:"App-header",children:Object(y.jsxs)(r.c,{children:[Object(y.jsx)(r.a,{exact:!0,path:"/",component:L}),Object(y.jsx)(r.a,{path:"/form/uploadcoupon",component:N}),Object(y.jsx)(r.a,{path:"/coupon/:category",component:F})]})})]})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(D,{})}),document.getElementById("root")),_()}},[[64,1,2]]]);
//# sourceMappingURL=main.01127bf4.chunk.js.map