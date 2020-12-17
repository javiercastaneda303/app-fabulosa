let app = new Vue({
  el: '#app',
  data () {
    return {
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
    }
  },    
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
        this.tot[j1].datos.nombre,
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
          this.tot[j1].datos.nombre,
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
      this.csv_conjunto()
    },
    csv_conjunto(){
      console.log("inicio csv_conjunto")
      extrayendo_csv = this.tot;
      csv_extraido = ["hola",];
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
      let lista_valores = [];
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
    moverFoco(name, j1,i){
      console.log(name)
      console.log(this.tot[j1].id.ref_fabricante)
      //document.querySelector(`#${this.tot[j1].focus[2+1]}`).focus()
      //document.querySelector(`#${this.tot[j1].id.ref_fabricante}`).focus()
     //document.querySelector("ref_fabricante").focus()
     document.querySelector(`#${"ref_fabricante"}`).focus() 
    },
    moverFoco2(name, j1){
      console.log(name)
      console.log(typeof (name))
      
     //document.querySelector(`#${'name'}`).focus()
      //document.querySelector(`#${"0p_coste"}`).focus()
      //document.querySelector(`#${"ref_fabricante"}`).focus() 
      document.querySelector(`#${"p_coste0"}`).focus()
    },
    moverFoco3(name){
      console.log("estoy en MoverFoco3")
      console.log(name)
      console.log(typeof (name))
      document.querySelector(`#${name}`).focus()
    },
    concatenando(){
      csv_cabecera_variaciones.concat(csv_cabecera_variaciones).concat(csv_linea)
    }
  }
})