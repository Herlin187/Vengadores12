var Vengador =Vue.component('Vengador',{
    template:
    `<div id="vengador"><h1>Vengador</h1>
    <a href="/crear_vengador"</a>
    <router-link class="nav-link" to="/crear_vengador">
    <button class="boton">Agregar Vengador</button></router-link>

    <table  id="vengador" class="table">
    <thead>
    <tr>
    
    <th scope="col">Nombre</th>
    <th scope="col">Apellido</th>
    <th scope="col">Email</th>
    <th scope="col">Telefono</th>
    <th scope="col">Super Poder</th>
    <th scope="col">Nombre de heroe</th>
    <th scope="col">Trabajo Actual</th>
    <th scope="col">Editar</th>
    <th scope="col">Eliminar</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in vengador">
    
    <td>{{item.nombres}}</td>
    <td>{{item.apellidos}}</td>
    <td>{{item.Email}}</td>
    <td>{{item.telefono}}</td>
    <td>{{item.superPoder}}</td>
    <td>{{item.nombreSuperheroe}}</td>
    <td>{{item.trabajoActual}}</td>
    <td><a href="/cambiar_vengador"</a>
    <router-link class="nav-link" :to="{name:'cambiarVengador', params:{id:index}}">
    <button class="boton">✍️</button></router-link></td>
    <td>
    
    <button class="boton" v-on:click="eliminar_vengador(index)">🚮</button>
    
    </td>
    </tr>
    </tbody>
   </table></div>`,
    data:function(){
        return{
            vengador:[],
        }
    },
    mounted(){
        let self=this;
        fetch('https://vengadoresunidos-c5b36-default-rtdb.firebaseio.com/vengador.json')
        .then(r=>r.json())
        .then(json=>{
            self.vengador=json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_vengador: function(id){
        let self = this;
        axios.delete('https://vengadoresunidos-c5b36-default-rtdb.firebaseio.com/vengador/'+ id
        +'.json')
        .then((response) => {
        alert("El vengador Fue Eliminado");
        location.reload();
        }).catch((err) => {
        
        self.loading = false; console.log(err);
        });
        
        } // fin metodo eliminar_alumno
        }
});
