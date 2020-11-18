let app = new Vue({
  el: '#app',
  data () {
    return {
      tot: [],
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
        datos: {nombre:'',descripcion:'',pvp:'',p_coste:'',fabricante:'',ref_fabricante:'',categoria:'',imagen:'',visible:''},
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
    n_atributo_2 (i,j1,nombre,valores,defecto) {
      const atributo = {
        nombre: nombre || "",
        valores:valores || [{ valor:"" }],
        valor_defecto:defecto || "",
        cont: 0,
        visible: true
      }
      this.tot[j1].atributo.unshift(atributo)
    },
    color_2 (i,j1){
      let nombre= "color"
      let valores=[{ valor:""}]
      this.n_atributo_2 (i,j1,nombre,valores)  
    },
    talla_zapatos_2(i,j1){
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
      this.n_atributo_2 (i,j1,nombre,valores)
    },
    talla_letras_2(i,j1){
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
      this.n_atributo_2 (i,j1,nombre,valores)
    },
    talla_numeros_2(i,j1){
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
      this.n_atributo_2 (i,j1,nombre,valores)
    },
    talla_unica_2(i,j1){
      let nombre = "talla"
      let valores = [  
          { valor:"UNICA" }     
        ]
      let defecto ="UNICA"
      this.n_atributo_2 (i,j1,nombre,valores,defecto)
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
    }   
  }
})