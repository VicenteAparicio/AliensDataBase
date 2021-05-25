const { Pasajero } = require('../models');




class Viajero {

    async allPassengers(){
        return Pasajero.findAll(); // Devuelve todos los pasajeros
    }
    async passengerId(id){
        return Pasajero.findAllPk(id); // Devuelve el pasajero con esa id
        
    }
    async newPassenger(body){
        return Pasajero.create(body); // Crear pasajeros por POSTMAN
        
    }

    async deletePassenger(id){
        return Pasajero.destroy({where: {id: id}});
    }
    async modifyPassenger(cuerpoDatos){
        return Pasajero.update(
            //Datos que cambiamos
            {edad: cuerpoDatos.edad, especialidad: cuerpoDatos.especialidad, apellido: cuerpoDatos.apellido, apellido2: cuerpoDatos.apellido2},
            //Dónde
            {where: {id: cuerpoDatos.id}}
        )
    }
}


let pasajeroController = new Viajero();

module.exports = pasajeroController;