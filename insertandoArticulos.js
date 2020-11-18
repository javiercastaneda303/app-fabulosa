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
    n_atributo (i,j1) {
      const atributo = {
        nombre: "",
        valores:[],
        valor_defecto:"",
        cont: 0,
        visible: true
      }
      this.tot[j1].atributo.unshift(atributo)
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
    color_y_talla_numeros (i,j1) {        
      const talla = {
        nombre: "TALLA",
        valores:[
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
        ],
        valor_defecto:"",
        visible: true
      }
      const color = {
        nombre: "COLOR",
        valores:[            
          { valor:"" }
        ],
        valor_defecto:"",
        visible: true
      }        
      this.tot[j1].atributo.unshift(talla)
      this.tot[j1].atributo.unshift(color)
    },
    color_y_talla_letras (i,j1) {        
      const talla = {
        nombre: "talla_letras",
        valores:[
          { valor:"XS" }, 
          { valor:"S" }, 
          { valor:"M" }, 
          { valor:"L" },
          { valor:"XL" },
          { valor:"2XL" },
          { valor:"3XL" },
          { valor:"4XL" },
          { valor:"5XL" }
        ],
        valor_defecto:"",
        visible: true
      }
      const color = {
        nombre: "color2",
        valores:[            
          { valor:"" }
        ],
        valor_defecto:"valor_defecto2",
        visible: true
      }        
      this.tot[j1].atributo.unshift(talla)
      this.tot[j1].atributo.unshift(color)
    },
    zapatos (i,j1) {
      const color = {
        nombre: "COLOR",
        valores:[],
        valor_defecto:"",
        visible: true
      }
      const talla = {
        nombre: "TALLA",
        valores:[],
        valor_defecto:"",
        visible: true
      }
      this.tot[j1].atributo.unshift(color)
      this.tot[j1].atributo.unshift(talla)        
    },
    color (i,j1) {
      const color = {
        nombre: "color",
        valores:[            
          { valor:"" }
        ],
        valor_defecto:"",
        visible: true
      }
      this.tot[j1].atributo.unshift(color)
    },
    talla_letras(i,j1) {
      const letras = {
        nombre: "TALLA",
        valores:[            
          { valor:"XS" }, 
          { valor:"S" }, 
          { valor:"M" }, 
          { valor:"L" },
          { valor:"XL" },
          { valor:"2XL" },
          { valor:"3XL" },
          { valor:"4XL" },
          { valor:"5XL" }          
        ],
        valor_defecto:"",
        visible: true
      }
      this.tot[j1].atributo.unshift(letras)
    },
    talla_numeros(i,j1) {
      const numeros = {
        nombre: "TALLA",
        valores:[  
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
        ],
        valor_defecto:"",
        visible: true
      }
      this.tot[j1].atributo.unshift(numeros)
    },   
    talla_n_zapatos(i,j1) {
      const numeros = {
        nombre: "TALLA",
        valores:[  
          { valor:"35" }, 
          { valor:"36" }, 
          { valor:"37" }, 
          { valor:"38" }, 
          { valor:"39" }, 
          { valor:"40" }, 
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
        ],
        valor_defecto:"",
        visible: true
      }
      this.tot[j1].atributo.unshift(numeros)
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
    
    encajar_atributo_y_foco(j1,j2,j3){
      this.encajar_atributo (j1,j2,j3)

    let n3 = j3 + 1
    let name = this.tot[j1].atributo[j2].valores[n3].id
    console.log(name)
    console.log(typeof(name))
    //document.querySelector(`#${name}`).focus()
//no te compliques de momento       document.querySelector(`#${this.tot[j1].atributo[j2].valores[n3].id}`).focus()
      
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
    
    //##################################
    delete_n_destino (j1,j2){
      this.tot[j1].destino.splice(j2,1)
    },
    n_destino (i,j1) {
      const destino = {
        nombre: {nombre_corto:'',nombre_largo:''},
        parada:[],
        horario:[],
        visible: true,
        parada_visible: true,
        horario_visible: true
      }
      this.tot[j1].destino.unshift(destino)
    },
    delete_n_parada (j1,j2,j3) {
      this.tot[j1].destino[j2].parada.splice(j3,1)
    },
    n_parada (j1,j2) {
      const parada = {
        number: 0 ,
        min: 0,
        seg: 0,
        par_id: '',
        par: '',
        lat: '',
        long: '',
        conect: ''
      }
      this.tot[j1].destino[j2].parada.unshift(parada)
    },    
    add_n_parada (j1,j2,j3) {
      const parada = {
        number: 0 ,
        min: 0,
        seg: 0,
        par_id: '',
        par: '',
        lat: '',
        long: '',
        conect: ''
      }
      let n = j3 + 1
      this.tot[j1].destino[j2].parada.splice(n,0,parada)
    },
    delete_n_horarios (j1,j2,j3) {
      this.tot[j1].destino[j2].horario.splice(j3,1)
    },
    n_horarios (j1,j2) {
      let horario = {
        dias: '',
        fecha:'',
        hours:[],
        h: 0,
        m: 0,
        s: 0,
        visible: true
      }
      this.tot[j1].destino[j2].horario.unshift(horario)
    },
    delete_n_hour (j1,j2,j3,j4){
      this.tot[j1].destino[j2].horario[j3].hours.splice(j4,1)
    },
    n_hour (j1,j2,j3){
      let hour = {
        h: this.tot[j1].destino[j2].horario[j3].h ,
        m: this.tot[j1].destino[j2].horario[j3].m ,
        s: this.tot[j1].destino[j2].horario[j3].s 
      }
      this.tot[j1].destino[j2].horario[j3].hours.unshift(hour)
      this.tot[j1].destino[j2].horario[j3].h //= 00    aquí lo modifiqué para evitar que diese el error
      this.tot[j1].destino[j2].horario[j3].m //= 00
      this.tot[j1].destino[j2].horario[j3].s //= 00
    },
    add_n_hour (j1,j2,j3,j4){
      const hour = {
        h: 0,
        m: 0,
        s: 0        
      }
      let n = j4 + 1
      this.tot[j1].destino[j2].horario[j3].hours.splice(n,0,hour) 
    },
    n_hora (j1,j2,j3) {
      let hora = {        
        h: 0,
        m: 0,
        s: 0
      }
      this.tot[j1].destino[j2].horario[j3].hours.unshift(hora)
    },      
    n_horario (j1) {
      const hour = {
        dias: '',
        fecha:'',
        hours:[],
        h: 0,
        m: 0,
        s: 0
      }
      
      this.tot[j1].horario.splice(0,0,hour)
      //this.tot[j1].horario.unshift(hour)
      console.log(`que pasa colega`)
    },
    add_h (key,jkey){
      const hour = {
        h: this.tanda[key].h,
        m: this.tanda[key].m ,
        s: this.tanda[key].s        
      }
      let n = jkey + 1
      this.tanda[key].hours.splice(n,0,hour) 
      console.log (`que pasa colega`)
    },
    delete_h (key,jkey){
      this.tanda[key].hours.splice(jkey, 1)  
    },
    addItem () {      
      const item = {
        number: this.newItem.number ,
        min: this.newItem.min,
        seg: this.newItem.seg,
        par_id: this.newItem.par_id,
        par: this.newItem.par,
        lat: this.newItem.lat,
        long: this.newItem.long,
        conect: this.newItem.conect
      }
      this.items.unshift(item)  
      this.newItem.number = (parseInt(this.newItem.number) + 10)
      this.newItem.par_id = this.fixItem.par_id
      this.newItem.par = this.fixItem.par
      this.newItem.lat = this.fixItem.lat
      this.newItem.long = this.fixItem.long
      this.newItem.conect = this.fixItem.conect
    },
    addH (key) {    
      const hour = {
        h: this.tanda[key].h,
        m: this.tanda[key].m ,
        s: this.tanda[key].s        
      }
      this.tanda[key].hours.unshift(hour)      
    },
    addHours () {      
      const hour = {
        h: this.horarios.horario.h,
        m: this.horarios.horario.m ,
        s: this.horarios.horario.s        
      }
      this.horarios.horario.hours.unshift(hour)      
    },    
    addTanda () {
      const hour = {
        dias: '',
        fecha:'',
        hours:[],
        h: 0,
        m: 0,
        s: 0
      }
      this.tanda.unshift(hour)
    },
    _delete (key) {
      this.tanda.splice(key, 1)
    },    
    delete_par (key){
      this.items.splice(key, 1)  
    },
    add_par (key) {      
      const item = {
        number: 0 ,
        min: 0,
        seg: 0,
        par_id: '',
        par: '',
        lat: '',
        long: '',
        conect: ''
      }
      let n = key + 1
      this.items.splice(n,0,item)  
    }
  }
})