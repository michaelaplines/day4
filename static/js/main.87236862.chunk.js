(this["webpackJsonpreact-training"]=this["webpackJsonpreact-training"]||[]).push([[0],{231:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(17),c=n.n(r),o=n(10),i=(n(50),n(51),n(18)),b=n(19),l=n(23),u=n(22),s=n(1),d=function(e){return Object(s.jsx)("button",{onClick:e.klik,children:e.text})};a.Component,n(13),n(20),n(8),n(32);function j(e){var t=e.color,n=e.func,a=e.sym;return Object(s.jsx)("button",{style:{background:t},onClick:n,children:a})}a.Component;var h=function(e){return Object(s.jsx)("h1",{children:e.count})};n(53);n(3);var x=n(15);function p(e){var t=e.text,n=(e.color,e.klik);return Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:n,children:t})})}var v={border:"5px solid gold",width:"30%",margin:"0 35% 0 35%",borderRadius:"15px"};function m(e){var t=e.text;return Object(s.jsx)("div",{style:v,children:t})}function k(){var e=Object(x.c)((function(e){return e.balance})),t=Object(x.b)();return Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)(m,{text:"Saldo anda adalah : Rp. ".concat(e)}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),"Apakah mau tambah saldo?",Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-5 rounded",onClick:function(){return t({type:"INCREMENT1000",values:n=1e3}),void setTimeout((function(){alert("Terima kasih, saldo anda bertambah ".concat(n,", menjadi ").concat(e+n))}),100);var n},children:"Tambah Rp.1000"}),Object(s.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded",onClick:function(){return t({type:"INCREMENT5000",values:n=5e3}),void setTimeout((function(){alert("Terima kasih, saldo anda bertambah ".concat(n,", menjadi ").concat(e+n))}),100);var n},children:"Tambah Rp.5000"}),Object(s.jsx)("hr",{}),"Apakah mau tarik saldo?",Object(s.jsx)("br",{}),Object(s.jsx)(p,{klik:function(){return function(n){var a=window.confirm("apakah anda yakin?");e>0?a?(t({type:"DECREMENT1000",values:n}),alert("Saldo anda berkurang ".concat(n,", sekarang jadi ").concat(e-n))):alert("OK"):alert("Saldo tidak cukup")}(1e3)},text:"Tarik Rp. 1000",color:"Red"})]})}var O=n(46),f={balance:0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT1000":case"INCREMENT5000":return{balance:e.balance+t.values};case"DECREMENT1000":return{balance:e.balance-t.values};default:return e}},E=Object(O.a)(g);function N(){return Object(s.jsx)(x.a,{store:E,children:Object(s.jsx)(k,{})})}var C=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(N,{})})};c.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))},50:function(e,t,n){},51:function(e,t,n){}},[[231,1,2]]]);
//# sourceMappingURL=main.87236862.chunk.js.map