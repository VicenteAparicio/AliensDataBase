        
const router = require('express').Router();
const naveController = require('../controllers/nave.controller');



//API CRUD PASAAJERO

// LOS TRAE TODOS
router.get('/', async (req, res) => { 
    try{
        res.json(await naveController.allNaves());
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
        res.json(await naveController.navioId(id));
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        res.json(await naveController.newNavio(body));
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    };
});

router.delete('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        res.json(await naveController.deleteNavio(id));
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

router.put('/', async (req, res)=>{
    try {
        const cuerpoDatos = req.body
        res.json(await naveController.modifyNavio(cuerpoDatos));
        
    } catch (error) {
        return res.status(500).json({
            message: err.message
        }); 
    }
});

module.exports = router;