(function(t){function e(e){for(var o,s,n=e[0],l=e[1],c=e[2],v=0,d=[];v<n.length;v++)s=n[v],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=o,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(a,o,function(e){return t[e]}.bind(null,o));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("1d50")},"1d50":function(t,e,a){"use strict";a.r(e);a("dce7"),a("bd3b"),a("d0c3"),a("5e30");var o=a("e832"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._l(t.tot,(function(e,o){return a("div",{staticClass:"anchoTotal"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.borrar,expression:"borrar"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.borrar)?t._i(t.borrar,null)>-1:t.borrar},on:{change:function(e){var a=t.borrar,o=e.target,i=!!o.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);o.checked?s<0&&(t.borrar=a.concat([r])):s>-1&&(t.borrar=a.slice(0,s).concat(a.slice(s+1)))}else t.borrar=i}}}),a("p",[t._v("Prueba:")]),a("p",[t._v("_")]),a("button",{on:{click:function(e){return t.prueba_csv()}}},[t._v("Prueba ")]),a("p",[t._v("Borrar:")]),a("p",[t._v("_")]),a("button",{on:{click:function(e){return t.concatenando()}}},[t._v("concatenando 2")]),a("p",[t._v("_ "+t._s(e.csv)+" ")]),a("button",{on:{click:function(e){return t.n_articulo()}}},[t._v("Nuevo Artículo ")]),a("p",[t._v("---j1:"+t._s(o)+" -&&- "+t._s(e))]),a("p",[t._v("----nombre-----ref_fabricante-----pvp------p_coste-----fabricante---descripción")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].visible,expression:"tot[j1].visible"}],staticClass:"p_float",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tot[o].visible)?t._i(t.tot[o].visible,null)>-1:t.tot[o].visible},on:{change:function(e){var a=t.tot[o].visible,i=e.target,r=!!i.checked;if(Array.isArray(a)){var s=null,n=t._i(a,s);i.checked?n<0&&t.$set(t.tot[o],"visible",a.concat([s])):n>-1&&t.$set(t.tot[o],"visible",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(t.tot[o],"visible",r)}}}),t.borrar&&t.tot[o].visible?a("button",{staticClass:"backgroundRed",on:{click:function(e){return t.delete_articulo(o)}}},[t._v("× delete_articulo")]):t._e(),a("label",[t._v("Nombre")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.nombre,expression:"tot[j1].datos.nombre"}],attrs:{placeholder:"nombre"},domProps:{value:t.tot[o].datos.nombre},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"nombre",e.target.value)}}}),a("p"),t.tot[o].visible?a("label",[t._v("ref_fabricante ")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.ref_fabricante,expression:"tot[j1].datos.ref_fabricante"}],attrs:{placeholder:"ref_fabricante"},domProps:{value:t.tot[o].datos.ref_fabricante},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"ref_fabricante",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("pvp")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.pvp,expression:"tot[j1].datos.pvp"}],attrs:{placeholder:"pvp"},domProps:{value:t.tot[o].datos.pvp},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"pvp",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("p_coste")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.p_coste,expression:"tot[j1].datos.p_coste"}],attrs:{placeholder:"p_coste"},domProps:{value:t.tot[o].datos.p_coste},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"p_coste",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("fabricante")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.fabricante,expression:"tot[j1].datos.fabricante"}],attrs:{placeholder:"fabricante"},domProps:{value:t.tot[o].datos.fabricante},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"fabricante",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("descripcion")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.descripcion,expression:"tot[j1].datos.descripcion"}],attrs:{placeholder:"descripcion"},domProps:{value:t.tot[o].datos.descripcion},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"descripcion",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("categoria")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.categoria,expression:"tot[j1].datos.categoria"}],attrs:{placeholder:"categoria"},domProps:{value:t.tot[o].datos.categoria},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"categoria",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("imagen")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.imagen,expression:"tot[j1].datos.imagen"}],attrs:{placeholder:"imagen"},domProps:{value:t.tot[o].datos.imagen},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"imagen",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("label",[t._v("visible")]):t._e(),t.tot[o].visible?a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].datos.visible,expression:"tot[j1].datos.visible"}],attrs:{placeholder:"visible"},domProps:{value:t.tot[o].datos.visible},on:{input:function(e){e.target.composing||t.$set(t.tot[o].datos,"visible",e.target.value)}}}):t._e(),a("p"),t.tot[o].visible?a("button",{on:{click:function(a){return t.color(e,o)}}},[t._v("color")]):t._e(),t.tot[o].visible?a("button",{staticClass:"backgroundBlue",on:{click:function(a){return t.atributos_ejemplo(e,o)}}},[t._v("atributos_ejemplo")]):t._e(),a("p"),t.tot[o].visible?a("button",{on:{click:function(a){return t.talla_zapatos(e,o)}}},[t._v("talla_zapatos")]):t._e(),t.tot[o].visible?a("button",{on:{click:function(a){return t.talla_numeros(e,o)}}},[t._v("talla_32_34_36")]):t._e(),t.tot[o].visible?a("button",{on:{click:function(a){return t.talla_letras(e,o)}}},[t._v("talla_XS_5XL")]):t._e(),t.tot[o].visible?a("button",{on:{click:function(a){return t.talla_unica(e,o)}}},[t._v("talla_UNICA")]):t._e(),a("p"),t.tot[o].visible?a("button",{on:{click:function(a){return t.n_atributo(e,o)}}},[t._v("n_atributo")]):t._e(),t.tot[o].visible?a("button",{staticClass:"backgroundBlue",on:{click:function(a){return t.crear_variaciones(e,o)}}},[t._v("crear_variaciones")]):t._e(),t.tot[o].visible?a("button",{staticClass:"backgroundGreen",on:{click:function(a){return t.crear_csv(e,o)}}},[t._v("crear_csv")]):t._e(),t._l(e.atributo,(function(e,i){return t.tot[o].visible?a("div",{staticClass:"atributo"},[a("p",[t._v("---j2:"+t._s(i)+"--"+t._s(e))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].atributo[i].visible,expression:"tot[j1].atributo[j2].visible"}],staticClass:"p_float",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.tot[o].atributo[i].visible)?t._i(t.tot[o].atributo[i].visible,null)>-1:t.tot[o].atributo[i].visible},on:{change:function(e){var a=t.tot[o].atributo[i].visible,r=e.target,s=!!r.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);r.checked?l<0&&t.$set(t.tot[o].atributo[i],"visible",a.concat([n])):l>-1&&t.$set(t.tot[o].atributo[i],"visible",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.tot[o].atributo[i],"visible",s)}}}),t.borrar?a("button",{staticClass:"backgroundRed",on:{click:function(e){return t.delete_n_atributo(o,i)}}},[t._v("× delete_n_atributo")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].atributo[i].nombre,expression:"tot[j1].atributo[j2].nombre"}],attrs:{placeholder:"Nombre:Color/Talla"},domProps:{value:t.tot[o].atributo[i].nombre},on:{input:function(e){e.target.composing||t.$set(t.tot[o].atributo[i],"nombre",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].atributo[i].valor_defecto,expression:"tot[j1].atributo[j2].valor_defecto"}],attrs:{placeholder:"valor por defecto"},domProps:{value:t.tot[o].atributo[i].valor_defecto},on:{input:function(e){e.target.composing||t.$set(t.tot[o].atributo[i],"valor_defecto",e.target.value)}}}),a("button",{on:{click:function(e){return t.nuevo_valor_atributo(o,i)}}},[t._v("nuevo_valor_atributo ")]),t._l(e.valores,(function(e,r){return t.tot[o].atributo[i].visible?a("div",{staticClass:"valor_atributo"},[a("p",[t._v("---j3:"+t._s(r)+"--"+t._s(e))]),t.borrar?a("button",{staticClass:"backgroundRed",on:{click:function(e){return t.delete_valor_atributo(o,i,r)}}},[t._v("× delete_valor_atributo")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].atributo[i].valores[r].valor,expression:"tot[j1].atributo[j2].valores[j3].valor"}],attrs:{id:t.tot[o].atributo[i].valores[r].id,placeholder:"valor"},domProps:{value:t.tot[o].atributo[i].valores[r].valor},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.encajar_atributo_y_foco_(o,i,r)},input:function(e){e.target.composing||t.$set(t.tot[o].atributo[i].valores[r],"valor",e.target.value)}}}),a("button",{on:{click:function(e){t.encajar_atributo(o,i,r)}}},[t._v("± encajar_atributo")])]):t._e()}))],2):t._e()})),a("p",[t._v("zzzzzzzzzzzzzzzzzzzzzzzz")]),t._l(e.variaciones,(function(e,i){return t.tot[o].visible?a("div",{staticClass:"atributo"},[a("p",[t._v("---j2:"+t._s(i)+"--"+t._s(e)+" ")]),a("p",[t._v("_")]),a("p",[t._v(t._s(e.a)+"___"+t._s(e.b))]),t.borrar?a("button",{staticClass:"backgroundRed",on:{click:function(e){return t.delete_n_variaciones(o,i)}}},[t._v("× delete_variaciones")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].variaciones[i].stock,expression:"tot[j1].variaciones[j2].stock"}],domProps:{value:t.tot[o].variaciones[i].stock},on:{input:function(e){e.target.composing||t.$set(t.tot[o].variaciones[i],"stock",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot[o].variaciones[i].etiquetas,expression:"tot[j1].variaciones[j2].etiquetas"}],domProps:{value:t.tot[o].variaciones[i].etiquetas},on:{input:function(e){e.target.composing||t.$set(t.tot[o].variaciones[i],"etiquetas",e.target.value)}}})]):t._e()}))],2)})),a("div",{attrs:{id:"headerimage"}}),a("div",{staticClass:"effect2",attrs:{id:"invoice"}},[a("div",{attrs:{id:"invoice-bot"}},[a("div",{attrs:{id:"table"}},[a("tr",{staticClass:"tableform"},[a("td",{staticClass:"subtotal"},[a("button",{on:{click:function(e){return t.n_articulo()}}},[t._v("Nuevo Artículo")])]),a("td",{staticClass:"tableform"},[a("p",[t._v("Borrar:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.borrar,expression:"borrar"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.borrar)?t._i(t.borrar,null)>-1:t.borrar},on:{change:function(e){var a=t.borrar,o=e.target,i=!!o.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);o.checked?s<0&&(t.borrar=a.concat([r])):s>-1&&(t.borrar=a.slice(0,s).concat(a.slice(s+1)))}else t.borrar=i}}})])]),a("table",[t._l(t.tot,(function(e,o){return a("tr",{staticClass:"service"},t._l(e.horario,(function(i,r){return a("td",{staticClass:"service"},[a("p",{staticClass:"itemtext"},[t._v("i:"+t._s(e.horario)+" j1:"+t._s(o)+" ")]),a("p",{staticClass:"itemtext"},[t._v("j:"+t._s(i)+" j2:"+t._s(r))])])})),0)})),a("tr",{staticClass:"tableform"},[a("p",[t._v(t._s(t.tot)+" // aquí hace la mágia de la tabla")])]),t._l(t.tot,(function(e,o){return a("tr",{staticClass:"service"},[a("td",{staticClass:"tableitem"},[a("h2",[t._v("datos"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.visible,expression:"i.visible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.visible)?t._i(e.visible,null)>-1:e.visible},on:{change:function(a){var o=e.visible,i=a.target,r=!!i.checked;if(Array.isArray(o)){var s=null,n=t._i(o,s);i.checked?n<0&&t.$set(e,"visible",o.concat([s])):n>-1&&t.$set(e,"visible",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(e,"visible",r)}}})]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.datos)+" - "+t._s(o)+" - "+t._s(e.visible)+" aaa")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.datos,expression:"i.datos"}],domProps:{value:e.datos},on:{input:function(a){a.target.composing||t.$set(e,"datos",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("horario")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.segundos,expression:"segundos"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.segundos)?t._i(t.segundos,null)>-1:t.segundos},on:{change:function(e){var a=t.segundos,o=e.target,i=!!o.checked;if(Array.isArray(a)){var r=null,s=t._i(a,r);o.checked?s<0&&(t.segundos=a.concat([r])):s>-1&&(t.segundos=a.slice(0,s).concat(a.slice(s+1)))}else t.segundos=i}}}),e.visible?a("p",{staticClass:"itemtext"},[t._v(t._s(e.horario))]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:e.horario,expression:"i.horario"}],domProps:{value:e.horario},on:{input:function(a){a.target.composing||t.$set(e,"horario",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("parada")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.parada))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.parada,expression:"i.parada"}],domProps:{value:e.parada},on:{input:function(a){a.target.composing||t.$set(e,"parada",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("button",{on:{click:function(e){return t.n_horario(o)}}},[t._v("n_horario")])])])})),a("tr",{staticClass:"tableform"},[t._m(1),a("td",{staticClass:"subtotal"},[t.segundos?a("button",{on:{click:t.addTanda}},[t._v("AddTanda")]):t._e()])]),a("tr",{staticClass:"tableform"},[a("p",{staticClass:"itemtext"},[t._v("éste es el vector completo "+t._s(t.tanda))])]),t._l(t.tanda,(function(e,o){return a("tr",{staticClass:"service"},[a("td",{staticClass:"tableitem"},[a("h2",[t._v("h")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.h))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.h,expression:"i.h"}],attrs:{type:"number"},domProps:{value:e.h},on:{input:function(a){a.target.composing||t.$set(e,"h",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("m")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.m))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.m,expression:"i.m"}],attrs:{type:"number"},domProps:{value:e.m},on:{input:function(a){a.target.composing||t.$set(e,"m",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("s")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.s))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.s,expression:"i.s"}],attrs:{type:"number"},domProps:{value:e.s},on:{input:function(a){a.target.composing||t.$set(e,"s",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("dias")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.dias))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dias,expression:"i.dias"}],attrs:{type:"text"},domProps:{value:e.dias},on:{input:function(a){a.target.composing||t.$set(e,"dias",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("h2",[t._v("fecha")]),a("p",{staticClass:"itemtext"},[t._v(t._s(e.fecha))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fecha,expression:"i.fecha"}],attrs:{type:"text"},domProps:{value:e.fecha},on:{input:function(a){a.target.composing||t.$set(e,"fecha",a.target.value)}}})]),a("td",{staticClass:"subtotal"},[a("button",{on:{click:function(e){return t._delete(o)}}},[t._v("× ")]),a("button",{on:{click:function(e){return t.addH(o)}}},[t._v("AddH ±")])]),a("td",{staticClass:"tableitem"},t._l(e.hours,(function(e,i){return a("p",{staticClass:"itemtext"},[t._v(t._s(t.tanda[o].hours[i])+" "),a("br"),a("button",{on:{click:function(e){return t.delete_h(o,i)}}},[t._v(" × ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tanda[o].hours[i].h,expression:"tanda[key].hours[jkey].h"}],domProps:{value:t.tanda[o].hours[i].h},on:{input:function(e){e.target.composing||t.$set(t.tanda[o].hours[i],"h",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tanda[o].hours[i].m,expression:"tanda[key].hours[jkey].m"}],domProps:{value:t.tanda[o].hours[i].m},on:{input:function(e){e.target.composing||t.$set(t.tanda[o].hours[i],"m",e.target.value)}}}),a("button",{on:{click:function(e){return t.add_h(o,i)}}},[t._v("± ")])])})),0)])})),a("tr",{staticClass:"tableform"},[a("td",{staticClass:"number"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.number,expression:"fixItem.number"}],attrs:{type:"number"},domProps:{value:t.fixItem.number},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"number",e.target.value)}}})]),a("td",{staticClass:"min"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.min,expression:"fixItem.min"}],attrs:{type:"number"},domProps:{value:t.fixItem.min},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"min",e.target.value)}}})]),a("td",{staticClass:"seg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.seg,expression:"fixItem.seg"}],attrs:{type:"number"},domProps:{value:t.fixItem.seg},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"seg",e.target.value)}}})]),a("td",{staticClass:"par_id"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.par_id,expression:"fixItem.par_id"}],attrs:{type:"text"},domProps:{value:t.fixItem.par_id},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"par_id",e.target.value)}}})]),a("td",{staticClass:"par"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.par,expression:"fixItem.par"}],attrs:{type:"text"},domProps:{value:t.fixItem.par},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"par",e.target.value)}}})]),a("td",{staticClass:"lat"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.lat,expression:"fixItem.lat"}],attrs:{type:"text"},domProps:{value:t.fixItem.lat},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"lat",e.target.value)}}})]),a("td",{staticClass:"long"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.long,expression:"fixItem.long"}],attrs:{type:"text"},domProps:{value:t.fixItem.long},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"long",e.target.value)}}})]),a("td",{staticClass:"conect"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.fixItem.conect,expression:"fixItem.conect"}],attrs:{type:"text"},domProps:{value:t.fixItem.conect},on:{input:function(e){e.target.composing||t.$set(t.fixItem,"conect",e.target.value)}}})])]),t._m(2),a("tr",{staticClass:"tableform"},[a("td",{staticClass:"number"}),a("td",{staticClass:"min"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.min,expression:"newItem.min"}],attrs:{type:"number"},domProps:{value:t.newItem.min},on:{input:function(e){e.target.composing||t.$set(t.newItem,"min",e.target.value)}}})]),a("td",{staticClass:"seg"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.seg,expression:"newItem.seg"}],attrs:{type:"number"},domProps:{value:t.newItem.seg},on:{input:function(e){e.target.composing||t.$set(t.newItem,"seg",e.target.value)}}})]),a("td",{staticClass:"par_id"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.par_id,expression:"newItem.par_id"}],attrs:{type:"text"},domProps:{value:t.newItem.par_id},on:{input:function(e){e.target.composing||t.$set(t.newItem,"par_id",e.target.value)}}})]),a("td",{staticClass:"par"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.par,expression:"newItem.par"}],attrs:{type:"text"},domProps:{value:t.newItem.par},on:{input:function(e){e.target.composing||t.$set(t.newItem,"par",e.target.value)}}})]),a("td",{staticClass:"lat"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.lat,expression:"newItem.lat"}],attrs:{type:"text"},domProps:{value:t.newItem.lat},on:{input:function(e){e.target.composing||t.$set(t.newItem,"lat",e.target.value)}}})]),a("td",{staticClass:"long"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.long,expression:"newItem.long"}],attrs:{type:"text"},domProps:{value:t.newItem.long},on:{input:function(e){e.target.composing||t.$set(t.newItem,"long",e.target.value)}}})]),a("td",{staticClass:"conect"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.conect,expression:"newItem.conect"}],attrs:{type:"text"},domProps:{value:t.newItem.conect},on:{input:function(e){e.target.composing||t.$set(t.newItem,"conect",e.target.value)}}})]),a("td",{staticClass:"subtotal"},[a("button",{on:{click:t.addItem}},[t._v("Add")])])]),t._l(t.items,(function(e,o){return a("tr",{staticClass:"service"},[a("td",{staticClass:"tableitem"},[a("button",{on:{click:function(e){return t.delete_par(o)}}},[t._v(" × ")])]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.min))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.min,expression:"i.min"}],attrs:{type:"number"},domProps:{value:e.min},on:{input:function(a){a.target.composing||t.$set(e,"min",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.seg))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.seg,expression:"i.seg"}],attrs:{type:"number"},domProps:{value:e.seg},on:{input:function(a){a.target.composing||t.$set(e,"seg",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.par_id))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.par_id,expression:"i.par_id"}],attrs:{type:"text"},domProps:{value:e.par_id},on:{input:function(a){a.target.composing||t.$set(e,"par_id",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.par))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.par,expression:"i.par"}],attrs:{type:"text"},domProps:{value:e.par},on:{input:function(a){a.target.composing||t.$set(e,"par",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.lat))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lat,expression:"i.lat"}],attrs:{type:"text"},domProps:{value:e.lat},on:{input:function(a){a.target.composing||t.$set(e,"lat",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.long))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.long,expression:"i.long"}],attrs:{type:"text"},domProps:{value:e.long},on:{input:function(a){a.target.composing||t.$set(e,"long",a.target.value)}}})]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(e.conect))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.conect,expression:"i.conect"}],attrs:{type:"text"},domProps:{value:e.conect},on:{input:function(a){a.target.composing||t.$set(e,"conect",a.target.value)}}}),a("button",{on:{click:function(e){return t.add_par(o)}}},[t._v("±")])]),a("td",{staticClass:"tableitem"},[a("p",{staticClass:"itemtext"},[t._v(t._s(parseInt(e.min)*parseInt(e.seg)))])])])})),a("tr",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticClass:"tabletitle"},[a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),a("td"),t._m(3),a("td",{staticClass:"payment"},[a("h2",[t._v(t._s(t.total)+" -- "+t._s(t.tot))])])])],2)]),a("div",{attrs:{id:"legalcopy"}},[a("p",{staticClass:"legal"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tot,expression:"tot"}],domProps:{value:t.tot},on:{input:function(e){e.target.composing||(t.tot=e.target.value)}}})])])])],2)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"destino"},[a("form",{attrs:{action:"",method:"post"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"number"},[a("h2",[t._v("nueva tanda de horarios ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"tabletitle"},[a("td",{staticClass:"number"},[a("h2",[t._v("Delete ")])]),a("td",{staticClass:"min"},[a("h2",[t._v("min")])]),a("td",{staticClass:"seg"},[a("h2",[t._v("seg")])]),a("td",{staticClass:"par_id"},[a("h2",[t._v("par_id")])]),a("td",{staticClass:"par"},[a("h2",[t._v("par")])]),a("td",{staticClass:"lat"},[a("h2",[t._v("lat")])]),a("td",{staticClass:"long"},[a("h2",[t._v("long")])]),a("td",{staticClass:"conect"},[a("h2",[t._v("conect")])]),a("td",{staticClass:"subtotal"},[a("h2",[t._v("Sub-total")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticClass:"min"},[a("h2",[t._v("Total")])])}],s=(a("5251"),a("8347"),a("03d9"),a("1aec"),a("301c"),a("9c44"),a("872d")),n=a("eb24"),l=a("6334"),c=a("7338"),u=a.n(c),v={name:"app",data:function(){return{tot:[],csv_cabecera:["ID","superior","tipo","Nombre","ref_fabicante","costo","precio_normal","inventario","categorias","fabricante","imagenes","Nombre del atributo 1","valores del atributo 1","Atributo visible 1","atributo global 1","Valor defecto 1","Nombre del atributo 2","valores del atributo 2","Atributo visible 2","atributo global 2","Valor defecto 2","%"],csv_total:[],id_variaciones:5e3,ensayo_portapapeles:"hola colega",borrar:!1,cont:0,add_n_hour_visible:!0,fix:!0,segundos:!0,newItem:{},items:[],fixItem:{number:9,description:"9",min:9,seg:9,par_id:"9",par:"9",lat:"",long:"",conect:"0"},horarios:{horario:{dias:"dia",fecha:"fecha",hours:[],h:0,m:0,s:0}},tanda:[]}},computed:{total:function(){if(!this.items.length)return 0;var t=0;return this.items.forEach((function(e){t+=e.min*e.seg})),t}},methods:{delete_articulo:function(t){this.tot.splice(t,1)},n_articulo:function(){var t={datos:{nombre:"",descripcion:"",pvp:"",p_coste:"",fabricante:"",ref_fabricante:"",categoria:"pendiente",imagen:"",visible:""},id:{nombre:"nombre"+this.cont,descripcion:"descripcion"+this.cont,pvp:"pvp"+this.cont,p_coste:"p_coste"+this.cont,fabricante:"fabricante"+this.cont,ref_fabricante:"ref_fabricante"+this.cont,categoria:"categoria"+this.cont,imagen:"imagen"+this.cont,visible:"visible"+this.cont,cont:this.cont},destino:[],atributo:[],variaciones:[],csv:[],focus:["nombre","ref_fabricante","pvp","p_coste","fabricante"],visible:!0};this.tot.unshift(t),this.cont=this.cont+1},delete_n_atributo:function(t,e){this.tot[t].atributo.splice(e,1)},n_atributo:function(t,e,a,o,i){var r={nombre:a||"",valores:o||[{valor:""}],valor_defecto:i||"",cont:0,visible:!0};this.tot[e].atributo.unshift(r)},color:function(t,e){var a="color",o=[{valor:""}];this.n_atributo(t,e,a,o)},talla_zapatos:function(t,e){var a="talla",o=[{valor:"35"},{valor:"36"},{valor:"37"},{valor:"38"},{valor:"39"},{valor:"40"},{valor:"41"},{valor:"42"},{valor:"43"},{valor:"44"}];this.n_atributo(t,e,a,o)},talla_letras:function(t,e){var a="talla",o=[{valor:"XS"},{valor:"S"},{valor:"M"},{valor:"L"},{valor:"XL"},{valor:"2XL"},{valor:"3XL"},{valor:"4XL"},{valor:"5XL"}];this.n_atributo(t,e,a,o)},talla_numeros:function(t,e){var a="talla",o=[{valor:"32"},{valor:"34"},{valor:"36"},{valor:"38"},{valor:"40"},{valor:"42"},{valor:"44"},{valor:"46"},{valor:"48"},{valor:"50"},{valor:"52"},{valor:"54"},{valor:"56"},{valor:"58"},{valor:"60"},{valor:"62"}];this.n_atributo(t,e,a,o)},talla_unica:function(t,e){var a="talla",o=[{valor:"UNICA"}],i="UNICA";this.n_atributo(t,e,a,o,i)},atributos_ejemplo:function(t,e){var a="talla",o=[{valor:"12"},{valor:"14"}],i="12";this.n_atributo(t,e,a,o,i);var r="color",s=[{valor:"verde"},{valor:"azul"}],n="verde";this.n_atributo(t,e,r,s,n)},delete_valor_atributo:function(t,e,a){this.tot[t].atributo[e].valores.splice(a,1)},nuevo_valor_atributo:function(t,e){var a={valor:"",valor_defecto:"",nombre:this.tot[t].atributo[e].nombre};this.tot[t].atributo[e].cont=this.tot[t].atributo[e].cont+1,this.tot[t].atributo[e].valores.unshift(a)},encajar_atributo:function(t,e,a){var o={valor:"",valor_defecto:"false",nombre:this.tot[t].atributo[e].nombre},i=a+1;this.tot[t].atributo[e].valores.splice(i,0,o)},crear_variaciones:function(t,e){console.log(t);var a=[],o=Object(l["a"])(this.tot[e].atributo,2),i=o[0],r=o[1];r.valores.forEach((function(t){var e=Object(n["a"])(i.valores);e.forEach((function(e){var o={a:t.valor,b:e.valor,stock:0,etiquetas:0};a.push(o)}))})),this.tot[e].variaciones=[].concat(a),console.log("Variaciones --\x3e",a),this.tot[e].atributo["0"].visible=!1,this.tot[e].atributo["1"].visible=!1,console.log("atributo"),console.log(this.tot[e].atributo[0].visible)},prueba_csv:function(){var t=[];t.push.apply(t,Object(n["a"])(this.csv_cabecera)),this.tot.forEach((function(e){t.push.apply(t,Object(n["a"])(e.csv))})),console.log(t),this.generarCSV(t)},crear_csv:function(t,e){var a=this;console.log(this.csv_cabecera),console.log("el renglón anterior tienes que eliminarlo %%%%");var o=[],i=Object(n["a"])(this.tot[e].variaciones),r=[],s=this.id_variaciones_function(),l=[s,"","variable",this.tot[e].datos.nombre,this.tot[e].datos.ref_fabricante,this.tot[e].datos.p_coste,this.tot[e].datos.pvp,"",this.tot[e].datos.categoria,this.tot[e].datos.fabricante,this.tot[e].datos.imagen,this.tot[e].atributo[0].nombre,this.valores_atributos(0,e),1,0,this.tot[e].atributo[0].valor_defecto,this.tot[e].atributo[1].nombre,this.valores_atributos(1,e),1,0,this.tot[e].atributo[1].valor_defecto,"%"];console.log("csv_cabecera_variaciones",l),this.tot[e].csv=[].concat(l);var c=0;i.forEach((function(t){console.log(t);var i={id:a.id_variaciones_function(),tipo:"variation",nombre:"nombre",publicado:"publicado",visivilidad_en_el_catalogo:"visible",sku:"sku",costo:"costo",precio_normal:"precio normal",descripcion:"descripción",descripcion_corta:"descripción corta",categorias:"categorias"};r=[i.id,s,"variation",a.tot[e].datos.nombre,a.tot[e].datos.ref_fabricante,a.tot[e].datos.p_coste,a.tot[e].datos.pvp,Number(a.tot[e].variaciones[c].stock),a.tot[e].datos.categoria,a.tot[e].datos.fabricante,a.tot[e].datos.imagen,a.tot[e].atributo[0].nombre,a.tot[e].variaciones[c].b,"",0,"",a.tot[e].atributo[1].nombre,a.tot[e].variaciones[c].a,"",0,"","%"],c+=1,console.log("variacion_linea: ",r),o=o.concat(r)})),this.tot[e].csv=this.tot[e].csv.concat(o),console.log("Ésto es todo colega: ",this.tot[e].csv)},csv_conjunto:function(){console.log("inicio csv_conjunto");var t=this.tot,e=["hola"];t.forEach((function(e){var a=e;console.log("a"),console.log(a),console.log("b"),t.push(e.csv)})),e=this.csv_cabecera.concat(e),console.log(e),console.log("fin csv_conjunto")},id_variaciones_function:function(){var t=this.id_variaciones;return this.id_variaciones=this.id_variaciones+1,t},valores_atributos:function(t,e){var a=Object(n["a"])(this.tot[e].atributo[t].valores),o=[];return console.log(a),a.forEach((function(t){var e={a:t.valor};console.log("valores:"),console.log(e),o.push(e.a)})),console.log("seleccion_valores: ",o.toString()),o.toString()},encajar_atributo_y_foco:function(t,e,a){this.encajar_atributo(t,e,a);var o=a+1,i=this.tot[t].atributo[e].valores[o].id;console.log(i),console.log(Object(s["a"])(i))},concatenando:function(){},addTanda:function(){},addItem:function(){},generarCSV:function(t){u.a.post("/generarCSV",t).then((function(t){console.log(t.data)}))}}},d=v,m=a("553a"),p=Object(m["a"])(d,i,r,!1,null,null,null),b=p.exports;a("b56f");new o["a"]({el:"#app",render:function(t){return t(b)}})},b56f:function(t,e,a){}});
//# sourceMappingURL=app.2cca2918.js.map