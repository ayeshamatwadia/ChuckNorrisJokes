(this.webpackJsonpchucknorrisjokes=this.webpackJsonpchucknorrisjokes||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),i=(n(12),n(3)),u=n(4),s=n(6),l=n(5),k=(n(13),function(e){return a.a.createElement("div",{className:"textContainer"},a.a.createElement("p",{className:"chuckJokeText"},e.joke))}),h=(n(14),function(e){return a.a.createElement("div",{className:"container"},a.a.createElement("input",{className:"chuckButton",type:"button",value:"button",onClick:e.getNewJoke}))}),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getChuckNorrisJoke=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){var n=t.value;e.setState({joke:n})}))},e.getNewJoke=function(t){e.getChuckNorrisJoke()},e.state={joke:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getChuckNorrisJoke()}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(k,{joke:this.state.joke}),a.a.createElement(h,{getNewJoke:this.getNewJoke}))}}]),n}(a.a.Component);n(15);var f=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Welcome to the Chuck Norris Random Joke Generator"),a.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.cac90232.chunk.js.map