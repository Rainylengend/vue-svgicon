(function(e){function t(t){for(var i,a,l=t[0],c=t[1],s=t[2],d=0,u=[];d<l.length;d++)a=l[d],o[a]&&u.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={app:0},r=[];function a(e){return l.p+"js/"+({}[e]||e)+"."+{"50d1":"6b40a290"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=o[e]=[t,i]});t.push(n[2]=i);var r,c=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=a(e),r=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");a.type=i,a.request=r,n[1](a)}o[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,c.appendChild(s)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-svgicon/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("42a0")},"0032":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.clazz,style:e.style,attrs:{version:"1.1",viewBox:e.box},domProps:{innerHTML:e._s(e.path)},on:{click:e.onClick}})},o=[],r={},a=[],l="",c="svg",s=!1,d={data:function(){return{loaded:!1}},props:{icon:String,name:String,width:{type:String,default:""},height:{type:String,default:""},scale:String,dir:String,fill:{type:Boolean,default:function(){return!s}},color:String,original:{type:Boolean,default:!1},title:String},computed:{clazz:function(){var e="".concat(c,"-icon");return this.fill&&(e+=" ".concat(c,"-fill")),this.dir&&(e+=" ".concat(c,"-").concat(this.dir)),e},iconName:function(){return this.name||this.icon},iconData:function(){var e=r[this.iconName];return e||this.loaded?e:null},colors:function(){return this.color?this.color.split(" "):[]},path:function(){var e="";return this.iconData?(e=this.iconData.data,e=this.setTitle(e),this.original&&(e=this.addOriginalColor(e)),this.colors.length>0&&(e=this.addColor(e))):a.push({name:this.iconName,component:this}),this.getValidPathData(e)},box:function(){var e=this.width||16,t=this.width||16;return this.iconData?this.iconData.viewBox?this.iconData.viewBox:"0 0 ".concat(this.iconData.width," ").concat(this.iconData.height):"0 0 ".concat(parseFloat(e)," ").concat(parseFloat(t))},style:function(){var e,t,n=/^\d+$/,i=Number(this.scale);!isNaN(i)&&this.iconData?(e=Number(this.iconData.width)*i+"px",t=Number(this.iconData.height)*i+"px"):(e=n.test(this.width)?this.width+"px":this.width||l,t=n.test(this.height)?this.height+"px":this.height||l);var o={};return e&&(o.width=e),t&&(o.height=t),o}},created:function(){r[this.iconName]&&(this.loaded=!0)},methods:{addColor:function(e){var t=this,n=/<(path|rect|circle|polygon|line|polyline|ellipse)\s/gi,i=0;return e.replace(n,function(e){var n=t.colors[i++]||t.colors[t.colors.length-1],o=t.fill;if(n&&"_"===n)return e;n&&0===n.indexOf("r-")&&(o=!o,n=n.split("r-")[1]);var r=o?"fill":"stroke",a=o?"stroke":"fill";return e+"".concat(r,'="').concat(n,'" ').concat(a,'="none" ')})},addOriginalColor:function(e){var t=/_fill="|_stroke="/gi;return e.replace(t,function(e){return e&&e.slice(1)})},getValidPathData:function(e){if(this.original&&this.colors.length>0){var t=/<(path|rect|circle|polygon|line|polyline|ellipse)(\sfill|\sstroke)([="\w\s\.\-\+#\$\&>]+)(fill|stroke)/gi;e=e.replace(t,function(e,t,n,i,o){return"<".concat(t).concat(n).concat(i,"_").concat(o)})}return e},setTitle:function(e){if(this.title){var t=this.title.replace(/\</gi,"&lt;").replace(/>/gi,"&gt;").replace(/&/g,"&amp;");return"<title>".concat(t,"</title>")+e}return e},onClick:function(e){this.$emit("click",e)}},install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.tagName||"svgicon";t.classPrefix&&(c=t.classPrefix),s=!!t.isStroke,t.defaultWidth&&(l=t.defaultWidth),t.defaultHeight&&t.defaultHeight,e.component(n,this)},register:function(e){var t=function(t){r[t]||(r[t]=e[t]),a=a.filter(function(e,n){return e.name===t&&e.component.$set(e.component,"loaded",!0),e.name!==t})};for(var n in e)t(n)},icons:r},h=d,u=n("2877"),p=Object(u["a"])(h,i,o,!1,null,null,null);p.options.__file="SvgIcon.vue";t["a"]=p.exports},"07c6":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _Users_allenice_code_fe_node_vue_svgicon_node_modules_babel_runtime_helpers_es6_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ad52");(function(e,t){"object"===("undefined"===typeof exports?"undefined":Object(_Users_allenice_code_fe_node_vue_svgicon_node_modules_babel_runtime_helpers_es6_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(exports))&&"object"===Object(_Users_allenice_code_fe_node_vue_svgicon_node_modules_babel_runtime_helpers_es6_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(module)?module.exports=t():"function"===typeof define&&__webpack_require__("3c35")?define([],t):"object"===("undefined"===typeof exports?"undefined":Object(_Users_allenice_code_fe_node_vue_svgicon_node_modules_babel_runtime_helpers_es6_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(exports))?exports["VueSvgIconPolyfill"]=t():e["VueSvgIconPolyfill"]=t()})(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===Object(_Users_allenice_code_fe_node_vue_svgicon_node_modules_babel_runtime_helpers_es6_typeof__WEBPACK_IMPORTED_MODULE_0__["a"])(e)&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./polyfill/index.js")}({"./polyfill/index.js":
/*!***************************!*\
        !*** ./polyfill/index.js ***!
        \***************************/
/*! no static exports found */
function polyfillIndexJs(module,exports,__webpack_require__){eval("\n\n/**\n * svg element InnerHTML polyfill\n * @author Allenice\n * @since 2017-07-15 04:37:27\n */\nvar polyfill = __webpack_require__(/*! ./innersvg-polyfill */ \"./polyfill/innersvg-polyfill.js\"); // check browser is suport SvgElement.innerHTML\n\n\nif (typeof window.document.createElementNS('http://www.w3.org/2000/svg', 'svg').innerHTML !== 'string') {\n  polyfill();\n}\n\n//# sourceURL=webpack://VueSvgIconPolyfill/./polyfill/index.js?")},"./polyfill/innersvg-polyfill.js":
/*!***************************************!*\
        !*** ./polyfill/innersvg-polyfill.js ***!
        \***************************************/
/*! no static exports found */
function polyfillInnersvgPolyfillJs(module,exports,__webpack_require__){eval("\n\n/**\n * innerHTML property for SVGElement\n * Copyright(c) 2010, Jeff Schiller\n *\n * Licensed under the Apache License, Version 2\n *\n * Works in a SVG document in Chrome 6+, Safari 5+, Firefox 4+ and IE9+.\n * Works in a HTML5 document in Chrome 7+, Firefox 4+ and IE9+.\n * Does not work in Opera since it doesn't support the SVGElement interface yet.\n *\n * I haven't decided on the best name for this property - thus the duplication.\n */\nmodule.exports = function () {\n  var serializeXML = function serializeXML(node, output) {\n    var nodeType = node.nodeType;\n\n    if (nodeType == 3) {\n      // TEXT nodes.\n      // Replace special XML characters with their entities.\n      output.push(node.textContent.replace(/&/, '&amp;').replace(/</, '&lt;').replace('>', '&gt;'));\n    } else if (nodeType == 1) {\n      // ELEMENT nodes.\n      // Serialize Element nodes.\n      output.push('<', node.tagName);\n\n      if (node.hasAttributes()) {\n        var attrMap = node.attributes;\n\n        for (var i = 0, len = attrMap.length; i < len; ++i) {\n          var attrNode = attrMap.item(i);\n          output.push(' ', attrNode.name, \"='\", attrNode.value, \"'\");\n        }\n      }\n\n      if (node.hasChildNodes()) {\n        output.push('>');\n        var childNodes = node.childNodes;\n\n        for (var i = 0, len = childNodes.length; i < len; ++i) {\n          serializeXML(childNodes.item(i), output);\n        }\n\n        output.push('</', node.tagName, '>');\n      } else {\n        output.push('/>');\n      }\n    } else if (nodeType == 8) {\n      // TODO(codedread): Replace special characters with XML entities?\n      output.push('\x3c!--', node.nodeValue, '--\x3e');\n    } else {\n      // TODO: Handle CDATA nodes.\n      // TODO: Handle ENTITY nodes.\n      // TODO: Handle DOCUMENT nodes.\n      throw 'Error serializing XML. Unhandled node of type: ' + nodeType;\n    }\n  }; // The innerHTML DOM property for SVGElement.\n\n\n  Object.defineProperty(SVGElement.prototype, 'innerHTML', {\n    get: function get() {\n      var output = [];\n      var childNode = this.firstChild;\n\n      while (childNode) {\n        serializeXML(childNode, output);\n        childNode = childNode.nextSibling;\n      }\n\n      return output.join('');\n    },\n    set: function set(markupText) {\n      // Wipe out the current contents of the element.\n      while (this.firstChild) {\n        this.removeChild(this.firstChild);\n      }\n\n      try {\n        // Parse the markup into valid nodes.\n        var dXML = new DOMParser();\n        dXML.async = false; // Wrap the markup into a SVG node to ensure parsing works.\n\n        var sXML = \"<svg xmlns='http://www.w3.org/2000/svg'>\" + markupText + '</svg>';\n        var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement; // Now take each node, import it and append to this element.\n\n        var childNode = svgDocElement.firstChild;\n\n        while (childNode) {\n          this.appendChild(this.ownerDocument.importNode(childNode, true));\n          childNode = childNode.nextSibling;\n        }\n      } catch (e) {\n        console.error(e);\n        throw new Error('Error parsing XML string');\n      }\n    }\n  }); // The innerSVG DOM property for SVGElement.\n\n  Object.defineProperty(SVGElement.prototype, 'innerSVG', {\n    get: function get() {\n      return this.innerHTML;\n    },\n    set: function set(markupText) {\n      this.innerHTML = markupText;\n    }\n  });\n};\n\n//# sourceURL=webpack://VueSvgIconPolyfill/./polyfill/innersvg-polyfill.js?")}})})}).call(this,__webpack_require__("dd40")(module))},"42a0":function(e,t,n){"use strict";n.r(t);n("07c6");var i=n("5ee5"),o=n.n(i),r=n("d125"),a=n("548c"),l=n("fe0e"),c=n("18ac"),s=n("7b9a"),d=n("9ab4"),h=n("60a3"),u={dir:['\n      <icon name="arrow" width="50" height="50" dir="left" title="left"></icon>\n      <icon name="arrow" width="50" height="50" dir="up" title="up"></icon>\n      <icon name="arrow" width="50" height="50" title="right"></icon>\n      <icon name="arrow" width="50" height="50" dir="down" title="down"></icon>\n      '],fill:['\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" :fill="false"></icon>\n      '],"r-color":['\n        <icon name="clock" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>\n      '],color:['\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" width="50" height="50" color="red"></icon>\n      <icon name="arrow" width="50" height="50" color="green"></icon>\n      <icon name="arrow" width="50" height="50" color="blue"></icon>\n      '],size:['\n      <icon name="arrow"></icon>\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="arrow" height="50"></icon>\n      <icon name="arrow" scale="15"></icon>\n      <icon name="arrow" width="10em" height="10em"></icon>\n      '],"multi-color":['<icon name="check" :fill="false" width="100" height="100" color="r-#42b983 white"></icon>'],"multi-color2":['<icon name="colorwheel" width="200" height="200" :color="datas[0]"></icon>','\n      <template>\n        <icon name="colorwheel" width="200" height="200" :color="colors"></icon>\n      </template>\n\n      <script>\n        export default {\n          data () {\n            return {\n              colors: \'#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944\'\n            }\n          }\n        }\n      <\/script>\n      '],"original-color":['\n        <icon name="colorwheel" width="100" height="100" original></icon>\n        \x3c!-- overwrite original color --\x3e\n        <icon name="colorwheel" width="100" height="100" original color="_ black _ black _"></icon>\n        <icon name="colorwheel" width="100" height="100" original color="_ r-black _ r-red _"></icon>\n        <icon name="gift" width="100" height="100" original></icon>\n      '],gradient:['<icon name="vue" width="15rem" height="15rem" color="url(#gradient-1) url(#gradient-2)"></icon>','\n      <template>\n        <svg style="width: 0; position: absolute; opacity: 0">\n          <defs>\n              <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#57f0c2"/>\n                  <stop offset="95%" stop-color="#147d58"/>\n              </linearGradient>\n              <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">\n                  <stop offset="5%"  stop-color="#7295c2"/>\n                  <stop offset="95%" stop-color="#252e3d"/>\n              </linearGradient>\n          </defs>\n        </svg>\n\n        #{{tpl}}\n      </template>\n      '],namespace:['\n      <icon name="arrow" width="50" height="50"></icon>\n      <icon name="sora/arrow" width="50" height="50"></icon>\n      <icon name="sora/fit/arrow" width="50" height="50"></icon>\n      '],uid:['\n      <icon name="mask" width="100" height="100"></icon>\n      <icon name="sora/fit/mask" width="100" height="100" color="url(#svgicon_sora_fit_mask_a) red green" ></icon>\n      '],async:['\n        <icon name="download" width="40" height="40" color="red" ></icon>\n        <icon name="download" width="40" height="40" color="green" ></icon>\n        <icon name="download" width="40" height="40" color="blue" ></icon>\n        <icon name="good" width="40" height="40" class="good"></icon>\n      ',"\n      <template> #{{tpl}}</template>\n\n      <script>\n        export default {\n          mounted () {\n            require.ensure([], () => {\n              require('icons-async')\n            }, 'async-icons')\n          }\n        }\n      <\/script>\n      "]},p=n("a70e");p["registerLanguage"]("javascript",n("4dd1")),p["registerLanguage"]("xml",n("8dcb"));var f=p,g=function(e){function t(){return Object(r["a"])(this,t),Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(l["a"])(t,[{key:"mounted",value:function(){var e=this,t=this.$refs.code;t&&(t.textContent=this.codeString[1]?this.codeString[1].replace(/#{{(\w+)}}/g,function(t,n){return e.codeString[0]}):this.codeString[0],f.highlightBlock(t))}},{key:"render",value:function(){var e=arguments[0];if(this.codeString){var t=this.datas||[],n=function(e){function n(){var e;return Object(r["a"])(this,n),e=Object(c["a"])(this,Object(s["a"])(n).apply(this,arguments)),e.datas=t,e}return Object(a["a"])(n,e),n}(h["c"]);return n=d["a"]([Object(h["a"])({name:"PreviewBlock",template:"<div>".concat(this.codeString[0],"</div>")})],n),e("div",{class:"demo-block"},[e(n),e("div",[e("pre",[e("code",{ref:"code",class:"html"})])])])}return e("div")}},{key:"codeString",get:function(){return u[this.code]}}]),Object(a["a"])(t,e),t}(h["c"]);d["a"]([Object(h["b"])(),d["b"]("design:type",String)],g.prototype,"code",void 0),d["a"]([Object(h["b"])(),d["b"]("design:type",Array)],g.prototype,"datas",void 0),g=d["a"]([Object(h["a"])({components:{}})],g);var _=g,m=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.colors="#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944",e}return Object(l["a"])(t,[{key:"mounted",value:function(){setTimeout(function(){n.e("50d1").then(n.bind(null,"50d1")).then(function(){console.log("Async icons loaded")})},3e3)}},{key:"render",value:function(){var e=arguments[0];return e("div",{attrs:{id:"app"}},[e("p",[e("icon",{class:"vue-logo",attrs:{name:"vue",width:"15rem",height:"15rem"}})]),e("h1",["Vue Svg Icon"]),e("p",[e("a",{class:"github-button",attrs:{href:"https://github.com/MMF-FE/vue-svgicon","data-size":"large","data-show-count":"true","aria-label":"Star MMF-FE/vue-svgicon on GitHub"}},["Star"])]),e("div",[e("h2",["Color (defalt: inherit)"]),e("p",{style:"color: darkorange"},[e("demo-block",{attrs:{code:"color"}})]),e("h2",["Multi Color (define by path/shape order)"]),e("demo-block",{attrs:{code:"multi-color"}}),e("demo-block",{attrs:{code:"multi-color2",datas:[this.colors]}}),e("h2",["Use original colors"]),e("demo-block",{attrs:{code:"original-color"}}),e("h2",["Gradient"]),e("demo-block",{attrs:{code:"gradient"}}),e("h2",["Size (defalt unit: px)"]),e("demo-block",{attrs:{code:"size"}}),e("h2",["Fill (default: fill)"]),e("demo-block",{attrs:{code:"fill"}}),e("h2",["r-color (reverse fill property)"]),e("demo-block",{attrs:{code:"r-color"}}),e("div",["circle is fill, path is stroke"]),e("h2",["Direction (default: right)"]),e("demo-block",{attrs:{code:"dir"}}),e("h2",["Namespace"]),e("demo-block",{attrs:{code:"namespace"}}),e("h2",["Unique Id"]),e("demo-block",{attrs:{code:"uid"}}),e("h2",["Async"]),e("demo-block",{attrs:{code:"async"}})]),e("svg",{style:"width: 0; position: absolute; opacity: 0"},[e("defs",[e("linearGradient",{attrs:{id:"gradient-1",x1:"0",y1:"0",x2:"0",y2:"1"}},[e("stop",{attrs:{offset:"5%","stop-color":"#57f0c2"}}),e("stop",{attrs:{offset:"95%","stop-color":"#147d58"}})]),e("linearGradient",{attrs:{id:"gradient-2",x1:"0",y1:"0",x2:"0",y2:"1"}},[e("stop",{attrs:{offset:"5%","stop-color":"#7295c2"}}),e("stop",{attrs:{offset:"95%","stop-color":"#252e3d"}})])])])])}}]),Object(a["a"])(t,e),t}(h["c"]);m=d["a"]([Object(h["a"])({components:{DemoBlock:_}})],m);var v=m,w=n("0032");w["a"].register({arrow:{width:4,height:7,viewBox:"0 0 4 7",data:'<path pid="0" d="M.702 1.006C.51.813.354.888.354 1.154v5.08c0 .275.163.334.348.149l2.34-2.34a.5.5 0 0 0 0-.697l-2.34-2.34z" _fill="#D8D8D8" fill-rule="evenodd"/>'}}),w["a"].register({check:{width:32,height:31,viewBox:"0 0 32 31",data:'<g transform="translate(.953)" font-family="\'Helvetica Neue\'" _fill="none" fill-rule="evenodd"><ellipse pid="0" _fill="#8BDC84" cx="15.447" cy="15.5" rx="15.447" ry="15.5"/><path pid="1" _stroke="#FFF" stroke-width="2.52" stroke-linecap="round" stroke-linejoin="round" d="M21.925 12l-9.717 8-3.239-2.857"/></g>'}}),w["a"].register({clock:{width:16,height:16,viewBox:"0 0 16 16",data:'<g _fill="none" fill-rule="evenodd"><circle pid="0" _fill="#8A99B2" cx="8" cy="8" r="8"/><g _stroke="#1C2330" stroke-linecap="round"><path pid="1" d="M7.257 3.625V9.04M7.262 9.128h4.782"/></g></g>'}}),w["a"].register({colorwheel:{width:16,height:16,viewBox:"0 0 800 800",data:'<path pid="0" d="M679.682 120.407c68.089 68.584 105.462 148.798 114.209 245.015L678.59 375.461l-.003-.029-41.446 3.607c-5.168-55.563-29.522-107.846-68.584-147.507l111.125-111.125z" _fill="#FBAD20"/><path pid="1" _fill="#F5EB13" d="M793.991 365.323c8.051 96.316-14.811 181.798-69.977 261.119l-48.196-33.714-.011.017-80.811-56.558c31.609-45.722 46.518-101.385 42.145-157.148l77.93-6.783 78.92-6.933z"/><path pid="2" d="M594.996 536.088l34.143 23.926.05-.07 94.825 66.398c-55.761 78.921-128.222 129.714-222.75 155.459l-30.018-112.122.082-.024-10.717-40.231c41.548-11.332 78.623-32.801 108.342-62.523a239.826 239.826 0 0 0 26.043-30.813z" _fill="#B8D433"/><path pid="3" d="M299.784 614.911c50.493 23.16 107.847 28.13 160.827 14.612l25.544 95.421-.225.057 15.234 56.898c-92.241 24.155-180.407 16.402-268.076-24.054l24.891-53.358-.041-.019 41.846-89.557z" _fill="#6BC9C6"/><path pid="4" d="M184.979 500.106c11.829 25.048 27.832 47.612 47.513 67.392 19.681 19.681 42.344 35.684 67.293 47.513l-17.495 37.571-.486 1.042-23.767 51.043-.034-.016-24.815 53.194c-44.133-20.773-81.109-46.319-112.916-78.227-31.808-31.806-57.453-68.783-78.227-112.915L147.308 517.6l.019.038 37.652-17.532z" _fill="#058BC5"/><path pid="5" d="M18.487 297.435l112.221 30.017-.028.114 40.085 10.721c-13.916 53.972-8.945 111.326 14.214 161.819l-89.656 41.847-.011-.024-53.267 24.873C1.591 479.034-6.163 390.968 18.487 297.435z" _fill="#34469D"/><path pid="6" d="M173.548 76.175l33.78 48.219.016-.012 26.477 37.831 6.224 8.886-.003.003 23.86 34.091c-10.934 7.752-21.272 16.599-30.814 26.043-29.719 29.719-51.19 66.794-62.224 107.25l-94.89-25.477-57.487-15.376c25.347-93.236 76.14-165.696 155.061-221.458z" _fill="#7E4D9F"/><path pid="7" d="M390.235 4.495c14.799-.376 29.582.415 44.333 1.504l-5.151 58.639.082.006-8.549 98.205c-55.762-4.473-111.425 10.537-157.148 42.145l-23.891-34.137-.065.043-66.397-94.924c54.007-37.87 116.665-62.546 182.379-69.404 15.12-1.577 19.187-1.485 34.407-2.077z" _fill="#C63D96"/><path pid="8" d="M568.358 231.433c-39.66-39.162-91.944-63.416-147.607-68.584l8.648-98.205.016.002 5.153-58.647c96.217 8.847 176.431 46.22 245.015 114.209L568.358 231.433z" _fill="#ED1944"/>'}}),w["a"].register({gift:{width:16,height:16,viewBox:"0 0 16 17",data:'<path pid="0" d="M8.2 3.4L9.6 2 11 3.4l-.7.6.7.7.6-.6c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0L7.2 2.9l1 .5zM9.6 2L11 3.4l-.7.6.7.7.6-.6c.4-.4.4-1 0-1.4l-1.4-1.4c-.4-.4-1-.4-1.4 0L7.2 2.9l1 .4L9.6 2z" _fill="#ff3465"/><path pid="1" d="M8.8 4.8L5.9 2 4.5 3.4l.7.7-.7.7-.7-.7c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l3.5 3.5H8.8zm0 0L5.9 2 4.5 3.4l.7.7-.7.7-.7-.7c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l3.5 3.5H8.8zM2 10v6h12v-6H2zm0-1h12c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1z" _fill="#ff3465"/><path pid="2" d="M1 5v4h14V5H1zm0-1h14c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1z" _fill="#ff3465"/><linearGradient id="svgicon_gift_a" gradientUnits="userSpaceOnUse" x1="-216.25" y1="391.435" x2="-216.25" y2="392.435" gradientTransform="matrix(4 0 0 -11 873 4321.788)"><stop offset="0" stop-color="#ffd5e0"/><stop offset="1" stop-color="#ff3465"/></linearGradient><path pid="3" _fill="url(#svgicon_gift_a)" d="M6 5h4v11H6z"/>'}}),w["a"].register({mask:{width:16,height:16,viewBox:"0 0 200 200",data:'<defs><clipPath id="svgicon_mask_a"><path pid="0" d="M0 0h200v100H0z"/></clipPath></defs><circle pid="1" cx="100" cy="100" r="100" clip-path="url(#svgicon_mask_a)"/>'}}),w["a"].register({"sora/arrow":{width:200,height:200,viewBox:"0 0 1024 1024",data:'<defs/><path pid="0" d="M165.39 594.774h287.782v263.292l430.622-359.694-430.62-359.706v230.242H165.39v225.866z"/>'}}),w["a"].register({"sora/fit/arrow":{width:254.688,height:200,viewBox:"0 0 1304 1024",data:'<defs/><path pid="0" d="M552.588 0h88.622c137.03 128.838 268.102 264.378 401.408 396.94v20.852C913.036 557.056 778.985 691.107 638.976 819.2h-87.878C654.615 689.617 764.09 564.503 881.012 446.836c-293.422 1.49-587.59-.744-881.012.745v-75.217c293.423 0 586.845-1.49 880.268 0C763.345 255.44 655.36 129.583 552.588 0z"/>'}}),w["a"].register({"sora/fit/mask":{width:16,height:16,viewBox:"0 0 200 200",data:'<defs><linearGradient id="svgicon_sora_fit_mask_a"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient><mask id="svgicon_sora_fit_mask_b"><path pid="0" _fill="url(#svgicon_sora_fit_mask_a)" d="M0 0h200v200H0z"/></mask></defs><path pid="1" _fill="green" d="M0 0h200v200H0z"/><path pid="2" _fill="red" mask="url(#svgicon_sora_fit_mask_b)" d="M0 0h200v200H0z"/>'}}),w["a"].register({vue:{width:2500,height:2158,viewBox:"0 0 256 221",data:'<path pid="0" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" _fill="#41B883"/><path pid="1" d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" _fill="#35495E"/>'}});n("b11d");o.a.config.productionTip=!1,o.a.use(w["a"],{tagName:"icon"}),new o.a({render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.0e520ceb.js.map