(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{oXmd:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o("Ja2J"),r=["BRA","AUS","SWE","GRL","COD"],n=function(){return i.features.filter((function(e){return!r.includes(e.id)})).map((function(e){return{id:e.id,value:Math.round(1e6*Math.random())}}))}},r8YT:function(e,t,o){"use strict";o.d(t,"a",(function(){return s}));var i=o("Eo5u"),r=o("xZAe"),n=o("RQLE"),a=o("Ezzw"),l=[].concat(Object(i.a)(a.a),[{key:"label",group:"Base",type:"string | Function",required:!1,help:"Label accessor.",description:"\n            Accessor to label, if a string is provided,\n            the value will be retrieved using it as\n            a key, if it's a function, it's its responsibility\n            to return the label.\n        ",defaultValue:r.b.label},{key:"value",group:"Base",type:"string | Function",required:!1,help:"Value accessor.",description:"\n            Accessor to data value, if a string is provided,\n            the value will be retrieved using\n            it as a key, if it's a function, it's its responsibility\n            to return the value.\n        ",defaultValue:r.b.value},{key:"valueFormat",group:"Base",type:"string | Function",required:!1,help:"Value formatter.",description:"\n            Optional formatting of values, if provided, it will\n            be used for labels/tooltips. You can either pass\n            a function which will receive the node's data\n            and must return the formatted value, or a string\n            which will be used as a directive for\n            [d3-format](https://github.com/d3/d3-format).\n        ",defaultValue:r.b.value},{key:"domain",help:"Defines uppper and lower bounds of color shading",description:"\n            The Domain prop is a required two element array that\n            defines the minimum and maximum values for the color shading\n            of the Choropleth. The minimum and maximum provided should\n            roughly match, or be slightly outside of the minimum and\n            maximum values in your data.\n        ",type:"number[]",required:!0,group:"Base"},{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:"nivo",controlType:"quantizeColors",group:"Style"},{key:"unknownColor",help:"Defines the color to use for features without value.",type:"string",required:!1,defaultValue:"nivo",controlType:"colorPicker",group:"Style"},{key:"layers",group:"Customization",type:"Array<'graticule' | 'features' | Function>",required:!1,help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `graticule`, `features`.\n\n            You can also use this to insert extra layers\n            to the chart, this extra layer must be\n            a function which will receive the chart\n            computed data and must return a valid SVG\n            element for the SVG implementation or receive\n            a Canvas 2d context for the canvas\n            one. Custom layers will also receive the\n            computed data/projection.\n        ",defaultValue:r.d.layers},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML\n            element and will receive the node's data.\n        "},{key:"custom tooltip example",excludeFromDoc:!0,help:"Showcase custom tooltip.",type:"boolean",controlType:"switch",group:"Interactivity"},{key:"legends",type:"{Array<object>}",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(n.c)(),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,defaults:{anchor:"center",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:4,symbolSize:20,itemDirection:"left-to-right",itemTextColor:"#777",onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000",itemBackground:"#f7fafb"}}]}}}]),s=Object(n.d)(l)},rmrY:function(e,t,o){"use strict";o.r(t);var i=o("mXGw"),r=o.n(i),n=o("PWxN"),a=o.n(n),l=o("xZAe"),s=o("ZS2m"),u=o("Nzin"),c=o.n(u),d=o("IilV"),p=o("r8YT"),m=o("oXmd"),f=o("Ja2J"),h=function(e){},y={margin:{top:0,right:0,bottom:0,left:0},colors:"nivo",domain:[0,1e6],unknownColor:"#666666",label:"properties.name",value:"value",valueFormat:".2s",projectionType:"mercator",projectionScale:100,projectionTranslation:[.5,.5],projectionRotation:[0,0,0],enableGraticule:!0,graticuleLineWidth:.5,graticuleLineColor:"#dddddd",borderWidth:.5,borderColor:"#152538",isInteractive:!0,"custom tooltip example":!1,tooltip:null,legends:[{anchor:"bottom-left",direction:"column",justify:!0,translateX:20,translateY:-100,itemsSpacing:0,itemWidth:94,itemHeight:18,itemDirection:"left-to-right",itemTextColor:"#444444",itemOpacity:.85,symbolSize:18,onClick:function(e){alert(JSON.stringify(e,null,"    "))},effects:[{on:"hover",style:{itemTextColor:"#000000",itemOpacity:1}}]}]};t.default=function(){return r.a.createElement(s.a,{name:"Choropleth",meta:c.a.Choropleth,icon:"choropleth",flavors:c.a.flavors,currentFlavor:"svg",properties:p.a,initialProperties:y,defaultProperties:l.b,propertiesMapper:d.a,codePropertiesMapper:function(e){return Object.assign({features:"/* please have a look at the description for usage */"},e,{tooltip:e.tooltip?h:void 0})},generateData:m.a},(function(e,t,o,i){return r.a.createElement(l.e,Object.assign({features:f.features,data:t},e,{theme:o,onClick:function(e){i({type:"click",label:e.label+": "+e.formattedValue+" ("+e.id+")",color:e.color,data:a()(e,"geometry")})}}))}))}}}]);
//# sourceMappingURL=component---src-pages-choropleth-index-js-a8955c5094668a9c4a5d.js.map