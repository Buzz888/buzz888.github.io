(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/life.f79bec9a.png"},function(e,t,n){e.exports=n(45)},,function(e,t,n){},,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=(n(29),n(23)),o=n.n(l),r=n(1),i=n(2),s=n(4),m=n(3),u=n(5),h=n(16),p=n.n(h),d=n(6),f=(n(33),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={flag:!1},e.change=function(){e.setState({flag:!e.state.flag})},e.fn(),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"fn",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setState({flag:!1})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"w-100 flex bg-myblack  ai-center mymenu"},c.a.createElement("span",{onClick:this.change,className:"pl-3 iconfont icon-oacute iconmenu"}),c.a.createElement("img",{alt:"",src:p.a,className:"logo ml-4"}),c.a.createElement("div",{className:"color-myblue pr-5 size-4"}," React"),c.a.createElement("ul",{className:"menu li-none flex w-100  size-4 color-mywhite ai-center pr-2 weight-lighter"},c.a.createElement("li",{className:"pr-5 weight-lighter menua"},c.a.createElement(d.b,{to:"/index",activeClassName:"selected"},"\u57fa\u672c\u4f7f\u7528")),c.a.createElement("li",{className:"pr-5 weight-lighter"},c.a.createElement(d.b,{to:"/router",activeClassName:"selected"},"\u8def\u7531")),c.a.createElement("li",{className:"pr-5 weight-lighter"},c.a.createElement(d.b,{to:"/components",activeClassName:"selected"},"\u7ec4\u4ef6")),c.a.createElement("li",{className:"pr-5 weight-lighter"},c.a.createElement(d.b,{to:"/life",activeClassName:"selected"},"\u751f\u547d\u5468\u671f"))),c.a.createElement("div",{className:"color-mywhite pr-5"},c.a.createElement("a",{href:"https://github.com/Buzz888/buzz888.github.io"},"Github")),c.a.createElement("div",{className:this.state.flag?"modle-menu bg-myblack":"nomenu"},c.a.createElement("ul",{className:"li-none w-100  size-4 flex column color-mywhite ai-center pr-2 weight-lighter"},c.a.createElement("li",{className:"py-4 weight-lighter"},c.a.createElement(d.b,{to:"/index",activeClassName:"selected"},"\u57fa\u672c\u4f7f\u7528")),c.a.createElement("li",{className:"pb-4 weight-lighter"},c.a.createElement(d.b,{to:"/router",activeClassName:"selected"},"\u8def\u7531")),c.a.createElement("li",{className:"pb-4 weight-lighter"},c.a.createElement(d.b,{to:"/components",activeClassName:"selected"},"\u7ec4\u4ef6")),c.a.createElement("li",{className:"pb-4 weight-lighter"},c.a.createElement(d.b,{to:"/life",activeClassName:"selected"},"\u751f\u547d\u5468\u671f")),c.a.createElement("li",{className:"pb-4 weight-lighter"},c.a.createElement(d.b,{to:"/elem",activeClassName:"selected"},"\u6848\u4f8b")),c.a.createElement("li",{className:"pb-4 weight-lighter"},c.a.createElement("a",{className:"color-myblue",href:"https://react.docschina.org/"},"React")),c.a.createElement("li",{onClick:this.change,className:"pb-4 color-myhui guan weight-lighter"},"X"))))}}]),t}(a.Component)),b=n(12),E=n(8),v=n.n(E),g='\n## React\u521d\u59cb\u5316\n###MVC\u6846\u67b6\n>\u4ec0\u4e48\u662fMVC\u6846\u67b6\uff1f\n>>view \u89c6\u56fe model \u6570\u636e controll \u63a7\u5236\u5c42\n\nReact\u5b8c\u6210\u76d1\u542c\u6570\u636e\u7684\u66f4\u65b0,\u6570\u636e\u66f4\u65b0\u5e2e\u52a9\u6211\u4eec\u53bb\u6e32\u67d3\u89c6\u56fe,\u5c06\u865a\u62dfdom\u6e32\u67d3\u4e3a\u771f\u5b9edom\n### \u4e0evue\u76f8\u6bd4\u533a\u522b\n\u89c6\u56fe\u66f4\u65b0\u5e76\u4e0d\u4f1a\u6539\u53d8\u6570\u636emvc\u662f\u5355\u5411  \n\u9700\u8981\u66f4\u65b0\u6570\u636e\u9700\u8981\u5728controll\u5355\u72ec\u5904\u7406\n### React\u57fa\u672c\u4f7f\u7528\n>ReactDOM.render( [ jsx ] , [ container ] , callback )=>jsx:\u8bed\u6cd5 container:\u8282\u70b9 \n\n\u4f7f\u7528\u8981\u70b9:   \n1.  JSX\u8bed\u6cd5\u57fa\u4e8e{}\u7ed1\u5b9a\u52a8\u6001\u6570\u636e Null underfined \u4e3a\u7a7a \u4e0d\u6e32\u67d3  \n2.  \u5728\u62ec\u53f7\u4e0d\u80fd\u4f7f\u7528\u5f15\u7528\u7c7b\u578b\u503c\u9664\u4e86\u6570\u7ec4 \u5373\u5bf9\u8c61/\u51fd\u6570/newDate/\u6b63\u5219\u7b49  \n3. className = class style={{color:\'blue\'}}  \n4. \u4e09\u5143\u8fd0\u7b97\u7b26\u7684\u4f7f\u7528  \n```<h1>{sex===0?\'\u7537\':\'\u5973\'}</h1>{sex===0?<p>hello</p>:null}```\n5. \u6e32\u67d3\u591a\u5217\u8868 \u904d\u5386\u6570\u7ec4\u6216\u8005\u5bf9\u8c61\n\u5fc5\u987b\u8981\u6709\u8fd4\u56de\u503c\u7684\u65b9\u6cd5\u624d\u53ef\u4ee5\u4f7f\u7528\u5982map filter,foreach for\u4e0d\u53ef\u4f7f\u7528\n```\n{data.map(i=>\n<li key={i.id}>\n        <span>{i.id}:</span>\n        <span>{i.name}</span>\n</li>)}\n```\n>\u5fc5\u987b\u8981\u6709key\u56e0\u4e3a\u865a\u62dfdom\u4f1a\u5c31\u5730\u590d\u7528\u4ece\u800c\u63d0\u9ad8dom\u6e32\u67d3\u901f\u5ea6\n\n6.JSX\u672c\u8d28\u4e0a\u5c31\u662f\u8f6c\u6362\u4e3aReact.createElement\u5728React\u5185\u90e8\u6784\u5efa\u865a\u62dfDom\uff0c\u6700\u7ec8\u6e32\u67d3\u51fa\u9875\u9762\n7.\u865a\u62dfdom\u8f6c\u6362\u683c\u5f0f\n>React.createElement("div", null, "hello", React.createElement("div", null, React.createElement("h1", null)));\n\n\u8f6c\u6362\u4e3a:\n>>{\n  $$typeof:Symbol(react.element),\n  key:null,\n  ref:null,\n  type:\u6807\u7b7e\u540d/\u7ec4\u4ef6,\n  props:{\n    xxx:xxx //=>\u7ed9\u5143\u7d20\u6807\u7b7e\u8bbe\u7f6e\u5c5e\u6027(REF/KEY\u9664\u5916)\n    //=>\u6ca1\u6709\u5b50\u8282\u70b9\u5219\u6ca1\u6709children\u6709\u5b50\u8282\u70b9\u624d\u6709children\n}}\n';function j(){var e=this;return c.a.createElement("div",null,c.a.createElement(v.a,{preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:g,onChange:function(){return e.handleChange()}}))}n(39);var C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).props=e,n.state={num:1,text:null,flag:!0},n.onclick=function(){n.setState({num:n.state.num+1})},n.handleClick=function(e){e.preventDefault(),n.setState({text:"<a>\u65e0\u8df3\u8f6c"})},n.handleClick2=function(){n.setState({flag:!n.state.flag})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"listen"},c.a.createElement(v.a,{style:{width:"90%"},className:"listenmd",preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:"\n## React\u4e8b\u4ef6\u7ed1\u5b9a\n1. React \u4e8b\u4ef6\u7684\u547d\u540d\u91c7\u7528\u5c0f\u9a7c\u5cf0\u5f0f\uff08camelCase\uff09\uff0c\u800c\u4e0d\u662f\u7eaf\u5c0f\u5199\u3002\n2. \u4f7f\u7528 JSX \u8bed\u6cd5\u65f6\u4f60\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002  \n\n### React \n```\n<button onClick={activateLasers}>\n  Activate Lasers\n</button>\n```\n>React\u5185\u90e8\u662f\u901a\u8fc7this.state\u53d8\u91cf\u6765\u7ef4\u62a4\u5185\u90e8\u72b6\u6001\uff0c\u5e76\u901a\u8fc7this.stateState\u6765\u4fee\u6539\u72b6\u6001\n\n```\n\u5b9a\u4e49\u53d8\u91cf:\nthis.state = {num:1}\n\u4fee\u6539\u53d8\u91cf\u72b6\u6001:\nthis.setState({\nnum:this.state.num+1\n})\n```\n>\u5176\u4ed6\u53d8\u91cf\u4e0d\u5199\u5219\u4e0d\u4f1a\u6539\u53d8\u5c40\u90e8\u4fee\u6539 \ud83d\udc49\u70b9\u51fb\nReact\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\u662f\u901a\u8fc7preventDefault\n\n \u5728\u4e8b\u4ef6\u6dfb\u52a0e.preventDefault();\n \n###React\u4e09\u5143\u8868\u8fbe\u5f0f\u548c\u5e03\u5c14\u503c\u7684\u4f7f\u7528\n```\nclassName={this.state.flag ? 'open btn' : 'close btn'}\nflag:!this.state.flag\n```\n###\u5411\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4f20\u9012\u53c2\u6570\n```\n<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>\n```\n",onChange:function(){return e.handleChange()}}),c.a.createElement("div",{className:"addlisten"},c.a.createElement("button",{type:"button",className:"listenclick",onClick:this.onclick},"ClickChange"),c.a.createElement("div",{className:"size-5"},this.state.num),c.a.createElement("div",{className:"guodu"}),c.a.createElement("a",{href:"https://github.com/Buzz888/buzz888.github.io",className:"color-myblack",onClick:this.handleClick},"Click me"),c.a.createElement("div",{className:"weight-bolder"},this.state.text),c.a.createElement("div",{className:"guodu"}),c.a.createElement("div",null,c.a.createElement("div",{onClick:this.handleClick2,className:this.state.flag?"open btn":"close btn"}))))}}]),t}(a.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"item-md "},c.a.createElement("div",{className:"tab-title bg-myblack py-3 flex jc-sa"},c.a.createElement(d.b,{to:"/index/first",activeClassName:"titleselected"},"[React\u539f\u7406]"),c.a.createElement(d.b,{to:"/index/listen",activeClassName:"titleselected"},"[React\u4e8b\u4ef6]")),c.a.createElement(b.d,null,c.a.createElement(b.b,{component:j,path:"/index/first"}),c.a.createElement(b.b,{component:C,path:"/index/listen"}),c.a.createElement(b.a,{to:"/index/first",from:"/"})))}}]),t}(a.Component),N=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"item-md"},c.a.createElement(v.a,{preview:"true",height:"85vh",toolbar:"",lineNum:"false",value:'\n## React Router\nweb:  \nnpm install react-router-dom \u5b89\u88c5\u8def\u7531\u6a21\u5757  \n1.\u8def\u7531\u7684\u6302\u8f7d  \n\n```\nindex.js:\u5f15\u5165\u8def\u7531\u6a21\u5757\u9009\u62e9\u8def\u7531\u6a21\u5f0f\nBrowserRouter as Router&HashRouter as Router\n\u4e00\u4e2a\u5e26#\u53f7\u4e00\u4e2a\u4e0d\u5e26 \u540e\u8005\u517c\u5bb9\u6027\u66f4\u597d\nimport {HashRouter as Router ,Route} from \'react-router-dom\'\nrender\u51fd\u6570\u6dfb\u52a0\u8def\u7531\u5339\u914d\n<Router>\n<Route component={App}></Route>\n</Router>\n\n```\n2.\u5f00\u59cb\u4f7f\u7528\u8def\u7531\n\n```\nimport {Router,Route,Link} from \'react-router-dom\'\nLink/NavLink\u7528\u4e8e\u8def\u7531\u8df3\u8f6c\n<Link to="./index"></Link>\n<NavLink>\u53ef\u7528\u4e3alink\u6dfb\u52a0\u6837\u5f0f\u5982activeClassName="selected"\nactiveStyle={{\n    fontWeight: "bold",\n    color: "red"\n  }}\n  ```\n3.\u8def\u7531\u7684\u6e32\u67d3\n>exact \u7528\u4e8e\u4e0d\u5b8c\u5168\u5339\u914d\u9002\u7528\u4e8e\u9875\u9762\u52a8\u6001\u8def\u7531\u6e32\u67d3\u4f7f\u7528\n\n```\ncomponent/render\u6e32\u67d3\u8def\u7531\u7ec4\u4ef6 render\u53ef\u4ee5\u4f20\u503c\n<Route render={(routerprops)=>{return <Index {...routerprops} x={1}></Index>}}></Route>\n\n<Router> \n<Route component={Index} path="/index/"></Route>\n<Route render={()=><div></div>}></Route>\n</Router>\n\u52a8\u6001\u4f20\u503c:\nthis.props.match.params.id\n```\n>\u8def\u7531\u91cd\u5b9a\u5411\n>> ```\n>>  <Switch><Redirect to="/index" from="/"/><Switch>\n>> 404\n>> <Switch>\n>> <Redirect to="/404"/>\n>> <Redirect to="/index" from="/" exact/>\n>> <Switch>\n>> ```\n\n#### \u8def\u7531\u4f20\u503c\u7684\u4e09\u79cd\u65b9\u5f0f  \n1. :id =>this.props.match.params.id  \n2. ?from=artical  \n3. {{pathname:\'/index\',state:{id:1}}}\n   \n#### \u8def\u7531\u8df3\u8f6c\u7684\u65b9\u5f0f\nthis.props.history.push(\'/home\') \u652f\u6301\u4e0a\u9762\u8def\u7531\u4f20\u503c\n\n>\u6ca1\u6709\u7528router\u6e32\u67d3\u7684\u7ec4\u4ef6\u9700\u8981\u901a\u8fc7withRouter()\u5305\u8d77\u6765\u8c03\u7528props\u7684\u65b9\u6cd5\n\n### \u76d1\u542c\u8def\u7531\u53d8\u5316\u7684\u5404\u79cd\u65b9\u5f0f\n1.\u539f\u751f\u65b9\u6cd5\n>window.addEventListener(\'hashchange\', () => {})  \n>\u76d1\u542chash\u7684\u8def\u7531\u53d8\u5316\n\n2.Redux store\u4e2dsubscriptions\u76d1\u542c\u8def\u7531\u7684\u53d8\u5316  \n3\n>componentWillUpdate(nextProps) {\n    if (this.props.location !== nextProps.location) {\n      // \u8def\u7531\u53d8\u5316\n    }\n}\n',onChange:function(){return e.handleChange()}}))}}]),t}(a.Component),O=(n(40),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"w-100 h-100 titlepath bg-myblack flex jc-center"},c.a.createElement("img",{src:p.a,className:" App-logo ",alt:"logo"}),c.a.createElement("h1",{className:"Nopath"},"Is Nopath 404"))}}]),t}(a.Component)),y="\n## \u51fd\u6570\u7ec4\u4ef6\n\u51fd\u6570\u7ec4\u4ef6\u7279\u70b9  \n1. \u7b80\u5355 \u6e32\u67d3\u5feb\u901f \u7ec4\u4ef6\u4e00\u88ab\u8c03\u7528 \u91cc\u9762\u5185\u5bb9\u6e32\u67d3\u5b8c\u6210\uff0c\u5f53\u524d\u7ec4\u4ef6\u5185\u90e8\u4fe1\u606f\u57fa\u672c\u4e0d\u6539\u53d8\n>\u9664\u975e\u91cd\u65b0\u8c03\u7528\u5219\u4f1a\u6539\u53d8\u7ec4\u4ef6\u5185\u5bb9 \n\n2.\u6ca1\u6709state\u72b6\u6001\u7ba1\u63a7\u968f\u65f6\u53d8\u5316\u7684\u5185\u5bb9 \u4e5f\u6ca1\u6709\u751f\u547d\u5468\u671f\n\n### \u4f7f\u7528\n```\nimport React from 'react' =>\u7528\u7ecf\u8fc7react\u6e32\u67d3\u5fc5\u987b\u5f15\u5165\nexport default function component(props){\nreturn(<div>hello react</div>)\n}\n```\n### props\u4f20\u53c2\u65b9\u5f0f\n>\u63d2\u69fd:props.children[0] =>\u6307\u5b9a\u4f20\u67d0\u4e2a\u7d22\u5f15\u503c\n>\u8c03\u7528React.Children.map(\u503c,callback)\n>>React.Children.map(props.children,(item,index){return {item}})\n";function x(){var e=this;return c.a.createElement("div",null,c.a.createElement(v.a,{preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:y,onChange:function(){return e.handleChange()}}))}var R="\n## \u7c7b\u7ec4\u4ef6\n>\u5b66\u4e60\u7c7b\u7ec4\u4ef6\u9700\u8981\u4e86\u89e3\u7c7b\u4e2d\u7684\u9759\u6001\u5c5e\u6027\u9759\u6001\u65b9\u6cd5&\u5b9e\u4f8b\u5c5e\u6027\u548c\u548c\u5b9e\u4f8b\u65b9\u6cd5\n\n```\nclass component(){\n    =>\u8bbe\u7f6e\u9759\u6001\u5c5e\u6027\n     static jack = 18\n    =>\u8bbe\u7f6e\u9759\u6001\u65b9\u6cd5 \n     static say(){\n     console.log('hello react')\n     }\n    =>\u5b9e\u4f8b\u5c5e\u6027\u4e24\u79cd\u65b9\u5f0f\n    jack1 = 18\n    constructor(){\n    this.jack2 = 18\n    } \n    =>\u5b9e\u4f8b\u65b9\u6cd5\n    say1(){\n    console.log('hello react')\n    }\n}\n\u7ee7\u627f\u5173\u952e\u5b57 extends super()=>\u76f8\u5f53\u4e8ecall\n```\n### \u521b\u5efa\u7c7b\u7ec4\u4ef6\n```\nimport React,{Component} from 'react'\nclass A extends Component {\n            constructor(props){\n      props =>\u4f9d\u7136\u662f\u4f20\u9012\u8fdb\u6765\u7684\u5c5e\u6027\n      super(props)\n      }\n      render(){\n      return(<div>hello react</div>)\n      }\n}\n```\nstatic propTypes\u5b9a\u4e49\u5c5e\u6027\u89c4\u5219\nisRequired\u5fc5\u987b\u4f20\u9012\nPropType.string/bool/number/func/object/symbol/node\nelement(JSX\u5143\u7d20)/instanceOf\u5fc5\u987b\u67d0\u5b9e\u4f8b/oneOf([])\u5176\u4e2d\u4e00\u4e2a\n### \u72b6\u6001\u7ba1\u63a7\n```\n this.state = {\n      num:1\n    }\nthis.setState({\n      num:this.state.num+1\n    })\n```\n\n\n### \u975e\u53d7\u63a7\u7ec4\u4ef6\n```\n<P ref=\"timeBox\"><P>\nthis.refs.timeBox.innerHTML = 'hello vue'\n<P ref={x=>{this.timeBox = x}}></P>\n\n";function w(){var e=this;return c.a.createElement("div",null,c.a.createElement(v.a,{preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:R,onChange:function(){return e.handleChange()}}))}var S=n(14),D="\n## Hook\n1. Hook\u53ef\u4ee5\u8ba9\u4f60\u5728\u4e0d\u7f16\u5199 class \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528 state \u4ee5\u53ca\u5176\u4ed6\u7684 React \u7279\u6027\u3002\n2. \u4e3a\u4ec0\u4e48\u4f1a\u6709hook\uff1f  \n\n>\u5728\u7ec4\u4ef6\u4e4b\u95f4\u590d\u7528\u72b6\u6001\u903b\u8f91\u5f88\u96be,\u590d\u6742\u7ec4\u4ef6\u53d8\u5f97\u96be\u4ee5\u7406\u89e3\n\n\n```\nimport React, { useState } from 'react';\n\nfunction Example() {\n  // \u58f0\u660e\u4e00\u4e2a\u53eb \u201ccount\u201d \u7684 state \u53d8\u91cf\u3002 0\u8868\u793a\u8d4b\u4e88\u7684\u503c\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n>useState \u5c31\u662f\u4e00\u4e2a Hook,\u901a\u8fc7\u5728\u51fd\u6570\u7ec4\u4ef6\u91cc\u8c03\u7528\u5b83\u6765\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4e00\u4e9b\u5185\u90e8 state\u3002React \u4f1a\u5728\u91cd\u590d\u6e32\u67d3\u65f6\u4fdd\u7559\u8fd9\u4e2a state\u3002useState \u4f1a\u8fd4\u56de\u4e00\u5bf9\u503c\uff1a\u5f53\u524d\u72b6\u6001\u548c\u4e00\u4e2a\u8ba9\u4f60\u66f4\u65b0\u5b83\u7684\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u5728\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u6216\u5176\u4ed6\u4e00\u4e9b\u5730\u65b9\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002\u5b83\u7c7b\u4f3c class \u7ec4\u4ef6\u7684 this.setState\uff0c\u4f46\u662f\u5b83\u4e0d\u4f1a\u628a\u65b0\u7684 state \u548c\u65e7\u7684 state \u8fdb\u884c\u5408\u5e76\u3002 \n## Effect Hook\nuseEffect \u5c31\u662f\u4e00\u4e2a Effect Hook\uff0c\u7ed9\u51fd\u6570\u7ec4\u4ef6\u589e\u52a0\u4e86\u64cd\u4f5c\u526f\u4f5c\u7528\u7684\u80fd\u529b\u3002\u5b83\u8ddf class \u7ec4\u4ef6\u4e2d\u7684 componentDidMount\u3001componentDidUpdate \u548c componentWillUnmount \u5177\u6709\u76f8\u540c\u7684\u7528\u9014\uff0c\u53ea\u4e0d\u8fc7\u88ab\u5408\u5e76\u6210\u4e86\u4e00\u4e2a API\u3002\uff08\u6211\u4eec\u4f1a\u5728\u4f7f\u7528 Effect Hook \u91cc\u5c55\u793a\u5bf9\u6bd4 useEffect \u548c\u8fd9\u4e9b\u65b9\u6cd5\u7684\u4f8b\u5b50\u3002\uff09\n";n(41);function z(){var e=this,t=Object(a.useState)(0),n=Object(S.a)(t,2),l=n[0],o=n[1],r=Object(a.useState)(["hello React","hello Vue","hello Angular"]),i=Object(S.a)(r,1)[0],s=Object(a.useState)(0),m=Object(S.a)(s,2),u=m[0],h=m[1];return Object(a.useEffect)((function(){document.title="".concat(i[u])})),c.a.createElement("div",null,c.a.createElement(v.a,{preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:D,onChange:function(){return e.handleChange()}}),c.a.createElement("div",{className:"hookstyle flex jc-center ai-center wrap"},c.a.createElement("div",{className:"itemhook"},c.a.createElement("h3",null,"\u8fd9\u662f\u7b2c\u4e00\u4e2ahook"),c.a.createElement("p",null,"You Click ",l," times"),c.a.createElement("button",{className:"listenclick",onClick:function(){return o(l+1)}},"Click me")),c.a.createElement("div",{className:"itemhook"},c.a.createElement("h3",null,"useEffect\u70b9\u6362\u6807\u9898"),c.a.createElement("p",null,"You title ",i[u]," "),c.a.createElement("button",{className:"listenclick",onClick:function(){return h(u<2?u+1:0)}},"\u70b9\u51fb\u5207\u6362title"))))}var L=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"item-md "},c.a.createElement("div",{className:"tab-title bg-myblack py-3 flex jc-sa"},c.a.createElement(d.b,{to:"/components/index",activeClassName:"titleselected"},"[\u51fd\u6570\u7ec4\u4ef6]"),c.a.createElement(d.b,{to:"/components/class",activeClassName:"titleselected"},"[Class\u7ec4\u4ef6]"),c.a.createElement(d.b,{to:"/components/hook",activeClassName:"titleselected"},"[Hook\u7ec4\u4ef6]")),c.a.createElement(b.d,null,c.a.createElement(b.b,{component:x,path:"/components/index"}),c.a.createElement(b.b,{component:w,path:"/components/class"}),c.a.createElement(b.b,{component:z,path:"/components/hook"}),c.a.createElement(b.a,{to:"/components/index",from:"/components",exact:!0}),c.a.createElement(b.a,{to:"/404"})))}}]),t}(a.Component),P=n(26),B=n.n(P),H=(n(42),function(e){function t(){var e;return Object(r.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this)),console.log("constructor"),e.state={title:"hello react"},e.click=function(){e.setState({title:"oh hhhh!"})},setTimeout((function(){e.setState({title:"oh my gald!"})}),2e3),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("render"),c.a.createElement("div",{className:"item-md"},c.a.createElement("h1",{onClick:this.click},this.state.title),c.a.createElement(v.a,{preview:"true",height:"75vh",toolbar:"",lineNum:"false",value:"\n## React\u751f\u547d\u5468\u671f\n\u5f53\u7ec4\u4ef6\u5b9e\u4f8b\u88ab\u521b\u5efa\u5e76\u63d2\u5165 DOM \u4e2d\u65f6\n\u5176\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b\uff1a\n>constructor()  \n>static getDerivedStateFromProps()  \n>render()  \n>componentDidMount()\n\n### \u66f4\u65b0\n\u5f53\u7ec4\u4ef6\u7684 props \u6216 state \u53d1\u751f\u53d8\u5316\u65f6\u4f1a\u89e6\u53d1\u66f4\u65b0\u3002\u7ec4\u4ef6\u66f4\u65b0\u7684\u751f\u547d\u5468\u671f\u8c03\u7528\u987a\u5e8f\u5982\u4e0b:\n>static getDerivedStateFromProps()  \n>shouldComponentUpdate()  \n>render()  \n>getSnapshotBeforeUpdate()  \n>componentDidUpdate()\n\n\n### \u5378\u8f7d\n> componentWillUnmount()\n",onChange:function(){return e.handleChange()}}),c.a.createElement("div",null,c.a.createElement("img",{className:"lifeimg",alt:"",src:B.a})))}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}}]),t}(a.Component)),M=n(17);n(43);function U(){var e=Object(a.useState)(["hello Vue","hello React","hello Bootstarp"]),t=Object(S.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(""),r=Object(S.a)(o,2),i=r[0],s=r[1],m="";return c.a.createElement("div",{className:"itemelem"},c.a.createElement("div",{className:"mt-5 flex ai-center jc-center"},c.a.createElement("input",{value:i,onChange:function(e){return m=e.target.value,s((function(e){return m}))},type:"text",className:"addinp"}),c.a.createElement("button",{onClick:function(){return l((function(e){var t=i;return s((function(e){return""})),""===t?Object(M.a)(e):[].concat(Object(M.a)(e),[t])}))},className:"listenclick ml-4"},"\u6dfb\u52a0\u5230\u5217\u8868")),c.a.createElement("ul",{className:"listitem"},c.a.createElement("h3",{className:"color-myhui ml-2"},"*\u5217\u8868\u70b9\u51fb\u5355\u4e2a\u53ef\u5220\u9664"),n.map((function(e,t){return c.a.createElement("li",{onClick:function(){return l((function(e){var n=e;return n.splice(t,1),console.log(n),Object(M.a)(n)}))},key:t},e)}))))}var A=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"hello redux")}}]),t}(a.Component),I=Object(a.createContext)(),J=I.Provider,W=I.Consumer,T=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).incrementCount=function(){e.setState({count:e.state.count+1})},e.decrementCount=function(){e.setState({count:e.state.count-1})},e.state={count:100},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(J,{value:{count:this.state.count,x:1,onincrementCount:this.incrementCount,ondecrementCount:this.decrementCount}},this.props.children)}}]),t}(a.Component),X=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(W,null,(function(e){return c.a.createElement("span",null,e.count)}))}}]),t}(a.Component),V=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(W,null,(function(t){var n=t.onincrementCount,a=t.ondecrementCount,l="increment"===e.props.type?n:a;return c.a.createElement("button",{onClick:l},e.props.children)}))}}]),t}(a.Component),Y=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"itemelem mt-5"},c.a.createElement("h1",{className:"size-5"},"\u8ba1\u6570\u5668\u7684\u7ec4\u4ef6\u901a\u4fe1"),c.a.createElement("h3",{className:"color-myhui ml-2"},"*Context Api"),c.a.createElement(T,null,c.a.createElement(V,{type:"decrement"},"-"),c.a.createElement(X,null),c.a.createElement(V,{type:"increment"},"+")),c.a.createElement("h3",{className:"color-myhui ml-2"},"*Redux \u4f7f\u7528"),c.a.createElement(A,null))}}]),t}(a.Component),F=function(){return c.a.createElement("div",{className:"flex wrap ml-4"},c.a.createElement("h1",{className:"p-3"},"\u8fd9\u662fReact\u4e00\u4e9b\u6848\u4f8b"),c.a.createElement("div",{className:"guodu"}),c.a.createElement(U,null),c.a.createElement(Y,null))},$=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,null),c.a.createElement("div",{style:{marginTop:"60px"}},c.a.createElement(d.a,null,c.a.createElement(b.d,null,c.a.createElement(b.b,{component:k,path:"/index"}),c.a.createElement(b.b,{component:N,path:"/router"}),c.a.createElement(b.b,{component:L,path:"/components"}),c.a.createElement(b.b,{component:H,path:"/life"}),c.a.createElement(b.b,{component:F,path:"/elem"}),c.a.createElement(b.b,{component:O,path:"/404"}),c.a.createElement(b.a,{to:"/index",from:"/",exact:!0}),c.a.createElement(b.a,{to:"/404"})))))}}]),t}(a.Component);n(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d.a,null,c.a.createElement(b.b,{component:$})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[27,1,2]]]);
//# sourceMappingURL=main.d21dad13.chunk.js.map