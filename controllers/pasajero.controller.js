const { Pasajero } = require('../models');
const bcrypt = require('bcrypt');



class Viajero {

    async allPassengers(){
        return Pasajero.findAll(); // Devuelve todos los pasajeros
    }
    async passengerId(id){
        return Pasajero.findAllPk(id); // Devuelve el pasajero con esa id
        
    }
    async newPassenger(body){
        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return Pasajero.create(body); // Crear pasajeros por POSTMAN
        
    }

    async namePassenger(nombre){
        return Pasajero.findOne({
            where: {nombre}
        })
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