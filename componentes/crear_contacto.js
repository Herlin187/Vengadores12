Vue.component('formula', {
    data: function () { //Declaración de la Data
        return {
            errores: [],
            superHeroe: null,
            descripcion: null,
            origen:null,
            email: null
        }
    },
    // Aquí comienza nuestro template
    template: `
    <div class="contacto">
    <form class="formulario"
    id="app"
    @submit="validarFormulario"
    method="post"
    action="./app.html#/contacto"
    novalidate="true">
    <p v-if="errores.length">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
            <li v-for="error in errores">{{ error }}</li>
        </ul>
    </p> 
      <p>
        <label for="superHeroe">Super Heroe</label><br>
        <select id="superHeroe" v-model="superHeroe" nombre="superHeroe">
            <option>SpiderMan</option>
            <option>Iron Man</option>
            <option>Capitan America</option>
            <option>Hulk</option>
            <option>Dr. Strange</option>
            <option>Black Panter</option>
            <option>Rocket</option>
            <option>Black Widow</option>
            <option>Bruja Escarlata</option>
            <option>Falcon</option>
            <option>Tanque de Guerra</option>
            <option>DeadPool</option>
            <option>Ojo de Halcón</option>
            <option>Wolverin</option>
            <option>Profesor X</option>
            <option>Star Lord</option>
            <option>Groot</option>
            <option>Gamora</option>
            <option>Drax el Destructo</option>
            <option>Thor</option>
    
        </select>
    </p>
    <p>
        <label for="descripcion">Descripcion</label><br>
        <input id="descripcion" v-model="descripcion" type="textarea" nombre="descripcion">
    </p>
    <p>
        <label for="telefono">Telefono</label><br>
        <input id="telefono" v-model="telefono" type="tel" nombre="telefono">
    </p>
 
    <p>
        <label for="email">Correo electrónico</label><br>
        <input id="email" v-model="email" type="email" nombre="email">
    </p>
 
 
 
    <p>
        <input type="submit" class="boton"  value="Enviar">
    </p>
    </form>
    </div>`,
    // Aca termina nuestro Template
    methods: { //Inician los Métodos
        validarFormulario: function (e) { //iniciamos la Funcion que valida el formulario
            this.errores = [];
            if (!this.telefono) {
                this.errores.push("El nombre es obligatorio.");
            }
            if (!this.descripcion) {
             this.errores.push("El telefono es obligatorio.");
         }
            if (!this.email) {
                this.errores.push('El correo electrónico es obligatorio.');
            } else if (!this.validarCorreo(this.email)) {
                this.errores.push('El correo electrónico debe ser válido.');
            }
            if (!this.errores.length) {
                return true;
            }
            e.preventDefault();
        },
 
        validarCorreo: function (correo) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    } // Terminan los Métodos
 });