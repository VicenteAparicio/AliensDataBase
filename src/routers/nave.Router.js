        
const router = require('express').Router();
const naveController = require('../controllers/nave.controller');



//API CRUD PASAAJERO

// LOS TRAE TODOS
router.get('/', async (req, res) => { 
    try{
        res.json(await pasajeroController.allNaves());
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});
// LOS TRAE POR ID
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        res.json(await pasajeroController.passengerId(id));
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await pasajeroController.newPassenger(body));
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});

// router.update();
// router.delte();

module.exports = router;