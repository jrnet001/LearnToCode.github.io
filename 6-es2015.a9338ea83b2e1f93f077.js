(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0ueH":function(t,e,a){"use strict";a.r(e),a.d(e,"CountriesModule",(function(){return v}));var o=a("5+sL"),i=a("ofXK"),r=a("tyNb"),c=a("VRyK"),n=a("lJxs"),b=a("fXoL"),s=a("njzu"),d=a("Lquv"),h=a("icpI");function l(t,e){if(1&t&&(b.Jb(0,"option",16),b.ec(1),b.Ib()),2&t){const t=e.$implicit;b.Xb("value",t),b.wb(1),b.gc(" ",t," ")}}function u(t,e){if(1&t&&(b.Jb(0,"tr"),b.Jb(1,"td"),b.ec(2),b.Ib(),b.Jb(3,"td"),b.ec(4),b.Sb(5,"date"),b.Ib(),b.Jb(6,"td"),b.ec(7),b.Ib(),b.Ib()),2&t){const t=e.$implicit,a=e.index;b.wb(2),b.fc(a+1),b.wb(2),b.fc(b.Tb(5,3,t.date)),b.wb(3),b.fc(t.cases)}}const p=[{path:"",component:(()=>{class t{constructor(t){this.dataService=t,this.totalActive=0,this.totalConfirmed=0,this.totalDeaths=0,this.totalRecovered=0,this.countries=[],this.loading=!0,this.dataTable=[],this.chart={PieChart:"PieChart",ColumnChart:"ColumnChart",LineChart:"LineChart",height:500,options:{animation:{duration:1e3,easing:"out"},is3D:!0}}}ngOnInit(){Object(c.a)(this.dataService.getDateWiseData().pipe(Object(n.a)(t=>{this.dateWiseData=t})),this.dataService.getGlobalData().pipe(Object(n.a)(t=>{this.globalDataSummary=t,this.globalDataSummary.forEach(t=>{this.countries.push(t.country)})}))).subscribe({complete:()=>{this.updateValues("India"),this.loading=!1}})}updateChart(){this.dataTable=[],this.selectedCountryData.forEach(t=>{this.dataTable.push([t.date,t.cases])})}updateValues(t){console.log(t),this.globalDataSummary.forEach(e=>{t===e.country&&(this.totalActive+=e.active,this.totalConfirmed+=e.confirmed,this.totalDeaths+=e.deaths,this.totalRecovered+=e.recovered)}),this.selectedCountryData=this.dateWiseData[t],this.updateChart()}}return t.\u0275fac=function(e){return new(e||t)(b.Gb(s.a))},t.\u0275cmp=b.Ab({type:t,selectors:[["app-countries"]],decls:31,vars:12,consts:[[1,"ui","inverted","dimmer"],[1,"ui","text","loader"],[1,"jumbotron","bg-white","text-center"],[1,"display-4"],[1,"mx-auto"],[1,"form-group","col-lg-5","mx-auto"],["for","c"],["name","","id","c",1,"form-control",3,"change"],["input",""],[3,"value",4,"ngFor","ngForOf"],[3,"totalConfirmed","totalActive","totalDeaths","totalRecovered"],[1,"row"],[1,"col"],[1,"table"],[4,"ngFor","ngForOf"],[2,"width","100%",3,"type","options","height","data"],[3,"value"]],template:function(t,e){if(1&t){const t=b.Kb();b.Jb(0,"div",0),b.Jb(1,"div",1),b.ec(2,"Loading"),b.Ib(),b.Ib(),b.Jb(3,"div",2),b.Jb(4,"h1",3),b.ec(5," Corona Covid 19 Country"),b.Ib(),b.Hb(6,"hr"),b.Jb(7,"div",4),b.Jb(8,"div",5),b.Jb(9,"label",6),b.ec(10,"Select Country"),b.Ib(),b.Jb(11,"select",7,8),b.Qb("change",(function(){b.ac(t);const a=b.Zb(12);return e.updateValues(a.value)})),b.dc(13,l,2,2,"option",9),b.Ib(),b.Ib(),b.Hb(14,"hr"),b.Hb(15,"app-dashboard",10),b.Jb(16,"div",11),b.Jb(17,"div",12),b.Jb(18,"table",13),b.Jb(19,"thead"),b.Jb(20,"tr"),b.Jb(21,"th"),b.ec(22,"Sno."),b.Ib(),b.Jb(23,"th"),b.ec(24,"Date"),b.Ib(),b.Jb(25,"th"),b.ec(26,"Cases"),b.Ib(),b.Ib(),b.Ib(),b.Jb(27,"tbody"),b.dc(28,u,8,5,"tr",14),b.Ib(),b.Ib(),b.Ib(),b.Jb(29,"div",12),b.Hb(30,"google-chart",15),b.Ib(),b.Ib(),b.Ib(),b.Ib()}2&t&&(b.yb("active",e.loading),b.wb(13),b.Wb("ngForOf",e.countries),b.wb(2),b.Wb("totalConfirmed",e.totalConfirmed)("totalActive",e.totalActive)("totalDeaths",e.totalDeaths)("totalRecovered",e.totalRecovered),b.wb(13),b.Wb("ngForOf",e.selectedCountryData),b.wb(2),b.Wb("type",e.chart.LineChart)("options",e.chart.options)("height",e.chart.height)("data",e.dataTable))},directives:[i.i,d.a,h.a],pipes:[i.d],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=b.Eb({type:t}),t.\u0275inj=b.Db({factory:function(e){return new(e||t)},imports:[[r.b.forChild(p)],r.b]}),t})(),v=(()=>{class t{}return t.\u0275mod=b.Eb({type:t}),t.\u0275inj=b.Db({factory:function(e){return new(e||t)},providers:[h.c],imports:[[i.b,f,o.a,h.b]]}),t})()}}]);