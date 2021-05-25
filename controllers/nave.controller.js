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




}


let naveController = new Navio();

module.exports = naveController;