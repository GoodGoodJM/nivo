(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{Y0hK:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var o=a("Eo5u"),n=a("PQXq"),i=a("RQLE"),r=[{key:"data",help:"Chart data.",type:"object[]",required:!0,group:"Base"},{key:"indexBy",help:"Key to use to index the data.",description:"\n            Key to use to index the data,\n            this key must exist in each data item.\n\n            You can also provide a function which will\n            receive the data item and must return the desired index.\n        ",type:"string | Function",required:!1,defaultValue:n.b.indexBy,group:"Base"},{key:"keys",help:"Keys to use to determine each serie.",type:"string[]",required:!1,defaultValue:n.b.keys,group:"Base"},{key:"groupMode",help:"How to group bars.",type:"string",required:!1,defaultValue:n.b.groupMode,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"stacked",value:"stacked"},{label:"grouped",value:"grouped"}]}},{key:"layout",help:"How to display bars.",type:"string",required:!1,defaultValue:n.b.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"valueScale",type:"object",group:"Base",help:"value scale configuration.",defaultValue:n.b.valueScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["linear","symlog"].map((function(e){return{label:e,value:e}}))}}]}},{key:"indexScale",type:"object",group:"Base",help:"index scale configuration.",defaultValue:n.b.indexScale,controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["band"].map((function(e){return{label:e,value:e}}))}},{key:"round",help:"Toggle index scale (for bar width) rounding.",type:"boolean",controlType:"switch"}]}},{key:"reverse",help:"Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",type:"boolean",required:!1,defaultValue:n.b.reverse,controlType:"switch",group:"Base"},{key:"minValue",help:"Minimum value.",description:"\n            Minimum value, if 'auto',\n            will use min value from the provided data.\n        ",required:!1,defaultValue:n.b.minValue,type:"number | string",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:-1e3,min:-1e3,max:0}},{key:"maxValue",help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from the provided data.\n        ",required:!1,defaultValue:n.b.maxValue,type:"number | string",controlType:"switchableRange",group:"Base",controlOptions:{disabledValue:"auto",defaultValue:1e3,min:0,max:1e3}},{key:"padding",help:"Padding between each bar (ratio).",type:"number",required:!1,defaultValue:n.b.padding,controlType:"range",group:"Base",controlOptions:{min:0,max:.9,step:.05}},{key:"innerPadding",help:"Padding between grouped/stacked bars.",type:"number",required:!1,defaultValue:n.b.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:10}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using `ResponsiveBar`.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},i.f,{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:n.b.colors,controlType:"ordinalColors",group:"Style"},{key:"colorBy",type:"string | Function",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n            If a function is provided, it will receive\n            the current node data and must return\n            a string or number which will be passed\n            to the color generator.\n        ",required:!1,defaultValue:n.b.colorBy,controlType:"choices",group:"Style",controlOptions:{choices:[{label:"id",value:"id"},{label:"index",value:"index"}]}},{key:"borderRadius",flavors:["svg","api"],help:"Rectangle border radius.",type:"number",required:!1,defaultValue:n.b.borderRadius,controlType:"range",group:"Style",controlOptions:{unit:"px",min:0,max:36}},{key:"borderWidth",help:"Width of bar border.",type:"number",required:!1,defaultValue:n.b.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:n.b.borderColor,controlType:"inheritedColor",group:"Style"}].concat(Object(o.a)(Object(i.b)("Style",["svg"])),[{key:"layers",flavors:["svg"],help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `bars`, `markers`, `legends`.\n\n            You can also use this to insert extra layers to the chart,\n            this extra layer must be a function which will receive\n            the chart computed data and must return a valid SVG\n            element.\n        ",type:"Array<string | Function>",required:!1,defaultValue:n.b.layers,group:"Customization"},{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:n.b.enableLabel,controlType:"switch",group:"Labels"},{key:"label",group:"Labels",help:"Define how bar labels are computed.",description:"\n            Define how bar labels are computed.\n\n            By default it will use the bar's value.\n            It accepts a string which will be used to access\n            a specific bar data property, such as\n            `'value'` or `'id'`.\n\n            You can also use a funtion if you want to\n            add more logic, this function will receive\n            the current bar's data and must return\n            the computed label which, depending on the context,\n            should return a string or an svg element (Bar) or\n            a string (BarCanvas). For example let's say you want\n            to use a label with both the id and the value,\n            you can achieve this with:\n            ```\n            label={d => `${d.id}: ${d.value}`}\n            ```\n        ",type:"string | Function",required:!1,defaultValue:n.b.label},{key:"labelFormat",group:"Labels",help:"How to format labels.",description:"\n            How to format labels,\n            [see d3.format() documentation](https://github.com/d3/d3-format/blob/master/README.md#format).\n        ",type:"string | Function"},{key:"labelSkipWidth",help:"Skip label if bar width is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:n.b.labelSkipWidth,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelSkipHeight",help:"Skip label if bar height is lower than provided value, ignored if 0.",type:"number",required:!1,defaultValue:n.b.labelSkipHeight,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:36}},{key:"labelTextColor",help:"Defines how to compute label text color.",type:"string | object | Function",required:!1,defaultValue:n.b.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"enableGridX",group:"Grid & Axes",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:n.b.enableGridX,controlType:"switch"},{key:"gridXValues",group:"Grid & Axes",help:"Specify values to use for vertical grid lines.",type:"Array<number | string>",required:!1},{key:"enableGridY",group:"Grid & Axes",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:n.b.enableGridY,controlType:"switch"},{key:"gridYValues",group:"Grid & Axes",help:"Specify values to use for horizontal grid lines.",type:"Array<number | string>",required:!1}],Object(o.a)(Object(i.a)()),[{key:"isInteractive",flavors:["svg","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:n.b.isInteractive,controlType:"switch",group:"Interactivity"},{key:"tooltip",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"Tooltip custom component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following data:\n            ```\n            {\n                id:         string | number,\n                value:      number,\n                index:      number,\n                indexValue: string | number,\n                color:      string,\n                // datum associated to the current index (raw data)\n                data:       object\n            }\n            ```\n            You can also customize the style of the tooltip\n            using the `theme.tooltip` object.\n        "},{key:"custom tooltip example",flavors:["svg","canvas"],group:"Interactivity",help:"Showcase custom tooltip component.",type:"boolean",controlType:"switch"},{key:"onClick",flavors:["svg","canvas"],group:"Interactivity",type:"Function",required:!1,help:"onClick handler",description:"\n            onClick handler, will receive node data as first argument\n            & event as second one. The node data has the following shape:\n\n            ```\n            {\n                id:         string | number,\n                value:      number,\n                index:      number,\n                indexValue: string | number,\n                color:      string,\n                // datum associated to the current index (raw data)\n                data:       object\n            }\n            ```\n        "},{key:"legends",flavors:["svg"],type:"object[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(i.c)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{dataFrom:"keys",anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){alert(JSON.stringify(e,null,"    "))}}}}],Object(o.a)(Object(i.e)(["svg"],n.b))),l=Object(i.d)(r)},mNFP:function(e,t,a){"use strict";a.r(t);var o=a("mXGw"),n=a.n(o),i=a("5QYd"),r=a("PQXq"),l=a("ZS2m"),s=a("lt3g"),u=a.n(s),d=a("pfNj"),c=a("q8q8"),p=a("Y0hK"),b=function(){},g={indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},padding:.3,innerPadding:0,minValue:"auto",maxValue:"auto",groupMode:"stacked",layout:"vertical",reverse:!1,valueScale:{type:"linear"},indexScale:{type:"band",round:!0},colors:{scheme:"nivo"},colorBy:"id",defs:[Object(i.V)("dots",{background:"inherit",color:"#38bcb2",size:4,padding:1,stagger:!0}),Object(i.W)("lines",{background:"inherit",color:"#eed312",rotation:-45,lineWidth:6,spacing:10})],fill:[{match:{id:"fries"},id:"dots"},{match:{id:"sandwich"},id:"lines"}],borderRadius:0,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1.6]]},axisTop:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},enableGridX:!1,enableGridY:!0,enableLabel:!0,labelSkipWidth:12,labelSkipHeight:12,labelTextColor:{from:"color",modifiers:[["darker",1.6]]},legends:[{dataFrom:"keys",anchor:"bottom-right",direction:"column",justify:!1,translateX:120,translateY:0,itemsSpacing:2,itemWidth:100,itemHeight:20,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemOpacity:1}}]}],isInteractive:!0,"custom tooltip example":!1,tooltip:null,animate:!0,motionStiffness:90,motionDamping:15};t.default=function(){return n.a.createElement(l.a,{name:"Bar",meta:u.a.Bar,icon:"bar",flavors:u.a.flavors,currentFlavor:"svg",properties:p.a,initialProperties:g,defaultProperties:r.b,propertiesMapper:c.a,codePropertiesMapper:function(e,t){return Object.assign({keys:t.keys},e,{tooltip:e.tooltip?b:void 0})},generateData:d.b,getTabData:function(e){return e.data}},(function(e,t,a,o){return n.a.createElement(r.c,Object.assign({data:t.data,keys:t.keys},e,{theme:a,onClick:function(e){return o({type:"click",label:"[bar] "+e.id+" - "+e.indexValue+": "+e.value,color:e.color,data:e})}}))}))}},pfNj:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var o=a("6zZa"),n=["hot dog","burger","sandwich","kebab","fries","donut","junk","sushi","ramen","curry","udon","bagel","yakitori","takoyaki","tacos","miso soup","tortilla","tapas","chipirones","gazpacho","soba","bavette","steak","pizza","spaghetti","ravioli","salad","pad thai","bun","waffle","crepe","churros","paella","empanadas","bruschetta","onion soup","cassoulet","bouillabaisse","unagi","tempura","tonkatsu","shabu-shabu","twinkies","jerky","fajitas","jambalaya","meatloaf","mac n' cheese","baked beans","popcorn","buffalo wings","BBQ ribs","apple pie","nachos","risotto","tiramisu"],i=function(){return{data:Object(o.c)(n.slice(0,6),{size:7,max:200}),keys:n.slice(0,6)}},r=function(){return{data:Object(o.c)(n,{size:21,max:200}),keys:n}}},q8q8:function(e,t,a){"use strict";var o=a("mXGw"),n=a.n(o),i=a("UutA"),r=a("nLLr"),l=i.d.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"ix4uwo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),s=i.d.span.withConfig({displayName:"mapper__TooltipKey",componentId:"ix4uwo-1"})(["font-weight:600;"]),u=i.d.span.withConfig({displayName:"mapper__TooltipValue",componentId:"ix4uwo-2"})([""]),d=function(e){return n.a.createElement(l,{style:{color:e.color}},n.a.createElement(s,null,"id"),n.a.createElement(u,null,e.id),n.a.createElement(s,null,"value"),n.a.createElement(u,null,e.value),n.a.createElement(s,null,"index"),n.a.createElement(u,null,e.index),n.a.createElement(s,null,"indexValue"),n.a.createElement(u,null,e.indexValue),n.a.createElement(s,null,"color"),n.a.createElement(u,null,e.color))};t.a=Object(r.c)({axisTop:Object(r.a)("top"),axisRight:Object(r.a)("right"),axisBottom:Object(r.a)("bottom"),axisLeft:Object(r.a)("left"),tooltip:function(e,t){if(t["custom tooltip example"])return d}},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft","custom tooltip example"]})}}]);
//# sourceMappingURL=component---src-pages-bar-index-js-30fdf98e5e09bbe56b37.js.map