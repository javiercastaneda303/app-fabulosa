<template lang="pug">
#app
  .destino
    form(action='', method='post')
      //button(type="submit") Enviarm
      
  .anchoTotal(v-for="(i, j1) in tot")
    input(type="checkbox", v-model="borrar") 
    p Prueba:
    p _
    
    button(v-on:click="prueba_csv()" ) Prueba 

    p Borrar:
    p _
    
    button(v-on:click="concatenando()" ) concatenando 2
    p _ {{i.csv}} 
    button(v-on:click="n_articulo()" ) Nuevo Artículo 
    p ---j1:{{j1}} -&&- {{i}}
    p ----nombre-----ref_fabricante-----pvp------p_coste-----fabricante---descripción
    input.p_float(type="checkbox", v-model="tot[j1].visible")
    button(v-on:click="delete_articulo(j1)" v-if="borrar && tot[j1].visible"
    class="backgroundRed") &times delete_articulo
    
    label() Nombre
    input( v-model="tot[j1].datos.nombre" 
    
    placeholder="nombre"
    )
    p
    label( v-if="tot[j1].visible") ref_fabricante 
    input( v-model="tot[j1].datos.ref_fabricante" v-if="tot[j1].visible"
       placeholder="ref_fabricante"
    )
    p
    label( v-if="tot[j1].visible") pvp
    input( v-model="tot[j1].datos.pvp" v-if="tot[j1].visible"
     placeholder="pvp" 
    )
    p
    label( v-if="tot[j1].visible") p_coste
    input( v-model="tot[j1].datos.p_coste" v-if="tot[j1].visible"
     placeholder="p_coste" 
    )
    p
    label( v-if="tot[j1].visible") fabricante
    input( v-model="tot[j1].datos.fabricante" v-if="tot[j1].visible"
     placeholder="fabricante"
    )
    p
    label( v-if="tot[j1].visible") descripcion
    input( v-model="tot[j1].datos.descripcion" v-if="tot[j1].visible"
     placeholder="descripcion"
    )
    p
    label( v-if="tot[j1].visible") categoria
    input( v-model="tot[j1].datos.categoria" v-if="tot[j1].visible"
     placeholder="categoria"
    )
    p
    label( v-if="tot[j1].visible") imagen
    input( v-model="tot[j1].datos.imagen" v-if="tot[j1].visible"
     placeholder="imagen" 
    )
    p
    label( v-if="tot[j1].visible") visible
    input( v-model="tot[j1].datos.visible" v-if="tot[j1].visible"
     placeholder="visible")
    
    
    p
    button(v-on:click="color(i,j1)" v-if="tot[j1].visible") color
    button(v-on:click="atributos_ejemplo(i,j1)" v-if="tot[j1].visible" class="backgroundBlue") atributos_ejemplo
    p 
    button(v-on:click="talla_zapatos(i,j1)" v-if="tot[j1].visible") talla_zapatos
    button(v-on:click="talla_numeros(i,j1)" v-if="tot[j1].visible") talla_32_34_36
    button(v-on:click="talla_letras(i,j1)" v-if="tot[j1].visible") talla_XS_5XL
    button(v-on:click="talla_unica(i,j1)" v-if="tot[j1].visible") talla_UNICA
    p
    button(v-on:click="n_atributo(i,j1)" v-if="tot[j1].visible") n_atributo
    button(v-on:click="crear_variaciones(i,j1)" v-if="tot[j1].visible" class="backgroundBlue") crear_variaciones
    button(v-on:click="crear_csv(i,j1)" v-if="tot[j1].visible" class="backgroundGreen") crear_csv
    
    .atributo(v-for="(j, j2) in i.atributo" v-if="tot[j1].visible")
      p ---j2:{{j2}}--{{j}}
      input.p_float(type="checkbox", v-model="tot[j1].atributo[j2].visible")
      button(v-on:click="delete_n_atributo(j1,j2)" v-if="borrar"
      class="backgroundRed") &times delete_n_atributo
      input( v-model="tot[j1].atributo[j2].nombre" placeholder="Nombre:Color/Talla")
      input( v-model="tot[j1].atributo[j2].valor_defecto" placeholder="valor por defecto")
      button(v-on:click="nuevo_valor_atributo(j1,j2)" ) nuevo_valor_atributo      
      .valor_atributo(v-for="(k, j3) in j.valores" 
      v-if="tot[j1].atributo[j2].visible")
        p ---j3:{{j3}}--{{k}}
        button(v-on:click="delete_valor_atributo(j1,j2,j3)" v-if="borrar"
        class="backgroundRed") &times delete_valor_atributo
        
        //input(ref="colores" v-on:keyup.enter="encajar_atributo(j1,j2,j3)" v-model="tot[j1].atributo[j2].valores[j3].valor" placeholder="valor")
        
        //input(ref="colores"  v-model="tot[j1].atributo[j2].valores[j3].valor" placeholder="valor")
        
        input(  v-model="tot[j1].atributo[j2].valores[j3].valor"
        v-bind:id="tot[j1].atributo[j2].valores[j3].id" placeholder="valor"
        v-on:keyup.enter="encajar_atributo_y_foco_(j1,j2,j3)")
        
        button(v-on:click="encajar_atributo (j1,j2,j3)" ) &plusmn encajar_atributo
    //visualizando las variaciones
    //input.p_float(type="checkbox", v-model="tot[j1].variaciones[j2].visible")
    p zzzzzzzzzzzzzzzzzzzzzzzz
    .atributo(v-for="(j, j2) in i.variaciones" v-if="tot[j1].visible")
      p ---j2:{{j2}}--{{j}}  
      p _
      p {{j.a}}___{{j.b}}
      button(v-on:click="delete_n_variaciones(j1,j2)" v-if="borrar"
      class="backgroundRed") &times delete_variaciones
      input( v-model="tot[j1].variaciones[j2].stock" )
      input( v-model="tot[j1].variaciones[j2].etiquetas" )
      
      
      
      
      
    
    
  #headerimage
  #invoice.effect2    
    #invoice-bot
     
      
      #table
        tr.tableform
          td.subtotal
             button(v-on:click="n_articulo()" ) Nuevo Artículo
          td.tableform
            p Borrar:
            input(type="checkbox", v-model="borrar") 
        table
          tr.service(v-for="(i, j1) in tot")
            td.service(v-for="(j, j2) in i.horario")  
              
                 p.itemtext i:{{i.horario}} j1:{{j1}} 
                 p.itemtext j:{{j}} j2:{{j2}}
          
          
          
          
          tr.tableform
            p {{tot}} // aquí hace la mágia de la tabla
          tr.service(v-for="(i, j1) in tot")
            td.tableitem
              h2 datos
               input(type="checkbox", v-model="i.visible")
              p.itemtext {{ i.datos }} - {{j1}} - {{i.visible}} aaa
              input( v-model="i.datos") 
            td.tableitem
              h2 horario
              input(type="checkbox", v-model="segundos")
              p.itemtext(v-if="i.visible") {{ i.horario }}
              input( v-model="i.horario") 
            td.tableitem
              h2 parada
              p.itemtext {{ i.parada }}
              input( v-model="i.parada") 
            td.tableitem
             button(v-on:click="n_horario(j1)" ) n_horario
              
             
          tr.tableform
            td.number
             h2 nueva tanda de horarios                 
            td.subtotal
             button(v-on:click="addTanda" v-if="segundos") AddTanda
          tr.tableform
              p.itemtext éste es el vector completo {{ tanda }}
          tr.service(v-for="(i,key) in tanda")
            td.tableitem
              h2 h
              p.itemtext {{ i.h }}
              input(type="number", v-model="i.h") 
            td.tableitem
              h2 m
              p.itemtext {{ i.m }}
              input(type="number", v-model="i.m")
            td.tableitem
              h2 s
              p.itemtext {{ i.s }}
              input(type="number", v-model="i.s")
            td.tableitem
              h2 dias
              p.itemtext {{ i.dias }}
              input(type="text", v-model="i.dias")  
            td.tableitem
              h2 fecha
              p.itemtext {{ i.fecha }}
              input(type="text", v-model="i.fecha")
            td.subtotal
              button(@click='_delete(key)') &times            
              button(v-on:click="addH(key)") AddH &plusmn
              
            td.tableitem              
              p.itemtext(v-for="(j,jkey) in i.hours") {{ tanda[key].hours[jkey] }}  </br>
                button(@click='delete_h(key,jkey)') 	&times               
                input( v-model="tanda[key].hours[jkey].h")                
                input( v-model="tanda[key].hours[jkey].m") 
                button(@click='add_h(key,jkey)') &plusmn 
          tr.tableform
            td.number
              input(type="number", v-model="fixItem.number")
            td.min
              input(type="number", v-model="fixItem.min")
            td.seg
              input(type="number", v-model="fixItem.seg")
            td.par_id
              input(type="text", v-model="fixItem.par_id")
            td.par
              input(type="text", v-model="fixItem.par")  
            td.lat
              input(type="text", v-model="fixItem.lat")  
            td.long
              input(type="text", v-model="fixItem.long")  
            td.conect
              input(type="text", v-model="fixItem.conect")    
          
          tr.tabletitle
            td.number
              h2 Delete 
            td.min
              h2 min
            td.seg
              h2 seg
            td.par_id
              h2 par_id
            td.par
              h2 par
            td.lat
              h2 lat
            td.long
              h2 long
            td.conect
              h2 conect
            td.subtotal
              h2 Sub-total
              
          tr.tableform
            td.number
               
            td.min
              input(type="number", v-model="newItem.min")
            td.seg
              input(type="number", v-model="newItem.seg")
            td.par_id
              input(type="text", v-model="newItem.par_id")
            td.par
              input(type="text", v-model="newItem.par")  
            td.lat
              input(type="text", v-model="newItem.lat")  
            td.long
              input(type="text", v-model="newItem.long")  
            td.conect
              input(type="text", v-model="newItem.conect")    
            td.subtotal
              button(v-on:click="addItem") Add
          
          tr.service(v-for="(i,key) in items")
            td.tableitem
               button(@click='delete_par(key)') 	&times 
            td.tableitem
              p.itemtext {{ i.min }}
              input(type="number", v-model="i.min")
            td.tableitem
              p.itemtext {{ i.seg }}
              input(type="number", v-model="i.seg")
            td.tableitem
              p.itemtext {{ i.par_id }}
              input(type="text", v-model="i.par_id")
            td.tableitem
              p.itemtext {{ i.par }}
              input(type="text", v-model="i.par")  
            td.tableitem
              p.itemtext {{ i.lat }}
              input(type="text", v-model="i.lat")  
            td.tableitem
              p.itemtext {{ i.long }}
              input(type="text", v-model="i.long")    
            td.tableitem
              p.itemtext {{ i.conect }}
              input(type="text", v-model="i.conect")  
              button(@click='add_par(key)') &plusmn
            td.tableitem
              p.itemtext {{ parseInt(i.min) * parseInt(i.seg) }}
          
          tr.tabletitle(v-show="total > 0")
            td
            td
            td
            td
            td
            td
            td
            td.min
              h2 Total
            td.payment
              h2 {{ total }} -- {{ tot}}
      #legalcopy
        p.legal 
        //p {{tot}}
        input( v-model="tot") 
</template>

<script>
import axios from "axios";

export default {
  name: 'app',
  data: () => ({
    
        tot: [],
        csv_cabecera: [
          "ID",
          "superior",
          "tipo",
          "Nombre",
          "ref_fabicante",
          "costo",
          "precio_normal",
          "inventario",
          "categorias",
          "fabricante",
          "imagenes",
          "Nombre del atributo 1","valores del atributo 1","Atributo visible 1","atributo global 1","Valor defecto 1",
          "Nombre del atributo 2","valores del atributo 2","Atributo visible 2","atributo global 2","Valor defecto 2",
          "%"      
          ],
        csv_total: [],
        id_variaciones: 5000,
        ensayo_portapapeles: "hola colega",
        borrar: false,
        cont: 0,
        add_n_hour_visible: true,
        fix: true,
        segundos: true,        
        newItem: {  /*  aquí falla algo pero no se lo qeu es
          number: 15,
          description: '',
          min: 04,
          seg: 05,
          par_id: '',
          par: '',
          lat:'',
          long:'',
          conect:''   */
        },        
        items: [],        
        fixItem: {
          number: 9,
          description: '9',
          min: 9,
          seg: 9,
          par_id: '9',
          par: '9',
          lat:'',
          long:'',
          conect:'0'
        },        
        horarios:{
          horario: {
            dias:'dia',
            fecha:'fecha',
            hours:[],
            h:0,
            m:0,
            s:0          
          }
        },        
        tanda:[]
  }),
  computed: {
      total () {
        if (!this.items.length) { return 0 }
        
        let total = 0
        
        this.items.forEach(i => {
          total += (i.min * i.seg)
        })
        
        return total
      }
      
  },
methods: {
      delete_articulo (j1){
        this.tot.splice(j1,1)
      },    
      n_articulo () {
        const articulo = {
          datos: {nombre:'',descripcion:'',pvp:'',p_coste:'',fabricante:'',ref_fabricante:'',categoria:'pendiente',imagen:'',visible:''},
          id:{nombre:'nombre'+this.cont ,
              descripcion:'descripcion'+this.cont,
              pvp:'pvp'+this.cont,
              p_coste:'p_coste'+this.cont,
              fabricante:'fabricante'+this.cont,
              ref_fabricante:'ref_fabricante'+this.cont,
              categoria:'categoria'+this.cont,
              imagen:'imagen'+this.cont,
              visible:'visible'+this.cont,
              cont: this.cont},
          destino:[],
          atributo:[],
          variaciones:[],
          csv:[],
          focus:["nombre","ref_fabricante","pvp","p_coste","fabricante"],
          visible: true
        }
        this.tot.unshift(articulo)
        this.cont = this.cont +1
  // ésto no funciona, pero tampoco me hace falta       //document.getElementById("ref_fabricante").placeholder = "el fabricante..";
      },
  
      delete_n_atributo (j1,j2){
        this.tot[j1].atributo.splice(j2,1)
      },
      n_atributo (i,j1,nombre,valores,defecto) {
        const atributo = {
          nombre: nombre || "",
          valores:valores || [{ valor:"" }],
          valor_defecto:defecto || "",
          cont: 0,
          visible: true
        }
        this.tot[j1].atributo.unshift(atributo)
      },
      color (i,j1){
        let nombre= "color"
        let valores=[{ valor:""}]
        this.n_atributo (i,j1,nombre,valores)  
      },
      talla_zapatos(i,j1){
        let nombre = "talla"
        let valores = [  
            { valor:"35" }, 
            { valor:"36" }, 
            { valor:"37" }, 
            { valor:"38" }, 
            { valor:"39" }, 
            { valor:"40" }, 
            { valor:"41" }, 
            { valor:"42" }, 
            { valor:"43" }, 
            { valor:"44" }
          ]
        this.n_atributo (i,j1,nombre,valores)
      },
      talla_letras(i,j1){
        let nombre = "talla"
        let valores = [  
            { valor:"XS" }, 
            { valor:"S" }, 
            { valor:"M" }, 
            { valor:"L" },
            { valor:"XL" },
            { valor:"2XL" },
            { valor:"3XL" },
            { valor:"4XL" },
            { valor:"5XL" }        
          ]
        this.n_atributo (i,j1,nombre,valores)
      },
      talla_numeros(i,j1){
        let nombre = "talla"
        let valores = [  
            { valor:"32" }, 
            { valor:"34" }, 
            { valor:"36" }, 
            { valor:"38" }, 
            { valor:"40" }, 
            { valor:"42" }, 
            { valor:"44" }, 
            { valor:"46" }, 
            { valor:"48" }, 
            { valor:"50" }, 
            { valor:"52" }, 
            { valor:"54" }, 
            { valor:"56" }, 
            { valor:"58" }, 
            { valor:"60" }, 
            { valor:"62" }        
          ]
        this.n_atributo (i,j1,nombre,valores)
      },
      talla_unica(i,j1){
        let nombre = "talla"
        let valores = [  
            { valor:"UNICA" }     
          ]
        let defecto ="UNICA"
        this.n_atributo (i,j1,nombre,valores,defecto)
      },   
      
      atributos_ejemplo(i,j1){
        let nombre1 = "talla"
        let valores1 = [  
            { valor:"12" },
            { valor:"14" }     
          ]
        let defecto1 ="12"
        this.n_atributo (i,j1,nombre1,valores1,defecto1)
        let nombre2 = "color"
        let valores2 = [  
            { valor:"verde" },
            { valor:"azul" }     
          ]
        let defecto2 ="verde"
        this.n_atributo (i,j1,nombre2,valores2,defecto2)
      },
      
      delete_valor_atributo (j1,j2,j3){
        this.tot[j1].atributo[j2].valores.splice(j3,1)
      },
      nuevo_valor_atributo (j1,j2) {
        const valor_atributo = {
          valor:"",
          valor_defecto:"",
          nombre: this.tot[j1].atributo[j2].nombre,
          //id: "a" + j1 + this.tot[j1].atributo[j2].cont
        }
        this.tot[j1].atributo[j2].cont = this.tot[j1].atributo[j2].cont + 1 
              
        this.tot[j1].atributo[j2].valores.unshift(valor_atributo)        
      },
      encajar_atributo (j1,j2,j3) {
        let valor_atributo = {
          valor:"",
          valor_defecto:"false",
          nombre: this.tot[j1].atributo[j2].nombre,
          //id: "a" + this.tot[j1].atributo[j2].cont
        }
        //this.tot[j1].atributo[j2].cont = this.tot[j1].atributo[j2].cont + 1
        let n = j3 + 1
        this.tot[j1].atributo[j2].valores.splice(n,0,valor_atributo);
        
        //const ultimoInput = this.$refs.colores[this.$refs.colores.length - 1];
        //console.log(ultimoInput);
        //ultimoInput.$el.focus();
        //document.querySelector(`#${this.tot[j1].focus[i+1]}`).focus()
      },
      crear_variaciones(i,j1){
        console.log(i);
        let variacionesTallaColor = [];
        const [todosLosColores, tallas] = this.tot[j1].atributo;
        
        tallas.valores.forEach(talla => {
          let colores = [...todosLosColores.valores];
  
           colores.forEach(color => {
               let combinacion = {
                a: talla.valor,
                b: color.valor,
                stock: 0,
                etiquetas: 0
              };
             
             variacionesTallaColor.push(combinacion)
           })
        });
  
  
        this.tot[j1].variaciones = [...variacionesTallaColor]
        console.log('Variaciones -->', variacionesTallaColor);
        this.tot[j1].atributo["0"].visible = false
        this.tot[j1].atributo["1"].visible = false
        console.log("atributo")
        console.log(this.tot[j1].atributo[0].visible)
      },

      prueba_csv()
      {
        
        let csv_final = [];
        csv_final.push(...this.csv_cabecera);

        this.tot.forEach(articulo => {
          
          csv_final.push(...articulo.csv);
          
        });
        
        
        console.log(csv_final);
        this.generarCSV(csv_final);
      },
       
      crear_csv(i,j1){
        console.log(this.csv_cabecera);
        console.log("el renglón anterior tienes que eliminarlo %%%%")
        let csv_linea = [];
        let variaciones = [...this.tot[j1].variaciones];
        let variacion_linea = [];
        let id_superior = this.id_variaciones_function (); 
        let csv_cabecera_variaciones = [
          id_superior,
          "",
          "variable",
          this.tot[j1].datos.nombre,  //### cuidado con quitar el nombre
          this.tot[j1].datos.ref_fabricante,
          this.tot[j1].datos.p_coste,
          this.tot[j1].datos.pvp,
          "",
          this.tot[j1].datos.categoria,
          this.tot[j1].datos.fabricante,
          this.tot[j1].datos.imagen,
          this.tot[j1].atributo[0].nombre,
          this.valores_atributos (0,j1),
          1,0,
          this.tot[j1].atributo[0].valor_defecto,
          this.tot[j1].atributo[1].nombre,
          this.valores_atributos (1,j1),
          1,0,
          this.tot[j1].atributo[1].valor_defecto,
          "%"
        ];
        console.log("csv_cabecera_variaciones",csv_cabecera_variaciones);
        this.tot[j1].csv = [...csv_cabecera_variaciones]
  
        let j2 = 0;  //%%%%javi ésto es una chapuza, el segúndo índice me lo tiene quedar el forEach
  
        variaciones.forEach(talla => {
            
          console.log(talla);


          let variacion_csv = {
            id: this.id_variaciones_function (),
            tipo: "variation",
            nombre: "nombre",
            publicado: "publicado",
            visivilidad_en_el_catalogo: "visible",
            sku: "sku",
            costo: "costo",
            precio_normal: "precio normal",
            descripcion: "descripción",
            descripcion_corta: "descripción corta",
            categorias: "categorias"
          };
                   
          
          //console.log("id:",this.id_variaciones)
          //console.log(variacion_csv)
          //console.log(csv_linea)
          // %%%% no entiendo por que me lo pasa a string el valor del stock 
          variacion_linea = [
            variacion_csv.id,
            id_superior,
            "variation",
            this.tot[j1].datos.nombre,  //##
        
            this.tot[j1].datos.ref_fabricante,
            this.tot[j1].datos.p_coste,
            this.tot[j1].datos.pvp,
            Number(this.tot[j1].variaciones[j2].stock),
            this.tot[j1].datos.categoria,
            this.tot[j1].datos.fabricante,
            this.tot[j1].datos.imagen,
            this.tot[j1].atributo[0].nombre,
            this.tot[j1].variaciones[j2].b,
            "",0,"",
            this.tot[j1].atributo[1].nombre,
            this.tot[j1].variaciones[j2].a,
            "",0,"",
            "%"]; 
          j2 = j2 + 1 // javi súmele uno con += o como vaya
          //variacion_csv.nombre, variacion_csv.costo, variacion_csv.precio_normal,variacion_csv.categorias];
          console.log("variacion_linea: ",variacion_linea)
          //csv_linea.push([...variacion_linea]) //  tunealo para ésta función        
          csv_linea = csv_linea.concat(variacion_linea);
        });
        //this.tot[j1].csv = [...csv_linea]
        this.tot[j1].csv = this.tot[j1].csv.concat(csv_linea);
        //this.tot[j1].csv = this.csv_cabecera.concat(this.tot[j1].csv);
        console.log("Ésto es todo colega: ",this.tot[j1].csv);
        //this.csv_conjunto()
      },
      csv_conjunto(){
        console.log("inicio csv_conjunto")
        var extrayendo_csv = this.tot;
        var csv_extraido = ["hola",];
          extrayendo_csv.forEach(articulo => {
            let a = articulo
            console.log("a")
            //console.log(articulo.csv)
            console.log(a)
            console.log("b")
            extrayendo_csv.push(articulo.csv)
          });
          csv_extraido = this.csv_cabecera.concat(csv_extraido)
          console.log(csv_extraido)
          console.log("fin csv_conjunto")

       

      },
      id_variaciones_function (){
        let n = this.id_variaciones
        this.id_variaciones = this.id_variaciones +1
        return n
      },
      valores_atributos (n,j1){
        let valores = [...this.tot[j1].atributo[n].valores];
        let seleccion_valores =[];
  
        console.log(valores);
        //return ("valores_atributos")
        //let lista_valores = [];
        valores.forEach(atributos =>{        
          let valor = {
            a: atributos.valor
          };
          console.log("valores:")
          //console.log(valores[0]);
          console.log(valor);
          seleccion_valores.push(valor.a) 
        })
        console.log("seleccion_valores: ",seleccion_valores.toString());
        return seleccion_valores.toString()
      },
      encajar_atributo_y_foco(j1,j2,j3){
        this.encajar_atributo (j1,j2,j3)
  
      let n3 = j3 + 1
      let name = this.tot[j1].atributo[j2].valores[n3].id
      console.log(name)
      console.log(typeof(name))
      //document.querySelector(`#${name}`).focus()
  //no te compliques de momento       document.querySelector(`#${this.tot[j1].atributo[j2].valores[n3].id}`).focus()
        
      },    
      
      
      
      concatenando(){
        //csv_cabecera_variaciones.concat(csv_cabecera_variaciones).concat(csv_linea)
      },
      addTanda() {

      },
      addItem() {

      },
      generarCSV(obj) {
        axios.post("/generarCSV", obj).then((result) => {
          console.log(result.data);
        })
      },


    },
}
</script>
