const persona={
    nombre:"Homero",
    apellidos:"Simpson",
    esDocente:true,
    geolocalizacion:{
        lat:234.234234,
        lng:180.3453453,

    },

    //forma de enviar a Json
    getNombreCompleto(){
        return '${this.nombre} ${this.apellido}'
    }

}

console.log(persona.getNombreCompleto())