const pasajeroController = require('./pasajero.controller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "This shit just got serious";

class LoginController {

    async validate(nombreCheck, passwordCheck){
        let pasajero = await pasajeroController.namePassenger(nombreCheck);
        let password = pasajero.password;
        let verify = await bcrypt.compare(passwordCheck, password);

        if (!verify) {
            throw new Error('El password y el email no coinciden');
        }

        let payload = {
            password: pasajero.id,
            createAd: new Date
        };
        return jwt.sign(payload, secret);


    }


}

let loginController = new LoginController();

module.exports = loginController;