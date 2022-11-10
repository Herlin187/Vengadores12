var CrearVillano = Vue.component('CrearVillano',
 {
    data: function () { //Declaración de la Data
    return {
    errores: [],
    nombres: null,
    derrotado: null,
    origen: null,
    superPoder:null,
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
    <label for="derrotado">Derrotado</label><br>
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
    <button class="boton" v-on:click="Formulario(), crear_villano(
        nombres, 
        derrotado,
        origen,
        superPoder)">Agregar Heroe</button>
    </p>
    </div>`, // Aca termina nuestro Template

    methods: { //Inician los Métodos
        Formulario: function (e) { //iniciamos la Funcion que valida el formulario
        this.errores = [];
        if (!this.nombres) {
        this.errores.push("El Nombre es obligatorio.");
        }
        if (!this.derrotado) {
        this.errores.push("Escriba el heroe que lo derroto.");
        }
        if (!this.origen) {
            this.errores.push("El origen es obligatorio.");
            }
        if (!this.superPoder) {
            this.errores.push("El super Poder es obligatorio.");
            }
        if (!this.errores.length) {
        return true;
        }
        },
        crear_villano: function(nombres, derrotado, origen, superPoder){
        if (!(Array.isArray(this.errores) && this.errores.length)) {
        let self = this;
        axios.post('https://villanos-5fd80-default-rtdb.firebaseio.com/villano.json',{
        nombres:nombres,
        derrotado:derrotado,
        origen:origen,
        superPoder:superPoder,
        })
        .then((response) => {
        alert("Se Agregó a la Lista Exitosamente");
        router.push({ name: "Villano" });
        }
        ).catch((err) => {
        
        self.loading = false;
        console.log(err);
        });
        
        }
        } // fin metodo crear_alumno
        } // Terminan los Métodos
        })


