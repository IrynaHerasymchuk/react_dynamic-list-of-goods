(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),a=e(2),s=e(6),c=e(7),i=e(10),u=e(9),d=e(1),l=e.n(d),f=e(3),p=e.n(f),h=(e(16),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function b(t){return new Promise((function(n){return setTimeout(n,t)}))}function g(){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(500);case 2:return t.abrupt("return",fetch(h).then((function(t){return t.json()})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var m=function(){var t=Object(a.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=(e(17),e(0)),O=function(t){var n=t.goods;return Object(x.jsx)("ul",{className:"goodslist",children:n.map((function(t){var n=t.id,e=t.color,r=t.name;return Object(x.jsx)("li",{className:"goodslist__item",style:{color:"".concat(e)},children:r},n)}))})},y=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){var t;Object(s.a)(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).state={goods:[],loading:!1,hasLoadingError:!1},t.setGoods=function(){var n=Object(a.a)(l.a.mark((function n(e){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setState({loading:!0,hasLoadingError:!1}),n.prev=1,n.next=4,e();case 4:r=n.sent,t.setState({goods:r,loading:!1,hasLoadingError:!1}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.setState({hasLoadingError:!0,loading:!1});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),t}return Object(c.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.goods,r=n.loading,o=n.hasLoadingError;return Object(x.jsxs)("div",{className:"goods",children:[Object(x.jsx)("h1",{className:"goods__title",children:"Dynamic list of goods"}),Object(x.jsxs)("div",{className:"goods__buttons",children:[Object(x.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(g)},children:"Load all goods"}),Object(x.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(m)},children:"Load first 5"}),Object(x.jsx)("button",{type:"button",className:"goods__button",onClick:function(){return t.setGoods(v)},children:"Load red goods"})]}),!e.length&&!r&&Object(x.jsx)("p",{children:"Click to start! \ud83d\uded2"}),Object(x.jsx)(x.Fragment,{children:!o&&(r?Object(x.jsx)("p",{children:"Loading... \u23f3"}):Object(x.jsx)(O,{goods:e}))}),o&&"Sorry! Failed to load goods \ud83d\ude14"]})}}]),e}(p.a.Component),_=y;o.a.render(Object(x.jsx)(_,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8be82ff2.chunk.js.map