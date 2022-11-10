var CrearVengador = Vue.component('CrearVengador',
 {
    data: function () { //Declaración de la Data
    return {
    errores: [],
    nombres: null,
    apellidos: null,
    telefono: null,
    superPoder:null,
    nombreSuperheroe:null,
    trabajoActual:null,
    Email: null
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
    <label for="apellidos">Apellidos</label><br>
    <input id="apellidos" v-model="apellidos" type="text">
    </p>
    <p>
    <label for="telefono">Telefono</label><br>
    <input id="telefono" v-model="telefono" type="text">
    </p>
    <p>
    <label for="superPoder">Super Poder</label><br>
    <input id="superPoder" v-model="superPoder" type="text">
    </p>
    <p>
    <label for="nombreSuperheroe">Nombre del Super Heroe</label><br>
    <input id="nombreSuperheroe" v-model="nombreSuperheroe" type="text">
    </p>
    <p>
    <label for="trabajoActual">Trabajo Actual</label><br>
    <input id="trabajoActual" v-model="trabajoActual" type="text">
    </p>
    <p>
    <label for="Email">Email</label><br>
    <input id="Email" v-model="Email" type="text">
    </p>
    <p>
    <button class="boton" v-on:click="Formulario(), crear_vengador(
        nombres, 
        apellidos,
        telefono,
        superPoder,
        nombreSuperheroe,
        trabajoActual,
        Email )">Agregar Heroe</button>
    </p>
    </div>`, // Aca termina nuestro Template

    methods: { //Inician los Métodos
        Formulario: function (e) { //iniciamos la Funcion que valida el formulario
        this.errores = [];
        if (!this.nombres) {
        this.errores.push("El Nombre es obligatorio.");
        }
        if (!this.apellidos) {
        this.errores.push("El Apellido es obligatorio.");
        }
        if (!this.telefono) {
            this.errores.push("El telefono es obligatorio.");
            }
        if (!this.superPoder) {
            this.errores.push("El super Poder es obligatorio.");
            }
        if (!this.nombreSuperheroe) {
              this.errores.push("El nombre de heroe es obligatorio.");
            }
        if (!this.trabajoActual) {
            this.errores.push("El trabajo Actual es obligatorio.");
            }
        if (!this.Email) {
            this.errores.push("El email es obligatorio.");
               }
        if (!this.errores.length) {
        return true;
        }
        },
        crear_vengador: function(nombres, apellidos, telefono, superPoder, nombreSuperheroe, trabajoActual, Email){
        if (!(Array.isArray(this.errores) && this.errores.length)) {
        let self = this;
        axios.post('https://vengadoresunidos-c5b36-default-rtdb.firebaseio.com/vengador.json',{
        nombres:nombres,
        apellidos:apellidos,
        telefono:telefono,
        superPoder:superPoder,
        nombreSuperheroe:nombreSuperheroe,
        trabajoActual:trabajoActual,
        Email:Email,
        })
        .then((response) => {
        alert("Se Agregó a la Lista Exitosamente");
        router.push({ name: "Vengador" });
        }
        ).catch((err) => {
        
        self.loading = false;
        console.log(err);
        });
        
        }
        } // fin metodo crear_alumno
        } // Terminan los Métodos
        })


