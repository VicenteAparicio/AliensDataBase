const router = require('express').Router();
const pasajeroController = require('../controllers/pasajero.controller');
const authenticate = require('../middleware/authenticate');



//API CRUD PASAAJERO

// LOS TRAE TODOS
router.get('/', async (req, res) => { 
    try{
        res.json(await pasajeroController.allPassengers());
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});
// LOS TRAE POR ID
router.get('/:id', authenticate, async (req, res) => {
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

router.delete('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deletePassenger(id));
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.put('/', authenticate, async (req, res)=>{
    try {
        const cuerpoDatos = req.body
        res.json(await pasajeroController.modifyPassenger(cuerpoDatos));
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});



module.exports = router;