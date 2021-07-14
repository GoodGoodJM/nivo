(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{JiZB:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("Eo5u"),r=n("9CL0"),o=n("tsrg"),i=n("RQLE"),l=[{key:"data",group:"Base",help:"Chart data, which should be immutable.",description:"\n            Chart data, which must conform to this structure\n            if using the default `id` and `value` accessors:\n\n            ```\n            Array<{\n                // must be unique for the whole dataset\n                id:    string | number,\n                value: number\n            }>\n            ```\n\n            If using a different data structure, you must make sure\n            to adjust both `id` and `value`. Meaning you can provide\n            a completely different data structure as long as `id` and `value`\n            return the appropriate values.\n\n            Immutability of the data is important as re-computations\n            depends on it.\n        ",type:"object[]",required:!0},{key:"id",group:"Base",help:"ID accessor which should return a unique value for the whole dataset.",description:"\n            Define how to access the ID of each datum,\n            by default, nivo will look for the `id` property.\n        ",type:"string | (datum: RawDatum): string | number",required:!1,defaultValue:r.d.id},{key:"value",group:"Base",help:"Value accessor.",description:"\n            Define how to access the value of each datum,\n            by default, nivo will look for the `value` property.\n        ",type:"string | (datum: RawDatum): number",required:!1,defaultValue:r.d.value},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",controlType:"valueFormat"},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using\n            `<ResponsivePie/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using\n            `<ResponsivePie/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"startAngle",help:"Start angle (in degrees), useful to make gauges for example.",type:"number",required:!1,defaultValue:r.d.startAngle,controlType:"angle",group:"Base",controlOptions:{unit:"°",min:-180,max:360,step:5}},{key:"endAngle",help:"End angle (in degrees), useful to make gauges for example.",type:"number",required:!1,defaultValue:r.d.endAngle,controlType:"angle",group:"Base",controlOptions:{unit:"°",min:-360,max:360,step:5}},{key:"fit",help:"If 'true', pie will be optimized to occupy more space when using partial pie.",type:"boolean",required:!1,defaultValue:r.d.fit,controlType:"switch",group:"Base"},{key:"innerRadius",help:"Donut chart if greater than 0. Value should be between 0~1 as it's a ratio from original radius.",type:"number",required:!1,defaultValue:r.d.innerRadius,controlType:"range",group:"Base",controlOptions:{min:0,max:.95,step:.05}},{key:"padAngle",help:"Padding between each pie slice.",type:"number",required:!1,defaultValue:r.d.padAngle,controlType:"range",group:"Base",controlOptions:{unit:"°",min:0,max:45,step:1}},{key:"cornerRadius",help:"Rounded slices.",type:"number",required:!1,defaultValue:r.d.cornerRadius,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:45,step:1}},{key:"sortByValue",help:"If 'true', arcs will be ordered according to their associated value.",type:"boolean",required:!1,defaultValue:r.d.sortByValue,controlType:"switch",group:"Base"},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},i.f,{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:r.d.colors,controlType:"ordinalColors",group:"Style"}].concat(Object(a.a)(Object(i.b)("Style",["svg","api"])),[{key:"showcase pattern usage",flavors:["svg"],help:"Patterns.",description:"\n            You can use `defs` and `fill` properties\n            to use patterns, see\n            [dedicated guide](self:/guides/patterns)\n            for further information.\n        ",type:"boolean",controlType:"switch",group:"Style"},{key:"borderWidth",help:"Slices border width.",type:"number",required:!1,defaultValue:r.d.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:r.d.borderColor,controlType:"inheritedColor",group:"Style"},{key:"enableArcLabels",help:"Enable/disable arc labels.",type:"boolean",required:!1,defaultValue:r.d.enableArcLabels,controlType:"switch",group:"Arc labels"},{key:"arcLabel",help:"Defines how to get label text, can be a string (used to access current node data property) or a function which will receive the actual node data.",type:"string | Function",required:!1,defaultValue:r.d.arcLabel,controlType:"choices",group:"Arc labels",controlOptions:{choices:["id","value","formattedValue","d => `${d.id} (${d.value})`"].map((function(e){return{label:e,value:e}}))}},{key:"arcLabelsRadiusOffset",help:"\n            Define the radius to use to determine the label position, starting from inner radius,\n            this is expressed as a ratio.\n        ",type:"number",required:!1,defaultValue:r.d.arcLabelsRadiusOffset,controlType:"range",group:"Arc labels",controlOptions:{min:0,max:2,step:.05}},{key:"arcLabelsSkipAngle",help:"Skip label if corresponding arc's angle is lower than provided value.",type:"number",required:!1,defaultValue:r.d.arcLabelsSkipAngle,controlType:"range",group:"Arc labels",controlOptions:{unit:"°",min:0,max:45,step:1}},{key:"arcLabelsTextColor",help:"Defines how to compute arc label text color.",type:"string | object | Function",required:!1,defaultValue:r.d.arcLabelsTextColor,controlType:"inheritedColor",group:"Arc labels"},{key:"enableArcLinkLabels",help:"Enable/disable arc link labels.",type:"boolean",required:!1,defaultValue:r.d.enableArcLinkLabels,controlType:"switch",group:"Arc link labels"},{key:"arcLinkLabel",help:"Arc link label",description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:r.d.arcLinkLabel,controlType:"choices",group:"Arc link labels",controlOptions:{choices:["id","value","d => `${d.id} (${d.value})`"].map((function(e){return{label:e,value:e}}))}},{key:"arcLinkLabelsSkipAngle",help:"Skip label if corresponding slice's angle is lower than provided value.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsSkipAngle,controlType:"range",group:"Arc link labels",controlOptions:{unit:"°",min:0,max:45,step:1}},{key:"arcLinkLabelsOffset",help:"Link offset from pie outer radius, useful to have links overlapping pie slices.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsOffset,controlType:"range",group:"Arc link labels",controlOptions:{unit:"px",min:-24,max:24,step:1}},{key:"arcLinkLabelsDiagonalLength",help:"Link diagonal length.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsDiagonalLength,controlType:"range",group:"Arc link labels",controlOptions:{unit:"px",min:0,max:36,step:1}},{key:"arcLinkLabelsStraightLength",help:"Length of the straight segment of the links.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsStraightLength,controlType:"range",group:"Arc link labels",controlOptions:{unit:"px",min:0,max:36,step:1}},{key:"arcLinkLabelsTextOffset",help:"X offset from links' end.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsTextOffset,controlType:"range",group:"Arc link labels",controlOptions:{unit:"px",min:0,max:36,step:1}},{key:"arcLinkLabelsThickness",help:"Links stroke width.",type:"number",required:!1,defaultValue:r.d.arcLinkLabelsThickness,controlType:"lineWidth",group:"Arc link labels"},{key:"arcLinkLabelsTextColor",help:"Defines how to compute arc link label text color.",type:"string | object | Function",required:!1,defaultValue:r.d.arcLinkLabelsTextColor,controlType:"inheritedColor",group:"Arc link labels"},{key:"arcLinkLabelsColor",help:"Defines how to compute arc link label link color.",type:"string | object | Function",required:!1,defaultValue:r.d.arcLinkLabelsColor,controlType:"inheritedColor",group:"Arc link labels"},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer must be a function.\n\n            The layer component which will receive the chart's\n            context & computed data and must return a valid SVG element\n            for the `Pie` component.\n\n            When using the canvas implementation, the function\n            will receive the canvas 2d context as first argument\n            and the chart's context and computed data as second.\n\n            Please make sure to use `context.save()` and\n            `context.restore()` if you make some global\n            modifications to the 2d context inside this function\n            to avoid side effects.\n\n            The context passed to layers has the following structure:\n\n            ```\n            {\n                dataWithArc:  DatumWithArc[],\n                arcGenerator: Function\n                centerX:      number\n                centerY:      number\n                radius:       number\n                innerRadius:  number\n            }\n            ```\n        ",required:!1,type:"Array<string | Function>",defaultValue:r.d.layers},{key:"isInteractive",flavors:["svg","canvas"],group:"Interactivity",help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:r.d.isInteractive,controlType:"switch"},{key:"activeInnerRadiusOffset",flavors:["svg","canvas"],help:"Skip label if corresponding slice's angle is lower than provided value.",type:"number",required:!1,defaultValue:r.d.activeInnerRadiusOffset,controlType:"range",group:"Interactivity",controlOptions:{unit:"px",min:0,max:50}},{key:"activeOuterRadiusOffset",flavors:["svg","canvas"],help:"Skip label if corresponding slice's angle is lower than provided value.",type:"number",required:!1,defaultValue:r.d.activeOuterRadiusOffset,controlType:"range",group:"Interactivity",controlOptions:{unit:"px",min:0,max:50}},{key:"onMouseEnter",flavors:["svg"],group:"Interactivity",help:"onMouseEnter handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseMove",flavors:["svg","canvas"],group:"Interactivity",help:"onMouseMove handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseLeave",flavors:["svg"],group:"Interactivity",help:"onMouseLeave handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",help:"onClick handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Component",required:!1,help:"Custom tooltip component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following props:\n\n            ```\n            {\n                datum: PieComputedDatum\n            }\n            ```\n\n            You can also customize the style of the tooltip using\n            the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],help:"Showcase custom tooltip.",type:"boolean",controlType:"switch",group:"Interactivity"}],Object(a.a)(Object(i.e)(["svg"],r.d,"react-spring")),[{key:"transitionMode",flavors:["svg"],help:"Define how transitions behave.",type:"string",required:!1,defaultValue:r.d.transitionMode,controlType:"choices",group:"Motion",controlOptions:{choices:o.d.map((function(e){return{label:e,value:e}}))}},{key:"legends",flavors:["svg","canvas"],type:"Legend[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(i.c)(["svg","canvas"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){alert(JSON.stringify(e,null,"    "))}}}}]),s=Object(i.d)(l)},TSJ5:function(e,t,n){"use strict";n.r(t);var a=n("mXGw"),r=n.n(a),o=n("9CL0"),i=n("6zZa"),l=n("ZS2m"),s=n("3Dq0"),u=n.n(s),c=n("xwJ7"),d=n("JiZB"),p=function(){return Object(i.i)(!0,24).map((function(e){return Object.assign({id:e.label},e)}))},f={margin:{top:40,right:200,bottom:40,left:80},valueFormat:{format:"",enabled:!1},pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,startAngle:0,endAngle:360,sortByValue:!1,innerRadius:.5,padAngle:.7,cornerRadius:3,fit:!0,activeInnerRadiusOffset:o.d.activeInnerRadiusOffset,activeOuterRadiusOffset:8,colors:{scheme:"paired"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.6]]},enableArcLinkLabels:!0,arcLinkLabel:"id",arcLinkLabelsSkipAngle:10,arcLinkLabelsTextOffset:6,arcLinkLabelsTextColor:"#333333",arcLinkLabelsOffset:0,arcLinkLabelsDiagonalLength:16,arcLinkLabelsStraightLength:24,arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},enableArcLabels:!0,arcLabel:"formattedValue",arcLabelsRadiusOffset:.5,arcLabelsSkipAngle:10,arcLabelsTextColor:"#333333",isInteractive:!0,"custom tooltip example":!1,tooltip:null,"showcase pattern usage":!0,defs:[],fill:[],legends:[{anchor:"right",direction:"column",justify:!1,translateX:140,translateY:0,itemsSpacing:2,itemWidth:60,itemHeight:14,itemTextColor:"#999",itemDirection:"left-to-right",itemOpacity:1,symbolSize:14,symbolShape:"circle"}]};t.default=function(){return r.a.createElement(l.a,{name:"PieCanvas",meta:u.a.PieCanvas,icon:"pie",flavors:u.a.flavors,currentFlavor:"canvas",properties:d.a,initialProperties:f,defaultProperties:o.d,propertiesMapper:c.a,generateData:p,getDataSize:function(e){return e.length}},(function(e,t,n,a){var i=function(e){a({type:"click",label:"[legend] "+e.label+": "+e.data.value,color:e.color,data:e})};return r.a.createElement(o.c,Object.assign({data:t},e,{theme:n,onClick:function(e){a({type:"click",label:"[arc] "+e.label+": "+e.value,color:e.color,data:e})},legends:e.legends.map((function(e){return Object.assign({},e,{onClick:i})}))}))}))}},nLLr:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n("PWxN"),r=n.n(a),o=n("KXzt"),i=n.n(o),l=function(e,t){var n=(void 0===t?{}:t).exclude,a=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var o={};return Object.keys(t).forEach((function(a){e[a]&&(o[a]=e[a](t[a],t,n))})),Object.assign({},r()(t,a),o)}},s=function(e){return function(t,n){return n["axis"+i()(e)].enable?r()(t,["enable"]):null}},u=function(e){var t=e.format;return!0===e.enabled?t:void 0}},xwJ7:function(e,t,n){"use strict";var a=n("mXGw"),r=n.n(a),o=n("UutA"),i=n("5QYd"),l=n("nLLr"),s=o.d.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-1dztcs-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),u=o.d.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-1dztcs-1"})([""]),c=o.d.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-1dztcs-2"})(["font-weight:600;"]),d=function(e){var t=e.datum;return r.a.createElement(s,{style:{color:t.color}},r.a.createElement(u,null,"id"),r.a.createElement(c,null,t.id),r.a.createElement(u,null,"value"),r.a.createElement(c,null,t.value),r.a.createElement(u,null,"formattedValue"),r.a.createElement(c,null,t.formattedValue),r.a.createElement(u,null,"color"),r.a.createElement(c,null,t.color))};t.a=Object(l.c)({valueFormat:l.b,arcLinkLabel:function(e){return"d => `${d.id} (${d.value})`"===e?function(e){return e.id+" ("+e.value+")"}:e},arcLabel:function(e){return"d => `${d.id} (${d.value})`"===e?function(e){return e.id+" ("+e.value+")"}:e},tooltip:function(e,t){if(t["custom tooltip example"])return d},theme:function(e,t){return t["custom tooltip example"]?Object.assign({},t.theme,{tooltip:{container:Object.assign({},t.theme.tooltip.container,{background:"#333"})}}):e},defs:function(e,t){if(t["showcase pattern usage"])return[Object(i.V)("dots",{background:"inherit",color:"rgba(255, 255, 255, 0.3)",size:4,padding:1,stagger:!0}),Object(i.W)("lines",{background:"inherit",color:"rgba(255, 255, 255, 0.3)",rotation:-45,lineWidth:6,spacing:10})]},fill:function(e,t){if(t["showcase pattern usage"])return[{match:{id:"ruby"},id:"dots"},{match:{id:"c"},id:"dots"},{match:{id:"go"},id:"dots"},{match:{id:"python"},id:"dots"},{match:{id:"scala"},id:"lines"},{match:{id:"lisp"},id:"lines"},{match:{id:"elixir"},id:"lines"},{match:{id:"javascript"},id:"lines"}]}},{exclude:["custom tooltip example","showcase pattern usage"]})}}]);
//# sourceMappingURL=component---src-pages-pie-canvas-js-24daf947fe261f51373b.js.map