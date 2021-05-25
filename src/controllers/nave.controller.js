const { Nave } = require('../models');




class Navio {

    async allNaves(){
        return Nave.findAll(); // Devuelve todos los pasajeros
    }
    async navioId(id){
        return Nave.findAllPk(id); // Devuelve el pasajero con esa id
        
    }
    async newNavio(body){
        return Nave.create(body); // Creación por POSTMAN
        
    }
    async deleteNavio(id){
        return Nave.destroy({where: {id: id}});
    }
    async modifyNavio(cuerpoDatos){
        return Nave.update(
            //Datos que cambiamos
            {codigo: cuerpoDatos.codigo, tiponave: cuerpoDatos.tiponave, aforo: cuerpoDatos.aforo},
            //Dónde
            {where: {id: cuerpoDatos.id}}
        )
    }
}






let naveController = new Navio();

module.exports = naveController;