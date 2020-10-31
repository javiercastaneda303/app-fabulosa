let app = new Vue({
    el: '#app',
    
    data () {
      return {
        tot: [],
        borrar: false,
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
          nombre: {nombre_corto:'',nombre_largo:''},
          destino:[],
          visible: true
        }
        this.tot.unshift(articulo)
      },
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
        let n = j1
        console.log (`${n}`)
        this.tot[j1].horario.splice(0,0,articulo)
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