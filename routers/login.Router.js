const router = require('express').Router();
const loginController = require('../controllers/login.controller');
const pasajeroController = require('../controllers/pasajero.controller')




router.post('/', async (req, res) => {
    try {
        let nombreCheck = req.body.nombre;
        let passwordCheck = req.body.password;
        let token = await loginController.validate(nombreCheck, passwordCheck);
        let pasajero = await pasajeroController.namePassenger(nombreCheck);
        res.status(200).json({token, pasajero});
        // res.json(await pasajeroController.loginPassenger(body));
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});







module.exports = router;






module.exports = router;