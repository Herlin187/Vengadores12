var Villano =Vue.component('Villano',{
    template:
    `<div id="villano"><h1>Villano</h1>
    <a href="/crear_villano"</a>
    <router-link class="nav-link" to="/crear_villano">
    <button class="boton">Agregar Villano</button></router-link>

    <table  id="villano" class="table">
    <thead>
    <tr>
    <th scope="col">Nombre</th>
    <th scope="col">Derrotado</th>
    <th scope="col">Origen</th>
    <th scope="col">Super Poder</th>
    <th scope="col">Editar</th>
    <th scope="col">Eliminar</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in villano">
    <td>{{item.nombres}}</td>
    <td>{{item.derrotado}}</td>
    <td>{{item.origen}}</td>
    <td>{{item.superPoder}}</td>
    <td><a href="/cambiar_vengador"</a>
    <router-link class="nav-link" :to="{name:'cambiar_villano', params:{id:index}}">
    <button class="boton">✍️</button></router-link></td>
    <td>
    
    <button class="boton" v-on:click="eliminar_villano(index)">🚮</button></td></tr>
    </tbody>
   </table></div>`,
    data:function(){
        return{
            villano:[],
        }
    },
    mounted(){
        let self=this;
        fetch('https://villanos-5fd80-default-rtdb.firebaseio.com/villano.json')
        .then(r=>r.json())
        .then(json=>{
            self.villano=json;
        });
    },
    methods: { //Inician los Métodos
        eliminar_villano: function(id){
        let self = this;
        axios.delete('https://villanos-5fd80-default-rtdb.firebaseio.com/villano/'+ id
        +'.json')
        .then((response) => {
        alert("El villano Fue Eliminado");
        location.reload();
        }).catch((err) => {
        
        self.loading = false; console.log(err);
        });
        
        } // fin metodo eliminar_alumno
        }
});
