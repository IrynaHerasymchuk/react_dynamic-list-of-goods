(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),s=e(2),c=e(6),a=e(7),u=e(10),i=e(9),d=e(1),l=e.n(d),f=e(3),p=e.n(f),b=(e(16),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function h(){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(b).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=function(){var t=Object(s.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(s.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=(e(17),e(0)),O=function(t){var n=t.goods;return Object(v.jsx)("ul",{className:"goodslist",children:n.map((function(t){var n=t.id,e=t.color,r=t.name;return Object(v.jsx)("li",{className:"goodslist__item",style:{color:"".concat(e)},children:r},n)}))})},x=function(t){Object(u.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.setGoods=function(){var n=Object(s.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t.setState({goods:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(a.a)(e,[{key:"render",value:function(){var t=this,n=this.state.goods;return Object(v.jsxs)("div",{className:"goods",children:[Object(v.jsx)("h1",{className:"goods__title",children:"Dynamic list of goods"}),Object(v.jsxs)("div",{className:"goods__buttons",children:[Object(v.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(h)},children:"Load all goods"}),Object(v.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(m)},children:"Load first 5"}),Object(v.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(g)},children:"Load red goods"})]}),n.length>0?Object(v.jsx)(O,{goods:n}):Object(v.jsx)("p",{children:"Click to start!"})]})}}]),e}(p.a.Component),y=x;o.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4dda649c.chunk.js.map