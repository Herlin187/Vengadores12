var CambiarVillano = Vue.component('CambiarVillano', {
    data: function () { //Declaración de la Data
    return {
    errores: [],
    nombres: null,
    derrotado: null,
    origen: null,
    superPoder:null
    }
    },
    // Aquí comienza nuestro template
    template: `
    <div class="formulario">
    <p v-if="errores.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
    <li v-for="error in errores" style="color:red;">{{ error }}</li>
    </ul>
    </p>
    <p>
    <label for="nombres">Nombres</label><br>
    <input id="nombres" v-model="nombres" type="text">
    </p>
    <p>
    <label for="derrotado">Derrotano</label><br>
    <input id="derrotado" v-model="derrotado" type="text">
    </p>
    <p>
    <label for="origen">Origen</label><br>
    <input id="origen" v-model="origen" type="text">
    </p>
    <p>
    <label for="superPoder">Super Poder</label><br>
    <input id="superPoder" v-model="superPoder" type="text">
    </p>
    <p>
    <button class="boton2" v-on:click="validarFormulario2(),
     cambiar_villano(
        nombres,
        derrotado,
        origen,
        superPoder)">Guardar Cambios</button>
    </p>
    </div>`, // Aca termina nuestro Template
    mounted() {
        let self = this;
        fetch('https://villanos-5fd80-default-rtdb.firebaseio.com/villano/'+ this.
        $route.params.id +'.json')
        .then(r => r.json())
        .then(json => {
        self.nombres = json.nombres,
        self.derrotado = json.derrotado,
        self.origen = json.origen,
        self.superPoder=json.superPoder
        });
        },
        methods: { //Inician los Métodos
        validarFormulario2: function (e) { 
        this.errores = [];
        if (!this.nombres) {
        this.errores.push("El Nombre es obligatorio.");
        }
        if (!this.derrotado) {
        this.errores.push("Alguien lo derroto, anotalo");
        }
        if (!this.origen) {
            this.errores.push("El origen es obligatorio.");
            }
        if (!this.superPoder) {
            this.errores.push("El super Poder es obligatorio.");
            }
        if (!this.errores.length) {
        return true;
        }},
        cambiar_villano: function(nombres, derrotado, origen, superPoder){
        if (!(Array.isArray(this.errores) && this.errores.length)) {
        let self = this;
        axios.put('https://villanos-5fd80-default-rtdb.firebaseio.com/villano/'+ this.
        $route.params.id +'.json',{
        nombres:nombres,
        derrotado:derrotado,
        origen:origen,
        superPoder:superPoder,
       
        }).then((response) => {
        alert("Datos del Villano fue Modificados Exitosamente");
        router.push({ name: "Villano" });
        }).catch((err) => {
        
        self.loading = false; console.log(err);});
        
        }} // fin metodo cambiar_alumno
        } // Terminan los Métodos
        })